import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, MessageCircle, KeyRound, RotateCcw } from 'lucide-react';
import MorphOrb from '@/components/ui/ai-thiking-orb-and-input';
import { MarkdownArticle } from './MarkdownArticle';
import { offlineTutorPrompt } from '../lib/offlineTutor';
import { levels, providerOptions, requestTutor } from '../lib/tutorApi';
import type { ChatMessage, GuidanceLevel } from '../lib/tutorApi';
import { useProfileStore } from '../store/useProfileStore';
import { useTutorStore } from '../store/useTutorStore';

const SUBJECT = 'Mathematics AA HL' as const;
const CHAT_KEY = 'ask-orb';

/** Readable plain text for the small card: strips Markdown and common LaTeX. */
function plain(text: string) {
  return text
    .replace(/\$\$?([^$]+)\$\$?/g, (_, m: string) => m
      .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)').replace(/\\sqrt\{([^{}]*)\}/g, '√($1)')
      .replace(/\\(cdot|times)/g, '·').replace(/\\(left|right)/g, '').replace(/\\([a-zA-Z]+)/g, '$1').replace(/[{}]/g, '').replace(/\^2/g, '²').replace(/\^3/g, '³'))
    .replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
}
/** The card shows the guiding question; the full reply appears beneath it. */
function cardLine(text: string, max = 150) {
  const clean = plain(text);
  const sentences = clean.match(/[^.!?]+[.!?]+/g) ?? [clean];
  const question = [...sentences].reverse().find((sentence) => sentence.includes('?'));
  const line = (question ?? sentences[0]).trim();
  if (line.length <= max) return line;
  return `${line.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

/** Full-screen "Ask Sarang" stage: the MorphOrb is the front door of the Socratic
 * tutor. With a saved provider key in the unlocked encrypted profile the reply is
 * live (sent directly to the learner's own provider, hint steps only, never the
 * solution). Without one, the same offline anchored question as the tutor panel is
 * shown. "Continue in the tutor" carries the conversation into the tutor panel. */
export default function AskOrb({ onClose }: { onClose: () => void }) {
  const { pathname } = useLocation();
  const status = useProfileStore((state) => state.status);
  const profile = useProfileStore((state) => state.profile);
  const openFor = useTutorStore((state) => state.openFor);
  const [level, setLevel] = useState<GuidanceLevel>(1);
  const [reply, setReply] = useState('');
  const [live, setLive] = useState(false);
  const [problem, setProblem] = useState('');
  const [phase, setPhase] = useState('idle');
  const history = useRef<ChatMessage[]>([]);
  const request = useRef<AbortController | null>(null);

  const connection = useMemo(() => {
    if (status !== 'unlocked' || !profile) return null;
    const option = providerOptions.find((item) => item.id === profile.lastProvider) ?? providerOptions[0];
    const saved = profile.providers[option.id];
    const key = saved?.apiKey?.trim();
    if (!key) return null;
    return { provider: option.id, model: saved?.model ?? option.model, endpoint: saved?.endpoint ?? option.endpoint, key };
  }, [status, profile]);
  const levelRef = useRef(level); levelRef.current = level;
  const connectionRef = useRef(connection); connectionRef.current = connection;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' && !event.defaultPrevented) onClose(); };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = previous; request.current?.abort(); document.body.style.overflow = previous; };
  }, [onClose]);

  // The orb animates imperatively; mirror its phase so the full reply appears only once settled.
  useEffect(() => {
    const timer = window.setInterval(() => setPhase(document.querySelector<HTMLElement>('.mo-root')?.dataset.phase ?? 'idle'), 180);
    return () => window.clearInterval(timer);
  }, []);

  const answer = useCallback(async (text: string) => {
    setProblem(''); setReply(''); setLive(false);
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    const next: ChatMessage[] = [...history.current, { role: 'user', content: text }];
    const hint = levelRef.current;
    const config = connectionRef.current;
    let output: string;
    if (config) {
      try {
        output = await requestTutor(config, { subject: SUBJECT, title: 'Ask Sarang question', text }, next, hint, false, controller.signal, 2);
        setLive(true);
      } catch (error) {
        setProblem(error instanceof Error ? error.message : 'The tutor could not respond.');
        output = offlineTutorPrompt('your question', text, hint, 2);
      }
    } else {
      output = offlineTutorPrompt('your question', text, hint, 2);
    }
    history.current = [...next, { role: 'assistant', content: output }];
    setReply(output);
    const state = useProfileStore.getState();
    if (state.status === 'unlocked') state.saveChat(CHAT_KEY, 'Ask Sarang', SUBJECT, hint, 'hint', history.current);
    return cardLine(output);
  }, []);

  const continueInTutor = () => {
    openFor({ key: CHAT_KEY, route: pathname || '/', title: 'Ask Sarang', text: history.current.find((m) => m.role === 'user')?.content ?? '', subject: SUBJECT, seedMessages: history.current });
    onClose();
  };
  const restart = () => { history.current = []; setReply(''); setProblem(''); setLive(false); };
  const answered = phase === 'answered' && !!reply;

  return <div role="dialog" aria-modal="true" aria-label="Ask Sarang">
    <MorphOrb onSubmit={answer} minThinkMs={2200} copy={{ placeholder: history.current.length ? 'Ask a follow-up…' : 'Ask a maths question…', answerTitle: 'Your next step', reset: 'Ask another' }} />
    <button type="button" onClick={onClose} aria-label="Close Ask Sarang" className="fixed right-4 top-4 z-[95] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15"><X size={18} aria-hidden="true" /></button>
    <div className="fixed left-0 right-0 top-5 z-[95] flex flex-col items-center gap-2 px-16">
      <p className="pointer-events-none text-center font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-white/55">Ask Sarang · Socratic maths tutor · hints, not answers</p>
      <div role="group" aria-label="Hint step" className="flex flex-wrap items-center justify-center gap-1">
        {levels.map((option) => <button key={option.value} type="button" aria-pressed={level === option.value} title={option.detail} onClick={() => setLevel(option.value)}
          className={`rounded-full border px-2.5 py-1 text-[10.5px] font-semibold transition-colors ${level === option.value ? 'border-white bg-white text-[#111]' : 'border-white/20 text-white/70 hover:bg-white/10'}`}>{option.value} · {option.label}</button>)}
      </div>
      <p className="pointer-events-none text-center text-[10.5px] text-white/50">{connection ? `Live answers from your own provider (${connection.provider}). Nothing is sent until you press send.` : status === 'unlocked' ? 'Offline guidance. Save an API key in the tutor settings for live answers.' : 'Offline guidance. Unlock your profile and save an API key for live answers.'}</p>
    </div>
    {answered && <div className="fixed bottom-4 left-1/2 z-[95] flex max-h-[min(44vh,420px)] w-[min(680px,calc(100vw-24px))] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-line bg-canvas text-ink shadow-float" style={{ animation: 'mo-fade-in .35s ease both' }}>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 text-[13px] leading-[1.65]">
        <p className="section-label mb-2">{live ? 'Tutor reply (live)' : 'Offline guidance'}</p>
        <MarkdownArticle source={reply} compact />
        {problem && <p role="alert" className="mt-3 rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed"><KeyRound size={12} className="mr-1 inline" aria-hidden="true" />{problem} Showing offline guidance instead.</p>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface px-4 py-2.5">
        <button type="button" onClick={restart} className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] font-semibold hover:border-ink"><RotateCcw size={12} aria-hidden="true" />New conversation</button>
        <button type="button" onClick={continueInTutor} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] font-semibold text-canvas"><MessageCircle size={14} aria-hidden="true" />Continue in the tutor</button>
      </div>
    </div>}
  </div>;
}
