import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, ListFilter, MessageCircleQuestion, NotebookPen, Search as SearchIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTutorStore } from '../store/useTutorStore';
import { useProfileStore } from '../store/useProfileStore';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { StateView } from '../components/StateView';
import { useQuestionBank } from '../hooks/useQuestionBank';
import type { PracticeQuestion } from '../types';

const levels = ['All levels', 'Core', 'Stretch'] as const;
type Level = (typeof levels)[number];

function QuestionCard({ question }: { question: PracticeQuestion }) {
  const [revealed, setRevealed] = useState(false);
  const { pathname } = useLocation();
  const openFor = useTutorStore((state) => state.openFor);
  const profileStatus = useProfileStore((state) => state.status);
  const recordQuestion = useProfileStore((state) => state.recordQuestion);
  const progressId = `original:${question.id}`;
  const progress = useProfileStore((state) => state.profile?.questions[progressId]);
  const studyEvent = (event: 'attempt' | 'reveal' | 'complete') => recordQuestion({ id: progressId, title: `${question.id} · ${question.topic}`, route: `${pathname}#${question.id}`, kind: 'original', event });
  const schemeId = `scheme-${question.id}`;

  return (
    <section id={question.id} aria-labelledby={`heading-${question.id}`} className="scroll-mt-24 rounded-xl border border-line bg-canvas px-5 pb-5 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.05em] text-canvas">{question.id}</span>
          <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-muted">{question.strand}</span>
          <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-muted">{question.level}</span>
        </div>
        <span className="pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">[{question.marks} marks]</span>
      </div>
      <h2 id={`heading-${question.id}`} className="mb-5 mt-6 text-[23px] font-semibold leading-tight tracking-[-0.045em] sm:text-[27px]">{question.topic}</h2>
      <MarkdownArticle source={question.prompt} compact />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
        <button
          type="button"
          aria-expanded={revealed}
          aria-controls={schemeId}
          onClick={() => setRevealed((previous) => { if (!previous && profileStatus === 'unlocked') studyEvent('reveal'); return !previous; })}
          className={`inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[12px] font-semibold transition-colors duration-200 ${revealed ? 'border border-line bg-surface text-ink hover:border-muted' : 'bg-accent text-accent-ink hover:opacity-80'}`}
        >
          {revealed ? 'Hide mark scheme' : 'Reveal mark scheme'} <ChevronDown size={15} className={`transition-transform duration-200 ${revealed ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => openFor({ key: question.id, route: pathname, subject: 'Mathematics AA HL', title: `${question.id} · ${question.topic}`, text: question.prompt, sourceStatus: 'Original practice made for this app', scheme: question.scheme })} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted hover:text-ink"><MessageCircleQuestion size={15} aria-hidden="true" /> Ask about this question</button>
        <span className="text-[11px] text-faint">Try it yourself before revealing.</span>
      </div>
      {profileStatus === 'unlocked' && <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px]">
        <button type="button" onClick={() => studyEvent('attempt')} className="rounded-full border border-line px-3 py-1.5 font-semibold hover:border-ink">I tried this{progress?.attempts ? ` (${progress.attempts})` : ''}</button>
        <button type="button" aria-pressed={!!progress?.completedAt} onClick={() => studyEvent('complete')} className={`rounded-full border px-3 py-1.5 font-semibold hover:border-ink ${progress?.completedAt ? 'border-ink bg-ink text-canvas' : 'border-line'}`}>{progress?.completedAt ? '✓ Complete' : 'Mark complete'}</button>
      </div>}
      {profileStatus !== 'unlocked' && <p className="mt-4 text-[11px] text-muted"><Link to="/profile" className="underline underline-offset-4">Unlock your profile</Link> to keep track of practice.</p>}

      {revealed && <div id={schemeId} role="region" aria-label={`${question.id} mark scheme`} className="mt-7 overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-raised px-4 py-4 sm:px-6">
          <div><p className="section-label">Worked mark scheme</p><p className="mt-1 text-[11px] text-muted">M · method &nbsp; A · accuracy &nbsp; R · reasoning</p></div>
          <span className="font-mono text-[11px] font-semibold">{question.marks} marks</span>
        </div>
        <ol className="divide-y divide-line">
          {question.scheme.map((step, index) => (
            <li key={`${question.id}-${index}`} className="grid grid-cols-[36px_minmax(0,1fr)_28px] items-start gap-3 px-4 py-3.5 sm:grid-cols-[44px_minmax(0,1fr)_32px] sm:gap-4 sm:px-6 sm:py-4">
              <span className="mt-0.5 rounded-full border border-line bg-canvas px-1.5 py-1 text-center font-mono text-[10px] font-semibold">{step.code}</span>
              <MarkdownArticle source={step.text} compact scheme />
              <span className="mt-1 text-right font-mono text-[11px] text-muted">{step.marks}</span>
            </li>
          ))}
        </ol>
        <div className="flex items-center justify-between border-t border-line px-4 py-3 text-[11px] font-semibold sm:px-6"><span>Total</span><span className="font-mono">/{question.marks}</span></div>
      </div>}
    </section>
  );
}

export function QuestionBankPage() {
  const { questions, status, retry } = useQuestionBank();
  const [query, setQuery] = useState('');
  const [strand, setStrand] = useState('All topics');
  const [level, setLevel] = useState<Level>('All levels');
  const strands = useMemo(() => [...new Set(questions.map((question) => question.strand))], [questions]);
  const visible = useMemo(() => questions.filter((question) => {
    const matchesStrand = strand === 'All topics' || question.strand === strand;
    const matchesLevel = level === 'All levels' || question.level === level;
    const haystack = `${question.id} ${question.topic} ${question.strand} ${question.prompt}`.toLowerCase();
    return matchesStrand && matchesLevel && haystack.includes(query.trim().toLowerCase());
  }), [questions, strand, level, query]);
  const totalMarks = questions.reduce((sum, question) => sum + question.marks, 0);
  const visibleMarks = visible.reduce((sum, question) => sum + question.marks, 0);
  const filtersActive = query !== '' || strand !== 'All topics' || level !== 'All levels';

  function resetFilters() { setQuery(''); setStrand('All topics'); setLevel('All levels'); }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Question bank' }]} />
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-[690px]">
          <p className="section-label mb-5">Practice room / sequences & series</p>
          <h1 className="text-[clamp(3rem,5.8vw,5.3rem)] font-semibold leading-[1.06] tracking-[-0.07em]">Practice with<br />purpose<span className="text-faint">.</span></h1>
          <p className="mt-6 max-w-[580px] text-[15px] leading-[1.75] text-muted sm:text-[16px]">Original IB-style questions from first patterns to HL synthesis. Give each one a try, then reveal the mark scheme to see how the marks are earned.</p>
        </div>
        {status === 'ready' && <div className="grid shrink-0 grid-cols-2 gap-5 border-t border-line pt-5 sm:min-w-[220px] sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><div><p className="text-[30px] font-semibold leading-none tracking-[-0.06em]">{questions.length}</p><p className="mt-1.5 text-[11px] text-muted">Questions</p></div><div><p className="text-[30px] font-semibold leading-none tracking-[-0.06em]">{totalMarks}</p><p className="mt-1.5 text-[11px] text-muted">Marks to earn</p></div></div>}
      </div>

      {status === 'loading' ? <StateView kind="loading" title="Loading questions…" /> : status === 'error' ? <StateView kind="error" title="Couldn't load the question bank" message="Check the question-bank JSON file and try again." onRetry={retry} /> : <>
        <Link to="/ib-papers" className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-ink"><span><span className="section-label">A separate practice collection</span><span className="mt-2 block text-[15px] font-semibold">Explore the IB Paper 1 and Paper 2 bank</span><span className="mt-1 block text-[11px] leading-relaxed text-muted">50 user-supplied transcriptions, independently written guides, answer checking and new variants.</span></span><ArrowRight size={17} aria-hidden="true" /></Link>
        <div className="mt-8 rounded-xl border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-2.5"><ListFilter size={17} strokeWidth={1.8} aria-hidden="true" /><h2 className="text-[14px] font-semibold">Find a question</h2></div>
          <div className="mt-4 flex h-11 items-center gap-2.5 rounded-lg border border-line bg-canvas px-3.5 transition-colors focus-within:border-muted focus-within:ring-2 focus-within:ring-ink/15"><SearchIcon size={16} className="shrink-0 text-muted" aria-hidden="true" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search questions" placeholder="Search a topic or question…" className="w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-faint" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear question search" className="text-muted hover:text-ink"><X size={16} aria-hidden="true" /></button>}</div>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Question topics">
            {['All topics', ...strands].map((option) => <button key={option} type="button" aria-pressed={strand === option} onClick={() => setStrand(option)} className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold transition-colors duration-150 ${strand === option ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-muted hover:text-ink'}`}>{option}</button>)}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <div className="flex items-center gap-1 rounded-full border border-line bg-canvas p-1" aria-label="Difficulty">
              {levels.map((option) => <button key={option} type="button" aria-pressed={level === option} onClick={() => setLevel(option)} className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors duration-150 ${level === option ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'}`}>{option}</button>)}
            </div>
            {filtersActive && <button type="button" onClick={resetFilters} className="text-[11px] font-semibold text-muted hover:text-ink hover:underline hover:underline-offset-4">Reset filters</button>}
          </div>
        </div>

        <div className="mb-5 mt-11 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4"><span className="section-label">Your practice set</span><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{visible.length} / {questions.length} questions · {visibleMarks} marks</span></div>
        {visible.length ? <div className="space-y-4">{visible.map((question) => <QuestionCard key={question.id} question={question} />)}</div> : (
          <div className="rounded-xl border border-dashed border-line px-6 py-16 text-center" role="status"><NotebookPen size={25} className="mx-auto mb-4 text-muted" aria-hidden="true" /><h2 className="text-[19px] font-semibold tracking-[-0.03em]">No questions match those filters.</h2><p className="mt-2 text-[13px] text-muted">Try a different search or show every topic.</p><button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-accent px-5 py-2.5 text-[12px] font-semibold text-accent-ink">Show all questions</button></div>
        )}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[11px] leading-relaxed text-muted"><p>Original practice written for this app; not official IB examination material.</p><Link to="/units" className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline hover:underline-offset-4">Back to the notes <ArrowRight size={13} aria-hidden="true" /></Link></div>
      </>}
    </div>
  );
}
