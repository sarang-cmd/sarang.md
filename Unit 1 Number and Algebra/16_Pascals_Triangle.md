---
title: "Pascal's Triangle"
order: 16
category: "Binomial Theorem"
tags: ["binomial", "pascal"]
prev: "15_Combinations.md"
next: "17_Binomial_Theorem_Positive_Integer_n.md"
---

# Pascal's Triangle

The bridge between counting (combinations) and the binomial theorem.

## Construction

Each row starts and ends with 1; every other entry is the sum of the two entries above it.

```
Row 0:         1
Row 1:        1 1
Row 2:       1 2 1
Row 3:      1 3 3 1
Row 4:     1 4 6 4 1
Row 5:    1 5 10 10 5 1
```

## Connection to Combinations

Row \(n\), entry \(r\) (counting from 0) equals \({}^nC_r\). Row 4: \({}^4C_0,{}^4C_1,{}^4C_2,{}^4C_3,{}^4C_4 = 1,4,6,4,1\) — matches exactly.

## Pascal's Rule (the "addition" pattern)

$$ {}^{n}C_{r} = {}^{n-1}C_{r-1} + {}^{n-1}C_r $$

This IS the "sum of the two above" pattern, written algebraically — a common short proof question in its own right (can be shown directly by expanding the factorial definitions and combining fractions).

## Why It Matters for the Binomial Theorem

The coefficients of \((a+b)^n\) when fully expanded are exactly row \(n\) of Pascal's Triangle: \((a+b)^4 = a^4+4a^3b+6a^2b^2+4ab^3+b^4\), coefficients \(1,4,6,4,1\).

## Worked Examples

**1.** Write row 6 of Pascal's Triangle. \(1,6,15,20,15,6,1\).

**2.** Verify row 6 matches \({}^6C_r\): \({}^6C_0=1,{}^6C_1=6,{}^6C_2=15,{}^6C_3=20\) — matches by symmetry for the rest.

**3.** Prove Pascal's Rule: \({}^{n-1}C_{r-1}+{}^{n-1}C_r = \frac{(n-1)!}{(r-1)!(n-r)!}+\frac{(n-1)!}{r!(n-r-1)!}\). Common denominator work shows this simplifies to \(\frac{n!}{r!(n-r)!}={}^nC_r\). (A full algebraic LHS-to-RHS proof — links directly to the Deductive Proof page.)

## Question Types

- Write out a specific row of Pascal's Triangle.
- Use Pascal's Triangle to quickly find binomial coefficients for small \(n\) (faster than computing \({}^nC_r\) by hand for \(n\le 6\) or so).
- Prove Pascal's Rule algebraically.
- Identify a coefficient's position and connect it to \({}^nC_r\).

## Common Mistakes

- Miscounting positions (remember rows and entries are typically indexed starting at 0).
- Forgetting the triangle is symmetric — can save work by not recomputing the second half of a row.
- For large \(n\), trying to build the whole triangle by hand instead of computing \({}^nC_r\) directly.

## Self-Test

1. Write row 5 of Pascal's Triangle.
2. What is \({}^7C_3\), using either Pascal's Triangle or the formula?
3. State Pascal's Rule algebraically.
4. Why are Pascal's Triangle entries symmetric within each row?

**Answers:** 1. \(1,5,10,10,5,1\). 2. 35. 3. \({}^nC_r={}^{n-1}C_{r-1}+{}^{n-1}C_r\). 4. Because \({}^nC_r={}^nC_{n-r}\) — choosing r items to include is equivalent to choosing \(n-r\) to exclude.

---

**Category:** Binomial Theorem

[← Combinations](15_Combinations.md) · [Binomial Theorem (Positive Integer n) →](17_Binomial_Theorem_Positive_Integer_n.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
