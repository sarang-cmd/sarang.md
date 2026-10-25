import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { formatRemaining } from './ExamControls';
import { isExamActive, useExamStore } from '../store/useExamStore';

/** Browser fullscreen with a CSS focus-mode fallback when the API is blocked.
 * The workspace contains all question controls, so filters and review remain
 * reachable without the main header. Escape exits the browser fullscreen. */
export function FullscreenWorkspace({ children, title }: { children: ReactNode; title: string }) {
  const ref = useRef<HTMLElement>(null);
  const [fallback, setFallback] = useState(false);
  const [native, setNative] = useState(false);
  const [now, setNow] = useState(Date.now());
  const attempt = useExamStore((state) => state.attempt);
  const active = fallback || native;
  useEffect(() => {
    const changed = () => setNative(document.fullscreenElement === ref.current);
    document.addEventListener('fullscreenchange', changed);
    return () => document.removeEventListener('fullscreenchange', changed);
  }, []);
  useEffect(() => {
    if (!fallback) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setFallback(false); };
    document.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', escape); };
  }, [fallback]);
  useEffect(() => {
    if (!active || !isExamActive(attempt)) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [active, attempt]);
  async function toggle() {
    if (fallback) { setFallback(false); return; }
    if (document.fullscreenElement === ref.current) { await document.exitFullscreen(); return; }
    try {
      if (!ref.current?.requestFullscreen) throw new Error('Unsupported');
      await ref.current.requestFullscreen();
    } catch { setFallback(true); }
  }
  return <section ref={ref} data-question-workspace className={`min-w-0 bg-canvas text-ink ${fallback ? 'question-focus-fallback' : ''}`} aria-label={title}>
    <div className="question-workspace-bar flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-2.5">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">{title} {isExamActive(attempt) && <span className="ml-2 text-ink">· Exam {formatRemaining((attempt?.endsAt ?? 0) - now)}</span>}</span>
      <button type="button" aria-pressed={active} onClick={() => void toggle()} className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-line bg-canvas px-3 text-[11px] font-semibold hover:border-ink">{active ? <Minimize2 size={14} /> : <Maximize2 size={14} />}{active ? 'Exit full screen' : 'Full-screen questions'}</button>
    </div>
    {children}
  </section>;
}
