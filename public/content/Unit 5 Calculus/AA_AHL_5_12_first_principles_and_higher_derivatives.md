# Derivatives from first principles and higher derivatives

> **AHL 5.12 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state and use the definition $f'(x)=\displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$ to differentiate polynomials, reciprocals, roots and trigonometric functions from first principles;
- show a derivative from first principles by simplifying the difference quotient before letting $h\to0$, with correct limit notation;
- decide, from first principles or from one-sided limits, whether a function is continuous or differentiable at a point, and explain why differentiable implies continuous but not conversely;
- find the values of constants that make a piecewise function continuous and differentiable at a join;
- find higher derivatives $f''$, $f'''$ and $f^{(n)}$ using the notation $\dfrac{d^{n}y}{dx^{n}}$;
- find and prove a general formula for $f^{(n)}(x)$ for simple functions such as $e^{ax}$, $\ln x$, $\sin x$ and $xe^{x}$, with induction where it is required.

## Why this topic matters

In the SL course the derivative is introduced as a gradient and then used through a set of rules. At higher level we ask where those rules come from. The derivative is defined as a limit, and every rule you know (the power rule, the product rule, the derivatives of sine and the exponential) is a theorem that can be proved from that definition. Being able to differentiate from first principles is therefore a demonstration that you understand what a derivative *is*, and the examination requires it explicitly: "differentiate $f(x)=\dfrac1x$ from first principles" is a standard question worth five or six marks and one in which every line of the notation is marked.

The same definition tells us when a derivative does *not* exist. A graph with a sharp corner, a vertical tangent or a jump has no gradient at that point, and recognising this is part of understanding what the derivative measures. Higher derivatives complete the picture: the second derivative measures curvature and acceleration, and in AHL 5.19 the successive derivatives of a function at one point are exactly what is needed to build a polynomial approximation, the Maclaurin series. This chapter is the foundation for those later results, and it also trains the careful algebra of limits, which you will use again in AHL 5.13.

## Core ideas

### The definition of the derivative

The gradient of the chord from $(x,f(x))$ to $(x+h,f(x+h))$ is $\dfrac{f(x+h)-f(x)}{h}$. As $h$ becomes smaller, the chord approaches the tangent. The derivative is the limit

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h},$$

provided the limit exists. The expression inside the limit is called the **difference quotient**. You cannot substitute $h=0$ at the start, since it gives $\frac00$. The algebra must be done first, to cancel the factor $h$, and then $h\to0$.

At a specific point $x=a$, an equivalent form is $f'(a)=\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$.

### The method

1. Write $f(x+h)$ and $f(x)$.
2. Form $\dfrac{f(x+h)-f(x)}{h}$ and simplify (expand, combine fractions, or rationalise) until the $h$ in the denominator cancels.
3. Take the limit as $h\to0$.
4. State the result, using the notation $\lim_{h\to0}$ at every line until the limit is evaluated.

For polynomials, the expansion of $(x+h)^{n}$ with the binomial theorem shows the power rule. For instance, $(x+h)^{3}-x^{3}=3x^{2}h+3xh^{2}+h^{3}$, so the quotient is $3x^{2}+3xh+h^{2}$, which tends to $3x^{2}$.

### Reciprocals and roots

For a reciprocal, combine the fractions: $\dfrac1{x+h}-\dfrac1x=\dfrac{x-(x+h)}{x(x+h)}=\dfrac{-h}{x(x+h)}$, so the quotient is $\dfrac{-1}{x(x+h)}\to-\dfrac1{x^{2}}$. For a square root, multiply numerator and denominator by the conjugate: $\sqrt{x+h}-\sqrt x=\dfrac{h}{\sqrt{x+h}+\sqrt x}$, so the quotient becomes $\dfrac{1}{\sqrt{x+h}+\sqrt x}\to\dfrac1{2\sqrt x}$.

### Trigonometric functions

For $f(x)=\sin x$, the compound-angle formula gives $\sin(x+h)=\sin x\cos h+\cos x\sin h$, so

$$\frac{\sin(x+h)-\sin x}{h}=\sin x\cdot\frac{\cos h-1}{h}+\cos x\cdot\frac{\sin h}{h}.$$

The two standard limits $\displaystyle\lim_{h\to0}\frac{\sin h}{h}=1$ and $\displaystyle\lim_{h\to0}\frac{\cos h-1}{h}=0$ (with $h$ in radians) then give $f'(x)=\cos x$. The first limit is justified geometrically from the inequality $\sin h<h<\tan h$, and the second follows from $\cos h-1=-2\sin^{2}\tfrac h2$. In an examination you may quote the standard limits, but you must state them.

### Continuity and differentiability

A function is **continuous at $x=a$** if $\displaystyle\lim_{x\to a}f(x)=f(a)$, meaning that the left and right limits exist and equal the value of the function. It is **differentiable at $x=a$** if the limit defining $f'(a)$ exists, which requires that the one-sided limits of the difference quotient from the left and the right are equal and finite. The two properties are related by a one-way implication:

- if $f$ is differentiable at $a$, then $f$ is continuous at $a$;
- the converse is false: $f(x)=|x|$ is continuous at $0$ but not differentiable there, since the gradient is $-1$ from the left and $+1$ from the right.

A function fails to be differentiable at a **corner** (different one-sided gradients), at a **vertical tangent** (the gradient is infinite, for example $x^{1/3}$ at $0$), at a **discontinuity**, and at a **cusp**. For a piecewise function, check the join in two stages: first that the values match (continuity), then that the derivatives of the two pieces match (differentiability).

### Higher derivatives

Differentiating $f'$ gives the second derivative $f''$, and so on. The notation is

$$f'(x),\ f''(x),\ f'''(x),\ \ldots,\ f^{(n)}(x)\qquad\text{or}\qquad\frac{dy}{dx},\ \frac{d^{2}y}{dx^{2}},\ \ldots,\ \frac{d^{n}y}{dx^{n}}.$$

The brackets in $f^{(n)}$ distinguish a derivative from a power. For a polynomial of degree $m$, the derivative of order $m+1$ is zero. Patterns often appear:

$$\frac{d^{n}}{dx^{n}}e^{ax}=a^{n}e^{ax},\qquad \frac{d^{n}}{dx^{n}}\sin x=\sin\!\left(x+\frac{n\pi}{2}\right),$$

$$\frac{d^{n}}{dx^{n}}\ln x=\frac{(-1)^{n-1}(n-1)!}{x^{n}},\qquad \frac{d^{n}}{dx^{n}}\frac1{1-x}=\frac{n!}{(1-x)^{n+1}}.$$

### Proving a formula for the $n$th derivative

A general formula for $f^{(n)}$ is proved by induction, as in AHL 1.15. State the claim $P(n)$, check that $P(1)$ is true, assume $P(k)$ and differentiate once more to show that $P(k+1)$ follows, and then conclude. For example, to show $\dfrac{d^{n}}{dx^{n}}(xe^{x})=(x+n)e^{x}$: for $n=1$ the product rule gives $e^{x}+xe^{x}=(x+1)e^{x}$. If $f^{(k)}=(x+k)e^{x}$, then $f^{(k+1)}=e^{x}+(x+k)e^{x}=(x+k+1)e^{x}$, which is the claim for $n=k+1$.

### Smoothness and the second derivative

The second derivative has meaning for the shape of the graph, as in SL 5.7, and the third derivative measures the rate of change of curvature. In kinematics the third derivative of displacement is called the jerk. Whether a function has derivatives of all orders at a point is a measure of how smooth it is, and this determines whether it can be approximated by a Maclaurin series.

## Worked examples

### Example 1 (a cubic from first principles, 5 marks)

Differentiate $f(x)=x^{3}$ from first principles.

We have $f(x+h)-f(x)=(x+h)^{3}-x^{3}=3x^{2}h+3xh^{2}+h^{3}$. Hence $\dfrac{f(x+h)-f(x)}{h}=3x^{2}+3xh+h^{2}$, and so $f'(x)=\displaystyle\lim_{h\to0}\left(3x^{2}+3xh+h^{2}\right)=3x^{2}$.

### Example 2 (a reciprocal, 6 marks)

Differentiate $f(x)=\dfrac1x$ from first principles, for $x\ne0$.

$\displaystyle\frac{f(x+h)-f(x)}{h}=\frac1h\left(\frac1{x+h}-\frac1x\right)=\frac1h\cdot\frac{x-(x+h)}{x(x+h)}=\frac1h\cdot\frac{-h}{x(x+h)}=\frac{-1}{x(x+h)}$. Taking the limit, $f'(x)=\displaystyle\lim_{h\to0}\frac{-1}{x(x+h)}=-\frac1{x^{2}}$.

### Example 3 (a square root, 6 marks)

Differentiate $f(x)=\sqrt x$ from first principles for $x>0$.

The quotient is $\dfrac{\sqrt{x+h}-\sqrt x}{h}$. Multiplying numerator and denominator by $\sqrt{x+h}+\sqrt x$ gives $\dfrac{(x+h)-x}{h\left(\sqrt{x+h}+\sqrt x\right)}=\dfrac{1}{\sqrt{x+h}+\sqrt x}$. As $h\to0$ this tends to $\dfrac1{2\sqrt x}$, so $f'(x)=\dfrac{1}{2\sqrt x}$.

### Example 4 (sine, 6 marks)

Prove from first principles that the derivative of $\sin x$ is $\cos x$, using $\displaystyle\lim_{h\to0}\frac{\sin h}{h}=1$ and $\displaystyle\lim_{h\to0}\frac{\cos h-1}{h}=0$.

We have $\dfrac{\sin(x+h)-\sin x}{h}=\dfrac{\sin x\cos h+\cos x\sin h-\sin x}{h}=\sin x\cdot\dfrac{\cos h-1}{h}+\cos x\cdot\dfrac{\sin h}{h}$. Letting $h\to0$, the first term tends to $\sin x\cdot0=0$ and the second to $\cos x\cdot1=\cos x$. Therefore $\dfrac{d}{dx}\sin x=\cos x$. This holds for $x$ in radians only, because the standard limit $\frac{\sin h}{h}\to1$ requires radians.

### Example 5 (differentiable but with a join, 7 marks)

A function is defined by $f(x)=x^{2}$ for $x\le1$ and $f(x)=ax+b$ for $x>1$. Find $a$ and $b$ so that $f$ is differentiable at $x=1$.

For continuity at $x=1$ the values must match: $1^{2}=a+b$, so $a+b=1$. For differentiability the gradients must match. The left derivative is $2x=2$ at $x=1$, and the right derivative is $a$, so $a=2$. Then $b=1-a=-1$. The function is $f(x)=2x-1$ for $x>1$, which is the tangent to the parabola at $(1,1)$. The conditions are applied in order: continuity is necessary before differentiability makes sense.

### Example 6 (a corner, 5 marks)

Show that $f(x)=|x|$ is not differentiable at $x=0$.

For $h>0$, $\dfrac{f(0+h)-f(0)}{h}=\dfrac{h}{h}=1$, so the right-hand limit is $1$. For $h<0$, $\dfrac{|h|}{h}=\dfrac{-h}{h}=-1$, so the left-hand limit is $-1$. The two one-sided limits are different, so $\lim_{h\to0}\dfrac{f(h)-f(0)}{h}$ does not exist, and $f$ is not differentiable at $0$. The function is nevertheless continuous at $0$, since $|h|\to0=f(0)$.

### Example 7 (a function with a surprise, 8 marks)

Let $f(x)=x^{2}\sin\dfrac1x$ for $x\ne0$ and $f(0)=0$. Show that $f$ is differentiable at $x=0$ and find $f'(0)$.

By the definition, $f'(0)=\displaystyle\lim_{h\to0}\frac{f(h)-f(0)}{h}=\lim_{h\to0}\frac{h^{2}\sin\frac1h}{h}=\lim_{h\to0}h\sin\frac1h$. Since $-1\le\sin\dfrac1h\le1$, we have $-|h|\le h\sin\dfrac1h\le|h|$, and both bounds tend to $0$, so by the squeeze theorem the limit is $0$. Thus $f'(0)=0$. Away from zero, $f'(x)=2x\sin\dfrac1x-\cos\dfrac1x$, which oscillates and has no limit as $x\to0$, so the derivative exists at $0$ but is not continuous there.

### Example 8 (higher derivatives of an exponential product, 6 marks)

Find the first three derivatives of $f(x)=xe^{x}$ and conjecture a formula for $f^{(n)}(x)$. Prove it by induction.

The product rule gives $f'(x)=(x+1)e^{x}$, $f''(x)=e^{x}+(x+1)e^{x}=(x+2)e^{x}$ and $f'''(x)=(x+3)e^{x}$. The conjecture is $f^{(n)}(x)=(x+n)e^{x}$. For $n=1$ it is true. Assume it is true for $n=k$. Then $f^{(k+1)}(x)=\dfrac{d}{dx}\left[(x+k)e^{x}\right]=e^{x}+(x+k)e^{x}=(x+k+1)e^{x}$, which is the statement for $n=k+1$. By induction, the formula holds for all positive integers $n$.

### Example 9 (the $n$th derivative of a logarithm, 7 marks)

Find $f^{(n)}(x)$ for $f(x)=\ln x$ and use it to find $f^{(4)}(2)$.

The first derivatives are $f'(x)=x^{-1}$, $f''(x)=-x^{-2}$, $f'''(x)=2x^{-3}$ and $f^{(4)}(x)=-6x^{-4}$. The pattern is $f^{(n)}(x)=\dfrac{(-1)^{n-1}(n-1)!}{x^{n}}$. Check at $n=4$: $(-1)^{3}\cdot3!=-6$, which matches. The value is $f^{(4)}(2)=\dfrac{-6}{2^{4}}=-\dfrac38$. The proof is by induction: if $f^{(k)}=(-1)^{k-1}(k-1)!\,x^{-k}$, differentiating gives $(-1)^{k-1}(k-1)!\cdot(-k)x^{-k-1}=(-1)^{k}k!\,x^{-(k+1)}$.

### Example 10 (a function with a vertical tangent, 5 marks)

Show that $f(x)=x^{1/3}$ is continuous but not differentiable at $x=0$.

Continuity: $h^{1/3}\to0=f(0)$ as $h\to0$. For the derivative, $\dfrac{f(h)-f(0)}{h}=\dfrac{h^{1/3}}{h}=h^{-2/3}$, which grows without bound as $h\to0$ from either side. The limit does not exist (it is infinite), so $f$ is not differentiable at $0$: the graph has a vertical tangent there.

## Using your GDC

A graphic display calculator can illustrate the definition. Define $f$ and compute the difference quotient for $h=0.1,\,0.01,\,0.001$ in a table, and watch the values approach $f'(x)$. Plotting $y=\dfrac{f(x+h)-f(x)}{h}$ for a small $h$ shows the derivative curve approximately. The numerical derivative feature gives a value at a point, which is a good check of a first-principles result, but it can give a finite number at a corner such as $|x|$ at $0$, because it uses a symmetric difference, so do not rely on it to show differentiability. Higher derivatives can be checked by differentiating symbolically or by plotting. A first-principles proof, however, must always be written algebraically.

## Common mistakes

- Substituting $h=0$ before simplifying, writing $\frac00$ or dropping the limit notation too early or keeping it too late.
- Writing $f(x+h)=f(x)+h$, forgetting that the function applies to the whole of $x+h$, as in $(x+h)^{2}\ne x^{2}+h^{2}$.
- Making an algebraic slip in the sign when combining fractions, as in $\dfrac1{x+h}-\dfrac1x$.
- Using degrees with trigonometric limits.
- Claiming that continuity implies differentiability, or forgetting to check continuity first when finding constants for a piecewise function.
- Matching derivatives at a join without matching function values.
- Concluding from a numerical derivative at a corner that the function is differentiable.
- Omitting the base case or the inductive hypothesis in a proof of a formula for $f^{(n)}$, or the factor $(-1)^{n-1}$ in the derivatives of $\ln x$.

## Exam technique and command terms

**Differentiate from first principles** and **use the definition of the derivative** require the limit notation and the difference quotient; using a differentiation rule earns nothing. **Show that** requires a complete, logical chain reaching the stated result. **Prove by induction** requires the four standard steps: base case, assumption, inductive step and conclusion. **Determine whether $f$ is differentiable at $x=a$** requires a check of the one-sided gradients and a clear concluding statement. In a piecewise question, write the continuity equation and the differentiability equation separately and number them. Time spent on neat algebra in the difference quotient pays off, since an algebraic slip in the first line can ruin the later marks. When a standard limit is used, quote it.

## Connections

This chapter justifies the rules of SL 5.3 and SL 5.6 from the definition introduced in SL 5.1, and the induction proofs use the method of AHL 1.15. The limits it uses are developed systematically in AHL 5.13, where L'Hôpital's rule provides an alternative way to evaluate indeterminate forms. Higher derivatives appear in the second derivative test (SL 5.7), in kinematics (SL 5.9) where the second derivative of displacement is acceleration, and above all in AHL 5.19, where the coefficient of $x^{n}$ in the Maclaurin series is $\dfrac{f^{(n)}(0)}{n!}$. The standard derivatives of the trigonometric functions rely on the compound-angle formulas of Unit 3.

## Check your understanding

1. Differentiate $f(x)=x^{2}$ from first principles.
2. Differentiate $f(x)=\dfrac1x$ from first principles for $x\ne0$.
3. Differentiate $f(x)=\sqrt x$ from first principles for $x>0$.
4. Find $f'(x)$ from first principles for $f(x)=3x^{2}-2x$.
5. Find $a$ and $b$ so that $f(x)=x^{2}$ for $x\le1$ and $f(x)=ax+b$ for $x>1$ is differentiable at $x=1$.
6. Show that $f(x)=|x-2|$ is continuous but not differentiable at $x=2$.
7. Find $\dfrac{d^{4}}{dx^{4}}\sin(2x)$.
8. Find $f'''(x)$ for $f(x)=xe^{x}$.
9. Find $f^{(4)}(x)$ for $f(x)=\ln x$ and evaluate it at $x=2$.
10. Explain why a function that is differentiable at a point must be continuous there.

### Answers

1. $\dfrac{(x+h)^{2}-x^{2}}{h}=2x+h\to2x$.
2. $\dfrac{1}{h}\left(\dfrac1{x+h}-\dfrac1x\right)=\dfrac{-1}{x(x+h)}\to-\dfrac1{x^{2}}$.
3. Multiply by the conjugate: $\dfrac{1}{\sqrt{x+h}+\sqrt x}\to\dfrac1{2\sqrt x}$.
4. $\dfrac{3(x+h)^{2}-2(x+h)-3x^{2}+2x}{h}=\dfrac{6xh+3h^{2}-2h}{h}=6x+3h-2\to6x-2$.
5. Continuity $a+b=1$, gradient $a=2$, so $a=2$ and $b=-1$.
6. For $h>0$ the quotient is $\dfrac{|h|}{h}=1$ and for $h<0$ it is $-1$, so the limit does not exist. $|h|\to0=f(2)$, so it is continuous.
7. Each derivative of $\sin2x$ brings a factor of $2$ and moves through $\cos$, $-\sin$, $-\cos$, $\sin$, so $\dfrac{d^{4}}{dx^{4}}\sin2x=16\sin2x$.
8. $f'''(x)=(x+3)e^{x}$.
9. $f^{(4)}(x)=-\dfrac{6}{x^{4}}$, so $f^{(4)}(2)=-\dfrac{6}{16}=-\dfrac38$.
10. If $f'(a)$ exists, then $f(a+h)-f(a)=h\cdot\dfrac{f(a+h)-f(a)}{h}\to0\cdot f'(a)=0$ as $h\to0$, so $f(a+h)\to f(a)$, which is continuity.

## Summary

- $f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$. Simplify the difference quotient first, then take the limit, writing the limit notation throughout.
- Differentiable implies continuous, but not the reverse: corners, vertical tangents and discontinuities prevent differentiability.
- A piecewise function is differentiable at a join if both the values and the derivatives of the pieces agree.
- Higher derivatives $f^{(n)}$ often follow a pattern, which is proved by induction.
- Standard patterns: $\frac{d^{n}}{dx^{n}}e^{ax}=a^{n}e^{ax}$ and $\frac{d^{n}}{dx^{n}}\ln x=\frac{(-1)^{n-1}(n-1)!}{x^{n}}$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists first-principles derivative under AHL 5.12. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
