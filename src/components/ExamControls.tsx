import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, Clock3, ClipboardCheck, LockKeyhole, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { isExamActive, useExamStore } from '../store/useExamStore';
import { notify } from './ui/toast';
import { useSettingsStore } from '../store/useSettingsStore';
import { useProfileStore } from '../store/useProfileStore';

export function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(total / 3600)).padStart(2, '0')}:${String(Math.floor(total % 3600 / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

export function ExamModeControl() {
  const attempt = useExamStore((state) => state.attempt);
  const start = useExamStore((state) => state.start);
  const finish = useExamStore((state) => state.finish);
  const defaultMinutes = useSettingsStore((state) => state.examMinutes);
  const profileStatus = useProfileStore((state) => state.status);
  const [open, setOpen] = useState(false);
  const [minutes, setMinutes] = useState(defaultMinutes);
  const navigate = useNavigate();
  const active = isExamActive(attempt);
  useEffect(() => { if (!open) setMinutes(defaultMinutes); }, [defaultMinutes, open]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  const modal = open ? createPortal(<div className="fixed inset-0 z-[175] flex items-center justify-center bg-black/65 px-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
    <section role="dialog" aria-modal="true" aria-labelledby="exam-dialog-title" className="w-full max-w-[460px] rounded-2xl border border-line bg-canvas p-6 text-ink shadow-float sm:p-8">
      <div className="flex items-start justify-between gap-4"><div><p className="section-label">Timed attempt</p><h2 id="exam-dialog-title" className="mt-2 text-[24px] font-semibold tracking-tight">{active ? 'Finish this exam?' : 'Start Exam mode'}</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="Close exam dialog" className="rounded-lg p-2 hover:bg-surface"><X size={18} /></button></div>
      {active ? <p className="mt-5 text-[13px] leading-relaxed text-muted">Submit your attempt now and unlock the independent guides and Review all answers. Your typed work stays in this tab or in your unlocked encrypted profile. You cannot resume this timer after submission.</p> : <>
        <p className="mt-5 text-[13px] leading-relaxed text-muted">The timer continues while you move among all three question collections. Guides, numeric feedback, tutor help, AI feedback and self-marking are hidden until you finish or time runs out. This is practice, not a proctored exam.</p>
        <label className="mt-5 block text-[12px] font-semibold">Duration in minutes <input type="number" min="5" max="300" step="1" value={minutes} onChange={(event) => setMinutes(Number(event.target.value))} className="mt-2 block h-11 w-full rounded-lg border border-line bg-surface px-3 text-[13px] text-ink" /></label>
        <p className="mt-3 text-[11px] leading-relaxed text-muted">{profileStatus === 'unlocked' ? 'Typed answers are saved in your encrypted local profile.' : 'Guest answers stay in this tab only. Unlock a profile before starting if you need answers to survive a reload.'}</p>
      </>}
      <div className="mt-6 flex flex-wrap justify-end gap-2"><button type="button" onClick={() => setOpen(false)} className="studio-button">Cancel</button><button type="button" disabled={!active && (!Number.isInteger(minutes) || minutes < 5 || minutes > 300)} onClick={() => { if (active) { finish('manual'); navigate('/review'); notify({ title: 'Exam submitted', message: 'Guides and self-review are unlocked.', variant: 'success', id: 'exam-status' }); } else { start(minutes); navigate('/practice'); notify({ title: 'Timer started', message: `${minutes} minutes across all three question collections. Guides stay locked.`, variant: 'default', id: 'exam-status' }); } setOpen(false); }} className="rounded-full bg-ink px-5 py-2.5 text-[12px] font-semibold text-canvas disabled:opacity-40">{active ? 'Submit and review' : 'Start timer'}</button></div>
    </section>
  </div>, document.body) : null;
  return <>
    <button type="button" role="switch" aria-checked={active} onClick={() => setOpen(true)} className="mb-2 flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3 py-3 text-left transition-colors hover:border-ink"><span className="inline-flex items-center gap-2.5"><Clock3 size={16} aria-hidden="true" /><span><strong className="block text-[12px]">Exam mode</strong><small className="block text-[10px] text-muted">{active ? 'Timer running · guides locked' : 'Timed, then review'}</small></span></span><span aria-hidden="true" className={`flex h-5 w-9 shrink-0 items-center rounded-full border px-0.5 ${active ? 'border-ink bg-ink' : 'border-line bg-raised'}`}><span className={`h-3.5 w-3.5 rounded-full ${active ? 'translate-x-3.5 bg-canvas' : 'bg-muted'}`} /></span></button>
    {attempt && !active && <Link to="/review" className="mb-3 flex items-center gap-2 px-3 py-1 text-[11px] font-semibold text-ink hover:underline"><CheckCircle2 size={14} /> Review submitted attempt</Link>}
    {modal}
  </>;
}

export function ExamTimerBar() {
  const navigate = useNavigate();
  const attempt = useExamStore((state) => state.attempt);
  const finish = useExamStore((state) => state.finish);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    if (!isExamActive(attempt)) return;
    const tick = () => { const current = Date.now(); setNow(current); if (attempt && current >= attempt.endsAt && isExamActive(useExamStore.getState().attempt)) { finish('time'); notify({ title: 'Exam time ended', message: 'Your attempt was submitted. Review is unlocked.', variant: 'warning', id: 'exam-status', actions: { label: 'Review', onClick: () => navigate('/review') } }); } };
    tick();
    const handle = window.setInterval(tick, 1000);
    return () => window.clearInterval(handle);
  }, [attempt, finish, navigate]);
  if (!isExamActive(attempt) || !attempt) return null;
  const remaining = formatRemaining(attempt.endsAt - now);
  return <div className="sticky top-[72px] z-[66] flex flex-wrap items-center justify-between gap-2 border-b border-line bg-ink px-4 py-2 text-[11px] font-semibold text-canvas sm:px-8" role="status" aria-label="Exam mode active"><span className="inline-flex items-center gap-2"><LockKeyhole size={15} aria-hidden="true" /> Exam mode · guides and checks locked <span role="timer" aria-label={`${remaining} remaining`} className="ml-1 rounded-full border border-canvas/35 px-2.5 py-1 font-mono tabular-nums">{remaining}</span></span><button type="button" onClick={() => { if (window.confirm('Submit your timed attempt and unlock Review all answers? The timer cannot be resumed.')) { finish('manual'); notify({ title: 'Exam submitted', message: 'Guides and self-review are unlocked.', variant: 'success', id: 'exam-status', actions: { label: 'Review', onClick: () => navigate('/review') } }); } }} className="inline-flex items-center gap-1.5 rounded-full border border-canvas/60 px-3 py-1.5 hover:bg-canvas hover:text-ink"><ClipboardCheck size={13} /> Finish exam</button></div>;
}
