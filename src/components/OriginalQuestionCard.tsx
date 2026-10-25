import { BookOpen, ChevronDown, MessageCircleQuestion, Share2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarkdownArticle } from './MarkdownArticle';
import { WrittenAnswer } from './WrittenAnswer';
import { notify } from './ui/toast';
import type { AuthoredQuestion } from '../data/originalExam';
import type { Topic } from '../types';
import { topicPath } from '../lib/catalog';
import { isExamActive, useExamStore } from '../store/useExamStore';
import { useSettingsStore } from '../store/useSettingsStore';
import { useProfileStore } from '../store/useProfileStore';
import { useTutorStore } from '../store/useTutorStore';

export function OriginalQuestionCard({ item, lesson, revealed, selected, onReveal, onStep, onNotice, onShare, index }: {
  item: AuthoredQuestion; lesson?: Topic; revealed: boolean; selected: number[];
  onReveal: () => void; onStep: (index: number) => void; onNotice: (notice: string) => void;
  onShare: () => void; index?: number;
}) {
  const profile = useProfileStore((state) => state.profile);
  const status = useProfileStore((state) => state.status);
  const toggleBookmark = useProfileStore((state) => state.toggleBookmark);
  const recordManualScore = useProfileStore((state) => state.recordManualScore);
  const openFor = useTutorStore((state) => state.openFor);
  const aiEnabled = useSettingsStore((state) => state.aiEnabled);
  const activeExam = useExamStore((state) => isExamActive(state.attempt));
  const earned = item.scheme.reduce((sum, step, stepIndex) => sum + (selected.includes(stepIndex) ? step.marks : 0), 0);
  return <article id={item.id} className="question-result-card scroll-mt-28 min-w-0 rounded-xl border border-line bg-canvas p-5 shadow-soft sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5"><div><p className="section-label mb-2">{index !== undefined ? `Question ${index} / ` : ''}Original · Paper {item.paper.slice(1)} · {item.marks} marks</p><h2 className="text-[21px] font-semibold tracking-tight sm:text-[24px]">{item.title.split(' · ')[1] ?? item.codes.join(' + ')}</h2><p className="mt-2 font-mono text-[10px] text-muted">{item.codes.join(' + ')} · {item.paper === 'P1' ? 'Non-technology style' : 'Technology permitted style'}</p></div>
      <div className="flex items-center gap-2"><button type="button" onClick={() => { if (status === 'unlocked') { const starred = !!profile?.bookmarks.includes(item.id); toggleBookmark(item.id); notify({ title: starred ? 'Star removed' : 'Question starred', message: 'Your question list is updated in your encrypted profile.', variant: 'success', id: 'question-star' }); } else { onNotice('Unlock your encrypted profile to save starred questions.'); notify({ title: 'Profile locked', message: 'Unlock a profile to save starred questions.', variant: 'warning', id: 'question-star' }); } }} aria-label={profile?.bookmarks.includes(item.id) ? 'Remove star' : 'Star question'} aria-pressed={!!profile?.bookmarks.includes(item.id)} className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-ink"><Star size={16} fill={profile?.bookmarks.includes(item.id) ? 'currentColor' : 'none'} /></button><button type="button" onClick={onShare} aria-label="Copy a shareable link to this question" className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-ink"><Share2 size={16} /></button></div></div>
    <div className="mt-6"><MarkdownArticle source={item.prompt} compact /></div>
    <WrittenAnswer id={item.id} title={item.title} route={`/practice?paper=${item.paper}&q=${encodeURIComponent(item.id)}`} kind="original" paper={item.paper} />
    {!activeExam && <div className="mt-5 flex flex-wrap items-center gap-4">{lesson && <Link to={topicPath(lesson)} className="inline-flex items-center gap-2 text-[11px] font-semibold underline underline-offset-4"><BookOpen size={15} /> Read {lesson.title}</Link>}
      {aiEnabled && <button type="button" onClick={() => openFor({ key: item.id, route: '/practice', title: item.title, text: item.prompt, subject: 'Mathematics AA HL', sourceStatus: 'Independently authored original practice, not official IB material', scheme: item.scheme })} className="inline-flex items-center gap-2 text-[11px] font-semibold underline underline-offset-4"><MessageCircleQuestion size={15} /> Ask about this question</button>}</div>}
    {activeExam ? <p className="mt-5 rounded-lg border border-line bg-surface p-4 text-[12px] font-semibold">Exam mode: guides and self-marking unlock after submission.</p> : <div className="mt-6 rounded-xl border border-line bg-surface p-4"><p className="text-[12px] font-semibold">Try before revealing.</p><p className="mt-1 text-[11px] leading-relaxed text-muted">The independent marking guide allocates {item.marks} marks. It is not an official IB mark scheme.</p><button type="button" onClick={onReveal} aria-expanded={revealed} className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2.5 text-[11px] font-semibold hover:bg-ink hover:text-canvas">{revealed ? 'Hide marking guide' : 'Reveal marking guide'}<ChevronDown size={13} className={revealed ? 'rotate-180' : ''} /></button></div>}
    {revealed && !activeExam && <section className="mt-5 overflow-hidden rounded-xl border border-line"><div className="flex items-center justify-between border-b border-line bg-surface px-5 py-4"><h3 className="text-[13px] font-semibold">Independent marking guide</h3><span className="font-mono text-[11px] text-muted">{item.marks} available</span></div><ol className="divide-y divide-line">{item.scheme.map((step, stepIndex) => <li key={`${stepIndex}-${step.code}`} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 px-4 py-4 sm:px-5"><label className="flex min-h-8 items-center gap-2"><input type="checkbox" checked={selected.includes(stepIndex)} onChange={() => onStep(stepIndex)} aria-label={`Award ${step.marks} marks for ${step.code}`} className="accent-ink" /><span className="font-mono text-[10px] text-muted">{step.code}</span></label><MarkdownArticle source={step.text} compact scheme /><span className="font-mono text-[11px] text-muted">{step.marks}</span></li>)}</ol><div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface px-5 py-4"><p className="text-[12px]">Self-marked: <strong>{earned}/{item.marks}</strong></p><button type="button" disabled={!profile} onClick={() => { recordManualScore({ id: item.id, title: item.title, paper: item.paper, earned, available: item.marks }); onNotice('Self-marked score saved in your encrypted profile.'); notify({ title: 'Score saved', message: `${earned}/${item.marks} self-awarded marks in your encrypted profile.`, variant: 'success', id: 'question-score' }); }} className="rounded-full bg-ink px-4 py-2 text-[11px] font-semibold text-canvas disabled:opacity-40">Save self-marked score</button></div></section>}
    {!profile && <p className="mt-5 text-[11px] text-muted"><Link to="/profile" className="font-semibold underline">Unlock your encrypted profile</Link> to persist answers, stars and scores. Guest answers stay in this tab only.</p>}
  </article>;
}
