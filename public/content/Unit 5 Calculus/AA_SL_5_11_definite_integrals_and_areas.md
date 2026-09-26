# Definite integrals and areas

> **SL 5.11 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A definite integral accumulates net signed change between two bounds. The fundamental theorem evaluates it using any antiderivative. To report an actual area, partition at crossings of the axis or between curves and integrate the positive height difference on each interval.

## Formula, meaning and conditions

$\int_a^b f(x)\,dx=F(b)-F(a)$ when $F'=f$ under the usual continuity conditions. Geometric area between $f$ and the $x$-axis is $\int_a^b|f(x)|\,dx$. Between upper $u$ and lower $l$, it is $\int_a^b[u(x)-l(x)]\,dx$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists area enclosed by a curve and the x-axis under SL 5.11. Derive and justify all other steps and conditions.

## Worked example

Evaluate $\int_0^2(x^2+1)\,dx$. An antiderivative is $x^3/3+x$. At $2$ this is $8/3+2=14/3$; at $0$ it is $0$. Since $x^2+1>0$, the net integral also equals the area between the curve and the $x$-axis on the interval.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use the fundamental theorem with correctly ordered limits.
2. Partition a signed integral at any axis crossings.
3. Integrate upper minus lower for the area between curves.

## Why the method works

The fundamental theorem turns a definite integral into antiderivative values at its bounds. Reversing the limits reverses its sign, but geometric area should remain nonnegative. When finding an enclosed region between curves, solve their intersections first and determine which is above on each interval; the order may switch.

## A contrasting worked route

Between $y=x$ and $y=x^2$ on $0\leq x\leq1$, the line lies above the parabola, so area is $\int_0^1(x-x^2)\,dx=[x^2/2-x^3/3]_0^1=1/6$. Reversing the integrand would give $-1/6$, an invalid geometric area even though the signed integral is well-defined.

## Transfer and validation

A sketch prevents integrating the wrong top curve. If two graphs cross inside a larger interval, split the calculation at every crossing before applying an absolute value. Keep exact fractions or multiples of $\pi$ when appropriate and add squared units for area.

## Exam lens

Paper 2 style: use the graph to identify crossings and verify the sign of the integrand before calling a definite integral an area. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Substituting only the upper bound omits $F(a)$. Always write $F(b)-F(a)$ explicitly.

## Try it yourself

Evaluate $\int_1^3 2x\,dx$.

## Checked answer

$[x^2]_1^3=9-1=8$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
