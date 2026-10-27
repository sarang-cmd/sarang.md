'use strict';
/**
 * The real page against a stand-in for Supabase: a signed-in account with an encrypted cloud copy changes its password
 * (the uploaded copy opens only with the new one) and deletes the copy when the password is lost.
 * Build the page first: VITE_SUPABASE_URL=http://127.0.0.1:5051 npx vite build --outDir /var/tmp/webdist-test --emptyOutDir
 * Run: xvfb-run -a -s "-screen 0 1500x1000x24" node scripts/test-cloud-password-ui.cjs
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { webcrypto: crypto } = require('node:crypto');
if (process.platform === 'linux' && !process.env.DISPLAY) { console.log('Skipped: no display (use xvfb-run).'); process.exit(0); }
const { _electron: electron } = require('playwright-core');
const DIST = process.env.SMD_TEST_DIST || '/var/tmp/webdist-test';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pass = (m) => console.log(`PASS ${m}`);
const b64 = (u8) => Buffer.from(u8).toString('base64');
const ITER = 600000;
async function key(password, salt) { const seed = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']); return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITER }, seed, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']); }
const AAD = new TextEncoder().encode('sarang-md-encrypted-profile:v1');
async function opens(envelope, password) {
  try { const k = await key(password, Buffer.from(envelope.kdf.salt, 'base64')); await crypto.subtle.decrypt({ name: 'AES-GCM', iv: Buffer.from(envelope.cipher.iv, 'base64'), additionalData: AAD }, k, Buffer.from(envelope.cipher.ciphertext, 'base64')); return true; } catch { return false; }
}

(async () => {
  assert.ok(fs.existsSync(path.join(DIST, 'index.html')), 'build the test page first');
  // We cannot make a valid profile without the app's validator, so ask the page itself to build the envelope.
  const state = { envelope: null, revision: '11111111-1111-4111-8111-111111111111', saves: 0, deletes: 0, rpcLog: [] };
  const mock = http.createServer((req, res) => {
    const cors = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*', 'content-type': 'application/json' };
    if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
    let body = ''; req.on('data', (c) => { body += c; });
    req.on('end', () => {
      const url = req.url; if (process.env.DBG) console.log('REQ', req.method, url.slice(0, 80), req.headers.accept);
      if (url.startsWith('/rest/v1/private_vaults') && req.method === 'GET') { res.writeHead(200, cors); return res.end(JSON.stringify(state.envelope ? [{ envelope: state.envelope, revision: state.revision, updated_at: '2026-10-27T10:00:00Z' }] : [])); }
      if (url.startsWith('/rest/v1/rpc/save_private_vault')) { const b = JSON.parse(body); state.rpcLog.push({ expected: b.p_expected_revision, keys: Object.keys(b.p_envelope).sort().join() }); if (state.envelope ? b.p_expected_revision !== state.revision : b.p_expected_revision !== null) { res.writeHead(409, cors); return res.end(JSON.stringify({ code: '40001', message: 'Cloud copy changed.' })); } state.envelope = b.p_envelope; state.revision = crypto.randomUUID(); state.saves++; res.writeHead(200, cors); return res.end(JSON.stringify({ saved_revision: state.revision, saved_at: '2026-10-27T11:00:00Z' })); }
      if (url.startsWith('/rest/v1/rpc/delete_private_vault')) { state.deletes++; const had = !!state.envelope; state.envelope = null; res.writeHead(200, cors); return res.end(JSON.stringify(had)); }
      res.writeHead(404, cors); res.end('{}');
    });
  });
  await new Promise((r) => mock.listen(5051, '127.0.0.1', r));
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
  const site = http.createServer((req, res) => { const p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html')); fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); }); });
  await new Promise((r) => site.listen(4175, '127.0.0.1', r));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-cpw-'));
  const main = path.join(tmp, 'main.cjs');
  fs.writeFileSync(main, "const { app, BrowserWindow } = require('electron'); app.whenReady().then(() => { const w = new BrowserWindow({ width: 1300, height: 1000, show: true }); w.loadURL('http://127.0.0.1:4175/'); });");
  const app = await electron.launch({ executablePath: require('electron'), args: [main, '--no-sandbox', '--disable-gpu'], env: { ...process.env, XDG_CONFIG_HOME: path.join(tmp, 'cfg'), ELECTRON_DISABLE_SECURITY_WARNINGS: '1' } });
  const page = await app.firstWindow();
  const problems = []; page.on('pageerror', (e) => problems.push(e.message));
  await page.waitForSelector('header');
  // A signed-in session (fake tokens; the stand-in accepts anything).
  await page.evaluate(() => {
    const now = Math.floor(Date.now() / 1000);
    localStorage.setItem('sarang-md-supabase-auth', JSON.stringify({ access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1MSJ9.x', refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: now + 3600, user: { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', email: 'reader@example.com', app_metadata: {}, user_metadata: {}, created_at: '2026-01-01T00:00:00Z' } }));
  });
  await page.evaluate(() => { window.location.hash = '#/profile'; }); await page.reload(); await page.waitForSelector('header'); await sleep(1500);
  // 1. Make a vault with the page's own code, then upload it as the cloud copy.
  const form = page.locator('form.profile-form').first();
  await form.locator('input').nth(0).fill('Sarang'); await form.locator('input[type=password]').nth(0).fill('first password for the vault'); await form.locator('input[type=password]').nth(1).fill('first password for the vault');
  await page.getByRole('button', { name: /Create encrypted profile/i }).click();
  await page.getByRole('button', { name: /Upload encrypted vault/i }).waitFor({ timeout: 10000 });
  await page.locator('label:has-text("I understand the encrypted vault") input[type=checkbox]').check();
  await page.getByRole('button', { name: /Upload encrypted vault/i }).click();
  await page.waitForFunction(() => /Encrypted cloud copy saved/.test(document.body.innerText), null, { timeout: 15000 }).catch(async (e) => { console.log('PAGE STATUS:', await page.locator('[role=status]').allInnerTexts()); throw e; });
  assert.ok(state.envelope, 'the stand-in holds the uploaded copy');
  assert.equal(await opens(state.envelope, 'first password for the vault'), true);
  pass('a vault was created and uploaded; the copy opens with the first password');

  // 2. Change the cloud copy's password (real clicks).
  const box = page.locator('[data-testid=cloud-password-reset]'); await box.scrollIntoViewIfNeeded(); await sleep(900);
  await box.locator('[data-testid=cloud-change-details] summary').click();
  const f = box.locator('[data-testid=cloud-change-details] form');
  await f.locator('input[type=password]').nth(0).fill('a wrong current password');
  await f.locator('input[type=password]').nth(1).fill('second password for the vault'); await f.locator('input[type=password]').nth(2).fill('second password for the vault');
  const before = state.saves;
  await f.getByRole('button', { name: /Change the cloud copy password/ }).click(); await sleep(2500);
  assert.equal(state.saves, before, 'a wrong current password uploads nothing');
  assert.match(await page.locator('[data-testid=cloud-password-note]').innerText(), /Wrong password/);
  pass('a wrong current password is refused and nothing is uploaded');
  await f.locator('input[type=password]').nth(0).fill('first password for the vault');
  await f.getByRole('button', { name: /Change the cloud copy password/ }).click();
  await page.waitForFunction(() => /now needs the new password/.test(document.querySelector('[data-testid=cloud-password-note]')?.textContent || ''), null, { timeout: 20000 });
  assert.equal(state.saves, before + 1);
  assert.equal(await opens(state.envelope, 'second password for the vault'), true, 'the new password opens the uploaded copy');
  assert.equal(await opens(state.envelope, 'first password for the vault'), false, 'the old password no longer does');
  assert.equal(state.rpcLog.at(-1).keys, 'cipher,createdAt,format,kdf,savedAt,version', 'only ciphertext fields are sent');
  assert.match(await page.locator('[data-testid=cloud-password-note]').innerText(), /browser's saved profile uses the new password/);
  pass('the cloud copy (and this browser) now use the new password; only ciphertext was sent');

  // 3. Forgot the password: delete needs the typed word.
  await box.locator('[data-testid=cloud-forgot-details] summary').click();
  const del = box.locator('[data-testid=cloud-delete]');
  if (process.env.SMD_SHOTS) { fs.mkdirSync(process.env.SMD_SHOTS, { recursive: true }); await sleep(800); await box.screenshot({ path: path.join(process.env.SMD_SHOTS, 'cloud-password.png') }); }
  assert.equal(await del.isDisabled(), true, 'delete is locked until DELETE is typed');
  await box.locator('[data-testid=cloud-delete-input]').fill('DELETE');
  app.evaluate(({ dialog }) => { dialog.showMessageBoxSync = () => 0; }).catch(() => {});
  page.once('dialog', (d) => d.accept());
  await del.click();
  await page.waitForFunction(() => /cloud copy was deleted/.test(document.querySelector('[data-testid=cloud-password-note]')?.textContent || ''), null, { timeout: 15000 });
  assert.equal(state.deletes, 1); assert.equal(state.envelope, null);
  pass('the cloud copy can be deleted after typing DELETE');
  assert.deepEqual(problems, [], 'no page errors');
  await app.close(); mock.close(); site.close();
  console.log('Verified the cloud copy password change in the page.');
})().catch((e) => { console.error(e); process.exit(1); });
