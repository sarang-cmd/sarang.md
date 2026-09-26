import { ambientSounds } from './ambientSounds';
import type { AmbientSound } from './ambientSounds';

export interface SynthLayer { gain: GainNode; stop: () => void }

/** All audio is generated in the browser, with no third-party recordings. */
function makeSoundBuffer(context: AudioContext, sound: AmbientSound, seed: number): AudioBuffer {
  const seconds = 8;
  const length = Math.round(context.sampleRate * seconds);
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const samples = buffer.getChannelData(0);
  let state = (seed ^ Math.imul(ambientSounds.indexOf(sound) + 1, 0x9e3779b9)) >>> 0;
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  type Event = { start: number; duration: number; f: number; to: number; power: number };
  const events: Event[] = [];
  if (sound === 'Birdsong') {
    for (let i = 0; i < 9; i++) { const start = (i + .16 + random() * .46) * seconds / 10;
      events.push({ start, duration: .12 + random() * .22, f: 840 + random() * 440, to: 90 + random() * 260, power: .5 }); }
  }
  if (sound === 'Crickets') {
    for (let i = 0; i < 23; i++) { const start = (i + random() * .28) * seconds / 24;
      events.push({ start, duration: .055 + random() * .035, f: 2100 + random() * 480, to: 0, power: .25 }); }
  }
  if (sound === 'Soft bells') {
    for (let i = 0; i < 5; i++) { const start = (i + .2 + random() * .5) * seconds / 6;
      events.push({ start, duration: .6 + random() * .55, f: [220, 261.63, 329.63, 392][Math.floor(random() * 4)], to: 0, power: .5 }); }
  }
  let smooth = 0, snap = 0;
  let peak = .000001;
  for (let i = 0; i < length; i++) {
    const t = i / context.sampleRate;
    const raw = random() * 2 - 1;
    smooth = .992 * smooth + .008 * raw;
    const slow = Math.sin(2 * Math.PI * (.11 + seed % 7 * .007) * t);
    let value = 0;
    switch (sound) {
      case 'Rainfall': {
        if (random() < 9 / context.sampleRate) snap = .18 + random() * .16;
        snap *= .998;
        value = .38 * raw + smooth * 1.5 + snap * Math.sin(2 * Math.PI * 1200 * t);
        break;
      }
      case 'Distant thunder': {
        const pulse = Math.exp(-(((t - 2.3) / .9) ** 2)) + .7 * Math.exp(-(((t - 6.1) / 1.1) ** 2));
        value = smooth * (2 + 7 * pulse) + .045 * raw * pulse;
        break;
      }
      case 'Shore waves': value = (.15 * raw + smooth * 2.3) * (.5 + .48 * slow); break;
      case 'Wind': value = (.16 * raw + smooth * 2.5) * (.72 + .22 * slow); break;
      case 'Hearth': {
        if (random() < 22 / context.sampleRate) snap = .25 + random() * .55;
        snap *= .992;
        value = .1 * raw + .65 * smooth + snap * raw;
        break;
      }
      case 'Café': {
        if (random() < 1.9 / context.sampleRate) snap = .2 + random() * .18;
        snap *= .996;
        value = 1.9 * smooth + .085 * raw + snap * Math.sin(2 * Math.PI * 820 * t);
        break;
      }
      case 'White noise': value = raw * .65; break;
      case 'Birdsong':
      case 'Crickets':
      case 'Soft bells': {
        for (const event of events) {
          const elapsed = t - event.start;
          if (elapsed < 0 || elapsed >= event.duration) continue;
          const phase = 2 * Math.PI * (event.f * elapsed + .5 * event.to * elapsed ** 2 / event.duration);
          const envelope = sound === 'Soft bells' ? Math.sin(Math.PI * elapsed / event.duration) * Math.exp(-2 * elapsed / event.duration)
            : Math.sin(Math.PI * elapsed / event.duration) ** 2;
          value += event.power * envelope * Math.sin(phase);
          if (sound === 'Soft bells') value += .11 * envelope * Math.sin(phase * 2.01);
        }
        break;
      }
    }
    // Fade both ends of the loop to silence to avoid clicks on wraparound.
    const fade = Math.min(1, i / (context.sampleRate * .09), (length - 1 - i) / (context.sampleRate * .09));
    samples[i] = value * Math.max(0, fade);
    peak = Math.max(peak, Math.abs(samples[i]));
  }
  const normalization = Math.min(4, .72 / peak);
  for (let i = 0; i < length; i++) samples[i] *= normalization;
  return buffer;
}

export function makeAmbientLayer(context: AudioContext, sound: AmbientSound, seed: number): SynthLayer {
  const gain = context.createGain();
  gain.gain.setValueAtTime(0, context.currentTime);
  const filter = context.createBiquadFilter();
  const options: Record<AmbientSound, [BiquadFilterType, number]> = {
    Rainfall: ['lowpass', 4200], 'Distant thunder': ['lowpass', 180], 'Shore waves': ['lowpass', 800],
    Wind: ['bandpass', 900], Hearth: ['lowpass', 3300], Birdsong: ['highpass', 500],
    Crickets: ['highpass', 1200], Café: ['lowpass', 850], 'Soft bells': ['lowpass', 2200], 'White noise': ['lowpass', 6000],
  };
  [filter.type, filter.frequency.value] = options[sound];
  const source = context.createBufferSource();
  source.buffer = makeSoundBuffer(context, sound, seed);
  source.loop = true;
  source.connect(filter).connect(gain);
  source.start();
  return { gain, stop: () => { try { source.stop(); } catch { /* Already stopped. */ } source.disconnect(); filter.disconnect(); gain.disconnect(); } };
}
