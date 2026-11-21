/** Rebuild the user-transcribed paper archive from the two bundled Markdown sources.
 * Source text and metadata are retained as supplied; independent teaching rubrics
 * are in ib-guides.mjs. This is not a collection of authenticated IB paper scans.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { guides } from './ib-guides.mjs';
import { logsGuides, collectedGuides } from './ib-guides-more.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const originals = [];
const warnings = [];
for (const attachment of [1, 2]) {
  const file = `Paper ${attachment} - Questions and Examination Sessions.md`;
  const text = await readFile(resolve(root, 'source-material', file), 'utf8');
  const blocks = text.split(/(?=^## Question \d+\s*$)/m).slice(1);
  if (blocks.length !== (attachment === 1 ? 17 : 33)) throw new Error(`Unexpected question count in ${file}: ${blocks.length}`);
  for (const block of blocks) {
    const n = Number(/^## Question (\d+)/m.exec(block)?.[1]);
    const field = (name) => new RegExp(`^\\*\\*${name}:\\*\\*\\s*(.+)`, 'm').exec(block)?.[1]?.trim();
    const topic = field('Topic');
    const session = field('Examination Session');
    const timeZone = field('Time Zone');
    const paper = field('Paper');
    const code = field('Code');
    const marks = Number(/^\[(\d+)\]$/.exec(field('Marks') ?? '')?.[1]);
    const prompt = block.split(/^\*\*Code:\*\*.*$/m)[1]?.trim().replace(/\n\s*---\s*$/, '').trim();
    if (!n || !topic || !session || !timeZone || !code || !['P1', 'P2'].includes(paper) || !marks || !prompt) {
      throw new Error(`Incomplete metadata in ${file}, question ${n}`);
    }
    const key = `${attachment}-${n}`;
    const guide = guides[key];
    if (!guide || !guide.scheme?.length || !guide.checks?.length) throw new Error(`Missing independent guide or checks for ${key}`);
    const scheme = guide.scheme.map(([code, text, points]) => ({ code, text, marks: points }));
    if (scheme.reduce((sum, step) => sum + step.marks, 0) !== marks) throw new Error(`Suggested points do not add up for ${key}`);
    const notices = [];
    if (paper !== `P${attachment}`) notices.push(`Filed under Paper ${attachment} in the supplied document, but its own metadata says ${paper}. Shown under ${paper}.`);
    const partMarks = [...prompt.matchAll(/\[(\d+)\]/g)].map((match) => Number(match[1]));
    if (partMarks.length > 1 && partMarks.reduce((sum, item) => sum + item, 0) !== marks) {
      notices.push(`The supplied part labels total ${partMarks.reduce((sum, item) => sum + item, 0)} marks, while the supplied question header says ${marks}. This guide uses the header total; neither allocation is verified.`);
    }
    if (key === '1-8') notices.push('The supplied topic says Arithmetic Sequences, but the prompt is about compound interest and binomial expansion.');
    if (key === '2-10') notices.push('The supplied topic says Arithmetic Sequences, but the prompt explicitly describes a geometric sequence.');
    originals.push({
      id: `IB-${attachment}-${String(n).padStart(2, '0')}`,
      sourceQuestion: n, sourceFile: file, paper, topic, marks, session, timeZone, code,
      sourceStatus: 'User-supplied transcription; not independently authenticated',
      prompt, scheme, checks: guide.checks, notices,
    });
  }
}
const unused = Object.keys(guides).filter((key) => !originals.some((item) => item.id === `IB-${key.split('-')[0]}-${key.split('-')[1].padStart(2, '0')}`));
if (unused.length) throw new Error(`Unmatched guide keys: ${unused.join(', ')}`);

// Two further supplied files: "Logs and Proofs Past IB Questions.md" and "Collected Questions.md".
// They carry their own session, time zone and code metadata but no topic, so the topic below is
// assigned from each question's content and every such entry says so.
const extraFiles = [
  { file: 'Logs and Proofs Past IB Questions.md', prefix: 'L', guides: logsGuides },
  { file: 'Collected Questions.md', prefix: 'C', guides: collectedGuides },
];
const normalise = (value) => value.replace(/\s+/g, ' ').trim();
const usedExtraKeys = new Set();
for (const spec of extraFiles) {
  const text = await readFile(resolve(root, 'source-material', spec.file), 'utf8');
  const blocks = text.split(/(?=^### Question \d+)/m).slice(1);
  for (const block of blocks) {
    const n = Number(/^### Question (\d+)/m.exec(block)?.[1]);
    const field = (name) => new RegExp(`^\\*\\*${name}:\\*\\*\\s*(.+)`, 'm').exec(block)?.[1]?.trim() ?? '';
    const key = `${spec.prefix}${n}`;
    const body = block.split(/\*\*Question:\*\*/)[1] ?? '';
    const prompt = (spec.prefix === 'C' ? body.split(/\n\*\*Examination Session:\*\*/)[0] : body.replace(/\n+\s*-{3,}\s*$/, ''))
      // Parts written on separate lines are shown as separate paragraphs.
      .replace(/\n(?=\([a-h]\))/g, '\n\n').trim();
    if (prompt.length < 20) throw new Error(`Could not read the prompt of ${spec.file} question ${n}`);
    const duplicate = originals.find((item) => normalise(item.prompt) === normalise(prompt));
    if (duplicate) {
      usedExtraKeys.add(key);
      duplicate.notices.push(`The same question appears as question ${n} of ${spec.file}; it is listed once here.`);
      continue;
    }
    const guide = spec.guides[key];
    if (!guide) throw new Error(`Missing independent guide for ${spec.file} question ${n}`);
    usedExtraKeys.add(key);
    const statedMarks = Number(/(\d+)/.exec(field('Marks'))?.[1]);
    const marks = guide.scheme.reduce((sum, step) => sum + step[2], 0);
    const code = field('Paper Code');
    if (statedMarks && statedMarks !== marks) throw new Error(`Guide total ${marks} does not match the stated ${statedMarks} marks for ${spec.file} question ${n}`);
    const notices = [...(guide.notices ?? [])];
    notices.push('The supplied file gives no topic; the topic shown was assigned by this app from the question content.');
    if (!field('Marks') || /^N\/?A/i.test(field('Marks')) || /^Not /i.test(field('Marks'))) {
      notices.push(`The supplied file does not state a mark total, so this app assigns ${marks} marks for its own guide.`);
    }
    if (!code) notices.push('The supplied file gives no paper code. Filed under Paper 1 because the questions are non-technology style.');
    originals.push({
      id: `IB-${spec.prefix}-${String(n).padStart(2, '0')}`,
      sourceQuestion: n, sourceFile: spec.file, paper: /HP2/.test(code) ? 'P2' : 'P1',
      topic: guide.topic, marks,
      session: field('Examination Session'), timeZone: field('Time Zone'), code: code || 'No paper code supplied',
      sourceStatus: 'User-supplied transcription; not independently authenticated',
      prompt,
      scheme: guide.scheme.map(([stepCode, text, points]) => ({ code: stepCode, text, marks: points })),
      checks: guide.checks, notices,
    });
  }
}
const unusedExtra = [...Object.keys(logsGuides), ...Object.keys(collectedGuides)].filter((key) => !usedExtraKeys.has(key));
if (unusedExtra.length) throw new Error(`Unmatched guide keys in the extra files: ${unusedExtra.join(', ')}`);
// A code can occur for multiple questions in one session, but reuse across
// different sessions or papers deserves a source-metadata warning.
const tzKey = (value) => (/TZ\s*(\d)/i.exec(value)?.[1] ?? value.replace(/\s+/g, ' ').trim()).toString();
const metaKey = (item) => `${item.session.toLowerCase()}/${tzKey(item.timeZone)}/${item.paper}`;
for (const question of originals) {
  const conflicts = originals.filter((other) => other.id !== question.id && other.code === question.code &&
    metaKey(other) !== metaKey(question));
  if (conflicts.length) {
    question.notices.push(`The supplied code also appears with different session or paper metadata at ${conflicts.map((other) => other.id).join(', ')}. Please verify against an original source.`);
    warnings.push(question.id);
  }
}
if (new Set(originals.map((item) => item.id)).size !== originals.length) throw new Error('Duplicate archive IDs');
const dest = resolve(root, 'public/content/ib-bank');
await mkdir(dest, { recursive: true });
await writeFile(resolve(dest, 'archive.json'), JSON.stringify(originals, null, 2) + '\n');
console.log(`Built ${originals.length} questions (${originals.filter((q) => q.paper === 'P1').length} P1, ${originals.filter((q) => q.paper === 'P2').length} P2) with independently authored study guides.`);
console.log(`Questions carrying source-metadata notices: ${originals.filter((q) => q.notices.length).map((q) => q.id).join(', ')}.`);
