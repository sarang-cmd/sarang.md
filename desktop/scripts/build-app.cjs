'use strict';
// Builds the website (../dist, base "./") and copies it to desktop/app/, the folder the desktop app serves.
// Usage: node scripts/build-app.cjs [--skip-build]
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const desktop = path.join(__dirname, '..');
const site = path.join(desktop, '..');
if (!process.argv.includes('--skip-build')) {
  const r = spawnSync('npm', ['run', 'build'], { cwd: site, stdio: 'inherit', shell: process.platform === 'win32' });
  if (r.status !== 0) { console.error('The website build failed.'); process.exit(r.status ?? 1); }
}
const dist = path.join(site, 'dist');
if (!fs.existsSync(path.join(dist, 'index.html'))) { console.error('No dist/index.html. Run npm run build in the project root first.'); process.exit(1); }
const out = path.join(desktop, 'app');
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(dist, out, { recursive: true });
console.log('Copied dist to', path.relative(process.cwd(), out));
