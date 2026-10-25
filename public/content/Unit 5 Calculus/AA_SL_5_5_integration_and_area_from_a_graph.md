# Integration and area from a graph

> **SL 5.5 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain integration as the reverse of differentiation, and find an antiderivative of $ax^{n}$ for integer $n\neq-1$;
- write and use the indefinite integral $\int f(x)\,dx=F(x)+C$, including the constant of integration;
- find the constant $C$ from a boundary condition and so determine a particular function;
- interpret the definite integral $\int_a^bf(x)\,dx$ as the area under the graph of $y=f(x)$ between $x=a$ and $x=b$ when $f(x)\ge0$;
- evaluate definite integrals with a calculator and, for powers, by hand with $F(b)-F(a)$;
- estimate an area by rectangles and trapezoids, and understand why a finer subdivision gives a better estimate;
- interpret the area under a rate-of-change graph as a total change, with units.

## Why this topic matters

Differentiation breaks a quantity into its rate of change. Integration puts it back together. If you know the speed of a car at every moment, integration tells you the distance travelled. If you know how fast water flows into a tank, integration gives the volume that has accumulated. If you know the marginal cost of making one more item, integration gives the total cost. Areas under curves are the geometric picture of all these accumulations, and they also measure probability, work done by a force, energy used by an appliance, and many other quantities that build up over an interval.

This chapter gives you the first tools. You learn to reverse the power rule to find an antiderivative, to evaluate definite integrals, and to link integrals with areas. The more powerful techniques for substitution, products and areas between curves come in SL 5.10 and 5.11 and in the AHL chapters. In the examination, the integration of simple powers is a frequent part of longer questions: finding a function from its derivative and a point, finding an area under a curve with a calculator, and interpreting the result in context. These are secure marks for candidates who remember the constant of integration, who can handle negative powers, and who write down the integral they are using before pressing the calculator.

## Core ideas

### Integration as anti-differentiation

If $F'(x)=f(x)$, then $F$ is an **antiderivative** of $f$. Since the derivative of a constant is zero, every antiderivative is determined only up to an added constant, and we write
$$
\int f(x)\,dx=F(x)+C,
$$
which is the **indefinite integral** of $f$, with $C$ the **constant of integration**. The symbol $\int$ is an elongated S for "sum", and $dx$ shows that the variable is $x$. For powers of $x$, reversing the power rule gives
$$
\int ax^{n}\,dx=\frac{a\,x^{n+1}}{n+1}+C,\qquad n\neq-1.
$$
In words: increase the power by one, and divide by the new power. For example, $\int x^{4}\,dx=\tfrac{x^{5}}{5}+C$ and $\int x^{-2}\,dx=\tfrac{x^{-1}}{-1}+C=-\tfrac1x+C$. The rule fails for $n=-1$, because it would require division by zero, and that case, $\int\tfrac1x\,dx=\ln|x|+C$, is treated in SL 5.10. You can always check an integral by differentiating the answer.

### Sums, multiples and preparation

Integration respects sums and constant multiples:
$$
\int\big(af(x)\pm bg(x)\big)\,dx=a\int f(x)\,dx\pm b\int g(x)\,dx.
$$
So you integrate a polynomial term by term. As in the chapter on differentiation, expressions with brackets or fractions are first rewritten as sums of powers: expand $(x+2)^{2}$ to $x^{2}+4x+4$, and write $\tfrac{3}{x^{2}}$ as $3x^{-2}$. A single constant $C$ is enough for the whole expression, because separate constants combine into one. Do not use the rule $\int f(x)g(x)\,dx=\int f\int g$, which is false.

### Finding the constant

If you are told the value of the antiderivative at one point, you can determine $C$. This is called a **boundary condition** or initial condition. For example, if $f'(x)=3x^{2}-4$ and $f(2)=5$, then $f(x)=x^{3}-4x+C$, and substituting $x=2$ gives $8-8+C=5$, so $C=5$. Always substitute into the antiderivative, not into the derivative.

### Area under a graph

Suppose $f(x)\ge0$ on $[a,b]$. The **definite integral**
$$
\int_a^bf(x)\,dx
$$
is the area of the region bounded by the curve $y=f(x)$, the $x$-axis and the vertical lines $x=a$ and $x=b$. The numbers $a$ and $b$ are the **limits** of integration. The idea behind this is to slice the region into narrow vertical strips of width $\Delta x$, whose area is approximately $f(x)\Delta x$, and to add them. As the strips become narrower, the sum approaches the exact area, and the limit of these sums is the definite integral. This explains the notation: $\int$ for the sum and $f(x)\,dx$ for a strip of height $f(x)$ and tiny width $dx$.

### Evaluating definite integrals

The **fundamental theorem of calculus** links the two ideas: if $F$ is any antiderivative of $f$,
$$
\int_a^bf(x)\,dx=F(b)-F(a)=\big[F(x)\big]_a^b.
$$
The constant $C$ cancels in the subtraction, so you do not need it. For integrals of powers you can work by hand, and for more complicated functions you will use the calculator. Both ways are valid unless the question specifies one. The area is a number with units: if $x$ is in seconds and $y$ is in metres per second, the area is in metres.

### Estimating areas

When no antiderivative is available, areas can be estimated. With $n$ strips of width $h=\tfrac{b-a}{n}$, the **left-rectangle** estimate uses the height at the left end of each strip, and the **right-rectangle** estimate uses the height at the right end. For an increasing function, the left sum underestimates the area and the right sum overestimates it. The average of the two is the **trapezoidal** estimate, which is usually closer. Using more strips improves the estimate, and the calculator's numerical integration effectively does this with a very large number of strips.

### Area as an accumulated change

If $f(t)$ is a rate of change, such as litres per minute, then $\int_a^bf(t)\,dt$ is the total change in the quantity, such as litres, over the time interval. This is why an integral is the natural tool for total distance from speed, total volume from flow and total energy from power. Check the units: rate units multiplied by input units give the units of the accumulated quantity.

## Worked examples

### Example 1 (indefinite integral of a polynomial, 3 marks)

Find $\int(6x^{2}-4x+5)\,dx$.

Integrate term by term: $\int6x^{2}\,dx=2x^{3}$, $\int-4x\,dx=-2x^{2}$ and $\int5\,dx=5x$. So the integral is $2x^{3}-2x^{2}+5x+C$. Check by differentiating: $6x^{2}-4x+5$, as required. A mark is lost if $+C$ is missing, which is the most frequent slip in this topic.

### Example 2 (negative powers, 4 marks)

Find $\int\left(\dfrac{3}{x^{2}}+2x\right)dx$.

Rewrite as $\int(3x^{-2}+2x)\,dx$. Then $\int3x^{-2}\,dx=\dfrac{3x^{-1}}{-1}=-\dfrac3x$ and $\int2x\,dx=x^{2}$. So the integral is $-\dfrac3x+x^{2}+C$. Check: the derivative of $-3x^{-1}$ is $3x^{-2}$, and the derivative of $x^{2}$ is $2x$, so we recover the integrand.

### Example 3 (expanding first, 4 marks)

Find (a) $\int(x+2)^{2}\,dx$ and (b) $\int\dfrac{x^{3}-3x^{2}}{x}\,dx$.

(a) Expand: $(x+2)^{2}=x^{2}+4x+4$, so the integral is $\dfrac{x^{3}}{3}+2x^{2}+4x+C$. It is not $\dfrac{(x+2)^{3}}{3}$ in this chapter, although that happens to be an equivalent antiderivative with a different constant; the method of SL 5.10 explains why. (b) Divide each term by $x$ to get $x^{2}-3x$, so the integral is $\dfrac{x^{3}}{3}-\dfrac{3x^{2}}{2}+C$.

### Example 4 (finding the constant, 5 marks)

The gradient function of a curve is $f'(x)=3x^{2}-4$ and the curve passes through $(2,5)$. Find $f(x)$.

Integrating, $f(x)=x^{3}-4x+C$. Substituting $x=2$ and $f(2)=5$ gives $8-8+C=5$, so $C=5$ and $f(x)=x^{3}-4x+5$. As a check, $f'(x)=3x^{2}-4$, and $f(2)=5$.

### Example 5 (a definite integral and the area, 4 marks)

Find the area under $y=2x+1$ between $x=1$ and $x=3$.

The function is positive on this interval, so the area is $\int_1^3(2x+1)\,dx=\big[x^{2}+x\big]_1^3=(9+3)-(1+1)=10$. We can check using the trapezoid formula for the region, since it is a trapezoid with parallel sides $3$ and $7$ (the values at $x=1$ and $x=3$) and width $2$, so the area is $\tfrac12(3+7)(2)=10$.

### Example 6 (area under a curve, 5 marks)

Find the area of the region bounded by $y=4-x^{2}$ and the $x$-axis.

The curve crosses the axis where $4-x^{2}=0$, so $x=\pm2$, and it lies above the axis between these values. So the area is $\int_{-2}^{2}(4-x^{2})\,dx=\left[4x-\dfrac{x^{3}}{3}\right]_{-2}^{2}=\left(8-\dfrac83\right)-\left(-8+\dfrac83\right)=16-\dfrac{16}{3}=\dfrac{32}{3}$. The area is $\tfrac{32}{3}=10.7$ square units. By symmetry we could also double the integral from $0$ to $2$. The limits are found by solving for where the curve meets the axis.

### Example 7 (estimating with rectangles, 6 marks)

Estimate the area under $y=x^{2}$ from $x=0$ to $x=2$ using four strips of equal width with (a) left rectangles, (b) right rectangles, and (c) the trapezoidal rule. Compare with the exact area.

The width is $0.5$, and the values of $y$ at $x=0,0.5,1,1.5,2$ are $0,0.25,1,2.25,4$. (a) The left sum is $0.5(0+0.25+1+2.25)=1.75$. (b) The right sum is $0.5(0.25+1+2.25+4)=3.75$. (c) The trapezoidal estimate is their average, $\tfrac12(1.75+3.75)=2.75$. The exact area is $\int_0^2x^{2}\,dx=\dfrac{8}{3}=2.67$. As expected, the left sum underestimates and the right sum overestimates, because the function is increasing, and the trapezoidal estimate is much closer. Doubling the number of strips would improve each estimate.

### Example 8 (total change, 4 marks)

Water flows into a tank at the rate $4t$ litres per minute, where $t$ is the time in minutes. Find the volume of water that enters in the first $5$ minutes.

The volume is the area under the rate graph: $\int_0^5 4t\,dt=\big[2t^{2}\big]_0^5=50$ litres. The graph of $y=4t$ is a straight line from $0$ to $20$, so the area is a triangle $\tfrac12\times5\times20=50$, which confirms the answer. The units are litres per minute times minutes, which is litres.

### Example 9 (finding a limit, 3 marks)

Find $k>0$ such that $\int_0^{k}2x\,dx=9$.

Integrating gives $\big[x^{2}\big]_0^k=k^{2}=9$, so $k=3$ since $k>0$. The area under $y=2x$ from $0$ to $3$ is a triangle with base $3$ and height $6$, so the area is $9$, which confirms the result.

## Using your GDC

The calculator can evaluate definite integrals numerically: enter the function, the lower limit and the upper limit, and read the value. For the area under a curve this is the quickest method when the antiderivative is unfamiliar, for instance for $y=2^{x}$ between $0$ and $3$, where the calculator gives $10.1$. Use brackets around the function, for example $2^{x}$ or $x^{2}+1$, and make sure the limits are in the right order. You can also draw the graph, and use the area or integral option under the graph menu to shade the region and display the value. To check an indefinite integral, differentiate your answer numerically at a test point and compare it with the integrand. If the question asks for an exact value, integrate by hand, because the calculator returns only a decimal. When writing the answer to an area question, give the units, such as "square units", or the units of the context, and quote three significant figures when the value is not exact.

## Common mistakes

- Forgetting $+C$ in an indefinite integral, or writing $+C$ on a definite integral.
- Applying the power rule for integration with $n=-1$, or forgetting that $\int x^{-2}\,dx=-x^{-1}+C$ has a negative sign.
- Integrating products by integrating each factor separately.
- Substituting the boundary condition into the derivative instead of the antiderivative.
- Reversing the limits, so that the area becomes negative, or subtracting in the wrong order, $F(a)-F(b)$.
- Using $\int_a^bf(x)\,dx$ as an area when $f$ is negative on part of the interval. The integral is then a signed quantity, as SL 5.11 explains.
- Not rewriting fractions and brackets before integrating.
- Giving an area without checking that the result is positive and has the correct units.

## Exam technique and command terms

**Find** $\int f(x)\,dx$ requires the antiderivative with $+C$. **Show that** the integral has a given value requires each step: integrate, substitute the limits, subtract. **Find the area** requires the integral set up with limits and the working for the value, or, where a calculator is permitted, the integral written down and the result stated. Where a curve crosses the axis, solve for the limits yourself. **Determine the function** with a given point requires the constant of integration, followed by a statement of the final function. **Estimate** an area invites the rectangle or trapezoid method, with the table of values written down. **Interpret** requires the quantity and the units. As a check, differentiate your integral to see that you recover the integrand, and compare an area with a rough geometric estimate, so that an arithmetic slip is caught. If part of a question asks for the integral and a later part uses it, keep the exact form until the end.

## Connections

Integration reverses the power rule of SL 5.3, so every skill with indices and fractions from that chapter is used again here. The definite integral connects with the area ideas in geometry and with the sum of a series in the algebra unit, since an integral is a limit of sums. In SL 5.9, velocity and displacement are related by integration, and the area under a velocity graph is the displacement. In the statistics unit, probabilities for continuous variables are areas under a density curve, as in SL 4.9 and AHL 4.14. In SL 5.10 you will meet the integrals of other functions and the method of substitution, and in SL 5.11 you will treat areas between curves and areas where the curve dips below the axis. AHL 5.17 extends the idea to volumes of revolution.

## Check your understanding

1. Find $\int(8x^{3}-3x^{2}+2)\,dx$.
2. Find $\int\dfrac{5}{x^{3}}\,dx$.
3. Find $\int(2x-1)^{2}\,dx$ by expanding.
4. A curve has gradient $4x-3$ and passes through $(1,2)$. Find its equation.
5. Evaluate $\int_0^2(3x^{2}+1)\,dx$.
6. Find the area under $y=x^{2}+2$ between $x=1$ and $x=4$.
7. Find the area enclosed by $y=6x-x^{2}$ and the $x$-axis.
8. Find $k>1$ such that $\int_1^{k}2x\,dx=8$.
9. Use a calculator to find the area under $y=2^{x}$ between $x=0$ and $x=3$.
10. Explain why the rule $\int x^{n}\,dx=\dfrac{x^{n+1}}{n+1}+C$ cannot be used when $n=-1$.

### Answers

1. $2x^{4}-x^{3}+2x+C$.
2. $\int5x^{-3}\,dx=\dfrac{5x^{-2}}{-2}+C=-\dfrac{5}{2x^{2}}+C$.
3. $(2x-1)^{2}=4x^{2}-4x+1$, so the integral is $\dfrac{4x^{3}}{3}-2x^{2}+x+C$.
4. $y=2x^{2}-3x+C$. At $(1,2)$: $2-3+C=2$, so $C=3$ and $y=2x^{2}-3x+3$.
5. $\big[x^{3}+x\big]_0^2=8+2=10$.
6. $\left[\dfrac{x^{3}}{3}+2x\right]_1^4=\left(\dfrac{64}{3}+8\right)-\left(\dfrac13+2\right)=21+6=27$.
7. The curve meets the axis at $x=0$ and $x=6$, and lies above it between them. The area is $\left[3x^{2}-\dfrac{x^{3}}{3}\right]_0^6=108-72=36$.
8. $\big[x^{2}\big]_1^k=k^{2}-1=8$, so $k^{2}=9$ and $k=3$.
9. The calculator gives $10.1$ (more precisely $\dfrac{7}{\ln2}=10.0989$).
10. For $n=-1$ the formula would have the denominator $n+1=0$, which is undefined. The function $x^{-1}$ needs a different antiderivative, $\ln|x|$, which is treated in SL 5.10.

## Summary

- Integration reverses differentiation: $\int ax^{n}\,dx=\dfrac{ax^{n+1}}{n+1}+C$ for $n\neq-1$. Always add $+C$ to an indefinite integral.
- Integrate sums term by term, and rewrite brackets and fractions as powers first. Check by differentiating.
- A boundary condition fixes the constant: substitute into the antiderivative.
- $\int_a^bf(x)\,dx=F(b)-F(a)$ is the area under $y=f(x)$ from $a$ to $b$ when $f\ge0$. The constant cancels.
- Areas can be estimated by left, right and trapezoid rules, which improve with more strips.
- The area under a rate graph is the total change, with units of rate times input.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists power integral and area above the x-axis under SL 5.5. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
