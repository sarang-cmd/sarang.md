# Differentiating integer powers

> **SL 5.3 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

The power rule turns a polynomial's local rate into another algebraic expression. It also works for negative integer powers away from excluded inputs. Differentiation is linear, so handle sums term by term.

## Formula, meaning and conditions

$\dfrac{d}{dx}x^n=nx^{n-1}$ for the appropriate domain, including integer $n$. Constants differentiate to zero and $d(af+bg)/dx=af'+bg'$. For a negative power, retain any domain restriction such as $x\neq0$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists power derivative under SL 5.3. Derive and justify all other steps and conditions.

## Worked example

Differentiate $f(x)=2x^3-5x+1$: $f'(x)=6x^2-5$. At $x=1$, the slope is $6-5=1$. Separately, $d(x^{-2})/dx=-2x^{-3}$ for $x\neq0$. Check the first result by noting the constant $1$ contributes no slope.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Differentiate integer powers, including negative powers on their domains.
2. Combine constant, sum and power rules.
3. Evaluate a derivative at a specified coordinate and interpret its unit.

## Why the method works

The power rule replaces $x^n$ by $nx^{n-1}$ for integer $n$ wherever the original function is differentiable. A negative exponent represents a reciprocal and excludes $x=0$. Differentiation acts term by term on a polynomial sum; a constant derivative is zero because its local change is always zero.

## A contrasting worked route

For $f(x)=4x^3-3x^{-2}+7$, $f'(x)=12x^2+6x^{-3}$ for $x\neq0$. At $x=1$, the gradient is $18$. At $x=0$, neither the reciprocal term nor the derivative exists, so an algebraic expression that contains negative powers must carry its domain.

## Transfer and validation

Check the result by differentiating a simple antiderivative in reverse or by comparing a small numerical secant near a permitted point. When a time-dependent function is a position, the derivative is velocity rather than another position. State whether a requested answer is a function or one evaluated number.

## Exam lens

Paper 1 style: show a separate derivative for each term before evaluating at a point. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Do not keep the constant $+1$ in $f'$. The derivative of any constant is zero.

## Try it yourself

Find $d(3x^4-2x^2)/dx$.

## Checked answer

$12x^3-4x$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
