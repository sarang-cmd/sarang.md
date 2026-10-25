'use strict';
const fs = require('node:fs');
const path = require('node:path');

const defaults = {
  closeToTray: false,   // the course is a reader, so closing the window quits unless this is on
  startHidden: false,
  rememberPosition: true,
  alwaysOnTop: false,
  dark: false,
  zoom: 0,              // Chromium zoom level, 0 is 100%
  bounds: null,         // { x, y, width, height, maximized }
  updateRepo: '',       // update feed address (https, vercel.app); empty uses the one built into the app
  updateAuto: true,
  updateSkip: '',
  trayHintShown: false,
};

const bool = (v, d) => (typeof v === 'boolean' ? v : d);
const int = (v, lo, hi, d) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.round(v))) : d);

function sanitize(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const b = r.bounds && typeof r.bounds === 'object' ? r.bounds : null;
  return {
    closeToTray: bool(r.closeToTray, defaults.closeToTray),
    startHidden: bool(r.startHidden, defaults.startHidden),
    rememberPosition: bool(r.rememberPosition, defaults.rememberPosition),
    alwaysOnTop: bool(r.alwaysOnTop, defaults.alwaysOnTop),
    dark: bool(r.dark, defaults.dark),
    zoom: int(r.zoom, -3, 5, 0),
    bounds: b && [b.x, b.y, b.width, b.height].every(Number.isFinite) ? { x: Math.round(b.x), y: Math.round(b.y), width: int(b.width, 400, 10000, 1280), height: int(b.height, 400, 10000, 820), maximized: b.maximized === true } : null,
    updateRepo: typeof r.updateRepo === 'string' && r.updateRepo.length <= 140 ? r.updateRepo : '',
    updateAuto: bool(r.updateAuto, defaults.updateAuto),
    updateSkip: typeof r.updateSkip === 'string' && r.updateSkip.length <= 20 ? r.updateSkip : '',
    trayHintShown: bool(r.trayHintShown, defaults.trayHintShown),
  };
}

function createStore(dir) {
  const file = path.join(dir, 'settings.json');
  let data;
  try { data = sanitize(JSON.parse(fs.readFileSync(file, 'utf8'))); } catch { data = sanitize({}); }
  let timer = null;
  const flush = () => { try { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(file, JSON.stringify(data, null, 2)); } catch { /* Settings are best effort. */ } };
  return {
    get: () => data,
    patch(patch) { data = sanitize({ ...data, ...patch }); clearTimeout(timer); timer = setTimeout(flush, 250); return data; },
    set(patch) { return this.patch(patch); },
    flush() { clearTimeout(timer); flush(); },
  };
}

module.exports = { defaults, sanitize, createStore };
