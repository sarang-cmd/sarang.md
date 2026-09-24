---
id: "11"
file: "11_Mathematical_Induction.md"
title: "Mathematical Induction"
category: "Proof"
tags: ["induction", "proof", "sums", "integers"]
order: 11
prev: "10_Proof_By_Contradiction.md"
next: "12_Induction_And_Divisibility.md"
---
# Mathematical Induction

**Mathematical induction** proves a statement for every integer from a specified starting point onward. Think of a chain: the base case starts it, and the inductive step connects each link to the next.

## Prove a sum formula

Let \(P(n)\) be the statement

$$1+2+\cdots+n=\frac{n(n+1)}{2}.$$

**Base case.** For \(n=1\), the left side is \(1\) and the right side is \(1(2)/2=1\).

**Inductive hypothesis.** Assume \(P(k)\) holds for some integer \(k\ge1\): \(1+\cdots+k=k(k+1)/2\).

**Inductive step.** Add the next term to both sides:

$$1+\cdots+k+(k+1)=\frac{k(k+1)}{2}+(k+1)=\frac{(k+1)(k+2)}{2}.$$

This is exactly \(P(k+1)\). The base case and step together establish the statement for all \(n\ge1\).

**Try it:** Use induction to prove \(1+3+5+\cdots+(2n-1)=n^2\).

> **Exam lens:** State where you use the hypothesis. Showing only the base case and the desired formula for \(k+1\) is not an inductive proof.
