---
id: "07"
file: "07_Convergence_And_Limits.md"
title: "Convergence & Limits"
category: "Sequences & Series"
tags: ["limits", "convergence", "sequence", "infinity"]
order: 7
prev: "06_Infinite_Geometric_Series.md"
next: "08_Applications_Of_Sequences_And_Series.md"
---
# Convergence & Limits

A sequence **converges** if its terms approach a single finite value. A sequence may look stable on a calculator for a while without having a finite limit, so a calculation should support—not replace—a reason.

## Compare dominant terms

For a rational expression in \(n\), divide by the highest power of \(n\). For example,

$$\lim_{n\to\infty}\frac{2n^2+3}{5n^2-1}
=\lim_{n\to\infty}\frac{2+3/n^2}{5-1/n^2}
=\frac25.$$

Both small fractions approach zero as \(n\) grows. It is the **highest powers** that control the limit here.

## Geometric behaviour at a glance

| Common ratio | Behaviour of \(r^n\) as \(n\to\infty\) |
| --- | --- |
| \(\lvert r\rvert<1\) | Approaches \(0\) |
| \(r=1\) | Remains \(1\) |
| \(r=-1\) | Oscillates between \(1\) and \(-1\) |
| \(\lvert r\rvert>1\) | Grows in magnitude |

**Try it:** Determine \(\lim_{n\to\infty}(4n^3+n)/(2n^3-7)\). What changes if the denominator has degree \(4\) instead?

> **Exam lens:** State which terms tend to zero. Writing a limit without a reason can hide an incorrect cancellation.
