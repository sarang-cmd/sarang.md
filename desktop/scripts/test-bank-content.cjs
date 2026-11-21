'use strict';
/**
 * The supplied-question archive in the app window: the two later files are present, filed by paper and topic,
 * and their prompts and independent guides render without broken mathematics.
 * Build the page first: npx vite build --outDir /var/tmp/webdist-md --emptyOutDir
 * Run: xvfb-run -a -s "-screen 0 1500x1000x24" node scripts/test-bank-content.cjs
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
if (process.platform === 'linux' && !process.env.DISPLAY) { console.log('Skipped: no display (use xvfb-run).'); process.exit(0); }
const { _electron: electron } = require('playwright-core');
const DIST = process.env.SMD_TEST_DIST || '/var/tmp/webdist-md';
const PORT = Number(process.env.SMD_TEST_PORT || 4177);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pass = (m) => console.log(`PASS ${m}`);

(async () => {
  assert.ok(fs.existsSync(path.join(DIST, 'index.html')), 'build the page first');
  const archive = JSON.parse(fs.readFileSync(path.join(DIST, 'content/ib-bank/archive.json'), 'utf8'));
  const added = archive.filter((item) => /^IB-[LC]-/.test(item.id));
  assert.ok(added.length >= 27, 'the two later files are in the archive');
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
  const site = http.createServer((req, res) => {
    const file = path.join(DIST, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
    fs.readFile(file, (error, data) => {
      if (error) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  await new Promise((r) => site.listen(PORT, '127.0.0.1', r));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-bank-'));
  const main = path.join(tmp, 'main.cjs');
  fs.writeFileSync(main, "const { app, BrowserWindow } = require('electron'); app.whenReady().then(() => { const w = new BrowserWindow({ width: 1300, height: 1000, show: true }); w.loadURL(process.env.SMD_START); });");
  const app = await electron.launch({ executablePath: require('electron'), args: [main, '--no-sandbox', '--disable-gpu'],
    env: { ...process.env, SMD_START: `http://127.0.0.1:${PORT}/#/ib-papers?paper=P1`, XDG_CONFIG_HOME: path.join(tmp, 'cfg'), ELECTRON_DISABLE_SECURITY_WARNINGS: '1' } });
  const page = await app.firstWindow();
  const problems = []; page.on('pageerror', (e) => problems.push(e.message));
  const go = async (hash) => { await page.evaluate((next) => { window.location.hash = next; }, hash); await sleep(1200); };

  await page.waitForSelector('header');
  await page.waitForFunction((total) => document.body.innerText.includes(String(total)), archive.length, { timeout: 15000 });
  pass(`the archive page shows ${archive.length} transcribed items`);

  await page.getByRole('button', { name: /^Paper 1/ }).click();
  await page.getByRole('button', { name: /^All topics/ }).click().catch(() => {});
  const rail = await page.locator('aside[aria-label="Paper topic filters"]').innerText().catch(() => '');
  for (const topic of ['Logarithms', 'Proof by Induction', 'Vectors and Planes', 'Complex Numbers']) {
    assert.ok(rail.includes(topic), `the topic filter lists ${topic}`);
  }
  pass('the new topics are in the topic filter');

  const chosen = added.find((item) => item.id === 'IB-L-18') || added[0];
  await go(`#/ib-papers?paper=P1&q=${chosen.id}`);
  await page.waitForFunction((title) => document.body.innerText.includes(title), chosen.topic, { timeout: 15000 });
  await page.locator(`#${chosen.id}`).scrollIntoViewIfNeeded();
  assert.equal(await page.locator('.katex-error').count(), 0, 'the prompt has no broken math');
  page.once('dialog', (dialog) => dialog.accept());
  await page.getByRole('button', { name: /Reveal independent guide/ }).first().click();
  await sleep(1200);
  const card = await page.locator(`#${chosen.id}`).innerText();
  assert.match(card, new RegExp(`/${chosen.marks}`), 'the guide total is shown');
  assert.match(card, new RegExp(chosen.scheme[0].code), 'the first guide step is shown');
  assert.equal(await page.locator('.katex-error').count(), 0, 'the guide has no broken math');
  if (process.env.SMD_SHOTS) { fs.mkdirSync(process.env.SMD_SHOTS, { recursive: true }); await page.locator(`#${chosen.id}`).screenshot({ path: path.join(process.env.SMD_SHOTS, 'guide-l18.png') }); }
  pass(`${chosen.id} opens, reveals its independent guide and renders cleanly`);

  await go('#/ib-papers?paper=P1&q=IB-C-02');
  await page.waitForFunction(() => document.body.innerText.includes('Logarithm Equations'), null, { timeout: 15000 });
  const worksheet = await page.locator('#IB-C-02').innerText();
  assert.match(worksheet, /No paper code supplied/, 'the missing code is stated');
  assert.match(worksheet, /assigns 18 marks/, 'the assigned mark total is stated');
  page.once('dialog', (dialog) => dialog.accept());
  await page.getByRole('button', { name: /Reveal independent guide/ }).first().click();
  await sleep(1000);
  assert.match(await page.locator('#IB-C-02').innerText(), /128/, 'the worked answers are in the guide');
  assert.equal(await page.locator('.katex-error').count(), 0, 'the worksheet guide renders cleanly');
  pass('the worksheet is filed under Paper 1 with its assigned-mark note');

  await go('#/ib-papers?paper=P1');
  await page.getByRole('searchbox', { name: 'Search paper questions' }).fill('divisible by 17');
  await sleep(1200);
  const results = await page.locator('#supplied-question-results').innerText();
  assert.match(results, /IB-L-08|divisible by 17/, 'search finds the induction question');
  pass('search finds the new questions');

  if (process.env.SMD_SHOTS) { fs.mkdirSync(process.env.SMD_SHOTS, { recursive: true }); await page.screenshot({ path: path.join(process.env.SMD_SHOTS, 'supplied-archive.png'), fullPage: false }); }
  assert.deepEqual(problems, [], 'no page errors');
  await app.close(); site.close();
  console.log('Verified the added questions in the app window.');
})().catch((error) => { console.error(error); process.exit(1); });
