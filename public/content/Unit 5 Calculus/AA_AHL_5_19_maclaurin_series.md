# Maclaurin series

> **AHL 5.19 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- build the Maclaurin series $f(x)=f(0)+f'(0)x+\dfrac{f''(0)}{2!}x^{2}+\dfrac{f'''(0)}{3!}x^{3}+\cdots$ of a function by evaluating its derivatives at $0$;
- state and use the standard series for $e^{x}$, $\sin x$, $\cos x$, $\ln(1+x)$ and $(1+x)^{p}$, and the series for $\arctan x$ and $\dfrac1{1-x}$ that follow from them;
- obtain new series by substitution, multiplication, division, differentiation and integration of known series, keeping only the terms needed;
- use a truncated series (a Maclaurin polynomial) to approximate function values and definite integrals, and judge the accuracy;
- use series to evaluate limits that would otherwise need repeated L'Hôpital steps;
- find the first few terms of the series solution of a differential equation, and link the result with an exact solution;
- state the interval of values of $x$ for which a series converges, for the standard series.

## Why this topic matters

How does a calculator find $\sin0.5$ or $e^{0.3}$? It has no table of every value, and it cannot draw triangles. What it does is replace the function by a polynomial, because polynomials can be computed using only addition and multiplication. The Maclaurin series is the systematic way to find such a polynomial: it chooses the polynomial whose value, slope, curvature, and so on, all match those of the function at $x=0$. The more terms you include, the more closely the polynomial follows the curve, and for the standard functions, a handful of terms gives many correct decimal places for $x$ near $0$.

This idea is one of the most powerful in analysis. It says that a smooth function is determined, near a point, by its successive derivatives there. It also gives a unified view of the functions of the course: $e^{x}$, $\sin x$ and $\cos x$ become polynomials of infinite degree, and the relation $e^{ix}=\cos x+i\sin x$ (which you meet in AHL 1.13) can be seen by comparing their series. Maclaurin series are used in physics to approximate a pendulum for small angles ($\sin\theta\approx\theta$) and in relativity ($\sqrt{1-v^{2}/c^{2}}\approx1-\frac{v^{2}}{2c^{2}}$), in engineering to linearise systems, and in computing. In the examination, the topic produces moderate-length questions: find the series of a given function to a stated power, use it to approximate an integral or a limit, and relate it to an earlier result. The skill rewarded is organised algebra with truncated series, where you work only up to the required order and no further.

## Core ideas

### The Maclaurin series

Suppose a function $f$ has derivatives of all orders at $0$. Its **Maclaurin series** is
$$f(x)=f(0)+f'(0)\,x+\frac{f''(0)}{2!}x^{2}+\frac{f'''(0)}{3!}x^{3}+\cdots=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^{n}.$$
The coefficient of $x^{n}$ is chosen so that the $n$th derivative of the series at $0$ equals $f^{(n)}(0)$: differentiating $a_{n}x^{n}$ $n$ times gives $n!\,a_{n}$, so $a_{n}=\dfrac{f^{(n)}(0)}{n!}$. The first $n+1$ terms form the **Maclaurin polynomial of degree $n$**, an approximation that is excellent near $x=0$ and gets worse as $|x|$ increases. The higher derivatives found in AHL 5.12 are exactly the information needed here.

### The standard series

These are in the formula booklet, but you should know how to derive them:
$$e^{x}=1+x+\frac{x^{2}}{2!}+\frac{x^{3}}{3!}+\cdots\qquad(\text{all }x)$$
$$\sin x=x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!}-\cdots\qquad(\text{all }x)$$
$$\cos x=1-\frac{x^{2}}{2!}+\frac{x^{4}}{4!}-\cdots\qquad(\text{all }x)$$
$$\ln(1+x)=x-\frac{x^{2}}{2}+\frac{x^{3}}{3}-\frac{x^{4}}{4}+\cdots\qquad(-1<x\le1)$$
$$(1+x)^{p}=1+px+\frac{p(p-1)}{2!}x^{2}+\frac{p(p-1)(p-2)}{3!}x^{3}+\cdots\qquad(|x|<1)$$
The last is the binomial series, valid for any rational $p$. If $p$ is a positive integer it terminates and is the binomial theorem of SL 1.9. The series for $\sin x$ contains only odd powers (because $\sin$ is an odd function) and the series for $\cos x$ only even powers (because $\cos$ is even). The series for $e^{x}$, $\sin x$ and $\cos x$ converge for all real $x$, while those for $\ln(1+x)$ and $(1+x)^{p}$ converge only for $|x|<1$ (with the end point $x=1$ also included for the logarithm).

Two more follow from these. Putting $p=-1$ and replacing $x$ by $-x$ gives the geometric series $\dfrac1{1-x}=1+x+x^{2}+x^{3}+\cdots$, and integrating $\dfrac1{1+x^{2}}=1-x^{2}+x^{4}-\cdots$ term by term gives $\arctan x=x-\dfrac{x^{3}}{3}+\dfrac{x^{5}}{5}-\cdots$.

### Building series from derivatives

To find the series for a function not in the list, compute $f(0)$, $f'(0)$, $f''(0)$, and so on, and insert the values. Organise the work in a table. For $f(x)=\ln(1+x)$: $f(0)=0$, $f'(x)=\dfrac1{1+x}$ so $f'(0)=1$, $f''(x)=-\dfrac1{(1+x)^{2}}$ so $f''(0)=-1$, $f'''(x)=\dfrac{2}{(1+x)^{3}}$ so $f'''(0)=2$. The coefficients are $0$, $1$, $\dfrac{-1}{2!}$, $\dfrac{2}{3!}$, giving $x-\dfrac{x^{2}}{2}+\dfrac{x^{3}}{3}-\cdots$.

### Substitution

Replace $x$ in a known series by an expression. For instance, $e^{-x^{2}}$ comes from $e^{u}$ with $u=-x^{2}$:
$$e^{-x^{2}}=1-x^{2}+\frac{x^{4}}{2!}-\frac{x^{6}}{3!}+\cdots.$$
Similarly $\cos2x=1-\dfrac{(2x)^{2}}{2!}+\dfrac{(2x)^{4}}{4!}-\cdots=1-2x^{2}+\dfrac{2x^{4}}{3}-\cdots$. The convergence condition changes accordingly: the series for $\ln(1+2x)$ converges for $|2x|<1$.

### Products and quotients

To multiply two series, multiply term by term and collect powers of $x$, **stopping at the highest power you need**. For example, to find $e^{x}\sin x$ to the term in $x^{3}$:
$$\left(1+x+\frac{x^{2}}{2}+\cdots\right)\left(x-\frac{x^{3}}{6}+\cdots\right)=x+x^{2}+\left(\frac12-\frac16\right)x^{3}+\cdots=x+x^{2}+\frac{x^{3}}{3}+\cdots.$$
Terms of higher order can be ignored. For a quotient, write it as a product with a binomial series, as in $\tan x=\sin x\cdot(\cos x)^{-1}$. We expand $(\cos x)^{-1}=\left(1-\dfrac{x^{2}}{2}+\cdots\right)^{-1}=1+\dfrac{x^{2}}{2}+\cdots$ and multiply by $\sin x$ to obtain $\tan x=x+\dfrac{x^{3}}{3}+\cdots$.

### Differentiating and integrating series

A power series may be differentiated or integrated term by term within its interval of convergence. Differentiating the series for $\sin x$ gives the series for $\cos x$, and integrating $e^{-x^{2}}$ term by term gives the antiderivative $x-\dfrac{x^{3}}{3}+\dfrac{x^{5}}{10}-\cdots$, which has no closed form in standard functions. This is how the value of $\displaystyle\int_{0}^{1}e^{-x^{2}}\,dx$, which appears in the normal distribution, is computed. Remember the constant of integration in an indefinite integral of a series, determined by the value at $x=0$.

### Series and limits

Replacing functions by their series is often the quickest way to evaluate a limit as $x\to0$. For example, as $x\to0$, $\dfrac{e^{x}-1-x}{x^{2}}=\dfrac{\frac{x^{2}}{2}+\frac{x^{3}}{6}+\cdots}{x^{2}}=\dfrac12+\dfrac x6+\cdots\to\dfrac12$, in agreement with the result found in AHL 5.13 after two uses of L'Hôpital's rule. The method requires the series to be expanded far enough that the lowest non-cancelling term in the numerator appears.

### Approximating and accuracy

To approximate $f(a)$ with a Maclaurin polynomial, substitute $x=a$, with $a$ small. The accuracy improves with more terms and with smaller $|a|$. For an alternating series whose terms decrease in magnitude (as in $\sin x$ and $\ln(1+x)$ for small $x$), the error is no larger than the first omitted term. With $\sin0.5\approx0.5-\dfrac{0.5^{3}}{6}+\dfrac{0.5^{5}}{120}=0.479427$, the next term is $\dfrac{0.5^{7}}{5040}\approx1.5\times10^{-6}$, so the answer is accurate to about five decimal places.

### Series solutions of differential equations

If $y$ satisfies a differential equation with an initial condition at $x=0$, differentiate the equation repeatedly to find $y(0)$, $y'(0)$, $y''(0)$, and so on, and then write the Maclaurin series. For $\dfrac{dy}{dx}=x+y$ with $y(0)=1$: $y'(0)=0+1=1$; differentiating, $y''=1+y'$ gives $y''(0)=2$; and $y'''=y''$ gives $y'''(0)=2$. The series is $y=1+x+\dfrac{2}{2!}x^{2}+\dfrac{2}{3!}x^{3}+\cdots=1+x+x^{2}+\dfrac{x^{3}}{3}+\cdots$, which agrees with the exact solution $y=2e^{x}-x-1$ of AHL 5.18.

## Worked examples

### Example 1 (from derivatives, 7 marks)

Find the Maclaurin series of $f(x)=\ln(1+x)$ up to and including the term in $x^{4}$.

We have $f(0)=0$. The derivatives are $f'(x)=(1+x)^{-1}$, $f''(x)=-(1+x)^{-2}$, $f'''(x)=2(1+x)^{-3}$ and $f^{(4)}(x)=-6(1+x)^{-4}$, so $f'(0)=1$, $f''(0)=-1$, $f'''(0)=2$ and $f^{(4)}(0)=-6$. The coefficients are $\dfrac{1}{1!}=1$, $\dfrac{-1}{2!}=-\dfrac12$, $\dfrac{2}{3!}=\dfrac13$ and $\dfrac{-6}{4!}=-\dfrac14$. So $\ln(1+x)=x-\dfrac{x^{2}}{2}+\dfrac{x^{3}}{3}-\dfrac{x^{4}}{4}+\cdots$.

### Example 2 (an approximation, 5 marks)

Use the first five terms of the series for $e^{x}$ to approximate $e^{0.5}$, and compare with the true value.

$e^{0.5}\approx1+0.5+\dfrac{0.25}{2}+\dfrac{0.125}{6}+\dfrac{0.0625}{24}=1+0.5+0.125+0.020833+0.002604=1.648438$. The true value is $1.648721$, so the error is $0.0003$. The next term, $\dfrac{0.5^{5}}{120}=0.00026$, accounts for almost all of the difference.

### Example 3 (sine and an approximation, 5 marks)

Find $\sin0.5$ using the terms up to $x^{5}$, and state a bound on the error.

$\sin0.5\approx0.5-\dfrac{0.125}{6}+\dfrac{0.03125}{120}=0.5-0.020833+0.000260=0.479427$. Since the series alternates with decreasing terms, the error is less than the first omitted term, $\dfrac{0.5^{7}}{5040}=1.5\times10^{-6}$. The true value is $0.4794255$.

### Example 4 (substitution, 5 marks)

Find the first three non-zero terms of the series for $e^{-x^{2}}$ and for $\cos2x$.

Replacing $x$ by $-x^{2}$ in $e^{x}$: $e^{-x^{2}}=1-x^{2}+\dfrac{x^{4}}{2}-\cdots$. Replacing $x$ by $2x$ in $\cos x$: $\cos2x=1-\dfrac{4x^{2}}{2}+\dfrac{16x^{4}}{24}-\cdots=1-2x^{2}+\dfrac23x^{4}-\cdots$. Both are valid for all $x$ because the series of $e^{x}$ and $\cos x$ converge everywhere.

### Example 5 (a product, 6 marks)

Find the series for $e^{x}\sin x$ up to and including the term in $x^{3}$.

Multiply $\left(1+x+\dfrac{x^{2}}{2}+\dfrac{x^{3}}{6}\right)\left(x-\dfrac{x^{3}}{6}\right)$ and keep terms up to $x^{3}$. The terms are $x$, then $x^{2}$ (from $x\cdot x$), then $\dfrac{x^{3}}{2}$ (from $\dfrac{x^{2}}{2}\cdot x$) and $-\dfrac{x^{3}}{6}$ (from $1\cdot-\dfrac{x^{3}}{6}$). The $x^{3}$ coefficient is $\dfrac12-\dfrac16=\dfrac13$. So $e^{x}\sin x=x+x^{2}+\dfrac{x^{3}}{3}+\cdots$.

### Example 6 (a quotient, 7 marks)

Find the series for $\tan x$ up to the term in $x^{3}$.

$\tan x=\dfrac{\sin x}{\cos x}=\left(x-\dfrac{x^{3}}{6}+\cdots\right)\left(1-\dfrac{x^{2}}{2}+\cdots\right)^{-1}$. By the binomial series, $(1-u)^{-1}=1+u+\cdots$ with $u=\dfrac{x^{2}}{2}$, so the inverse is $1+\dfrac{x^{2}}{2}+\cdots$. The product is $x+\dfrac{x^{3}}{2}-\dfrac{x^{3}}{6}+\cdots=x+\dfrac{x^{3}}{3}+\cdots$. The coefficient $\dfrac13$ agrees with the exact derivative calculation, $\tan x=x+\dfrac{x^{3}}{3}+\dfrac{2x^{5}}{15}+\cdots$.

### Example 7 (the binomial series, 6 marks)

Find the series for $\sqrt{1+x}$ up to $x^{3}$ and use it to approximate $\sqrt{1.1}$.

With $p=\tfrac12$: $(1+x)^{1/2}=1+\tfrac12x+\dfrac{\frac12\cdot\left(-\frac12\right)}{2}x^{2}+\dfrac{\frac12\cdot\left(-\frac12\right)\cdot\left(-\frac32\right)}{6}x^{3}+\cdots=1+\dfrac x2-\dfrac{x^{2}}{8}+\dfrac{x^{3}}{16}-\cdots$. Setting $x=0.1$ gives $1+0.05-0.00125+0.0000625=1.0488125$. The true value is $1.0488088$, so the approximation is correct to five decimal places. The series is valid for $|x|<1$.

### Example 8 (the logarithm of a cosine, 8 marks)

Find the series for $\ln(\cos x)$ up to the term in $x^{4}$.

Write $\cos x=1+u$ with $u=-\dfrac{x^{2}}{2}+\dfrac{x^{4}}{24}-\cdots$. Using $\ln(1+u)=u-\dfrac{u^{2}}{2}+\cdots$ and keeping terms up to $x^{4}$, with $u^{2}=\dfrac{x^{4}}{4}+\cdots$, we get $\ln(\cos x)=-\dfrac{x^{2}}{2}+\dfrac{x^{4}}{24}-\dfrac12\cdot\dfrac{x^{4}}{4}+\cdots=-\dfrac{x^{2}}{2}+\left(\dfrac1{24}-\dfrac18\right)x^{4}+\cdots=-\dfrac{x^{2}}{2}-\dfrac{x^{4}}{12}+\cdots$. A check: differentiating gives $-x-\dfrac{x^{3}}{3}$, which is $-\tan x$ to this order.

### Example 9 (integrating a series, 7 marks)

Use the series for $e^{-x^{2}}$ to approximate $\displaystyle\int_{0}^{1}e^{-x^{2}}\,dx$.

Integrating $1-x^{2}+\dfrac{x^{4}}{2}-\dfrac{x^{6}}{6}+\cdots$ term by term gives $x-\dfrac{x^{3}}{3}+\dfrac{x^{5}}{10}-\dfrac{x^{7}}{42}+\cdots$. Evaluating from $0$ to $1$: $1-\dfrac13+\dfrac1{10}-\dfrac1{42}=0.743$ using four terms, and adding the next term $\dfrac{1}{216}$ gives $0.747$. The true value is $0.7468$, so the series converges quickly. This integral has no antiderivative in terms of standard functions.

### Example 10 (limits by series, 6 marks)

Use Maclaurin series to find $\displaystyle\lim_{x\to0}\dfrac{x\cos x-\sin x}{x^{3}}$.

The series are $x\cos x=x-\dfrac{x^{3}}{2}+\dfrac{x^{5}}{24}-\cdots$ and $\sin x=x-\dfrac{x^{3}}{6}+\cdots$. The numerator is $\left(-\dfrac12+\dfrac16\right)x^{3}+\cdots=-\dfrac{x^{3}}{3}+\cdots$, so the quotient tends to $-\dfrac13$. L'Hôpital's rule would need three applications, and the series needs one expansion.

### Example 11 (a limit with an exponential and a cosine, 6 marks)

Find $\displaystyle\lim_{x\to0}\dfrac{e^{x}-\cos x-x}{x^{2}}$.

$e^{x}=1+x+\dfrac{x^{2}}{2}+\cdots$ and $\cos x=1-\dfrac{x^{2}}{2}+\cdots$, so the numerator is $1+x+\dfrac{x^{2}}{2}-1+\dfrac{x^{2}}{2}-x+\cdots=x^{2}+\cdots$. The limit is $\dfrac{x^{2}}{x^{2}}=1$.

### Example 12 (arctan, 6 marks)

Obtain the series for $\arctan x$ up to $x^{5}$ from the series for $\dfrac1{1+x^{2}}$.

Since $\dfrac1{1+u}=1-u+u^{2}-\cdots$, with $u=x^{2}$, $\dfrac1{1+x^{2}}=1-x^{2}+x^{4}-\cdots$ for $|x|<1$. Integrating term by term, $\arctan x=x-\dfrac{x^{3}}{3}+\dfrac{x^{5}}{5}-\cdots$ (the constant is $0$ because $\arctan0=0$). Putting $x=1$ formally gives $\dfrac\pi4=1-\dfrac13+\dfrac15-\cdots$, which converges, but very slowly.

### Example 13 (a series solution of a differential equation, 7 marks)

Find the Maclaurin series of the solution of $\dfrac{dy}{dx}=x+y$ with $y(0)=1$ up to $x^{3}$, and compare with the exact solution $y=2e^{x}-x-1$.

$y(0)=1$ and $y'(0)=0+1=1$. Differentiating the equation, $y''=1+y'$, so $y''(0)=2$, and $y'''=y''$, so $y'''(0)=2$. The series is $y=1+x+\dfrac{2}{2}x^{2}+\dfrac{2}{6}x^{3}=1+x+x^{2}+\dfrac{x^{3}}{3}+\cdots$. The exact solution gives $2\left(1+x+\dfrac{x^{2}}{2}+\dfrac{x^{3}}{6}\right)-x-1=1+x+x^{2}+\dfrac{x^{3}}{3}$, which agrees.

## Using your GDC

A calculator or table can compare a polynomial approximation with the function. Plot $y=\sin x$ together with $y=x$, $y=x-\dfrac{x^{3}}{6}$ and $y=x-\dfrac{x^{3}}{6}+\dfrac{x^{5}}{120}$ in radian mode, and observe that each added term extends the interval over which the curves are indistinguishable. The calculator also evaluates the definite integral of the series polynomial and of the original function, and the difference shows the truncation error. If you are asked to approximate a value, show the series and its terms, and use the calculator to check. Note that calculators may use their own series internally, but in the examination the working should show your series. For limits, a table of values near $0$ will support, but not prove, the result from a series.

## Common mistakes

- Forgetting the factorial in the denominator, or using $n$ instead of $n!$.
- Omitting the signs in the alternating series for $\sin x$, $\cos x$ and $\ln(1+x)$, or using the wrong parity (even powers for $\sin x$).
- Making substitution errors, such as replacing $x$ by $2x$ in $x^{3}$ and writing $2x^{3}$ instead of $8x^{3}$.
- Carrying too many terms in a product or too few, so that the coefficient of the required power is incorrect.
- Applying the binomial series without the coefficient pattern $\dfrac{p(p-1)\cdots}{n!}$.
- Forgetting that $\ln(1+x)$ and $(1+x)^{p}$ need $|x|<1$, and using them for large $x$.
- Expecting a polynomial approximation to be good far from $x=0$.
- Forgetting the constant of integration when integrating a series.

## Exam technique and command terms

**Find the Maclaurin series up to and including the term in $x^{n}$** requires terms up to $x^{n}$ only, and no more. **Use the series to approximate** or **estimate** requires you to state the polynomial, substitute the value and give the answer to the requested accuracy. **Hence find the limit** requires expansion of numerator and denominator to the first non-cancelling order. **Show that** the series begins with certain terms requires the working that produces them. When a function is given in terms of known functions, use substitution and products rather than computing high derivatives, as it is faster and less error-prone. When asked to find the series from first principles, set out the derivatives in a table. State clearly the terms ignored, for example "$+\cdots$" or $O(x^{4})$. Comment on validity if asked, for instance $|x|<1$.

## Connections

The coefficients come from the higher derivatives of AHL 5.12, and series give a second way to evaluate the limits of AHL 5.13. The integration of series uses the term-by-term integration of SL 5.5, and the integral of $e^{-x^{2}}$ appears in the normal distribution of Unit 4. The binomial series generalises the binomial theorem of SL 1.9, and the geometric series of SL 1.8 is the case $p=-1$. The relation between the series of $e^{ix}$, $\cos x$ and $\sin x$ explains Euler's formula of AHL 1.13, and series solutions complement the differential equations of AHL 5.18. Small-angle approximations in Unit 3, such as $\sin\theta\approx\theta$ and $\cos\theta\approx1-\frac{\theta^{2}}{2}$, are the first terms of these series.

## Check your understanding

1. Find the first four non-zero terms of the Maclaurin series for $\ln(1+x)$.
2. Use the first five terms of the series for $e^{x}$ to approximate $e^{0.5}$.
3. Use the series up to $x^{5}$ to approximate $\sin0.5$.
4. Find the first three terms of the series for $\cos2x$.
5. Find the series for $e^{x}\sin x$ up to $x^{3}$.
6. Find the series for $\tan x$ up to $x^{3}$.
7. Use the series for $\sqrt{1+x}$ up to $x^{3}$ to approximate $\sqrt{1.1}$.
8. Find $\displaystyle\lim_{x\to0}\dfrac{x\cos x-\sin x}{x^{3}}$.
9. Find $\displaystyle\lim_{x\to0}\dfrac{e^{x}-\cos x-x}{x^{2}}$.
10. Find the series up to $x^{3}$ for the solution of $\dfrac{dy}{dx}=x+y$ with $y(0)=1$.

### Answers

1. $x-\dfrac{x^{2}}{2}+\dfrac{x^{3}}{3}-\dfrac{x^{4}}{4}$.
2. $1.6484$ (the true value is $1.6487$).
3. $0.479427$.
4. $1-2x^{2}+\dfrac23x^{4}$.
5. $x+x^{2}+\dfrac{x^{3}}{3}$.
6. $x+\dfrac{x^{3}}{3}$.
7. $1.0488125$, so $1.04881$ to five decimal places.
8. $-\dfrac13$.
9. $1$.
10. $1+x+x^{2}+\dfrac{x^{3}}{3}$.

## Summary

- Maclaurin series: $f(x)=\sum\dfrac{f^{(n)}(0)}{n!}x^{n}$. The first few terms give a polynomial approximation near $x=0$.
- Standard series: $e^{x}$, $\sin x$ and $\cos x$ (all $x$), $\ln(1+x)$ (for $-1<x\le1$), $(1+x)^{p}$ (for $|x|<1$).
- New series come from substitution, products and quotients (truncating at the order needed), and term-by-term differentiation and integration.
- Use series to approximate values and integrals, and to evaluate limits at $0$ after expanding to the first non-cancelling order.
- For an alternating series with decreasing terms, the error is less than the first omitted term.
- Series solutions of differential equations come from repeated differentiation at $x=0$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists Maclaurin series and five standard expansions under AHL 5.19. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
