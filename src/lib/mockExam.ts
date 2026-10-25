import { originalExamQuestions } from '../data/originalExam';
import type { AuthoredQuestion, ExamPaper } from '../data/originalExam';

/** IB AA HL component weights in the first-assessment-2021 subject brief. */
export const HL_WEIGHTS = { P1: 30, P2: 30, P3: 20, IA: 20 } as const;
export function mockQuestions(seed: number, onlyPaper?: ExamPaper): AuthoredQuestion[] {
  let state = Math.max(1, Math.floor(seed)) >>> 0;
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  const result: AuthoredQuestion[] = [];
  for (const paper of (onlyPaper ? [onlyPaper] : ['P1', 'P2', 'P3']) as ExamPaper[]) {
    // Preserve the existing multi-step mock inventory and seeded results.
    // Short parameterized skill variations are available in practice filters instead.
    const pool = originalExamQuestions.filter((item) => item.paper === paper && !item.variant);
    for (let index = pool.length - 1; index > 0; index--) {
      const swap = Math.floor(random() * (index + 1));
      [pool[index], pool[swap]] = [pool[swap], pool[index]];
    }
    // A short practice set, not a full IB paper. For a mixed set, the target
    // 15:15:10 models the external component ratio 30:30:20 (IA is separate).
    const target = onlyPaper ? (paper === 'P3' ? 18 : 30) : paper === 'P3' ? 10 : 15;
    // Choose from the shuffled pool by mark total, not by question count.
    // Preserve the seed's order as the tie-breaker among equal-mark sets.
    const totals = new Map<number, AuthoredQuestion[]>([[0, []]]);
    const limit = target + Math.max(...pool.map((item) => item.marks));
    for (const item of pool) {
      for (const [sum, selected] of [...totals]) {
        const next = sum + item.marks;
        if (next <= limit && !totals.has(next)) totals.set(next, [...selected, item]);
      }
    }
    const closest = [...totals.keys()].filter((sum) => sum > 0).sort((a, b) =>
      Math.abs(a - target) - Math.abs(b - target) || Number(b >= target) - Number(a >= target))[0];
    result.push(...(totals.get(closest) ?? []));
  }
  return result;
}
export function freshMockSeed(): number {
  return (crypto.getRandomValues(new Uint32Array(1))[0] % 2147483647) + 1;
}
