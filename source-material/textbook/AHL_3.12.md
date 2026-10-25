# Vector concepts in two and three dimensions

> **AHL 3.12 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain the difference between a scalar and a vector, and represent vectors as arrows, in component form and with $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$;
- find position vectors and the vector $\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$ between two points;
- add and subtract vectors, multiply by a scalar, and interpret these operations geometrically;
- find the magnitude of a vector and the distance between two points in two and three dimensions;
- find a unit vector, and a vector of given magnitude in a given direction;
- decide when two vectors are parallel and when three points are collinear;
- find the midpoint of a segment and the point dividing a segment in a given ratio;
- use vectors to prove geometric facts about triangles and parallelograms;
- model displacement and velocity problems with vectors.

## Why this topic matters

Many quantities in the real world are not described by a number alone. A mass of $5$ kg is just a number, but a force of $5$ N is meaningless until you say in which direction it acts; a velocity of $20$ m/s must be given with a direction; a displacement of $300$ m needs a heading. Quantities with both size and direction are *vectors*, and the mathematics of vectors is the language of physics, engineering, navigation, computer graphics and robotics. In the IB course, vectors do three jobs. First, they give a compact algebra for geometry in three dimensions (Unit 3, SL 3.1), where lines and planes are far easier to describe with vectors than with coordinates and equations in $x$ and $y$. Second, they provide a bridge to the complex numbers (AHL 1.12 to 1.14), where a complex number is represented by a point or an arrow in the plane. Third, they are the foundation of the whole sequence from AHL 3.13 to 3.18 (scalar product, equations of lines and planes, vector product and intersections), which is often tested in the longest questions of HL Paper 2 and Paper 3. Everything in this sequence rests on the small set of ideas in this chapter: the vector between two points, magnitude, scalar multiples, and the condition for parallel vectors. If these become automatic, the later chapters are far less difficult. In an examination, errors usually come from sloppy notation, from reversing the order in $\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$, and from confusing a point with its position vector, so we discuss those carefully.

## Core ideas

### Scalars and vectors

A **scalar** has magnitude only (mass, time, distance, speed, temperature). A **vector** has magnitude and direction (displacement, velocity, acceleration, force). In print, a vector is written in bold, $\mathbf{v}$, and by hand with an underline or an arrow, $\underline{v}$ or $\vec v$. The vector from point $A$ to point $B$ is written $\overrightarrow{AB}$. Two vectors are **equal** if they have the same magnitude and the same direction, wherever they are drawn: a vector is defined by its length and direction, not its location.

### Components and notation

In the plane, a vector is written as a column $\begin{pmatrix}a\\b\end{pmatrix}$ or $a\mathbf{i}+b\mathbf{j}$, where $\mathbf{i}$ and $\mathbf{j}$ are unit vectors along the $x$- and $y$-axes. In space,
$$
\mathbf{v}=\begin{pmatrix}a\\b\\c\end{pmatrix}=a\mathbf{i}+b\mathbf{j}+c\mathbf{k}.
$$
The numbers $a$, $b$, $c$ are the components: the displacements in the $x$-, $y$- and $z$-directions. The zero vector is $\mathbf{0}$, and has no direction. The negative $-\mathbf{v}$ has the same magnitude as $\mathbf{v}$ and the opposite direction.

### Position vectors and the vector between points

The **position vector** of a point $A$ is the vector $\overrightarrow{OA}=\mathbf{a}$ from the origin $O$ to $A$; if $A=(a_1,a_2,a_3)$ then $\mathbf{a}=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$. The vector from $A$ to $B$ is
$$
\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}=\mathbf{b}-\mathbf{a}.
$$
The memory rule is **"end minus start"**. Reversing the order reverses the vector: $\overrightarrow{BA}=-\overrightarrow{AB}$.

### Addition, subtraction and scalar multiples

Vectors are added component by component:
$$
\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}+\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}=\begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix}.
$$
Geometrically this is the **triangle law**: if $\mathbf{u}=\overrightarrow{AB}$ and $\mathbf{v}=\overrightarrow{BC}$ then $\mathbf{u}+\mathbf{v}=\overrightarrow{AC}$; equivalently the **parallelogram law**, where the sum is the diagonal from the common starting point. For a scalar $\lambda$, $\lambda\mathbf{v}$ has components $\lambda a$, $\lambda b$, $\lambda c$: its magnitude is $|\lambda|$ times that of $\mathbf{v}$ and its direction is the same if $\lambda>0$ and opposite if $\lambda<0$. Addition is commutative and associative, and scalar multiplication distributes: $\lambda(\mathbf{u}+\mathbf{v})=\lambda\mathbf{u}+\lambda\mathbf{v}$.

### Magnitude and distance

The magnitude (length, modulus) of $\mathbf{v}=\begin{pmatrix}a\\b\\c\end{pmatrix}$ is
$$
|\mathbf{v}|=\sqrt{a^{2}+b^{2}+c^{2}}
$$
(in two dimensions, $\sqrt{a^{2}+b^{2}}$). This is Pythagoras' theorem (SL 3.1). The distance between points $A$ and $B$ is $AB=|\overrightarrow{AB}|=|\mathbf{b}-\mathbf{a}|$. Always $|\mathbf{v}|\ge0$ and $|\lambda\mathbf{v}|=|\lambda||\mathbf{v}|$. The triangle inequality $|\mathbf{u}+\mathbf{v}|\le|\mathbf{u}|+|\mathbf{v}|$ holds (compare AHL 2.16 and AHL 1.12).

### Unit vectors

A **unit vector** has magnitude $1$. The unit vector in the direction of $\mathbf{v}\ne\mathbf{0}$ is $\hat{\mathbf{v}}=\dfrac{\mathbf{v}}{|\mathbf{v}|}$. To obtain a vector of magnitude $m$ in the direction of $\mathbf{v}$, take $m\hat{\mathbf{v}}=\dfrac{m}{|\mathbf{v}|}\mathbf{v}$. In the formula-booklet style, $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ are the standard unit vectors.

### Parallel vectors and collinear points

Two non-zero vectors $\mathbf{u}$ and $\mathbf{v}$ are **parallel** if one is a scalar multiple of the other: $\mathbf{u}=\lambda\mathbf{v}$ for some real $\lambda\ne0$. In components, the ratios of corresponding components are equal. Three points $A$, $B$, $C$ are **collinear** if $\overrightarrow{AB}$ and $\overrightarrow{AC}$ are parallel (they share the point $A$, so being parallel means they lie on one line). To prove collinearity, find two of the displacement vectors and show one is a multiple of the other. To prove that points are *not* collinear, show no such multiple exists.

### Midpoint and division in a ratio

The position vector of the midpoint $M$ of $AB$ is $\mathbf{m}=\dfrac{\mathbf{a}+\mathbf{b}}2$. The point $P$ on $AB$ with $AP:PB=m:n$ has position vector
$$
\mathbf{p}=\mathbf{a}+\frac m{m+n}(\mathbf{b}-\mathbf{a})=\frac{n\mathbf{a}+m\mathbf{b}}{m+n}.
$$
Take care with the order: for $AP:PB=2:3$, $P$ is $\dfrac25$ of the way from $A$ to $B$, so it is closer to $A$. The centroid of triangle $ABC$ has position vector $\dfrac{\mathbf{a}+\mathbf{b}+\mathbf{c}}3$. A fourth point $D$ making $ABCD$ a parallelogram (vertices in order) satisfies $\overrightarrow{AB}=\overrightarrow{DC}$, so $\mathbf{d}=\mathbf{a}+\mathbf{c}-\mathbf{b}$.

### Vector proofs in geometry

To prove a geometric statement, assign vectors to two edges from one vertex (say $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OB}=\mathbf{b}$), express every other relevant vector in terms of $\mathbf{a}$ and $\mathbf{b}$ using the triangle law, and show the required relation (equality, parallelism, a ratio). A key principle: if $\mathbf{a}$ and $\mathbf{b}$ are not parallel, an equation $p\mathbf{a}+q\mathbf{b}=r\mathbf{a}+s\mathbf{b}$ implies $p=r$ and $q=s$ (comparing coefficients), which is how intersection ratios are found. Two classical proofs are: (i) the line joining the midpoints of two sides of a triangle is parallel to the third side and half its length; (ii) the diagonals of a parallelogram bisect each other.

### Velocity, displacement and modelling

A moving object with constant velocity $\mathbf{v}$ (units, say, m/s) starting at position $\mathbf{r}_0$ has position $\mathbf{r}(t)=\mathbf{r}_0+t\mathbf{v}$ at time $t$. The *speed* is $|\mathbf{v}|$, a scalar. The displacement in time $t$ is $t\mathbf{v}$ and the distance travelled (for straight-line motion) is $t|\mathbf{v}|$. When two velocities act together (a boat in a current, an aircraft in wind), the resultant velocity is their vector sum. This idea gives the equation of a line in AHL 3.14.

## Worked examples

### Example 1 (basic operations, 6 marks)

Let $\mathbf{a}=\begin{pmatrix}2\\-1\\3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}-4\\5\\0\end{pmatrix}$. Find $\mathbf{a}+\mathbf{b}$, $2\mathbf{a}-3\mathbf{b}$, $|\mathbf{a}|$ and $|\mathbf{b}|$.

*Solution.* $\mathbf{a}+\mathbf{b}=\begin{pmatrix}-2\\4\\3\end{pmatrix}$. $2\mathbf{a}-3\mathbf{b}=\begin{pmatrix}4+12\\-2-15\\6-0\end{pmatrix}=\begin{pmatrix}16\\-17\\6\end{pmatrix}$. $|\mathbf{a}|=\sqrt{4+1+9}=\sqrt{14}$ and $|\mathbf{b}|=\sqrt{16+25+0}=\sqrt{41}$.

### Example 2 (vector between points, 5 marks)

Points are $A(1,2,-1)$ and $B(4,-2,3)$. Find $\overrightarrow{AB}$, the distance $AB$ and the midpoint of $AB$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}3\\-4\\4\end{pmatrix}$. $AB=\sqrt{9+16+16}=\sqrt{41}$. The midpoint is $\left(\dfrac{1+4}2,\dfrac{2-2}2,\dfrac{-1+3}2\right)=\left(\dfrac52,0,1\right)$.

Check: the midpoint is $\dfrac12\overrightarrow{AB}$ from $A$: $(1+1.5,\ 2-2,\ -1+2)=(2.5,0,1)$ ✓.

### Example 3 (unit vectors, 5 marks)

(a) Find the unit vector in the direction of $\mathbf{v}=2\mathbf{i}-3\mathbf{j}+6\mathbf{k}$. (b) Find the vector of magnitude $14$ parallel to $\mathbf{v}$ in the same direction.

*Solution.* $|\mathbf{v}|=\sqrt{4+9+36}=7$. (a) $\hat{\mathbf{v}}=\dfrac17(2\mathbf{i}-3\mathbf{j}+6\mathbf{k})=\dfrac27\mathbf{i}-\dfrac37\mathbf{j}+\dfrac67\mathbf{k}$. (b) $14\hat{\mathbf{v}}=4\mathbf{i}-6\mathbf{j}+12\mathbf{k}$.

### Example 4 (parallel vectors with unknowns, 5 marks)

The vectors $\mathbf{a}=\begin{pmatrix}2\\k\\-3\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}6\\-9\\m\end{pmatrix}$ are parallel. Find $k$ and $m$.

*Solution.* Parallel means $\mathbf{b}=\lambda\mathbf{a}$. From the first components $6=2\lambda$, so $\lambda=3$. Then $-9=3k$ gives $k=-3$, and $m=3(-3)=-9$.

### Example 5 (collinearity, 6 marks)

Show that $A(1,2,3)$, $B(3,5,9)$ and $C(5,8,15)$ are collinear and find the ratio $AB:BC$. Show that $A$, $B$ and $D(5,8,16)$ are not collinear.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}2\\3\\6\end{pmatrix}$ and $\overrightarrow{BC}=\begin{pmatrix}2\\3\\6\end{pmatrix}$. They are equal, so parallel with the common point $B$: the points are collinear, and $AB:BC=1:1$ ($B$ is the midpoint of $AC$). For $D$: $\overrightarrow{BD}=\begin{pmatrix}2\\3\\7\end{pmatrix}$ is not a multiple of $\overrightarrow{AB}=\begin{pmatrix}2\\3\\6\end{pmatrix}$ (the ratios of components are $1,1,\dfrac76$), so $A$, $B$, $D$ are not collinear.

### Example 6 (dividing a segment, 5 marks)

$P$ lies on $AB$ with $AP:PB=2:3$, where $A=(-1,4,2)$ and $B=(9,-1,7)$. Find the coordinates of $P$.

*Solution.* $\overrightarrow{AB}=\begin{pmatrix}10\\-5\\5\end{pmatrix}$. $P$ is $\dfrac25$ of the way: $\mathbf{p}=\mathbf{a}+\dfrac25\overrightarrow{AB}=\begin{pmatrix}-1+4\\4-2\\2+2\end{pmatrix}=\begin{pmatrix}3\\2\\4\end{pmatrix}$.

Check: $AP=\dfrac25AB$ and $PB=\dfrac35AB$, so $AP:PB=2:3$ ✓.

### Example 7 (the diagonals of a parallelogram, 5 marks)

$OABC$ is a parallelogram with $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OC}=\mathbf{c}$. Prove that its diagonals bisect each other.

*Proof.* In a parallelogram, $\overrightarrow{AB}=\overrightarrow{OC}$, so $\overrightarrow{OB}=\mathbf{a}+\mathbf{c}$. The midpoint of $OB$ has position vector $\dfrac12(\mathbf{a}+\mathbf{c})$. The midpoint of $AC$ is $\dfrac12(\mathbf{a}+\mathbf{c})$ as well. Both diagonals have the same midpoint, so they bisect each other. $\blacksquare$

### Example 8 (the midpoint theorem, 6 marks)

In triangle $OAB$ let $\overrightarrow{OA}=\mathbf{a}$ and $\overrightarrow{OB}=\mathbf{b}$. $M$ and $N$ are the midpoints of $OA$ and $OB$. Show that $MN$ is parallel to $AB$ and half its length.

*Proof.* $\overrightarrow{OM}=\dfrac12\mathbf{a}$ and $\overrightarrow{ON}=\dfrac12\mathbf{b}$. So $\overrightarrow{MN}=\overrightarrow{ON}-\overrightarrow{OM}=\dfrac12(\mathbf{b}-\mathbf{a})=\dfrac12\overrightarrow{AB}$. Hence $MN$ is parallel to $AB$ and $|MN|=\dfrac12|AB|$. $\blacksquare$

### Example 9 (a magnitude equation, 4 marks)

Find the values of $k$ for which $\begin{pmatrix}3\\k\\-4\end{pmatrix}$ has magnitude $13$.

*Solution.* $9+k^{2}+16=169$, so $k^{2}=144$ and $k=\pm12$.

### Example 10 (velocity and position, 7 marks)

A drone starts at $(10,20,0)$ (in metres) and moves with constant velocity $\begin{pmatrix}3\\4\\12\end{pmatrix}$ m/s. Find its speed, its position after $5$ s and the distance travelled in this time.

*Solution.* Speed $=\sqrt{9+16+144}=13$ m/s. Position at $t=5$: $\begin{pmatrix}10+15\\20+20\\60\end{pmatrix}=\begin{pmatrix}25\\40\\60\end{pmatrix}$. Distance travelled $=13\times5=65$ m.

Check: the distance from $(10,20,0)$ to $(25,40,60)$ is $\sqrt{225+400+3600}=\sqrt{4225}=65$ ✓.

### Example 11 (unit-vector notation, 3 marks)

Given $\mathbf{p}=3\mathbf{i}-2\mathbf{j}+\mathbf{k}$ and $\mathbf{q}=\mathbf{i}+4\mathbf{j}-5\mathbf{k}$, find $\mathbf{p}-\mathbf{q}$.

*Solution.* $\mathbf{p}-\mathbf{q}=(3-1)\mathbf{i}+(-2-4)\mathbf{j}+(1+5)\mathbf{k}=2\mathbf{i}-6\mathbf{j}+6\mathbf{k}$.

### Example 12 (the fourth vertex of a parallelogram, 5 marks)

$A(1,0,2)$, $B(4,1,3)$ and $C(6,5,1)$ are three vertices of a parallelogram $ABCD$ (in that order). Find $D$.

*Solution.* $\overrightarrow{AB}=\overrightarrow{DC}$ gives $\mathbf{d}=\mathbf{c}-\overrightarrow{AB}=\mathbf{a}+\mathbf{c}-\mathbf{b}=\begin{pmatrix}1+6-4\\0+5-1\\2+1-3\end{pmatrix}=\begin{pmatrix}3\\4\\0\end{pmatrix}$. So $D=(3,4,0)$.

Check: $\overrightarrow{AB}=\begin{pmatrix}3\\1\\1\end{pmatrix}$ and $\overrightarrow{DC}=\begin{pmatrix}3\\1\\1\end{pmatrix}$ ✓.

### Example 13 (the centroid, 4 marks)

Find the centroid of the triangle with vertices $A(2,1,3)$, $B(4,5,-1)$ and $C(0,3,4)$.

*Solution.* $\mathbf{g}=\dfrac13\left(\begin{pmatrix}2\\1\\3\end{pmatrix}+\begin{pmatrix}4\\5\\-1\end{pmatrix}+\begin{pmatrix}0\\3\\4\end{pmatrix}\right)=\dfrac13\begin{pmatrix}6\\9\\6\end{pmatrix}=\begin{pmatrix}2\\3\\2\end{pmatrix}$.

### Example 14 (resultant velocity, 6 marks)

An aircraft has velocity relative to the air of $\begin{pmatrix}200\\0\end{pmatrix}$ km/h (east, north). The wind blows with velocity $\begin{pmatrix}-30\\40\end{pmatrix}$ km/h. Find the ground velocity, the ground speed, and the angle of the track north of east.

*Solution.* The ground velocity is the sum: $\begin{pmatrix}170\\40\end{pmatrix}$ km/h. The ground speed is $\sqrt{170^{2}+40^{2}}=\sqrt{30500}=175$ km/h (to $3$ s.f.). The track makes an angle $\tan^{-1}\dfrac{40}{170}=13.2^{\circ}$ north of east.

## Using your GDC

Many GDCs can store vectors as matrices (a $3\times1$ matrix is a column vector), add and scale them, and compute norms with a *norm* function. This is useful for long numerical calculations, but for short problems it is quicker by hand. Use the calculator to evaluate square roots for magnitudes and to check that the components are in the same ratio (store the ratios in variables). For a unit vector, divide by the stored norm. When a problem involves many points, store each position vector and compute displacement vectors by subtraction rather than re-typing. For motion problems such as Example 14, the inverse tangent function gives the angle: check the mode is degrees. Menu names vary by model, so practise with your own device. Always write the result in the form requested: column vector, $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ notation, or coordinates.

## Common mistakes

1. **Reversing $\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$**: "end minus start", not the reverse.
2. **Confusing a point with a vector**: a point is written $(1,2,3)$ and a position vector $\begin{pmatrix}1\\2\\3\end{pmatrix}$; do not write one equal to the other without the origin being understood.
3. **Forgetting the square root** in the magnitude, or squaring negative components incorrectly.
4. **Dividing in the wrong ratio**: $AP:PB=2:3$ means $P$ is $\dfrac25$ (not $\dfrac23$) of the way along $AB$.
5. **Proving parallelism with one component** only: all three ratios must agree.
6. **Using $\overrightarrow{AB}\parallel\overrightarrow{CD}$ to claim collinearity**: collinearity needs the vectors to share a point (such as $\overrightarrow{AB}$ and $\overrightarrow{AC}$).
7. **Adding magnitudes instead of vectors**: $|\mathbf{u}+\mathbf{v}|\ne|\mathbf{u}|+|\mathbf{v}|$ unless the vectors are parallel in the same direction.
8. **Omitting bold or an arrow** in handwritten work, so a vector looks like a scalar.

## Exam technique and command terms

**Find** the vector $\overrightarrow{AB}$ needs only the subtraction and final column. **Show that** points are collinear requires the two vectors, the scalar multiple and the shared-point conclusion. **Hence** may require use of a previous part, such as a midpoint, to deduce a ratio. **Prove** (for geometric statements) needs a diagram, vector definitions and a chain of equalities in terms of two base vectors. **Determine** a ratio needs an explicit scalar multiple.

State the final conclusion in words: "so $\overrightarrow{AB}=2\overrightarrow{BC}$, and as $B$ is common, $A$, $B$, $C$ are collinear". For vector proofs, draw a sketch labelled with $\mathbf{a}$ and $\mathbf{b}$ and mark equal vectors. In motion problems, always give the unit and distinguish speed (scalar) from velocity (vector). If a question says "unit vector", check that your answer has magnitude exactly $1$.

## Connections

SL 3.1 gave Pythagoras in three dimensions and the distance and midpoint formulae, which are the magnitude and midpoint results here in vector notation. SL 2.1 provided the parallel condition for gradients, and its vector analogue is the scalar-multiple test. AHL 1.12 introduced complex numbers represented in the Argand plane, where the modulus is the magnitude of the vector and addition of complex numbers is vector addition. In AHL 3.13 the scalar product measures the angle between vectors; in AHL 3.14 and 3.15 the position vector $\mathbf{r}=\mathbf{a}+\lambda\mathbf{d}$ describes a line using the same constructions as Example 10; AHL 3.16 and 3.17 build the vector product and planes; and AHL 3.18 finds intersections. In Unit 5, velocity and acceleration vectors arise in kinematics, where the derivative of a position vector with respect to time is the velocity vector. In SL 3.3, the components of a force or velocity were found with sine and cosine, and in this chapter the same components appear directly as the entries of the column vector.

## Check your understanding

1. Given $\mathbf{a}=\begin{pmatrix}1\\-2\\4\end{pmatrix}$ and $\mathbf{b}=\begin{pmatrix}3\\0\\-1\end{pmatrix}$, find $\mathbf{a}+\mathbf{b}$, $3\mathbf{a}-2\mathbf{b}$ and $|\mathbf{a}|$.
2. For $A(2,-1,5)$ and $B(-2,3,1)$, find $\overrightarrow{AB}$, $AB$ in exact form, and the midpoint of $AB$.
3. Find the unit vector in the direction of $\mathbf{i}-2\mathbf{j}+2\mathbf{k}$, and the vector of magnitude $12$ in that direction.
4. The vectors $\begin{pmatrix}k\\6\\-2\end{pmatrix}$ and $\begin{pmatrix}-3\\-9\\3\end{pmatrix}$ are parallel. Find $k$.
5. Show that $A(2,1,-1)$, $B(5,4,2)$ and $C(11,10,8)$ are collinear, and find $AB:BC$.
6. $P$ divides $AB$ so that $AP:PB=1:3$, where $A=(0,8,-4)$ and $B=(12,0,4)$. Find $P$.
7. $A(1,1,1)$, $B(4,2,0)$ and $C(5,6,3)$ are three vertices of the parallelogram $ABCD$. Find $D$.
8. Find the values of $k$ for which $\begin{pmatrix}k\\2k\\-2k\end{pmatrix}$ has magnitude $12$.
9. In triangle $OAB$, $M$ is the midpoint of $OA$ and $N$ the midpoint of $OB$. Prove that $\overrightarrow{MN}=\dfrac12\overrightarrow{AB}$.
10. A drone starts at $(5,-2,20)$ metres with constant velocity $\begin{pmatrix}2\\6\\-3\end{pmatrix}$ m/s. Find its speed, its position after $4$ s, and the time at which it reaches the ground ($z=0$).

### Answers

1. $\mathbf{a}+\mathbf{b}=\begin{pmatrix}4\\-2\\3\end{pmatrix}$. $3\mathbf{a}-2\mathbf{b}=\begin{pmatrix}3-6\\-6-0\\12+2\end{pmatrix}=\begin{pmatrix}-3\\-6\\14\end{pmatrix}$. $|\mathbf{a}|=\sqrt{1+4+16}=\sqrt{21}$.
2. $\overrightarrow{AB}=\begin{pmatrix}-4\\4\\-4\end{pmatrix}$, $AB=\sqrt{48}=4\sqrt3$, midpoint $(0,1,3)$.
3. The magnitude is $3$, so the unit vector is $\dfrac13\mathbf{i}-\dfrac23\mathbf{j}+\dfrac23\mathbf{k}$ and the vector of magnitude $12$ is $4\mathbf{i}-8\mathbf{j}+8\mathbf{k}$.
4. Second vector $=\lambda\times$ first: $-2\lambda=3$ gives $\lambda=-\dfrac32$; check $6\lambda=-9$ ✓. Then $k\lambda=-3$ gives $k=2$.
5. $\overrightarrow{AB}=\begin{pmatrix}3\\3\\3\end{pmatrix}$ and $\overrightarrow{AC}=\begin{pmatrix}9\\9\\9\end{pmatrix}=3\overrightarrow{AB}$, with $A$ common, so the points are collinear. $\overrightarrow{BC}=\begin{pmatrix}6\\6\\6\end{pmatrix}=2\overrightarrow{AB}$, so $AB:BC=1:2$.
6. $\overrightarrow{AB}=\begin{pmatrix}12\\-8\\8\end{pmatrix}$ and $P=A+\dfrac14\overrightarrow{AB}=(3,6,-2)$.
7. $\mathbf{d}=\mathbf{a}+\mathbf{c}-\mathbf{b}=\begin{pmatrix}1+5-4\\1+6-2\\1+3-0\end{pmatrix}=\begin{pmatrix}2\\5\\4\end{pmatrix}$, so $D=(2,5,4)$.
8. $k^{2}+4k^{2}+4k^{2}=9k^{2}=144$, so $k=\pm4$.
9. $\overrightarrow{MN}=\overrightarrow{ON}-\overrightarrow{OM}=\dfrac12\mathbf{b}-\dfrac12\mathbf{a}=\dfrac12(\mathbf{b}-\mathbf{a})=\dfrac12\overrightarrow{AB}$. $\blacksquare$
10. Speed $=\sqrt{4+36+9}=7$ m/s. Position at $t=4$: $(5+8,\ -2+24,\ 20-12)=(13,22,8)$. Height $20-3t=0$ gives $t=\dfrac{20}3=6.67$ s.

## Summary

- A vector has magnitude and direction; written as a column or as $a\mathbf{i}+b\mathbf{j}+c\mathbf{k}$.
- $\overrightarrow{AB}=\mathbf{b}-\mathbf{a}$ ("end minus start"); vectors add by the triangle or parallelogram law and scale by scalars.
- $|\mathbf{v}|=\sqrt{a^{2}+b^{2}+c^{2}}$; distance $AB=|\mathbf{b}-\mathbf{a}|$; unit vector $\hat{\mathbf{v}}=\mathbf{v}/|\mathbf{v}|$.
- Vectors are parallel iff one is a scalar multiple of the other; three points are collinear if $\overrightarrow{AB}=\lambda\overrightarrow{AC}$.
- Midpoint $\dfrac{\mathbf{a}+\mathbf{b}}2$; for $AP:PB=m:n$, $\mathbf{p}=\dfrac{n\mathbf{a}+m\mathbf{b}}{m+n}$; centroid $\dfrac{\mathbf{a}+\mathbf{b}+\mathbf{c}}3$.
- Prove geometric facts by expressing vectors in terms of two base vectors; model motion by $\mathbf{r}=\mathbf{r}_0+t\mathbf{v}$.
