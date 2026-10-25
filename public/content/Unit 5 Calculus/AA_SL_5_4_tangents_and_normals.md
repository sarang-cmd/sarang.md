# Tangents and normals

> **SL 5.4 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- find the equation of the tangent to a curve at a given point, in the forms $y=mx+c$, $y-y_1=m(x-x_1)$ and $ax+by+d=0$;
- find the equation of the normal to a curve at a given point using the perpendicular gradient $-\dfrac{1}{f'(x_1)}$;
- handle the special cases in which the tangent is horizontal and the normal vertical, and the reverse;
- find the points on a curve at which the tangent has a given gradient, or is parallel or perpendicular to a given line;
- find where a tangent or normal meets the axes, or meets the curve again, and use the result to find lengths and areas;
- find a tangent from an external point, and find an unknown constant for which a line is tangent to a curve;
- use technology to check or draw a tangent and a normal.

## Why this topic matters

A tangent is the straight line that best approximates a curve near a point. That simple fact makes tangents powerful: engineers replace a complicated curve by its tangent when they need a quick estimate, physicists use the tangent to a path to find the direction in which a body is moving at an instant, and numerical methods such as Newton's method for solving equations repeatedly slide down tangent lines. The **normal**, the line perpendicular to the tangent, also has practical meaning: it is the direction in which a force acts when a ball bounces off a curved surface, and it appears in optics, where light rays reflect about the normal to a mirror.

In the examination, tangents and normals are among the most dependable calculus questions. A typical problem gives a function and a point, asks for the gradient, and then asks for the equation of the tangent or the normal, perhaps followed by a part that finds the point where the line crosses an axis, or where the normal meets the curve again. Each step is routine, but the question involves several skills at once (differentiation, substitution, the equation of a line, perpendicular gradients and solving an equation) and the marks are for each of them. Many errors come from not writing out the structure: find the point, find the gradient, write the line. If you follow that routine every time, you can score full marks on these questions with very little risk.

## Core ideas

### The tangent

Let $y=f(x)$ be a curve and let $(x_1,y_1)$ be a point on it, so $y_1=f(x_1)$. The tangent at that point is the line through $(x_1,y_1)$ with gradient equal to the derivative there, $m=f'(x_1)$. Its equation is
$$
y-y_1=f'(x_1)\,(x-x_1).
$$
This is the point-gradient form of the equation of a line. You can leave it in this form, or rearrange it into $y=mx+c$ or $ax+by+d=0$, with integer coefficients if requested. The three steps are always:

1. find $y_1$ by substituting $x_1$ into $f$ (unless it is given);
2. find $m=f'(x_1)$ by differentiating and substituting;
3. write the equation of the line.

### The normal

The **normal** at a point on a curve is the line through that point perpendicular to the tangent. For perpendicular lines, the product of the gradients is $-1$, so if the tangent gradient is $m\neq0$, the normal gradient is $-\dfrac1m$, and the equation of the normal is
$$
y-y_1=-\frac{1}{f'(x_1)}\,(x-x_1).
$$
Be careful with the arithmetic: if $f'(x_1)=8$ then the normal gradient is $-\tfrac18$, not $\tfrac18$ and not $-8$. If $f'(x_1)=-\tfrac12$ then the normal gradient is $2$. Writing "negative reciprocal" is a good habit.

### Horizontal and vertical lines

If $f'(x_1)=0$, the tangent is horizontal, with equation $y=y_1$, and the normal is vertical, with equation $x=x_1$. The formula $-\tfrac{1}{m}$ cannot be used because it requires dividing by zero, so recognise this case and write down the vertical line. Conversely, a vertical tangent has an undefined gradient and a horizontal normal, but it does not arise for the polynomial functions of this chapter.

### Points with a given gradient, parallel and perpendicular lines

To find where a tangent has gradient $m$, solve $f'(x)=m$, then find the $y$-coordinates. A tangent is **parallel** to a given line if it has the same gradient, and **perpendicular** to it if the gradient is the negative reciprocal. A question may ask for "the points on the curve where the tangent is parallel to $y=9x+2$", which means solve $f'(x)=9$. Solving a quadratic derivative equation may give two points, and both should be reported unless the context excludes one.

### Intersections of tangents and normals with axes and curves

To find where a line meets the $x$-axis, set $y=0$, and to find where it meets the $y$-axis, set $x=0$. A tangent or normal may meet the curve again at another point. To find it, substitute the equation of the line into the equation of the curve to obtain an equation in $x$, which has the known $x_1$ as one root. Factorise out that root to find the other. These intercepts are the vertices of triangles whose area can be calculated, a common extension question.

### Tangents from an external point and tangency conditions

Sometimes the given point is not on the curve. Let the tangent touch the curve at a general point $(a,f(a))$, write its equation using $f'(a)$, and substitute the external point to get an equation for $a$. There may be zero, one or two solutions, each giving a tangent. A related type of question asks for a constant such that a given line is tangent to a given curve. A line is tangent to a curve when substituting the line into the curve produces an equation with a *repeated* root, so the discriminant is zero, or equivalently when the derivative equals the line's gradient at a point where the values agree.

### Using technology

A graphing calculator can draw the tangent at a point from the graph menu and display its equation, and a numerical derivative can check your gradient. This is helpful for checking your answer, but the method must be written out in an exam unless the question explicitly allows a calculator-only solution. Ensure that the window has equal scales, otherwise the tangent and normal will not look perpendicular.

## Worked examples

### Example 1 (tangent and normal, 7 marks)

Find the equations of the tangent and normal to $y=x^{3}-4x+1$ at the point where $x=2$.

At $x=2$, $y=8-8+1=1$, so the point is $(2,1)$. The derivative is $\dfrac{dy}{dx}=3x^{2}-4$, and at $x=2$ it is $12-4=8$. The tangent is $y-1=8(x-2)$, which simplifies to $y=8x-15$. The normal gradient is $-\tfrac18$, so the normal is $y-1=-\tfrac18(x-2)$, which gives $y=-\tfrac18x+\tfrac54$ or, with integer coefficients, $x+8y-10=0$. Check: the point $(2,1)$ satisfies $2+8-10=0$. The marks are for the point, the gradient, the tangent, the normal gradient and the normal.

### Example 2 (integer coefficients, 6 marks)

Find the equation of the normal to $y=x^{2}-3x+2$ at $x=4$, giving the answer in the form $ax+by+d=0$ with integers $a,b,d$.

At $x=4$, $y=16-12+2=6$. The gradient is $2x-3=5$ at $x=4$. The normal gradient is $-\tfrac15$, so $y-6=-\tfrac15(x-4)$. Multiply by $5$ to remove the fraction: $5y-30=-(x-4)=-x+4$, so $x+5y-34=0$. Check: $(4,6)$ gives $4+30-34=0$. The tangent is $y-6=5(x-4)$, or $y=5x-14$.

### Example 3 (parallel tangents, 6 marks)

Find the points on $y=x^{3}-3x$ at which the tangent is parallel to the line $y=9x+2$, and find the equation of the tangent at the point with positive $x$.

The tangent must have gradient $9$, so $3x^{2}-3=9$, giving $x^{2}=4$ and $x=\pm2$. When $x=2$, $y=8-6=2$, and when $x=-2$, $y=-8+6=-2$. So the points are $(2,2)$ and $(-2,-2)$. The tangent at $(2,2)$ is $y-2=9(x-2)$, which gives $y=9x-16$. Notice that the line $y=9x+2$ itself is not a tangent, since it does not pass through either point, so "parallel to" is not the same as "equal to".

### Example 4 (normal meets the curve again, 7 marks)

The normal to $y=x^{2}$ at $(1,1)$ meets the curve again at $Q$. Find the coordinates of $Q$.

The gradient of the curve is $2x=2$ at $x=1$, so the normal gradient is $-\tfrac12$. The normal is $y-1=-\tfrac12(x-1)$, so $y=-\tfrac12x+\tfrac32$. To find where it meets the curve, substitute: $x^{2}=-\tfrac12x+\tfrac32$, so $2x^{2}+x-3=0$, which factorises as $(2x+3)(x-1)=0$. The root $x=1$ is the known point, so the other is $x=-\tfrac32$, and then $y=\tfrac94$. So $Q=\left(-\tfrac32,\tfrac94\right)$. Using the fact that $x=1$ is already a root, the factorisation can be checked by the sum of roots: $1+\left(-\tfrac32\right)=-\tfrac12$, which equals $-\dfrac{b}{a}=-\dfrac12$.

### Example 5 (intercepts and area, 8 marks)

The curve $y=\dfrac4x$ has a tangent at the point where $x=2$. Find the equation of the tangent and the area of the triangle that it forms with the axes.

At $x=2$, $y=2$. We have $y=4x^{-1}$, so $\dfrac{dy}{dx}=-4x^{-2}=-\dfrac{4}{x^{2}}$, which is $-1$ at $x=2$. The tangent is $y-2=-(x-2)$, so $y=-x+4$. It meets the $x$-axis where $y=0$, at $x=4$, and the $y$-axis at $y=4$. The triangle has legs of length $4$ and $4$, so the area is $\tfrac12\times4\times4=8$. The normal at the same point has gradient $1$, so it is $y=x$, which passes through the origin. This is a special property of the rectangular hyperbola: the normal at $(2,2)$ is the line of symmetry $y=x$.

### Example 6 (tangents from an external point, 7 marks)

Find the equations of the tangents to $y=x^{2}$ that pass through $(0,-1)$.

Let the point of contact be $(a,a^{2})$. The gradient there is $2a$, so the tangent is $y-a^{2}=2a(x-a)$. This line passes through $(0,-1)$, so $-1-a^{2}=2a(0-a)=-2a^{2}$, giving $a^{2}=1$ and $a=\pm1$. For $a=1$ the tangent is $y-1=2(x-1)$, so $y=2x-1$. For $a=-1$ it is $y-1=-2(x+1)$, so $y=-2x-1$. There are two tangents, symmetric about the $y$-axis, as expected, since $(0,-1)$ lies on the axis of symmetry of the parabola and below it.

### Example 7 (tangency condition, 5 marks)

Find the value of $k$ for which the line $y=2x-1$ is a tangent to the curve $y=x^{2}+k$.

*Method 1.* The gradient of the curve is $2x$, which equals $2$ at $x=1$. At $x=1$ the line has $y=2(1)-1=1$, so the curve must also pass through $(1,1)$: $1=1+k$ gives $k=0$. *Method 2.* Setting the equations equal gives $x^{2}+k=2x-1$, that is $x^{2}-2x+k+1=0$. For a tangent there is exactly one solution, so the discriminant is zero: $4-4(k+1)=0$ and $k=0$. The two methods agree, and it is good to know both, since a question may only be easy by one of them.

### Example 8 (horizontal tangents, 4 marks)

Find the equations of the horizontal tangents to $y=x^{3}-3x$, and of the corresponding normals.

The derivative is $3x^{2}-3$, which is zero at $x=\pm1$. When $x=1$, $y=-2$, and when $x=-1$, $y=2$. The horizontal tangents are $y=-2$ and $y=2$. Since the tangents are horizontal, the normals are vertical: $x=1$ and $x=-1$. We cannot use the formula $-\tfrac{1}{m}$, because $m=0$, so one writes the vertical lines directly.

## Using your GDC

You can check a tangent by graphing the curve and the line on the same axes. The calculator can draw the tangent at a chosen point and show its equation in the form $y=mx+c$, and it can display the normal if you enter the perpendicular gradient. When you use the intersection tool to find where the normal meets the curve again, the calculator gives the new point to a decimal approximation, which agrees with the exact algebraic answer. Use the window setting with equal scales (a "square" window) to confirm perpendicularity visually, because otherwise the right angle is distorted. When a question asks for exact values, as in $\tfrac94$, give fractions, not decimals. The calculator can also find the intercepts of the tangent with the axes with the zero and the value options. In the examination, any calculator check is for your own confidence; the marks are awarded for the written steps, so write the derivative, the gradient and the equation.

## Common mistakes

- Using the $y$-value instead of the gradient, or using the original function in place of the derivative to find the gradient.
- Forgetting to find the $y$-coordinate of the point when only the $x$-coordinate is given.
- Taking the normal gradient as $\tfrac{1}{m}$ or $-m$ instead of $-\tfrac{1}{m}$.
- Making sign errors when rearranging to $ax+by+d=0$ with integer coefficients, and forgetting to multiply the whole equation.
- Using the formula for the normal when the tangent is horizontal, or not writing $x=x_1$ for the vertical line.
- Finding only one of two possible tangent points when solving a quadratic equation.
- Treating a line that is parallel to a tangent as the tangent itself.
- Calling the intersection of the tangent with the curve "a second point", when the tangent touches the curve and may cross it elsewhere.

## Exam technique and command terms

**Find the equation of the tangent** requires three visible stages: the point, the gradient and the line. The final answer should be in the requested form, and if no form is given, $y=mx+c$ is fine. **Find the equation of the normal** needs the negative reciprocal of the tangent gradient, and the answer is often requested as $ax+by+d=0$ with integers, in which case check by substituting the point. **Show that** the tangent passes through a given point means that you substitute the coordinates into your equation and show that the equation holds. **Find the coordinates of the points** means that both coordinates are needed. **Hence** refers to using the equation you just found. When a tangent or normal meets the curve again, show the substitution, the equation, the factorisation using the known root and the new point. For area questions, sketch the triangle and state the base and height. Always check that a point satisfies both the line and the curve when you can.

## Connections

This chapter combines the derivative from SL 5.1 and the rules of SL 5.3 with the equation of a straight line and perpendicular gradients from the functions and geometry units. With the chain, product and quotient rules of SL 5.6, you will find tangents to a much wider family of curves, including exponential, logarithmic and trigonometric ones. Implicit differentiation in AHL 5.14 extends tangents and normals to curves that are not functions, such as circles and ellipses. In kinematics, the tangent to a displacement-time graph has gradient equal to the velocity, and in optimisation, a horizontal tangent signals a stationary point. The tangency condition with a repeated root links to the discriminant from the algebra unit, and the idea of approximating a curve by a tangent leads to the linear approximations behind Maclaurin series in AHL 5.19.

## Check your understanding

1. Find the equations of the tangent and normal to $y=x^{2}-3x+2$ at $x=4$.
2. Find the equations of the tangent and normal to $y=x^{3}$ at $x=-1$.
3. Find the equations of the tangent and normal to $y=\dfrac2x$ at $x=1$.
4. Find the points on $y=x^{3}-12x$ at which the tangent is parallel to $y=15x$.
5. Find the equations of the tangents to $y=x^{2}$ that pass through $(0,-4)$.
6. Find the equation of the normal to $y=x^{2}$ at $(2,4)$ in the form $ax+by+d=0$, and the coordinates of the point where it meets the curve again.
7. The tangent to $y=\dfrac4x$ at $x=2$ meets the axes at $A$ and $B$. Find the area of triangle $OAB$, where $O$ is the origin.
8. Find the value of $k$ for which the line $y=2x-1$ is tangent to $y=x^{2}+k$.
9. The normal to $y=x^{2}-1$ at the point $(1,0)$ meets the $y$-axis at $P$. Find the coordinates of $P$.
10. Find the equations of the horizontal tangents to $y=x^{3}-3x$.

### Answers

1. The point is $(4,6)$, the gradient is $5$. Tangent: $y=5x-14$. Normal: $y-6=-\tfrac15(x-4)$, which gives $x+5y-34=0$.
2. The point is $(-1,-1)$ and the gradient is $3x^{2}=3$. Tangent: $y+1=3(x+1)$, so $y=3x+2$. Normal: $y+1=-\tfrac13(x+1)$, so $y=-\tfrac13x-\tfrac43$.
3. $y=2x^{-1}$, so the gradient is $-2x^{-2}=-2$ at $x=1$, and the point is $(1,2)$. Tangent: $y=-2x+4$. Normal gradient $\tfrac12$: $y=\tfrac12x+\tfrac32$.
4. $3x^{2}-12=15$ gives $x^{2}=9$, so $x=\pm3$. The points are $(3,-9)$ and $(-3,9)$.
5. Let the contact point be $(a,a^{2})$. Then $-4-a^{2}=-2a^{2}$, so $a^{2}=4$ and $a=\pm2$. The tangents are $y=4x-4$ and $y=-4x-4$.
6. The gradient is $4$, so the normal gradient is $-\tfrac14$. The normal is $y-4=-\tfrac14(x-2)$, so $x+4y-18=0$. Substituting $y=x^{2}$ gives $4x^{2}+x-18=0$, so $(x-2)(4x+9)=0$, and the other point is $\left(-\tfrac94,\tfrac{81}{16}\right)$.
7. The tangent is $y=-x+4$, which meets the axes at $A(4,0)$ and $B(0,4)$. The area is $\tfrac12\times4\times4=8$.
8. At the point of tangency $2x=2$ so $x=1$, $y=1$, so $1=1+k$ and $k=0$. (Alternatively the discriminant of $x^{2}-2x+k+1=0$ is zero when $k=0$.)
9. The gradient is $2x=2$ at $x=1$, so the normal gradient is $-\tfrac12$, and the normal is $y=-\tfrac12(x-1)$. At $x=0$, $y=\tfrac12$, so $P=\left(0,\tfrac12\right)$.
10. $3x^{2}-3=0$ gives $x=\pm1$. The horizontal tangents are $y=-2$ (at $x=1$) and $y=2$ (at $x=-1$).

## Summary

- Tangent at $(x_1,y_1)$: $y-y_1=f'(x_1)(x-x_1)$. Always find the point, the gradient and then the line.
- Normal: gradient $-\dfrac{1}{f'(x_1)}$. If the tangent is horizontal the normal is the vertical line $x=x_1$.
- To find points with a given gradient, solve $f'(x)=m$ and then find the $y$-values. Parallel tangents share a gradient and perpendicular ones have gradients with product $-1$.
- A line meets a curve again at the other root of the substitution equation, after factorising out the known root.
- For tangents from an external point, take a general contact point $(a,f(a))$, write the tangent and substitute the point.
- A line is tangent to a curve when the substituted equation has a repeated root (discriminant zero).

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.4. Related facts may appear elsewhere. Justify any method used here.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
