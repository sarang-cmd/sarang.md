# Supplied AA HL formula booklet: verified cross-check

The learner supplied `AAHL Formula Booklet 2023 - English (V1.0).pdf`. Its cover identifies it as **Mathematics: analysis and approaches HL formula booklet**, © International Baccalaureate Organization 2023, **Version 1.0**, for first examinations 2021. The supplied PDF has 13 PDF pages. Its cover is PDF page 1, page 2 is blank, contents are PDF page 3, and printed booklet page *n* appears at PDF page *n + 2*. These identifiers were read from this exact attachment, not inferred from a similarly named public edition.

The PDF is **not bundled in the static site or source ZIP**. The source file remains the learner's attachment. Lessons cite the edition and printed plus PDF page for the booklet rows that were checked. Other methods and extensions are taught independently. A booklet containing a formula does not relieve a learner of choosing it, giving conditions, deriving related steps, or verifying an answer. The booklet alone is not a complete syllabus guide.

| Printed page (PDF page) | Directly listed rows and topics |
| --- | --- |
| 2 (4) | 1.2, 1.3, 1.8, 1.4, 1.5, 1.7, 1.9: sequences, sums, interest, logs, binomial theorem |
| 3 (5) | 1.10, 1.12, 1.13, 1.14; 2.1, 2.6, 2.7, 2.12: counting, complex form, lines, quadratics, roots |
| 4 (6) | Prior-learning area/volume/coordinate formulas and 3.1 three-dimensional distance, midpoint, pyramid volume |
| 5 (7) | 3.2, 3.4, 3.5, 3.6, 3.9: triangle rules, sectors, identities |
| 6 (8) | 3.10, 3.12, 3.13, 3.14, 3.16, 3.17: compound angles, vectors, lines, planes |
| 7 (9) | 4.2, 4.3, 4.5, 4.6, 4.7, 4.8, 4.12, 4.13: summaries, probability, distribution facts, z-scores, Bayes |
| 8 (10) | 4.14: variance, transformations and continuous expectation |
| 9 (11) | 5.12, 5.3, 5.6, 5.15: first principles and standard derivative rules |
| 10 (12) | 5.9, 5.5, 5.10, 5.15, 5.16: motion, integration rules, integration by parts |
| 11 (13) | 5.11, 5.17, 5.18, 5.19: areas, volumes, Euler, integrating factor, Maclaurin |

**Careful reading points:**

1. Printed page 3 includes both combinations and **permutations** under 1.10. The preserved earlier note `19_Master_Formula_Sheet_And_Old_Test_Strategy.md` labels the permutation formula “No” under “In Booklet?”. That note remains byte-for-byte unchanged as requested; follow the supplied booklet for this edition instead.
2. Printed page 2 gives compound interest with a **numeric annual percentage** in a denominator containing `100k` and an exponent `kn`. With decimal annual rate `i`, write `PV(1+i/k)^(kt)`; with numeric percentage `p`, write `PV(1+p/(100k))^(kt)`. Do not divide a decimal rate by 100 again.
3. Printed page 10 explicitly distinguishes **distance** `∫|v(t)| dt` from **displacement** `∫v(t) dt`. Plain-text PDF extraction dropped the absolute-value bars in our extraction, so this line was checked visually. The new course and worked questions use the correct distinction.
4. Printed page 7 lists the binomial distribution notation, mean and variance; an entry for a model does not necessarily print every possible probability calculation. Derive the probability of exactly `k` successes from choosing positions and multiplying trial probabilities.
5. No direct row for a supplied outline code does not prove its tools are absent from the booklet: a related prerequisite may be listed in a different row, for example the relations used under 3.11 appear in sections 3.5, 3.6 or 3.9. The lesson notes say **no dedicated printed row**, not that a result is definitely unavailable.

The mapping used by the generator is in `source-material/formula-booklet-reference.mjs`. Machine-extracted PDF math can omit or reorder symbols. An uploaded PDF chosen **inside the tutor's own settings or the encrypted profile** is a separate browser action: the chat attachment does not automatically populate a user's browser profile. Check a printed page visually before citing a specific equation in an exam or an AI-assisted explanation. This reference is not a reproduction of an official IB mark scheme or a replacement for the actual booklet.
