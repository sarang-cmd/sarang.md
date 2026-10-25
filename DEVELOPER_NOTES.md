# Source-only developer and editorial notes

This file is for people maintaining the source archive. It is intentionally **not** part of the learner-facing course catalog or copied into `public/content`. The app still displays privacy, consent, encryption, uncertainty, and source-quality warnings where learners need them.

## Editorial materials kept in the source archive

- [Course writing and verification guide](CONTENT_WRITING_GUIDE.md): authoring method, errata, proof-reading and preservation rules for the supplied notes.
- [Formula booklet cross-check](FORMULA_BOOKLET_AUDIT.md): audit of the earlier owner-supplied 2023 AA HL booklet and limits of machine-extracted formulas. This is not the booklet PDF, an official mark scheme, or a blanket check of every solution.
- [Owner setup checklist](OWNER_SETUP_CHECKLIST.md), [cloud setup](CLOUD_SETUP.md) and [requests versus implementation](REQUESTS_VS_IMPLEMENTATION.md): operational and scope notes, not course chapters.
- [Version messages](VERSION_MESSAGES.md): actual local Git history is separate from proposed archive subjects. No commit or deployment is implied by the ZIP.

The 20 preserved original notes and 22 supplied notes remain in the learner catalog. Only internal editorial guides were removed from it. Lesson math and student-facing caveats remain present.

## Build and security checks

Run `npm ci`, `npm run check:data`, `npm run test:profile`, `npm run test:tutor`, `npm run test:sounds`, and `npm run build` from a clean extraction. Static hosting uses hash routing. The local PDF in ignored `uploads/` is never an archive or build dependency. The provided Drive link is embedded only after the learner chooses to load it, and Google's controls cannot be changed by this site's CSS.

An unlocked vault is intentionally held only in this tab's memory. A full document reload requires the password again. In-app React Router navigation must not reload the document. Another tab editing the encrypted vault invalidates this tab's snapshot to prevent stale overwrites. Surface this as a specific notice instead of making it look like a route-triggered lock. Check storage and browser developer consoles if encryption writes fail.

Cloud buttons require an authenticated account, a successful copy-status read, and the button-specific prerequisites shown in the interface. Upload additionally requires an unlocked local vault and explicit consent. Restore needs an existing copy and the **local** vault password. A failed SELECT must show an error and retry, never an endless loading state. The migration can be installed only in the owner's Supabase SQL editor. Browser publishable keys do not prove RLS correctness. Do not put service-role keys, vault passwords or decrypted images in the repository.

Tutor image inputs use direct requests to the configured provider. There is no upload server. Only a newly attached image is sent, only with the learner's Send action, and image bytes are not written to encrypted chat history or automatically resent in follow-ups. Provider/model capability detection is conservative and does not guarantee that a particular API key or account has access. Keep the visibility and privacy messages when editing this flow.

Provider-format references consulted for this implementation: OpenAI Chat Completions image URLs [1](https://platform.openai.com/docs/guides/images-vision); OpenRouter base64 image inputs [1](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding); Mistral Chat Completions image input [1](https://docs.mistral.ai/capabilities/vision); xAI legacy Chat Completions image input [2](https://docs.x.ai/developers/model-capabilities/legacy/chat-completions); Anthropic Messages base64 blocks [2](https://docs.anthropic.com/en/api/messages-examples); Gemini inline image data [1](https://ai.google.dev/gemini-api/docs/image-understanding.md.txt); Kimi multimodal model notes [1](https://platform.moonshot.ai/docs/api/chat.en-US). Documentation can change. The UI does not claim every regional endpoint or model account was tested.

## Manual verification on a deployed site

- Follow a lesson link and question-bank link after unlocking; the same tab must stay unlocked. A full reload should lock. Open a second tab, edit there, and verify the first tab shows a cross-tab conflict notice.
- Self-mark a question in Review, wait for the encrypted-save confirmation, navigate to Profile, and confirm the latest and best totals, ledger row, avatar and activity. Reload and unlock again; these values must survive.
- Check Upload and Restore reasons before and after cloud sign-in and a successful copy check. Test OAuth redirects and compare-and-swap conflicts with real accounts only on an owner-controlled deployment. No live Supabase test was performed in this source workspace.
- With a supported provider key, inspect a deliberately consented test image request at the network boundary. Test each provider separately; do not claim live model support from a mocked request.
