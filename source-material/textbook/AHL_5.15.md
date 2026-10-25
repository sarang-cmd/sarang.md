# Further derivatives and indefinite integration

> **AHL 5.15 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- differentiate $\tan x$, $\sec x$, $\csc x$, $\cot x$, $a^{x}$, $\log_{a}x$, $\arcsin x$, $\arccos x$ and $\arctan x$, including composite versions with the chain rule;
- derive the derivatives of the reciprocal trigonometric functions with the quotient rule, and the derivatives of the inverse trigonometric functions by implicit differentiation;
- integrate $a^{x}$, $\dfrac{1}{x^{2}+a^{2}}$ and $\dfrac{1}{\sqrt{a^{2}-x^{2}}}$ and recognise these forms after completing the square or using a linear substitution;
- combine these results with the chain rule, product rule and quotient rule to differentiate and integrate more complicated functions;
- evaluate definite integrals that give multiples of $\pi$ or logarithms exactly;
- find tangents and gradients involving the new functions.

## Why this topic matters

In the SL course the family of functions you could differentiate was small: powers, sines, cosines, exponentials and logarithms. At higher level the family expands to include the remaining trigonometric functions, exponentials and logarithms in any base, and the inverse trigonometric functions. These are the functions that model periodic motion with tangent behaviour, exponential processes in different units (such as doubling every day), and the angle as a function of position in geometry. The derivative of the inverse trigonometric functions is perhaps the most surprising result of the chapter: differentiating the function that gives an angle produces an algebraic expression without any trigonometry, namely $\dfrac{1}{\sqrt{1-x^{2}}}$ or $\dfrac{1}{1+x^{2}}$.

That surprise is exactly what makes those results valuable in reverse. An integral such as $\displaystyle\int\frac{1}{x^{2}+9}\,dx$ cannot be found with the power rule or a logarithm, but it is an inverse tangent in disguise. Integrals of this type arise in the area under a bell-shaped curve, in the solution of differential equations for oscillators and in the calculation of arc length and areas of circular regions. The examination formula booklet gives most of these results, but you need to recognise the forms, adjust constants correctly, and handle composite versions. Marks are lost mostly through a missing chain-rule factor, a wrong constant in the integral form, or applying the arctan form when the denominator is not of that shape.

## Core ideas

### Derivatives of the other trigonometric functions

The quotient rule applied to $\tan x=\dfrac{\sin x}{\cos x}$ gives
$$\frac{d}{dx}\tan x=\frac{\cos x\cos x+\sin x\sin x}{\cos^{2}x}=\frac{1}{\cos^{2}x}=\sec^{2}x.$$
Similarly, writing $\sec x=\dfrac{1}{\cos x}$, $\csc x=\dfrac1{\sin x}$ and $\cot x=\dfrac{\cos x}{\sin x}$,
$$\frac{d}{dx}\sec x=\sec x\tan x,\qquad\frac{d}{dx}\csc x=-\csc x\cot x,\qquad\frac{d}{dx}\cot x=-\csc^{2}x.$$
The three "co" functions have negative derivatives, just as $\cos x$ does. With the chain rule, $\dfrac{d}{dx}\tan(kx)=k\sec^{2}(kx)$ and $\dfrac{d}{dx}\sec(2x)=2\sec(2x)\tan(2x)$.

### Exponentials and logarithms in other bases

Since $a^{x}=e^{x\ln a}$, the chain rule gives $\dfrac{d}{dx}a^{x}=a^{x}\ln a$. For logarithms, $\log_{a}x=\dfrac{\ln x}{\ln a}$, so
$$\frac{d}{dx}\log_{a}x=\frac{1}{x\ln a}.$$
The natural base $e$ is special because $\ln e=1$, so that the extra factor disappears. The integral reverses the first rule: $\displaystyle\int a^{x}\,dx=\frac{a^{x}}{\ln a}+C$.

### Derivatives of inverse trigonometric functions

If $y=\arcsin x$ for $-1<x<1$, then $\sin y=x$ with $-\frac\pi2\le y\le\frac\pi2$. Differentiating implicitly, $\cos y\dfrac{dy}{dx}=1$, so $\dfrac{dy}{dx}=\dfrac1{\cos y}$. Since $\cos y\ge0$ on this range, $\cos y=\sqrt{1-\sin^{2}y}=\sqrt{1-x^{2}}$. Therefore
$$\frac{d}{dx}\arcsin x=\frac{1}{\sqrt{1-x^{2}}},\qquad\frac{d}{dx}\arccos x=-\frac{1}{\sqrt{1-x^{2}}},\qquad\frac{d}{dx}\arctan x=\frac{1}{1+x^{2}}.$$
The third follows in the same way: $\tan y=x$ gives $\sec^{2}y\dfrac{dy}{dx}=1$, and $\sec^{2}y=1+\tan^{2}y=1+x^{2}$. With the chain rule, $\dfrac{d}{dx}\arctan(g(x))=\dfrac{g'(x)}{1+g(x)^{2}}$ and $\dfrac{d}{dx}\arcsin(g(x))=\dfrac{g'(x)}{\sqrt{1-g(x)^{2}}}$.

Note that the arcsine and arccosine have derivatives that are negatives of each other, which reflects the identity $\arcsin x+\arccos x=\dfrac\pi2$.

### Integrals from the inverse trigonometric derivatives

Reading these derivatives backwards, for $a>0$:
$$\int\frac{1}{x^{2}+a^{2}}\,dx=\frac1a\arctan\frac xa+C,\qquad\int\frac{1}{\sqrt{a^{2}-x^{2}}}\,dx=\arcsin\frac xa+C\quad(|x|<a).$$
The factor $\frac1a$ in the first result comes from the substitution $x=au$: $\int\dfrac{a\,du}{a^{2}(u^{2}+1)}=\dfrac1a\arctan u$. The second has no factor because the $a$ cancels. These forms appear in the formula booklet, and the skill is to recognise them in less obvious clothing.

### Adjusting to the standard form

A linear substitution deals with a coefficient on $x$: for example $\displaystyle\int\frac{1}{25+4x^{2}}\,dx$ with $u=2x$ gives $\tfrac12\int\frac1{25+u^{2}}\,du=\tfrac1{10}\arctan\frac{2x}{5}+C$. A quadratic with no $x^{2}$ term in the numerator but with a linear term in the denominator is handled by **completing the square**: $x^{2}+2x+5=(x+1)^{2}+4$, so $\displaystyle\int\frac{1}{x^{2}+2x+5}\,dx=\tfrac12\arctan\frac{x+1}{2}+C$. If the numerator is the derivative of the denominator, the answer is a logarithm instead, as in SL 5.10. A combination such as $\dfrac{x}{x^{4}+1}$ is a substitution $u=x^{2}$ followed by the arctan form.

### Recognising which integral form to use

Three integrals look alike and are easy to confuse. Look at the denominator.

- A **sum of squares**, $x^{2}+a^{2}$ (possibly after completing the square), means an **arctangent**: $\dfrac1a\arctan\dfrac xa$.
- A **square root of a difference**, $\sqrt{a^{2}-x^{2}}$, means an **arcsine**: $\arcsin\dfrac xa$.
- A **difference of squares**, $x^{2}-a^{2}$, is neither; it needs partial fractions (AHL 1.11) and gives logarithms.

If the numerator contains $x$ rather than a constant, ask whether it is a multiple of the derivative of the denominator, which gives a logarithm for $\dfrac{x}{x^{2}+a^{2}}$ and a square root for $\dfrac{x}{\sqrt{a^{2}-x^{2}}}$, namely $-\sqrt{a^{2}-x^{2}}$. Writing a quick differentiation check in the margin settles any doubt about constants.

### The derivative of an inverse function

If $g$ is the inverse of $f$, so that $g(f(x))=x$, the chain rule gives $g'(f(x))\,f'(x)=1$. Thus
$$g'(y)=\frac{1}{f'(g(y))}.$$
This is the general principle behind the derivatives of $\arcsin$, $\arccos$ and $\arctan$, and it is also how $\dfrac{d}{dx}\ln x=\dfrac1x$ follows from $\dfrac{d}{dx}e^{x}=e^{x}$. The gradient of the inverse at a point is the reciprocal of the gradient of the original at the corresponding point, which is a reflection in the line $y=x$ turning gradient $m$ into $\dfrac1m$.

### Combining the rules

The new derivatives can be used with the product, quotient and chain rules, for instance $\dfrac{d}{dx}\left(x\arcsin x\right)=\arcsin x+\dfrac{x}{\sqrt{1-x^{2}}}$. For integration, the reverse of the chain rule from SL 5.10 still applies: for example $\int\tan x\sec^{2}x\,dx=\tfrac12\tan^{2}x+C$ by the substitution $u=\tan x$.

### Domains and ranges

The inverse trigonometric functions have restricted domains: $\arcsin$ and $\arccos$ are defined on $[-1,1]$ and $\arctan$ on all real numbers, with ranges $\left[-\tfrac\pi2,\tfrac\pi2\right]$, $[0,\pi]$ and $\left(-\tfrac\pi2,\tfrac\pi2\right)$ respectively. The derivatives of $\arcsin$ and $\arccos$ are not defined at $x=\pm1$, where the graph has vertical tangents. The derivative of $\arctan$ is always positive, with maximum value $1$ at $x=0$, and tends to $0$ in both directions, consistent with the horizontal asymptotes $y=\pm\frac\pi2$.

## Worked examples

### Example 1 (the tangent function, 4 marks)

Differentiate (a) $y=\tan3x$ and (b) $y=\sec2x$.

(a) By the chain rule, $\dfrac{dy}{dx}=3\sec^{2}3x$. (b) $\dfrac{dy}{dx}=2\sec2x\tan2x$. In each case the derivative of the standard function is multiplied by the derivative of the inner function, $3$ and $2$ respectively.

### Example 2 (deriving a reciprocal function, 5 marks)

Use the quotient rule to show that $\dfrac{d}{dx}\cot x=-\csc^{2}x$.

Write $\cot x=\dfrac{\cos x}{\sin x}$. Then $\dfrac{d}{dx}\cot x=\dfrac{(-\sin x)\sin x-\cos x\cos x}{\sin^{2}x}=\dfrac{-(\sin^{2}x+\cos^{2}x)}{\sin^{2}x}=-\dfrac{1}{\sin^{2}x}=-\csc^{2}x$.

### Example 3 (another base, 4 marks)

Find $\dfrac{d}{dx}2^{x}$ and the gradient of $y=\log_{3}x$ at $x=5$.

$\dfrac{d}{dx}2^{x}=2^{x}\ln2$. For the logarithm, $\dfrac{dy}{dx}=\dfrac{1}{x\ln3}$, so at $x=5$ the gradient is $\dfrac{1}{5\ln3}=0.182$.

### Example 4 (deriving the arcsine derivative, 5 marks)

Prove that $\dfrac{d}{dx}\arcsin x=\dfrac{1}{\sqrt{1-x^{2}}}$ for $-1<x<1$.

Let $y=\arcsin x$, so $x=\sin y$ with $-\frac\pi2<y<\frac\pi2$. Then $\dfrac{dx}{dy}=\cos y$, and since $\cos y>0$ on this interval, $\cos y=\sqrt{1-\sin^{2}y}=\sqrt{1-x^{2}}$. Therefore $\dfrac{dy}{dx}=\dfrac{1}{dx/dy}=\dfrac{1}{\sqrt{1-x^{2}}}$. The positive square root is chosen because of the restricted range of the arcsine.

### Example 5 (composite inverse functions, 5 marks)

Differentiate (a) $y=\arctan(x^{2})$ and (b) $y=\arccos(2x)$.

(a) $\dfrac{dy}{dx}=\dfrac{2x}{1+(x^{2})^{2}}=\dfrac{2x}{1+x^{4}}$. (b) $\dfrac{dy}{dx}=-\dfrac{2}{\sqrt{1-(2x)^{2}}}=-\dfrac{2}{\sqrt{1-4x^{2}}}$, valid for $|x|<\tfrac12$.

### Example 6 (a tangent line, 6 marks)

Find the equation of the tangent to $y=\arctan x$ at $x=1$.

At $x=1$, $y=\arctan1=\dfrac\pi4$. The gradient is $\dfrac{1}{1+1^{2}}=\dfrac12$. The tangent is $y-\dfrac\pi4=\dfrac12(x-1)$, that is $y=\dfrac x2+\dfrac\pi4-\dfrac12$. As a check, $\dfrac\pi4-\dfrac12=0.285$, which gives a line that passes through $(1,0.785)$ with gradient $0.5$.

### Example 7 (a product, 4 marks)

Differentiate $y=x\arcsin x$ for $|x|<1$.

By the product rule, $\dfrac{dy}{dx}=1\cdot\arcsin x+x\cdot\dfrac{1}{\sqrt{1-x^{2}}}=\arcsin x+\dfrac{x}{\sqrt{1-x^{2}}}$.

### Example 8 (an arctan integral, 6 marks)

Find $\displaystyle\int\frac{1}{x^{2}+9}\,dx$ and evaluate $\displaystyle\int_{0}^{3}\frac{1}{x^{2}+9}\,dx$.

Here $a=3$, so $\displaystyle\int\frac{1}{x^{2}+9}\,dx=\frac13\arctan\frac x3+C$. Then $\displaystyle\int_{0}^{3}\frac{dx}{x^{2}+9}=\frac13\left[\arctan1-\arctan0\right]=\frac13\cdot\frac\pi4=\frac\pi{12}$.

### Example 9 (an arcsin integral, 5 marks)

Evaluate $\displaystyle\int_{0}^{1}\frac{1}{\sqrt{4-x^{2}}}\,dx$.

With $a=2$, an antiderivative is $\arcsin\dfrac x2$. So the value is $\arcsin\dfrac12-\arcsin0=\dfrac\pi6$.

### Example 10 (an exponential integral, 4 marks)

Find $\displaystyle\int_{0}^{3}2^{x}\,dx$.

An antiderivative is $\dfrac{2^{x}}{\ln2}$. Then the value is $\dfrac{2^{3}-2^{0}}{\ln2}=\dfrac{7}{\ln2}=10.1$.

### Example 11 (completing the square, 7 marks)

Evaluate $\displaystyle\int_{-1}^{1}\frac{1}{x^{2}+2x+5}\,dx$.

Complete the square: $x^{2}+2x+5=(x+1)^{2}+4$. With $u=x+1$, the integral becomes $\displaystyle\int_{0}^{2}\frac{du}{u^{2}+4}=\frac12\Big[\arctan\frac u2\Big]_{0}^{2}=\frac12\left(\frac\pi4-0\right)=\frac\pi8$. The limits are $u=0$ when $x=-1$ and $u=2$ when $x=1$, since the substitution is linear. The exact value $\dfrac\pi8$ is $0.393$.

### Example 12 (substitution followed by arctan, 7 marks)

Evaluate $\displaystyle\int_{0}^{1}\frac{x}{1+x^{4}}\,dx$.

Let $u=x^{2}$, so $du=2x\,dx$ and the limits are $u=0$ and $u=1$. The integral becomes $\displaystyle\tfrac12\int_{0}^{1}\frac{du}{1+u^{2}}=\tfrac12\Big[\arctan u\Big]_{0}^{1}=\tfrac12\cdot\frac\pi4=\frac\pi8$. The substitution works because $x\,dx$ is half of $du$ and $x^{4}=u^{2}$.

### Example 13 (a trigonometric power, 4 marks)

Find $\displaystyle\int\tan x\sec^{2}x\,dx$ and evaluate it from $0$ to $\dfrac\pi4$.

With $u=\tan x$, $du=\sec^{2}x\,dx$, so the integral is $\int u\,du=\tfrac12\tan^{2}x+C$. Between $0$ and $\dfrac\pi4$ it is $\tfrac12\tan^{2}\dfrac\pi4-0=\tfrac12$.

### Example 14 (more chain rule practice, 5 marks)

Differentiate (a) $y=\csc3x$ and (b) $y=x\tan x$.

(a) $\dfrac{dy}{dx}=-3\csc3x\cot3x$, since the derivative of $\csc u$ is $-\csc u\cot u$ and the inner function $3x$ contributes the factor $3$. (b) By the product rule, $\dfrac{dy}{dx}=\tan x+x\sec^{2}x$.

### Example 15 (completing the square with a different constant, 6 marks)

Find $\displaystyle\int\frac{1}{x^{2}+4x+13}\,dx$.

Complete the square: $x^{2}+4x+13=(x+2)^{2}+9$. With $u=x+2$, $du=dx$, the integral becomes $\displaystyle\int\frac{du}{u^{2}+9}=\frac13\arctan\frac u3+C=\frac13\arctan\frac{x+2}{3}+C$. Differentiating gives $\dfrac13\cdot\dfrac{1/3}{1+\left(\frac{x+2}{3}\right)^{2}}=\dfrac{1}{9+(x+2)^{2}}$, which is the integrand.

### Example 16 (the inverse function rule, 6 marks)

Let $f(x)=x^{3}+x$. Given that $f(1)=2$, find the gradient of $f^{-1}$ at $x=2$.

The derivative is $f'(x)=3x^{2}+1$, so $f'(1)=4$. The point $(1,2)$ on $f$ corresponds to the point $(2,1)$ on $f^{-1}$, and the gradient of the inverse there is the reciprocal: $\left(f^{-1}\right)'(2)=\dfrac{1}{f'(1)}=\dfrac14$. The inverse cannot be written in closed form, but its gradient can still be found.

## Using your GDC

The calculator's numerical derivative can confirm the new derivative formulas at a point: compute the gradient of $\arctan x$ at $x=1$ and compare with $0.5$. Check that the angle mode is radians, since the formulas for the derivatives of trigonometric functions are valid only in radians. For definite integrals such as $\int_{0}^{3}\frac{dx}{x^{2}+9}$, compare the numerical value ($0.2618$) with $\dfrac\pi{12}$. For an inverse function $\arcsin$, calculators label it $\sin^{-1}$, which should not be confused with the reciprocal $\frac1{\sin x}$, which is $\csc x$. The graph of the derivative of $\arcsin x$ shows the vertical asymptotes at $\pm1$. When an exact answer such as $\frac\pi{8}$ is requested, evaluate the integral exactly, and use the calculator only to check.

## Common mistakes

- Forgetting the chain rule factor, as in $\dfrac{d}{dx}\tan3x=\sec^{2}3x$, or writing $\sec^{2}$ for the derivative of $\sec$.
- Mixing up the signs: the derivatives of $\cos$, $\cot$, $\csc$ and $\arccos$ are negative.
- Using $\dfrac{d}{dx}a^{x}=xa^{x-1}$, which is the power rule applied to an exponential function, and forgetting $\ln a$.
- Applying the arctan form to $\dfrac{1}{x^{2}-a^{2}}$ or $\dfrac1{x^{2}+a^{2}}$ without the factor $\dfrac1a$.
- Confusing $\dfrac1{\sqrt{a^{2}-x^{2}}}$ (arcsine) with $\dfrac{1}{\sqrt{x^{2}-a^{2}}}$, which is not in this course.
- Omitting to complete the square when the denominator is a quadratic with a linear term.
- Treating $\sin^{-1}x$ as $\dfrac1{\sin x}$, and so using the wrong derivative.
- Forgetting that the arcsine and arccosine are defined only for $|x|\le1$, and that their derivatives need $|x|<1$.

## Exam technique and command terms

**Differentiate** requires the correct derivative with all chain-rule factors; quote the standard result if you want to be clear. **Prove that** a derivative equals a given expression requires a derivation by the quotient rule or implicit differentiation, and the restriction on the range must be stated when a square root appears. **Hence** points to using an earlier result in the integration. **Find the exact value** requires an answer in terms of $\pi$ or $\ln$, not a decimal. If the integrand does not match a standard form, ask whether completing the square or a linear substitution would help. The formula booklet gives the derivative and integral results of this chapter, but marks are lost for forgetting constants such as $\frac1a$, so check by differentiating your answer.

## Connections

This chapter extends the derivatives of SL 5.3 and SL 5.6 and the integrals of SL 5.10. The quotient rule gives the derivatives of $\tan$, $\sec$, $\csc$ and $\cot$, and implicit differentiation (AHL 5.14) gives the derivatives of the inverse functions. The reciprocal trigonometric functions and inverse functions come from Unit 3, and the exponential and logarithm functions in other bases from Unit 1. The new integrals are used in AHL 5.16, where integration by parts combines with them, in AHL 5.17, for volumes, and in AHL 5.18, where differential equations such as $\dfrac{dy}{dx}=\dfrac{1}{1+x^{2}}$ have inverse trigonometric solutions. The Maclaurin series of AHL 5.19 for $\arctan x$ is obtained by integrating a geometric series.

## Check your understanding

1. Differentiate $y=\tan3x$.
2. Differentiate $y=\sec2x$.
3. Find the gradient of $y=\log_{3}x$ at $x=5$.
4. Differentiate $y=\arctan(x^{2})$.
5. Differentiate $y=\arccos(2x)$.
6. Differentiate $y=x\arcsin x$.
7. Evaluate $\displaystyle\int_{0}^{3}\frac{1}{x^{2}+9}\,dx$.
8. Evaluate $\displaystyle\int_{0}^{1}\frac{1}{\sqrt{4-x^{2}}}\,dx$.
9. Evaluate $\displaystyle\int_{0}^{3}2^{x}\,dx$.
10. Evaluate $\displaystyle\int_{-1}^{1}\frac{1}{x^{2}+2x+5}\,dx$.

### Answers

1. $3\sec^{2}3x$.
2. $2\sec2x\tan2x$.
3. $\dfrac{1}{5\ln3}=0.182$.
4. $\dfrac{2x}{1+x^{4}}$.
5. $-\dfrac{2}{\sqrt{1-4x^{2}}}$.
6. $\arcsin x+\dfrac{x}{\sqrt{1-x^{2}}}$.
7. $\dfrac\pi{12}$.
8. $\dfrac\pi6$.
9. $\dfrac{7}{\ln2}=10.1$.
10. $\dfrac\pi8$.

## Summary

- $\frac{d}{dx}\tan x=\sec^{2}x$, $\frac{d}{dx}\sec x=\sec x\tan x$, $\frac{d}{dx}\csc x=-\csc x\cot x$, $\frac{d}{dx}\cot x=-\csc^{2}x$.
- $\frac{d}{dx}a^{x}=a^{x}\ln a$ and $\frac{d}{dx}\log_{a}x=\frac{1}{x\ln a}$.
- $\frac{d}{dx}\arcsin x=\frac1{\sqrt{1-x^{2}}}$, $\frac{d}{dx}\arccos x=-\frac1{\sqrt{1-x^{2}}}$, $\frac{d}{dx}\arctan x=\frac1{1+x^{2}}$.
- $\int a^{x}dx=\frac{a^{x}}{\ln a}+C$, $\int\frac{dx}{x^{2}+a^{2}}=\frac1a\arctan\frac xa+C$ and $\int\frac{dx}{\sqrt{a^{2}-x^{2}}}=\arcsin\frac xa+C$.
- Use the chain rule with each result, and complete the square or substitute to match the standard integral forms.
