---
title: "Permutations"
order: 14
category: "Counting"
tags: ["counting", "permutations"]
prev: "13_Counting_Fundamental_Principle_And_Factorials.md"
next: "15_Combinations.md"
---

# Permutations

Builds directly on factorials.

## Definition

An **ordered** arrangement — swapping two items creates a different permutation. Use whenever position/order/ranking matters.

## Formula

$$ {}^{n}P_{r} = \frac{n!}{(n-r)!}$$

Generally **not printed in the formula booklet** — know it from memory or derive via FCP.

## Special Case r = n

Arranging all \(n\) items: \(n!\) ways.

## Worked Examples

**1.** 3 medals to 8 runners: \({}^8P_3=8\times7\times6=336\).

**2.** 6 books on a shelf: \(6!=720\).

**3. "Together" restriction.** 5 people, 2 must sit together: treat as a block → \(4!\times2!=48\).

**4. "Not together" (complementary counting).** \(5!-48=72\).

**5. Repeated letters.** "BANANA": \(\frac{6!}{3!2!}=60\).

**6. Circular arrangement.** 5 people around a table: \((5-1)!=24\).

## Question Types

- How many ways to assign r positions/prizes from n people — direct \({}^nP_r\).
- Arrangements of n distinct items — \(n!\).
- "Together"/"not together" restrictions — block method or complementary counting.
- Distinct arrangements of a word with repeats — divide by repeat factorials.
- Circular arrangements — \((n-1)!\).

## Common Mistakes

- Using \({}^nC_r\) when order matters (or vice versa).
- Forgetting to divide by repeat factorials.
- Forgetting to multiply by internal block arrangements in "together" problems.
- Trying to count "not together" directly instead of using complementary counting.
- Forgetting to divide by rotational symmetry in circular arrangements.

## Self-Test

1. President, VP, secretary from 10 candidates?
2. Distinct arrangements of "STATISTICS" (S×3,T×3,A×1,I×2,C×1)?
3. 6 friends in a row, two refuse to sit together — valid arrangements?
4. 7 people around a circular table?

**Answers:** 1. 720. 2. 50,400. 3. 480. 4. 720.

---

**Category:** Counting

[← Counting Principles & Factorials](13_Counting_Fundamental_Principle_And_Factorials.md) · [Combinations →](15_Combinations.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
