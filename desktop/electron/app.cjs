'use strict';
/**
 * The Sarang.md desktop app: the course, question bank and focus corner in their own window.
 * The page is the same one the website serves, loaded from the files inside the app.
 */
const { app, BrowserWindow, Menu, Notification, ipcMain, nativeImage, nativeTheme, net, session, shell, screen } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const common = require('./common.cjs');
const { createStore } = require('./settings.cjs');
const { createUpdater } = require('./updater.cjs');
const { createTray } = require('./tray.cjs');

const { APP_NAME, HOST, ORIGIN, isWin, isMac } = common;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.wasm': 'application/wasm', '.pdf': 'application/pdf', '.mp3': 'audio/mpeg', '.wav': 'audio/wav',
};
const CSP = [
  "default-src 'self'", "script-src 'self' 'wasm-unsafe-eval'", "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob: https:", "media-src 'self' blob: https:",
  "font-src 'self' data:", "connect-src 'self' https: http://127.0.0.1:* http://localhost:*", "worker-src 'self' blob:",
  'frame-src https://www.youtube-nocookie.com https://www.youtube.com', "object-src 'none'", "base-uri 'self'", "form-action 'none'",
].join('; ');
/** The page has a tiny inline script that sets the theme before first paint. Allow exactly the scripts that are in the file (by hash), nothing else. */
function cspFor(html) {
  const hashes = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => `'sha256-${require('node:crypto').createHash('sha256').update(m[1]).digest('base64')}'`);
  return hashes.length ? CSP.replace("script-src 'self'", `script-src 'self' ${hashes.join(' ')}`) : CSP;
}
const FULL_DEFAULT = { width: 1360, height: 860 };

let win = null; let store = null; let tray = null; let updater = null; let quitting = false;
let forceHidden = false;
const pkg = (() => { try { return require('../package.json'); } catch { return {}; } })();
const installed = () => app.isPackaged && fs.existsSync(path.join(path.dirname(process.execPath), 'install.json'));
const canAutostart = () => isWin && installed();
const getLogin = () => { try { return canAutostart() ? app.getLoginItemSettings({ path: process.execPath, args: ['--login'] }).openAtLogin : false; } catch { return false; } };
const send = (channel, payload) => { if (win && !win.isDestroyed() && !win.webContents.isDestroyed()) win.webContents.send(channel, payload); };
const trayState = () => ({ windowVisible: Boolean(win?.isVisible()), alwaysOnTop: store.get().alwaysOnTop, canAutostart: canAutostart(), openAtLogin: getLogin(), updatesOn: Boolean(updater && updater.get().configured && !process.windowsStore), updateVersion: updater?.get().status === 'available' ? updater.get().latest : '' });
const refreshTray = () => { try { tray?.update(); } catch { /* The tray is optional. */ } };

// ----------------------------------------------------------------------------- content
function serveApp(ses) {
  const root = path.join(common.rootDir, 'app');
  ses.protocol.handle('https', async (request) => {
    let url;
    try { url = new URL(request.url); } catch { return new Response('Bad request', { status: 400 }); }
    if (url.hostname !== HOST) return net.fetch(request, { bypassCustomProtocolHandlers: true });
    let rel = decodeURIComponent(url.pathname);
    if (rel === '/' || rel === '') rel = '/index.html';
    const file = path.normalize(path.join(root, rel));
    if (file !== root && !file.startsWith(root + path.sep)) return new Response('Forbidden', { status: 403 });
    try {
      const data = await fs.promises.readFile(file);
      const headers = { 'content-type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream', 'cache-control': 'no-cache' };
      if (file.endsWith('.html')) headers['content-security-policy'] = cspFor(data.toString('utf8'));
      return new Response(data, { headers });
    } catch { return new Response('Not found', { status: 404 }); }
  });
}

// ----------------------------------------------------------------------------- window
function placement() {
  const s = store.get(); const b = s.bounds;
  const displays = screen.getAllDisplays();
  const primary = screen.getPrimaryDisplay().workArea;
  if (s.rememberPosition && b) {
    const visible = displays.some((d) => b.x < d.workArea.x + d.workArea.width - 80 && b.x + b.width > d.workArea.x + 80 && b.y >= d.workArea.y - 10 && b.y < d.workArea.y + d.workArea.height - 60);
    if (visible) return { x: b.x, y: b.y, width: b.width, height: b.height, maximized: b.maximized };
  }
  const width = Math.min(FULL_DEFAULT.width, primary.width); const height = Math.min(FULL_DEFAULT.height, primary.height);
  return { x: primary.x + Math.round((primary.width - width) / 2), y: primary.y + Math.round((primary.height - height) / 2), width, height, maximized: false };
}

function saveBounds() {
  if (!win || win.isDestroyed() || win.isMinimized() || win.isFullScreen()) return;
  const maximized = win.isMaximized(); const b = maximized ? (store.get().bounds ?? win.getNormalBounds()) : win.getBounds();
  store.patch({ bounds: { x: b.x, y: b.y, width: b.width, height: b.height, maximized } });
}

function createWindow({ show }) {
  const s = store.get(); const where = placement();
  nativeTheme.themeSource = s.dark ? 'dark' : 'light';
  win = new BrowserWindow({
    x: where.x, y: where.y, width: where.width, height: where.height, minWidth: 420, minHeight: 560, show: false, title: APP_NAME, autoHideMenuBar: true,
    backgroundColor: s.dark ? '#0b0b0b' : '#ffffff', icon: nativeImage.createFromPath(common.asset('icon.png')), alwaysOnTop: s.alwaysOnTop,
    webPreferences: { preload: path.join(__dirname, 'preload.cjs'), contextIsolation: true, sandbox: true, nodeIntegration: false, spellcheck: false, backgroundThrottling: false },
  });
  win.setMenuBarVisibility(false);
  if (where.maximized) win.maximize();
  const wc = win.webContents;
  wc.setZoomLevel(s.zoom);
  wc.setWindowOpenHandler(({ url }) => { if (/^https:\/\//i.test(url)) void shell.openExternal(url); return { action: 'deny' }; });
  wc.on('will-navigate', (event, url) => { if (!url.startsWith(`${ORIGIN}/`) && url !== ORIGIN) { event.preventDefault(); if (/^https:\/\//i.test(url)) void shell.openExternal(url); } });
  wc.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    const ctrl = input.control || input.meta;
    if (input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); event.preventDefault(); }
    else if (input.alt && input.key === 'ArrowLeft') { if (wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack(); event.preventDefault(); }
    else if (input.alt && input.key === 'ArrowRight') { if (wc.navigationHistory.canGoForward()) wc.navigationHistory.goForward(); event.preventDefault(); }
    else if (ctrl && (input.key === '=' || input.key === '+')) { zoom(+1); event.preventDefault(); }
    else if (ctrl && input.key === '-') { zoom(-1); event.preventDefault(); }
    else if (ctrl && input.key === '0') { zoom(0, true); event.preventDefault(); }
  });
  win.once('ready-to-show', () => { if (show && !forceHidden) win.show(); });
  win.on('close', (event) => {
    saveBounds();
    if (!quitting && store.get().closeToTray && tray) {
      event.preventDefault(); win.hide(); refreshTray();
      if (!store.get().trayHintShown) { store.patch({ trayHintShown: true }); toast(`${APP_NAME} is still running in the tray`, 'Right-click the tray icon to open it or quit.'); }
    }
  });
  win.on('closed', () => { win = null; });
  for (const name of ['resize', 'move']) win.on(name, () => { clearTimeout(saveBounds.t); saveBounds.t = setTimeout(saveBounds, 600); });
  for (const name of ['show', 'hide']) win.on(name, refreshTray);
  void win.loadURL(`${ORIGIN}/`);
}

function zoom(step, reset = false) {
  if (!win || win.isDestroyed()) return;
  const next = reset ? 0 : Math.min(5, Math.max(-3, win.webContents.getZoomLevel() + step * 0.5));
  win.webContents.setZoomLevel(next); store.patch({ zoom: next });
}

function toast(title, body, { onlyIfHidden = false } = {}) {
  try {
    if (!Notification.isSupported()) return false;
    if (onlyIfHidden && win && win.isVisible() && win.isFocused()) return false;
    const note = new Notification({ title: String(title).slice(0, 120), body: String(body ?? '').slice(0, 300), icon: nativeImage.createFromPath(common.asset('icon.png')), silent: false });
    note.on('click', () => showWindow());
    note.show(); return true;
  } catch { return false; }
}

function showWindow() { if (!win || win.isDestroyed()) { createWindow({ show: true }); return; } if (win.isMinimized()) win.restore(); win.show(); win.focus(); }

// ----------------------------------------------------------------------------- commands
function run(command) {
  const [id, ...rest] = String(command).split(':'); const arg = rest.join(':');
  switch (id) {
    case 'window.toggle': if (win && win.isVisible() && win.isFocused()) win.hide(); else showWindow(); break;
    case 'window.pin': { const next = !store.get().alwaysOnTop; store.patch({ alwaysOnTop: next }); win?.setAlwaysOnTop(next); break; }
    case 'go': if (/^\/[A-Za-z0-9\-/]{0,80}$/.test(arg)) { showWindow(); send('smd:route', arg); } break;
    case 'app.login': if (canAutostart()) { try { app.setLoginItemSettings({ openAtLogin: !getLogin(), path: process.execPath, args: ['--login'] }); } catch { /* ignore */ } } break;
    case 'app.update': showWindow(); void (updater?.get().status === 'available' ? updater.install() : updater?.check({ manual: true })); break;
    case 'app.quit': quitting = true; app.quit(); break;
    default: break;
  }
  refreshTray();
}

function setupIpc() {
  const trusted = (event) => { try { return new URL(event.senderFrame?.url ?? '').origin === ORIGIN; } catch { return false; } };
  ipcMain.handle('smd:get-info', (event) => {
    if (!trusted(event)) return null;
    const s = store.get();
    return { version: app.getVersion(), platform: process.platform, installed: installed(), canAutostart: canAutostart(), packaged: app.isPackaged,
      behavior: { closeToTray: s.closeToTray, startHidden: s.startHidden, alwaysOnTop: s.alwaysOnTop, rememberPosition: s.rememberPosition, openAtLogin: getLogin() } };
  });
  ipcMain.handle('smd:set-behavior', (event, patch) => {
    if (!trusted(event) || !patch || typeof patch !== 'object') return null;
    const next = {};
    for (const key of ['closeToTray', 'startHidden', 'rememberPosition', 'alwaysOnTop']) if (typeof patch[key] === 'boolean') next[key] = patch[key];
    store.patch(next);
    if ('alwaysOnTop' in next) win?.setAlwaysOnTop(next.alwaysOnTop);
    if (typeof patch.openAtLogin === 'boolean' && canAutostart()) { try { app.setLoginItemSettings({ openAtLogin: patch.openAtLogin, path: process.execPath, args: ['--login'] }); } catch { /* ignore */ } }
    refreshTray();
    return { ...store.get(), openAtLogin: getLogin() };
  });
  ipcMain.on('smd:theme', (event, dark) => { if (!trusted(event)) return; nativeTheme.themeSource = dark ? 'dark' : 'light'; store.patch({ dark: dark === true }); win?.setBackgroundColor(dark ? '#0b0b0b' : '#ffffff'); });
  ipcMain.on('smd:notify', (event, title, body) => { if (trusted(event) && typeof title === 'string' && typeof body === 'string') toast(title, body, { onlyIfHidden: false }); });
  ipcMain.on('smd:open-external', (event, url) => { if (trusted(event) && /^https:\/\/[^\s]+$/i.test(String(url))) void shell.openExternal(String(url)); });
  ipcMain.handle('smd:update-get', (event) => (trusted(event) ? updater.get() : null));
  ipcMain.handle('smd:update-check', (event) => (trusted(event) ? updater.check({ manual: true }) : null));
  ipcMain.handle('smd:update-install', (event) => (trusted(event) ? updater.install() : null));
  ipcMain.handle('smd:update-skip', (event) => (trusted(event) ? updater.skip() : null));
  ipcMain.handle('smd:update-dismiss', (event) => (trusted(event) ? updater.dismiss() : null));
  ipcMain.handle('smd:update-config', (event, config) => (trusted(event) ? updater.setConfig(config) : null));
}

function setupUpdater() {
  const test = !app.isPackaged && process.env.SMD_UPDATE_API ? { feed: `${process.env.SMD_UPDATE_API}/updates/latest.json`, allow: () => true } : {};
  updater = createUpdater({
    version: app.getVersion(), store, net: test, defaultRepo: test.feed || pkg.smdUpdate?.feed || '', disabled: Boolean(process.windowsStore),
    send: (state) => { send('smd:update', state); refreshTray(); }, notify: (text) => toast(text, 'Open Sarang.md and choose Update now.'),
    openExternal: (url) => { if (/^https:\/\/[a-z0-9.-]+\.vercel\.app\//i.test(url) || (test.feed && url.startsWith(process.env.SMD_UPDATE_API))) void shell.openExternal(url); },
    installDir: () => (!app.isPackaged && process.env.SMD_UPDATE_FAKE_INSTALL) || (installed() ? path.dirname(process.execPath) : null),
    canSelfUpdate: () => installed() && isWin && !process.windowsStore || Boolean(test.feed && process.env.SMD_UPDATE_FAKE_INSTALL),
    quit: () => { quitting = true; app.quit(); },
    spawn: process.env.SMD_UPDATE_SPAWN_LOG && !app.isPackaged
      ? (command, args) => { fs.appendFileSync(process.env.SMD_UPDATE_SPAWN_LOG, `${JSON.stringify([command, args])}\n`); return { unref() {}, on() {} }; }
      : (...args) => require('node:child_process').spawn(...args),
    tmpdir: process.env.SMD_UPDATE_TMP && !app.isPackaged ? process.env.SMD_UPDATE_TMP : require('node:os').tmpdir(),
    firstCheckMs: Number(process.env.SMD_UPDATE_FIRST_MS) > 0 && !app.isPackaged ? Number(process.env.SMD_UPDATE_FIRST_MS) : 25000,
  });
  updater.schedule();
}

// ----------------------------------------------------------------------------- start
function begin() {
  if (!app.requestSingleInstanceLock()) { app.quit(); return false; }
  app.on('second-instance', (_event, argv) => {
    const cmd = argv.find((a) => a.startsWith('--cmd='));
    if (cmd) { run(cmd.slice(6)); return; }
    showWindow();
  });
  return true;
}

function ready() {
  store = createStore(common.userDataDir());
  const ses = session.defaultSession;
  serveApp(ses);
  const fromApp = (u) => { try { return new URL(u).origin === ORIGIN; } catch { return false; } };
  ses.setPermissionRequestHandler((wc, permission, callback, details) => callback((permission === 'fullscreen' || permission === 'clipboard-sanitized-write' || permission === 'notifications') && fromApp(details?.requestingUrl ?? '')));
  ses.setPermissionCheckHandler((wc, permission, origin) => (permission === 'fullscreen' || permission === 'clipboard-sanitized-write') && origin === ORIGIN);
  // YouTube embeds want to know who is asking; the protocol handler sends no referrer.
  ses.webRequest.onBeforeSendHeaders({ urls: ['https://www.youtube.com/*', 'https://www.youtube-nocookie.com/*'] }, (details, callback) => { details.requestHeaders.Referer = `${ORIGIN}/`; callback({ requestHeaders: details.requestHeaders }); });
  setupIpc(); setupUpdater();
  Menu.setApplicationMenu(null);
  try { tray = createTray({ run, getState: trayState }); tray.update(); } catch { tray = null; }
  const hiddenStart = process.argv.includes('--hidden') || (process.argv.includes('--login') && store.get().startHidden) || (store.get().startHidden && process.argv.includes('--login'));
  forceHidden = hiddenStart && Boolean(tray);
  createWindow({ show: true });
  app.on('activate', () => showWindow());
  app.on('before-quit', () => { quitting = true; store.flush(); });
  app.on('window-all-closed', () => { if (!isMac) app.quit(); });
  const cmd = process.argv.find((a) => a.startsWith('--cmd='));
  if (cmd) setTimeout(() => run(cmd.slice(6)), 500);
}

function start() { if (!begin()) return; app.whenReady().then(ready); }
function startAfterSetup() { if (!begin()) return; if (app.isReady()) ready(); else app.whenReady().then(ready); }

module.exports = { start, startAfterSetup };
