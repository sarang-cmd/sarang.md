# Optimization and points of inflection

> **SL 5.8 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Optimization selects the best value under a constraint, often by reducing a model to one variable. Stationary points must be compared with boundaries and domain restrictions. An inflection is a genuine change of concavity, not merely a zero of the second derivative.

## Formula, meaning and conditions

Solve $f'(x)=0$ for interior candidates, classify with a derivative sign chart or second-derivative test, and check endpoints for a closed domain. To test an inflection at $a$, inspect the sign of $f''$ on either side.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.8. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For $f(x)=-x^2+6x-5$ on $0\leq x\leq6$, $f'(x)=-2x+6$ vanishes at $x=3$, while $f''=-2<0$, so it is a maximum. Evaluate $f(3)=4$ and endpoints $f(0)=f(6)=-5$. Thus the global maximum on this interval is $4$ at $x=3$. The constant negative second derivative means this parabola has no inflection.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Classify stationary points by signs or the second derivative.
2. Express an applied constraint as a one-variable objective.
3. Check endpoints and possible inflections before claiming global optimality.

## Why the method works

Differentiation finds stationary candidates, but optimization needs a feasible interval and a comparison with its boundaries. A negative second derivative at a candidate supports a local maximum; it does not alone prove it beats every endpoint. An inflection demands a change in concavity, not just a horizontal tangent or a zero second derivative.

## A contrasting worked route

For a rectangle with perimeter $20$, let one side be $x$ and the other $10-x$ for $0\leq x\leq10$. Area $A=10x-x^2$ has $A'=10-2x$, so $x=5$ and area $25$. Endpoint areas are zero and $A''=-2<0$, confirming the global maximum on the feasible interval.

## Transfer and validation

Label the optimized quantity and its units before computing a derivative. If the physical model excludes zero lengths, the endpoints may be limiting boundary cases rather than attainable designs. Explain what your numerical optimum means in the original context, including any rounding to whole units.

## Exam lens

Paper 2 style: write the feasible domain from the context and compare all candidate values before declaring a global optimum. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A stationary point with the largest value among *only* stationary points need not beat an endpoint. Check all permitted boundaries.

## Try it yourself

Find the minimum of $f(x)=(x-4)^2+1$ for all real $x$.

## Checked answer

$1$ at $x=4$, where the square is zero.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
