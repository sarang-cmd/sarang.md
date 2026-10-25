// Builds src/data/questions/long.json from the hand-written long-form questions.
// Every question carries a verify() that recomputes its numbers independently.
import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import katex from 'katex';
import * as L from '../source-material/practice/long/lib.mjs';
import { questions as unit4 } from '../source-material/practice/long/unit4.mjs';
import { questions as unit5a } from '../source-material/practice/long/unit5a.mjs';
import { questions as unit5b } from '../source-material/practice/long/unit5b.mjs';

const root = new URL('../', import.meta.url);
const outline = await readFile(new URL('source-material/Full_Course_Outline.md', root), 'utf8');
const outlineCodes = new Set([...outline.matchAll(/^- (SL|AHL)\s+([1-5]\.\d+):/gm)].map((m) => `${m[1]} ${m[2]}`));
const unitSlugs = ['number-and-algebra', 'functions', 'geometry-and-trigonometry', 'statistics-and-probability', 'calculus'];
const all = [...unit4, ...unit5a, ...unit5b];
const out = []; const prompts = new Set(); const ids = new Set(); const covered = {};
for (const q of all) {
  assert(outlineCodes.has(q.code), `Unknown code ${q.code}`);
  assert(/^[a-z0-9-]+$/.test(q.slug) && ['P1', 'P2'].includes(q.paper), `Bad slug or paper ${q.slug}`);
  const id = `aa-${q.paper.toLowerCase()}-long-${q.code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${q.slug}`;
  assert(!ids.has(id) && !prompts.has(q.prompt), `Duplicate ${id}`); ids.add(id); prompts.add(q.prompt);
  const scheme = q.scheme.map(([code, marks, text]) => ({ code, marks, text }));
  const marks = scheme.reduce((n, s) => n + s.marks, 0);
  assert(marks >= 4 && marks <= 20 && scheme.length >= 4, `Mark total or step count out of range in ${id}: ${marks}`);
  assert(/\[\d+\]/.test(q.prompt), `Prompt needs part marks like [3] in ${id}`);
  const declared = [...q.prompt.matchAll(/\[(\d+)\]/g)].reduce((n, m) => n + Number(m[1]), 0);
  assert.equal(declared, marks, `Part marks (${declared}) must equal scheme marks (${marks}) in ${id}`);
  for (const [i, s] of scheme.entries()) assert(/^(M|A|R|AG)\d+$/.test(s.code) && s.text.length >= 5 && s.marks >= 1, `Bad step ${i} in ${id}`);
  for (const text of [q.prompt, ...scheme.map((s) => s.text)]) {
    assert(!text.includes('\u2014') && !text.includes('${') && !text.includes('NaN') && !text.includes('undefined'), `Invalid text in ${id}`);
    for (const m of text.matchAll(/\$([^$\n]+)\$/g)) {
      try { katex.renderToString(m[1], { throwOnError: true, strict: 'ignore' }); } catch (e) { throw new Error(`Invalid TeX in ${id}: ${m[1]}: ${e.message}`); }
    }
    assert((text.match(/\$/g) || []).length % 2 === 0, `Unbalanced $ in ${id}`);
  }
  q.verify(L); // throws if any stated number is wrong
  covered[q.code] = (covered[q.code] || 0) + 1;
  out.push({ id, kind: 'original', paper: q.paper, codes: [q.code], unitSlug: unitSlugs[Number(q.code.match(/\d+/)[0]) - 1],
    title: `${q.code} \u00b7 ${q.slug.replace(/-/g, ' ')}`, marks, prompt: q.prompt, scheme, long: true });
}
await writeFile(new URL('src/data/questions/long.json', root), JSON.stringify(out) + '\n');
const mk = out.reduce((n, q) => n + q.marks, 0);
console.log(`Built ${out.length} verified long-form questions (${mk} marks) over ${Object.keys(covered).length} codes; P1 ${out.filter((q) => q.paper === 'P1').length}, P2 ${out.filter((q) => q.paper === 'P2').length}.`);
