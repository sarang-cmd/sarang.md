---
id: "03"
file: "03_Geometric_Sequences_And_Series.md"
title: "Geometric Sequences & Series"
category: "Sequences & Series"
tags: ["geometric", "sequence", "series", "common ratio"]
order: 3
prev: "02_Arithmetic_Sequences_And_Series.md"
next: "04_Sigma_Notation_And_Summations.md"
---
# Geometric Sequences & Series

A **geometric sequence** multiplies by a fixed common ratio \(r\). For example, \(3,6,12,24,\ldots\) has \(r=2\). A negative ratio makes the signs alternate.

## The general term

Starting from the first term \(u_1\), multiply by \(r\) exactly \(n-1\) times:

$$u_n=u_1r^{n-1}.$$

For \(r\ne1\), the sum of the first \(n\) terms is

$$S_n=u_1\frac{1-r^n}{1-r}.$$

You may also see \(u_1(r^n-1)/(r-1)\); the two forms are equivalent.

## Worked example

For \(3,6,12,\ldots\), find \(u_6\) and \(S_6\).

- \(u_6=3(2^5)=96\).
- \(S_6=3(2^6-1)=189\).

As a quick check, \(3+6+12+24+48+96=189\). Notice that \(S_6\) is larger than \(u_6\), as it must be for positive terms.

**Try it:** The first term is \(80\) and the common ratio is \(\tfrac12\). Find the fifth term and the sum of the first five terms.

> **Exam lens:** Decide whether \(r\) is a multiplier or an amount added. Mixing up \(r\) and \(d\) is a common avoidable error.
