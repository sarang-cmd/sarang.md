import { readdir, readFile, mkdir, copyFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

// Runs before dev/build. A static site cannot read arbitrary project-root files
// at runtime, so this copies only explicit "Unit N ..." folders into public/.
const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, 'public', 'content', 'local');
const unitFolderPattern = /^Unit\s+(\d+)\s+(.+)$/i;
const markdownPattern = /\.(md|markdown)$/i;

function frontmatter(source) {
  const match = source.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) return {};
  try {
    const result = parseYaml(match[1]);
    return result && typeof result === 'object' && !Array.isArray(result) ? result : {};
  } catch { return {}; }
}

function inferredCategory(id, slug) {
  if (slug !== 'number-and-algebra') return 'Notes';
  if (id === null || id > 19) return 'Resources';
  if (id <= 1) return 'Foundations';
  if (id <= 8) return 'Sequences & Series';
  if (id <= 12) return 'Proof';
  if (id <= 15) return 'Counting';
  if (id <= 18) return 'Binomial Theorem';
  return 'Synthesis';
}

function inferTitle(file) {
  return file.replace(markdownPattern, '').replace(/^\d{1,3}[_\s-]+/, '')
    .replace(/\s*\(\d+\)$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
    .replace(/\bAnd\b/g, '&');
}

const folders = (await readdir(projectRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && unitFolderPattern.test(entry.name))
  .sort((a, b) => Number(a.name.match(unitFolderPattern)[1]) - Number(b.name.match(unitFolderPattern)[1]));
const catalog = { version: 1, units: [] };
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const folder of folders) {
  const match = folder.name.match(unitFolderPattern);
  const slug = match[2].toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const sourceFolder = path.join(projectRoot, folder.name);
  const files = (await readdir(sourceFolder, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && markdownPattern.test(entry.name) && !/^(readme|changelog|license)\.md$/i.test(entry.name));
  if (!files.length) continue;

  const topics = [];
  const outputFolder = path.join(outputRoot, folder.name);
  await mkdir(outputFolder, { recursive: true });
  for (const file of files) {
    const source = await readFile(path.join(sourceFolder, file.name), 'utf8');
    if (!source.trim()) continue;
    const metadata = frontmatter(source);
    const numberMatch = file.name.match(/^(\d{1,3})[_\s-]/);
    const numericId = numberMatch ? Number(numberMatch[1]) : null;
    const title = typeof metadata.title === 'string' && metadata.title.trim() ? metadata.title.trim() : inferTitle(file.name);
    const category = typeof metadata.category === 'string' && metadata.category.trim()
      ? metadata.category.trim() : inferredCategory(numericId, slug);
    const tags = Array.isArray(metadata.tags)
      ? metadata.tags.filter((tag) => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean)
      : [...new Set(`${category} ${title}`.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2 && word !== 'and'))].slice(0, 6);
    topics.push({
      id: numericId === null ? '' : String(numericId).padStart(2, '0'),
      file: file.name, title, category, tags,
      order: numericId ?? 1000, prev: null, next: null, unitSlug: slug,
    });
    await copyFile(path.join(sourceFolder, file.name), path.join(outputFolder, file.name));
  }
  if (!topics.length) continue;
  topics.sort((a, b) => a.order - b.order || a.file.localeCompare(b.file, undefined, { numeric: true }));
  let resource = 0;
  const ordered = topics.map((topic, index) => ({
    ...topic,
    id: topic.id || `R${++resource}`,
    order: index,
    prev: topics[index - 1]?.file ?? null,
    next: topics[index + 1]?.file ?? null,
  }));
  catalog.units.push({ slug, directory: folder.name, topics: ordered });
}

await writeFile(path.join(outputRoot, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n', 'utf8');
console.log(`Local notes ready: ${catalog.units.length} unit(s), ${catalog.units.reduce((sum, unit) => sum + unit.topics.length, 0)} Markdown file(s).`);
