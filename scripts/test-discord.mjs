// Discord status for Sarang.md: what is built, what leaves the app, and a real conversation over a local socket with a fake Discord.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { build } from 'esbuild';

const require = createRequire(import.meta.url);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-discord-'));
globalThis.localStorage = { getItem: () => null, setItem() {} };
await build({ entryPoints: ['src/lib/discord.ts'], bundle: true, format: 'esm', platform: 'node', outfile: path.join(tmp, 'discord.mjs'), external: ['react'], logLevel: 'error' });
fs.writeFileSync(path.join(tmp, 'react.mjs'), 'export const useSyncExternalStore = () => ({});');
const lib = await import(path.join(tmp, 'discord.mjs')).catch(async () => {
  // react is external; give node a stub
  const code = fs.readFileSync(path.join(tmp, 'discord.mjs'), 'utf8').replace(/from ["']react["']/, `from "${path.join(tmp, 'react.mjs')}"`);
  fs.writeFileSync(path.join(tmp, 'discord2.mjs'), code); return import(path.join(tmp, 'discord2.mjs'));
});
const { createDiscord, sanitizeActivity, encodeFrame, decodeFrames, OP } = require('../desktop/electron/discord.cjs');
const pass = (m) => console.log(`PASS ${m}`);

const on = { ...lib.defaultDiscord, enabled: true };
const read = { place: 'textbook', topic: 'SL 4.7 Regression', examEndsAt: 0, timerRunning: false, timerPhase: 'work', timerEndsAt: 0 };
assert.equal(lib.buildActivity(lib.defaultDiscord, read), null, 'off by default: nothing is built');
let a = lib.buildActivity(on, read);
assert.equal(a.details, 'Reading the textbook'); assert.equal(a.state, 'IB Maths AA', 'the chapter stays private by default');
assert.equal(a.assets.large_image, 'https://sarang-md.vercel.app/app-icon-512.png'); assert.equal(a.assets.large_text, 'Sarang.md');
assert.equal(lib.buildActivity({ ...on, showTopic: true }, read).state, 'SL 4.7 Regression');
assert.equal(lib.buildActivity(on, { ...read, place: 'other' }), null, 'nothing is shown when not studying');
assert.equal(lib.buildActivity({ ...on, showIdle: true }, { ...read, place: 'other' }).details, 'Browsing the course');
assert.equal(lib.buildActivity({ ...on, showActivity: false }, read).details, 'Studying IB Maths');
const now = Date.now();
a = lib.buildActivity(on, { ...read, place: 'other', timerRunning: true, timerEndsAt: now + 600000 });
assert.equal(a.state, 'IB Maths AA \u00b7 Focus block'); assert.ok(Math.abs(a.timestamps.end - Math.floor((now + 600000) / 1000)) <= 1);
assert.equal(lib.buildActivity({ ...on, showTimer: false }, { ...read, timerRunning: true, timerEndsAt: now + 1000 }).timestamps, undefined);
assert.equal(lib.buildActivity({ ...on, showBreaks: false }, { ...read, timerRunning: true, timerPhase: 'rest', timerEndsAt: now + 1000 }), null, 'breaks can stay private');
assert.equal(lib.buildActivity(on, { ...read, examEndsAt: now + 5400000 }).details, 'Sitting a mock exam');
assert.ok(!JSON.stringify(lib.buildActivity({ ...on, showTopic: false }, { ...read, examEndsAt: now + 1000, topic: 'Secret' })).includes('Secret'));
assert.equal(lib.buildActivity({ ...on, button: true }, read).buttons[0].url, 'https://sarang-md.vercel.app/');
assert.equal(lib.placeFor('/units/u4/aa-sl-4-7'), 'textbook'); assert.equal(lib.placeFor('/ib-papers'), 'practice'); assert.equal(lib.placeFor('/'), 'other');
assert.equal(lib.sanitizeDiscord({ appId: '12ab34' }).appId, '1234'); assert.equal(lib.sanitizeDiscord('x').enabled, false);
pass('status: private by default, every switch respected, logo and name set');

assert.equal(sanitizeActivity({ details: 'x', assets: { large_image: 'https://sarang-md.vercel.app/app-icon-512.png', large_text: 'Sarang.md' } }).assets.large_image, 'https://sarang-md.vercel.app/app-icon-512.png');
assert.equal(sanitizeActivity({ details: 'x', assets: { large_image: 'https://evil.example/a.png' } }).assets, undefined);
assert.equal(sanitizeActivity({ details: 'x', assets: { large_image: 'http://sarang-md.vercel.app/a.png' } }).assets, undefined);
assert.equal(sanitizeActivity({ details: 'x', assets: { large_image: 'icon' } }).assets.large_text, 'Sarang.md');
pass('the main process lets through only our own https logo or an asset name');

// A fake Discord on a local socket.
const sock = path.join(tmp, 'discord-ipc-0');
const frames = [];
const server = net.createServer((s) => {
  let buf = Buffer.alloc(0);
  s.on('data', (c) => { buf = Buffer.concat([buf, c]); const r = decodeFrames(buf); buf = r.rest; for (const f of r.frames) { frames.push(f); if (f.op === OP.HANDSHAKE) s.write(encodeFrame(OP.FRAME, { cmd: 'DISPATCH', evt: 'READY', data: { user: { username: 'tester' } } })); } });
});
await new Promise((r) => server.listen(sock, r));
const statuses = [];
const d = createDiscord({ paths: [sock], onStatus: (s) => statuses.push(s.status), retryMs: 100 });
d.update({ enabled: true, appId: '123456789012345678' }, a);
await new Promise((r) => setTimeout(r, 400));
const set = frames.find((f) => f.data?.cmd === 'SET_ACTIVITY');
assert.ok(frames[0].op === OP.HANDSHAKE && frames[0].data.client_id === '123456789012345678', 'the handshake carries the application id');
assert.ok(set, 'an activity was sent'); assert.equal(set.data.args.activity.assets.large_image, 'https://sarang-md.vercel.app/app-icon-512.png'); assert.equal(set.data.args.activity.assets.large_text, 'Sarang.md');
assert.ok(statuses.includes('connected'));
d.update({ enabled: false, appId: '' }, null);
await new Promise((r) => setTimeout(r, 300));
assert.ok(frames.some((f) => f.data?.cmd === 'SET_ACTIVITY' && f.data.args.activity === undefined), 'switching off clears the status');
d.stop(); server.close();
pass('a fake Discord receives the handshake, the status with the logo, and the clear');
fs.rmSync(tmp, { recursive: true, force: true });
console.log('Verified the Discord status.');
