import { create } from 'zustand';
import { decryptProfile, deriveVaultKey, emptyProfile, encryptProfile, KDF_ITERATIONS, MAX_DOCUMENTS, parseEnvelope, PROFILE_STORAGE_KEY, supportsEncryptedProfiles, validateProfile, newSalt } from '../lib/profileVault';
import type { ActivityItem, AssessmentRecord, FocusSession, NoteProgress, PrivateDocument, ProfileData, QuestionProgress, SavedConnection, SavedChat, VaultEnvelope } from '../lib/profileVault';
import type { ChatMessage, GuidanceLevel, Provider, Subject } from '../lib/tutorApi';
import { LEGACY_PROFILE_KEY, readLegacyProfile } from '../lib/legacyProfile';

export type ProfileStatus = 'absent' | 'locked' | 'unlocked' | 'unavailable';
export interface QuestionEvent {
  id: string;
  title: string;
  route: string;
  kind: QuestionProgress['kind'];
  paper?: 'P1' | 'P2' | 'P3';
  event: 'answers' | 'attempt' | 'check' | 'reveal' | 'complete';
  answers?: string[];
  matched?: number;
  total?: number;
}
interface ProfileState {
  status: ProfileStatus;
  profile: ProfileData | null;
  saving: boolean;
  error: string;
  savedAt: string | null;
  createVault: (password: string, name: string) => Promise<void>;
  migrateLegacyVault: (oldPassword: string, newPassword: string, name: string) => Promise<void>;
  unlockVault: (password: string) => Promise<void>;
  lockVault: () => Promise<void>;
  changePassword: (current: string, next: string) => Promise<void>;
  importVault: (source: string, password: string) => Promise<void>;
  deleteVault: () => void;
  exportEncrypted: () => Promise<string>;
  exportSummary: () => string;
  rename: (value: string) => void;
  setSchool: (value: string) => void;
  setAvatar: (dataUri: string) => void;
  toggleBookmark: (id: string) => void;
  recordManualScore: (item: { id: string; title: string; paper: 'P1' | 'P2' | 'P3'; earned: number; available: number }) => void;
  addAssessment: (entry: AssessmentRecord) => void;
  removeAssessment: (id: string) => void;
  recordNote: (id: string, title: string, route: string) => void;
  toggleStudied: (id: string, title: string, route: string) => void;
  recordQuestion: (item: QuestionEvent) => void;
  recordFocus: (preset: string, startedAt: string, seconds: number) => void;
  saveConnection: (provider: Provider, value: SavedConnection) => void;
  setLastProvider: (provider: Provider) => void;
  saveChat: (id: string, title: string, subject: Subject, guidanceLevel: GuidanceLevel, mode: 'hint' | 'reveal', messages: ChatMessage[]) => void;
  addDocument: (document: PrivateDocument) => void;
  removeDocument: (id: string) => void;
  clearChats: () => void;
  removeChat: (id: string) => void;
  resetProgress: () => void;
  clearError: () => void;
}

function initialState(): Pick<ProfileState, 'status' | 'savedAt' | 'error'> {
  if (!supportsEncryptedProfiles()) return { status: 'unavailable', savedAt: null, error: 'Encrypted profiles need HTTPS or localhost and available browser storage.' };
  try {
    const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!stored) return { status: 'absent', savedAt: null, error: '' };
    const vault = parseEnvelope(stored);
    return { status: 'locked', savedAt: vault.savedAt, error: '' };
  } catch { return { status: 'locked', savedAt: null, error: 'The saved encrypted profile could not be read. Restore a backup or delete it on the Profile page.' }; }
}

let inMemoryKey: CryptoKey | null = null;
let envelope: VaultEnvelope | null = null;
let generation = 0;
let latestRevision = 0;
let pendingSave: Promise<void> = Promise.resolve();

const stamp = () => new Date().toISOString();
const eventId = () => crypto.randomUUID();
const activity = (items: ActivityItem[], kind: ActivityItem['kind'], label: string, route: string): ActivityItem[] => [
  { id: eventId(), at: stamp(), kind, label: label.slice(0, 200), route: route.slice(0, 350) }, ...items,
].slice(0, 200);

export const useProfileStore = create<ProfileState>((set, get) => {
  function update(change: (profile: ProfileData) => ProfileData | null): void {
    const current = get().profile;
    if (get().status !== 'unlocked' || !current || !inMemoryKey || !envelope) return;
    const changed = change(current);
    if (!changed || changed === current) return;
    const next: ProfileData = { ...changed, updatedAt: stamp() };
    try { validateProfile(next); }
    catch (problem) { set({ error: problem instanceof Error ? problem.message : 'Could not validate your changes.' }); return; }
    set({ profile: next, saving: true, error: '' });
    const revision = ++latestRevision;
    const session = generation;
    const key = inMemoryKey;
    const parameters = envelope.kdf;
    const createdAt = envelope.createdAt;
    pendingSave = pendingSave.catch(() => {}).then(async () => {
      if (generation !== session || revision !== latestRevision || !key) return;
      try {
        const encrypted = await encryptProfile(next, key, parameters.salt, createdAt, parameters.iterations);
        if (generation !== session || revision !== latestRevision) return;
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(encrypted));
        envelope = encrypted;
        set({ saving: false, error: '', savedAt: encrypted.savedAt });
      } catch (problem) {
        if (generation === session && revision === latestRevision) set({ saving: false, error: problem instanceof Error ? problem.message : 'Could not save. Check available browser storage.' });
      }
    });
  }

  return {
    ...initialState(), profile: null, saving: false,
    async createVault(password, name) {
      if (get().status !== 'absent') throw new Error('A profile already exists in this browser. Unlock it or restore a backup.');
      if (password.length < 12 || password.length > 256) throw new Error('Choose a password of 12 to 256 characters.');
      const profile = emptyProfile(name);
      const salt = newSalt();
      const key = await deriveVaultKey(password, salt, KDF_ITERATIONS);
      const encoded = await encryptProfile(profile, key, salt, profile.createdAt);
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(encoded));
      generation++; latestRevision++;
      inMemoryKey = key; envelope = encoded;
      try { localStorage.removeItem('sarang-tutor-connection'); } catch { /* Legacy nonsecret settings can remain. */ }
      set({ status: 'unlocked', profile, savedAt: encoded.savedAt, saving: false, error: '' });
    },
    async migrateLegacyVault(oldPassword, newPassword, name) {
      if (get().status !== 'absent') throw new Error('Export or delete the current profile before migrating an earlier one.');
      if (newPassword.length < 12 || newPassword.length > 256) throw new Error('Choose a new password of 12 to 256 characters.');
      const profile = await readLegacyProfile(oldPassword, name);
      const salt = newSalt();
      const key = await deriveVaultKey(newPassword, salt, KDF_ITERATIONS);
      const encoded = await encryptProfile(profile, key, salt, profile.createdAt);
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(encoded));
      localStorage.removeItem(LEGACY_PROFILE_KEY);
      generation++; latestRevision++;
      inMemoryKey = key; envelope = encoded;
      set({ status: 'unlocked', profile, savedAt: encoded.savedAt, saving: false, error: '' });
    },
    async unlockVault(password) {
      const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) throw new Error('No encrypted profile exists on this device. Create or import one.');
      const candidate = parseEnvelope(raw);
      const key = await deriveVaultKey(password, candidate.kdf.salt, candidate.kdf.iterations);
      const profile = await decryptProfile(candidate, key);
      generation++; latestRevision++;
      inMemoryKey = key; envelope = candidate;
      try { localStorage.removeItem('sarang-tutor-connection'); } catch { /* Legacy nonsecret settings can remain. */ }
      set({ status: 'unlocked', profile, saving: false, savedAt: candidate.savedAt, error: '' });
    },
    async lockVault() {
      await pendingSave;
      if (get().error) throw new Error('Your latest changes did not save. Resolve the storage error or export a backup before locking.');
      generation++; latestRevision++;
      inMemoryKey = null; envelope = null;
      set({ status: localStorage.getItem(PROFILE_STORAGE_KEY) ? 'locked' : 'absent', profile: null, saving: false, error: '' });
    },
    async changePassword(current, next) {
      if (get().status !== 'unlocked' || !get().profile) throw new Error('Unlock your profile before changing its password.');
      if (next.length < 12 || next.length > 256) throw new Error('New password must be 12 to 256 characters.');
      await pendingSave;
      if (get().error) throw new Error('Save your recent changes before changing the password.');
      const existing = parseEnvelope(localStorage.getItem(PROFILE_STORAGE_KEY) ?? '');
      const oldKey = await deriveVaultKey(current, existing.kdf.salt, existing.kdf.iterations);
      await decryptProfile(existing, oldKey);
      const salt = newSalt();
      const newKey = await deriveVaultKey(next, salt, KDF_ITERATIONS);
      const nextEnvelope = await encryptProfile(get().profile!, newKey, salt, existing.createdAt);
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextEnvelope));
      generation++; latestRevision++;
      inMemoryKey = newKey; envelope = nextEnvelope;
      set({ saving: false, savedAt: nextEnvelope.savedAt, error: '' });
    },
    async importVault(source, password) {
      const candidate = parseEnvelope(source.trim());
      const key = await deriveVaultKey(password, candidate.kdf.salt, candidate.kdf.iterations);
      const profile = await decryptProfile(candidate, key);
      await pendingSave;
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(candidate));
      generation++; latestRevision++;
      inMemoryKey = key; envelope = candidate;
      try { localStorage.removeItem('sarang-tutor-connection'); } catch { /* No sensitive legacy value. */ }
      set({ status: 'unlocked', profile, saving: false, savedAt: candidate.savedAt, error: '' });
    },
    deleteVault() {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      generation++; latestRevision++;
      inMemoryKey = null; envelope = null;
      set({ status: 'absent', profile: null, saving: false, savedAt: null, error: '' });
    },
    async exportEncrypted() {
      await pendingSave;
      if (get().error) throw new Error('Could not save the latest changes. Fix the storage error before exporting.');
      const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (!raw) throw new Error('No encrypted profile was found on this device.');
      return JSON.stringify(parseEnvelope(raw), null, 2);
    },
    exportSummary() {
      const profile = get().profile;
      if (!profile) throw new Error('Unlock your profile to export a readable summary.');
      const notes = Object.values(profile.notes);
      const questions = Object.values(profile.questions);
      const out = [
        'Sarang.md study summary', `Profile: ${profile.displayName}`, `Exported: ${stamp()}`,
        'This readable file excludes API keys, chat text, and the contents of private documents.', '',
        `Notes visited: ${notes.length}`, `Notes marked studied: ${notes.filter((note) => note.studiedAt).length}`,
        `Questions attempted: ${questions.filter((question) => question.attempts > 0 || question.lastAnswers.some(Boolean)).length}`,
        `Questions marked complete: ${questions.filter((question) => question.completedAt).length}`,
        `Best self-marked practice points: ${questions.reduce((sum, question) => sum + (question.bestMarks ?? 0), 0)}`,
        `Recorded assessments: ${profile.assessments.length}`,
        `Focus time: ${Math.round(profile.focusSessions.reduce((sum, session) => sum + session.seconds, 0) / 60)} minutes`, '',
        'Question progress:',
        ...questions.map((question) => `${question.id} | ${question.kind} | ${question.title.replace(/[\r\n|]/g, ' ')} | attempts ${question.attempts} | ${question.completedAt ? 'completed' : 'in progress'}`),
        '', 'Assessments:',
        ...profile.assessments.map((entry) => `${entry.name.replace(/[\r\n|]/g, ' ')} | ${entry.paper} | ${entry.earned}/${entry.available} self-recorded | ${entry.completedAt}`),
        '', 'Reading progress:',
        ...notes.map((note) => `${note.title.replace(/[\r\n|]/g, ' ')} | ${note.studiedAt ? 'studied' : 'visited'} | ${note.route}`),
      ];
      return out.join('\n');
    },
    rename(value) {
      const name = value.trim().slice(0, 80);
      if (name) update((profile) => ({ ...profile, displayName: name }));
    },
    setSchool(value) {
      update((profile) => ({ ...profile, school: value.trim().slice(0, 120) }));
    },
    setAvatar(dataUri) {
      update((profile) => ({ ...profile, avatar: dataUri }));
    },
    toggleBookmark(id) {
      if (!id || id.length >= 230) return;
      update((profile) => ({ ...profile, bookmarks: profile.bookmarks.includes(id)
        ? profile.bookmarks.filter((item) => item !== id) : [...profile.bookmarks, id] }));
    },
    recordManualScore(item) {
      if (!item.id || item.id.length >= 230 || !Number.isInteger(item.earned) || !Number.isInteger(item.available) ||
        item.available < 1 || item.available > 500 || item.earned < 0 || item.earned > item.available) return;
      update((profile) => {
        const before = profile.questions[item.id];
        const now = stamp();
        const entry: QuestionProgress = {
          id: item.id, title: item.title.slice(0, 180), route: `/practice?q=${encodeURIComponent(item.id)}`,
          kind: 'original', paper: item.paper,
          attempts: (before?.attempts ?? 0) + 1, matched: before?.matched ?? 0, total: before?.total ?? 0,
          lastAnswers: before?.lastAnswers ?? [], updatedAt: now, markedAt: now,
          maximumMarks: item.available, lastMarks: item.earned, bestMarks: Math.max(before?.bestMarks ?? 0, item.earned),
          ...(before?.completedAt ? { completedAt: before.completedAt } : {}),
          ...(before?.revealedAt ? { revealedAt: before.revealedAt } : {}),
        };
        return { ...profile, questions: { ...profile.questions, [item.id]: entry },
          activity: activity(profile.activity, 'question', `Self-marked ${item.title}: ${item.earned}/${item.available}`, entry.route) };
      });
    },
    addAssessment(entry) {
      update((profile) => {
        if (profile.assessments.some((item) => item.id === entry.id)) return null;
        return { ...profile, assessments: [entry, ...profile.assessments].slice(0, 200),
          activity: activity(profile.activity, 'question', `Recorded ${entry.name}: ${entry.earned}/${entry.available}`, '/profile') };
      });
    },
    removeAssessment(id) {
      update((profile) => ({ ...profile, assessments: profile.assessments.filter((entry) => entry.id !== id) }));
    },
    recordNote(id, title, route) {
      if (!id || id.length >= 230) return;
      update((profile) => {
        const existing = profile.notes[id];
        if (existing && Date.now() - Date.parse(existing.visitedAt) < 10 * 60 * 1000) return null;
        const now = stamp();
        const entry: NoteProgress = { id, title: title.slice(0, 180), route: route.slice(0, 350), visits: (existing?.visits ?? 0) + 1,
          visitedAt: now, ...(existing?.studiedAt ? { studiedAt: existing.studiedAt } : {}) };
        return { ...profile, notes: { ...profile.notes, [id]: entry }, activity: activity(profile.activity, 'note', `Opened ${entry.title}`, route) };
      });
    },
    toggleStudied(id, title, route) {
      if (!id || id.length >= 230) return;
      update((profile) => {
        const existing = profile.notes[id];
        const isStudied = !!existing?.studiedAt;
        const entry: NoteProgress = { id, title: title.slice(0, 180), route: route.slice(0, 350), visits: existing?.visits ?? 1,
          visitedAt: existing?.visitedAt ?? stamp(), ...(!isStudied ? { studiedAt: stamp() } : {}) };
        return { ...profile, notes: { ...profile.notes, [id]: entry }, activity: activity(profile.activity, 'note', `${isStudied ? 'Reopened' : 'Studied'} ${entry.title}`, route) };
      });
    },
    recordQuestion(item) {
      if (!item.id || item.id.length >= 230) return;
      update((profile) => {
        const previous = profile.questions[item.id];
        const now = stamp();
        const next: QuestionProgress = {
          id: item.id, title: item.title.slice(0, 180), route: item.route.slice(0, 350), kind: item.kind,
          ...(item.paper ? { paper: item.paper } : {}), attempts: (previous?.attempts ?? 0) + (item.event === 'check' || item.event === 'attempt' ? 1 : 0),
          matched: item.matched ?? previous?.matched ?? 0, total: item.total ?? previous?.total ?? 0,
          lastAnswers: (item.answers ?? previous?.lastAnswers ?? []).slice(0, 30).map((answer) => answer.slice(0, 140)), updatedAt: now,
          ...(previous?.completedAt && item.event !== 'complete' ? { completedAt: previous.completedAt } : {}),
          ...(item.event === 'complete' && !previous?.completedAt ? { completedAt: now } : {}),
          ...(previous?.revealedAt || item.event === 'reveal' ? { revealedAt: previous?.revealedAt ?? now } : {}),
          ...(previous?.markedAt ? { markedAt: previous.markedAt } : {}),
          ...(previous?.bestMarks !== undefined ? { bestMarks: previous.bestMarks, lastMarks: previous.lastMarks, maximumMarks: previous.maximumMarks } : {}),
        };
        if (item.event === 'answers' && JSON.stringify(previous?.lastAnswers ?? []) === JSON.stringify(next.lastAnswers)) return null;
        if (item.event === 'answers') return { ...profile, questions: { ...profile.questions, [item.id]: next } };
        const label = item.event === 'check' ? `Checked ${next.title}` : item.event === 'reveal' ? `Revealed ${next.title}` :
          item.event === 'complete' ? `${previous?.completedAt ? 'Reopened' : 'Completed'} ${next.title}` : `Attempted ${next.title}`;
        return { ...profile, questions: { ...profile.questions, [item.id]: next }, activity: activity(profile.activity, 'question', label, item.route) };
      });
    },
    recordFocus(preset, startedAt, seconds) {
      const rounded = Math.min(21600, Math.round(seconds));
      if (rounded <= 0) return;
      update((profile) => {
        const session: FocusSession = { id: eventId(), preset: preset.slice(0, 60), startedAt, seconds: rounded };
        return { ...profile, focusSessions: [session, ...profile.focusSessions].slice(0, 450),
          activity: activity(profile.activity, 'focus', `${Math.max(1, Math.round(rounded / 60))} min of ${session.preset} focus sound`, '/focus') };
      });
    },
    saveConnection(provider, value) {
      update((profile) => ({ ...profile, lastProvider: provider, providers: { ...profile.providers,
        [provider]: { model: value.model.slice(0, 160), endpoint: value.endpoint.slice(0, 500), apiKey: value.apiKey.slice(0, 2000) } } }));
    },
    setLastProvider(provider) {
      update((profile) => profile.lastProvider === provider ? null : { ...profile, lastProvider: provider });
    },
    saveChat(id, title, subject, guidanceLevel, mode, messages) {
      if (!id || id.length >= 200 || !messages.length) return;
      update((profile) => {
        const trimmed: ChatMessage[] = messages.slice(-16).map((message) => ({ role: message.role, content: message.content.slice(0, 3000) }));
        const snapshot: SavedChat = { id: `${id}:${mode}`, title: title.slice(0, 180), subject, guidanceLevel, mode, messages: trimmed, updatedAt: stamp() };
        const old = profile.chats.find((chat) => chat.id === snapshot.id);
        if (JSON.stringify(old?.messages ?? []) === JSON.stringify(trimmed)) return null;
        return { ...profile, chats: [snapshot, ...profile.chats.filter((chat) => chat.id !== snapshot.id)].slice(0, 50),
          activity: old ? profile.activity : activity(profile.activity, 'chat', `Tutoring: ${title}`, '/profile') };
      });
    },
    addDocument(document) {
      update((profile) => {
        if (profile.documents.length >= MAX_DOCUMENTS) { set({ error: `The private library can hold ${MAX_DOCUMENTS} files. Remove one first.` }); return null; }
        const added: PrivateDocument = { ...document, name: document.name.slice(0, 180), note: document.note.slice(0, 400) };
        return { ...profile, documents: [added, ...profile.documents], activity: activity(profile.activity, 'import', `Saved ${added.name} privately`, '/profile') };
      });
    },
    removeDocument(id) {
      update((profile) => ({ ...profile, documents: profile.documents.filter((doc) => doc.id !== id) }));
    },
    clearChats() {
      update((profile) => ({ ...profile, chats: [], activity: profile.activity.filter((entry) => entry.kind !== 'chat') }));
    },
    removeChat(id) {
      update((profile) => ({ ...profile, chats: profile.chats.filter((chat) => chat.id !== id) }));
    },
    resetProgress() {
      update((profile) => ({ ...profile, notes: {}, questions: {}, assessments: [], focusSessions: [],
        activity: profile.activity.filter((entry) => !['question', 'note', 'focus'].includes(entry.kind)) }));
    },
    clearError: () => set({ error: '' }),
  };
});

// Encrypted edits from another tab invalidate this tab's decrypted snapshot.
// Lock instead of silently overwriting either tab's changes.
if (typeof window !== 'undefined') window.addEventListener('storage', (event) => {
  if (event.key !== PROFILE_STORAGE_KEY) return;
  generation++; latestRevision++;
  inMemoryKey = null; envelope = null;
  const status = event.newValue ? 'locked' : 'absent';
  useProfileStore.setState({ status, profile: null, saving: false,
    error: event.newValue ? 'Profile updated in another tab. Unlock the latest copy here to continue.' : '' });
});
