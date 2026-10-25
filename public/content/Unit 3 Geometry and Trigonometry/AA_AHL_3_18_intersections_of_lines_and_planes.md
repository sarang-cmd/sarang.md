# Intersections of lines and planes

> **AHL 3.18 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- find the intersection of a line and a plane, and classify the line as meeting the plane in a point, lying in it, or parallel to it;
- find the line of intersection of two planes, and recognise parallel and coincident planes;
- find the angle between a line and a plane, and the angle between two planes, using normal and direction vectors;
- determine the arrangement of three planes (a point, a line, no common point with or without parallel planes) and link it to the solution of three linear equations;
- find the foot of the perpendicular from a point to a plane and the reflection of a point in a plane;
- find the distance from a line to a parallel plane, and from a point to a plane;
- use unknown constants to impose a condition (parallel, in the plane, perpendicular);
- combine lines, planes, and vector products in multi-step problems of examination type.

## Why this topic matters

This is the capstone of the vector geometry sequence. Having defined lines (AHL 3.14, 3.15) and planes (AHL 3.17), we now ask how they meet. Does a laser beam hit a mirror, and where? What is the line along which two walls of a room meet? At what angle does a ramp meet the floor? Do three flat surfaces meet at a corner, along an edge, or not at all? These are geometric questions whose answers are computed with the vector tools you have developed: parametric lines substituted into plane equations, normals from vector products, angles from scalar products. The algebra is a mixture of familiar steps (solve a linear equation for a parameter, take a cross product, apply the angle formula), but the logic of the classification must be carefully presented, because the answers are qualitative as well as numerical: "the line is parallel to the plane" or "the planes meet in a line". The topic also closes a loop with AHL 1.16, where three linear equations in three unknowns were solved algebraically. Each equation is a plane, and the types of solution set (unique point, a line of solutions, no solution) correspond to the three-plane arrangements here. In HL Paper 2 and Paper 3, this is where the longest vector questions end: a typical question gives a line and a plane, asks for their intersection, the angle, and a distance or reflection, and the final marks are for combining the earlier parts. This chapter gives the methods, the classification and a bank of worked questions in a progression from simple to challenging.

## Core ideas

### Intersection of a line and a plane

For the line $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$ and the plane $\mathbf{r}\cdot\mathbf{n}=k$ (or $ax+by+cz=k$), substitute the coordinates of a general point on the line, $(a_1+\lambda d_1,\ a_2+\lambda d_2,\ a_3+\lambda d_3)$, into the plane equation. The result is a linear equation in $\lambda$ of the form
$$
\lambda(\mathbf{d}\cdot\mathbf{n})=k-\mathbf{a}\cdot\mathbf{n}.
$$
Three cases arise:

- $\mathbf{d}\cdot\mathbf{n}\ne0$: exactly one solution $\lambda$, so the line meets the plane at one point (substitute $\lambda$ into the line to find it).
- $\mathbf{d}\cdot\mathbf{n}=0$ and $k-\mathbf{a}\cdot\mathbf{n}\ne0$: no solution (the equation reads $0=$ non-zero), so the line is parallel to the plane and does not meet it.
- $\mathbf{d}\cdot\mathbf{n}=0$ and $k-\mathbf{a}\cdot\mathbf{n}=0$: every $\lambda$ works, so the line lies in the plane.

The condition $\mathbf{d}\cdot\mathbf{n}=0$ has a clear meaning: the direction of the line is perpendicular to the normal, hence parallel to the plane.

### The angle between a line and a plane

The angle $\varphi$ between a line with direction $\mathbf{d}$ and a plane with normal $\mathbf{n}$ is measured between the line and its shadow (projection) on the plane. It is $90^{\circ}$ minus the angle between $\mathbf{d}$ and $\mathbf{n}$ (taking the acute angle), so
$$
\sin\varphi=\frac{|\mathbf{d}\cdot\mathbf{n}|}{|\mathbf{d}||\mathbf{n}|},\qquad0^{\circ}\le\varphi\le90^{\circ}.
$$
Notice it is $\sin\varphi$ (not $\cos$), because the normal is perpendicular to the plane. A line perpendicular to the plane (parallel to $\mathbf{n}$) has $\varphi=90^{\circ}$; a line parallel to the plane has $\varphi=0^{\circ}$. This is the most common error: using $\cos^{-1}$ and giving the complement.

### The angle between two planes

The angle between two planes is the angle between their normals (acute):
$$
\cos\theta=\frac{|\mathbf{n}_1\cdot\mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}.
$$
Planes are perpendicular if $\mathbf{n}_1\cdot\mathbf{n}_2=0$, and parallel if the normals are parallel.

### The intersection of two planes

Two planes with normals $\mathbf{n}_1$ and $\mathbf{n}_2$ that are not parallel meet in a **line**. Its direction is perpendicular to both normals, so
$$
\mathbf{d}=\mathbf{n}_1\times\mathbf{n}_2.
$$
To find a point on the line, set one variable to a convenient value (such as $z=0$) and solve the two equations for the others (this fails if the line is parallel to that coordinate plane, in which case choose another variable). The line is $\mathbf{r}=\mathbf{p}+\lambda\mathbf{d}$. Alternatively, solve the two equations with a free parameter: put $z=\lambda$ and express $x$ and $y$ in terms of $\lambda$. If $\mathbf{n}_1\parallel\mathbf{n}_2$, the planes are **parallel** (no common point) or **coincident** (the same plane): test by comparing the full equations, i.e. whether one equation is a multiple of the other including the constant.

### Three planes: how they can meet

Three planes correspond to three linear equations in $x$, $y$, $z$ (AHL 1.16). The possibilities are:

1. **A unique point:** the normals are linearly independent (no normal is a combination of the others). The system has a unique solution.
2. **A common line:** the planes are all different, the normals lie in a common plane, and the equations are consistent (the third equation is a combination of the first two including the constant). Infinitely many solutions depending on one parameter.
3. **No common point, "triangular prism":** the three planes are pairwise non-parallel (each pair meets in a line) but the three lines are parallel; the normals are dependent and the equations inconsistent. The system has no solution.
4. **No common point, two or three parallel planes**, with at least two of them parallel and distinct: no solution.
5. **A common plane** (all three coincide), or two coincident and the third crossing in a line.

In practice, eliminate to find the solution, then identify the arrangement from the number of solutions, and justify it with the normals. The test using the determinant of the coefficient matrix (zero when the normals are dependent) is the algebraic summary.

### The foot of the perpendicular and the reflection in a plane

For a point $P$ with position vector $\mathbf{p}$ and the plane $\mathbf{r}\cdot\mathbf{n}=k$: the line through $P$ in the normal direction is $\mathbf{r}=\mathbf{p}+t\mathbf{n}$, which meets the plane when $\mathbf{n}\cdot\mathbf{p}+t|\mathbf{n}|^{2}=k$, so $t=\dfrac{k-\mathbf{n}\cdot\mathbf{p}}{|\mathbf{n}|^{2}}$. The foot is $\mathbf{f}=\mathbf{p}+t\mathbf{n}$, the distance is $|t||\mathbf{n}|$, and the reflection is $\mathbf{p}'=\mathbf{p}+2t\mathbf{n}=2\mathbf{f}-\mathbf{p}$.

### Distances

- **Point to plane:** $\dfrac{|ax_0+by_0+cz_0-k|}{\sqrt{a^{2}+b^{2}+c^{2}}}$ (AHL 3.17).
- **Line parallel to a plane:** the distance from any point of the line to the plane.
- **Parallel planes:** $\dfrac{|k_1-k_2|}{|\mathbf{n}|}$.

### Imposing a condition with an unknown constant

If a line with an unknown constant must be parallel to a plane, set $\mathbf{d}\cdot\mathbf{n}=0$ and solve. If it must lie in the plane, also require the point on the line to satisfy the plane equation. If it must be perpendicular to the plane, $\mathbf{d}\parallel\mathbf{n}$. If two planes must be perpendicular, $\mathbf{n}_1\cdot\mathbf{n}_2=0$. For the angle to equal a given value, set up the formula and solve for the constant (check for extraneous solutions arising from the modulus).

## Worked examples

### Example 1 (a line meeting a plane in a point, 6 marks)

Find where the line $\mathbf{r}=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\3\end{pmatrix}$ meets the plane $x+y+z=7$.

*Solution.* A general point is $(1+2\lambda,\ 2-\lambda,\ -1+3\lambda)$. Substituting: $(1+2\lambda)+(2-\lambda)+(-1+3\lambda)=2+4\lambda=7$, so $\lambda=\dfrac54$. The point is $\left(\dfrac72,\dfrac34,\dfrac{11}4\right)$.

Check: $3.5+0.75+2.75=7$ ✓.

### Example 2 (parallel or contained, 6 marks)

For the same line, decide its relationship to (a) the plane $2x+y-z=9$; (b) the plane $2x+y-z=5$.

*Solution.* Substituting the general point: $2(1+2\lambda)+(2-\lambda)-(-1+3\lambda)=2+4\lambda+2-\lambda+1-3\lambda=5$. The $\lambda$ terms cancel because $\mathbf{d}\cdot\mathbf{n}=4-1-3=0$: the line is parallel to both planes. (a) The equation $5=9$ is false, so the line is parallel to the plane and does not meet it. (b) The equation $5=5$ is true for every $\lambda$, so the line lies in the plane.

### Example 3 (the angle between a line and a plane, 5 marks)

Find the angle between the line with direction $\mathbf{d}=\begin{pmatrix}2\\-1\\3\end{pmatrix}$ and the plane $x+y+z=7$.

*Solution.* $\mathbf{n}=\begin{pmatrix}1\\1\\1\end{pmatrix}$. $\mathbf{d}\cdot\mathbf{n}=4$, $|\mathbf{d}|=\sqrt{14}$ and $|\mathbf{n}|=\sqrt3$. $\sin\varphi=\dfrac4{\sqrt{42}}=0.6172$ and $\varphi=38.1^{\circ}$.

### Example 4 (the line of intersection of two planes, 8 marks)

Find the line of intersection of $\pi_1:x+y+z=6$ and $\pi_2:2x-y+z=3$.

*Solution.* The normals are $\begin{pmatrix}1\\1\\1\end{pmatrix}$ and $\begin{pmatrix}2\\-1\\1\end{pmatrix}$, not parallel. The direction is $\mathbf{d}=\begin{pmatrix}1\\1\\1\end{pmatrix}\times\begin{pmatrix}2\\-1\\1\end{pmatrix}=\begin{pmatrix}1\cdot1-1(-1)\\1\cdot2-1\cdot1\\1(-1)-1\cdot2\end{pmatrix}=\begin{pmatrix}2\\1\\-3\end{pmatrix}$. A point: let $z=0$, so $x+y=6$ and $2x-y=3$; adding gives $3x=9$, $x=3$, $y=3$. The line is $\mathbf{r}=\begin{pmatrix}3\\3\\0\end{pmatrix}+\lambda\begin{pmatrix}2\\1\\-3\end{pmatrix}$.

Check: $\lambda=1$ gives $(5,4,-3)$ with $5+4-3=6$ ✓ and $10-4-3=3$ ✓.

### Example 5 (the angle between planes, 4 marks)

Find the angle between the planes $x+y+z=6$ and $2x-y+z=3$.

*Solution.* $\mathbf{n}_1\cdot\mathbf{n}_2=2-1+1=2$ and $|\mathbf{n}_1||\mathbf{n}_2|=\sqrt3\sqrt6=\sqrt{18}$. $\cos\theta=\dfrac2{\sqrt{18}}=0.4714$ and $\theta=61.9^{\circ}$.

### Example 6 (parallel or coincident planes, 4 marks)

Compare $2x-y+3z=6$ with (a) $4x-2y+6z=12$; (b) $4x-2y+6z=7$.

*Solution.* The normals are parallel in both cases ($\begin{pmatrix}4\\-2\\6\end{pmatrix}=2\begin{pmatrix}2\\-1\\3\end{pmatrix}$). (a) The second equation is $2\times$ the first including the constant ($12=2\times6$): the planes are coincident. (b) $7\ne12$, so the planes are parallel and distinct. Their distance is $\dfrac{|7/2-6|}{\sqrt{14}}=\dfrac{2.5}{\sqrt{14}}=0.668$ (after rewriting the second as $2x-y+3z=3.5$).

### Example 7 (three planes meeting in a point, 8 marks)

Find the intersection of $x+y+z=6$, $2x-y+z=3$ and $x-y+2z=5$.

*Solution.* From Example 4 the first two planes meet in $(x,y,z)=(3+2\lambda,\ 3+\lambda,\ -3\lambda)$. Substituting into the third: $(3+2\lambda)-(3+\lambda)+2(-3\lambda)=-5\lambda=5$, so $\lambda=-1$. The point is $(1,2,3)$.

Check: $1+2+3=6$ ✓; $2-2+3=3$ ✓; $1-2+6=5$ ✓. The normals are independent, so the three planes meet in a single point.

### Example 8 (three planes: a line or a prism, 8 marks)

Describe the arrangement of (a) $x+y+z=6$, $2x-y+z=3$, $3x+2z=9$; (b) $x+y+z=6$, $2x-y+z=3$, $3x+2z=10$.

*Solution.* The third normal is $\begin{pmatrix}3\\0\\2\end{pmatrix}=\begin{pmatrix}1\\1\\1\end{pmatrix}+\begin{pmatrix}2\\-1\\1\end{pmatrix}$, so the normals are dependent in both cases. Adding the first two equations gives $3x+2z=9$. (a) The third equation is exactly this sum: it is consistent with the first two, so the three planes share the line of Example 4. (b) The third equation says $3x+2z=10$ but the first two imply $3x+2z=9$: no common point. No two normals are parallel, so the planes meet pairwise in three parallel lines, forming a triangular prism.

### Example 9 (the foot and the reflection, 7 marks)

Find the foot of the perpendicular from $P(1,2,3)$ to the plane $2x-2y+z=4$, and the reflection of $P$ in the plane.

*Solution.* $\mathbf{n}=\begin{pmatrix}2\\-2\\1\end{pmatrix}$ with $|\mathbf{n}|^{2}=9$ and $\mathbf{n}\cdot\mathbf{p}=2-4+3=1$. $t=\dfrac{4-1}9=\dfrac13$. The foot is $\mathbf{p}+\dfrac13\mathbf{n}=\left(\dfrac53,\dfrac43,\dfrac{10}3\right)$. The reflection is $\mathbf{p}+\dfrac23\mathbf{n}=\left(\dfrac73,\dfrac23,\dfrac{11}3\right)$.

Check: the midpoint of $P$ and $P'$ is $\left(\dfrac{1+7/3}2,\dfrac{2+2/3}2,\dfrac{3+11/3}2\right)=\left(\dfrac53,\dfrac43,\dfrac{10}3\right)$, the foot ✓.

### Example 10 (the distance from a parallel line to a plane, 4 marks)

Find the distance between the line of Example 2 and the plane $2x+y-z=9$.

*Solution.* The line is parallel to the plane. Take the point $(1,2,-1)$ on the line: the distance is $\dfrac{|2+2+1-9|}{\sqrt{4+1+1}}=\dfrac4{\sqrt6}=1.63$.

### Example 11 (the trace of a plane, 4 marks)

Find the line where the plane $x+2y+3z=6$ meets the plane $z=0$.

*Solution.* Putting $z=0$ gives $x+2y=6$ in the $xy$-plane. The direction is $\begin{pmatrix}1\\2\\3\end{pmatrix}\times\begin{pmatrix}0\\0\\1\end{pmatrix}=\begin{pmatrix}2\\-1\\0\end{pmatrix}$ and a point is $(6,0,0)$, so $\mathbf{r}=\begin{pmatrix}6\\0\\0\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\0\end{pmatrix}$.

Check: $\lambda=1$ gives $(8,-1,0)$ and $8-2=6$ ✓.

### Example 12 (a constant from a parallel condition, 4 marks)

Find $k$ such that the line with direction $\begin{pmatrix}k\\2\\1\end{pmatrix}$ is parallel to the plane $x-2y+3z=5$.

*Solution.* $\mathbf{d}\cdot\mathbf{n}=k-4+3=0$, so $k=1$.

### Example 13 (the angle with a coordinate plane, 4 marks)

Find the angle between the line $\mathbf{r}=\lambda\begin{pmatrix}1\\2\\2\end{pmatrix}$ and the $xy$-plane.

*Solution.* The normal of $z=0$ is $\begin{pmatrix}0\\0\\1\end{pmatrix}$. $\sin\varphi=\dfrac{2}{3\cdot1}$, so $\varphi=\sin^{-1}\dfrac23=41.8^{\circ}$.

### Example 14 (a combined problem, 10 marks)

The plane $\pi$ has equation $x+2y+2z=9$. The line $L$ passes through $A(1,0,1)$ and is perpendicular to $\pi$. (a) Find the point $B$ where $L$ meets $\pi$. (b) Find the distance $AB$. (c) Find the reflection of $A$ in $\pi$.

*Solution.* (a) The direction of $L$ is the normal $\begin{pmatrix}1\\2\\2\end{pmatrix}$, so $\mathbf{r}=\begin{pmatrix}1+t\\2t\\1+2t\end{pmatrix}$. Substituting: $(1+t)+4t+2(1+2t)=3+9t=9$, so $t=\dfrac23$ and $B=\left(\dfrac53,\dfrac43,\dfrac73\right)$. (b) $AB=|t||\mathbf{n}|=\dfrac23\cdot3=2$. (c) The reflection is $A'=\mathbf{a}+2t\mathbf{n}=\begin{pmatrix}1+\frac43\\\frac83\\1+\frac83\end{pmatrix}=\left(\dfrac73,\dfrac83,\dfrac{11}3\right)$.

Check: the distance by formula $\dfrac{|1+0+2-9|}3=2$ ✓.

## Using your GDC

The GDC can solve the linear equation for $\lambda$ (or $t$) and the system of three linear equations for the point of intersection of three planes, using the simultaneous equation or matrix solver. For three planes, a singular coefficient matrix (an error message, or a zero determinant) is the signal that the normals are dependent, which means you must decide between a line and no solution by checking the constants. Use the dot and cross product functions on vectors to find directions and angles, being careful to choose degree mode for the angles. For reflections, compute the parameter $t$ exactly and store it. Check an intersection point by substituting into both given equations. Menu names vary by model.

## Common mistakes

1. **Using $\cos$ instead of $\sin$** for the angle between a line and a plane.
2. **Taking the angle between the line direction and the plane's direction**, rather than with the normal.
3. **Failing to check for parallelism** and dividing by zero when $\mathbf{d}\cdot\mathbf{n}=0$.
4. **Concluding that a line lies in a plane** because $\mathbf{d}\cdot\mathbf{n}=0$, without checking that a point is in the plane.
5. **Forgetting that two planes meet in a line**, and giving a single point.
6. **Wrong direction for the line of intersection** (adding the normals instead of using the cross product).
7. **Confusing the arrangements of three planes**: "no solution" can mean parallel planes or a triangular prism.
8. **Not checking the final point** in all of the original equations.

## Exam technique and command terms

**Find the point of intersection** requires the parameter, the point and a check. **Show that the line is parallel to the plane** needs $\mathbf{d}\cdot\mathbf{n}=0$ and a statement that the point is not on the plane. **Find the angle between the line and the plane** requires the sine formula and the angle in degrees to $3$ significant figures. **Find the line of intersection** needs a direction (cross product) and a point. **Determine the geometrical arrangement** needs both the algebraic reasoning and a sentence in words. **Hence** means use the previous part's result.

Write the substitution of the general point of the line into the plane equation explicitly, since it is the method mark. For three planes, solve by elimination in an orderly way and express the conclusion in terms of the number of solutions. For the angle, state the vectors used and the formula, then the numerical answer, and check that the angle is acute (between $0^{\circ}$ and $90^{\circ}$ for line-plane and plane-plane questions, unless otherwise stated). Look for the shortcut that a perpendicular line through a point uses the normal as direction. Give distances to $3$ significant figures if not exact.

## Connections

AHL 3.13 supplied the scalar product used in all the angle formulae, AHL 3.14 and 3.15 the parametric line and the relation between lines, AHL 3.16 the vector product that gives the direction of the line of intersection of two planes, and AHL 3.17 the equation of a plane and the distance formula. AHL 1.16 provided the algebra of three linear equations in three unknowns, with the cases of a unique solution, infinitely many solutions and no solution, which correspond precisely to the geometrical arrangements here, and SL 2.1 gave the corresponding picture for two lines in a plane. SL 3.1 gave the three-dimensional solids in which the angles between lines and planes (such as an edge and the base of a pyramid) are found by the same methods. AHL 3.11 provided the inverse sine and cosine used to evaluate the angles. In Unit 5, finding the intersections of curves and surfaces with planes is the basis of cross-sections and volumes by slicing, and the angle between a tangent line and a plane is an application of the formula for $\varphi$.

## Check your understanding

1. Find where the line $\mathbf{r}=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$ meets the plane $2x-y+z=7$.
2. Show that the line $\mathbf{r}=\begin{pmatrix}1\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\0\\-1\end{pmatrix}$ lies in the plane $x+y+z=3$.
3. Find the angle between the line with direction $\begin{pmatrix}1\\2\\2\end{pmatrix}$ and the plane $2x-y+2z=5$.
4. Find the line of intersection of the planes $x+y-z=2$ and $2x-y+z=1$.
5. Find the angle between the planes $x+2y-2z=3$ and $2x+2y+z=7$.
6. Find the intersection of $x+y+z=6$, $x-y+z=2$ and $x+y-z=0$.
7. Show that the planes $x+y+z=1$, $x-y+z=3$ and $2x+2z=5$ have no common point, and describe the arrangement.
8. Find the distance between the line $\mathbf{r}=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\3\end{pmatrix}$ and the plane $2x+y-z=9$.
9. Find the reflection of $P(2,1,1)$ in the plane $x+y+z=3$.
10. Compare the plane $x-2y+z=3$ with (a) $3x-6y+3z=9$ and (b) $2x-4y+2z=5$.

### Answers

1. $2(1+\lambda)-2\lambda+(2-\lambda)=4-\lambda=7$, so $\lambda=-3$. The point is $(-2,-6,5)$. Check: $-4+6+5=7$ ✓.
2. $(1+\lambda)+1+(1-\lambda)=3$ for every $\lambda$, so every point of the line satisfies the plane equation: the line lies in the plane.
3. $\mathbf{d}\cdot\mathbf{n}=2-2+4=4$, $|\mathbf{d}|=3$ and $|\mathbf{n}|=3$. $\sin\varphi=\dfrac49$ and $\varphi=26.4^{\circ}$.
4. The direction is $\begin{pmatrix}1\\1\\-1\end{pmatrix}\times\begin{pmatrix}2\\-1\\1\end{pmatrix}=\begin{pmatrix}1\cdot1-(-1)(-1)\\(-1)2-1\cdot1\\1(-1)-1\cdot2\end{pmatrix}=\begin{pmatrix}0\\-3\\-3\end{pmatrix}$, simplified to $\begin{pmatrix}0\\1\\1\end{pmatrix}$. Adding the equations: $3x=3$, so $x=1$ and $y-z=1$; a point is $(1,1,0)$. The line is $\mathbf{r}=\begin{pmatrix}1\\1\\0\end{pmatrix}+\lambda\begin{pmatrix}0\\1\\1\end{pmatrix}$. Check $\lambda=1$: $(1,2,1)$ with $1+2-1=2$ ✓ and $2-2+1=1$ ✓.
5. $\mathbf{n}_1\cdot\mathbf{n}_2=2+4-2=4$ and $|\mathbf{n}_1|=|\mathbf{n}_2|=3$. $\cos\theta=\dfrac49$ and $\theta=63.6^{\circ}$.
6. Adding the first and third: $2x+2y=6$, so $x+y=3$ and $z=3$ (from the first). The second gives $x-y+3=2$, so $x-y=-1$. Then $x=1$, $y=2$. The point is $(1,2,3)$. Check: $1-2+3=2$ ✓ and $1+2-3=0$ ✓.
7. Adding the first two: $2x+2z=4$. The third plane says $2x+2z=5$: contradiction, so no common point. The normals $\begin{pmatrix}1\\1\\1\end{pmatrix}$, $\begin{pmatrix}1\\-1\\1\end{pmatrix}$ and $\begin{pmatrix}2\\0\\2\end{pmatrix}$ are pairwise non-parallel, so the planes meet pairwise in three parallel lines: a triangular prism arrangement.
8. The line is parallel to the plane (as $\mathbf{d}\cdot\mathbf{n}=0$ and the point $(1,2,-1)$ gives $2+2+1=5\ne9$). The distance is $\dfrac{|5-9|}{\sqrt6}=\dfrac4{\sqrt6}=1.63$.
9. $\mathbf{n}=\begin{pmatrix}1\\1\\1\end{pmatrix}$, $\mathbf{n}\cdot\mathbf{p}=4$, $t=\dfrac{3-4}3=-\dfrac13$. The reflection is $\mathbf{p}+2t\mathbf{n}=\left(2-\dfrac23,\ 1-\dfrac23,\ 1-\dfrac23\right)=\left(\dfrac43,\dfrac13,\dfrac13\right)$.
10. (a) $3x-6y+3z=9$ is $3\times$ the first equation including the constant: coincident planes. (b) $2x-4y+2z=5$ is $x-2y+z=2.5\ne3$: parallel and distinct, at a distance $\dfrac{|3-2.5|}{\sqrt6}=0.204$.

## Summary

- Line and plane: substitute the general point of the line into the plane equation; $\lambda(\mathbf{d}\cdot\mathbf{n})=k-\mathbf{a}\cdot\mathbf{n}$ gives a point, no solution (parallel) or all $\lambda$ (line in the plane).
- Angle between a line and a plane: $\sin\varphi=\dfrac{|\mathbf{d}\cdot\mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$; between two planes: $\cos\theta=\dfrac{|\mathbf{n}_1\cdot\mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$.
- Two non-parallel planes meet in a line with direction $\mathbf{n}_1\times\mathbf{n}_2$ and a point found by setting a variable to a convenient value.
- Three planes: a point (independent normals), a common line (dependent and consistent), or no common point (triangular prism or parallel planes).
- Foot and reflection: $t=\dfrac{k-\mathbf{n}\cdot\mathbf{p}}{|\mathbf{n}|^{2}}$, foot $\mathbf{p}+t\mathbf{n}$, reflection $\mathbf{p}+2t\mathbf{n}$, distance $|t||\mathbf{n}|$.
- Always state the conclusion in words and check the answer in the original equations.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 3.18. Related facts may appear elsewhere. Justify any method used here.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
