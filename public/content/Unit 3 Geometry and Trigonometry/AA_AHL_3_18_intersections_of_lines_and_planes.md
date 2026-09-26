# Intersections of lines and planes

> **AHL 3.18 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

To intersect a line with a plane, substitute the line's parameter into the plane equation. A single parameter value gives one intersection point; an identity means the whole line lies in the plane; an impossibility means the line is parallel and disjoint.

## Formula, meaning and conditions

Insert $\mathbf r=\mathbf a+t\mathbf d$ into $\mathbf n\cdot\mathbf r=c$. If $\mathbf n\cdot\mathbf d\neq0$, then $t=(c-\mathbf n\cdot\mathbf a)/(\mathbf n\cdot\mathbf d)$. A zero denominator requires a separate containment check.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 3.18. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Intersect $(x,y,z)=(0,0,1)+t(1,2,-1)$ with $x+y+z=4$. Substitution gives $t+2t+(1-t)=1+2t=4$, so $t=3/2$. The point is $(3/2,3,-1/2)$. Check its plane coordinates: $3/2+3-1/2=4$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Substitute a parametric line into a plane equation.
2. Classify parallel, contained and one-point intersection cases.
3. Find or compare intersections of two planes.

## Why the method works

Putting $\mathbf r=\mathbf a+t\mathbf d$ into $\mathbf n\cdot\mathbf r=c$ gives one linear equation in $t$. A nonzero coefficient yields a unique crossing. If the coefficient of $t$ vanishes, the line is parallel to the plane; the remaining constant says whether it lies within that plane or misses it entirely.

## A contrasting worked route

For $(x,y,z)=(1,0,0)+t(1,2,1)$ and plane $x+y+z=5$, substitution gives $1+4t=5$, so $t=1$ and the point is $(2,2,1)$. Check $2+2+1=5$. If the direction were $(1,-1,0)$ instead, its dot product with normal $(1,1,1)$ would vanish, indicating no unique crossing.

## Transfer and validation

An intersection of two nonparallel planes is a line, not a point. When a system produces a free parameter, express that geometric line explicitly. Keep separate any restricted line segment bounds; an intersection on the infinite line might not lie in the original physical segment.

## Exam lens

Paper 1 style: solve for the line parameter first, report the point, then check it in the plane. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

The parameter $t=3/2$ is not the intersection point. Substitute it into every coordinate of the line.

## Try it yourself

Where does $(x,y,z)=(1,0,0)+t(0,0,1)$ meet $z=3$?

## Checked answer

$t=3$, giving $(1,0,3)$.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
