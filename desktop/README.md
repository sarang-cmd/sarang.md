# Sarang.md for the desktop

The Sarang.md website in its own window. It is the same React code as the site (`../src`), packed with Electron. No Python, no server, no account.

* **Download:** [Sarang-md-Windows.exe](https://github.com/sarang-cmd/sarang.md/releases/latest/download/Sarang-md-Windows.exe) (always the newest release), or pick a version on the [releases page](https://github.com/sarang-cmd/sarang.md/releases).
* **First run:** the single `.exe` is also the installer. It opens an animated setup (welcome, options, progress, done) that copies the app to `%LOCALAPPDATA%\Programs\Sarang.md` and, only if you tick them, creates Start menu and desktop shortcuts and "Open at login". "Run without installing" is also offered. Uninstall from Windows "Apps & features"; your profile and notes are kept unless you tick the box.
* **SmartScreen:** the file is signed with a self-made certificate, which proves it was not changed after signing but is not trusted by Windows yet. Click "More info", then "Run anyway". Compare the SHA-256 on the release page if you want to be sure.

## What the app adds

* Works fully offline: the course, the question bank and the booklet are inside the app.
* Window that remembers its size and position, optional always on top, optional tray icon (close to tray, off by default), optional open at login.
* Tray menu: Home, All units, Question bank, Formula booklet, Focus studio, Quit.
* Real notifications for the study timer (a work block ends, a break ends).
* `F11` full screen, `Ctrl` + `+`/`-`/`0` zoom, `Alt` + left/right back and forward.
* Updater: Settings, Desktop app, Updates. Checks `sarang-cmd/sarang.md` releases, downloads `Sarang-md-x.y.z.exe`, verifies its SHA-256 against the `.sha256` asset, and runs the installer over the current copy. It always asks first; "Later" and "Skip this version" are remembered.
* No global keyboard shortcuts, so nothing interferes with browsers or other apps.

## Security model

* The page runs with context isolation and the Chromium sandbox; it has no Node. The only bridge is `window.sarangDesktop` (see `electron/preload.cjs`), and the main process checks the sender's origin on every message.
* The app serves its own files from `https://app.sarang-md.localhost/` (`.localhost` can never reach a real server) with a strict Content Security Policy. Links to other sites open in your browser.
* Your encrypted profile, notes and progress live in the app's own browser storage under `%APPDATA%\Sarang.md`. Nothing is uploaded unless you turn on the optional cloud sync with your own Supabase project, and AI calls use your own keys.

## Build it yourself

```bash
npm ci                         # in the repository root
cd desktop && npm ci
node scripts/build-app.cjs     # builds the site and copies dist to desktop/app
npm run desktop                # run it
npm run dist:win               # Windows exe in desktop/release (Linux builds it too, with osslsigncode for signing)
npm test                       # updater and installer unit tests
npm run test:ui                # needs a display: xvfb-run on Linux
```

Signing (optional): `bash scripts/make-signing-cert.sh ./signing`, then `SMD_SIGN_PFX=... SMD_SIGN_PASSWORD=... node scripts/sign-exe.cjs release/Sarang-md-x.y.z.exe`, then `node scripts/checksum.cjs release`. Never commit the `.pfx`. Regenerate icons with `npm run icons`, screenshots with `scripts/make-screenshots.cjs`.

macOS: the same source builds with `npm run dist:mac` on a Mac. It is not published and not tested by the author yet.

## Releasing

1. Bump `version` in `package.json` (root) and `desktop/package.json`, update `CHANGELOG.md`.
2. Build, sign, checksum (above). The file must be named `Sarang-md-x.y.z.exe`.
3. Create a GitHub release `vX.Y.Z` and upload `Sarang-md-x.y.z.exe`, `Sarang-md-x.y.z.exe.sha256` and a copy named `Sarang-md-Windows.exe` (the stable download link). Installed apps pick it up within hours.
