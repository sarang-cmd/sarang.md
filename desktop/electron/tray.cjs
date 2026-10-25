'use strict';
const { Tray, Menu, nativeImage } = require('electron');
const { APP_NAME, isMac, asset } = require('./common.cjs');

function createTray({ run, getState }) {
  const image = isMac
    ? nativeImage.createFromPath(asset('trayTemplate.png'))
    : nativeImage.createFromPath(asset('tray.png')).resize({ width: 32, height: 32 });
  if (isMac) image.setTemplateImage(true);
  const tray = new Tray(image);
  tray.setToolTip(APP_NAME);
  tray.on('click', () => run('window.toggle'));

  function build() {
    const s = getState();
    const item = (label, command, extra = {}) => ({ label, click: () => run(command), ...extra });
    const template = [
      item(s.windowVisible ? `Hide ${APP_NAME}` : `Show ${APP_NAME}`, 'window.toggle'),
      { type: 'separator' },
      item('Home', 'go:/'), item('All units', 'go:/units'), item('Question bank', 'go:/question-bank'), item('Formula booklet', 'go:/formula-booklet'), item('Focus studio', 'go:/focus'),
      { type: 'separator' },
      item('Always on top', 'window.pin', { type: 'checkbox', checked: s.alwaysOnTop }),
    ];
    if (s.canAutostart) template.push({ label: 'Open at login', type: 'checkbox', checked: s.openAtLogin, click: () => run('app.login:toggle') });
    if (s.updatesOn) template.push(item(s.updateVersion ? `Update to ${s.updateVersion}...` : 'Check for updates', 'app.update'));
    template.push({ type: 'separator' }, item('Quit', 'app.quit'));
    return Menu.buildFromTemplate(template);
  }
  return {
    update() { tray.setContextMenu(build()); },
    destroy() { tray.destroy(); },
  };
}

module.exports = { createTray };
