---
id: "10"
file: "10_Proof_By_Contradiction.md"
title: "Proof by Contradiction"
category: "Proof"
tags: ["proof", "contradiction", "irrational", "logic"]
order: 10
prev: "09_Proof_By_Deduction.md"
next: "11_Mathematical_Induction.md"
---
# Proof by Contradiction

In a **proof by contradiction**, assume the opposite of what you want to show. If this assumption leads to an impossibility, the original claim must be true.

## Classic example: \(\sqrt2\) is irrational

Suppose \(\sqrt2=a/b\), where \(a\) and \(b\) are integers with no common factor and \(b\ne0\). Squaring gives

$$a^2=2b^2.$$

So \(a^2\) is even, which makes \(a\) even; write \(a=2k\). Substituting gives \(4k^2=2b^2\), hence \(b^2=2k^2\). Therefore \(b\) is even too.

But then \(a\) and \(b\) share a factor of \(2\), contradicting the assumption that the fraction was in lowest terms. Thus \(\sqrt2\) cannot be rational.

## Keep the contradiction visible

The impossible conclusion must conflict with a clearly stated assumption. Saying only “this is a contradiction” without naming what clashes can leave a logical gap.

**Try it:** Assume that the largest integer exists. What happens if you add \(1\) to that integer?

> **Exam lens:** Write the conclusion after reaching the contradiction: “Therefore the initial assumption is false, so …”.
