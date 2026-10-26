'use strict';
/**
 * Drives the real desktop app against a fake Discord (a local socket): the Discord card in Settings turns the status on,
 * the app sends the Sarang.md name and logo, privacy switches change what is sent, and switching off clears it.
 * Run: xvfb-run -a -s "-screen 0 1500x1000x24" node scripts/test-discord-ui.cjs
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const net = require('node:net');
const os = require('node:os');
const path = require('node:path');
if (process.platform === 'linux' && !process.env.DISPLAY) { console.log('Skipped: no display (use xvfb-run).'); process.exit(0); }
const { _electron: electron } = require('playwright-core');
const { encodeFrame, decodeFrames, OP } = require('../electron/discord.cjs');
const root = path.join(__dirname, '..');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pass = (m) => console.log(`PASS ${m}`);

(async () => {
  assert.ok(fs.existsSync(path.join(root, 'app', 'index.html')), 'run node scripts/build-app.cjs first');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-dui-'));
  const run = path.join(tmp, 'run'); fs.mkdirSync(run, { recursive: true, mode: 0o700 });
  const frames = [];
  const server = net.createServer((s) => {
    let buf = Buffer.alloc(0);
    s.on('data', (c) => { buf = Buffer.concat([buf, c]); const r = decodeFrames(buf); buf = r.rest; for (const f of r.frames) { frames.push(f); if (f.op === OP.HANDSHAKE) s.write(encodeFrame(OP.FRAME, { cmd: 'DISPATCH', evt: 'READY', data: { user: { username: 'tester' } } })); } });
  });
  await new Promise((r) => server.listen(path.join(run, 'discord-ipc-0'), r));
  const env = { ...process.env, XDG_RUNTIME_DIR: run, XDG_CONFIG_HOME: path.join(tmp, 'config'), ELECTRON_DISABLE_SECURITY_WARNINGS: '1', SMD_UPDATE_FIRST_MS: '99999999' };
  const app = await electron.launch({ executablePath: require('electron'), args: [root, '--no-sandbox', '--disable-gpu'], env });
  const page = await app.firstWindow();
  await page.setViewportSize({ width: 1500, height: 1000 }).catch(() => {});
  await page.waitForFunction(() => window.sarangDesktop && document.querySelector('header'));
  const go = async (hash) => { await page.evaluate((h) => { window.location.hash = h; }, hash); await sleep(900); };
  const activities = () => frames.filter((f) => f.data?.cmd === 'SET_ACTIVITY').map((f) => f.data.args.activity);
  const flip = async (label) => { await page.getByRole('switch', { name: new RegExp(label) }).click(); await sleep(400); };

  await go('#/settings');
  await page.locator('[data-testid=discord-card]').scrollIntoViewIfNeeded();
  assert.equal(await page.locator('[data-testid=discord-web-note]').count(), 0, 'the desktop app shows the switches, not the browser note');
  assert.equal(frames.length, 0, 'nothing is sent while it is off');
  pass('off by default: no connection, no status');

  await flip('Show my study status on Discord');
  assert.match(await page.locator('[data-testid=discord-status]').innerText(), /Needs an Application ID/);
  assert.equal(frames.length, 0, 'without an application id nothing is sent');
  await page.locator('[data-testid=discord-card] input[inputmode=numeric]').fill('123456789012345678');
  await sleep(1500);
  assert.equal(frames[0]?.data?.client_id, '123456789012345678', 'the handshake uses the application id');
  await page.waitForFunction(() => /Connected as tester/.test(document.querySelector('[data-testid=discord-status]').textContent), null, { timeout: 8000 });
  pass('the Discord card connects with your application id');

  await go('#/units'); await sleep(800);
  await go('#/formula-booklet'); await sleep(1200);
  let last = activities().at(-1);
  assert.equal(last?.details, 'Using the formula booklet'); assert.equal(last.assets.large_image, 'https://sarang-md.vercel.app/app-icon-512.png'); assert.equal(last.assets.large_text, 'Sarang.md');
  pass('the status names the page and carries the Sarang.md logo');

  await go('#/settings'); await sleep(900);
  const idle = activities().at(-1);
  assert.equal(idle, undefined, 'settings is not studying, so the status is cleared');
  pass('pages that are not studying clear the status');

  await go('#/settings'); await flip('What I am doing'); await go('#/formula-booklet'); await sleep(1200);
  assert.equal(activities().at(-1)?.details, 'Studying IB Maths', 'the privacy switch hides the kind of page');
  pass('privacy switches change what is sent');

  await go('#/settings'); await flip('Show my study status on Discord'); await sleep(800);
  assert.equal(frames.at(-1)?.data?.args?.activity, undefined, 'switching off clears the status');
  pass('switching off clears it');
  await page.screenshot({ path: path.join(process.env.SMD_SHOTS || tmp, 'discord-card.png') }).catch(() => {});
  await app.close(); server.close(); fs.rmSync(tmp, { recursive: true, force: true });
  console.log('Verified the Discord status in the desktop app.');
})().catch((e) => { console.error(e); process.exit(1); });
