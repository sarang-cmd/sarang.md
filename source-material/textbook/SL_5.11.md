# Definite integrals and areas

> **SL 5.11 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- evaluate a definite integral $\displaystyle\int_{a}^{b}f(x)\,dx=F(b)-F(a)$ using an antiderivative and the Fundamental Theorem of Calculus;
- use the properties of definite integrals: reversing limits, splitting an interval, and taking out constant multiples;
- interpret a definite integral as a signed area, and find the area between a curve and the $x$-axis when the curve crosses the axis;
- find the area enclosed between two curves, including when the curves cross within the interval;
- use substitution in a definite integral and change the limits;
- find an unknown limit or constant from the value of an integral;
- use a graphic display calculator to evaluate integrals and areas, and know when exact work is required.

## Why this topic matters

Integration began as a way to measure area, and the Fundamental Theorem of Calculus is the surprise that connects it to differentiation: the area under a curve between two points is found from an antiderivative, with no need to add up thin strips. This is a remarkable fact, and it makes calculus the working tool of science. Areas under curves are distances (from a velocity graph), total cost or total accumulated change (from a rate), probability (from a density function), and work done (from a force).

In the examination, definite integrals appear as the heart of many questions: the area of a region described by a curve and a line, the total distance travelled by a particle, the value of a constant that makes a probability equal to one, or the average value of a function. The commonest source of lost marks is the treatment of sign. Where a curve lies below the axis, the integral is negative, and a question asking for the *area* needs the positive quantity. So drawing a sketch before integrating, and identifying where the curve crosses the axis or another curve, is the habit that separates secure answers from unlucky ones. This chapter develops that habit.

## Core ideas

### The definite integral

If $F$ is any antiderivative of $f$, so that $F'(x)=f(x)$, then

$$\int_{a}^{b}f(x)\,dx=\Big[F(x)\Big]_{a}^{b}=F(b)-F(a).$$

The constant of integration cancels, so it is not needed. The result is a number, not a function. For example,

$$\int_{1}^{3}\left(3x^{2}-2x+1\right)dx=\Big[x^{3}-x^{2}+x\Big]_{1}^{3}=(27-9+3)-(1-1+1)=20.$$

The same method applies to every standard integral in SL 5.10. For example, $\int_{0}^{\pi}\sin x\,dx=\big[-\cos x\big]_{0}^{\pi}=1+1=2$ and $\int_{1}^{e}\frac1x\,dx=\big[\ln x\big]_{1}^{e}=1$.

### Properties

For continuous functions and constants $k$:

$$\int_{a}^{a}f\,dx=0,\qquad \int_{b}^{a}f\,dx=-\int_{a}^{b}f\,dx,$$

$$\int_{a}^{b}kf\,dx=k\int_{a}^{b}f\,dx,\qquad \int_{a}^{b}(f\pm g)\,dx=\int_{a}^{b}f\,dx\pm\int_{a}^{b}g\,dx,$$

$$\int_{a}^{b}f\,dx=\int_{a}^{c}f\,dx+\int_{c}^{b}f\,dx.$$

The last rule lets you split an interval at any point $c$, which is how you handle a graph that crosses the axis. If a function is given graphically, these properties let you combine the areas of known pieces.

### Signed area

The definite integral $\int_{a}^{b}f(x)\,dx$ measures the *signed* area between the graph and the $x$-axis: regions above the axis count as positive and regions below count as negative. Hence the integral can be zero even when there is substantial area. For $f(x)=x^{3}-4x$ on $[-2,2]$ the part on $[-2,0]$ lies above the axis with area $4$ and the part on $[0,2]$ lies below with area $4$, so the integral is $0$, but the enclosed area is $8$.

### Area between a curve and the $x$-axis

To find the **area** (always positive) between $y=f(x)$, the $x$-axis and the lines $x=a$ and $x=b$:

1. sketch the curve and find where $f(x)=0$ in $[a,b]$;
2. split the interval at those zeros;
3. integrate on each part and take the magnitude (absolute value) of each;
4. add the results.

In symbols the area is $\displaystyle\int_{a}^{b}|f(x)|\,dx$. If the curve does not cross the axis within the interval, a single integral suffices, with a negative sign if the curve is below.

### Area between two curves

If $f(x)\ge g(x)$ on $[a,b]$, the area between the curves is

$$A=\int_{a}^{b}\big(f(x)-g(x)\big)\,dx,$$

the upper curve minus the lower. This formula holds even where the curves lie below the axis, because the vertical distance between them is $f-g$ regardless of the axis. For a region enclosed by two curves, the limits are the $x$-coordinates of the intersection points, found by solving $f(x)=g(x)$. If the curves cross within the interval, split at the crossing, so that on each part the upper curve is subtracted from the lower. This is equivalent to $\int_{a}^{b}|f-g|\,dx$.

### Definite integration by substitution

When you substitute $u=g(x)$ in a definite integral you can either return to $x$ and use the original limits, or change the limits to $u$-values: $x=a$ becomes $u=g(a)$ and $x=b$ becomes $u=g(b)$. Changing limits is usually faster and avoids the return step. For example, $\int_{0}^{1}x\,e^{x^{2}}\,dx$ with $u=x^{2}$ has limits $u=0$ to $u=1$ and becomes $\tfrac12\int_{0}^{1}e^{u}\,du=\tfrac12(e-1)$. Never mix the two: if the limits are changed to $u$, the final integral is evaluated in $u$ with no return to $x$.

### Finding unknowns

Sometimes the integral is known and a limit or a constant is unknown, for example $\int_{0}^{k}(2x+1)\,dx=6$. Evaluate the integral to get an equation in $k$, then solve it, rejecting solutions that fail the given conditions (such as $k>0$).

### Area and the calculator

On a graphic display calculator, enter the function and use the definite integral or "area under curve" feature, and use the absolute value for unsigned area. When an exact answer is asked for, such as "find the exact area", the working must be algebraic. When a decimal is acceptable, the graph feature is usually the safest way, and you should still quote three significant figures. If the question refers to the area between two curves, find the intersection points on the calculator first and store them to avoid rounding errors.

## Worked examples

### Example 1 (a polynomial, 4 marks)

Evaluate $\displaystyle\int_{1}^{3}\left(3x^{2}-2x+1\right)dx$.

An antiderivative is $F(x)=x^{3}-x^{2}+x$. Then $F(3)=27-9+3=21$ and $F(1)=1-1+1=1$, so the integral is $21-1=20$.

### Example 2 (standard functions, 6 marks)

Evaluate (a) $\displaystyle\int_{0}^{1}e^{2x}\,dx$, (b) $\displaystyle\int_{1}^{e}\frac1x\,dx$, (c) $\displaystyle\int_{0}^{\pi/2}\cos x\,dx$ and (d) $\displaystyle\int_{0}^{\pi}\sin x\,dx$.

(a) $\left[\tfrac12e^{2x}\right]_{0}^{1}=\tfrac12\left(e^{2}-1\right)=3.19$. (b) $\big[\ln x\big]_{1}^{e}=1-0=1$. (c) $\big[\sin x\big]_{0}^{\pi/2}=1-0=1$. (d) $\big[-\cos x\big]_{0}^{\pi}=-(-1)-(-1)=2$. Parts (c) and (d) give the areas under one quarter-cycle and half a cycle of the standard curves, and these values are worth remembering.

### Example 3 (area under a curve, 4 marks)

Find the area of the region bounded by $y=x^{2}+1$, the $x$-axis and the lines $x=0$ and $x=3$.

The curve is always above the axis, so the area is $\displaystyle\int_{0}^{3}(x^{2}+1)\,dx=\left[\tfrac{x^{3}}{3}+x\right]_{0}^{3}=9+3=12$ square units.

### Example 4 (the curve crosses the axis, 7 marks)

For $f(x)=x^{3}-4x$, find (a) $\displaystyle\int_{-2}^{2}f(x)\,dx$ and (b) the total area between the curve and the $x$-axis for $-2\le x\le2$.

An antiderivative is $F(x)=\tfrac{x^{4}}{4}-2x^{2}$. The roots of $f$ are $x=0,\pm2$. For (a), $F(2)-F(-2)=(4-8)-(4-8)=0$, so the signed integral is zero. For (b), split at $x=0$. On $[-2,0]$, $\int f\,dx=F(0)-F(-2)=0-(-4)=4$, which is positive (the curve is above the axis). On $[0,2]$, $\int f\,dx=F(2)-F(0)=-4$, which is negative (the curve is below), so its area is $4$. The total area is $4+4=8$ square units. The answer to (a) is not the area, because the two pieces cancel.

### Example 5 (a region partly below the axis, 7 marks)

Find the area enclosed by $y=x^{2}-3x$, the $x$-axis, $x=0$ and $x=4$.

The roots are $x^{2}-3x=x(x-3)=0$, so $x=0$ and $x=3$. The curve is below the axis on $(0,3)$ and above on $(3,4)$. An antiderivative is $F(x)=\tfrac{x^{3}}{3}-\tfrac{3x^{2}}{2}$. On $[0,3]$, $F(3)-F(0)=9-\tfrac{27}{2}=-\tfrac92$, so the area is $\tfrac92$. On $[3,4]$, $F(4)-F(3)=\left(\tfrac{64}{3}-24\right)-\left(-\tfrac92\right)=-\tfrac83+\tfrac92=\tfrac{11}{6}$. The total area is $\tfrac92+\tfrac{11}{6}=\tfrac{27+11}{6}=\tfrac{19}{3}$ square units. The signed integral over $[0,4]$ is $-\tfrac83$, which is not the area.

### Example 6 (a region between a parabola and a line, 7 marks)

Find the area enclosed by $y=x^{2}$ and $y=x+2$.

Intersections: $x^{2}=x+2$ so $x^{2}-x-2=(x-2)(x+1)=0$, giving $x=-1$ and $x=2$. Between these points the line is above the parabola, so the area is $\displaystyle\int_{-1}^{2}\big(x+2-x^{2}\big)\,dx=\left[\tfrac{x^{2}}{2}+2x-\tfrac{x^{3}}{3}\right]_{-1}^{2}=\left(2+4-\tfrac83\right)-\left(\tfrac12-2+\tfrac13\right)=\tfrac{10}{3}+\tfrac76=\tfrac{27}{6}=\tfrac92$ square units.

### Example 7 (a second region, 7 marks)

Find the area enclosed by $y=6-x^{2}$ and $y=x$.

Setting $6-x^{2}=x$ gives $x^{2}+x-6=(x+3)(x-2)=0$, so $x=-3$ and $x=2$. For $-3<x<2$, test $x=0$: $6-0=6>0$, so the parabola is above the line. The area is $\displaystyle\int_{-3}^{2}\big(6-x-x^{2}\big)\,dx=\left[6x-\tfrac{x^{2}}{2}-\tfrac{x^{3}}{3}\right]_{-3}^{2}=\left(12-2-\tfrac83\right)-\left(-18-\tfrac92+9\right)=\tfrac{22}{3}+\tfrac{27}{2}=\tfrac{125}{6}$ square units, about $20.8$.

### Example 8 (curves crossing inside the interval, 8 marks)

Find the total area of the regions between $y=x$ and $y=x^{2}$ for $0\le x\le2$.

The curves meet where $x=x^{2}$, at $x=0$ and $x=1$. On $[0,1]$ the line is above the parabola, since $x\ge x^{2}$ when $0\le x\le1$, so the area is $\displaystyle\int_{0}^{1}(x-x^{2})\,dx=\tfrac12-\tfrac13=\tfrac16$. On $[1,2]$ the parabola is above the line, so the area is $\displaystyle\int_{1}^{2}(x^{2}-x)\,dx=\left(\tfrac83-2\right)-\left(\tfrac13-\tfrac12\right)=\tfrac23+\tfrac16=\tfrac56$. The total area is $\tfrac16+\tfrac56=1$ square unit. A single integral of $x-x^{2}$ over $[0,2]$ would give $2-\tfrac83=-\tfrac23$, which is wrong, because the signs cancel.

### Example 9 (finding a limit, 5 marks)

Given that $k>0$ and $\displaystyle\int_{0}^{k}(2x+1)\,dx=6$, find $k$.

$\displaystyle\int_{0}^{k}(2x+1)\,dx=\big[x^{2}+x\big]_{0}^{k}=k^{2}+k$. Setting this equal to $6$ gives $k^{2}+k-6=(k+3)(k-2)=0$, so $k=2$ or $k=-3$. Since $k>0$, $k=2$.

### Example 10 (substitution with new limits, 8 marks)

Evaluate (a) $\displaystyle\int_{0}^{1}x\,e^{x^{2}}\,dx$ using $u=x^{2}$ and (b) $\displaystyle\int_{0}^{3}x\sqrt{x+1}\,dx$ using $u=x+1$.

(a) With $u=x^{2}$, $du=2x\,dx$. When $x=0$, $u=0$, and when $x=1$, $u=1$. The integral is $\displaystyle\tfrac12\int_{0}^{1}e^{u}\,du=\tfrac12\big[e^{u}\big]_{0}^{1}=\tfrac12(e-1)=0.859$. (b) With $u=x+1$, $x=u-1$ and $dx=du$, and the limits become $u=1$ and $u=4$. The integral is $\displaystyle\int_{1}^{4}(u-1)u^{1/2}\,du=\left[\tfrac25u^{5/2}-\tfrac23u^{3/2}\right]_{1}^{4}=\left(\tfrac{64}{5}-\tfrac{16}{3}\right)-\left(\tfrac25-\tfrac23\right)=\tfrac{112}{15}+\tfrac{4}{15}=\tfrac{116}{15}$. The value $\tfrac{116}{15}=7.73$ can be checked on a calculator.

## Using your GDC

For the area between a curve and the axis, store the function and evaluate the definite integral of its absolute value, which handles sign changes automatically. For two curves, plot both, find the intersections with the intersection feature, store the $x$-values, and integrate the difference of the upper and lower curves between them. The calculator will report a number, so quote it to three significant figures, but if the question says "find the exact area", you must supply the algebraic working and answer, perhaps checking against the calculator. The graph also lets you decide which curve is on top, which avoids a sign mistake. Check that your mode is radians for trigonometric functions. Where the integrand has a discontinuity or the limits include one, a calculator may return a nonsense result, so look at the graph first.

## Common mistakes

- Taking the signed integral as the area when the curve crosses the axis, so that positive and negative parts cancel.
- Integrating the lower curve minus the upper curve, which gives a negative area, or failing to identify which is on top.
- Omitting to split the interval when the curves cross or the curve crosses the axis within the interval.
- Using a wrong limit: for an enclosed region the limits are the intersection points, not arbitrary values.
- Subtracting in the wrong order: the definite integral is $F(b)-F(a)$.
- Mixing $x$-limits with a $u$-integral after substitution, or forgetting to change the limits.
- Dropping a negative sign when evaluating $F(a)$ for negative $a$, as in $F(-2)$ for an odd power.
- Rounding intermediate values and giving an answer outside the accuracy asked for.

## Exam technique and command terms

**Evaluate** or **calculate** a definite integral means find the number. **Find the area** means a positive quantity, so sketch and split. **Find the exact area** requires an algebraic answer such as $\tfrac{19}{3}$ or $\tfrac12(e^{2}-1)$. **Show that the area is** a given value requires working that reaches this value without assuming it. **Hence** points to using an earlier integral. When the region is bounded by a curve and a line, a quick sketch earns method marks for the correct limits and for the order of subtraction. Write the integral with limits before evaluating it, because the examiner awards the method mark for the setup even when the arithmetic fails. If you use the calculator to evaluate the integral, write down the integral and the result.

## Connections

This chapter combines the antiderivatives of SL 5.5 and SL 5.10 with the Fundamental Theorem of Calculus. In SL 5.9 the signed integral of velocity is displacement and the integral of the speed is the distance travelled, so the same idea of sign and splitting appears. The trapezium estimate of SL 5.5 approximates the definite integral numerically. In AHL 5.16 the toolkit includes integration by parts, in AHL 5.17 we compute areas against the $y$-axis and volumes of revolution, and in Unit 4 the area under a probability density function between two limits gives the probability. In Unit 2, finding where two curves intersect is the first step in finding the area between them.

## Check your understanding

1. Evaluate $\displaystyle\int_{0}^{2}\left(3x^{2}+1\right)dx$.
2. Evaluate $\displaystyle\int_{0}^{1}e^{2x}\,dx$, giving three significant figures.
3. Find the area under $y=x^{2}+1$ from $x=0$ to $x=3$.
4. Find the area between $y=x^{3}-4x$ and the $x$-axis for $-2\le x\le2$.
5. Find the area between $y=x^{2}-3x$ and the $x$-axis for $0\le x\le4$.
6. Find the area enclosed by $y=x^{2}$ and $y=x+2$.
7. Find the area enclosed by $y=6-x^{2}$ and $y=x$.
8. Find the signed integral and the area of $y=x^{3}-x$ for $-1\le x\le1$.
9. Given $k>0$ and $\displaystyle\int_{0}^{k}(2x+1)\,dx=6$, find $k$.
10. Evaluate $\displaystyle\int_{0}^{1}\frac{2x}{x^{2}+1}\,dx$.

### Answers

1. $\big[x^{3}+x\big]_{0}^{2}=8+2=10$.
2. $\tfrac12\left(e^{2}-1\right)=3.19$.
3. $\left[\tfrac{x^{3}}{3}+x\right]_{0}^{3}=12$ square units.
4. The areas on $[-2,0]$ and $[0,2]$ are each $4$, so the total area is $8$ square units.
5. $\tfrac92+\tfrac{11}{6}=\tfrac{19}{3}$ square units.
6. $\tfrac92$ square units.
7. $\tfrac{125}{6}$ square units.
8. The antiderivative is $\tfrac{x^{4}}{4}-\tfrac{x^{2}}{2}$. The signed integral is $0$ (by symmetry, the two parts cancel). Each part has area $\tfrac14$, so the area is $\tfrac12$.
9. $k^{2}+k=6$ gives $k=2$ (rejecting $k=-3$).
10. $\big[\ln(x^{2}+1)\big]_{0}^{1}=\ln2-\ln1=\ln2\approx0.693$.

## Summary

- $\int_{a}^{b}f\,dx=F(b)-F(a)$; reversing the limits changes the sign, and an interval can be split at any point.
- The definite integral is a signed area. The area between a curve and the axis is $\int|f|\,dx$, found by splitting at the zeros.
- The area between two curves is $\int(\text{upper}-\text{lower})\,dx$, with limits at the intersections, split wherever the curves cross.
- In a definite substitution, change the limits to $u$-values and do not return to $x$.
- Sketch first, write the integral with limits, and use the calculator to check or to evaluate when decimals are allowed.
