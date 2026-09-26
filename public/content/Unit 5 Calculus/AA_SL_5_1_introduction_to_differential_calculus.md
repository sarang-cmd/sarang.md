# Introduction to differential calculus

> **SL 5.1 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A derivative measures instantaneous change as the limiting slope of secant lines. It can describe a tangent's gradient, velocity, or a rate per unit change. The underlying limit matters when a graph has a corner or a gap, where a derivative may not exist.

## Formula, meaning and conditions

$f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$ if the limit exists. Geometrically the numerator is change in output and $h$ is change in input. A differentiable function is continuous at that point, but continuity alone does not guarantee differentiability.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.1. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For $f(x)=x^2$ at $x=3$, the difference quotient is $[(3+h)^2-3^2]/h=(6h+h^2)/h=6+h$ for $h\neq0$. As $h\to0$, the quotient tends to $6$. Thus the tangent slope at $(3,9)$ is $6$, even though no nonzero secant step of exactly zero was divided by.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compute secant gradients over shrinking intervals.
2. Interpret a derivative as a local rate of change.
3. Read derivative information from a graph without assuming every point is smooth.

## Why the method works

A secant compares two distinct points; a tangent gradient arises as their separation tends to zero. The limiting process explains why the derivative at a point can describe instantaneous speed despite using nearby changes. A sharp corner can have left and right secant slopes that approach different numbers, so its derivative does not exist there.

## A contrasting worked route

For $f(x)=x^2$, the secant gradient from $x=2$ to $x=2+h$ is $[(2+h)^2-4]/h=4+h$ when $h\neq0$. As $h\to0$, this tends to $4$, the tangent gradient. It would be invalid to set $h=0$ in the original fraction before simplifying because that denominator would vanish.

## Transfer and validation

Rates have units of output per input, such as metres per second. A negative derivative means decreasing output, not a negative amount of elapsed time. Compare a local derivative with an average rate on a broader interval to avoid conflating instant and interval behavior.

## Exam lens

Paper 1 style: show cancellation before taking the limit; never substitute $h=0$ into an expression with denominator $h$. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

An average rate over an interval is a secant slope, not automatically the instantaneous rate at its endpoint.

## Try it yourself

Find the average rate of change of $x^2$ from $x=1$ to $x=3$.

## Checked answer

$(9-1)/(3-1)=4$ per unit $x$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
