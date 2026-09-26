# Integration and area from a graph

> **SL 5.5 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Integration reverses differentiation and can also accumulate signed area under a graph. A definite integral is positive where the graph lies above the axis and negative where it lies below. Geometric area uses absolute values if a region crosses the axis.

## Formula, meaning and conditions

If $F'=f$, then $\int_a^b f(x)\,dx=F(b)-F(a)$ when the conditions of the fundamental theorem hold. For a nonnegative $f$ on $[a,b]$, this equals the area between its graph and the $x$-axis.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists power integral and area above the x-axis under SL 5.5. Derive and justify all other steps and conditions.

## Worked example

For $f(x)=2x$ on $0\leq x\leq3$, an antiderivative is $F(x)=x^2$. Hence $\int_0^3 2x\,dx=[x^2]_0^3=9$ square units. Geometry agrees: the region is a triangle with base $3$ and height $f(3)=6$, so its area is $3(6)/2=9$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Read an integral as accumulated signed change.
2. Find elementary antiderivatives with constants.
3. Separate area above and below the axis when physical area is required.

## Why the method works

An antiderivative reverses differentiation up to an additive constant. A definite integral accumulates signed contributions: below-axis regions subtract instead of adding. Geometric area is nonnegative, so a curve that crosses the axis requires splitting at its zeroes and taking magnitudes for each interval. An integral of a positive function needs no such adjustment.

## A contrasting worked route

The integral $\int_{-1}^{1}x\,dx=0$ because the negative area on $[-1,0]$ cancels the positive area on $[0,1]$. Total geometric area is $\int_{-1}^{0}(-x)\,dx+\int_0^1x\,dx=1$. Reporting zero as the enclosed area would confuse signed accumulation with extent.

## Transfer and validation

A definite integral has units equal to the product of integrand and horizontal-axis units. Verify an antiderivative by differentiation and include $C$ only for indefinite integrals. If a graph is given without a formula, signed areas of simple shapes can still evaluate the integral exactly.

## Exam lens

Paper 1 style: state whether the integral is a signed value or a positive geometric area. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

If a curve goes below the axis, adding a single integral may cancel positive and negative areas. Split at the zeros for total area.

## Try it yourself

Find $\int_0^2 x\,dx$ and interpret it as area.

## Checked answer

$[x^2/2]_0^2=2$ square units, a triangle of base $2$ and height $2$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
