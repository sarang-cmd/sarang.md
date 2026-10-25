# Version messages and archive history

Updated 27 September 2026. This file separates messages that really exist in local Git history from suggested messages for downloadable source archives. **No new Git commit was created for the archives or for the current changes.** An archive filename is not a Git tag, commit or deployment. The existing local branch is `master`; its recorded tip when this history was written was `028477f`. The source in the newer ZIPs also contains changes not represented by that tip. No push or live deployment is claimed.

## Actual earlier Git commit subjects

Read from `git log --all --date=short --format='%h|%ad|%s'` in this workspace on 26 September 2026. Newest first. These are the actual subjects, with abbreviated commit hashes and commit dates. This table records the repository's visible local history, not an invented release log.

| Commit | Date | Actual subject |
| --- | --- | --- |
| 028477f | 2026-09-26 | Update router security and document clean Windows startup |
| 4a8abe8 | 2026-09-26 | Document scope and owner setup; make course sources buildable from clean checkout |
| 7260069 | 2026-09-25 | Expand AA course, original practice, focus studio, and encrypted backup |
| f3ea041 | 2026-09-25 | Initial commit: Sarang.md v4 - IB Mathematics study platform |
| 7191c74 | 2026-09-24 | docs: align README description and topics with IB Math AA HL scope |
| 56f29ab | 2026-09-24 | Initial plan |
| b5bf9b7 | 2026-09-24 | Merge pull request #1 from sarang-cmd/main |
| d796166 | 2026-09-24 | Remove environment block to bypass protection rules |
| f8f4a96 | 2026-09-24 | Add configure-pages action |
| 76e1da2 | 2026-09-24 | Add Unit folders to repo for GitHub visibility |
| 09670b0 | 2026-09-24 | Initial commit: Sarang.md IB Math AAHL study app |

## Retrospective archive messages, suggestions only

The messages in this section were **not committed**. They describe source ZIP milestones retrospectively, so someone who later maintains the repository has a useful candidate subject and can decide whether to make a real commit. They do not assert that each ZIP corresponds to one Git snapshot.

| Existing archive | Proposed retrospective subject | Scope and caveat |
| --- | --- | --- |
| `Sarang.md-project.zip` | `feat: package the original AA HL study space and separate supplied paper archive` | Earlier source archive with 83 original syllabus lessons, 90 original paper-style questions, the preserved 20 notes and 16-question classic bank, local files, and 50 unverified supplied transcriptions. The earlier archive required ignored upload files for a clean course rebuild, which was fixed in the next archive. |
| `Sarang-md-Windows-clean-source-2026-09-26.zip` | `fix: build the course from versioned source files on a clean extraction` | Moves the outline and preserved supplied notes into included source inputs so Windows extraction and static builds no longer depend on ignored uploads. This proposed message is not the subject of the existing `028477f` commit, even though that commit also mentions Windows startup. |
| `Sarang-md-AAHL-Booklet-1003-2026-09-26.zip` | `feat: expand all 83 AA lessons and reach 1003 original practice questions` | Adds deeper original explanations, generated variations and a checked reference to the supplied 2023 V1.0 formula booklet. The copyrighted PDF itself is not bundled. Numerical spot checks do not prove every solution. |
| `Sarang-md-AAHL-Exam-Review-2026-09-26.zip` | `feat: add timed exams, saved answer review and configurable study settings` | Adds time-limited attempts, offline self-review, explicitly requested optional AI critique, Old/New settings, a shared bank switcher and the locally checked SQL operator fix. The migration and OAuth return were not verified against a live Supabase project. |
| `Sarang-md-Reading-Pagination-Toasts-2026-09-26.zip` | `feat: add bank pages, ordered lesson navigation and grayscale action toasts` | Earlier archive. Added numbered pages, jump and previous/next controls to the three banks, reading-path navigation, reduced-motion-aware transitions, shared toast/button components, meaningful action confirmations and this file. This message was **proposed, not committed**. |
| `Sarang-md-Math-Tutor-Booklet-Profile-2026-09-27.zip` | `feat: add math-only guided tutor, private booklet viewer and saved study activity` | Current source archive. Adds six-step learner-effort UI with Locked in help, five distinct math hint steps, responsive tutor fullscreen and split view, visible typing, supported-model direct image messages, an on-demand Drive booklet preview and private PDF choice, saved self-mark/avatar checks, a streak calendar and activity heatmap, cloud button prerequisites/retry, and source-only editorial notes. Local type/data/profile/tutor/sound and build checks plus mocked browser flows passed. A clean extraction without `uploads/` passed `npm ci`, data/profile/tutor/sound checks and the production build. Paid providers and real Supabase were not tested. This message is **proposed, not committed**. |

## Suggested future messages, not completed work

- `test: add repeatable browser coverage for bank navigation, history and reduced motion`
- `fix: validate Supabase vault policies and OAuth redirects on a deployed origin`
- `content: independently review generated mathematics and log corrected solutions`

Only use a suggested future subject after the described work is implemented and checked. When creating **any later source ZIP**, update this file with its actual archive filename, what changed, the results and limitations, and a clearly labeled proposed message. Re-read `git log` and append only real new Git messages under the actual-history heading. Include the updated `VERSION_MESSAGES.md` inside every later ZIP. This is documentation, not permission to create commits or push without the owner's direction.
