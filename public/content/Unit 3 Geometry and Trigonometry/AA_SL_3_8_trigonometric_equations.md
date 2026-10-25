# Trigonometric equations

> **SL 3.8 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- solve $\sin x=k$, $\cos x=k$ and $\tan x=k$ in a given interval, in radians and in degrees, finding every solution;
- explain why there are usually two solutions per period for sine and cosine and one for tangent, and use the unit circle or the graph to find the others;
- solve equations of the form $\sin(bx+c)=k$ by adjusting the interval for the inner angle;
- solve equations that are quadratic in $\sin x$ or $\cos x$ by factorising or the formula, rejecting impossible values;
- use the double-angle identities to turn an equation into one with a single function;
- solve by factorising (not dividing) equations such as $\sin2x=\cos x$ and $\tan x=2\sin x$;
- write general solutions using $k\in\mathbb{Z}$;
- use the GDC to solve equations graphically and to check that no solution has been missed;
- solve trigonometric modelling equations and interpret them.

## Why this topic matters

Trigonometric equations answer the "when" questions about periodic models: *When* is the tide at least a certain height? *At what angles* does a projectile hit a target? *At what times* does an alternating voltage equal $100$ V? In each case, the equation has not one solution but a whole family, because the trigonometric functions repeat. This is the key conceptual shift of this topic: where a linear equation has one solution and a quadratic has at most two, a trigonometric equation can have infinitely many, and a question therefore specifies an interval ("for $0\le x\le2\pi$") that makes the list finite. The skill is to find *all* the solutions in the interval, no more and no fewer. In examinations, marks are routinely lost by missing the second solution, by forgetting to scale the interval when the argument is $2x$ or $x+\dfrac\pi3$, by dividing by a trigonometric factor and losing solutions, and by ignoring that some values (like $\sin x=2$) are impossible. This chapter provides the standard procedures, using the unit circle (SL 3.5), the identities (SL 3.6) and the graphs (SL 3.7), and ends with a full set of worked questions in the style of Paper 1 and Paper 2.

## Core ideas

### The basic equations

The simplest equations are $\sin x=k$, $\cos x=k$ and $\tan x=k$.

- **Existence.** $\sin x=k$ and $\cos x=k$ have solutions only if $-1\le k\le1$. If $|k|>1$ there are no solutions (the range of the functions is $[-1,1]$). $\tan x=k$ has solutions for every real $k$.
- **Procedure.** (1) Find the principal value with the calculator, or an exact value from the unit circle. (2) Use the symmetry of the circle or graph to find the second solution in a period. (3) Add multiples of the period to reach every solution in the required interval.

For the interval $0\le x\le2\pi$, with $\alpha$ the acute reference angle $\sin^{-1}|k|$, $\cos^{-1}|k|$ or $\tan^{-1}|k|$:

- $\sin x=k$: if $k>0$, $x=\alpha,\ \pi-\alpha$; if $k<0$, $x=\pi+\alpha,\ 2\pi-\alpha$;
- $\cos x=k$: if $k>0$, $x=\alpha,\ 2\pi-\alpha$; if $k<0$, $x=\pi-\alpha,\ \pi+\alpha$;
- $\tan x=k$: if $k>0$, $x=\alpha,\ \pi+\alpha$; if $k<0$, $x=\pi-\alpha,\ 2\pi-\alpha$.

In degrees replace $\pi$ by $180^{\circ}$ and $2\pi$ by $360^{\circ}$. For instance, $\sin x=0.6$ has $\alpha=\sin^{-1}0.6=0.6435$, so $x=0.6435$ and $\pi-0.6435=2.498$.

The calculator returns the principal value only (in $\left[-\dfrac\pi2,\dfrac\pi2\right]$ for $\sin^{-1}$ and $\tan^{-1}$ and in $[0,\pi]$ for $\cos^{-1}$). A negative value from the calculator, such as $\sin^{-1}(-0.8)=-0.927$, must be translated into the requested interval: for $[0,2\pi]$ add $2\pi$ to get $5.356$, and the second solution is $\pi-(-0.927)=4.069$.

### General solutions

Because of periodicity, all solutions can be described with an integer $k\in\mathbb{Z}$:
$$
\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{ or }\ x=\pi-\alpha+2k\pi,
$$
$$
\cos x=\cos\alpha\iff x=\pm\alpha+2k\pi,\qquad\tan x=\tan\alpha\iff x=\alpha+k\pi.
$$
In degrees, $360^{\circ}k$ and $180^{\circ}k$. The general solution is useful when there is no restriction on the interval, and then you pick out the values that lie in the given interval by substituting suitable integers $k$.

### Equations with a compound argument

For an equation such as $\sin(bx+c)=k$ in an interval for $x$, substitute $u=bx+c$ and **transform the interval** accordingly: if $x\in[x_1,x_2]$ then $u\in[bx_1+c,\ bx_2+c]$. Solve for $u$ in the *whole* interval (which may contain several periods), and then convert back with $x=\dfrac{u-c}b$. A common error is to solve in $[0,2\pi]$ for $u$ and miss the solutions in further periods; e.g. for $\sin3x=\dfrac{\sqrt3}2$ with $0\le x\le2\pi$, the variable $u=3x$ runs through $[0,6\pi]$, three full periods, so there are $6$ solutions (two per period). A quick check: the number of solutions equals (the number of periods of $\sin u$ in the interval) $\times2$ for generic $|k|<1$.

### Quadratic equations in $\sin x$ or $\cos x$

If the equation has the form $a\sin^{2}x+b\sin x+c=0$ (or with $\cos$), treat $\sin x$ as the unknown, solve the quadratic (SL 2.7) and then solve each simple equation. Reject values outside $[-1,1]$. For example $2\sin^{2}x+\sin x-1=0$ factorises as $(2\sin x-1)(\sin x+1)=0$, so $\sin x=\dfrac12$ or $\sin x=-1$.

### Using identities to reduce to one function

- Replace $\cos2x$ by $1-2\sin^{2}x$ (if $\sin x$ also appears) or $2\cos^{2}x-1$ (if $\cos x$ also appears).
- Replace $\sin^{2}x$ by $1-\cos^{2}x$ (or $\cos^{2}x$ by $1-\sin^{2}x$) to have only one function.
- Replace $\tan x$ by $\dfrac{\sin x}{\cos x}$.
- Replace $\sin2x$ by $2\sin x\cos x$.

### Factorise, do not divide

If an equation has a common trigonometric factor, such as $\sin2x=\cos x$, which becomes $2\sin x\cos x=\cos x$, **do not divide by $\cos x$**: that loses the solutions where $\cos x=0$. Move everything to one side and factorise: $\cos x(2\sin x-1)=0$, so $\cos x=0$ or $\sin x=\dfrac12$. Equally for $\tan x=2\sin x$: write $\dfrac{\sin x}{\cos x}=2\sin x$, then $\sin x-2\sin x\cos x=0$ (multiplying by $\cos x$, valid provided you remember to exclude $\cos x=0$, where $\tan x$ is undefined), so $\sin x(1-2\cos x)=0$.

### Equations with $\tan^{2}x$ and similar

If $\tan^{2}x=3$, take square roots with both signs, $\tan x=\pm\sqrt3$, and find solutions in all four quadrants. If an equation contains both $\sin^{2}x$ and $\cos^{2}x$ in a ratio, such as $3\cos^{2}x=\sin^{2}x$, divide by $\cos^{2}x$ (it is never zero at a solution here, since if $\cos x=0$ then $\sin x=0$ as well, which is impossible) to get $\tan^{2}x=3$.

### Graphical solutions and checks

On the GDC, graph $y=f(x)$ and $y=k$, or the two sides, on the interval, in the right mode. The intersections are the solutions. The graph gives a visual check on the count: for $\sin2x=0.3$ in $[0,2\pi]$, the curve has two periods and crosses the line twice per period, four solutions. If your algebra gives a different count, find the mistake. For equations that cannot be solved analytically (such as $\sin x=\dfrac x2$ or $\cos x=x$), the GDC is the only method.

### Modelling equations

A model such as $d(t)=6+2\cos\dfrac{\pi t}6$ with an equation $d(t)=5$ is solved by the same steps: isolate the trigonometric function, find the principal value and its partner(s), and keep those in the model's domain. Give the answers in context with units.

### Degrees and radians

If the question is in degrees ($0^{\circ}\le x\le360^{\circ}$), solve in degrees, with the calculator in degree mode; otherwise use radians. An answer to a radian question should either be exact (multiple of $\pi$) or to $3$ significant figures.

## Worked examples

### Example 1 (a basic sine equation, 4 marks)

Solve $\sin x=0.6$ for $0\le x\le2\pi$.

*Solution.* $\sin^{-1}0.6=0.6435$. The other solution is $\pi-0.6435=2.498$. So $x=0.644$ or $x=2.50$ (to $3$ s.f.).

Check: $\sin2.498=0.6$ ✓.

### Example 2 (cosine in degrees, 4 marks)

Solve $\cos x=-0.3$ for $0^{\circ}\le x\le360^{\circ}$.

*Solution.* $\cos^{-1}(-0.3)=107.5^{\circ}$. The other solution is $360^{\circ}-107.5^{\circ}=252.5^{\circ}$. So $x=107.5^{\circ}$ or $252.5^{\circ}$.

### Example 3 (tangent, 3 marks)

Solve $\tan x=2$ for $0\le x\le2\pi$.

*Solution.* $\tan^{-1}2=1.107$ and $1.107+\pi=4.249$. So $x=1.11$ or $x=4.25$.

### Example 4 (a multiple angle, 7 marks)

Solve $2\sin3x=\sqrt3$ for $0\le x\le2\pi$.

*Solution.* $\sin3x=\dfrac{\sqrt3}2$. Let $u=3x$, with $0\le u\le6\pi$. In one period, $\sin u=\dfrac{\sqrt3}2$ at $u=\dfrac\pi3$ and $\dfrac{2\pi}3$. Adding $2\pi$ and $4\pi$: $u=\dfrac\pi3,\ \dfrac{2\pi}3,\ \dfrac{7\pi}3,\ \dfrac{8\pi}3,\ \dfrac{13\pi}3,\ \dfrac{14\pi}3$. Dividing by $3$: $x=\dfrac\pi9,\ \dfrac{2\pi}9,\ \dfrac{7\pi}9,\ \dfrac{8\pi}9,\ \dfrac{13\pi}9,\ \dfrac{14\pi}9$. There are six solutions, as expected for three periods.

### Example 5 (a phase shift, 6 marks)

Solve $\cos\left(x-\dfrac\pi3\right)=\dfrac12$ for $0\le x\le2\pi$.

*Solution.* Let $u=x-\dfrac\pi3$, so $-\dfrac\pi3\le u\le\dfrac{5\pi}3$. $\cos u=\dfrac12$ gives $u=\pm\dfrac\pi3$ (and $\pm\dfrac\pi3+2k\pi$). Within the interval: $u=-\dfrac\pi3$ and $u=\dfrac\pi3$ (the value $\dfrac{5\pi}3$ also satisfies $\cos\dfrac{5\pi}3=\dfrac12$ and lies at the end of the interval). So $u\in\left\{-\dfrac\pi3,\ \dfrac\pi3,\ \dfrac{5\pi}3\right\}$ and $x=u+\dfrac\pi3\in\left\{0,\ \dfrac{2\pi}3,\ 2\pi\right\}$.

Check: $\cos\left(0-\dfrac\pi3\right)=\dfrac12$ ✓; $\cos\left(\dfrac{2\pi}3-\dfrac\pi3\right)=\cos\dfrac\pi3=\dfrac12$ ✓; $\cos\left(2\pi-\dfrac\pi3\right)=\dfrac12$ ✓.

### Example 6 (a quadratic in sine, 6 marks)

Solve $2\sin^{2}x+\sin x-1=0$ for $0\le x\le2\pi$.

*Solution.* Factorise: $(2\sin x-1)(\sin x+1)=0$. So $\sin x=\dfrac12$ or $\sin x=-1$. $\sin x=\dfrac12$: $x=\dfrac\pi6,\ \dfrac{5\pi}6$. $\sin x=-1$: $x=\dfrac{3\pi}2$. The solutions are $x=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{3\pi}2$.

### Example 7 (using the double-angle identity, 7 marks)

Solve $\cos2x=\sin x$ for $0\le x\le2\pi$.

*Solution.* Use $\cos2x=1-2\sin^{2}x$: $1-2\sin^{2}x=\sin x$, so $2\sin^{2}x+\sin x-1=0$, which is Example 6. Hence $x=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{3\pi}2$.

Check $x=\dfrac{3\pi}2$: $\cos3\pi=-1$ and $\sin\dfrac{3\pi}2=-1$ ✓.

### Example 8 (factorise, do not divide, 7 marks)

Solve $\sin2x=\cos x$ for $0\le x\le2\pi$.

*Solution.* $2\sin x\cos x=\cos x$, so $\cos x(2\sin x-1)=0$. Either $\cos x=0$, giving $x=\dfrac\pi2,\ \dfrac{3\pi}2$, or $\sin x=\dfrac12$, giving $x=\dfrac\pi6,\ \dfrac{5\pi}6$. The four solutions are $x=\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6,\ \dfrac{3\pi}2$.

(Dividing by $\cos x$ would have lost $\dfrac\pi2$ and $\dfrac{3\pi}2$.)

### Example 9 (an equation with $\tan$, 7 marks)

Solve $\tan x=2\sin x$ for $0\le x\le2\pi$.

*Solution.* The expression $\tan x$ is undefined at $x=\dfrac\pi2$ and $\dfrac{3\pi}2$. For other $x$: $\dfrac{\sin x}{\cos x}=2\sin x$, so $\sin x=2\sin x\cos x$, and $\sin x(1-2\cos x)=0$. $\sin x=0$ gives $x=0,\ \pi,\ 2\pi$. $\cos x=\dfrac12$ gives $x=\dfrac\pi3,\ \dfrac{5\pi}3$. The solutions are $x=0,\ \dfrac\pi3,\ \pi,\ \dfrac{5\pi}3,\ 2\pi$.

### Example 10 (a squared tangent, 5 marks)

Solve $3\cos^{2}x=\sin^{2}x$ for $0\le x\le2\pi$.

*Solution.* If $\cos x=0$ then $\sin^{2}x=1\ne0$, so $\cos x\ne0$ at any solution. Dividing by $\cos^{2}x$: $3=\tan^{2}x$, so $\tan x=\pm\sqrt3$. $\tan x=\sqrt3$: $x=\dfrac\pi3,\ \dfrac{4\pi}3$. $\tan x=-\sqrt3$: $x=\dfrac{2\pi}3,\ \dfrac{5\pi}3$. Four solutions: $\dfrac\pi3,\ \dfrac{2\pi}3,\ \dfrac{4\pi}3,\ \dfrac{5\pi}3$.

### Example 11 (the number of solutions, 3 marks)

How many solutions does $\sin2x=0.3$ have for $0\le x\le2\pi$?

*Solution.* With $u=2x\in[0,4\pi]$, which is two periods of sine, and two solutions per period because $|0.3|<1$: four solutions. The values are $x=0.152,\ 1.418,\ 3.294,\ 4.560$.

### Example 12 (degrees with a double angle, 6 marks)

Solve $\cos2x=\dfrac12$ for $0^{\circ}\le x\le360^{\circ}$.

*Solution.* $u=2x\in[0^{\circ},720^{\circ}]$. $\cos u=\dfrac12$ gives $u=60^{\circ},\ 300^{\circ},\ 420^{\circ},\ 660^{\circ}$. So $x=30^{\circ},\ 150^{\circ},\ 210^{\circ},\ 330^{\circ}$.

### Example 13 (a negative sine on a symmetric interval, 4 marks)

Solve $\sin x=-0.8$ for $-\pi\le x\le\pi$.

*Solution.* $\sin^{-1}(-0.8)=-0.9273$ is in the interval. The other solution is $-\pi-(-0.9273)=-2.2143$. So $x=-2.21$ or $x=-0.927$.

### Example 14 (general solution, 4 marks)

Write the general solution of $\sin x=\dfrac12$, and of $\tan x=1$.

*Solution.* $\sin x=\dfrac12$: $x=\dfrac\pi6+2k\pi$ or $x=\dfrac{5\pi}6+2k\pi$, $k\in\mathbb{Z}$. $\tan x=1$: $x=\dfrac\pi4+k\pi$, $k\in\mathbb{Z}$.

### Example 15 (a tide, 5 marks)

The depth is $d(t)=6+2\cos\dfrac{\pi t}6$ metres, $0\le t\le12$. When is the depth exactly $5$ m?

*Solution.* $2\cos\dfrac{\pi t}6=-1$, so $\cos\dfrac{\pi t}6=-\dfrac12$. With $u=\dfrac{\pi t}6\in[0,2\pi]$: $u=\dfrac{2\pi}3,\ \dfrac{4\pi}3$. So $t=4$ and $t=8$ hours.

Check: $d(4)=6+2\cos\dfrac{2\pi}3=6-1=5$ ✓.

## Using your GDC

For any equation in an interval, graph both sides in the correct mode and use *intersect* for each crossing; this is both a method and a check. Choose the window to match the interval ($x$ from $0$ to $2\pi$) so that all solutions are visible, and count them. Use the *table* to see sign changes and approximate locations. When using the inverse functions, remember that they return only the principal value: $\sin^{-1}$ and $\tan^{-1}$ in $[-90^{\circ},90^{\circ}]$ and $\cos^{-1}$ in $[0^{\circ},180^{\circ}]$, so use symmetry for the other solutions. Some GDCs have a *solve* function that will return only one solution near a guess: try several guesses and compare with the graph. For equations that can be written in the form $f(x)=0$, use the *zero* tool. Check the mode (degree or radian) before starting, and make sure the window's vertical range includes the horizontal line. Menu names vary by model. An exact answer must come from the unit circle; the GDC gives decimals only.

## Common mistakes

1. **Missing the second solution** (or the third and fourth when the argument is a multiple of $x$).
2. **Not transforming the interval** for $\sin(2x)$ or $\cos(x-c)$: solving in $[0,2\pi]$ for $u$ instead of the whole transformed interval.
3. **Dividing by a trigonometric factor** and losing the solutions where it is zero.
4. **Not rejecting impossible values**, for example attempting to solve $\sin x=\dfrac32$ from a quadratic.
5. **Calculator in the wrong mode**, or giving radians when degrees were requested.
6. **Applying $\sin^{-1}$ result directly** as the only answer, ignoring that the principal value may be outside the interval (negative).
7. **Wrong quadrants for tangent**: using $\pi-\alpha$ and $2\pi-\alpha$ for positive $k$.
8. **Including solutions outside the interval**, or excluding endpoints that satisfy a non-strict condition.

## Exam technique and command terms

**Solve** the equation for the given interval means all solutions in the interval, exact if the numbers are "nice" and $3$ significant figures otherwise. **Find the exact solutions** requires multiples of $\pi$ or degrees. **Hence** or **show that** may require a given identity to be used to reach a quadratic. **Find the general solution** requires $k\in\mathbb{Z}$. **Solve graphically** requires a sketch with the intersections.

A good layout for a typical question: (1) write the equation in terms of one function; (2) state the quadratic or the factorised form; (3) list each simple equation; (4) for each, write the principal value, the second value, and extend to the interval; (5) list the final answers in order and check the count. Show the transformed interval explicitly for compound angles: "$0\le3x\le6\pi$". If asked to prove an identity first and then solve an equation, use the identity in the equation as instructed ("hence"). For questions with context, give the answers with units and choose those that lie in the domain.

## Connections

SL 3.5 provided the unit circle and the symmetry relations that give the second solution, and SL 3.6 provided the double-angle identities that reduce equations to one function. SL 2.7 provided the quadratic methods used when the equation is quadratic in $\sin x$ or $\cos x$, and SL 2.10 provided the graphical solution method and the habit of counting solutions. SL 3.7 gave the graphs and the models whose "when" questions are solved here. In AHL 3.9 to 3.11, compound-angle identities reduce $a\sin x+b\cos x=c$ to a single sinusoid equation $R\sin(x+\alpha)=c$, reciprocal ratios give equations in $\sec x$ or $\cot x$, and the inverse functions $\arcsin$, $\arccos$ and $\arctan$ give the principal values. In AHL 1.13, solving $z^{n}=w$ in the complex numbers uses the same idea of adding multiples of $2\pi$ to the argument. In Unit 5, stationary points of trigonometric functions are found by solving $f'(x)=0$, which is a trigonometric equation, and the areas between curves require their intersections.

## Check your understanding

1. Solve $\sin x=0.4$ for $0\le x\le2\pi$.
2. Solve $\cos x=-0.7$ for $0^{\circ}\le x\le360^{\circ}$.
3. Solve $\tan x=-3$ for $0\le x\le2\pi$.
4. Solve $2\cos2x=1$ for $0\le x\le2\pi$.
5. Solve $2\cos^{2}x+\cos x-1=0$ for $0\le x\le2\pi$.
6. Solve $\sin2x=\sin x$ for $0\le x\le2\pi$.
7. Solve $\cos2x+3\sin x=2$ for $0\le x\le2\pi$.
8. Solve $3\tan^{2}x=1$ for $0\le x\le2\pi$.
9. Solve $\sin\left(x+\dfrac\pi6\right)=-\dfrac12$ for $0\le x\le2\pi$.
10. The depth of water is $d(t)=8+3\cos\dfrac{\pi t}6$ metres for $0\le t\le12$. When is the depth $6.5$ m?

### Answers

1. $x=0.412$ or $x=\pi-0.4115=2.73$.
2. $\cos^{-1}(-0.7)=134.4^{\circ}$ and $360^{\circ}-134.4^{\circ}=225.6^{\circ}$.
3. $\tan^{-1}3=1.249$. Negative tangent: $x=\pi-1.249=1.89$ and $2\pi-1.249=5.03$.
4. $\cos2x=\dfrac12$ with $u=2x\in[0,4\pi]$: $u=\dfrac\pi3,\ \dfrac{5\pi}3,\ \dfrac{7\pi}3,\ \dfrac{11\pi}3$, so $x=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{7\pi}6,\ \dfrac{11\pi}6$.
5. $(2\cos x-1)(\cos x+1)=0$: $\cos x=\dfrac12$ gives $x=\dfrac\pi3,\ \dfrac{5\pi}3$; $\cos x=-1$ gives $x=\pi$.
6. $2\sin x\cos x-\sin x=0$ so $\sin x(2\cos x-1)=0$. $\sin x=0$: $x=0,\ \pi,\ 2\pi$. $\cos x=\dfrac12$: $x=\dfrac\pi3,\ \dfrac{5\pi}3$.
7. $1-2\sin^{2}x+3\sin x=2$, so $2\sin^{2}x-3\sin x+1=0$, and $(2\sin x-1)(\sin x-1)=0$. $\sin x=\dfrac12$: $x=\dfrac\pi6,\ \dfrac{5\pi}6$; $\sin x=1$: $x=\dfrac\pi2$.
8. $\tan x=\pm\dfrac1{\sqrt3}$: $x=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{7\pi}6,\ \dfrac{11\pi}6$.
9. $u=x+\dfrac\pi6\in\left[\dfrac\pi6,\dfrac{13\pi}6\right]$. $\sin u=-\dfrac12$: $u=\dfrac{7\pi}6,\ \dfrac{11\pi}6$. So $x=\pi,\ \dfrac{5\pi}3$.
10. $3\cos\dfrac{\pi t}6=-1.5$, so $\cos\dfrac{\pi t}6=-\dfrac12$, and $\dfrac{\pi t}6=\dfrac{2\pi}3,\ \dfrac{4\pi}3$. So $t=4$ and $t=8$ hours.

## Summary

- $\sin x=k$ and $\cos x=k$ have solutions only for $|k|\le1$; there are two solutions per period, found with the principal value and the circle's symmetry. $\tan x=k$ has one solution per period $\pi$.
- For $\sin(bx+c)=k$, transform the interval to that of $u=bx+c$, solve for all $u$, and convert back.
- Quadratics in $\sin x$ or $\cos x$: factorise or use the formula; reject values outside $[-1,1]$.
- Use identities to reduce to one function; factorise instead of dividing by a trigonometric factor.
- General solution: $\alpha+2k\pi$ and $\pi-\alpha+2k\pi$ for sine; $\pm\alpha+2k\pi$ for cosine; $\alpha+k\pi$ for tangent.
- Check the count with a graph, check the mode, and list the answers in order.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 3.8. Related facts may appear elsewhere. Justify any method used here.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
