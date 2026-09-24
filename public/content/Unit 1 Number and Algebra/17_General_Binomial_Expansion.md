---
id: "17"
file: "17_General_Binomial_Expansion.md"
title: "General Binomial Expansion"
category: "Binomial Theorem"
tags: ["binomial series", "fractional powers", "negative powers", "convergence"]
order: 17
prev: "16_Binomial_Theorem_Positive_Integers.md"
next: "18_Binomial_Applications_And_Approximations.md"
---
# General Binomial Expansion

The binomial series extends the familiar theorem to exponents that are negative or fractional. Unlike the positive-integer case, it usually produces **infinitely many terms**.

## The first few terms

For a real exponent \(\alpha\) and \(\lvert x\rvert<1\),

$$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3+\cdots.$$

The coefficients are built by multiplying descending factors of \(\alpha\). For a positive integer exponent, one of those factors becomes zero and the series stops.

## Worked example

Set \(\alpha=-1\) and replace \(x\) by \(2x\):

$$(1+2x)^{-1}=1-2x+4x^2-8x^3+\cdots,\qquad |x|<\tfrac12.$$

The condition comes from \(\lvert 2x\rvert<1\), **not** merely \(\lvert x\rvert<1\).

**Try it:** Write the first four nonzero terms of \((1-x)^{-2}\). State the interval for which this series converges.

> **Exam lens:** When you substitute an expression for \(x\), update the validity condition as well as the coefficients.
