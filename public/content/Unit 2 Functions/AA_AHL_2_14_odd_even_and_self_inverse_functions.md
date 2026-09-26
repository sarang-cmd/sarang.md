# Odd, even and self-inverse functions

> **AHL 2.14 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Parity describes symmetry: even graphs reflect in the $y$-axis, and odd graphs rotate half a turn around the origin. Testing parity requires a domain symmetric about zero. A self-inverse function reverses itself, so composing it with itself gives the identity.

## Formula, meaning and conditions

Even: $f(-x)=f(x)$; odd: $f(-x)=-f(x)$ on a symmetric domain. Self-inverse: $f(f(x))=x$ on the correct domain. The parabola $x^2$ needs a domain restriction such as $x\geq0$ before it has an inverse function.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 2.14. Related facts may appear elsewhere. Justify any method used here.

## Worked example

The function $f(x)=x^2$ on all real numbers is even but not one-to-one since $f(2)=f(-2)$. Restrict to $x\geq0$ and the inverse becomes $\sqrt{x}$ for $x\geq0$. In contrast, $g(x)=1/x$ on nonzero reals is self-inverse: $g(g(x))=1/(1/x)=x$. It is also odd.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Check evenness and oddness on a domain symmetric about zero.
2. Test self-inverse behavior with both compositions and domain conditions.
3. Restrict a many-to-one function to obtain an inverse.

## Why the method works

The equations $f(-x)=f(x)$ and $f(-x)=-f(x)$ have meaning only when $x$ and $-x$ both belong to the domain. A self-inverse function satisfies $f(f(x))=x$, with each intermediate value in the allowed domain. A function can be neither even nor odd, and a one-sided restriction can destroy symmetry while enabling an inverse.

## A contrasting worked route

On the nonzero reals, $f(x)=2/x$ satisfies $f(f(x))=2/(2/x)=x$ and $f(-x)=-f(x)$. It is self-inverse and odd, but not even. On $x>0$ only, it remains self-inverse yet the usual oddness test is unavailable because $-x$ lies outside its domain.

## Transfer and validation

The graph of an even function is symmetric about the vertical axis; an odd function is symmetric about the origin. A graph of a self-inverse relation reflects in $y=x$. Use algebra to verify those visual suggestions and never infer that an invertible function must also be odd or even.

## Exam lens

Paper 1 style: test $f(-x)$ algebraically and explicitly mention domain symmetry. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

An even function is not automatically invertible. A horizontal line may meet its graph twice.

## Try it yourself

Is $f(x)=x^3$ odd, even, or neither?

## Checked answer

Odd: $f(-x)=(-x)^3=-x^3=-f(x)$.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
