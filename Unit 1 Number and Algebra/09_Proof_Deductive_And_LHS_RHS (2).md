---
title: "Deductive Proof & LHS-RHS"
order: 9
category: "Proof"
tags: ["proof", "deductive"]
prev: "08_Financial_Applications_Compound_Interest_Depreciation.md"
next: "10_Proof_By_Mathematical_Induction.md"
---

# Simple Deductive Proof & LHS-to-RHS Layout

The foundation proof technique — everything in the later proof pages builds on the habits formed here.

## What Deductive Proof Means

Starts from known facts/definitions and uses logical steps to reach the conclusion — covers both numerical proofs and general algebraic identities.

## The LHS-to-RHS Layout

1. Write the left-hand side (LHS).
2. Manipulate algebraically, one step per line.
3. Arrive exactly at the right-hand side (RHS).
4. Conclude: "∴ LHS = RHS, as required."

**Critical rule:** work on one side only (usually the more complex side). Do not cross-multiply or move terms across the equals sign as if solving an equation — that's circular reasoning and loses marks.

## Worked Examples

**1.** Prove \((n+1)^2-n^2=2n+1\). LHS \(=(n^2+2n+1)-n^2=2n+1\)=RHS. ∎

**2.** Prove \(1+2+\cdots+n=\frac{n(n+1)}{2}\) using the arithmetic series formula with \(u_1=1,d=1\): \(S_n=\frac n2(2+n-1)=\frac{n(n+1)}2\). ∎

**3.** Prove the sum of any 3 consecutive integers is divisible by 3. Let them be \(n,n+1,n+2\); sum \(=3n+3=3(n+1)\), a multiple of 3. ∎

**4.** Prove \(\frac1{1-x}+\frac1{1+x}=\frac2{1-x^2}\) for \(x\ne\pm1\). LHS \(=\frac{(1+x)+(1-x)}{(1-x)(1+x)}=\frac2{1-x^2}\)=RHS. ∎

## Question Types

- Prove an algebraic identity for all n / all real x.
- Show a numerical statement is true for a specific value.
- Prove an expression is always divisible by k / even / positive — represent the general case algebraically.
- Prove a sequence/series formula directly with algebra (links to the Sum of Series pages).

## Common Mistakes

- Working both sides or cross-multiplying like solving an equation — the #1 structural error.
- Skipping algebraic steps.
- Forgetting the concluding statement.
- Not explicitly factoring out k in divisibility proofs.
- Using specific numbers to "prove" a general statement — only valid for disproof (see Counterexample page).

## Self-Test

1. Prove \((2n+1)^2-(2n-1)^2=8n\).
2. Prove the sum of two consecutive even integers is always even.
3. Prove \(\frac{x^2-1}{x-1}=x+1\) for \(x\ne1\).
4. Why doesn't testing \(n=1,2,3\) prove a "for all n" claim?

**Answers:** 1. LHS\(=8n\)=RHS. ∎ 2. \(2n+(2n+2)=2(2n+1)\), even. ∎ 3. LHS\(=\frac{(x-1)(x+1)}{x-1}=x+1\)=RHS. ∎ 4. It could hold for tested values yet fail for a larger/different n — only general algebra proves "for all n."

---

**Category:** Proof

[← Financial Applications](08_Financial_Applications_Compound_Interest_Depreciation.md) · [Proof by Mathematical Induction →](10_Proof_By_Mathematical_Induction.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
