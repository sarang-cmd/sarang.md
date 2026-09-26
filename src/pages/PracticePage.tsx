import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Check, FileText, ListFilter, MessageCircleQuestion, Printer, Search, Share2, ShieldCheck, Shuffle, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { useCatalog } from '../context/CatalogContext';
import { originalExamQuestions, paperTotals } from '../data/originalExam';
import type { AuthoredQuestion, ExamPaper } from '../data/originalExam';
import { knownUnits } from '../data/unit';
import { topicPath } from '../lib/catalog';
import { freshMockSeed, HL_WEIGHTS, mockQuestions } from '../lib/mockExam';
import { useProfileStore } from '../store/useProfileStore';
import { useTutorStore } from '../store/useTutorStore';

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
  const [displayLimit, setDisplayLimit] = useState(80);
  const [reveal, setReveal] = useState<Record<string, boolean>>({});
  const [selectedSteps, setSelectedSteps] = useState<Record<string, number[]>>({});
  const [notice, setNotice] = useState('');
  const [assessmentName, setAssessmentName] = useState('My practice mock');
  const profile = useProfileStore((state) => state.profile);
  const status = useProfileStore((state) => state.status);
  const toggleBookmark = useProfileStore((state) => state.toggleBookmark);
  const recordManualScore = useProfileStore((state) => state.recordManualScore);
  const addAssessment = useProfileStore((state) => state.addAssessment);
  const openFor = useTutorStore((state) => state.openFor);
  const mock = useMemo(() => mockSeed ? mockQuestions(mockSeed) : null, [mockSeed]);
  const totalInventory = originalExamQuestions.length;
  const availableTopics = syllabusTopics.filter((topic) => unit === 'all' || topic.unitSlug === unit);
  const visible = useMemo(() => {
    if (mock) return mock;
    const search = query.trim().toLowerCase();
    return originalExamQuestions.filter((item) => item.paper === selectedPaper &&
      (unit === 'all' || item.unitSlug === unit) && (code === 'all' || item.codes.includes(code)) &&
      (!starredOnly || profile?.bookmarks.includes(item.id)) &&
      (!search || `${item.prompt} ${item.codes.join(' ')} ${item.title}`.toLowerCase().includes(search)));
  }, [mock, selectedPaper, unit, code, starredOnly, profile?.bookmarks, query]);
  useEffect(() => { setDisplayLimit(80); }, [selectedPaper, unit, code, query, starredOnly, mockSeed]);
  const active = visible.find((item) => item.id === params.get('q')) ?? visible[0];
  const firstPage = visible.slice(0, displayLimit);
  const listItems = active && !firstPage.some((item) => item.id === active.id) ? [active, ...firstPage] : firstPage;
  const activeLesson = active && syllabusTopics.find((topic) => active.codes.includes(topic.id));
  const mockMarks = mock?.reduce((sum, item) => sum + item.marks, 0) ?? 0;
  const awardedMock = mock?.reduce((sum, item) => sum + marksFor(item, selectedSteps[item.id]), 0) ?? 0;

  function goQuestion(id: string) {
    const next = new URLSearchParams(params);
    next.set('q', id);
    if (!mock) next.set('paper', selectedPaper);
    setParams(next);
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
  }
  async function copyLink(path: string) {
    try { await navigator.clipboard.writeText(shareUrl(path)); setNotice('Link copied. It includes content IDs or the mock seed, not your private answers.'); }
    catch { setNotice('Clipboard unavailable. Copy the URL from the browser address bar instead.'); }
  }
  function recordAssessment() {
    if (!mock || !profile) { setNotice('Unlock your encrypted profile before saving an assessment.'); return; }
    for (const item of mock) if (selectedSteps[item.id]) recordManualScore({ id: item.id, title: item.title, paper: item.paper, earned: marksFor(item, selectedSteps[item.id]), available: item.marks });
    const name = assessmentName.trim().slice(0, 120) || 'Practice mock';
    addAssessment({ id: crypto.randomUUID(), name, paper: 'mixed', source: 'mock', earned: awardedMock, available: mockMarks,
      questionIds: mock.map((item) => item.id), completedAt: new Date().toISOString(), seed: mockSeed ?? undefined });
    setNotice(`Self-reported assessment saved: ${awardedMock}/${mockMarks}. Unmarked steps counted as zero.`);
  }

  return <div className="mx-auto w-full max-w-[1280px] px-5 pb-28 pt-10 sm:px-9 sm:pt-14 lg:px-12 xl:px-16">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Original exam studio' }]} />
    <div className="flex flex-wrap items-end justify-between gap-7 border-b border-line pb-10">
      <div><p className="section-label mb-4">AA HL + SL / independently written</p><h1 className="text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.07em]">Practice with<br />a purpose<span className="text-faint">.</span></h1>
        <p className="mt-5 max-w-[660px] text-[14px] leading-[1.85] text-muted">Original, worked paper-style questions organized by paper and syllabus code. Marks are self-reported after you choose to reveal our independent marking guide. No questions here are presented as official IB papers.</p></div>
      <div className="grid grid-cols-3 gap-5 font-mono text-[11px] text-muted"><span><strong className="block text-[27px] text-ink">{paperTotals.P1}</strong>Paper 1</span><span><strong className="block text-[27px] text-ink">{paperTotals.P2}</strong>Paper 2</span><span><strong className="block text-[27px] text-ink">{paperTotals.P3}</strong>Paper 3</span></div>
    </div>
    <p className="mt-5 flex flex-wrap items-center gap-2 text-[12px] leading-relaxed text-muted"><ShieldCheck size={16} aria-hidden="true" /> {totalInventory} published original questions, not the 3,981 counts quoted in the supplied outline. The 50 user-supplied, unverified transcriptions stay in a <Link className="font-semibold text-ink underline" to="/ib-papers">separate archive</Link>. Lesson booklet notes have been checked against the supplied 2023 Version 1.0 HL booklet; the practice variants are independent, not official examination questions.</p>

    <div className="mt-10 grid gap-4 rounded-2xl border border-line bg-surface p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
      <div><p className="section-label">Short weighted mock</p><p className="mt-2 text-[13px] leading-relaxed text-muted">The IB AA HL subject brief weights Paper 1 at {HL_WEIGHTS.P1}%, Paper 2 at {HL_WEIGHTS.P2}%, Paper 3 at {HL_WEIGHTS.P3}% and the separate exploration at {HL_WEIGHTS.IA}%. This short mixed set selects 15:15:10 available marks from the existing longer, curated questions. The new code-by-code skill variations are in the practice filters. It is not a full IB exam or a question forecast.</p></div>
      <button type="button" onClick={startMock} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas hover:opacity-75"><Shuffle size={15} /> New mixed mock</button>
    </div>
    {mock ? <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line p-4 sm:p-5"><div><p className="section-label">Shared mock / seed {mockSeed}</p><p className="mt-1 text-[12px] text-muted">{mock.length} questions · {mockMarks} available marks · currently checked {awardedMock}. The paper mix is {(['P1','P2','P3'] as const).map((p) => `${p}: ${mock.filter((q) => q.paper === p).reduce((s, q) => s + q.marks, 0)}`).join(' / ')} marks.</p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => void copyLink(`/practice?mock=${mockSeed}`)} className="studio-button"><Share2 size={14} /> Copy mock link</button><button type="button" onClick={() => window.print()} className="studio-button"><Printer size={14} /> Print / save PDF</button><button type="button" onClick={() => setParams({ paper: 'P1' })} className="studio-button">Leave mock</button></div></div> : <>
      <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Choose original paper">{(['P1','P2','P3'] as const).map((paper) => <button key={paper} type="button" aria-pressed={selectedPaper === paper} onClick={() => choosePaper(paper)} className={`min-h-11 rounded-full border px-5 text-[12px] font-semibold transition-colors ${selectedPaper === paper ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface text-muted hover:border-ink hover:text-ink'}`}>Paper {paper.slice(1)} <span className="opacity-60">{paperTotals[paper]}</span></button>)}<Link to="/question-bank" className="ml-auto inline-flex items-center gap-1.5 self-center text-[12px] font-semibold text-muted hover:text-ink hover:underline">Classic 16-question bank <ArrowRight size={14} /></Link></div>
      <div className="mt-5 grid gap-3 rounded-2xl border border-line bg-surface p-4 sm:grid-cols-2 sm:p-5 xl:grid-cols-[1.2fr_1fr_1.25fr_auto]">
        <label className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3"><Search size={16} className="text-muted" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search question text" aria-label="Search original questions" className="h-11 w-full min-w-0 bg-transparent text-[12px]" /></label>
        <label className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3"><ListFilter size={15} className="text-muted" /><select aria-label="Filter by syllabus group" value={unit} onChange={(event) => { setUnit(event.target.value); setCode('all'); }} className="h-11 w-full min-w-0 bg-transparent text-[12px]"><option value="all">All five groups</option>{knownUnits.map((entry) => <option key={entry.slug} value={entry.slug}>{entry.title}</option>)}</select></label>
        <label className="flex items-center rounded-lg border border-line bg-canvas px-3"><select aria-label="Filter by subtopic" value={code} onChange={(event) => setCode(event.target.value)} className="h-11 w-full min-w-0 bg-transparent text-[12px]"><option value="all">All subtopics (83 in course)</option>{availableTopics.map((topic) => <option key={topic.id} value={topic.id}>{topic.id} · {topic.title} ({originalExamQuestions.filter((q) => q.paper === selectedPaper && q.codes.includes(topic.id)).length})</option>)}</select></label>
        <label className="flex items-center gap-2 whitespace-nowrap px-2 text-[12px] font-medium"><input type="checkbox" checked={starredOnly} onChange={(event) => setStarredOnly(event.target.checked)} className="accent-ink" /> Starred only</label>
      </div>
    </>}
    {notice && <p className="mt-5 rounded-lg border border-line bg-surface p-3 text-[12px]" role="status">{notice}</p>}
    <div className="mt-9 grid items-start gap-6 lg:grid-cols-[minmax(250px,.72fr)_minmax(0,1.28fr)]">
      <section aria-label="Matching original questions" className="rounded-xl border border-line bg-surface p-3 lg:sticky lg:top-[90px]"><div className="flex items-center justify-between px-2 pb-3 pt-2"><p className="section-label">{mock ? 'Mock questions' : 'Results'}</p><span className="font-mono text-[10px] text-muted">{visible.length} actual items</span></div>
        <div className="max-h-[min(68vh,720px)] space-y-1 overflow-y-auto pr-1">{listItems.map((item) => <button key={item.id} type="button" onClick={() => goQuestion(item.id)} aria-current={active?.id === item.id ? 'true' : undefined} className={`flex w-full flex-col gap-2 rounded-lg border p-3.5 text-left transition-colors ${active?.id === item.id ? 'border-ink bg-canvas' : 'border-transparent hover:border-line hover:bg-canvas'}`}><span className="flex w-full items-center justify-between font-mono text-[10px] text-muted"><span>{String(visible.indexOf(item) + 1).padStart(2, '0')} / {item.paper} · {item.codes[0]}</span><span>{item.marks} marks</span></span><span className="line-clamp-2 text-[12px] font-semibold leading-snug">{item.title.split(' · ')[1]}</span><span className="text-[10px] text-muted">{profile?.bookmarks.includes(item.id) ? '★ Starred · ' : ''}{profile?.questions[item.id]?.bestMarks !== undefined ? `Best ${profile.questions[item.id].bestMarks}/${item.marks} · ` : ''}{item.codes.length > 1 ? `${item.codes.length} linked subtopics` : item.variant ? 'Original skill variation' : 'Original practice'}</span></button>)}
          {!mock && displayLimit < visible.length && <button type="button" onClick={() => setDisplayLimit((count) => count + 80)} className="mt-2 w-full rounded-lg border border-line p-3 text-[12px] font-semibold hover:border-ink">Show next 80 of {visible.length} results</button>}</div>
        {!visible.length && <p role="status" className="px-2 py-8 text-[12px] leading-relaxed text-muted">No original question is published for this combination yet. Every syllabus lesson is available in the <Link to="/units" className="font-semibold underline">course</Link>; the outline's external counts do not represent included inventory.</p>}
      </section>
      {active ? <article key={active.id} className="min-w-0 rounded-2xl border border-line bg-canvas p-5 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5"><div><p className="section-label mb-2">Original practice / Paper {active.paper.slice(1)} · {active.marks} marks</p><h2 className="text-[25px] font-semibold tracking-[-0.045em]">{active.codes.join(' + ')}</h2><p className="mt-2 text-[11px] text-muted">{active.paper === 'P1' ? 'Non-technology style' : 'Technology permitted style'} · Self-marked, not an IB grade</p></div>
          <div className="flex gap-2"><button type="button" onClick={() => status === 'unlocked' ? toggleBookmark(active.id) : setNotice('Unlock your encrypted profile to save starred questions.')} aria-label={profile?.bookmarks.includes(active.id) ? 'Remove star' : 'Star question'} aria-pressed={!!profile?.bookmarks.includes(active.id)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-ink" data-tip="Save this question"><Star size={16} fill={profile?.bookmarks.includes(active.id) ? 'currentColor' : 'none'} /></button><button type="button" onClick={() => void copyLink(`/practice?q=${encodeURIComponent(active.id)}`)} aria-label="Copy a shareable link to this question" className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-ink" data-tip="Share a question link"><Share2 size={16} /></button></div></div>
        <div className="mt-6"><MarkdownArticle source={active.prompt} compact /></div>
        <div className="mt-5 flex flex-wrap items-center gap-4">{activeLesson && <Link to={topicPath(activeLesson)} className="inline-flex items-center gap-2 text-[12px] font-semibold underline underline-offset-4"><BookOpen size={15} /> Read {activeLesson.title}</Link>}
          <button type="button" onClick={() => openFor({ key: active.id, route: '/practice', title: active.title, text: active.prompt, subject: 'Mathematics AA HL', sourceStatus: 'Independently authored original practice, not official IB material', scheme: active.scheme })} className="inline-flex items-center gap-2 text-[12px] font-semibold underline underline-offset-4"><MessageCircleQuestion size={15} /> Ask about this question</button></div>
        <div className="mt-9 rounded-xl border border-line bg-surface p-5"><p className="text-[13px] font-semibold">Try before revealing the guide.</p><p className="mt-2 text-[12px] leading-relaxed text-muted">Work on paper or in your own notes. The independent marking guide describes steps and allocates {active.marks} marks. It is not an official IB mark scheme.</p><button type="button" onClick={() => { setReveal((current) => ({ ...current, [active.id]: !current[active.id] })); if (!reveal[active.id] && profile) useProfileStore.getState().recordQuestion({ id: active.id, title: active.title, route: `/practice?q=${active.id}`, kind: 'original', paper: active.paper, event: 'reveal' }); }} aria-expanded={!!reveal[active.id]} className="mt-4 rounded-full border border-ink px-4 py-2.5 text-[12px] font-semibold hover:bg-ink hover:text-canvas">{reveal[active.id] ? 'Hide marking guide' : 'Reveal marking guide'}</button></div>
        {reveal[active.id] && <section className="mt-5 overflow-hidden rounded-xl border border-line"><div className="flex items-center justify-between border-b border-line bg-surface px-5 py-4"><h3 className="text-[14px] font-semibold">Independent marking guide</h3><span className="font-mono text-[11px] text-muted">{active.marks} available</span></div><ol className="divide-y divide-line">{active.scheme.map((step, index) => <li key={step.code} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 px-4 py-4 sm:px-5"><label className="flex min-h-8 items-center gap-2"><input type="checkbox" checked={selectedSteps[active.id]?.includes(index) ?? false} onChange={() => setSelectedSteps((current) => { const list = current[active.id] ?? []; return { ...current, [active.id]: list.includes(index) ? list.filter((value) => value !== index) : [...list, index] }; })} aria-label={`Award ${step.marks} marks for ${step.code}`} className="accent-ink" /><span className="font-mono text-[10px] text-muted">{step.code}</span></label><MarkdownArticle source={step.text} compact scheme /><span className="font-mono text-[11px] text-muted">{step.marks}</span></li>)}</ol>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface px-5 py-4"><p className="text-[12px]">Self-marked: <strong>{marksFor(active, selectedSteps[active.id])}/{active.marks}</strong></p><button type="button" disabled={!profile} onClick={() => { recordManualScore({ id: active.id, title: active.title, paper: active.paper, earned: marksFor(active, selectedSteps[active.id]), available: active.marks }); setNotice('Self-marked score saved in your encrypted profile.'); }} className="rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-canvas disabled:opacity-40">Save self-marked score</button></div></section>}
        {!profile && <p className="mt-5 text-[11px] text-muted"><Link to="/profile" className="font-semibold underline">Unlock your encrypted profile</Link> to persist stars, scores and assessments. You can still read and print all questions.</p>}
      </article> : <div className="rounded-xl border border-dashed border-line p-10 text-[13px] text-muted">Choose a different filter to find a published question.</div>}
    </div>
    {mock && <div className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8"><div className="flex items-center gap-3"><Check size={19} /><h2 className="text-[22px] font-semibold tracking-tight">Record your mock.</h2></div><p className="mt-3 max-w-[670px] text-[12px] leading-relaxed text-muted">Reveal guides and tick steps earned for each question. Unmarked steps count as zero. Saving records a self-reported assessment, not an official grade; previously saved question best scores remain separate.</p><div className="mt-6 flex flex-wrap items-end gap-3"><label className="text-[11px] font-semibold">Assessment name<input value={assessmentName} maxLength={120} onChange={(event) => setAssessmentName(event.target.value)} className="mt-2 block h-11 min-w-[220px] rounded-lg border border-line bg-canvas px-3 text-[12px]" /></label><span className="pb-2 text-[15px] font-semibold">{awardedMock}/{mockMarks}</span><button type="button" disabled={!profile} onClick={recordAssessment} className="min-h-11 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas disabled:opacity-40">Save assessment</button><button type="button" onClick={() => window.print()} className="studio-button"><FileText size={15} /> Print / save PDF</button></div>{!profile && <p className="mt-3 text-[11px] text-muted"><Link to="/profile" className="underline">Unlock profile</Link> to save this score.</p>}</div>}
    <section className="exam-print-layout" aria-label="Print-ready original practice"><h1>Sarang.md / Original AA HL practice</h1><p>{mock ? `Short mixed mock · set ${mockSeed}` : `Original Paper ${selectedPaper.slice(1)} question`}. Independently authored, not official IB material.</p><p>Name: ____________________________________ Date: ____________________</p>{(mock ?? (active ? [active] : [])).map((item, index) => <div key={item.id} className="exam-print-question"><h2>{index + 1}. {item.codes.join(' + ')} · Paper {item.paper.slice(1)} · [{item.marks} marks]</h2><MarkdownArticle source={item.prompt} compact /><div className="exam-write-space" /></div>)}</section>
  </div>;
}
