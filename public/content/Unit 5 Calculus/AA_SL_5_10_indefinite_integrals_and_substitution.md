# Indefinite integration: reverse chain rule and substitution

> **SL 5.10 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- integrate $e^{x}$, $\dfrac1x$, $\sin x$, $\cos x$ and $\dfrac{1}{\cos^{2}x}$ and combinations of these with powers of $x$;
- integrate composite functions of a linear expression, such as $\cos(3x+1)$, $e^{2x-5}$, $(2x+3)^{5}$ and $\dfrac{1}{5x-2}$, with the rule $\int f(ax+b)\,dx=\dfrac1aF(ax+b)+C$;
- recognise when an integrand has the form $f'(g(x))\,g'(x)$ (a reverse chain rule) and integrate by inspection;
- integrate by substitution, changing the variable, the integrand and $dx$, and returning to $x$;
- use $\displaystyle\int\frac{g'(x)}{g(x)}\,dx=\ln|g(x)|+C$;
- find a particular function from a derivative and a point on the curve, and check any integral by differentiating.

## Why this topic matters

Differentiation has a rule for every combination of functions, and a calculation can always be carried out. Integration is harder, because there is no product rule or quotient rule that reverses everything. What we have instead is a toolkit: standard integrals from the derivatives you know, a rule for linear inner functions, the reverse of the chain rule, and the change of variable called substitution. This chapter assembles the toolkit.

The skill is partly recognition. When you see $x\,e^{x^{2}}$ you should notice that $x$ is, up to a constant factor, the derivative of the inner function $x^{2}$ and that the integral must therefore be built on $e^{x^{2}}$. When you see $\dfrac{2x}{x^{2}+3}$ the numerator is the derivative of the denominator, so the integral is a logarithm. These patterns appear constantly in later work: in definite integrals for areas and volumes (SL 5.11 and AHL 5.17), in differential equations (AHL 5.18), and in probability, where the normal and exponential distributions involve integrals of exactly this kind. The examination pays for method marks on the substitution and the correct constant, and a candidate who differentiates the answer to check it can avoid nearly all errors.

## Core ideas

### Standard integrals

Each of these comes from reversing a derivative:

$$\int e^{x}\,dx=e^{x}+C,\qquad \int\frac1x\,dx=\ln|x|+C\quad(x\ne0),$$

$$\int\sin x\,dx=-\cos x+C,\qquad \int\cos x\,dx=\sin x+C,\qquad \int\frac{1}{\cos^{2}x}\,dx=\tan x+C.$$

The power rule $\displaystyle\int x^{n}\,dx=\dfrac{x^{n+1}}{n+1}+C$ holds for $n\ne-1$, and the case $n=-1$ is the logarithm above. Integration is linear, so $\int(af+bg)\,dx=a\int f\,dx+b\int g\,dx$ and each term is integrated separately. Always include $+C$ in an indefinite integral.

### Linear inner functions

If $\int f(x)\,dx=F(x)+C$, then for constants $a\ne0$ and $b$,

$$\int f(ax+b)\,dx=\frac1a\,F(ax+b)+C.$$

The factor $\frac1a$ compensates for the chain rule, which would multiply by $a$ when differentiating. So

$$\int\cos(3x+1)\,dx=\tfrac13\sin(3x+1)+C,\qquad \int e^{2x-5}\,dx=\tfrac12e^{2x-5}+C,$$

$$\int(2x+3)^{5}\,dx=\frac{(2x+3)^{6}}{12}+C,\qquad \int\frac{1}{5x-2}\,dx=\tfrac15\ln|5x-2|+C.$$

This works only for a *linear* inner function. For $\int e^{x^{2}}\,dx$ there is no such formula, and the integral cannot be written with standard functions.

### Reverse chain rule by inspection

The chain rule says $\dfrac{d}{dx}F(g(x))=F'(g(x))\,g'(x)$. Reading this backwards,

$$\int f(g(x))\,g'(x)\,dx=F(g(x))+C,\quad\text{where }F'=f.$$

So if the integrand consists of a function of $g(x)$ times $g'(x)$, you can integrate directly. For example, $\int2x\,e^{x^{2}}\,dx=e^{x^{2}}+C$, since $g(x)=x^{2}$ and $g'(x)=2x$. If $g'(x)$ appears only up to a constant factor, adjust: $\int x\,e^{x^{2}}\,dx=\tfrac12e^{x^{2}}+C$. Constants may be adjusted but functions of $x$ may not. A good habit is to guess the answer, differentiate it, and correct the constant factor.

### The logarithm pattern

When the numerator is the derivative of the denominator,

$$\int\frac{g'(x)}{g(x)}\,dx=\ln|g(x)|+C.$$

Thus $\displaystyle\int\frac{2x}{x^{2}+3}\,dx=\ln(x^{2}+3)+C$, and the modulus is unnecessary because $x^{2}+3>0$. Also $\int\tan x\,dx=\int\dfrac{\sin x}{\cos x}\,dx=-\ln|\cos x|+C$, because the derivative of $\cos x$ is $-\sin x$. If the numerator is a constant multiple of the derivative of the denominator, adjust the constant outside, as in $\int\dfrac{x}{x^{2}+3}\,dx=\tfrac12\ln(x^{2}+3)+C$.

### Integration by substitution

Substitution formalises the reverse chain rule and also handles cases that cannot be done by inspection. The steps are:

1. Choose a substitution $u=g(x)$, often the inner function, or the expression inside a root, or the denominator.
2. Differentiate: $\dfrac{du}{dx}=g'(x)$, so $du=g'(x)\,dx$. Rearrange to find $dx$ or $x\,dx$.
3. Replace everything in the integral by $u$, including any leftover $x$ (use $x=u-1$ and so on).
4. Integrate with respect to $u$.
5. Substitute back to write the answer in $x$.

For instance, $\displaystyle\int x(x^{2}+1)^{4}\,dx$: let $u=x^{2}+1$, so $du=2x\,dx$ and $x\,dx=\tfrac12du$. The integral becomes $\tfrac12\int u^{4}\,du=\tfrac{u^{5}}{10}+C=\dfrac{(x^{2}+1)^{5}}{10}+C$. In the examination you will often be told which substitution to use, and must show these steps fully.

A substitution where $x$ remains after replacing $dx$: for $\displaystyle\int x\sqrt{x+1}\,dx$ let $u=x+1$, so $x=u-1$ and $dx=du$. The integral is $\int(u-1)u^{1/2}\,du=\int\left(u^{3/2}-u^{1/2}\right)du=\tfrac25u^{5/2}-\tfrac23u^{3/2}+C$.

### Finding a particular function

An indefinite integral is a family of curves differing by a constant. A **boundary condition** (a point on the curve) picks one. If $f'(x)=6x^{2}-4e^{2x}$ and $f(0)=3$, integrating gives $f(x)=2x^{3}-2e^{2x}+C$ and $f(0)=-2+C=3$, so $C=5$. This is how displacement is found from velocity in SL 5.9.

### Choosing a strategy

When you meet an integral you have not seen before, work through a short checklist rather than guessing.

1. **Is it a sum?** Split it and integrate term by term, rewriting where useful: a quotient such as $\dfrac{x^{2}+1}{x}$ becomes $x+\dfrac1x$, and a product of powers is expanded or combined into one power.
2. **Is it a standard form with a linear inner function?** If so, divide by the coefficient of $x$.
3. **Is it a composite function multiplied by something that looks like the derivative of the inner function?** Look inside brackets, under roots, in exponents, and in denominators for an inner function, differentiate it, and see whether the derivative (up to a constant) appears as a factor elsewhere.
4. **Is it a fraction whose numerator is the derivative of the denominator?** Then the answer is a logarithm.
5. **Otherwise** try the substitution suggested by the question, or the simplest inner function, and see whether every $x$ can be removed.

A useful sign that a substitution has worked is that the integral in $u$ is simpler than the original. If a trial substitution leaves a mixture of $x$ and $u$ that cannot be removed, abandon it and try another. Write your guess, differentiate it, and compare: the difference between the derivative and the integrand tells you what constant factor to insert.

### Checking by differentiation

The answer to any indefinite integral must differentiate to the integrand. This check takes seconds and catches missing factors, wrong signs and mistaken constants. For example, differentiating $\dfrac{(2x+3)^{6}}{12}$ gives $\dfrac{6(2x+3)^{5}\cdot2}{12}=(2x+3)^{5}$, which confirms the earlier result.

## Worked examples

### Example 1 (standard integrals, 5 marks)

Find $\displaystyle\int\left(3e^{x}-\frac4x+2\cos x\right)dx$.

Integrate term by term: $\int3e^{x}\,dx=3e^{x}$, $\int\dfrac4x\,dx=4\ln|x|$ and $\int2\cos x\,dx=2\sin x$. The result is $3e^{x}-4\ln|x|+2\sin x+C$. The modulus signs on $\ln|x|$ matter, since the integrand is defined for negative $x$ as well, and a single constant $C$ is enough for the whole sum.

### Example 2 (linear inner functions, 6 marks)

Find (a) $\displaystyle\int\cos(3x+1)\,dx$, (b) $\displaystyle\int e^{2x-5}\,dx$ and (c) $\displaystyle\int\frac{1}{5x-2}\,dx$.

Each has a linear inner function, so divide by its coefficient. (a) $\tfrac13\sin(3x+1)+C$. (b) $\tfrac12e^{2x-5}+C$. (c) $\tfrac15\ln|5x-2|+C$. A check on (a): $\dfrac{d}{dx}\tfrac13\sin(3x+1)=\tfrac13\cdot3\cos(3x+1)=\cos(3x+1)$.

### Example 3 (a power of a linear function, 4 marks)

Find $\displaystyle\int(2x+3)^{5}\,dx$.

Treat $2x+3$ as the inner function with coefficient $2$. Then $\displaystyle\int(2x+3)^{5}\,dx=\frac{(2x+3)^{6}}{6\times2}+C=\frac{(2x+3)^{6}}{12}+C$. Expanding the bracket first would be long and error-prone, and the final answer would only differ by a constant.

### Example 4 (substitution, 6 marks)

Use the substitution $u=x^{2}+1$ to find $\displaystyle\int x(x^{2}+1)^{4}\,dx$.

With $u=x^{2}+1$, $\dfrac{du}{dx}=2x$, so $x\,dx=\tfrac12\,du$. The integral becomes $\displaystyle\tfrac12\int u^{4}\,du=\tfrac12\cdot\frac{u^{5}}{5}+C=\frac{u^{5}}{10}+C$. Returning to $x$, the answer is $\dfrac{(x^{2}+1)^{5}}{10}+C$. A differentiation check gives $\dfrac{5(x^{2}+1)^{4}\cdot2x}{10}=x(x^{2}+1)^{4}$.

### Example 5 (reverse chain rule with the exponential, 4 marks)

Find $\displaystyle\int x\,e^{x^{2}}\,dx$.

The inner function is $x^{2}$ with derivative $2x$, and the integrand contains $x$, which is half of that. So $\displaystyle\int x\,e^{x^{2}}\,dx=\tfrac12e^{x^{2}}+C$, which differentiates to $\tfrac12\cdot2x\,e^{x^{2}}=x\,e^{x^{2}}$. In substitution form, $u=x^{2}$, $du=2x\,dx$ and the integral is $\tfrac12\int e^{u}\,du$.

### Example 6 (a trigonometric power, 6 marks)

Find $\displaystyle\int\cos^{3}x\,\sin x\,dx$.

Let $u=\cos x$, so $\dfrac{du}{dx}=-\sin x$ and $\sin x\,dx=-du$. The integral becomes $-\int u^{3}\,du=-\dfrac{u^{4}}{4}+C=-\dfrac{\cos^{4}x}{4}+C$. A check by the chain rule: $\dfrac{d}{dx}\left(-\tfrac14\cos^{4}x\right)=-\tfrac14\cdot4\cos^{3}x\cdot(-\sin x)=\cos^{3}x\sin x$. The minus sign from the derivative of cosine is the most common source of error here.

### Example 7 (the logarithm pattern, 5 marks)

Find $\displaystyle\int\frac{2x}{x^{2}+3}\,dx$, and hence $\displaystyle\int\frac{x}{x^{2}+3}\,dx$.

The numerator $2x$ is the derivative of the denominator $x^{2}+3$, so $\displaystyle\int\frac{2x}{x^{2}+3}\,dx=\ln(x^{2}+3)+C$, with no modulus because $x^{2}+3>0$. The second integral has half the numerator, so its value is $\tfrac12\ln(x^{2}+3)+C$.

### Example 8 (substitution with a leftover $x$, 7 marks)

Find $\displaystyle\int x\sqrt{x+1}\,dx$ using $u=x+1$.

With $u=x+1$, $x=u-1$ and $dx=du$. Then $\displaystyle\int(u-1)u^{1/2}\,du=\int\left(u^{3/2}-u^{1/2}\right)du=\tfrac25u^{5/2}-\tfrac23u^{3/2}+C$. In terms of $x$, the answer is $\tfrac25(x+1)^{5/2}-\tfrac23(x+1)^{3/2}+C$. This can be factorised as $\tfrac{2}{15}(x+1)^{3/2}(3x-2)+C$, since $\tfrac25(x+1)-\tfrac23=\tfrac{6(x+1)-10}{15}=\tfrac{6x-4}{15}$, which equals $\tfrac{2(3x-2)}{15}$.

### Example 9 (a particular function, 5 marks)

A curve has gradient $\dfrac{dy}{dx}=6x^{2}-4e^{2x}$ and passes through $(0,3)$. Find its equation.

Integrating, $y=2x^{3}-4\cdot\tfrac12e^{2x}+C=2x^{3}-2e^{2x}+C$. Substituting $(0,3)$: $3=0-2+C$, so $C=5$. The equation is $y=2x^{3}-2e^{2x}+5$.

### Example 10 (the integral of tangent and a secant-type form, 5 marks)

Find (a) $\displaystyle\int\tan x\,dx$ and (b) $\displaystyle\int\frac{1}{\cos^{2}(2x)}\,dx$.

(a) Write $\tan x=\dfrac{\sin x}{\cos x}$. The derivative of $\cos x$ is $-\sin x$, so $\displaystyle\int\frac{\sin x}{\cos x}\,dx=-\ln|\cos x|+C$. (b) Since $\int\dfrac{1}{\cos^{2}x}\,dx=\tan x+C$, and the inner function $2x$ is linear with coefficient $2$, the answer is $\tfrac12\tan(2x)+C$. Differentiating confirms it: $\tfrac12\cdot\dfrac{2}{\cos^{2}(2x)}$.

### Example 11 (a logarithm of an exponential, 5 marks)

Find $\displaystyle\int\frac{e^{x}}{1+e^{x}}\,dx$.

The numerator $e^{x}$ is the derivative of the denominator $1+e^{x}$, so the integral is $\ln\left(1+e^{x}\right)+C$, with no modulus because $1+e^{x}>0$ for all $x$. In substitution form, $u=1+e^{x}$ and $du=e^{x}\,dx$, so the integral becomes $\int\dfrac1u\,du=\ln|u|+C$. Differentiating the answer returns $\dfrac{e^{x}}{1+e^{x}}$.

### Example 12 (a logarithm in the numerator, 5 marks)

Find $\displaystyle\int\frac{\ln x}{x}\,dx$ for $x>0$.

Let $u=\ln x$, so $du=\dfrac1x\,dx$. The integral is $\displaystyle\int u\,du=\tfrac12u^{2}+C=\tfrac12(\ln x)^{2}+C$. The factor $\dfrac1x$ in the integrand is exactly the derivative of the inner function $\ln x$, which is the signal for this substitution. A check: $\dfrac{d}{dx}\tfrac12(\ln x)^{2}=\ln x\cdot\dfrac1x$.

### Example 13 (rewriting before integrating, 5 marks)

Find $\displaystyle\int\frac{x^{2}+3x+1}{x}\,dx$ for $x>0$.

Divide each term by $x$: $\dfrac{x^{2}+3x+1}{x}=x+3+\dfrac1x$. Then $\displaystyle\int\left(x+3+\dfrac1x\right)dx=\tfrac12x^{2}+3x+\ln x+C$. Attempting to apply the logarithm pattern to the whole fraction would be wrong, because the numerator is not the derivative of the denominator.

## Using your GDC

A graphic display calculator cannot give an indefinite integral on most models used in the IB, but it is useful as a check. Plot the integrand and your answer's derivative (using the numerical derivative) to see that they agree, or evaluate a definite integral numerically and compare with your formula evaluated at the limits. For example, $\int_{0}^{1}x(x^{2}+1)^{4}\,dx$ computed numerically should equal $\dfrac{2^{5}-1}{10}=3.1$. When you take the definite integral on a calculator, make sure the angle mode is radians for trigonometric integrands. For substitution questions the calculator does not replace working: the method must be shown, so the calculator is for verification only.

## Common mistakes

- Omitting $+C$, or forgetting to use a boundary condition to find it.
- Forgetting the factor $\tfrac1a$ in $\int f(ax+b)\,dx$, or applying it to a non-linear inner function.
- Integrating $\dfrac1x$ as $\dfrac{x^{0}}{0}$ using the power rule, instead of as $\ln|x|$.
- Losing the sign when integrating $\sin x$, which gives $-\cos x$, or when substituting $u=\cos x$.
- Adjusting for a factor of $x$ instead of a constant: $\int e^{x^{2}}\,dx$ cannot be turned into $\dfrac{e^{x^{2}}}{2x}$.
- Leaving $x$ and $u$ mixed in the same integral, instead of replacing everything.
- Forgetting to return to $x$ at the end of an indefinite integral.
- Splitting a fraction wrongly: $\int\dfrac{1}{x^{2}+3}\,dx$ is not $\ln(x^{2}+3)$, since the numerator is not the derivative.

## Exam technique and command terms

**Find** the integral means an indefinite integral with $+C$. **Use the substitution** $u=\ldots$ requires you to follow that substitution and show the replacement of $dx$ and of the integrand. **Hence** means you must use an earlier result. When a question says **show that** an integral equals a given value, you must show enough working that the result is not merely stated. Always check by differentiating mentally, and when the working is short, write the check in the margin. Write the final answer in terms of the original variable. In a problem where the gradient and a point are given, state the constant explicitly and give the final equation in the form $y=f(x)$. If you cannot find the substitution, write the result of the standard integrals you can do, since partial credit is available.

## Connections

This chapter extends the power-rule integration of SL 5.5 to the full set of standard functions, and it uses the chain rule from SL 5.6 in reverse. The results feed directly into the definite integrals of SL 5.11 and the kinematics of SL 5.9 (finding displacement from velocity). In AHL 5.15 and 5.16 the toolkit is enlarged with more standard integrals, integration by parts, and substitution with new limits, and in AHL 5.18 integration solves separable differential equations. The logarithm pattern is also how the natural logarithm arises in compound growth and in the probability density of the exponential distribution.

## Check your understanding

1. Find $\displaystyle\int\left(5e^{x}+\frac3x-\sin x\right)dx$.
2. Find $\displaystyle\int\cos(4x-1)\,dx$.
3. Find $\displaystyle\int e^{3x+2}\,dx$.
4. Find $\displaystyle\int\frac{1}{2x+7}\,dx$ for $x>-\tfrac72$.
5. Find $\displaystyle\int(2x+3)^{5}\,dx$.
6. Use $u=x^{2}+1$ to find $\displaystyle\int x(x^{2}+1)^{4}\,dx$.
7. Find $\displaystyle\int x\,e^{x^{2}}\,dx$.
8. Find $\displaystyle\int\frac{2x}{x^{2}+3}\,dx$.
9. A curve has $\dfrac{dy}{dx}=6x^{2}-4e^{2x}$ and passes through $(0,3)$. Find $y$.
10. Find $\displaystyle\int\tan x\,dx$ for $0<x<\tfrac\pi2$.

### Answers

1. $5e^{x}+3\ln|x|+\cos x+C$.
2. $\tfrac14\sin(4x-1)+C$.
3. $\tfrac13e^{3x+2}+C$.
4. $\tfrac12\ln(2x+7)+C$, since $2x+7>0$.
5. $\dfrac{(2x+3)^{6}}{12}+C$.
6. $\dfrac{(x^{2}+1)^{5}}{10}+C$.
7. $\tfrac12e^{x^{2}}+C$.
8. $\ln(x^{2}+3)+C$.
9. $y=2x^{3}-2e^{2x}+C$ and $3=-2+C$ gives $C=5$, so $y=2x^{3}-2e^{2x}+5$.
10. $-\ln|\cos x|+C$, which on this interval is $-\ln(\cos x)+C$.

## Summary

- Standard integrals: $e^{x}$, $\ln|x|$ for $\frac1x$, $-\cos x$ for $\sin x$, $\sin x$ for $\cos x$, $\tan x$ for $\frac{1}{\cos^{2}x}$, and the power rule for $n\ne-1$.
- For a linear inner function, $\int f(ax+b)\,dx=\frac1aF(ax+b)+C$.
- Reverse chain rule: $\int f(g(x))g'(x)\,dx=F(g(x))+C$. Only constant factors may be adjusted.
- $\int\frac{g'(x)}{g(x)}\,dx=\ln|g(x)|+C$.
- For a substitution, replace $x$, $dx$ and the integrand by $u$, integrate, and return to $x$.
- Always add $+C$, use a boundary condition when one is given, and check by differentiating.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists standard integrals for reciprocal, sine, cosine and exponential functions under SL 5.10. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
