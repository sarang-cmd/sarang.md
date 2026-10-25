# Integration by substitution, by parts and repeated methods

> **AHL 5.16 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- integrate by substitution with a given or chosen substitution, handling leftover powers of $x$, and change the limits of a definite integral;
- integrate a product by parts, using $\displaystyle\int u\,\frac{dv}{dx}\,dx=uv-\int v\,\frac{du}{dx}\,dx$, and choose $u$ and $\dfrac{dv}{dx}$ sensibly;
- apply integration by parts repeatedly, and recognise the cyclic case such as $\displaystyle\int e^{x}\sin x\,dx$ where the original integral reappears;
- integrate $\ln x$ and $\arctan x$ by treating the integrand as $1\times$ the function;
- combine a substitution with parts when the integrand requires both;
- evaluate definite integrals by parts exactly, with the boundary term evaluated at both limits;
- use trigonometric identities to rewrite integrands such as $\sin^{2}x$ and $\cos^{3}x$ before integrating.

## Why this topic matters

Differentiation is a mechanical process: every function made from standard pieces can be differentiated by applying the rules. Integration is not. There is no general rule for the integral of a product or a composite function, and many simple-looking functions have antiderivatives that cannot be written in terms of familiar functions at all, such as $e^{-x^{2}}$. What you have, instead, is a collection of techniques that each handle a family of integrals. The previous chapters gave you the reverse chain rule and basic substitution. This chapter adds the most important new technique, integration by parts, which is the reverse of the product rule, and develops substitution to the point where it can be applied to integrals in which an extra factor remains.

These techniques are not just exercises. Integration by parts is used to compute moments and expectations of probability distributions, Fourier coefficients in signal processing, and the area under logarithmic and inverse trigonometric curves. The reduction of an integral to a simpler one of the same type underlies the calculation of $\int x^{n}e^{x}\,dx$ for any $n$. Examinations at this level regularly set questions that need two techniques in sequence, and that are worth ten or more marks, for example a substitution that turns an integral into one requiring parts. The skills that are rewarded are choosing the right technique, executing the algebra accurately, and carrying the signs and boundary terms through without error.

## Core ideas

### Substitution, revisited

In substitution we replace a part $u=g(x)$ of the integrand and the differential $dx$ so that the integral becomes simpler. The steps are those of SL 5.10 and SL 5.11:

1. choose $u=g(x)$;
2. compute $\dfrac{du}{dx}=g'(x)$ and rewrite $dx=\dfrac{du}{g'(x)}$;
3. replace every $x$ (including those left over) by an expression in $u$;
4. integrate in $u$;
5. return to $x$, or, for a definite integral, change the limits and evaluate directly.

Often the best choice for $u$ is a function inside brackets, in a root, in an exponent or in the denominator. If the substitution leaves a factor of $x$, express $x$ in terms of $u$ by solving $u=g(x)$, as in $\displaystyle\int x(x+1)^{5}\,dx$ with $u=x+1$ and $x=u-1$, giving $\int(u-1)u^{5}\,du$. For definite integrals the limits must be converted: if $u=g(x)$, then $x=a\mapsto u=g(a)$ and $x=b\mapsto u=g(b)$.

### Integration by parts

The product rule says $\dfrac{d}{dx}(uv)=u\dfrac{dv}{dx}+v\dfrac{du}{dx}$. Integrating both sides and rearranging gives the **integration by parts formula**:

$$\int u\frac{dv}{dx}\,dx=uv-\int v\frac{du}{dx}\,dx.$$

In definite form,
$$\int_{a}^{b}u\frac{dv}{dx}\,dx=\Big[uv\Big]_{a}^{b}-\int_{a}^{b}v\frac{du}{dx}\,dx.$$
The idea is to transfer the differentiation from one factor to the other. The method works if the new integral $\int v\dfrac{du}{dx}\,dx$ is easier than the original.

### Choosing $u$

A helpful order for the choice of $u$, to be differentiated, is **LIATE**: Logarithmic, Inverse trigonometric, Algebraic (powers of $x$), Trigonometric, Exponential. The function that appears first in this list should be taken as $u$, and the remaining factor as $\dfrac{dv}{dx}$, which must be something you can integrate. So for $\int x\,e^{x}\,dx$, take $u=x$ (algebraic) and $\dfrac{dv}{dx}=e^{x}$, because differentiating $x$ gives $1$ and simplifies the problem. For $\int x\ln x\,dx$ we take $u=\ln x$, because $\ln x$ cannot easily be integrated but is simple to differentiate. This is a guide, not a law: if a choice makes the integral harder, try the other.

### Repeated integration by parts

When the integrand contains a power $x^{n}$ multiplied by $e^{x}$, $\sin x$ or $\cos x$, each application of parts reduces the power by $1$. So $\int x^{2}e^{x}\,dx$ takes two applications, and $\int x^{3}\sin x\,dx$ three. A tabular layout keeps the signs correct: write successive derivatives of $u$ in one column and successive integrals of $\dfrac{dv}{dx}$ in another, and combine the diagonals with alternating signs.

### The cyclic case

For $\int e^{x}\sin x\,dx$ and $\int e^{x}\cos x\,dx$, applying parts twice returns the original integral. Call it $I$. After two applications we obtain an equation of the form $I=(\text{expression})-I$, which is solved for $I$: $2I=(\text{expression})$. The process works because the trigonometric function returns to itself after two differentiations (with a sign), as does the exponential. It is important to be consistent in the choice of $u$ in the two stages: always differentiate the same type of function.

### Integrating $\ln x$ and $\arctan x$

These functions have no simple antiderivative to start, but they can be integrated by parts if you write the integrand as $1\times f(x)$ with $u=f(x)$ and $\dfrac{dv}{dx}=1$, so $v=x$. For $\ln x$: $\int\ln x\,dx=x\ln x-\int x\cdot\dfrac1x\,dx=x\ln x-x+C$. For $\arctan x$: $\int\arctan x\,dx=x\arctan x-\int\dfrac{x}{1+x^{2}}\,dx=x\arctan x-\tfrac12\ln(1+x^{2})+C$.

### Combining techniques

Some integrals need a substitution first, to remove a root or a composite function, and then parts. For example, $\displaystyle\int e^{\sqrt x}\,dx$: let $u=\sqrt x$, so $x=u^{2}$ and $dx=2u\,du$, which gives $\int2ue^{u}\,du$, and this is done by parts. Others need parts first and then a substitution, as in $\int x^{3}e^{x^{2}}\,dx$, where one writes $x^{3}e^{x^{2}}\,dx=x^{2}\cdot xe^{x^{2}}\,dx$, or substitutes $u=x^{2}$ first to obtain $\tfrac12\int ue^{u}\,du$.

### Trigonometric rewriting

Some trigonometric integrals need an identity before integration. Squares are converted with a double-angle formula: $\sin^{2}x=\dfrac{1-\cos2x}{2}$ and $\cos^{2}x=\dfrac{1+\cos2x}{2}$. An odd power is split: $\cos^{3}x=\cos x\,(1-\sin^{2}x)$, followed by the substitution $u=\sin x$. These identities appear in Unit 3.

## Worked examples

### Example 1 (a first application, 5 marks)

Find $\displaystyle\int xe^{x}\,dx$.

Take $u=x$ and $\dfrac{dv}{dx}=e^{x}$, so $\dfrac{du}{dx}=1$ and $v=e^{x}$. Then $\displaystyle\int xe^{x}\,dx=xe^{x}-\int e^{x}\,dx=xe^{x}-e^{x}+C=(x-1)e^{x}+C$. Differentiating the answer gives $e^{x}+(x-1)e^{x}=xe^{x}$, which confirms it.

### Example 2 (a trigonometric factor, 5 marks)

Find $\displaystyle\int x\cos x\,dx$ and evaluate $\displaystyle\int_{0}^{\pi}x\sin x\,dx$.

For the first, $u=x$, $\dfrac{dv}{dx}=\cos x$, $v=\sin x$, so $\int x\cos x\,dx=x\sin x-\int\sin x\,dx=x\sin x+\cos x+C$. For the second, $u=x$, $\dfrac{dv}{dx}=\sin x$, $v=-\cos x$, so $\displaystyle\int_{0}^{\pi}x\sin x\,dx=\Big[-x\cos x\Big]_{0}^{\pi}+\int_{0}^{\pi}\cos x\,dx=\pi+\Big[\sin x\Big]_{0}^{\pi}=\pi+0=\pi$.

### Example 3 (the logarithm, 5 marks)

Find $\displaystyle\int\ln x\,dx$ and evaluate $\displaystyle\int_{1}^{e}\ln x\,dx$.

Write $\ln x=1\cdot\ln x$ with $u=\ln x$, $\dfrac{dv}{dx}=1$, so $\dfrac{du}{dx}=\dfrac1x$ and $v=x$. Then $\int\ln x\,dx=x\ln x-\int1\,dx=x\ln x-x+C$. Hence $\displaystyle\int_{1}^{e}\ln x\,dx=\Big[x\ln x-x\Big]_{1}^{e}=(e-e)-(0-1)=1$.

### Example 4 (repeated parts, 7 marks)

Find $\displaystyle\int x^{2}e^{x}\,dx$.

First application with $u=x^{2}$ and $\dfrac{dv}{dx}=e^{x}$: $\int x^{2}e^{x}\,dx=x^{2}e^{x}-\int2xe^{x}\,dx$. The remaining integral is Example 1 multiplied by $2$: $2\int xe^{x}\,dx=2(x-1)e^{x}$. So the result is $x^{2}e^{x}-2(x-1)e^{x}+C=(x^{2}-2x+2)e^{x}+C$. The quadratic in the bracket is the pattern: powers reduce by one each time, and the constant terms accumulate as factorials.

### Example 5 (the cyclic case, 8 marks)

Find $\displaystyle\int e^{x}\sin x\,dx$.

Let $I=\int e^{x}\sin x\,dx$. Take $u=\sin x$ and $\dfrac{dv}{dx}=e^{x}$: $I=e^{x}\sin x-\int e^{x}\cos x\,dx$. Apply parts again, with $u=\cos x$ and $\dfrac{dv}{dx}=e^{x}$: $\int e^{x}\cos x\,dx=e^{x}\cos x+\int e^{x}\sin x\,dx=e^{x}\cos x+I$. Substituting, $I=e^{x}\sin x-e^{x}\cos x-I$, so $2I=e^{x}(\sin x-\cos x)$ and $I=\tfrac12e^{x}(\sin x-\cos x)+C$. The constant of integration is added at the end, because it was absorbed in the manipulation of the equation.

### Example 6 (a power and a logarithm, 6 marks)

Find $\displaystyle\int x\ln x\,dx$.

Take $u=\ln x$ (the logarithm comes first in LIATE) and $\dfrac{dv}{dx}=x$, so $\dfrac{du}{dx}=\dfrac1x$ and $v=\dfrac{x^{2}}{2}$. Then $\displaystyle\int x\ln x\,dx=\frac{x^{2}}{2}\ln x-\int\frac{x^{2}}{2}\cdot\frac1x\,dx=\frac{x^{2}}{2}\ln x-\frac{x^{2}}{4}+C$. Choosing $u=x$ would require the integral of $\ln x$ within the new integral, giving a more difficult problem.

### Example 7 (a definite integral by parts, 6 marks)

Evaluate $\displaystyle\int_{0}^{1}xe^{2x}\,dx$ exactly.

Let $u=x$ and $\dfrac{dv}{dx}=e^{2x}$, so $v=\tfrac12e^{2x}$. Then $\displaystyle\int_{0}^{1}xe^{2x}\,dx=\Big[\tfrac12xe^{2x}\Big]_{0}^{1}-\int_{0}^{1}\tfrac12e^{2x}\,dx=\tfrac12e^{2}-\Big[\tfrac14e^{2x}\Big]_{0}^{1}=\tfrac12e^{2}-\tfrac14e^{2}+\tfrac14=\tfrac{e^{2}+1}{4}$. Numerically this is $2.10$.

### Example 8 (an inverse trigonometric function, 6 marks)

Find $\displaystyle\int\arctan x\,dx$ and evaluate $\displaystyle\int_{0}^{1}\arctan x\,dx$.

Take $u=\arctan x$ and $\dfrac{dv}{dx}=1$, so $\dfrac{du}{dx}=\dfrac1{1+x^{2}}$ and $v=x$. Then $\displaystyle\int\arctan x\,dx=x\arctan x-\int\frac{x}{1+x^{2}}\,dx=x\arctan x-\tfrac12\ln(1+x^{2})+C$. The limits give $\displaystyle\Big[x\arctan x-\tfrac12\ln(1+x^{2})\Big]_{0}^{1}=\dfrac\pi4-\tfrac12\ln2=0.439$.

### Example 9 (two applications with a trigonometric factor, 8 marks)

Evaluate $\displaystyle\int_{0}^{\pi/2}x^{2}\sin x\,dx$.

Using $u=x^{2}$ and $\dfrac{dv}{dx}=\sin x$, $v=-\cos x$: $\displaystyle\int x^{2}\sin x\,dx=-x^{2}\cos x+\int2x\cos x\,dx$. For the second integral use $u=2x$, $\dfrac{dv}{dx}=\cos x$: $\int2x\cos x\,dx=2x\sin x-\int2\sin x\,dx=2x\sin x+2\cos x$. So the antiderivative is $-x^{2}\cos x+2x\sin x+2\cos x$. At $x=\dfrac\pi2$ the value is $0+\pi+0=\pi$, and at $x=0$ it is $0+0+2=2$. The definite integral is $\pi-2=1.14$.

### Example 10 (substitution with a leftover factor, 6 marks)

Evaluate $\displaystyle\int_{0}^{1}x(x+1)^{5}\,dx$ with $u=x+1$.

With $u=x+1$, $x=u-1$ and $du=dx$, and the limits are $u=1$ and $u=2$. The integral is $\displaystyle\int_{1}^{2}(u-1)u^{5}\,du=\int_{1}^{2}\left(u^{6}-u^{5}\right)du=\left[\tfrac{u^{7}}{7}-\tfrac{u^{6}}{6}\right]_{1}^{2}=\left(\tfrac{128}{7}-\tfrac{64}{6}\right)-\left(\tfrac17-\tfrac16\right)=\tfrac{127}{7}-\tfrac{63}{6}=\tfrac{107}{14}$. The value is $7.64$.

### Example 11 (substitution then parts, 8 marks)

Find $\displaystyle\int_{0}^{1}e^{\sqrt x}\,dx$.

Let $u=\sqrt x$, so $x=u^{2}$ and $dx=2u\,du$. The limits are $u=0$ and $u=1$. The integral becomes $\displaystyle\int_{0}^{1}2ue^{u}\,du$. By parts (Example 1), $\int ue^{u}\,du=(u-1)e^{u}$, so the value is $2\Big[(u-1)e^{u}\Big]_{0}^{1}=2\left[0-(-1)\right]=2$.

### Example 12 (a trigonometric identity, 5 marks)

Evaluate $\displaystyle\int_{0}^{\pi}\sin^{2}x\,dx$ and $\displaystyle\int_{0}^{\pi/2}\cos^{3}x\,dx$.

For the first, $\sin^{2}x=\dfrac{1-\cos2x}{2}$, so $\displaystyle\int_{0}^{\pi}\sin^{2}x\,dx=\Big[\dfrac x2-\dfrac{\sin2x}{4}\Big]_{0}^{\pi}=\dfrac\pi2$. For the second, $\cos^{3}x=\cos x\left(1-\sin^{2}x\right)$, and with $u=\sin x$ the limits are $0$ to $1$: $\displaystyle\int_{0}^{1}\left(1-u^{2}\right)du=1-\tfrac13=\tfrac23$.

### Example 13 (a substitution creating a parts integral, 7 marks)

Evaluate $\displaystyle\int_{0}^{1}x^{3}e^{x^{2}}\,dx$.

Let $u=x^{2}$, so $du=2x\,dx$ and $x^{3}\,dx=x^{2}\cdot x\,dx=\tfrac12u\,du$. The limits are $0$ and $1$. The integral becomes $\tfrac12\displaystyle\int_{0}^{1}ue^{u}\,du=\tfrac12\Big[(u-1)e^{u}\Big]_{0}^{1}=\tfrac12\left[0-(-1)\right]=\tfrac12$.

## Using your GDC

A graphic display calculator evaluates definite integrals numerically, which is a good check on a result obtained by parts. Evaluate $\int_{0}^{1}xe^{2x}\,dx$ and compare with $\dfrac{e^{2}+1}{4}=2.0973$. If the two do not agree, check the boundary term and the signs first. The calculator cannot show the method, so in an examination you must write the choice of $u$ and $\dfrac{dv}{dx}$ and the formula. Use the graph to check that the area has the expected sign and size, and make sure that you use radians for trigonometric limits. The calculator is also useful for checking an antiderivative: compare its numerical derivative with the integrand at a few points.

## Common mistakes

- Choosing $u$ and $\dfrac{dv}{dx}$ so that the new integral is harder, for example $u=e^{x}$ in $\int x^{2}e^{x}\,dx$ (which keeps the power at the same degree).
- Dropping the sign in $-\int v\dfrac{du}{dx}\,dx$, or forgetting that the minus applies to the whole second integral.
- Forgetting the boundary term $\big[uv\big]_{a}^{b}$ in a definite integral, or evaluating it only at one limit.
- Changing the integration variable but not the limits in a substitution, or changing the limits and then substituting back.
- In the cyclic case, making inconsistent choices of $u$ in the two applications, so that the integral returns to a different form instead of the original.
- Forgetting $+C$, especially in the cyclic case where it should be added after solving for $I$.
- Leaving $x$ in an integral after substitution, so that the integral is in two variables.
- Making errors in the integral of $v$, for example $\int e^{2x}\,dx=e^{2x}$ instead of $\tfrac12e^{2x}$.

## Exam technique and command terms

**Find** the integral means an indefinite integral with $+C$, while **evaluate** or **find the exact value** means a definite integral with the final answer simplified. **Use integration by parts** instructs you to use that method, and you should state your choice of $u$ and $\dfrac{dv}{dx}$ and write the formula. **Show that** requires clear working to the given result. **Hence** often means that an earlier integral is needed; for example, an integral of $x^{2}e^{x}$ by parts may call on the result for $xe^{x}$. If a question gives a substitution, use it and show how $dx$ and the limits change. Present the boundary term separately: write $\big[\;\big]_{a}^{b}$ before evaluating it. Check your answer by differentiating, which takes seconds and catches sign errors.

## Connections

This chapter develops the substitution of SL 5.10 and SL 5.11 and uses the product rule of SL 5.6 in reverse. The inverse trigonometric derivatives of AHL 5.15 and the logarithm integral (the result of Example 3) go hand in hand with parts. The results are applied in AHL 5.17, where volumes of revolution need $\int y^{2}\,dx$ and integrals of this type, and in AHL 5.18, where separable differential equations need the antiderivatives found here. In Unit 4, the mean of a continuous random variable is $\int xf(x)\,dx$ and is found by parts for exponential distributions. Trigonometric identities used in Example 12 come from Unit 3.

## Check your understanding

1. Find $\displaystyle\int xe^{x}\,dx$.
2. Evaluate $\displaystyle\int_{0}^{\pi}x\sin x\,dx$.
3. Find $\displaystyle\int\ln x\,dx$.
4. Find $\displaystyle\int x^{2}e^{x}\,dx$.
5. Find $\displaystyle\int e^{x}\sin x\,dx$.
6. Find $\displaystyle\int x\ln x\,dx$.
7. Evaluate $\displaystyle\int_{0}^{1}xe^{2x}\,dx$.
8. Evaluate $\displaystyle\int_{0}^{\pi/2}x^{2}\sin x\,dx$.
9. Evaluate $\displaystyle\int_{0}^{1}x(x+1)^{5}\,dx$.
10. Evaluate $\displaystyle\int_{0}^{1}e^{\sqrt x}\,dx$.

### Answers

1. $(x-1)e^{x}+C$.
2. $\pi$.
3. $x\ln x-x+C$.
4. $(x^{2}-2x+2)e^{x}+C$.
5. $\tfrac12e^{x}(\sin x-\cos x)+C$.
6. $\dfrac{x^{2}}{2}\ln x-\dfrac{x^{2}}{4}+C$.
7. $\dfrac{e^{2}+1}{4}=2.10$.
8. $\pi-2=1.14$.
9. $\dfrac{107}{14}=7.64$.
10. $2$.

## Summary

- Integration by parts: $\int u\frac{dv}{dx}dx=uv-\int v\frac{du}{dx}dx$, and in definite form the boundary term $[uv]_{a}^{b}$ is included.
- Choose $u$ by LIATE, so that differentiating it simplifies the integral and $\frac{dv}{dx}$ is easy to integrate.
- Repeat parts to reduce a power; in the cyclic case solve for the original integral.
- Treat $\ln x$ and $\arctan x$ as $1\times f(x)$.
- In substitution replace $x$, $dx$ and the integrand, and change the limits of a definite integral.
- Rewrite trigonometric powers with identities, combine techniques when needed, and check by differentiating.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists integration by parts under AHL 5.16. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
