# Maclaurin series

> **AHL 5.19 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A Maclaurin series builds a local polynomial approximation from a function's derivatives at zero. More terms can improve a nearby approximation, but convergence and truncation error must be considered. A finite Taylor polynomial is not automatically equal to the full function.

## Formula, meaning and conditions

$f(x)=\sum_{n=0}^\infty f^{(n)}(0)x^n/n!$ where the series converges to $f$. In particular $e^x=1+x+x^2/2!+x^3/3!+\cdots$ for all real $x$. A truncated approximation leaves a remainder, whose size depends on $x$ and the function.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists Maclaurin series and five standard expansions under AHL 5.19. Derive and justify all other steps and conditions.

## Worked example

Use the quadratic Maclaurin polynomial for $e^x$ at $x=0.1$: $1+0.1+0.1^2/2=1.105$. The true value is about $1.105170$, so the error is roughly $0.000170$. The next omitted term $0.1^3/6\approx0.0001667$ indicates the error scale; a rigorous bound would also control later terms.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Build a Maclaurin polynomial from derivatives at zero.
2. Use known exponential, trigonometric and logarithmic expansions.
3. State where a power series is valid and control truncation error.

## Why the method works

A Maclaurin series encodes local behavior through successive derivatives at zero, dividing the $n$th derivative by $n!$. A finite truncation approximates a function near the center; it is not generally equal to the original function everywhere. Some printed expansions have restricted convergence, so a formula cannot be extended to an arbitrary argument without checking.

## A contrasting worked route

The first terms of $e^x$ are $1+x+x^2/2+x^3/6$. At $x=0.1$ the cubic approximation is $1.105166\ldots$, close to $e^{0.1}\approx1.105171$. For $\ln(1+x)$ the alternating series $x-x^2/2+x^3/3-\cdots$ starts from $|x|<1$ as a safe convergence interval; a numerical substitution such as $x=3$ is not justified by that series.

## Transfer and validation

When combining series, keep only terms through the requested order and include an appropriate remainder symbol. A coefficient question may be easier by multiplying short truncations than by differentiating a complicated composite repeatedly. Check at $x=0$ that the constant term matches the original function.

## Exam lens

Paper 1 style: identify how many terms are retained and distinguish approximation from equality. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

An ellipsis in the full series is not permission to omit the remainder when claiming an exact finite equality.

## Try it yourself

Write the first three nonzero Maclaurin terms of $\sin x$.

## Checked answer

$\sin x=x-x^3/3!+x^5/5!+\cdots$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
