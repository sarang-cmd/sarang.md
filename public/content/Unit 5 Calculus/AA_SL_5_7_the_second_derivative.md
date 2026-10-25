# The second derivative

> **SL 5.7 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- find the second derivative $f''(x)$ or $\dfrac{d^{2}y}{dx^{2}}$, and interpret it as the rate of change of the gradient;
- describe a graph as concave up or concave down using the sign of $f''$;
- use the second derivative test to classify stationary points as local maxima or minima, and recognise when the test is inconclusive;
- identify where the concavity changes, and find the coordinates of points of inflection;
- relate the graphs of $f$, $f'$ and $f''$ to each other, in both directions;
- apply the second derivative to a context, interpreting it as the rate at which a rate is changing;
- decide when to use the second derivative test and when the first derivative test is safer.

## Why this topic matters

The first derivative tells you whether a quantity is increasing or decreasing. The second derivative tells you whether the increase is speeding up or slowing down. A company whose sales are rising at a falling rate is in a very different position from one whose sales are rising at an increasing rate, even though both have a positive first derivative. In physics, the second derivative of position with respect to time is acceleration, which is the quantity connected to force by Newton's second law. In economics it measures diminishing returns. In the shape of a graph, the second derivative describes curvature: whether the curve bends upwards like a bowl or downwards like a dome.

For the examination the second derivative has two major uses. The first is a quick test to decide whether a stationary point is a maximum or a minimum, which is usually faster than a table of signs. The second is the identification of points of inflection, where the curve changes from bending one way to bending the other. These skills are essential for optimisation problems in SL 5.8 and for the sketching of graphs, and the relationships among $f$, $f'$ and $f''$ appear in graph-reading questions that give a diagram of one of the three and ask about the others. The technique is not hard, but it needs attention to the logic, in particular the case in which $f''(a)=0$, where the test gives no information.

## Core ideas

### The second derivative

The derivative of $f$ is $f'$, a new function. Differentiating again gives the **second derivative**,
$$
f''(x)=\frac{d}{dx}\big(f'(x)\big),\qquad\text{also written}\qquad \frac{d^{2}y}{dx^{2}}.
$$
Notice the position of the squares in $\tfrac{d^{2}y}{dx^{2}}$: it is not a square of anything, but a notation indicating two differentiations. The second derivative is the **rate of change of the gradient**. If $f''(x)>0$, the gradient is increasing as $x$ increases; if $f''(x)<0$, the gradient is decreasing. Higher derivatives, $f'''$ and so on, are defined in the same way and are used in AHL 5.12 and in Maclaurin series.

### Concavity

A graph is **concave up** (also called convex, or "holds water") on an interval if its gradient is increasing, so the curve bends upwards and lies above its tangents, and this occurs where $f''(x)>0$. A graph is **concave down** where its gradient is decreasing, so the curve bends downwards and lies below its tangents, which occurs where $f''(x)<0$. For example, $y=x^{2}$ has $f''(x)=2>0$ for all $x$, so it is concave up everywhere, and $y=-x^{2}$ is concave down everywhere. The words "concave up" and "concave down" are clearer than "concave" or "convex" on their own, and you should use them in answers.

### The second derivative test

Suppose $f'(a)=0$, so there is a stationary point at $x=a$. Then:

- if $f''(a)>0$, the gradient is increasing through zero, going from negative to positive, so $x=a$ is a **local minimum**;
- if $f''(a)<0$, the gradient is decreasing through zero, so $x=a$ is a **local maximum**;
- if $f''(a)=0$, the test is **inconclusive**: the point may be a maximum, a minimum or a stationary point of inflection.

In the third case, use the first derivative test of SL 5.2 and look at the sign of $f'$ on each side. Three standard examples all have $f'(0)=0$ and $f''(0)=0$: $y=x^{4}$ has a minimum at $0$, $y=-x^{4}$ has a maximum, and $y=x^{3}$ has a point of inflection. The second derivative test is quick when $f''$ is easy to evaluate, but it requires an extra differentiation, so the sign table may be quicker when $f''$ is complicated.

### Points of inflection

A **point of inflection** is a point on the graph where the concavity changes, from concave up to concave down or the reverse. At such a point $f''(x)=0$ (assuming $f''$ is continuous), but $f''(x)=0$ alone is not enough: the sign of $f''$ must actually change. For example, $y=x^{4}$ has $f''(0)=0$, but $f''(x)=12x^{2}\ge0$ on both sides, so there is no change of concavity and no inflection. To find inflections, solve $f''(x)=0$ and check the sign of $f''$ either side. The coordinates of the point require the $y$-value as well. The tangent at an inflection crosses the curve. A **stationary point of inflection** also has $f'(x)=0$, as in $y=x^{3}$ at the origin, while a non-stationary inflection has a non-zero gradient. SL 5.8 treats this fully, but the identification is part of the second derivative's role.

### The graphs of $f$, $f'$ and $f''$

The three graphs are linked:

- the zeros of $f'$ correspond to the turning points (and horizontal tangents) of $f$;
- where $f'>0$, $f$ increases, and where $f'<0$, $f$ decreases;
- where $f'$ is increasing, $f''>0$ and $f$ is concave up; where $f'$ is decreasing, $f''<0$ and $f$ is concave down;
- the maximum and minimum points of $f'$ correspond to zeros of $f''$ and to points of inflection of $f$.

A graph question might show $f'$ and ask for the $x$-coordinate of the point of inflection of $f$: it is the $x$-value at which $f'$ has a maximum or a minimum, since there $f''$ changes sign. Learning to translate between the three graphs is a skill that deserves practice with sketches.

### The second derivative in context

If $s(t)$ is displacement, then $s'(t)$ is velocity and $s''(t)$ is acceleration, with units of metres per second per second. If $P(t)$ is a population, $P'(t)$ is the growth rate and $P''(t)$ shows whether growth is accelerating. In the logistic growth of a population, the point of inflection corresponds to the moment of fastest growth.

## Worked examples

### Example 1 (finding second derivatives, 4 marks)

Find $f'(x)$ and $f''(x)$ for $f(x)=x^{4}-4x^{3}$, and describe the concavity.

The first derivative is $f'(x)=4x^{3}-12x^{2}$ and the second is $f''(x)=12x^{2}-24x=12x(x-2)$. This is positive when $x<0$ or $x>2$, and negative when $0<x<2$. So the graph is concave up for $x<0$ and for $x>2$, and concave down for $0<x<2$. The concavity changes at $x=0$ and at $x=2$, so these are points of inflection, at $(0,0)$ and $(2,-16)$, since $f(2)=16-32=-16$.

### Example 2 (second derivative test, 7 marks)

Find the stationary points of $f(x)=x^{3}-6x^{2}+9x+2$ and use $f''$ to classify them. Find the point of inflection.

We have $f'(x)=3x^{2}-12x+9=3(x-1)(x-3)$, so the stationary points are at $x=1$ and $x=3$, with $f(1)=6$ and $f(3)=2$. The second derivative is $f''(x)=6x-12$. At $x=1$, $f''(1)=-6<0$, so $(1,6)$ is a local maximum. At $x=3$, $f''(3)=6>0$, so $(3,2)$ is a local minimum. For the inflection, $f''(x)=0$ gives $x=2$, and $f''$ changes from negative to positive there, so $(2,4)$ is a point of inflection, since $f(2)=8-24+18+2=4$. The inflection lies midway between the turning points, which is typical of a cubic.

### Example 3 (a product, 7 marks)

For $f(x)=xe^{-x}$ find $f'$ and $f''$, and classify the stationary point. Find the point of inflection.

By the product rule, $f'(x)=e^{-x}-xe^{-x}=(1-x)e^{-x}$. Differentiating again, $f''(x)=-e^{-x}-(1-x)e^{-x}=(x-2)e^{-x}$. The stationary point is at $x=1$, where $f(1)=e^{-1}$ and $f''(1)=-e^{-1}<0$, so it is a local maximum. For the inflection, $f''(x)=0$ at $x=2$, with $f''<0$ for $x<2$ and $f''>0$ for $x>2$, so the concavity changes and $\left(2,2e^{-2}\right)=(2,0.271)$ is a point of inflection. The curve rises to its peak at $x=1$, then falls with decreasing steepness after $x=2$ as it approaches the axis.

### Example 4 (a rational function, 5 marks)

For $f(x)=x+\dfrac4x$, show that $f''(x)=\dfrac{8}{x^{3}}$ and use it to classify the stationary points.

Write $f(x)=x+4x^{-1}$. Then $f'(x)=1-4x^{-2}$ and $f''(x)=8x^{-3}=\dfrac{8}{x^{3}}$. The stationary points are at $x=\pm2$ (from $f'(x)=0$). At $x=2$, $f''(2)=1>0$, so $(2,4)$ is a local minimum. At $x=-2$, $f''(-2)=-1<0$, so $(-2,-4)$ is a local maximum. The second derivative has no zeros, so there is no point of inflection, and the sign of $f''$ equals the sign of $x$, so the curve is concave down for $x<0$ and concave up for $x>0$.

### Example 5 (inconclusive test, 6 marks)

For $f(x)=x^{4}-4x^{3}$, find and classify the stationary points.

From $f'(x)=4x^{2}(x-3)$ the stationary points are at $x=0$ and $x=3$. We have $f''(x)=12x^{2}-24x$. At $x=3$, $f''(3)=108-72=36>0$, so $(3,-27)$ is a local minimum. At $x=0$, $f''(0)=0$, so the test is inconclusive. Use the first derivative: $f'(x)<0$ on both sides of $0$ (for $x<3$ with $x\neq0$), so the gradient does not change sign, and $(0,0)$ is a stationary point of inflection, neither maximum nor minimum. Because $f''(0)=0$ and the concavity changes at $x=0$, this agrees with the inflection found in Example 1.

### Example 6 (three standard cases, 5 marks)

Show that $y=x^{3}$, $y=x^{4}$ and $y=-x^{4}$ all have $f'(0)=f''(0)=0$, and classify the point at $x=0$ in each case.

For $y=x^{3}$: $y'=3x^{2}$ and $y''=6x$, both zero at $0$. The gradient $3x^{2}$ is positive on both sides, so the point is a stationary point of inflection. For $y=x^{4}$: $y'=4x^{3}$ and $y''=12x^{2}$, both zero at $0$. The gradient is negative for $x<0$ and positive for $x>0$, so there is a local minimum. For $y=-x^{4}$: the signs are reversed, so there is a local maximum. These examples show that $f''(a)=0$ allows all three outcomes, so one must look further.

### Example 7 (oscillating function, 5 marks)

For $y=\sin2x$, find $\dfrac{d^{2}y}{dx^{2}}$ and use it to classify the stationary point at $x=\dfrac\pi4$.

By the chain rule, $\dfrac{dy}{dx}=2\cos2x$ and $\dfrac{d^{2}y}{dx^{2}}=-4\sin2x$. At $x=\dfrac\pi4$, $\dfrac{dy}{dx}=2\cos\dfrac\pi2=0$ so it is stationary, and $\dfrac{d^{2}y}{dx^{2}}=-4\sin\dfrac\pi2=-4<0$. So $\left(\dfrac\pi4,1\right)$ is a local maximum. Notice that $y''=-4y$, which is the equation of simple harmonic motion: the second derivative is proportional to the negative of the function.

### Example 8 (reading graphs, 4 marks)

The graph of $f'$ has a local minimum at $x=2$ and crosses the $x$-axis at $x=1$ and $x=3$, going from positive to negative at $1$ and from negative to positive at $3$. Describe $f$.

Where $f'$ crosses the axis, $f$ has turning points: a local maximum at $x=1$ (sign change $+\to-$) and a local minimum at $x=3$ ($-\to+$). The minimum of $f'$ at $x=2$ is where the gradient of $f$ is least, so $f''(2)=0$ with a change of sign, and $f$ has a point of inflection at $x=2$, where the concavity changes from down to up. This matches the cubic of Example 2.

### Example 9 (more than one inflection, 6 marks)

Find the points of inflection of $f(x)=x^{2}e^{-x}$.

We have $f'(x)=(2x-x^{2})e^{-x}$ and $f''(x)=(2-2x)e^{-x}-(2x-x^{2})e^{-x}=(x^{2}-4x+2)e^{-x}$. Since $e^{-x}>0$, the zeros come from $x^{2}-4x+2=0$, which gives $x=2\pm\sqrt2$, approximately $0.586$ and $3.41$. The quadratic is positive for $x<2-\sqrt2$, negative between the roots and positive after, so the sign of $f''$ changes at both, and both are points of inflection. The $y$-values are $f(0.586)=0.191$ and $f(3.41)=0.384$, so the points of inflection are approximately $(0.586,\,0.191)$ and $(3.41,\,0.384)$, as you can confirm with a calculator.

## Using your GDC

Graph $f$ and use the numerical derivative to build tables for $f'$ and $f''$, or graph the expressions that you have found. The zero tool applied to $f'$ gives the stationary points and, when applied to $f''$, the candidates for inflection. To confirm a change of concavity, evaluate $f''$ at a point on each side of the candidate and compare the signs. Some calculators will display the second derivative at a point numerically, but the accuracy is lower than for the first derivative, so use it for sign checks, not for exact values. When you sketch a curve from a table, remember that the shape between points depends on the sign of $f''$: a curve bending up looks like a bowl. In examinations the exact coordinates of turning points and inflections are often requested to three significant figures, and the calculator's maximum, minimum and inflection features help to check the values obtained algebraically.

## Common mistakes

- Reading $\dfrac{d^{2}y}{dx^{2}}$ as $\left(\dfrac{dy}{dx}\right)^{2}$. It is the derivative of the derivative.
- Mixing up the sign rule: $f''>0$ is a minimum (concave up), $f''<0$ a maximum.
- Concluding that $f''(a)=0$ implies a point of inflection. The sign of $f''$ must change.
- Concluding from $f''(a)=0$ that there is no turning point, when $x^{4}$ has a minimum.
- Forgetting that the second derivative test needs $f'(a)=0$ first.
- Giving only the $x$-coordinate of an inflection or turning point.
- Using the second derivative test where $f''$ is difficult, and making an algebraic slip, when the sign table would be faster.
- Describing concavity with the sign of $f'$ instead of $f''$.

## Exam technique and command terms

**Find** $f''(x)$ requires two correct differentiations, and the intermediate $f'(x)$ should be shown, since it often earns a mark itself. **Determine the nature** of a stationary point accepts either the sign of $f''$ or a first-derivative sign change, but you must state which and show the values. **Justify** means that the sign of $f''$ should be written out and linked to the conclusion, for example "$f''(1)=-6<0$, so a local maximum". **Show that** a point is a point of inflection requires that $f''=0$ and that the sign of $f''$ changes. If the second derivative test fails, say so and use the first derivative test. **Sketch** the graph requires the stationary points, inflections, intercepts if easy, and the end behaviour. In graph-reading questions, use language such as "$f'$ is increasing, so $f''>0$ and $f$ is concave up". Give coordinates as exact values when possible, and as three-significant-figure decimals otherwise.

## Connections

This chapter extends the first-derivative analysis of SL 5.2, and it is used immediately in the optimisation and inflection work of SL 5.8, where the second derivative confirms whether a candidate is a maximum or minimum. In kinematics (SL 5.9) it is the acceleration, and in AHL 5.12 you will meet higher derivatives and the general notation $f^{(n)}$. In AHL 5.19 the Maclaurin series uses the second derivative as the coefficient of the quadratic term, which is why the quadratic approximation captures the curvature of a function at a point. In the statistics unit, the inflection points of the normal density curve are at $\mu\pm\sigma$, which is the geometric meaning of the standard deviation noted in SL 4.9. The product and chain rules of SL 5.6 are needed whenever the function is not a polynomial.

## Check your understanding

1. Find the stationary points of $f(x)=x^{3}-3x^{2}$ and classify them using $f''$.
2. Find the stationary points of $y=x^{4}-8x^{2}$ and classify them using the second derivative.
3. Find the coordinates of the point of inflection of $y=x^{3}-3x^{2}$.
4. Show that $y=\ln x$ is concave down for all $x>0$.
5. Show that $y=e^{x}$ is concave up for all $x$.
6. The function $y=x^{4}$ has $f'(0)=0$ and $f''(0)=0$. Classify the point $x=0$.
7. State where $y=\sin x$ is concave down and concave up on $0<x<2\pi$.
8. Find $\dfrac{d^{2}y}{dx^{2}}$ for $y=3x^{4}-2x^{3}+x$.
9. Find the $x$-coordinates of the points of inflection of $f(x)=x^{2}e^{-x}$.
10. Use the second derivative to show that $f(x)=x+\dfrac1x$ has a local minimum at $x=1$, and state its coordinates.

### Answers

1. $f'(x)=3x^{2}-6x=3x(x-2)$, so $x=0$ or $x=2$. $f''(x)=6x-6$. At $x=0$, $f''=-6<0$, a local maximum at $(0,0)$. At $x=2$, $f''=6>0$, a local minimum at $(2,-4)$.
2. $f'(x)=4x^{3}-16x=4x(x-2)(x+2)$, so $x=0,\pm2$. $f''(x)=12x^{2}-16$. At $x=0$, $f''=-16<0$, a local maximum at $(0,0)$. At $x=\pm2$, $f''=32>0$, local minima at $(2,-16)$ and $(-2,-16)$.
3. $f''(x)=6x-6=0$ gives $x=1$, and $f''$ changes sign there. $f(1)=1-3=-2$, so the inflection is at $(1,-2)$.
4. $y'=\dfrac1x$ and $y''=-\dfrac{1}{x^{2}}<0$ for all $x>0$, so the graph is concave down.
5. $y''=e^{x}>0$ for all $x$, so the graph is concave up.
6. $f'(x)=4x^{3}$ is negative for $x<0$ and positive for $x>0$, so there is a local minimum at $(0,0)$, although $f''(0)=0$.
7. $y''=-\sin x$, which is negative for $0<x<\pi$ (concave down) and positive for $\pi<x<2\pi$ (concave up).
8. $\dfrac{dy}{dx}=12x^{3}-6x^{2}+1$, so $\dfrac{d^{2}y}{dx^{2}}=36x^{2}-12x$.
9. $f''(x)=(x^{2}-4x+2)e^{-x}=0$ gives $x=2\pm\sqrt2$, that is $x\approx0.586$ and $x\approx3.41$. The sign of $f''$ changes at both.
10. $f'(x)=1-\dfrac{1}{x^{2}}=0$ gives $x=\pm1$. $f''(x)=\dfrac{2}{x^{3}}$, so $f''(1)=2>0$, which shows a local minimum at $(1,2)$.

## Summary

- $f''(x)=\dfrac{d^{2}y}{dx^{2}}$ is the rate of change of the gradient. $f''>0$ means concave up, and $f''<0$ means concave down.
- Second derivative test at a stationary point: $f''>0$ is a minimum, $f''<0$ is a maximum, $f''=0$ is inconclusive (use the first derivative).
- A point of inflection needs $f''=0$ with a change of sign in $f''$. Give both coordinates.
- Examples $x^{3}$, $x^{4}$ and $-x^{4}$ show that $f'(a)=f''(a)=0$ can be an inflection, a minimum or a maximum.
- The graphs of $f$, $f'$ and $f''$ are linked: the extrema of $f'$ are the inflections of $f$.
- In motion, $s''(t)$ is acceleration. In general, $f''$ tells whether a rate is itself increasing or decreasing.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.7. Related facts may appear elsewhere. Justify any method used here.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
