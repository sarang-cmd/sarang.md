# Rational functions and discontinuities

> **AHL 2.13 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- identify the domain, intercepts, vertical, horizontal and oblique asymptotes of rational functions of the types $\dfrac{ax+b}{cx^{2}+dx+e}$ and $\dfrac{ax^{2}+bx+c}{dx+e}$;
- distinguish a vertical asymptote from a **removable discontinuity** (a hole), and state its coordinates;
- find an oblique asymptote by polynomial division;
- determine the behaviour of the graph on each side of a vertical asymptote using a sign analysis;
- decide whether a graph crosses its horizontal or oblique asymptote;
- find the range of a rational function using the discriminant, and relate it to turning points;
- sketch a rational function with all features labelled, and find the equation of a rational function from its features;
- interpret asymptotes and maxima in a context.

## Why this topic matters

SL 2.8 introduced the simplest rational functions, which are translated hyperbolas. At HL, you meet functions with a quadratic in the numerator or denominator: the graphs have two vertical asymptotes, oblique asymptotes, or holes. These shapes describe real situations. A drug's concentration in the blood rises quickly after a dose and then falls, like $\dfrac{5t}{t^{2}+4}$. The cost per unit of a product with a fixed set-up cost and a rising marginal cost looks like $\dfrac{x^{2}+\dots}{x}$ with an oblique asymptote. The examination typically asks you to sketch such a graph by hand with all its features, find asymptotes and intercepts, and sometimes find the range with an algebraic method. The tools are not new: factorisation (SL 2.7 and AHL 2.12), division of polynomials, and sign analysis. The new ideas are the classification of discontinuities and the systematic collection of features into a sketch. This also prepares you for AHL 2.15 (rational inequalities) and for Unit 5, where the same functions are differentiated to find turning points and integrated by partial fractions (AHL 1.11).

## Core ideas

### Rational functions

A **rational function** is a quotient of polynomials, $f(x)=\dfrac{p(x)}{q(x)}$. Its natural domain is all real $x$ with $q(x)\ne0$. The key to understanding its graph is to **factorise both numerator and denominator** (AHL 2.12) and cancel common factors carefully, noting where they came from.

### Vertical asymptotes and holes

Suppose $f(x)=\dfrac{p(x)}{q(x)}$ is written with all common factors cancelled. Then:

- **A vertical asymptote** occurs at each zero $x=a$ of the cancelled denominator. As $x\to a$ from either side, $|f(x)|\to\infty$.
- **A removable discontinuity (hole)** occurs at $x=a$ if $(x-a)$ was a common factor of numerator and denominator. The graph follows the cancelled function but has a point missing at $x=a$. The $y$-coordinate of the hole is the value of the cancelled function at $a$, drawn as an open circle.

For example $\dfrac{x^{2}-4}{x-2}=x+2$ for $x\ne2$ is a straight line with a hole at $(2,4)$, and the function is *not defined* at $x=2$. In contrast $\dfrac{x+2}{x^{2}-4}=\dfrac1{x-2}$ has a hole at $x=-2$ (with $y=-\dfrac14$) *and* a vertical asymptote at $x=2$.

### Behaviour near a vertical asymptote

Near $x=a$, a factor $(x-a)$ in the denominator changes sign, so the function goes to $+\infty$ on one side and $-\infty$ on the other (if the factor has an odd power), or goes to the *same* infinity on both sides (even power). To decide the direction, take a number just to the left and just to the right of $a$ and find the sign of the numerator and each denominator factor. For $f(x)=\dfrac{x+1}{(x-3)(x+2)}$ at $x\to3^{+}$: numerator $=4>0$, $(x-3)>0$, $(x+2)=5>0$, so $f\to+\infty$; at $x\to3^{-}$, $(x-3)<0$ so $f\to-\infty$.

### Horizontal asymptotes

Compare the degrees of the numerator ($m$) and the denominator ($n$) for large $|x|$:

- $m<n$: $f(x)\to0$, horizontal asymptote $y=0$;
- $m=n$: $f(x)\to\dfrac{\text{leading coefficient of }p}{\text{leading coefficient of }q}$, giving $y=\dfrac{a_m}{b_n}$;
- $m=n+1$: no horizontal asymptote; there is an **oblique** (slant) asymptote;
- $m>n+1$: no linear asymptote (the graph behaves like a polynomial of degree $m-n$).

A graph *can* cross its horizontal asymptote at finite $x$ (for instance at an $x$-intercept when the asymptote is $y=0$); an asymptote describes behaviour as $|x|\to\infty$, not a barrier. A vertical asymptote cannot be crossed, since the function is undefined there.

### Oblique asymptotes

When the degree of the numerator is exactly one more than the denominator, divide:
$$
\frac{p(x)}{q(x)}=(mx+c)+\frac{r(x)}{q(x)},\qquad \deg r<\deg q,
$$
and since the remainder term tends to $0$ as $|x|\to\infty$, the line $y=mx+c$ is the oblique asymptote. For example
$$
\frac{x^{2}-3x+5}{x-1}=x-2+\frac{3}{x-1},
$$
so the asymptotes are $y=x-2$ and $x=1$. The curve lies above the oblique asymptote where $\dfrac3{x-1}>0$, that is for $x>1$, and below it for $x<1$. It never meets the oblique asymptote because $\dfrac3{x-1}\ne0$.

### Intercepts and sign

- $y$-intercept: $f(0)$, when $0$ is in the domain.
- $x$-intercepts: zeros of the (cancelled) numerator.
- A zero of **odd** multiplicity in the numerator means the graph crosses the axis; a zero of **even** multiplicity means it touches the axis.

To find the sign of $f$ on each interval, list the critical values (zeros of numerator and denominator) in order and use the multiplicities, or test a value in each interval. The sign changes when passing a critical value of odd multiplicity and stays the same at an even one. This sign diagram is the heart of the sketch.

### Range and turning points

To find the range of a rational function, set $y=f(x)$ and rearrange into a polynomial equation in $x$. For a function with a quadratic, this will be a quadratic in $x$ with coefficients involving $y$. For $y$ to be a value of the function, there must be at least one real $x$, so the discriminant must be non-negative. For example, for $f(x)=\dfrac x{x^{2}+1}$, the equation $yx^{2}-x+y=0$ requires $\Delta=1-4y^{2}\ge0$, so $-\dfrac12\le y\le\dfrac12$. The end values of the range are the **local maximum and minimum** values. This method requires care when the coefficient of $x^{2}$ vanishes for some $y$ (check that case separately: if $y=0$ the equation becomes linear and may or may not have a solution). Calculus gives the same turning points (Unit 5), but the discriminant method is purely algebraic.

For the oblique-asymptote example, $y=\dfrac{x^{2}-3x+5}{x-1}$ gives $x^{2}-(3+y)x+(5+y)=0$, with $\Delta=(3+y)^{2}-4(5+y)=y^{2}+2y-11\ge0$. The roots of $y^{2}+2y-11=0$ are $y=-1\pm2\sqrt3$, so $y\le-1-2\sqrt3\approx-4.46$ or $y\ge-1+2\sqrt3\approx2.46$. There is a gap in the range between the two branches.

### A systematic sketching routine

1. **Factorise** numerator and denominator; cancel common factors, recording holes.
2. **Domain:** exclude zeros of the original denominator.
3. **Intercepts:** $y$-intercept and $x$-intercepts.
4. **Vertical asymptotes:** zeros of the cancelled denominator.
5. **Horizontal or oblique asymptote:** by degree comparison and, if needed, division.
6. **Sign diagram** and behaviour at each side of each vertical asymptote.
7. **Crossings** of the horizontal or oblique asymptote: solve $f(x)=$ asymptote.
8. **Turning points** by technology or the discriminant, if needed.
9. Draw the asymptotes as dashed lines and sketch the branches, labelling coordinates and equations.

### Finding the equation from features

Each vertical asymptote at $x=a$ gives a factor $(x-a)$ in the denominator; each $x$-intercept at $x=b$ gives a factor $(x-b)$ in the numerator; a hole at $x=c$ gives a factor $(x-c)$ in both. The horizontal asymptote gives the ratio of leading coefficients, which determines the constant multiplier together with a known point.

## Worked examples

### Example 1 (a full sketch, 8 marks)

Sketch $f(x)=\dfrac{x+1}{x^{2}-x-6}$, labelling all asymptotes and intercepts.

*Solution.* Factorise: $f(x)=\dfrac{x+1}{(x-3)(x+2)}$, with no common factors. Vertical asymptotes: $x=3$ and $x=-2$. Degree numerator $1<2$, so the horizontal asymptote is $y=0$. The $x$-intercept is $x=-1$, and the $y$-intercept is $f(0)=-\dfrac16$. Critical values in order: $-2,\,-1,\,3$. Test signs: for $x<-2$ (try $-3$): $\dfrac{-2}{(-6)(-1)}<0$; for $-2<x<-1$ (try $-1.5$): $\dfrac{-0.5}{(-4.5)(0.5)}>0$; for $-1<x<3$ (try $0$): $\dfrac{1}{(-3)(2)}<0$; for $x>3$: positive. So the curve goes to $-\infty$ as $x\to-2^{-}$ and to $+\infty$ as $x\to-2^{+}$; it comes down through $(-1,0)$, passes below the axis through $\left(0,-\dfrac16\right)$ and goes to $-\infty$ as $x\to3^{-}$, and returns from $+\infty$ for $x>3$, decreasing towards the axis. On the far left it approaches $y=0$ from below.

### Example 2 (a hole, 4 marks)

Find the discontinuities of $f(x)=\dfrac{x^{2}-4}{x-2}$ and describe the graph.

*Solution.* $f(x)=\dfrac{(x-2)(x+2)}{x-2}=x+2$ for $x\ne2$. So the graph is the line $y=x+2$ with a hole at $(2,4)$. There is no vertical asymptote.

### Example 3 (a hole and an asymptote, 6 marks)

Find all the discontinuities of $f(x)=\dfrac{x^{2}-x-2}{x^{2}-4}$ and the horizontal asymptote.

*Solution.* $f(x)=\dfrac{(x-2)(x+1)}{(x-2)(x+2)}=\dfrac{x+1}{x+2}$ for $x\ne2$. The factor $(x-2)$ cancels, so there is a hole at $x=2$ with $y=\dfrac{3}{4}$: the point $\left(2,\dfrac34\right)$. The factor $(x+2)$ remains, so there is a vertical asymptote $x=-2$. The horizontal asymptote is $y=1$ (equal degrees, ratio of leading coefficients $\dfrac11$).

### Example 4 (an oblique asymptote, 7 marks)

For $f(x)=\dfrac{x^{2}-3x+5}{x-1}$, find all asymptotes, show that the graph has no $x$-intercepts, and state the $y$-intercept.

*Solution.* Divide: $x^{2}-3x+5=(x-1)(x-2)+3$, so $f(x)=x-2+\dfrac3{x-1}$. The vertical asymptote is $x=1$ and the oblique asymptote is $y=x-2$. The numerator $x^{2}-3x+5$ has $\Delta=9-20=-11<0$, so it has no real roots and there is no $x$-intercept. The $y$-intercept is $f(0)=-5$.

### Example 5 (a horizontal asymptote and a touching zero, 5 marks)

For $f(x)=\dfrac{2x^{2}}{x^{2}-1}$ find the asymptotes and describe the behaviour at the intercept.

*Solution.* Vertical asymptotes: $x=\pm1$. Horizontal asymptote: $y=2$. The only intercept is $(0,0)$, a zero of multiplicity $2$ in the numerator, so the graph touches the $x$-axis there (it does not cross) and has a local maximum at $(0,0)$ since $f(x)\le0$ for $|x|<1$ and the function is negative on both sides.

### Example 6 (the range, 6 marks)

Find the range of $f(x)=\dfrac{x}{x^{2}+1}$.

*Solution.* Let $y=\dfrac x{x^{2}+1}$. Then $yx^{2}-x+y=0$. For a real $x$, we need $\Delta=1-4y^{2}\ge0$ when $y\ne0$, and for $y=0$ the equation gives $x=0$, a solution. So $-\dfrac12\le y\le\dfrac12$. The maximum value $\dfrac12$ is at $x=1$, and the minimum $-\dfrac12$ is at $x=-1$.

### Example 7 (range with a gap, 7 marks)

Find the range of $f(x)=\dfrac{x^{2}-3x+5}{x-1}$.

*Solution.* $y(x-1)=x^{2}-3x+5$ gives $x^{2}-(3+y)x+(5+y)=0$. The discriminant is $(3+y)^{2}-4(5+y)=y^{2}+2y-11\ge0$. The roots of $y^{2}+2y-11=0$ are $y=-1\pm2\sqrt3$. So the range is $y\le-1-2\sqrt3$ or $y\ge-1+2\sqrt3$.

Check numerically: for $x>1$ the minimum is about $2.46$ ✓ and for $x<1$ the maximum is about $-4.46$ ✓.

### Example 8 (behaviour near the asymptotes, 5 marks)

For $f(x)=\dfrac{x+1}{(x-3)(x+2)}$, describe the behaviour as $x\to-2^{+}$ and as $x\to-2^{-}$.

*Solution.* Near $x=-2$ the numerator is $-1<0$ and $(x-3)\approx-5<0$. For $x\to-2^{+}$ the factor $(x+2)$ is small and positive, so the denominator is negative and the quotient is $\dfrac{-}{-}=+$, so $f\to+\infty$. For $x\to-2^{-}$, $(x+2)<0$, so the denominator is positive and $f\to-\infty$.

Check: $f(-1.99)=\dfrac{-0.99}{(-4.99)(0.01)}\approx19.8>0$ ✓.

### Example 9 (the equation from features, 6 marks)

A rational function has vertical asymptotes $x=2$ and $x=-1$, an $x$-intercept at $x=3$ and a horizontal asymptote $y=0$. It passes through $\left(0,3\right)$. Find its equation.

*Solution.* Write $f(x)=\dfrac{a(x-3)}{(x-2)(x+1)}$. At $x=0$: $\dfrac{a(-3)}{(-2)(1)}=\dfrac{3a}2=3$, so $a=2$. Hence $f(x)=\dfrac{2(x-3)}{(x-2)(x+1)}$. The degree of the numerator is less than the denominator, consistent with $y=0$.

### Example 10 (a context, 6 marks)

The concentration of a drug in the blood, in mg/L, is $c(t)=\dfrac{5t}{t^{2}+4}$ for $t\ge0$ hours. Find the time of the maximum concentration, the maximum, and the long-term behaviour.

*Solution.* $c\,t^{2}-5t+4c=0$ requires $\Delta=25-16c^{2}\ge0$, so $c\le\dfrac54$. The maximum is $1.25$ mg/L; at that value the double root is $t=\dfrac{5}{2c}=2$ hours. As $t\to\infty$, $c\to0$: the horizontal asymptote $c=0$ shows that the drug is eventually eliminated.

Check: $c(2)=\dfrac{10}{8}=1.25$ ✓.

### Example 11 (an oblique asymptote and its sign, 5 marks)

Find the oblique asymptote of $f(x)=\dfrac{2x^{2}+3}{x-1}$ and state whether the curve is above or below it for $x>1$.

*Solution.* $2x^{2}+3=(x-1)(2x+2)+5$, so $f(x)=2x+2+\dfrac5{x-1}$. The asymptote is $y=2x+2$. For $x>1$, $\dfrac5{x-1}>0$, so the curve is above its asymptote.

### Example 12 (does the graph cross its asymptote? 5 marks)

Show that the graph of $f(x)=\dfrac{x-1}{x^{2}+x+1}$ crosses its horizontal asymptote, and state where.

*Solution.* The degree of the numerator is less than that of the denominator, so the horizontal asymptote is $y=0$. Solving $f(x)=0$ gives $x=1$, so the graph crosses $y=0$ at $(1,0)$. The denominator $x^{2}+x+1$ has $\Delta=-3<0$, so there is no vertical asymptote and the domain is all real numbers.

## Using your GDC

A GDC makes it easy to explore rational functions, but it can mislead. Enter the function with brackets around the whole numerator and the whole denominator. The calculator may draw a near-vertical line at an asymptote, which is not part of the graph; do not include it in your sketch. A hole is typically invisible on the screen, so identify holes by factorising, and confirm with the table (the entry at the excluded $x$ will show an error). To find a local maximum or minimum, use the *maximum* or *minimum* tool, and use the result to confirm the range from your discriminant method. For oblique asymptotes, graph the function and the line $y=mx+c$ together and zoom out to see them merge. To check signs near an asymptote, use the table with values very close to $a$ on each side. The *zero* tool gives $x$-intercepts, and *intersect* with the asymptote line tests whether the graph crosses it. Menu names vary by model.

## Common mistakes

1. **Declaring an asymptote where there is a hole**: always factorise and cancel before concluding.
2. **Forgetting the hole's $y$-coordinate**, or drawing a solid point there.
3. **Using the wrong horizontal asymptote**: for equal degrees it is the ratio of leading coefficients, not $y=1$ by default.
4. **Claiming the graph never meets the horizontal asymptote**: it can, at finite $x$.
5. **Forgetting oblique asymptotes** when the degree of the numerator exceeds the denominator by one.
6. **Cancelling terms rather than factors**, such as "cancelling" $x^{2}$ in $\dfrac{x^{2}+1}{x^{2}+x}$.
7. **Mistaking a double zero for a crossing** (it touches).
8. **Using the discriminant method without checking the case where the coefficient of $x^{2}$ is zero.**

## Exam technique and command terms

**Sketch** requires dashed asymptotes with equations, all intercepts with coordinates, the correct branches and any holes as open circles. **Find the equations of all the asymptotes** includes oblique ones. **State the coordinates of the discontinuity** applies to holes. **Determine the range** is usually done by the discriminant method or by calculus, and the answer must be written as inequalities. **Find the equation of the curve** requires a systematic use of the features. **Hence** often links the oblique asymptote division to the sketch. **Show that the graph does not cross** an asymptote requires you to attempt to solve and obtain a contradiction.

A good routine is to write down the features in a short list in the margin before sketching, to avoid forgetting one. In a question with a parameter, factorise as far as possible and determine which feature changes with the parameter. For a two-part question like "(a) Find the equations of the asymptotes (b) hence sketch", ensure that the sketch uses exactly the asymptotes found. When a graph is given and you must find its equation, count the intercepts and asymptotes carefully before writing the form.

## Connections

SL 2.8 provided the simple case, which is a transformed $\dfrac1x$, and SL 2.3 and SL 2.4 provide the features and sketching routine. AHL 2.12 gives factorisation of polynomials, and without it holes and zeros cannot be found. AHL 1.11 (partial fractions) rewrites rational functions as sums of simpler ones, which is the algebraic origin of the vertical-asymptote structure, and polynomial division is the same step used for oblique asymptotes. AHL 2.14 treats odd and even symmetry, which many rational functions possess, and AHL 2.15 solves rational inequalities using the sign analysis of this chapter. AHL 2.16 introduces the modulus, which reflects the negative part of a function. In Unit 5, limits formalise the idea of an asymptote, the derivative of a quotient gives turning points, and integrals of rational functions give logarithms and arctangents. In Unit 4, a rational function appears in the formula for the probability of selecting items without replacement, and the model of drug concentration illustrates a continuous distribution shape.

## Check your understanding

1. Find the asymptotes and intercepts of $f(x)=\dfrac{x-2}{(x+1)(x-4)}$.
2. Describe the graph of $f(x)=\dfrac{x^{2}-9}{x-3}$.
3. For $f(x)=\dfrac{x^{2}-x-6}{x^{2}-1}$ find the vertical and horizontal asymptotes, the intercepts, and show that the graph crosses the horizontal asymptote.
4. Find the asymptotes of $f(x)=\dfrac{x^{2}-x+1}{x-1}$.
5. Find the range of $f(x)=\dfrac x{x^{2}+4}$.
6. Find the range of $f(x)=\dfrac{x^{2}+x+1}{x+1}$.
7. For $f(x)=\dfrac{x-2}{(x+1)(x-4)}$, describe the behaviour as $x\to4^{+}$, $x\to4^{-}$, $x\to-1^{+}$ and $x\to-1^{-}$.
8. A rational function has vertical asymptotes $x=1$ and $x=-3$, $x$-intercepts at $x=2$ and $x=-1$, and passes through $\left(0,\dfrac43\right)$. Find its equation.
9. Find the oblique asymptote of $f(x)=\dfrac{3x^{2}+1}{x+1}$.
10. The concentration of a drug is $c(t)=\dfrac{8t}{t^{2}+16}$ for $t\ge0$. Find the maximum concentration and the time at which it occurs.

### Answers

1. Vertical asymptotes $x=-1$ and $x=4$. Horizontal asymptote $y=0$. $x$-intercept $x=2$. $y$-intercept $f(0)=\dfrac{-2}{(1)(-4)}=\dfrac12$.
2. $f(x)=x+3$ for $x\ne3$: a straight line with a hole at $(3,6)$.
3. $f(x)=\dfrac{(x-3)(x+2)}{(x-1)(x+1)}$. Vertical asymptotes $x=\pm1$. Horizontal asymptote $y=1$. $x$-intercepts $x=3$ and $x=-2$; $y$-intercept $f(0)=6$. Solving $f(x)=1$: $x^{2}-x-6=x^{2}-1$ gives $x=-5$, so it crosses $y=1$ at $(-5,1)$.
4. $x^{2}-x+1=(x-1)\cdot x+1$, so $f(x)=x+\dfrac1{x-1}$. Vertical asymptote $x=1$ and oblique asymptote $y=x$.
5. $yx^{2}-x+4y=0$ needs $\Delta=1-16y^{2}\ge0$, so $-\dfrac14\le y\le\dfrac14$.
6. $y(x+1)=x^{2}+x+1$ gives $x^{2}+(1-y)x+(1-y)=0$ with $\Delta=(1-y)^{2}-4(1-y)=(1-y)(-3-y)\ge0$, so $(y-1)(y+3)\ge0$. The range is $y\le-3$ or $y\ge1$.
7. As $x\to4^{+}$: numerator $2>0$, $(x+1)=5>0$, $(x-4)\to0^{+}$, so $f\to+\infty$. As $x\to4^{-}$: $f\to-\infty$. As $x\to-1^{+}$: numerator $-3<0$, $(x-4)=-5<0$ and $(x+1)\to0^{+}$, so the denominator is negative and $f\to+\infty$. As $x\to-1^{-}$: $f\to-\infty$.
8. $f(x)=\dfrac{a(x-2)(x+1)}{(x-1)(x+3)}$. $f(0)=\dfrac{a(-2)(1)}{(-1)(3)}=\dfrac{2a}3=\dfrac43$, so $a=2$.
9. $3x^{2}+1=(x+1)(3x-3)+4$, so $f(x)=3x-3+\dfrac4{x+1}$. The oblique asymptote is $y=3x-3$.
10. $ct^{2}-8t+16c=0$ needs $\Delta=64-64c^{2}\ge0$, so $c\le1$. The maximum is $1$ mg/L at $t=\dfrac8{2c}=4$ hours.

## Summary

- Factorise first. Common factors give holes (open circles); remaining denominator zeros give vertical asymptotes.
- Degrees decide the end behaviour: $m<n$ gives $y=0$; $m=n$ gives the ratio of leading coefficients; $m=n+1$ gives an oblique asymptote by division.
- A graph may cross a horizontal or oblique asymptote, never a vertical one.
- Use a sign diagram and the odd or even multiplicity of factors to determine the behaviour at each side of an asymptote and at each intercept.
- The range comes from the discriminant of $yq(x)-p(x)=0$ (check the case where the leading coefficient vanishes), and its end points are turning-point values.
- To find the equation, assemble numerator and denominator factors from the features and use a known point for the constant.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 2.13. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
