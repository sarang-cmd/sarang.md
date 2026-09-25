---
id: "12"
file: "12_Induction_And_Divisibility.md"
title: "Induction & Divisibility"
category: "Proof"
tags: ["induction", "divisibility", "proof", "number theory"]
order: 12
prev: "11_Mathematical_Induction.md"
next: "13_Fundamental_Counting_Principle.md"
---
# Induction & Divisibility

Divisibility questions often need the same base–hypothesis–step structure as sum questions, but the inductive step should produce an **integer multiple** of the divisor.

## Prove that \(6\) divides \(7^n-1\)

Let \(P(n)\) be: \(7^n-1\) is divisible by \(6\) for every integer \(n\ge1\).

**Base case:** \(7^1-1=6\), which is divisible by \(6\).

**Inductive hypothesis:** Assume \(7^k-1=6m\) for some integer \(m\).

**Step:** Rewrite the next expression to expose the hypothesis:

$$7^{k+1}-1=7(7^k-1)+6=7(6m)+6=6(7m+1).$$

Since \(7m+1\) is an integer, the expression is divisible by \(6\). By induction, the claim holds for every \(n\ge1\).

## A useful pattern

To show \(a^{k+1}-1\) is divisible by \(a-1\), try the identity \(a^{k+1}-1=a(a^k-1)+(a-1)\).

**Try it:** Adapt the argument to show that \(4\) divides \(5^n-1\) for every positive integer \(n\).

> **Exam lens:** End with “integer times the divisor.” A numerical value for one exponent is not the step from \(k\) to \(k+1\).
