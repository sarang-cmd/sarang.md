import { p1 } from './questions/p1';
import { p2 } from './questions/p2';
import { p3 } from './questions/p3';
import { coverageP1, coverageP2 } from './questions/coverage';
import { assemble } from './questions/types';
import expanded from './questions/expanded.json';
import type { AuthoredQuestion, ExamPaper } from './questions/types';

export type { AuthoredQuestion, ExamPaper } from './questions/types';
export const originalExamQuestions: AuthoredQuestion[] = [
  ...assemble('P1', [...p1, ...coverageP1]), ...assemble('P2', [...p2, ...coverageP2]), ...assemble('P3', p3),
  ...(expanded as AuthoredQuestion[]),
];
if (new Set(originalExamQuestions.map((item) => item.id)).size !== originalExamQuestions.length) {
  throw new Error('Original paper question IDs must be unique.');
}
export const paperTotals = Object.fromEntries((['P1','P2','P3'] as const)
  .map((paper) => [paper, originalExamQuestions.filter((item) => item.paper === paper).length])) as Record<ExamPaper, number>;
