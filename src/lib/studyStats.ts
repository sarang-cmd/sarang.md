import type { ProfileData } from './profileVault';

function dayKey(value: string): string {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return '';
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function studyStreak(profile: ProfileData | null, now: Date = new Date()): number {
  if (!profile) return 0;
  const days = new Set<string>([
    ...Object.values(profile.notes).flatMap((item) => item.studiedAt ? [dayKey(item.studiedAt)] : []),
    ...Object.values(profile.questions).flatMap((item) => item.markedAt ? [dayKey(item.markedAt)] : []),
    ...profile.focusSessions.map((item) => dayKey(item.startedAt)),
    ...profile.assessments.map((item) => dayKey(item.completedAt)),
  ]);
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  // An unfinished day does not erase yesterday's streak.
  if (!days.has(dayKey(cursor.toISOString()))) cursor.setDate(cursor.getDate() - 1);
  let count = 0;
  for (let step = 0; step < 3650; step++) {
    if (!days.has(dayKey(cursor.toISOString()))) break;
    count++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}
export function earnedPracticeMarks(profile: ProfileData | null): number {
  return profile ? Object.values(profile.questions).reduce((total, item) => total + (item.bestMarks ?? 0), 0) : 0;
}
