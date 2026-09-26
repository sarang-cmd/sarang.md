# Polar and Euler form

> **AHL 1.13 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Polar form records distance from the origin and angle from the positive real axis. Multiplication then adds arguments and multiplies moduli. Euler form packages the same geometry using complex exponentials. The principal argument must use the correct quadrant.

## Formula, meaning and conditions

$z=r(\cos\theta+i\sin\theta)=re^{i\theta}$ for $r=|z|>0$; arguments differ by $2\pi k$. De Moivre: $z^n=r^n[\cos(n\theta)+i\sin(n\theta)]$. For $z=0$ the argument is undefined.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists modulus-argument and Euler forms under AHL 1.13. Derive and justify all other steps and conditions.

## Worked example

For $z=-1+i\sqrt3$, $r=\sqrt{1+3}=2$. The point lies in quadrant II, so $\theta=2\pi/3$. Hence $z=2e^{2\pi i/3}$ and $z^3=8e^{2\pi i}=8$. Cartesian checking by multiplication reaches the same result, but polar form is shorter for powers.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Find modulus and an argument using the correct quadrant.
2. Translate between Cartesian, trigonometric and Euler forms.
3. Multiply, divide and raise complex numbers to powers through modulus and angle.

## Why the method works

The modulus measures length and an argument measures direction. Angles that differ by $2\pi k$ describe the same point, so an argument must be qualified by a chosen interval when a principal value is required. Multiplying moduli and adding arguments is a geometric rotation-and-scale rule, not a rule for adding complex numbers.

## A contrasting worked route

For $z=-1+i$, the modulus is $\sqrt2$ and a principal argument is $3\pi/4$, not $-\pi/4$; the point lies in quadrant II. Then $z^2=2e^{3\pi i/2}=-2i$. Cartesian multiplication $(-1+i)^2=-2i$ independently checks both the sign and angle.

## Transfer and validation

The notation $e^{i\theta}$ is a compact name for $\cos\theta+i\sin\theta$. When returning from a polar answer to $a+bi$, reduce the angle and interpret the signs before using decimals. A modulus cannot be negative; if an algebraic calculation produces one, inspect the prior square-root step.

## Exam lens

Paper 1 style: justify the quadrant, state an appropriate argument, and use periodicity when listing all roots. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$\arctan(b/a)$ alone gives a reference angle and can select the wrong quadrant. Plot the signs of $a$ and $b$ first.

## Try it yourself

Write $1+i$ in polar form with $0\leq\theta<2\pi$.

## Checked answer

$\sqrt2e^{i\pi/4}=\sqrt2(\cos\frac\pi4+i\sin\frac\pi4)$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
