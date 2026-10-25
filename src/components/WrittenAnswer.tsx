import { useEffect, useRef } from 'react';
import { PencilLine } from 'lucide-react';
import { notify } from './ui/toast';
import type { QuestionProgress } from '../lib/profileVault';
import { useDraftStore } from '../store/useDraftStore';
import { examScopedId, isExamActive, useExamStore } from '../store/useExamStore';
import { useProfileStore } from '../store/useProfileStore';

export interface WrittenAnswerProps {
  id: string;
  title: string;
  route: string;
  kind: QuestionProgress['kind'];
  paper?: 'P1' | 'P2' | 'P3';
}
/** Free-form answer for every bank. A timed attempt has its own scoped key so
 * older work remains intact and cannot appear pre-filled in a fresh exam. */
export function WrittenAnswer({ id, title, route, kind, paper }: WrittenAnswerProps) {
  const attempt = useExamStore((state) => state.attempt);
  const examActive = isExamActive(attempt);
  const answerId = examActive && attempt ? examScopedId(attempt, id) : id;
  const draft = useDraftStore((state) => state.written[answerId]);
  const saved = useProfileStore((state) => state.profile?.questions[answerId]?.writtenAnswer);
  const status = useProfileStore((state) => state.status);
  const setDraft = useDraftStore((state) => state.setWritten);
  const setEditing = useDraftStore((state) => state.setEditing);
  const recordAttempt = useExamStore((state) => state.record);
  const text = draft ?? saved ?? '';
  const initialFocus = useRef(text);
  function commit(value: string, key = answerId) {
    if (useProfileStore.getState().status === 'unlocked')
      useProfileStore.getState().recordQuestion({ id: key, title, route, kind, paper, event: 'written', writtenAnswer: value });
  }
  useEffect(() => {
    if (status !== 'unlocked' || text === (saved ?? '')) return;
    const timer = window.setTimeout(() => commit(text), 600);
    return () => window.clearTimeout(timer);
  }, [text, saved, status, answerId]);
  useEffect(() => () => {
    if (useDraftStore.getState().editing === answerId) useDraftStore.getState().setEditing(null);
    const value = useDraftStore.getState().written[answerId];
    if (value !== undefined && useProfileStore.getState().status === 'unlocked')
      useProfileStore.getState().recordQuestion({ id: answerId, title, route, kind, paper, event: 'written', writtenAnswer: value });
  }, [answerId, title, route, kind, paper]);
  return <label className="mt-6 block rounded-xl border border-line bg-surface p-4 sm:p-5">
    <span className="inline-flex items-center gap-2 text-[12px] font-semibold"><PencilLine size={15} aria-hidden="true" /> Your working or final answer</span>
    <span className="mt-1 block text-[11px] leading-relaxed text-muted">{examActive ? 'Exam answer. The independent guide stays hidden until submission.' : 'Write your steps here. Compare with the guide when you are ready.'} {status === 'unlocked' ? 'Saved to your encrypted profile.' : 'Guest draft: this tab only, lost on reload.'}</span>
    <textarea aria-label={`Your answer to ${title}`} value={text} maxLength={1600} rows={5} onFocus={() => { initialFocus.current = text; setEditing(answerId); }} onChange={(event) => {
      const value = event.target.value;
      setDraft(answerId, value);
      if (examActive && value.trim()) recordAttempt(id);
    }} onBlur={() => { const value = useDraftStore.getState().written[answerId] ?? text; commit(value); setEditing(null); if (value !== initialFocus.current) notify({ title: status === 'unlocked' ? 'Answer saved' : 'Draft kept in this tab', message: status === 'unlocked' ? 'Your working was added to your unlocked encrypted profile.' : 'Unlock a profile before reloading to keep this answer.', variant: status === 'unlocked' ? 'success' : 'warning', id: 'written-answer-status' }); }} placeholder="Write your reasoning, calculations and final answer here..." className="mt-3 block min-h-[125px] w-full resize-y rounded-lg border border-line bg-canvas px-3 py-3 text-[13px] leading-relaxed text-ink placeholder:text-faint focus:border-ink" />
    <span className="mt-1 block text-right font-mono text-[10px] text-muted">{text.length}/1600</span>
  </label>;
}
