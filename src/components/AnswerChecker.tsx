import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, CircleHelp, RotateCcw } from 'lucide-react';
import { matchesTarget } from '../lib/answerChecker';
import { notify } from './ui/toast';
import type { CheckTarget } from '../types';
import { useProfileStore } from '../store/useProfileStore';
import { useDraftStore } from '../store/useDraftStore';
import { examScopedId, isExamActive, useExamStore } from '../store/useExamStore';
import type { QuestionEvent } from '../store/useProfileStore';

type Grade = 'right' | 'retry' | 'invalid' | 'empty';

export function AnswerChecker({ checks, questionId, title, kind, paper, route }: { checks: CheckTarget[]; questionId: string; title: string; kind: QuestionEvent['kind']; paper: 'P1' | 'P2'; route: string }) {
  const attempt = useExamStore((state) => state.attempt);
  const examActive = isExamActive(attempt);
  const answerId = examActive && attempt ? examScopedId(attempt, questionId) : questionId;
  const savedAnswers = useProfileStore((state) => state.profile?.questions[answerId]?.lastAnswers);
  const draftAnswers = useDraftStore((state) => state.numeric[answerId]);
  const setNumeric = useDraftStore((state) => state.setNumeric);
  const setEditing = useDraftStore((state) => state.setEditing);
  const recordAttempt = useExamStore((state) => state.record);
  const recordQuestion = useProfileStore((state) => state.recordQuestion);
  const [inputs, setInputs] = useState<string[]>(() => checks.map((_, index) => draftAnswers?.[index] ?? savedAnswers?.[index] ?? ''));
  const [grades, setGrades] = useState<Grade[] | null>(null);
  useEffect(() => { setGrades(null); setInputs(checks.map((_, index) =>
    useDraftStore.getState().numeric[answerId]?.[index] ?? useProfileStore.getState().profile?.questions[answerId]?.lastAnswers?.[index] ?? '')); }, [answerId, checks]);
  useEffect(() => {
    if (savedAnswers?.length) setInputs((previous) => previous.some(Boolean) ? previous : checks.map((_, index) => savedAnswers[index] ?? ''));
  }, [savedAnswers, checks]);
  useEffect(() => () => {
    if (useDraftStore.getState().editing === answerId) useDraftStore.getState().setEditing(null);
    const value = useDraftStore.getState().numeric[answerId];
    if (value && useProfileStore.getState().status === 'unlocked')
      useProfileStore.getState().recordQuestion({ id: answerId, title, kind, paper, route, event: 'answers', answers: value, total: checks.length });
  }, [answerId, title, kind, paper, route, checks.length]);

  function saveAnswers(next: string[], event: 'answers' | 'check', matched?: number) {
    setNumeric(answerId, next);
    if (examActive && next.some((value) => value.trim())) recordAttempt(questionId);
    if (useProfileStore.getState().status === 'unlocked')
      recordQuestion({ id: answerId, title, kind, paper, route, event, answers: next, matched, total: checks.length });
  }
  function grade(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (examActive) { saveAnswers(inputs, 'answers'); return; }
    const result: Grade[] = checks.map((check, index) => {
      if (!inputs[index]?.trim()) return 'empty';
      const answer = matchesTarget(inputs[index], check);
      return answer === null ? 'invalid' : answer ? 'right' : 'retry';
    });
    setGrades(result);
    const matched = result.filter((value) => value === 'right').length;
    saveAnswers(inputs, 'check', matched);
    notify({ title: 'Final values checked', message: `${matched}/${checks.length} matched the selected targets. This does not grade your method.`, variant: matched === checks.length && checks.length > 0 ? 'success' : 'default', id: 'numeric-check' });
  }

  return <div className="rounded-xl border border-line bg-surface px-4 py-5 sm:px-6">
    <div className="flex items-center gap-2"><CircleHelp size={17} aria-hidden="true" /><h3 className="text-[14px] font-semibold">{examActive ? 'Record your final values' : 'Check your final values'}</h3></div>
    <p className="mt-2 text-[11px] leading-relaxed text-muted">{examActive ? 'The checker is locked until you submit your timed attempt. Your inputs are saved without feedback.' : 'Checks only selected numeric results, not reasoning, proof, algebraic form or official marks. Fractions, decimals and sqrt(...) work. Blank fields are skipped.'}</p>
    <form className="mt-4" onSubmit={grade}>
      <div className="grid gap-3 sm:grid-cols-2">
        {checks.map((check, index) => <label key={`${questionId}-${index}`} className="block min-w-0 text-[11px] font-semibold leading-relaxed"><span className="block min-h-[32px] text-ink">{check.label}</span><input value={inputs[index] ?? ''} onFocus={() => setEditing(answerId)} onChange={(event) => { const next = inputs.slice(); next[index] = event.target.value; setInputs(next); setNumeric(answerId, next); if (examActive && next[index].trim()) recordAttempt(questionId); setGrades(null); }} onBlur={() => { saveAnswers(inputs, 'answers'); setEditing(null); }} inputMode="decimal" spellCheck={false} autoComplete="off" placeholder="Enter a value" className="mt-1 w-full rounded-lg border border-line bg-canvas px-3 py-2.5 font-mono text-[12px] font-normal text-ink placeholder:font-sans placeholder:text-faint" />{grades && !examActive && <span role="status" className={`mt-1.5 block text-[11px] font-normal ${grades[index] === 'right' ? 'text-ink' : 'text-muted'}`}>{grades[index] === 'right' ? 'Matches this final value.' : grades[index] === 'retry' ? 'Not yet. Recheck the preceding step or rounding.' : grades[index] === 'invalid' ? 'Use a number, fraction or sqrt(...).' : 'No answer entered.'}</span>}</label>)}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">{examActive ? <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted">Answers locked for checking until submission.</span> : <button type="submit" className="inline-flex min-h-9 items-center gap-2 rounded-full bg-ink px-4 text-[11px] font-semibold text-canvas"><CheckCircle2 size={14} /> Check answer</button>}{grades && !examActive && <button type="button" onClick={() => { const blank = checks.map(() => ''); setInputs(blank); setGrades(null); saveAnswers(blank, 'answers'); notify({ title: 'Final values cleared', message: 'Your written working remains unchanged.', variant: 'default', id: 'numeric-check' }); }} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted hover:text-ink"><RotateCcw size={12} /> Clear attempt</button>}</div>
    </form>
  </div>;
}
