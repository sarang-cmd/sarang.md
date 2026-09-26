# Increasing and decreasing functions

> **SL 5.2 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A differentiable function increases where its derivative is positive and decreases where it is negative. Critical values partition the domain for a sign test. A zero derivative alone does not prove a maximum or a minimum.

## Formula, meaning and conditions

If $f'(x)>0$ throughout an interval, $f$ increases there; if $f'(x)<0$, it decreases. Include points where $f'$ does not exist when constructing a complete critical-point list. Use open intervals for sign statements unless endpoints are separately considered.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.2. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For $f(x)=x^3-3x$, $f'(x)=3x^2-3=3(x-1)(x+1)$. It is positive for $x<-1$ and $x>1$, negative for $-1<x<1$. Therefore $f$ increases on $(-\infty,-1)$ and $(1,\infty)$ and decreases on $(-1,1)$. At $x=-1$ the sign changes positive to negative, giving a local maximum.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Find intervals where a function increases or decreases from $f'(x)$.
2. Locate stationary candidates and test derivative signs around them.
3. Distinguish a flat inflection from a maximum or minimum.

## Why the method works

A positive derivative indicates local increase and a negative derivative local decrease where differentiability holds. At a stationary point $f'=0$, the sign can switch from positive to negative, negative to positive, or not switch at all. Therefore solving $f'=0$ produces candidates, not a classification by itself.

## A contrasting worked route

For $f(x)=x^3$, $f'(x)=3x^2\geq0$, and the only stationary point is $x=0$. The derivative is positive on both sides, so the origin is not a local maximum or minimum. For $g(x)=-x^2$, $g'=-2x$ changes from positive to negative at zero, giving a local maximum.

## Transfer and validation

If the domain is a closed interval, endpoint values can be global extrema even without vanishing derivative. Sketch the derivative sign chart and refer back to the original function when reporting coordinates. Do not assume that zero derivative implies zero function value.

## Exam lens

Paper 1 style: supply a derivative sign chart, not just a list of stationary points. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$f'(a)=0$ is a candidate for a turning point. For $f(x)=x^3$, $f'(0)=0$ but the function keeps increasing.

## Try it yourself

Where does $f(x)=x^2$ increase?

## Checked answer

$f'(x)=2x>0$ for $x>0$, so it increases on $(0,\infty)$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
