'use strict';
// Takes the README screenshots from the real desktop app (needs a display and desktop/app built).
// Run: xvfb-run -a -s "-screen 0 1700x1100x24" node scripts/make-screenshots.cjs <outDir>
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { _electron: electron } = require('playwright-core');
const root = path.join(__dirname, '..');
const out = path.resolve(process.argv[2] || path.join(root, '..', 'docs', 'screenshots'));
fs.mkdirSync(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'smd-shots-'));
  const app = await electron.launch({ executablePath: require('electron'), args: [root, '--no-sandbox', '--disable-gpu'], env: { ...process.env, XDG_CONFIG_HOME: tmp, SMD_UPDATE_FIRST_MS: '900000' } });
  const page = await app.firstWindow();
  await app.evaluate(({ BrowserWindow }) => { const w = BrowserWindow.getAllWindows()[0]; w.setSize(1500, 940); w.center(); });
  await page.waitForFunction(() => window.sarangDesktop && document.querySelector('header'));
  const go = async (hash, wait = 1500) => { await page.evaluate((h) => { window.location.hash = h; }, hash); await sleep(wait); };
  const shot = async (name) => { await sleep(500); await page.screenshot({ path: path.join(out, `${name}.png`) }); console.log('shot', name); };
  await go('#/', 2500); await shot('home');
  await go('#/units', 2500); await shot('units');
  const lesson = await page.evaluate(() => [...document.querySelectorAll('a[href*="#/units/"]')].map((a) => a.getAttribute('href')).find((h) => /#\/units\/[^/]+\/[^/]+$/.test(h)));
  if (lesson) { await go(lesson.replace(/^.*#/, '#'), 3500); await shot('lesson'); }
  await go('#/question-bank', 3000); await shot('question-bank');
  await go('#/formula-booklet', 3000); await shot('formula-booklet');
  await go('#/focus', 3000); await shot('focus');
  await go('#/settings', 2500);
  await page.evaluate(() => document.querySelector('[data-testid="desktop-settings"]')?.scrollIntoView({ block: 'center' })); await shot('settings-desktop');
  await page.click('button[aria-label="Dark mode"]'); await go('#/question-bank', 2500); await shot('question-bank-dark');
  await app.close();
})().catch((e) => { console.error(e); process.exit(1); });
