import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { lessons as number } from '../source-material/lessons/number.mjs';
import { lessons as functions } from '../source-material/lessons/functions.mjs';
import { lessons as geometry } from '../source-material/lessons/geometry.mjs';
import { lessons as statistics } from '../source-material/lessons/statistics.mjs';
import { lessons as calculus } from '../source-material/lessons/calculus.mjs';
import { depth as numberDepth } from '../source-material/depth/number.mjs';
import { depth as functionsDepth } from '../source-material/depth/functions.mjs';
import { depth as geometryDepth } from '../source-material/depth/geometry.mjs';
import { depth as statisticsDepth } from '../source-material/depth/statistics.mjs';
import { depth as calculusDepth } from '../source-material/depth/calculus.mjs';
import { bookletNote } from '../source-material/formula-booklet-reference.mjs';

const depth = { ...numberDepth, ...functionsDepth, ...geometryDepth, ...statisticsDepth, ...calculusDepth };

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'public/content');
const definitions = [
  { slug: 'number-and-algebra', directory: 'Unit 1 Number and Algebra', name: 'Number & Algebra', guide: '01_number_and_algebra.md', lessons: number },
  { slug: 'functions', directory: 'Unit 2 Functions', name: 'Functions', guide: '02_functions.md', lessons: functions },
  { slug: 'geometry-and-trigonometry', directory: 'Unit 3 Geometry and Trigonometry', name: 'Geometry & Trigonometry', guide: '03_geometry_trigonometry.md', lessons: geometry },
  { slug: 'statistics-and-probability', directory: 'Unit 4 Statistics and Probability', name: 'Statistics & Probability', guide: '04_statistics_probability.md', lessons: statistics },
  { slug: 'calculus', directory: 'Unit 5 Calculus', name: 'Calculus', guide: '05_calculus.md', lessons: calculus },
];
// Use versioned source material. The ignored uploads/ folder is not present
// in a clean checkout or a source ZIP, so it cannot be a build dependency.
const outline = await readFile(path.join(root, 'source-material/Full_Course_Outline.md'), 'utf8');
const codes = [...outline.matchAll(/^- (SL|AHL)\s+([1-5]\.\d+):\s+(.+?)\s+-\s+(\d+)\s+questions\s*$/gm)]
  .map((match) => ({ code: `${match[1]} ${match[2]}`, title: match[3], referencedCount: Number(match[4]) }));
if (codes.length !== 83) throw new Error(`Expected 83 outline codes; got ${codes.length}`);
const outlineCodes = new Set(codes.map((item) => item.code));
const all = definitions.flatMap((definition) => definition.lessons);
if (all.length !== 83 || new Set(all.map((item) => item[0])).size !== 83 || all.some(([code]) => !outlineCodes.has(code))) throw new Error('Original lesson codes do not exactly cover the 83 outline entries.');
const defaultManifest = JSON.parse(await readFile(path.join(contentRoot, 'manifest.json'), 'utf8'));
if (defaultManifest.length !== 20) throw new Error('The 20 preserved source notes are missing from the old manifest.');
const frontmatterTitle = (source, filename) => {
  const title = source.match(/^title:\s*['"]?(.+?)['"]?\s*$/m)?.[1];
  return (title || source.match(/^#\s+(.+)$/m)?.[1] || filename.replace(/\.md$/, '').replace(/_/g, ' ')).trim().replace(/['"]$/, '');
};
const unit1 = definitions[0];
const catalog = { version: 1, outlineSubtopics: 83, outlineQuestionCountsAreNotIncluded: true, units: [] };

for (const definition of definitions) {
  const folder = path.join(contentRoot, definition.directory);
  await mkdir(folder, { recursive: true });
  const topics = [];
  const master = await readFile(path.join(root, 'source-material/master-guides', definition.guide), 'utf8');
  if (master.includes('—') || master.split(/\s+/).length < 550) throw new Error(`Incomplete or nonconforming master guide: ${definition.guide}`);
  await writeFile(path.join(folder, 'Master_Guide.md'), master);
  topics.push({ id: 'MASTER', file: 'Master_Guide.md', title: `${definition.name} master guide`, category: 'Strand master guide',
    tags: [definition.name.toLowerCase(), 'master', 'guide', 'aa hl', 'aa sl'], order: 0, prev: null, next: null, collection: 'guide' });
  for (const [index, lesson] of definition.lessons.entries()) {
    const [code, title, idea, formula, worked, exam, mistake, check, answer] = lesson;
    if ([idea, formula, worked, exam, mistake, check].some((value) => typeof value !== 'string' || value.trim().length < 10) || typeof answer !== 'string' || answer.trim().length < 8) throw new Error(`Incomplete lesson ${code}`);
    const file = `AA_${code.replace(/\W+/g, '_')}_${title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_$/g, '')}.md`;
    const level = code.startsWith('AHL') ? 'AA HL extension' : 'AA SL foundation (also studied at HL)';
    const extra = depth[code];
    if (!extra || extra.skills.length < 3 || !extra.why || !extra.edge || !extra.connection) throw new Error(`Missing expanded lesson pathways for ${code}`);
    const pathways = extra.skills.map((skill, index) => `${index + 1}. ${skill}`).join('\n');
    const markdown = `# ${title}\n\n> **${code} · ${level}** · Original Sarang.md course lesson, not an IB publication.\n\n## Understand the idea\n\n${idea}\n\n## Formula, meaning and conditions\n\n${formula}\n\n${bookletNote(code)}\n\n## Worked example\n\n${worked}\n\n## Smaller skills within this topic\n\nPractise each skill separately, then combine them in problems:\n\n${pathways}\n\n## Why the method works\n\n${extra.why}\n\n## A contrasting worked route\n\n${extra.edge}\n\n## Transfer and validation\n\n${extra.connection}\n\n## Exam lens\n\n${exam} This is a practice lens, not a prediction of an examination question.\n\n## A mistake worth catching\n\n${mistake}\n\n## Try it yourself\n\n${check}\n\n## Checked answer\n\n${answer}\n\n---\n\n[${definition.name} master guide](/units/${definition.slug}/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)\n`;
    if (markdown.includes('—')) throw new Error(`New lesson contains an em dash: ${code}`);
    await writeFile(path.join(folder, file), markdown);
    topics.push({ id: code, file, title, category: code.startsWith('AHL') ? 'AA HL extension' : 'SL foundations',
      tags: [...new Set([definition.name.toLowerCase(), ...title.toLowerCase().split(/[^a-z]+/).filter((word) => word.length > 3), code.toLowerCase()])],
      order: index, prev: null, next: null, collection: 'syllabus' });
  }
  if (definition.slug === unit1.slug) {
    topics.push(...defaultManifest.map((topic) => ({ ...topic, category: `Original 20 notes · ${topic.category}`, collection: 'original-note' })));
    const uploads = ['00_Master_Index_And_Exam_Strategy (2).md','01_GDC_Essential_Skills (2).md','02_Arithmetic_Sequences (2).md','03_Geometric_Sequences (2).md','04_Series_And_Sigma_Notation (2).md','05_Sum_Of_Arithmetic_Series (2).md','06_Sum_Of_Geometric_Series (2).md','07_Infinite_Geometric_Series (2).md','08_Financial_Applications_Compound_Interest_Depreciation (2).md','09_Proof_Deductive_And_LHS_RHS (2).md','10_Proof_By_Mathematical_Induction (2).md','11_Proof_By_Counterexample (2).md','12_Proof_By_Contradiction (2).md','13_Counting_Fundamental_Principle_And_Factorials (2).md','14_Permutations (2).md','15_Combinations (2).md','16_Pascals_Triangle.md','17_Binomial_Theorem_Positive_Integer_n.md','18_Binomial_Theorem_Rational_n_Extension.md','19_Master_Formula_Sheet_And_Old_Test_Strategy.md','Countdown_Schedule_Thu_to_Mon.md','IB_AAHL_SequencesSeriesCountingBinomial_MasterGuide.md'];
    for (const [index, file] of uploads.entries()) {
      const suppliedPath = path.join(root, 'source-material/supplied-unit1', file);
      const source = await readFile(suppliedPath, 'utf8');
      if (!source.trim()) throw new Error(`Empty supplied note: ${file}`);
      if (topics.some((topic) => topic.file === file)) throw new Error(`Duplicate bundled file ${file}`);
      await copyFile(suppliedPath, path.join(folder, file));
      topics.push({ id: `U${String(index + 1).padStart(2, '0')}`, file, title: frontmatterTitle(source, file), category: 'Your supplied Unit 1 notes',
        tags: [file.toLowerCase(), 'uploaded', 'unit 1'], order: 0, prev: null, next: null, collection: 'uploaded-note' });
    }
    const guideFile = 'Content_Writing_Guide.md';
    await copyFile(path.join(root, 'CONTENT_WRITING_GUIDE.md'), path.join(folder, guideFile));
    topics.push({ id: 'GUIDE', file: guideFile, title: 'Course writing and verification guide', category: 'Editorial guide',
      tags: ['writing', 'guide', 'sources', 'verification'], order: 0, prev: null, next: null, collection: 'guide' });
    const bookletFile = 'FORMULA_BOOKLET_AUDIT.md';
    await copyFile(path.join(root, bookletFile), path.join(folder, bookletFile));
    topics.push({ id: 'BOOKLET', file: bookletFile, title: 'Supplied 2023 HL formula booklet cross-check', category: 'Editorial guide',
      tags: ['booklet', '2023', 'version 1.0', 'printed pages', 'verification'], order: 0, prev: null, next: null, collection: 'guide' });
  }
  const ordered = topics.map((topic, index) => ({ ...topic, order: index,
    prev: topics[index - 1]?.file ?? null, next: topics[index + 1]?.file ?? null }));
  catalog.units.push({ slug: definition.slug, directory: definition.directory, topics: ordered });
}
await writeFile(path.join(contentRoot, 'course-catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`Included AA syllabus: ${all.length} distinct lessons plus ${definitions.length} original strand master guides; preserved 20 original + 22 uploaded notes + editorial guide. Outline's ${codes.reduce((sum, entry) => sum + entry.referencedCount, 0)} quoted questions are NOT bundled.`);
