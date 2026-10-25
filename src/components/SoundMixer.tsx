import { Bell, Bird, Bug, CloudLightning, CloudRain, Coffee, Flame, Radio, Shuffle, Wind, Waves, X } from 'lucide-react';
import { useFocus } from '../context/FocusContext';
import { ambientDescriptions, ambientSounds } from '../lib/ambientSounds';
import type { AmbientSound } from '../lib/ambientSounds';

const icons = { Rainfall: CloudRain, 'Distant thunder': CloudLightning, 'Shore waves': Waves, Wind,
  Hearth: Flame, Birdsong: Bird, Crickets: Bug, Café: Coffee, 'Soft bells': Bell, 'White noise': Radio } satisfies Record<AmbientSound, typeof Wind>;

/** Independent, original procedural layers. No loops or sound samples from other sites. */
export function SoundMixer({ compact = false }: { compact?: boolean }) {
  const { soundLevels, setSoundLevel, clearSoundLevels, surpriseSoundLevels } = useFocus();
  const active = ambientSounds.filter((sound) => soundLevels[sound] > 0).length;
  return <section className="mt-8 border-t border-line pt-6" aria-label="Mix ambient sound layers">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-[15px] font-semibold tracking-tight">Layer your own ambience</h3><p className="mt-1 text-[11px] leading-relaxed text-muted">{active ? `${active} active sound${active === 1 ? '' : 's'}` : 'All layers are off'} · Adjust each independently.</p></div><div className="flex flex-wrap gap-1.5"><button type="button" onClick={surpriseSoundLevels} className="studio-button" data-tip="Generate a new three-layer blend"><Shuffle size={13} /> Mix for me</button><button type="button" onClick={clearSoundLevels} className="studio-button" data-tip="Silence the extra layers"><X size={13} /> Clear</button></div></div>
    <div className={`mt-5 grid gap-2.5 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
      {ambientSounds.map((sound) => { const Icon = icons[sound]; const id = `sound-layer-${compact ? 'window' : 'page'}-${ambientSounds.indexOf(sound)}`;
        return <div key={sound} className="rounded-xl border border-line bg-canvas p-3.5" data-tip={ambientDescriptions[sound]}><label htmlFor={id} className="flex items-center justify-between gap-2 text-[11px] font-semibold"><span className="inline-flex min-w-0 items-center gap-2"><Icon size={16} strokeWidth={1.65} className="shrink-0" aria-hidden="true" />{sound}</span><span className="font-mono text-[10px] text-muted">{soundLevels[sound] ? `${soundLevels[sound]}%` : 'off'}</span></label><input id={id} type="range" min="0" max="100" step="1" value={soundLevels[sound]} onChange={(event) => setSoundLevel(sound, Number(event.target.value))} aria-label={`${sound} sound volume`} className="mt-2.5 w-full accent-ink" /></div>;
      })}
    </div>
    <p className="mt-4 text-[11px] leading-[1.7] text-muted">These sounds are synthesized locally in your browser. Birdsong and café ambience are stylized textures, not field recordings or human voices. Keep the master volume comfortable. Changes to your mix stay in this browser.</p>
  </section>;
}
