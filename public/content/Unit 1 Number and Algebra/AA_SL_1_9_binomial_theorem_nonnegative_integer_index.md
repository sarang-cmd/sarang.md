# Binomial theorem: nonnegative integer index

> **SL 1.9 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Choosing which factors contribute the second term of a product explains each coefficient of a finite binomial expansion. The term index starts at zero in the summation and at one when naming $T_{r+1}$.

## Formula, meaning and conditions

$(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r$ for a nonnegative integer $n$. Here $\binom nr=n!/[r!(n-r)!]$. The expansion terminates after $n+1$ terms.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists finite binomial theorem and combination coefficient under SL 1.9. Derive and justify all other steps and conditions.

## Worked example

Find the coefficient of $x^2$ in $(x-2)^4$. The general term is $\binom4r x^{4-r}(-2)^r$. Setting $4-r=2$ gives $r=2$. The required coefficient is $\binom42(-2)^2=6(4)=24$. This corresponds to the third term; the full expansion is not needed.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Choose a term by the power of the variable rather than its position alone.
2. Calculate signed coefficients without fully expanding.
3. Use symmetry or Pascal’s relation to check neighboring coefficients.

## Why the method works

An $n$-factor product produces a term each time you choose $r$ factors to supply the second addend. There are $\binom nr$ ways to make that choice. The general term separates this combinatorial coefficient from the powers of the two addends. If a minus sign is part of the second addend, its power $r$ determines the sign.

## A contrasting worked route

In $(1-2x)^4$, the $x^3$ term has $r=3$. Its coefficient is $\binom43(-2)^3=4(-8)=-32$. The full $x^4$ term uses $r=4$ and is positive $16x^4$. Checking these adjacent signs avoids a common sign error when a question asks for just one coefficient.

## Transfer and validation

Do not apply the finite sum with $n$ a negative or noninteger value. Those cases call for a different generalized series and usually a convergence restriction. Before solving a coefficient question, write which of the two factors actually contains $x$; otherwise the equation for $r$ can be reversed.

## Exam lens

Paper 1 style: write the general term before solving for the index, and check the index is an integer in range. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

If the second term is negative, its sign depends on $r$. Do not apply an alternating sign after already raising $-2$ to $r$.

## Try it yourself

Find the coefficient of $x^3$ in $(x+1)^5$.

## Checked answer

Set $5-r=3$, giving $r=2$; the coefficient is $\binom52=10$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
