import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { build } from 'esbuild';

const temp = await mkdtemp(join(tmpdir(), 'sarang-profile-test-'));
const storage = new Map();
globalThis.localStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: (key) => storage.delete(key),
};
globalThis.window = { localStorage: globalThis.localStorage, addEventListener: () => {} };
try {
  await build({ entryPoints: ['src/lib/profileVault.ts'], bundle: true, format: 'esm', platform: 'node', outfile: join(temp, 'vault.mjs') });
  await build({ entryPoints: ['src/store/useProfileStore.ts'], bundle: true, format: 'esm', platform: 'node', outfile: join(temp, 'store.mjs') });
  const vault = await import(pathToFileURL(join(temp, 'vault.mjs')).href);
  const { useProfileStore } = await import(pathToFileURL(join(temp, 'store.mjs')).href);

  test('AES-GCM vault roundtrip, wrong password, tampering, and text backup', async () => {
    const profile = vault.emptyProfile('A learner');
    profile.providers.openai = { apiKey: 'very-secret-demo-value', model: 'example-model', endpoint: 'https://example.com/v1' };
    profile.notes['included:unit/example.md'] = { id: 'included:unit/example.md', title: 'Sample note', route: '/units/example', visits: 1, visitedAt: new Date().toISOString() };
    const salt = vault.newSalt();
    const key = await vault.deriveVaultKey('correct-password-123', salt, vault.KDF_ITERATIONS);
    const envelope = await vault.encryptProfile(profile, key, salt, profile.createdAt);
    const raw = JSON.stringify(envelope);
    assert.ok(!raw.includes('very-secret-demo-value'));
    assert.ok(!raw.includes('Sample note'));
    assert.equal((await vault.decryptProfile(envelope, key)).providers.openai.apiKey, 'very-secret-demo-value');
    assert.deepEqual(vault.parseEnvelope(`SARANG.MD ENCRYPTED PROFILE\n${raw}`), envelope);
    const wrong = await vault.deriveVaultKey('wrong-password-123', salt, vault.KDF_ITERATIONS);
    await assert.rejects(vault.decryptProfile(envelope, wrong), /Wrong password or damaged/);
    const changed = structuredClone(envelope);
    changed.cipher.ciphertext = `${changed.cipher.ciphertext[0] === 'A' ? 'B' : 'A'}${changed.cipher.ciphertext.slice(1)}`;
    await assert.rejects(vault.decryptProfile(changed, key), /Wrong password or damaged/);
    assert.throws(() => vault.parseEnvelope('{"hello":"world"}'), /not a supported encrypted profile/);
    assert.throws(() => vault.validateProfile({ ...profile, notes: { bad: { ...profile.notes['included:unit/example.md'], id: 'bad', route: '//other.example' } } }), /Invalid note progress/);
  });

  test('the app store encrypts progress, keys, chat, and documents and restores them only after unlock', async () => {
    assert.equal(useProfileStore.getState().status, 'absent');
    await useProfileStore.getState().createVault('local-secret-123', 'Study room');
    assert.equal(useProfileStore.getState().status, 'unlocked');
    const store = useProfileStore.getState();
    store.recordNote('included:unit/example.md', 'Reading example', '/units/example');
    store.toggleStudied('included:unit/example.md', 'Reading example', '/units/example');
    store.recordQuestion({ id: 'paper:IB-1-01', title: 'Paper 1 example', route: '/ib-papers?paper=P1&q=IB-1-01', kind: 'paper', paper: 'P1', event: 'check', answers: ['3/4'], matched: 1, total: 1 });
    store.recordQuestion({ id: 'paper:IB-1-01', title: 'Paper 1 example', route: '/ib-papers?paper=P1&q=IB-1-01', kind: 'paper', paper: 'P1', event: 'complete' });
    store.recordFocus('Rain', new Date().toISOString(), 52);
    store.saveConnection('openai', { apiKey: 'unique-secret-from-test', model: 'test-model', endpoint: 'https://api.example.com/v1' });
    store.saveChat('general:Mathematics AA HL', 'General Mathematics AA HL', 'Mathematics AA HL', 1, 'hint', [{ role: 'user', content: 'Why does this work?' }, { role: 'assistant', content: 'What pattern do you see?' }]);
    store.addDocument({ id: crypto.randomUUID(), name: 'personal-formulas.md', kind: 'formula', pages: [{ number: 1, text: 'super-private-math-formula' }], note: '', addedAt: new Date().toISOString() });
    const originalBackup = await useProfileStore.getState().exportEncrypted();
    const savedRecord = storage.get(vault.PROFILE_STORAGE_KEY);
    for (const fragment of ['unique-secret-from-test', 'Reading example', 'super-private-math-formula', 'Why does this work?']) assert.ok(!savedRecord.includes(fragment));
    assert.equal(useProfileStore.getState().profile.questions['paper:IB-1-01'].completedAt !== undefined, true);
    assert.equal(useProfileStore.getState().profile.focusSessions.length, 1);
    const summary = useProfileStore.getState().exportSummary();
    assert.ok(summary.includes('Paper 1 example'));
    assert.ok(!summary.includes('unique-secret-from-test'));
    assert.ok(!summary.includes('super-private-math-formula'));
    await useProfileStore.getState().lockVault();
    assert.equal(useProfileStore.getState().profile, null);
    await assert.rejects(useProfileStore.getState().unlockVault('incorrect-password'), /Wrong password/);
    assert.equal(useProfileStore.getState().status, 'locked');
    await useProfileStore.getState().unlockVault('local-secret-123');
    assert.equal(useProfileStore.getState().profile.providers.openai.apiKey, 'unique-secret-from-test');
    assert.equal(useProfileStore.getState().profile.chats.length, 1);
    await useProfileStore.getState().changePassword('local-secret-123', 'another-password-789');
    await useProfileStore.getState().lockVault();
    await assert.rejects(useProfileStore.getState().unlockVault('local-secret-123'), /Wrong password/);
    await useProfileStore.getState().importVault(originalBackup, 'local-secret-123');
    assert.equal(useProfileStore.getState().profile.displayName, 'Study room');
    await useProfileStore.getState().lockVault();
    await useProfileStore.getState().unlockVault('local-secret-123');
    assert.equal(useProfileStore.getState().profile.providers.openai.apiKey, 'unique-secret-from-test');
    useProfileStore.getState().deleteVault();
    assert.equal(storage.size, 0);
    assert.equal(useProfileStore.getState().status, 'absent');
  });

  test('an earlier encrypted profile migrates without discarding keys or progress', async () => {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const toHex = (bytes) => [...bytes].map((part) => part.toString(16).padStart(2, '0')).join('');
    const secret = await crypto.subtle.importKey('raw', new TextEncoder().encode('old-local-password'), 'PBKDF2', false, ['deriveKey']);
    const oldKey = await crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 100_000 }, secret,
      { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
    const legacy = { version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
      apiKeys: { openai: 'older-private-key' }, progress: { topicsCompleted: ['02'],
        questionsAttempted: { 'SS-01': { attempted: true, correct: false, timestamp: new Date().toISOString() } },
        papersAttempted: {}, focusSessions: [{ preset: 'Flow', duration: 60, timestamp: new Date().toISOString() }] } };
    const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, oldKey, new TextEncoder().encode(JSON.stringify(legacy)));
    storage.set('sarang-encrypted-profile', JSON.stringify({ ciphertext: toHex(new Uint8Array(ciphertext)), iv: toHex(iv), salt: toHex(salt) }));
    await assert.rejects(useProfileStore.getState().migrateLegacyVault('wrong', 'new-secure-password', 'Migrated'), /Wrong password/);
    assert.equal(storage.has('sarang-encrypted-profile'), true);
    assert.equal(storage.has(vault.PROFILE_STORAGE_KEY), false);
    await useProfileStore.getState().migrateLegacyVault('old-local-password', 'new-secure-password', 'Migrated');
    const profile = useProfileStore.getState().profile;
    assert.equal(profile.providers.openai.apiKey, 'older-private-key');
    assert.equal(profile.notes['legacy-note:02'].studiedAt !== undefined, true);
    assert.equal(profile.questions['legacy-original:SS-01'].attempts, 1);
    assert.equal(profile.focusSessions[0].seconds, 60);
    assert.equal(storage.has('sarang-encrypted-profile'), false);
    await useProfileStore.getState().lockVault();
    await useProfileStore.getState().unlockVault('new-secure-password');
    assert.equal(useProfileStore.getState().profile.displayName, 'Migrated');
    useProfileStore.getState().deleteVault();
  });
} finally {
  await rm(temp, { recursive: true, force: true });
}
