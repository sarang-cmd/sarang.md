# Sarang.md

A grayscale, static-hostable IB Mathematics AA HL Markdown reader with a private local-notes mode and an original sequences-and-series question bank. Built with Vite, React, TypeScript, Tailwind, React Markdown/KaTeX, Fuse.js, and Zustand. No app server or account is needed.

## Run and build

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). For production, stop the dev server, run `npm run build`, and optionally run `npm run preview`. `dist/` contains the static build.

## Your own Markdown: two ways

**1. Choose a folder in the app (private, works on any static host).** Click **Local Files** immediately after the dark-mode switch. Choose the actual `Unit 1 Number and Algebra` folder on your computer, or select individual `.md` files. The app reads them **in the browser** and saves their text in that browser's IndexedDB; the notes reader does not upload them to an app server. If you choose to use the optional live tutor on a local note, an excerpt goes directly to your configured AI provider. Switch back to **Included library** any time. Choosing a folder replaces the browser import; **Choose .md files** adds or updates individual notes. If project-root notes also exist, they remain in the local library; a browser file with the same name takes priority. If your browser does not offer a folder picker, use the individual-file option. You can remove the stored import in the same dialog. Clearing browser/site data also clears your saved import, so keep your original files.

**2. Drop files into the project root (for local development / intentional static publishing).** These ready-made folders sit next to `package.json`:

```text
Unit 1 Number and Algebra/
Unit 2 Functions/
Unit 3 Geometry and Trigonometry/
Unit 4 Calculus/
```

Put Markdown files directly inside a folder, then run `npm run dev` or `npm run build`. The `predev`/`prebuild` hook runs `npm run sync:local`, discovers all `Unit N ...` folders, generates `public/content/local/catalog.json`, and copies their Markdown to `public/content/local/`. If the dev server is **already running**, run `npm run sync:local` and refresh your browser. Select **Local Files** in the app to read them. Empty units remain Coming soon; a unit becomes clickable when it has files.

**Privacy distinction:** Root-folder files are copied into the public static build and would be publicly accessible if you deploy that build. Root-folder `.md` files and the generated copy are gitignored by default, so they are not accidentally committed; use the browser picker for private notes on a hosted site. Only publish project-folder notes if you intentionally want to share them; remove the relevant `.gitignore` rule and commit those files first. **Repository warning:** the existing public `sarang-cmd/sarang.md` history already tracks Markdown files in its root `Unit 1 Number and Algebra/` folder. `.gitignore` does not untrack files already committed. Those existing files are preserved here; running the build copies them into public static content. Review them before deploying or sharing this project.

### Filenames and frontmatter

Files such as `02_Arithmetic_Sequences (2).md` work without renaming. A leading `00`–`19` automatically places Unit 1 notes under Foundations (00–01), Sequences & Series (02–08), Proof (09–12), Counting (13–15), Binomial Theorem (16–18), or Synthesis (19); additional unnumbered files appear under Resources. Adjacent links are generated from sorted filenames. Optional YAML frontmatter may define `title`, `category`, and `tags` (and takes precedence over filename-derived labels); it is stripped from the rendered page. The included demo library still uses `public/content/manifest.json` and the 20 bundled files in `public/content/Unit 1 Number and Algebra/`.

## Question bank

Visit **Practice** in the top menu or **Question bank** in the sidebar. `public/content/question-bank/sequences-and-series.json` contains 16 original IB-style practice questions and 91 marking points (M = method, A = accuracy, R = reasoning). Filter by strand/difficulty, search, and reveal each mark scheme only when ready. Edit that JSON to add your own original questions; each entry has `id`, `strand`, `topic`, `level` (`Core` or `Stretch`), `marks`, a Markdown `prompt`, and an array of `{ "code", "text", "marks" }` scheme steps. Math supports `\(...\)` and `$$...$$`. These are *not official IB past papers*.

## Deploy to GitHub Pages or any static host

Deploy the **contents of `dist/`**. The app uses hash URLs (`/#/units/...` and `/#/question-bank`) and a relative Vite base, so it works under `/` or `/your-repo/` without SPA rewrites. For GitHub Pages, push the project and select **Settings → Pages → Build and deployment → GitHub Actions**; `.github/workflows/deploy.yml` publishes on pushes to `master`. Browser-picked files are not bundled or deployed; each reader can choose their own folder in their browser.

## New: separate Paper 1 and Paper 2 archive

Open **IB paper bank** in the sidebar, the Home page, or the original question bank's link. This is separate from the untouched 16-question sequences and series bank. The archive contains the **50 question transcriptions you supplied**, organized by each item's stated paper: 20 marked P1 and 30 marked P2. Three P1-labeled items came from the file titled Paper 2; the app puts them under P1 and explicitly flags the source-file mismatch. Other discrepancies, including conflicting part-mark totals, mislabeled topics and reused codes across sessions, are flagged on the relevant entries. Some older `MATHL` codes refer to a predecessor Mathematics HL syllabus, not Mathematics AA HL. The prompts and exam metadata are *user-supplied transcriptions, not independently authenticated official papers*. No scans or official mark schemes were provided.

Each question has an **independently written, suggested marking guide** with method, accuracy and reasoning points summing to the question's stated header total. It is not an official IB mark scheme. The checker tests selected final **numeric** values, including fractions, decimals and `sqrt(...)`; it cannot assess method, proof, interpretation or official marks. A client-only static site necessarily ships its solution data in downloadable JSON; reveal buttons are study controls, not security controls. Reveal a guide only when you choose to. Under **Original variants**, ten new parameterized question templates (five per paper) create fresh numbers and derived answers when you press **Generate a new set**. Variants are not attributed to an examination session, zone or code.

The two original supplied Markdown files are included at `source-material/`, and the authored teaching rubrics are in `scripts/ib-guides.mjs`. Run `npm run sync:ib` after editing either to rebuild `public/content/ib-bank/archive.json`, then `npm run check:data` to validate totals, math rendering and preservation counts. The build and dev hooks regenerate it automatically. To make a correction to a transcription, update the relevant source Markdown and regenerate; the existing notes and sequences bank remain untouched.

## New: Socratic tutor

Use **Ask about this note/question** or the floating tutor button. The panel can be moved on desktop, docked on the right, minimized and reopened. Choose one of five levels: Orient, Identify, Plan, Set up, or Almost there. The default is short, anchored questions, not a solved answer. **Explain the answer for me** requires an explicit confirmation and switches to solution mode; returning to hints clears that conversation. The static site cannot guarantee every external AI model will obey a prompt, so verify responses before relying on them.

Without an API key, the panel provides fixed offline guiding questions, **not live AI**. For live responses, open **Settings** and configure your own model ID, API key and provider: OpenAI, OpenRouter, Mistral, xAI, Anthropic, Gemini/Google AI Studio, Kimi/Moonshot, or another OpenAI-compatible Chat Completions endpoint. Provider presets may change; edit model IDs and endpoint URLs to match your account. No key is embedded in the source, URLs, or build. Without an unlocked profile, credentials are temporary and are forgotten on refresh. With an unlocked profile, press **Save connection to profile** to encrypt that provider's key, model, and endpoint. Unlock the profile again on each visit to load saved connections. Plaintext connection preferences are no longer written to localStorage. Custom endpoints must use HTTPS, except local HTTP while developing on localhost.

**Browser-only privacy and deployment limits:** Requests go directly from the browser to the selected provider, including the question/note excerpt, your chat and, if loaded, relevant booklet excerpts. Your own API key is visible to the browser, your provider and anyone with access to this browser session or its developer tools. Some providers do not allow browser-origin requests (CORS), or restrict keys and models. This project has **no backend or proxy**, so an incompatible provider endpoint cannot be made to work by adding a secret to the static build. For centrally managed or concealed keys you would need a separately deployed, authenticated server that you control. Do not paste private credentials into source files or a shared computer.

There was **no formula booklet** among the provided attachments. You can upload a PDF with selectable text, `.md` or `.txt` in Tutor settings for this visit, or save extracted text in the encrypted **Profile → Private library** to reuse it after unlock. Select a saved booklet in tutor settings. Only relevant excerpts are sent to your chosen provider when you make a model request. PDF equations may be reordered by text extraction; image-only scans need OCR first. The tutor is instructed to use notation from an available excerpt and never claim it consulted a booklet that is absent.

## New: focus studio and video queue

The **Focus studio** makes its own ambient sound in the browser with Web Audio: three presets, adjustable level, a 25/50-minute or unlimited timer, and **Next variation** to skip and regenerate the sound. Playback requires a click and continues while you navigate within the app; a mini player lets you pause or skip. This is not Brain.fm audio and has **no claimed therapeutic, brainwave-alignment or performance benefit**. If your encrypted profile is unlocked, completed playback intervals are added to your focus-time progress when you pause, finish, or change presets.

Add HTTPS YouTube links or direct `.mp4`, `.webm` and `.ogg` URLs to the editable video queue. You can also choose local video files. Rename, reorder, remove, skip and loop. Direct files can advance automatically on end. YouTube-only queues can loop through YouTube's embedded playlist when embedding and browser autoplay permit it. A mixed embedded and direct-video queue needs manual skipping after a YouTube item. Saved link entries remain in this browser's localStorage; local file entries last only while the Focus page remains open. No videos, video links or local media were included in the supplied attachments.

## Encrypted local profile

Open **Profile** from the header, sidebar, or footer. Create a password of at least 12 characters, and unlock it anew after every page refresh or browser visit. An unlocked profile tracks visits and manually marked studied notes, original-bank practice, separate Paper 1 / Paper 2 practice and variants, final-value-check drafts and attempts, focus playback intervals, and recent tutor conversations. Visiting or checking an item does **not** automatically mark it complete. Practice, reading, focus, tutor settings, and private document text share one encrypted profile across the app in this browser. If you do not create or unlock a profile, the existing reading and practice tools still work, but new activity is not recorded in the profile.

The profile is a **local, browser-origin-scoped encrypted vault**, not an online account or automatic cross-device sync. The app uses Web Crypto AES-256-GCM with a fresh 12-byte nonce for each save, a random 16-byte salt, and PBKDF2-SHA-256 with 600,000 iterations to derive a non-extractable key from your password. The localStorage record is ciphertext plus the necessary salt, nonce, KDF parameters, and timestamps. Your password is not stored. Decrypted data and the derived key stay in application memory until you lock or reload. Requires HTTPS or localhost, Web Crypto, and writable browser storage. Profile data has a deliberately small size limit for browser storage, so only the most recent chats and activity are retained. Browsers can evict local data; export backups regularly. A lost password cannot be recovered.

**Earlier browser profiles:** If this browser has the older `sarang-encrypted-profile` record and no new vault, the Profile page offers password-verified migration to the new format. It carries over saved provider keys and recognizable topic, question, paper, and focus entries where available, then removes the older encrypted record only after the new one is safely written. Earlier question IDs are labeled as migrated so they cannot be mistaken for newly checked answers. Create a new profile instead if you want to leave the older record intact.

**Back up and restore:** Download `.json`, `.data`, or `.txt` from the Profile page. These three choices contain the **same password-encrypted backup**, including saved API keys, progress, document text, and recent chats. A readable progress `.txt` deliberately excludes API keys, private document contents, and conversation text and cannot be imported. To move to another device, open that device's Profile page, choose the encrypted backup, and enter the backup password. Import replaces any existing encrypted profile **in that browser** after confirmation and successful decryption; export the existing one first. Changing your password re-encrypts the local profile with a fresh salt; older exported backups still use their original password. Deleting your local profile does not delete backups you exported elsewhere.

**Private library:** Import PDF, `.md`, or `.txt` files from Profile. Only extracted text is saved in the encrypted profile, with a limit of 12 files and 360,000 characters of extracted document text in total. PDFs with only images need OCR. PDF extraction can lose mathematical layout, so check the original before relying on notation. A separate PDF selected directly in Tutor settings stays in memory for that visit unless also added to the private library.

**Important boundary:** Browser-picked course Markdown from **Local Files** remains in the existing IndexedDB library **unencrypted** and is **not** included in profile backups. Theme settings and saved focus-video links also remain separate, unencrypted browser preferences. Local video files are temporary. Deleting a profile does not erase those separate stores. Do not put sensitive material in these areas expecting it to be protected by the profile password. During an unlocked session, browser extensions, local device users, developer tools, a compromised page, or your AI provider may still access information; encryption at rest is not a substitute for device security. Use restricted API keys. Never share an unlocked device or the password alongside the backup.

Tutor replies appear with a gentle fade-in animation; reduced-motion users see them immediately. The full answer arrives at once, and there is no simulated typing.

## Links, mirrors, and deployment status

The **Mirrors** page lists the five hostnames visible in the supplied screenshot using their `https://*.vercel.app` addresses. `sarangmd.vercel.app` was seen redirecting to `sarang-md.vercel.app`. The addresses do not prove ownership or future availability. The working repository URL is `https://github.com/sarang-cmd/sarang.md` and is linked in the footer and on the Mirrors page. The old GitHub path returned Not Found and is no longer linked. Building or packaging this project does **not** deploy it to any of the listed hostnames. The GitHub Pages workflow listens for pushes to `master`; hosting and any additional mirrors have separate deployment settings. A public repository URL by itself does not grant push access.

See `agents.md` for the visual language, privacy boundaries, and engineering conventions.
