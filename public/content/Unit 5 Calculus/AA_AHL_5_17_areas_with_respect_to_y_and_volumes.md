# Areas against the y-axis and volumes of revolution

> **AHL 5.17 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- find the area between a curve and the $y$-axis using $\displaystyle\int_{c}^{d}x\,dy$, by rewriting the curve as $x$ in terms of $y$ or by changing the variable;
- decide whether to integrate with respect to $x$ or $y$ so that the integral is the simplest possible;
- find the volume of a solid formed by rotating a region through $2\pi$ about the $x$-axis, using $V=\pi\displaystyle\int_{a}^{b}y^{2}\,dx$;
- find the volume of revolution about the $y$-axis, using $V=\pi\displaystyle\int_{c}^{d}x^{2}\,dy$;
- find the volume obtained by rotating a region between two curves, by subtracting the inner volume from the outer volume (the washer method);
- derive standard formulae, such as the volume of a cone or a sphere, from integration;
- use the calculator to evaluate integrals for volume, and give exact answers in terms of $\pi$.

## Why this topic matters

In SL 5.11 you found areas between a curve and the $x$-axis by integrating with respect to $x$. Not all regions are described conveniently in this way. A region bounded by the curve $y=\ln x$, the $y$-axis and a horizontal line is much easier to describe by thinking of $x$ as a function of $y$, since $x=e^{y}$. Swapping the roles of the axes is a simple idea with powerful consequences, and it is the first step towards integration in more than one variable.

The second half of the chapter turns area into volume. When a plane region is spun around an axis, it sweeps out a three-dimensional solid, and its volume can be found by slicing it into thin discs. Each disc has radius equal to the height of the curve and a tiny thickness, so the volume of the disc is $\pi y^{2}\,dx$, and adding these discs gives an integral. Engineers use the idea to calculate the capacity of tanks, vases and bottles, to design lenses and rotating parts, and to find the mass of an object with a known density profile. The formula for the volume of a sphere, which you have used since SL 3.1, can be derived this way, and so can the volume of a cone. In examinations, volumes of revolution questions are typically worth ten marks or more and combine a sketch, an integral set-up and a possibly challenging integral that may need substitution or parts.

## Core ideas

### Area between a curve and the $y$-axis

If a curve can be written as $x=g(y)$ and the region lies between the curve and the $y$-axis for $c\le y\le d$, then
$$A=\int_{c}^{d}x\,dy=\int_{c}^{d}g(y)\,dy,$$
when $g(y)\ge0$ on this interval. The roles of $x$ and $y$ are simply swapped. This is the same sum of thin strips, but horizontal rather than vertical. If the curve is given as $y=f(x)$, then either rewrite it as $x=f^{-1}(y)$ or, if that is awkward, change the variable in the integral: $\int x\,dy=\int x\,\dfrac{dy}{dx}\,dx$ with limits converted to $x$-values.

For example, for $y=x^{2}$ ($x\ge0$), the area between the curve, the $y$-axis and the lines $y=1$ and $y=4$ is $\displaystyle\int_{1}^{4}\sqrt y\,dy=\left[\tfrac23y^{3/2}\right]_{1}^{4}=\tfrac23(8-1)=\tfrac{14}{3}$.

### Choosing the variable

Sometimes the integral with respect to $y$ is easier. For $y=\ln x$, the region between the curve and the $y$-axis for $0\le y\le2$ has area $\int_{0}^{2}e^{y}\,dy=e^{2}-1$, and in terms of $x$ this would be $\int_{1}^{e^{2}}(2-\ln x)\,dx$ which needs parts. As in SL 5.11, a region may need to be split if the curve changes side of the axis, and areas on the left of the $y$-axis (negative $x$) give a negative integral, so use the absolute value for area.

### Volume of revolution about the $x$-axis

Rotate the region between $y=f(x)$, the $x$-axis and $x=a$, $x=b$ through $2\pi$ about the $x$-axis. A thin vertical strip at position $x$, of width $dx$, sweeps out a disc of radius $y$ and thickness $dx$, with volume $\pi y^{2}\,dx$. Summing,
$$V=\pi\int_{a}^{b}y^{2}\,dx=\pi\int_{a}^{b}\big[f(x)\big]^{2}\,dx.$$
Note that the square is of the whole function $f(x)$, so $(x+1)^{2}$ should be expanded as $x^{2}+2x+1$ and not as $x^{2}+1$. The volume is always positive, and the function may lie above or below the axis, because squaring removes the sign.

### Volume of revolution about the $y$-axis

For rotation about the $y$-axis, the horizontal strip at height $y$ sweeps out a disc of radius $x$ and thickness $dy$. Thus
$$V=\pi\int_{c}^{d}x^{2}\,dy.$$
You must express $x^{2}$ in terms of $y$ and use the limits in $y$. For $y=x^{2}$, $x^{2}=y$, so the volume of the paraboloid up to height $h$ is $\pi\displaystyle\int_{0}^{h}y\,dy=\dfrac{\pi h^{2}}{2}$.

### Regions between two curves (washers)

If the region lies between $y=f(x)$ (outer) and $y=g(x)$ (inner), with $f\ge g\ge0$, then rotating about the $x$-axis produces a solid with a hole, and each slice is a washer with outer radius $f$ and inner radius $g$. The volume is
$$V=\pi\int_{a}^{b}\left(f(x)^{2}-g(x)^{2}\right)dx.$$
It is not $\pi\int(f-g)^{2}\,dx$. This error is the most common in the topic, and the correct form comes from subtracting the volume of the inner solid from that of the outer solid.

### Deriving standard volumes

A **cone** of radius $r$ and height $h$ is formed by rotating the line $y=\dfrac rhx$ for $0\le x\le h$ about the $x$-axis, and $V=\pi\displaystyle\int_{0}^{h}\dfrac{r^{2}}{h^{2}}x^{2}\,dx=\dfrac{\pi r^{2}}{h^{2}}\cdot\dfrac{h^{3}}{3}=\dfrac13\pi r^{2}h$. A **sphere** of radius $r$ is formed by rotating the semicircle $y=\sqrt{r^{2}-x^{2}}$ for $-r\le x\le r$, and $V=\pi\displaystyle\int_{-r}^{r}\left(r^{2}-x^{2}\right)dx=\pi\left[r^{2}x-\tfrac{x^{3}}{3}\right]_{-r}^{r}=\tfrac43\pi r^{3}$.

### Sketching and setting up

For both areas and volumes, a sketch of the region and, for volumes, of the solid, is the key to a correct set-up. Mark the axis of rotation, the limits and the radius of a typical disc. Then write the integral with the right variable, expand the square if needed, and integrate. Where a region has two boundaries (a washer), identify which is outer. The calculator can evaluate the integral if the question asks for a decimal answer.

### A note on units

If lengths are in centimetres, the area is in cm$^{2}$ and the volume in cm$^{3}$. If a volume is requested as a capacity, a conversion may be needed: $1000$ cm$^{3}=1$ litre. Give exact answers as multiples of $\pi$ unless the question asks for a decimal.

## Worked examples

### Example 1 (a volume about the $x$-axis, 5 marks)

The region between $y=\sqrt x$, the $x$-axis and $x=4$ is rotated through $2\pi$ about the $x$-axis. Find the volume.

$V=\pi\displaystyle\int_{0}^{4}\left(\sqrt x\right)^{2}dx=\pi\int_{0}^{4}x\,dx=\pi\left[\tfrac{x^{2}}{2}\right]_{0}^{4}=8\pi$. The solid is a paraboloid, and its volume is about $25.1$ cubic units.

### Example 2 (a polynomial, 5 marks)

Find the volume formed when the region under $y=x^{2}$ for $0\le x\le2$ is rotated about the $x$-axis.

$V=\pi\displaystyle\int_{0}^{2}x^{4}\,dx=\pi\left[\tfrac{x^{5}}{5}\right]_{0}^{2}=\dfrac{32\pi}{5}=20.1$.

### Example 3 (a trigonometric function, 6 marks)

Find the volume formed by rotating $y=\sin x$ for $0\le x\le\pi$ about the $x$-axis.

$V=\pi\displaystyle\int_{0}^{\pi}\sin^{2}x\,dx$. Using $\sin^{2}x=\dfrac{1-\cos2x}{2}$, $V=\pi\left[\dfrac x2-\dfrac{\sin2x}{4}\right]_{0}^{\pi}=\pi\cdot\dfrac\pi2=\dfrac{\pi^{2}}{2}=4.93$.

### Example 4 (an area on the $y$-axis, 5 marks)

Find the area bounded by $y=x^{2}$ ($x\ge0$), the $y$-axis and the lines $y=1$ and $y=4$.

Rewrite as $x=\sqrt y$. The area is $\displaystyle\int_{1}^{4}\sqrt y\,dy=\left[\tfrac23y^{3/2}\right]_{1}^{4}=\tfrac23(8-1)=\tfrac{14}{3}$ square units. As a check in $x$: for $0\le x\le1$ the region has height $4-1=3$, giving area $3$, and for $1\le x\le2$ the height is $4-x^{2}$, giving $\int_{1}^{2}(4-x^{2})\,dx=4-\tfrac73=\tfrac53$. The total is $3+\tfrac53=\tfrac{14}{3}$, which agrees.

### Example 5 (a logarithmic curve, 5 marks)

Find the area between $y=\ln x$, the $y$-axis and the lines $y=0$ and $y=2$.

Write $x=e^{y}$. The area is $\displaystyle\int_{0}^{2}e^{y}\,dy=\left[e^{y}\right]_{0}^{2}=e^{2}-1=6.39$ square units. Integrating with respect to $x$ would need $\int_{1}^{e^{2}}\ln x\,dx$ by parts, so the $y$-integral is clearly easier.

### Example 6 (about the $y$-axis, 5 marks)

The region between $y=x^{2}$, the $y$-axis and $y=4$ is rotated about the $y$-axis. Find the volume.

Since $x^{2}=y$, $V=\pi\displaystyle\int_{0}^{4}y\,dy=\pi\left[\tfrac{y^{2}}{2}\right]_{0}^{4}=8\pi=25.1$. The solid is a bowl of depth $4$ and rim radius $2$, and it has half the volume of the enclosing cylinder, $\pi\cdot2^{2}\cdot4=16\pi$.

### Example 7 (a washer, 7 marks)

The region between $y=x$ and $y=x^{2}$ is rotated through $2\pi$ about the $x$-axis. Find the volume.

The curves meet where $x=x^{2}$, at $x=0$ and $x=1$, and between them $x\ge x^{2}$. The outer radius is $x$ and the inner radius is $x^{2}$, so $V=\pi\displaystyle\int_{0}^{1}\left(x^{2}-x^{4}\right)dx=\pi\left[\tfrac{x^{3}}{3}-\tfrac{x^{5}}{5}\right]_{0}^{1}=\pi\left(\tfrac13-\tfrac15\right)=\dfrac{2\pi}{15}$. Using $\pi\int(x-x^{2})^{2}\,dx$ instead would be wrong.

### Example 8 (another washer, 7 marks)

The region between $y=2x$ and $y=x^{2}$ is rotated about the $x$-axis. Find the exact volume.

The curves meet at $x=0$ and $x=2$, and the line $y=2x$ is above the parabola between them. Then $V=\pi\displaystyle\int_{0}^{2}\left(4x^{2}-x^{4}\right)dx=\pi\left[\tfrac{4x^{3}}{3}-\tfrac{x^{5}}{5}\right]_{0}^{2}=\pi\left(\tfrac{32}{3}-\tfrac{32}{5}\right)=\dfrac{64\pi}{15}$. This is approximately $13.4$ cubic units.

### Example 9 (the volume of a cone, 6 marks)

Derive the volume of a cone of radius $r$ and height $h$ by integration, and find the volume when $r=3$ and $h=6$.

Rotate the line $y=\dfrac rhx$ for $0\le x\le h$ about the $x$-axis. Then $V=\pi\displaystyle\int_{0}^{h}\left(\dfrac rhx\right)^{2}dx=\dfrac{\pi r^{2}}{h^{2}}\left[\dfrac{x^{3}}{3}\right]_{0}^{h}=\dfrac13\pi r^{2}h$. With $r=3$ and $h=6$, $V=\dfrac13\pi\cdot9\cdot6=18\pi=56.5$. Equivalently, the line is $y=\dfrac x2$ and $\pi\int_{0}^{6}\dfrac{x^{2}}{4}\,dx=\dfrac\pi4\cdot72=18\pi$.

### Example 10 (the volume of a sphere, 6 marks)

Show that the volume of a sphere of radius $r$ is $\dfrac43\pi r^{3}$, and find the volume when $r=3$.

Rotate $y=\sqrt{r^{2}-x^{2}}$ for $-r\le x\le r$ about the $x$-axis. Then $V=\pi\displaystyle\int_{-r}^{r}\left(r^{2}-x^{2}\right)dx=\pi\left[r^{2}x-\dfrac{x^{3}}{3}\right]_{-r}^{r}=\pi\left(\left(r^{3}-\dfrac{r^{3}}{3}\right)-\left(-r^{3}+\dfrac{r^{3}}{3}\right)\right)=\dfrac43\pi r^{3}$. For $r=3$, $V=\dfrac43\pi\cdot27=36\pi=113$.

### Example 11 (a volume needing parts, 8 marks)

The region bounded by $y=e^{x}$, the $y$-axis and the line $y=e$ is rotated about the $y$-axis. Find the exact volume.

Since $y=e^{x}$, $x=\ln y$. The region has $y$ from $1$ to $e$ (at $x=0$, $y=1$; at $y=e$, $x=1$). Then $V=\pi\displaystyle\int_{1}^{e}(\ln y)^{2}\,dy$. By parts with $u=(\ln y)^{2}$ and $\dfrac{dv}{dy}=1$: $\int(\ln y)^{2}\,dy=y(\ln y)^{2}-\int2\ln y\,dy=y(\ln y)^{2}-2(y\ln y-y)$. At $y=e$: $e-2(e-e)=e$. At $y=1$: $0-2(0-1)=2$. So $V=\pi(e-2)=2.26$.

### Example 12 (an area on the $y$-axis by a change of variable, 6 marks)

Find the area between $y=x^{3}$, the $y$-axis and the line $y=8$.

In terms of $y$, $x=y^{1/3}$, so the area is $\displaystyle\int_{0}^{8}y^{1/3}\,dy=\left[\tfrac34y^{4/3}\right]_{0}^{8}=\tfrac34\cdot16=12$. Check in terms of $x$: the region is under $y=8$ and above $y=x^{3}$ for $0\le x\le2$, with area $\int_{0}^{2}\left(8-x^{3}\right)dx=16-4=12$, which agrees.

### Example 13 (a parabola in $x$ as a function of $y$, 5 marks)

Find the area enclosed by $x=y(3-y)$ and the $y$-axis.

The curve meets the $y$-axis where $x=0$, at $y=0$ and $y=3$, and in between $x>0$. The area is $\displaystyle\int_{0}^{3}y(3-y)\,dy=\left[\tfrac{3y^{2}}{2}-\tfrac{y^{3}}{3}\right]_{0}^{3}=\tfrac{27}{2}-9=\tfrac92$.

## Using your GDC

The calculator can evaluate $\pi\int_{a}^{b}y^{2}\,dx$ directly: enter the integrand as the square of the function and multiply by $\pi$. For a region described by the $y$-axis, either integrate $x$ as a function of $y$ with $y$ as the variable, or use the graph of the original function and find the area as a difference. To check the washer volume, evaluate the integral of the difference of squares, and compare with the exact value. When using the graph to find the limits, use the intersection feature and store the $x$-values. Because volumes are often asked as exact multiples of $\pi$, you must complete the algebra by hand, and the calculator serves as a check. A sketch of the region on the screen is a good way to identify the outer and inner curves.

## Common mistakes

- Writing $V=\int y^{2}\,dx$ without $\pi$, or $V=\pi\int y\,dx$ without squaring.
- Expanding $(f(x))^{2}$ incorrectly: $(x+1)^{2}\ne x^{2}+1$.
- Using $\pi\int(f-g)^{2}\,dx$ for a washer, instead of $\pi\int(f^{2}-g^{2})\,dx$.
- Integrating with respect to $x$ for a rotation about the $y$-axis, with the limits in $x$ instead of $y$.
- Mixing the limits: using $x$-values for an integral in $y$.
- Failing to rewrite $x^{2}$ in terms of $y$ for rotation about the $y$-axis.
- Taking the wrong curve as the outer one in a washer, which gives a negative volume.
- Giving a decimal when an exact answer in terms of $\pi$ is required, or omitting units.

## Exam technique and command terms

**Find the volume generated** means the volume of revolution through $2\pi$, and the axis will be stated. **Find the area of the region** requires a sketch and, if the region is bounded by the $y$-axis, an integral in $y$. **Show that the volume is** requires every step through to the stated value, with limits and the integration clearly shown. **Find the exact volume** requires an answer in terms of $\pi$ (and possibly $e$ or $\ln$). Draw a sketch, label the axis of rotation, and write the formula $V=\pi\int y^{2}\,dx$ before substituting. In a washer, say which curve is outer. Method marks are given for the integral set-up, so write it, then use the calculator or algebra. In multi-part questions, an earlier part may give a result that simplifies the integral, so read to the end.

## Connections

This chapter builds directly on the definite integrals of SL 5.11, and the techniques of substitution and parts of AHL 5.16 are often needed to evaluate the integrals. The standard solids of SL 3.1 (cones and spheres) are now derived. The change of variable from $x$ to $y$ links to the inverse functions of Unit 2, and to the inverse trigonometric functions of AHL 5.15. In AHL 5.18 differential equations produce curves that can be rotated. In statistics, the area under a density curve against the horizontal axis gives probability, and the "inverse" idea (the area measured from the vertical axis) is related to the quantile function.

## Check your understanding

1. The region under $y=\sqrt x$ for $0\le x\le4$ is rotated about the $x$-axis. Find the volume.
2. Find the volume formed by rotating $y=x^{2}$ for $0\le x\le2$ about the $x$-axis.
3. Find the volume formed by rotating $y=\sin x$ for $0\le x\le\pi$ about the $x$-axis.
4. Find the area bounded by $y=x^{2}$ ($x\ge0$), the $y$-axis, $y=1$ and $y=4$.
5. Find the area between $y=\ln x$, the $y$-axis, $y=0$ and $y=2$.
6. The region between $y=x^{2}$, the $y$-axis and $y=4$ is rotated about the $y$-axis. Find the volume.
7. The region between $y=x$ and $y=x^{2}$ is rotated about the $x$-axis. Find the volume.
8. The region between $y=2x$ and $y=x^{2}$ is rotated about the $x$-axis. Find the exact volume.
9. Derive the volume of a sphere of radius $r$ by rotating a semicircle.
10. Find the area between $y=x^{3}$, the $y$-axis and $y=8$.

### Answers

1. $8\pi=25.1$.
2. $\dfrac{32\pi}{5}=20.1$.
3. $\dfrac{\pi^{2}}{2}=4.93$.
4. $\dfrac{14}{3}$ square units.
5. $e^{2}-1=6.39$ square units.
6. $8\pi=25.1$.
7. $\dfrac{2\pi}{15}=0.419$.
8. $\dfrac{64\pi}{15}=13.4$.
9. $\pi\displaystyle\int_{-r}^{r}\left(r^{2}-x^{2}\right)dx=\tfrac43\pi r^{3}$.
10. $12$ square units.

## Summary

- Area against the $y$-axis: $A=\int_{c}^{d}x\,dy$, with $x$ written in terms of $y$. Choose the variable that gives the easier integral.
- Rotation about the $x$-axis: $V=\pi\int_{a}^{b}y^{2}\,dx$. Rotation about the $y$-axis: $V=\pi\int_{c}^{d}x^{2}\,dy$.
- For a region between two curves, $V=\pi\int(f^{2}-g^{2})\,dx$ with $f$ the outer curve, never $\pi\int(f-g)^{2}$.
- The formulas for cones and spheres can be derived by rotating a line and a semicircle.
- Sketch, label the axis, write the integral with correct limits, give an exact answer with units, and check with the calculator.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists area with respect to y and volumes of revolution about either axis under AHL 5.17. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
