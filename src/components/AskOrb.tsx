import { useEffect, useRef, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import MorphOrb from '@/components/ui/ai-thiking-orb-and-input';
import { offlineTutorPrompt } from '../lib/offlineTutor';
import { useTutorStore } from '../store/useTutorStore';

/** Fits a guiding question into the small answer card. */
function fit(text: string, max = 150) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max).replace(/\s+\S*$/, '');
  return `${cut}…`;
}

/** Full-screen "Ask Sarang" stage. The question is answered with one anchored
 * guiding question (the same offline guidance as the tutor panel, no key and no
 * network). "Continue in the tutor" opens the real tutor for the live, step by
 * step conversation with the learner's own provider key. */
export default function AskOrb({ onClose }: { onClose: () => void }) {
  const [asked, setAsked] = useState('');
  const openFor = useTutorStore((state) => state.openFor);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && !event.defaultPrevented) onClose(); };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = previous; };
  }, [onClose]);

  const answer = (text: string) => {
    setAsked(text);
    return fit(offlineTutorPrompt('your question', text, 1, 2));
  };

  return <div role="dialog" aria-modal="true" aria-label="Ask Sarang">
    <MorphOrb onSubmit={answer} minThinkMs={2200} copy={{ placeholder: 'Ask a maths question…', answerTitle: 'A first question for you', reset: 'Ask another' }} />
    <button ref={closeRef} type="button" onClick={onClose} aria-label="Close Ask Sarang" className="fixed right-4 top-4 z-[95] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"><X size={18} aria-hidden="true" /></button>
    <p className="pointer-events-none fixed left-0 right-0 top-6 z-[95] text-center font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-white/50">Ask Sarang · maths only · hints, not answers</p>
    {asked && <button type="button" onClick={() => { openFor({ key: `ask-${Date.now()}`, route: window.location.hash.replace(/^#/, '') || '/', title: 'Your question', text: asked, subject: 'Mathematics AA HL' }); onClose(); }}
      className="fixed bottom-8 left-1/2 z-[95] inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-[13px] font-semibold text-[#111] shadow-float"><MessageCircle size={16} aria-hidden="true" />Continue in the tutor</button>}
  </div>;
}
