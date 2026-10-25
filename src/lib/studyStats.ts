import type { ProfileData } from './profileVault';

/** All dates are grouped by the learner's local calendar day, not UTC midnight. */
export function localDay(value: string | Date): string {
  const date = value instanceof Date ? value : new Date(value);
  if (!Number.isFinite(date.getTime())) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/** Distinct marked questions, studied notes, focus sessions and assessments.
 * Visits, chat messages and numeric matches alone never create study days. */
export function studyActivityByDay(profile: ProfileData | null): Map<string, number> {
  const counts = new Map<string, number>();
  if (!profile) return counts;
  const add = (value?: string) => {
    if (!value) return;
    const day = localDay(value);
    if (day) counts.set(day, (counts.get(day) ?? 0) + 1);
  };
  Object.values(profile.notes).forEach((item) => add(item.studiedAt));
  Object.values(profile.questions).forEach((item) => add(item.markedAt));
  profile.focusSessions.forEach((item) => add(item.startedAt));
  profile.assessments.forEach((item) => add(item.completedAt));
  // Re-marking one question updates markedAt, and unmarking a studied note
  // removes studiedAt. Keep older intentional days represented by the finite
  // encrypted activity log without counting the same day's action twice.
  for (const entry of profile.activity) {
    if ((entry.kind === 'question' && entry.label.startsWith('Self-marked ')) ||
        (entry.kind === 'note' && entry.label.startsWith('Studied '))) {
      const day = localDay(entry.at);
      if (day && !counts.has(day)) counts.set(day, 1);
    }
  }
  return counts;
}

export function studyStreak(profile: ProfileData | null, now: Date = new Date()): number {
  const counts = studyActivityByDay(profile);
  if (!counts.size) return 0;
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // An unfinished day does not erase yesterday's streak.
  if (!counts.has(localDay(cursor))) cursor.setDate(cursor.getDate() - 1);
  let count = 0;
  for (let step = 0; step < 3650; step++) {
    if (!counts.has(localDay(cursor))) break;
    count++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

export function longestStudyStreak(profile: ProfileData | null): number {
  const days = [...studyActivityByDay(profile).keys()].sort();
  let best = 0, current = 0, previous = NaN;
  for (const day of days) {
    const [year, month, date] = day.split('-').map(Number);
    const number = Date.UTC(year, month - 1, date) / 86_400_000;
    current = number === previous + 1 ? current + 1 : 1;
    best = Math.max(best, current);
    previous = number;
  }
  return best;
}

export function selfMarkSummary(profile: ProfileData | null) {
  const questions = Object.values(profile?.questions ?? {}).filter((item) => item.lastMarks !== undefined);
  return {
    questions: questions.length,
    latest: questions.reduce((sum, item) => sum + (item.lastMarks ?? 0), 0),
    best: questions.reduce((sum, item) => sum + (item.bestMarks ?? 0), 0),
    available: questions.reduce((sum, item) => sum + (item.maximumMarks ?? 0), 0),
  };
}

/** Backwards-compatible export. Best per saved question, not lifetime points. */
export function earnedPracticeMarks(profile: ProfileData | null): number {
  return selfMarkSummary(profile).best;
}
