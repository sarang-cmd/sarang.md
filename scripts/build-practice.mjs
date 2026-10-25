import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import katex from 'katex';
import { families as number } from '../source-material/practice/number.mjs';
import { families as functions } from '../source-material/practice/functions.mjs';
import { families as geometry } from '../source-material/practice/geometry.mjs';
import { families as statistics } from '../source-material/practice/statistics.mjs';
import { families as calculus } from '../source-material/practice/calculus.mjs';

const root = new URL('../', import.meta.url);
const outline = await readFile(new URL('source-material/Full_Course_Outline.md', root), 'utf8');
const codes = [...outline.matchAll(/^- (SL|AHL)\s+([1-5]\.\d+):/gm)].map((match) => `${match[1]} ${match[2]}`);
const groups = [number, functions, geometry, statistics, calculus];
const all = Object.assign({}, ...groups);
assert.equal(codes.length, 83);
assert.equal(Object.keys(all).length, 83);
assert.deepEqual(new Set(Object.keys(all)), new Set(codes), 'Practice families must cover exactly the supplied 83 codes');
const unitSlugs = ['number-and-algebra', 'functions', 'geometry-and-trigonometry', 'statistics-and-probability', 'calculus'];
const records = [];
const prompts = new Set();
// Omit redundant unit coefficients in math notation only. For example, 1x -> x,
// -1x -> -x and 1\\pi -> \\pi. A digit before 1 prevents touching 11x.
const cleanMath = (text) => text.replace(/\$([^$\n]+)\$/g, (_whole, math) =>
  `$${math.replace(/(?<![\d.])1(?=(?:[xyt](?![A-Za-z])|\\(?:pi|sqrt|sin|cos|tan)\b|e\^))/g, '')}$`);
for (const code of codes) {
  const families = all[code];
  assert(families.length >= 3 && new Set(families.map((family) => family.name)).size === families.length,
    `At least three distinct skill families are required for ${code}`);
  for (let index = 0; index < 11; index++) {
    const family = families[index % families.length];
    const variant = Math.floor(index / families.length);
    const raw = family.build(variant);
    const skill = family.name.replace(/-/g, ' ');
    const paper = family.paper === 'P2' || variant % 2 === 1 ? 'P2' : 'P1';
    const id = `aa-${paper.toLowerCase()}-skill-${code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${family.name}-${variant + 1}`;
    assert(/^[a-z0-9-]+$/.test(family.name) && raw.prompt.length > 20 && raw.steps.length >= 3,
      `Incomplete question family ${code} ${family.name}`);
    const problem = cleanMath(raw.prompt);
    assert(!prompts.has(problem), `Repeated question prompt in ${code} ${family.name}`);
    prompts.add(problem);
    const prompt = `**${skill[0].toUpperCase() + skill.slice(1)} | practice variation ${variant + 1}.**\n\n${problem}`;
    const scheme = raw.steps.map(([marks, text], step) => ({ code: `S${step + 1}`, marks, text: cleanMath(text) }));
    const item = { id, kind: 'original', paper, codes: [code], unitSlug: unitSlugs[Number(code.match(/\d+/)[0]) - 1],
      title: `${code} · ${skill} ${variant + 1}`, marks: scheme.reduce((n, entry) => n + entry.marks, 0), prompt, scheme,
      variant: true };
    for (const text of [prompt, ...scheme.map((s) => s.text)]) {
      assert(!text.includes('—') && !text.includes('${') && !text.includes('NaN') && !text.includes('Infinity'), `Invalid text in ${id}`);
      for (const match of text.matchAll(/\$([^$\n]+)\$/g)) {
        try { katex.renderToString(match[1], { throwOnError: true, strict: 'ignore' }); }
        catch (error) { throw new Error(`Invalid TeX in ${id}: ${match[1]}: ${error.message}`); }
      }
    }
    records.push(item);
  }
}
assert.equal(records.length, 913);
assert.equal(new Set(records.map((item) => item.id)).size, 913);
await writeFile(new URL('src/data/questions/expanded.json', root), JSON.stringify(records) + '\n');
console.log(`Generated ${records.length} independently authored, parameterized practice variations from ${Object.values(all).reduce((n, fs) => n + fs.length, 0)} distinct skill families covering ${codes.length} outline codes.`);
