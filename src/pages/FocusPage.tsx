import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowDown, ArrowUp, ExternalLink, FastForward, Film, Grip, Headphones, Link2, Maximize2, Minimize2, Pause, Play, Plus, RefreshCw, SkipBack, SkipForward, Trash2, Upload, Volume2, VolumeX, Waves } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useFocus, presets, presetDescriptions } from '../context/FocusContext';
import { useMovableWindow } from '../hooks/useMovableWindow';
import { useVaultStore } from '../store/useVaultStore';
import { FocusScience } from '../components/FocusScience';
import { SoundMixer } from '../components/SoundMixer';
import { PLAYLIST_KEY, SOURCE_PLAYLIST, defaultVideoPlaylist, parseVideoLink, readVideoPlaylist } from '../lib/videoPlaylist';
import type { VideoItem } from '../lib/videoPlaylist';

function clock(seconds: number) {
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}

const PLAYER_STATE_KEY = 'sarang-focus-player-controls';
function readPlayerControls(): { index: number; muted: boolean; looping: boolean } {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(PLAYER_STATE_KEY) ?? 'null');
    if (raw && typeof raw === 'object' && 'index' in raw && Number.isInteger(raw.index) && Number(raw.index) >= 0 && Number(raw.index) < 30) {
      return { index: Number(raw.index), muted: 'muted' in raw && raw.muted === true, looping: !('looping' in raw) || raw.looping !== false };
    }
  } catch { /* Use safe initial controls. */ }
  return { index: 0, muted: false, looping: true };
}

export function FocusPage() {
  const { playing, preset, volume, variation, duration, remaining, finished, error, setPreset, setVolume, setDuration, play, pause, next } = useFocus();
  const [playlist, setPlaylist] = useState<VideoItem[]>(readVideoPlaylist);
  const controls = useRef(readPlayerControls());
  const [studioFloating, setStudioFloating] = useState(false);
  const studioDrag = useMovableWindow<HTMLDivElement>('studio', { x: 312, y: 90 });
  useEffect(() => { if (studioFloating) studioDrag.fit(); }, [studioFloating, studioDrag.fit]);
  const setSoundWindowOpen = useVaultStore((state) => state.setSoundWindowOpen);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [videoError, setVideoError] = useState('');
  const [index, setIndex] = useState(() => Math.min(controls.current.index, Math.max(0, readVideoPlaylist().length - 1)));
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [muted, setMuted] = useState(controls.current.muted);
  const [looping, setLooping] = useState(controls.current.looping);
  const frame = useRef<HTMLIFrameElement>(null);
  const endedHandled = useRef('');
  const localURLs = useRef<Set<string>>(new Set());
  const fileInput = useRef<HTMLInputElement>(null);
  const videoElement = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    try { localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlist.filter((item) => item.kind !== 'local'))); }
    catch { /* Playlist still works this visit. */ }
  }, [playlist]);
  useEffect(() => () => { for (const item of localURLs.current) URL.revokeObjectURL(item); }, []);
  const active = playlist[index];
  useEffect(() => {
    if (!active || active.kind === 'youtube' || !videoElement.current) return;
    if (videoPlaying) void videoElement.current.play().catch(() => setVideoError('Autoplay was blocked. Use the video controls to start it.'));
    else videoElement.current.pause();
  }, [active?.id, active?.kind, videoPlaying]);
  useEffect(() => {
    try { localStorage.setItem(PLAYER_STATE_KEY, JSON.stringify({ index, muted, looping })); }
    catch { /* Controls still work for this visit. */ }
  }, [index, muted, looping]);
  const iframeURL = useMemo(() => {
    if (!active || active.kind !== 'youtube') return null;
    const params = new URLSearchParams({ enablejsapi: '1', origin: location.origin, autoplay: '0', controls: '1', playsinline: '1', rel: '0' });
    // Playback, mute and loop state are NOT part of this URL. Only selecting a
    // different video changes the iframe's src, preventing play/pause refreshes.
    return `https://www.youtube-nocookie.com/embed/${active.videoId}?${params}`;
  }, [active?.videoId, active?.kind]);
  function command(func: string, args: unknown[] = []) {
    frame.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), 'https://www.youtube-nocookie.com');
  }
  useEffect(() => {
    const onPlayerMessage = (event: MessageEvent) => {
      if (!['https://www.youtube-nocookie.com', 'https://www.youtube.com'].includes(event.origin) || event.source !== frame.current?.contentWindow) return;
      let data: { event?: string; info?: number };
      try { data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data; } catch { return; }
      if (!data || typeof data !== 'object') return;
      if (data.event === 'onReady') {
        command(muted ? 'mute' : 'unMute');
        if (videoPlaying) command('playVideo');
      }
      if (data.event === 'onStateChange') {
        if (data.info === 1) { setVideoPlaying(true); endedHandled.current = ''; }
        if (data.info === 2) setVideoPlaying(false);
        if (data.info === 0 && active && endedHandled.current !== active.id) {
          endedHandled.current = active.id;
          onEnded();
        }
      }
    };
    window.addEventListener('message', onPlayerMessage);
    return () => window.removeEventListener('message', onPlayerMessage);
  }, [active?.id, index, looping, playlist, muted, videoPlaying]);
  function toggleVideo() {
    if (!active) return;
    if (active.kind === 'youtube') {
      if (videoPlaying) command('pauseVideo');
      else { command(muted ? 'mute' : 'unMute'); command('playVideo'); }
    } else if (videoElement.current) {
      if (videoPlaying) videoElement.current.pause();
      else void videoElement.current.play().catch(() => setVideoError('Playback was blocked. Use the native player controls to start the video.'));
    }
    setVideoPlaying((value) => !value);
  }
  function toggleMute() {
    if (active?.kind === 'youtube') command(muted ? 'unMute' : 'mute');
    setMuted((value) => !value);
  }

  function addURL(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = parseVideoLink(url);
    if (!parsed) { setVideoError('Use an HTTPS YouTube link or a direct .mp4, .webm or .ogg URL. Other embeds cannot be validated here.'); return; }
    if (playlist.length >= 30) { setVideoError('This playlist holds up to 30 videos. Remove one before adding more.'); return; }
    const item = { ...parsed, id: crypto.randomUUID(), title: title.trim().slice(0, 80) || (parsed.kind === 'youtube' ? `Video ${parsed.videoId}` : 'Direct video') };
    setPlaylist((previous) => [...previous, item]); setUrl(''); setTitle(''); setVideoError('');
  }
  function addFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = '';
    if (!files.length) return;
    const available = Math.max(0, 30 - playlist.length);
    const accepted = files.filter((file) => file.type.startsWith('video/')).slice(0, available);
    if (accepted.length < files.length) setVideoError('Only supported video files were added, up to the 30-item limit.');
    else setVideoError('');
    const entries: VideoItem[] = accepted.map((file) => {
      const objectURL = URL.createObjectURL(file);
      localURLs.current.add(objectURL);
      return { id: crypto.randomUUID(), title: file.name, url: objectURL, kind: 'local' };
    });
    setPlaylist((previous) => [...previous, ...entries]);
  }
  function remove(at: number) {
    const entry = playlist[at];
    if (entry?.kind === 'local') { URL.revokeObjectURL(entry.url); localURLs.current.delete(entry.url); }
    setPlaylist((previous) => previous.filter((_, pos) => pos !== at));
    if (at < index) setIndex((value) => value - 1);
    else if (at === index) { setIndex((value) => Math.min(value, Math.max(0, playlist.length - 2))); setVideoPlaying(false); }
  }
  function move(at: number, direction: number) {
    const target = at + direction;
    if (target < 0 || target >= playlist.length) return;
    setPlaylist((previous) => {
      const list = previous.slice(); [list[at], list[target]] = [list[target], list[at]];
      return list;
    });
    if (index === at) setIndex(target);
    else if (index === target) setIndex(at);
  }
  function advance(by: number) {
    if (!playlist.length) return;
    let target = index + by;
    if (target >= playlist.length) target = looping ? 0 : playlist.length - 1;
    if (target < 0) target = looping ? playlist.length - 1 : 0;
    if (target === index && by > 0 && !looping) { setVideoPlaying(false); return; }
    setIndex(target); setVideoPlaying(true);
  }
  function onEnded() {
    if (index === playlist.length - 1 && !looping) setVideoPlaying(false);
    else advance(1);
  }

  return <div className="mx-auto w-full max-w-[1160px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Focus studio' }]} />
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="section-label mb-5">Focus studio / audio and motion</p><h1 className="text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[1.06] tracking-[-0.07em]">A little space<br />to concentrate<span className="text-faint">.</span></h1><p className="mt-5 max-w-[600px] text-[14px] leading-[1.8] text-muted sm:text-[15px]">Original procedural ambience alongside the 10-video playlist you shared. Customize the queue, move the controls, and start playback when you choose.</p></div><div className="flex flex-wrap items-center gap-2"><button type="button" onClick={() => setStudioFloating((value) => !value)} className="studio-button">{studioFloating ? <Minimize2 size={15} /> : <Maximize2 size={15} />}{studioFloating ? 'Dock studio' : 'Move studio window'}</button><button type="button" onClick={() => setSoundWindowOpen(true)} className="studio-button"><Waves size={15} /> Pop out sound</button></div></div>

    <div ref={studioDrag.panel} className={studioFloating ? 'movable-window fixed z-[86] max-h-[min(82vh,900px)] w-[min(960px,calc(100vw-20px))] overflow-y-auto rounded-2xl border border-line bg-canvas p-3 shadow-float sm:p-5' : 'mt-12'} style={studioFloating ? { left: studioDrag.position.x, top: studioDrag.position.y } : undefined}>
      {studioFloating && <div {...studioDrag.handle} tabIndex={0} aria-label="Move the whole Focus Studio window by dragging or using arrow keys" className="movable-handle sticky -top-3 z-10 mb-4 flex cursor-grab items-center justify-between gap-3 rounded-xl border border-line bg-canvas px-4 py-3 active:cursor-grabbing"><span className="flex items-center gap-2 font-mono text-[11px] font-semibold"><Grip size={15} /> FOCUS STUDIO / MOVE WINDOW</span><button type="button" onClick={() => setStudioFloating(false)} aria-label="Dock Focus Studio" className="studio-button"><Minimize2 size={14} /> Dock</button></div>}
      <div className="grid gap-6 xl:grid-cols-[.87fr_1.13fr]">
      <section aria-labelledby="sound-heading" className="rounded-2xl border border-line bg-surface p-5 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="section-label mb-3">01 / Soundscape</p><h2 id="sound-heading" className="text-[26px] font-semibold leading-tight tracking-tight">Shape the atmosphere.</h2><p className="mt-2 text-[12px] leading-relaxed text-muted">A soft mix of generated tones and filtered noise, made live by your browser.</p></div><Headphones size={23} className="shrink-0 text-muted" /></div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3" role="group" aria-label="Sound preset">{presets.map((choice) => <button key={choice} type="button" aria-pressed={preset === choice} onClick={() => setPreset(choice)} className={`min-h-12 rounded-xl border px-3 text-left text-[12px] font-semibold ${preset === choice ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-ink hover:text-ink'}`}>{choice}</button>)}</div>
        <p className="mt-3 text-[11px] leading-relaxed text-muted">{presetDescriptions[preset]}</p><div className="mt-6 flex items-center justify-between rounded-xl border border-line bg-canvas px-4 py-5"><div><p className="font-mono text-[10px] uppercase tracking-wider text-muted">Now playing</p><p className="mt-1 text-[16px] font-semibold">{preset} / variation {variation.toString().padStart(2, '0')}</p></div><span aria-hidden="true" className="flex h-10 items-end gap-1">{[12, 25, 17, 30, 14, 22, 9].map((height, idx) => <span key={idx} style={{ height }} className="w-[3px] rounded-full bg-ink/70" />)}</span></div>
        <div className="mt-5 flex flex-wrap items-center gap-3"><button type="button" onClick={() => { if (playing) pause(); else void play(); }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas">{playing ? <Pause size={15} /> : <Play size={15} />} {playing ? 'Pause sound' : 'Play sound'}</button><button type="button" onClick={next} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-canvas px-4 text-[12px] font-semibold hover:border-ink"><RefreshCw size={14} /> Next variation</button><button type="button" onClick={() => setSoundWindowOpen(true)} className="studio-button"><Maximize2 size={14} /> Pop out controls</button></div>
        <div className="mt-8"><label htmlFor="sound-volume" className="flex items-center justify-between text-[12px] font-semibold"><span className="inline-flex items-center gap-2">{volume ? <Volume2 size={16} /> : <VolumeX size={16} />} Volume</span><span className="font-mono text-[11px] text-muted">{volume}%</span></label><input id="sound-volume" type="range" min="0" max="100" value={volume} onChange={(event) => setVolume(Number(event.target.value))} className="mt-3 w-full accent-ink" /></div>
        <SoundMixer />
        <div className="mt-7 border-t border-line pt-5"><p className="text-[12px] font-semibold">Session timer</p><div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Focus timer">{[{ time: 0, label: 'No timer' }, { time: 25, label: '25 min' }, { time: 50, label: '50 min' }].map((choice) => <button key={choice.time} type="button" aria-pressed={duration === choice.time} onClick={() => setDuration(choice.time)} className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${duration === choice.time ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-ink'}`}>{choice.label}</button>)}</div>{duration > 0 && <p className="mt-3 font-mono text-[26px] font-semibold tabular-nums tracking-tight" role="timer">{clock(remaining)}</p>}{finished && <p role="status" className="mt-2 text-[12px] font-semibold">Session complete. Sound paused.</p>}</div>
        {error && <p role="alert" className="mt-4 rounded-lg border border-line bg-canvas p-3 text-[11px]">{error}</p>}
        <p className="mt-7 border-t border-line pt-5 text-[11px] leading-[1.7] text-muted">Inspired by the idea of a dedicated focus soundscape. This is original audio, not Brain.fm content. No brainwave alignment, clinical effect or improved concentration is promised. Keep the volume comfortable.</p>
      </section>

      <section aria-labelledby="video-heading" className="rounded-2xl border border-line bg-surface p-5 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="section-label mb-3">02 / Video playlist</p><h2 id="video-heading" className="text-[26px] font-semibold leading-tight tracking-tight">Bring your own motion.</h2><p className="mt-2 text-[12px] leading-relaxed text-muted">The 10 videos you provided are queued by default. Playback requires YouTube access and a user gesture for sound.</p></div><Film size={23} className="shrink-0 text-muted" /></div>
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-ink/95"><div className="aspect-video">
          {!active ? <div className="flex h-full flex-col items-center justify-center px-5 text-center text-canvas"><Film size={27} className="mb-3 opacity-70" /><p className="text-[13px] font-semibold">Your playlist starts here.</p><p className="mt-1 text-[11px] text-canvas/70">The queue is empty. Restore your default list or add a link below.</p></div>
            : active.kind === 'youtube' && iframeURL ? <iframe ref={frame} key={active.id} src={iframeURL} onLoad={() => { frame.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening' }), 'https://www.youtube-nocookie.com'); if (muted) command('mute'); }} title={active.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0" />
            : <video ref={videoElement} key={active.id} src={active.url} controls playsInline autoPlay={videoPlaying} muted={muted} onEnded={onEnded} onPlay={() => setVideoPlaying(true)} onPause={() => setVideoPlaying(false)} className="h-full w-full object-contain" aria-label={active.title} />}
        </div></div>
        <div className="mt-3 flex flex-wrap items-center gap-2"><button type="button" disabled={!active} onClick={toggleVideo} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[11px] font-semibold text-canvas disabled:opacity-45">{videoPlaying ? <Pause size={13} /> : <Play size={13} />} {videoPlaying ? 'Pause playlist' : 'Play playlist'}</button><button type="button" disabled={!active} onClick={() => advance(-1)} aria-label="Previous video" className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40"><SkipBack size={15} /></button><button type="button" disabled={!active} onClick={() => advance(1)} aria-label="Next video" className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40"><SkipForward size={15} /></button><button type="button" disabled={!active} onClick={toggleMute} aria-label={muted ? 'Unmute video' : 'Mute video'} className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40">{muted ? <VolumeX size={15} /> : <Volume2 size={15} />}</button><label className="ml-auto inline-flex items-center gap-2 text-[11px] font-semibold"><input type="checkbox" checked={looping} onChange={(event) => setLooping(event.target.checked)} className="accent-ink" /> Loop</label></div>
        {active && <p className="mt-2 truncate text-[11px] text-muted">{index + 1} / {playlist.length} · {active.title}</p>}
        <div className="mt-7 border-t border-line pt-5"><h3 className="text-[13px] font-semibold">Add a video</h3><form onSubmit={addURL} className="mt-3 space-y-2.5"><label className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3"><Link2 size={15} className="shrink-0 text-muted" /><input type="url" required value={url} onChange={(event) => setUrl(event.target.value)} aria-label="YouTube or direct video URL" placeholder="YouTube or direct .mp4 link" className="h-10 w-full min-w-0 bg-transparent text-[11px] text-ink placeholder:text-faint" /></label><input type="text" maxLength={80} value={title} onChange={(event) => setTitle(event.target.value)} aria-label="Video title (optional)" placeholder="Give it a name (optional)" className="h-10 w-full rounded-lg border border-line bg-canvas px-3 text-[11px] text-ink placeholder:text-faint" /><div className="flex flex-wrap gap-2"><button type="submit" className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[11px] font-semibold text-canvas"><Plus size={14} /> Add link</button><input ref={fileInput} type="file" accept="video/*" multiple onChange={addFiles} className="hidden" /><button type="button" onClick={() => fileInput.current?.click()} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-canvas px-3.5 text-[11px] font-semibold hover:border-ink"><Upload size={14} /> Add local videos</button></div></form>{videoError && <p role="alert" className="mt-2 text-[11px]">{videoError}</p>}</div>
        <div className="mt-7 border-t border-line pt-5"><div className="flex items-center justify-between"><h3 className="text-[13px] font-semibold">Your queue</h3><span className="font-mono text-[10px] text-muted">{playlist.length} / 30</span></div><div className="mt-2 flex flex-wrap items-center gap-3 text-[11px]"><a href={SOURCE_PLAYLIST} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold underline">Your source playlist <ExternalLink size={12} /></a><button type="button" onClick={() => { if (window.confirm('Replace your current queue with the 10 default videos? Your custom links in this browser will be removed.')) { setPlaylist(defaultVideoPlaylist()); setIndex(0); setVideoPlaying(false); } }} className="font-semibold underline">Restore defaults</button></div>{playlist.length ? <ol className="mt-3 max-h-[260px] space-y-2 overflow-y-auto">{playlist.map((item, pos) => <li key={item.id} className={`flex min-w-0 items-center gap-1.5 rounded-lg border px-2 py-2 ${pos === index ? 'border-ink bg-canvas' : 'border-line'}`}><button type="button" onClick={() => { setIndex(pos); setVideoPlaying(true); }} className="flex h-8 w-7 shrink-0 items-center justify-center font-mono text-[10px] font-semibold" aria-label={`Play ${item.title}`}>{pos === index ? <Play size={12} /> : String(pos + 1).padStart(2, '0')}</button><input value={item.title} onChange={(event) => setPlaylist((previous) => previous.map((entry, n) => n === pos ? { ...entry, title: event.target.value.slice(0, 80) } : entry))} aria-label={`Name for video ${pos + 1}`} className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-ink" /><button type="button" disabled={pos === 0} onClick={() => move(pos, -1)} aria-label={`Move ${item.title} up`} className="text-muted disabled:opacity-30"><ArrowUp size={13} /></button><button type="button" disabled={pos === playlist.length - 1} onClick={() => move(pos, 1)} aria-label={`Move ${item.title} down`} className="text-muted disabled:opacity-30"><ArrowDown size={13} /></button><button type="button" onClick={() => remove(pos)} aria-label={`Remove ${item.title}`} className="text-muted hover:text-ink"><Trash2 size={14} /></button></li>)}</ol> : <p className="mt-3 text-[11px] text-muted">Your list is empty. Links are stored in this browser; local files last only for this visit.</p>}</div>
        <p className="mt-6 border-t border-line pt-4 text-[11px] leading-[1.7] text-muted"><FastForward size={13} className="mr-1 inline" /> Direct files auto-advance or loop. The embedded YouTube player receives play, pause and mute commands without changing its URL; selecting another video starts a new embed. YouTube may block automatic or unmuted playback even after a click, and individual videos may prohibit embedding. Use the native player controls if a command fails. Local files are never uploaded.</p>
      </section>
      </div>
    </div>
    <FocusScience />
  </div>;
}
