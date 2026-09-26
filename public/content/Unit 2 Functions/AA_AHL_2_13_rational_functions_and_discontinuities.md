# Rational functions and discontinuities

> **AHL 2.13 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Rational functions are quotients of polynomials. Their original domain excludes denominator zeros even if algebraic cancellation later produces a simpler formula. Long division reveals slant or polynomial asymptotes, while factorization reveals holes and vertical asymptotes.

## Formula, meaning and conditions

For $f(x)=N(x)/D(x)$, begin with $D(x)\neq0$. A common factor can create a removable discontinuity; an uncancelled zero in the denominator may give a vertical asymptote. Horizontal asymptotes follow the ratio of leading terms when degrees match.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 2.13. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Consider $f(x)=(x^2-1)/(x-1)$ with original domain $x\neq1$. Factor $x^2-1=(x-1)(x+1)$ to get $f(x)=x+1$ only for $x\neq1$. The graph is the line $y=x+1$ with a hole at $(1,2)$. Calling $x=1$ a vertical asymptote would be incorrect because nearby values approach $2$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Factor numerator and denominator to distinguish holes from poles.
2. Find horizontal or oblique end behavior from polynomial degrees.
3. Solve a rational equation on the original, not simplified, domain.

## Why the method works

Canceling a common factor simplifies values only where the original expression existed. A canceled root gives a removable hole, while a denominator root that remains may create a vertical asymptote unless the behavior is further altered. Comparing degrees predicts long-run behavior, but local features require factorization and sign checks.

## A contrasting worked route

For $r(x)=(x^2-9)/(x-3)$, the domain excludes $3$ even though $r(x)=x+3$ elsewhere. Its graph is a line with a hole at $(3,6)$, not a pole. In contrast, $1/(x-3)$ becomes unbounded near $3$. These functions have the same excluded input but very different limits.

## Transfer and validation

If the numerator degree is one higher than the denominator degree, divide polynomials to find a slant asymptote. For an equation, multiply through only after recording all excluded denominator values and then check candidates against the original expression. A plot alone can hide a small hole at a single pixel.

## Exam lens

Paper 1 style: give the excluded input and the hole coordinate after cancellation. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Cancellation does not add an excluded input back to the original domain. Keep the restriction in the final answer.

## Try it yourself

Locate the hole of $(x^2-4)/(x-2)$.

## Checked answer

The expression equals $x+2$ for $x\neq2$, so the hole is $(2,4)$.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
