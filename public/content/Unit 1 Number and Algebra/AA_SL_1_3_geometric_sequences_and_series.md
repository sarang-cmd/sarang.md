# Geometric sequences and series

> **SL 1.3 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Geometric change means multiplication by a constant ratio, not addition of a constant difference. A negative ratio alternates signs. Summing a geometric sequence works by multiplying the whole sum by $r$ and subtracting to cancel the interior terms.

## Formula, meaning and conditions

$u_n=u_1r^{n-1}$ and $S_n=u_1(1-r^n)/(1-r)$ for $r\neq1$. When $r=1$, every term equals $u_1$, so $S_n=nu_1$. A zero term needs care when inferring a ratio by division.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists geometric nth term and finite sum under SL 1.3. Derive and justify all other steps and conditions.

## Worked example

Take $u_1=6$, $r=-\tfrac12$. The first four terms are $6,-3,\tfrac32,-\tfrac34$. Thus $S_4=6-3+\tfrac32-\tfrac34=\tfrac{15}{4}$. The formula agrees: $6[1-(-\tfrac12)^4]/[1-(-\tfrac12)]=6(15/16)/(3/2)=15/4$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Identify a fixed ratio, including a negative or fractional ratio.
2. Compute an nth term with the correct exponent $n-1$.
3. Sum finitely many terms, treating $r=1$ separately.

## Why the method works

Multiplying a partial sum by $r$ shifts each term one place. Subtracting the shifted sum cancels everything except the first and the term just beyond the end. This explains why the finite-sum formula is valid when $r\neq1$, even for a negative or large ratio. A table of consecutive quotients can suggest a geometric pattern, but verify all available terms.

## A contrasting worked route

For $u_1=4$ and $r=-2$, the four terms are $4,-8,16,-32$ and sum to $-20$. Using $4(1-(-2)^4)/(1-(-2))=4(-15)/3$ confirms it. Do not change $(-2)^4$ to $-16$ by losing parentheses. If $r=1$, use $S_n=nu_1$ rather than dividing by zero.

## Transfer and validation

The infinite-series formula is a different claim: a large ratio can have a valid finite sum without having an infinite limit. When a practical model involves depreciation or growth, a geometric term often represents a state at a time, while the geometric series represents cumulative cash or total travel.

## Exam lens

Paper 1 style: choose the finite sum formula only after identifying the ratio; write parentheses around negative ratios. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A negative $r$ does not mean the sum must be negative. Track the parity of $n$ before simplifying $r^n$.

## Try it yourself

Find $u_5$ and $S_5$ when $u_1=2$ and $r=3$.

## Checked answer

$u_5=2(3)^4=162$ and $S_5=2(1-3^5)/(1-3)=242$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
