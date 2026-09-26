# Vector product

> **AHL 3.16 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

The vector or cross product of two three-dimensional vectors is perpendicular to both. Its magnitude is the area of their parallelogram. Order controls orientation: swapping inputs reverses the result. This makes it useful for plane normals and geometric area.

## Formula, meaning and conditions

$\mathbf a\times\mathbf b=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1)$ and $|\mathbf a\times\mathbf b|=|\mathbf a||\mathbf b|\sin\theta$. The triangle area is half this magnitude.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 6 (PDF p. 8), lists vector product and parallelogram area under AHL 3.16. Derive and justify all other steps and conditions.

## Worked example

Let $\mathbf a=(1,0,0)$ and $\mathbf b=(0,1,0)$. Then $\mathbf a\times\mathbf b=(0,0,1)$. Its dot product with either input is zero, confirming perpendicularity, and its magnitude $1$ equals the area of the unit square they span. Reversing the order gives $(0,0,-1)$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compute a vector product with correct component signs.
2. Use its magnitude for parallelogram and triangle area.
3. Check perpendicularity of the result to both input vectors.

## Why the method works

The cross product is perpendicular to the plane spanned by two three-dimensional vectors. Reversing the input order changes its sign but not its magnitude. The magnitude measures the area of their parallelogram because it equals $|\mathbf u||\mathbf v|\sin\theta$. Half that area belongs to the triangle made by the same sides.

## A contrasting worked route

For $\mathbf u=(1,0,0)$ and $\mathbf v=(0,2,0)$, $\mathbf u\times\mathbf v=(0,0,2)$. Their parallelogram area is $2$, and their triangle area is $1$. Reversing the vectors gives $(0,0,-2)$; both possible normals have the same length and are orthogonal to each input.

## Transfer and validation

Parallel vectors have zero cross product and zero spanned area, not an undefined result. For a more complex component calculation, take dot products of your answer with each original vector as a quick diagnostic. Use the resulting normal to construct a plane equation.

## Exam lens

Paper 1 style: check orientation and use a dot product to verify the computed normal. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

The cross product is not commutative: $\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a$.

## Try it yourself

Find $(2,0,0)\times(0,3,0)$ and its magnitude.

## Checked answer

$(0,0,6)$, magnitude $6$.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
