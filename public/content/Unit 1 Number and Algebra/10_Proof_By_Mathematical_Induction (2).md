---
title: "Proof by Mathematical Induction"
order: 10
category: "Proof"
tags: ["proof", "induction"]
prev: "09_Proof_Deductive_And_LHS_RHS.md"
next: "11_Proof_By_Counterexample.md"
---

# Proof by Mathematical Induction

The most heavily structured, most formally graded proof type in the unit — marks are awarded per named step.

## The Logic

Proves \(P(n)\) true for all \(n\ge n_0\) via: (1) base case, (2) if true for \(n=k\), then true for \(n=k+1\). Like dominoes: the base case knocks the first over, the inductive step guarantees each knocks the next.

## The Required Skeleton

1. **Base case** — show \(P(n_0)\) true by direct substitution.
2. **Inductive hypothesis** — "Assume \(P(k)\) is true for some \(k\ge n_0\)," write the actual equation.
3. **Inductive step** — prove \(P(k+1)\) follows: start from LHS of \(P(k+1)\), substitute the hypothesis, simplify to RHS.
4. **Conclusion** — "Since \(P(n_0)\) is true, and \(P(k)\) true implies \(P(k+1)\) true, by the principle of mathematical induction, \(P(n)\) is true for all \(n\ge n_0\)."

## Fully Worked Example — Sum of Integers

Prove \(1+2+\cdots+n=\frac{n(n+1)}2\) for all positive integers \(n\).

**Base (n=1):** LHS=1, RHS=1. ✓

**Hypothesis:** assume \(1+2+\cdots+k=\frac{k(k+1)}2\).

**Step:** \(1+\cdots+k+(k+1)=\frac{k(k+1)}2+(k+1)=\frac{k(k+1)+2(k+1)}2=\frac{(k+1)(k+2)}2\) = RHS of \(P(k+1)\). ✓

**Conclusion:** by induction, true for all positive integers \(n\). ∎

## Second Example — Divisibility

Prove \(7^n-1\) divisible by 6 for all positive integers \(n\).

Base: \(7^1-1=6\) ✓. Hypothesis: \(7^k-1=6m\). Step: \(7^{k+1}-1=7(6m+1)-1=42m+6=6(7m+1)\), a multiple of 6. Conclusion: by induction, true for all \(n\). ∎

## Question Types

- Prove a sum formula (AP, GP, sum of squares/cubes) using induction.
- Prove a divisibility statement — factor out the target divisor after substitution.
- Prove an inequality for \(n\) beyond some start (HL, less common) — needs an extra inequality argument.
- "Identify the error in this induction proof" — tests understanding of each step's purpose.

## Common Mistakes

- Skipping/under-stating the base case.
- Not writing the inductive hypothesis as an explicit equation.
- Not clearly showing where the hypothesis was substituted.
- Missing or incomplete concluding sentence.
- Algebraic errors factoring \(P(k+1)\) to match the target.

## Self-Test

1. Name the four steps of induction in order.
2. Base case (n=1) for \(2+4+\cdots+2n=n(n+1)\).
3. What do you add to \(k^2\) to reach \(P(k+1)\) for \(1+3+\cdots+(2n-1)=n^2\)?
4. Prove \(4^n-1\) divisible by 3 for all positive integers n.

**Answers:** 1. Base case; hypothesis; inductive step; conclusion. 2. LHS=2, RHS=2 ✓. 3. \((2k+1)\), giving \((k+1)^2\). 4. Base: \(4^1-1=3\) ✓; hypothesis \(4^k-1=3m\); step \(4^{k+1}-1=4(3m+1)-1=12m+3=3(4m+1)\); conclusion by induction. ∎

---

**Category:** Proof

[← Deductive Proof & LHS-RHS](09_Proof_Deductive_And_LHS_RHS.md) · [Disproof by Counterexample →](11_Proof_By_Counterexample.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
