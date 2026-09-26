# Vector equations of lines

> **AHL 3.14 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A line consists of a fixed point plus all scalar multiples of a nonzero direction vector. The parameter determines how far and which way to travel along the line. Different-looking vector equations can represent the same geometric line.

## Formula, meaning and conditions

$\mathbf r=\mathbf a+t\mathbf d$, where $\mathbf a$ is a point, $\mathbf d\neq\mathbf0$ is a direction and $t\in\mathbb R$. In three dimensions this gives three scalar equations with the same parameter.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 6 (PDF p. 8), lists vector, parametric and Cartesian equations of a line under AHL 3.14. Derive and justify all other steps and conditions.

## Worked example

The line $\mathbf r=(1,2,0)+t(2,-1,3)$ passes through $(1,2,0)$ when $t=0$. At $t=2$, its coordinates are $(1+4,2-2,0+6)=(5,0,6)$. The direction vector is $(2,-1,3)$; doubling it would describe the same line with a rescaled parameter.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Construct a direction from two points and write a vector line.
2. Convert vector form to parametric component equations.
3. Write Cartesian symmetric form without dividing by a zero direction component.
4. Test membership using one common parameter value in every coordinate.

## Why the method works

A line consists of an anchor point plus all real multiples of a nonzero direction vector. Different anchor points or rescaled nonzero directions can describe the same line. A point lies on the line only if one parameter works simultaneously in all components; solving each coordinate with unrelated parameters does not establish membership.

## A contrasting worked route

Through $A=(1,2,0)$ and $B=(3,1,4)$, use direction $B-A=(2,-1,4)$, giving $(x,y,z)=(1,2,0)+t(2,-1,4)$. The point $(5,0,8)$ uses $t=2$ in all three coordinates. The point $(5,0,7)$ fails the third coordinate despite matching the first two.

## Transfer and validation

Cartesian symmetric form needs care when a direction component is zero; write that coordinate as a fixed value instead of dividing by zero. A line equation is not a finite segment unless bounds on the parameter are stated. Check a proposed direction by subtracting the given endpoints.

## Exam lens

Paper 1 style: identify a point and nonzero direction, then substitute one shared parameter across coordinates. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Giving three unrelated parameters for $x$, $y$ and $z$ describes a region rather than one line. Use the same $t$.

## Try it yourself

Give a vector equation for the line through $(0,1,2)$ parallel to $(1,0,-1)$.

## Checked answer

$\mathbf r=(0,1,2)+t(1,0,-1)$ for $t\in\mathbb R$.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
