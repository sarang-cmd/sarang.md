# First principles and higher derivatives

> **AHL 5.12 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

First principles establish a derivative from a limit, rather than quoting a rule. Repeated differentiation yields higher derivatives and reveals how rates themselves change. A clear algebraic difference quotient is especially important when a removable factor appears.

## Formula, meaning and conditions

$f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$. Define $f''=(f')'$ and, where they exist, $f^{(n)}$ by repeated differentiation. The limit must be finite and agree from both sides for an ordinary two-sided derivative.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists first-principles derivative under AHL 5.12. Derive and justify all other steps and conditions.

## Worked example

Take $f(x)=x^2+3x$. At $x=1$, $f(1)=4$ and $f(1+h)=4+5h+h^2$. The difference quotient is $(5h+h^2)/h=5+h$ for $h\neq0$, so $f'(1)=5$. Differentiating generally gives $f'(x)=2x+3$ and $f''(x)=2$, which checks the local calculation.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Evaluate a derivative with a difference quotient and limit.
2. Compare second and higher derivatives.
3. Recognize nondifferentiable corners by unequal one-sided gradients.

## Why the method works

First principles requires a limit of a quotient with nonzero increment, followed only then by $h\to0$. A formula such as the power rule is convenient, but the quotient explains why it works and what can fail at a corner. Higher derivatives describe repeated changes; each differentiation may shorten a polynomial until it reaches zero.

## A contrasting worked route

For $f(x)=x^2+3x$, $[f(x+h)-f(x)]/h=(2xh+h^2+3h)/h=2x+h+3$ for $h\neq0$, giving $f'(x)=2x+3$. Differentiating again yields $f''=2$. By contrast, $|x|$ has left gradient $-1$ and right gradient $1$ at zero, so the same limit does not exist there.

## Transfer and validation

A derivative from a graph may be one-sided at an endpoint but not a two-sided derivative on an open neighborhood. Keep the assumption of differentiability visible before invoking rules that require it. Use dimensions to check that a second derivative has output units per squared input unit.

## Exam lens

Paper 1 style: expand and factor the numerator before using the limit; show how the denominator cancels. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Writing $0/0$ after substituting $h=0$ is not a derivative. Simplify first and then take the limit.

## Try it yourself

Use the power rule to find the third derivative of $x^4$.

## Checked answer

$f'=4x^3$, $f''=12x^2$, $f'''=24x$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
