---
title: "Disproof by Counterexample"
order: 11
category: "Proof"
tags: ["proof", "counterexample"]
prev: "10_Proof_By_Mathematical_Induction.md"
next: "12_Proof_By_Contradiction.md"
---

# Disproof by Counterexample

A short but conceptually distinct topic, easily confused with deductive proof if the logic isn't kept straight.

## Core Idea

A counterexample is a single specific case satisfying a statement's conditions but making it **false**. One valid counterexample fully disproves a "for all" claim.

**Key asymmetry:** you cannot prove a "for all n" statement by checking examples, but you CAN disprove one with a single failing example.

## How to Approach

1. Identify exactly what domain the claim covers.
2. Try small/edge-case values: 0, 1, negatives, primes.
3. Show the substitution and the resulting false result clearly.
4. State: "since [claim] is false when n=…, the statement is not true for all [n]."

## Worked Examples

**1.** Claim: "\(n^2+n+1\) is prime for all positive integers n." \(n=4\): \(21=3\times7\), not prime. False. ∎

**2.** Claim: "the sum of the first n terms of any GP is always positive if \(u_1>0\)." \(u_1=1,r=-2,n=2\): \(S_2=-1<0\). False. ∎

**3.** Claim: "\(n^2-n+41\) is prime for all positive integers n" (a famous historical trap — true for many small n). \(n=41\): \(41^2\), not prime. False. ∎

**4.** Claim: "for all real x, \(x^2\ge x\)." \(x=0.5\): \(0.25<0.5\). False. ∎

## Question Types

- Show that a general claim is not always true.
- "For what values does the claim fail?"
- Claims dressed up using sequences/series/factorial content from this unit.
- "A student claims X. Is the student correct?" — decide, and disprove with a specific case if false.

## Common Mistakes

- Writing a general algebraic disproof instead of just finding one concrete counterexample.
- Choosing a counterexample outside the claim's stated domain.
- Not showing the substitution and resulting false value clearly.
- Concluding "true" after only checking a few supporting cases.

## Self-Test

1. Show "\(2^n>n^2\) for all positive integers n" is false.
2. Disprove "the sum of any two irrational numbers is irrational."
3. Disprove "\(n^2\) is positive for all integers n."
4. Why is a counterexample logically different from a proof?

**Answers:** 1. \(n=4\): \(16=16\), not greater. 2. \(\sqrt2+(-\sqrt2)=0\), rational. 3. \(n=0\): \(0^2=0\), not positive. 4. One failing case disproves a universal claim; a proof must hold for every case in the domain.

---

**Category:** Proof

[← Proof by Mathematical Induction](10_Proof_By_Mathematical_Induction.md) · [Proof by Contradiction →](12_Proof_By_Contradiction.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
