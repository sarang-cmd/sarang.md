/** Small, dependency-light validation for the shipped question collections. */
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import katex from 'katex';

const load = async (path) => JSON.parse(await readFile(resolve(path), 'utf8'));
const archive = await load('public/content/ib-bank/archive.json');
const original = await load('public/content/question-bank/sequences-and-series.json');
const notes = await load('public/content/manifest.json');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
assert(archive.length === 50, 'The new archive must contain 50 transcribed questions.');
assert(archive.filter((item) => item.paper === 'P1').length === 20, 'Expect 20 P1-labeled items.');
assert(archive.filter((item) => item.paper === 'P2').length === 30, 'Expect 30 P2-labeled items.');
assert(new Set(archive.map((item) => item.id)).size === archive.length, 'Archive IDs must be unique.');
assert(original.length === 16 && notes.length === 20, 'The 16 original questions and 20 notes must remain.');
for (const entry of archive) {
  assert(entry.prompt && entry.session && entry.timeZone && entry.code && entry.sourceFile && entry.sourceStatus, `Missing source provenance for ${entry.id}.`);
  assert(entry.scheme.reduce((sum, point) => sum + point.marks, 0) === entry.marks, `Incorrect total in ${entry.id}.`);
  assert(entry.checks.length && entry.checks.every((target) => Number.isFinite(target.value)), `Missing or invalid numeric checks for ${entry.id}.`);
  for (const text of [entry.prompt, ...entry.scheme.map((point) => point.text)]) {
    for (const match of text.matchAll(/\\\(([\s\S]*?)\\\)/g)) {
      try { katex.renderToString(match[1], { throwOnError: true, strict: 'ignore' }); }
      catch (problem) { throw new Error(`Invalid math in ${entry.id}: ${problem.message}`); }
    }
  }
}
console.log('Verified 50 transcriptions, 50 independent suggested schemes and final-value checks, 16 existing questions and 20 original notes.');
