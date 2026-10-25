# Sarang.md | Course writing and verification guide

**Status:** editorial guide, written before the new course lessons. Based on the 20 uploaded Unit 1 notes, the master guide, the countdown plan, and `Full_Course_Outline.md`. This is an original editorial framework, not an IB publication.

**Later update, 2026-09-26:** This guide preserves the earlier editorial plan and its historical statement that the learner's booklet had not yet arrived. The learner has since supplied the 2023 Version 1.0 AA HL booklet. The expanded lessons now cite checked printed rows. See [the booklet audit](FORMULA_BOOKLET_AUDIT.md) for edition details and cautions about PDF math extraction. The original 20 notes, 22 supplied notes and 50 paper transcriptions remain separate and unchanged.

## 1. Source boundaries and coverage

- Preserve the original 20 uploaded Unit 1 notes in their own collection, unedited. They supply a useful teaching pattern: definition, why the idea matters, formulas, worked examples, exam question types, common mistakes, and a short self-test. The master guide adds decision rules, exam checklists, and factorial drills. The countdown plan models a humane timed practice schedule, but its weekday dates and old unit-test durations are not general IB assessment advice.
- The outline lists 83 curriculum subtopics across Number and Algebra (16), Functions (16), Geometry and Trigonometry (18), Statistics and Probability (14), and Calculus (19). Its 3,981 claimed questions are counts from an unspecified bank, not 3,981 question texts supplied to this project. Never advertise these as questions available here.
- Preserve the 50 supplied Paper 1 and Paper 2 transcriptions as a separate **user-supplied, unverified** collection. A title that mentions a year or session does not verify provenance. Do not present those transcriptions as licensed IB papers or attach a fabricated official mark scheme.
- All new course lessons, practice questions, and marking guidance must be independently written. Label original practice explicitly. The school formula booklet is not yet attached, so booklet flags must say *provisional* until the exact edition is compared. A publicly available AA booklet can be used for a cross-check, but that does not prove that the student's copy matches.

## 2. Required lesson anatomy

Each of the 83 outline entries gets its own route and a substantive original lesson, not a duplicate placeholder. The page must identify its syllabus code, SL or AHL status, and prerequisite when useful. Use this sequence:

1. **Concept and why it works.** Define the object and explain the link to earlier ideas; distinguish the mathematical statement from a heuristic.
2. **Formula and conditions.** Render notation consistently, define variables and domain, give any convergence, sign, differentiability, independence, or existence condition. State the formula booklet status as provisional unless checked against the student's edition.
3. **Worked example.** Start with a specific question, show the selection of a method, intermediate steps, exact values when available, and a checked final answer. Include a second contrasting case for subtle topics when possible.
4. **Exam lens.** Say which paper style the *original practice* resembles. Paper 1 is non-technology; Papers 2 and 3 allow technology. Give useful method-mark reasoning without predicting a real IB question or guaranteeing its appearance.
5. **Common mistakes.** At least one mistake tied to this subtopic, with the correction and a reason; do not recycle a generic warning on every page.
6. **Try it.** Offer a short prompt with an answer or a linked original practice question. Keep answers separate from the question until requested.

Show several steps of algebra rather than jumping to a numeric result. Use both conceptual and computational explanation. Avoid em dashes in newly written text. Never copy the phrasing or exercises of third-party courses or official specimen papers.

## 3. Editorial precision from the uploaded notes

- Keep the index convention explicit: `u_n=u_1+(n-1)d`, not `u_1+nd`; a sum `Σ(k=a..b)` has `b-a+1` terms. Distinguish `S_n` and `u_n=S_n-S_(n-1)`.
- Before `S_∞=u_1/(1-r)`, state `|r|<1`. For generalized binomial series, distinguish positive integer indices (finite) from other rational indices (typically infinite), and translate `|t|<1` back to the original variable after factoring. Do not imply that all rational indices produce infinite series, since positive integers are rational too.
- In counting, ask whether order matters; for dependent stages, the multiplication principle still works if the number of choices at each stage is accounted for conditionally. The uploaded factorial note says it fails whenever stages are not independent; that is too strong.
- For financial models write `P(1+i/k)^(kt)` with **decimal** annual rate `i`, or `P(1+p/(100k))^(kt)` with **numeric percentage** `p`, never a hybrid `r%/100k`. Distinguish nominal from inflation-adjusted value and round only the final result.
- Source errata for the unedited uploaded financial note: `5000(1.003)^24 = 5372.70`, not `5371.42`; `10000(1.05)^3/(1.02)^3 = 10908.56`, not `10909.15`; `8000(1.04)^5/(1.015)^5 = 9034.96`, not `9034.55`. The originals remain readable as submitted. New lessons use corrected calculations.
- Proofs require the quantified domain, legitimate transformations, and a clear conclusion. An example disproves a universal claim but cannot prove one. A contradiction proof needs the explicit negation. An induction proof must show the base case, hypothesis, step, and conclusion.
- When comparing simulations and official exams, use the current official IB subject brief and exam schedule. For the first-assessment-2021 AA HL brief, Papers 1 and 2 carry 30% each, Paper 3 carries 20%, and the exploration carries 20%. These are assessment-component weights, **not** topic-frequency estimates or marks automatically earned in this app. The IB's 2026 schedule lists Paper 3 at 1 hour 15 minutes, whereas older briefs may show a different duration. Do not conflate a unit test with the diploma exam. A new curriculum starts teaching in 2027 with first assessment in 2029, so future cohorts should check their own specification.

## 4. Questions, schemes, and progress

Original practice questions have unique IDs, syllabus codes, level, paper, question text, expected answer, and a separately authored, step-based marking guide whose steps sum to the displayed maximum. Paper 3 tasks must be multi-part and investigative, not just relabeled Paper 1 drills. Technology availability should match the paper. Check every computed answer independently before publishing. Show *actual authored inventory* and empty states where no original item exists, never the outline's quoted counts. A manually entered score is self-reported, not examiner-verified. Award no marks for merely opening a page.

Preserve the provided past-paper transcription collection without inferring source, completeness, rights, or official status. Render source metadata exactly where supported and otherwise mark it uncertain. Stars/bookmarks, mock composition, and progress should survive local reloads in the encrypted profile. Share links can point to stable content IDs; do not put decrypted private profile data, assessment scores, or secrets in the URL.

## 5. Quality gates

Validate all 83 codes have non-empty, different lesson content and at least one correct worked example. Verify arithmetic by independent scripts or symbolic substitution. Check renderer syntax and links, paper membership, total mark sums, and that each published question exists in the filter results. Test offline bundled notes separately from the optional local-file switch. Confirm reduced-motion behavior and keyboard alternatives for drag and menus. Enforce Supabase RLS server-side; a client-side user ID check is not access control. Flag unverified booklet claims and unpublished question areas honestly.

**References for assessment and editorial checking:** IB Mathematics: analysis and approaches subject brief (first assessments 2021), https://ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf ; IB November 2026 examination schedule, https://ibo.org/globalassets/new-structure/programmes/dp/pdfs/november-2026-examination-schedule.pdf ; user-supplied notes and outline preserved under `source-material/supplied-unit1/` and `source-material/Full_Course_Outline.md` (not reproduced as official IB text).
