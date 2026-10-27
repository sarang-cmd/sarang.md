// Changing the password of the encrypted cloud copy: re-keying works on this device, a wrong old password changes nothing,
// and the old password stops working.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { build } from 'esbuild';

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-vault-'));
globalThis.window = { localStorage: {} };
await build({ entryPoints: ['src/lib/cloudVault.ts'], bundle: true, format: 'esm', platform: 'node', outfile: path.join(tmp, 'cv.mjs'), logLevel: 'silent' });
await build({ entryPoints: ['src/lib/profileVault.ts'], bundle: true, format: 'esm', platform: 'node', outfile: path.join(tmp, 'pv.mjs'), logLevel: 'silent' });
const cv = await import(path.join(tmp, 'cv.mjs'));
const pv = await import(path.join(tmp, 'pv.mjs'));
const pass = (m) => console.log(`PASS ${m}`);

const profile = pv.emptyProfile('Sarang');
const salt = pv.newSalt();
const key = await pv.deriveVaultKey('the old password 1', salt, pv.KDF_ITERATIONS);
const envelope = await pv.encryptProfile(profile, key, salt, '2026-01-01T00:00:00.000Z');

const next = await cv.rekeyEnvelope(envelope, 'the old password 1', 'a brand new password 2');
assert.notEqual(next.kdf.salt, envelope.kdf.salt, 'a fresh salt');
assert.equal(next.createdAt, envelope.createdAt, 'the creation date is kept');
const newKey = await pv.deriveVaultKey('a brand new password 2', next.kdf.salt, next.kdf.iterations);
assert.equal((await pv.decryptProfile(next, newKey)).displayName, 'Sarang');
pass('the cloud copy opens with the new password and keeps its contents');

const oldKey = await pv.deriveVaultKey('the old password 1', next.kdf.salt, next.kdf.iterations);
await assert.rejects(() => pv.decryptProfile(next, oldKey), /Wrong password/);
pass('the old password no longer opens the new copy');

await assert.rejects(() => cv.rekeyEnvelope(envelope, 'not the password at all', 'another new password 3'), /Wrong password/);
pass('a wrong current password is refused');
await assert.rejects(() => cv.rekeyEnvelope(envelope, 'the old password 1', 'short'), /12 to 256/);
await assert.rejects(() => cv.rekeyEnvelope(envelope, 'the old password 1', 'the old password 1'), /same as the current/);
pass('a short or unchanged new password is refused');
assert.doesNotThrow(() => pv.parseEnvelope(JSON.stringify(next)), 'the result is a valid envelope the save step accepts');
assert.equal(Object.keys(next).sort().join(), 'cipher,createdAt,format,kdf,savedAt,version', 'only the fields the database allows');
pass('the result has exactly the shape the database accepts');
fs.rmSync(tmp, { recursive: true, force: true });
console.log('Verified the cloud copy password change.');
