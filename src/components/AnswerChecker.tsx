import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, CircleHelp, RotateCcw } from 'lucide-react';
import { matchesTarget } from '../lib/answerChecker';
import type { CheckTarget } from '../types';
import { useProfileStore } from '../store/useProfileStore';
import type { QuestionEvent } from '../store/useProfileStore';

type Grade = 'right' | 'retry' | 'invalid' | 'empty';

export function AnswerChecker({ checks, questionId, title, kind, paper, route }: { checks: CheckTarget[]; questionId: string; title: string; kind: QuestionEvent['kind']; paper: 'P1' | 'P2'; route: string }) {
  const savedAnswers = useProfileStore((state) => state.profile?.questions[questionId]?.lastAnswers);
  const recordQuestion = useProfileStore((state) => state.recordQuestion);
  const [inputs, setInputs] = useState<string[]>(() => checks.map((_, index) => savedAnswers?.[index] ?? ''));
  const [grades, setGrades] = useState<Grade[] | null>(null);

  useEffect(() => {
    if (savedAnswers?.length) setInputs((previous) => previous.some(Boolean) ? previous : checks.map((_, index) => savedAnswers[index] ?? ''));
  }, [savedAnswers, checks]);

  function saveAnswers(next: string[], event: 'answers' | 'check', matched?: number) {
    recordQuestion({ id: questionId, title, kind, paper, route, event, answers: next, matched, total: checks.length });
  }
  function grade(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result: Grade[] = checks.map((check, index) => {
      if (!inputs[index]?.trim()) return 'empty';
      const answer = matchesTarget(inputs[index], check);
      return answer === null ? 'invalid' : answer ? 'right' : 'retry';
    });
    setGrades(result);
    saveAnswers(inputs, 'check', result.filter((value) => value === 'right').length);
  }

  return <div className="rounded-xl border border-line bg-surface px-4 py-5 sm:px-6">
    <div className="flex items-center gap-2"><CircleHelp size={17} aria-hidden="true" /><h3 className="text-[14px] font-semibold">Check your final values</h3></div>
    <p className="mt-2 text-[11px] leading-relaxed text-muted">Checks only selected numeric results, not your reasoning, proof, algebraic form or official marks. Fractions, decimals and sqrt(...) work. Blank fields are skipped. Your input stays in this browser.</p>
    <form className="mt-4" onSubmit={grade}>
      <div className="grid gap-3 sm:grid-cols-2">
        {checks.map((check, index) => <label key={`${questionId}-${index}`} className="block min-w-0 text-[11px] font-semibold leading-relaxed"><span className="block min-h-[32px] text-ink">{check.label}</span><input value={inputs[index] ?? ''} onChange={(event) => { const next = inputs.slice(); next[index] = event.target.value; setInputs(next); setGrades(null); }} onBlur={() => saveAnswers(inputs, 'answers')} inputMode="decimal" spellCheck={false} autoComplete="off" placeholder="Enter a value" className="mt-1 w-full rounded-lg border border-line bg-canvas px-3 py-2.5 font-mono text-[12px] font-normal text-ink placeholder:font-sans placeholder:text-faint" />{grades && <span role="status" className={`mt-1.5 block text-[11px] font-normal ${grades[index] === 'right' ? 'text-ink' : 'text-muted'}`}>{grades[index] === 'right' ? 'Matches this final value.' : grades[index] === 'retry' ? 'Not yet. Recheck the preceding step or rounding.' : grades[index] === 'invalid' ? 'Use a number, fraction or sqrt(...).' : 'No answer entered.'}</span>}</label>)}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3"><button type="submit" className="inline-flex min-h-9 items-center gap-2 rounded-full bg-ink px-4 text-[11px] font-semibold text-canvas"><CheckCircle2 size={14} /> Check answer</button>{grades && <button type="button" onClick={() => { const blank = checks.map(() => ''); setInputs(blank); setGrades(null); saveAnswers(blank, 'answers'); }} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted hover:text-ink"><RotateCcw size={12} /> Clear attempt</button>}</div>
    </form>
  </div>;
}
