# Functions, domains, ranges and inverses

> **SL 2.2 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A function assigns exactly one output to each allowed input. Domain lists allowed inputs; range lists attainable outputs. An inverse reverses input and output only when the original function is one-to-one on its chosen domain.

## Formula, meaning and conditions

If $y=f(x)$, solve this equation for $x$ and interchange the variables to obtain $f^{-1}$, then state its domain. The domain of $f^{-1}$ is the range of $f$. Square roots require nonnegative radicands in real-valued questions.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.2. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Let $f(x)=\sqrt{x-2}$. For real outputs, $x-2\geq0$, so $D_f=[2,\infty)$ and $R_f=[0,\infty)$. From $y=\sqrt{x-2}$, square to get $x=y^2+2$. Therefore $f^{-1}(x)=x^2+2$ for $x\geq0$. Check $f(f^{-1}(3))=\sqrt{11-2}=3$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. State a domain and range from a formula and any explicit restrictions.
2. Test whether a relation is one-to-one before finding an inverse.
3. Exchange input and output while transferring domain and range correctly.

## Why the method works

A function assigns exactly one output to each allowed input, but different inputs may still share an output. An inverse function requires a one-to-one domain, often obtained by restricting a curve to one monotonic branch. Range of the original becomes domain of the inverse. Excluded denominator values and square-root inequalities remain binding after algebraic simplification.

## A contrasting worked route

For $f(x)=(x-2)^2$ on $x\geq2$, the range is $[0,\infty)$. Set $y=(x-2)^2$ and use $x-2\geq0$ to get $f^{-1}(y)=2+\sqrt y$, $y\geq0$. Using the negative square root would invert the other branch, not the stated function. Check both compositions on their respective allowed domains.

## Transfer and validation

A graph and its inverse reflect in $y=x$ when both are plotted with the correct restrictions. When a calculator offers two algebraic roots, the mathematical task is to choose the root compatible with the declared domain. Distinguish the inverse function $f^{-1}(x)$ from the reciprocal $1/f(x)$.

## Exam lens

Paper 1 style: an inverse formula without its restricted domain can lose the key idea. Sketch a graph if the range is not obvious. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$f^{-1}(x)$ does not mean $1/f(x)$. Inversion is reversal of the mapping, not a reciprocal.

## Try it yourself

Find the inverse of $f(x)=3x-2$ for real $x$.

## Checked answer

$y=3x-2\Rightarrow x=(y+2)/3$, so $f^{-1}(x)=(x+2)/3$ with real domain.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
