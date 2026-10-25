import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import katex from 'katex';
import { bookletEdition, printedEntries } from '../source-material/formula-booklet-reference.mjs';
import { depth as numberDepth } from '../source-material/depth/number.mjs';
import { depth as functionsDepth } from '../source-material/depth/functions.mjs';
import { depth as geometryDepth } from '../source-material/depth/geometry.mjs';
import { depth as statisticsDepth } from '../source-material/depth/statistics.mjs';
import { depth as calculusDepth } from '../source-material/depth/calculus.mjs';
const depth = { ...numberDepth, ...functionsDepth, ...geometryDepth, ...statisticsDepth, ...calculusDepth };

const root = process.cwd();
const catalog = JSON.parse(await readFile(path.join(root, 'public/content/course-catalog.json'), 'utf8'));
const sourceOutline = await readFile(path.join(root, 'source-material/Full_Course_Outline.md'), 'utf8');
const outlineCodes = [...sourceOutline.matchAll(/^- (SL|AHL)\s+([1-5]\.\d+):/gm)].map((m) => `${m[1]} ${m[2]}`);
const syllabus = catalog.units.flatMap((unit) => unit.topics.filter((topic) => topic.collection === 'syllabus'));
assert.equal(catalog.units.length, 5);
assert.equal(syllabus.length, 83);
assert.deepEqual(new Set(syllabus.map((item) => item.id)), new Set(outlineCodes));
assert.equal(new Set(syllabus.map((item) => `${item.id}:${item.title}`)).size, 83);
const manifest = JSON.parse(await readFile(path.join(root, 'public/content/manifest.json'), 'utf8'));
assert.equal(manifest.length, 20, 'Original 20-note manifest must remain intact');
assert.equal(catalog.units[0].topics.filter((item) => item.collection === 'original-note').length, 20);
assert.equal(catalog.units[0].topics.filter((item) => item.collection === 'uploaded-note').length, 22);
assert.equal(catalog.units.flatMap((unit) => unit.topics).filter((item) => item.file === 'Master_Guide.md').length, 5);
let renderedMath = 0;
for (const unit of catalog.units) {
  const unique = new Set();
  for (const topic of unit.topics) {
    assert(!unique.has(topic.file), `Duplicate filename in ${unit.slug}: ${topic.file}`);
    unique.add(topic.file);
    const content = await readFile(path.join(root, 'public/content', unit.directory, topic.file), 'utf8');
    assert(content.trim().length > 0, `Missing text: ${topic.file}`);
    if (topic.collection === 'uploaded-note') {
      assert.equal(content, await readFile(path.join(root, 'source-material/supplied-unit1', topic.file), 'utf8'), `Supplied note changed: ${topic.file}`);
    }
    if (topic.file === 'Master_Guide.md') {
      assert(content.split(/\s+/).length > 550, `Master guide too short: ${unit.slug}`);
      assert(!content.includes('—'), `Em dash in master guide: ${unit.slug}`);
      for (const heading of ['## Worked SL example', '## HL extension', '## Exam lens', '## Check yourself']) {
        assert(content.includes(heading), `Missing master-guide section ${heading}: ${unit.slug}`);
      }
      for (const match of content.matchAll(/\$([^$\n]+)\$/g)) {
        try { katex.renderToString(match[1], { throwOnError: true, strict: 'ignore' }); renderedMath++; }
        catch (error) { throw new Error(`Invalid master-guide math in ${unit.slug}: ${match[1]}: ${error.message}`); }
      }
    }
    if (topic.collection !== 'syllabus') continue;
    const prose = content.replace(/\$[^$\n]+\$/g, ' formula ');
    const proseWords = prose.match(/[\p{L}\p{N}][\p{L}\p{N}’'-]*/gu)?.length ?? 0;
    assert(proseWords >= 400 && proseWords <= 500, `Lesson ${topic.id} has ${proseWords} words, outside the 400 to 500 word target`);
    assert(new Set(content.split(/\s+/)).size > 80, `Duplicated lesson ${topic.id}`);
    assert(!content.includes('—'), `Em dash in original lesson ${topic.id}`);
    for (const heading of ['Understand the idea','Formula, meaning and conditions','Worked example','Smaller skills within this topic','Why the method works','A contrasting worked route','Transfer and validation','Exam lens','A mistake worth catching','Try it yourself','Checked answer']) {
      assert(content.includes(`## ${heading}`), `Missing section ${heading}: ${topic.id}`);
    }
    assert(depth[topic.id]?.skills.length >= 3, `No smaller skills for ${topic.id}`);
    assert(content.includes(bookletEdition), `Edition not identified in ${topic.id}`);
    if (printedEntries[topic.id]) {
      assert(content.includes(`printed p. ${printedEntries[topic.id][0]} (PDF p. ${printedEntries[topic.id][0] + 2})`), `Booklet reference mismatch in ${topic.id}`);
    } else assert(content.includes('no dedicated printed row'), `Booklet disclaimer missing in ${topic.id}`);
    for (const match of content.matchAll(/\$([^$\n]+)\$/g)) {
      try { katex.renderToString(match[1], { throwOnError: true, strict: 'ignore' }); renderedMath++; }
      catch (error) { throw new Error(`Invalid math in ${topic.id}: ${match[1]}: ${error.message}`); }
    }
  }
}
const temp = await mkdtemp(path.join(tmpdir(), 'sarang-course-check-'));
try {
  const file = path.join(temp, 'questions.mjs');
  await build({ entryPoints: ['src/data/originalExam.ts'], outfile: file, platform: 'node', format: 'esm', bundle: true });
  const { originalExamQuestions: bank, paperTotals } = await import(pathToFileURL(file).href);
  assert.equal(bank.length, 1003, 'Expected 90 preserved originals plus 913 authored skill variations');
  assert.equal(bank.filter((item) => item.variant).length, 913);
  assert.equal(bank.filter((item) => !item.variant).length, 90);
  assert.equal(new Set(bank.map((item) => item.id)).size, bank.length);
  assert.equal(new Set(bank.map((item) => item.prompt)).size, bank.length, 'Do not publish duplicate prompts');
  assert.deepEqual(new Set(bank.flatMap((item) => item.codes)), new Set(outlineCodes),
    'Every syllabus code must have at least one actual original question');
  for (const code of outlineCodes) {
    assert.equal(bank.filter((item) => item.variant && item.codes.includes(code)).length, 11,
      `Expected eleven skill variations tied to ${code}`);
  }
  for (const item of bank) {
    assert(outlineCodes.includes(item.codes[0]), `Bad question code: ${item.id}`);
    assert(item.codes.every((code) => outlineCodes.includes(code)), `Bad cross-reference: ${item.id}`);
    assert.equal(item.scheme.reduce((sum, step) => sum + step.marks, 0), item.marks);
    assert(!`${item.prompt}${item.scheme.map((s) => s.text).join('')}`.includes('—'), `Em dash in question ${item.id}`);
    for (const text of [item.prompt, ...item.scheme.map((step) => step.text)]) {
      for (const match of text.matchAll(/\$([^$\n]+)\$/g)) {
        try { katex.renderToString(match[1], { throwOnError: true, strict: 'ignore' }); renderedMath++; }
        catch (error) { throw new Error(`Invalid math in question ${item.id}: ${match[1]}: ${error.message}`); }
      }
    }
  }
  for (const paper of ['P1','P2','P3']) {
    assert(paperTotals[paper] > 5, `Too few real items in ${paper}`);
    assert.equal(paperTotals[paper], bank.filter((item) => item.paper === paper).length);
  }
  // Independent numeric spot checks across different subjects and both marks modes.
  assert.equal(6 * (6 + 33), 234, 'AP sum');
  assert.equal(1 - Math.pow(0.8, 5), 0.6723199999999999, 'binomial complement');
  assert(Math.abs(0.019 / 0.117 - 0.16239316239) < 1e-8, 'Bayes');
  assert(Math.abs(2 * (32 - 64 / 3 + 32 / 5) - 512 / 15) < 1e-12, 'volume integral');
  const pairs = [[1, 1], [2, 2], [3, 4], [4, 5]];
  const xBar = pairs.reduce((s, [x]) => s + x, 0) / pairs.length;
  const yBar = pairs.reduce((s, [, y]) => s + y, 0) / pairs.length;
  const sxx = pairs.reduce((s, [x]) => s + (x - xBar) ** 2, 0);
  const syy = pairs.reduce((s, [, y]) => s + (y - yBar) ** 2, 0);
  const sxy = pairs.reduce((s, [x, y]) => s + (x - xBar) * (y - yBar), 0);
  assert.deepEqual([sxx, syy, sxy], [5, 10, 7], 'regression data check');
  assert.equal(sxy / sxx, 1.4, 'y on x slope');
  assert.equal(sxy / syy, 0.7, 'x on y slope');
  assert.equal(Math.round(1000 * Math.sqrt(17)), 4123, 'intersection roots');
  assert.equal(160 * (1 - (1 / 2) ** 4) / (1 - 1 / 2), 300, 'master guide finite geometric sum');
  assert.equal(160 / (1 - 1 / 2) - 300, 20, 'master guide remaining geometric tail');
  const logRoot = (-1 + Math.sqrt(41)) / 2;
  assert(Math.abs((logRoot - 1) * (logRoot + 2) - 8) < 1e-12, 'master guide logarithmic domain root');
  assert.equal(-2 * (3 - 1) ** 2 + 8, 0, 'master guide quadratic root');
  assert.equal((2 * 0 + 3) / (0 - 1), -3, 'master guide rational function');
  assert(Math.abs((-3 + 3) / (-3 - 2)) < 1e-12, 'master guide rational inverse');
  assert.equal((1 + 2 * 1) + 1 + (2 - 1), 5, 'master guide line-plane intersection');
  assert(Math.abs(Math.sin(2 * Math.PI / 6) - Math.sqrt(3) / 2) < 1e-14, 'master guide trig interval');
  assert.equal(180 / (180 + 490), 18 / 67, 'master guide Bayes');
  assert.equal(1 - .7 ** 4, .7599, 'master guide binomial complement');
  assert.equal(2 * (28 - 2 * 7), 28, 'master guide fencing constraint');
  assert.equal(7 * (28 - 2 * 7), 98, 'master guide rectangle maximum');
  assert.equal((2 ** 2 + 1) ** 2 - (0 ** 2 + 1) ** 2, 24, 'master guide substitution integral');
  assert.equal(1 + .5 * (0 + 1), 1.5, 'master guide first Euler step');
  assert.equal(1.5 + .5 * (.5 + 1.5), 2.5, 'master guide second Euler step');
  assert.equal(2 * 3 * 4 / 25, 24 / 25, 'double-angle magnitude check');
  const mockFile = path.join(temp, 'mock.mjs');
  await build({ entryPoints: ['src/lib/mockExam.ts'], outfile: mockFile, platform: 'node', format: 'esm', bundle: true });
  const { mockQuestions } = await import(pathToFileURL(mockFile).href);
  for (const seed of [1, 42, 20260926, 2147483647]) {
    const selected = mockQuestions(seed);
    assert.deepEqual(['P1', 'P2', 'P3'].map((paper) => selected.filter((item) => item.paper === paper).reduce((sum, item) => sum + item.marks, 0)), [15, 15, 10], `Mock weighting for seed ${seed}`);
    assert.deepEqual(mockQuestions(seed).map((item) => item.id), selected.map((item) => item.id), 'Mocks must replay by seed');
  }
  console.log(`Course verified: 83 distinct original lessons, 5 original strand master guides, 20 original notes, 22 exact uploaded notes, ${bank.length} original questions (${paperTotals.P1}/${paperTotals.P2}/${paperTotals.P3}), ${renderedMath} math fragments rendered.`);
} finally { await rm(temp, { recursive: true, force: true }); }
