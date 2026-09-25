# Sarang.md design language

This is a product and implementation guide for anyone changing the site. Preserve the included 20 notes, the separate original 16-question bank, and the distinct 50-item Paper 1 / Paper 2 archive. Work with the existing static Vite, React, and TypeScript architecture.

## Point of view

Sarang.md is a quiet place to think. It is not a gamified classroom, a loud productivity dashboard, or a substitute for checking the original source. The interface should make a difficult topic feel approachable by reducing competing signals, preserving context, and offering a clear next step.

## Visual grammar

- Grayscale only. Use the existing `--canvas`, `--surface`, `--raised`, `--ink`, `--muted`, `--faint`, `--line`, and `--accent` tokens in `src/index.css`. Light and dark themes must both remain legible.
- Let type create hierarchy: large close-tracked editorial headings, compact monospaced eyebrow labels and metadata, calm body copy, and restrained small controls. Provide generous line height in notes and in worked solutions.
- Use whitespace, thin borders, soft cards, and simple rounded buttons. Avoid gradients, saturated status colors, confetti, unnecessary charts, and decorative textures.
- One prominent action at a time. Secondary actions are outlined or underlined. Question status and privacy notices should be understandable without relying on color.
- Rendering math matters. Keep KaTeX readable on mobile, constrain wide equations with horizontal scrolling, and never replace precise mathematical notation with a rough image.
- Use motion to establish arrival and state, not to hold information hostage. Tutor replies fade in over about 850 ms with no character-by-character streaming. Respect `prefers-reduced-motion`.

## Interaction and learning

- Default to a short, anchored Socratic prompt. Ask what the learner tried. Offer progressive guidance, not an automatic worked solution.
- Reveal answer and mark-scheme controls are deliberate and clearly labeled. Independently written guides must never be called official IB mark schemes.
- Keep the original question bank separate from the supplied Paper 1 / Paper 2 transcriptions and from generated variants. Never invent a session, time zone, paper code, or source authenticity.
- Make progress honest: visiting a note is not studying it; drafting or checking an answer is not automatically completing it. The learner chooses when to mark work complete. Group progress by source rather than mixing totals.
- Keep navigation consistent in mobile, sidebar, header, and footer. All interactive controls need descriptive labels, visible focus, and keyboard access.

## Privacy, persistence, and safety

- This is a client-only, static-hostable site. Never ship a provider credential in source, build output, URL, documentation, or logs. Do not imply the app has a server or cloud account.
- The optional profile lives in this browser's localStorage only as an AES-GCM encrypted envelope. Web Crypto derives its in-memory key from a user password with PBKDF2, SHA-256, and a random salt. The password is never stored. All profile mutations, including API keys, private document text, saved chats, and progress, pass through `src/store/useProfileStore.ts`.
- Lock clears decrypted profile contents and tutor credentials from application state. An encrypted backup is the only supported way to transfer a complete profile to another browser. Plain summaries deliberately exclude keys and private file text.
- Browser-picked course Markdown is in a separate, existing IndexedDB library and is **not encrypted or included** in profile backups. Theme and focus video links also have separate unencrypted browser preferences. State this distinction wherever it could surprise a learner.
- A model request sends a personal API key, prompt, chat, and selected document excerpt directly to the chosen provider. Browser CORS limitations and session exposure are real; do not promise otherwise or claim proof of neurological benefits from generated focus sound.
- The verified repository link is `https://github.com/sarang-cmd/sarang.md`. Never imply a successful push or deployment without checking the remote state; the five mirror addresses do not prove deployment or ownership.

## Engineering touchpoints

- Content: `public/content/manifest.json`, bundled Markdown files, `public/content/question-bank/`, and `scripts/build-ib-bank.mjs`. Use `npm run check:data` after touching authored or generated study data.
- Profile: `src/lib/profileVault.ts` owns envelope validation and browser cryptography; `src/store/useProfileStore.ts` owns encrypted saves, import, export, and learning activity; `src/pages/ProfilePage.tsx` owns the learner-facing controls.
- Math/tutor: `src/components/MarkdownArticle.tsx`, `src/lib/tutorApi.ts`, `src/components/TutorPanel.tsx`. Keep response animation in `src/index.css` and honor reduced-motion preferences.
- Navigation: `src/App.tsx`, `src/components/Header.tsx`, and `src/components/Sidebar.tsx`. The hash router and relative Vite base allow static deployment under a path.
- Keep `.gitignore` exclusions for local notes, dependencies, build output, and the project ZIP. Do not commit exports, keys, or private notes. Run `npm run typecheck`, `npm run check:data`, and `npm run build` before shipping.
