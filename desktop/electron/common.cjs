'use strict';
const path = require('node:path');
const { app } = require('electron');

const APP_NAME = 'Sarang.md';
const APP_ID = 'com.sarang.sarangmd';
const PROTOCOL = 'sarang-md';
// The course is served from this host over https. ".localhost" is reserved for loopback, so it can never reach a
// real server, and one stable origin keeps the profile, notes and progress (localStorage and IndexedDB) in one place.
const HOST = 'app.sarang-md.localhost';
const ORIGIN = `https://${HOST}`;

const isWin = process.platform === 'win32';
const isMac = process.platform === 'darwin';

/** Same folder for the installed app, the portable run and the installer's settings writes. */
const userDataDir = () => path.join(app.getPath('appData'), APP_NAME);
const rootDir = path.join(__dirname, '..');
const asset = (...parts) => path.join(rootDir, 'assets', ...parts);

module.exports = { APP_NAME, APP_ID, PROTOCOL, HOST, ORIGIN, isWin, isMac, userDataDir, rootDir, asset };
