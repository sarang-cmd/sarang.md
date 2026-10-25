# Coincident, parallel, intersecting and skew lines

> **AHL 3.15 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- classify two lines in three dimensions as coincident, parallel (distinct), intersecting or skew, and explain why skew lines occur only in three or more dimensions;
- apply the decision procedure: compare directions, then test a common point, then solve for an intersection;
- find the point of intersection of two lines and the angle between them;
- find unknown constants so that two lines intersect, are parallel or are perpendicular;
- work with lines given in vector, parametric or Cartesian form;
- distinguish *paths that intersect* from *moving objects that collide*, and find the minimum distance between moving objects;
- find the distance between two parallel lines and the shortest distance between two skew lines;
- justify each classification with a clear statement of the evidence.

## Why this topic matters

In a plane, two distinct lines either meet at a single point or are parallel. There is no third possibility. In three-dimensional space there is: two lines can fail to be parallel and still never meet, because one passes "over" the other, like two roads at different levels on a flyover, or the edges of a cube that do not share a face. Such lines are called **skew**. This chapter turns that qualitative picture into a systematic classification, which is the central skill and a very common question in HL Paper 2 (typically a part such as "show that the lines do not intersect" or "find the value of $a$ for which the lines intersect"). It also gives the second half of the kinematics story begun in AHL 3.14: if two aircraft or two particles follow straight paths, do they collide? Their paths might cross, but the objects might pass the crossing point at different times, and whether they come dangerously close requires a minimum-distance calculation. The mathematical tool is the one you already know: set the vector equations equal, which gives three equations in two unknown parameters. Three equations in two unknowns usually have no solution. When they do, the lines intersect; when they do not, the lines are skew (provided they are not parallel). The skill is to organise the work so that the classification is rigorous and the conclusion is stated in words. Marks are lost when students solve only two of the three equations and forget to check the third, or when they use the same parameter letter for both lines.

## Core ideas

### The four possibilities

For two lines $L_1:\mathbf{r}=\mathbf{a}_1+\lambda\mathbf{d}_1$ and $L_2:\mathbf{r}=\mathbf{a}_2+\mu\mathbf{d}_2$ in space:

- **Coincident**: the same line (infinitely many common points).
- **Parallel and distinct**: $\mathbf{d}_1\parallel\mathbf{d}_2$ and no common point.
- **Intersecting**: not parallel, exactly one common point.
- **Skew**: not parallel and no common point.

In two dimensions, skew lines cannot occur: lines that are not parallel always meet.

### Decision procedure

**Step 1. Compare the direction vectors.** If $\mathbf{d}_2=k\mathbf{d}_1$ for some $k\ne0$, the lines are parallel or coincident. Go to step 2. Otherwise go to step 3.

**Step 2 (parallel directions).** Test whether the point $\mathbf{a}_2$ lies on $L_1$ (find $\lambda$ from one coordinate and check the others). If it does, the lines are **coincident**; if not, they are **parallel and distinct**.

**Step 3 (non-parallel directions).** Equate the position vectors: $\mathbf{a}_1+\lambda\mathbf{d}_1=\mathbf{a}_2+\mu\mathbf{d}_2$. This gives three scalar equations in $\lambda$ and $\mu$. Solve two of them for $\lambda$ and $\mu$, and *substitute into the third*. If the third equation is satisfied, the lines **intersect**, and the point is found by substituting the parameter into either line. If it is not satisfied, the lines are **skew**.

Always use different letters ($\lambda$, $\mu$) for the two parameters. Always state the conclusion in words and give the reason ("the third equation gives $4\ne5$, so there is no solution, so the lines do not intersect; as the directions are not parallel the lines are skew").

### The intersection point and the angle

If the lines intersect, the point of intersection is found from the common parameter values, and should be checked in both lines. The angle between the lines is the acute angle between direction vectors, $\cos\theta=\dfrac{|\mathbf{d}_1\cdot\mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$ (AHL 3.13). If $\mathbf{d}_1\cdot\mathbf{d}_2=0$ the lines are perpendicular, and, if also intersecting, they meet at right angles. Skew lines can also be described as perpendicular if their directions are, but they do not meet.

### Lines given in Cartesian form

For a Cartesian form such as $\dfrac{x-1}2=\dfrac{y+1}1=\dfrac{z-3}{-1}$, either convert to parametric form ($x=1+2\lambda$, $y=-1+\lambda$, $z=3-\lambda$) and proceed as above, or read the point and direction directly. Conversion is the safer course.

### Finding unknown constants

If the question says "the lines intersect" and one constant (such as $a$ in a point $(3,0,a)$) is unknown, then: solve the two equations that do not contain the unknown to get $\lambda$ and $\mu$, and use the third equation to find the unknown. If the question says the lines are parallel, equate ratios of direction components; if perpendicular, set the dot product to $0$.

### Paths versus collisions

If particles $A$ and $B$ have positions $\mathbf{r}_A(t)$ and $\mathbf{r}_B(t)$ with the *same time variable*, then their paths intersect if there exist times $t_1$ and $t_2$ with $\mathbf{r}_A(t_1)=\mathbf{r}_B(t_2)$, but they **collide** only if $t_1=t_2$. To test for a collision, equate the position vectors using the *same* $t$ and check all three components. The distance between them is $|\mathbf{r}_B(t)-\mathbf{r}_A(t)|$, whose square is a quadratic in $t$ whose minimum gives the closest approach (AHL 3.14). In problems about real-world objects the parameter is time and has the restriction $t\ge0$.

### The distance between two parallel lines

Choose a point $A$ on one line and a point $Q$ on the other. The distance is the length of the component of $\overrightarrow{AQ}$ perpendicular to the common direction $\mathbf{d}$:
$$
\text{distance}^{2}=|\overrightarrow{AQ}|^{2}-\frac{(\overrightarrow{AQ}\cdot\mathbf{d})^{2}}{|\mathbf{d}|^{2}}.
$$
This is Pythagoras applied to $\overrightarrow{AQ}$ and its projection on $\mathbf{d}$ (AHL 3.13). Equivalently, find the foot of the perpendicular from $Q$ to the first line as in AHL 3.14.

### The shortest distance between two skew lines

The shortest segment between skew lines is perpendicular to both. Let $P(\lambda)$ be a general point of $L_1$ and $Q(\mu)$ a general point of $L_2$. Impose
$$
\overrightarrow{PQ}\cdot\mathbf{d}_1=0,\qquad\overrightarrow{PQ}\cdot\mathbf{d}_2=0.
$$
These are two linear equations in $\lambda$ and $\mu$. Solve them and compute $|\overrightarrow{PQ}|$. (A faster method with the vector product $\mathbf{n}=\mathbf{d}_1\times\mathbf{d}_2$ is: distance $=\dfrac{|\overrightarrow{P_0Q_0}\cdot\mathbf{n}|}{|\mathbf{n}|}$, where $P_0$ and $Q_0$ are any points on the two lines; this uses the vector product of AHL 3.16.) The calculation of the shortest distance between skew lines goes slightly beyond the usual examination demands, but it is a natural application of the perpendicularity condition and a good test of understanding.

## Worked examples

### Example 1 (intersecting lines, 8 marks)

Show that the lines $L_1:\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ and $L_2:\mathbf{r}=\begin{pmatrix}2\\0\\5\end{pmatrix}+\mu\begin{pmatrix}1\\1\\-1\end{pmatrix}$ intersect, find the point of intersection and the angle between the lines.

*Solution.* The directions are not parallel. Equate: $1+2\lambda=2+\mu$, $2-\lambda=\mu$, $3+\lambda=5-\mu$. From the second equation $\mu=2-\lambda$. In the first: $1+2\lambda=4-\lambda$, so $\lambda=1$ and $\mu=1$. Check in the third: $3+1=4$ and $5-1=4$ ✓. So the lines intersect. The point is $\begin{pmatrix}3\\1\\4\end{pmatrix}$, i.e. $(3,1,4)$. The dot product of the directions is $2-1-1=0$, so the lines are perpendicular: the angle is $90^{\circ}$.

Check: $L_2$ at $\mu=1$ gives $(3,1,4)$ ✓.

### Example 2 (coincident or parallel, 6 marks)

Classify: $L_1:\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ with (a) $L_3:\mathbf{r}=\begin{pmatrix}5\\0\\5\end{pmatrix}+\mu\begin{pmatrix}-4\\2\\-2\end{pmatrix}$; (b) $L_4:\mathbf{r}=\begin{pmatrix}5\\0\\6\end{pmatrix}+\mu\begin{pmatrix}4\\-2\\2\end{pmatrix}$.

*Solution.* In both cases the direction is $-2$ (or $2$) times $\begin{pmatrix}2\\-1\\1\end{pmatrix}$, so the lines are parallel or coincident. (a) Test $(5,0,5)$ on $L_1$: $1+2\lambda=5$ gives $\lambda=2$, $y=2-2=0$ ✓, $z=3+2=5$ ✓. The point is on $L_1$, so the lines are **coincident**. (b) Test $(5,0,6)$: $\lambda=2$ gives $y=0$ ✓ but $z=5\ne6$. The point is not on $L_1$, so the lines are **parallel and distinct**.

### Example 3 (distance between parallel lines, 6 marks)

Find the distance between $L_1$ and $L_4$ of Example 2.

*Solution.* Take $A=(1,2,3)$ on $L_1$ and $Q=(5,0,6)$ on $L_4$. $\overrightarrow{AQ}=\begin{pmatrix}4\\-2\\3\end{pmatrix}$ and $\mathbf{d}=\begin{pmatrix}2\\-1\\1\end{pmatrix}$ with $|\mathbf{d}|^{2}=6$. $\overrightarrow{AQ}\cdot\mathbf{d}=8+2+3=13$ and $|\overrightarrow{AQ}|^{2}=29$. The squared distance is $29-\dfrac{169}6=\dfrac{5}6$, so the distance is $\sqrt{\dfrac56}=0.913$.

### Example 4 (skew lines, 8 marks)

Show that $L_1:\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ and $L_5:\mathbf{r}=\begin{pmatrix}3\\-1\\2\end{pmatrix}+\mu\begin{pmatrix}1\\1\\-2\end{pmatrix}$ are skew.

*Solution.* The directions are not parallel (the ratios $\dfrac21,\dfrac{-1}1$ differ). Equate: $1+2\lambda=3+\mu$, $2-\lambda=-1+\mu$, $3+\lambda=2-2\mu$. From the first two: $\mu=2\lambda-2$ and then $2-\lambda=-1+2\lambda-2$, so $3\lambda=5$ and $\lambda=\dfrac53$, $\mu=\dfrac43$. Third equation: left side $3+\dfrac53=\dfrac{14}3$, right side $2-\dfrac83=-\dfrac23$. They are not equal, so there is no solution. The lines do not intersect and are not parallel, so they are **skew**.

### Example 5 (the shortest distance between skew lines, 10 marks)

Find the shortest distance between the lines of Example 4.

*Solution.* $P(\lambda)=(1+2\lambda,\ 2-\lambda,\ 3+\lambda)$ and $Q(\mu)=(3+\mu,\ -1+\mu,\ 2-2\mu)$. Then $\overrightarrow{PQ}=\begin{pmatrix}2+\mu-2\lambda\\-3+\mu+\lambda\\-1-2\mu-\lambda\end{pmatrix}$. Perpendicular to $\mathbf{d}_1=\begin{pmatrix}2\\-1\\1\end{pmatrix}$: $2(2+\mu-2\lambda)-(-3+\mu+\lambda)+(-1-2\mu-\lambda)=6-\mu-6\lambda=0$. Perpendicular to $\mathbf{d}_2=\begin{pmatrix}1\\1\\-2\end{pmatrix}$: $(2+\mu-2\lambda)+(-3+\mu+\lambda)-2(-1-2\mu-\lambda)=1+6\mu+\lambda=0$. From the first, $\mu=6-6\lambda$. Substituting: $1+36-36\lambda+\lambda=0$, so $\lambda=\dfrac{37}{35}$ and $\mu=-\dfrac{12}{35}$. Then the components of $\overrightarrow{PQ}$ are $2+\mu-2\lambda=\dfrac{70-12-74}{35}=-\dfrac{16}{35}$, $-3+\mu+\lambda=\dfrac{-105-12+37}{35}=-\dfrac{80}{35}$ and $-1-2\mu-\lambda=\dfrac{-35+24-37}{35}=-\dfrac{48}{35}$. So $\overrightarrow{PQ}=-\dfrac{16}{35}\begin{pmatrix}1\\5\\3\end{pmatrix}$ and $|\overrightarrow{PQ}|=\dfrac{16}{35}\sqrt{35}=\dfrac{16}{\sqrt{35}}=2.70$.

Check with the vector-product method: $\mathbf{n}=\mathbf{d}_1\times\mathbf{d}_2=\begin{pmatrix}1\\5\\3\end{pmatrix}$, which agrees with the direction of $\overrightarrow{PQ}$ (the common perpendicular). With $P_0=(1,2,3)$ and $Q_0=(3,-1,2)$: $\overrightarrow{P_0Q_0}\cdot\mathbf{n}=\begin{pmatrix}2\\-3\\-1\end{pmatrix}\cdot\begin{pmatrix}1\\5\\3\end{pmatrix}=2-15-3=-16$, so the distance is $\dfrac{16}{\sqrt{35}}$ ✓.

### Example 6 (an unknown constant for intersection, 6 marks)

The lines $\mathbf{r}=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}3\\0\\a\end{pmatrix}+\mu\begin{pmatrix}1\\1\\-2\end{pmatrix}$ intersect. Find $a$ and the point of intersection.

*Solution.* The first two components give $1+2\lambda=3+\mu$ and $2-\lambda=\mu$. Substituting $\mu=2-\lambda$ into the first: $1+2\lambda=5-\lambda$, so $\lambda=\dfrac43$ and $\mu=\dfrac23$. The third component: $3+\lambda=a-2\mu$, so $a=3+\dfrac43+\dfrac43=\dfrac{17}3$. The point is $\left(1+\dfrac83,\ 2-\dfrac43,\ 3+\dfrac43\right)=\left(\dfrac{11}3,\dfrac23,\dfrac{13}3\right)$.

Check with the second line: $\left(3+\dfrac23,\ 0+\dfrac23,\ \dfrac{17}3-\dfrac43\right)=\left(\dfrac{11}3,\dfrac23,\dfrac{13}3\right)$ ✓.

### Example 7 (lines in a plane, 6 marks)

Find the intersection and the acute angle between $\mathbf{r}=\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}-1\\4\end{pmatrix}+\mu\begin{pmatrix}2\\-1\end{pmatrix}$.

*Solution.* $1+3\lambda=-1+2\mu$ and $2+\lambda=4-\mu$. From the second, $\lambda=2-\mu$. Then $1+6-3\mu=-1+2\mu$, so $8=5\mu$ and $\mu=1.6$, $\lambda=0.4$. The point is $(1+1.2,\ 2.4)=(2.2,2.4)$. The angle: the dot product of the directions is $6-1=5$, the magnitudes are $\sqrt{10}$ and $\sqrt5$, so $\cos\theta=\dfrac5{\sqrt{50}}=0.7071$ and $\theta=45^{\circ}$.

### Example 8 (collision or not, 9 marks)

Particle $A$ has position $\begin{pmatrix}1+2t\\t\\3\end{pmatrix}$ and particle $B$ has position $\begin{pmatrix}8-t\\2t-4\\3\end{pmatrix}$ for $t\ge0$. (a) Show that their paths intersect. (b) Show that they do not collide. (c) Find the minimum distance between them.

*Solution.* (a) Use different times: $A$ at $t=s$ and $B$ at $t=u$. $1+2s=8-u$, $s=2u-4$, and $3=3$. Substituting: $1+4u-8=8-u$, so $5u=15$, $u=3$, $s=2$. Both are non-negative. The paths cross at $(5,2,3)$, reached by $A$ at $t=2$ and by $B$ at $t=3$. (b) For a collision we need the same $t$: $1+2t=8-t$ gives $t=\dfrac73$, but $t=2t-4$ gives $t=4$. Not equal, so no collision. (c) $\overrightarrow{AB}=\begin{pmatrix}7-3t\\t-4\\0\end{pmatrix}$ and $d^{2}=(3t-7)^{2}+(4-t)^{2}=10t^{2}-50t+65$. The minimum is at $t=2.5$, with $d^{2}=62.5-125+65=2.5$, so $d=\sqrt{2.5}=1.58$.

### Example 9 (Cartesian forms, 7 marks)

Show that the lines $\dfrac{x-1}2=y+1=3-z$ and $x-4=\dfrac{y-3}{-2}=z$ intersect, and find the point.

*Solution.* Write the first as $x=1+2\lambda$, $y=-1+\lambda$, $z=3-\lambda$ and the second as $x=4+\mu$, $y=3-2\mu$, $z=\mu$. Equate: $1+2\lambda=4+\mu$, $-1+\lambda=3-2\mu$, $3-\lambda=\mu$. From the third, $\mu=3-\lambda$. In the first: $1+2\lambda=7-\lambda$, so $\lambda=2$ and $\mu=1$. Check in the second: $-1+2=1$ and $3-2=1$ ✓. The point is $(5,1,1)$.

### Example 10 (perpendicular lines, 4 marks)

Find $k$ such that the lines with directions $\begin{pmatrix}2\\k\\1\end{pmatrix}$ and $\begin{pmatrix}k\\1\\-2\end{pmatrix}$ are perpendicular.

*Solution.* $2k+k-2=0$, so $k=\dfrac23$.

### Example 11 (skew in a solid, 5 marks)

In the unit cube with vertices $(0,0,0)$ to $(1,1,1)$, the edge from $(0,0,0)$ to $(1,0,0)$ and the edge from $(0,1,0)$ to $(0,1,1)$ are lines $L:\mathbf{r}=\lambda\begin{pmatrix}1\\0\\0\end{pmatrix}$ and $M:\mathbf{r}=\begin{pmatrix}0\\1\\0\end{pmatrix}+\mu\begin{pmatrix}0\\0\\1\end{pmatrix}$. Show they are skew and find the distance between them.

*Solution.* Not parallel. Equate: $\lambda=0$, $0=1$ (second component) is impossible, so no intersection: skew. The common perpendicular is along $\begin{pmatrix}1\\0\\0\end{pmatrix}\times\begin{pmatrix}0\\0\\1\end{pmatrix}$, which is the $y$-direction, so the distance is the difference in $y$-coordinates, $1$.

## Using your GDC

The GDC can solve the two linear equations for $\lambda$ and $\mu$ by the simultaneous-equations tool; make sure you then test the third equation by hand. For problems with three unknowns (for instance an unknown constant $a$ and the two parameters) use the three-variable solver with all three equations. In motion problems, plot $d(t)=\sqrt{d^{2}(t)}$ and use the *minimum* function to find the closest approach; compare with the vertex $t=-\dfrac b{2a}$. To check an intersection point, evaluate both lines at the found parameters. Use fractions rather than decimals while solving, since the third-equation check requires exact equality (if you use decimals, check agreement to several decimal places). Menu names vary by model.

## Common mistakes

1. **Using the same parameter** $\lambda$ for both lines.
2. **Solving only two equations** and not testing the third before claiming the lines intersect.
3. **Calling lines skew** without first checking that they are not parallel.
4. **Calling parallel lines "not intersecting, so skew".** Parallel lines are not skew.
5. **Forgetting to test a point** for coincident lines.
6. **Confusing intersecting paths with colliding particles**: collision needs the same time.
7. **Giving the obtuse angle** between lines when the acute angle is asked.
8. **Arithmetic slips** with negative components when equating; write each equation carefully before solving.

## Exam technique and command terms

**Show that the lines intersect** requires parameter values that satisfy all three equations and the point. **Show that the lines are skew** requires (i) not parallel, (ii) no solution of the three equations, with the inconsistency made explicit. **Determine whether** the lines are coincident, parallel, intersecting or skew requires the full procedure and a conclusion in words. **Find the angle between the lines** uses direction vectors. **Show that the particles do not collide** requires the same-time equations. **Hence** may use the intersection point for the next part.

A clear layout earns method marks: (1) directions, (2) equations with $\lambda$ and $\mu$, (3) solution of two equations, (4) check of the third, (5) conclusion. If two equations contain only one unknown after substitution, say so. If the parameter has a restriction (time $t\ge0$), check the solution satisfies it. When the problem has an unknown constant, identify which equation determines it before solving. In context problems, interpret the minimum distance with units.

## Connections

AHL 3.14 supplied the vector equation of a line, the parametric form and the minimum-distance methods, and AHL 3.13 the scalar product for angles and perpendicularity. SL 2.1 gave the classification in the plane (parallel or intersecting), which is now a two-way choice, while SL 3.1 gave three-dimensional solids in which skew edges occur. AHL 1.16 interpreted three planes meeting in a point, a line or not at all; the same logic here applies to lines, with "no solution" meaning no common point. In AHL 3.16 the vector product gives the direction perpendicular to two lines, which shortens the shortest-distance calculation for skew lines, and in AHL 3.17 and 3.18 planes and their intersections with lines are built from these ideas: a line either meets a plane in a point, lies in it or is parallel to it, mirroring the options here. In Unit 5, kinematics problems with two moving particles use the same separation function $d^{2}(t)$ and its minimum, found by differentiation instead of the vertex of a parabola.

## Check your understanding

1. $L_1:\mathbf{r}=\begin{pmatrix}2\\1\\0\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$ and $L_2:\mathbf{r}=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\mu\begin{pmatrix}2\\1\\0\end{pmatrix}$. Show that they intersect, find the point and the angle between the lines.
2. Classify the lines $\mathbf{r}=\begin{pmatrix}1\\-1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\6\\-3\end{pmatrix}$ and (a) $\mathbf{r}=\begin{pmatrix}2\\1\\1\end{pmatrix}+\mu\begin{pmatrix}1\\2\\-1\end{pmatrix}$, (b) $\mathbf{r}=\begin{pmatrix}2\\1\\2\end{pmatrix}+\mu\begin{pmatrix}1\\2\\-1\end{pmatrix}$.
3. Show that $\mathbf{r}=\lambda\begin{pmatrix}1\\1\\0\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}0\\0\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}$ are skew, and find the shortest distance between them.
4. The lines $\mathbf{r}=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\-1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}0\\2\\a\end{pmatrix}+\mu\begin{pmatrix}1\\-1\\1\end{pmatrix}$ intersect. Find $a$.
5. Find the intersection and the acute angle between $\mathbf{r}=\begin{pmatrix}0\\1\end{pmatrix}+\lambda\begin{pmatrix}2\\1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}4\\-1\end{pmatrix}+\mu\begin{pmatrix}1\\-1\end{pmatrix}$.
6. Find the distance between the parallel lines $\mathbf{r}=\lambda\begin{pmatrix}1\\2\\2\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}3\\0\\6\end{pmatrix}+\mu\begin{pmatrix}1\\2\\2\end{pmatrix}$.
7. Particle $A$ has position $\begin{pmatrix}1+2t\\2+t\\t\end{pmatrix}$ and particle $B$ has position $\begin{pmatrix}5+t\\10-t\\8-t\end{pmatrix}$. Show that they collide and find the time and place.
8. Classify $\dfrac{x-1}2=\dfrac{y+1}3=\dfrac{z-2}1$ and $\dfrac x4=\dfrac{y-2}6=\dfrac{z+1}2$.
9. Find $k$ such that the lines with directions $\begin{pmatrix}2\\k\\1\end{pmatrix}$ and $\begin{pmatrix}k\\-3\\1\end{pmatrix}$ are perpendicular.
10. Show that $\mathbf{r}=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$ and $\mathbf{r}=\begin{pmatrix}2\\3\\0\end{pmatrix}+\mu\begin{pmatrix}2\\1\\1\end{pmatrix}$ are skew.

### Answers

1. $2+\lambda=1+2\mu$, $1+2\lambda=2+\mu$, $-\lambda=-1$. The third gives $\lambda=1$; the first gives $\mu=1$; the second: $3=3$ ✓. The point is $(3,3,-1)$. The dot product of the directions is $2+2+0=4$ and the magnitudes are $\sqrt6$ and $\sqrt5$, so $\cos\theta=\dfrac4{\sqrt{30}}=0.730$ and $\theta=43.1^{\circ}$.
2. The direction $\begin{pmatrix}3\\6\\-3\end{pmatrix}=3\begin{pmatrix}1\\2\\-1\end{pmatrix}$, so parallel or coincident. Test $(2,1,1)$ on the first: $1+3\lambda=2$ gives $\lambda=\dfrac13$, $y=-1+2=1$ ✓, $z=2-1=1$ ✓: (a) coincident. For (b) the point $(2,1,2)$ has $z=2\ne1$, so (b) parallel and distinct.
3. Not parallel. $\lambda=0$ (from $x$), $\lambda=\mu$ (from $y$) so $\mu=0$, and $z$: $0=1+0$, false: no intersection, so skew. $\mathbf{n}=\begin{pmatrix}1\\1\\0\end{pmatrix}\times\begin{pmatrix}0\\1\\1\end{pmatrix}=\begin{pmatrix}1\\-1\\1\end{pmatrix}$ and $\overrightarrow{P_0Q_0}=\begin{pmatrix}0\\0\\1\end{pmatrix}$. The distance is $\dfrac{|1|}{\sqrt3}=0.577$. (By perpendicularity conditions: $\lambda=-\dfrac13$, $\mu=-\dfrac23$, $|\overrightarrow{PQ}|=\dfrac{\sqrt3}3$.)
4. $1+\lambda=\mu$ and $\lambda=2-\mu$, so $\lambda=2-1-\lambda$ and $\lambda=\dfrac12$, $\mu=\dfrac32$. Third: $2-\dfrac12=a+\dfrac32$, so $a=0$.
5. $2\lambda=4+\mu$ and $1+\lambda=-1-\mu$. From the second $\mu=-2-\lambda$; then $2\lambda=2-\lambda$, so $\lambda=\dfrac23$ and $\mu=-\dfrac83$. The point is $\left(\dfrac43,\dfrac53\right)$. The dot product of the directions is $2-1=1$ and the magnitudes are $\sqrt5$ and $\sqrt2$, so $\cos\theta=\dfrac1{\sqrt{10}}$ and $\theta=71.6^{\circ}$.
6. $A=(0,0,0)$, $Q=(3,0,6)$, $\mathbf{d}=\begin{pmatrix}1\\2\\2\end{pmatrix}$ with $|\mathbf{d}|^{2}=9$. $\overrightarrow{AQ}\cdot\mathbf{d}=15$ and $|\overrightarrow{AQ}|^{2}=45$. The squared distance is $45-\dfrac{225}9=20$, so the distance is $2\sqrt5=4.47$.
7. The same $t$: $1+2t=5+t$ gives $t=4$; $2+t=10-t$ gives $t=4$; $t=8-t$ gives $t=4$. All agree, so they collide at $t=4$, at $(9,6,4)$.
8. Directions $\begin{pmatrix}2\\3\\1\end{pmatrix}$ and $\begin{pmatrix}4\\6\\2\end{pmatrix}$ are parallel. Test the point $(0,2,-1)$ on the first: $x=1+2\lambda=0$ gives $\lambda=-\dfrac12$, so $y=-1-\dfrac32=-2.5\ne2$. Not on the line: parallel and distinct.
9. With the second direction as $\begin{pmatrix}k\\-3\\1\end{pmatrix}$: $2k-3k+1=0$, so $k=1$.
10. Directions not parallel. $1+\lambda=2+2\mu$, $2\lambda=3+\mu$, $1-\lambda=\mu$. From the third, $\mu=1-\lambda$; first: $1+\lambda=4-2\lambda$, so $\lambda=1$, $\mu=0$. Second: $2=3$, false. No intersection and not parallel, so skew.

## Summary

- Two lines in space are coincident, parallel (distinct), intersecting or skew; in a plane skew is impossible.
- Procedure: compare directions; if parallel, test a point (coincident or parallel); if not, equate with $\lambda$ and $\mu$, solve two equations and test the third (intersect or skew).
- Use different parameters; state the conclusion with the reason.
- Angle between lines: acute angle between directions; perpendicular if $\mathbf{d}_1\cdot\mathbf{d}_2=0$.
- Unknown constants: use the two equations free of the constant, then the third.
- Paths intersect versus collide: collisions need the same $t$; closest approach is the minimum of $d^{2}(t)$.
- Distance between parallel lines: $\sqrt{|\overrightarrow{AQ}|^{2}-(\overrightarrow{AQ}\cdot\mathbf{d})^{2}/|\mathbf{d}|^{2}}$; between skew lines: common perpendicular, or $|\overrightarrow{P_0Q_0}\cdot\mathbf{n}|/|\mathbf{n}|$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 3.15. Related facts may appear elsewhere. Justify any method used here.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
