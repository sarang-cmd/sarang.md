---
title: "Series & Sigma Notation"
order: 4
category: "Sequences & Series"
tags: ["sigma", "series"]
prev: "03_Geometric_Sequences.md"
next: "05_Sum_Of_Arithmetic_Series.md"
---

# Series and Sigma Notation

Taught right after the two sequence types, before the sum formulas — the translation layer between a sequence and a sum.

## Sequence vs. Series

- A sequence is a list of terms: \(u_1,u_2,u_3,\dots\)
- A series is the **sum** of the terms: \(u_1+u_2+u_3+\cdots\)
- \(S_n\) = sum of the first \(n\) terms.
- \(u_n = S_n - S_{n-1}\) for \(n\ge2\), and \(u_1=S_1\) — tested directly and often forgotten.

## Sigma Notation

$$\sum_{k=a}^{b} f(k) = f(a)+f(a+1)+\cdots+f(b)$$

Number of terms = \(b-a+1\) — the most-missed detail in sigma questions.

## Manipulation Rules

- \(\sum_{k=1}^n c = nc\)
- \(\sum [f(k)+g(k)] = \sum f(k) + \sum g(k)\)
- \(\sum c\cdot f(k) = c\sum f(k)\)
- \(\sum_{k=1}^n f(k) = \sum_{k=1}^m f(k) + \sum_{k=m+1}^n f(k)\)

## Worked Examples

**1.** \(\sum_{k=1}^4(2k+1)=3+5+7+9=24\).

**2.** \(\sum_{k=1}^{10}3(2)^{k-1}\) is geometric with \(u_1=3, r=2\), 10 terms — recognize this pattern instantly.

**3.** \(\sum_{k=5}^{12}k^2\) has \(12-5+1=8\) terms, not 12.

**4.** \(S_n=n^2+3n\). Find \(u_5\): \(u_5=S_5-S_4=(40)-(28)=12\).

## Question Types

- Write a series in sigma notation — identify the general-term pattern first (AP or GP form).
- Expand and evaluate a sigma expression.
- Given \(S_n\), find a specific term — use \(u_k=S_k-S_{k-1}\).
- State whether a sigma sum is arithmetic/geometric and find its sum (bridges into sum formulas).

## Common Mistakes

- Miscounting terms (off-by-one on \(b-a+1\)).
- Forgetting \(u_n=S_n-S_{n-1}\) and just substituting into \(S_n\) directly.
- Splitting sums over multiplication of two different functions of \(k\) (invalid).
- Sign errors with alternating summands.

## Self-Test

1. Evaluate \(\sum_{k=1}^5(3k-2)\).
2. How many terms in \(\sum_{k=7}^{20}k\)?
3. \(S_n=2n^2-n\). Find \(u_4\).
4. Write \(4+8+16+32+64\) in sigma notation.

**Answers:** 1. 35. 2. 14. 3. 13. 4. \(\sum_{k=1}^5 4(2)^{k-1}\).

---

**Category:** Sequences & Series

[← Geometric Sequences](03_Geometric_Sequences.md) · [Sum of an Arithmetic Series →](05_Sum_Of_Arithmetic_Series.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
