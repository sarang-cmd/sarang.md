import { create } from 'zustand';

/** Only timer metadata and public question IDs live in sessionStorage. Answers
 * remain in memory for guests or inside the encrypted profile when unlocked. */
const KEY = 'sarang-md-active-exam-v1';
export interface ExamAttempt {
  id: string;
  startedAt: number;
  endsAt: number;
  durationMinutes: number;
  questionIds: string[];
  submittedAt?: number;
  finishReason?: 'manual' | 'time';
}
interface ExamState {
  attempt: ExamAttempt | null;
  start: (minutes: number) => void;
  record: (questionId: string) => void;
  finish: (reason?: 'manual' | 'time') => void;
  clear: () => void;
}
function persist(attempt: ExamAttempt | null) {
  try {
    if (attempt) sessionStorage.setItem(KEY, JSON.stringify(attempt));
    else sessionStorage.removeItem(KEY);
  } catch { /* Timer continues in memory for this tab. */ }
}
function load(): ExamAttempt | null {
  try {
    const raw = JSON.parse(sessionStorage.getItem(KEY) ?? 'null') as ExamAttempt | null;
    if (!raw || typeof raw.id !== 'string' || !Number.isFinite(raw.startedAt) || !Number.isFinite(raw.endsAt) ||
      !Number.isInteger(raw.durationMinutes) || raw.durationMinutes < 5 || raw.durationMinutes > 300 ||
      !Array.isArray(raw.questionIds) || raw.questionIds.length > 1250 ||
      raw.questionIds.some((id) => typeof id !== 'string' || id.length > 230) ||
      (raw.submittedAt !== undefined && !Number.isFinite(raw.submittedAt))) return null;
    if (!raw.submittedAt && raw.endsAt <= Date.now()) {
      raw.submittedAt = raw.endsAt;
      raw.finishReason = 'time';
      persist(raw);
    }
    return raw;
  } catch { return null; }
}
export const isExamActive = (attempt: ExamAttempt | null) => !!attempt && !attempt.submittedAt;
export const examScopedId = (attempt: ExamAttempt, baseId: string) => `exam:${attempt.id}:${baseId}`;
export const useExamStore = create<ExamState>((set, get) => ({
  attempt: load(),
  start(minutes) {
    if (!Number.isInteger(minutes) || minutes < 5 || minutes > 300 || isExamActive(get().attempt)) return;
    const now = Date.now();
    const attempt: ExamAttempt = { id: crypto.randomUUID(), startedAt: now, endsAt: now + minutes * 60_000,
      durationMinutes: minutes, questionIds: [] };
    persist(attempt); set({ attempt });
  },
  record(questionId) {
    const current = get().attempt;
    if (!current || !isExamActive(current) || current.questionIds.includes(questionId) || current.questionIds.length >= 1250) return;
    if (Date.now() >= current.endsAt) { get().finish('time'); return; }
    const attempt = { ...current, questionIds: [...current.questionIds, questionId] };
    persist(attempt); set({ attempt });
  },
  finish(reason = 'manual') {
    const current = get().attempt;
    if (!isExamActive(current) || !current) return;
    const attempt: ExamAttempt = { ...current, submittedAt: Math.min(Date.now(), current.endsAt), finishReason: reason };
    persist(attempt); set({ attempt });
  },
  clear() { persist(null); set({ attempt: null }); },
}));
