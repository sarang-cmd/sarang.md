'use strict';
/**
 * Drives the real Sarang.md desktop app (Electron under a display): the course loads from the app files, the bridge is
 * safe, the tray commands navigate, window settings persist, and an update against a local stand-in for GitHub works.
 * Run: xvfb-run -a -s "-screen 0 1500x1000x24" node scripts/test-shell.cjs   (SMD_SHOTS=dir saves screenshots)
 */
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');
if (process.platform === 'linux' && !process.env.DISPLAY) { console.log('Skipped: no display (use xvfb-run).'); process.exit(0); }
const { _electron: electron } = require('playwright-core');
const { startMockFeed } = require('./_mock-feed.cjs');
const root = path.join(__dirname, '..');
const electronPath = require('electron');
const shots = process.env.SMD_SHOTS || ''; if (shots) fs.mkdirSync(shots, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pass = (m) => console.log(`PASS ${m}`);

(async () => {
  assert.ok(fs.existsSync(path.join(root, 'app', 'index.html')), 'run node scripts/build-app.cjs first');
  const gh = await startMockFeed();
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-shell-'));
  const log = path.join(tmp, 'spawn.log'); const installDir = path.join(tmp, 'installed'); fs.mkdirSync(installDir);
  const env = { ...process.env, XDG_CONFIG_HOME: path.join(tmp, 'config'), ELECTRON_DISABLE_SECURITY_WARNINGS: '1', SMD_UPDATE_API: gh.url, SMD_UPDATE_FAKE_INSTALL: installDir, SMD_UPDATE_TMP: path.join(tmp, 'dl'), SMD_UPDATE_SPAWN_LOG: log, SMD_UPDATE_FIRST_MS: '900000' };
  const args = [root, '--no-sandbox', '--disable-gpu'];
  const app = await electron.launch({ executablePath: electronPath, args, env });
  const page = await app.firstWindow(); const problems = [];
  page.on('pageerror', (e) => problems.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/youtube|googlevideo|ERR_|Failed to load resource|supabase/i.test(m.text())) problems.push(m.text()); });
  await page.setViewportSize({ width: 1500, height: 940 }).catch(() => {});
  await page.waitForFunction(() => window.sarangDesktop && document.querySelector('header'));
  const shot = async (name) => { if (shots) { await sleep(900); await page.screenshot({ path: path.join(shots, `${name}.png`) }); } };
  const go = async (hash) => { await page.evaluate((h) => { window.location.hash = h; }, hash); await sleep(900); };

  // 1. Loaded from the app files over the private host.
  assert.match(page.url(), /^https:\/\/app\.sarang-md\.localhost\//);
  assert.match(await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].getTitle()), /^Sarang\.md/);
  await page.waitForSelector('h1'); await sleep(800);
  await shot('home');
  pass('the course loads from inside the app on the private host');

  // 2. The bridge is narrow and the page has no Node.
  const surface = await page.evaluate(() => ({ keys: Object.keys(window.sarangDesktop).sort(), node: typeof require, proc: typeof process }));
  assert.deepEqual(surface.keys, ['getInfo', 'notify', 'onRoute', 'openExternal', 'setBehavior', 'setTheme', 'update']);
  assert.equal(surface.node, 'undefined'); assert.equal(surface.proc, 'undefined');
  const info = await page.evaluate(() => window.sarangDesktop.getInfo());
  assert.equal(info.version, require('../package.json').version); assert.equal(info.behavior.closeToTray, false);
  pass('only a small bridge is exposed, no Node in the page, and the version matches');

  // 3. The download link is a browser-only thing.
  assert.equal(await page.locator('[data-testid="download-pill"]').count(), 0);
  await go('#/focus'); await page.waitForSelector('[data-testid="study-timer"]');
  assert.equal(await page.locator('[data-testid="download-card"]').count(), 0);
  await shot('focus');
  pass('the desktop app hides the download link and card; the study timer is there');

  // 4. Study timer runs.
  const timer = page.locator('[data-testid="study-timer"]');
  await timer.getByRole('button', { name: 'Start' }).click(); await sleep(2300);
  const left = await timer.getByRole('timer').innerText(); assert.match(left, /^24:5\d$|^24:4\d$/);
  await timer.getByRole('button', { name: 'Pause' }).click(); await timer.getByRole('button', { name: 'Reset' }).click();
  assert.equal(await timer.getByRole('timer').innerText(), '25:00');
  pass('the study timer starts, pauses and resets');

  // 5. Tray commands (a second process hands a command to the first one).
  const send = (cmd) => new Promise((resolve) => { const child = spawn(electronPath, [...args, `--cmd=${cmd}`], { env, stdio: 'ignore' }); child.on('exit', resolve); });
  await send('go:/units'); await page.waitForFunction(() => location.hash === '#/units', null, { timeout: 8000 });
  await send('go:/question-bank'); await page.waitForFunction(() => location.hash === '#/question-bank', null, { timeout: 8000 });
  await send('go:/../../etc'); await sleep(700); assert.equal(await page.evaluate(() => location.hash), '#/question-bank');
  pass('tray style commands open the right page and bad routes are ignored');

  // 6. Settings card, behaviour persists.
  await go('#/settings'); await page.waitForSelector('[data-testid="desktop-settings"]');
  const card = page.locator('[data-testid="desktop-settings"]');
  await card.scrollIntoViewIfNeeded(); await sleep(500);
  await card.getByRole('switch', { name: /Always on top/ }).click(); await sleep(500);
  assert.equal(await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].isAlwaysOnTop()), true);
  await card.getByRole('switch', { name: /Always on top/ }).click(); await sleep(400);
  assert.equal(await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].isAlwaysOnTop()), false);
  await card.getByRole('switch', { name: /Keep running in the tray/ }).click(); await sleep(500);
  assert.equal((await page.evaluate(() => window.sarangDesktop.getInfo())).behavior.closeToTray, true);
  await card.getByRole('switch', { name: /Keep running in the tray/ }).click(); await sleep(300);
  pass('window settings take effect');

  // 7. Updates against a stand-in for the update feed.
  assert.equal(await card.getByLabel('Update address').inputValue(), `${gh.url}/updates/latest.json`);
  await card.getByRole('button', { name: /Check now/ }).click();
  const dialog = page.getByRole('dialog', { name: /Version 9.9.9/ }); await dialog.waitFor({ timeout: 10000 });
  await shot('update-prompt');
  await dialog.getByRole('button', { name: 'Later' }).click(); await sleep(400);
  assert.match(await card.innerText(), /Version 9.9.9 is available/);
  const closed = app.waitForEvent('close');
  await card.getByRole('button', { name: /Update to 9.9.9/ }).click(); await closed;
  const lines = fs.readFileSync(log, 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  assert.equal(lines.length, 1); const [file, spawnArgs] = lines[0];
  assert.equal(path.basename(file), 'Sarang-md-9.9.9.exe'); assert.deepEqual(spawnArgs, ['--update', `--update-dir=${installDir}`]);
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'), gh.state.sha);
  pass('update check, prompt, Later, download with SHA-256 check, hand over to the installer and quit');

  await gh.close?.();
  assert.deepEqual(problems, [], `page problems: ${problems.join(' | ')}`);
  pass('no page errors');
  console.log('Verified the Sarang.md desktop shell.');
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
