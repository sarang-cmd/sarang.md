---
title: "Sum of an Arithmetic Series"
order: 5
category: "Sequences & Series"
tags: ["arithmetic", "sum"]
prev: "04_Series_And_Sigma_Notation.md"
next: "06_Sum_Of_Geometric_Series.md"
---

# Sum of an Arithmetic Series

## Formulas (both in the formula booklet)

$$S_n=\frac{n}{2}\big(2u_1+(n-1)d\big) \quad\text{or}\quad S_n=\frac{n}{2}(u_1+u_n)$$

Use the first when you know \(u_1\) and \(d\) but not \(u_n\); use the second when you already have (or can quickly find) the first and last term.

## Worked Examples

**1.** \(u_1=5,d=3\), first 20 terms: \(S_{20}=10(10+57)=670\).

**2.** \(4+7+10+\cdots+61\): first find \(n\): \(61=4+(n-1)3 \Rightarrow n=20\); \(S_{20}=10(4+61)=650\).

**3. Reverse problem.** \(u_1=2, d=4, S_n=440\): \(440=2n^2 \Rightarrow n^2=220\) — not a clean integer, a signal to re-check given numbers (a good self-check habit).

**4. Word problem.** 20 rows, row 1 has 15 seats, +2 seats per row: \(S_{20}=10(30+38)=680\) seats.

## Question Types

- Find \(S_n\) given \(u_1\) and \(d\) — direct substitution.
- Find the sum of an explicit series with a visible last term — find \(n\) first.
- Find \(n\), \(d\), or \(u_1\) given \(S_n\) — rearrange, often a quadratic in \(n\); reject non-integer/negative roots.
- Real-world context (stacking, seating, saving) — translate to AP language first.
- Proving the sum formula itself via induction (see the Proof by Induction page).

## Common Mistakes

- \(n\) instead of \((n-1)\) inside the formula.
- Guessing \(n\) instead of solving for it when the last term is given.
- Sign errors when \(d\) is negative.
- Forgetting to reject invalid roots from a quadratic in \(n\).

## Self-Test

1. Sum of first 25 terms, \(u_1=-3,d=5\).
2. Sum of \(6+11+16+\cdots+101\).
3. \(u_1=10,d=-2,S_n=-60\). Find \(n\).
4. 12 layers of logs, top layer 3 logs, +2 per layer down. Total logs?

**Answers:** 1. 1425. 2. 1070. 3. \(n=15\). 4. 168.

---

**Category:** Sequences & Series

[← Series & Sigma Notation](04_Series_And_Sigma_Notation.md) · [Sum of a Geometric Series →](06_Sum_Of_Geometric_Series.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
