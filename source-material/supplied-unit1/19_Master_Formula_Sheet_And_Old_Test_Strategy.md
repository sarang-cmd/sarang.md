---
title: "Master Formula Sheet & Old-Test Strategy"
order: 19
category: "Synthesis"
tags: ["formulas", "revision", "strategy"]
prev: "18_Binomial_Theorem_Rational_n_Extension.md"
next: null
---

# Master Formula Sheet & Old-Test Strategy

The synthesis page — everything from the unit in one place, plus the exact strategy for using your old tests as the single highest-leverage revision tool before this unit test.

## Master Formula Table

| Topic | Formula | In Booklet? |
|---|---|---|
| Arithmetic nth term | \(u_n=u_1+(n-1)d\) | Yes |
| Arithmetic sum | \(S_n=\frac n2(2u_1+(n-1)d)=\frac n2(u_1+u_n)\) | Yes |
| Geometric nth term | \(u_n=u_1r^{n-1}\) | Yes |
| Geometric sum (finite) | \(S_n=\frac{u_1(r^n-1)}{r-1}\), \(r\ne1\) | Yes |
| Geometric sum to infinity | \(S_\infty=\frac{u_1}{1-r}\), \(\vert r\vert<1\) | Yes |
| Compound interest | \(FV=PV(1+\frac{r\%}{100k})^{kn}\) | Yes |
| \(u_n\) from \(S_n\) | \(u_n=S_n-S_{n-1}\) | No — must know |
| Permutations | \({}^nP_r=\frac{n!}{(n-r)!}\) | No — must know |
| Combinations | \({}^nC_r=\frac{n!}{r!(n-r)!}\) | Yes |
| Binomial expansion | \((a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r\) | Yes |
| Binomial general term | \(T_{r+1}=\binom nr a^{n-r}b^r\) | No — must know |
| Rational-n binomial series | \((1+x)^n=1+nx+\frac{n(n-1)}{2!}x^2+\cdots\), \(n\in\mathbb Q\), \(\vert x\vert<1\) | Yes |
| Pascal's Rule | \({}^nC_r={}^{n-1}C_{r-1}+{}^{n-1}C_r\) | No — conceptual |
| Factorial base case | \(0!=1\) | No — must know |

## High-Risk "Easy Marks" Checklist (across the whole unit)

- Using \(n\) instead of \((n-1)\) in sequence formulas.
- Confusing \(S_n\) with \(u_n\).
- Miscounting terms in sigma notation (\(b-a+1\), not \(b\)).
- Forgetting to state \(\vert r\vert<1\) or \(\vert x\vert<1\) before using an infinity/series formula.
- Mixing up \({}^nP_r\) and \({}^nC_r\) — always ask "does order matter?"
- Forgetting \(0!=1\).
- Sign errors in binomial expansions when the second term is negative.
- Not rejecting invalid (negative/non-integer/out-of-range) roots when solving for \(n\) or \(r\).
- In proof by induction, skipping the base case or the explicit inductive hypothesis statement.
- Confusing proof by contradiction (proves universal truth) with disproof by counterexample (disproves universal claim).
- In financial formulas, entering a percentage as a decimal into a formula that already divides by 100.

## How to Use Old Tests Strategically

Teachers who reuse old test questions are effectively telling you what they consider the core, testable skills of the unit — the recurrence isn't random. The single highest-value study action available to you is:

1. Redo every old test question from scratch, covering your previous answers.
2. For every question missed or slow to answer, write one sentence identifying WHY (wrong formula? sign error? forgot a validity condition? mixed up a counting formula?).
3. Group these "why" notes by sub-topic — patterns will emerge (e.g., "I keep forgetting validity conditions" cuts across geometric series, infinite series, AND the rational-n binomial expansion, so fixing that one habit pays off across three different topic pages).
4. Re-attempt only the questions/topics where a pattern emerged, until the error stops recurring.

## Final Pre-Exam Mental Checklist

- Can I instantly tell arithmetic vs. geometric from a word problem?
- Can I simplify any factorial ratio without a calculator?
- Can I decide permutation vs. combination in under 5 seconds?
- Do I state validity/convergence conditions automatically, even when they feel obvious?
- Do I check that solved values of \(n\) or \(r\) make contextual sense?
- Do I know the 4-step skeleton for induction proofs by heart?
- Do I know the difference between contradiction and counterexample?
- Have I reviewed my old tests and diagnosed every lost mark?

---

**Category:** Synthesis

[← Binomial Theorem (Rational n Extension)](18_Binomial_Theorem_Rational_n_Extension.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
