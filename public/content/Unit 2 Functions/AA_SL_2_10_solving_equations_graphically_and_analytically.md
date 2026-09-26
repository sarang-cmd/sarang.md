# Solving equations graphically and analytically

> **SL 2.10 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

An equation $f(x)=g(x)$ can be treated as intersections of two graphs or as zeros of $h(x)=f(x)-g(x)$. An analytic solution is exact when possible; a numerical root is approximate and should state accuracy and a valid interval.

## Formula, meaning and conditions

For $f(x)=g(x)$, plot both in a suitable window or solve $f(x)-g(x)=0$. Always substitute candidate roots into the original equation, especially if squaring or multiplying by an expression that might be zero.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.10. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Solve $x^2=2x+3$. On a graph, look for crossings of $y=x^2$ and $y=2x+3$. Analytically, $x^2-2x-3=(x-3)(x+1)=0$, so $x=3$ or $x=-1$. Both check: $9=9$ and $1=1$. The graphical method should locate two crossings rather than reporting only the first one.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Transform a comparison $f(x)=g(x)$ into a root problem.
2. Distinguish exact algebraic roots from numerical estimates.
3. Bracket a numerical root and state the interval searched.

## Why the method works

A graph can suggest how many intersections exist, but a plot is a finite-resolution picture. Rearranging to $h(x)=f(x)-g(x)$ makes sign changes and domain restrictions explicit. Continuous functions that have opposite signs at two valid endpoints have at least one root between them. That guarantee does not by itself show uniqueness.

## A contrasting worked route

The equation $x^2=2x+3$ gives $x^2-2x-3=(x-3)(x+1)=0$, so $x=-1$ or $3$. If instead the equation mixes $2^x$ and $x+3$, sample valid inputs, bracket a change of sign, and use a solver only within that interval. Substitute each numerical root back into the original expressions.

## Transfer and validation

When technology reports a decimal answer, include a precision check such as a residual $|f(x)-g(x)|$. A rounded root need not make the residual exactly zero. If denominators or logarithms appear, form the common domain before using numerical iteration.

## Exam lens

Paper 2 style: cite the function pair or zero-finding setup and the window used, then round only as instructed. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A solver can miss roots outside its search interval. Scan the relevant domain before trusting a single returned value.

## Try it yourself

Solve $|x|=x+2$ for real $x$.

## Checked answer

For $x<0$, $-x=x+2$ gives $x=-1$; the $x\geq0$ case gives $0=2$, impossible. Answer $-1$.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
