import type { MarkStep } from '../../types';

export type ExamPaper = 'P1' | 'P2' | 'P3';
export interface AuthoredQuestion {
  id: string;
  kind: 'original';
  paper: ExamPaper;
  codes: string[];
  unitSlug: string;
  title: string;
  marks: number;
  prompt: string;
  scheme: MarkStep[];
  /** Generated from an original, code-specific worked practice family. */
  variant?: boolean;
}
export type Draft = {
  code: string | string[];
  slug: string;
  prompt: string;
  steps: [number, string][];
};
const units = ['number-and-algebra', 'functions', 'geometry-and-trigonometry', 'statistics-and-probability', 'calculus'];
export function assemble(paper: ExamPaper, rows: Draft[]): AuthoredQuestion[] {
  return rows.map((row) => {
    const codes = Array.isArray(row.code) ? row.code : [row.code];
    const index = Number(codes[0].match(/\d+/)?.[0]) - 1;
    if (!units[index] || !/^[a-z0-9-]+$/.test(row.slug)) throw new Error(`Invalid authored question ${row.slug}`);
    const scheme = row.steps.map(([marks, text], step) => ({ code: `S${step + 1}`, marks, text }));
    const marks = scheme.reduce((sum, entry) => sum + entry.marks, 0);
    if (!marks || marks > 25 || row.prompt.length < 35 || scheme.some((step) => step.marks < 1 || step.text.length < 12)) throw new Error(`Incomplete marking guide ${row.slug}`);
    return { id: `aa-${paper.toLowerCase()}-${row.slug}`, kind: 'original' as const, paper, codes, unitSlug: units[index],
      title: `${codes.join(' + ')} · ${row.slug.replace(/-/g, ' ')}`, marks, prompt: row.prompt, scheme };
  });
}
