# Sarang.md

An IB Mathematics Analysis and Approaches (AA) Higher Level (HL) grayscale, static-hostable Markdown reader and study app with a private local-notes mode and an original sequences-and-series question bank. Built with Vite, React, TypeScript, Tailwind CSS, React Markdown/KaTeX, Fuse.js, and Zustand. No app server or account is needed.

## Topics

`ib-mathematics`, `ib-math-aa`, `ib-math-aa-hl`, `mathematics`, `markdown-reader`, `study-tool`, `sequences-and-series`, `vite`, `react`, `typescript`, `tailwind-css`, `github-pages`

## Run and build

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). For production, stop the dev server, run `npm run build`, and optionally run `npm run preview`. `dist/` contains the static build.

## Your own Markdown: two ways

**1. Choose a folder in the app (private, works on any static host).** Click **Local Files** immediately after the dark-mode switch. Choose the actual `Unit 1 Number and Algebra` folder on your computer, or select individual `.md` files. The app reads them **in the browser** and saves their text in that browser's IndexedDB; it never uploads them to a server. Switch back to **Included library** any time. Choosing a folder replaces the browser import; **Choose .md files** adds or updates individual notes. If project-root notes also exist, they remain in the local library; a browser file with the same name takes priority. If your browser does not offer a folder picker, use the individual-file option. You can remove the stored import in the same dialog. Clearing browser/site data also clears your saved import, so keep your original files.

**2. Drop files into the project root (for local development / intentional static publishing).** These ready-made folders sit next to `package.json`:

```text
Unit 1 Number and Algebra/
Unit 2 Functions/
Unit 3 Geometry and Trigonometry/
Unit 4 Calculus/
```

Put Markdown files directly inside a folder, then run `npm run dev` or `npm run build`. The `predev`/`prebuild` hook runs `npm run sync:local`, discovers all `Unit N ...` folders, generates `public/content/local/catalog.json`, and copies their Markdown to `public/content/local/`. If the dev server is **already running**, run `npm run sync:local` and refresh your browser. Select **Local Files** in the app to read them. Empty units remain Coming soon; a unit becomes clickable when it has files.

**Privacy distinction:** Root-folder files are copied into the public static build and would be publicly accessible if you deploy that build. Root-folder `.md` files and the generated copy are gitignored by default, so they are not accidentally committed; use the browser picker for private notes on a hosted site. Only publish project-folder notes if you intentionally want to share them; remove the relevant `.gitignore` rule and commit those files first.

### Filenames and frontmatter

Files such as `02_Arithmetic_Sequences (2).md` work without renaming. A leading `00`–`19` automatically places Unit 1 notes under Foundations (00–01), Sequences & Series (02–08), Proof (09–12), Counting (13–15), Binomial Theorem (16–18), or Synthesis (19); additional unnumbered files appear under Resources. Adjacent links are generated from sorted filenames. Optional YAML frontmatter may define `title`, `category`, and `tags` (and takes precedence over filename-derived labels); it is stripped from the rendered page. The included demo library still uses `public/content/manifest.json` and the 20 bundled files in `public/content/Unit 1 Number and Algebra/`.

## Question bank

Visit **Practice** in the top menu or **Question bank** in the sidebar. `public/content/question-bank/sequences-and-series.json` contains 16 original IB-style practice questions and 91 marking points (M = method, A = accuracy, R = reasoning). Filter by strand/difficulty, search, and reveal each mark scheme only when ready. Edit that JSON to add your own original questions; each entry has `id`, `strand`, `topic`, `level` (`Core` or `Stretch`), `marks`, a Markdown `prompt`, and an array of `{ "code", "text", "marks" }` scheme steps. Math supports `\(...\)` and `$$...$$`. These are *not official IB past papers*.

## Deploy to GitHub Pages or any static host

Deploy the **contents of `dist/`**. The app uses hash URLs (`/#/units/...` and `/#/question-bank`) and a relative Vite base, so it works under `/` or `/your-repo/` without SPA rewrites. For GitHub Pages, push the project and select **Settings → Pages → Build and deployment → GitHub Actions**; `.github/workflows/deploy.yml` publishes on pushes to `main`. Browser-picked files are not bundled or deployed; each reader can choose their own folder in their browser.
