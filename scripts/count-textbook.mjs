// Prints the prose word count of every textbook chapter (inline formula = 1 word, display maths = 0), the same rule check-course.mjs enforces.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
const dir = path.resolve('source-material/textbook');
let total = 0; let short = 0;
for (const file of (await readdir(dir)).filter((f) => f.endsWith('.md')).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const text = await readFile(path.join(dir, file), 'utf8');
  const prose = text.replace(/\$\$[\s\S]+?\$\$/g, ' ').replace(/\$[^$\n]+\$/g, ' formula ');
  const words = prose.match(/[\p{L}\p{N}][\p{L}\p{N}’'-]*/gu)?.length ?? 0;
  total += words; if (words < 2000) short += 1;
  console.log(`${String(words).padStart(5)}  ${words >= 2000 ? 'ok   ' : 'SHORT'} ${file}`);
}
console.log(`total ${total} words; ${short} chapter(s) under 2000`);
