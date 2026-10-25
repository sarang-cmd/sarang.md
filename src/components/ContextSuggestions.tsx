import { useEffect, useState } from 'react';
import { ArrowUpRight, Lightbulb, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCatalog } from '../context/CatalogContext';
import { originalExamQuestions } from '../data/originalExam';
import { topicPath } from '../lib/catalog';
import { useVaultStore } from '../store/useVaultStore';

interface Hint { heading: string; detail: string; label: string; to?: string; openSound?: boolean }
function suggestion(path: string, topics: ReturnType<typeof useCatalog>['topics']): Hint | null {
  const topic = topics.find((entry) => topicPath(entry) === path);
  if (topic) {
    const question = originalExamQuestions.find((entry) => entry.codes.includes(topic.id));
    if (question) return { heading: 'Make the idea stick', detail: `You just opened ${topic.id}. Try a related original question when you are ready.`, label: `Practice ${topic.id}`, to: `/practice?paper=${question.paper}&code=${encodeURIComponent(topic.id)}` };
    return { heading: 'Follow your curiosity', detail: 'This lesson is part of a five-strand course. The full outline is ready whenever you are.', label: 'Explore all units', to: '/units' };
  }
  if (path === '/practice') return { heading: 'Keep what you learned', detail: 'Your self-marked scores and stars can be saved in an encrypted local profile.', label: 'Open profile', to: '/profile' };
  if (path === '/focus') return { heading: 'Bring the sound along', detail: 'Pop out the Flow sound controls and move the whole window while you work.', label: 'Open sound controls', openSound: true };
  if (path === '/ib-papers') return { heading: 'Want original practice?', detail: 'The supplied transcriptions are unverified. Our independent questions are in a separate studio.', label: 'Original practice', to: '/practice' };
  if (path === '/profile') return { heading: 'Ready for the next step?', detail: 'A short, mixed practice mock uses a reproducible random seed.', label: 'Try the practice studio', to: '/practice' };
  if (path === '/') return { heading: 'Your next chapter', detail: 'Browse 83 syllabus lessons across all five mathematics strands.', label: 'See the course', to: '/units' };
  return null;
}

/** Low-frequency, dismissible suggestions. At most three per tab session. */
export function ContextSuggestions() {
  const { pathname } = useLocation();
  const { topics } = useCatalog();
  const [hint, setHint] = useState<Hint | null>(null);
  const setSoundWindowOpen = useVaultStore((state) => state.setSoundWindowOpen);
  useEffect(() => {
    setHint(null);
    if (window.innerWidth < 760) return;
    let count = 0, last = 0;
    try { count = Number(sessionStorage.getItem('sarang-suggestions-count') ?? 0); last = Number(sessionStorage.getItem('sarang-suggestions-last') ?? 0); } catch { /* Suggestions can run without storage. */ }
    if (count >= 3 || Date.now() - last < 120000) return;
    const choice = suggestion(pathname, topics);
    if (!choice) return;
    let dismiss: number;
    const show = window.setTimeout(() => {
      if (document.visibilityState !== 'visible' || window.innerWidth < 760) return;
      setHint(choice);
      try { sessionStorage.setItem('sarang-suggestions-count', String(count + 1)); sessionStorage.setItem('sarang-suggestions-last', String(Date.now())); } catch { /* Non-essential. */ }
      dismiss = window.setTimeout(() => setHint(null), 16000);
    }, 38000);
    return () => { window.clearTimeout(show); window.clearTimeout(dismiss); };
  }, [pathname, topics]);
  return hint && <aside aria-label="Contextual study suggestion" className="suggestion-appear fixed right-5 top-[86px] z-[76] hidden w-[min(320px,calc(100vw-40px))] rounded-xl border border-line bg-canvas p-5 shadow-float md:block">
    <div className="flex items-start gap-3"><Lightbulb size={17} className="mt-0.5 shrink-0" /><div className="min-w-0 flex-1"><p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">A thought for this page</p><h3 className="mt-2 text-[16px] font-semibold tracking-tight">{hint.heading}</h3></div><button type="button" onClick={() => setHint(null)} aria-label="Dismiss suggestion" className="rounded-md p-1 hover:bg-surface"><X size={15} /></button></div>
    <p className="mt-3 text-[12px] leading-relaxed text-muted">{hint.detail}</p>
    {hint.to ? <Link to={hint.to} onClick={() => setHint(null)} className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold underline underline-offset-4">{hint.label} <ArrowUpRight size={13} /></Link> : <button type="button" className="studio-button mt-4" onClick={() => { setSoundWindowOpen(true); setHint(null); }}>{hint.label} <ArrowUpRight size={13} /></button>}
  </aside>;
}
