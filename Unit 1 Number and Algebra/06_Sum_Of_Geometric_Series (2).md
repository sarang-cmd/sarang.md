---
title: "Sum of a Geometric Series"
order: 6
category: "Sequences & Series"
tags: ["geometric", "sum"]
prev: "05_Sum_Of_Arithmetic_Series.md"
next: "07_Infinite_Geometric_Series.md"
---

# Sum of a (Finite) Geometric Series

## Formula (in the formula booklet)

$$S_n=\frac{u_1(r^n-1)}{r-1}=\frac{u_1(1-r^n)}{1-r}, \quad r\ne1$$

Use whichever form avoids a negative denominator. If \(r=1\), the formula is undefined (division by zero) — every term is equal, so \(S_n=n\cdot u_1\) directly.

## Worked Examples

**1.** \(u_1=3,r=2\), \(S_{10}\): \(3(1023)=3069\).

**2. Fractional ratio.** \(u_1=100,r=0.5\), \(S_6\approx196.875\).

**3. Negative ratio.** \(u_1=2,r=-3\), \(S_5\): \((-3)^5=-243\) (odd power stays negative) → \(S_5=122\).

**4. Reverse problem.** \(u_1=5,r=2,S_n=635\): \(2^n-1=127 \Rightarrow 2^n=128 \Rightarrow n=7\).

## Question Types

- Find \(S_n\) given \(u_1,r,n\) — watch parentheses/order of operations with negative \(r\).
- Find \(n\) given \(S_n\) — isolate \(r^n\), solve with logs or GDC.
- Find \(r\) or \(u_1\) given \(S_n\) and another condition — may need simultaneous solving with the nth-term formula.
- Word problems with fixed % growth/decay summed over periods.
- "Explain why the formula fails for r=1" — a free conceptual mark.

## Common Mistakes

- Sign errors with negative \(r\) and odd exponents.
- Missing parentheses around \((r^n-1)\).
- Not recognizing \(r=1\) breaks the formula.
- Forgetting \(n\) must be a positive integer.
- Log rule errors: \(\log(r^n)=n\log(r)\), not \(n\times\log\times r\).

## Self-Test

1. \(S_8\) for \(u_1=4,r=3\).
2. \(S_5\) for \(u_1=-2,r=-2\).
3. \(u_1=10,r=1.2,S_n\approx133.6\). Find \(n\).
4. Why does the formula fail at \(r=1\)?

**Answers:** 1. 13120. 2. -22. 3. \(n=7\). 4. Division by zero in the denominator \((r-1)\); all terms are equal so \(S_n=n\,u_1\) instead.

---

**Category:** Sequences & Series

[← Sum of an Arithmetic Series](05_Sum_Of_Arithmetic_Series.md) · [Infinite Geometric Series →](07_Infinite_Geometric_Series.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
