---
title: "Infinite Geometric Series"
order: 7
category: "Sequences & Series"
tags: ["infinite", "convergence"]
prev: "06_Sum_Of_Geometric_Series.md"
next: "08_Financial_Applications_Compound_Interest_Depreciation.md"
---

# Infinite Geometric Series and the Sum to Infinity

A short topic, but it carries a scored condition that's very easy to forget under pressure.

## The Concept

As \(n\to\infty\), partial sums approach a finite value only if terms shrink toward zero, i.e. \(|r|<1\). If \(|r|\ge1\), the series diverges and \(S_\infty\) does not exist.

## Formula (in the formula booklet)

$$S_\infty=\frac{u_1}{1-r}, \qquad \text{valid only for } |r|<1$$

**Stating this convergence condition is very often a scored step on its own**, separate from the numeric answer.

## Worked Examples

**1.** \(u_1=8,r=0.5\): check \(|0.5|<1\) ✓; \(S_\infty=16\).

**2.** \(u_1=6,r=-1/3\): \(S_\infty=4.5\).

**3.** \(u_1=5,r=1.5\): \(|1.5|>1\) → diverges, no sum to infinity.

**4. Reverse.** \(u_1=12,S_\infty=20\): \(1-r=0.6 \Rightarrow r=0.4\).

**5. Recurring decimal.** \(0.\overline{45}\): GP with \(u_1=0.45,r=0.01\); \(S_\infty=0.45/0.99=5/11\).

## Question Types

- Find \(S_\infty\) — always state the convergence check first.
- "Does this converge? Explain." — conceptual, check \(|r|\) only.
- Given \(S_\infty\), find \(u_1\) or \(r\).
- Convert a recurring decimal to a fraction.
- Bouncing-ball total distance (infinite decreasing bounce heights) — remember most bounces count height twice (up and down).

## Common Mistakes

- **Most common lost mark:** forgetting to state \(|r|<1\).
- Applying the formula when \(|r|\ge1\).
- Sign errors in \((1-r)\) when \(r\) is negative.
- Forgetting bounces contribute height twice except sometimes the first drop.

## Self-Test

1. \(S_\infty\) for \(u_1=9,r=2/3\).
2. Does \(u_1=4,r=-1.2\) converge? Justify.
3. \(u_1=15,S_\infty=25\). Find \(r\).
4. Express \(0.\overline{3}\) as a fraction.

**Answers:** 1. 27. 2. No, \(|-1.2|>1\), diverges. 3. \(r=0.4\). 4. \(1/3\).

---

**Category:** Sequences & Series

[← Sum of a Geometric Series](06_Sum_Of_Geometric_Series.md) · [Financial Applications →](08_Financial_Applications_Compound_Interest_Depreciation.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
