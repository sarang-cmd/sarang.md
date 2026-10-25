# Vector product

> **AHL 3.16 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- compute the vector (cross) product $\mathbf{a}\times\mathbf{b}$ from components, and state its magnitude and direction;
- use the formula $|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta$ and the right-hand rule;
- state and use the properties: anti-commutativity, distributivity, $\mathbf{a}\times\mathbf{a}=\mathbf{0}$ and the parallel test;
- find a vector (and a unit vector) perpendicular to two given vectors;
- find the area of a parallelogram and of a triangle given by vectors or by three points;
- find the distance from a point to a line, and the shortest distance between two skew lines, using the vector product;
- find the equation of the normal to a plane through three points (preparing AHL 3.17);
- apply the vector product to moments (torque) and other physical contexts;
- distinguish clearly between the scalar and the vector product, and know which to use for which task.

## Why this topic matters

The scalar product (AHL 3.13) takes two vectors and returns a number which measures how much they point in the same direction. It is the right tool for perpendicularity and angles. But suppose you want something different: given two vectors in three dimensions, find a *third vector that is perpendicular to both of them*. This arises constantly. The normal to a plane is perpendicular to every direction in the plane, so given two directions in a plane we need the normal (AHL 3.17). The common perpendicular of two skew lines is perpendicular to both direction vectors (AHL 3.15). The axis of a rotation, the direction of the magnetic force on a moving charge, and the lighting calculation in computer graphics, all need a vector perpendicular to two given ones. The vector product $\mathbf{a}\times\mathbf{b}$ does exactly that, and its length has a bonus meaning: it equals the area of the parallelogram spanned by $\mathbf{a}$ and $\mathbf{b}$. This makes the product a compact tool for areas of triangles in space, where the base-and-height method is awkward, and for distances from a point to a line. In the examination, the vector product appears in HL Paper 2 and Paper 3 in two types of question: the computational type (find $\mathbf{a}\times\mathbf{b}$ and use it for an area or a normal) and the structured type, where it is one step in finding the equation of a plane or a shortest distance. It is only defined in three dimensions. The computation involves a pattern of signs that must be learned precisely, and it is easy to make an arithmetic slip, so a verification (dot the result with each original vector to get zero) should become a habit.

## Core ideas

### Definition in components

For $\mathbf{a}=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$,
$$
\mathbf{a}\times\mathbf{b}=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}.
$$
A memory device is the determinant pattern: cover the column you are computing, and take the cross-difference of the other two entries, with the middle component sign reversed (which the formula above does by writing $a_3b_1-a_1b_3$). The first component uses rows $2$ and $3$, the second uses rows $3$ and $1$ (cyclic), and the third uses rows $1$ and $2$. The result is a vector, so the symbol is a cross: $\mathbf{a}\times\mathbf{b}$, never a dot.

### Magnitude and direction

The vector $\mathbf{a}\times\mathbf{b}$ has:

- **magnitude** $|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta$, where $\theta\in[0,\pi]$ is the angle between $\mathbf{a}$ and $\mathbf{b}$;
- **direction** perpendicular to both $\mathbf{a}$ and $\mathbf{b}$, given by the **right-hand rule**: if the fingers of the right hand curl from $\mathbf{a}$ towards $\mathbf{b}$ (through the smaller angle), the thumb points along $\mathbf{a}\times\mathbf{b}$.

For the standard basis, $\mathbf{i}\times\mathbf{j}=\mathbf{k}$, $\mathbf{j}\times\mathbf{k}=\mathbf{i}$ and $\mathbf{k}\times\mathbf{i}=\mathbf{j}$, and reversing the order changes the sign. Since $\sin\theta\ge0$ for $\theta$ in $[0,\pi]$, the magnitude is never negative. Contrast with the scalar product: the scalar product uses $\cos\theta$ and is $0$ for perpendicular vectors; the vector product uses $\sin\theta$ and is $\mathbf{0}$ for *parallel* vectors. A useful identity linking the two (Lagrange) is
$$
|\mathbf{a}\times\mathbf{b}|^{2}+(\mathbf{a}\cdot\mathbf{b})^{2}=|\mathbf{a}|^{2}|\mathbf{b}|^{2},
$$
which is just $\sin^{2}\theta+\cos^{2}\theta=1$ multiplied by $|\mathbf{a}|^{2}|\mathbf{b}|^{2}$.

### Properties

- **Anti-commutative:** $\mathbf{a}\times\mathbf{b}=-\mathbf{b}\times\mathbf{a}$. (The order matters!)
- **Distributive:** $\mathbf{a}\times(\mathbf{b}+\mathbf{c})=\mathbf{a}\times\mathbf{b}+\mathbf{a}\times\mathbf{c}$.
- **Scalar multiples:** $(\lambda\mathbf{a})\times\mathbf{b}=\lambda(\mathbf{a}\times\mathbf{b})$.
- **Self-product:** $\mathbf{a}\times\mathbf{a}=\mathbf{0}$.
- **Parallel test:** for non-zero vectors, $\mathbf{a}\times\mathbf{b}=\mathbf{0}$ if and only if $\mathbf{a}$ and $\mathbf{b}$ are parallel.
- **Perpendicularity:** $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}=0$ and $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{b}=0$.
- **Not associative:** $(\mathbf{a}\times\mathbf{b})\times\mathbf{c}$ is generally different from $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$.

### A vector perpendicular to two vectors

If $\mathbf{a}$ and $\mathbf{b}$ are not parallel, then $\mathbf{n}=\mathbf{a}\times\mathbf{b}$ is perpendicular to both. Any non-zero multiple is also perpendicular to both (so cancel a common factor to simplify), and a unit vector is $\hat{\mathbf{n}}=\dfrac{\mathbf{a}\times\mathbf{b}}{|\mathbf{a}\times\mathbf{b}|}$ or its negative. *Always verify* by computing $\mathbf{n}\cdot\mathbf{a}=0$ and $\mathbf{n}\cdot\mathbf{b}=0$.

### Areas

The parallelogram with adjacent sides $\mathbf{a}$ and $\mathbf{b}$ has area
$$
A=|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta,
$$
because base $|\mathbf{a}|$ times height $|\mathbf{b}|\sin\theta$ is the area. A triangle with two sides $\overrightarrow{AB}$ and $\overrightarrow{AC}$ has area
$$
\text{Area}=\tfrac12|\overrightarrow{AB}\times\overrightarrow{AC}|.
$$
This is far more efficient than finding an angle and applying $\dfrac12ab\sin C$, and it works in three dimensions without any angle calculation. The *height* of the triangle from $C$ onto the line $AB$ is $\dfrac{|\overrightarrow{AB}\times\overrightarrow{AC}|}{|\overrightarrow{AB}|}$.

### Distance from a point to a line

For the line $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$ and a point $P$, let $A$ be the point with position vector $\mathbf{a}$. The distance from $P$ to the line is the height of the parallelogram built on $\overrightarrow{AP}$ and $\mathbf{d}$ over the base $|\mathbf{d}|$:
$$
\text{distance}=\frac{|\overrightarrow{AP}\times\mathbf{d}|}{|\mathbf{d}|}.
$$
This avoids finding the foot of the perpendicular, though the foot is still needed if the question asks for it.

### Distance between skew lines

For lines $\mathbf{r}=\mathbf{a}_1+\lambda\mathbf{d}_1$ and $\mathbf{r}=\mathbf{a}_2+\mu\mathbf{d}_2$ that are not parallel, the common perpendicular direction is $\mathbf{n}=\mathbf{d}_1\times\mathbf{d}_2$, and the shortest distance is the length of the projection of $\mathbf{a}_2-\mathbf{a}_1$ onto $\mathbf{n}$:
$$
\text{distance}=\frac{|(\mathbf{a}_2-\mathbf{a}_1)\cdot\mathbf{n}|}{|\mathbf{n}|}.
$$
If this is $0$, the lines intersect. (This formula goes slightly beyond the examination requirements, but it follows directly from the properties above and equals the answer found by the perpendicularity method of AHL 3.15.)

### The normal to a plane through three points

If $A$, $B$, $C$ are non-collinear points, the plane through them contains the directions $\overrightarrow{AB}$ and $\overrightarrow{AC}$, so $\mathbf{n}=\overrightarrow{AB}\times\overrightarrow{AC}$ is a normal vector to the plane. The plane's Cartesian equation then follows in AHL 3.17: $\mathbf{n}\cdot\mathbf{r}=\mathbf{n}\cdot\mathbf{a}$.

### Moments and physical uses

The moment (torque) about the origin of a force $\mathbf{F}$ acting at the point with position vector $\mathbf{r}$ is $\mathbf{M}=\mathbf{r}\times\mathbf{F}$; its magnitude is $|\mathbf{r}||\mathbf{F}|\sin\theta$, the force times the perpendicular distance to the line of action. The direction is the axis of the turning effect. Magnetic force on a charge $q$ moving with velocity $\mathbf{v}$ in field $\mathbf{B}$ is $q\,\mathbf{v}\times\mathbf{B}$.

### Scalar triple product (extension)

For three vectors, $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ is a number whose absolute value is the volume of the parallelepiped on $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$. If it is $0$ the three vectors are coplanar. This is an extension to the syllabus, but it is a direct application of the two products and can help in solid geometry problems.

## Worked examples

### Example 1 (the vector product of two vectors, 5 marks)

Find $\mathbf{a}\times\mathbf{b}$ for $\mathbf{a}=\begin{pmatrix}2\\-1\\3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}1\\4\\-2\end{pmatrix}$, and verify the result.

*Solution.* $\mathbf{a}\times\mathbf{b}=\begin{pmatrix}(-1)(-2)-3\cdot4\\3\cdot1-2\cdot(-2)\\2\cdot4-(-1)\cdot1\end{pmatrix}=\begin{pmatrix}2-12\\3+4\\8+1\end{pmatrix}=\begin{pmatrix}-10\\7\\9\end{pmatrix}$.

Check: $\begin{pmatrix}-10\\7\\9\end{pmatrix}\cdot\mathbf{a}=-20-7+27=0$ ✓ and $\cdot\mathbf{b}=-10+28-18=0$ ✓.

### Example 2 (the area of a triangle, 6 marks)

Find the area of the triangle with $A(1,2,3)$, $B(3,-1,4)$ and $C(2,4,-1)$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}2\\-3\\1\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}1\\2\\-4\end{pmatrix}$. $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}(-3)(-4)-1\cdot2\\1\cdot1-2\cdot(-4)\\2\cdot2-(-3)\cdot1\end{pmatrix}=\begin{pmatrix}10\\9\\7\end{pmatrix}$. The magnitude is $\sqrt{100+81+49}=\sqrt{230}$, so the area is $\dfrac12\sqrt{230}=7.58$ square units.

Check: this agrees with the area found in AHL 3.13 using $\dfrac12|AB||AC|\sin A$ ✓.

### Example 3 (a unit normal, 6 marks)

Find a unit vector perpendicular to both $\mathbf{a}=\begin{pmatrix}1\\2\\3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}0\\1\\-1\end{pmatrix}$.

*Solution.* $\mathbf{a}\times\mathbf{b}=\begin{pmatrix}2(-1)-3\cdot1\\3\cdot0-1\cdot(-1)\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}-5\\1\\1\end{pmatrix}$. The magnitude is $\sqrt{25+1+1}=\sqrt{27}=3\sqrt3$. A unit vector is $\dfrac1{3\sqrt3}\begin{pmatrix}-5\\1\\1\end{pmatrix}$ (the negative of this also works).

### Example 4 (a parallelogram, 5 marks)

$ABCD$ is a parallelogram with $A(0,0,0)$, $B(3,1,2)$ and $D(1,4,-1)$. Find its area.

*Solution.* $\overrightarrow{AB}\times\overrightarrow{AD}=\begin{pmatrix}1(-1)-2\cdot4\\2\cdot1-3(-1)\\3\cdot4-1\cdot1\end{pmatrix}=\begin{pmatrix}-9\\5\\11\end{pmatrix}$. The area is $\sqrt{81+25+121}=\sqrt{227}=15.1$.

### Example 5 (Lagrange's identity, 4 marks)

Verify $|\mathbf{a}\times\mathbf{b}|^{2}+(\mathbf{a}\cdot\mathbf{b})^{2}=|\mathbf{a}|^{2}|\mathbf{b}|^{2}$ for the vectors of Example 1.

*Solution.* $|\mathbf{a}\times\mathbf{b}|^{2}=100+49+81=230$. $\mathbf{a}\cdot\mathbf{b}=2-4-6=-8$, so $(\mathbf{a}\cdot\mathbf{b})^{2}=64$. The sum is $294$. $|\mathbf{a}|^{2}|\mathbf{b}|^{2}=14\times21=294$ ✓.

### Example 6 (the parallel condition, 5 marks)

Find $k$ such that $\mathbf{a}=\begin{pmatrix}1\\2\\k\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}2\\4\\6\end{pmatrix}$ are parallel.

*Solution.* $\mathbf{a}\times\mathbf{b}=\begin{pmatrix}2\cdot6-k\cdot4\\k\cdot2-1\cdot6\\1\cdot4-2\cdot2\end{pmatrix}=\begin{pmatrix}12-4k\\2k-6\\0\end{pmatrix}$. For parallel vectors this must be $\mathbf{0}$, so $k=3$. (Equivalently $\mathbf{b}=2\mathbf{a}$ needs $6=2k$.)

### Example 7 (distance from a point to a line, 6 marks)

Find the distance from $P(4,1,2)$ to the line $\mathbf{r}=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix}$.

*Solution.* $A=(1,0,1)$, so $\overrightarrow{AP}=\begin{pmatrix}3\\1\\1\end{pmatrix}$ and $\mathbf{d}=\begin{pmatrix}1\\2\\2\end{pmatrix}$ with $|\mathbf{d}|=3$. $\overrightarrow{AP}\times\mathbf{d}=\begin{pmatrix}1\cdot2-1\cdot2\\1\cdot1-3\cdot2\\3\cdot2-1\cdot1\end{pmatrix}=\begin{pmatrix}0\\-5\\5\end{pmatrix}$ with magnitude $5\sqrt2$. The distance is $\dfrac{5\sqrt2}3=2.36$.

Check: this agrees with the value found in AHL 3.14 by the perpendicular-foot method ✓.

### Example 8 (the distance between skew lines, 7 marks)

Find the shortest distance between $\mathbf{r}=\lambda\begin{pmatrix}1\\2\\0\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}1\\0\\3\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$.

*Solution.* $\mathbf{n}=\begin{pmatrix}1\\2\\0\end{pmatrix}\times\begin{pmatrix}0\\1\\1\end{pmatrix}=\begin{pmatrix}2\cdot1-0\cdot1\\0\cdot0-1\cdot1\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}2\\-1\\1\end{pmatrix}$, with $|\mathbf{n}|=\sqrt6$. The vector between points is $\begin{pmatrix}1\\0\\3\end{pmatrix}$ and its dot product with $\mathbf{n}$ is $2+0+3=5$. The distance is $\dfrac5{\sqrt6}=2.04$. Since the distance is not zero the lines are skew (they are not parallel, and do not meet).

### Example 9 (the normal to a plane, 6 marks)

Find a vector normal to the plane through $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$, and the area of triangle $ABC$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}-1\\2\\0\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}-1\\0\\3\end{pmatrix}$. The cross product is $\begin{pmatrix}2\cdot3-0\cdot0\\0\cdot(-1)-(-1)\cdot3\\(-1)\cdot0-2\cdot(-1)\end{pmatrix}=\begin{pmatrix}6\\3\\2\end{pmatrix}$. This is a normal. Its magnitude is $\sqrt{36+9+4}=7$, so the area of the triangle is $\dfrac72=3.5$.

Check: $\begin{pmatrix}6\\3\\2\end{pmatrix}\cdot\overrightarrow{AB}=-6+6+0=0$ ✓ and $\cdot\overrightarrow{AC}=-6+0+6=0$ ✓.

### Example 10 (a moment, 5 marks)

A force $\mathbf{F}=\begin{pmatrix}0\\3\\4\end{pmatrix}$ N acts at the point with position $\mathbf{r}=\begin{pmatrix}2\\1\\0\end{pmatrix}$ m. Find the moment about the origin and its magnitude.

*Solution.* $\mathbf{r}\times\mathbf{F}=\begin{pmatrix}1\cdot4-0\cdot3\\0\cdot0-2\cdot4\\2\cdot3-1\cdot0\end{pmatrix}=\begin{pmatrix}4\\-8\\6\end{pmatrix}$ N m. The magnitude is $\sqrt{16+64+36}=\sqrt{116}=10.8$ N m.

### Example 11 (combining the two products to find an angle, 5 marks)

Find the angle between $\mathbf{a}=\begin{pmatrix}1\\0\\0\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}1\\1\\0\end{pmatrix}$ using the vector product, and explain why the scalar product is still needed.

*Solution.* $\mathbf{a}\times\mathbf{b}=\begin{pmatrix}0\\0\\1\end{pmatrix}$ with magnitude $1$, and $|\mathbf{a}||\mathbf{b}|=\sqrt2$. So $\sin\theta=\dfrac1{\sqrt2}$, giving $\theta=45^{\circ}$ or $135^{\circ}$. The sine does not distinguish acute from obtuse angles, so we use the dot product $\mathbf{a}\cdot\mathbf{b}=1>0$, which says the angle is acute: $\theta=45^{\circ}$.

### Example 12 (the basis vectors, 3 marks)

Use the component formula to show $\mathbf{i}\times\mathbf{j}=\mathbf{k}$ and $\mathbf{j}\times\mathbf{i}=-\mathbf{k}$.

*Solution.* $\mathbf{i}=\begin{pmatrix}1\\0\\0\end{pmatrix}$ and $\mathbf{j}=\begin{pmatrix}0\\1\\0\end{pmatrix}$. $\mathbf{i}\times\mathbf{j}=\begin{pmatrix}0\cdot0-0\cdot1\\0\cdot0-1\cdot0\\1\cdot1-0\cdot0\end{pmatrix}=\begin{pmatrix}0\\0\\1\end{pmatrix}=\mathbf{k}$. Swapping the factors changes the sign of every component, so $\mathbf{j}\times\mathbf{i}=-\mathbf{k}$.

### Example 13 (area and height of a triangle, 7 marks)

For $A(1,1,1)$, $B(2,3,4)$ and $C(4,2,0)$, find the area of triangle $ABC$ and the distance from $C$ to the line $AB$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}1\\2\\3\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}3\\1\\-1\end{pmatrix}$. $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}2(-1)-3\cdot1\\3\cdot3-1\cdot(-1)\\1\cdot1-2\cdot3\end{pmatrix}=\begin{pmatrix}-5\\10\\-5\end{pmatrix}$, with magnitude $\sqrt{150}=5\sqrt6$. The area is $\dfrac{5\sqrt6}2=6.12$. The distance from $C$ to $AB$ is $\dfrac{5\sqrt6}{|\overrightarrow{AB}|}=\dfrac{5\sqrt6}{\sqrt{14}}=3.27$.

### Example 14 (collinearity with the vector product, 4 marks)

Show that $A(1,1,0)$, $B(2,3,1)$ and $C(4,7,3)$ are collinear.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}1\\2\\1\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}3\\6\\3\end{pmatrix}$. $\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}2\cdot3-1\cdot6\\1\cdot3-1\cdot3\\1\cdot6-2\cdot3\end{pmatrix}=\begin{pmatrix}0\\0\\0\end{pmatrix}$. The vectors are parallel and share $A$, so the points are collinear (the triangle has zero area).

### Example 15 (the scalar triple product, 4 marks)

Find the volume of the parallelepiped with edges $\mathbf{a}=\begin{pmatrix}1\\0\\0\end{pmatrix}$, $\mathbf{b}=\begin{pmatrix}1\\2\\0\end{pmatrix}$ and $\mathbf{c}=\begin{pmatrix}0\\1\\3\end{pmatrix}$.

*Solution.* $\mathbf{b}\times\mathbf{c}=\begin{pmatrix}2\cdot3-0\cdot1\\0\cdot0-1\cdot3\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}6\\-3\\1\end{pmatrix}$ and $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})=6$. The volume is $6$ cubic units.

## Using your GDC

Some GDCs have a built-in cross product for vectors stored as matrices (a $3\times1$ matrix), as well as a dot product and a norm. Use these to avoid arithmetic errors, but know the component formula, since the method mark requires the working. If your GDC has no cross-product function, compute the three components by hand and use the calculator for the arithmetic of the magnitude. A quick check, which the GDC can do in seconds: compute $\mathbf{n}\cdot\mathbf{a}$ and $\mathbf{n}\cdot\mathbf{b}$, both must be $0$. For area and distance questions, keep exact values (surds) until the final line and then give the decimal to $3$ significant figures. Menu names vary by model.

## Common mistakes

1. **A wrong sign in the middle component**: the second component is $a_3b_1-a_1b_3$ (not $a_1b_3-a_3b_1$).
2. **Reversing the order**, which flips the sign of the result (matters for direction, not for magnitude).
3. **Using a dot product symbol** or writing a number when a vector is required.
4. **Forgetting the $\dfrac12$** in the area of a triangle.
5. **Using the vector product in two dimensions**: it is defined only for three-dimensional vectors (you can embed the plane by setting the third component to $0$).
6. **Failing to check** the perpendicularity of the result with the dot product.
7. **Treating $\mathbf{a}\times\mathbf{b}=\mathbf{0}$ as $\mathbf{a}=\mathbf{0}$ or $\mathbf{b}=\mathbf{0}$**: it also holds when they are parallel.
8. **Using $\sin\theta$ alone to find an angle** and missing that it could be obtuse.

## Exam technique and command terms

**Find the vector product** needs the component formula and the final column. **Hence find the area** requires the magnitude, halved for a triangle. **Find a vector perpendicular to** both vectors means the cross product (or any multiple). **Find a unit vector** requires dividing by the magnitude. **Show that the points are collinear** can use $\overrightarrow{AB}\times\overrightarrow{AC}=\mathbf{0}$. **Find the shortest distance** between a point and a line, or between skew lines, can use the formulas above.

Write the working in the row-by-row form shown in the examples so that errors can be traced and partial credit given. Simplify a normal vector by dividing out any common factor, since it makes later calculations easier, but do not forget that you changed its length if the question asks for the area. If the formula booklet lists $|\mathbf{v}\times\mathbf{w}|=|\mathbf{v}||\mathbf{w}|\sin\theta$ and the component form, use whichever is given. Always verify with a dot product at the end if time allows.

## Connections

AHL 3.12 gave vectors and their components, and AHL 3.13 the scalar product with which we verify perpendicularity and distinguish acute from obtuse angles. SL 3.2 gave the area formula $\dfrac12ab\sin C$, which is the scalar version of the area result here. AHL 3.14 and 3.15 provided lines and the distance methods which the vector product streamlines. In AHL 3.17 the normal vector $\mathbf{n}=\mathbf{a}\times\mathbf{b}$ determines the Cartesian equation of a plane, and in AHL 3.18 the angle between a line and a plane, and between two planes, uses the normal. AHL 1.16 solved $3\times3$ systems of equations, and the determinant arrangement for the cross product is the same pattern of $2\times2$ cofactors. Beyond the course, the vector product governs torque, angular momentum and magnetic force in physics, and in computer graphics it computes surface normals for lighting.

## Check your understanding

1. Find $\mathbf{a}\times\mathbf{b}$ for $\mathbf{a}=\begin{pmatrix}1\\2\\-1\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}3\\0\\2\end{pmatrix}$, and verify.
2. Find the area of the triangle $P(1,0,2)$, $Q(3,1,1)$, $R(2,4,0)$.
3. Find a unit vector perpendicular to $\begin{pmatrix}2\\0\\1\end{pmatrix}$ and $\begin{pmatrix}1\\1\\0\end{pmatrix}$.
4. Find the area of the parallelogram with adjacent sides $\begin{pmatrix}1\\2\\2\end{pmatrix}$ and $\begin{pmatrix}2\\-1\\0\end{pmatrix}$.
5. Prove from the component formula that $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}=0$.
6. Find $k$ such that $\begin{pmatrix}k\\2\\-1\end{pmatrix}$ and $\begin{pmatrix}3\\6\\-3\end{pmatrix}$ are parallel, using the vector product.
7. Find the distance from $P(1,2,3)$ to the line $\mathbf{r}=\begin{pmatrix}0\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}2\\1\\2\end{pmatrix}$.
8. Find the shortest distance between $\mathbf{r}=\lambda\begin{pmatrix}1\\0\\1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}2\\1\\0\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$.
9. Show that $A(1,1,0)$, $B(2,3,1)$ and $C(4,7,3)$ are collinear, using the vector product.
10. A force $\begin{pmatrix}2\\0\\-3\end{pmatrix}$ N acts at $\begin{pmatrix}1\\2\\0\end{pmatrix}$ m. Find the moment about the origin and its magnitude.

### Answers

1. $\begin{pmatrix}2\cdot2-(-1)\cdot0\\(-1)\cdot3-1\cdot2\\1\cdot0-2\cdot3\end{pmatrix}=\begin{pmatrix}4\\-5\\-6\end{pmatrix}$. Check: $\cdot\mathbf{a}=4-10+6=0$ ✓ and $\cdot\mathbf{b}=12+0-12=0$ ✓.
2. $\overrightarrow{PQ}=\begin{pmatrix}2\\1\\-1\end{pmatrix}$ and $\overrightarrow{PR}=\begin{pmatrix}1\\4\\-2\end{pmatrix}$. The cross product is $\begin{pmatrix}1(-2)-(-1)4\\(-1)1-2(-2)\\2\cdot4-1\cdot1\end{pmatrix}=\begin{pmatrix}2\\3\\7\end{pmatrix}$ with magnitude $\sqrt{62}$. The area is $\dfrac{\sqrt{62}}2=3.94$.
3. The cross product is $\begin{pmatrix}0\cdot0-1\cdot1\\1\cdot1-2\cdot0\\2\cdot1-0\cdot1\end{pmatrix}=\begin{pmatrix}-1\\1\\2\end{pmatrix}$ with magnitude $\sqrt6$. A unit vector is $\dfrac1{\sqrt6}\begin{pmatrix}-1\\1\\2\end{pmatrix}$ (or its negative).
4. The cross product is $\begin{pmatrix}2\cdot0-2(-1)\\2\cdot2-1\cdot0\\1(-1)-2\cdot2\end{pmatrix}=\begin{pmatrix}2\\4\\-5\end{pmatrix}$ with magnitude $\sqrt{45}=3\sqrt5=6.71$.
5. $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}=a_1(a_2b_3-a_3b_2)+a_2(a_3b_1-a_1b_3)+a_3(a_1b_2-a_2b_1)=a_1a_2b_3-a_1a_3b_2+a_2a_3b_1-a_1a_2b_3+a_1a_3b_2-a_2a_3b_1=0$, since every term cancels with another. $\blacksquare$
6. The cross product is $\begin{pmatrix}2(-3)-(-1)6\\(-1)3-k(-3)\\6k-2\cdot3\end{pmatrix}=\begin{pmatrix}0\\3k-3\\6k-6\end{pmatrix}$, which is $\mathbf{0}$ only if $k=1$.
7. $A=(0,0,1)$, $\overrightarrow{AP}=\begin{pmatrix}1\\2\\2\end{pmatrix}$, $\mathbf{d}=\begin{pmatrix}2\\1\\2\end{pmatrix}$ with $|\mathbf{d}|=3$. $\overrightarrow{AP}\times\mathbf{d}=\begin{pmatrix}2\cdot2-2\cdot1\\2\cdot2-1\cdot2\\1\cdot1-2\cdot2\end{pmatrix}=\begin{pmatrix}2\\2\\-3\end{pmatrix}$ with magnitude $\sqrt{17}$. The distance is $\dfrac{\sqrt{17}}3=1.37$.
8. $\mathbf{n}=\begin{pmatrix}1\\0\\1\end{pmatrix}\times\begin{pmatrix}0\\1\\1\end{pmatrix}=\begin{pmatrix}0\cdot1-1\cdot1\\1\cdot0-1\cdot1\\1\cdot1-0\cdot0\end{pmatrix}=\begin{pmatrix}-1\\-1\\1\end{pmatrix}$, with $|\mathbf{n}|=\sqrt3$. The vector between points is $\begin{pmatrix}2\\1\\0\end{pmatrix}$ and its dot product with $\mathbf{n}$ is $-3$. The distance is $\dfrac3{\sqrt3}=\sqrt3=1.73$.
9. $\overrightarrow{AB}=\begin{pmatrix}1\\2\\1\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}3\\6\\3\end{pmatrix}$. The cross product is $\begin{pmatrix}2\cdot3-1\cdot6\\1\cdot3-1\cdot3\\1\cdot6-2\cdot3\end{pmatrix}=\mathbf{0}$. So the vectors are parallel and share $A$: the points are collinear.
10. $\mathbf{r}\times\mathbf{F}=\begin{pmatrix}2(-3)-0\cdot0\\0\cdot2-1(-3)\\1\cdot0-2\cdot2\end{pmatrix}=\begin{pmatrix}-6\\3\\-4\end{pmatrix}$ N m. The magnitude is $\sqrt{36+9+16}=\sqrt{61}=7.81$ N m.

## Summary

- $\mathbf{a}\times\mathbf{b}=\begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ is a vector perpendicular to both $\mathbf{a}$ and $\mathbf{b}$, in the direction given by the right-hand rule.
- $|\mathbf{a}\times\mathbf{b}|=|\mathbf{a}||\mathbf{b}|\sin\theta$; it is $\mathbf{0}$ exactly for parallel vectors.
- Anti-commutative, distributive, not associative; $\mathbf{a}\times\mathbf{a}=\mathbf{0}$.
- Area of a parallelogram $|\mathbf{a}\times\mathbf{b}|$; of a triangle $\dfrac12|\overrightarrow{AB}\times\overrightarrow{AC}|$.
- Distance from a point to a line: $\dfrac{|\overrightarrow{AP}\times\mathbf{d}|}{|\mathbf{d}|}$; between skew lines: $\dfrac{|(\mathbf{a}_2-\mathbf{a}_1)\cdot\mathbf{n}|}{|\mathbf{n}|}$ with $\mathbf{n}=\mathbf{d}_1\times\mathbf{d}_2$.
- A normal to the plane through three points is $\overrightarrow{AB}\times\overrightarrow{AC}$; always verify with dot products.
