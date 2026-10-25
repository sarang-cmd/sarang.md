# Chain, product and quotient rules

> **SL 5.6 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- recall and use the derivatives of $x^{n}$ (including rational $n$), $\sin x$, $\cos x$, $e^{x}$ and $\ln x$;
- differentiate composite functions with the chain rule, $\dfrac{dy}{dx}=\dfrac{dy}{du}\times\dfrac{du}{dx}$, including nested composites and linear inner functions;
- differentiate products with the product rule and quotients with the quotient rule, and choose between them and rewriting;
- combine the rules in a single problem, and simplify the result by factorising;
- find gradients, tangents and stationary points for functions that need these rules;
- recognise and avoid the common errors: missing inner derivatives, wrong signs in the quotient rule, and degrees instead of radians;
- check derivatives with a calculator.

## Why this topic matters

The power rule differentiates polynomials, but real models are rarely polynomials. Radioactive decay uses $e^{-kt}$, sound waves use $\sin(\omega t)$, the pH scale uses logarithms, and the normal distribution has density proportional to $e^{-x^{2}/2}$. These functions are built from simpler pieces by composition (a function of a function), by multiplication and by division. The chain, product and quotient rules show how to differentiate such constructions by combining the derivatives of the pieces. Together with the basic derivatives, they allow you to differentiate any function you are likely to meet in the course, and they are the working tools of the whole of Unit 5.

In the examination, these rules appear in nearly every calculus question that is not purely polynomial. A typical question has a function like $x^{2}e^{-x}$ or $\dfrac{\sin x}{x}$, asks for the derivative, then uses it to locate stationary points or find the gradient at a point. The marks usually go to the correct form of the rule (such as the product of two terms with the right signs), the correct pieces and the simplified answer. Differentiation with these rules is a skill that improves with practice: after a dozen examples it becomes fast and automatic. A calculator check is available for most questions, which makes it a topic in which careful candidates can achieve full marks.

## Core ideas

### Basic derivatives

The following results are in the formula booklet and should be known:
$$
\frac{d}{dx}x^{n}=nx^{n-1},\quad \frac{d}{dx}\sin x=\cos x,\quad \frac{d}{dx}\cos x=-\sin x,\quad \frac{d}{dx}e^{x}=e^{x},\quad \frac{d}{dx}\ln x=\frac1x.
$$
The power rule works for rational $n$ too: $\dfrac{d}{dx}x^{3/2}=\tfrac32x^{1/2}$, and $\sqrt{x}=x^{1/2}$ has derivative $\dfrac{1}{2\sqrt x}$. The trigonometric results hold only when $x$ is measured in **radians**, so set your calculator accordingly. The function $e^{x}$ is its own derivative, which is the property that makes it the natural base for growth and decay.

### The chain rule

A **composite function** has the form $y=f(g(x))$, an outer function applied to an inner one. Writing $u=g(x)$ gives $y=f(u)$, and the **chain rule** states
$$
\frac{dy}{dx}=\frac{dy}{du}\times\frac{du}{dx}.
$$
In words: differentiate the outer function, leaving the inner function unchanged, then multiply by the derivative of the inner function. For example, for $y=(3x^{2}+1)^{5}$ take $u=3x^{2}+1$, so $\dfrac{dy}{du}=5u^{4}$ and $\dfrac{du}{dx}=6x$, giving $\dfrac{dy}{dx}=5(3x^{2}+1)^{4}\times6x=30x(3x^{2}+1)^{4}$. The most useful special cases have a linear inner function:
$$
\frac{d}{dx}\sin(ax+b)=a\cos(ax+b),\quad \frac{d}{dx}e^{ax+b}=ae^{ax+b},\quad \frac{d}{dx}\ln(ax+b)=\frac{a}{ax+b}.
$$
For three layers, apply the rule twice: the derivative of $\sin\big((2x+1)^{2}\big)$ is $\cos\big((2x+1)^{2}\big)\times2(2x+1)\times2$. The most common error is to forget the factor from the inner derivative.

### The product rule

If $y=uv$, where $u$ and $v$ are both functions of $x$, then
$$
\frac{dy}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.
$$
Differentiate one factor at a time, leaving the other alone, and add the results. It does *not* equal the product of the derivatives. For $y=x^{2}e^{x}$, take $u=x^{2}$ and $v=e^{x}$, so $\dfrac{dy}{dx}=x^{2}e^{x}+e^{x}\cdot2x=(x^{2}+2x)e^{x}=x(x+2)e^{x}$. After applying the rule, look for a common factor and take it out, because a factorised form makes stationary points easier to find.

### The quotient rule

If $y=\dfrac{u}{v}$, then
$$
\frac{dy}{dx}=\frac{v\dfrac{du}{dx}-u\dfrac{dv}{dx}}{v^{2}}.
$$
The order in the numerator matters because of the subtraction: it is the *denominator times the derivative of the numerator, minus the numerator times the derivative of the denominator*. A reliable memory aid is "low d-high minus high d-low, over low squared". Some quotients can be avoided by rewriting, for example $\dfrac{x^{2}}{e^{x}}=x^{2}e^{-x}$ can be handled with the product and chain rules, which many candidates find less error-prone, and $\dfrac{x^{3}+1}{x}=x^{2}+x^{-1}$ needs no rule at all. For genuine quotients such as $\dfrac{\sin x}{x}$ or $\dfrac{2x+1}{x^{2}+1}$ use the rule.

### Combining the rules

Many functions need more than one rule. For $y=x\sin(2x)$, use the product rule with $u=x$ and $v=\sin(2x)$, where differentiating $v$ needs the chain rule: $\dfrac{dy}{dx}=x\cdot2\cos(2x)+\sin(2x)\cdot1$. A useful habit is to write down $u$, $v$, $u'$ and $v'$ in a small table before substituting, which prevents the slip of using the wrong derivative. Simplify at the end, but do not over-simplify: an unsimplified correct answer earns the mark.

### Applications

With the new derivatives you can find tangents and normals (SL 5.4), intervals of increase and decrease and stationary points (SL 5.2) and the other applications of the coming chapters for a much wider range of functions. Stationary points require solving $f'(x)=0$. If the derivative has the form (polynomial)$\times e^{ax}$, then because $e^{ax}$ is never zero, you only need to solve the polynomial factor. For a derivative with the form $\dfrac{\text{numerator}}{\text{denominator}}$, the stationary points occur where the numerator is zero and the denominator is not.

## Worked examples

### Example 1 (chain rule with a power, 3 marks)

Differentiate $y=(3x^{2}+1)^{5}$.

Let $u=3x^{2}+1$, so $y=u^{5}$. Then $\dfrac{dy}{du}=5u^{4}$ and $\dfrac{du}{dx}=6x$, so $\dfrac{dy}{dx}=5(3x^{2}+1)^{4}\times6x=30x(3x^{2}+1)^{4}$. The marks are for the outer derivative, the inner derivative and the product. Notice that the inner expression $3x^{2}+1$ is unchanged in the answer, a point that is frequently missed.

### Example 2 (chain rule with standard functions, 4 marks)

Differentiate (a) $\sin(3x^{2})$, (b) $e^{2x+1}$, (c) $\ln(5x-2)$.

(a) The inner function is $3x^{2}$ with derivative $6x$, so the derivative is $6x\cos(3x^{2})$. (b) The inner derivative is $2$, so the derivative is $2e^{2x+1}$. (c) The inner derivative is $5$, so the derivative is $\dfrac{5}{5x-2}$. In each case the outer derivative uses the original inner function, and the factor from the inner derivative appears as a multiplier.

### Example 3 (product rule, 5 marks)

Differentiate (a) $y=x^{2}e^{x}$ and (b) $y=x^{3}\ln x$.

(a) With $u=x^{2}$, $v=e^{x}$, $u'=2x$, $v'=e^{x}$: $y'=x^{2}e^{x}+2xe^{x}=xe^{x}(x+2)$. (b) With $u=x^{3}$, $v=\ln x$, $u'=3x^{2}$, $v'=\dfrac1x$: $y'=x^{3}\cdot\dfrac1x+3x^{2}\ln x=x^{2}+3x^{2}\ln x=x^{2}(1+3\ln x)$. Note how the $x^{3}\cdot\tfrac1x$ simplifies to $x^{2}$.

### Example 4 (quotient rule, 6 marks)

Differentiate (a) $y=\dfrac{\sin x}{x}$ and (b) $y=\dfrac{2x+1}{x^{2}+1}$.

(a) With $u=\sin x$, $v=x$, $u'=\cos x$, $v'=1$: $y'=\dfrac{x\cos x-\sin x}{x^{2}}$. (b) With $u=2x+1$, $v=x^{2}+1$, $u'=2$, $v'=2x$: $y'=\dfrac{2(x^{2}+1)-(2x+1)(2x)}{(x^{2}+1)^{2}}=\dfrac{2x^{2}+2-4x^{2}-2x}{(x^{2}+1)^{2}}=\dfrac{-2x^{2}-2x+2}{(x^{2}+1)^{2}}=\dfrac{-2(x^{2}+x-1)}{(x^{2}+1)^{2}}$. The numerator expansion needs care with the minus sign multiplying both terms of $(2x+1)(2x)$.

### Example 5 (combining the rules, 5 marks)

Differentiate (a) $y=x\sin(2x)$ and (b) $y=\dfrac{x^{2}}{e^{x}}$.

(a) Product rule with $u=x$ and $v=\sin2x$, where $v'=2\cos2x$ by the chain rule: $y'=x\cdot2\cos2x+\sin2x\cdot1=2x\cos2x+\sin2x$. (b) Rewrite as $y=x^{2}e^{-x}$. With $u=x^{2}$, $v=e^{-x}$, $v'=-e^{-x}$: $y'=x^{2}(-e^{-x})+2xe^{-x}=e^{-x}(2x-x^{2})=x(2-x)e^{-x}$. The result of (b) can be confirmed with the quotient rule: $\dfrac{e^{x}(2x)-x^{2}e^{x}}{e^{2x}}=\dfrac{2x-x^{2}}{e^{x}}$, which is the same.

### Example 6 (evaluating a gradient, 4 marks)

Find the gradient of $y=e^{-x^{2}}$ at $x=1$.

Using the chain rule with the inner function $-x^{2}$, whose derivative is $-2x$: $\dfrac{dy}{dx}=-2xe^{-x^{2}}$. At $x=1$ this is $-2e^{-1}=-0.736$. The gradient is negative, so the curve is falling at $x=1$. The curve has a maximum at $x=0$, where the gradient is zero, and it is the bell shape that underlies the normal distribution.

### Example 7 (stationary point, 6 marks)

Find the stationary point of $y=xe^{-x}$ and determine its nature.

By the product rule, $\dfrac{dy}{dx}=x(-e^{-x})+e^{-x}=(1-x)e^{-x}$. This equals zero when $1-x=0$, since $e^{-x}>0$ for all $x$, so $x=1$ and $y=e^{-1}=0.368$. The point is $(1,0.368)$. For $x<1$, $1-x>0$ so the gradient is positive, and for $x>1$ it is negative, so the gradient changes from positive to negative and the point is a local maximum. It is also the global maximum, because $y\to0$ as $x\to\infty$ and $y<0$ for $x<0$ with $y\to-\infty$ as $x\to-\infty$.

### Example 8 (tangent to a logarithm, 5 marks)

Find the equation of the tangent to $y=\ln(2x-1)$ at the point where $x=1$.

At $x=1$, $y=\ln1=0$, so the point is $(1,0)$. The derivative is $\dfrac{dy}{dx}=\dfrac{2}{2x-1}$, which is $2$ at $x=1$. The tangent is $y-0=2(x-1)$, so $y=2x-2$. The domain of the function is $x>\tfrac12$, and the point $x=1$ lies in it.

### Example 9 (rational powers, 4 marks)

Differentiate $y=\sqrt{x^{2}+1}$.

Write $y=(x^{2}+1)^{1/2}$. With $u=x^{2}+1$, $\dfrac{dy}{du}=\tfrac12u^{-1/2}$ and $\dfrac{du}{dx}=2x$, so $\dfrac{dy}{dx}=\tfrac12(x^{2}+1)^{-1/2}\cdot2x=\dfrac{x}{\sqrt{x^{2}+1}}$. The derivative is zero only at $x=0$, where the curve has its minimum $y=1$.

### Example 10 (deriving a new derivative, 4 marks)

Use the quotient rule to show that $\dfrac{d}{dx}\tan x=\dfrac{1}{\cos^{2}x}$.

Write $\tan x=\dfrac{\sin x}{\cos x}$. With $u=\sin x$ and $v=\cos x$, $u'=\cos x$ and $v'=-\sin x$, so
$$
\frac{d}{dx}\tan x=\frac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^{2}x}=\frac{\cos^{2}x+\sin^{2}x}{\cos^{2}x}=\frac{1}{\cos^{2}x}.
$$
The identity $\cos^{2}x+\sin^{2}x=1$ completes the proof. This result is used in AHL 5.15.

## Using your GDC

To verify a derivative, enter your answer as a second function and compare tables of values with the numerical derivative of the original, at several points. If they agree for all test values, the derivative is almost certainly correct. Make sure that the calculator is in **radian** mode when you test trigonometric derivatives. For stationary points, graph the derivative and use the zero feature to find where it crosses the axis, or graph the original and use the maximum and minimum features. When entering a product like $x\,e^{-x}$ or a quotient, use brackets generously, such as $(2x+1)/(x^{2}+1)$. In an examination, a numerical check does not replace the working: the marks are for the form of the rule and the correct pieces. If a question allows calculator evaluation of a gradient at a point, use the derivative template, but if it says "find the derivative", the algebraic expression is required.

## Common mistakes

- Omitting the inner derivative in the chain rule, such as writing $\dfrac{d}{dx}\sin(3x^{2})=\cos(3x^{2})$.
- Differentiating a product as the product of the derivatives.
- Using the wrong order or sign in the quotient rule, such as $u'v-uv'$ in the numerator, which gives the negative of the correct result, or $v^{2}$ missing in the denominator.
- Differentiating $e^{-x}$ as $e^{-x}$ instead of $-e^{-x}$.
- Differentiating $\ln(5x-2)$ as $\dfrac{1}{5x-2}$, which loses the factor $5$.
- Using degrees instead of radians for trigonometric derivatives.
- Failing to simplify or to factorise before setting the derivative to zero.
- Applying the quotient rule when a simple rewriting would do, and then making an expansion error.

## Exam technique and command terms

**Differentiate** or **find** $\dfrac{dy}{dx}$ with a composite or product requires a visible rule: writing $u$, $v$ and their derivatives is a good habit that earns method marks. **Show that** requires the full working and the final form requested, often factorised. **Hence** means use the derivative you just found, for example to find stationary points. **Find the exact value** means a result such as $-2e^{-1}$ or $\dfrac{\sqrt3}{2}$, not a decimal. **Determine the nature** requires a sign change or the second derivative of SL 5.7. If the algebra becomes long, check by evaluating at a convenient value, such as $x=0$ or $x=1$, with both your derivative and a calculator's numerical derivative. Present answers with a common factor taken out when asked to "simplify" or when the next step is to solve for zero. Where a problem includes a trigonometric function, state that the angles are in radians.

## Connections

These rules extend the power rule of SL 5.3 and are needed for the tangents and normals of SL 5.4, the second derivative of SL 5.7 and the optimisation problems of SL 5.8, where functions such as $x^{2}e^{-x}$ and $\dfrac{\ln x}{x}$ appear. Reversing the chain rule gives integration by inspection and by substitution (SL 5.10 and AHL 5.16), and reversing the product rule gives integration by parts. In AHL 5.14, the chain rule is the engine of implicit differentiation and related rates, and in AHL 5.15 the same rules are applied to tangent, secant, inverse trigonometric functions and exponentials with other bases. The exponential function's special derivative is also what makes it the natural model for the differential equations of AHL 5.18.

## Check your understanding

1. Differentiate $y=(2x-3)^{4}$.
2. Differentiate $y=\cos(5x)$.
3. Differentiate $y=e^{x^{2}}$.
4. Differentiate $y=x^{2}\sin x$.
5. Differentiate $y=\dfrac{x}{x+1}$.
6. Differentiate $y=\ln(x^{2}+1)$.
7. Find the stationary points of $y=x^{2}e^{-x}$ and state their nature.
8. Find the equation of the tangent to $y=\sin x$ at $x=\dfrac{\pi}{3}$.
9. Differentiate $y=\dfrac{e^{x}}{x}$ and simplify.
10. Differentiate $y=\sqrt{1-x^{2}}$.

### Answers

1. $\dfrac{dy}{dx}=4(2x-3)^{3}\times2=8(2x-3)^{3}$.
2. $\dfrac{dy}{dx}=-5\sin(5x)$.
3. $\dfrac{dy}{dx}=2xe^{x^{2}}$.
4. Product rule: $2x\sin x+x^{2}\cos x$.
5. Quotient rule: $\dfrac{(x+1)(1)-x(1)}{(x+1)^{2}}=\dfrac{1}{(x+1)^{2}}$.
6. $\dfrac{2x}{x^{2}+1}$.
7. $\dfrac{dy}{dx}=2xe^{-x}-x^{2}e^{-x}=x(2-x)e^{-x}$, which is zero at $x=0$ and $x=2$. At $x=0$, $y=0$, a local minimum (the gradient changes from negative to positive). At $x=2$, $y=4e^{-2}=0.541$, a local maximum (the gradient changes from positive to negative).
8. At $x=\dfrac\pi3$, $y=\dfrac{\sqrt3}{2}$ and the gradient is $\cos\dfrac\pi3=\dfrac12$. The tangent is $y-\dfrac{\sqrt3}{2}=\dfrac12\left(x-\dfrac\pi3\right)$.
9. $\dfrac{xe^{x}-e^{x}}{x^{2}}=\dfrac{e^{x}(x-1)}{x^{2}}$.
10. $y=(1-x^{2})^{1/2}$, so $\dfrac{dy}{dx}=\tfrac12(1-x^{2})^{-1/2}(-2x)=\dfrac{-x}{\sqrt{1-x^{2}}}$.

## Summary

- Basic derivatives: $x^{n}\to nx^{n-1}$ (any rational $n$), $\sin x\to\cos x$, $\cos x\to-\sin x$, $e^{x}\to e^{x}$, $\ln x\to\dfrac1x$ (radians for trigonometry).
- Chain rule: $\dfrac{dy}{dx}=\dfrac{dy}{du}\dfrac{du}{dx}$. Differentiate the outside, keep the inside, multiply by the derivative of the inside.
- Product rule: $(uv)'=uv'+vu'$.
- Quotient rule: $\left(\dfrac uv\right)'=\dfrac{vu'-uv'}{v^{2}}$.
- Combine the rules in layers, write $u$, $v$ and their derivatives down, and factorise the result.
- Rewrite when it simplifies, set $f'(x)=0$ using the non-zero factor structure, and check with a calculator.
