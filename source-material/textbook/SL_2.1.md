# Straight lines and gradients

> **SL 2.1 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- calculate the gradient of a line from two points, and interpret it as a rate of change;
- write the equation of a line in gradient-intercept form $y=mx+c$, point-gradient form $y-y_1=m(x-x_1)$ and general form $ax+by+d=0$, and convert between them;
- use the conditions $m_1=m_2$ for parallel lines and $m_1m_2=-1$ for perpendicular lines;
- find the midpoint and the distance between two points, and the equation of a perpendicular bisector;
- find the point of intersection of two lines by solving simultaneous equations;
- relate the gradient to the angle of inclination via $m=\tan\theta$, and find the angle between two lines;
- build and interpret linear models in context, including the meaning of gradient and intercept.

## Why this topic matters

Straight lines are the simplest functions and the first model for almost everything: constant speed, a fixed fee plus a unit price, a calibration curve, the local behaviour of any smooth curve. Calculus is built on the idea that a curve looks like a straight line when you zoom in, and the derivative *is* the gradient of that line. Coordinate geometry also connects algebra to shape: perpendicular bisectors give circumcentres, intersections of lines give vertices of polygons, and linear regression in Unit 4 fits the best line through data. In the IB examination, this topic is rarely tested alone at SL; it appears as a first part of larger questions on tangents and normals, optimisation, and vectors. Fluent, error-free work with gradients and equations of lines therefore earns marks across the entire paper, and a slip in the first part can propagate to later parts. Mastering this chapter makes later calculus questions about tangents and normals almost routine, so treat it as foundation rather than revision.

## Core ideas

### Gradient

The **gradient** (slope) of the line through $(x_1,y_1)$ and $(x_2,y_2)$ is
$$
m=\frac{y_2-y_1}{x_2-x_1}=\frac{\text{change in }y}{\text{change in }x},\qquad x_1\ne x_2.
$$
The order of subtraction must be the same in numerator and denominator. A positive gradient means the line rises from left to right, a negative gradient means it falls, $m=0$ gives a horizontal line $y=c$, and a vertical line $x=a$ has *undefined* gradient (it is not a function of $x$). In context, the gradient is a **rate of change**: if $y$ is cost in euro and $x$ is distance in kilometres, then $m$ is the cost per kilometre, and the units of the gradient are the units of $y$ divided by the units of $x$.

### Equations of a line

- **Gradient-intercept form:** $y=mx+c$, where $c$ is the $y$-intercept, the value of $y$ at $x=0$.
- **Point-gradient form:** $y-y_1=m(x-x_1)$, the most useful when you know a point and the gradient. It is not in the formula booklet in this exact form, but it follows directly from the definition of gradient: for any point $(x,y)$ on the line, $\dfrac{y-y_1}{x-x_1}=m$.
- **General form:** $ax+by+d=0$, with integer coefficients when requested. The gradient is $-\dfrac ab$ (for $b\ne0$) and the $y$-intercept is $-\dfrac db$.

When a question asks for an equation "in the form $ax+by+d=0$ where $a,b,d\in\mathbb{Z}$", clear any fractions by multiplying by a common denominator, and keep the $x$ term positive by convention.

### Parallel and perpendicular lines

Two lines with gradients $m_1$ and $m_2$ are
$$
\text{parallel}\iff m_1=m_2,\qquad \text{perpendicular}\iff m_1m_2=-1\iff m_2=-\frac1{m_1}.
$$
The perpendicular gradient is the *negative reciprocal*. Horizontal and vertical lines are perpendicular to each other, a case where the product rule does not apply because the vertical gradient is undefined. A rotation by $90^{\circ}$ maps the direction $(1,m)$ to $(-m,1)$, whose gradient is $-\dfrac1m$, which explains the rule.

Parallel lines have no point in common unless they coincide, and a line perpendicular to a given line is the shortest path from a point to that line, a fact used when you drop a perpendicular.

### Midpoint and distance

For $A(x_1,y_1)$ and $B(x_2,y_2)$:
$$
\text{midpoint}=\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right),\qquad AB=\sqrt{(x_2-x_1)^{2}+(y_2-y_1)^{2}}.
$$
The distance formula is Pythagoras' theorem applied to the right-angled triangle with legs $|x_2-x_1|$ and $|y_2-y_1|$.

### Perpendicular bisector

The **perpendicular bisector** of a segment $AB$ passes through the midpoint of $AB$ and is perpendicular to $AB$. Its equation is found in three steps: (1) compute the midpoint; (2) compute the gradient of $AB$ and take the negative reciprocal; (3) use point-gradient form. Every point on it is equidistant from $A$ and $B$.

### Intersection of two lines

To find where two lines meet, solve their equations simultaneously, by substitution or elimination. The solution $(x,y)$ is the point of intersection. If the gradients are equal and the intercepts differ, there is no solution (parallel lines). If both gradients and intercepts match, the lines coincide and every point is a solution. This is the two-dimensional case of the systems studied in AHL 1.16.

### Angle of inclination and angle between lines

The **angle of inclination** $\theta$ of a line with gradient $m$ is the angle it makes with the positive $x$-axis, measured anticlockwise, where $0^{\circ}\le\theta<180^{\circ}$, and $m=\tan\theta$. A positive gradient gives an acute angle and a negative gradient an obtuse angle. For example $m=-\dfrac12$ has $\tan^{-1}\left(-\dfrac12\right)=-26.57^{\circ}$, so $\theta=180^{\circ}-26.57^{\circ}=153.4^{\circ}$. The angle between two lines with inclinations $\theta_1$ and $\theta_2$ is $|\theta_1-\theta_2|$ (or its supplement if you want the acute angle), and for gradients $m_1,m_2$ one can use
$$
\tan\alpha=\left|\frac{m_1-m_2}{1+m_1m_2}\right|.
$$
This is a consequence of the compound-angle formula for tangent (AHL 3.10) but the angle of inclination method works with only SL tools.

### Linear models

A **linear model** has the form $y=mx+c$ where $m$ is the constant rate of change and $c$ is the starting value. To interpret: the gradient answers "for each extra unit of $x$, $y$ changes by $m$ units", and the intercept answers "when $x=0$, the value is $c$", provided $x=0$ makes sense in context. Always check the **domain** of a model: a taxi-fare model $C=3.50+1.80d$ is only meaningful for $d\ge0$. Models are approximations, so extrapolating far outside the data range is risky.

## Worked examples

### Example 1 (gradient and equation, 4 marks)

Find the equation of the line through $(2,-1)$ and $(6,7)$.

*Solution.* $m=\dfrac{7-(-1)}{6-2}=\dfrac84=2$. Using $(2,-1)$: $y+1=2(x-2)$, so $y=2x-5$.

Check with the other point: $2(6)-5=7$ ✓.

### Example 2 (converting forms, 4 marks)

(a) Write $3x-4y+8=0$ in the form $y=mx+c$ and state the gradient and $y$-intercept. (b) Write $y-3=-\dfrac23(x-1)$ in the form $ax+by+d=0$ with integer coefficients.

*Solution.* (a) $4y=3x+8$, so $y=\dfrac34x+2$, with gradient $\dfrac34$ and $y$-intercept $2$. (b) Multiply by $3$: $3y-9=-2(x-1)=-2x+2$, so $2x+3y-11=0$.

### Example 3 (parallel and perpendicular, 6 marks)

(a) Find the equation of the line through $(3,2)$ parallel to $y=-2x+1$. (b) Find the equation of the line through $(3,2)$ perpendicular to $2x-5y=10$, in the form $ax+by+d=0$.

*Solution.* (a) The gradient is $-2$, so $y-2=-2(x-3)$, i.e. $y=-2x+8$. (b) $2x-5y=10$ gives $y=\dfrac25x-2$, with gradient $\dfrac25$. The perpendicular gradient is $-\dfrac52$. So $y-2=-\dfrac52(x-3)$. Multiplying by $2$: $2y-4=-5x+15$, giving $5x+2y-19=0$.

Check: the point $(3,2)$ gives $15+4-19=0$ ✓, and $\dfrac25\times\left(-\dfrac52\right)=-1$ ✓.

### Example 4 (perpendicular bisector, 6 marks)

Find the equation of the perpendicular bisector of $A(-1,2)$ and $B(5,6)$.

*Solution.* The midpoint is $\left(\dfrac{-1+5}2,\dfrac{2+6}2\right)=(2,4)$. The gradient of $AB$ is $\dfrac{6-2}{5-(-1)}=\dfrac46=\dfrac23$, so the perpendicular gradient is $-\dfrac32$. Hence $y-4=-\dfrac32(x-2)$, which gives $3x+2y=14$.

Check equidistance: the point $(0,7)$ lies on the line and $\sqrt{1+25}=\sqrt{26}$ equals $\sqrt{25+1}=\sqrt{26}$ ✓.

### Example 5 (intersection, 4 marks)

Find the point of intersection of $y=2x-1$ and $3x+2y=12$.

*Solution.* Substitute: $3x+2(2x-1)=12$, so $7x=14$, giving $x=2$ and $y=3$. The point is $(2,3)$.

Check: $3(2)+2(3)=12$ ✓.

### Example 6 (a normal line, 4 marks)

The line $L_1$ passes through $(2,1)$ and $(4,5)$. Find the equation of the line $L_2$ through $(1,5)$ perpendicular to $L_1$.

*Solution.* The gradient of $L_1$ is $\dfrac{5-1}{4-2}=2$, so the gradient of $L_2$ is $-\dfrac12$. So $y-5=-\dfrac12(x-1)$, giving $x+2y=11$.

### Example 7 (a parameter, 7 marks)

The lines $L_1:kx+3y=7$ and $L_2:2x+(k+1)y=4$ are given. Find the values of $k$ for which (a) the lines are parallel; (b) the lines are perpendicular.

*Solution.* The gradients are $m_1=-\dfrac k3$ and $m_2=-\dfrac2{k+1}$ (for $k\ne-1$).
(a) Parallel: $\dfrac k3=\dfrac2{k+1}$, so $k(k+1)=6$ and $k^{2}+k-6=0$, giving $(k+3)(k-2)=0$, so $k=2$ or $k=-3$. Check $k=2$: both gradients are $-\dfrac23$ ✓; $k=-3$: both are $1$ ✓.
(b) Perpendicular: $\left(-\dfrac k3\right)\left(-\dfrac2{k+1}\right)=-1$, so $2k=-3(k+1)$ and $k=-\dfrac35$. Check: $m_1=\dfrac15$ and $m_2=-\dfrac{2}{0.4}=-5$, with product $-1$ ✓.

For $k=-1$, $L_2$ is the vertical line $x=2$, and $L_1$ has gradient $\dfrac13$, so they are neither parallel nor perpendicular.

### Example 8 (angles, 6 marks)

(a) Find the angle of inclination of $y=\sqrt3\,x-2$ and of the line with gradient $-\dfrac12$. (b) Find the acute angle between $y=2x$ and $y=\dfrac13x$.

*Solution.* (a) $\tan\theta=\sqrt3$ gives $\theta=60^{\circ}$. For $m=-\dfrac12$: $\theta=180^{\circ}-\tan^{-1}\dfrac12=180^{\circ}-26.57^{\circ}=153.4^{\circ}$. (b) The inclinations are $\tan^{-1}2=63.43^{\circ}$ and $\tan^{-1}\dfrac13=18.43^{\circ}$, so the angle between them is $63.43^{\circ}-18.43^{\circ}=45.0^{\circ}$. Check with the formula: $\dfrac{2-\frac13}{1+\frac23}=\dfrac{5/3}{5/3}=1$, so $\alpha=45^{\circ}$ ✓.

### Example 9 (a linear model, 6 marks)

A taxi charges a fixed fee of EUR 3.50 plus EUR 1.80 per kilometre. (a) Write a model for the fare $C$ for $d$ km. (b) Find the fare for $12$ km. (c) A passenger paid EUR 30.50. How far did they travel? (d) Interpret the gradient and intercept.

*Solution.* (a) $C=3.50+1.80d$. (b) $C=3.50+21.60=25.10$, i.e. EUR 25.10. (c) $30.50=3.50+1.80d$, so $d=\dfrac{27}{1.8}=15$ km. (d) The gradient $1.80$ is the cost per kilometre in euro per km, and the intercept $3.50$ is the fixed starting fee, charged even for a distance of zero.

### Example 10 (a right-angled triangle, 7 marks)

The points $A(1,1)$, $B(4,5)$ and $C(8,2)$ are given. Show that $\triangle ABC$ is right-angled and isosceles, and find its area.

*Solution.* The gradients are $m_{AB}=\dfrac43$ and $m_{BC}=\dfrac{2-5}{8-4}=-\dfrac34$. Their product is $-1$, so $AB\perp BC$ and the right angle is at $B$. The lengths are $AB=\sqrt{9+16}=5$ and $BC=\sqrt{16+9}=5$, so the two legs are equal and the triangle is isosceles. The area is $\dfrac12\times5\times5=12.5$ square units.

### Example 11 (collinearity, 3 marks)

Show that $A(1,2)$, $B(3,8)$ and $C(6,17)$ are collinear.

*Solution.* $m_{AB}=\dfrac{8-2}{3-1}=3$ and $m_{BC}=\dfrac{17-8}{6-3}=3$. Equal gradients with the shared point $B$ mean that all three points lie on one line.

## Using your GDC

A GDC confirms and explores lines quickly. Enter $y=mx+c$ in the graph screen to check that your line passes through the given points, and use the *intersect* tool to find where two lines meet; for two lines this agrees with your algebra and is a safe check. A table of values lets you read the gradient as the constant difference in $y$ for steps of $1$ in $x$. For linear modelling you can use the regression function (linear regression) on a table of data, which belongs to Unit 4 but is a natural extension of finding a line through two points. Set the viewing window so that both lines and their intersection are visible, and use *zoom to fit* if you are unsure. Use the *distance* between points or the *angle* tools only as checks, since the questions want the working. Menu names vary by model. The GDC will not choose between forms of an equation for you, so you still have to convert to the requested form by hand.

## Common mistakes

1. **Inconsistent subtraction order** in the gradient, e.g. $\dfrac{y_2-y_1}{x_1-x_2}$.
2. **Using the reciprocal without the sign** (or the sign without the reciprocal) for perpendicular gradients.
3. **Sign errors in point-gradient form** when the point has negative coordinates: $y-(-1)=y+1$.
4. **Leaving fractions in the general form** when integer coefficients are requested.
5. **Reading the gradient from $ax+by+d=0$ as $-a$ or $\dfrac ab$** instead of $-\dfrac ab$.
6. **Confusing the midpoint with the perpendicular bisector**, giving only the midpoint.
7. **Treating a vertical line like the others**: $x=a$ has no gradient and no $y=mx+c$ form.
8. **Misinterpreting units** in a model, for instance stating the gradient without units or interpreting the intercept when $x=0$ is not meaningful.

## Exam technique and command terms

**Find the equation of the line** requires an equation, not just a gradient; give it in the form requested, or $y=mx+c$ if not stated. **Show that** lines are perpendicular means displaying the gradients and their product. **Determine** and **find** call for the working with the answer. **Hence** may use the equation found in an earlier part, so keep exact values (fractions, not rounded decimals). When a question gives a diagram, use it: note which points and gradients are given, and sketch your own if no diagram is provided. For each of the many two-mark questions here, expect a mark for the gradient and a mark for the equation, so a missing step costs a mark.

Check at least one given point in your final equation. For model questions, always include units and interpret the result in the context. Keep numbers exact until the last line, and give decimals to three significant figures only when asked for a numerical answer. If you are asked for the equation "of the normal", this just means the perpendicular line through the given point, a link to the calculus chapters later in the course.

## Connections

SL 1.1 to 1.3 prepared the algebra, and SL 1.2 shows that the terms of an arithmetic sequence lie on a straight line, with the common difference as the gradient. SL 2.2 and 2.3 introduce function notation and the graph of $f(x)=mx+c$, and SL 2.5 uses the inverse of a linear function, a reflection in $y=x$, which swaps the gradient $m$ for $\dfrac1m$. In Unit 3, vectors give another form of a line, $\mathbf r=\mathbf a+t\mathbf b$, whose direction vector $(1,m)$ encodes the gradient (AHL 3.14), and perpendicularity becomes a zero scalar product (AHL 3.13). In Unit 4, the regression line $y=ax+b$ is the best-fit straight line, and its gradient measures the relationship between variables. In Unit 5, the derivative at a point *is* the gradient of the tangent, and the normal has gradient $-\dfrac1{f'(a)}$, using exactly the rules of this chapter. Linear approximations of functions near a point also rest on the idea that a curve resembles a line locally.

## Check your understanding

1. Find the equation of the line through $(-2,5)$ and $(4,-7)$.
2. Find the gradient and $y$-intercept of $5x-2y+6=0$.
3. Find the equation of the line through $(1,1)$ parallel to $4x+y=7$.
4. Find the equation of the line through $(0,4)$ perpendicular to $y=\dfrac13x+2$.
5. Find the equation of the perpendicular bisector of $(0,1)$ and $(6,5)$ in the form $ax+by=d$.
6. Find the point of intersection of $2x+3y=12$ and $x-y=1$.
7. Find the values of $k$ for which $y=kx+1$ is (a) parallel and (b) perpendicular to $2x+3y=6$.
8. Find the angle of inclination of $y=x-5$ and of $y=-\sqrt3\,x$.
9. Are $(-1,-5)$, $(2,1)$ and $(5,7)$ collinear? Justify.
10. A taxi charges EUR 4 plus EUR 2.20 per km. Find the fare for $15$ km and the distance travelled for a fare of EUR 59.

### Answers

1. $m=\dfrac{-7-5}{4-(-2)}=-2$, so $y-5=-2(x+2)$, i.e. $y=-2x+1$.
2. $y=\dfrac52x+3$: gradient $\dfrac52$ and $y$-intercept $3$.
3. The gradient is $-4$: $y-1=-4(x-1)$, so $y=-4x+5$.
4. The perpendicular gradient is $-3$, so $y=-3x+4$.
5. Midpoint $(3,3)$, $m_{AB}=\dfrac46=\dfrac23$, perpendicular gradient $-\dfrac32$: $y-3=-\dfrac32(x-3)$, so $3x+2y=15$.
6. From $x=y+1$: $2y+2+3y=12$ gives $y=2$ and $x=3$. The point is $(3,2)$.
7. The gradient of $2x+3y=6$ is $-\dfrac23$. (a) $k=-\dfrac23$. (b) $k\left(-\dfrac23\right)=-1$, so $k=\dfrac32$.
8. $y=x-5$: $\tan\theta=1$, so $\theta=45^{\circ}$. $y=-\sqrt3x$: $\tan\theta=-\sqrt3$, so $\theta=180^{\circ}-60^{\circ}=120^{\circ}$.
9. $m_1=\dfrac{1-(-5)}{2-(-1)}=2$ and $m_2=\dfrac{7-1}{5-2}=2$. The gradients are equal and the segments share the point $(2,1)$, so the points are collinear.
10. $4+2.2\times15=37$, so EUR 37. For EUR 59: $2.2d=55$, so $d=25$ km.

## Summary

- Gradient $m=\dfrac{y_2-y_1}{x_2-x_1}$, which is a rate of change with units.
- Forms: $y=mx+c$, $y-y_1=m(x-x_1)$ and $ax+by+d=0$ (gradient $-\dfrac ab$).
- Parallel: $m_1=m_2$. Perpendicular: $m_1m_2=-1$.
- Midpoint and distance formulae; the perpendicular bisector uses the midpoint and the negative reciprocal gradient.
- Solve two linear equations simultaneously for the intersection point.
- $m=\tan\theta$ links gradient and inclination; use a sketch to select the correct angle.
- In linear models, the gradient is the rate and the intercept is the starting value; mind the domain and units.
