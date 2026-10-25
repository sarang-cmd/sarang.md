'use strict';
// Draws assets/icon.{svg,png,ico} and tray icons from the website's own favicon (public/favicon.svg).
// Run with: xvfb-run -a npx electron scripts/make-icons.cjs
const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const svgSource = fs.readFileSync(path.join(root, '..', 'public', 'favicon.svg'), 'utf8');
const template = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="none" stroke="#000" stroke-width="7"/><circle cx="32" cy="32" r="8" fill="#000"/></svg>';

function makeIco(images) {
  const head = Buffer.alloc(6); head.writeUInt16LE(1, 2); head.writeUInt16LE(images.length, 4);
  let offset = 6 + images.length * 16; const entries = [];
  for (const { size, png } of images) {
    const e = Buffer.alloc(16); e.writeUInt8(size >= 256 ? 0 : size, 0); e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(png.length, 8); e.writeUInt32LE(offset, 12);
    entries.push(e); offset += png.length;
  }
  return Buffer.concat([head, ...entries, ...images.map((i) => i.png)]);
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadURL('data:text/html,<canvas id=c></canvas>');
  const render = async (svg, size) => {
    const url = await win.webContents.executeJavaScript(`(async()=>{const img=new Image();img.src='data:image/svg+xml;base64,'+btoa(${JSON.stringify(svg)});await img.decode();const c=document.createElement('canvas');c.width=c.height=${size};c.getContext('2d').drawImage(img,0,0,${size},${size});return c.toDataURL('image/png')})()`);
    return Buffer.from(url.split(',')[1], 'base64');
  };
  const out = (name, data) => { fs.mkdirSync(path.join(root, 'assets'), { recursive: true }); fs.writeFileSync(path.join(root, 'assets', name), data); };
  out('icon.svg', svgSource);
  const images = []; for (const size of [16, 24, 32, 48, 64, 128, 256]) images.push({ size, png: await render(svgSource, size) });
  out('icon.ico', makeIco(images));
  out('icon.png', await render(svgSource, 512));
  out('tray.png', await render(svgSource, 64));
  out('trayTemplate.png', await render(template, 22));
  out('trayTemplate@2x.png', await render(template, 44));
  console.log('icons written');
  app.quit();
});
