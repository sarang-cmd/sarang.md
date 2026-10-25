'use strict';
const { app } = require('electron');
const path = require('node:path');
const common = require('./common.cjs');
const { detect } = require('./mode.cjs');

app.setAppUserModelId(common.APP_ID);
const mode = detect({ packaged: app.isPackaged, windowsStore: Boolean(process.windowsStore) });

if (mode === 'app') {
  app.setPath('userData', common.userDataDir());
  require('./app.cjs').start();
} else {
  // Setup and uninstall use a scratch profile so they never fight with a running copy.
  app.setPath('userData', path.join(require('node:os').tmpdir(), `sarang-md-${mode}-${process.pid}`));
  require('./installer.cjs').run(mode, () => require('./app.cjs').startAfterSetup());
}
