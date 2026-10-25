# Systems of linear equations

> **AHL 1.16 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- solve a system of up to three linear equations in three unknowns by elimination, and by a GDC;
- write a system as an augmented matrix, apply row operations, and reduce to row echelon form;
- decide whether a system has a unique solution, infinitely many solutions or no solution, and justify the decision;
- give the general solution of a system with infinitely many solutions using a parameter;
- find the values of a parameter in a system for which each of the three cases occurs;
- interpret the three cases geometrically as the arrangement of three planes in space;
- set up a system from a word problem and interpret the solution in context.

## Why this topic matters

Linear systems are the workhorses of applied mathematics. Balancing chemical equations, finding currents in circuits (Kirchhoff's laws), fitting a quadratic through three points, mixing alloys, and calibrating a model to data all reduce to solving linear equations. Computers solve systems with millions of unknowns every second to simulate weather, design bridges and train machine-learning models. The idea is also the first look at *linear algebra*, which for many students is the most useful university mathematics course. In the IB course, three equations in three unknowns appear in Paper 1 (by hand, usually with a parameter) and Paper 2 (by GDC, often in a context). The syllabus requires you to treat all three possible outcomes: one solution, infinitely many, or none. Understanding *why* each occurs, algebraically and geometrically, is what distinguishes top-band answers, and it connects directly to the lines and planes of Unit 3, where each equation is a plane and the solution set is their intersection.

## Core ideas

### Elimination

A **linear equation** in $x,y,z$ has the form $ax+by+cz=d$, with no products of unknowns and no powers. To solve two equations in two unknowns you eliminate one unknown by adding multiples of the equations. For three equations, eliminate the same unknown from two *different pairs*, giving two equations in two unknowns, solve those, and back-substitute. This is the idea of **Gaussian elimination**: use the first equation to remove $x$ from the others, then use the second to remove $y$ from the third, giving a triangular system that is solved from the bottom up.

The legal operations, which never change the solution set, are:

1. swap two equations;
2. multiply an equation by a non-zero constant;
3. add a multiple of one equation to another.

### Matrix form and row echelon form

To avoid writing $x,y,z$ repeatedly, store the coefficients in an **augmented matrix**. The system
$$
x+y+z=6,\qquad 2x-y+z=3,\qquad x+2y-z=2
$$
becomes
$$
\left(\begin{array}{ccc|c}1&1&1&6\\2&-1&1&3\\1&2&-1&2\end{array}\right).
$$
The operations above become **row operations**. The aim is **row echelon form**: zeros below the diagonal. Then the last row gives one unknown directly, the next row gives another, and so on. Each row operation should be recorded, for example $R_2\to R_2-2R_1$, so that a reader (and an examiner) can follow.

### The three possible outcomes

After reaching echelon form, look at the last row:

- A last row of the form $(0\ 0\ c\mid d)$ with $c\ne0$ gives a single value for $z$, and back-substitution gives a **unique solution**.
- A last row $(0\ 0\ 0\mid 0)$ means that the equation was redundant (a combination of the others). With two independent equations for three unknowns, there are **infinitely many solutions**, described with a parameter.
- A last row $(0\ 0\ 0\mid d)$ with $d\ne0$ says $0=d$, which is impossible, so the system is **inconsistent** and has **no solution**.

These are the *only* possibilities for a linear system: you can never have exactly two solutions. If two points satisfy all equations, so does every point on the line through them.

### Parametric solutions

When a row of zeros occurs, one unknown is *free*. Set it equal to a parameter, such as $z=t$ with $t\in\mathbb{R}$, and write the other unknowns in terms of $t$. For instance, the solution set $x=\dfrac{11-3t}{2}$, $y=\dfrac{1+t}{2}$, $z=t$ is a line in space, which can also be written as $\mathbf r=\begin{pmatrix}11/2\\1/2\\0\end{pmatrix}+t\begin{pmatrix}-3/2\\1/2\\1\end{pmatrix}$. Always check by substituting back into every original equation and confirming that the $t$ terms cancel.

### Systems with a parameter

Questions often include a constant $k$: for which values of $k$ does the system have a unique solution, none, or infinitely many? The plan is to carry out the elimination with $k$ treated as a number, keeping it in the last row. The final row looks like $(0\ 0\ (k-a)\mid(m-b))$:

- if $k\ne a$, the system has a unique solution;
- if $k=a$ and $m=b$, it has infinitely many solutions;
- if $k=a$ and $m\ne b$, it has no solution.

An important point is that the *same* value $k=a$ can give either infinitely many solutions or none, depending on the right-hand side. That is why you must test the right-hand side once the coefficient row has vanished. The value of $k$ at which the last coefficient vanishes can also be found as the point where the **determinant** of the coefficient matrix is zero; a GDC computes this directly, and it is a useful check, since a non-zero determinant always means a unique solution.

### Geometric interpretation

Each equation $ax+by+cz=d$ represents a **plane** in three-dimensional space, with normal vector $(a,b,c)$. The solutions of the system are the points common to all planes.

| Outcome | Geometry |
|---|---|
| Unique solution | Three planes meeting at one point |
| Infinitely many (one parameter) | Three planes sharing a common line (like pages of a book), or two planes coinciding and cutting the third |
| Infinitely many (two parameters) | All three planes coincide |
| No solution | Planes with no common point: a triangular prism (each pair meets in a line, but the three lines are parallel), or at least two parallel planes that are distinct |

You will meet the algebra of planes in AHL 3.17, and the intersections of lines and planes in AHL 3.18; solving the system is exactly the algebraic side of those geometric questions.

### Word problems

To set up a system from a context, define *three unknowns with units*, and translate each sentence into one equation. Common structures are totals of items, totals of money and a relationship between two quantities. After solving, check that the answer is **sensible** (non-negative, whole numbers when counting) and answer in a sentence.

## Worked examples

### Example 1 (unique solution by elimination, 6 marks)

Solve $x+y+z=6$, $2x-y+z=3$, $x+2y-z=2$.

*Solution.* Label the equations (1), (2), (3). Add (1) and (3), which eliminates $z$: $2x+3y=8$ (4). From (1), $z=6-x-y$; substitute into (2): $2x-y+6-x-y=3$, so $x-2y=-3$ (5). From (4) and (5): $x=2y-3$ gives $4y-6+3y=8$, so $y=2$ and $x=1$. Then $z=6-1-2=3$. The solution is $(x,y,z)=(1,2,3)$.

Check: $2(1)-2+3=3$ ✓ and $1+4-3=2$ ✓.

### Example 2 (the same system in matrix form, 5 marks)

Solve the system of Example 1 using row operations.

*Solution.*
$$
\left(\begin{array}{ccc|c}1&1&1&6\\2&-1&1&3\\1&2&-1&2\end{array}\right)
\xrightarrow{\substack{R_2\to R_2-2R_1\\R_3\to R_3-R_1}}
\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&1&-2&-4\end{array}\right)
\xrightarrow{R_3\to 3R_3+R_2}
\left(\begin{array}{ccc|c}1&1&1&6\\0&-3&-1&-9\\0&0&-7&-21\end{array}\right).
$$
The last row gives $-7z=-21$, so $z=3$. The second row gives $-3y-3=-9$, so $y=2$. The first row gives $x+2+3=6$, so $x=1$. The unique solution is $(1,2,3)$, as before.

### Example 3 (infinitely many solutions, 7 marks)

Solve $x+y+z=6$, $x-y+2z=5$, $2x+3z=11$ and describe the solution geometrically.

*Solution.* Adding the first two equations gives $2x+3z=11$, which is exactly the third equation, so the third is redundant. In echelon form, the last row becomes $(0\ 0\ 0\mid0)$. Let $z=t$. Then $x=\dfrac{11-3t}2$ and, from the first equation, $y=6-x-z=6-\dfrac{11-3t}2-t=\dfrac{1+t}2$. So the solution set is
$$
(x,y,z)=\left(\tfrac{11-3t}{2},\tfrac{1+t}2,t\right),\quad t\in\mathbb{R}.
$$
Geometrically, the three planes share a common line.

Check with $t=1$: $(4,1,1)$ gives $4+1+1=6$ ✓, $4-1+2=5$ ✓, $8+3=11$ ✓.

### Example 4 (no solution, 5 marks)

Show that $x+y+z=6$, $x-y+2z=5$, $2x+3z=12$ has no solution.

*Solution.* Adding the first two equations gives $2x+3z=11$, but the third equation says $2x+3z=12$. These contradict one another, so the system is inconsistent. In echelon form the last row is $(0\ 0\ 0\mid1)$, i.e. $0=1$. The planes have no common point; each pair meets in a line but the three lines are parallel, giving a triangular prism.

### Example 5 (a parameter, 8 marks)

Consider the system $x+y+z=1$, $x+2y+3z=2$, $x+3y+kz=3$. (a) Find the value of $k$ for which the system does not have a unique solution. (b) For this $k$, show that the system is consistent and find the general solution. (c) Solve the system for $k=6$.

*Solution.* Row-reduce: $R_2\to R_2-R_1$ gives $(0\ 1\ 2\mid1)$ and $R_3\to R_3-R_1$ gives $(0\ 2\ k-1\mid2)$. Then $R_3\to R_3-2R_2$ gives $(0\ 0\ k-5\mid0)$.
(a) The system has a unique solution unless $k-5=0$, so the exceptional value is $k=5$.
(b) For $k=5$ the last row is $(0\ 0\ 0\mid0)$, so the system is consistent with infinitely many solutions. Let $z=t$. From $y+2z=1$: $y=1-2t$. From the first equation: $x=1-y-z=1-(1-2t)-t=t$. The general solution is $(t,\,1-2t,\,t)$.
(c) For $k=6$ the last row is $(0\ 0\ 1\mid0)$, so $z=0$, then $y=1$ and $x=0$. The solution is $(0,1,0)$.

Check (b) with $t=2$: $(2,-3,2)$ gives $2-3+2=1$ ✓, $2-6+6=2$ ✓, $2-9+10=3$ ✓.

### Example 6 (the right-hand side matters, 4 marks)

Replace the right-hand side of the third equation in Example 5 by $4$ and take $k=5$. What happens?

*Solution.* Now $R_3\to R_3-R_1$ gives $(0\ 2\ 4\mid3)$, and with $R_2$ equal to $(0\ 1\ 2\mid1)$ the operation $R_3\to R_3-2R_2$ gives $(0\ 0\ 0\mid1)$, since $3-2\cdot1=1$. This says $0=1$, so the system has **no solution**.

The same coefficient matrix has now produced an inconsistent system, which shows why one must check the right-hand side when $k-5=0$.

### Example 7 (a word problem, 7 marks)

A theatre sells adult tickets at EUR 9, child tickets at EUR 5 and senior tickets at EUR 6. For one show, $30$ tickets were sold for a total of EUR 208, and there were $4$ more adult tickets than child tickets. Find how many of each were sold.

*Solution.* Let $a$, $c$, $s$ be the numbers of adult, child and senior tickets. Then $a+c+s=30$, $9a+5c+6s=208$ and $a-c=4$. Substitute $a=c+4$: $2c+4+s=30$ gives $s=26-2c$; and $9(c+4)+5c+6(26-2c)=208$ gives $2c+192=208$, so $c=8$. Then $a=12$ and $s=10$.

Check: $12+8+10=30$ ✓ and $108+40+60=208$ ✓. So $12$ adults, $8$ children and $10$ seniors.

### Example 8 (a two-parameter geometric reading, 3 marks)

What does it mean geometrically if the three equations are all multiples of $x+2y+z=4$?

*Solution.* All three equations describe the same plane, so the planes coincide. The solution set is the whole plane, and it needs two parameters.

For instance, setting $y=s$ and $z=t$ gives $x=4-2s-t$, so the general solution is $(4-2s-t,\,s,\,t)$.

### Example 9 (a unique solution with fractions, 5 marks)

Solve $2x+y-z=1$, $x-y+2z=5$, $3x+2y+z=4$.

*Solution.* Add the first two: $3x+z=6$, so $z=6-3x$. Substitute into the first: $2x+y-6+3x=1$, so $y=7-5x$. Substitute into the third: $3x+14-10x+6-3x=4$, so $-10x=-16$ and $x=\dfrac85$. Then $y=7-8=-1$ and $z=6-\dfrac{24}5=\dfrac65$. The solution is $\left(\dfrac85,-1,\dfrac65\right)$.

Check in the second equation: $\dfrac85+1+\dfrac{12}5=\dfrac{8+5+12}{5}=5$ ✓.

## Using your GDC

The GDC is the quickest way to solve a $3\times3$ system and is expected to be used on Paper 2, but you must still be able to do the elimination by hand for Paper 1. Typical GDC steps: choose the *simultaneous equation solver* (sometimes in an equation or algebra menu), set the number of unknowns to $3$, and enter the coefficients and the constants row by row. The output is the solution as decimals or fractions. A **unique solution** is displayed directly. For **infinitely many solutions** or **no solution**, many models display an error or a message such as "no unique solution" or "infinite solutions"; interpret this using the echelon form on paper to decide which case it is. Some GDCs have a row-reduction function (often "$\mathrm{rref}$") in the matrix menu, which gives a complete reduced form and a parametric solution for the free variable. The determinant function shows whether the coefficient matrix is singular, which tells you where a parameter $k$ gives non-unique solutions. Remember that the calculator's decimals may need converting to exact fractions if the question says "exact". Menu names vary between models.

## Common mistakes

1. **Arithmetic sign errors in row operations**, especially subtracting a negative entry.
2. **Applying an operation to the left-hand side only**, forgetting the constant column.
3. **Declaring "no solution" when the last row is $0=0$**, or "infinitely many" when it is $0=d$.
4. **Stopping at $k-5=0$** without checking the right-hand side for consistency.
5. **Giving only one value as the "solution"** when the system has infinitely many solutions; a parametric description is needed.
6. **Not substituting back** into all three original equations to check.
7. **Defining unknowns without units or meaning** in a word problem, then failing to interpret the answer.
8. **Treating the geometry loosely:** infinitely many solutions does not always mean "three planes meeting in a line"; the planes might coincide, or two might coincide.

## Exam technique and command terms

**Solve the system** expects a final statement of $x,y,z$ for a unique case. **Show that the system has infinitely many solutions** needs the echelon form with a zero row and a statement that the system is consistent, and **find the general solution** needs a parameter. **Determine the values of $k$** requires careful use of the last row: three cases each need a justification. **Interpret geometrically** needs words about planes meeting at a point, in a line or having no common point. Clear row labels (for example $R_2\to R_2-2R_1$) allow method marks even if there is an arithmetic slip, so always write them.

A good time-saver in Paper 1 is to choose the elimination order to avoid fractions, for example using an equation with coefficient $1$ or $-1$ first. In Paper 2, use the calculator for the numbers but still state your *interpretation*: for instance, "since the solver reports no unique solution, I examined the echelon form and found $0=1$, so there is no solution." In context questions give the answer in a sentence with units.

## Connections

SL 2.7 treated systems of two equations (a linear and a quadratic, for example), and in SL 1.2 and 1.3 you used simultaneous equations to find $u_1$ and $d$ or $r$. AHL 2.12 gives another place where systems appear: finding the coefficients of a polynomial that passes through given points, or with given roots. In Unit 3, AHL 3.17 and 3.18 develop planes: the normal vector of a plane is the coefficient vector, and the three outcomes here are the three ways in which three planes can meet, or fail to. AHL 3.13 (scalar product) can be used to test whether two planes are parallel through their normals. In Unit 4, linear systems appear when fitting a regression line through the normal equations, and in Unit 5 in solving for the constants of a particular solution to a differential equation with initial conditions.

## Check your understanding

1. Solve $x+y+z=4$, $2x-y+z=8$, $x+2y-z=-3$.
2. Show that $x-y+z=2$, $2x+y-z=1$, $x+2y-2z=-1$ has infinitely many solutions and give the general solution.
3. Show that $x-y+z=2$, $2x+y-z=1$, $x+2y-2z=5$ has no solution, and describe the planes geometrically.
4. The system $x+y+z=1$, $x+2y+3z=2$, $x+3y+kz=m$ is given. Find the values of $k$ and $m$ for which there is (a) a unique solution, (b) infinitely many solutions, (c) no solution.
5. Three numbers $x,y,z$ satisfy $x+y+z=15$, $2x+3y+5z=52$ and $x-y=1$. Find them.
6. Solve $2x-y+3z=9$, $x+2y-z=4$, $3x+y+2z=13$.
7. Explain why a system of three homogeneous equations $ax+by+cz=0$ always has at least one solution.
8. Use a GDC (or by hand) to solve $2x+y-z=1$, $x-y+2z=5$, $3x+2y+z=4$.
9. Describe geometrically the solution of a system whose three equations are all multiples of the same equation.
10. For the system in question 4, state the determinant of the coefficient matrix in terms of $k$ and explain its link to the answer.

### Answers

1. $(x,y,z)=(2,-1,3)$. Check: $2-1+3=4$ ✓, $4+1+3=8$ ✓, $2-2-3=-3$ ✓.
2. Eq (1) + eq (2): $3x=3$ so $x=1$. Then $-y+z=1$, so $y=z-1$. Equation 3: $1+2(z-1)-2z=-1$ ✓ (always true). Let $z=t$: $(1,\,t-1,\,t)$, $t\in\mathbb{R}$.
3. Eq (2) minus eq (1) gives $x+2y-2z=-1$, but eq (3) says $x+2y-2z=5$. Contradiction, so no solution. Each pair of planes meets in a line, and the three lines are parallel: a triangular prism.
4. Row reduction gives last row $(0\ 0\ k-5\mid m-3)$. (a) $k\ne5$, any $m$. (b) $k=5$ and $m=3$. (c) $k=5$ and $m\ne3$.
5. Substituting $x=y+1$: $2y+1+z=15$ gives $z=14-2y$; $2(y+1)+3y+5(14-2y)=52$ gives $-5y+72=52$, so $y=4$. Then $x=5$ and $z=6$. Check: $10+12+30=52$ ✓.
6. The third equation equals the sum of the first two: $(2x-y+3z)+(x+2y-z)=3x+y+2z$ and $9+4=13$ ✓, so there are infinitely many solutions. Let $z=t$: from the first two, $x=\dfrac{22}5-t$ and $y=t-\dfrac15$. General solution $\left(\dfrac{22}5-t,\ t-\dfrac15,\ t\right)$.
7. $x=y=z=0$ satisfies every equation $ax+by+cz=0$.
8. $\left(\dfrac85,-1,\dfrac65\right)=(1.6,-1,1.2)$.
9. All three planes are the same plane, so the solution set is the entire plane (two parameters).
10. The determinant is $k-5$. It is non-zero exactly when $k\ne5$, which is when there is a unique solution; when it is zero the system has either infinitely many solutions or none, depending on $m$.

## Summary

- Solve by elimination or row operations: swap rows, scale a row by a non-zero number, add a multiple of one row to another.
- In echelon form, a last row $(0\ 0\ c\mid d)$ with $c\ne0$ gives a unique solution, $(0\ 0\ 0\mid0)$ gives infinitely many (use a parameter), and $(0\ 0\ 0\mid d\ne0)$ gives no solution.
- A linear system has $0$, $1$ or infinitely many solutions, never exactly two.
- For a parameter $k$, find where the last coefficient vanishes and then test the right-hand side; the determinant is zero at those same values of $k$.
- Geometrically: a point, a line (or plane) or nothing for three planes.
- In a word problem define unknowns with units, check sense, and answer in a sentence.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.16. Related facts may appear elsewhere. Justify any method used here.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
