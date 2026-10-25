import { useEffect } from 'react';
import { Grip, Pause, Play, RefreshCw, Volume2, X } from 'lucide-react';
import { useFocus, presets, presetDescriptions } from '../context/FocusContext';
import { useMovableWindow } from '../hooks/useMovableWindow';
import { useVaultStore } from '../store/useVaultStore';
import { SoundMixer } from './SoundMixer';

/** A complete, movable sound mixer. The same AudioContext survives page changes. */
export function SoundWindow() {
  const open = useVaultStore((state) => state.soundWindowOpen);
  const setOpen = useVaultStore((state) => state.setSoundWindowOpen);
  const sound = useFocus();
  const drag = useMovableWindow('sound', { x: 375, y: 128 });
  useEffect(() => { if (open) drag.fit(); }, [open, drag.fit]);
  if (!open) return null;
  return <section ref={drag.panel} role="dialog" aria-label="Movable focus sound controls" aria-modal="false" className="movable-window fixed z-[88] max-h-[min(84dvh,760px)] w-[min(380px,calc(100vw-16px))] overflow-y-auto rounded-2xl border border-line bg-canvas p-5 shadow-float" style={{ left: drag.position.x, top: drag.position.y }}>
    <div {...drag.handle} tabIndex={0} aria-label="Move the sound controls. Drag here or use arrow keys." className="movable-handle -mx-5 -mt-5 mb-5 flex cursor-grab items-center justify-between gap-3 rounded-t-2xl border-b border-line bg-surface px-5 py-3.5 active:cursor-grabbing"><span className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-wider"><Grip size={15} /> Flow sound controls</span><button type="button" onClick={() => setOpen(false)} aria-label="Close movable sound controls" className="rounded-md p-1.5 hover:bg-raised"><X size={16} /></button></div>
    <p className="text-[11px] leading-relaxed text-muted">{presetDescriptions[sound.preset]}. Original procedural audio, not a neural treatment.</p>
    <div className="mt-4 grid grid-cols-3 gap-2" role="group" aria-label="Sound environment">{presets.map((option) => <button key={option} type="button" aria-pressed={sound.preset === option} onClick={() => sound.setPreset(option)} className={`min-h-10 rounded-lg border px-2 text-[11px] font-semibold ${sound.preset === option ? 'border-ink bg-ink text-canvas' : 'border-line hover:border-ink'}`}>{option}</button>)}</div>
    <div className="mt-5 flex flex-wrap gap-2"><button type="button" onClick={() => sound.playing ? sound.pause() : void sound.play()} className="studio-button"><span>{sound.playing ? <Pause size={14} /> : <Play size={14} />}</span>{sound.playing ? 'Pause' : 'Play'}</button><button type="button" onClick={sound.next} className="studio-button"><RefreshCw size={14} /> Another variation</button></div>
    <label className="mt-5 flex items-center justify-between text-[11px] font-semibold"><span className="flex items-center gap-2"><Volume2 size={15} /> Sound volume</span>{sound.volume}%</label><input type="range" min="0" max="100" value={sound.volume} onChange={(event) => sound.setVolume(Number(event.target.value))} aria-label="Sound volume" className="mt-3 w-full accent-ink" />
    <SoundMixer compact />
    <p className="mt-4 font-mono text-[11px] text-muted">{sound.duration ? `Session remaining ${Math.floor(sound.remaining / 60)}:${String(sound.remaining % 60).padStart(2, '0')}` : 'No timer'} · Variation {sound.variation}</p>
    {sound.error && <p role="alert" className="mt-3 text-[11px]">{sound.error}</p>}
  </section>;
}
