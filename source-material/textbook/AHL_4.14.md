# Properties of random variables

> **AHL 4.14 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- use the rules $E(aX+b)=aE(X)+b$ and $\mathrm{Var}(aX+b)=a^{2}\mathrm{Var}(X)$ for discrete and continuous random variables, and explain why each holds;
- calculate $E(g(X))$ for a function of a random variable, and use $\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2}$;
- recognise a probability density function (pdf) and find an unknown constant using $f(x)\ge0$ and $\int f(x)\,dx=1$;
- calculate probabilities for a continuous random variable as areas, $P(a<X<b)=\int_a^b f(x)\,dx$;
- find the mean, variance, median and mode of a continuous random variable;
- use the cumulative distribution function $F(x)=P(X\le x)$ and its relation to $f$;
- solve problems that find unknown parameters from given means, medians or probabilities.

## Why this topic matters

In SL 4.7 you described a chance quantity that takes a few separate values. In SL 4.9 you met a quantity that varies continuously and can be described by a bell-shaped curve. This chapter provides the general language for both and the rules that tell you how to transform them. If a shop's daily profit is €12 per item sold less €30 fixed costs, its mean profit and the variability of its profit follow directly from the mean and variance of the number sold, by the linear rules in this chapter, and you do not need to recompute the whole distribution. Engineers use the same rules to convert from one unit to another, and statisticians use them constantly.

The second half of the chapter is where calculus meets probability. A **probability density function** gives the probability of an interval as an *area*, so integration is the natural tool. Mean, variance and median become integrals, and the mode becomes a maximum, which links to the calculus of Unit 5 on optimisation. In the examination this topic is typically one long question, often worth fifteen or more marks, in which an unknown constant is found from the total area, a mean or median is calculated by integration, and a transformation rule is applied at the end. The mathematics is not harder than methods you already have: the skill is to organise it and to remember that probabilities are areas, not heights.

## Core ideas

### Linear transformations

If $X$ is a random variable and $a$ and $b$ are constants, then
$$
E(aX+b)=aE(X)+b,\qquad \mathrm{Var}(aX+b)=a^{2}\,\mathrm{Var}(X).
$$
The standard deviation therefore becomes $|a|\sigma$. These are the same rules as for data in SL 4.3, and the same intuition applies: adding $b$ shifts the whole distribution without changing its spread, while multiplying by $a$ stretches it. For the mean, $E(aX+b)=\sum(ax+b)p=a\sum xp+b\sum p=aE(X)+b$, since $\sum p=1$, and for continuous $X$ the sums are replaced by integrals. For the variance,
$$
\mathrm{Var}(aX+b)=E\big[(aX+b-a\mu-b)^{2}\big]=E\big[a^{2}(X-\mu)^{2}\big]=a^{2}\mathrm{Var}(X).
$$
A negative $a$ reverses the order of values but does not give a negative variance, because it is squared.

### Expected value of a function

More generally, for a function $g$,
$$
E\big(g(X)\big)=\sum g(x)\,P(X=x)\quad\text{(discrete)},\qquad E\big(g(X)\big)=\int g(x)f(x)\,dx\quad\text{(continuous)}.
$$
The most important case is $g(x)=x^{2}$, which gives $E(X^{2})$ and the variance
$$
\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2}.
$$
Do not confuse $E(X^{2})$ with $[E(X)]^{2}$. They are equal only when the variance is zero, and in general $E(X^{2})\ge[E(X)]^{2}$.

### Continuous random variables and the pdf

A continuous random variable $X$ has a **probability density function** $f$ with two properties:
$$
f(x)\ge0\ \text{for all }x,\qquad \int_{-\infty}^{\infty}f(x)\,dx=1.
$$
In practice $f$ is non-zero on an interval, say $a\le x\le b$, and is zero elsewhere, so the second condition reads $\int_a^bf(x)\,dx=1$. Probabilities are areas:
$$
P(c<X<d)=\int_c^df(x)\,dx.
$$
Because a single point has no width, $P(X=c)=0$, so strict and non-strict inequalities give the same probability. The value $f(x)$ is a *density*, not a probability, and it can exceed $1$ as long as the area is $1$. To find an unknown constant $k$ in $f$, integrate over the whole range, set the result equal to $1$, and solve.

### Mean, variance, median and mode

For a continuous random variable,
$$
E(X)=\mu=\int x\,f(x)\,dx,\qquad \mathrm{Var}(X)=\int(x-\mu)^{2}f(x)\,dx=\int x^{2}f(x)\,dx-\mu^{2}.
$$
The **median** $m$ is the value that splits the area in half:
$$
\int_{-\infty}^{m}f(x)\,dx=\tfrac12.
$$
The **mode** is the value of $x$ at which $f$ is greatest. Find it by differentiating $f$ and solving $f'(x)=0$, and check the end points of the interval, since the maximum may occur there. For a symmetric distribution the mean, median and mode coincide (if the mode is unique). If the distribution has a long right tail the mean is greater than the median.

### The cumulative distribution function

The **cumulative distribution function** (cdf) is $F(x)=P(X\le x)=\int_{-\infty}^{x}f(t)\,dt$. It increases from $0$ to $1$, and $f(x)=F'(x)$ wherever $f$ is continuous. Then $P(c<X<d)=F(d)-F(c)$, and the median satisfies $F(m)=\tfrac12$. This is the continuous version of the cumulative frequency graph from SL 4.2, and it is what the normal cumulative distribution function on your calculator computes.

### Using the rules to solve problems

Often a question gives a combination of facts, such as $E(X)=3$ and $\mathrm{Var}(X)=4$, and asks for the mean and variance of $Y=2X-5$. Use the rules directly. If it gives the information in a different form, such as $E(X^{2})=13$ and $E(X)=3$, first find $\mathrm{Var}(X)=13-9=4$. For a pdf with unknown parameters, each piece of information gives an equation: total area $1$, a given mean, a given median or a given probability. Set up as many equations as unknowns.

## Worked examples

### Example 1 (linear transformation, 4 marks)

$E(X)=3$ and $\mathrm{Var}(X)=4$. Find the mean, variance and standard deviation of $Y=2X-5$.

By the rules, $E(Y)=2(3)-5=1$ and $\mathrm{Var}(Y)=2^{2}\times4=16$, so the standard deviation of $Y$ is $4$. The constant $-5$ shifts the mean but has no effect on the spread, and the factor $2$ doubles the standard deviation (from $2$ to $4$) and multiplies the variance by $4$. A frequent slip is to subtract $5$ from the variance.

### Example 2 (discrete check, 6 marks)

$X$ takes the values $1,2,3$ with probabilities $0.2,0.5,0.3$. Find $E(X)$ and $\mathrm{Var}(X)$, and then find $E(Y)$ and $\mathrm{Var}(Y)$ for $Y=3X-2$. Verify $E(Y)$ directly.

First, $E(X)=0.2+1.0+0.9=2.1$ and $E(X^{2})=0.2+2.0+2.7=4.9$, so $\mathrm{Var}(X)=4.9-2.1^{2}=4.9-4.41=0.49$. By the rules, $E(Y)=3(2.1)-2=4.3$ and $\mathrm{Var}(Y)=9\times0.49=4.41$. For the direct check, the values of $Y$ are $1,4,7$ with the same probabilities, so $E(Y)=0.2+2.0+2.1=4.3$, which agrees. Also $E(Y^{2})=0.2+8+14.7=22.9$ and $22.9-4.3^{2}=22.9-18.49=4.41$, which agrees with the rule.

### Example 3 (a pdf, mean and variance, 9 marks)

A random variable has pdf $f(x)=kx(4-x)$ for $0\le x\le4$, and $f(x)=0$ otherwise. Find $k$, $E(X)$, $\mathrm{Var}(X)$, the median and the mode.

The total area must be $1$: $\int_0^4kx(4-x)\,dx=k\left[2x^{2}-\tfrac{x^{3}}{3}\right]_0^4=k\left(32-\tfrac{64}{3}\right)=\tfrac{32k}{3}$. So $\tfrac{32k}{3}=1$ and $k=\tfrac{3}{32}$. The mean is $E(X)=\tfrac{3}{32}\int_0^4x^{2}(4-x)\,dx=\tfrac{3}{32}\left[\tfrac{4x^{3}}{3}-\tfrac{x^{4}}{4}\right]_0^4=\tfrac{3}{32}\left(\tfrac{256}{3}-64\right)=\tfrac{3}{32}\times\tfrac{64}{3}=2$. For the second moment, $E(X^{2})=\tfrac{3}{32}\int_0^4x^{3}(4-x)\,dx=\tfrac{3}{32}\left[x^{4}-\tfrac{x^{5}}{5}\right]_0^4=\tfrac{3}{32}(256-204.8)=4.8$, so $\mathrm{Var}(X)=4.8-4=0.8$. The curve is a parabola symmetric about $x=2$, so the median is $2$ and the mode is $2$ (where $f'(x)=k(4-2x)=0$). For a symmetric pdf the mean, median and mode agree, which is a good check on the integration.

### Example 4 (a skewed pdf, 10 marks)

$X$ has pdf $f(x)=\tfrac{x^{2}}{9}$ for $0\le x\le3$. Verify that this is a pdf, and find $E(X)$, $\mathrm{Var}(X)$, the median, the mode and $P(X>2)$.

The function is non-negative, and $\int_0^3\tfrac{x^{2}}{9}\,dx=\left[\tfrac{x^{3}}{27}\right]_0^3=1$, so it is a pdf. The mean is $E(X)=\int_0^3\tfrac{x^{3}}{9}\,dx=\left[\tfrac{x^{4}}{36}\right]_0^3=\tfrac{81}{36}=\tfrac94=2.25$. Next $E(X^{2})=\int_0^3\tfrac{x^{4}}{9}\,dx=\tfrac{243}{45}=5.4$, so $\mathrm{Var}(X)=5.4-2.25^{2}=5.4-5.0625=0.3375$. For the median, $\int_0^m\tfrac{x^{2}}{9}\,dx=\tfrac{m^{3}}{27}=\tfrac12$, so $m^{3}=13.5$ and $m=2.38$. The density increases on $[0,3]$, so the maximum is at the end point and the mode is $3$. Finally $P(X>2)=\int_2^3\tfrac{x^{2}}{9}\,dx=1-\tfrac{8}{27}=\tfrac{19}{27}=0.704$. The distribution has a tail to the left, so the mean $2.25$ is less than the median $2.38$, which is less than the mode $3$: negative skew.

### Example 5 (a triangular pdf and the median, 9 marks)

$X$ has pdf $f(x)=\tfrac{2-x}{2}$ for $0\le x\le2$. Find $E(X)$, $\mathrm{Var}(X)$ and the median.

The graph is a right triangle of base $2$ and height $1$, so the area is $1$. The mean is $E(X)=\tfrac12\int_0^2(2x-x^{2})\,dx=\tfrac12\left[x^{2}-\tfrac{x^{3}}{3}\right]_0^2=\tfrac12\left(4-\tfrac83\right)=\tfrac23$. Also $E(X^{2})=\tfrac12\int_0^2(2x^{2}-x^{3})\,dx=\tfrac12\left[\tfrac{2x^{3}}{3}-\tfrac{x^{4}}{4}\right]_0^2=\tfrac12\left(\tfrac{16}{3}-4\right)=\tfrac23$, so $\mathrm{Var}(X)=\tfrac23-\tfrac49=\tfrac29$. For the median, $\int_0^m\tfrac{2-x}{2}\,dx=m-\tfrac{m^{2}}{4}=\tfrac12$, so $m^{2}-4m+2=0$, giving $m=2\pm\sqrt2$. Only $m=2-\sqrt2=0.586$ lies in $[0,2]$. The mode is $0$, where the density is greatest. So mode $<$ median $<$ mean, which is positive skew.

### Example 6 (finding constants from a mean, 7 marks)

$X$ has pdf $f(x)=a+bx$ for $0\le x\le2$ and $E(X)=1.2$. Find $a$ and $b$.

The total area is $\int_0^2(a+bx)\,dx=2a+2b=1$, so $a+b=0.5$. The mean gives $\int_0^2x(a+bx)\,dx=2a+\tfrac{8b}{3}=1.2$. Substituting $a=0.5-b$ gives $1-2b+\tfrac{8b}{3}=1.2$, so $\tfrac{2b}{3}=0.2$ and $b=0.3$, hence $a=0.2$. Check: $f(0)=0.2\ge0$ and $f(2)=0.8\ge0$, so the density is non-negative on the interval, as required. Always make this check, because the equations alone can give a function that is negative somewhere.

### Example 7 (cdf, 6 marks)

For the pdf in Example 4 find the cdf $F(x)$ and use it to find $P(1<X<2)$.

For $0\le x\le3$, $F(x)=\int_0^x\tfrac{t^{2}}{9}\,dt=\tfrac{x^{3}}{27}$. So $F(x)=0$ for $x<0$, $F(x)=\tfrac{x^{3}}{27}$ on $[0,3]$ and $F(x)=1$ for $x>3$. Then $P(1<X<2)=F(2)-F(1)=\tfrac{8}{27}-\tfrac{1}{27}=\tfrac{7}{27}=0.259$. Differentiating $F$ returns $f(x)=\tfrac{x^{2}}{9}$, as it should.

### Example 8 (function of a variable, 5 marks)

For a profit problem, a shop sells $X$ items a day with $E(X)=40$ and $\mathrm{Var}(X)=25$. Each item gives a profit of €12 and there is a daily cost of €30. Find the mean and standard deviation of the daily profit.

The profit is $P=12X-30$. So $E(P)=12\times40-30=450$ and $\mathrm{Var}(P)=12^{2}\times25=3600$, giving a standard deviation of $\sqrt{3600}=60$. The mean daily profit is €450 and the standard deviation is €60. The fixed cost changes only the mean, and the profit per item scales both.

## Using your GDC

For a pdf, the calculator's numerical integration is the main tool: use it to evaluate $\int_a^bf(x)\,dx$ to check a total area equal to $1$, to compute $E(X)=\int xf(x)\,dx$ and $E(X^{2})=\int x^{2}f(x)\,dx$, and to evaluate probabilities. Enter the functions $xf(x)$ and $x^{2}f(x)$ separately, and store the mean before computing the variance. To solve for the median or an unknown constant when the integral gives a polynomial equation, use the equation solver or graph both sides and find the intersection. To find the mode of a function, plot it and use the maximum feature, then compare with the end points. When the question asks for an exact value, integrate by hand, since the calculator will give only a decimal. Use the calculator to check, not to replace, the method, because most marks are for setting up the integral and the equation correctly. For a discrete distribution, one-variable statistics with probabilities as frequencies give $E(X)$ and the standard deviation directly.

## Common mistakes

- Writing $\mathrm{Var}(aX+b)=a\,\mathrm{Var}(X)+b$ or $a^{2}\mathrm{Var}(X)+b$. The constant $b$ does not affect the variance, and the factor is $a^{2}$.
- Confusing $E(X^{2})$ with $[E(X)]^{2}$, which leads to a variance of zero or a negative variance.
- Taking the height of the pdf as a probability, or insisting that $f(x)\le1$.
- Forgetting to integrate over the correct interval, or to include $x$ in the integrand when finding the mean.
- Leaving out the check that $f(x)\ge0$ after finding constants.
- Finding the mode by setting the derivative equal to zero without looking at the end points.
- Solving $\int_0^mf\,dx=\tfrac12$ and giving a root that lies outside the interval.
- Using $P(X=c)$ as a positive number for a continuous variable.

## Exam technique and command terms

**Show that** a function is a pdf requires two statements: it is non-negative on the stated range, and the integral over that range equals $1$. **Find $k$** means integrate and set the total equal to $1$. **Find the mean** requires $\int xf(x)\,dx$ written out. **Find the variance** is easiest as $E(X^{2})-\mu^{2}$ and the working for $E(X^{2})$ should be visible. **Find the median** requires the equation $\int_{-\infty}^{m}f\,dx=\tfrac12$ or $F(m)=\tfrac12$, followed by a solution that lies in the range. **Find the mode** is a maximisation, with a justification, for example by sign of the derivative or a comparison of end points. For a transformation, state the rule and apply it with the given numbers. For long questions, label each part and keep exact values as fractions or surds until the end. Comment on skew when asked by comparing mean, median and mode.

## Connections

The linear rules generalise the transformation results of SL 4.3, and they underlie the standardisation of the normal distribution in SL 4.12, where $Z=\tfrac{X-\mu}{\sigma}$ has mean $0$ and variance $1$ because $E(aX+b)$ and $\mathrm{Var}(aX+b)$ behave as above. The discrete formulas are those of SL 4.7, and the binomial mean and variance are examples. The continuous formulas rest on the definite integrals of SL 5.11, and the mode is an optimisation problem from SL 5.8. Integration by substitution and by parts, in AHL 5.16, will be needed for harder densities such as $xe^{-x}$. The normal density $\tfrac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^{2}/2\sigma^{2}}$ is itself a pdf, but it has no elementary antiderivative, which is why the calculator provides the cumulative distribution function.

## Check your understanding

1. $E(X)=5$ and $\mathrm{Var}(X)=9$. Find the mean, variance and standard deviation of $Y=4-2X$.
2. $X$ takes the values $0,1,2$ with probabilities $0.3,0.5,0.2$. Find $E(X)$ and $\mathrm{Var}(X)$, and then $E(Y)$ and $\mathrm{Var}(Y)$ for $Y=10X+5$.
3. $f(x)=kx$ for $0\le x\le4$. Find $k$, $E(X)$, $\mathrm{Var}(X)$, the median and the mode.
4. $f(x)=\tfrac38x^{2}$ for $0\le x\le2$. Verify that this is a pdf, and find $E(X)$ and $\mathrm{Var}(X)$.
5. $f(x)=k(4-x)$ for $0\le x\le4$. Find $k$, $E(X)$ and the median.
6. $E(X)=3$ and $\mathrm{Var}(X)=2$, and $Y=3X+1$. Find $E(Y^{2})$.
7. $f(x)=a+bx$ for $0\le x\le2$ and $E(X)=1.1$. Find $a$ and $b$.
8. $P(X=x)=\tfrac{x}{15}$ for $x=1,2,3,4,5$. Find $E(X)$ and $\mathrm{Var}(X)$.
9. Prove that $\mathrm{Var}(aX+b)=a^{2}\mathrm{Var}(X)$.
10. For $f(x)=\tfrac{x^{2}}{9}$ on $0\le x\le3$, find $P(X>2)$ and compare the mean, median and mode.

### Answers

1. $E(Y)=4-2(5)=-6$. $\mathrm{Var}(Y)=(-2)^{2}\times9=36$. The standard deviation is $6$.
2. $E(X)=0.5+0.4=0.9$ and $E(X^{2})=0.5+0.8=1.3$, so $\mathrm{Var}(X)=1.3-0.81=0.49$. $E(Y)=10(0.9)+5=14$ and $\mathrm{Var}(Y)=100\times0.49=49$.
3. $\int_0^4kx\,dx=8k=1$ so $k=\tfrac18$. $E(X)=\int_0^4\tfrac{x^{2}}{8}\,dx=\tfrac83$. $E(X^{2})=\int_0^4\tfrac{x^{3}}{8}\,dx=8$, so $\mathrm{Var}(X)=8-\tfrac{64}{9}=\tfrac89$. The median satisfies $\tfrac{m^{2}}{16}=\tfrac12$, so $m=\sqrt8=2.83$. The mode is $4$.
4. $\int_0^2\tfrac38x^{2}\,dx=\tfrac38\times\tfrac83=1$ and $f\ge0$. $E(X)=\tfrac38\int_0^2x^{3}\,dx=\tfrac38\times4=1.5$. $E(X^{2})=\tfrac38\int_0^2x^{4}\,dx=\tfrac38\times\tfrac{32}{5}=2.4$, so $\mathrm{Var}(X)=2.4-2.25=0.15$.
5. $\int_0^4k(4-x)\,dx=8k=1$ so $k=\tfrac18$. $E(X)=\tfrac18\int_0^4(4x-x^{2})\,dx=\tfrac18\left(32-\tfrac{64}{3}\right)=\tfrac43$. The median satisfies $\tfrac{1}{8}\left(4m-\tfrac{m^{2}}{2}\right)=\tfrac12$, so $m^{2}-8m+8=0$ and $m=4-2\sqrt2=1.17$.
6. $E(Y)=3(3)+1=10$ and $\mathrm{Var}(Y)=9\times2=18$. Then $E(Y^{2})=\mathrm{Var}(Y)+[E(Y)]^{2}=18+100=118$.
7. $2a+2b=1$ and $2a+\tfrac{8b}{3}=1.1$. With $a=0.5-b$: $1-2b+\tfrac{8b}{3}=1.1$, so $\tfrac{2b}{3}=0.1$, $b=0.15$ and $a=0.35$.
8. $E(X)=\tfrac{1+4+9+16+25}{15}=\tfrac{55}{15}=\tfrac{11}{3}$. $E(X^{2})=\tfrac{1+8+27+64+125}{15}=15$. $\mathrm{Var}(X)=15-\tfrac{121}{9}=\tfrac{14}{9}=1.56$.
9. $E(aX+b)=a\mu+b$, so $\mathrm{Var}(aX+b)=E\big[(aX+b-a\mu-b)^{2}\big]=E\big[a^{2}(X-\mu)^{2}\big]=a^{2}E\big[(X-\mu)^{2}\big]=a^{2}\mathrm{Var}(X)$.
10. $P(X>2)=1-\tfrac{8}{27}=\tfrac{19}{27}=0.704$. The mean is $2.25$, the median is $2.38$ and the mode is $3$. The mean is smallest, which indicates a tail to the left (negative skew).

## Summary

- $E(aX+b)=aE(X)+b$ and $\mathrm{Var}(aX+b)=a^{2}\mathrm{Var}(X)$. $\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2}$ and $E(g(X))=\sum g(x)p$ or $\int g(x)f(x)\,dx$.
- A pdf satisfies $f\ge0$ and $\int f\,dx=1$. Probabilities are areas, and $P(X=c)=0$.
- $E(X)=\int xf\,dx$, $\mathrm{Var}(X)=\int x^{2}f\,dx-\mu^{2}$, the median solves $\int_{-\infty}^{m}f=\tfrac12$ and the mode maximises $f$ (check end points).
- The cdf is $F(x)=\int_{-\infty}^{x}f$, with $f=F'$ and $P(c<X<d)=F(d)-F(c)$.
- Unknown constants come from the total area, a given mean, a given median or a given probability. Check that the result is non-negative.
- A tail to the right means mean $>$ median, and a tail to the left means mean $<$ median.
