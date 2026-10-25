'use strict';
const { contextBridge, ipcRenderer } = require('electron');

const on = (channel, callback) => {
  const handler = (_event, payload) => callback(payload);
  ipcRenderer.on(channel, handler);
  return () => ipcRenderer.removeListener(channel, handler);
};

// The only door between the page and the system. Everything is a plain message that the main process
// validates again; the page never gets Node, files or the shell.
contextBridge.exposeInMainWorld('sarangDesktop', {
  getInfo: () => ipcRenderer.invoke('smd:get-info'),
  setBehavior: (patch) => ipcRenderer.invoke('smd:set-behavior', patch),
  setTheme: (dark) => ipcRenderer.send('smd:theme', dark === true),
  notify: (title, body) => ipcRenderer.send('smd:notify', String(title).slice(0, 120), String(body).slice(0, 300)),
  openExternal: (url) => ipcRenderer.send('smd:open-external', String(url).slice(0, 500)),
  onRoute: (callback) => on('smd:route', callback),
  update: {
    get: () => ipcRenderer.invoke('smd:update-get'),
    check: () => ipcRenderer.invoke('smd:update-check'),
    install: () => ipcRenderer.invoke('smd:update-install'),
    skip: () => ipcRenderer.invoke('smd:update-skip'),
    dismiss: () => ipcRenderer.invoke('smd:update-dismiss'),
    setConfig: (config) => ipcRenderer.invoke('smd:update-config', config),
    onState: (callback) => on('smd:update', callback),
  },
});
