import { useEffect, useMemo, useState } from 'react';
import { Check, ClipboardCheck, FileText, Printer, Search, Share2, ShieldCheck, Shuffle } from 'lucide-react';
import { BankNavigation } from '../components/BankNavigation';
import { FilterSelect } from '../components/FilterSelect';
import { FullscreenWorkspace } from '../components/FullscreenWorkspace';
import { OriginalQuestionCard } from '../components/OriginalQuestionCard';
import { PageNavigator } from '../components/PageNavigator';
import { focusPageResults, pageForQuestion, pageFromUrl } from '../lib/pagination';
import { notify } from '../components/ui/toast';
import { PracticeTopicRail } from '../components/PracticeTopicRail';
import { Link, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { useCatalog } from '../context/CatalogContext';
import { originalExamQuestions, paperTotals } from '../data/originalExam';
import type { AuthoredQuestion, ExamPaper } from '../data/originalExam';
import { knownUnits } from '../data/unit';
import { freshMockSeed, HL_WEIGHTS, mockQuestions } from '../lib/mockExam';
import { useProfileStore } from '../store/useProfileStore';
import { examScopedId, isExamActive, useExamStore } from '../store/useExamStore';
import { useSettingsStore, styleFor } from '../store/useSettingsStore';
import { useDraftStore } from '../store/useDraftStore';

function paperFrom(value: string | null): ExamPaper {
  return value === 'P2' || value === 'P3' ? value : 'P1';
}
function shareUrl(path: string): string {
  // HashRouter works on static hosts, including deployments in a subdirectory.
  return `${location.origin}${location.pathname}${location.search}#${path}`;
}
function marksFor(item: AuthoredQuestion, selected?: number[]): number {
  return item.scheme.reduce((total, step, index) => total + (selected?.includes(index) ? step.marks : 0), 0);
}

export function PracticePage() {
  useEffect(() => { document.body.classList.add('practice-print'); return () => document.body.classList.remove('practice-print'); }, []);
  const { syllabusTopics } = useCatalog();
  const [params, setParams] = useSearchParams();
  const requestedQuestion = originalExamQuestions.find((item) => item.id === params.get('q'));
  const selectedPaper = paperFrom(params.get('paper') ?? requestedQuestion?.paper ?? null);
  const seedParam = Number(params.get('mock'));
  const mockSeed = Number.isInteger(seedParam) && seedParam > 0 && seedParam <= 2147483647 ? seedParam : null;
  const [unit, setUnit] = useState('all');
  const [code, setCode] = useState(params.get('code') ?? 'all');
  const [query, setQuery] = useState('');
  const [starredOnly, setStarredOnly] = useState(false);

  const [workFilter, setWorkFilter] = useState<'all' | 'todo' | 'answered'>('all');
  const [sizeFilter, setSizeFilter] = useState<'all' | 'short' | 'long'>('all');
  const [reveal, setReveal] = useState<Record<string, boolean>>({});
  const [selectedSteps, setSelectedSteps] = useState<Record<string, number[]>>({});
  const [notice, setNotice] = useState('');
  const [assessmentName, setAssessmentName] = useState('My practice mock');
  const profile = useProfileStore((state) => state.profile);
  const style = useSettingsStore((state) => styleFor(state, 'practice'));
  const examAttempt = useExamStore((state) => state.attempt);
  const examActive = isExamActive(examAttempt);
  const draftWritten = useDraftStore((state) => state.written);
  const editing = useDraftStore((state) => state.editing);
  const recordManualScore = useProfileStore((state) => state.recordManualScore);
  const addAssessment = useProfileStore((state) => state.addAssessment);
  const mock = useMemo(() => mockSeed ? mockQuestions(mockSeed) : null, [mockSeed]);
  const totalInventory = originalExamQuestions.length;
  const availableTopics = syllabusTopics.filter((topic) => unit === 'all' || topic.unitSlug === unit);
  const visible = useMemo(() => {
    if (mock) return mock;
    const search = query.trim().toLowerCase();
    return originalExamQuestions.filter((item) => {
      const answerKey = examActive && examAttempt ? examScopedId(examAttempt, item.id) : item.id;
      const answered = !!(profile?.questions[answerKey]?.writtenAnswer?.trim() || draftWritten[answerKey]?.trim() || profile?.questions[answerKey]?.lastMarks !== undefined);
      return item.paper === selectedPaper && (unit === 'all' || item.unitSlug === unit) && (code === 'all' || item.codes.includes(code)) &&
        (!starredOnly || profile?.bookmarks.includes(item.id)) &&
        (style === 'old' || workFilter === 'all' || answerKey === editing || (workFilter === 'answered' ? answered : !answered)) &&
        (style === 'old' || sizeFilter === 'all' || (sizeFilter === 'short' ? item.marks <= 4 : item.marks >= 5)) &&
        (!search || `${item.prompt} ${item.codes.join(' ')} ${item.title}`.toLowerCase().includes(search));
    });
  }, [mock, selectedPaper, unit, code, starredOnly, profile?.bookmarks, profile?.questions, draftWritten, editing, query, examActive, examAttempt, style, workFilter, sizeFilter]);
  const urlCode = params.get('code') ?? 'all';
  // Only synchronize a restored deep link, never rewrite history during render.
  useEffect(() => { if (urlCode !== code) setCode(urlCode); }, [urlCode]);
  function clearQuestionPage() {
    const next = new URLSearchParams(params);
    if (!next.has('q') && !next.has('page')) return;
    next.delete('q'); next.delete('page');
    setParams(next, { replace: true });
  }
  const pageSize = style === 'new' ? 10 : 80;
  const resultPage = pageForQuestion(visible, params.get('q'), pageSize, (item) => item.id) ?? pageFromUrl(params.get('page'), visible.length, pageSize);
  const pagedItems = mock ?? visible.slice(resultPage * pageSize, (resultPage + 1) * pageSize);
  const listItems = pagedItems;
  const newPageItems = pagedItems;
  const active = visible.find((item) => item.id === params.get('q')) ?? pagedItems[0];
  const activeLesson = active && syllabusTopics.find((topic) => active.codes.includes(topic.id));
  const focusedQuestionId = params.get('q');
  useEffect(() => {
    if (!focusedQuestionId || !visible.some((item) => item.id === focusedQuestionId)) return;
    const frame = requestAnimationFrame(() => document.getElementById(focusedQuestionId)?.scrollIntoView({ behavior: 'auto', block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [focusedQuestionId, resultPage, style, code, unit]);
  const mockMarks = mock?.reduce((sum, item) => sum + item.marks, 0) ?? 0;
  const awardedMock = mock?.reduce((sum, item) => sum + marksFor(item, selectedSteps[item.id]), 0) ?? 0;

  function goQuestion(id: string) {
    const next = new URLSearchParams(params);
    next.set('q', id);
    if (!mock) next.set('paper', selectedPaper);
    const index = visible.findIndex((item) => item.id === id);
    if (index >= 0) { const target = Math.floor(index / pageSize); if (target) next.set('page', String(target + 1)); else next.delete('page'); }
    setParams(next);
  }
  function choosePage(target: number) {
    const next = new URLSearchParams(params);
    next.delete('q');
    if (target) next.set('page', String(target + 1)); else next.delete('page');
    setParams(next);
    focusPageResults('main-question-results');
  }
  function selectCode(value: string) {
    setCode(value);
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete('code'); else next.set('code', value);
    next.delete('q'); next.delete('page');
    setParams(next, { replace: true });
  }
  function choosePaper(paper: ExamPaper) {
    const next = new URLSearchParams(); next.set('paper', paper);
    setCode('all'); setUnit('all'); setQuery(''); setStarredOnly(false);
    setParams(next);
  }
  function startMock() {
    const seed = freshMockSeed();
    setCode('all'); setUnit('all'); setQuery(''); setStarredOnly(false);
    setSelectedSteps({}); setReveal({}); setNotice('');
    setParams({ mock: String(seed) });
    notify({ title: 'New mock ready', message: 'A short 15:15:10-mark practice set is ready. It is not an official exam.', variant: 'success', id: 'practice-mock' });
  }
  async function copyLink(path: string) {
    try { await navigator.clipboard.writeText(shareUrl(path)); setNotice('Link copied. It includes content IDs or the mock seed, not your private answers.'); notify({ title: 'Link copied', message: 'Only question IDs or a mock seed are in the link, never your answers.', variant: 'success', id: 'practice-share' }); }
    catch { setNotice('Clipboard unavailable. Copy the URL from the browser address bar instead.'); notify({ title: 'Could not copy', message: 'Copy the URL from your browser address bar instead.', variant: 'error', id: 'practice-share' }); }
  }
  function recordAssessment() {
    if (!mock || !profile) { setNotice('Unlock your encrypted profile before saving an assessment.'); notify({ title: 'Profile locked', message: 'Unlock a profile before saving an assessment.', variant: 'warning', id: 'practice-assessment' }); return; }
    for (const item of mock) if (selectedSteps[item.id]) recordManualScore({ id: item.id, title: item.title, paper: item.paper, earned: marksFor(item, selectedSteps[item.id]), available: item.marks });
    const name = assessmentName.trim().slice(0, 120) || 'Practice mock';
    addAssessment({ id: crypto.randomUUID(), name, paper: 'mixed', source: 'mock', earned: awardedMock, available: mockMarks,
      questionIds: mock.map((item) => item.id), completedAt: new Date().toISOString(), seed: mockSeed ?? undefined });
    setNotice(`Self-reported assessment saved: ${awardedMock}/${mockMarks}. Unmarked steps counted as zero.`);
    notify({ title: 'Mock assessment saved', message: `${awardedMock}/${mockMarks} self-awarded marks in your encrypted profile.`, variant: 'success', id: 'practice-assessment' });
  }

  return <div className={`mx-auto w-full px-5 pb-28 pt-10 sm:px-9 lg:px-12 ${style === 'new' ? 'max-w-[1540px] sm:pt-10' : 'max-w-[1280px] sm:pt-14 xl:px-16'}`}>
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Question Bank' }]} />
    <div className={`flex flex-wrap items-end justify-between gap-7 border-b border-line ${style === 'new' ? 'pb-5' : 'pb-10'}`}>
      <div><p className="section-label mb-4">AA HL + SL / MAIN QUESTION BANK</p><h1 className={`font-semibold leading-[1.05] tracking-[-0.07em] ${style === 'new' ? 'text-[clamp(2.6rem,4vw,3.6rem)]' : 'text-[clamp(2.8rem,6vw,5rem)]'}`}>Question Bank<span className="text-faint">.</span></h1>
        <p className={`${style === 'new' ? 'mt-2' : 'mt-5'} max-w-[710px] text-[13px] leading-[1.7] text-muted`}>{style === 'new' ? 'Explore 1,003 original AA paper-style questions. Choose a paper and topic, write your working, then compare with independent guides. Classic and supplied items stay in separate collections.' : 'The main collection of 1,003 independently authored AA paper-style questions. Browse by paper and syllabus topic, write your work, then compare with independent guides. Classic and supplied collections are accessible in the same bank below, not mixed into this main inventory.'}</p>{style === 'new' && <button type="button" onClick={() => document.querySelector('[data-question-workspace]')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="mt-3 text-[11px] font-semibold underline underline-offset-4">Jump to questions ↓</button>}</div>
      <div className="grid grid-cols-3 gap-5 font-mono text-[11px] text-muted"><span><strong className="block text-[27px] text-ink">{paperTotals.P1}</strong>Paper 1</span><span><strong className="block text-[27px] text-ink">{paperTotals.P2}</strong>Paper 2</span><span><strong className="block text-[27px] text-ink">{paperTotals.P3}</strong>Paper 3</span></div>
    </div>
    <BankNavigation />
    <div className={`flex flex-wrap items-center justify-between gap-3 ${style === 'new' ? 'mt-3' : 'mt-5'}`}>
      {style === 'new' ? <details className="min-w-0 flex-1 text-[11px] text-muted"><summary className="cursor-pointer font-semibold text-ink">Source notes · booklet edition and paper provenance</summary><p className="mt-2 max-w-[880px] leading-relaxed">{totalInventory} original questions, not the 3,981 references in the supplied outline. The 50 unverified user transcriptions remain separate. The lesson booklet notes refer to the user-supplied 2023 Version 1.0 booklet; none of these questions is claimed as an official paper.</p></details> : <p className="flex flex-wrap items-center gap-2 text-[11px] leading-relaxed text-muted"><ShieldCheck size={16} aria-hidden="true" /> {totalInventory} published original questions, not the 3,981 counts quoted in the supplied outline. The 50 user-supplied, unverified transcriptions stay in a <Link className="font-semibold text-ink underline" to="/ib-papers">separate archive</Link>. Lesson booklet notes have been checked against the supplied 2023 Version 1.0 HL booklet; the practice variants are independent, not official examination questions.</p>}
      <Link to="/review" className="studio-button shrink-0"><ClipboardCheck size={14} /> Review all answers</Link>
    </div>

    <div className={`${style === 'new' ? 'mt-4 p-4' : 'mt-10 p-5 sm:p-6'} grid gap-4 rounded-2xl border border-line bg-surface lg:grid-cols-[1fr_auto] lg:items-center`}>
      <div><p className="section-label">Short weighted mock</p>{style === 'new' ? <details className="mt-1 text-[11px] text-muted"><summary className="cursor-pointer">A mixed 15:15:10-mark set from curated questions. Details</summary><p className="mt-2 max-w-[820px] leading-relaxed">Paper 1 and Paper 2 have {HL_WEIGHTS.P1}% weight each; Paper 3 has {HL_WEIGHTS.P3}%, with the separate exploration at {HL_WEIGHTS.IA}%. This short set is not a full IB exam or a forecast.</p></details> : <p className="mt-2 text-[13px] leading-relaxed text-muted">The IB AA HL subject brief weights Paper 1 at {HL_WEIGHTS.P1}%, Paper 2 at {HL_WEIGHTS.P2}%, Paper 3 at {HL_WEIGHTS.P3}% and the separate exploration at {HL_WEIGHTS.IA}%. This short mixed set selects 15:15:10 available marks from the existing longer, curated questions. The new code-by-code skill variations are in the practice filters. It is not a full IB exam or a question forecast.</p>}</div>
      <button type="button" onClick={startMock} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas hover:opacity-75"><Shuffle size={15} /> New mixed mock</button>
    </div>
    <FullscreenWorkspace title="Main Question Bank">
    {mock ? <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line p-4 sm:p-5"><div><p className="section-label">Shared mock / seed {mockSeed}</p><p className="mt-1 text-[12px] text-muted">{mock.length} questions · {mockMarks} available marks{examActive ? ' · marking locked until submission' : ` · currently checked ${awardedMock}`}. The paper mix is {(['P1','P2','P3'] as const).map((p) => `${p}: ${mock.filter((q) => q.paper === p).reduce((s, q) => s + q.marks, 0)}`).join(' / ')} marks.</p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => void copyLink(`/practice?mock=${mockSeed}`)} className="studio-button"><Share2 size={14} /> Copy mock link</button><button type="button" onClick={() => window.print()} className="studio-button"><Printer size={14} /> Print / save PDF</button><button type="button" onClick={() => setParams({ paper: 'P1' })} className="studio-button">Leave mock</button></div></div> : <>
      <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Choose original paper">{(['P1','P2','P3'] as const).map((paper) => <button key={paper} type="button" aria-pressed={selectedPaper === paper} onClick={() => choosePaper(paper)} className={`min-h-11 rounded-full border px-5 text-[12px] font-semibold transition-colors ${selectedPaper === paper ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface text-muted hover:border-ink hover:text-ink'}`}>Paper {paper.slice(1)} <span className="opacity-60">{paperTotals[paper]}</span></button>)}<span className="ml-auto self-center text-[11px] text-muted">Main Question Bank · {paperTotals[selectedPaper]} questions</span></div>
      <div className={`mt-5 grid gap-3 rounded-2xl border border-line bg-surface p-4 sm:grid-cols-2 sm:p-5 ${style === 'new' ? 'xl:grid-cols-[minmax(0,1fr)_auto]' : 'xl:grid-cols-[1.2fr_1fr_1.25fr_auto]'}`}>
        <label className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3"><Search size={16} className="text-muted" /><input type="search" value={query} onChange={(event) => { setQuery(event.target.value); clearQuestionPage(); }} placeholder="Search question text" aria-label="Search original questions" className="h-11 w-full min-w-0 bg-transparent text-[12px]" /></label>
        <div className={style === 'new' ? 'xl:hidden' : ''}><FilterSelect label="Filter by syllabus group" value={unit} onChange={(value) => { setUnit(value); selectCode('all'); }} options={[{ value: 'all', label: 'All five groups' }, ...knownUnits.map((entry) => ({ value: entry.slug, label: entry.title }))]} /></div>
        <div className={style === 'new' ? 'xl:hidden' : ''}><FilterSelect label="Filter by subtopic" value={code} onChange={selectCode} options={[{ value: 'all', label: 'All subtopics (83 in course)' }, ...availableTopics.map((topic) => ({ value: topic.id, label: `${topic.id} · ${topic.title} (${originalExamQuestions.filter((q) => q.paper === selectedPaper && q.codes.includes(topic.id)).length})` }))]} /></div>
        <label className="flex items-center gap-2 whitespace-nowrap px-2 text-[12px] font-medium"><input type="checkbox" checked={starredOnly} onChange={(event) => { setStarredOnly(event.target.checked); clearQuestionPage(); }} className="accent-ink" /> Starred only</label>
      </div>
    </>}
    {notice && <p className="mt-5 rounded-lg border border-line bg-surface p-3 text-[12px]" role="status">{notice}</p>}
    {style === 'new' ? <div className="question-bank-new mt-6 grid items-start gap-4 xl:grid-cols-[minmax(230px,270px)_minmax(0,1fr)]">
      <div className="hidden xl:block"><PracticeTopicRail topics={syllabusTopics} questions={mock ?? originalExamQuestions} paper={mock ? 'mock' : selectedPaper} unit={unit} code={code} setUnit={(value) => { setUnit(value); selectCode('all'); }} setCode={selectCode} /></div>
      <section id="main-question-results" tabIndex={-1} aria-label="Question results" className="min-w-0 scroll-mt-28 focus:outline-none">
        {!mock && <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface p-3 sm:p-4"><div role="group" aria-label="Answer status" className="inline-flex items-center gap-1 rounded-lg border border-line bg-canvas p-1">{([['all','All'],['todo','To do'],['answered','Answered']] as const).map(([value, label]) => <button key={value} type="button" aria-pressed={workFilter === value} onClick={() => { setWorkFilter(value); clearQuestionPage(); }} className={`rounded-md px-3 py-2 text-[11px] font-semibold ${workFilter === value ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'}`}>{label}</button>)}</div>
          <div className="flex min-w-[140px] items-center gap-2"><span className="whitespace-nowrap text-[11px] font-semibold text-muted">Task size</span><FilterSelect label="Filter by mark allocation" value={sizeFilter} onChange={(value) => { setSizeFilter(value as 'all' | 'short' | 'long'); clearQuestionPage(); }} options={[{ value: 'all', label: 'Any marks' }, { value: 'short', label: '1 to 4 marks' }, { value: 'long', label: '5 or more marks' }]} /></div>
        </div>}
        {!mock && <PageNavigator page={resultPage} totalItems={visible.length} pageSize={pageSize} label="Main questions" placement="top" onChange={choosePage} />}
        <div className="my-5 flex flex-wrap items-center justify-between gap-2"><div><p className="text-[13px] font-semibold">{visible.length ? `Showing ${mock ? 1 : resultPage * 10 + 1}–${mock ? visible.length : Math.min((resultPage + 1) * 10, visible.length)} of ${visible.length} questions` : 'No matching questions'}</p><p className="mt-1 text-[11px] text-muted">{mock ? 'Short mixed mock' : `Paper ${selectedPaper.slice(1)} · ${unit === 'all' ? 'All five strands' : knownUnits.find((entry) => entry.slug === unit)?.title ?? 'Selected strand'}`}{code !== 'all' ? ` · ${code}` : ''}</p></div><Link to="/review" className="inline-flex items-center gap-1 text-[11px] font-semibold underline"><ClipboardCheck size={14} /> Review answers</Link></div>
        {newPageItems.length ? <div className="space-y-4">{newPageItems.map((item) => <OriginalQuestionCard key={item.id} item={item} index={visible.indexOf(item) + 1} lesson={syllabusTopics.find((topic) => item.codes.includes(topic.id))} revealed={!!reveal[item.id]} selected={selectedSteps[item.id] ?? []}
          onReveal={() => { if (examActive) return; setReveal((current) => ({ ...current, [item.id]: !current[item.id] })); if (!reveal[item.id] && profile) useProfileStore.getState().recordQuestion({ id: item.id, title: item.title, route: `/practice?q=${item.id}`, kind: 'original', paper: item.paper, event: 'reveal' }); }}
          onStep={(index) => setSelectedSteps((current) => { const list = current[item.id] ?? []; return { ...current, [item.id]: list.includes(index) ? list.filter((value) => value !== index) : [...list, index] }; })}
          onNotice={setNotice} onShare={() => void copyLink(`/practice?paper=${item.paper}&q=${encodeURIComponent(item.id)}`)} />)}</div> : <p role="status" className="rounded-xl border border-dashed border-line p-10 text-center text-[12px] text-muted">No questions match this combination. Clear a topic, search or status filter to see more.</p>}
        {!mock && <PageNavigator page={resultPage} totalItems={visible.length} pageSize={pageSize} label="Main questions" onChange={choosePage} />}
      </section>
    </div> : <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(250px,.72fr)_minmax(0,1.28fr)]">
      <section id="main-question-results" tabIndex={-1} aria-label="Matching original questions" className="scroll-mt-28 rounded-xl border border-line bg-surface p-3 focus:outline-none lg:sticky lg:top-[90px]"><div className="flex items-center justify-between px-2 pb-3 pt-2"><p className="section-label">{mock ? 'Mock questions' : 'Results'}</p><span className="font-mono text-[10px] text-muted">{visible.length} actual items</span></div>
        <div className="max-h-[min(68vh,720px)] space-y-1 overflow-y-auto pr-1">{listItems.map((item) => <button key={item.id} type="button" onClick={() => goQuestion(item.id)} aria-current={active?.id === item.id ? 'true' : undefined} className={`flex w-full flex-col gap-2 rounded-lg border p-3.5 text-left transition-colors ${active?.id === item.id ? 'border-ink bg-canvas' : 'border-transparent hover:border-line hover:bg-canvas'}`}><span className="flex w-full items-center justify-between font-mono text-[10px] text-muted"><span>{String(visible.indexOf(item) + 1).padStart(2, '0')} / {item.paper} · {item.codes[0]}</span><span>{item.marks} marks</span></span><span className="line-clamp-2 text-[12px] font-semibold leading-snug">{item.title.split(' · ')[1]}</span><span className="text-[10px] text-muted">{profile?.bookmarks.includes(item.id) ? '★ Starred · ' : ''}{profile?.questions[item.id]?.bestMarks !== undefined ? `Best ${profile.questions[item.id].bestMarks}/${item.marks} · ` : ''}{item.codes.length > 1 ? `${item.codes.length} linked subtopics` : item.variant ? 'Original skill variation' : 'Original practice'}</span></button>)}
        </div>
        {!mock && <PageNavigator page={resultPage} totalItems={visible.length} pageSize={pageSize} label="Main questions" onChange={choosePage} />}
        {!visible.length && <p role="status" className="px-2 py-8 text-[12px] leading-relaxed text-muted">No original question is published for this combination yet. Every syllabus lesson is available in the <Link to="/units" className="font-semibold underline">course</Link>; the outline's external counts do not represent included inventory.</p>}
      </section>
      {active ? <OriginalQuestionCard key={active.id} item={active} lesson={activeLesson} revealed={!!reveal[active.id]} selected={selectedSteps[active.id] ?? []}
        onReveal={() => { if (examActive) return; setReveal((current) => ({ ...current, [active.id]: !current[active.id] })); if (!reveal[active.id] && profile) useProfileStore.getState().recordQuestion({ id: active.id, title: active.title, route: `/practice?q=${active.id}`, kind: 'original', paper: active.paper, event: 'reveal' }); }}
        onStep={(index) => setSelectedSteps((current) => { const list = current[active.id] ?? []; return { ...current, [active.id]: list.includes(index) ? list.filter((value) => value !== index) : [...list, index] }; })}
        onNotice={setNotice} onShare={() => void copyLink(`/practice?q=${encodeURIComponent(active.id)}`)} /> : <div className="rounded-xl border border-dashed border-line p-10 text-[13px] text-muted">Choose a different filter to find a published question.</div>}
    </div>}
    </FullscreenWorkspace>
    {mock && !examActive && <div className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8"><div className="flex items-center gap-3"><Check size={19} /><h2 className="text-[22px] font-semibold tracking-tight">Record your mock.</h2></div><p className="mt-3 max-w-[670px] text-[12px] leading-relaxed text-muted">Reveal guides and tick steps earned for each question. Unmarked steps count as zero. Saving records a self-reported assessment, not an official grade; previously saved question best scores remain separate.</p><div className="mt-6 flex flex-wrap items-end gap-3"><label className="text-[11px] font-semibold">Assessment name<input value={assessmentName} maxLength={120} onChange={(event) => setAssessmentName(event.target.value)} className="mt-2 block h-11 min-w-[220px] rounded-lg border border-line bg-canvas px-3 text-[12px]" /></label><span className="pb-2 text-[15px] font-semibold">{awardedMock}/{mockMarks}</span><button type="button" disabled={!profile} onClick={recordAssessment} className="min-h-11 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas disabled:opacity-40">Save assessment</button><button type="button" onClick={() => window.print()} className="studio-button"><FileText size={15} /> Print / save PDF</button></div>{!profile && <p className="mt-3 text-[11px] text-muted"><Link to="/profile" className="underline">Unlock profile</Link> to save this score.</p>}</div>}
    <section className="exam-print-layout" aria-label="Print-ready original practice"><h1>Sarang.md / Original AA HL practice</h1><p>{mock ? `Short mixed mock · set ${mockSeed}` : `Original Paper ${selectedPaper.slice(1)} question`}. Independently authored, not official IB material.</p><p>Name: ____________________________________ Date: ____________________</p>{(mock ?? (active ? [active] : [])).map((item, index) => <div key={item.id} className="exam-print-question"><h2>{index + 1}. {item.codes.join(' + ')} · Paper {item.paper.slice(1)} · [{item.marks} marks]</h2><MarkdownArticle source={item.prompt} compact /><div className="exam-write-space" /></div>)}</section>
  </div>;
}
