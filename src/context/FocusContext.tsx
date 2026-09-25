import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useProfileStore } from '../store/useProfileStore';

export type SoundPreset = 'Stillness' | 'Flow' | 'Rain';
const presets: SoundPreset[] = ['Stillness', 'Flow', 'Rain'];
interface SoundLayer { gain: GainNode; stop: () => void }
interface Engine { context: AudioContext; master: GainNode; layer: SoundLayer | null }

interface FocusValue {
  playing: boolean;
  preset: SoundPreset;
  volume: number;
  variation: number;
  duration: number;
  remaining: number;
  finished: boolean;
  error: string;
  setPreset: (preset: SoundPreset) => void;
  setVolume: (volume: number) => void;
  setDuration: (minutes: number) => void;
  play: () => Promise<void>;
  pause: () => void;
  next: () => void;
}

const FocusContext = createContext<FocusValue | null>(null);

function noiseBuffer(context: AudioContext, seed: number): AudioBuffer {
  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const data = buffer.getChannelData(0);
  let state = seed >>> 0;
  let smooth = 0;
  for (let index = 0; index < data.length; index++) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const random = (state / 2147483648 - 1);
    smooth = smooth * 0.978 + random * 0.022;
    data[index] = smooth * 3.5;
  }
  return buffer;
}

function makeLayer(context: AudioContext, preset: SoundPreset, seed: number): SoundLayer {
  const gain = context.createGain();
  gain.gain.setValueAtTime(0, context.currentTime);
  const sources: (OscillatorNode | AudioBufferSourceNode)[] = [];
  const tones = preset === 'Rain' ? [87.31, 130.81] : preset === 'Flow' ? [110, 165, 220] : [98, 146.83, 196];
  const shift = 1 + ((seed % 7) - 3) / 100;
  for (const [index, base] of tones.entries()) {
    const osc = context.createOscillator();
    const amp = context.createGain();
    osc.type = index === 0 ? 'sine' : 'triangle';
    osc.frequency.value = base * shift;
    amp.gain.value = index === 0 ? 0.055 : 0.008;
    osc.connect(amp).connect(gain);
    osc.start();
    sources.push(osc);
  }
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const noiseAmp = context.createGain();
  noise.buffer = noiseBuffer(context, seed);
  noise.loop = true;
  filter.type = 'lowpass';
  filter.frequency.value = preset === 'Rain' ? 1100 : preset === 'Flow' ? 440 : 260;
  noiseAmp.gain.value = preset === 'Rain' ? 0.24 : preset === 'Flow' ? 0.12 : 0.075;
  noise.connect(filter).connect(noiseAmp).connect(gain);
  noise.start();
  sources.push(noise);
  // Very slow, shallow timbral motion. This is sound design, not brainwave therapy.
  const motion = context.createOscillator();
  const motionDepth = context.createGain();
  motion.type = 'sine';
  motion.frequency.value = 0.09 + (seed % 5) * 0.027;
  motionDepth.gain.value = 0.012;
  motion.connect(motionDepth).connect(noiseAmp.gain);
  motion.start();
  sources.push(motion);
  return { gain, stop: () => { for (const source of sources) { try { source.stop(); } catch { /* Already stopped. */ } } gain.disconnect(); } };
}

export function FocusProvider({ children }: { children: ReactNode }) {
  const engine = useRef<Engine | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const [preset, setPresetState] = useState<SoundPreset>('Stillness');
  const [volume, setVolumeState] = useState(46);
  const [variation, setVariation] = useState(1);
  const [seed, setSeed] = useState(1597);
  const [duration, setDurationState] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState('');
  const profileStatus = useProfileStore((state) => state.status);
  const recordFocus = useProfileStore((state) => state.recordFocus);

  // Count actual playback while the encrypted profile is unlocked. Pause, finish,
  // preset change, or leaving this session commits one bounded focus interval.
  useEffect(() => {
    if (!playing || profileStatus !== 'unlocked') return;
    const startedAt = new Date().toISOString();
    const from = performance.now();
    return () => {
      const seconds = Math.round((performance.now() - from) / 1000);
      if (seconds > 0) recordFocus(preset, startedAt, seconds);
    };
  }, [playing, preset, profileStatus, recordFocus]);

  const updateSound = useCallback((nextPreset: SoundPreset, nextSeed: number) => {
    const player = engine.current;
    if (!player) return;
    const time = player.context.currentTime;
    if (player.layer) {
      const old = player.layer;
      old.gain.gain.cancelScheduledValues(time);
      old.gain.gain.setValueAtTime(old.gain.gain.value, time);
      old.gain.gain.linearRampToValueAtTime(0, time + 0.65);
      window.setTimeout(() => old.stop(), 850);
    }
    const nextLayer = makeLayer(player.context, nextPreset, nextSeed);
    nextLayer.gain.connect(player.master);
    nextLayer.gain.gain.linearRampToValueAtTime(1, time + 0.8);
    player.layer = nextLayer;
  }, []);

  const play = useCallback(async () => {
    setError(''); setFinished(false);
    if (duration && remaining === 0) setRemaining(duration * 60);
    try {
      let player = engine.current;
      if (!player) {
        const context = new AudioContext();
        const master = context.createGain();
        master.gain.value = 0;
        master.connect(context.destination);
        player = { context, master, layer: null };
        engine.current = player;
      }
      if (timeout.current) clearTimeout(timeout.current);
      await player.context.resume();
      if (!player.layer) updateSound(preset, seed);
      const time = player.context.currentTime;
      player.master.gain.cancelScheduledValues(time);
      player.master.gain.setValueAtTime(player.master.gain.value, time);
      player.master.gain.linearRampToValueAtTime(volume / 100, time + 0.25);
      setPlaying(true);
    } catch { setError('Audio is unavailable. Try a modern browser and start playback with a click.'); }
  }, [preset, seed, updateSound, volume, duration, remaining]);

  const pause = useCallback(() => {
    const player = engine.current;
    if (player) {
      const time = player.context.currentTime;
      player.master.gain.cancelScheduledValues(time);
      player.master.gain.setValueAtTime(player.master.gain.value, time);
      player.master.gain.linearRampToValueAtTime(0, time + 0.2);
      timeout.current = setTimeout(() => { if (player.context.state === 'running') void player.context.suspend(); }, 270);
    }
    setPlaying(false);
  }, []);

  const setPreset = useCallback((value: SoundPreset) => {
    if (!presets.includes(value)) return;
    setPresetState(value);
    if (playing) updateSound(value, seed);
    else if (engine.current?.layer) { engine.current.layer.stop(); engine.current.layer = null; }
  }, [playing, seed, updateSound]);

  const next = useCallback(() => {
    const nextSeed = Math.floor(Math.random() * 2147483647);
    setSeed(nextSeed); setVariation((count) => count + 1); setFinished(false);
    if (playing) updateSound(preset, nextSeed);
    else if (engine.current?.layer) { engine.current.layer.stop(); engine.current.layer = null; }
  }, [playing, preset, updateSound]);

  const setVolume = useCallback((amount: number) => {
    const level = Math.max(0, Math.min(100, amount));
    setVolumeState(level);
    const player = engine.current;
    if (player) player.master.gain.setTargetAtTime(playing ? level / 100 : 0, player.context.currentTime, 0.04);
  }, [playing]);

  const setDuration = useCallback((minutes: number) => {
    if (![0, 25, 50].includes(minutes)) return;
    setDurationState(minutes); setRemaining(minutes * 60); setFinished(false);
  }, []);

  useEffect(() => {
    if (!playing || !duration) return;
    const interval = setInterval(() => setRemaining((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => clearInterval(interval);
  }, [playing, duration]);
  useEffect(() => {
    if (playing && duration && remaining === 0) { pause(); setFinished(true); }
  }, [playing, duration, remaining, pause]);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); engine.current?.layer?.stop(); void engine.current?.context.close(); }, []);

  return <FocusContext.Provider value={{ playing, preset, volume, variation, duration, remaining, finished, error, setPreset, setVolume, setDuration, play, pause, next }}>{children}</FocusContext.Provider>;
}

export function useFocus(): FocusValue {
  const context = useContext(FocusContext);
  if (!context) throw new Error('FocusProvider missing.');
  return context;
}
