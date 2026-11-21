import { originalExamQuestions, paperTotals } from './originalExam';

/** The preserved JSON banks have stable counts checked by scripts/check-inventory.mjs.
 * Do not turn the supplied transcriptions into supposedly official papers. */
export const mainBank = { questions: originalExamQuestions.length, papers: paperTotals };
export const classicBank = { questions: 16, marks: 91 };
export const suppliedBank = {
  questions: 77, marks: 519,
  papers: { P1: { questions: 47, marks: 333 }, P2: { questions: 30, marks: 186 } },
};
