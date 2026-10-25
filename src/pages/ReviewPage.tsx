import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ClipboardCheck, LockKeyhole, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BankNavigation } from '../components/BankNavigation';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { notify } from '../components/ui/toast';
import { PageNavigator } from '../components/PageNavigator';
import { focusPageResults } from '../lib/pagination';
import { matchesTarget } from '../lib/answerChecker';
import { originalExamQuestions } from '../data/originalExam';
import { useQuestionBank } from '../hooks/useQuestionBank';
import { useIBArchive } from '../hooks/useIBArchive';
import { makePaperVariants } from '../lib/paperVariants';
import { requestTutor, providerOptions } from '../lib/tutorApi';
import type { CheckTarget, MarkStep } from '../types';
import type { QuestionProgress } from '../lib/profileVault';
import { useDraftStore } from '../store/useDraftStore';
import { examScopedId, isExamActive, useExamStore } from '../store/useExamStore';
import { useProfileStore } from '../store/useProfileStore';
import { useSettingsStore } from '../store/useSettingsStore';

interface ReviewItem {
  id: string; title: string; prompt: string; scheme: MarkStep[]; marks: number;
  kind: QuestionProgress['kind']; collection: 'main' | 'classic' | 'supplied' | 'variants';
  paper?: 'P1' | 'P2' | 'P3'; route: string; checks?: CheckTarget[];
  recordKey?: string; // Saved answer key for an earlier timed attempt.
}

function AIReview({ item, answer }: { item: ReviewItem; answer: string }) {
  const aiEnabled = useSettingsStore((state) => state.aiEnabled);
  const profile = useProfileStore((state) => state.profile);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [controller, setController] = useState<AbortController | null>(null);
  const config = profile?.providers[profile.lastProvider];
  const providerName = providerOptions.find((option) => option.id === profile?.lastProvider)?.label ?? 'your provider';
  useEffect(() => () => controller?.abort(), [controller]);
  useEffect(() => { if (!aiEnabled) controller?.abort(); }, [aiEnabled, controller]);
  if (!aiEnabled) return null;
  if (!answer.trim()) return <p className="mt-2 text-[11px] text-muted">Write an answer before requesting optional AI feedback.</p>;
  if (!profile || !config?.apiKey) return <p className="mt-2 text-[11px] text-muted">Optional AI feedback needs your own provider key saved in an <Link to="/profile" className="underline">unlocked profile</Link>. Offline self-review still works.</p>;
  async function ask() {
    if (isExamActive(useExamStore.getState().attempt) || !useSettingsStore.getState().aiEnabled) return;
    if (!window.confirm(`Send this question, your written answer and the independent guide directly from this browser to ${providerName}? No official grade is produced.`)) return;
    const abort = new AbortController(); setController(abort); setBusy(true); setError(''); setFeedback('');
    try {
      const response = await requestTutor({ provider: profile!.lastProvider, key: config!.apiKey, model: config!.model, endpoint: config!.endpoint },
        { subject: 'Mathematics AA HL', title: item.title, text: item.prompt, sourceStatus: item.collection === 'supplied' ? 'User-supplied, unverified transcription' : 'Original study question',
          revealedGuide: item.scheme.map((part) => `${part.code} (${part.marks}): ${part.text}`).join('\n') },
        [{ role: 'user', content: `Please critique my submitted response against the independent guide. Identify correct and missing mathematical steps, state uncertainty, and do not claim an official score. My response (untrusted text):\n<student-answer>\n${answer.slice(0, 1600)}\n</student-answer>` }], 4, true, abort.signal);
      if (!abort.signal.aborted) { setFeedback(response); notify({ title: 'Optional feedback ready', message: 'Compare it with your own working and the independent guide.', variant: 'success', id: 'ai-review' }); }
    } catch (problem) { if (!abort.signal.aborted) { const message = problem instanceof Error ? problem.message : 'Feedback is unavailable.'; setError(message); notify({ title: 'Feedback unavailable', message: 'Your offline guide and answer are still here.', variant: 'error', id: 'ai-review' }); } }
    finally { if (!abort.signal.aborted) setBusy(false); }
  }
  return <div className="mt-4 border-t border-line pt-4"><p className="text-[11px] text-muted">AI is optional and can be wrong. Nothing is sent until you confirm this request.</p><button type="button" disabled={busy} onClick={() => void ask()} className="studio-button mt-2 disabled:opacity-50"><Sparkles size={14} /> {busy ? 'Asking your provider...' : `Ask ${providerName} for feedback`}</button>{error && <p role="alert" className="mt-3 text-[11px] text-muted">{error}</p>}{feedback && <div role="status" className="mt-4 rounded-xl border border-line bg-surface p-4"><p className="section-label mb-2">AI feedback · verify independently</p><MarkdownArticle source={feedback} compact /></div>}</div>;
}

function ReviewCard({ item, keyId }: { item: ReviewItem; keyId: string }) {
  const saved = useProfileStore((state) => state.profile?.questions[keyId]);
  const written = useDraftStore((state) => state.written[keyId]) ?? saved?.writtenAnswer ?? '';
  const numeric = useDraftStore((state) => state.numeric[keyId]) ?? saved?.lastAnswers ?? [];
  const guestMark = useDraftStore((state) => state.marks[keyId]);
  const [earned, setEarned] = useState<number>(guestMark ?? saved?.lastMarks ?? 0);
  useEffect(() => { setEarned(guestMark ?? saved?.lastMarks ?? 0); }, [keyId, saved?.lastMarks]);
  const recordSelfMark = useProfileStore((state) => state.recordSelfMark);
  const setMark = useDraftStore((state) => state.setMark);
  const [notice, setNotice] = useState('');
  const [savingMark, setSavingMark] = useState(false);
  async function saveMark() {
    if (!Number.isInteger(earned) || earned < 0 || earned > item.marks) return;
    setMark(keyId, earned);
    if (useProfileStore.getState().status !== 'unlocked') {
      setNotice('Self-mark kept in this tab only. Unlock a profile and save again to keep it.');
      notify({ title: 'Temporary self-mark', message: `${earned}/${item.marks} marks in this tab only.`, variant: 'warning', id: 'self-mark' });
      return;
    }
    setSavingMark(true); setNotice('Encrypting your self-mark...');
    try {
      recordSelfMark({ id: keyId, title: item.title, route: item.route, kind: item.kind, paper: item.paper, earned, available: item.marks });
      await useProfileStore.getState().exportEncrypted();
      useDraftStore.getState().removeMark(keyId);
      setNotice(`Saved ${earned}/${item.marks} to your encrypted profile.`);
      notify({ title: 'Self-mark saved', message: `${earned}/${item.marks} marks are in your encrypted profile.`, variant: 'success', id: 'self-mark' });
    } catch (problem) {
      setNotice(`Not saved to encrypted storage: ${problem instanceof Error ? problem.message : 'Check available browser storage.'}`);
      notify({ title: 'Self-mark not saved', message: 'Your mark is only in this tab. Check Profile for the storage error.', variant: 'error', id: 'self-mark' });
    } finally { setSavingMark(false); }
  }
  const numberResults = item.checks?.map((target, index) => ({ target, text: numeric[index] ?? '', result: (numeric[index] ?? '').trim() ? matchesTarget(numeric[index], target) : null })) ?? [];
  return <article className="rounded-xl border border-line bg-canvas p-5 sm:p-7" id={`review-${keyId.replace(/[^a-zA-Z0-9-]/g, '-')}`}>
    <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="section-label">{item.collection} · {item.paper ? `Paper ${item.paper.slice(1)} · ` : ''}{item.marks} marks</p><h2 className="mt-2 text-[19px] font-semibold tracking-tight">{item.title}</h2></div><Link to={item.route} className="inline-flex items-center gap-1 text-[11px] font-semibold underline">Open question <ArrowRight size={13} /></Link></div>
    <div className="mt-5"><MarkdownArticle source={item.prompt} compact /></div>
    <section className="mt-6 rounded-lg border border-line bg-surface p-4"><h3 className="text-[12px] font-semibold">Your saved working</h3><p className="mt-2 whitespace-pre-wrap text-[12px] leading-relaxed">{written.trim() || 'No written answer recorded for this question.'}</p>{numberResults.some((entry) => entry.text) && <div className="mt-3 border-t border-line pt-3 text-[11px]">{numberResults.map(({ target, text, result }) => <p key={target.label} className="py-1"><strong>{target.label}:</strong> {text || 'blank'} · {result === true ? 'matches final value' : result === false ? 'does not match' : text ? 'could not parse' : 'not entered'}</p>)}<p className="mt-1 text-muted">Numeric matches check selected final values only. They do not award marks for your method.</p></div>}</section>
    <details className="mt-4 rounded-xl border border-line bg-surface" open><summary className="cursor-pointer px-4 py-3 text-[12px] font-semibold">Independent guide · compare all steps (not an IB mark scheme)</summary><ol className="divide-y divide-line border-t border-line">{item.scheme.map((step, index) => <li key={`${index}-${step.code}`} className="grid grid-cols-[38px_minmax(0,1fr)_24px] gap-2 px-4 py-3 text-[11px]"><span className="font-mono">{step.code}</span><MarkdownArticle source={step.text} compact scheme /><span className="text-right font-mono">{step.marks}</span></li>)}</ol></details>
    <div className="mt-5 flex flex-wrap items-center gap-3"><label className="text-[11px] font-semibold">Your self-mark <input type="number" min="0" max={item.marks} value={earned} onChange={(event) => setEarned(Number(event.target.value))} className="ml-2 h-9 w-[72px] rounded-lg border border-line bg-surface px-2 text-[12px]" /> / {item.marks}</label><button type="button" disabled={savingMark || !Number.isInteger(earned) || earned < 0 || earned > item.marks} onClick={() => void saveMark()} className="rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-canvas disabled:opacity-40">{savingMark ? 'Saving...' : 'Save self-mark'}</button>{notice && <span role="status" className="text-[11px] text-muted">{notice}</span>}</div>
    <AIReview item={item} answer={written} />
  </article>;
}

export function ReviewPage() {
  const { questions: classic, status: classicStatus, retry: retryClassic } = useQuestionBank();
  const { questions: supplied, status: suppliedStatus, retry: retrySupplied } = useIBArchive();
  const profile = useProfileStore((state) => state.profile);
  const profileError = useProfileStore((state) => state.error);
  const draft = useDraftStore();
  const attempt = useExamStore((state) => state.attempt);
  const [mode, setMode] = useState<'exam' | 'all'>(attempt?.submittedAt ? 'exam' : 'all');
  useEffect(() => { setMode(attempt?.submittedAt ? 'exam' : 'all'); }, [attempt?.id, attempt?.submittedAt]);
  const [collection, setCollection] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const candidates = useMemo(() => {
    const ids = [...Object.keys(profile?.questions ?? {}), ...Object.keys(draft.written), ...Object.keys(draft.numeric), ...(attempt?.questionIds ?? [])];
    const seeds = [...new Set(ids.map((id) => id.match(/V-P[12]-\d+-(\d+)(?:$|:)/)?.[1]).filter((seed): seed is string => !!seed))]
      .map(Number).filter((seed) => Number.isInteger(seed) && seed > 0 && seed <= 2147483647).slice(0, 125);
    const variants = seeds.flatMap(makePaperVariants);
    const base: ReviewItem[] = [
      ...originalExamQuestions.map((item): ReviewItem => ({ id: item.id, title: item.title, prompt: item.prompt, scheme: item.scheme,
        marks: item.marks, kind: 'original', collection: 'main', paper: item.paper, route: `/practice?paper=${item.paper}&q=${encodeURIComponent(item.id)}` })),
      ...classic.map((item): ReviewItem => ({ id: `original:${item.id}`, title: `${item.id} · ${item.topic}`, prompt: item.prompt, scheme: item.scheme,
        marks: item.marks, kind: 'original', collection: 'classic', route: `/question-bank#${item.id}` })),
      ...supplied.map((item): ReviewItem => ({ id: `paper:${item.id}`, title: `${item.paper} · ${item.topic} · ${item.id}`, prompt: item.prompt, scheme: item.scheme, checks: item.checks,
        marks: item.marks, kind: 'paper', collection: 'supplied', paper: item.paper, route: `/ib-papers?paper=${item.paper}&q=${encodeURIComponent(item.id)}#${item.id}` })),
      ...variants.map((item): ReviewItem => ({ id: `variant:${item.id}`, title: `${item.paper} · ${item.topic} · ${item.id}`, prompt: item.prompt, scheme: item.scheme, checks: item.checks,
        marks: item.marks, kind: 'variant', collection: 'variants', paper: item.paper,
        route: `/ib-papers?paper=${item.paper}&mode=variants&seed=${item.id.split('-').at(-1)}&q=${encodeURIComponent(item.id)}#${item.id}` })),
    ];
    const indexed = new Map(base.map((item) => [item.id, item]));
    const previousAttempts = [...new Set(ids)].flatMap((key): ReviewItem[] => {
      const matched = /^exam:[0-9a-fA-F-]{36}:(.+)$/.exec(key);
      const original = matched && indexed.get(matched[1]);
      return original ? [{ ...original, recordKey: key, title: `${original.title} · Timed attempt` }] : [];
    });
    return [...base, ...previousAttempts];
  }, [classic, supplied, profile?.questions, draft.written, draft.numeric, attempt?.questionIds]);
  const selected = useMemo(() => candidates.filter((item) => {
    if (mode === 'exam' && item.recordKey) return false;
    const id = mode === 'exam' && attempt ? examScopedId(attempt, item.id) : item.recordKey ?? item.id;
    const entry = profile?.questions[id];
    const hasWork = !!(entry?.writtenAnswer?.trim() || entry?.lastAnswers.some(Boolean) || draft.written[id]?.trim() || draft.numeric[id]?.some(Boolean) || entry?.attempts || entry?.lastMarks !== undefined);
    return (mode === 'exam' ? attempt?.questionIds.includes(item.id) : hasWork) &&
      (collection === 'all' || item.collection === collection) && `${item.title} ${item.prompt}`.toLowerCase().includes(query.trim().toLowerCase());
  }), [candidates, mode, attempt, profile?.questions, draft.written, draft.numeric, collection, query]);
  const totalMarks = selected.reduce((sum, item) => sum + item.marks, 0);
  const marked = selected.reduce((sum, item) => {
    const key = mode === 'exam' && attempt ? examScopedId(attempt, item.id) : item.recordKey ?? item.id;
    return sum + (profile?.questions[key]?.lastMarks ?? draft.marks[key] ?? 0);
  }, 0);
  const safePage = Math.min(page, Math.max(0, Math.ceil(selected.length / 12) - 1));
  const paged = selected.slice(safePage * 12, (safePage + 1) * 12);
  const changePage = (next: number) => { setPage(next); focusPageResults('review-results'); };
  useEffect(() => { setPage(0); }, [mode, collection, query]);
  return <div className="mx-auto w-full max-w-[1240px] px-5 pb-28 pt-9 sm:px-9 lg:px-12">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Question Bank', to: '/practice' }, { label: 'Review all answers' }]} />
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-label mb-3">One place for all three collections</p><h1 className="text-[clamp(2.5rem,5vw,4.6rem)] font-semibold tracking-[-0.065em]">Review all answers<span className="text-faint">.</span></h1><p className="mt-3 max-w-[700px] text-[13px] leading-relaxed text-muted">Compare written work with independent guides, check selected numeric final values, then award your own marks. AI feedback is optional, explicit, and never an official grade.</p></div><ClipboardCheck size={34} className="text-muted" aria-hidden="true" /></div>
    <BankNavigation />
    {isExamActive(attempt) ? <div role="status" className="mt-8 rounded-xl border border-line bg-surface p-7"><LockKeyhole size={22} aria-hidden="true" /><h2 className="mt-3 text-[20px] font-semibold">Review is locked during your timed exam.</h2><p className="mt-2 text-[12px] text-muted">Return to the Question Bank and submit when finished. The timer also submits when it runs out.</p><Link to="/practice" className="studio-button mt-5">Return to questions</Link></div> : <>
      {attempt?.submittedAt && <p role="status" className="mt-8 rounded-xl border border-line bg-surface p-4 text-[12px]">Timed attempt {attempt.finishReason === 'time' ? 'ended when time ran out' : 'submitted'} after {attempt.durationMinutes} minutes allowed. {attempt.questionIds.length} question{attempt.questionIds.length === 1 ? '' : 's'} opened with an answer. {useProfileStore.getState().status !== 'unlocked' ? 'Guest responses disappear on reload.' : 'Responses are in your encrypted profile.'}</p>}
      <div className="mt-6 flex flex-wrap items-center gap-2"><div role="group" aria-label="Review scope" className="flex gap-1 rounded-lg border border-line bg-surface p-1"><button type="button" onClick={() => setMode('all')} aria-pressed={mode === 'all'} className={`rounded-md px-4 py-2 text-[11px] font-semibold ${mode === 'all' ? 'bg-ink text-canvas' : 'text-muted'}`}>All saved answers</button>{attempt?.submittedAt && <button type="button" onClick={() => setMode('exam')} aria-pressed={mode === 'exam'} className={`rounded-md px-4 py-2 text-[11px] font-semibold ${mode === 'exam' ? 'bg-ink text-canvas' : 'text-muted'}`}>Last exam attempt</button>}</div><Link to="/settings" className="ml-auto text-[11px] text-muted underline">AI and interface settings</Link></div>
      <div className="mt-5 grid gap-3 rounded-xl border border-line bg-surface p-4 sm:grid-cols-[180px_minmax(0,1fr)]"><label className="text-[11px] font-semibold">Collection<select aria-label="Filter reviewed answers by collection" value={collection} onChange={(event) => setCollection(event.target.value)} className="mt-1.5 h-10 w-full rounded-lg border border-line bg-canvas px-3 text-[12px] text-ink"><option value="all">All collections</option><option value="main">Main Question Bank</option><option value="classic">Classic Unit 1</option><option value="supplied">Supplied transcripts</option><option value="variants">Paper variants</option></select></label><label className="flex items-center gap-2 self-end rounded-lg border border-line bg-canvas px-3"><Search size={15} className="text-muted" /><input type="search" aria-label="Search saved answers" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions you answered" className="h-10 w-full min-w-0 bg-transparent text-[12px] text-ink" /></label></div>
      {profileError && <p role="alert" className="mt-6 rounded-lg border border-line bg-surface p-3 text-[11px]">Encrypted profile save needs attention: {profileError} Marks may only be in this tab until resolved.</p>}
      <div className="mb-4 mt-8 flex flex-wrap items-center justify-between gap-2"><p className="section-label">{selected.length} saved or attempted questions</p><p className="font-mono text-[11px] text-muted">This view: latest self-marks {marked}/{totalMarks} possible, unmarked counted as zero</p></div>
      <p className="mb-4 text-[11px] text-muted">These totals follow the current collection and exam filters, not your whole profile. For every saved self-mark and your best-per-question total, see <Link to="/profile" className="font-semibold underline">Your marked work</Link>.</p>
      <div id="review-results" tabIndex={-1} className="scroll-mt-28 focus:outline-none"><PageNavigator page={safePage} totalItems={selected.length} pageSize={12} label="Saved answers" placement="top" onChange={changePage} /></div>
      {(classicStatus === 'loading' || suppliedStatus === 'loading') && <p role="status" className="mb-3 text-[11px] text-muted">Loading the two archived collections...</p>}
      {(classicStatus === 'error' || suppliedStatus === 'error') && <div role="alert" className="mb-4 rounded-lg border border-line p-4 text-[11px]">Some archives could not load. <button type="button" onClick={() => { retryClassic(); retrySupplied(); }} className="underline">Retry loading</button>.</div>}
      {paged.length ? <div className="space-y-4">{paged.map((item) => { const id = mode === 'exam' && attempt ? examScopedId(attempt, item.id) : item.recordKey ?? item.id; return <ReviewCard key={id} item={item} keyId={id} />; })}</div> : <p role="status" className="rounded-xl border border-dashed border-line p-10 text-center text-[12px] text-muted">No written or numeric answers in this view yet. Open a question in any collection and write your working to see it here.</p>}
      <PageNavigator page={safePage} totalItems={selected.length} pageSize={12} label="Saved answers" onChange={changePage} />
    </>}
  </div>;
}
