import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent, PointerEvent as ReactPointerEvent } from 'react';
import { BookOpen, Check, ChevronDown, Columns2, Grip, KeyRound, Maximize2, MessageCircleQuestion, Minimize2, PanelRight, Paperclip, Send, Settings2, Trash2, Upload, X } from 'lucide-react';
import { TutorLauncher } from './TutorLauncher';
import { TutorGlyph } from './TutorGlyph';
import { Link, useLocation } from 'react-router-dom';
import { MarkdownArticle } from './MarkdownArticle';
import { TutorSubjectIcon } from './TutorSubjectIcon';
import { notify } from './ui/toast';
import { readFormulaBooklet, relevantBookletExcerpt } from '../lib/booklet';
import type { FormulaBooklet } from '../lib/booklet';
import { offlineTutorPrompt } from '../lib/offlineTutor';
import { levels, providerOptions, requestTutor, visionSupport } from '../lib/tutorApi';
import type { ChatMessage, Effort, GuidanceLevel, TutorConnection, TutorImage, TutorReference } from '../lib/tutorApi';
import { ClaudeModelSelector, EFFORT_LEVELS, type EffortValue } from './ui/claude-model-selector';
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
  const closeTutor = useTutorStore((state) => state.closeTutor);
  const minimizeTutor = useTutorStore((state) => state.minimizeTutor);
  const setDocked = useTutorStore((state) => state.setDocked);
  const setContext = useTutorStore((state) => state.setContext);
  const context = storedContext?.route === pathname ? storedContext : null;
  const [level, setLevel] = useState<GuidanceLevel>(1);
  const [effort, setEffort] = useState<EffortValue>(2);
  const [guidanceOpen, setGuidanceOpen] = useState(false);
  const [effortOpen, setEffortOpen] = useState(false);
  const [layout, setLayout] = useState<'panel' | 'full' | 'split'>('panel');
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
  const [image, setImage] = useState<TutorImage | null>(null);
  const [imageError, setImageError] = useState('');
  const [compatibleConfirmed, setCompatibleConfirmed] = useState(false);
  const [typing, setTyping] = useState<{ index: number; text: string; visible: number } | null>(null);
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const drag = useRef<{ offsetX: number; offsetY: number } | null>(null);
  const panel = useRef<HTMLElement>(null);
  const conversationEnd = useRef<HTMLDivElement>(null);
  const request = useRef<AbortController | null>(null);
  const upload = useRef<HTMLInputElement>(null);
  const imagePicker = useRef<HTMLInputElement>(null);
  const effectiveSubject = 'Mathematics AA HL' as const;

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
      setSavedBookletId(''); setReveal(false); setInput(''); setImage(null); setTyping(null); setBusy(false);
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
    setBusy(false); setReveal(false); setError(''); setInput(''); setImage(null); setTyping(null);
    const chatId = `${context?.key ?? `general:${effectiveSubject}`}:hint`;
    const saved = profileStatus === 'unlocked' ? useProfileStore.getState().profile?.chats.find((item) => item.id === chatId) : null;
    setMessages(saved?.messages ?? context?.seedMessages ?? []);
    if (saved) setLevel(saved.guidanceLevel);
  }, [context?.key, context?.route, effectiveSubject, profileStatus]);
  useEffect(() => { conversationEnd.current?.scrollIntoView({ block: 'nearest' }); }, [messages, view, typing?.visible]);
  useEffect(() => () => { request.current?.abort(); }, []);
  useEffect(() => { setCompatibleConfirmed(false); }, [config.provider, config.endpoint, config.model]);
  useEffect(() => {
    if (!typing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyping(null); return; }
    const timer = window.setInterval(() => setTyping((previous) => {
      if (!previous) return null;
      const visible = Math.min(previous.text.length, previous.visible + Math.max(2, Math.ceil(previous.text.length / 85)));
      return visible >= previous.text.length ? null : { ...previous, visible };
    }), 26);
    return () => window.clearInterval(timer);
  }, [typing?.index, typing?.text]);
  useEffect(() => {
    if (!open || minimized || layout === 'panel') return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setLayout('panel'); };
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', escape); };
  }, [open, minimized, layout]);

  const canConnect = !!key.trim() && !!config.model.trim() && !!config.endpoint.trim();
  const vision = visionSupport(config, compatibleConfirmed);
  const canAttach = canConnect && vision.supported;
  useEffect(() => {
    if (image && !canAttach) { setImage(null); setImageError('The attached image was removed because this connection no longer supports it. Attach it again after checking the provider.'); }
  }, [canAttach, image]);
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

  function saveConversation(history: ChatMessage[], revealMode: boolean, hintLevel: GuidanceLevel = level) {
    const state = useProfileStore.getState();
    if (state.status === 'unlocked') state.saveChat(context?.key ?? `general:${effectiveSubject}`, context?.title ?? `General ${effectiveSubject}`,
      effectiveSubject, hintLevel, revealMode ? 'reveal' : 'hint', history.map((message) => message.image ? { role: message.role, content: `${message.content}\n[Image sent for this message only. Image bytes are not saved.]` } : message));
  }
  function addReply(history: ChatMessage[], text: string, revealMode: boolean, hintLevel: GuidanceLevel) {
    const next: ChatMessage[] = [...history, { role: 'assistant', content: text }];
    setMessages(next);
    setTyping({ index: next.length - 1, text, visible: 0 });
    saveConversation(next, revealMode, hintLevel);
  }

  async function respond(history: ChatMessage[], revealMode: boolean, hintLevel: GuidanceLevel = level) {
    if (!canConnect) {
      if (revealMode) {
        addReply(history, guide
          ? 'The independently written guide for this item is visible below. Add your own API key in Tutor settings if you would like a model to talk through it.'
          : 'No worked solution is available offline for this item. Add your own API key in Tutor settings for a full explanation.', true, hintLevel);
      } else addReply(history, offlineTutorPrompt(context?.title ?? 'your math question', `${context?.text ?? ''} ${history.at(-1)?.content ?? ''}`, hintLevel, effort), false, hintLevel);
      return;
    }
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setBusy(true); setError('');
    try {
      // Guard context preparation separately so answers cannot enter hint-mode input.
      const target = { ...reference(history.at(-1)?.content ?? ''), revealedGuide: revealMode ? guide : undefined };
      const output = await requestTutor({ ...config, key }, target, history, hintLevel, revealMode, controller.signal, effort as Effort, compatibleConfirmed);
      if (!controller.signal.aborted) addReply(history, output, revealMode, hintLevel);
    } catch (problem) {
      if (!controller.signal.aborted) { setError(problem instanceof Error ? problem.message : 'The tutor could not respond.'); notify({ title: 'Tutor request failed', message: 'Check your connection settings or try offline guidance.', variant: 'error', id: 'tutor-error' }); }
    } finally {
      if (!controller.signal.aborted) { setBusy(false); request.current = null; }
    }
  }

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if ((!text && !image) || busy) return;
    if (image && !canAttach) { setImageError(canConnect ? vision.reason : 'Offline guidance cannot read images.'); return; }
    const next: ChatMessage[] = [...messages, { role: 'user', content: text || 'Please help me reason about the mathematics in my attached image without revealing the answer.', ...(image ? { image } : {}) }];
    setMessages(next); setInput(''); setImage(null); setImageError(''); setTyping(null); saveConversation(next, reveal);
    void respond(next, reveal);
  }

  function askHint() {
    if (busy || reveal) return;
    if (image) { setImageError('To include your selected image, press Send. Ask next hint sends text only.'); return; }
    if (!context && !input.trim()) { setError('Choose a maths question or type your own before asking for a hint.'); return; }
    const text = input.trim() ? `${input.trim()}\n\nPlease give me a ${levels[level - 1].label} hint, not the answer.` : `Please give me a ${levels[level - 1].label} hint for this question. Do not reveal the answer.`;
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next); setInput(''); setTyping(null); setError(''); saveConversation(next, false, level);
    void respond(next, false, level);
  }

  function explainAnswer() {
    if (!window.confirm('Reveal a worked answer? This is a deliberate switch from hints to solutions. The study guide is independently written, not an official mark scheme.')) return;
    request.current?.abort(); request.current = null; setBusy(false);
    setReveal(true); setMessages([]); setImage(null); setTyping(null); setError('');
    const next: ChatMessage[] = [{ role: 'user', content: 'I selected Explain the answer for me. Please explain the solution and flag uncertainty.' }];
    setMessages(next); saveConversation(next, true);
    void respond(next, true);
  }

  function backToHints() {
    request.current?.abort(); request.current = null;
    useProfileStore.getState().removeChat(`${context?.key ?? `general:${effectiveSubject}`}:reveal`);
    setReveal(false); setMessages([]); setTyping(null); setImage(null); setBusy(false); setError('');
  }

  async function onBooklet(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    setBookletBusy(true); setBookletError('');
    try { const loaded = await readFormulaBooklet(file); setBooklet(loaded); notify({ title: 'Booklet ready', message: `${loaded.pages.length} pages are available for this visit. Check the extracted notation.`, variant: 'success', id: 'tutor-booklet' }); }
    catch (problem) { setBookletError(problem instanceof Error ? problem.message : 'Booklet could not be read.'); notify({ title: 'Booklet not loaded', message: 'Choose a supported text or PDF file and try again.', variant: 'error', id: 'tutor-booklet' }); }
    finally { setBookletBusy(false); }
  }

  async function onImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    if (!canAttach) { setImageError(canConnect ? vision.reason : 'Add a model ID, endpoint and API key to enable image input. Offline prompts cannot see pictures.'); return; }
    setImageError('');
    try {
      if (file.size < 12 || file.size > 2 * 1024 * 1024) throw new Error('Choose one JPG, PNG or WebP image smaller than 2 MB.');
      const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
      const mimeType = bytes[0] === 0xff && bytes[1] === 0xd8 ? 'image/jpeg' : bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47 ? 'image/png' :
        bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50 ? 'image/webp' : null;
      if (!mimeType || (file.type && file.type !== mimeType)) throw new Error('This file is not a supported JPG, PNG or WebP image.');
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('This image could not be read.'));
        reader.onload = () => resolve(String(reader.result));
        reader.readAsDataURL(file);
      });
      if (!dataUrl.startsWith(`data:${mimeType};base64,`)) throw new Error('This image could not be encoded safely.');
      setImage({ dataUrl, mimeType, name: file.name.slice(0, 120) });
      notify({ title: 'Image ready for your next message', message: 'Nothing has been sent. It leaves this tab only when you press Send.', variant: 'success', id: 'tutor-image' });
    } catch (problem) { setImageError(problem instanceof Error ? problem.message : 'Could not read that image.'); }
  }

  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (layout !== 'panel' || docked || window.innerWidth < 768 || !panel.current || (event.target as HTMLElement).closest('button, input, select, a')) return;
    const box = panel.current.getBoundingClientRect();
    drag.current = { offsetX: event.clientX - box.left, offsetY: event.clientY - box.top };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function moveDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current || !panel.current) return;
    const box = panel.current.getBoundingClientRect();
    setPosition({
      x: Math.max(8, Math.min(window.innerWidth - box.width - 8, event.clientX - drag.current.offsetX)),
      y: Math.max(78, Math.min(window.innerHeight - box.height - 8, event.clientY - drag.current.offsetY)),
    });
  }
  function stopDrag() { drag.current = null; }

  if (!open || minimized) return <TutorLauncher />;

  return <section ref={panel} aria-label="Socratic tutor" className={`fixed flex flex-col overflow-hidden border border-line bg-canvas text-ink shadow-float ${layout !== 'panel' ? 'inset-0 z-[110] h-[100dvh] w-screen border-0' : docked ? 'bottom-0 right-0 top-[72px] z-[80] w-[min(400px,100vw)] border-r-0 lg:w-[380px]' : 'bottom-2 right-2 z-[80] h-[min(700px,calc(100dvh-90px))] w-[min(420px,calc(100vw-16px))] rounded-2xl sm:bottom-5 sm:right-5'}`} style={layout === 'panel' && !docked && position && window.innerWidth >= 768 ? { left: position.x, top: position.y, right: 'auto', bottom: 'auto' } : undefined}>
    <div onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={stopDrag} onPointerCancel={stopDrag} className={`flex items-center gap-2 border-b border-line bg-surface px-4 py-3 sm:px-5 ${docked || layout !== 'panel' ? '' : 'touch-none cursor-grab active:cursor-grabbing'}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-canvas" aria-hidden="true"><TutorGlyph width={20} height={20} /></span>
      <span className="min-w-0 flex-1"><span className="block text-[13px] font-semibold leading-tight">Your thinking partner</span><span className="block truncate text-[10px] text-muted">{reveal ? 'Solution mode, deliberately enabled' : canConnect ? `${providerOptions.find((item) => item.id === config.provider)?.label} · hints first` : 'Offline guidance · add a model for AI'}</span></span>
      {!docked && layout === 'panel' && <span aria-hidden="true" className="hidden h-8 w-8 items-center justify-center text-muted md:flex"><Grip size={15} /></span>}
      <button type="button" aria-label={layout === 'full' ? 'Restore tutor panel' : 'Fullscreen tutor'} aria-pressed={layout === 'full'} data-tip={layout === 'full' ? 'Restore panel' : 'Fullscreen tutor'} onClick={() => setLayout(layout === 'full' ? 'panel' : 'full')} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><Maximize2 size={15} /></button>
      <button type="button" aria-label={layout === 'split' ? 'Restore tutor panel' : 'Split practice: question left, tutor right'} aria-pressed={layout === 'split'} data-tip="Question left, tutor right" onClick={() => setLayout(layout === 'split' ? 'panel' : 'split')} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><Columns2 size={16} /></button>
      {layout === 'panel' && <button type="button" aria-label={docked ? 'Float tutor' : 'Dock tutor on right'} data-tip={docked ? 'Float tutor' : 'Dock tutor on right'} onClick={() => { setDocked(!docked); setPosition(null); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink">{docked ? <Maximize2 size={15} /> : <PanelRight size={16} />}</button>}
      <button type="button" aria-label="Minimize tutor" data-tip="Minimize tutor" onClick={minimizeTutor} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><Minimize2 size={16} /></button>
      <button type="button" aria-label="Close tutor" data-tip="Close tutor" onClick={() => { request.current?.abort(); closeTutor(); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-raised hover:text-ink"><X size={17} /></button>
    </div>

    <div className={`flex min-h-0 flex-1 ${layout === 'split' ? 'flex-col md:flex-row' : ''}`}>
      {layout === 'split' && <aside aria-label="Question alongside tutor" className="h-[32%] shrink-0 overflow-y-auto border-b border-line bg-surface px-5 py-5 md:h-auto md:w-1/2 md:border-b-0 md:border-r md:px-8 md:py-8 lg:w-[55%]">
        <p className="section-label">QUESTION / YOUR WORKSPACE</p>
        {context ? <><div className="mt-3 flex flex-wrap items-center justify-between gap-2"><h2 className="text-[19px] font-semibold tracking-tight">{context.title}</h2><Link to={context.route} className="text-[11px] font-semibold underline">Open on page</Link></div><p className="mt-2 text-[10px] text-muted">{context.sourceStatus ?? 'Study item'} · Independent guides stay hidden until you reveal them.</p><div className="mt-5 rounded-xl border border-line bg-canvas p-4 sm:p-6"><MarkdownArticle source={context.text} compact /></div></> :
          <div className="mt-6 rounded-xl border border-line bg-canvas p-6 text-[12px] leading-relaxed"><p className="font-semibold">Select a math question first.</p><p className="mt-2 text-muted">Use “Ask about this question” from the bank, or type a problem in the tutor on the right.</p><Link to="/practice" className="mt-4 inline-block font-semibold underline">Open question bank</Link></div>}
      </aside>}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
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
      <div className="rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed"><p className="font-semibold">Image input: {canAttach ? 'available for this model' : 'off'}</p><p className="mt-1 text-muted">{canConnect ? vision.reason : 'Add a model ID, endpoint and API key. Offline guidance cannot see images.'} The provider decides final support and image costs.</p>
        {config.provider === 'compatible' && <label className="mt-3 flex items-start gap-2 text-muted"><input type="checkbox" checked={compatibleConfirmed} onChange={(event) => setCompatibleConfirmed(event.target.checked)} className="mt-0.5" /> I verified this exact model and /chat/completions endpoint accept image_url input. This confirmation is only for this visit.</label>}
        <p className="mt-2 text-muted">One selected image is sent directly to the configured provider only when you press Send. It is not saved with encrypted chat history and is not resent in later messages.</p>
      </div>
      {profileStatus === 'unlocked' ? <div className="space-y-2 rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed">
        <p>{profile?.providers[config.provider]?.apiKey ? 'A key for this provider is saved in your encrypted profile.' : 'No key saved for this provider yet.'}</p>
        <div className="flex flex-wrap gap-2"><button type="button" onClick={() => { saveConnection(config.provider, { apiKey: key, model: config.model, endpoint: config.endpoint }); setConnectionNotice('Connection queued for encrypted storage.'); notify({ title: 'Connection saved', message: 'Provider settings are queued for encrypted local storage.', variant: 'success', id: 'tutor-connection' }); }} className="rounded-full bg-ink px-3 py-2 font-semibold text-canvas">Save connection to profile</button>
          {profile?.providers[config.provider]?.apiKey && <button type="button" onClick={() => { setKey(''); saveConnection(config.provider, { apiKey: '', model: config.model, endpoint: config.endpoint }); setConnectionNotice('Saved key removed from profile.'); notify({ title: 'Saved key removed', message: 'The provider connection was updated in your encrypted profile.', variant: 'success', id: 'tutor-connection' }); }} className="rounded-full border border-line px-3 py-2 font-semibold">Remove saved key</button>}</div>
        {connectionNotice && <p role="status" className="text-muted">{connectionNotice}</p>}
      </div> : <p className="rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed text-muted">The key is temporary until you <Link to="/profile" className="font-semibold underline underline-offset-2">unlock or create an encrypted profile</Link>. It is never saved in plain browser preferences.</p>}
      <p className="rounded-lg border border-line bg-surface px-3 py-3 text-[11px] leading-[1.6] text-muted"><KeyRound size={13} className="mb-1 inline" /> Your profile uses password-derived AES-GCM encryption. While unlocked, a key is accessible in this tab's memory and its developer tools. A request sends it, the question, chat, any image you explicitly attach, and any selected booklet excerpts directly to your configured provider. Use a restricted personal key, not a shared device. Some providers block browser requests with CORS. This static site has no server proxy and cannot hide client-side keys from the browser.</p>
      <div className="border-t border-line pt-5"><div className="mb-3 flex items-center justify-between"><span className="font-semibold">Formula booklet</span><BookOpen size={16} className="text-muted" /></div>
        <p className="mb-3 text-[11px] leading-[1.6] text-muted">No PDF is bundled. <Link to="/formula-booklet" className="font-semibold underline underline-offset-2">View the provided Drive booklet or your own PDF</Link>. To use its text in tutoring, choose a file for this visit or select a booklet from your unlocked <Link to="/profile" className="font-semibold underline underline-offset-2">private library</Link>. Only relevant extracted passages are sent with a model request. PDF equations may lose layout.</p>
        {profileStatus === 'unlocked' && !!profile?.documents.some((document) => document.kind === 'formula') && <label className="mb-3 block text-[11px] font-semibold">Saved booklet
          <select value={savedBookletId} onChange={(event) => { setSavedBookletId(event.target.value); setBooklet(null); }} className="mt-2 w-full rounded-lg border border-line bg-canvas p-2 text-[11px] font-normal text-ink">
            <option value="none">Do not reference a saved booklet</option>
            {profile.documents.filter((document) => document.kind === 'formula').map((document) => <option key={document.id} value={document.id}>{document.name}</option>)}
          </select></label>}
        {selectedBooklet && !booklet && <p className="mb-3 rounded-lg border border-line bg-surface p-2.5 text-[10px] text-muted">Available after unlock: {selectedBooklet.name}. Extracted text may be incomplete. The tutor receives only relevant excerpts if you send a message.</p>}
        <input ref={upload} type="file" accept=".pdf,.txt,.md,.markdown,application/pdf,text/plain,text/markdown" className="hidden" onChange={onBooklet} aria-label="Choose a formula booklet file" />
        <button type="button" disabled={bookletBusy} onClick={() => upload.current?.click()} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 text-[11px] font-semibold hover:border-ink disabled:opacity-50"><Upload size={13} /> {bookletBusy ? 'Reading file...' : booklet ? 'Replace booklet' : 'Choose booklet'}</button>
        {booklet && <div className="mt-3 rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed"><span className="font-semibold">{booklet.name}</span><span className="block text-muted">{booklet.pages.length} page(s) with selectable text. {booklet.note}</span><button type="button" onClick={() => { setBooklet(null); notify({ title: 'Visit booklet removed', message: 'No uploaded booklet is held in this visit.', variant: 'success', id: 'tutor-booklet' }); }} className="mt-2 inline-flex items-center gap-1.5 font-semibold underline"><Trash2 size={12} /> Remove from this visit</button></div>}
        {bookletError && <p role="alert" className="mt-2 text-[11px] text-ink">{bookletError}</p>}
      </div>
      <button type="button" onClick={() => setView('chat')} className="rounded-full bg-ink px-4 py-2.5 text-[11px] font-semibold text-canvas">Return to conversation</button>
    </div> : <div role="tabpanel" className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0 border-b border-line px-5 py-2.5">
        {context ? <div className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2"><BookOpen size={14} className="shrink-0" /><span className="min-w-0 flex-1 truncate text-[11px] font-semibold" title={context.title}>{context.title}</span><button type="button" onClick={() => setContext(null)} aria-label="Switch to general math chat" className="rounded text-muted hover:text-ink"><X size={14} /></button></div> :
          <div className="flex items-center justify-between gap-2 text-[10px] text-muted"><span className="inline-flex items-center gap-1.5"><TutorSubjectIcon subject={effectiveSubject} size={14} /> Mathematics AA HL only</span><Link to="/formula-booklet" className="inline-flex items-center gap-1 font-semibold underline"><BookOpen size={12} /> Booklet</Link></div>}
      </div>
      <div aria-live={typing ? 'off' : 'polite'} aria-relevant="additions" className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <div className={`mx-auto w-full space-y-4 ${layout === 'panel' ? '' : 'max-w-[820px]'}`}>
          {!messages.length && <div className="rounded-xl border border-line bg-surface px-4 py-4 text-[12px] leading-[1.65]"><MessageCircleQuestion size={18} className="mb-2 text-muted" /><p className="font-semibold">Start with what you have tried.</p><p className="mt-1 text-muted">Pick a hint step near Send, or write your own math question. Solutions are shown only if you deliberately switch to reveal mode.</p></div>}
          {messages.map((message, index) => <div key={index} className={`rounded-xl px-3.5 py-3 text-[12px] leading-relaxed ${message.role === 'user' ? 'ml-5 bg-ink text-canvas' : 'tutor-answer-fade mr-4 border border-line bg-surface'}`}><span className={`mb-1 block font-mono text-[9px] font-semibold uppercase tracking-widest ${message.role === 'user' ? 'text-canvas/60' : 'text-muted'}`}>{message.role === 'user' ? 'You' : <span className="inline-flex items-center gap-1.5"><TutorSubjectIcon subject={effectiveSubject} size={12} /> {canConnect ? 'Tutor' : 'Offline prompt'}</span>}</span>
            {message.role === 'assistant' ? typing?.index === index ? <p className="whitespace-pre-wrap">{typing.text.slice(0, typing.visible)}<span className="tutor-typing-cursor" aria-hidden="true">|</span></p> : <MarkdownArticle source={message.content} compact /> : <><p className="whitespace-pre-wrap">{message.content}</p>{message.image && <div className="mt-2"><img src={message.image.dataUrl} alt={`Image sent with this message: ${message.image.name}`} className="max-h-[155px] max-w-full rounded-lg object-contain" /><p className="mt-1 text-[9px] text-canvas/70">Image stays in this tab only. Reattach for a follow-up.</p></div>}</>}
          </div>)}
          {busy && <div role="status" className="inline-flex items-center gap-2 text-[11px] text-muted">Thinking about your next step <span className="tutor-typing-dots" aria-label="Tutor is responding"><span /><span /><span /></span></div>}
          {error && <p role="alert" className="rounded-lg border border-line bg-surface p-3 text-[11px] leading-relaxed text-ink">{error} {messages.at(-1)?.role === 'user' && <button type="button" onClick={() => { setError(''); void respond(messages, reveal); }} className="ml-1 font-semibold underline">Try again</button>}</p>}
          {reveal && guide && <div className="rounded-xl border border-line bg-surface p-4"><p className="section-label mb-2">Independently written guide</p><p className="mb-3 text-[10px] text-muted">Not an official IB mark scheme. Revealed only after your explicit choice.</p>{context?.scheme?.map((point, index) => <div key={index} className="border-t border-line py-2"><span className="font-mono text-[10px] font-semibold">{point.code} · {point.marks}</span><MarkdownArticle source={point.text} compact /></div>)}</div>}
          <div ref={conversationEnd} />
        </div>
      </div>
      <div className="shrink-0 border-t border-line bg-canvas px-4 py-3 sm:px-5">
        <div className={`mx-auto w-full ${layout === 'panel' ? '' : 'max-w-[820px]'}`}>
          {reveal ? <button type="button" onClick={backToHints} className="mb-2 flex w-full items-center justify-center gap-2 rounded-full border border-line py-1.5 text-[11px] font-semibold hover:bg-surface"><Check size={13} /> Back to hints, clear this solution</button> : <button type="button" onClick={explainAnswer} className="mb-2 w-full rounded-full border border-line py-1.5 text-[11px] font-semibold text-muted hover:border-ink hover:text-ink">Explain the answer for me</button>}
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
            <button type="button" aria-expanded={guidanceOpen} aria-controls="tutor-hint-modes" onClick={() => { setGuidanceOpen(!guidanceOpen); setEffortOpen(false); }} className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1.5 font-semibold hover:border-ink">Hint: {levels[level - 1].label} <ChevronDown size={13} aria-hidden="true" /></button>
            {!reveal && <button type="button" onClick={askHint} disabled={busy} className="rounded-full border border-line px-2.5 py-1.5 font-semibold hover:border-ink disabled:opacity-50">Ask next hint</button>}
            <button type="button" aria-expanded={effortOpen} aria-controls="tutor-effort-selector" onClick={() => { setEffortOpen(!effortOpen); setGuidanceOpen(false); }} className="ml-auto rounded-full border border-line px-2.5 py-1.5 font-semibold hover:border-ink">Effort: {EFFORT_LEVELS[effort].label}</button>
          </div>
          {guidanceOpen && <div id="tutor-hint-modes" role="group" aria-label="Choose a hint step" className="mb-2 flex flex-wrap gap-1 rounded-lg border border-line bg-surface p-2">{levels.map((option) => <button type="button" key={option.value} aria-pressed={level === option.value} onClick={() => { setLevel(option.value); setGuidanceOpen(false); notify({ title: `${option.label} selected`, message: option.detail, variant: 'default', id: 'tutor-guidance' }); }} className={`rounded-full px-2.5 py-1.5 text-[10px] font-semibold ${level === option.value ? 'bg-ink text-canvas' : 'bg-canvas text-muted hover:text-ink'}`} title={option.detail}>{option.label}</button>)}<p className="w-full px-1 text-[10px] text-muted">{levels[level - 1].detail}. Select a step, then press Ask next hint or send a message.</p></div>}
          {effortOpen && <div id="tutor-effort-selector" className="mb-2"><ClaudeModelSelector value={effort} onValueChange={setEffort} /></div>}
          {image && <div className="mb-2 flex items-center gap-2 rounded-lg border border-line bg-surface p-2"><img src={image.dataUrl} alt="Selected image preview" className="h-11 w-11 shrink-0 rounded object-contain" /><span className="min-w-0 flex-1 truncate text-[10px] font-semibold" title={image.name}>{image.name}<span className="block text-muted">Not sent yet. Included only when you press Send.</span></span><button type="button" onClick={() => setImage(null)} aria-label="Remove selected image" className="rounded p-1 text-muted hover:text-ink"><X size={15} /></button></div>}
          <form onSubmit={send} className="flex items-end gap-2"><label htmlFor="tutor-message" className="sr-only">Message to math tutor</label><textarea id="tutor-message" rows={2} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); } }} placeholder="What have you tried so far?" className="max-h-28 min-h-[52px] min-w-0 flex-1 resize-y rounded-xl border border-line bg-surface px-3 py-2.5 text-[12px] leading-relaxed text-ink placeholder:text-faint" />
            <input ref={imagePicker} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" tabIndex={-1} onChange={(event) => void onImage(event)} aria-label="Select image for tutor" />
            <button type="button" disabled={!canAttach || busy} title={canAttach ? 'Attach one image to your next provider request' : canConnect ? vision.reason : 'Image input needs a configured model and API key'} aria-label="Attach image for tutor" onClick={() => imagePicker.current?.click()} className="flex h-11 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"><Paperclip size={16} /></button>
            <button type="submit" disabled={(!input.trim() && !image) || busy} aria-label="Send tutor message" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-canvas disabled:opacity-45"><Send size={16} /></button></form>
          {imageError && <p role="alert" className="mt-1 text-[10px] leading-relaxed text-ink">{imageError}</p>}
          <p className="mt-2 text-[10px] leading-relaxed text-muted">{canConnect ? `Requests go directly to your configured provider. ${vision.supported ? 'Images are optional and sent only with Send.' : vision.reason}` : 'Offline prompts cannot read images. Add a model and API key in Settings for vision.'} Tutor responses may be wrong; verify your work.</p>
        </div>
      </div>
    </div>}
      </div>
    </div>
  </section>;
}
