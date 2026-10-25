# Reciprocal ratios and identities

> **AHL 3.9 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define the reciprocal trigonometric ratios secant, cosecant and cotangent, and state where each is undefined;
- find exact values of the reciprocal ratios for the standard angles in any quadrant;
- state the domain, range, period, asymptotes and symmetry of $y=\sec x$, $y=\csc x$ and $y=\cot x$, and sketch their graphs from the graphs of $\cos x$, $\sin x$ and $\tan x$;
- state, derive and use the identities $1+\tan^{2}\theta=\sec^{2}\theta$ and $1+\cot^{2}\theta=\csc^{2}\theta$;
- find all the reciprocal ratios from one ratio and the quadrant;
- prove identities involving reciprocal ratios;
- solve equations involving $\sec$, $\csc$ and $\cot$, including quadratics, over a given interval;
- find the range of a transformed reciprocal function.

## Why this topic matters

At SL, you worked with three ratios: sine, cosine and tangent. HL adds their reciprocals. They are not new in substance, since $\sec\theta$ is just $\dfrac1{\cos\theta}$, but they are important for notation, for identities and for calculus. In Unit 5, the derivative of $\tan x$ is $\sec^{2}x$, the derivative of $\sec x$ is $\sec x\tan x$, and standard integrals such as $\int\sec^{2}x\,dx=\tan x+C$ are written with them. In physics and engineering they appear as the length of a hypotenuse in a triangle with a given adjacent side ($\sec$) or opposite side ($\csc$). In the examination, reciprocal ratios appear in three ways: as an exact-value question on the unit circle, as part of a proof of an identity, and in an equation which is converted to a quadratic in one function. Each of these is straightforward when you remember a single principle: *a reciprocal function is undefined where the original is zero, and takes the reciprocal values elsewhere*. The graphs follow from that principle, and the identities from dividing the Pythagorean identity by $\cos^{2}\theta$ or $\sin^{2}\theta$. This chapter gives you the definitions, the graphs and a complete toolkit for the questions, with attention to the signs and to the domain of validity of each identity.

## Core ideas

### Definitions

For any angle $\theta$ for which the denominator is not zero,
$$
\sec\theta=\frac1{\cos\theta},\qquad\csc\theta=\frac1{\sin\theta},\qquad\cot\theta=\frac1{\tan\theta}=\frac{\cos\theta}{\sin\theta}.
$$
The abbreviation $\csc$ is also written $\operatorname{cosec}$ and the name is *cosecant*. The functions are undefined where the corresponding denominator vanishes:

- $\sec\theta$ is undefined where $\cos\theta=0$: $\theta=\dfrac\pi2+k\pi$;
- $\csc\theta$ is undefined where $\sin\theta=0$: $\theta=k\pi$;
- $\cot\theta$ is undefined where $\sin\theta=0$: $\theta=k\pi$ (and equals $0$ where $\cos\theta=0$).

On the unit circle at the point $P=(\cos\theta,\sin\theta)$, $\sec\theta$ is the reciprocal of the $x$-coordinate and $\csc\theta$ the reciprocal of the $y$-coordinate. In a right-angled triangle, $\sec\theta=\dfrac{\text{hypotenuse}}{\text{adjacent}}$, $\csc\theta=\dfrac{\text{hypotenuse}}{\text{opposite}}$ and $\cot\theta=\dfrac{\text{adjacent}}{\text{opposite}}$. Note: $\sec\theta$ goes with $\cos\theta$, and $\csc\theta$ with $\sin\theta$ (the "co" pairs are crossed).

The notation $\sec^{2}\theta$ means $(\sec\theta)^{2}$. And $\sec\theta$ is *not* the inverse function $\cos^{-1}\theta$: the reciprocal is $\dfrac1{\cos\theta}$, while the inverse function $\arccos$ undoes the cosine (AHL 3.11).

### Signs and exact values

The sign of $\sec\theta$ is that of $\cos\theta$, the sign of $\csc\theta$ is that of $\sin\theta$ and the sign of $\cot\theta$ is that of $\tan\theta$. Exact values come from the unit circle by taking reciprocals. A useful table for the first quadrant:

- $\theta=\dfrac\pi6$: $\sec=\dfrac2{\sqrt3}$, $\csc=2$, $\cot=\sqrt3$;
- $\theta=\dfrac\pi4$: $\sec=\sqrt2$, $\csc=\sqrt2$, $\cot=1$;
- $\theta=\dfrac\pi3$: $\sec=2$, $\csc=\dfrac2{\sqrt3}$, $\cot=\dfrac1{\sqrt3}$.

For other quadrants use the reference angle and the sign. For example, $\sec\dfrac{2\pi}3=\dfrac1{\cos(2\pi/3)}=\dfrac1{-1/2}=-2$.

### Graphs

**$y=\sec x$.** Domain $x\ne\dfrac\pi2+k\pi$. Range $y\le-1$ or $y\ge1$ (since $|\cos x|\le1$, $|\sec x|\ge1$). Period $2\pi$. Even. The $y$-intercept is $1$. Vertical asymptotes at $x=\dfrac\pi2+k\pi$. The graph consists of U-shaped branches: upward-opening branches with minimum points $(2k\pi,1)$, where $\cos x=1$, and downward-opening branches with maximum points $((2k+1)\pi,-1)$. It touches the lines $y=\pm1$ at the turning points of $\cos x$.

**$y=\csc x$.** Domain $x\ne k\pi$. Range $y\le-1$ or $y\ge1$. Period $2\pi$. Odd. Asymptotes at $x=k\pi$. The branches have turning points where $\sin x=\pm1$: minimum $\left(\dfrac\pi2,1\right)$ and maximum $\left(\dfrac{3\pi}2,-1\right)$. There is no $y$-intercept.

**$y=\cot x$.** Domain $x\ne k\pi$. Range all real numbers. Period $\pi$. Odd. Asymptotes at $x=k\pi$. Zeros at $x=\dfrac\pi2+k\pi$. It is *decreasing* on each branch (unlike $\tan x$): $\cot x$ goes from $+\infty$ just right of $0$ to $-\infty$ just left of $\pi$. Its graph is the reflection of $\tan x$ in the $y$-axis translated $\dfrac\pi2$: $\cot x=-\tan\left(x-\dfrac\pi2\right)=\tan\left(\dfrac\pi2-x\right)$.

*Sketching the reciprocal graph:* draw the original graph lightly; mark the zeros of the original as vertical asymptotes of the reciprocal; at maxima and minima of the original with value $\pm1$ the reciprocal has turning points with the same value; where the original is between $0$ and $1$ in size, the reciprocal is larger than $1$ in size, and the graphs cross at $y=\pm1$. This is the general principle of AHL 2.13 and SL 2.8 applied to $\dfrac1{f(x)}$.

### The Pythagorean identities

Dividing $\sin^{2}\theta+\cos^{2}\theta=1$ by $\cos^{2}\theta$ (valid where $\cos\theta\ne0$):
$$
\tan^{2}\theta+1=\sec^{2}\theta.
$$
Dividing by $\sin^{2}\theta$ (valid where $\sin\theta\ne0$):
$$
1+\cot^{2}\theta=\csc^{2}\theta.
$$
Together with $\sin^{2}\theta+\cos^{2}\theta=1$, these three are the Pythagorean family. Rearranged: $\tan^{2}\theta=\sec^{2}\theta-1$ and $\cot^{2}\theta=\csc^{2}\theta-1$, and $(\sec\theta-\tan\theta)(\sec\theta+\tan\theta)=1$ and $(\csc\theta-\cot\theta)(\csc\theta+\cot\theta)=1$. They are valid only where all terms are defined.

### Finding all ratios from one

From one ratio and the quadrant, find $\sin\theta$ and $\cos\theta$ first (by a reference triangle or identity), then take reciprocals. For instance, given $\sec\theta=-3$ with $\dfrac\pi2<\theta<\pi$: $\cos\theta=-\dfrac13$, $\sin\theta=+\sqrt{1-\dfrac19}=\dfrac{2\sqrt2}3$ (positive in quadrant 2), $\tan\theta=\dfrac{2\sqrt2/3}{-1/3}=-2\sqrt2$, $\csc\theta=\dfrac3{2\sqrt2}=\dfrac{3\sqrt2}4$ and $\cot\theta=-\dfrac1{2\sqrt2}=-\dfrac{\sqrt2}4$.

### Proving identities with reciprocal functions

The standard strategy is to rewrite everything in terms of $\sin$ and $\cos$, combine fractions, and use the Pythagorean identities. The rules of SL 3.6 apply: start with the more complicated side, do not treat the identity as an equation, and state the domain of validity. Many proofs use the pattern $\sec\theta-\cos\theta=\dfrac{1-\cos^{2}\theta}{\cos\theta}=\dfrac{\sin^{2}\theta}{\cos\theta}$.

### Solving equations

To solve an equation with a reciprocal function in a given interval:

1. For a single reciprocal function equal to a constant, take the reciprocal: $\sec x=2\iff\cos x=\dfrac12$; $\csc x=3\iff\sin x=\dfrac13$; $\cot x=-1\iff\tan x=-1$. A reciprocal equal to a value of size less than $1$ (for $\sec$ and $\csc$) has *no solution*, since $|\sec x|\ge1$.
2. For an equation with a mixture, convert to a single function using the identities. For example $2\tan^{2}x+\sec x=1$: replace $\tan^{2}x=\sec^{2}x-1$ to get $2\sec^{2}x+\sec x-3=0$, a quadratic in $\sec x$, so $(2\sec x+3)(\sec x-1)=0$.
3. Solve each resulting simple equation by the unit-circle method of SL 3.8, finding every solution in the interval.

Check that the solutions are not at points where a function is undefined.

### Transformations and range

The range of $a\sec x+d$ is $y\le d-|a|$ or $y\ge d+|a|$ (because $\sec x$ has no values in $(-1,1)$): for $y=3\sec x+2$ it is $y\ge5$ or $y\le-1$. The same applies to $\csc$. The range of $a\cot x+d$ is all real numbers.

## Worked examples

### Example 1 (exact values, 6 marks)

Find the exact values of (a) $\sec\dfrac\pi3$; (b) $\csc\dfrac\pi6$; (c) $\cot\dfrac\pi4$; (d) $\sec\dfrac{2\pi}3$; (e) $\csc\dfrac{5\pi}4$; (f) $\cot\dfrac{5\pi}6$.

*Solution.* (a) $\dfrac1{\cos(\pi/3)}=2$. (b) $\dfrac1{\sin(\pi/6)}=2$. (c) $\dfrac1{\tan(\pi/4)}=1$. (d) $\dfrac1{-1/2}=-2$. (e) $\sin\dfrac{5\pi}4=-\dfrac{\sqrt2}2$, so $\csc=-\dfrac2{\sqrt2}=-\sqrt2$. (f) $\tan\dfrac{5\pi}6=-\dfrac1{\sqrt3}$, so $\cot\dfrac{5\pi}6=-\sqrt3$.

### Example 2 (all ratios from the tangent, 5 marks)

Given $\tan\theta=\dfrac34$ and $\theta$ acute, find $\sec\theta$, $\cot\theta$ and $\csc\theta$.

*Solution.* The hypotenuse is $5$, so $\cos\theta=\dfrac45$ and $\sin\theta=\dfrac35$. Then $\sec\theta=\dfrac54$, $\cot\theta=\dfrac43$ and $\csc\theta=\dfrac53$. Alternatively $\sec^{2}\theta=1+\dfrac9{16}=\dfrac{25}{16}$ and $\sec\theta=+\dfrac54$.

### Example 3 (all ratios from the secant, 7 marks)

Given $\sec\theta=-3$ and $\dfrac\pi2<\theta<\pi$, find the exact values of $\sin\theta$, $\tan\theta$, $\csc\theta$ and $\cot\theta$.

*Solution.* $\cos\theta=-\dfrac13$. Then $\sin^{2}\theta=1-\dfrac19=\dfrac89$, and in quadrant 2 $\sin\theta=\dfrac{2\sqrt2}3$. $\tan\theta=\dfrac{2\sqrt2/3}{-1/3}=-2\sqrt2$. $\csc\theta=\dfrac3{2\sqrt2}=\dfrac{3\sqrt2}4$ and $\cot\theta=-\dfrac1{2\sqrt2}=-\dfrac{\sqrt2}4$.

Check with the identity: $1+\tan^{2}\theta=1+8=9=\sec^{2}\theta$ ✓.

### Example 4 (proving an identity, 4 marks)

Prove that $1+\cot^{2}\theta=\csc^{2}\theta$.

*Proof.* $1+\cot^{2}\theta=1+\dfrac{\cos^{2}\theta}{\sin^{2}\theta}=\dfrac{\sin^{2}\theta+\cos^{2}\theta}{\sin^{2}\theta}=\dfrac1{\sin^{2}\theta}=\csc^{2}\theta$. $\blacksquare$

### Example 5 (a standard proof, 5 marks)

Prove that $\sec\theta-\cos\theta=\sin\theta\tan\theta$.

*Proof.* LHS $=\dfrac1{\cos\theta}-\cos\theta=\dfrac{1-\cos^{2}\theta}{\cos\theta}=\dfrac{\sin^{2}\theta}{\cos\theta}=\sin\theta\cdot\dfrac{\sin\theta}{\cos\theta}=\sin\theta\tan\theta$. $\blacksquare$

### Example 6 (a product identity, 4 marks)

Prove that $(\csc\theta-\cot\theta)(\csc\theta+\cot\theta)=1$.

*Proof.* The product is a difference of squares: $\csc^{2}\theta-\cot^{2}\theta=1$ by the identity $1+\cot^{2}\theta=\csc^{2}\theta$. $\blacksquare$

### Example 7 (a sum of fractions, 6 marks)

Prove that $\dfrac1{1-\sin\theta}+\dfrac1{1+\sin\theta}=2\sec^{2}\theta$.

*Proof.* LHS $=\dfrac{(1+\sin\theta)+(1-\sin\theta)}{(1-\sin\theta)(1+\sin\theta)}=\dfrac2{1-\sin^{2}\theta}=\dfrac2{\cos^{2}\theta}=2\sec^{2}\theta$. $\blacksquare$

### Example 8 (basic equations, 5 marks)

Solve for $0\le x\le2\pi$: (a) $\sec x=2$; (b) $\cot x=-1$.

*Solution.* (a) $\cos x=\dfrac12$, so $x=\dfrac\pi3,\ \dfrac{5\pi}3$. (b) $\tan x=-1$, so $x=\dfrac{3\pi}4,\ \dfrac{7\pi}4$.

### Example 9 (cosecant, 4 marks)

Solve $\csc x=3$ for $0\le x\le2\pi$, and explain why $\csc x=\dfrac12$ has no solutions.

*Solution.* $\sin x=\dfrac13$, so $x=0.340$ or $x=\pi-0.340=2.80$. For $\csc x=\dfrac12$, we would need $\sin x=2$, which is impossible; equivalently $|\csc x|\ge1$ always.

### Example 10 (a quadratic in secant, 8 marks)

Solve $2\tan^{2}x+\sec x=1$ for $0\le x\le2\pi$.

*Solution.* Use $\tan^{2}x=\sec^{2}x-1$: $2\sec^{2}x-2+\sec x-1=0$, so $2\sec^{2}x+\sec x-3=0$. Factorise: $(2\sec x+3)(\sec x-1)=0$. $\sec x=1$ gives $\cos x=1$, so $x=0,\ 2\pi$. $\sec x=-\dfrac32$ gives $\cos x=-\dfrac23$, so $x=\cos^{-1}\left(-\dfrac23\right)=2.30$ and $x=2\pi-2.3005=3.98$. The solutions are $x=0,\ 2.30,\ 3.98,\ 2\pi$.

Check $x=0$: $2(0)+1=1$ ✓.

### Example 11 (exact solutions from a quadratic in tangent, 8 marks)

Solve $\sec^{2}x=4\tan x$ for $0\le x\le2\pi$, giving exact answers.

*Solution.* $1+\tan^{2}x=4\tan x$, so $\tan^{2}x-4\tan x+1=0$ and $\tan x=2\pm\sqrt3$. Now $\tan\dfrac{5\pi}{12}=\tan75^{\circ}=2+\sqrt3$ and $\tan\dfrac\pi{12}=\tan15^{\circ}=2-\sqrt3$. Both are positive, so the solutions are in quadrants 1 and 3: $x=\dfrac\pi{12},\ \dfrac{5\pi}{12},\ \dfrac{13\pi}{12},\ \dfrac{17\pi}{12}$.

Check $x=\dfrac\pi{12}$: $\tan=0.2679$, $\sec^{2}=1+0.0718=1.0718$ and $4\tan=1.0718$ ✓.

### Example 12 (features of the secant graph, 5 marks)

State the domain, range, period and asymptotes of $y=\sec x$, and the coordinates of its turning points in $0\le x\le2\pi$.

*Solution.* Domain: $x\ne\dfrac\pi2+k\pi$. Range: $y\le-1$ or $y\ge1$. Period $2\pi$. Asymptotes $x=\dfrac\pi2+k\pi$. In $[0,2\pi]$ the turning points are the minimum $(0,1)$, the maximum $(\pi,-1)$ and the minimum $(2\pi,1)$.

### Example 13 (a transformed range, 4 marks)

Find the range of $y=3\sec x+2$.

*Solution.* Since $\sec x\ge1$ or $\sec x\le-1$: $3\sec x+2\ge5$ or $3\sec x+2\le-1$. The range is $y\le-1$ or $y\ge5$.

## Using your GDC

Most GDCs have no $\sec$, $\csc$ or $\cot$ keys: enter them as $\dfrac1{\cos x}$, $\dfrac1{\sin x}$ and $\dfrac1{\tan x}$ (with brackets). To graph $\sec x$, plot $y=1/\cos(x)$ in radian mode: the GDC may join the branches at the asymptotes with near-vertical lines, which are not part of the graph. Use the *dot* style if possible. Plot $y=\cos x$ lightly beside it to see the relationship: the reciprocal graph touches $\pm1$ where the cosine does. For an equation like $2\sec x=5$, graph both sides and use *intersect*. For quadratics in $\sec x$, check your algebraic solutions by plotting the original equation as $y=\text{left}-\text{right}$ and using *zero*. For $\cot x$ the calculator's $1/\tan x$ gives an error at $x=\dfrac\pi2$ in some models (where $\cot x=0$), which is a display artefact: use $\cos x/\sin x$ instead. Menu names vary by model. Always check the mode.

## Common mistakes

1. **Confusing the pairs**: $\sec$ goes with $\cos$ and $\csc$ with $\sin$ (not the other way round).
2. **Thinking $\sec\theta=\cos^{-1}\theta$**, which is the inverse function and not the reciprocal.
3. **Wrong range for $\sec$ and $\csc$**: it excludes $(-1,1)$.
4. **Forgetting asymptotes** or drawing them at the wrong places ($\sec$ at the zeros of $\cos$).
5. **Wrong identity**: $1+\tan^{2}\theta=\sec^{2}\theta$, not $\csc^{2}\theta$.
6. **Not taking reciprocals of the right-hand side**: $\sec x=2$ means $\cos x=\dfrac12$, not $\cos x=2$.
7. **Missing the solution in other quadrants** when the sign of the reciprocal equals the sign of the original.
8. **Including solutions where a function is undefined**, for example $x=\dfrac\pi2$ in an equation with $\tan x$ or $\sec x$.

## Exam technique and command terms

**Write down** (an exact value) requires no working. **Show that** or **prove** requires a logical chain in terms of $\sin$ and $\cos$. **Hence** means use the previous identity. **Solve** needs all solutions in the interval, in exact form when the values are standard. **Sketch** requires asymptotes, turning points, intercepts and at least one period. **Find the range** requires attention to the gap in the range of $\sec$ and $\csc$.

When a question contains a mixture of $\tan^{2}x$ and $\sec x$ or $\cot^{2}x$ and $\csc x$, immediately convert with the Pythagorean identity to a single function. If the equation contains $\csc x$ and $\cot x$ products, write them in terms of $\sin x$ and $\cos x$. Always list the restrictions $\cos x\ne0$ or $\sin x\ne0$ when you multiply through by those quantities, and reject solutions that violate them. State signs from the quadrant explicitly when you compute exact values.

## Connections

SL 3.5 provided the unit circle and exact values, SL 3.6 the Pythagorean identity from which the new ones come, SL 3.7 the graphs of $\sin$, $\cos$ and $\tan$ used to sketch the reciprocals, and SL 3.8 the equation-solving routines. SL 2.8 and AHL 2.13 provided the idea that a reciprocal function has asymptotes at the zeros of the original, and AHL 2.14 shows that $\sec$ is even and $\csc$ and $\cot$ are odd. AHL 3.10 uses reciprocal ratios in the compound-angle identity for $\tan(A+B)$ and in the expression $\cot$ of a sum, and AHL 3.11 treats the inverse trigonometric functions and the relationships between all the functions. In AHL 1.13 and 1.14, the identities simplify the polar form of complex numbers. In Unit 5, $\dfrac d{dx}\tan x=\sec^{2}x$, $\dfrac d{dx}\sec x=\sec x\tan x$ and $\dfrac d{dx}\cot x=-\csc^{2}x$ are standard results, and the identity $1+\tan^{2}x=\sec^{2}x$ is used to simplify integrands such as $\tan^{2}x$, since $\int\tan^{2}x\,dx=\int(\sec^{2}x-1)\,dx=\tan x-x+C$.

## Check your understanding

1. Find the exact values of $\sec\dfrac\pi6$, $\csc\dfrac\pi3$ and $\cot\dfrac\pi3$.
2. Find the exact values of $\sec\dfrac{3\pi}4$, $\csc\dfrac{7\pi}6$ and $\cot\dfrac{11\pi}6$.
3. Given $\cot\theta=\dfrac5{12}$ and $\theta$ acute, find $\tan\theta$, $\csc\theta$ and $\sec\theta$.
4. Given $\csc\theta=-\dfrac53$ and $\pi<\theta<\dfrac{3\pi}2$, find $\cos\theta$, $\sec\theta$ and $\cot\theta$.
5. Prove that $\tan\theta+\cot\theta=\sec\theta\csc\theta$.
6. Prove that $(\sec\theta+\tan\theta)(\sec\theta-\tan\theta)=1$.
7. Prove that $\dfrac{\cos\theta}{1-\sin\theta}=\dfrac{1+\sin\theta}{\cos\theta}$.
8. Solve $\sec x=-2$ for $0\le x\le2\pi$.
9. Solve $\cot^{2}x=3$ for $0\le x\le2\pi$.
10. Solve $\tan^{2}x+\sec x=1$ for $0\le x\le2\pi$.

### Answers

1. $\sec\dfrac\pi6=\dfrac2{\sqrt3}=\dfrac{2\sqrt3}3$, $\csc\dfrac\pi3=\dfrac2{\sqrt3}=\dfrac{2\sqrt3}3$ and $\cot\dfrac\pi3=\dfrac1{\sqrt3}=\dfrac{\sqrt3}3$.
2. $\cos\dfrac{3\pi}4=-\dfrac{\sqrt2}2$, so $\sec=-\sqrt2$. $\sin\dfrac{7\pi}6=-\dfrac12$, so $\csc=-2$. $\tan\dfrac{11\pi}6=-\dfrac1{\sqrt3}$, so $\cot=-\sqrt3$.
3. $\tan\theta=\dfrac{12}5$. The hypotenuse is $13$, so $\csc\theta=\dfrac{13}{12}$ and $\sec\theta=\dfrac{13}5$.
4. $\sin\theta=-\dfrac35$. In quadrant 3, $\cos\theta=-\dfrac45$, so $\sec\theta=-\dfrac54$. $\cot\theta=\dfrac{-4/5}{-3/5}=\dfrac43$.
5. LHS $=\dfrac{\sin\theta}{\cos\theta}+\dfrac{\cos\theta}{\sin\theta}=\dfrac{\sin^{2}\theta+\cos^{2}\theta}{\sin\theta\cos\theta}=\dfrac1{\sin\theta\cos\theta}=\sec\theta\csc\theta$. $\blacksquare$
6. The product is $\sec^{2}\theta-\tan^{2}\theta=1$ by $1+\tan^{2}\theta=\sec^{2}\theta$. $\blacksquare$
7. Multiply numerator and denominator of the LHS by $(1+\sin\theta)$: $\dfrac{\cos\theta(1+\sin\theta)}{1-\sin^{2}\theta}=\dfrac{\cos\theta(1+\sin\theta)}{\cos^{2}\theta}=\dfrac{1+\sin\theta}{\cos\theta}$. $\blacksquare$
8. $\cos x=-\dfrac12$, so $x=\dfrac{2\pi}3,\ \dfrac{4\pi}3$.
9. $\cot x=\pm\sqrt3$, so $\tan x=\pm\dfrac1{\sqrt3}$, giving $x=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{7\pi}6,\ \dfrac{11\pi}6$.
10. $\sec^{2}x-1+\sec x-1=0$, so $\sec^{2}x+\sec x-2=0$ and $(\sec x+2)(\sec x-1)=0$. $\sec x=1$: $x=0,\ 2\pi$. $\sec x=-2$: $\cos x=-\dfrac12$, $x=\dfrac{2\pi}3,\ \dfrac{4\pi}3$.

## Summary

- $\sec\theta=\frac1{\cos\theta}$, $\csc\theta=\frac1{\sin\theta}$, $\cot\theta=\frac1{\tan\theta}=\frac{\cos\theta}{\sin\theta}$; each is undefined where its denominator is zero.
- Graphs: $\sec$ and $\csc$ have range $|y|\ge1$ and period $2\pi$; $\cot$ has period $\pi$ and range $\mathbb{R}$; asymptotes at the zeros of the original function.
- Identities: $1+\tan^{2}\theta=\sec^{2}\theta$ and $1+\cot^{2}\theta=\csc^{2}\theta$.
- Find all ratios from one by first finding $\sin\theta$ and $\cos\theta$ with the quadrant's signs.
- Prove identities by rewriting in $\sin$ and $\cos$; solve equations by taking reciprocals or reducing to a quadratic in one function.
- Range of $a\sec x+d$: $y\le d-|a|$ or $y\ge d+|a|$.
