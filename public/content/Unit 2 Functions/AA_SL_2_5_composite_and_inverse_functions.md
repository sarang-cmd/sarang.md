# Composite and inverse functions

> **SL 2.5 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Composition means applying one mapping after another. Its order matters: $f\circ g$ first applies $g$. The input must pass through the inner function and then lie in the domain of the outer one. An inverse undoes a one-to-one function on a specified domain.

## Formula, meaning and conditions

$(f\circ g)(x)=f(g(x))$. For an invertible $f$, $f(f^{-1}(x))=x$ on the range of $f$ and $f^{-1}(f(x))=x$ on its domain. The identity mapping sends $x$ to $x$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.5. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Let $f(x)=2x+1$ and $g(x)=x^2$. Then $(f\circ g)(x)=2x^2+1$ while $(g\circ f)(x)=(2x+1)^2=4x^2+4x+1$. They are different. Solve $y=2x+1$ to find $f^{-1}(x)=(x-1)/2$, and check $f(f^{-1}(x))=x$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compute $f\circ g$ and $g\circ f$ in the correct order.
2. Find inverse functions with transferred domain and range.
3. Use the identity composition as a check where inverses exist.

## Why the method works

The output of the inner function becomes the input of the outer function. Consequently, the domain of $f\circ g$ includes only inputs where $g$ is defined and $g(x)$ belongs to the domain of $f$. Reversing composition generally changes both formula and domain. Algebraic cancellation in $f(f^{-1}(x))=x$ is not enough without the matching allowed sets.

## A contrasting worked route

Let $f(x)=2x+1$ on the reals and $g(x)=\sqrt x$ on $x\geq0$. Then $(f\circ g)(x)=2\sqrt x+1$ for $x\geq0$, while $(g\circ f)(x)=\sqrt{2x+1}$ requires $x\geq-1/2$. The formulas and starting domains differ despite involving the same functions.

## Transfer and validation

A practical composition may model two sequential conversions; ask which operation happens first. When an inverse is requested, solve for the previous input and check both directions with a test value and domain statement. Confusing $f^{-1}$ with $1/f$ produces an entirely different operation.

## Exam lens

Paper 1 style: write the inner substitution visibly, and state domain restrictions when square roots or denominators are involved. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Do not cancel an $f$ against a $g$. The composition is ordered and cannot be treated like ordinary multiplication.

## Try it yourself

If $f(x)=x+3$ and $g(x)=2x$, find $(g\circ f)(4)$.

## Checked answer

$f(4)=7$ and $g(7)=14$.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
