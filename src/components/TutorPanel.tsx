import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent, PointerEvent as ReactPointerEvent } from 'react';
import { BookOpen, Check, ChevronDown, Grip, KeyRound, Maximize2, MessageCircleQuestion, Minimize2, PanelRight, Send, Settings2, Sparkles, Trash2, Upload, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MarkdownArticle } from './MarkdownArticle';
import { TutorSubjectIcon } from './TutorSubjectIcon';
import { readFormulaBooklet, relevantBookletExcerpt } from '../lib/booklet';
import type { FormulaBooklet } from '../lib/booklet';
import { offlineTutorPrompt } from '../lib/offlineTutor';
import { levels, providerOptions, requestTutor, subjects } from '../lib/tutorApi';
import type { ChatMessage, GuidanceLevel, Subject, TutorConnection, TutorReference } from '../lib/tutorApi';
import { useTutorStore } from '../store/useTutorStore';
import { useProfileStore } from '../store/useProfileStore';

const first = providerOptions[0];
const defaultConnection = (): Omit<TutorConnection, 'key'> => ({ provider: first.id, model: first.model, endpoint: first.endpoint });

export function TutorPanel() {
  const { pathname } = useLocation();
  const open = useTutorStore((state) => state.open);
  const minimized = useTutorStore((state) => state.minimized);
  const docked = useTutorStore((state) => state.docked);
  const storedContext = useTutorStore((state) => state.context);
  const openTutor = useTutorStore((state) => state.openTutor);
  const closeTutor = useTutorStore((state) => state.closeTutor);
  const minimizeTutor = useTutorStore((state) => state.minimizeTutor);
  const setDocked = useTutorStore((state) => state.setDocked);
  const setContext = useTutorStore((state) => state.setContext);
  const context = storedContext?.route === pathname ? storedContext : null;
  const [subject, setSubject] = useState<Subject>('Mathematics AA HL');
  const [level, setLevel] = useState<GuidanceLevel>(1);
  const profileStatus = useProfileStore((state) => state.status);
  const profile = useProfileStore((state) => state.profile);
  const saveConnection = useProfileStore((state) => state.saveConnection);
  const setLastProvider = useProfileStore((state) => state.setLastProvider);
  const [config, setConfig] = useState<Omit<TutorConnection, 'key'>>(defaultConnection);
  const [key, setKey] = useState(''); // Only persisted inside an unlocked encrypted profile after an explicit click.
  const [connectionNotice, setConnectionNotice] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [savedBookletId, setSavedBookletId] = useState('');
  const [booklet, setBooklet] = useState<FormulaBooklet | null>(null);
  const [bookletBusy, setBookletBusy] = useState(false);
  const [bookletError, setBookletError] = useState('');
  const [view, setView] = useState<'chat' | 'settings'>('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const drag = useRef<{ offsetX: number; offsetY: number } | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const conversationEnd = useRef<HTMLDivElement>(null);
  const request = useRef<AbortController | null>(null);
  const upload = useRef<HTMLInputElement>(null);
  const effectiveSubject = context?.subject ?? subject;

  useEffect(() => { try { localStorage.removeItem('sarang-tutor-connection'); } catch { /* Storage might be unavailable. */ } }, []);

  useEffect(() => {
    if (profileStatus === 'unlocked' && profile) {
      const option = providerOptions.find((item) => item.id === profile.lastProvider) ?? first;
      const saved = profile.providers[option.id];
      setConfig({ provider: option.id, model: saved?.model ?? option.model, endpoint: saved?.endpoint ?? option.endpoint });
      setKey(saved?.apiKey ?? '');
    } else {
      // Locking immediately forgets decrypted credentials, chat and document excerpts.
      request.current?.abort(); request.current = null;
      setKey(''); setConfig(defaultConnection()); setMessages([]); setBooklet(null);
      setSavedBookletId(''); setReveal(false); setInput(''); setBusy(false);
      setConnectionNotice('');
    }
  }, [profileStatus, profile?.lastProvider, profile?.providers]);

  useEffect(() => {
    if (profileStatus === 'unlocked' && savedBookletId === 'none') return;
    if (profileStatus !== 'unlocked' || !profile?.documents.some((document) => document.id === savedBookletId && document.kind === 'formula')) {
      setSavedBookletId(profile?.documents.find((document) => document.kind === 'formula')?.id ?? '');
    }
  }, [profileStatus, profile?.documents, savedBookletId]);

  useEffect(() => {
    request.current?.abort();
    request.current = null;
    setBusy(false); setReveal(false); setError(''); setInput('');
    const chatId = `${context?.key ?? `general:${effectiveSubject}`}:hint`;
    const saved = profileStatus === 'unlocked' ? useProfileStore.getState().profile?.chats.find((item) => item.id === chatId) : null;
    setMessages(saved?.messages ?? []);
    if (saved) setLevel(saved.guidanceLevel);
  }, [context?.key, context?.route, effectiveSubject, profileStatus]);
  useEffect(() => { conversationEnd.current?.scrollIntoView({ block: 'nearest' }); }, [messages, view]);
  useEffect(() => () => { request.current?.abort(); }, []);

  const canConnect = !!key.trim() && !!config.model.trim() && !!config.endpoint.trim();
  const selectedBooklet = profileStatus === 'unlocked' ? profile?.documents.find((document) => document.id === savedBookletId && document.kind === 'formula') : undefined;
  const activeBooklet: FormulaBooklet | null = booklet ?? (selectedBooklet ? { name: selectedBooklet.name, pages: selectedBooklet.pages, note: 'Saved in your encrypted profile. Check extracted notation.' } : null);
  const guide = useMemo(() => context?.scheme?.map((item) => `${item.code} (${item.marks}): ${item.text}`).join('\n') ?? '', [context]);
  const reference = (userText: string): TutorReference => ({
    subject: effectiveSubject,
    title: context?.title ?? `General ${effectiveSubject} question`,
    text: context?.text ?? 'No question or note was selected. Ask the learner to paste a specific prompt if needed.',
    sourceStatus: context?.sourceStatus,
    bookletExcerpt: activeBooklet ? relevantBookletExcerpt(activeBooklet, `${context?.title ?? ''} ${context?.text ?? ''} ${userText}`) : undefined,
    revealedGuide: reveal ? guide : undefined,
  });

  function saveConversation(history: ChatMessage[], revealMode: boolean) {
    const state = useProfileStore.getState();
    if (state.status === 'unlocked') state.saveChat(context?.key ?? `general:${effectiveSubject}`, context?.title ?? `General ${effectiveSubject}`,
      effectiveSubject, level, revealMode ? 'reveal' : 'hint', history);
  }
  function addReply(history: ChatMessage[], text: string, revealMode: boolean) {
    const next: ChatMessage[] = [...history, { role: 'assistant', content: text }];
    setMessages(next);
    saveConversation(next, revealMode);
  }

  async function respond(history: ChatMessage[], revealMode: boolean) {
    if (!canConnect) {
      if (revealMode) {
        addReply(history, guide
          ? 'The independently written guide for this item is visible below. Add your own API key in Tutor settings if you would like a model to talk through it.'
          : 'No worked solution is available offline for this item. Add your own API key in Tutor settings for a full explanation.', true);
      } else addReply(history, offlineTutorPrompt(effectiveSubject, context?.title ?? 'this topic', context?.text ?? '', level), false);
      return;
    }
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setBusy(true); setError('');
    try {
      // Guard context preparation separately so answers cannot enter hint-mode input.
      const target = { ...reference(history.at(-1)?.content ?? ''), revealedGuide: revealMode ? guide : undefined };
      const output = await requestTutor({ ...config, key }, target, history, level, revealMode, controller.signal);
      if (!controller.signal.aborted) addReply(history, output, revealMode);
    } catch (problem) {
      if (!controller.signal.aborted) setError(problem instanceof Error ? problem.message : 'The tutor could not respond.');
    } finally {
      if (!controller.signal.aborted) { setBusy(false); request.current = null; }
    }
  }

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next); setInput(''); saveConversation(next, reveal);
    void respond(next, reveal);
  }

  function explainAnswer() {
    if (!window.confirm('Reveal a worked answer? This is a deliberate switch from hints to solutions. The study guide is independently written, not an official mark scheme.')) return;
    request.current?.abort(); request.current = null; setBusy(false);
    setReveal(true); setMessages([]); setError('');
    const next: ChatMessage[] = [{ role: 'user', content: 'I selected Explain the answer for me. Please explain the solution and flag uncertainty.' }];
    setMessages(next); saveConversation(next, true);
    void respond(next, true);
  }

  function backToHints() {
    request.current?.abort(); request.current = null;
    useProfileStore.getState().removeChat(`${context?.key ?? `general:${effectiveSubject}`}:reveal`);
    setReveal(false); setMessages([]); setBusy(false); setError('');
  }

  function changeSubject(value: Subject) {
    setContext(null);
    setSubject(value);
    setMessages([]); setReveal(false); setError('');
  }

  async function onBooklet(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    setBookletBusy(true); setBookletError('');
    try { setBooklet(await readFormulaBooklet(file)); }
    catch (problem) { setBookletError(problem instanceof Error ? problem.message : 'Booklet could not be read.'); }
    finally { setBookletBusy(false); }
  }

  function startDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    if (docked || window.innerWidth < 768 || !panel.current) return;
    const box = panel.current.getBoundingClientRect();
    drag.current = { offsetX: event.clientX - box.left, offsetY: event.clientY - box.top };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function moveDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!drag.current || !panel.current) return;
    const box = panel.current.getBoundingClientRect();
    setPosition({
      x: Math.max(8, Math.min(window.innerWidth - box.width - 8, event.clientX - drag.current.offsetX)),
      y: Math.max(78, Math.min(window.innerHeight - box.height - 8, event.clientY - drag.current.offsetY)),
    });
  }
  function stopDrag() { drag.current = null; }

  if (!open || minimized) return <button type="button" aria-label={minimized ? 'Expand tutor' : 'Open Socratic tutor'} onClick={openTutor} className="fixed bottom-5 right-5 z-[80] inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line bg-ink px-4 text-[12px] font-semibold text-canvas shadow-float transition-transform hover:-translate-y-0.5 sm:px-5"><Sparkles size={16} aria-hidden="true" /><span className="hidden sm:inline">{minimized ? 'Continue tutoring' : 'Ask the tutor'}</span></button>;

  return <section ref={panel} aria-label="Socratic tutor" className={`fixed z-[80] flex flex-col overflow-hidden border border-line bg-canvas text-ink shadow-float ${docked ? 'bottom-0 right-0 top-[72px] w-[min(400px,100vw)] border-r-0 lg:w-[380px]' : 'bottom-2 right-2 h-[min(700px,calc(100dvh-90px))] w-[min(420px,calc(100vw-16px))] rounded-2xl sm:bottom-5 sm:right-5'}`} style={!docked && position && window.innerWidth >= 768 ? { left: position.x, top: position.y, right: 'auto', bottom: 'auto' } : undefined}>
    <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-4 sm:px-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-canvas" data-tip={`Tutor for ${effectiveSubject}`}><TutorSubjectIcon subject={effectiveSubject} size={19} /></span>
      <span className="min-w-0 flex-1"><span className="block text-[13px] font-semibold leading-tight">Your thinking partner</span><span className="block truncate text-[10px] text-muted">{reveal ? 'Solution mode, deliberately enabled' : canConnect ? `${providerOptions.find((item) => item.id === config.provider)?.label} · hints first` : 'Offline guidance · add a model for AI'}</span></span>
      {!docked && <button type="button" aria-label="Drag tutor window" data-tip="Drag tutor to move" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={stopDrag} onPointerCancel={stopDrag} className="hidden h-8 w-8 touch-none cursor-grab items-center justify-center text-muted active:cursor-grabbing md:flex"><Grip size={15} aria-hidden="true" /></button>}
      <button type="button" aria-label={docked ? 'Float tutor' : 'Dock tutor on right'} data-tip={docked ? 'Float tutor' : 'Dock tutor on right'} onClick={() => { setDocked(!docked); setPosition(null); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink">{docked ? <Maximize2 size={15} /> : <PanelRight size={16} />}</button>
      <button type="button" aria-label="Minimize tutor" data-tip="Minimize tutor" onClick={minimizeTutor} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><Minimize2 size={16} /></button>
      <button type="button" aria-label="Close tutor" data-tip="Close tutor" onClick={() => { request.current?.abort(); closeTutor(); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><X size={17} /></button>
    </div>

    <div className="flex shrink-0 items-center gap-1 border-b border-line px-4 py-2" role="tablist" aria-label="Tutor views">
      <button type="button" role="tab" aria-selected={view === 'chat'} onClick={() => setView('chat')} className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${view === 'chat' ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'}`}>Conversation</button>
      <button type="button" role="tab" aria-selected={view === 'settings'} onClick={() => setView('settings')} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold ${view === 'settings' ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'}`}><Settings2 size={13} /> Settings</button>
      <span className="ml-auto font-mono text-[10px] text-faint">DP1 / TUTOR</span>
    </div>

    {view === 'settings' ? <div role="tabpanel" className="min-h-0 flex-1 space-y-6 overflow-y-auto px-6 py-6 text-[12px]">
      <div><h2 className="text-[17px] font-semibold tracking-tight">Connect a model</h2><p className="mt-2 leading-relaxed text-muted">Optional. Enter your own provider credentials to enable live AI. Offline guided questions work without them.</p></div>
      <label className="block font-semibold">Provider<select value={config.provider} onChange={(event) => {
        const option = providerOptions.find((item) => item.id === event.target.value) ?? first;
        const saved = profileStatus === 'unlocked' ? useProfileStore.getState().profile?.providers[option.id] : undefined;
        setConfig({ provider: option.id, model: saved?.model ?? option.model, endpoint: saved?.endpoint ?? option.endpoint });
        setKey(saved?.apiKey ?? ''); setConnectionNotice('');
        if (profileStatus === 'unlocked') setLastProvider(option.id);
      }} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2.5 font-normal text-ink">{providerOptions.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
      <label className="block font-semibold">Model ID<input value={config.model} onChange={(event) => setConfig((previous) => ({ ...previous, model: event.target.value }))} spellCheck={false} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2.5 font-mono text-[11px] font-normal text-ink" placeholder="Enter the model ID from your provider" /></label>
      <label className="block font-semibold">Endpoint or API base URL<input value={config.endpoint} onChange={(event) => setConfig((previous) => ({ ...previous, endpoint: event.target.value }))} spellCheck={false} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2.5 font-mono text-[11px] font-normal text-ink" placeholder="https://your-provider.example/v1/chat/completions" /><span className="mt-1.5 block text-[11px] font-normal leading-relaxed text-muted">{providerOptions.find((item) => item.id === config.provider)?.help}</span></label>
      <label className="block font-semibold">Your API key<input type={showApiKey ? 'text' : 'password'} autoComplete="off" value={key} onChange={(event) => { setKey(event.target.value); setConnectionNotice(''); }} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2.5 font-mono text-[11px] font-normal text-ink" placeholder={profileStatus === 'unlocked' ? 'Enter your private key' : 'Unlock profile to save this key'} /></label>
      <label className="flex items-center gap-2 text-[11px] font-normal text-muted"><input type="checkbox" checked={showApiKey} onChange={(event) => setShowApiKey(event.target.checked)} /> Show key</label>
      {profileStatus === 'unlocked' ? <div className="space-y-2 rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed">
        <p>{profile?.providers[config.provider]?.apiKey ? 'A key for this provider is saved in your encrypted profile.' : 'No key saved for this provider yet.'}</p>
        <div className="flex flex-wrap gap-2"><button type="button" onClick={() => { saveConnection(config.provider, { apiKey: key, model: config.model, endpoint: config.endpoint }); setConnectionNotice('Connection queued for encrypted storage.'); }} className="rounded-full bg-ink px-3 py-2 font-semibold text-canvas">Save connection to profile</button>
          {profile?.providers[config.provider]?.apiKey && <button type="button" onClick={() => { setKey(''); saveConnection(config.provider, { apiKey: '', model: config.model, endpoint: config.endpoint }); setConnectionNotice('Saved key removed from profile.'); }} className="rounded-full border border-line px-3 py-2 font-semibold">Remove saved key</button>}</div>
        {connectionNotice && <p role="status" className="text-muted">{connectionNotice}</p>}
      </div> : <p className="rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed text-muted">The key is temporary until you <Link to="/profile" className="font-semibold underline underline-offset-2">unlock or create an encrypted profile</Link>. It is never saved in plain browser preferences.</p>}
      <p className="rounded-lg border border-line bg-surface px-3 py-3 text-[11px] leading-[1.6] text-muted"><KeyRound size={13} className="mb-1 inline" /> Your profile uses password-derived AES-GCM encryption. While unlocked, a key is accessible in this tab's memory and its developer tools. A request sends it, the question, chat, and any selected booklet excerpts directly to your chosen provider. Use a restricted personal key, not a shared device. Some providers block browser requests with CORS. This static site has no server proxy and cannot hide client-side keys from the browser.</p>
      <div className="border-t border-line pt-5"><div className="mb-3 flex items-center justify-between"><span className="font-semibold">Formula booklet</span><BookOpen size={16} className="text-muted" /></div>
        <p className="mb-3 text-[11px] leading-[1.6] text-muted">No booklet is bundled. Upload one for this visit or select a booklet from your unlocked <Link to="/profile" className="font-semibold underline underline-offset-2">private library</Link>. Relevant extracted passages are sent only if you make a model request. PDF equations may lose layout.</p>
        {profileStatus === 'unlocked' && !!profile?.documents.some((document) => document.kind === 'formula') && <label className="mb-3 block text-[11px] font-semibold">Saved booklet
          <select value={savedBookletId} onChange={(event) => { setSavedBookletId(event.target.value); setBooklet(null); }} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2 text-[11px] font-normal text-ink">
            <option value="none">Do not reference a saved booklet</option>
            {profile.documents.filter((document) => document.kind === 'formula').map((document) => <option key={document.id} value={document.id}>{document.name}</option>)}
          </select></label>}
        {selectedBooklet && !booklet && <p className="mb-3 rounded-lg border border-line bg-surface p-2.5 text-[10px] text-muted">Available after unlock: {selectedBooklet.name}. Extracted text may be incomplete. The tutor receives only relevant excerpts if you send a message.</p>}
        <input ref={upload} type="file" accept=".pdf,.txt,.md,.markdown,application/pdf,text/plain,text/markdown" className="hidden" onChange={onBooklet} aria-label="Choose a formula booklet file" />
        <button type="button" disabled={bookletBusy} onClick={() => upload.current?.click()} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-[11px] font-semibold hover:border-ink disabled:opacity-50"><Upload size={13} /> {bookletBusy ? 'Reading file...' : booklet ? 'Replace booklet' : 'Choose booklet'}</button>
        {booklet && <div className="mt-3 rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed"><span className="font-semibold">{booklet.name}</span><span className="block text-muted">{booklet.pages.length} page(s) with selectable text. {booklet.note}</span><button type="button" onClick={() => setBooklet(null)} className="mt-2 inline-flex items-center gap-1.5 font-semibold underline"><Trash2 size={12} /> Remove from this visit</button></div>}
        {bookletError && <p role="alert" className="mt-2 text-[11px] text-ink">{bookletError}</p>}
      </div>
      <button type="button" onClick={() => setView('chat')} className="rounded-full bg-ink px-4 py-2.5 text-[11px] font-semibold text-canvas">Return to conversation</button>
    </div> : <div role="tabpanel" className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0 space-y-3 border-b border-line px-5 py-4">
        {context ? <div className="flex items-start gap-2.5 rounded-lg bg-surface px-3 py-2.5"><BookOpen size={15} className="mt-0.5 shrink-0" /><div className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-wider text-muted">Ask about</span><span className="block truncate text-[12px] font-semibold" title={context.title}>{context.title}</span></div><button type="button" onClick={() => setContext(null)} aria-label="Switch to general chat" data-tip="Return to general chat" className="rounded text-muted hover:text-ink"><X size={14} /></button></div> : <label className="flex items-center justify-between gap-2 text-[11px] font-semibold"><span className="inline-flex items-center gap-2"><TutorSubjectIcon subject={effectiveSubject} size={15} /> Subject</span> <span className="relative min-w-0"><select value={effectiveSubject} onChange={(event) => changeSubject(event.target.value as Subject)} className="max-w-[210px] appearance-none rounded-full border border-line bg-canvas py-1.5 pl-3 pr-7 text-[11px] font-medium text-ink">{subjects.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={13} className="pointer-events-none absolute right-2 top-2 text-muted" /></span></label>}
        <label className="flex items-center justify-between gap-2 text-[11px] font-semibold">Guidance level <select value={level} onChange={(event) => setLevel(Number(event.target.value) as GuidanceLevel)} className="max-w-[65%] rounded-full border border-line bg-canvas px-2.5 py-1.5 text-[11px] text-ink">{levels.map((item) => <option key={item.value} value={item.value}>{item.value}. {item.label}</option>)}</select></label>
        <p className="text-[10px] leading-relaxed text-muted">{levels[level - 1].detail}. {activeBooklet ? `Booklet available: ${activeBooklet.name}.` : 'No formula booklet selected.'}</p>
      </div>
      <div aria-live="polite" aria-relevant="additions" className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {!messages.length && <div className="rounded-xl border border-line bg-surface px-4 py-4 text-[12px] leading-[1.65]"><MessageCircleQuestion size={18} className="mb-2 text-muted" /><p className="font-semibold">Start with what you have tried.</p><p className="mt-1 text-muted">I will help you find the next step without giving away the answer. Choose one of five guidance levels above.</p></div>}
        {messages.map((message, index) => <div key={index} className={`rounded-xl px-3.5 py-3 text-[12px] leading-relaxed ${message.role === 'user' ? 'ml-6 bg-ink text-canvas' : 'tutor-answer-fade mr-5 border border-line bg-surface'}`}><span className={`mb-1 block font-mono text-[9px] font-semibold uppercase tracking-widest ${message.role === 'user' ? 'text-canvas/60' : 'text-muted'}`}>{message.role === 'user' ? 'You' : <span className="inline-flex items-center gap-1.5"><TutorSubjectIcon subject={effectiveSubject} size={12} /> {canConnect ? 'Tutor' : 'Offline prompt'}</span>}</span>{message.role === 'assistant' ? <MarkdownArticle source={message.content} compact /> : <p className="whitespace-pre-wrap">{message.content}</p>}</div>)}
        {busy && <p role="status" className="text-[11px] text-muted">Thinking about your next step...</p>}
        {error && <p role="alert" className="rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed text-ink">{error} <button type="button" onClick={() => { setError(''); void respond(messages, reveal); }} className="ml-1 font-semibold underline">Try again</button></p>}
        {reveal && guide && <div className="rounded-xl border border-line bg-surface p-4"><p className="section-label mb-2">Independently written guide</p><p className="mb-3 text-[10px] text-muted">Not an official IB mark scheme. Revealed only after your explicit choice.</p>{context?.scheme?.map((point, index) => <div key={index} className="border-t border-line py-2"><span className="font-mono text-[10px] font-semibold">{point.code} · {point.marks}</span><MarkdownArticle source={point.text} compact /></div>)}</div>}
        <div ref={conversationEnd} />
      </div>
      <div className="shrink-0 border-t border-line bg-canvas px-5 py-4">
        {reveal ? <button type="button" onClick={backToHints} className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-2 text-[11px] font-semibold hover:bg-surface"><Check size={13} /> Back to hints, clear this solution</button> : <button type="button" onClick={explainAnswer} className="mb-3 w-full rounded-full border border-line py-2 text-[11px] font-semibold text-muted hover:border-ink hover:text-ink">Explain the answer for me</button>}
        <form onSubmit={send} className="flex items-end gap-2"><label htmlFor="tutor-message" className="sr-only">Message to tutor</label><textarea id="tutor-message" rows={2} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} placeholder="What have you tried so far?" className="max-h-28 min-h-[52px] min-w-0 flex-1 resize-y rounded-xl border border-line bg-surface px-3 py-2.5 text-[12px] leading-relaxed text-ink placeholder:text-faint" /><button type="submit" disabled={!input.trim() || busy} aria-label="Send tutor message" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-canvas disabled:opacity-45"><Send size={16} /></button></form>
        <p className="mt-2 text-[10px] leading-relaxed text-muted">{canConnect ? 'Requests go straight from this browser to your configured provider.' : 'Offline prompts are fixed guidance, not live AI. Configure a model in Settings.'} Tutor responses can be wrong; verify your work.</p>
      </div>
    </div>}
  </section>;
}
