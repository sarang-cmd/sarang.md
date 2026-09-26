---
title: "Counting Principles & Factorials"
order: 13
category: "Counting"
tags: ["counting", "factorials", "fcp"]
prev: "12_Proof_By_Contradiction.md"
next: "14_Permutations.md"
---

# Counting: The Fundamental Counting Principle & Factorials

The foundation for permutations and combinations — and where factorial fluency is built.

## The Fundamental Counting Principle (FCP)

If a task has independent stages with \(m_1, m_2, \dots\) ways each, the total ways to complete the task is \(m_1\times m_2\times m_3\times\cdots\).

**Example.** 4 sandwiches × 3 drinks × 2 desserts = 24 combinations.

**Example with restriction.** A 4-digit PIN, digits 0–9, no repeats: \(10\times9\times8\times7=5040\).

## Factorial Notation

$$n! = n\times(n-1)\times\cdots\times2\times1$$

Represents arrangements of \(n\) distinct objects in a row. \(0!=1\) by convention (memorize, don't derive) — this makes \({}^nC_0={}^nC_n=1\) work correctly.

## Simplifying Factorial Expressions

Never expand fully — write the larger factorial as a product down to the smaller one so it cancels.

- \(\frac{6!}{4!}=6\times5=30\)
- \(\frac{n!}{(n-1)!}=n\)
- \(\frac{(n+2)!}{n!}=(n+2)(n+1)\)
- \(\frac{n!}{(n-3)!}=n(n-1)(n-2)\)
- \(\frac{(2n)!}{(2n-2)!}=(2n)(2n-1)\)

**Solving equations.** \(\frac{n!}{(n-2)!}=42 \Rightarrow n(n-1)=42 \Rightarrow n^2-n-42=0 \Rightarrow (n-7)(n+6)=0 \Rightarrow n=7\) (reject \(-6\)).

## Common Mistakes

- Computing a large factorial fully instead of cancelling.
- Forgetting \(0!=1\).
- Applying FCP when stages aren't actually independent.
- Not rejecting negative/non-integer solutions to factorial equations.

## Question Types

- Simplify a factorial expression.
- Solve for n in a factorial equation.
- Count ways for a sequence of independent choices — direct FCP.
- Count arrangements of n items — recognize it's just \(n!\).

## Self-Test

1. Simplify \(\frac{8!}{6!}\).
2. Simplify \(\frac{(n+3)!}{(n+1)!}\).
3. Solve \(\frac{n!}{(n-2)!}=110\).
4. Password: 3 different letters (26, no repeats) then 2 different digits (10, no repeats). How many?

**Answers:** 1. 56. 2. \((n+3)(n+2)\). 3. \(n=11\). 4. \(15{,}600\times90=1{,}404{,}000\).

---

**Category:** Counting

[← Proof by Contradiction](12_Proof_By_Contradiction.md) · [Permutations →](14_Permutations.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
