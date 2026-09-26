---
id: "18"
file: "18_Binomial_Applications_And_Approximations.md"
title: "Binomial Approximations & Applications"
category: "Binomial Theorem"
tags: ["approximation", "binomial series", "error", "applications"]
order: 18
prev: "17_General_Binomial_Expansion.md"
next: "19_Synthesis_And_Exam_Practice.md"
---
# Binomial Approximations & Applications

A short binomial expansion is a useful approximation when the quantity inside the brackets is close to \(1\). The closer the input is to \(1\), the smaller the discarded higher-power terms tend to be.

## Approximate a square root

For small \(x\), the first three terms of the general expansion give

$$\sqrt{1+x}=(1+x)^{1/2}\approx1+\frac{x}{2}-\frac{x^2}{8}.$$

To estimate \(\sqrt{1.04}\), use \(x=0.04\):

$$\sqrt{1.04}\approx1+0.02-0.0002=1.0198.$$

A calculator gives about \(1.0198039\), so this approximation is accurate to four decimal places. The value \(\lvert x\rvert=0.04\) is safely inside the condition \(\lvert x\rvert<1\).

## Keep the approximation honest

- State how many nonzero terms you kept.
- Check that the substituted value lies in the series' validity range.
- Don't round intermediate coefficients too early.
- Compare with a calculator if the question permits it.

**Try it:** Use two nonzero terms of \((1+x)^{-1}\) to estimate \(1/1.02\). Is your estimate above or below the calculator value?

> **Exam lens:** The symbol \(\approx\) matters. A truncated series is generally not an exact equality.
