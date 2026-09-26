import type { ChatMessage, GuidanceLevel, Provider, Subject } from './tutorApi';
import type { BookletPage } from './booklet';

export const PROFILE_STORAGE_KEY = 'sarang-md-encrypted-profile-v1';
const FORMAT = 'sarang-md-encrypted-profile';
const ASSOCIATED_DATA = new TextEncoder().encode('sarang-md-encrypted-profile:v1');
export const KDF_ITERATIONS = 600_000;
export const MAX_DOCUMENTS = 12;
export const MAX_PROFILE_LENGTH = 1_500_000;

export interface NoteProgress {
  id: string;
  title: string;
  route: string;
  visits: number;
  visitedAt: string;
  studiedAt?: string;
}
export interface QuestionProgress {
  id: string;
  title: string;
  route: string;
  kind: 'original' | 'paper' | 'variant';
  paper?: 'P1' | 'P2' | 'P3';
  /** Self-reported marking only; bestMarks is not an externally graded result. */
  bestMarks?: number;
  lastMarks?: number;
  maximumMarks?: number;
  markedAt?: string;
  attempts: number;
  matched: number;
  total: number;
  lastAnswers: string[];
  updatedAt: string;
  completedAt?: string;
  revealedAt?: string;
}
export interface AssessmentRecord {
  id: string;
  name: string;
  paper: 'P1' | 'P2' | 'P3' | 'mixed' | 'IA';
  source: 'manual' | 'mock';
  earned: number;
  available: number;
  questionIds: string[];
  completedAt: string;
  seed?: number;
}
export interface FocusSession {
  id: string;
  startedAt: string;
  seconds: number;
  preset: string;
}
export interface ActivityItem {
  id: string;
  at: string;
  label: string;
  route: string;
  kind: 'note' | 'question' | 'focus' | 'chat' | 'import';
}
export interface SavedConnection {
  model: string;
  endpoint: string;
  apiKey: string;
}
export interface SavedChat {
  id: string;
  title: string;
  subject: Subject;
  guidanceLevel: GuidanceLevel;
  mode: 'hint' | 'reveal';
  updatedAt: string;
  messages: ChatMessage[];
}
export interface PrivateDocument {
  id: string;
  name: string;
  kind: 'formula' | 'note';
  pages: BookletPage[];
  note: string;
  addedAt: string;
}
export interface ProfileData {
  version: 1;
  displayName: string;
  school: string;
  /** Resized locally and encrypted in the vault, never sent as a public image. */
  avatar: string;
  bookmarks: string[];
  assessments: AssessmentRecord[];
  createdAt: string;
  updatedAt: string;
  notes: Record<string, NoteProgress>;
  questions: Record<string, QuestionProgress>;
  focusSessions: FocusSession[];
  activity: ActivityItem[];
  chats: SavedChat[];
  documents: PrivateDocument[];
  providers: Partial<Record<Provider, SavedConnection>>;
  lastProvider: Provider;
}

export interface VaultEnvelope {
  format: typeof FORMAT;
  version: 1;
  kdf: { name: 'PBKDF2'; hash: 'SHA-256'; iterations: number; salt: string };
  cipher: { name: 'AES-GCM'; iv: string; ciphertext: string };
  createdAt: string;
  savedAt: string;
}

const isObject = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
const safeDate = (value: unknown): value is string => typeof value === 'string' && value.length < 50 && Number.isFinite(Date.parse(value));
const safeRoute = (value: unknown): value is string => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && value.length < 350 && !/[\\\u0000-\u001f]/.test(value);
const safeKey = (value: string) => value.length > 0 && value.length < 230 && !['__proto__', 'prototype', 'constructor'].includes(value);
const providers: Provider[] = ['openai', 'openrouter', 'mistral', 'xai', 'anthropic', 'gemini', 'kimi', 'compatible'];
const subjects: Subject[] = ['Mathematics AA HL', 'Chemistry HL', 'Physics HL', 'English A SL', 'German A SL'];
const bytes = (length: number) => crypto.getRandomValues(new Uint8Array(length));
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder('utf-8', { fatal: true });

function toBase64(value: Uint8Array): string {
  let data = '';
  for (let offset = 0; offset < value.length; offset += 8192) data += String.fromCharCode(...value.subarray(offset, offset + 8192));
  return btoa(data);
}
function fromBase64(value: string, maxLength: number): Uint8Array<ArrayBuffer> {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(value) || value.length > maxLength) throw new Error('The encrypted backup has invalid or oversized data.');
  const decoded = atob(value);
  const result = new Uint8Array(new ArrayBuffer(decoded.length));
  for (let index = 0; index < decoded.length; index++) result[index] = decoded.charCodeAt(index);
  return result;
}

export function supportsEncryptedProfiles(): boolean {
  try { return !!crypto?.subtle && !!window.localStorage; } catch { return false; }
}

export function emptyProfile(displayName: string): ProfileData {
  const now = new Date().toISOString();
  return { version: 1, displayName: displayName.trim().slice(0, 80) || 'My study space', school: '', avatar: '',
    bookmarks: [], assessments: [], createdAt: now, updatedAt: now,
    notes: {}, questions: {}, focusSessions: [], activity: [], chats: [], documents: [], providers: {}, lastProvider: 'openai' };
}

export function validateProfile(raw: unknown): ProfileData {
  if (!isObject(raw) || raw.version !== 1 || typeof raw.displayName !== 'string' || raw.displayName.length > 80 ||
      !safeDate(raw.createdAt) || !safeDate(raw.updatedAt) || !isObject(raw.notes) || !isObject(raw.questions) ||
      !isObject(raw.providers) || !Array.isArray(raw.focusSessions) || !Array.isArray(raw.activity) ||
      !Array.isArray(raw.chats) || !Array.isArray(raw.documents) || !providers.includes(raw.lastProvider as Provider)) {
    throw new Error('This file does not contain a compatible Sarang.md profile.');
  }
  if (Object.keys(raw.notes).length > 2500 || Object.keys(raw.questions).length > 2500 || raw.documents.length > MAX_DOCUMENTS ||
      raw.focusSessions.length > 500 || raw.activity.length > 250 || raw.chats.length > 60) throw new Error('Profile contains too many entries.');
  // Older version-1 encrypted profiles did not include these fields. Add defaults
  // on decryption so importing an existing backup does not drop private data.
  const school = raw.school ?? '';
  const avatar = raw.avatar ?? '';
  const bookmarks = raw.bookmarks ?? [];
  const assessments = raw.assessments ?? [];
  if (typeof school !== 'string' || school.length > 120 || /[\u0000-\u001f]/.test(school) ||
      typeof avatar !== 'string' || avatar.length > 120_000 || (avatar !== '' && !/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(avatar)) ||
      !Array.isArray(bookmarks) || bookmarks.length > 500 || bookmarks.some((id) => typeof id !== 'string' || !safeKey(id)) ||
      !Array.isArray(assessments) || assessments.length > 200) throw new Error('Invalid study identity or assessments.');
  for (const entry of assessments) if (!isObject(entry) || typeof entry.id !== 'string' || !safeKey(entry.id) ||
    typeof entry.name !== 'string' || entry.name.length > 120 || !['P1', 'P2', 'P3', 'mixed', 'IA'].includes(entry.paper as string) ||
    !['manual', 'mock'].includes(entry.source as string) || !Number.isInteger(entry.earned) || (entry.earned as number) < 0 ||
    !Number.isInteger(entry.available) || (entry.available as number) < 1 || (entry.available as number) > 500 ||
    (entry.earned as number) > (entry.available as number) || !safeDate(entry.completedAt) ||
    !Array.isArray(entry.questionIds) || entry.questionIds.length > 40 || entry.questionIds.some((id: unknown) => typeof id !== 'string' || !safeKey(id)) ||
    (entry.seed !== undefined && (!Number.isInteger(entry.seed) || (entry.seed as number) < 1 || (entry.seed as number) > 2147483647))) throw new Error('Invalid assessment record.');
  const notes: Record<string, NoteProgress> = {};
  const questions: Record<string, QuestionProgress> = {};
  const configs: Partial<Record<Provider, SavedConnection>> = {};
  for (const [id, value] of Object.entries(raw.notes)) {
    if (!safeKey(id) || !isObject(value) || value.id !== id || typeof value.title !== 'string' || value.title.length > 180 ||
        !safeRoute(value.route) || !Number.isInteger(value.visits) || (value.visits as number) < 0 || (value.visits as number) > 100000 ||
        !safeDate(value.visitedAt) || (value.studiedAt !== undefined && !safeDate(value.studiedAt))) throw new Error(`Invalid note progress: ${id.slice(0, 40)}`);
    notes[id] = value as unknown as NoteProgress;
  }
  for (const [id, value] of Object.entries(raw.questions)) {
    if (!safeKey(id) || !isObject(value) || value.id !== id || typeof value.title !== 'string' || value.title.length > 180 ||
        !safeRoute(value.route) || !['original', 'paper', 'variant'].includes(value.kind as string) ||
        !Number.isInteger(value.attempts) || (value.attempts as number) < 0 || (value.attempts as number) > 100000 ||
        !Number.isInteger(value.matched) || (value.matched as number) < 0 || (value.matched as number) > 40 ||
        !Number.isInteger(value.total) || (value.total as number) < 0 || (value.total as number) > 40 ||
        !Array.isArray(value.lastAnswers) || value.lastAnswers.length > 30 || value.lastAnswers.some((item) => typeof item !== 'string' || item.length > 140) ||
        !safeDate(value.updatedAt) || (value.completedAt !== undefined && !safeDate(value.completedAt)) ||
        (value.revealedAt !== undefined && !safeDate(value.revealedAt)) || (value.paper !== undefined && !['P1', 'P2', 'P3'].includes(value.paper as string)) ||
        (value.markedAt !== undefined && !safeDate(value.markedAt)) ||
        ['bestMarks', 'lastMarks', 'maximumMarks'].some((field) => value[field] !== undefined &&
          (!Number.isInteger(value[field]) || (value[field] as number) < 0 || (value[field] as number) > 500)) ||
        (typeof value.maximumMarks === 'number' && ((value.bestMarks as number) > value.maximumMarks || (value.lastMarks as number) > value.maximumMarks))) {
      throw new Error(`Invalid question progress: ${id.slice(0, 40)}`);
    }
    questions[id] = value as unknown as QuestionProgress;
  }
  for (const [id, value] of Object.entries(raw.providers)) {
    if (!providers.includes(id as Provider) || !isObject(value) || typeof value.model !== 'string' || value.model.length > 160 ||
        typeof value.endpoint !== 'string' || value.endpoint.length > 500 || typeof value.apiKey !== 'string' || value.apiKey.length > 2000) throw new Error('Invalid saved provider settings.');
    configs[id as Provider] = value as unknown as SavedConnection;
  }
  for (const entry of raw.focusSessions) if (!isObject(entry) || typeof entry.id !== 'string' || !safeKey(entry.id) || !safeDate(entry.startedAt) ||
    typeof entry.seconds !== 'number' || !Number.isInteger(entry.seconds) || entry.seconds < 1 || entry.seconds > 21600 ||
    typeof entry.preset !== 'string' || entry.preset.length > 60) throw new Error('Invalid focus session.');
  for (const entry of raw.activity) if (!isObject(entry) || typeof entry.id !== 'string' || !safeKey(entry.id) || !safeDate(entry.at) ||
    !['note', 'question', 'focus', 'chat', 'import'].includes(entry.kind as string) || typeof entry.label !== 'string' || entry.label.length > 200 ||
    !safeRoute(entry.route)) throw new Error('Invalid activity entry.');
  for (const entry of raw.chats) if (!isObject(entry) || typeof entry.id !== 'string' || !safeKey(entry.id) || typeof entry.title !== 'string' || entry.title.length > 180 ||
    !subjects.includes(entry.subject as Subject) || ![1, 2, 3, 4, 5].includes(entry.guidanceLevel as number) || !['hint', 'reveal'].includes(entry.mode as string) ||
    !safeDate(entry.updatedAt) || !Array.isArray(entry.messages) || entry.messages.length > 20 || entry.messages.some((message: unknown) => !isObject(message) ||
      !['user', 'assistant'].includes(message.role as string) || typeof message.content !== 'string' || message.content.length > 5000)) throw new Error('Invalid tutor history.');
  let totalText = 0;
  for (const doc of raw.documents) {
    if (!isObject(doc) || typeof doc.id !== 'string' || !safeKey(doc.id) || typeof doc.name !== 'string' || doc.name.length > 180 ||
        !['formula', 'note'].includes(doc.kind as string) || !safeDate(doc.addedAt) || typeof doc.note !== 'string' || doc.note.length > 400 ||
        !Array.isArray(doc.pages) || doc.pages.length > 60 || doc.pages.some((page: unknown) => !isObject(page) ||
          !Number.isInteger(page.number) || (page.number as number) < 1 || typeof page.text !== 'string' || page.text.length > 50000)) throw new Error('Invalid private document.');
    totalText += (doc.pages as BookletPage[]).reduce((sum, page) => sum + page.text.length, 0);
  }
  if (totalText > 360000) throw new Error('Private documents exceed this browser storage limit.');
  return {
    version: 1, displayName: raw.displayName, school, avatar, bookmarks, assessments,
    createdAt: raw.createdAt, updatedAt: raw.updatedAt,
    notes, questions, providers: configs, lastProvider: raw.lastProvider,
    focusSessions: raw.focusSessions, activity: raw.activity, chats: raw.chats, documents: raw.documents,
  } as ProfileData;
}

export function parseEnvelope(source: string): VaultEnvelope {
  if (source.length > 3_000_000) throw new Error('The encrypted backup is too large for browser storage.');
  const cleaned = source.startsWith('SARANG.MD ENCRYPTED PROFILE\n') ? source.slice('SARANG.MD ENCRYPTED PROFILE\n'.length) : source;
  let result: unknown;
  try { result = JSON.parse(cleaned); } catch { throw new Error('This is not an encrypted Sarang.md profile file.'); }
  if (!isObject(result) || result.format !== FORMAT || result.version !== 1 || !isObject(result.kdf) || !isObject(result.cipher) ||
      result.kdf.name !== 'PBKDF2' || result.kdf.hash !== 'SHA-256' || !Number.isInteger(result.kdf.iterations) ||
      (result.kdf.iterations as number) < 310_000 || (result.kdf.iterations as number) > 1_000_000 ||
      typeof result.kdf.salt !== 'string' || typeof result.cipher.iv !== 'string' || result.cipher.name !== 'AES-GCM' ||
      typeof result.cipher.ciphertext !== 'string' || !safeDate(result.createdAt) || !safeDate(result.savedAt)) {
    throw new Error('This file is not a supported encrypted profile.');
  }
  const salt = fromBase64(result.kdf.salt, 44);
  const iv = fromBase64(result.cipher.iv, 24);
  fromBase64(result.cipher.ciphertext, 2_800_000);
  if (salt.length !== 16 || iv.length !== 12) throw new Error('The backup has invalid encryption parameters.');
  return result as unknown as VaultEnvelope;
}

export async function deriveVaultKey(password: string, salt: string, iterations: number): Promise<CryptoKey> {
  if (!supportsEncryptedProfiles()) throw new Error('Encrypted profiles require HTTPS or localhost and browser storage.');
  if (!password) throw new Error('Enter your profile password.');
  const seed = await crypto.subtle.importKey('raw', textEncoder.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: fromBase64(salt, 44), iterations }, seed,
    { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}

export async function encryptProfile(profile: ProfileData, key: CryptoKey, salt: string, createdAt: string, iterations = KDF_ITERATIONS): Promise<VaultEnvelope> {
  const serialized = JSON.stringify(validateProfile(profile));
  if (serialized.length > MAX_PROFILE_LENGTH) throw new Error('The profile is full. Remove private files or old chat history before adding more.');
  const iv = bytes(12);
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: ASSOCIATED_DATA }, key, textEncoder.encode(serialized));
  return { format: FORMAT, version: 1, kdf: { name: 'PBKDF2', hash: 'SHA-256', iterations, salt },
    cipher: { name: 'AES-GCM', iv: toBase64(iv), ciphertext: toBase64(new Uint8Array(encrypted)) }, createdAt, savedAt: new Date().toISOString() };
}

export async function decryptProfile(envelope: VaultEnvelope, key: CryptoKey): Promise<ProfileData> {
  try {
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(envelope.cipher.iv, 24), additionalData: ASSOCIATED_DATA },
      key, fromBase64(envelope.cipher.ciphertext, 2_800_000));
    return validateProfile(JSON.parse(textDecoder.decode(decrypted)));
  } catch { throw new Error('Wrong password or damaged encrypted profile. No data was changed.'); }
}

export function newSalt(): string { return toBase64(bytes(16)); }
