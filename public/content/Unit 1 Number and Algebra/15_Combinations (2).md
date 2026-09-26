---
title: "Combinations"
order: 15
category: "Counting"
tags: ["counting", "combinations"]
prev: "14_Permutations.md"
next: "16_Pascals_Triangle.md"
---

# Combinations

Taught together with permutations.

## Definition

An **unordered** selection — choosing the same group in a different order counts as the same combination.

## Formula (in the formula booklet)

$$ {}^{n}C_{r} = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

Relationship: \({}^nC_r = \frac{{}^nP_r}{r!}\).

## Key Properties

- \({}^nC_0={}^nC_n=1\)
- \({}^nC_r={}^nC_{n-r}\)
- \({}^nC_1=n\)

## Worked Examples

**1.** Committee of 4 from 10: \({}^{10}C_4=210\).

**2. Must include X.** Choose remaining 3 from 9: \({}^9C_3=84\).

**3. Must exclude Y.** Choose 4 from remaining 9: \({}^9C_4=126\).

**4. Split groups.** 6 boys, 5 girls, team of 4 with exactly 2 each: \({}^6C_2\times{}^5C_2=15\times10=150\).

**5. Combination then permutation.** Committee of 4 from 10, then president+secretary from within: \({}^{10}C_4\times{}^4P_2=210\times12=2520\).

## Decision Test

Ask: if I select the same items in a different order, is that a different outcome? YES → permutation/FCP. NO → combination.

Trigger words: "arrange," "rank," "code," distinct roles → permutation. "Choose," "group," "committee," "hand" → combination.

## Common Mistakes

- Using \({}^nC_r\) for a problem with secretly ordered roles.
- Not reducing both \(n\) and \(r\) together when a specific person must be included.
- Adding instead of multiplying independent selection stages.
- Forgetting the \({}^nC_r={}^nC_{n-r}\) symmetry.
- Mishandling "at least" wording (often needs complementary counting).

## Self-Test

1. Hand of 5 cards from 52?
2. From 8 men, 6 women: committee of 5 with exactly 3 men, 2 women?
3. From 12 people, committees of 5 excluding a specific person Z?
4. Committee of 3 from 9, then designate a chairperson?

**Answers:** 1. 2,598,960. 2. 840. 3. 462. 4. 252.

---

**Category:** Counting

[← Permutations](14_Permutations.md) · [Pascal's Triangle →](16_Pascals_Triangle.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
