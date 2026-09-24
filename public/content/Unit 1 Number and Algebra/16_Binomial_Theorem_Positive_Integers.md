---
id: "16"
file: "16_Binomial_Theorem_Positive_Integers.md"
title: "Binomial Theorem: Positive Integers"
category: "Binomial Theorem"
tags: ["binomial theorem", "expansion", "coefficients", "positive integers"]
order: 16
prev: "15_Combinations_And_Binomial_Coefficients.md"
next: "17_General_Binomial_Expansion.md"
---
# Binomial Theorem: Positive Integers

The binomial theorem expands a power without multiplying the same brackets over and over. Its coefficients count the ways to choose where the second term appears in a product.

## The general expansion

For a non-negative integer \(n\),

$$(a+b)^n=\sum_{r=0}^{n}\binom{n}{r}a^{n-r}b^r.$$

The term with index \(r\) is \(T_{r+1}=\binom{n}{r}a^{n-r}b^r\). The index starts at \(0\), while the **term number** starts at \(1\).

## Worked example

Set \(a=2\), \(b=x\), and \(n=4\):

$$(2+x)^4=16+32x+24x^2+8x^3+x^4.$$

To find only the coefficient of \(x^2\), there is no need to write the whole expansion. Set \(r=2\): \(\binom{4}{2}2^{4-2}=6(4)=24\).

**Try it:** Find the coefficient of \(x^3\) in \((1+2x)^5\) using the general term.

> **Exam lens:** Choose \(r\) by matching the power of \(x\); then check that the total degree in each term is \(n\).
