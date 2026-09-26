# Vector equations of planes

> **AHL 3.17 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A plane can be described by a point and a normal vector. Every displacement within the plane is perpendicular to that normal. A parametric form instead uses two nonparallel directions lying within the plane.

## Formula, meaning and conditions

$\mathbf n\cdot(\mathbf r-\mathbf a)=0$ with nonzero normal $\mathbf n$. For $\mathbf n=(A,B,C)$ this becomes $Ax+By+Cz=D$. Alternatively, $\mathbf r=\mathbf a+s\mathbf u+t\mathbf v$ for independent in-plane vectors.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 6 (PDF p. 8), lists vector and Cartesian equations of a plane under AHL 3.17. Derive and justify all other steps and conditions.

## Worked example

Through $(1,0,0)$ with normal $(2,-1,1)$, the equation is $2(x-1)-y+z=0$, or $2x-y+z=2$. The point $(1,1,1)$ satisfies $2(1)-1+1=2$, so it lies in the plane. A point such as $(0,0,0)$ does not.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Describe a plane by a point and two independent directions.
2. Obtain a normal from a cross product and write Cartesian form.
3. Test whether a point lies on the plane.

## Why the method works

A plane needs two nonparallel directions; a single direction describes only a line. Their cross product supplies a normal. In normal form, every displacement within the plane has zero dot product with that normal. A normal can be scaled without changing the plane, but the constant term must be recomputed from a known point.

## A contrasting worked route

The plane through $(1,0,2)$ with normal $(2,-1,3)$ satisfies $2(x-1)-y+3(z-2)=0$, or $2x-y+3z=8$. Point $(0,1,3)$ yields $-1+9=8$, so it lies on the plane; point $(0,0,0)$ does not. Substituting a given point is the simplest check of the constant.

## Transfer and validation

If two proposed spanning directions are parallel, their cross product is zero and they cannot determine a unique plane. Distinguish a plane parameterization from its single Cartesian equation. When comparing planes, proportional normal vectors alone indicate parallel orientation, not necessarily identical planes.

## Exam lens

Paper 1 style: state the given point and normal, then substitute a point to check the equation. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A vector parallel to the plane is not a normal. Its dot product with the normal should be zero.

## Try it yourself

Give a plane through the origin with normal $(0,0,1)$.

## Checked answer

$z=0$, the $xy$-plane.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
