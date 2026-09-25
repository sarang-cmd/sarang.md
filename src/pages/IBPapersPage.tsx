import { useMemo, useState } from 'react';
import { AlertCircle, ArrowRight, BookOpen, ChevronDown, ChevronUp, ListFilter, MessageCircleQuestion, RefreshCw, Search as SearchIcon, ShieldAlert, Sparkles } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AnswerChecker } from '../components/AnswerChecker';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { StateView } from '../components/StateView';
import { useIBArchive } from '../hooks/useIBArchive';
import { makePaperVariants } from '../lib/paperVariants';
import { useTutorStore } from '../store/useTutorStore';
import { useProfileStore } from '../store/useProfileStore';
import type { PaperQuestion } from '../types';

function PaperCard({ question, expanded, toggle }: { question: PaperQuestion; expanded: boolean; toggle: () => void }) {
  const { pathname, search } = useLocation();
  const openFor = useTutorStore((state) => state.openFor);
  const profileStatus = useProfileStore((state) => state.status);
  const recordQuestion = useProfileStore((state) => state.recordQuestion);
  const progressId = `${question.kind === 'original' ? 'variant' : 'paper'}:${question.id}`;
  const progress = useProfileStore((state) => state.profile?.questions[progressId]);
  const params = new URLSearchParams(search);
  params.set('paper', question.paper); params.set('q', question.id);
  const route = `${pathname}?${params.toString()}#${question.id}`;
  const kind = question.kind === 'original' ? 'variant' : 'paper';
  const title = `${question.paper} · ${question.topic} · ${question.id}`;
  const studyEvent = (event: 'reveal' | 'attempt' | 'complete') => recordQuestion({ id: progressId, title, route, paper: question.paper, kind, event });
  const [revealed, setRevealed] = useState(false);
  function askTutor() {
    openFor({ key: question.id, route: pathname, subject: 'Mathematics AA HL', title: `${question.paper} · ${question.topic} · ${question.id}`,
      text: question.prompt, sourceStatus: question.sourceStatus, scheme: question.scheme });
  }
  function toggleReveal() {
    if (revealed) { setRevealed(false); return; }
    if (window.confirm('Reveal the independently written worked guide? It is not an official IB mark scheme.')) {
      setRevealed(true);
      if (profileStatus === 'unlocked') studyEvent('reveal');
    }
  }
  return <article id={question.id} className={`scroll-mt-24 overflow-hidden rounded-xl border bg-canvas ${expanded ? 'border-ink/50 shadow-soft' : 'border-line'}`}>
    <button type="button" onClick={toggle} aria-expanded={expanded} aria-controls={`paper-content-${question.id}`} className="flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-surface sm:gap-4 sm:px-6 sm:py-5">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink font-mono text-[10px] font-bold text-canvas">{question.paper}</span>
      <span className="min-w-0 flex-1"><span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-muted">{question.kind === 'transcription' ? `Source question ${question.sourceQuestion} / ${question.sourceFile?.startsWith('Paper 1') ? 'first' : 'second'} attachment` : 'Original practice variant'} · {question.id}</span><span className="mt-1 block text-[16px] font-semibold leading-snug tracking-tight sm:text-[18px]">{question.topic}</span><span className="mt-1.5 block text-[11px] leading-relaxed text-muted">{question.kind === 'transcription' ? `${question.session} · ${question.timeZone} · ${question.code}` : 'No exam session, time zone or paper code'} · {question.marks} marks</span></span>
      {expanded ? <ChevronUp size={17} className="mt-2 shrink-0 text-muted" aria-hidden="true" /> : <ChevronDown size={17} className="mt-2 shrink-0 text-muted" aria-hidden="true" />}
    </button>
    {expanded && <div id={`paper-content-${question.id}`} className="border-t border-line px-4 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
      <div className="mb-5 flex flex-wrap gap-2 text-[10px] font-semibold"><span className="rounded-full border border-line bg-surface px-3 py-1.5">{question.kind === 'transcription' ? 'Transcribed, unverified' : 'Original practice'}</span><span className="rounded-full border border-line bg-surface px-3 py-1.5">{question.marks} marks, as labeled</span><span className="rounded-full border border-line bg-surface px-3 py-1.5">{question.paper === 'P1' ? 'Paper 1 practice' : 'Paper 2 practice'}</span></div>
      <MarkdownArticle source={question.prompt} compact />
      {question.notices.length > 0 && <div className="mt-6 rounded-lg border border-line bg-surface p-4 text-[11px] leading-relaxed"><p className="flex items-center gap-2 font-semibold"><AlertCircle size={15} /> Source transcription notes</p><ul className="mt-2 list-inside list-disc space-y-1.5 text-muted">{question.notices.map((note) => <li key={note}>{note}</li>)}</ul></div>}
      <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-5"><button type="button" onClick={askTutor} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-ink px-4 text-[11px] font-semibold transition-colors hover:bg-ink hover:text-canvas"><MessageCircleQuestion size={15} /> Ask about this question</button><span className="text-[11px] text-muted">Five guidance levels, hints first.</span></div>
      <div className="mt-5"><AnswerChecker key={question.id} questionId={progressId} checks={question.checks} title={title} kind={kind} paper={question.paper} route={route} /></div>
      {profileStatus === 'unlocked' ? <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px]">
        <button type="button" onClick={() => studyEvent('attempt')} className="rounded-full border border-line px-3 py-1.5 font-semibold hover:border-ink">I tried this{progress?.attempts ? ` (${progress.attempts})` : ''}</button>
        <button type="button" aria-pressed={!!progress?.completedAt} onClick={() => studyEvent('complete')} className={`rounded-full border px-3 py-1.5 font-semibold hover:border-ink ${progress?.completedAt ? 'border-ink bg-ink text-canvas' : 'border-line'}`}>{progress?.completedAt ? '✓ Complete' : 'Mark complete'}</button>
      </div> : <p className="mt-4 text-[11px] text-muted"><Link to="/profile" className="underline underline-offset-4">Unlock your profile</Link> to save question progress.</p>}
      <div className="mt-6 border-t border-line pt-5"><button type="button" onClick={toggleReveal} aria-expanded={revealed} aria-controls={`guide-${question.id}`} className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[11px] font-semibold ${revealed ? 'border border-line hover:bg-surface' : 'bg-ink text-canvas hover:opacity-80'}`}>{revealed ? 'Hide independent guide' : 'Reveal independent guide'} <ChevronDown size={14} className={revealed ? 'rotate-180' : ''} /></button><span className="ml-3 inline-block text-[11px] text-muted">Try the question before revealing.</span></div>
      {revealed && <div id={`guide-${question.id}`} role="region" aria-label={`Independent working guide for ${question.id}`} className="mt-5 overflow-hidden rounded-lg border border-line bg-surface"><div className="flex items-start justify-between gap-3 border-b border-line bg-raised p-4"><div><p className="section-label">Original teaching guide</p><p className="mt-1 text-[11px] text-muted">Suggested method, accuracy and reasoning points. Not an official IB mark scheme.</p></div><span className="shrink-0 font-mono text-[11px]">/{question.marks}</span></div><ol className="divide-y divide-line">{question.scheme.map((step, index) => <li key={index} className="grid grid-cols-[45px_minmax(0,1fr)_22px] gap-3 px-4 py-3 text-[11px]"><span className="font-mono font-semibold">{step.code}</span><MarkdownArticle source={step.text} compact scheme /><span className="text-right font-mono text-muted">{step.marks}</span></li>)}</ol></div>}
      {question.kind === 'transcription' && <p className="mt-6 border-t border-line pt-4 text-[11px] leading-relaxed text-muted"><BookOpen size={13} className="mr-1 inline" /> {question.sourceStatus}. Metadata above is preserved from <span className="font-semibold">{question.sourceFile}</span>, question {question.sourceQuestion}. This is not an official copy of an examination paper.</p>}
    </div>}
  </article>;
}

export function IBPapersPage() {
  const { questions, status, retry } = useIBArchive();
  const [params, setParams] = useSearchParams();
  const [paper, setPaper] = useState<PaperQuestion['paper']>(params.get('paper') === 'P2' ? 'P2' : 'P1');
  const [mode, setMode] = useState<'archive' | 'variants'>(params.get('mode') === 'variants' ? 'variants' : 'archive');
  const [seed, setSeed] = useState(() => {
    const candidate = Number(params.get('seed'));
    return Number.isInteger(candidate) && candidate > 0 && candidate <= 2147483647 ? candidate : 2143;
  });
  const [topic, setTopic] = useState('All topics');
  const [query, setQuery] = useState('');
  const variants = useMemo(() => makePaperVariants(seed), [seed]);
  const pool = mode === 'archive' ? questions : variants;
  const topics = useMemo(() => Array.from(new Set(pool.filter((entry) => entry.paper === paper).map((entry) => entry.topic))), [pool, paper]);
  const visible = useMemo(() => pool.filter((entry) => {
    const words = `${entry.topic} ${entry.prompt} ${entry.session ?? ''} ${entry.code ?? ''} ${entry.id}`.toLowerCase();
    return entry.paper === paper && (topic === 'All topics' || topic === entry.topic) && words.includes(query.trim().toLowerCase());
  }), [pool, paper, topic, query]);
  const activeId = params.get('q');
  const active = activeId === 'none' ? undefined : visible.some((entry) => entry.id === activeId) ? activeId : visible[0]?.id;
  const markTotal = visible.reduce((sum, entry) => sum + entry.marks, 0);

  function select(questionId: string) {
    const next = new URLSearchParams(params);
    next.set('paper', paper); next.set('q', questionId === active ? 'none' : questionId);
    setParams(next, { replace: true });
  }
  function setPaperChoice(next: PaperQuestion['paper']) {
    setPaper(next); setTopic('All topics'); setQuery('');
    const updated = new URLSearchParams(); updated.set('paper', next);
    if (mode === 'variants') { updated.set('mode', 'variants'); updated.set('seed', String(seed)); }
    setParams(updated, { replace: true });
  }
  function setModeChoice(next: 'archive' | 'variants') {
    setMode(next); setTopic('All topics'); setQuery('');
    const updated = new URLSearchParams(); updated.set('paper', paper);
    if (next === 'variants') { updated.set('mode', 'variants'); updated.set('seed', String(seed)); }
    setParams(updated, { replace: true });
  }

  return <div className="mx-auto w-full max-w-[1120px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'IB paper practice' }]} />
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="section-label mb-5">Practice / from your two transcriptions</p><h1 className="text-[clamp(2.9rem,5.9vw,5.1rem)] font-semibold leading-[1.04] tracking-[-0.07em]">One paper.<br />One next step<span className="text-faint">.</span></h1><p className="mt-5 max-w-[630px] text-[14px] leading-[1.8] text-muted sm:text-[15px]">Choose a paper, attempt a question, check selected final values, then reveal an independently written guide when you are ready.</p></div><div className="grid min-w-[190px] grid-cols-2 border-t border-line pt-4"><div><strong className="block text-[29px] leading-none tracking-tight">50</strong><span className="mt-1 block text-[11px] text-muted">Transcribed items</span></div><div><strong className="block text-[29px] leading-none tracking-tight">10</strong><span className="mt-1 block text-[11px] text-muted">Fresh variants per set</span></div></div></div>
    <div className="mt-10 rounded-xl border border-line bg-surface p-5 text-[12px] leading-relaxed sm:p-6"><p className="flex items-center gap-2 font-semibold"><ShieldAlert size={16} /> Read before practicing</p><p className="mt-2 max-w-[790px] text-muted">These 50 prompts and their paper, session, time zone, marks and codes come from the Markdown files you supplied, not verified official scans. Older entries with MATHL codes predate the Mathematics AA syllabus. Three entries inside the second attachment identify themselves as P1 and are grouped under P1, with a note on each. Some labels and codes conflict; they are flagged rather than silently corrected. All worked guides and new variants were authored for this app and are not IB mark schemes.</p><Link to="/question-bank" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-ink hover:underline">Want the original sequences and series bank instead? <ArrowRight size={13} /></Link></div>
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5"><div className="inline-flex items-center rounded-full border border-line bg-raised p-1" role="group" aria-label="Choose paper">{(['P1', 'P2'] as const).map((choice) => <button key={choice} type="button" aria-pressed={paper === choice} onClick={() => setPaperChoice(choice)} className={`rounded-full px-5 py-2 text-[12px] font-semibold ${paper === choice ? 'bg-ink text-canvas shadow-sm' : 'text-muted hover:text-ink'}`}>Paper {choice.slice(1)} <span className="ml-1 opacity-65">{questions.filter((item) => item.paper === choice).length || (choice === 'P1' ? 20 : 30)}</span></button>)}</div><div className="inline-flex items-center gap-1" role="group" aria-label="Question source"><button type="button" aria-pressed={mode === 'archive'} onClick={() => setModeChoice('archive')} className={`rounded-full px-4 py-2 text-[11px] font-semibold ${mode === 'archive' ? 'border border-ink bg-ink text-canvas' : 'border border-line text-muted hover:text-ink'}`}>Transcribed questions</button><button type="button" aria-pressed={mode === 'variants'} onClick={() => setModeChoice('variants')} className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[11px] font-semibold ${mode === 'variants' ? 'border border-ink bg-ink text-canvas' : 'border border-line text-muted hover:text-ink'}`}><Sparkles size={13} /> Original variants</button></div></div>
    {mode === 'variants' && <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface px-5 py-4"><p className="max-w-[610px] text-[12px] leading-relaxed text-muted">These are parameterized questions with new values and independently computed answers. No examination session, time zone or code is attributed to them.</p><button type="button" onClick={() => { const fresh = Math.floor(Math.random() * 2147483646) + 1; setSeed(fresh); const updated = new URLSearchParams(); updated.set('paper', paper); updated.set('mode', 'variants'); updated.set('seed', String(fresh)); setParams(updated, { replace: true }); }} className="inline-flex min-h-9 items-center gap-2 rounded-full border border-ink px-3.5 text-[11px] font-semibold hover:bg-ink hover:text-canvas"><RefreshCw size={14} /> Generate a new set</button></div>}
    {mode === 'archive' && status === 'loading' ? <StateView kind="loading" title="Opening the paper bank..." /> : mode === 'archive' && status === 'error' ? <StateView kind="error" title="Could not load paper questions" message="Check the generated paper archive file and try again." onRetry={retry} /> : <>
      <div className="mt-7 grid gap-3 rounded-xl border border-line bg-surface p-4 sm:grid-cols-[minmax(0,1fr)_220px] sm:p-5"><label className="flex h-11 min-w-0 items-center gap-2 rounded-lg border border-line bg-canvas px-3"><SearchIcon size={15} className="shrink-0 text-muted" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search paper questions" placeholder="Search topic, code or text" className="w-full min-w-0 bg-transparent text-[12px] text-ink placeholder:text-faint" /></label><label className="flex h-11 items-center gap-2 rounded-lg border border-line bg-canvas px-3"><ListFilter size={15} className="shrink-0 text-muted" /><select value={topic} onChange={(event) => setTopic(event.target.value)} aria-label="Filter paper questions by topic" className="w-full min-w-0 bg-transparent text-[12px] text-ink"><option>All topics</option>{topics.map((item) => <option key={item}>{item}</option>)}</select></label></div>
      <div className="mb-4 mt-8 flex flex-wrap items-center justify-between gap-2"><span className="section-label">{paper === 'P1' ? 'Paper 1' : 'Paper 2'} / {mode === 'archive' ? 'transcribed archive' : 'original variants'}</span><span className="font-mono text-[10px] uppercase tracking-wider text-muted">{visible.length} questions · {markTotal} labeled marks</span></div>
      {visible.length ? <div className="space-y-3">{visible.map((question) => <PaperCard key={question.id} question={question} expanded={question.id === active} toggle={() => select(question.id)} />)}</div> : <div role="status" className="rounded-xl border border-dashed border-line p-10 text-center text-[13px] text-muted">No matching questions. Try clearing the search or selecting another topic.</div>}
      <p className="mt-7 text-[11px] leading-relaxed text-muted">Paper selection follows each entry's own P1/P2 label, not the attachment it came from. A numeric match in the checker is not an official mark, and no formula booklet was supplied with the question files.</p>
    </>}
  </div>;
}
