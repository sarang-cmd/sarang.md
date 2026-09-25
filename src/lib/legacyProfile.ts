import { emptyProfile, validateProfile } from './profileVault';
import type { ProfileData, QuestionProgress, SavedConnection } from './profileVault';
import { providerOptions } from './tutorApi';
import type { Provider } from './tutorApi';

/** Compatibility with the earlier, separately stored browser profile. Never write this format again. */
export const LEGACY_PROFILE_KEY = 'sarang-encrypted-profile';
const oldDate = (value: unknown, fallback: string) => typeof value === 'string' && value.length < 50 && Number.isFinite(Date.parse(value)) ? value : fallback;
const hex = (value: unknown, length?: number): value is string => typeof value === 'string' && !!value.length && value.length % 2 === 0 &&
  value.length <= 3_000_000 && (length === undefined || value.length === length) && /^[a-f\d]+$/i.test(value);
const hexBytes = (value: string): Uint8Array<ArrayBuffer> => {
  const pairs = value.match(/.{2}/g) ?? [];
  const result = new Uint8Array(new ArrayBuffer(pairs.length));
  for (let index = 0; index < pairs.length; index++) result[index] = parseInt(pairs[index], 16);
  return result;
};

export function hasLegacyProfile(): boolean {
  try { return localStorage.getItem(LEGACY_PROFILE_KEY) !== null; } catch { return false; }
}

export async function readLegacyProfile(password: string, displayName: string): Promise<ProfileData> {
  const raw = localStorage.getItem(LEGACY_PROFILE_KEY);
  if (!raw) throw new Error('No earlier profile was found in this browser.');
  if (raw.length > 3_000_000) throw new Error('The earlier profile is too large to migrate safely.');
  let envelope: unknown;
  try { envelope = JSON.parse(raw); } catch { throw new Error('The earlier encrypted profile is damaged.'); }
  if (!envelope || typeof envelope !== 'object') throw new Error('Invalid earlier encrypted profile.');
  const old = envelope as Record<string, unknown>;
  if (!hex(old.salt, 32) || !hex(old.iv, 24) || !hex(old.ciphertext) || old.ciphertext.length < 32) {
    throw new Error('The earlier encrypted profile has invalid parameters.');
  }
  let source: unknown;
  try {
    const secret = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: hexBytes(old.salt), hash: 'SHA-256', iterations: 100_000 },
      secret, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: hexBytes(old.iv) }, key, hexBytes(old.ciphertext));
    source = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(decrypted));
  } catch { throw new Error('Wrong password or damaged earlier profile. Nothing was changed.'); }
  if (!source || typeof source !== 'object' || Array.isArray(source)) throw new Error('The earlier profile has invalid contents.');
  const legacy = source as Record<string, unknown>;
  if (legacy.version !== 1 || !legacy.apiKeys || typeof legacy.apiKeys !== 'object' || Array.isArray(legacy.apiKeys) ||
      !legacy.progress || typeof legacy.progress !== 'object' || Array.isArray(legacy.progress)) throw new Error('The earlier profile cannot be safely migrated.');
  const progress = legacy.progress as Record<string, unknown>;
  const profile = emptyProfile(displayName);
  const date = oldDate(legacy.updatedAt, profile.updatedAt);
  profile.createdAt = oldDate(legacy.createdAt, profile.createdAt);
  const listedProviders = new Set(providerOptions.map((option) => option.id));
  for (const [id, value] of Object.entries(legacy.apiKeys)) {
    if (!listedProviders.has(id as Provider) || typeof value !== 'string' || value.length > 2000) continue;
    const option = providerOptions.find((item) => item.id === id)!;
    const connection: SavedConnection = { apiKey: value, model: option.model, endpoint: option.endpoint };
    profile.providers[id as Provider] = connection;
    profile.lastProvider = id as Provider;
  }
  if (Array.isArray(progress.topicsCompleted)) for (const item of progress.topicsCompleted.slice(0, 1000)) {
    if (typeof item !== 'string' || !item.length || item.length > 170) continue;
    const id = `legacy-note:${item}`;
    profile.notes[id] = { id, title: `Earlier topic ${item}`, route: '/units', visits: 1, visitedAt: date, studiedAt: date };
  }
  const addQuestion = (entries: unknown, kind: QuestionProgress['kind']) => {
    if (!entries || typeof entries !== 'object' || Array.isArray(entries)) return;
    for (const [originalId, value] of Object.entries(entries).slice(0, 1000)) {
      if (!originalId || originalId.length > 150 || !value || typeof value !== 'object' || Array.isArray(value)) continue;
      const previous = value as Record<string, unknown>;
      const paper = /(?:^|[-:])2(?:[-:]|$)/.test(originalId) ? 'P2' : 'P1';
      const id = `legacy-${kind}:${originalId}`;
      profile.questions[id] = { id, kind, ...(kind === 'paper' ? { paper } : {}), title: `Earlier ${kind === 'paper' ? 'paper' : 'practice'} item ${originalId}`,
        route: kind === 'paper' ? `/ib-papers?paper=${paper}` : '/question-bank', attempts: previous.attempted ? 1 : 0,
        matched: 0, total: 0, lastAnswers: [], updatedAt: oldDate(previous.timestamp, date),
        ...(previous.attempted ? { completedAt: oldDate(previous.timestamp, date) } : {}) };
    }
  };
  addQuestion(progress.questionsAttempted, 'original');
  addQuestion(progress.papersAttempted, 'paper');
  if (Array.isArray(progress.focusSessions)) for (const value of progress.focusSessions.slice(-400)) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
    const session = value as Record<string, unknown>;
    if (typeof session.duration !== 'number' || !Number.isFinite(session.duration) || session.duration <= 0) continue;
    profile.focusSessions.push({ id: crypto.randomUUID(), startedAt: oldDate(session.timestamp, date),
      seconds: Math.max(1, Math.min(21600, Math.round(session.duration))), preset: typeof session.preset === 'string' ? session.preset.slice(0, 60) : 'Earlier focus' });
  }
  profile.activity = [{ id: crypto.randomUUID(), at: new Date().toISOString(), kind: 'import', label: 'Migrated earlier encrypted profile', route: '/profile' }];
  profile.updatedAt = new Date().toISOString();
  return validateProfile(profile);
}
