# Vector equations of lines

> **AHL 3.14 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- write the vector equation $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$ of a line in two and three dimensions, and explain the role of the position vector and the direction vector;
- convert between the vector, parametric and Cartesian forms of a line;
- find the equation of a line through two points, through a point parallel to a given line, and in the plane (relating the vector form to $y=mx+c$);
- decide whether a given point lies on a line, and find the parameter for a given point;
- find where a line meets a coordinate plane;
- find the angle between two lines from their direction vectors;
- model motion at constant velocity by $\mathbf{r}=\mathbf{r}_0+t\mathbf{v}$ and find speed, position and time of passing;
- find the foot of the perpendicular from a point to a line and the shortest distance from a point to a line;
- find the minimum distance between two moving objects by minimising a quadratic.

## Why this topic matters

A line in the plane is usually written $y=mx+c$. In three dimensions that equation no longer describes a line, since it is a plane in $(x,y,z)$-space. To describe a line in space you need a different idea: a line is determined by *one point on it* and *a direction*. Start at the point and move any distance in the direction (forwards or backwards), and you trace the line. This idea, written $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$, works equally in two, three or more dimensions, and it also describes motion: an aircraft with position $\mathbf{r}_0$ and velocity $\mathbf{v}$ has position $\mathbf{r}_0+t\mathbf{v}$ at time $t$, which is a vector equation of a line with $\lambda$ replaced by time. In this chapter we develop the vector form of the line, its parametric and Cartesian companions, and the standard problems: whether a point is on a line, where a line crosses a plane, the angle between lines, and the shortest distance from a point to a line. The last of these uses the scalar product from AHL 3.13 (perpendicularity), and the same idea of minimising a quadratic that you have seen in SL 2.7 and Unit 5. This is a favourite topic of HL Paper 2 and Paper 3, usually as a multi-part question on two moving objects or on lines in a solid figure. The marks lie in getting the structure right: knowing which vector is the position and which is the direction, and writing the parameter equations systematically.

## Core ideas

### The vector equation of a line

Let $A$ be a point on the line with position vector $\mathbf{a}$, and let $\mathbf{d}$ be a (non-zero) direction vector. Every point $R$ on the line has position vector
$$
\mathbf{r}=\mathbf{a}+\lambda\mathbf{d},\qquad\lambda\in\mathbb{R}.
$$
Here $\lambda$ is a **parameter**: each value of $\lambda$ gives one point. $\lambda=0$ gives $A$; positive $\lambda$ moves in the direction of $\mathbf{d}$ and negative $\lambda$ in the opposite direction. Equivalent forms: $\mathbf{r}=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}+\lambda\begin{pmatrix}d_1\\d_2\\d_3\end{pmatrix}$. The representation is *not* unique: any point on the line can serve as $\mathbf{a}$ and any non-zero multiple of $\mathbf{d}$ can serve as the direction vector. Two different-looking equations can describe the same line.

### Parametric form

Writing the three components separately,
$$
x=a_1+\lambda d_1,\qquad y=a_2+\lambda d_2,\qquad z=a_3+\lambda d_3.
$$
These are the **parametric equations**. They are the most convenient form for substitution and for checking whether a point lies on the line.

### Cartesian form

If $d_1$, $d_2$ and $d_3$ are all non-zero, eliminating $\lambda$ gives
$$
\frac{x-a_1}{d_1}=\frac{y-a_2}{d_2}=\frac{z-a_3}{d_3}\ (=\lambda).
$$
This is the **Cartesian** (or symmetric) form. To read a point and direction from it, the coefficients of $x$, $y$ and $z$ in the numerators must be $1$; otherwise rewrite. For example $\dfrac{2y+6}4$ is $\dfrac{y+3}2$, so the $y$-component of the direction is $2$ and the $y$-coordinate of the point is $-3$. If the numerator has a negative $y$ such as $\dfrac{3-z}1$, rewrite as $\dfrac{z-3}{-1}$. If a component of the direction is zero, say $d_3=0$, the Cartesian form is written $\dfrac{x-a_1}{d_1}=\dfrac{y-a_2}{d_2},\ z=a_3$.

### A line through two points

The line through $A$ and $B$ has direction $\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$, so $\mathbf{r}=\mathbf{a}+\lambda(\mathbf{b}-\mathbf{a})$. With $\lambda=0$ we get $A$ and with $\lambda=1$ we get $B$; $0<\lambda<1$ gives the points between them (the segment). This is also written $\mathbf{r}=(1-\lambda)\mathbf{a}+\lambda\mathbf{b}$.

### Lines in the plane

In two dimensions, $\mathbf{r}=\begin{pmatrix}x_0\\y_0\end{pmatrix}+\lambda\begin{pmatrix}p\\q\end{pmatrix}$ describes a line of gradient $m=\dfrac qp$ (for $p\ne0$) through $(x_0,y_0)$. Conversely, $y=mx+c$ has the direction vector $\begin{pmatrix}1\\m\end{pmatrix}$ and passes through $(0,c)$, so $\mathbf{r}=\begin{pmatrix}0\\c\end{pmatrix}+\lambda\begin{pmatrix}1\\m\end{pmatrix}$. Eliminating $\lambda$ from the parametric equations returns the Cartesian equation (SL 2.1).

### Testing whether a point is on a line

To test the point $P(p_1,p_2,p_3)$: write the three parametric equations, solve one of them for $\lambda$, and check the other two with the same $\lambda$. The point is on the line only if *all three* agree. To find an unknown coordinate of a point known to be on the line, use the known coordinates to find $\lambda$ first.

### Where a line meets a coordinate plane

The plane $z=0$ (the $xy$-plane): put the $z$-component of the line equal to $0$, solve for $\lambda$ and substitute into $x$ and $y$. The same holds for $x=0$ and $y=0$. For a general plane $ax+by+cz=d$ see AHL 3.18.

### The angle between two lines

The angle between two lines is the angle between their direction vectors, found with the scalar product (AHL 3.13): $\cos\theta=\dfrac{|\mathbf{d}_1\cdot\mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$ gives the acute angle. If the formula without the modulus gives a negative cosine, the lines meet at the obtuse angle $\theta$ and also at the acute angle $\pi-\theta$; the "angle between the lines" is conventionally the acute one unless the question asks for the angle between direction vectors. Lines are perpendicular if $\mathbf{d}_1\cdot\mathbf{d}_2=0$ and parallel if the direction vectors are scalar multiples (AHL 3.15).

### Motion at constant velocity

A particle starting from $\mathbf{r}_0$ with constant velocity $\mathbf{v}$ has position $\mathbf{r}(t)=\mathbf{r}_0+t\mathbf{v}$ for $t\ge0$. This is a *half-line* (only $t\ge0$). The speed is $|\mathbf{v}|$ and the distance travelled between times $t_1$ and $t_2$ is $|\mathbf{v}|(t_2-t_1)$. To find when the particle crosses a line or plane, substitute the parametric equations. To find where it is nearest to a fixed point, use the methods below.

### The foot of the perpendicular and the shortest distance from a point to a line

Given a point $P$ and the line $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$, the closest point $F$ on the line to $P$ is the **foot of the perpendicular**: the point $F$ with $\overrightarrow{PF}\perp\mathbf{d}$.

1. Write $F$ in terms of $\lambda$: $\mathbf{f}=\mathbf{a}+\lambda\mathbf{d}$.
2. Write $\overrightarrow{PF}=\mathbf{f}-\mathbf{p}$, which depends on $\lambda$.
3. Solve $\overrightarrow{PF}\cdot\mathbf{d}=0$ for $\lambda$.
4. Substitute to find $F$, and compute the distance $|\overrightarrow{PF}|$.

The reflection of $P$ in the line is $P'$ with $\mathbf{p}'=2\mathbf{f}-\mathbf{p}$ (since $F$ is the midpoint of $PP'$). An alternative to step 3 is to minimise $|\overrightarrow{PF}|^{2}$ as a quadratic in $\lambda$ (using the vertex or the GDC), which gives the same $\lambda$.

### Minimum distance between two moving objects

If two objects have positions $\mathbf{r}_A(t)=\mathbf{a}_0+t\mathbf{u}$ and $\mathbf{r}_B(t)=\mathbf{b}_0+t\mathbf{v}$, then the separation vector $\overrightarrow{AB}(t)=(\mathbf{b}_0-\mathbf{a}_0)+t(\mathbf{v}-\mathbf{u})$ is itself a linear function of $t$, and $d^{2}=|\overrightarrow{AB}(t)|^{2}$ is a quadratic in $t$. The minimum of the quadratic gives the time of closest approach and the minimum distance (take the square root). The objects *collide* if there is a time at which $\overrightarrow{AB}(t)=\mathbf{0}$, that is, all components vanish at the same $t$. Do not confuse "paths intersect" (the lines cross, perhaps at different times) with "particles collide" (they arrive at the crossing point at the same time).

## Worked examples

### Example 1 (writing a line and testing points, 6 marks)

A line passes through $A(1,2,-1)$ with direction $\begin{pmatrix}2\\-1\\3\end{pmatrix}$. (a) Write its vector equation. (b) Determine whether $(5,0,5)$ and $(3,1,3)$ lie on it.

*Solution.* (a) $\mathbf{r}=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\3\end{pmatrix}$. (b) For $(5,0,5)$: $1+2\lambda=5$ gives $\lambda=2$; $y=2-2=0$ ✓; $z=-1+6=5$ ✓. So it lies on the line. For $(3,1,3)$: $1+2\lambda=3$ gives $\lambda=1$; $y=2-1=1$ ✓ but $z=-1+3=2\ne3$. So it does not lie on the line.

### Example 2 (a line through two points, 5 marks)

Find the vector equation and the Cartesian equation of the line through $A(2,-1,4)$ and $B(5,3,0)$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}3\\4\\-4\end{pmatrix}$. The vector equation is $\mathbf{r}=\begin{pmatrix}2\\-1\\4\end{pmatrix}+\lambda\begin{pmatrix}3\\4\\-4\end{pmatrix}$. The Cartesian form is $\dfrac{x-2}3=\dfrac{y+1}4=\dfrac{z-4}{-4}$.

Check: at $\lambda=1$ we get $(5,3,0)=B$ ✓.

### Example 3 (from Cartesian to vector form, 6 marks)

Write the line $\dfrac{x-1}2=\dfrac{2y+6}4=\dfrac{3-z}1$ in vector form.

*Solution.* Rewrite each fraction with coefficient $1$: $\dfrac{x-1}2=\dfrac{y+3}2=\dfrac{z-3}{-1}$. So a point is $(1,-3,3)$ and a direction is $\begin{pmatrix}2\\2\\-1\end{pmatrix}$, and $\mathbf{r}=\begin{pmatrix}1\\-3\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\2\\-1\end{pmatrix}$.

### Example 4 (a line in the plane, 5 marks)

(a) Write the equation of the line through $(1,3)$ with gradient $2$ in vector form. (b) Find the gradient and Cartesian equation of $\mathbf{r}=\begin{pmatrix}2\\5\end{pmatrix}+\lambda\begin{pmatrix}3\\-1\end{pmatrix}$.

*Solution.* (a) A direction vector is $\begin{pmatrix}1\\2\end{pmatrix}$, so $\mathbf{r}=\begin{pmatrix}1\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\2\end{pmatrix}$. (b) The gradient is $-\dfrac13$. From $y-5=-\dfrac13(x-2)$ we get $x+3y=17$.

### Example 5 (where a line meets coordinate planes, 5 marks)

The line is $\mathbf{r}=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\3\end{pmatrix}$. Find where it meets (a) the plane $z=5$; (b) the $xy$-plane.

*Solution.* (a) $-1+3\lambda=5$ gives $\lambda=2$ and the point $(5,0,5)$. (b) $z=0$: $\lambda=\dfrac13$, giving $\left(\dfrac53,\dfrac53,0\right)$.

### Example 6 (the angle between lines, 6 marks)

Find the acute angle between lines with directions $\mathbf{d}_1=\begin{pmatrix}1\\2\\2\end{pmatrix}$ and $\mathbf{d}_2=\begin{pmatrix}2\\3\\6\end{pmatrix}$. Then find the acute angle between lines with directions $\begin{pmatrix}1\\0\\1\end{pmatrix}$ and $\begin{pmatrix}-1\\1\\0\end{pmatrix}$.

*Solution.* First: $\mathbf{d}_1\cdot\mathbf{d}_2=2+6+12=20$, $|\mathbf{d}_1|=3$ and $|\mathbf{d}_2|=7$. $\cos\theta=\dfrac{20}{21}$ and $\theta=17.8^{\circ}$. Second: the dot product is $-1$ and the magnitudes are $\sqrt2$ each, so $\cos\theta=-\dfrac12$ and $\theta=120^{\circ}$. The acute angle between the lines is $180^{\circ}-120^{\circ}=60^{\circ}$.

### Example 7 (motion, 5 marks)

A boat is at $(2,5)$ km at time $t=0$ and moves with velocity $\begin{pmatrix}3\\-4\end{pmatrix}$ km/h. Find its speed, its position when $t=2$ and the time when it crosses the $x$-axis.

*Solution.* Speed $=\sqrt{9+16}=5$ km/h. $\mathbf{r}(t)=\begin{pmatrix}2+3t\\5-4t\end{pmatrix}$, so at $t=2$ it is at $(8,-3)$. It crosses the $x$-axis when $5-4t=0$, so $t=1.25$ h.

### Example 8 (the shortest distance from a point to a line, 9 marks)

Find the shortest distance from $P(4,1,2)$ to the line $\mathbf{r}=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix}$, and the foot of the perpendicular.

*Solution.* A general point of the line is $F=(1+\lambda,\ 2\lambda,\ 1+2\lambda)$. Then $\overrightarrow{PF}=\begin{pmatrix}\lambda-3\\2\lambda-1\\2\lambda-1\end{pmatrix}$. Perpendicular to the direction: $(\lambda-3)+2(2\lambda-1)+2(2\lambda-1)=9\lambda-7=0$, so $\lambda=\dfrac79$ and $F=\left(\dfrac{16}9,\dfrac{14}9,\dfrac{23}9\right)$. Then $\overrightarrow{PF}=\dfrac19\begin{pmatrix}-20\\5\\5\end{pmatrix}$ and the distance is $\dfrac19\sqrt{400+25+25}=\dfrac{\sqrt{450}}9=\dfrac{5\sqrt2}3=2.36$.

Check: $\overrightarrow{PF}\cdot\mathbf{d}=\dfrac19(-20+10+10)=0$ ✓.

### Example 9 (the reflection of a point in a line, 4 marks)

Find the reflection of $P(4,1,2)$ in the line of Example 8.

*Solution.* $F$ is the midpoint of $PP'$, so $\mathbf{p}'=2\mathbf{f}-\mathbf{p}=\left(\dfrac{32}9-4,\ \dfrac{28}9-1,\ \dfrac{46}9-2\right)=\left(-\dfrac49,\dfrac{19}9,\dfrac{28}9\right)$.

### Example 10 (two moving objects, 9 marks)

Particle $A$ moves with position $\begin{pmatrix}3t\\t\end{pmatrix}$ and particle $B$ with position $\begin{pmatrix}10-t\\2t\end{pmatrix}$, for $t\ge0$. Find the minimum distance between them and the time at which it occurs. Do they collide?

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}10-4t\\t\end{pmatrix}$, so $d^{2}=(10-4t)^{2}+t^{2}=17t^{2}-80t+100$. The vertex is at $t=\dfrac{80}{34}=\dfrac{40}{17}=2.35$. The minimum $d^{2}=100-\dfrac{1600}{17}=\dfrac{100}{17}$, so $d=\dfrac{10}{\sqrt{17}}=2.43$. They do not collide, because the minimum distance is not zero.

Check: at $t=\dfrac{40}{17}$ the vector is $\begin{pmatrix}10-\frac{160}{17}\\\frac{40}{17}\end{pmatrix}=\dfrac1{17}\begin{pmatrix}10\\40\end{pmatrix}$ and its length is $\dfrac{\sqrt{1700}}{17}=\dfrac{10\sqrt{17}}{17}=\dfrac{10}{\sqrt{17}}$ ✓.

### Example 11 (an unknown point on a line, 4 marks)

The point $(k,4,m)$ lies on $\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$. Find $k$ and $m$.

*Solution.* From $y$: $2-\lambda=4$, so $\lambda=-2$. Then $k=1+2(-2)=-3$ and $m=3-2=1$.

### Example 12 (from parametric equations, 3 marks)

A line has parametric equations $x=2+3\lambda$, $y=-1+\lambda$, $z=4-2\lambda$. Write it in vector form and state a direction vector.

*Solution.* $\mathbf{r}=\begin{pmatrix}2\\-1\\4\end{pmatrix}+\lambda\begin{pmatrix}3\\1\\-2\end{pmatrix}$, direction $\begin{pmatrix}3\\1\\-2\end{pmatrix}$.

### Example 13 (the same line in different forms, 4 marks)

Show that $\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}5\\0\\5\end{pmatrix}+\mu\begin{pmatrix}-4\\2\\-2\end{pmatrix}$ describe the same line.

*Solution.* The direction vectors are parallel: $\begin{pmatrix}-4\\2\\-2\end{pmatrix}=-2\begin{pmatrix}2\\-1\\1\end{pmatrix}$. The point $(5,0,5)$ is on the first line: $1+2\lambda=5$ gives $\lambda=2$, $y=2-2=0$ ✓ and $z=3+2=5$ ✓. Parallel lines with a common point are the same line.

## Using your GDC

For intersections with coordinate planes and parameter values, solve the single linear equation by hand. For the closest-approach problems, the quadratic $d^{2}(t)$ can be plotted and its minimum found with the *minimum* tool; this also checks an algebraic vertex. If your GDC has a polynomial or equation solver, it can solve the simultaneous linear equations in the unknown parameter. Another useful trick is to plot $d(t)=\sqrt{d^{2}}$ for a moving-objects problem to see the shape of the distance over time. For a point-to-line distance in three dimensions, set the function $|\overrightarrow{PF}(\lambda)|$ and use the *minimum* tool to verify the perpendicular-foot answer. Enter vectors as matrices if your GDC supports norm and dot product functions. Keep results exact until the final step. Menu names vary by model.

## Common mistakes

1. **Confusing the point and the direction**: in $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$, $\mathbf{a}$ is a position and $\mathbf{d}$ a direction.
2. **Wrong direction for a line through two points**: $\mathbf{b}-\mathbf{a}$ (or its negative), never $\mathbf{a}+\mathbf{b}$.
3. **Forgetting $\mathbf{r}=$** or writing only the right-hand side.
4. **Reading the Cartesian form incorrectly** when the coefficients are not $1$ or the signs are reversed.
5. **Checking only one coordinate** when testing a point.
6. **Using the same parameter** for two different lines when solving for an intersection (use $\lambda$ and $\mu$, see AHL 3.15).
7. **Computing the distance from the point to a point on the line** rather than to the foot of the perpendicular.
8. **Confusing intersection of paths with collision.**

## Exam technique and command terms

**Find the vector equation** needs the form $\mathbf{r}=\ldots$ with a point and a direction, written clearly. **Show that the point lies on the line** needs a value of $\lambda$ that works for every coordinate. **Find the shortest distance** requires the perpendicularity condition (or minimisation) and the final length. **Find the angle between the lines** uses the direction vectors; state whether you give the acute angle. **Hence** often links the foot of the perpendicular to the distance.

A reliable layout: (1) state the parametric equations; (2) set up the condition in terms of one parameter; (3) solve; (4) substitute back; (5) answer the question in context. In kinematics, use $t$ for time, include units, and state the time interval ($t\ge0$). If two lines are given with the same letter $\lambda$, rename one to $\mu$ before solving. If you can, check by substituting back into the original line equations, and check the perpendicularity by recomputing the dot product at the end.

## Connections

AHL 3.12 provided position vectors, direction vectors, parallel vectors and the motion model $\mathbf{r}=\mathbf{r}_0+t\mathbf{v}$, and AHL 3.13 the scalar product for angles and perpendicular feet. SL 2.1 provided the equations of lines in the plane, which now appear as special cases, and SL 2.7 the minimum of a quadratic used for closest-approach problems. SL 3.1 gave distances in three dimensions. AHL 3.15 asks whether two lines in three dimensions are parallel, coincident, intersecting or skew, using the parameters introduced here; AHL 3.17 and 3.18 intersect lines with planes. In AHL 1.16 the solution of systems of linear equations is interpreted geometrically as the intersection of planes, and the solution set, a line, is written in exactly the vector form of this chapter. In AHL 1.14 and 1.12 loci in the complex plane include lines such as $|z-a|=|z-b|$, which can be expressed in vector form. In Unit 5, the derivative of a position vector with respect to time gives the velocity vector, a direct generalisation of $\mathbf{v}$ here, and minimum-distance problems are solved by calculus as an alternative to completing the square.

## Check your understanding

1. Write the vector, parametric and Cartesian equations of the line through $(2,-3,1)$ with direction $\begin{pmatrix}1\\4\\-2\end{pmatrix}$.
2. Show that $(5,9,-5)$ lies on the line $\mathbf{r}=\begin{pmatrix}2\\-3\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\4\\-2\end{pmatrix}$ and that $(4,6,-3)$ does not.
3. Find the vector equation of the line through $A(1,0,-2)$ and $B(3,-4,2)$, and the point where it meets the plane $z=0$.
4. Write the line $\dfrac{x+2}3=\dfrac{y-1}{-2}=\dfrac{z+4}5$ in vector form.
5. Find the acute angle between lines with directions $\begin{pmatrix}1\\-2\\2\end{pmatrix}$ and $\begin{pmatrix}2\\2\\-1\end{pmatrix}$.
6. Find the shortest distance from $P(2,3,1)$ to the line $\mathbf{r}=\begin{pmatrix}0\\1\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\1\end{pmatrix}$ and the foot of the perpendicular.
7. A particle has position $\mathbf{r}=\begin{pmatrix}1\\-2\end{pmatrix}+t\begin{pmatrix}4\\3\end{pmatrix}$ for $t\ge0$. Find its speed and its minimum distance from the origin.
8. Find the Cartesian equation of the line $\mathbf{r}=\begin{pmatrix}2\\5\end{pmatrix}+\lambda\begin{pmatrix}3\\-1\end{pmatrix}$ in the form $ax+by=c$.
9. Find the point where the line $\mathbf{r}=\begin{pmatrix}3\\1\\-2\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ meets the plane $y=0$.
10. Show that $\mathbf{r}=\begin{pmatrix}1\\1\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\3\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}3\\5\\7\end{pmatrix}+\mu\begin{pmatrix}-2\\-4\\-6\end{pmatrix}$ are the same line.

### Answers

1. Vector: $\mathbf{r}=\begin{pmatrix}2\\-3\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\4\\-2\end{pmatrix}$. Parametric: $x=2+\lambda$, $y=-3+4\lambda$, $z=1-2\lambda$. Cartesian: $x-2=\dfrac{y+3}4=\dfrac{z-1}{-2}$.
2. For $(5,9,-5)$: $\lambda=3$, then $y=-3+12=9$ ✓ and $z=1-6=-5$ ✓. For $(4,6,-3)$: $\lambda=2$, then $y=-3+8=5\ne6$, so it is not on the line.
3. $\overrightarrow{AB}=\begin{pmatrix}2\\-4\\4\end{pmatrix}$, so $\mathbf{r}=\begin{pmatrix}1\\0\\-2\end{pmatrix}+\lambda\begin{pmatrix}2\\-4\\4\end{pmatrix}$ (or with direction $\begin{pmatrix}1\\-2\\2\end{pmatrix}$). $z=0$: $-2+4\lambda=0$, $\lambda=\dfrac12$, giving $(2,-2,0)$.
4. $\mathbf{r}=\begin{pmatrix}-2\\1\\-4\end{pmatrix}+\lambda\begin{pmatrix}3\\-2\\5\end{pmatrix}$.
5. The dot product is $2-4-2=-4$ and the magnitudes are $3$ and $3$, so $\cos\theta=-\dfrac49$ and the angle between the direction vectors is $116.4^{\circ}$. The acute angle between the lines is $63.6^{\circ}$.
6. $F=(\lambda,1+\lambda,2+\lambda)$ and $\overrightarrow{PF}=\begin{pmatrix}\lambda-2\\\lambda-2\\\lambda+1\end{pmatrix}$. Perpendicular: $(\lambda-2)+(\lambda-2)+(\lambda+1)=3\lambda-3=0$, so $\lambda=1$, $F=(1,2,3)$ and $\overrightarrow{PF}=\begin{pmatrix}-1\\-1\\2\end{pmatrix}$, giving the distance $\sqrt6=2.45$.
7. Speed $=5$. $|\mathbf{r}|^{2}=(1+4t)^{2}+(3t-2)^{2}=25t^{2}-4t+5$, minimised at $t=\dfrac2{25}=0.08\ (\ge0)$ with the value $5-\dfrac4{25}=4.84$. The minimum distance is $\sqrt{4.84}=2.2$.
8. The gradient is $-\dfrac13$, so $y-5=-\dfrac13(x-2)$, giving $x+3y=17$.
9. $y=0$: $1-\lambda=0$, so $\lambda=1$ and the point is $(5,0,-1)$.
10. The direction vectors are parallel, as $\begin{pmatrix}-2\\-4\\-6\end{pmatrix}=-2\begin{pmatrix}1\\2\\3\end{pmatrix}$. The point $(3,5,7)$ is on the first line: $\lambda=2$ gives $(3,5,7)$ ✓. The lines are parallel with a common point, so they are the same line.

## Summary

- Line: $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$ with position vector $\mathbf{a}$ and direction $\mathbf{d}$; parametric $x=a_1+\lambda d_1$ etc.; Cartesian $\dfrac{x-a_1}{d_1}=\dfrac{y-a_2}{d_2}=\dfrac{z-a_3}{d_3}$.
- Through two points $A$, $B$: $\mathbf{r}=\mathbf{a}+\lambda(\mathbf{b}-\mathbf{a})$.
- To test a point, find $\lambda$ from one coordinate and check the rest.
- The angle between lines is the angle between direction vectors (give the acute one).
- Motion: $\mathbf{r}=\mathbf{r}_0+t\mathbf{v}$; speed $|\mathbf{v}|$.
- The foot of the perpendicular from $P$ satisfies $\overrightarrow{PF}\cdot\mathbf{d}=0$; the reflection is $2\mathbf{f}-\mathbf{p}$.
- The closest approach of two moving objects is the minimum of a quadratic $d^{2}(t)$; paths crossing is not the same as colliding.
