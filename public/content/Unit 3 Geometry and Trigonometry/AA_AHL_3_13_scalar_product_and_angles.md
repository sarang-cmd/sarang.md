# Scalar product and angles

> **AHL 3.13 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- compute the scalar (dot) product of two vectors in component form and from magnitudes and the included angle;
- state and use the properties of the scalar product, including $\mathbf{v}\cdot\mathbf{v}=|\mathbf{v}|^{2}$ and distributivity;
- find the angle between two vectors, and decide whether it is acute, right or obtuse from the sign of the product;
- use the scalar product to test whether vectors, lines or sides of a figure are perpendicular;
- find unknown components given a perpendicularity or angle condition;
- find the angles of a triangle in two or three dimensions from the coordinates of its vertices, and its area;
- find the scalar and vector projection of one vector onto another;
- prove geometric results using the scalar product;
- compute work done by a force as a scalar product.

## Why this topic matters

Addition and scalar multiples of vectors tell you how to move; they do not tell you how vectors are *oriented* to each other. How do you find the angle between two arrows in space when you cannot place a protractor on them? How do you prove that two lines in three dimensions meet at a right angle? How much of a force is actually pushing an object along a track? The scalar product answers all of these with one operation that turns two vectors into one number: $\mathbf{a}\cdot\mathbf{b}$. It has two equivalent forms. In components, it is a simple sum of products, easy to compute. Geometrically, it equals $|\mathbf{a}||\mathbf{b}|\cos\theta$, which links it to the angle. Equating the two gives the angle formula and the test for perpendicularity: the dot product is zero exactly when the vectors are at right angles. This is the most important single fact of the chapter, and it is used constantly in the later chapters of Unit 3, in the equation of a plane (AHL 3.17), in distances from a point to a line or plane, and in the geometry of complex numbers. For the examination, this topic produces reliable marks: a typical question gives coordinates of three points and asks for an angle of a triangle, or an unknown that makes two vectors perpendicular. The challenges are accurate arithmetic with negative components and correct handling of the vectors' directions (the angle between $\overrightarrow{AB}$ and $\overrightarrow{AC}$ is at $A$, but the angle between $\overrightarrow{AB}$ and $\overrightarrow{BC}$ is not an interior angle of the triangle). This chapter builds the definitions and then the standard patterns with careful checking.

## Core ideas

### Definition in components

For $\mathbf{a}=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$, the scalar product is
$$
\mathbf{a}\cdot\mathbf{b}=a_1b_1+a_2b_2+a_3b_3.
$$
In two dimensions, omit the third term. The result is a *number* (a scalar), not a vector. Write the dot explicitly: $\mathbf{a}\cdot\mathbf{b}$, never $\mathbf{a}\mathbf{b}$ or $\mathbf{a}\times\mathbf{b}$ (the cross product is a different operation, AHL 3.16).

### The geometric form

If $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$, where both are drawn from the same point and $0\le\theta\le\pi$, then
$$
\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}||\mathbf{b}|\cos\theta.
$$
This is the formula-booklet definition. Where it comes from: place $\mathbf{a}$ and $\mathbf{b}$ at a common point, and consider the triangle formed with third side $\mathbf{b}-\mathbf{a}$. The cosine rule (SL 3.2) gives $|\mathbf{b}-\mathbf{a}|^{2}=|\mathbf{a}|^{2}+|\mathbf{b}|^{2}-2|\mathbf{a}||\mathbf{b}|\cos\theta$. Expanding the left side in components gives $|\mathbf{a}|^{2}+|\mathbf{b}|^{2}-2(a_1b_1+a_2b_2+a_3b_3)$. Comparing, the component sum equals $|\mathbf{a}||\mathbf{b}|\cos\theta$. So the two forms agree.

### Properties

- Commutative: $\mathbf{a}\cdot\mathbf{b}=\mathbf{b}\cdot\mathbf{a}$.
- Distributive: $\mathbf{a}\cdot(\mathbf{b}+\mathbf{c})=\mathbf{a}\cdot\mathbf{b}+\mathbf{a}\cdot\mathbf{c}$.
- Scalar multiples: $(\lambda\mathbf{a})\cdot\mathbf{b}=\lambda(\mathbf{a}\cdot\mathbf{b})$.
- Magnitude: $\mathbf{a}\cdot\mathbf{a}=|\mathbf{a}|^{2}$, so $|\mathbf{a}|=\sqrt{\mathbf{a}\cdot\mathbf{a}}$ (this is the angle $\theta=0$ case of the geometric form).
- Basis vectors: $\mathbf{i}\cdot\mathbf{i}=\mathbf{j}\cdot\mathbf{j}=\mathbf{k}\cdot\mathbf{k}=1$ and $\mathbf{i}\cdot\mathbf{j}=\mathbf{j}\cdot\mathbf{k}=\mathbf{i}\cdot\mathbf{k}=0$.

There is no "associative" law: $(\mathbf{a}\cdot\mathbf{b})\cdot\mathbf{c}$ is meaningless because $\mathbf{a}\cdot\mathbf{b}$ is a scalar. And $\mathbf{a}\cdot\mathbf{b}=\mathbf{a}\cdot\mathbf{c}$ does *not* imply $\mathbf{b}=\mathbf{c}$ (cancellation fails).

### Angle between vectors

Rearranging the geometric form,
$$
\cos\theta=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|},\qquad\theta=\cos^{-1}\left(\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\right).
$$
The inverse cosine returns a value in $[0,\pi]$ (AHL 3.11), which is exactly the range of angles between two vectors, so no quadrant adjustment is needed. The sign of the dot product tells you the type of angle: $\mathbf{a}\cdot\mathbf{b}>0$ means acute, $=0$ means a right angle, and $<0$ means obtuse. Thus a quick sign check catches many arithmetic errors.

### Perpendicular and parallel vectors

Two non-zero vectors are **perpendicular** if and only if $\mathbf{a}\cdot\mathbf{b}=0$. They are **parallel** if $\mathbf{a}=\lambda\mathbf{b}$, in which case $\cos\theta=\pm1$ and $|\mathbf{a}\cdot\mathbf{b}|=|\mathbf{a}||\mathbf{b}|$. Always use the dot product for perpendicularity and the scalar-multiple test for parallelism; do not confuse the two.

### Angles in a triangle

To find the angle at vertex $A$ in triangle $ABC$, use the vectors that *leave* $A$: $\overrightarrow{AB}$ and $\overrightarrow{AC}$. Both start at $A$, so the angle between them is the interior angle. To find the angle at $B$ use $\overrightarrow{BA}$ and $\overrightarrow{BC}$. A common error is using $\overrightarrow{AB}$ and $\overrightarrow{BC}$, one arriving and one leaving $B$, which gives the *exterior* angle $\pi-B$. The angles of a triangle sum to $180^{\circ}$, which is a check. The area is $\dfrac12|\overrightarrow{AB}||\overrightarrow{AC}|\sin A$ (SL 3.2), where $\sin A$ is found from $\cos A$ by $\sin A=\sqrt{1-\cos^{2}A}$ (positive, as $A\in(0,\pi)$).

### Projections

The **scalar projection** of $\mathbf{a}$ onto $\mathbf{b}$ is $\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{b}|}=|\mathbf{a}|\cos\theta$, the signed length of the "shadow" of $\mathbf{a}$ on the line of $\mathbf{b}$. The **vector projection** is $\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{b}|^{2}}\mathbf{b}$. The part of $\mathbf{a}$ perpendicular to $\mathbf{b}$ is $\mathbf{a}$ minus the projection. (Projections are a natural extension of the scalar product, useful for distances from a point to a line in AHL 3.14 to 3.18, though the syllabus emphasises the angle and perpendicularity uses.)

### Unknowns from conditions

Perpendicularity gives a linear equation in the unknown components, because $\mathbf{a}\cdot\mathbf{b}=0$ is linear. An angle condition gives an equation in $\cos\theta$ and often involves a square root; square both sides carefully and check the sign of the dot product (which must match the type of angle) to reject extraneous solutions.

### Vector proofs with the dot product

Replace "perpendicular" by "dot product zero" and expand using the distributive law. Standard results: $(\mathbf{a}+\mathbf{b})\cdot(\mathbf{a}-\mathbf{b})=|\mathbf{a}|^{2}-|\mathbf{b}|^{2}$, and $|\mathbf{a}+\mathbf{b}|^{2}=|\mathbf{a}|^{2}+2\mathbf{a}\cdot\mathbf{b}+|\mathbf{b}|^{2}$. The first shows that the diagonals of a rhombus (equal adjacent sides) are perpendicular; the second is the cosine rule in vector form.

### Work done

The work done by a constant force $\mathbf{F}$ acting through a displacement $\mathbf{d}$ is $W=\mathbf{F}\cdot\mathbf{d}=|\mathbf{F}||\mathbf{d}|\cos\theta$. If the force is perpendicular to the motion, no work is done.

## Worked examples

### Example 1 (angle between vectors, 6 marks)

Find the angle between $\mathbf{a}=\begin{pmatrix}2\\-1\\3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}4\\5\\-2\end{pmatrix}$.

*Solution.* $\mathbf{a}\cdot\mathbf{b}=8-5-6=-3$. $|\mathbf{a}|=\sqrt{14}$ and $|\mathbf{b}|=\sqrt{45}$. So $\cos\theta=\dfrac{-3}{\sqrt{14}\sqrt{45}}=-0.1195$ and $\theta=96.9^{\circ}$.

Check: the dot product is negative, so the angle is obtuse ✓.

### Example 2 (perpendicular vectors, 4 marks)

Find $k$ so that $\begin{pmatrix}k\\2\\-1\end{pmatrix}$ and $\begin{pmatrix}3\\k\\4\end{pmatrix}$ are perpendicular.

*Solution.* $3k+2k-4=0$, so $5k=4$ and $k=\dfrac45$.

### Example 3 (angles of a triangle, 9 marks)

$A=(1,2,3)$, $B=(3,-1,4)$ and $C=(2,4,-1)$. Find the angles of triangle $ABC$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}2\\-3\\1\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}1\\2\\-4\end{pmatrix}$. $\overrightarrow{AB}\cdot\overrightarrow{AC}=2-6-4=-8$. $|\overrightarrow{AB}|=\sqrt{14}$, $|\overrightarrow{AC}|=\sqrt{21}$. So $\cos A=\dfrac{-8}{\sqrt{294}}=-0.4666$ and $A=117.8^{\circ}$.

At $B$: $\overrightarrow{BA}=\begin{pmatrix}-2\\3\\-1\end{pmatrix}$ and $\overrightarrow{BC}=\begin{pmatrix}-1\\5\\-5\end{pmatrix}$. The dot product is $2+15+5=22$, $|\overrightarrow{BC}|=\sqrt{51}$, so $\cos B=\dfrac{22}{\sqrt{14}\sqrt{51}}=0.8233$ and $B=34.6^{\circ}$.

Then $C=180^{\circ}-117.8^{\circ}-34.6^{\circ}=27.6^{\circ}$.

Check $C$ directly: $\overrightarrow{CA}=\begin{pmatrix}-1\\-2\\4\end{pmatrix}$ and $\overrightarrow{CB}=\begin{pmatrix}1\\-5\\5\end{pmatrix}$, dot product $-1+10+20=29$, $\cos C=\dfrac{29}{\sqrt{21}\sqrt{51}}=0.886$ and $C=27.6^{\circ}$ ✓.

### Example 4 (area of the triangle, 5 marks)

Find the area of triangle $ABC$ from Example 3.

*Solution.* $\cos A=-\dfrac8{\sqrt{294}}$, so $\sin^{2}A=1-\dfrac{64}{294}=\dfrac{230}{294}$. The area is $\dfrac12\sqrt{14}\sqrt{21}\sin A=\dfrac12\sqrt{294}\cdot\sqrt{\dfrac{230}{294}}=\dfrac12\sqrt{230}=7.58$ square units.

### Example 5 (projections, 5 marks)

Find the scalar and vector projections of $\mathbf{a}=\begin{pmatrix}2\\3\\6\end{pmatrix}$ onto $\mathbf{b}=\begin{pmatrix}1\\2\\2\end{pmatrix}$.

*Solution.* $\mathbf{a}\cdot\mathbf{b}=2+6+12=20$ and $|\mathbf{b}|=3$. The scalar projection is $\dfrac{20}3$. The vector projection is $\dfrac{20}{9}\begin{pmatrix}1\\2\\2\end{pmatrix}=\begin{pmatrix}20/9\\40/9\\40/9\end{pmatrix}$.

### Example 6 (a rhombus, 5 marks)

$OABC$ is a rhombus with $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OC}=\mathbf{c}$, so $|\mathbf{a}|=|\mathbf{c}|$. Prove that the diagonals $OB$ and $AC$ are perpendicular.

*Proof.* $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$ and $\overrightarrow{AC}=\mathbf{c}-\mathbf{a}$. Then $\overrightarrow{OB}\cdot\overrightarrow{AC}=(\mathbf{a}+\mathbf{c})\cdot(\mathbf{c}-\mathbf{a})=|\mathbf{c}|^{2}-|\mathbf{a}|^{2}=0$, so the diagonals are perpendicular. $\blacksquare$

### Example 7 (the angle in a semicircle, 6 marks)

$A$ and $B$ are the ends of a diameter of a circle with centre $O$, and $P$ is any other point on the circle. Prove that $\angle APB=90^{\circ}$.

*Proof.* Let $\overrightarrow{OA}=\mathbf{a}$, so $\overrightarrow{OB}=-\mathbf{a}$ and let $\overrightarrow{OP}=\mathbf{p}$ with $|\mathbf{p}|=|\mathbf{a}|$ (the radius). Then $\overrightarrow{PA}=\mathbf{a}-\mathbf{p}$ and $\overrightarrow{PB}=-\mathbf{a}-\mathbf{p}$. The product is $(\mathbf{a}-\mathbf{p})\cdot(-\mathbf{a}-\mathbf{p})=-|\mathbf{a}|^{2}-\mathbf{a}\cdot\mathbf{p}+\mathbf{p}\cdot\mathbf{a}+|\mathbf{p}|^{2}=|\mathbf{p}|^{2}-|\mathbf{a}|^{2}=0$. So $PA\perp PB$. $\blacksquare$

### Example 8 (angle in two dimensions, 4 marks)

Find the angle between $\begin{pmatrix}3\\4\end{pmatrix}$ and $\begin{pmatrix}5\\12\end{pmatrix}$.

*Solution.* The dot product is $15+48=63$ and the magnitudes are $5$ and $13$, so $\cos\theta=\dfrac{63}{65}$ and $\theta=14.3^{\circ}$.

### Example 9 (a simple angle, 4 marks)

Find the angle between $\mathbf{i}+\mathbf{j}$ and $\mathbf{j}+\mathbf{k}$.

*Solution.* The dot product is $0+1+0=1$ and each magnitude is $\sqrt2$, so $\cos\theta=\dfrac12$ and $\theta=60^{\circ}$.

### Example 10 (an unknown from perpendicularity, 4 marks)

Find $k$ such that $\begin{pmatrix}2\\-1\\k\end{pmatrix}$ is perpendicular to $\begin{pmatrix}1\\3\\2\end{pmatrix}$.

*Solution.* $2-3+2k=0$, so $k=\dfrac12$.

### Example 11 (the cosine rule in vector form, 5 marks)

Given $|\mathbf{a}|=3$, $|\mathbf{b}|=5$ and the angle between them is $60^{\circ}$, find $|\mathbf{a}+\mathbf{b}|$.

*Solution.* $\mathbf{a}\cdot\mathbf{b}=3\cdot5\cos60^{\circ}=7.5$. Then $|\mathbf{a}+\mathbf{b}|^{2}=9+2(7.5)+25=49$, so $|\mathbf{a}+\mathbf{b}|=7$.

### Example 12 (work done, 3 marks)

A force $\mathbf{F}=\begin{pmatrix}4\\-2\\5\end{pmatrix}$ N moves an object through $\mathbf{d}=\begin{pmatrix}3\\1\\2\end{pmatrix}$ m. Find the work done.

*Solution.* $W=\mathbf{F}\cdot\mathbf{d}=12-2+10=20$ J.

### Example 13 (a right-angled triangle, 5 marks)

Show that the triangle with vertices $A(1,0,2)$, $B(3,1,0)$ and $C(3,-2,3)$ has a right angle at $A$, and find its area.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}2\\1\\-2\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}2\\-2\\1\end{pmatrix}$. The dot product is $4-2-2=0$, so the angle at $A$ is $90^{\circ}$. $|\overrightarrow{AB}|=3$ and $|\overrightarrow{AC}|=3$, so the area is $\dfrac12\cdot3\cdot3=4.5$.

Check with Pythagoras: $\overrightarrow{BC}=\begin{pmatrix}0\\-3\\3\end{pmatrix}$ and $|BC|^{2}=18=9+9$ ✓.

### Example 14 (a common error exposed, 4 marks)

For $A(0,0)$, $B(4,0)$ and $C(6,3)$, find the interior angle at $B$, and explain what $\overrightarrow{AB}$ with $\overrightarrow{BC}$ would give.

*Solution.* The interior angle uses $\overrightarrow{BA}=\begin{pmatrix}-4\\0\end{pmatrix}$ and $\overrightarrow{BC}=\begin{pmatrix}2\\3\end{pmatrix}$. The dot product is $-8$ and the magnitudes are $4$ and $\sqrt{13}$, so $\cos B=\dfrac{-8}{4\sqrt{13}}=-0.5547$ and $B=123.7^{\circ}$. The vectors $\overrightarrow{AB}=\begin{pmatrix}4\\0\end{pmatrix}$ and $\overrightarrow{BC}$ have dot product $+8$ and would give $\cos^{-1}(0.5547)=56.3^{\circ}$, the exterior angle, since $180^{\circ}-123.7^{\circ}=56.3^{\circ}$.

## Using your GDC

Many GDCs have a built-in dot product function for vectors entered as matrices, and a norm function. Use them to avoid arithmetic slips with long numbers, but write the main steps (dot product, magnitudes, the fraction) so that method marks are available. Use the inverse cosine key in degree mode for an angle in degrees (or radian mode if the answer is requested in radians). To check an angle, compute all three angles of a triangle and verify the sum is $180^{\circ}$. For the area, compute $\dfrac12|\overrightarrow{AB}||\overrightarrow{AC}|\sin A$ directly. If the value of $\cos\theta$ turns out larger than $1$ in absolute value, there is an arithmetic error, since $|\cos\theta|\le1$ by the Cauchy-Schwarz inequality $|\mathbf{a}\cdot\mathbf{b}|\le|\mathbf{a}||\mathbf{b}|$. Menu names vary by model. Store intermediate values in memory instead of re-typing.

## Common mistakes

1. **Producing a vector** as the scalar product (multiplying components but not adding).
2. **Using $\overrightarrow{AB}$ and $\overrightarrow{BC}$** for the angle at $B$, which gives the exterior angle.
3. **Sign errors** with negative components in the dot product.
4. **Forgetting the magnitudes** in the denominator, or dropping the square roots.
5. **Using the dot product to test parallel vectors**, or the scalar multiple test for perpendicular vectors.
6. **Concluding $\mathbf{b}=\mathbf{c}$** from $\mathbf{a}\cdot\mathbf{b}=\mathbf{a}\cdot\mathbf{c}$.
7. **Calculator in the wrong mode** for $\cos^{-1}$.
8. **Ignoring the sign** of the dot product: a positive product cannot give an obtuse angle.

## Exam technique and command terms

**Find the angle** requires the formula, the numerical dot product, the magnitudes and the final angle with unit and accuracy ($3$ significant figures unless otherwise stated). **Show that the vectors are perpendicular** needs the dot product equal to $0$ shown explicitly, and the statement "hence perpendicular". **Hence** often links the dot product to an area or to a distance. **Prove** needs the vector identities, not coordinates, if the statement is general.

State which vectors you use: "angle $ABC$ is the angle between $\overrightarrow{BA}$ and $\overrightarrow{BC}$". If the angle between two *lines* is requested, use their direction vectors, and give the acute angle unless the question says otherwise (if $\cos\theta<0$, the acute angle is $180^{\circ}-\theta$). In unknown-component questions, write the dot product equation first and solve. When a question mentions an acute or obtuse angle, use the sign of $\mathbf{a}\cdot\mathbf{b}$ to select the right solution. In proofs, expand the products explicitly using the distributive law and the fact that $\mathbf{a}\cdot\mathbf{a}=|\mathbf{a}|^{2}$.

## Connections

AHL 3.12 supplied vectors, magnitudes and parallel vectors, which are the objects of this chapter. SL 3.2 gave the cosine rule and the area formula, which are the geometric basis of the scalar product and the triangle-area step. AHL 3.11 provided the range of $\cos^{-1}$, and AHL 3.10 the compound-angle identity $\cos(A-B)$ from which the component form can also be derived. In AHL 3.14 and 3.15 the angle between two lines is the angle between their direction vectors, and the shortest distance from a point to a line uses perpendicularity. In AHL 3.16 the vector product gives a vector perpendicular to two others, and in AHL 3.17 the equation of a plane $\mathbf{r}\cdot\mathbf{n}=\mathbf{a}\cdot\mathbf{n}$ uses the normal vector and the scalar product directly. In AHL 3.18 the angle between a line and a plane or between two planes uses the angle between normal and direction vectors. In AHL 1.12 and 1.14, the real part of $z\bar{w}$ is the scalar product of the corresponding vectors. In Unit 5, in kinematics, work and the component of acceleration along a path are scalar products.

## Check your understanding

1. Find the angle between $\begin{pmatrix}1\\2\\-2\end{pmatrix}$ and $\begin{pmatrix}3\\-4\\0\end{pmatrix}$.
2. Find $k$ so that $\begin{pmatrix}k\\-3\\2\end{pmatrix}$ and $\begin{pmatrix}2\\k\\-4\end{pmatrix}$ are perpendicular.
3. Find the angle between $\begin{pmatrix}2\\1\\-1\end{pmatrix}$ and $\begin{pmatrix}1\\-1\\2\end{pmatrix}$.
4. Show that the triangle $P(1,1,1)$, $Q(4,1,5)$, $R(1,6,1)$ has a right angle at $P$, and find its area.
5. Prove that $|\mathbf{a}+\mathbf{b}|^{2}+|\mathbf{a}-\mathbf{b}|^{2}=2|\mathbf{a}|^{2}+2|\mathbf{b}|^{2}$.
6. Given $|\mathbf{a}|=4$, $|\mathbf{b}|=6$ and the angle between them is $120^{\circ}$, find $|\mathbf{a}+\mathbf{b}|$ and $|\mathbf{a}-\mathbf{b}|$.
7. Find the two unit vectors in the plane perpendicular to $\begin{pmatrix}3\\4\end{pmatrix}$.
8. A force $\begin{pmatrix}2\\-1\\4\end{pmatrix}$ N moves an object through $\begin{pmatrix}5\\3\\-1\end{pmatrix}$ m. Find the work done.
9. For $A(2,0,1)$, $B(1,2,3)$ and $C(4,1,0)$, find angle $ABC$.
10. Find the values of $k$ for which the angle between $\begin{pmatrix}1\\1\\k\end{pmatrix}$ and $\begin{pmatrix}1\\0\\0\end{pmatrix}$ is $60^{\circ}$.

### Answers

1. The dot product is $3-8+0=-5$; $|\mathbf{a}|=3$ and $|\mathbf{b}|=5$. $\cos\theta=-\dfrac13$, so $\theta=109.5^{\circ}$.
2. $2k-3k-8=0$, so $-k=8$ and $k=-8$.
3. The dot product is $2-1-2=-1$ and each magnitude is $\sqrt6$, so $\cos\theta=-\dfrac16$ and $\theta=99.6^{\circ}$.
4. $\overrightarrow{PQ}=\begin{pmatrix}3\\0\\4\end{pmatrix}$ and $\overrightarrow{PR}=\begin{pmatrix}0\\5\\0\end{pmatrix}$. The dot product is $0$, so the angle at $P$ is $90^{\circ}$. $|PQ|=5$ and $|PR|=5$, so the area is $\dfrac12\cdot5\cdot5=12.5$.
5. $|\mathbf{a}+\mathbf{b}|^{2}=|\mathbf{a}|^{2}+2\mathbf{a}\cdot\mathbf{b}+|\mathbf{b}|^{2}$ and $|\mathbf{a}-\mathbf{b}|^{2}=|\mathbf{a}|^{2}-2\mathbf{a}\cdot\mathbf{b}+|\mathbf{b}|^{2}$. Adding, the cross terms cancel. $\blacksquare$
6. $\mathbf{a}\cdot\mathbf{b}=24\cos120^{\circ}=-12$. $|\mathbf{a}+\mathbf{b}|^{2}=16-24+36=28$, so $|\mathbf{a}+\mathbf{b}|=\sqrt{28}=2\sqrt7=5.29$. $|\mathbf{a}-\mathbf{b}|^{2}=16+24+36=76$, so $|\mathbf{a}-\mathbf{b}|=\sqrt{76}=2\sqrt{19}=8.72$.
7. A perpendicular vector is $\begin{pmatrix}-4\\3\end{pmatrix}$ (dot product $-12+12=0$) with magnitude $5$. The unit vectors are $\pm\dfrac15\begin{pmatrix}-4\\3\end{pmatrix}$.
8. $W=10-3-4=3$ J.
9. $\overrightarrow{BA}=\begin{pmatrix}1\\-2\\-2\end{pmatrix}$ and $\overrightarrow{BC}=\begin{pmatrix}3\\-1\\-3\end{pmatrix}$. The dot product is $3+2+6=11$, $|\overrightarrow{BA}|=3$, $|\overrightarrow{BC}|=\sqrt{19}$. $\cos B=\dfrac{11}{3\sqrt{19}}=0.841$ and $B=32.7^{\circ}$.
10. $\cos60^{\circ}=\dfrac{1}{\sqrt{2+k^{2}}}=\dfrac12$, so $2+k^{2}=4$ and $k=\pm\sqrt2$.

## Summary

- $\mathbf{a}\cdot\mathbf{b}=a_1b_1+a_2b_2+a_3b_3=|\mathbf{a}||\mathbf{b}|\cos\theta$; the result is a scalar.
- Properties: commutative, distributive, $\mathbf{a}\cdot\mathbf{a}=|\mathbf{a}|^{2}$; no cancellation.
- Angle: $\cos\theta=\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$, with $0\le\theta\le\pi$; the sign of the product tells acute, right or obtuse.
- Perpendicular if and only if $\mathbf{a}\cdot\mathbf{b}=0$; parallel if one is a scalar multiple of the other.
- Triangle angles use vectors leaving the vertex; the area is $\dfrac12|\overrightarrow{AB}||\overrightarrow{AC}|\sin A$.
- Projection of $\mathbf{a}$ on $\mathbf{b}$: scalar $\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{b}|}$, vector $\dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{b}|^{2}}\mathbf{b}$; work done $W=\mathbf{F}\cdot\mathbf{d}$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 6 (PDF p. 8), lists scalar product and angle between vectors under AHL 3.13. Derive and justify all other steps and conditions.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
