import { parse as parseYaml } from 'yaml';
import { knownUnits, unit } from '../data/unit';
import type { CourseUnit, StoredLocalLibrary, Topic } from '../types';

const UNIT_FOLDER = /^Unit\s*0?([1-9]\d*)\b/i;
const MARKDOWN_FILE = /\.(md|markdown)$/i;

function fieldsFromFrontmatter(source: string): Record<string, unknown> {
  const match = source.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) return {};
  try {
    const result: unknown = parseYaml(match[1]);
    return result && typeof result === 'object' && !Array.isArray(result) ? result as Record<string, unknown> : {};
  } catch {
    // One malformed YAML header should never prevent importing the other notes.
    return {};
  }
}

function inferredCategory(id: number | null, unitSlug: string): string {
  if (unitSlug !== unit.slug) return 'Notes';
  if (id === null || id > 19) return 'Resources';
  if (id <= 1) return 'Foundations';
  if (id <= 8) return 'Sequences & Series';
  if (id <= 12) return 'Proof';
  if (id <= 15) return 'Counting';
  if (id <= 18) return 'Binomial Theorem';
  return 'Synthesis';
}

function titleFromFilename(filename: string): string {
  return filename.replace(MARKDOWN_FILE, '').replace(/^\d{1,3}[_\s-]+/, '')
    .replace(/\s*\(\d+\)$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
    .replace(/\bAnd\b/g, '&');
}

function directoryForFile(file: File): (typeof knownUnits)[number] {
  const path = file.webkitRelativePath || file.name;
  const match = path.split(/[\\/]/).map((part) => part.match(UNIT_FOLDER)).find(Boolean);
  const known = knownUnits.find((entry) => Number(entry.number) === Number(match?.[1]));
  return known ?? unit;
}

export function localContentKey(unitSlug: string, filename: string): string {
  return `${unitSlug}::${filename}`;
}

/** Read selected files entirely in the browser. No private Markdown is uploaded. */
export async function buildLocalLibrary(selected: File[]): Promise<{ library: StoredLocalLibrary; skipped: number }> {
  const files = selected.filter((file) => MARKDOWN_FILE.test(file.name));
  const hasNamedUnitFolders = files.some((file) => (file.webkitRelativePath || '').split(/[\\/]/).some((part) => UNIT_FOLDER.test(part)));
  const candidates = files.filter((file) => {
    if (hasNamedUnitFolders) return (file.webkitRelativePath || '').split(/[\\/]/).some((part) => UNIT_FOLDER.test(part));
    return !/^(readme|changelog|license)\.md$/i.test(file.name);
  });
  if (!candidates.length) throw new Error('No Markdown files found. Select your Unit 1 Number and Algebra folder or choose .md files.');
  if (candidates.length > 400) throw new Error('Please select at most 400 Markdown files at a time.');

  const contents: Record<string, string> = {};
  const grouped = new Map<string, { definition: (typeof knownUnits)[number]; topics: Topic[] }>();
  let skipped = selected.length - candidates.length;

  for (const file of candidates) {
    if (file.size > 4_000_000) { skipped++; continue; }
    const definition = directoryForFile(file);
    const key = localContentKey(definition.slug, file.name);
    if (Object.hasOwn(contents, key)) { skipped++; continue; }
    let source: string;
    try { source = await file.text(); } catch { skipped++; continue; }
    if (!source.trim()) { skipped++; continue; }

    const metadata = fieldsFromFrontmatter(source);
    const numberMatch = file.name.match(/^(\d{1,3})[_\s-]/);
    const numericId = numberMatch ? Number(numberMatch[1]) : null;
    const title = typeof metadata.title === 'string' && metadata.title.trim() ? metadata.title.trim() : titleFromFilename(file.name);
    const category = typeof metadata.category === 'string' && metadata.category.trim()
      ? metadata.category.trim() : inferredCategory(numericId, definition.slug);
    const tags = Array.isArray(metadata.tags)
      ? metadata.tags.filter((tag): tag is string => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean)
      : [...new Set(`${category} ${title}`.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2 && word !== 'and'))].slice(0, 6);

    const entry: Topic = {
      id: numericId === null ? '' : String(numericId).padStart(2, '0'),
      file: file.name,
      title,
      category,
      tags,
      order: numericId ?? 1000,
      prev: null,
      next: null,
      unitSlug: definition.slug,
    };
    const group = grouped.get(definition.slug) ?? { definition, topics: [] };
    group.topics.push(entry);
    grouped.set(definition.slug, group);
    contents[key] = source;
  }

  if (!grouped.size) throw new Error('The selected files were empty, unreadable, or too large.');
  const units: CourseUnit[] = [];
  for (const { definition, topics } of grouped.values()) {
    topics.sort((a, b) => a.order - b.order || a.file.localeCompare(b.file, undefined, { numeric: true }));
    let resourceNumber = 0;
    const ordered = topics.map((topic, index) => ({
      ...topic,
      id: topic.id || `R${++resourceNumber}`,
      order: index,
      prev: topics[index - 1]?.file ?? null,
      next: topics[index + 1]?.file ?? null,
    }));
    units.push({ ...definition, topics: ordered, origin: 'browser' });
  }
  units.sort((a, b) => Number(a.number) - Number(b.number));
  return { library: { version: 1, importedAt: new Date().toISOString(), units, contents }, skipped };
}

/** Merge topics in filename order; the second list wins when exact filenames match. */
export function mergeTopicLists(previous: Topic[], incoming: Topic[]): Topic[] {
  const byFile = new Map([...previous, ...incoming].map((topic) => [topic.file, topic]));
  const topics = [...byFile.values()].sort((a, b) => {
    const aId = a.file.match(/^(\d{1,3})[_\s-]/);
    const bId = b.file.match(/^(\d{1,3})[_\s-]/);
    return (aId ? Number(aId[1]) : 1000) - (bId ? Number(bId[1]) : 1000)
      || a.file.localeCompare(b.file, undefined, { numeric: true });
  });
  let resource = 0;
  return topics.map((topic, index) => {
    const match = topic.file.match(/^(\d{1,3})[_\s-]/);
    return {
      ...topic,
      id: match ? String(Number(match[1])).padStart(2, '0') : `R${++resource}`,
      order: index,
      prev: topics[index - 1]?.file ?? null,
      next: topics[index + 1]?.file ?? null,
    };
  });
}

/** Add individual Markdown files to an existing browser import; matching names are updated. */
export function mergeLocalLibraries(previous: StoredLocalLibrary, incoming: StoredLocalLibrary): StoredLocalLibrary {
  const byUnit = new Map(previous.units.map((entry) => [entry.slug, entry]));
  for (const added of incoming.units) {
    const existing = byUnit.get(added.slug);
    byUnit.set(added.slug, existing ? { ...existing, topics: mergeTopicLists(existing.topics, added.topics) } : added);
  }
  return {
    version: 1,
    importedAt: incoming.importedAt,
    units: [...byUnit.values()].sort((a, b) => Number(a.number) - Number(b.number)),
    contents: { ...previous.contents, ...incoming.contents },
  };
}
