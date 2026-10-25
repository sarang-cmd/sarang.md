import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const classic = JSON.parse(await readFile('public/content/question-bank/sequences-and-series.json', 'utf8'));
const supplied = JSON.parse(await readFile('public/content/ib-bank/archive.json', 'utf8'));
const tmp = await mkdtemp(path.join(tmpdir(), 'sarang-bank-inventory-'));
try {
  const outfile = path.join(tmp, 'summary.mjs');
  await build({ entryPoints: ['src/data/practiceInventory.ts'], outfile, platform: 'node', format: 'esm', bundle: true });
  const { mainBank, classicBank, suppliedBank } = await import(pathToFileURL(outfile).href);
  assert.deepEqual(mainBank, { questions: 1069, papers: { P1: 531, P2: 528, P3: 10 } });
  assert.deepEqual(classicBank, { questions: classic.length, marks: classic.reduce((total, item) => total + item.marks, 0) });
  assert.deepEqual(classicBank, { questions: 16, marks: 91 });
  assert.deepEqual(suppliedBank, { questions: supplied.length, marks: supplied.reduce((total, item) => total + item.marks, 0),
    papers: Object.fromEntries(['P1', 'P2'].map((paper) => [paper, {
      questions: supplied.filter((item) => item.paper === paper).length,
      marks: supplied.filter((item) => item.paper === paper).reduce((total, item) => total + item.marks, 0),
    }])) });
  assert.deepEqual(suppliedBank.papers, { P1: { questions: 20, marks: 123 }, P2: { questions: 30, marks: 186 } });
  console.log('Verified selector totals: main 531/528/10, classic 16 questions/91 marks, supplied 20/123 + 30/186.');
} finally { await rm(tmp, { recursive: true, force: true }); }
