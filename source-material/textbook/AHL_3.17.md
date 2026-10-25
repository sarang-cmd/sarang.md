# Vector equations of planes

> **AHL 3.17 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- write the equation of a plane in vector parametric form $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c}$, in normal form $\mathbf{r}\cdot\mathbf{n}=\mathbf{a}\cdot\mathbf{n}$ and in Cartesian form $ax+by+cz=d$;
- explain why a plane needs either a point and two directions, or a point and a normal;
- convert between the three forms, using the vector product to find a normal;
- find the equation of a plane through three points, through a point and a line, or through two intersecting or parallel lines;
- decide whether a point lies on a plane and find unknown constants;
- find the intercepts of a plane and describe its position;
- find the perpendicular distance from a point to a plane and the distance between parallel planes;
- find the equation of a plane perpendicular to a given plane or equidistant from two points;
- interpret the coefficients $(a,b,c)$ of the Cartesian equation as the normal vector.

## Why this topic matters

A line in space is a one-dimensional object, and one parameter describes it. A plane is two-dimensional, so we need two parameters, or, equivalently, one equation linking $x$, $y$ and $z$. The plane is the three-dimensional analogue of a line in the plane: just as the line $ax+by=c$ in two dimensions has the normal vector $(a,b)$, so the plane $ax+by+cz=d$ in three dimensions has the normal vector $(a,b,c)$. This is the main insight of the chapter, and it makes planes very manageable: a plane is the set of points whose displacement from a fixed point is perpendicular to a fixed normal direction, which is a scalar product condition. This brings together the whole of Unit 3. The vector product (AHL 3.16) builds a normal from two directions. The scalar product (AHL 3.13) turns the perpendicularity condition into an equation. Lines (AHL 3.14 and 3.15) provide the directions and points that define planes, and in AHL 3.18 we intersect lines and planes and find the angles between them. Planes also connect to AHL 1.16, where each linear equation in three unknowns is a plane and the solutions of a system are the common points of the planes. In examination, plane questions typically come as a series: find the equation of the plane through three points, check a point lies in it, find where a line meets it, find an angle. A secure command of conversions between the forms, and of the normal vector, earns most of the marks. This chapter takes the forms in turn, then the standard constructions, then distances.

## Core ideas

### Vector parametric form

A plane is determined by a point $A$ (position vector $\mathbf{a}$) and two non-parallel direction vectors $\mathbf{b}$ and $\mathbf{c}$ lying in the plane. Every point on the plane has position vector
$$
\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c},\qquad\lambda,\mu\in\mathbb{R}.
$$
Starting at $A$, move $\lambda$ along $\mathbf{b}$ and $\mu$ along $\mathbf{c}$. The representation is not unique, as the choices of $A$, $\mathbf{b}$, $\mathbf{c}$ vary. In coordinates, $x=a_1+\lambda b_1+\mu c_1$, and similarly for $y$ and $z$. The equation $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}$ (one parameter) is a line, not a plane.

### Normal form

Let $\mathbf{n}$ be a vector perpendicular to the plane (a **normal**). A point $R$ is on the plane exactly when $\overrightarrow{AR}=\mathbf{r}-\mathbf{a}$ is perpendicular to $\mathbf{n}$, that is, $(\mathbf{r}-\mathbf{a})\cdot\mathbf{n}=0$, or
$$
\mathbf{r}\cdot\mathbf{n}=\mathbf{a}\cdot\mathbf{n}.
$$
The right side is a constant. Any non-zero multiple of $\mathbf{n}$ is also a normal and gives an equivalent equation. If $\mathbf{b}$ and $\mathbf{c}$ are two direction vectors in the plane, a normal is $\mathbf{n}=\mathbf{b}\times\mathbf{c}$ (AHL 3.16).

### Cartesian form

Writing $\mathbf{n}=\begin{pmatrix}a\\b\\c\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}x\\y\\z\end{pmatrix}$, the normal form becomes
$$
ax+by+cz=d,\qquad d=\mathbf{a}\cdot\mathbf{n}.
$$
The coefficients $(a,b,c)$ are the components of a normal vector; that is how a normal is read off immediately from a Cartesian equation. For example, $2x-y+3z=6$ has the normal $\begin{pmatrix}2\\-1\\3\end{pmatrix}$. If $d=0$, the plane passes through the origin. Special cases: $z=k$ is a horizontal plane (normal $\mathbf{k}$); if $c=0$ the plane is parallel to the $z$-axis.

### Converting between forms

**Parametric to Cartesian:** compute $\mathbf{n}=\mathbf{b}\times\mathbf{c}$, then $d=\mathbf{a}\cdot\mathbf{n}$. (The other method is to eliminate $\lambda$ and $\mu$ from the three coordinate equations.)

**Cartesian to parametric:** find a point on the plane (set two of the variables to convenient values and solve for the third), and two independent direction vectors perpendicular to $\mathbf{n}$ (vectors $\mathbf{v}$ with $\mathbf{v}\cdot\mathbf{n}=0$, for instance by choosing one component zero). A faster way: find three points on the plane and subtract.

**Normal form to Cartesian:** expand the dot product.

### The plane through three points

For non-collinear points $A$, $B$, $C$: $\mathbf{n}=\overrightarrow{AB}\times\overrightarrow{AC}$ and $\mathbf{r}\cdot\mathbf{n}=\mathbf{a}\cdot\mathbf{n}$. Parametric form: $\mathbf{r}=\mathbf{a}+\lambda\overrightarrow{AB}+\mu\overrightarrow{AC}$. Check by substituting all three points into the Cartesian equation.

### The plane containing a line and a point (or two lines)

For a plane that contains the line $\mathbf{r}=\mathbf{p}+\lambda\mathbf{d}$ and an external point $Q$, the directions in the plane are $\mathbf{d}$ and $\overrightarrow{PQ}$, so $\mathbf{n}=\mathbf{d}\times\overrightarrow{PQ}$. For two intersecting lines with directions $\mathbf{d}_1$, $\mathbf{d}_2$: $\mathbf{n}=\mathbf{d}_1\times\mathbf{d}_2$ and a point is the intersection. For two distinct parallel lines, take their common direction and the vector joining a point of one to a point of the other. Skew lines do not lie in a common plane.

### Does a point lie on a plane?

Substitute the coordinates into the Cartesian equation. If the equation is satisfied, the point lies on the plane. To find an unknown coordinate of a point on the plane, substitute and solve.

### Intercepts and position

The plane $ax+by+cz=d$ with $a,b,c,d\ne0$ meets the axes at $\left(\dfrac da,0,0\right)$, $\left(0,\dfrac db,0\right)$ and $\left(0,0,\dfrac dc\right)$. These three points are enough to sketch the plane. A plane through the origin has $d=0$.

### Perpendicular distance from a point to a plane

For the plane $ax+by+cz=d$ and a point $P(x_0,y_0,z_0)$, the perpendicular distance is
$$
D=\frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^{2}+b^{2}+c^{2}}}.
$$
This formula (an extension to the course: it is not in the standard formula booklet, so the safest route in an examination is the foot-of-perpendicular method) is the three-dimensional analogue of the distance from a point to a line in the plane. *Derivation by the foot method:* the line through $P$ in the normal direction, $\mathbf{r}=\mathbf{p}+t\mathbf{n}$, meets the plane when $\mathbf{n}\cdot(\mathbf{p}+t\mathbf{n})=d$, so $t=\dfrac{d-\mathbf{n}\cdot\mathbf{p}}{|\mathbf{n}|^{2}}$. The distance is $|t||\mathbf{n}|$, which gives the formula. The foot of the perpendicular is $\mathbf{p}+t\mathbf{n}$, and the reflection of $P$ in the plane is $\mathbf{p}+2t\mathbf{n}$. The distance between two parallel planes $ax+by+cz=d_1$ and $ax+by+cz=d_2$ is $\dfrac{|d_1-d_2|}{\sqrt{a^{2}+b^{2}+c^{2}}}$.

### Special constructions

- **Parallel plane through a point:** keep the normal, recompute $d$ from the point.
- **Perpendicular bisector plane of $AB$:** it passes through the midpoint of $AB$ with normal $\overrightarrow{AB}$. It is the locus of points equidistant from $A$ and $B$.
- **Plane containing a given direction and perpendicular to a given plane:** the normal is perpendicular to both the direction and the normal of the given plane, so $\mathbf{n}=\mathbf{d}\times\mathbf{n}_0$.

## Worked examples

### Example 1 (a plane through three points, 8 marks)

Find the equation of the plane through $A(1,0,0)$, $B(0,2,0)$ and $C(0,0,3)$ in vector normal form and Cartesian form.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}-1\\2\\0\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}-1\\0\\3\end{pmatrix}$, and $\mathbf{n}=\overrightarrow{AB}\times\overrightarrow{AC}=\begin{pmatrix}6\\3\\2\end{pmatrix}$ (AHL 3.16). Then $\mathbf{a}\cdot\mathbf{n}=6$, so $\mathbf{r}\cdot\begin{pmatrix}6\\3\\2\end{pmatrix}=6$ and the Cartesian equation is $6x+3y+2z=6$.

Check: $B$: $0+6+0=6$ ✓; $C$: $0+0+6=6$ ✓. The intercepts are $(1,0,0)$, $(0,2,0)$ and $(0,0,3)$.

### Example 2 (parametric to Cartesian, 6 marks)

Find the Cartesian equation of the plane $\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\2\end{pmatrix}+\mu\begin{pmatrix}0\\1\\-1\end{pmatrix}$.

*Solution.* $\mathbf{n}=\begin{pmatrix}1\\0\\2\end{pmatrix}\times\begin{pmatrix}0\\1\\-1\end{pmatrix}=\begin{pmatrix}0(-1)-2\cdot1\\2\cdot0-1(-1)\\1\cdot1-0\cdot0\end{pmatrix}=\begin{pmatrix}-2\\1\\1\end{pmatrix}$. Then $d=\mathbf{a}\cdot\mathbf{n}=-2+2+3=3$. The equation is $-2x+y+z=3$.

Check: $\lambda=1$, $\mu=0$ gives $(2,2,5)$ and $-4+2+5=3$ ✓. $\lambda=0$, $\mu=1$ gives $(1,3,2)$ and $-2+3+2=3$ ✓.

### Example 3 (Cartesian to parametric, 6 marks)

Write the plane $2x-y+3z=6$ in the form $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c}$.

*Solution.* A point: $(3,0,0)$ satisfies $6=6$. The normal is $\begin{pmatrix}2\\-1\\3\end{pmatrix}$. Two independent vectors perpendicular to it: $\begin{pmatrix}1\\2\\0\end{pmatrix}$ (since $2-2+0=0$) and $\begin{pmatrix}0\\3\\1\end{pmatrix}$ (since $0-3+3=0$). So $\mathbf{r}=\begin{pmatrix}3\\0\\0\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\0\end{pmatrix}+\mu\begin{pmatrix}0\\3\\1\end{pmatrix}$.

The answer is not unique; any other point and pair of independent directions in the plane would do.

### Example 4 (a point and a normal, 4 marks)

Find the plane through $(2,-1,3)$ with normal $\begin{pmatrix}1\\2\\-2\end{pmatrix}$.

*Solution.* $d=2-2-6=-6$, so $x+2y-2z=-6$.

### Example 5 (an unknown coordinate, 3 marks)

The point $(k,2,-1)$ lies on the plane $2x-y+3z=6$. Find $k$.

*Solution.* $2k-2-3=6$, so $2k=11$ and $k=\dfrac{11}2$.

### Example 6 (a plane containing a line and a point, 7 marks)

Find the equation of the plane containing the line $\mathbf{r}=\begin{pmatrix}1\\2\\0\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\1\end{pmatrix}$ and the point $Q(2,0,1)$.

*Solution.* Let $P=(1,2,0)$ on the line. $\overrightarrow{PQ}=\begin{pmatrix}1\\-2\\1\end{pmatrix}$ and $\mathbf{d}=\begin{pmatrix}1\\1\\1\end{pmatrix}$. $\mathbf{n}=\mathbf{d}\times\overrightarrow{PQ}=\begin{pmatrix}1\cdot1-1(-2)\\1\cdot1-1\cdot1\\1(-2)-1\cdot1\end{pmatrix}=\begin{pmatrix}3\\0\\-3\end{pmatrix}$, which we simplify to $\begin{pmatrix}1\\0\\-1\end{pmatrix}$. Then $d=1-0=1$, and the plane is $x-z=1$.

Check: a general point of the line $(1+\lambda,2+\lambda,\lambda)$ gives $x-z=1$ ✓. $Q$: $2-1=1$ ✓.

### Example 7 (the plane containing two intersecting lines, 7 marks)

Lines $L_1:\mathbf{r}=\begin{pmatrix}1\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\1\end{pmatrix}$ and $L_2:\mathbf{r}=\begin{pmatrix}1\\1\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\2\end{pmatrix}$ intersect at $(1,1,1)$. Find the plane that contains both.

*Solution.* $\mathbf{n}=\begin{pmatrix}1\\0\\1\end{pmatrix}\times\begin{pmatrix}0\\1\\2\end{pmatrix}=\begin{pmatrix}0\cdot2-1\cdot1\\1\cdot0-1\cdot2\\1\cdot1-0\end{pmatrix}=\begin{pmatrix}-1\\-2\\1\end{pmatrix}$. Then $d=-1-2+1=-2$, so $-x-2y+z=-2$, or $x+2y-z=2$.

### Example 8 (intercepts and sketch, 4 marks)

Find the intercepts of $3x+2y+z=6$ with the axes.

*Solution.* $y=z=0$ gives $x=2$; $x=z=0$ gives $y=3$; $x=y=0$ gives $z=6$. The intercepts are $(2,0,0)$, $(0,3,0)$ and $(0,0,6)$, and the plane is the triangle-shaped part of the plane through them (in the first octant).

### Example 9 (distance from a point to a plane, 7 marks)

Find the distance from $P(1,2,3)$ to the plane $2x-2y+z=4$, and the foot of the perpendicular.

*Solution.* By formula: $\dfrac{|2-4+3-4|}{\sqrt{4+4+1}}=\dfrac{3}3=1$. By the foot method: the line through $P$ along $\mathbf{n}$ is $(1+2t,\ 2-2t,\ 3+t)$. Substitute: $2(1+2t)-2(2-2t)+(3+t)=1+9t=4$, so $t=\dfrac13$. The foot is $\left(\dfrac53,\dfrac43,\dfrac{10}3\right)$ and the distance is $|t||\mathbf{n}|=\dfrac13\cdot3=1$ ✓.

Check that the foot is on the plane: $\dfrac{10}3-\dfrac83+\dfrac{10}3=\dfrac{12}3=4$ ✓.

### Example 10 (parallel planes, 3 marks)

Find the distance between the planes $2x-y+2z=3$ and $2x-y+2z=9$.

*Solution.* $\dfrac{|9-3|}{\sqrt{4+1+4}}=\dfrac63=2$.

### Example 11 (a plane perpendicular to another plane, 7 marks)

Find the plane through $A(1,2,3)$ and $B(3,2,5)$ that is perpendicular to the plane $x+y+z=0$.

*Solution.* The required plane contains the direction $\overrightarrow{AB}=\begin{pmatrix}2\\0\\2\end{pmatrix}$ and the normal direction $\mathbf{n}_0=\begin{pmatrix}1\\1\\1\end{pmatrix}$ of the given plane (a plane is perpendicular to another if it contains the other's normal). $\mathbf{n}=\overrightarrow{AB}\times\mathbf{n}_0=\begin{pmatrix}0\cdot1-2\cdot1\\2\cdot1-2\cdot1\\2\cdot1-0\cdot1\end{pmatrix}=\begin{pmatrix}-2\\0\\2\end{pmatrix}$, simplified to $\begin{pmatrix}1\\0\\-1\end{pmatrix}$. $d=1-3=-2$, so $x-z=-2$.

Check: $B$: $3-5=-2$ ✓. The normals $\begin{pmatrix}1\\0\\-1\end{pmatrix}\cdot\begin{pmatrix}1\\1\\1\end{pmatrix}=0$ ✓, so the planes are perpendicular.

### Example 12 (the perpendicular bisector plane, 5 marks)

Find the plane equidistant from $A(1,2,3)$ and $B(3,0,-1)$.

*Solution.* The midpoint is $(2,1,1)$ and $\overrightarrow{AB}=\begin{pmatrix}2\\-2\\-4\end{pmatrix}$, so a normal is $\begin{pmatrix}1\\-1\\-2\end{pmatrix}$. $d=2-1-2=-1$, so $x-y-2z=-1$.

Check with the point $(-1,0,0)$ on the plane: $PA^{2}=4+4+9=17$ and $PB^{2}=16+0+1=17$ ✓.

### Example 13 (a parallel plane, 3 marks)

Find the plane parallel to $3x-y+2z=5$ through $(1,1,1)$.

*Solution.* The same normal, with $d=3-1+2=4$: $3x-y+2z=4$.

### Example 14 (a point in the plane, from the vector form, 4 marks)

Does the point $(4,5,6)$ lie on the plane $\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\2\end{pmatrix}+\mu\begin{pmatrix}0\\1\\-1\end{pmatrix}$?

*Solution.* Equate: $1+\lambda=4$ gives $\lambda=3$; $2+\mu=5$ gives $\mu=3$; the third coordinate $3+2(3)-3=6$ ✓. Yes, it lies on the plane. (Alternatively, use the Cartesian form $-2x+y+z=3$ from Example 2: $-8+5+6=3$ ✓.)

## Using your GDC

Use the GDC's simultaneous-equation solver for finding where parameters in the equation of a plane match a given point, and to find the values of $a$, $b$, $c$, $d$ if you substitute three points into $ax+by+cz=d$ (a system of three equations in four unknowns: set $d=1$ if the plane does not pass through the origin, or $d=0$ if it does). Use the vector product function, if available, to find normals, then verify by dot products. For distances, compute with the exact formula and then give a decimal. Plot the plane's trace on a coordinate plane ($z=0$) to check intercepts, but the GDC will not draw planes in space. Menu names vary by model. Keep exact fractions in intermediate steps.

## Common mistakes

1. **A wrong normal**: confusing the components of the normal with a direction in the plane.
2. **Computing $d$ with the wrong sign** or from the wrong point.
3. **Using one direction only** and writing a line instead of a plane (a plane needs two parameters).
4. **Parallel direction vectors**: if $\mathbf{b}\parallel\mathbf{c}$, they do not define a plane. Check that the three points are not collinear.
5. **Forgetting to divide by $|\mathbf{n}|$** in the distance formula.
6. **Missing the absolute value** in the distance formula (a distance cannot be negative).
7. **Mixing the line direction with the plane normal**: a line parallel to the normal is perpendicular to the plane.
8. **Not verifying** by substituting the defining points.

## Exam technique and command terms

**Find the equation of the plane** requires an explicit form, usually Cartesian $ax+by+cz=d$ unless the vector form is requested. **Show that the point lies on the plane** needs a substitution that gives an identity. **Find a normal vector** needs the vector product or a coefficient reading. **Hence** typically leads from the equation to a distance or an intersection. **Find the vector equation** requires $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c}$ with the parameters named.

When you have a choice, use the normal form: it is shorter and the arithmetic is simpler. Always state the vectors used to generate the normal. Check the answer by substituting every point you were given. If the problem says "the plane containing the line and the point", make sure the point is not on the line. In distance questions, show the formula or the foot-of-perpendicular method in full, since the final value alone may not earn the marks. Present normal vectors in simplest integer form when possible.

## Connections

AHL 3.12 and 3.13 provided vectors and the scalar product, which converts perpendicularity to the normal-form equation, and AHL 3.16 the vector product that builds a normal from two directions. AHL 3.14 and 3.15 gave lines, whose direction vectors and points define planes in the constructions above, and whose possible relationships (parallel, intersecting, skew) correspond to whether two lines lie in a common plane. SL 2.1 gave the line $ax+by=c$ in the plane with normal $(a,b)$, of which the plane $ax+by+cz=d$ is the analogue. AHL 1.16 interpreted each linear equation in three unknowns as a plane, and the number of solutions of a system as the way planes meet; this chapter provides the geometry for that algebra. In AHL 3.18, planes are intersected with lines and each other, and angles between lines and planes use the normal. In Unit 5, tangent planes and optimisation in several variables go beyond the course, but the idea that a surface locally looks like a plane with a normal is the same.

## Check your understanding

1. Find the Cartesian equation of the plane through $A(1,1,0)$, $B(2,0,1)$ and $C(0,2,3)$.
2. Find the Cartesian equation of the plane $\mathbf{r}=\begin{pmatrix}0\\1\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\0\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$.
3. Write the plane $3x+y-2z=6$ in the form $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c}$.
4. Find the equation of the plane through $(1,-2,4)$ with normal $\begin{pmatrix}3\\0\\-1\end{pmatrix}$.
5. The point $(2,k,1)$ lies on the plane $2x+3y-z=9$. Find $k$.
6. Find the plane containing the line $\mathbf{r}=\begin{pmatrix}0\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}2\\1\\0\end{pmatrix}$ and the point $(1,1,3)$.
7. Find the distance from $(2,-1,3)$ to the plane $x+2y-2z=3$.
8. Find the distance between the parallel planes $x-2y+2z=1$ and $x-2y+2z=10$.
9. Find the plane equidistant from $A(1,0,2)$ and $B(5,2,-2)$.
10. Show that the points $A(1,0,0)$, $B(0,1,0)$, $C(0,0,1)$ and $D(1,1,-1)$ are coplanar.

### Answers

1. $\overrightarrow{AB}=\begin{pmatrix}1\\-1\\1\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}-1\\1\\3\end{pmatrix}$. $\mathbf{n}=\begin{pmatrix}(-1)3-1\cdot1\\1(-1)-1\cdot3\\1\cdot1-(-1)(-1)\end{pmatrix}=\begin{pmatrix}-4\\-4\\0\end{pmatrix}$, simplified to $\begin{pmatrix}1\\1\\0\end{pmatrix}$. $d=1+1+0=2$, so $x+y=2$. Check: $B$: $2+0=2$ ✓ and $C$: $0+2=2$ ✓.
2. $\mathbf{n}=\begin{pmatrix}2\cdot1-0\cdot1\\0\cdot0-1\cdot1\\1\cdot1-2\cdot0\end{pmatrix}=\begin{pmatrix}2\\-1\\1\end{pmatrix}$. $d=0-1+2=1$. So $2x-y+z=1$.
3. A point: $(2,0,0)$. Directions perpendicular to $\begin{pmatrix}3\\1\\-2\end{pmatrix}$: $\begin{pmatrix}1\\-3\\0\end{pmatrix}$ and $\begin{pmatrix}0\\2\\1\end{pmatrix}$. So $\mathbf{r}=\begin{pmatrix}2\\0\\0\end{pmatrix}+\lambda\begin{pmatrix}1\\-3\\0\end{pmatrix}+\mu\begin{pmatrix}0\\2\\1\end{pmatrix}$ (other answers are possible).
4. $d=3-(4)=-1$, so $3x-z=-1$.
5. $4+3k-1=9$, so $k=2$.
6. $P=(0,1,1)$, $\overrightarrow{PQ}=\begin{pmatrix}1\\0\\2\end{pmatrix}$ and $\mathbf{d}=\begin{pmatrix}2\\1\\0\end{pmatrix}$. $\mathbf{n}=\mathbf{d}\times\overrightarrow{PQ}=\begin{pmatrix}1\cdot2-0\cdot0\\0\cdot1-2\cdot2\\2\cdot0-1\cdot1\end{pmatrix}=\begin{pmatrix}2\\-4\\-1\end{pmatrix}$. $d=0-4-1=-5$. So $2x-4y-z=-5$. Check: $Q$: $2-4-3=-5$ ✓.
7. $\dfrac{|2-2-6-3|}{3}=\dfrac93=3$.
8. $\dfrac{|10-1|}{\sqrt{1+4+4}}=\dfrac93=3$.
9. The midpoint is $(3,1,0)$ and $\overrightarrow{AB}=\begin{pmatrix}4\\2\\-4\end{pmatrix}$, so a normal is $\begin{pmatrix}2\\1\\-2\end{pmatrix}$. $d=6+1-0=7$. So $2x+y-2z=7$.
10. $A$, $B$ and $C$ lie on $x+y+z=1$ (their coordinate sums are $1$). Substituting $D$: $1+1-1=1$ ✓. So $D$ lies on the same plane and the four points are coplanar.

## Summary

- Planes: parametric $\mathbf{r}=\mathbf{a}+\lambda\mathbf{b}+\mu\mathbf{c}$; normal form $\mathbf{r}\cdot\mathbf{n}=\mathbf{a}\cdot\mathbf{n}$; Cartesian $ax+by+cz=d$ with normal $(a,b,c)$.
- A normal from two directions: $\mathbf{n}=\mathbf{b}\times\mathbf{c}$; then $d=\mathbf{a}\cdot\mathbf{n}$.
- Through three points: $\mathbf{n}=\overrightarrow{AB}\times\overrightarrow{AC}$; through a line and a point or two intersecting lines: use the line directions and the connecting vector.
- Test a point by substitution; intercepts by setting two variables to zero.
- Distance from a point to a plane: $\dfrac{|ax_0+by_0+cz_0-d|}{\sqrt{a^{2}+b^{2}+c^{2}}}$; between parallel planes: $\dfrac{|d_1-d_2|}{\sqrt{a^{2}+b^{2}+c^{2}}}$.
- Perpendicular bisector plane of $AB$: midpoint with normal $\overrightarrow{AB}$; a plane perpendicular to another contains the other's normal.
