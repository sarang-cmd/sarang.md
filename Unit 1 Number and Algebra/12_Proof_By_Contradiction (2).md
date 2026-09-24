---
title: "Proof by Contradiction"
order: 12
category: "Proof"
tags: ["proof", "contradiction"]
prev: "11_Proof_By_Counterexample.md"
next: "13_Counting_Fundamental_Principle_And_Factorials.md"
---

# Proof by Contradiction

Flagged in the unit plan as potentially covered in a later unit — check with your teacher whether it's on this exact test; treat it as lower priority relative to the other three proof pages if time is tight, but it's included here fully.

## The Core Logic

1. Assume the **opposite** of what you want to prove.
2. Follow logically valid steps from that assumption.
3. Reach a contradiction — something clearly false or conflicting with a known fact or the assumption itself.
4. Conclude the assumption must be false, so the original statement is true.

## The Required Skeleton

1. "Assume, for contradiction, that [negation of the statement] is true."
2. Derive consequences.
3. Reach a contradiction, referencing exactly what is contradicted.
4. "This is a contradiction. Therefore, our assumption was false, and [statement] must be true."

## Classic Worked Example — Irrationality of √2

Assume \(\sqrt2=\frac ab\) in lowest terms. Squaring: \(a^2=2b^2\), so \(a^2\) is even, so \(a\) is even; write \(a=2c\). Then \(4c^2=2b^2 \Rightarrow b^2=2c^2\), so \(b\) is also even. But then \(a\) and \(b\) share a factor of 2, contradicting "lowest terms." Therefore \(\sqrt2\) is irrational. ∎

## Second Style — No Smallest Positive Rational

Assume a smallest positive rational \(q\) exists. Then \(q/2\) is also positive rational and \(q/2<q\), contradicting that \(q\) was smallest. Therefore no smallest positive rational exists. ∎

## Question Types (if examinable)

- Prove a specific number is irrational (same structure as √2).
- Prove there is no largest/smallest X — assume one exists, construct a larger/smaller one.
- Prove an equation has no solution in a given number set.

## Common Mistakes

- Forgetting to explicitly state the assumption as the negation.
- Unjustified logical leaps without showing why the result is impossible.
- Confusing contradiction (proves a universal statement true) with counterexample (disproves a universal statement).
- Not identifying exactly what is contradicted.

## Self-Test

1. What's the first sentence of any contradiction proof?
2. What even/odd square fact is used twice in the √2 proof?
3. Contradiction vs. counterexample — key difference in one sentence?
4. Sketch how to start proving √3 is irrational.

**Answers:** 1. "Assume, for contradiction, that [negation] is true." 2. A square is even iff the original number is even. 3. Contradiction proves a universal statement by showing its negation is impossible; counterexample disproves one by exhibiting a failing case. 4. Assume \(\sqrt3=a/b\) in lowest terms, square to get \(a^2=3b^2\), show 3 divides \(a\), substitute \(a=3c\), show 3 divides \(b\) too — contradiction.

---

**Category:** Proof

[← Disproof by Counterexample](11_Proof_By_Counterexample.md) · [Counting Principles & Factorials →](13_Counting_Fundamental_Principle_And_Factorials.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
