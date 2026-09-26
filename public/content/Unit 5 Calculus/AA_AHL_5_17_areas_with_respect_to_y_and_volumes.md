# Areas with respect to y and volumes

> **AHL 5.17 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Vertical slices give integrals with respect to $x$; horizontal slices give integrals with respect to $y$. Choose the direction that makes the right and left boundaries easiest to express. Volumes of revolution add circular cross-sections, with radius determined by distance to the axis.

## Formula, meaning and conditions

Horizontal-slice area is $\int_{y_0}^{y_1}[x_{\rm right}(y)-x_{\rm left}(y)]\,dy$. Revolving a nonnegative curve $y=f(x)$ about the $x$-axis gives $V=\pi\int_a^b f(x)^2\,dx$ when discs fill the region. For holes use outer area minus inner area.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists area with respect to y and volumes of revolution about either axis under AHL 5.17. Derive and justify all other steps and conditions.

## Worked example

Between $x=y^2$ and $x=2y$ for $0\leq y\leq2$, the right boundary is $2y$ and the left is $y^2$. Area $=\int_0^2(2y-y^2)\,dy=[y^2-y^3/3]_0^2=4/3$. Separately, revolving the region under $y=x$ from $x=0$ to $2$ about the $x$-axis yields $V=\pi\int_0^2x^2\,dx=8\pi/3$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Integrate $x$ with respect to $y$ for a horizontal area slice.
2. Set up disc or washer volumes about either axis.
3. Check whether a region changes boundary curves along the interval.

## Why the method works

A horizontal slice has width right minus left and thickness $dy$; a vertical slice uses upper minus lower with $dx$. Rotating a slice creates a disc or washer whose cross-sectional area uses the square of its radius. The axis of revolution decides whether radius is described by $x$ or $y$, and a hollow center requires subtracting an inner squared radius.

## A contrasting worked route

The region $0\leq y\leq2$ and $0\leq x\leq y$ has area $\int_0^2y\,dy=2$. Rotating it about the $y$-axis creates discs of radius $y$, so volume is $\pi\int_0^2 y^2\,dy=8\pi/3$. Integrating $y$ without squaring would compute a different geometric quantity.

## Transfer and validation

Draw one representative slice perpendicular to the rotation axis before writing limits. Use positive cross-sectional area, even if an algebraic radius expression can be negative outside the actual region. Add square units for planar area and cubic units for volume.

## Exam lens

Paper 2 style: draw a typical slice to justify which function is rightmost or which radius is outer. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

For volume, square the radius before integrating. $\pi\int f(x)\,dx$ does not generally measure a solid of revolution.

## Try it yourself

Revolve $y=2$ from $x=0$ to $3$ about the $x$-axis. Find the volume.

## Checked answer

Cylinder: $\pi\int_0^3(2)^2\,dx=12\pi$ cubic units.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
