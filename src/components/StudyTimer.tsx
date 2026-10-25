import { Pause, Play, RotateCcw, Timer } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { desktop } from '../lib/desktop';
import { notify } from './ui/toast';

const KEY = 'sarang-md-study-timer-v1';
const plans = [{ label: '25 / 5', work: 25, rest: 5 }, { label: '50 / 10', work: 50, rest: 10 }, { label: '90 / 15', work: 90, rest: 15 }];
type Phase = 'work' | 'rest';
interface Saved { plan: number; day: string; minutes: number }
const today = () => new Date().toISOString().slice(0, 10);
function load(): Saved {
  try { const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Saved>; return { plan: Number.isInteger(raw.plan) ? Math.min(Math.max(raw.plan as number, 0), plans.length - 1) : 0, day: raw.day === today() ? raw.day : today(), minutes: raw.day === today() ? Math.max(0, Number(raw.minutes) || 0) : 0 }; }
  catch { return { plan: 0, day: today(), minutes: 0 }; }
}
const clock = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

function ping(title: string, body: string) {
  notify({ title, message: body, variant: 'success', id: 'study-timer' });
  if (desktop) { desktop.notify(title, body); return; }
  try { if ('Notification' in window && Notification.permission === 'granted' && document.hidden) new Notification(title, { body }); } catch { /* Notifications are optional. */ }
}

/** A plain study timer: work and rest blocks, the minutes you studied today, and a notice when a block ends. Nothing leaves the device. */
export function StudyTimer() {
  const [saved, setSaved] = useState<Saved>(load);
  const [phase, setPhase] = useState<Phase>('work');
  const [left, setLeft] = useState(plans[saved.plan].work * 60);
  const [running, setRunning] = useState(false);
  const endsAt = useRef(0);
  const plan = plans[saved.plan];
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch { /* Storage can be full or blocked. */ } }, [saved]);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const remaining = Math.max(0, Math.round((endsAt.current - Date.now()) / 1000));
      setLeft(remaining);
      if (remaining > 0) return;
      window.clearInterval(id);
      if (phase === 'work') {
        setSaved((previous) => ({ ...previous, minutes: previous.minutes + plan.work }));
        ping('Block finished', `Take ${plan.rest} minutes: water, stretch, look away from the screen.`);
        setPhase('rest'); setLeft(plan.rest * 60); endsAt.current = Date.now() + plan.rest * 60000; setRunning(true);
      } else {
        ping('Break over', 'Ready for the next block when you are.');
        setPhase('work'); setLeft(plan.work * 60); setRunning(false);
      }
    }, 500);
    return () => window.clearInterval(id);
  }, [running, phase, plan]);
  function toggle() {
    if (running) { setRunning(false); return; }
    endsAt.current = Date.now() + left * 1000; setRunning(true);
    try { if (!desktop && 'Notification' in window && Notification.permission === 'default') void Notification.requestPermission(); } catch { /* Optional. */ }
  }
  function reset(index = saved.plan) { setRunning(false); setPhase('work'); setLeft(plans[index].work * 60); }
  const total = (phase === 'work' ? plan.work : plan.rest) * 60;
  return <section aria-labelledby="study-timer-heading" data-testid="study-timer" className="mt-6 rounded-2xl border border-line bg-surface p-5 sm:p-7">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div><p className="section-label">Study timer</p><h2 id="study-timer-heading" className="mt-2 flex items-center gap-2 text-[18px] font-semibold tracking-[-0.03em]"><Timer size={18} aria-hidden="true" />Work blocks with real breaks</h2>
        <p className="mt-2 max-w-[560px] text-[12px] leading-relaxed text-muted">Short blocks of one topic, then a proper rest, work better than one long slog. Decide what the break is before you start, and keep it off your phone.</p></div>
      <p className="text-right font-mono text-[11px] text-muted">Studied today<br /><span className="text-[22px] font-semibold text-ink">{saved.minutes}</span> min</p>
    </div>
    <div className="mt-6 flex flex-wrap items-center gap-5">
      <p role="timer" aria-live="off" aria-label={`${phase === 'work' ? 'Work' : 'Break'} time left`} className="font-mono text-[clamp(2.4rem,6vw,3.6rem)] font-semibold tabular-nums tracking-tight">{clock(left)}</p>
      <div className="min-w-[140px] flex-1"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{phase === 'work' ? 'Work block' : 'Break'}</p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line"><div className="h-full bg-ink transition-[width] duration-500" style={{ width: `${Math.round((1 - left / total) * 100)}%` }} /></div></div>
      <div className="flex gap-2"><button type="button" onClick={toggle} className="studio-button studio-button-primary">{running ? <Pause size={13} /> : <Play size={13} />}{running ? 'Pause' : left === total ? 'Start' : 'Resume'}</button><button type="button" onClick={() => reset()} className="studio-button"><RotateCcw size={13} />Reset</button></div>
    </div>
    <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Block lengths">{plans.map((choice, index) => <button key={choice.label} type="button" aria-pressed={saved.plan === index} onClick={() => { setSaved({ ...saved, plan: index }); reset(index); }} className={`studio-button ${saved.plan === index ? 'studio-button-primary' : ''}`}>{choice.label} min</button>)}</div>
  </section>;
}
