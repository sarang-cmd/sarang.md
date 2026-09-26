# Coincident, parallel, intersecting and skew lines

> **AHL 3.15 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

In three dimensions, two nonparallel lines need not meet. Skew lines are neither parallel nor intersecting. Compare direction vectors first, then solve for parameters if they are not parallel; all coordinate equations must hold simultaneously.

## Formula, meaning and conditions

For lines $\mathbf a+s\mathbf u$ and $\mathbf b+t\mathbf v$, proportional nonzero directions indicate parallel or coincident lines. If directions are not proportional, solve $\mathbf a+s\mathbf u=\mathbf b+t\mathbf v$; inconsistency gives skew lines.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 3.15. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Consider $L_1=(0,0,0)+s(1,0,0)$ and $L_2=(0,1,1)+t(0,1,0)$. The directions are not proportional. On $L_1$ every point has $z=0$; on $L_2$ every point has $z=1$. They cannot meet, so the lines are skew. They are not parallel because their directions differ.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compare directions to recognize parallel or coincident lines.
2. Solve all coordinate equations to find a true intersection.
3. Demonstrate skewness when nonparallel spatial lines do not meet.

## Why the method works

In a plane, two nonparallel lines meet; in three dimensions they can be skew. Testing direction vectors alone distinguishes parallel from nonparallel, but a coincident line also needs a common point. For an intersection solve a pair of parameter equations and verify the third component. That final check is exactly what distinguishes skewness.

## A contrasting worked route

Let $L_1=(t,0,0)$ and $L_2=(0,s,1)$. Their directions $(1,0,0)$ and $(0,1,0)$ are not parallel, but every point of $L_1$ has $z=0$ while every point of $L_2$ has $z=1$. They cannot intersect and are skew. A flat sketch can incorrectly make their projections cross.

## Transfer and validation

Use separate symbols for the two line parameters; a shared symbol would impose an unjustified timing condition. When a solver returns a point, substitute it into both complete line equations. A zero direction vector is invalid as a line direction and must not be treated as a parallel special case.

## Exam lens

Paper 1 style: an inconsistent third coordinate is enough to rule out an intersection after checking direction vectors. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Two nonparallel lines in the plane intersect, but that two-dimensional rule is false in three dimensions.

## Try it yourself

Are $(0,0,0)+t(1,0,0)$ and $(0,1,0)+s(1,0,0)$ parallel or coincident?

## Checked answer

Parallel and distinct: every point on the second has $y=1$, unlike the first.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
