# The unit circle

> **SL 3.5 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define $\cos\theta$ and $\sin\theta$ for any angle as the coordinates of a point on the unit circle, and $\tan\theta$ as $\dfrac{\sin\theta}{\cos\theta}$, the gradient of the radius;
- state the sign of each ratio in each quadrant;
- use reference angles and the symmetry of the circle to find the ratios of any angle from an acute one;
- recall and use the exact values for multiples of $\dfrac\pi6$ and $\dfrac\pi4$ (and $30^{\circ}$, $45^{\circ}$, $60^{\circ}$ in degrees);
- use the relations $\sin(\pi-\theta)$, $\cos(\pi-\theta)$, $\sin(\pi+\theta)$, $\sin(-\theta)$, $\sin\left(\dfrac\pi2-\theta\right)$ and their cosine and tangent analogues;
- find the other ratios exactly from one ratio and the quadrant, using the Pythagorean identity;
- find all solutions in a given interval of the basic equations $\sin\theta=k$, $\cos\theta=k$ and $\tan\theta=k$ for exact values;
- find the coordinates of a point on a circle of any radius at a given angle.

## Why this topic matters

In SL 3.2, sine, cosine and tangent were defined for acute angles in right-angled triangles. But a rotating wheel, an alternating current, a wave on a string and the Earth going round the Sun all involve angles of any size, including negative angles and angles larger than a full turn. The **unit circle** extends the definition of the trigonometric functions to every real number. It is also the single most useful picture in the whole of trigonometry: from it, you can read off the signs of the functions in each quadrant, derive the symmetry relations, remember exact values without a table and understand why trigonometric graphs are periodic waves (SL 3.7) and why trigonometric equations have several solutions (SL 3.8). In the IB, Paper 1 regularly asks for exact values of angles in other quadrants, for the other ratios given one, and for the simplification of expressions such as $\sin(\pi-\theta)$. A student who can sketch the unit circle in a few seconds and fill in the key angles will solve these questions reliably and quickly. This chapter shows how to build that picture, and how to use it.

## Core ideas

### Definition

The **unit circle** is the circle of radius $1$ centred at the origin, $x^{2}+y^{2}=1$. Measure an angle $\theta$ from the positive $x$-axis, **anticlockwise** for positive angles and clockwise for negative ones. The point $P$ where the terminal arm meets the circle has coordinates
$$
P=(\cos\theta,\ \sin\theta).
$$
This *defines* $\cos\theta$ as the $x$-coordinate and $\sin\theta$ as the $y$-coordinate. For acute $\theta$ it agrees with SL 3.2: the right triangle with hypotenuse $1$ (the radius) has adjacent side $x=\cos\theta$ and opposite side $y=\sin\theta$. The tangent is
$$
\tan\theta=\frac{\sin\theta}{\cos\theta}=\text{gradient of the radius }OP,
$$
which is undefined when $\cos\theta=0$ (at $\theta=\dfrac\pi2,\dfrac{3\pi}2,\ldots$). Since $P$ lies on the circle, $\cos^{2}\theta+\sin^{2}\theta=1$ for every $\theta$.

On a circle of radius $r$, the point at angle $\theta$ is $(r\cos\theta,\ r\sin\theta)$.

### Range and periodicity

Because the coordinates of a point on the unit circle lie between $-1$ and $1$,
$$
-1\le\sin\theta\le1,\qquad-1\le\cos\theta\le1,
$$
while $\tan\theta$ can take any real value. Adding a full turn returns to the same point, so
$$
\sin(\theta+2\pi)=\sin\theta,\qquad\cos(\theta+2\pi)=\cos\theta,
$$
and the functions are **periodic** with period $2\pi$ ($360^{\circ}$), while $\tan$ has period $\pi$ ($180^{\circ}$). So any angle can be reduced to $[0,2\pi)$ by subtracting multiples of $2\pi$. For example $\dfrac{13\pi}6=2\pi+\dfrac\pi6$, so $\sin\dfrac{13\pi}6=\sin\dfrac\pi6=\dfrac12$.

### Quadrants and signs

The four quadrants are numbered anticlockwise starting from the positive $x$-axis.

- **Quadrant 1** ($0<\theta<\dfrac\pi2$): $x>0$ and $y>0$, so $\sin,\cos,\tan$ are all positive.
- **Quadrant 2** ($\dfrac\pi2<\theta<\pi$): $x<0$, $y>0$, so only $\sin$ is positive.
- **Quadrant 3** ($\pi<\theta<\dfrac{3\pi}2$): $x<0$, $y<0$, so only $\tan$ is positive (the quotient of two negatives).
- **Quadrant 4** ($\dfrac{3\pi}2<\theta<2\pi$): $x>0$, $y<0$, so only $\cos$ is positive.

The mnemonic "All Students Take Calculus" (ASTC) lists which function is positive in quadrants 1 to 4. The signs come directly from the coordinates, which is more reliable than memorising a rhyme.

### Reference angles

The **reference angle** is the acute angle between the terminal arm and the $x$-axis. The ratio of any angle equals plus or minus the ratio of its reference angle, with the sign given by the quadrant. For $\theta$ in quadrant 2 the reference angle is $\pi-\theta$; in quadrant 3 it is $\theta-\pi$; in quadrant 4 it is $2\pi-\theta$. Example: $\dfrac{5\pi}6$ is in quadrant 2 with reference angle $\dfrac\pi6$, so $\sin\dfrac{5\pi}6=+\sin\dfrac\pi6=\dfrac12$ and $\cos\dfrac{5\pi}6=-\cos\dfrac\pi6=-\dfrac{\sqrt3}2$.

### Exact values

Combining the reference-angle idea with the special triangles of SL 3.2 gives the exact values at all multiples of $\dfrac\pi6$ and $\dfrac\pi4$. The first-quadrant values are:

- $\theta=0$: $\sin=0$, $\cos=1$, $\tan=0$.
- $\theta=\dfrac\pi6$ ($30^{\circ}$): $\sin=\dfrac12$, $\cos=\dfrac{\sqrt3}2$, $\tan=\dfrac1{\sqrt3}$.
- $\theta=\dfrac\pi4$ ($45^{\circ}$): $\sin=\cos=\dfrac{\sqrt2}2$, $\tan=1$.
- $\theta=\dfrac\pi3$ ($60^{\circ}$): $\sin=\dfrac{\sqrt3}2$, $\cos=\dfrac12$, $\tan=\sqrt3$.
- $\theta=\dfrac\pi2$ ($90^{\circ}$): $\sin=1$, $\cos=0$, $\tan$ undefined.

The axis angles are $\pi$: $(\cos,\sin)=(-1,0)$ and $\dfrac{3\pi}2$: $(0,-1)$. Everything else follows by reflecting into the other quadrants. A reliable method is to sketch the circle, plot the angle, drop the perpendicular to the $x$-axis to find the reference triangle, and read off the signs of $x$ and $y$.

### Symmetry relations

The symmetries of the circle give identities that hold for all $\theta$. In each case, the new point is a reflection or rotation of the original point $(\cos\theta,\sin\theta)$.

- **Negative angle** (reflection in the $x$-axis): $\sin(-\theta)=-\sin\theta$, $\cos(-\theta)=\cos\theta$, $\tan(-\theta)=-\tan\theta$.
- **Supplementary angle** (reflection in the $y$-axis): $\sin(\pi-\theta)=\sin\theta$, $\cos(\pi-\theta)=-\cos\theta$, $\tan(\pi-\theta)=-\tan\theta$.
- **Rotation by $\pi$**: $\sin(\pi+\theta)=-\sin\theta$, $\cos(\pi+\theta)=-\cos\theta$, $\tan(\pi+\theta)=\tan\theta$.
- **Complementary angle** (reflection in $y=x$): $\sin\left(\dfrac\pi2-\theta\right)=\cos\theta$, $\cos\left(\dfrac\pi2-\theta\right)=\sin\theta$.
- **Rotation by $\dfrac\pi2$**: $\sin\left(\theta+\dfrac\pi2\right)=\cos\theta$ and $\cos\left(\theta+\dfrac\pi2\right)=-\sin\theta$ (the rotation sends $(x,y)\to(-y,x)$).

These show that cosine is an even function and sine and tangent are odd (AHL 2.14). They are also the reason why graphs have symmetry (SL 3.7). To use them, treat $\theta$ as if it were a small acute angle, locate the quadrant of the new angle and apply the sign rule.

### Finding the other ratios from one

Given one ratio and the quadrant, find the others as follows: draw a right-angled triangle for the *reference* angle, find the missing side by Pythagoras, and attach signs by the quadrant. If $\sin\theta=\dfrac35$ and $\theta$ is obtuse (quadrant 2): the reference triangle has opposite $3$, hypotenuse $5$, adjacent $4$. In quadrant 2, $\cos$ is negative, so $\cos\theta=-\dfrac45$ and $\tan\theta=-\dfrac34$. Equivalently, use $\cos\theta=\pm\sqrt{1-\sin^{2}\theta}$ with the sign from the quadrant. Without the quadrant, there are two possible answers.

### Basic trigonometric equations

To solve $\sin\theta=k$ on $0\le\theta\le2\pi$ with $|k|\le1$: find the reference angle $\alpha=\sin^{-1}|k|$ (or use an exact value), then use the sign of $k$ to decide the quadrants. For $k>0$, the solutions are $\alpha$ and $\pi-\alpha$; for $k<0$, they are $\pi+\alpha$ and $2\pi-\alpha$. For $\cos\theta=k$: $k>0$ gives $\alpha$ and $2\pi-\alpha$; $k<0$ gives $\pi-\alpha$ and $\pi+\alpha$. For $\tan\theta=k$: $k>0$ gives $\alpha$ and $\pi+\alpha$; $k<0$ gives $\pi-\alpha$ and $2\pi-\alpha$. Here $\alpha$ is the positive acute reference angle. This is the unit circle method that will be developed fully in SL 3.8.

### The equation of a line through the origin

The line through the origin at angle $\theta$ to the positive $x$-axis has gradient $\tan\theta$ (SL 2.1). The unit circle makes this clear: the radius to $(\cos\theta,\sin\theta)$ has gradient $\dfrac{\sin\theta}{\cos\theta}$. For $\theta=\dfrac{2\pi}3$, the gradient is $\tan\dfrac{2\pi}3=-\sqrt3$.

## Worked examples

### Example 1 (exact values in quadrant 2, 4 marks)

Find the exact values of $\sin\dfrac{5\pi}6$, $\cos\dfrac{5\pi}6$ and $\tan\dfrac{5\pi}6$.

*Solution.* $\dfrac{5\pi}6$ is in quadrant 2 with reference angle $\dfrac\pi6$. $\sin$ is positive: $\dfrac12$. $\cos$ is negative: $-\dfrac{\sqrt3}2$. $\tan=\dfrac{1/2}{-\sqrt3/2}=-\dfrac1{\sqrt3}$ (or $-\dfrac{\sqrt3}3$).

### Example 2 (quadrant 4, 4 marks)

Find the exact values of $\sin\dfrac{7\pi}4$, $\cos\dfrac{7\pi}4$ and $\tan\dfrac{7\pi}4$.

*Solution.* $\dfrac{7\pi}4=2\pi-\dfrac\pi4$ is in quadrant 4 with reference angle $\dfrac\pi4$. $\sin=-\dfrac{\sqrt2}2$, $\cos=+\dfrac{\sqrt2}2$ and $\tan=-1$.

### Example 3 (quadrant 3, 4 marks)

Find the exact values of $\sin\dfrac{4\pi}3$, $\cos\dfrac{4\pi}3$ and $\tan\dfrac{4\pi}3$.

*Solution.* $\dfrac{4\pi}3=\pi+\dfrac\pi3$ is in quadrant 3 with reference angle $\dfrac\pi3$. $\sin=-\dfrac{\sqrt3}2$, $\cos=-\dfrac12$ and $\tan=\sqrt3$ (positive, as the quotient of two negatives).

### Example 4 (negative and large angles, 5 marks)

Find (a) $\sin\left(-\dfrac\pi3\right)$; (b) $\cos\left(-\dfrac\pi3\right)$; (c) $\sin\dfrac{13\pi}6$.

*Solution.* (a) $\sin(-\theta)=-\sin\theta$, so $\sin\left(-\dfrac\pi3\right)=-\dfrac{\sqrt3}2$. (b) $\cos(-\theta)=\cos\theta$, so $\cos\left(-\dfrac\pi3\right)=\dfrac12$. (c) $\dfrac{13\pi}6=2\pi+\dfrac\pi6$, so $\sin\dfrac{13\pi}6=\sin\dfrac\pi6=\dfrac12$.

### Example 5 (other ratios from one, quadrant 2, 4 marks)

Given that $\sin\theta=\dfrac35$ and $\dfrac\pi2<\theta<\pi$, find the exact values of $\cos\theta$ and $\tan\theta$.

*Solution.* $\cos^{2}\theta=1-\dfrac9{25}=\dfrac{16}{25}$, so $\cos\theta=\pm\dfrac45$. In quadrant 2, $\cos$ is negative, so $\cos\theta=-\dfrac45$. Then $\tan\theta=\dfrac{3/5}{-4/5}=-\dfrac34$.

### Example 6 (quadrant 3, 4 marks)

Given that $\cos\theta=-\dfrac5{13}$ and $\pi<\theta<\dfrac{3\pi}2$, find $\sin\theta$ and $\tan\theta$.

*Solution.* $\sin^{2}\theta=1-\dfrac{25}{169}=\dfrac{144}{169}$, so $\sin\theta=\pm\dfrac{12}{13}$. In quadrant 3, $\sin$ is negative: $\sin\theta=-\dfrac{12}{13}$. Then $\tan\theta=\dfrac{-12/13}{-5/13}=\dfrac{12}5$.

### Example 7 (from the tangent, 5 marks)

Given $\tan\theta=-2$ and $\dfrac{3\pi}2<\theta<2\pi$, find $\sin\theta$ and $\cos\theta$ exactly.

*Solution.* The reference triangle has opposite $2$, adjacent $1$ and hypotenuse $\sqrt5$. In quadrant 4, $\cos$ is positive and $\sin$ is negative: $\cos\theta=\dfrac1{\sqrt5}=\dfrac{\sqrt5}5$ and $\sin\theta=-\dfrac2{\sqrt5}=-\dfrac{2\sqrt5}5$. Check: $\tan\theta=\dfrac{-2}{1}=-2$ ✓ and $\sin^{2}+\cos^{2}=\dfrac45+\dfrac15=1$ ✓.

### Example 8 (basic equations on $[0,2\pi]$, 8 marks)

Solve on $0\le\theta\le2\pi$: (a) $\sin\theta=\dfrac12$; (b) $\cos\theta=-\dfrac{\sqrt2}2$; (c) $\tan\theta=1$; (d) $\sin\theta=-\dfrac{\sqrt3}2$.

*Solution.* (a) The reference angle is $\dfrac\pi6$; $\sin$ positive gives quadrants 1 and 2: $\theta=\dfrac\pi6,\dfrac{5\pi}6$. (b) Reference angle $\dfrac\pi4$; $\cos$ negative gives quadrants 2 and 3: $\theta=\dfrac{3\pi}4,\dfrac{5\pi}4$. (c) Reference angle $\dfrac\pi4$; $\tan$ positive gives quadrants 1 and 3: $\theta=\dfrac\pi4,\dfrac{5\pi}4$. (d) Reference angle $\dfrac\pi3$; $\sin$ negative gives quadrants 3 and 4: $\theta=\dfrac{4\pi}3,\dfrac{5\pi}3$.

### Example 9 (a point on a circle, 3 marks)

Find the coordinates of the point on the circle $x^{2}+y^{2}=100$ at angle $\dfrac{5\pi}6$ from the positive $x$-axis.

*Solution.* $(10\cos\dfrac{5\pi}6,\ 10\sin\dfrac{5\pi}6)=\left(-5\sqrt3,\ 5\right)\approx(-8.66,\,5)$.

### Example 10 (expressing in terms of a given value, 5 marks)

Given $\sin x=p$ with $x$ acute, write in terms of $p$: (a) $\sin(\pi-x)$; (b) $\sin(\pi+x)$; (c) $\cos\left(\dfrac\pi2-x\right)$; (d) $\sin(x+2\pi)$; (e) $\cos x$.

*Solution.* (a) $\sin(\pi-x)=\sin x=p$. (b) $\sin(\pi+x)=-\sin x=-p$. (c) $\cos\left(\dfrac\pi2-x\right)=\sin x=p$. (d) $p$ by periodicity. (e) $\cos x=\sqrt{1-p^{2}}$, positive because $x$ is acute.

### Example 11 (simplifying, 4 marks)

Simplify $\sin(\pi-\theta)+\cos\left(\dfrac\pi2-\theta\right)-\sin(-\theta)$.

*Solution.* $\sin(\pi-\theta)=\sin\theta$; $\cos\left(\dfrac\pi2-\theta\right)=\sin\theta$; $-\sin(-\theta)=+\sin\theta$. The sum is $3\sin\theta$.

### Example 12 (a rotation proof, 4 marks)

Use a rotation of the unit circle by $\dfrac\pi2$ to show that $\cos\left(\theta+\dfrac\pi2\right)=-\sin\theta$ and $\sin\left(\theta+\dfrac\pi2\right)=\cos\theta$.

*Solution.* The point at angle $\theta$ is $(\cos\theta,\sin\theta)$. A rotation by $\dfrac\pi2$ anticlockwise maps $(x,y)$ to $(-y,x)$, so the point at angle $\theta+\dfrac\pi2$ is $(-\sin\theta,\cos\theta)$. Reading the coordinates: $\cos\left(\theta+\dfrac\pi2\right)=-\sin\theta$ and $\sin\left(\theta+\dfrac\pi2\right)=\cos\theta$.

### Example 13 (the gradient of a line, 3 marks)

Find the gradient of the line through the origin that makes an angle of $\dfrac{2\pi}3$ with the positive $x$-axis.

*Solution.* $m=\tan\dfrac{2\pi}3=\dfrac{\sin(2\pi/3)}{\cos(2\pi/3)}=\dfrac{\sqrt3/2}{-1/2}=-\sqrt3$. The line slopes downwards, consistent with an obtuse angle.

## Using your GDC

The GDC gives decimal values of $\sin$, $\cos$ and $\tan$ for any angle, but you must check the mode (radians or degrees). It will return the inverse trigonometric values only in the principal ranges: $\sin^{-1}$ and $\tan^{-1}$ give angles between $-\dfrac\pi2$ and $\dfrac\pi2$, and $\cos^{-1}$ gives angles in $[0,\pi]$. To find *all* solutions in a given interval, use the calculator's value as the reference and complete the list using the unit circle. A graph of $y=\sin x$ with the line $y=k$ shows the solutions as intersections, and it is a useful check that you have found them all. For exact-value questions, the GDC can confirm your answer: for example $\cos\dfrac{5\pi}6$ displays as $-0.8660$, which equals $-\dfrac{\sqrt3}2$. Many GDCs can also draw the unit circle parametrically ($x=\cos t$, $y=\sin t$) and trace the point. Menu names vary by model. Never use the GDC's decimal in place of an exact value if the question asks for an exact value.

## Common mistakes

1. **Wrong sign in quadrants 2, 3 and 4**: sketch the point and read the signs of $x$ and $y$.
2. **Confusing $\sin$ and $\cos$ coordinates**: $\cos$ is $x$ and $\sin$ is $y$.
3. **Using the angle instead of the reference angle** in exact-value lookups.
4. **Forgetting the second solution** of $\sin\theta=k$ or $\cos\theta=k$, or the $\pi$-periodicity of tangent.
5. **Taking the positive square root automatically** in $\sin\theta=\pm\sqrt{1-\cos^{2}\theta}$ without checking the quadrant.
6. **Misapplying the symmetry rules**, for example $\cos(\pi-\theta)=\cos\theta$ (wrong; it is $-\cos\theta$).
7. **Mixing degrees and radians**, such as writing $\sin\dfrac\pi6=\sin30$ in radian mode.
8. **Writing $\tan\dfrac\pi2=\infty$** instead of "undefined".

## Exam technique and command terms

**Write down** (an exact value) indicates it should be known without working, from the unit circle. **Find the exact value** requires surds with no decimals. **Solve** for $0\le\theta\le2\pi$ requires all solutions in that interval, exactly where the values are special. **Show that** requires reasoning from the unit circle or from symmetry. **Hence** might require use of a previous exact value. In a question where $\theta$ is described only by its quadrant, use the quadrant to select the signs.

A good routine for an exact-value or equation question is: sketch a quick unit circle; mark the angle and its reference angle; write the sign; give the exact value. For equations, list the reference angle first, then the quadrants, then the solutions, and finally check that each lies in the interval given. Use diagrams: they are quick and prevent sign errors. In degrees, remember the corresponding multiples of $30^{\circ}$ and $45^{\circ}$.

## Connections

SL 3.2 provided the acute-angle definitions and the special triangles. SL 3.4 provided radians, which turn the angle into the arc length on the unit circle: the point at angle $\theta$ is at arc distance $\theta$ from $(1,0)$. SL 3.6 uses the circle to prove $\cos^{2}\theta+\sin^{2}\theta=1$ and the double-angle identities, and SL 3.7 and SL 3.8 use the unit circle to graph the trigonometric functions and solve equations. AHL 2.14 classifies sine and tangent as odd functions and cosine as even, which is the content of $\sin(-\theta)$ and $\cos(-\theta)$ here. AHL 3.9 introduces secant, cosecant and cotangent, defined from the same circle. AHL 3.10 gives compound-angle identities, which generalise the rotation argument of Example 12. In AHL 1.13, the complex number $\cos\theta+i\sin\theta$ lies on the unit circle in the Argand diagram, and de Moivre's theorem is the statement that multiplying such numbers adds angles. In Unit 5, the derivatives of $\sin$ and $\cos$ are related by a rotation of $\dfrac\pi2$ (the relations of Example 12), and integrals such as $\int_{0}^{2\pi}\sin x\,dx=0$ express the symmetry of the circle. In Unit 4, the periodic nature of seasonal data can be modelled with these functions.

## Check your understanding

1. Find the exact values of $\sin\dfrac{2\pi}3$, $\cos\dfrac{2\pi}3$ and $\tan\dfrac{2\pi}3$.
2. Find the exact values of $\sin\dfrac{5\pi}4$, $\cos\dfrac{5\pi}4$ and $\tan\dfrac{5\pi}4$.
3. Find the exact values of $\sin\dfrac{11\pi}6$ and $\cos\dfrac{11\pi}6$.
4. Find $\sin\left(-\dfrac{3\pi}4\right)$ and $\cos\left(-\dfrac{3\pi}4\right)$ exactly.
5. Given $\cos\theta=\dfrac35$ and $\dfrac{3\pi}2<\theta<2\pi$, find $\sin\theta$ and $\tan\theta$.
6. Given $\sin\theta=-\dfrac5{13}$ and $\pi<\theta<\dfrac{3\pi}2$, find $\cos\theta$ and $\tan\theta$.
7. Solve $2\cos\theta=-1$ for $0\le\theta\le2\pi$.
8. Solve $\tan\theta=-\sqrt3$ for $0\le\theta\le2\pi$.
9. Simplify $\sin(\pi+\theta)+\cos(\pi-\theta)$.
10. Find the coordinates of the point on the circle $x^{2}+y^{2}=16$ at angle $\dfrac{7\pi}6$.

### Answers

1. Quadrant 2, reference angle $\dfrac\pi3$: $\sin=\dfrac{\sqrt3}2$, $\cos=-\dfrac12$, $\tan=-\sqrt3$.
2. Quadrant 3, reference angle $\dfrac\pi4$: $\sin=-\dfrac{\sqrt2}2$, $\cos=-\dfrac{\sqrt2}2$, $\tan=1$.
3. Quadrant 4, reference angle $\dfrac\pi6$: $\sin=-\dfrac12$ and $\cos=\dfrac{\sqrt3}2$.
4. The angle $-\dfrac{3\pi}4$ is in quadrant 3: $\sin=-\dfrac{\sqrt2}2$ and $\cos=-\dfrac{\sqrt2}2$.
5. $\sin^{2}\theta=1-\dfrac9{25}=\dfrac{16}{25}$, and $\sin$ is negative in quadrant 4: $\sin\theta=-\dfrac45$ and $\tan\theta=-\dfrac43$.
6. $\cos^{2}\theta=1-\dfrac{25}{169}=\dfrac{144}{169}$, and $\cos$ is negative in quadrant 3: $\cos\theta=-\dfrac{12}{13}$ and $\tan\theta=\dfrac5{12}$.
7. $\cos\theta=-\dfrac12$ has reference angle $\dfrac\pi3$, with $\cos$ negative in quadrants 2 and 3: $\theta=\dfrac{2\pi}3,\dfrac{4\pi}3$.
8. Reference angle $\dfrac\pi3$; $\tan$ negative in quadrants 2 and 4: $\theta=\dfrac{2\pi}3,\dfrac{5\pi}3$.
9. $\sin(\pi+\theta)=-\sin\theta$ and $\cos(\pi-\theta)=-\cos\theta$, so the sum is $-\sin\theta-\cos\theta$.
10. $\left(4\cos\dfrac{7\pi}6,\ 4\sin\dfrac{7\pi}6\right)=\left(-2\sqrt3,\ -2\right)\approx(-3.46,\,-2)$.

## Summary

- The point at angle $\theta$ on the unit circle is $(\cos\theta,\sin\theta)$; $\tan\theta=\frac{\sin\theta}{\cos\theta}$ is the gradient of the radius; $\sin^{2}\theta+\cos^{2}\theta=1$.
- Periods: $2\pi$ for $\sin$ and $\cos$, $\pi$ for $\tan$; ranges $[-1,1]$ for $\sin$ and $\cos$.
- Signs: quadrant 1 all positive; quadrant 2 only $\sin$; quadrant 3 only $\tan$; quadrant 4 only $\cos$.
- Use the reference angle and the special triangles for exact values at multiples of $\frac\pi6$ and $\frac\pi4$.
- Symmetries: $\sin(-\theta)=-\sin\theta$, $\cos(-\theta)=\cos\theta$, $\sin(\pi-\theta)=\sin\theta$, $\cos(\pi-\theta)=-\cos\theta$, $\sin(\pi+\theta)=-\sin\theta$, $\sin(\frac\pi2-\theta)=\cos\theta$.
- Given one ratio and the quadrant, find the others by Pythagoras and the sign rule; for equations, list the reference angle and the quadrants.
