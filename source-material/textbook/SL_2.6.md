# Quadratic functions

> **SL 2.6 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- recognise the three forms of a quadratic: standard $ax^{2}+bx+c$, factored $a(x-p)(x-q)$ and vertex form $a(x-h)^{2}+k$, and convert between them;
- find the $y$-intercept, the zeros, the axis of symmetry and the vertex from each form;
- complete the square, and use it to find the range and the extreme value;
- use the discriminant $\Delta=b^{2}-4ac$ to determine the number of real roots, and find unknown parameters from conditions on $\Delta$;
- determine the equation of a parabola from its key features or from three points;
- solve optimisation problems in context, such as maximum area or maximum height;
- use the sum and product of the roots, $-\dfrac ba$ and $\dfrac ca$, in simple problems.

## Why this topic matters

The quadratic is the first function that has a turning point, and with it the first function that can be *optimised*. Its graph, the parabola, is the shape of a thrown ball's path, of a satellite dish, of a suspension bridge cable (approximately) and of the cross-section of a car headlight. The ideas in this chapter (completing the square, the vertex, the discriminant) will be reused for the rest of the course: in SL 2.7 to solve quadratic equations and inequalities, in SL 2.11 to describe transformations, in Unit 5 to find maxima and minima without calculus, and in AHL to study polynomials and complex roots. In the examination, quadratic questions appear on both papers, often mixed with a context or with a parameter. A confident student can move among the three forms without hesitation, knows which form to choose for which question, and understands the discriminant as a statement about the *graph*, not just a formula to memorise.

## Core ideas

### The three forms

Every quadratic function can be written in three equivalent forms, each of which reveals something different.

| Form | Expression | What it shows |
|---|---|---|
| Standard (general) | $f(x)=ax^{2}+bx+c$ | $y$-intercept $c$; axis $x=-\dfrac b{2a}$ |
| Factored (intercept) | $f(x)=a(x-p)(x-q)$ | zeros $p$ and $q$ |
| Vertex (completed square) | $f(x)=a(x-h)^{2}+k$ | vertex $(h,k)$; axis $x=h$ |

In all forms, $a\ne0$ is the *same* number: its sign tells you whether the parabola opens upward ($a>0$, with a minimum) or downward ($a<0$, with a maximum), and its size tells you how narrow it is. The factored form exists over the real numbers only if the roots are real.

### Axis of symmetry and vertex

A parabola is symmetric about a vertical line, the **axis of symmetry**, which passes through the vertex. In standard form the axis is $x=-\dfrac b{2a}$, and the vertex is $\left(-\dfrac b{2a},\,f\!\left(-\dfrac b{2a}\right)\right)$. In factored form, the axis is halfway between the zeros, $x=\dfrac{p+q}2$. Symmetry has a useful consequence: if $f(m)=f(n)$ with $m\ne n$, then the axis is $x=\dfrac{m+n}2$, even if the zeros are not known.

The vertex is the minimum point if $a>0$ and the maximum point if $a<0$, and its $y$-coordinate is the extreme value, which gives the range: $y\ge k$ for $a>0$ and $y\le k$ for $a<0$.

### Completing the square

To convert $ax^{2}+bx+c$ to vertex form, take out $a$ from the first two terms, complete the square inside the brackets, then compensate:
$$
ax^{2}+bx+c=a\left(x^{2}+\frac bax\right)+c=a\left(x+\frac b{2a}\right)^{2}-\frac{b^{2}}{4a}+c.
$$
So $h=-\dfrac b{2a}$ and $k=c-\dfrac{b^{2}}{4a}$. For a monic quadratic ($a=1$) the shortcut is $x^{2}+bx=\left(x+\dfrac b2\right)^{2}-\dfrac{b^{2}}4$. A frequent error is to forget to multiply the compensating term by $a$ when $a\ne1$. A check: expand the vertex form and confirm that you recover the original.

### Zeros and the quadratic formula

The zeros are the solutions of $ax^{2}+bx+c=0$, given by the quadratic formula (in the booklet):
$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}.
$$
The two solutions are symmetric about $x=-\dfrac b{2a}$, differing by $\pm\dfrac{\sqrt\Delta}{2a}$ (SL 1.6 gave the derivation). Methods for solving quadratic equations are the subject of SL 2.7, but the zeros also tell you the factored form and the axis.

### The discriminant

The quantity $\Delta=b^{2}-4ac$ controls the number of real roots:

- $\Delta>0$: two distinct real roots, so the parabola crosses the $x$-axis twice;
- $\Delta=0$: one repeated root, so the vertex lies *on* the $x$-axis and the parabola touches it;
- $\Delta<0$: no real roots (two complex conjugate roots, AHL 1.12), so the parabola never meets the $x$-axis.

For problems with a parameter, such as "find $k$ such that $x^{2}+kx+9=0$ has two distinct real roots", write the condition on $\Delta$ as an inequality in $k$ and solve it. For "$f(x)>0$ for all $x$", you need $a>0$ and $\Delta<0$.

### Sum and product of roots

If the roots of $ax^{2}+bx+c=0$ are $\alpha$ and $\beta$, then comparing $a(x-\alpha)(x-\beta)=ax^{2}-a(\alpha+\beta)x+a\alpha\beta$ with the standard form gives
$$
\alpha+\beta=-\frac ba,\qquad \alpha\beta=\frac ca.
$$
These relations let you find symmetric expressions without computing the roots, such as $\alpha^{2}+\beta^{2}=(\alpha+\beta)^{2}-2\alpha\beta$, and to build a new quadratic whose roots are related to the old ones. They generalise to polynomials of higher degree in AHL 2.12.

### Finding the equation of a parabola

Choose the form that uses the information you have:

- **Zeros and one more point:** $y=a(x-p)(x-q)$, then find $a$ from the extra point.
- **Vertex and one more point:** $y=a(x-h)^{2}+k$, then find $a$.
- **Three arbitrary points:** substitute each into $y=ax^{2}+bx+c$ and solve the system of three linear equations (by hand, or by GDC).
- **Axis of symmetry and two points:** use symmetry to find the third point, or the vertex.

### Optimisation without calculus

Because the extreme value of a quadratic occurs at its vertex, many maximum-and-minimum problems reduce to completing the square or finding the axis. The method is: define the variable and write the quantity to be optimised as a function of *one* variable; check that it is quadratic; find the vertex; and interpret it, checking the domain. For instance, the area of a rectangular pen with $60$ m of fence on three sides (a wall provides the fourth) is $A=x(60-2x)$, whose maximum occurs on the axis $x=15$. Calculus handles more general functions, but the quadratic case is both simpler and a good check.

## Worked examples

### Example 1 (completing the square, 6 marks)

For $f(x)=2x^{2}-12x+7$, write $f$ in the form $a(x-h)^{2}+k$, and state the vertex, the axis, the $y$-intercept and the range. Find the zeros.

*Solution.* $f(x)=2(x^{2}-6x)+7=2\left[(x-3)^{2}-9\right]+7=2(x-3)^{2}-11$. The vertex is $(3,-11)$, the axis is $x=3$ and the $y$-intercept is $f(0)=7$. Since $a=2>0$, the range is $y\ge-11$. For the zeros, $2(x-3)^{2}=11$, so $x=3\pm\sqrt{\tfrac{11}2}\approx0.655$ or $5.35$.

Check: expanding $2(x-3)^{2}-11=2x^{2}-12x+18-11$ ✓.

### Example 2 (factored form, 5 marks)

Let $f(x)=-x^{2}+2x+8$. Write it in factored form and find the zeros, the vertex and the $y$-intercept.

*Solution.* $f(x)=-(x^{2}-2x-8)=-(x-4)(x+2)$. The zeros are $x=4$ and $x=-2$. The axis lies midway: $x=\dfrac{4+(-2)}2=1$, and $f(1)=-1+2+8=9$, so the vertex is $(1,9)$, a maximum since $a=-1<0$. The $y$-intercept is $8$.

### Example 3 (equation from the vertex, 4 marks)

A parabola has vertex $(2,-3)$ and passes through $(0,5)$. Find its equation in standard form.

*Solution.* Write $y=a(x-2)^{2}-3$. At $(0,5)$: $4a-3=5$, so $a=2$. Hence $y=2(x-2)^{2}-3=2x^{2}-8x+5$.

### Example 4 (three points, 6 marks)

Find the quadratic through $(1,2)$, $(2,5)$ and $(3,10)$.

*Solution.* Let $y=ax^{2}+bx+c$. Then $a+b+c=2$, $4a+2b+c=5$ and $9a+3b+c=10$. Subtracting the first from the second: $3a+b=3$. Subtracting the second from the third: $5a+b=5$. Hence $2a=2$, so $a=1$, then $b=0$ and $c=1$. The quadratic is $y=x^{2}+1$.

Check: $f(3)=10$ ✓. A shortcut: the first differences $3,5$ have a constant second difference $2=2a$, so $a=1$.

### Example 5 (the discriminant with a parameter, 6 marks)

Find the values of $k$ for which $x^{2}+kx+9=0$ has (a) two distinct real roots; (b) a repeated root; (c) no real roots.

*Solution.* $\Delta=k^{2}-36$. (a) $\Delta>0$ gives $k<-6$ or $k>6$. (b) $\Delta=0$ gives $k=\pm6$ (the roots are then $x=\mp3$). (c) $\Delta<0$ gives $-6<k<6$.

### Example 6 (maximum area, 7 marks)

A farmer has $60$ m of fencing to enclose a rectangular pen against a straight wall, so only three sides need fence. Find the dimensions that give the maximum area, and the area.

*Solution.* Let the sides perpendicular to the wall have length $x$ m. The side parallel to the wall has length $60-2x$ m. Then $A=x(60-2x)=-2x^{2}+60x$ with domain $0<x<30$. The axis is $x=-\dfrac{60}{2(-2)}=15$, and $A(15)=15\times30=450$. The pen should be $15$ m by $30$ m, with a maximum area of $450\ \text{m}^{2}$.

Check by completing the square: $A=-2(x-15)^{2}+450$ ✓.

### Example 7 (a quadratic without real roots, 4 marks)

Show that $f(x)=x^{2}-6x+11$ is always positive and find its minimum value.

*Solution.* $f(x)=(x-3)^{2}+2\ge2>0$. The minimum value is $2$, at $x=3$. Equivalently $\Delta=36-44=-8<0$ and $a>0$, so the graph lies above the axis.

### Example 8 (sum and product of roots, 7 marks)

The roots of $2x^{2}-5x+1=0$ are $\alpha$ and $\beta$. Find (a) $\alpha+\beta$ and $\alpha\beta$; (b) $\alpha^{2}+\beta^{2}$; (c) a quadratic equation with integer coefficients whose roots are $\alpha+1$ and $\beta+1$.

*Solution.* (a) $\alpha+\beta=\dfrac52$ and $\alpha\beta=\dfrac12$. (b) $\alpha^{2}+\beta^{2}=\left(\dfrac52\right)^{2}-2\cdot\dfrac12=\dfrac{25}4-1=\dfrac{21}4$. (c) The sum of the new roots is $\dfrac52+2=\dfrac92$ and the product is $\alpha\beta+(\alpha+\beta)+1=\dfrac12+\dfrac52+1=4$. The equation $x^{2}-\dfrac92x+4=0$ becomes $2x^{2}-9x+8=0$.

Check: the roots of the original are $\dfrac{5\pm\sqrt{17}}4$, so the new roots are $\dfrac{9\pm\sqrt{17}}4$, with product $\dfrac{81-17}{16}=4$ ✓.

### Example 9 (projectile, 6 marks)

A ball is thrown so that its height after $t$ seconds is $h(t)=-5t^{2}+20t+1.5$ metres. Find the maximum height and the time when the ball lands.

*Solution.* The axis is $t=-\dfrac{20}{2(-5)}=2$, and $h(2)=-20+40+1.5=21.5$, so the maximum height is $21.5$ m. The ball lands when $h=0$: $-5t^{2}+20t+1.5=0$, so $t=\dfrac{-20-\sqrt{430}}{-10}=\dfrac{20+\sqrt{430}}{10}\approx4.07$ s (the negative root is rejected since $t\ge0$).

### Example 10 (symmetry, 3 marks)

A quadratic $f$ satisfies $f(1)=f(5)=7$ and $f(2)=3$. Find the axis of symmetry and $f(4)$.

*Solution.* Since $f(1)=f(5)$, the axis is $x=\dfrac{1+5}2=3$. The point $x=4$ is the mirror image of $x=2$ in the line $x=3$, so $f(4)=f(2)=3$.

### Example 11 (tangency, 5 marks)

Find the value of $k$ for which the line $y=4x+k$ is tangent to $y=x^{2}$, and the point of contact.

*Solution.* Set $x^{2}=4x+k$, so $x^{2}-4x-k=0$. Tangency means a repeated root, so $\Delta=16+4k=0$, which gives $k=-4$. Then $x^{2}-4x+4=(x-2)^{2}=0$, so the point of contact is $x=2$, $y=4$, that is $(2,4)$.

## Using your GDC

The GDC can find all the key features of a quadratic. Graph the function and use the *minimum* or *maximum* tool to find the vertex, the *zero* tool for the roots, and read the $y$-intercept at $x=0$ from the table. Many models have a *polynomial solver* that gives the roots (including complex roots) from the coefficients. To find the equation of a parabola through three points, you can use *quadratic regression* on a three-point table (an exact fit), or solve the linear system with the simultaneous equation solver. For optimisation problems, graph the area or height function in a window that shows the vertex. When a parameter is involved, graph for a couple of values (say $k=5,6,7$) to see the three cases of the discriminant. The GDC is a good *check*, but when the question asks you to "show that" or "find the exact value", the algebra is what earns the marks. Menu names vary by model.

## Common mistakes

1. **Forgetting to multiply the compensating constant by $a$** when completing the square with $a\ne1$.
2. **Sign errors in the vertex:** $(x-3)^{2}$ has vertex at $x=+3$, not $-3$.
3. **Using $\Delta=b^{2}+4ac$** or forgetting the negative of $b$ in the formula.
4. **Reading the maximum as the vertex $x$-value** rather than the $y$-value, or vice versa.
5. **Not checking the domain** in optimisation, for instance a negative length.
6. **Treating $\Delta=0$ as "no roots"** instead of one repeated root.
7. **Assuming that $a=1$** when finding the equation from zeros; the extra point is needed to find $a$.
8. **Rounding too early** when finding roots by formula, causing inaccurate final answers.

## Exam technique and command terms

**Write in the form $a(x-h)^{2}+k$** requires the working of completing the square, and a check of the expansion is a good use of the last ten seconds. **State the vertex** or **write down the coordinates of the vertex** requires just $(h,k)$ from vertex form, but make sure the sign of $h$ is right. **Find the range** needs an inequality in $y$. **Show that the equation has no real roots** is answered with $\Delta<0$, and you should show the arithmetic of $\Delta$. **Find the values of $k$ such that...** means a condition on $\Delta$, solved as an inequality in $k$. For a context problem, the final line should be a sentence with units: "the maximum area is $450\ \text{m}^{2}$".

For quick marks, memorise: the axis is $x=-\dfrac b{2a}$, the product of the roots is $\dfrac ca$, and the sum is $-\dfrac ba$. Learn also the habit of verifying with a point: after finding an equation from a vertex and a point, test that the second point satisfies it. In Paper 1, optimise by completing the square; in Paper 2, use the GDC maximum.

## Connections

SL 2.1 provides the gradient ideas that distinguish the parabola, with gradient changing linearly. SL 2.3 and 2.4 cover the graph and key features found with technology. SL 2.5 uses the quadratic as the standard example of an inverse with a restricted domain, from the completed-square form. SL 2.7 builds directly on this chapter by solving quadratic equations and inequalities, and SL 2.11 uses the vertex form to describe transformations: $a(x-h)^{2}+k$ is the graph of $x^{2}$ stretched by $a$ and translated by $(h,k)$. AHL 1.12 and 1.14 explain the case $\Delta<0$ with complex roots, AHL 2.12 generalises the sum and product of roots to polynomials of higher degree, and AHL 2.15 solves inequalities using sign analysis. In Unit 5, the vertex is where the derivative of the quadratic is zero, $f'(x)=2ax+b=0$, giving the same axis $x=-\dfrac b{2a}$. In Unit 4, the variance can be minimised by completing the square, a nice use of the vertex: $\sum(x_i-c)^{2}$ is smallest when $c=\bar x$.

## Check your understanding

1. Write $f(x)=x^{2}-8x+3$ in vertex form and state the vertex.
2. For $f(x)=-2x^{2}+8x-3$, find the maximum value and where it occurs.
3. A parabola has vertex $(-1,4)$ and passes through $(1,-4)$. Find its equation in standard form.
4. Find the values of $k$ for which $2x^{2}+kx+8=0$ has a repeated root.
5. Find the values of $k$ for which $x^{2}-4x+k>0$ for all real $x$.
6. A farmer has $80$ m of fencing for three sides of a rectangular pen against a wall. Find the maximum area and the dimensions.
7. The roots of $x^{2}-6x+4=0$ are $\alpha$ and $\beta$. Find $\alpha^{2}+\beta^{2}$.
8. A quadratic satisfies $f(2)=f(8)$. State the axis of symmetry.
9. A ball has height $h(t)=-5t^{2}+10t+2$ metres. Find the maximum height and the landing time.
10. Find $k$ such that the line $y=2x+k$ is tangent to $y=x^{2}$, and the point of contact.

### Answers

1. $(x-4)^{2}-13$; vertex $(4,-13)$.
2. $f(x)=-2(x-2)^{2}+5$, so the maximum value is $5$ at $x=2$.
3. $y=a(x+1)^{2}+4$ and at $(1,-4)$: $4a+4=-4$, so $a=-2$. Then $y=-2(x+1)^{2}+4=-2x^{2}-4x+2$.
4. $\Delta=k^{2}-64=0$, so $k=\pm8$.
5. $\Delta=16-4k<0$ gives $k>4$ (with $a=1>0$, the graph lies above the axis).
6. $A=x(80-2x)$, with axis $x=20$ and $A=20\times40=800$. The pen is $20$ m by $40$ m with area $800\ \text{m}^{2}$.
7. $\alpha+\beta=6$ and $\alpha\beta=4$, so $\alpha^{2}+\beta^{2}=36-8=28$.
8. $x=\dfrac{2+8}2=5$.
9. The axis is $t=1$ and $h(1)=-5+10+2=7$ m. Landing: $5t^{2}-10t-2=0$ gives $t=\dfrac{10+\sqrt{140}}{10}\approx2.18$ s.
10. $x^{2}-2x-k=0$ with $\Delta=4+4k=0$ gives $k=-1$. The contact point is $x=1$, $y=1$, i.e. $(1,1)$.

## Summary

- Three forms: $ax^{2}+bx+c$ (intercept $c$), $a(x-p)(x-q)$ (zeros) and $a(x-h)^{2}+k$ (vertex); $a>0$ opens up, $a<0$ opens down.
- Axis $x=-\dfrac b{2a}$, halfway between the zeros; the vertex gives the extreme value and the range.
- Complete the square carefully, multiplying the compensation by $a$.
- $\Delta=b^{2}-4ac$: positive means two roots, zero means one repeated root (tangent), negative means no real roots.
- Sum of roots $-\dfrac ba$ and product $\dfrac ca$.
- Choose the form that uses the given information to find the equation; optimise at the vertex and check the domain.
