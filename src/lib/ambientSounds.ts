export const ambientSounds = ['Rainfall', 'Distant thunder', 'Shore waves', 'Wind', 'Hearth', 'Birdsong', 'Crickets', 'Café', 'Soft bells', 'White noise'] as const;
export type AmbientSound = typeof ambientSounds[number];
export type SoundLevels = Record<AmbientSound, number>;
export const ambientDescriptions: Record<AmbientSound, string> = {
  Rainfall: 'Airy rain texture with small droplets',
  'Distant thunder': 'Quiet, rolling low-frequency rumble',
  'Shore waves': 'Slow swells of softly filtered surf',
  Wind: 'Gentle gusts through a wide filter',
  Hearth: 'Soft synthesized crackle and warmth',
  Birdsong: 'Sparse synthetic, two-note chirps',
  Crickets: 'Light, rhythmic evening insects',
  Café: 'Muffled room-tone and tiny clicks, no recorded voices',
  'Soft bells': 'Occasional, fading harmonic tones',
  'White noise': 'An even, quiet noise bed',
};
export const emptySoundLevels = (): SoundLevels => Object.fromEntries(ambientSounds.map((sound) => [sound, 0])) as SoundLevels;
const MIX_KEY = 'sarang-focus-sound-mix';
export function readSoundLevels(): SoundLevels {
  const empty = emptySoundLevels();
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(MIX_KEY) ?? 'null');
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return empty;
    for (const sound of ambientSounds) {
      const amount = (stored as Record<string, unknown>)[sound];
      if (typeof amount === 'number' && Number.isFinite(amount)) empty[sound] = Math.max(0, Math.min(100, Math.round(amount)));
    }
  } catch { /* The mixer still works if storage is unavailable. */ }
  return empty;
}
export function saveSoundLevels(levels: SoundLevels) {
  try { localStorage.setItem(MIX_KEY, JSON.stringify(levels)); } catch { /* Mix persists only for this visit. */ }
}
