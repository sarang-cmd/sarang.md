import { originalExamQuestions, paperTotals } from './originalExam';

/** The preserved JSON banks have stable counts checked by scripts/check-inventory.mjs.
 * Do not turn the supplied transcriptions into supposedly official papers. */
export const mainBank = { questions: originalExamQuestions.length, papers: paperTotals };
export const classicBank = { questions: 16, marks: 91 };
export const suppliedBank = {
  questions: 50, marks: 309,
  papers: { P1: { questions: 20, marks: 123 }, P2: { questions: 30, marks: 186 } },
};
