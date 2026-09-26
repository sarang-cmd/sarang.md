---
title: "Geometric Sequences"
order: 3
category: "Sequences & Series"
tags: ["geometric", "sequences"]
prev: "02_Arithmetic_Sequences.md"
next: "04_Series_And_Sigma_Notation.md"
---

# Geometric Sequences

Taught alongside arithmetic sequences, right at the start of the unit.

## Definition

Each term is the previous term multiplied by a fixed **common ratio \(r\)**: \(u_{n+1}=u_n \times r\).
- \(r = u_{n+1}/u_n\), constant for every consecutive pair.
- \(r\) can be negative (alternating signs), a fraction, or greater than 1.

## Key Formula

$$u_n = u_1\, r^{\,n-1}$$

## Worked Examples

**1.** \(u_1=3\), \(r=2\). Find \(u_8\): \(3(2)^7=384\).

**2.** \(u_2=6\), \(u_5=48\). Find \(r\): \(r^3=48/6=8 \Rightarrow r=2\); \(u_1=6/2=3\).

**3. Negative ratio.** \(u_1=4\), \(r=-3\): terms \(4,-12,36,-108\) — watch the alternating sign.

**4. Solve for \(n\).** \(u_1=5, r=3\). Smallest \(n\) with \(u_n>1000\): \(3^{n-1}>200 \Rightarrow n-1>4.82 \Rightarrow n=6\).

## Question Types

- Find \(r\) and \(u_1\) given two terms — divide equations to eliminate \(u_1\) first.
- "Is this sequence geometric?" — check ratios across at least three consecutive pairs.
- Find smallest/largest \(n\) satisfying an inequality — logs (Paper 1) or GDC (Paper 2).
- Mixed "three numbers form a GP" problems — check both quadratic roots are valid (reject any making a term zero).

## Common Mistakes

- Confusing \(r^{n-1}\) with \(r^n\).
- Sign errors with negative \(r\) (odd powers stay negative).
- Dividing by a term that could be zero.
- Log rule errors when solving for \(n\).

## Self-Test

1. \(u_1=2\), \(r=-2\). Find \(u_6\).
2. \(u_3=20\), \(u_6=160\). Find \(r\) and \(u_1\).
3. Is \(8,4,2,1.5\) geometric? Justify.
4. Smallest \(n\) with \(u_n>500\) for \(u_1=4, r=1.5\).

**Answers:** 1. \(-64\). 2. \(r=2, u_1=5\). 3. Ratios \(0.5,0.5,0.75\) — not geometric. 4. \(n=13\).

---

**Category:** Sequences & Series

[← Arithmetic Sequences](02_Arithmetic_Sequences.md) · [Series & Sigma Notation →](04_Series_And_Sigma_Notation.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
