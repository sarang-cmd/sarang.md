import type { Effort, GuidanceLevel } from './tutorApi';

/** Fixed mathematics-only guidance when no provider key is configured. These
 * prompts never pretend to have read an uploaded picture or an official scheme. */
export function offlineTutorPrompt(title: string, text: string, level: GuidanceLevel, effort: Effort = 2): string {
  const lower = `${title} ${text}`.toLowerCase();
  let questions: readonly string[];
  if (/binomial|expansion|coefficient|constant term/.test(lower)) questions = [
    `For ${title}, which term or power does the question ask you to find?`,
    'Which expression gives a general term of this expansion?',
    'If you choose j factors from the second bracket, what power of x results?',
    'Try setting that power equal to the requested exponent. What equation do you get for j?',
    'Once you have j, which binomial coefficient and sign must you check before simplifying?',
  ];
  else if (/geometric|common ratio|sum to infinity|bounce/.test(lower)) questions = [
    `In ${title}, which quantities are given, and what is being asked for?`,
    'Can you identify a first term and a common ratio from consecutive terms?',
    'Would a term formula, a finite sum or a sum-to-infinity formula fit? Why?',
    'Set up the relevant geometric relationship using the given terms. What unknown remains?',
    'Before your final step, have you checked convergence and any sign restrictions?',
  ];
  else if (/arithmetic|common difference|sum of|multiples/.test(lower)) questions = [
    `For ${title}, what is the first term and how does each next term change?`,
    'Which symbol represents the common difference in your notation?',
    'Can you express the nth term before trying to form a sum?',
    'Write one equation using the given term or sum. What second relation is available?',
    'Check the integer bound and whether the inequality is strict. What is your final step?',
  ];
  else questions = [
    `For ${title}, what is the question asking you to determine?`,
    'Which given value or condition looks most useful to start with?',
    'What formula or strategy could connect that information to the unknown?',
    'Can you write the setup with symbols first, before substituting numbers?',
    'How could you check your units, domain or boundary before giving a final value?',
  ];
  const question = questions[level - 1];
  if (effort === 0) return `Let's take one small step. ${question}`;
  if (effort >= 4) return `Explain your own next idea first. ${question}`;
  return question;
}
