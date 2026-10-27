# Changelog

Newest first. Website version / desktop app version.

## 1.4.1 / 1.3.1, 2026-10-27: change the password of the encrypted cloud copy

* New: **Change the password of the cloud copy** (Profile, Encrypted cloud copy). With the current vault password, the copy is decrypted on your device, locked again with a new password (12 to 256 characters) and uploaded; only ciphertext is sent, and the profile saved in this browser can be switched to the same password in one step. A wrong current password changes nothing.
* New: **I forgot the password.** The password never leaves your device, so it cannot be reset by email and nobody can recover the copy. The page says so and offers the honest way out: keep any unlocked device open to change the password and upload again, or delete the cloud copy (type DELETE) and start a new profile. This needs the new database function in `supabase/migrations/202610270001_delete_private_vault.sql` (already installed on the live project).
* Fix: cloud errors from Supabase now show their real message instead of "Could not complete the request".
* Tests: `npm run test:vault-reset`, and `desktop/scripts/test-cloud-password-ui.cjs` drives the real page against a stand-in server.

## 1.4.0 / 1.3.0, 2026-10-26: Discord status, password reset fix, desktop settings on the website

* New: **Discord status (desktop app, off by default).** Shows what you choose on your own Discord profile while you study: reading the textbook, practising, a mock exam, the formula booklet or a focus block, with a live timer and the Sarang.md logo. Seven switches decide what is shown (the chapter name stays private unless you allow it), and a Settings card shows the live connection state and a preview. It talks only to the Discord app on your computer. It ships with the Sarang.md Discord application, so nothing needs setting up (you can still paste your own Application ID).
* Fix: **password reset links.** The page now understands the link Supabase sends (recovery, invite, sign-up and magic links, and expired-link errors), opens the new-password dialog, and sends you to your profile. The reset email asks for a link that works on any device. Supabase's own Site URL for this project still needs to be set to https://sarang-md.vercel.app in the dashboard (Authentication, URL Configuration).
* New: the website's Settings now shows the desktop-only window and update settings and the Discord card, explained, with a download link, instead of hiding them.

## 1.3.2 (web only), 2026-10-25: the logo in browser notifications

* New: study-timer notifications in the browser now carry the Sarang.md logo. The desktop app already showed its logo in system notifications, so there is no new desktop build.

## 1.3.1 / 1.2.1, 2026-10-25: the Ask orb buttons work

* Fix: **the buttons in the Ask orb did not respond to real clicks.** The invisible answer card lay on top of the input and the send button, the full-width title row lay on top of the close button, and the "Ask another" button sat under the background. Each now lets clicks through. The earlier tests clicked by script, which hid the problem; the orb is now tested with real mouse events.
* Fix: **the orb was drawn off-centre** (a CSS ordering slip pushed it up and to the left of its frame) and the "Searching" and "Done" labels overlapped while they changed. The orb is centred and the old label now fades before the new one appears.

## 1.3.0 / 1.2.0, 2026-10-25: Units 4 and 5, long-form questions and the Ask orb

* New: **33 full textbook chapters** for Statistics and Probability (SL 4.1 to AHL 4.14) and Calculus (SL 5.1 to AHL 5.19), in the same format as Units 1 to 3. All 83 chapters now run at least 2,000 prose words (about 211,000 words in total); the Units 4 and 5 numbers were checked with Python, SymPy or SciPy while writing.
* New: **66 long-form practice questions**, two for each of the 33 Unit 4 and 5 codes (29 Paper 1 style, 37 Paper 2 style, 482 marks). Mark schemes use M, A, R and AG marks in the style of an examiner's guide. They are independently written, not IB mark schemes. `npm run build:long` recomputes every stated number from `source-material/practice/long/` and fails the build when a number, part mark total or TeX expression is wrong. The main bank now holds 1,069 questions (531 Paper 1, 528 Paper 2, 10 Paper 3).
* New: the **Ask orb** is the front door of the AI Socratic tutor. Press Ask in the top bar (only when AI is on and no exam is running), type a maths question and watch the orb think. With an API key saved in your unlocked encrypted profile, the reply is live from your own provider at the hint step you choose (1 Orient to 5 Almost there), with follow-ups remembered. Without a key you get the same offline guiding question as the tutor panel. "Continue in the tutor" carries the whole conversation into the tutor panel. Hints only, never the solution; nothing is sent until you press send.
* Not done: the 3,981 questions quoted in the outline are not reproduced, and the long-form set does not yet cover Units 1 to 3.

## 1.2.0 / 1.1.0, 2026-10-25: textbook chapters for Units 1 to 3

* New: **50 full textbook chapters** replace the short lessons for Number and Algebra (16 topics), Functions (16) and Geometry and Trigonometry (18). Each runs 2,000 to 3,500 prose words (about 128,000 words in total) with learning objectives, core ideas, worked examples with mark allocations and check lines, GDC advice, common mistakes, exam technique and command terms, connections, ten check questions with answers and a summary. Units 4 and 5 keep the short lessons for now.
* Independently written practice: the worked solutions and mark allocations are not IB mark schemes and the chapters say so. Numbers were checked with Python or SymPy while writing.
* New: `scripts/count-textbook.mjs` lists prose words per chapter, and `npm run check:data` fails any chapter under 2,000 prose words, without a required heading, or with a math error that KaTeX cannot render.
* Units 4 and 5 followed in 1.3.0.

## 1.1.0 / 1.0.0, 2026-10-25: the desktop app

* New: **Sarang.md for Windows**, a single signed exe with an animated installer, optional shortcuts, tray, always on top, remembered window, offline use and a verified updater. See [desktop/README.md](desktop/README.md).
* New: a **Get the app** link in the top bar and a download card on the Focus studio and in Settings (hidden inside the desktop app).
* New: **Study timer** on the Focus studio (25/5, 50/10, 90/15) with notifications and the minutes studied today. Everything stays on the device.
* New: README screenshots and the Sarang suite section (Sarang.md and Study with Sarang).
* Changed: the centered top navigation only shows from 1680 px wide so it no longer collides with search on laptop screens. The same links are in the sidebar.

## 1.0.0

* First published version: five-strand IB Mathematics AA HL/SL course, question bank, formula booklet, tutor, focus studio and encrypted local profile.
