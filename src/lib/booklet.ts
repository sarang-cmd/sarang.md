export interface BookletPage { number: number; text: string }
export interface FormulaBooklet { name: string; pages: BookletPage[]; note: string }

export async function readFormulaBooklet(file: File): Promise<FormulaBooklet> {
  if (file.size > 10 * 1024 * 1024) throw new Error('Choose a file smaller than 10 MB.');
  if (/\.pdf$/i.test(file.name)) {
    // Loaded only when someone chooses a PDF. The worker is served from the static build.
    const [{ getDocument, GlobalWorkerOptions }, { default: workerURL }] = await Promise.all([
      import('pdfjs-dist/legacy/build/pdf.mjs'),
      import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
    ]);
    GlobalWorkerOptions.workerSrc = workerURL;
    const document = await getDocument({ data: new Uint8Array(await file.arrayBuffer()), isEvalSupported: false }).promise;
    const pages: BookletPage[] = [];
    let size = 0;
    const limit = Math.min(document.numPages, 60);
    try {
      for (let number = 1; number <= limit && size < 45000; number++) {
        const page = await document.getPage(number);
        const content = await page.getTextContent();
        const text = content.items.map((entry) => 'str' in entry ? `${entry.str}${entry.hasEOL ? '\n' : ' '}` : '').join('').trim();
        if (text) { pages.push({ number, text }); size += text.length; }
        page.cleanup();
      }
    } finally { await document.destroy(); }
    if (!pages.length) throw new Error('No selectable text was found in this PDF. Please supply a text or Markdown version, or OCR it first. No formulas were read.');
    const partial = document.numPages > limit || (size >= 45000 && (pages.at(-1)?.number ?? 0) < limit);
    return { name: file.name, pages, note: partial ? 'Only the first 60 pages or roughly 45,000 characters were read. Check the extracted notation carefully.' : 'Machine-extracted PDF text may reorder equations. Check the notation.' };
  }
  if (!/\.(md|markdown|txt)$/i.test(file.name)) throw new Error('Choose a text, Markdown or PDF formula booklet.');
  const text = (await file.text()).trim();
  if (!text) throw new Error('This booklet file has no text.');
  return { name: file.name, pages: [{ number: 1, text: text.slice(0, 45000) }], note: text.length > 45000 ? 'Only the first 45,000 characters were read.' : 'Text is kept in memory for this visit only.' };
}

export function relevantBookletExcerpt(booklet: FormulaBooklet, query: string): string {
  const words = Array.from(new Set((query.toLowerCase().match(/[\p{L}]{5,}/gu) ?? [])
    .filter((word) => !['which', 'where', 'there', 'about', 'could', 'would', 'their', 'these', 'solve', 'answer', 'paper', 'question'].includes(word)))).slice(0, 35);
  const ranked = booklet.pages.map((page) => ({
    ...page,
    score: words.reduce((score, word) => score + (page.text.toLowerCase().includes(word) ? 1 : 0), 0),
  })).sort((a, b) => b.score - a.score || a.number - b.number).slice(0, 5);
  let remaining = 4400;
  const excerpts: string[] = [];
  for (const page of ranked) {
    if (remaining <= 150) break;
    const slice = page.text.slice(0, Math.min(remaining, 1200));
    excerpts.push(`Page ${page.number}: ${slice}`);
    remaining -= slice.length + 40;
  }
  return `${booklet.name}. Selected machine-extracted passages, not a full audit:\n${excerpts.join('\n\n')}`;
}
