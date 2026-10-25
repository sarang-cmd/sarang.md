# Changelog

Newest first. Website version / desktop app version.

## 1.3.0, 2026-10-25: Units 4 and 5, long-form questions and the Ask orb

* New: **33 full textbook chapters** for Statistics and Probability (SL 4.1 to AHL 4.14) and Calculus (SL 5.1 to AHL 5.19), in the same format as Units 1 to 3. All 83 chapters now run at least 2,000 prose words (about 211,000 words in total); the Units 4 and 5 numbers were checked with Python, SymPy or SciPy while writing.
* New: **66 long-form practice questions**, two for each of the 33 Unit 4 and 5 codes (29 Paper 1 style, 37 Paper 2 style, 482 marks). Mark schemes use M, A, R and AG marks in the style of an examiner's guide. They are independently written, not IB mark schemes. `npm run build:long` recomputes every stated number from `source-material/practice/long/` and fails the build when a number, part mark total or TeX expression is wrong. The main bank now holds 1,069 questions (531 Paper 1, 528 Paper 2, 10 Paper 3).
* New: the **Ask orb**, a MorphOrb-style thinking orb and input in the top bar (only when AI features are on and no exam is running). Without an API key in this wrapper it shows a local, honest hand-off and opens the tutor for the real answer.
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
