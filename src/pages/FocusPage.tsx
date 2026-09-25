import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowDown, ArrowUp, FastForward, Film, Headphones, Link2, Pause, Play, Plus, RefreshCw, SkipBack, SkipForward, Trash2, Upload, Volume2, VolumeX, Waves } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useFocus } from '../context/FocusContext';
import type { SoundPreset } from '../context/FocusContext';
import { PLAYLIST_KEY, parseVideoLink, readVideoPlaylist } from '../lib/videoPlaylist';
import type { VideoItem } from '../lib/videoPlaylist';

function clock(seconds: number) {
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
}

export function FocusPage() {
  const { playing, preset, volume, variation, duration, remaining, finished, error, setPreset, setVolume, setDuration, play, pause, next } = useFocus();
  const [playlist, setPlaylist] = useState<VideoItem[]>(readVideoPlaylist);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [videoError, setVideoError] = useState('');
  const [index, setIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [looping, setLooping] = useState(true);
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
  const allYouTube = playlist.length > 0 && playlist.every((item) => item.kind === 'youtube');
  const iframeURL = useMemo(() => {
    if (!active || active.kind !== 'youtube') return null;
    const ids = allYouTube ? [...playlist.slice(index), ...playlist.slice(0, index)].map((item) => item.videoId).filter(Boolean) : [active.videoId];
    const params = new URLSearchParams({
      autoplay: videoPlaying ? '1' : '0', mute: muted ? '1' : '0', controls: '1', playsinline: '1',
      loop: looping && allYouTube ? '1' : '0', playlist: ids.join(','), rel: '0',
    });
    return `https://www.youtube-nocookie.com/embed/${active.videoId}?${params}`;
  }, [active, allYouTube, playlist, index, videoPlaying, muted, looping]);

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
    <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="section-label mb-5">Focus studio / audio and motion</p><h1 className="text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-[1.06] tracking-[-0.07em]">A little space<br />to concentrate<span className="text-faint">.</span></h1><p className="mt-5 max-w-[600px] text-[14px] leading-[1.8] text-muted sm:text-[15px]">Original, procedural ambience and your own video playlist. Start only when you want to, change the sound as often as you like.</p></div><div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-line bg-surface"><Waves size={34} strokeWidth={1.3} className="text-ink" /></div></div>

    <div className="mt-12 grid gap-6 xl:grid-cols-[.87fr_1.13fr]">
      <section aria-labelledby="sound-heading" className="rounded-2xl border border-line bg-surface p-5 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="section-label mb-3">01 / Soundscape</p><h2 id="sound-heading" className="text-[26px] font-semibold leading-tight tracking-tight">Shape the atmosphere.</h2><p className="mt-2 text-[12px] leading-relaxed text-muted">A soft mix of generated tones and filtered noise, made live by your browser.</p></div><Headphones size={23} className="shrink-0 text-muted" /></div>
        <div className="mt-8 grid gap-2 sm:grid-cols-3" role="group" aria-label="Sound preset">{(['Stillness', 'Flow', 'Rain'] as SoundPreset[]).map((choice) => <button key={choice} type="button" aria-pressed={preset === choice} onClick={() => setPreset(choice)} className={`min-h-12 rounded-xl border px-3 text-left text-[12px] font-semibold ${preset === choice ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-ink hover:text-ink'}`}>{choice}</button>)}</div>
        <div className="mt-6 flex items-center justify-between rounded-xl border border-line bg-canvas px-4 py-5"><div><p className="font-mono text-[10px] uppercase tracking-wider text-muted">Now playing</p><p className="mt-1 text-[16px] font-semibold">{preset} / variation {variation.toString().padStart(2, '0')}</p></div><span aria-hidden="true" className="flex h-10 items-end gap-1">{[12, 25, 17, 30, 14, 22, 9].map((height, idx) => <span key={idx} style={{ height }} className="w-[3px] rounded-full bg-ink/70" />)}</span></div>
        <div className="mt-5 flex flex-wrap items-center gap-3"><button type="button" onClick={() => { if (playing) pause(); else void play(); }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[12px] font-semibold text-canvas">{playing ? <Pause size={15} /> : <Play size={15} />} {playing ? 'Pause sound' : 'Play sound'}</button><button type="button" onClick={next} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-canvas px-4 text-[12px] font-semibold hover:border-ink"><RefreshCw size={14} /> Next variation</button></div>
        <div className="mt-8"><label htmlFor="sound-volume" className="flex items-center justify-between text-[12px] font-semibold"><span className="inline-flex items-center gap-2">{volume ? <Volume2 size={16} /> : <VolumeX size={16} />} Volume</span><span className="font-mono text-[11px] text-muted">{volume}%</span></label><input id="sound-volume" type="range" min="0" max="100" value={volume} onChange={(event) => setVolume(Number(event.target.value))} className="mt-3 w-full accent-ink" /></div>
        <div className="mt-7 border-t border-line pt-5"><p className="text-[12px] font-semibold">Session timer</p><div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Focus timer">{[{ time: 0, label: 'No timer' }, { time: 25, label: '25 min' }, { time: 50, label: '50 min' }].map((choice) => <button key={choice.time} type="button" aria-pressed={duration === choice.time} onClick={() => setDuration(choice.time)} className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${duration === choice.time ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-ink'}`}>{choice.label}</button>)}</div>{duration > 0 && <p className="mt-3 font-mono text-[26px] font-semibold tabular-nums tracking-tight" role="timer">{clock(remaining)}</p>}{finished && <p role="status" className="mt-2 text-[12px] font-semibold">Session complete. Sound paused.</p>}</div>
        {error && <p role="alert" className="mt-4 rounded-lg border border-line bg-canvas p-3 text-[11px]">{error}</p>}
        <p className="mt-7 border-t border-line pt-5 text-[11px] leading-[1.7] text-muted">Inspired by the idea of a dedicated focus soundscape. This is original audio, not Brain.fm content. No brainwave alignment, clinical effect or improved concentration is promised. Keep the volume comfortable.</p>
      </section>

      <section aria-labelledby="video-heading" className="rounded-2xl border border-line bg-surface p-5 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="section-label mb-3">02 / Video playlist</p><h2 id="video-heading" className="text-[26px] font-semibold leading-tight tracking-tight">Bring your own motion.</h2><p className="mt-2 text-[12px] leading-relaxed text-muted">Add looping study visuals, ambient clips, or a playlist of YouTube videos.</p></div><Film size={23} className="shrink-0 text-muted" /></div>
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-ink/95"><div className="aspect-video">
          {!active ? <div className="flex h-full flex-col items-center justify-center px-5 text-center text-canvas"><Film size={27} className="mb-3 opacity-70" /><p className="text-[13px] font-semibold">Your playlist starts here.</p><p className="mt-1 text-[11px] text-canvas/70">No videos were provided with the project. Add a link or a local file below.</p></div>
            : active.kind === 'youtube' && iframeURL ? <iframe key={iframeURL} src={iframeURL} title={active.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0" />
            : <video ref={videoElement} key={active.id} src={active.url} controls playsInline autoPlay={videoPlaying} muted={muted} onEnded={onEnded} className="h-full w-full object-contain" aria-label={active.title} />}
        </div></div>
        <div className="mt-3 flex flex-wrap items-center gap-2"><button type="button" disabled={!active} onClick={() => setVideoPlaying((value) => !value)} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[11px] font-semibold text-canvas disabled:opacity-45">{videoPlaying ? <Pause size={13} /> : <Play size={13} />} {videoPlaying ? 'Pause playlist' : 'Play playlist'}</button><button type="button" disabled={!active} onClick={() => advance(-1)} aria-label="Previous video" className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40"><SkipBack size={15} /></button><button type="button" disabled={!active} onClick={() => advance(1)} aria-label="Next video" className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40"><SkipForward size={15} /></button><button type="button" disabled={!active} onClick={() => setMuted((value) => !value)} aria-label={muted ? 'Unmute video' : 'Mute video'} className="flex h-9 w-9 items-center justify-center rounded-full border border-line disabled:opacity-40">{muted ? <VolumeX size={15} /> : <Volume2 size={15} />}</button><label className="ml-auto inline-flex items-center gap-2 text-[11px] font-semibold"><input type="checkbox" checked={looping} onChange={(event) => setLooping(event.target.checked)} className="accent-ink" /> Loop</label></div>
        {active && <p className="mt-2 truncate text-[11px] text-muted">{index + 1} / {playlist.length} · {active.title}</p>}
        <div className="mt-7 border-t border-line pt-5"><h3 className="text-[13px] font-semibold">Add a video</h3><form onSubmit={addURL} className="mt-3 space-y-2.5"><label className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3"><Link2 size={15} className="shrink-0 text-muted" /><input type="url" required value={url} onChange={(event) => setUrl(event.target.value)} aria-label="YouTube or direct video URL" placeholder="YouTube or direct .mp4 link" className="h-10 w-full min-w-0 bg-transparent text-[11px] text-ink placeholder:text-faint" /></label><input type="text" maxLength={80} value={title} onChange={(event) => setTitle(event.target.value)} aria-label="Video title (optional)" placeholder="Give it a name (optional)" className="h-10 w-full rounded-lg border border-line bg-canvas px-3 text-[11px] text-ink placeholder:text-faint" /><div className="flex flex-wrap gap-2"><button type="submit" className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[11px] font-semibold text-canvas"><Plus size={14} /> Add link</button><input ref={fileInput} type="file" accept="video/*" multiple onChange={addFiles} className="hidden" /><button type="button" onClick={() => fileInput.current?.click()} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-canvas px-3.5 text-[11px] font-semibold hover:border-ink"><Upload size={14} /> Add local videos</button></div></form>{videoError && <p role="alert" className="mt-2 text-[11px]">{videoError}</p>}</div>
        <div className="mt-7 border-t border-line pt-5"><div className="flex items-center justify-between"><h3 className="text-[13px] font-semibold">Your queue</h3><span className="font-mono text-[10px] text-muted">{playlist.length} / 30</span></div>{playlist.length ? <ol className="mt-3 max-h-[260px] space-y-2 overflow-y-auto">{playlist.map((item, pos) => <li key={item.id} className={`flex min-w-0 items-center gap-1.5 rounded-lg border px-2 py-2 ${pos === index ? 'border-ink bg-canvas' : 'border-line'}`}><button type="button" onClick={() => { setIndex(pos); setVideoPlaying(true); }} className="flex h-8 w-7 shrink-0 items-center justify-center font-mono text-[10px] font-semibold" aria-label={`Play ${item.title}`}>{pos === index ? <Play size={12} /> : String(pos + 1).padStart(2, '0')}</button><input value={item.title} onChange={(event) => setPlaylist((previous) => previous.map((entry, n) => n === pos ? { ...entry, title: event.target.value.slice(0, 80) } : entry))} aria-label={`Name for video ${pos + 1}`} className="min-w-0 flex-1 bg-transparent text-[11px] font-medium text-ink" /><button type="button" disabled={pos === 0} onClick={() => move(pos, -1)} aria-label={`Move ${item.title} up`} className="text-muted disabled:opacity-30"><ArrowUp size={13} /></button><button type="button" disabled={pos === playlist.length - 1} onClick={() => move(pos, 1)} aria-label={`Move ${item.title} down`} className="text-muted disabled:opacity-30"><ArrowDown size={13} /></button><button type="button" onClick={() => remove(pos)} aria-label={`Remove ${item.title}`} className="text-muted hover:text-ink"><Trash2 size={14} /></button></li>)}</ol> : <p className="mt-3 text-[11px] text-muted">Your list is empty. Links are stored in this browser; local files last only for this visit.</p>}</div>
        <p className="mt-6 border-t border-line pt-4 text-[11px] leading-[1.7] text-muted"><FastForward size={13} className="mr-1 inline" /> Direct videos auto-advance or loop at the end. YouTube playlists auto-advance within YouTube when embeds are permitted. A mixed YouTube and direct-file queue needs manual skip after embedded videos. Browser autoplay restrictions, third-party availability and network access may prevent playback. Local files are never uploaded.</p>
      </section>
    </div>
  </div>;
}
