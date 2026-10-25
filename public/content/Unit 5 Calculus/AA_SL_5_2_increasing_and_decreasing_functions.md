# Increasing and decreasing functions

> **SL 5.2 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define increasing and decreasing functions on an interval, and connect them to the sign of $f'(x)$;
- find the intervals on which a function is increasing or decreasing by solving $f'(x)=0$ and testing the sign of the derivative;
- find stationary points and classify them as local maxima or local minima using the change in sign of $f'$;
- distinguish a stationary point that is a turning point from one that is not;
- read the behaviour of $f$ from the graph of $f'$, and sketch $f$ from a sketch of $f'$;
- show that a function is increasing for all $x$, or find the values of a parameter for which it is;
- apply the ideas to context problems such as profit and population, and handle functions with restricted domains or asymptotes.

## Why this topic matters

Whenever a quantity depends on another, we want to know where it grows, where it falls, and where it turns. A company wants to know the production level that maximises profit. An engineer wants the angle at which a projectile travels farthest. A biologist wants to know when a population stops growing. The derivative answers these questions, because its sign tells you the direction of change. Where the derivative is positive the function rises, where it is negative the function falls, and where it passes through zero the function may switch from rising to falling or the other way. Finding such points is the heart of optimisation, which you will treat in full in SL 5.8.

In the examination, this topic is part of almost every calculus question. A standard problem gives a function, asks for the derivative, asks you to solve $f'(x)=0$, and then asks for the intervals of increase and decrease, often in a single multi-part question, with a final part that asks for a sketch or a justification. Much of the mark scheme is accessible with a routine: differentiate, factorise, find critical values, test signs, state the conclusion with the correct inequalities. Where candidates lose marks is in the *justification*. It is not enough to quote the values of $x$ at which $f'(x)=0$, since you must say what happens on each side of them. A sign table or a short sentence, such as "$f'(x)>0$ for $x<1$ so $f$ is increasing", is what earns the mark.

## Core ideas

### Definitions

A function $f$ is **increasing** on an interval if, for any two numbers $x_1<x_2$ in that interval, $f(x_1)<f(x_2)$. It is **decreasing** on the interval if $f(x_1)>f(x_2)$ for all such pairs. In words, the graph rises as you move to the right on an increasing function, and falls on a decreasing one. A function is often increasing on some intervals and decreasing on others, so we speak of intervals.

### The sign of the derivative

The derivative gives the gradient of the tangent, so
$$
f'(x)>0\ \text{on an interval}\ \Longrightarrow\ f\ \text{is increasing there},\qquad f'(x)<0\ \text{on an interval}\ \Longrightarrow\ f\ \text{is decreasing there}.
$$
If $f'(x)\ge0$ throughout an interval, with $f'(x)=0$ only at isolated points, the function is still increasing on the interval. For example $f(x)=x^{3}$ has $f'(x)=3x^{2}\ge0$, equal to zero only at $x=0$, and it is increasing for all $x$.

### Stationary points

A **stationary point** (or critical point) of $f$ is a point where $f'(x)=0$, so the tangent is horizontal. Stationary points are the only places where a smooth function can change from increasing to decreasing. To find them, differentiate, set $f'(x)=0$, solve for $x$, and substitute back into $f$ to find the $y$-coordinate. Write the point as a pair of coordinates.

### Local maxima, minima and the first-derivative test

A **local maximum** is a point at which $f$ is higher than at nearby points, and a **local minimum** is one at which it is lower than at nearby points. At a smooth turning point, $f'=0$ and the sign of $f'$ changes:

- from positive to negative as $x$ increases: **local maximum**;
- from negative to positive: **local minimum**;
- no change of sign: **not a turning point**, which is a stationary point of inflection (a flat spot, as in $y=x^{3}$ at $x=0$).

A typical table has the critical values in order, a row for the sign of $f'$ on each interval, and a conclusion. It is enough to test one value of $x$ in each interval, because $f'$ can change sign only at a stationary point or where it is undefined, and in this course it is continuous on each interval you will meet. Note that "local" is meant: a local maximum need not be the highest value of the function overall, and the next chapters distinguish the global maximum, which is the highest value on the whole domain or on a stated interval.

### From $f'$ to $f$ and back

Given a graph of $f'$, you can describe $f$: $f$ is increasing where the graph of $f'$ lies above the $x$-axis, decreasing where it lies below, and has a local maximum where $f'$ crosses from above the axis to below it, and a local minimum where it crosses from below to above. A point where the graph of $f'$ touches the axis and turns back without crossing is a stationary point that is not a turning point. The heights of $f'$ show the gradients of $f$, not its values, so $f$ can be shifted vertically without changing $f'$. Conversely, from the graph of $f$ you can sketch $f'$: zeros at the turning points, positive where $f$ rises, negative where it falls.

### Increasing for all $x$

To show that $f$ is increasing for all real $x$, show that $f'(x)\ge0$ everywhere and that it is zero at most at isolated points. For a quadratic $f'(x)=ax^{2}+bx+c$ with $a>0$, this holds when the discriminant satisfies $b^{2}-4ac\le0$, since then the parabola never goes below the axis. This is a useful way of finding the range of a parameter. Sometimes the derivative is a perfect square or a sum of squares plus a positive number, in which case the conclusion is immediate.

### Domains and asymptotes

If the function is not defined for all $x$, such as $f(x)=x+\tfrac4x$ with $x\neq0$, the intervals of increase and decrease must be stated separately on each piece of the domain. At a vertical asymptote the sign of the derivative may be the same on both sides, yet you cannot say the function is "decreasing on an interval containing the asymptote", because it is not defined there. Write the intervals so that they exclude $x=0$.

## Worked examples

### Example 1 (a cubic, 7 marks)

For $f(x)=x^{3}-6x^{2}+9x+2$, find the intervals on which $f$ is increasing and decreasing, and find the stationary points.

The derivative is $f'(x)=3x^{2}-12x+9=3(x^{2}-4x+3)=3(x-1)(x-3)$. Setting $f'(x)=0$ gives $x=1$ and $x=3$. The values are $f(1)=1-6+9+2=6$ and $f(3)=27-54+27+2=2$, so the stationary points are $(1,6)$ and $(3,2)$. To test signs, take $x=0$, where $f'(0)=9>0$, then $x=2$, where $f'(2)=3(1)(-1)=-3<0$, then $x=4$, where $f'(4)=3(3)(1)=9>0$. So $f$ is increasing for $x<1$ and for $x>3$, and decreasing for $1<x<3$. The sign of $f'$ changes from positive to negative at $x=1$, so $(1,6)$ is a local maximum, and from negative to positive at $x=3$, so $(3,2)$ is a local minimum. The marks are for the derivative, the roots, the coordinates, the sign test and the conclusions.

### Example 2 (a stationary point that is not a turning point, 6 marks)

For $f(x)=x^{4}-4x^{3}$, find where $f$ is increasing and decreasing, and identify any turning points.

We have $f'(x)=4x^{3}-12x^{2}=4x^{2}(x-3)$. Setting this to zero gives $x=0$ and $x=3$. Because $x^{2}\ge0$ the sign of $f'$ depends only on $(x-3)$ (except at $x=0$). For $x<3$ with $x\neq0$ we have $f'<0$, and for $x>3$ we have $f'>0$. So $f$ is decreasing for $x<3$ and increasing for $x>3$. At $x=0$ the derivative is zero but does not change sign, so $(0,0)$ is a stationary point that is not a turning point (a point of inflection with a horizontal tangent). At $x=3$, the sign changes from negative to positive, so there is a local minimum at $(3,-27)$, since $f(3)=81-108=-27$. This example shows why you must test signs, because not every root of $f'$ is a turning point.

### Example 3 (increasing for all $x$, 6 marks)

Find the values of $k$ for which $f(x)=x^{3}+kx^{2}+3x$ is increasing for all real $x$.

The derivative is $f'(x)=3x^{2}+2kx+3$. The function is increasing for all $x$ if $f'(x)\ge0$ for all $x$. Since the coefficient of $x^{2}$ is positive, this occurs when the discriminant is non-positive: $(2k)^{2}-4(3)(3)\le0$, so $4k^{2}-36\le0$ and $k^{2}\le9$. Therefore $-3\le k\le3$. At the end points $k=\pm3$, the derivative is $3(x\pm1)^{2}$, which touches zero at one point but never becomes negative, so the function is still increasing. The inclusion of the end points is the detail that the marks depend upon.

### Example 4 (a rational function, 6 marks)

For $f(x)=x+\dfrac4x$, $x\neq0$, find the intervals of increase and decrease and the turning points.

We write $f(x)=x+4x^{-1}$, so $f'(x)=1-4x^{-2}=1-\dfrac{4}{x^{2}}=\dfrac{x^{2}-4}{x^{2}}=\dfrac{(x-2)(x+2)}{x^{2}}$. The derivative is zero at $x=\pm2$, and the denominator is always positive. Then $f'>0$ for $x<-2$ and $x>2$, and $f'<0$ for $-2<x<0$ and $0<x<2$. So $f$ is increasing on $x<-2$ and $x>2$, and decreasing on $-2<x<0$ and $0<x<2$. The function values are $f(-2)=-4$ and $f(2)=4$, so $(-2,-4)$ is a local maximum and $(2,4)$ is a local minimum. Note that the local maximum value $-4$ is *lower* than the local minimum value $4$, which is possible because the function is split by the asymptote at $x=0$.

### Example 5 (a profit function, 5 marks)

The profit in euros from selling $x$ hundred items is $P(x)=-2x^{2}+40x-100$. Find the values of $x$ for which profit is increasing, and the maximum profit.

The derivative is $P'(x)=-4x+40=-4(x-10)$. This is positive for $x<10$ and negative for $x>10$. So the profit increases while fewer than $10$ hundred items are sold and decreases after that. The profit is a maximum at $x=10$, and $P(10)=-200+400-100=100$. The maximum profit is $100$ euros, achieved at $1000$ items. Beyond that point selling more reduces profit, perhaps because of discounting or extra costs, and the model tells the firm where to stop.

### Example 6 (reading $f'$ from a graph, 4 marks)

The graph of $f'$ crosses the $x$-axis at $x=-1$, going from above to below, and at $x=4$, going from below to above. Describe $f$.

For $x<-1$, $f'>0$ so $f$ is increasing. For $-1<x<4$, $f'<0$ so $f$ is decreasing. For $x>4$, $f'>0$ so $f$ is increasing again. At $x=-1$ the sign of $f'$ changes from positive to negative, giving a local maximum, and at $x=4$ it changes from negative to positive, giving a local minimum. The graph of $f$ looks like a cubic with a hump at $x=-1$ and a dip at $x=4$. We cannot find the heights of these points without further information.

### Example 7 (showing a function is always increasing, 3 marks)

Show that $f(x)=x^{3}+x$ is increasing for all real $x$.

The derivative is $f'(x)=3x^{2}+1$. Since $x^{2}\ge0$ for all real $x$, we have $f'(x)\ge1>0$. So $f'(x)>0$ for all $x$, and the function is increasing everywhere. The graph has no turning points. Writing the inequality and the conclusion in words is needed for the mark.

### Example 8 (zero derivative without a turning point, 3 marks)

A student says that $f(x)=x^{3}$ has a turning point at $x=0$ because $f'(0)=0$. Comment.

The derivative is $f'(x)=3x^{2}$, which is zero at $x=0$ but positive on both sides. Since the sign of $f'$ does not change, the function keeps increasing and there is no turning point. The point $(0,0)$ is a stationary point of inflection. A zero derivative is necessary for a smooth turning point, but it is not sufficient.

## Using your GDC

A graphing calculator will help you confirm the intervals you find. Plot $f$ and use the maximum and minimum functions to read the coordinates of turning points, and plot $f'$ (or use the numerical derivative to build a table) to check the signs. To solve $f'(x)=0$ when the equation is not easy to factorise, use the equation solver or find where the graph of $f'$ crosses the axis. To check a sign table, evaluate $f'$ at a test value in each interval using the table of values feature. For parameters, as in Example 3, a graph of the discriminant as a function of $k$ gives the interval where it is non-positive. In an examination you are normally asked to show the sign change, and a correct calculator value without a justification will lose the final mark, so write the sign of $f'$ on each interval, with the test value if it helps. Quote coordinates to three significant figures when they are not exact.

## Common mistakes

- Finding the roots of $f'$ but not stating the intervals of increase and decrease, or stating them without a sign test.
- Using $f(x)$ instead of $f'(x)$ in the sign table.
- Assuming that every root of $f'$ is a turning point. Check that the sign changes.
- Getting the inequalities in the wrong direction after factorising, especially with a negative leading coefficient.
- Giving the interval of increase for a function with a break in the domain as a single interval that includes the break.
- Writing the stationary point as only an $x$-value. Give both coordinates.
- Confusing a local maximum with the global maximum.
- Leaving out the end points when the question says "increasing for all $x$", where equality in the discriminant is allowed.

## Exam technique and command terms

**Find the intervals** requires the derivative, its roots, a sign test and a conclusion in terms of inequalities for $x$. **Justify** or **show that** needs explicit reasoning with a derivative, such as "$f'(x)=3x^{2}+1>0$ for all $x$, so $f$ is increasing". **Determine the nature** of a stationary point means classify it using the sign change of $f'$ (or the second derivative from SL 5.7). **Sketch** requires the turning points with coordinates, intercepts if they are easy to find, and the correct behaviour at the ends. **Hence** means use your earlier derivative in the next part. When a graph of $f'$ is provided, refer to where it is above or below the axis, and at which $x$-values it crosses and in what direction. Use the mark allocation as a guide: a six-mark part normally expects the derivative, the roots, the sign analysis for both intervals and a conclusion about the type of each stationary point.

## Connections

This chapter builds directly on SL 5.1, where the derivative was interpreted as a gradient and a rate of change, and on the factorisation and quadratic inequalities from the algebra unit, which you need in order to solve $f'(x)\ge0$. It is the foundation of the optimisation of SL 5.8, where the first derivative locates the candidates for maxima and minima and the second derivative from SL 5.7 confirms them. In SL 5.9, the sign of the velocity (the derivative of displacement) tells you the direction of motion, and the points at which velocity is zero are the moments at which the object turns round. In the statistics unit, the mode of a continuous distribution is found as a maximum of the density (AHL 4.14), which uses this chapter's methods. The sign analysis for rational functions links back to the sketching of graphs in the functions unit.

## Check your understanding

1. For $f(x)=x^{3}-12x+5$, find the intervals of increase and decrease and the stationary points.
2. For $f(x)=2x^{3}-9x^{2}+12x$, find the intervals on which $f$ is increasing.
3. For $f(x)=x^{4}-8x^{2}$, find the stationary points and state their nature.
4. Show that $f(x)=x^{3}+3x^{2}+3x$ is increasing for all $x$.
5. Find the values of $k$ for which $f(x)=x^{3}+kx^{2}+12x$ is increasing for all real $x$.
6. The derivative of $f$ is $f'(x)=(x+2)(x-1)^{2}$. Find where $f$ is increasing and decreasing, and say whether there is a turning point at $x=1$.
7. The profit function is $P(x)=-2x^{2}+40x-100$. For which values of $x$ does the profit increase?
8. For $f(x)=x+\dfrac4x$, state the intervals on which $f$ is decreasing.
9. Is it true that if $f'(a)=0$ then $f$ has a turning point at $x=a$? Give an example.
10. For $f(x)=\tfrac13x^{3}-2x^{2}+3x$, find the intervals of increase and decrease, and the coordinates of the local maximum and minimum.

### Answers

1. $f'(x)=3x^{2}-12=3(x-2)(x+2)$. So $f$ is increasing for $x<-2$ and $x>2$ and decreasing for $-2<x<2$. The stationary points are $(-2,21)$, a local maximum, and $(2,-11)$, a local minimum.
2. $f'(x)=6x^{2}-18x+12=6(x-1)(x-2)$. It is positive for $x<1$ and for $x>2$, so $f$ is increasing for $x<1$ and $x>2$ (and decreasing for $1<x<2$).
3. $f'(x)=4x^{3}-16x=4x(x-2)(x+2)$. The stationary points are $(-2,-16)$ and $(2,-16)$, both local minima, and $(0,0)$, a local maximum. The sign of $f'$ is negative for $x<-2$, positive for $-2<x<0$, negative for $0<x<2$ and positive for $x>2$.
4. $f'(x)=3x^{2}+6x+3=3(x+1)^{2}\ge0$ for all $x$, and it is zero only at $x=-1$. So $f$ is increasing for all $x$. The stationary point $(-1,-1)$ is not a turning point.
5. $f'(x)=3x^{2}+2kx+12\ge0$ for all $x$ if $4k^{2}-144\le0$, so $k^{2}\le36$ and $-6\le k\le6$.
6. The factor $(x-1)^{2}\ge0$ so the sign of $f'$ is that of $(x+2)$. So $f'<0$ for $x<-2$ and $f'>0$ for $x>-2$ (except $x=1$ where it is $0$). The function is decreasing for $x<-2$ and increasing for $x>-2$. There is a local minimum at $x=-2$, and $x=1$ is a stationary point but not a turning point.
7. $P'(x)=-4x+40>0$ when $x<10$, so profit increases for $x<10$ (and is greatest at $x=10$).
8. $f'(x)=1-\dfrac{4}{x^{2}}<0$ when $x^{2}<4$, so $f$ is decreasing for $-2<x<0$ and for $0<x<2$.
9. No. For $f(x)=x^{3}$, $f'(0)=0$ but the derivative is positive on both sides, so there is no turning point at $x=0$.
10. $f'(x)=x^{2}-4x+3=(x-1)(x-3)$. Increasing for $x<1$ and $x>3$, decreasing for $1<x<3$. Local maximum at $\left(1,\tfrac43\right)$ and local minimum at $(3,0)$.

## Summary

- $f'>0$ on an interval means $f$ is increasing there, and $f'<0$ means decreasing.
- Stationary points satisfy $f'(x)=0$. Give both coordinates.
- A change of sign of $f'$ from $+$ to $-$ gives a local maximum, from $-$ to $+$ a local minimum, and no change means no turning point.
- To find intervals: differentiate, factorise, solve $f'=0$, test a value in each interval, and state the conclusion with inequalities.
- For a quadratic derivative with positive leading coefficient, $f$ is increasing for all $x$ when the discriminant is $\le0$.
- Functions with breaks in the domain have separate intervals, and a zero of $f'$ does not guarantee a turning point.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.2. Related facts may appear elsewhere. Justify any method used here.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
