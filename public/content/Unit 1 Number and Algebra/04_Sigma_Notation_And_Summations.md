---
id: "04"
file: "04_Sigma_Notation_And_Summations.md"
title: "Sigma Notation & Summations"
category: "Sequences & Series"
tags: ["sigma", "summation", "series", "notation"]
order: 4
prev: "03_Geometric_Sequences_And_Series.md"
next: "05_Recursive_Sequences.md"
---
# Sigma Notation & Summations

Sigma notation compresses a long addition into one expression. The lower and upper numbers tell you where the index starts and stops; the expression to the right tells you what to add.

$$\sum_{k=1}^{n} a_k = a_1+a_2+\cdots+a_n.$$

For example, \(\sum_{k=1}^{4}(3k-2)=1+4+7+10\). Always substitute the *first* index once before reaching for a formula.

## Two useful identities

$$\sum_{k=1}^{n}k=\frac{n(n+1)}{2},\qquad
\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}.$$

Summation is linear, so constants can be factored out and sums can be split:

$$\sum_{k=1}^{10}(3k-2)=3\sum_{k=1}^{10}k-2\sum_{k=1}^{10}1=3(55)-20=145.$$

Here \(\sum_{k=1}^{10}1=10\), **not** \(1\). There are ten copies of the constant term.

**Try it:** Expand the first three terms of \(\sum_{j=2}^{6}(2j+1)\), then evaluate the entire sum.

> **Exam lens:** If the starting index is not \(1\), adjust the formula or subtract the terms that precede it.
