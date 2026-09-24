---
id: "06"
file: "06_Infinite_Geometric_Series.md"
title: "Infinite Geometric Series"
category: "Sequences & Series"
tags: ["geometric", "infinite series", "convergence", "sum"]
order: 6
prev: "05_Recursive_Sequences.md"
next: "07_Convergence_And_Limits.md"
---
# Infinite Geometric Series

An infinite list of terms can have a **finite sum** when its terms shrink fast enough. For a geometric series with first term \(u_1\) and ratio \(r\), this happens precisely when \(\lvert r\rvert<1\).

## The infinite sum

The finite sum is \(S_n=u_1(1-r^n)/(1-r)\). When \(\lvert r\rvert<1\), the quantity \(r^n\) approaches zero as \(n\to\infty\), so

$$S_\infty=\frac{u_1}{1-r},\qquad |r|<1.$$

The condition is part of the answer. If \(r=1\) or \(\lvert r\rvert>1\), the formula must **not** be used for an infinite sum.

## Worked example

For \(12+6+3+\tfrac32+\cdots\), we have \(u_1=12\) and \(r=\tfrac12\). Therefore,

$$S_\infty=\frac{12}{1-\frac12}=24.$$

The first four terms sum to \(22.5\), already close to \(24\). Each new term closes half the remaining gap.

**Try it:** Does \(8-4+2-1+\cdots\) converge? If so, find its sum, paying attention to the negative ratio.

> **Exam lens:** Write \(\lvert r\rvert<1\) before substituting into \(S_\infty\).
