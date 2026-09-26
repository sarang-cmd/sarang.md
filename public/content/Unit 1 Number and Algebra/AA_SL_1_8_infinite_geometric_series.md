# Infinite geometric series

> **SL 1.8 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

An infinite sum is defined through its finite partial sums. For a geometric series, the leftover term involves $r^n$, which tends to zero only when the absolute ratio is less than one, unless the first term is zero.

## Formula, meaning and conditions

If $|r|<1$, then $S_\infty=\lim_{n\to\infty}u_1(1-r^n)/(1-r)=u_1/(1-r)$. For $r=1$ or $|r|>1$ the generic nonzero series does not have a finite sum. At $r=-1$ partial sums alternate and fail to converge.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists infinite geometric sum with the convergence condition under SL 1.8. Derive and justify all other steps and conditions.

## Worked example

For $u_1=12$ and $r=-1/3$, check $|r|=1/3<1$. Then $S_\infty=12/[1-(-1/3)]=12/(4/3)=9$. A quick sanity check uses partial sums $12,8,9.333\ldots,8.888\ldots$, which oscillate toward $9$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Check $|r|<1$ before assigning an infinite geometric sum.
2. Relate the sum to limits of finite partial sums.
3. Model a repeated distance or payment without double-counting terms.

## Why the method works

Writing three dots does not make a series convergent. In a nonzero geometric series, the tail of the finite-sum formula disappears only when $r^n\to0$. Both $r=1$ and $r=-1$ fail that limit for distinct reasons. For negative $r$ with small magnitude, partial sums alternate around their limit; they need not increase monotonically.

## A contrasting worked route

A ball drops $4$ metres, then rises to half its preceding height after every impact. Downward distances total $4+2+1+\cdots=8$ metres, while upward distances start at $2$ metres and total $4$ metres. Its entire travel is $12$ metres, not $16$: the original drop occurs only once. Each series has $|r|=1/2<1$.

## Transfer and validation

A term tending to zero is necessary for any convergent infinite sum, but it is not enough by itself. The formula here is justified by the particular geometric structure. If the first term is zero, all terms of a geometric sequence remain zero regardless of a chosen ratio; avoid claiming a nonzero-series criterion covers that degenerate case.

## Exam lens

Paper 1 style: explicitly state convergence before substituting. In a bouncing-ball context, count upward and downward travel separately. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A term approaching zero is necessary, but not sufficient for every infinite series to converge. This formula is specific to a geometric series.

## Try it yourself

Find the sum of $5+2.5+1.25+\cdots$ and state why it exists.

## Checked answer

$r=1/2$, so $|r|<1$ and $S_\infty=5/(1-1/2)=10$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
