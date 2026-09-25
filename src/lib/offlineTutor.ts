import type { GuidanceLevel, Subject } from './tutorApi';

export function offlineTutorPrompt(subject: Subject, title: string, text: string, level: GuidanceLevel): string {
  const lower = `${title} ${text}`.toLowerCase();
  if (subject === 'Mathematics AA HL') {
    if (/binomial|expansion|coefficient|constant term/.test(lower)) return [
      `For ${title}, which term or power does the question ask you to find?`,
      'Which expression gives a general term of this expansion?',
      'If you choose j factors from the second bracket, what power of x results?',
      'Try setting that power equal to the requested exponent. What equation do you get for j?',
      'Once you have j, which binomial coefficient and sign must you check before simplifying?',
    ][level - 1];
    if (/geometric|common ratio|sum to infinity|bounce/.test(lower)) return [
      `In ${title}, which quantities are already given, and what is being asked for?`,
      'Can you identify a first term and a common ratio from consecutive terms?',
      'Would a term formula, a finite sum or a sum-to-infinity formula fit this request? Why?',
      'Set up the relevant geometric relationship using the given terms. What unknown remains?',
      'Before your final step, have you checked the convergence condition and any sign restrictions?',
    ][level - 1];
    if (/arithmetic|common difference|sum of|multiples/.test(lower)) return [
      `For ${title}, what is the first term and how does each next term change?`,
      'Which symbol represents the common difference in your notation?',
      'Can you express the nth term before trying to form a sum?',
      'Write one equation using the given term or sum. What second relation is available?',
      'Check the integer bound and whether the inequality is strict. What is your final step?',
    ][level - 1];
    return [
      `For ${title}, what is the question asking you to determine?`,
      'Which given value or condition looks most useful to start with?',
      'What formula or strategy could connect that information to the unknown?',
      'Can you write the setup with symbols first, before substituting numbers?',
      'How could you check your units, domain or boundary before giving a final value?',
    ][level - 1];
  }
  if (subject === 'Chemistry HL') return [
    'What substance or process is the question focusing on?',
    'Which given quantity, species or condition controls the outcome?',
    'What balanced relation or chemical principle could you apply?',
    'Write the relevant quantities and units beside the relation. What is still unknown?',
    'Does your result respect conservation, significant figures and the question wording?',
  ][level - 1];
  if (subject === 'Physics HL') return [
    'What physical quantity is the question asking you to find?',
    'Which known values, directions and units belong in a diagram?',
    'What physical principle connects the known values to the unknown?',
    'Write the equation symbolically with a sign convention. Which term needs isolating?',
    'What units and limiting case would test your final step?',
  ][level - 1];
  if (subject === 'English A SL') return [
    'What claim does the passage or prompt invite you to investigate?',
    'Which short phrase in the text would support one possible interpretation?',
    'What literary choice makes that evidence significant?',
    'Try a topic sentence linking that choice to your argument. What would you revise?',
    'Does each claim link back to a precise quotation and its effect?',
  ][level - 1];
  return [
    'Welche Aussage oder Frage im Text möchtest du zuerst klären?',
    'Welche konkrete Textstelle könnte deine Deutung stützen?',
    'Welches sprachliche Mittel ist dort wichtig, und welche Wirkung hat es?',
    'Formuliere einen kurzen Deutungssatz mit einem Beleg. Was würdest du daran verbessern?',
    'Ist deine Argumentation mit einer genauen Textstelle verbunden?',
  ][level - 1];
}
