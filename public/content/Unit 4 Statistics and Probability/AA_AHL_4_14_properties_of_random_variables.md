# Properties of random variables

> **AHL 4.14 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Discrete distributions assign mass to individual values; continuous distributions assign probability to intervals through an area under a density curve. Both use expectation and variance, but a continuous single point has zero probability under an ordinary density.

## Formula, meaning and conditions

For a continuous density $f(x)\geq0$, $\int_{-\infty}^\infty f(x)\,dx=1$, $P(a<X<b)=\int_a^b f(x)\,dx$ and $E(X)=\int_{-\infty}^\infty x f(x)\,dx$ when the integrals exist. Linear transforms obey $E(aX+b)=aE(X)+b$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 8 (PDF p. 10), lists variance, standard deviation, linear transformations and continuous expectation under AHL 4.14. Derive and justify all other steps and conditions.

## Worked example

Take $f(x)=2x$ on $0<x<1$, zero elsewhere. Its total area is $\int_0^1 2x\,dx=[x^2]_0^1=1$, so it is a density. $P(X<1/2)=\int_0^{1/2}2x\,dx=1/4$. The expected value is $E(X)=\int_0^1 2x^2\,dx=2/3$. In contrast $P(X=1/2)=0$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Transform expectations and variances under $aX+b$.
2. Normalize and integrate a simple continuous density.
3. Compare $E(X^2)-E(X)^2$ with direct variance calculations.

## Why the method works

Adding a constant shifts every observation but does not change spread. Multiplication by $a$ scales expected value by $a$ and variance by $a^2$, so a negative scale reverses order without creating negative variance. A density must be nonnegative and integrate to one; probabilities are areas, not the density value at a single point.

## A contrasting worked route

If $E(X)=3$ and $\operatorname{Var}(X)=4$, then $Y=2X-5$ has $E(Y)=1$ and variance $16$. For a uniform density on $0<x<2$, $f(x)=1/2$, so $E(X)=\int_0^2x/2\,dx=1$. The probability at a single exact point remains zero despite positive density.

## Transfer and validation

In a discrete table, calculate $E(X^2)$ by squaring each value before applying its probability, not by squaring $E(X)$ first. For a continuous model specify its support alongside the formula. When a result has squared units, check that it is a variance rather than a standard deviation.

## Exam lens

Paper 2 style: check normalization before using a proposed density, and state whether an endpoint matters. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

The height $f(1/2)=1$ is a density value, not $P(X=1/2)$. Integrate over an interval to get a probability.

## Try it yourself

If $E(X)=3$, find $E(2X+1)$.

## Checked answer

$2E(X)+1=7$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
