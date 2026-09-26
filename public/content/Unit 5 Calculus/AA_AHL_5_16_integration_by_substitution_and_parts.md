# Integration by substitution and parts

> **AHL 5.16 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Substitution reverses the chain rule, while integration by parts reverses the product rule. Choose a factor whose derivative simplifies when applying parts. Repeated integration by parts can return to a starting integral, which can then be solved algebraically.

## Formula, meaning and conditions

$\int u\,dv=uv-\int v\,du$, provided the terms are integrable. For substitution $w=g(x)$, replace both the inner expression and $g'(x)\,dx$; in a definite integral also transform the limits.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists integration by parts under AHL 5.16. Derive and justify all other steps and conditions.

## Worked example

Compute $\int xe^x\,dx$. Set $u=x$ and $dv=e^x\,dx$, so $du=dx$ and $v=e^x$. Then $\int xe^x\,dx=xe^x-\int e^x\,dx=(x-1)e^x+C$. Check by differentiation: $e^x+(x-1)e^x=xe^x$. Separately, $\int2x\cos(x^2)\,dx=\sin(x^2)+C$ by substitution.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Choose a substitution that simplifies a composite integrand.
2. Use integration by parts with a deliberate $u$ choice.
3. Repeat parts or recognize a cycle without discarding constants.

## Why the method works

Substitution reverses the chain rule; parts reverses the product rule. Neither is automatically the best method for every complicated expression. For parts, selecting $u$ to become simpler on differentiation often reduces the integral. In a repeating integral, move the returned integral to the other side before dividing; skipping that step loses a factor.

## A contrasting worked route

For $\int x e^x\,dx$, take $u=x$, $dv=e^x\,dx$, so $du=dx$ and $v=e^x$. Parts gives $xe^x-\int e^x\,dx=e^x(x-1)+C$. Differentiating $e^x(x-1)$ returns $xe^x$. With a definite integral, evaluate the boundary term and remaining integral over the same limits.

## Transfer and validation

A rational integrand may be better handled by partial fractions from Topic 1 before integrating. For a substituted definite integral, transform both endpoints or change back to the original variable consistently. Keep an eye on excluded values where a simplification or logarithm changes domain.

## Exam lens

Paper 1 style: show the choices of $u$ and $dv$ and differentiate the final answer to catch a sign error. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

The minus sign in $uv-\int v\,du$ is essential; without it the derivative of the result will not match.

## Try it yourself

Evaluate $\int x\cos x\,dx$ using parts.

## Checked answer

With $u=x$, $dv=\cos x\,dx$, the result is $x\sin x+\cos x+C$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
