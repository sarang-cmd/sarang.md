# Counting and generalized binomial series

> **AHL 1.10 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

For counting, decide whether reordering changes an outcome. For generalized binomial expansions, first factor out the constant so the changing part looks like $1+t$. These ideas meet in the factorial products that define generalized coefficients.

## Formula, meaning and conditions

Ordered selections: $P(n,r)=n!/(n-r)!$; unordered selections: $\binom nr=n!/[r!(n-r)!]$. For non-integer or negative $\alpha$, $(1+t)^\alpha=1+\alpha t+\alpha(\alpha-1)t^2/2!+\cdots$, valid for $|t|<1$. A positive integer index is the terminating special case.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists permutations, combinations and binomial expansion for rational indices under AHL 1.10. Derive and justify all other steps and conditions.

## Worked example

Five distinct students sit in a row; two specified students must sit together. Treat them as one block: $4!$ block orders times $2!$ internal orders, giving $48$. Separately, $(1-2x)^{-1}=1+2x+4x^2+\cdots$, valid when $|-2x|<1$, or $|x|<1/2$. Notice that the expansion does not terminate.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Separate ordered arrangements from unordered selections, with or without replacement.
2. Use permutations and combinations under restrictions.
3. Expand rational powers locally and state $|t|<1$ for an infinite binomial series.

## Why the method works

Selecting a committee counts each group once, while seating the same people counts each ordering separately. Restricted problems are often easier by counting a permitted complement than by listing cases. The generalized binomial coefficients use a falling product $n(n-1)\cdots$, so a noninteger $n$ usually produces infinitely many nonzero terms rather than a finite polynomial.

## A contrasting worked route

Selecting three students from six gives $\binom63=20$, whereas assigning first, second and third roles gives ${6!}/{3!}=120$. For $(1+3x)^{-1}$, the first terms are $1-3x+9x^2-27x^3+\cdots$ only while $|3x|<1$, or $-1/3<x<1/3$. The choice count and the power series are separate subskills despite sharing this syllabus code.

## Transfer and validation

The supplied older notes incorrectly mark permutations as absent from the booklet. In the uploaded 2023 Version 1.0 HL booklet, both the permutation and combination formulas appear on printed page 3. Continue to know which one applies: having a formula does not decide whether order matters.

## Exam lens

Paper 1 style: explain the choice of permutation versus combination; for a generalized series state the original-variable validity interval. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$\binom nr$ counts groups, not seats. For series validity, $|x|<1$ is wrong after replacing $x$ with $-2x$.

## Try it yourself

How many ways can 3 of 7 distinct people fill 3 labeled roles? Expand $(1+x)^{-1}$ through $x^2$.

## Checked answer

$7\cdot6\cdot5=210$ ways; $1-x+x^2+\cdots$ for $|x|<1$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
