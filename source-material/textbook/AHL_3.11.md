# Relationships among trigonometric functions

> **AHL 3.11 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define $\arcsin$, $\arccos$ and $\arctan$ as inverse functions on restricted domains, and state their domains and ranges;
- sketch their graphs as reflections in $y=x$ and state key points and asymptotes;
- evaluate expressions such as $\arcsin\left(-\dfrac12\right)$ exactly and decide when $\arcsin(\sin x)=x$;
- evaluate composite expressions such as $\cos(\arcsin x)$ and $\tan(\arccos x)$ with a triangle or an identity;
- prove and use relationships such as $\arcsin x+\arccos x=\dfrac\pi2$ and $\arctan x+\arctan\dfrac1x=\dfrac\pi2$ for $x>0$;
- solve equations involving inverse trigonometric functions and recognise extraneous solutions;
- find the inverse of a trigonometric function restricted to a suitable interval;
- describe the symmetry properties of the graphs of sine, cosine and tangent and the relationships $\sin\left(\dfrac\pi2-x\right)=\cos x$ and $\sin(\pi-x)=\sin x$;
- use inverse trigonometric functions to find an angle in context.

## Why this topic matters

To find an angle from a ratio you press $\sin^{-1}$ on your calculator. This chapter explains what that key does, why it gives only one of the infinitely many angles with a given sine, and what the resulting functions look like. The ideas link two big themes of the course. From Unit 2, a function has an inverse only if it is one-to-one, and sine, cosine and tangent are certainly not one-to-one on all of $\mathbb{R}$ because they are periodic. The remedy, as with $x^{2}$ and $\sqrt x$ (SL 2.9, AHL 2.14), is to restrict the domain to an interval on which the function is one-to-one, and then take the inverse. The restricted interval is a convention (a choice made once and for all), and the *principal value* it produces is what the calculator returns. From Unit 5, the derivatives of the inverse trigonometric functions, $\dfrac d{dx}\arctan x=\dfrac1{1+x^{2}}$ and $\dfrac d{dx}\arcsin x=\dfrac1{\sqrt{1-x^{2}}}$, are among the standard results of the HL calculus, and the integrals $\int\dfrac{dx}{1+x^{2}}$ and $\int\dfrac{dx}{\sqrt{1-x^{2}}}$ produce inverse trigonometric functions, which is the first appearance of these functions in integration. A full understanding of the domain and range pays off here, since the correct sign and interval decide whether an answer is right. The second half of the chapter collects the relationships among the trigonometric functions and the symmetry properties of their graphs. These relationships give a second way to understand identities: not as algebra, but as statements about reflections and translations of curves.

## Core ideas

### Why a restriction is needed

A function has an inverse only if it passes the horizontal line test. Since $\sin x$ takes each value in $(-1,1)$ infinitely often, it needs a restricted domain. The standard choices are those intervals where the function is monotonic and covers its full range:

- $\sin x$ restricted to $\left[-\dfrac\pi2,\dfrac\pi2\right]$ (increasing, from $-1$ to $1$);
- $\cos x$ restricted to $[0,\pi]$ (decreasing, from $1$ to $-1$);
- $\tan x$ restricted to $\left(-\dfrac\pi2,\dfrac\pi2\right)$ (increasing, from $-\infty$ to $\infty$).

### The inverse functions

- $\arcsin x$ (also written $\sin^{-1}x$): domain $[-1,1]$, range $\left[-\dfrac\pi2,\dfrac\pi2\right]$.
- $\arccos x$ (also $\cos^{-1}x$): domain $[-1,1]$, range $[0,\pi]$.
- $\arctan x$ (also $\tan^{-1}x$): domain $\mathbb{R}$, range $\left(-\dfrac\pi2,\dfrac\pi2\right)$.

The statement $y=\arcsin x$ means "$y$ is the angle in $\left[-\dfrac\pi2,\dfrac\pi2\right]$ whose sine is $x$". The superscript $-1$ here denotes the inverse function, *not* the reciprocal: $\sin^{-1}x\ne\dfrac1{\sin x}$ (the reciprocal is $\csc x$, AHL 3.9). Note that the output of each function is an *angle* in radians.

### Graphs

The graph of each inverse is the reflection of the restricted graph in the line $y=x$ (SL 2.9), so domain and range swap.

- $y=\arcsin x$ is increasing from $\left(-1,-\dfrac\pi2\right)$ through $(0,0)$ to $\left(1,\dfrac\pi2\right)$. It has vertical tangents at the end points.
- $y=\arccos x$ is decreasing from $(-1,\pi)$ through $\left(0,\dfrac\pi2\right)$ to $(1,0)$.
- $y=\arctan x$ is increasing through the origin with horizontal asymptotes $y=\dfrac\pi2$ (as $x\to\infty$) and $y=-\dfrac\pi2$ (as $x\to-\infty$).

$\arcsin$ and $\arctan$ are odd functions; $\arccos$ is neither odd nor even, but satisfies $\arccos(-x)=\pi-\arccos x$.

### Composition: when do the functions cancel?

By the definition of inverse functions, $\sin(\arcsin x)=x$ for every $x$ in $[-1,1]$, $\cos(\arccos x)=x$ for $x$ in $[-1,1]$, and $\tan(\arctan x)=x$ for all real $x$. In the other order, the cancellation holds *only on the restricted interval*:
$$
\arcsin(\sin x)=x\ \text{ for }x\in\left[-\frac\pi2,\frac\pi2\right],\quad\arccos(\cos x)=x\ \text{ for }x\in[0,\pi],\quad\arctan(\tan x)=x\ \text{ for }x\in\left(-\frac\pi2,\frac\pi2\right).
$$
Outside these intervals, use the periodicity and symmetry to bring the angle into the principal range. For example $\arcsin\left(\sin\dfrac{5\pi}6\right)$: since $\sin\dfrac{5\pi}6=\dfrac12$, the answer is $\arcsin\dfrac12=\dfrac\pi6$, not $\dfrac{5\pi}6$. In general $\arcsin(\sin x)=\pi-x$ for $x\in\left[\dfrac\pi2,\dfrac{3\pi}2\right]$.

### Composite expressions with a triangle

To evaluate $\cos(\arcsin x)$ with $x$ given, let $\theta=\arcsin x$. Then $\sin\theta=x$ with $\theta\in\left[-\dfrac\pi2,\dfrac\pi2\right]$, so $\cos\theta\ge0$. Therefore $\cos(\arcsin x)=+\sqrt{1-x^{2}}$. Similarly:
$$
\sin(\arccos x)=\sqrt{1-x^{2}},\qquad\cos(\arctan x)=\frac1{\sqrt{1+x^{2}}},\qquad\sin(\arctan x)=\frac x{\sqrt{1+x^{2}}}.
$$
The positive square roots are justified by the ranges: $\arcsin x$ and $\arctan x$ lie where cosine is non-negative, and $\arccos x$ lies where sine is non-negative. For numerical values, draw a right-angled triangle: for $\theta=\arcsin\dfrac5{13}$, the opposite side is $5$, the hypotenuse $13$ and the adjacent side $12$, so $\tan\theta=\dfrac5{12}$. For negative arguments, consider the quadrant carefully: $\arccos\left(-\dfrac35\right)$ lies in $\left(\dfrac\pi2,\pi\right)$, so its tangent is negative.

### Relationships between the inverse functions

**Complementary angles.** For $x\in[-1,1]$: $\arcsin x+\arccos x=\dfrac\pi2$. *Proof:* let $\theta=\arcsin x$, so $x=\sin\theta=\cos\left(\dfrac\pi2-\theta\right)$ and $\dfrac\pi2-\theta\in[0,\pi]$, which is the range of $\arccos$, so $\arccos x=\dfrac\pi2-\theta$.

**Reciprocal argument.** For $x>0$, $\arctan x+\arctan\dfrac1x=\dfrac\pi2$, and for $x<0$ the sum is $-\dfrac\pi2$. *Proof for $x>0$:* with $\theta=\arctan x\in\left(0,\dfrac\pi2\right)$, $\tan\left(\dfrac\pi2-\theta\right)=\cot\theta=\dfrac1x$, and $\dfrac\pi2-\theta\in\left(0,\dfrac\pi2\right)$, so $\arctan\dfrac1x=\dfrac\pi2-\theta$.

**Sum of arctangents.** From $\tan(A+B)$ (AHL 3.10), if $A=\arctan p$ and $B=\arctan q$ then $\tan(A+B)=\dfrac{p+q}{1-pq}$. To conclude $A+B=\arctan\dfrac{p+q}{1-pq}$, the sum $A+B$ must lie in $\left(-\dfrac\pi2,\dfrac\pi2\right)$, which is true if $pq<1$. If $pq>1$ and $p,q>0$, the sum is in $\left(\dfrac\pi2,\pi\right)$ and an extra $\pi$ must be added.

### Equations with inverse trigonometric functions

Strategy: take sine, cosine or tangent of both sides (an *equivalent* step only if it can be reversed within the ranges), solve, and *check each solution in the original equation*, because the sum of two inverse values may not lie in the principal range. For example $\arctan x+\arctan2x=\dfrac\pi4$ becomes, on taking the tangent, $\dfrac{3x}{1-2x^{2}}=1$, so $2x^{2}+3x-1=0$ and $x=\dfrac{-3\pm\sqrt{17}}4$. For the negative root, both arctangents are negative and the sum is about $-2.36\ne\dfrac\pi4$; it is *extraneous* (it satisfies the tangent equation because $\tan$ has period $\pi$ and $-\dfrac{3\pi}4$ differs from $\dfrac\pi4$ by $\pi$). Only $x=\dfrac{-3+\sqrt{17}}4\approx0.281$ works.

### Inverse of a restricted trigonometric function

To find $f^{-1}$ for $f(x)=a\sin(bx)+d$ on an interval where $f$ is one-to-one: swap, solve for $x$ with the inverse function, and note the domain of $f^{-1}$ is the range of $f$ and its range is the restricted domain of $f$. The interval must be one where $bx$ lies in $\left[-\dfrac\pi2,\dfrac\pi2\right]$ for $\arcsin$ to apply directly. For example $f(x)=3\sin2x+1$ on $\left[-\dfrac\pi4,\dfrac\pi4\right]$: $y=3\sin2x+1$, so $\sin2x=\dfrac{y-1}3$ and $x=\dfrac12\arcsin\dfrac{y-1}3$. So $f^{-1}(x)=\dfrac12\arcsin\dfrac{x-1}3$ with domain $[-2,4]$ and range $\left[-\dfrac\pi4,\dfrac\pi4\right]$.

### Relationships among the trigonometric functions

All the trigonometric functions are related by shifts and reflections:

- **Co-function:** $\sin\left(\dfrac\pi2-x\right)=\cos x$ and $\cos\left(\dfrac\pi2-x\right)=\sin x$; $\tan\left(\dfrac\pi2-x\right)=\cot x$.
- **Shifts:** $\sin\left(x+\dfrac\pi2\right)=\cos x$ and $\cos\left(x+\dfrac\pi2\right)=-\sin x$. The cosine graph is the sine graph translated left by $\dfrac\pi2$.
- **Supplementary angles:** $\sin(\pi-x)=\sin x$, $\cos(\pi-x)=-\cos x$, $\tan(\pi-x)=-\tan x$.
- **Even and odd:** $\cos(-x)=\cos x$, $\sin(-x)=-\sin x$, $\tan(-x)=-\tan x$.
- **Half-turn:** $\sin(x+\pi)=-\sin x$, $\cos(x+\pi)=-\cos x$, $\tan(x+\pi)=\tan x$.

These are the facts that the unit circle shows in one picture (SL 3.5).

### Symmetry of the graphs

- $y=\sin x$ has line symmetry about $x=\dfrac\pi2+k\pi$ (the lines through its maxima and minima), because $\sin(\pi-x)=\sin x$ gives $x\mapsto\pi-x$ symmetry about $x=\dfrac\pi2$. It has point (rotational) symmetry about $(k\pi,0)$.
- $y=\cos x$ has line symmetry about $x=k\pi$ (including the $y$-axis) and point symmetry about $\left(\dfrac\pi2+k\pi,0\right)$.
- $y=\tan x$ has point symmetry about $\left(\dfrac{k\pi}2,0\right)$ (the zeros and the points halfway between asymptotes).

The symmetries can be used to find all solutions of equations from one, and to sketch graphs from a quarter of a period. For instance, the maximum of $\sin x$ at $\dfrac\pi2$ gives the axis of symmetry used to find $x_2=\pi-x_1$.

## Worked examples

### Example 1 (exact values, 6 marks)

Find the exact values of (a) $\arcsin\dfrac12$; (b) $\arccos\left(-\dfrac12\right)$; (c) $\arctan(-1)$; (d) $\arcsin\left(-\dfrac{\sqrt3}2\right)$; (e) $\arccos0$; (f) $\arctan\sqrt3$.

*Solution.* (a) $\dfrac\pi6$. (b) $\dfrac{2\pi}3$ (the angle in $[0,\pi]$ with cosine $-\dfrac12$). (c) $-\dfrac\pi4$. (d) $-\dfrac\pi3$. (e) $\dfrac\pi2$. (f) $\dfrac\pi3$.

### Example 2 (composition outside the principal range, 6 marks)

Evaluate (a) $\arcsin\left(\sin\dfrac{5\pi}6\right)$; (b) $\arccos\left(\cos\left(-\dfrac\pi3\right)\right)$; (c) $\arctan\left(\tan\dfrac{3\pi}4\right)$; (d) $\arcsin(\sin4)$ to $3$ significant figures.

*Solution.* (a) $\sin\dfrac{5\pi}6=\dfrac12$, so the result is $\dfrac\pi6$. (b) $\cos\left(-\dfrac\pi3\right)=\dfrac12$ and $\arccos\dfrac12=\dfrac\pi3$. (c) $\tan\dfrac{3\pi}4=-1$, so the result is $-\dfrac\pi4$. (d) The angle $4$ lies in $\left[\dfrac\pi2,\dfrac{3\pi}2\right]$ (about $[1.57,4.71]$), so $\arcsin(\sin4)=\pi-4=-0.858$.

Check (d): $\sin4=-0.7568$ and $\arcsin(-0.7568)=-0.858$ ✓.

### Example 3 (domain and range, 5 marks)

Find the domain and range of $f(x)=2\arcsin\dfrac x3+1$.

*Solution.* We need $-1\le\dfrac x3\le1$, so the domain is $-3\le x\le3$. Since $\arcsin$ takes values in $\left[-\dfrac\pi2,\dfrac\pi2\right]$, the range of $f$ is $[1-\pi,\ 1+\pi]$.

### Example 4 (composites with a triangle, 8 marks)

Find the exact values of (a) $\sin\left(\arccos\dfrac35\right)$; (b) $\tan\left(\arcsin\dfrac5{13}\right)$; (c) $\cos(\arctan2)$; (d) $\sin\left(2\arctan\dfrac34\right)$.

*Solution.* (a) With $\theta=\arccos\dfrac35$, $\sin\theta=\sqrt{1-\dfrac9{25}}=\dfrac45$. (b) The triangle has opposite $5$, hypotenuse $13$, adjacent $12$: $\tan\theta=\dfrac5{12}$. (c) $\cos(\arctan2)=\dfrac1{\sqrt{1+4}}=\dfrac1{\sqrt5}$. (d) With $\theta=\arctan\dfrac34$ the triangle is $3,4,5$: $\sin\theta=\dfrac35$, $\cos\theta=\dfrac45$, so $\sin2\theta=2\cdot\dfrac35\cdot\dfrac45=\dfrac{24}{25}$.

### Example 5 (the complementary relation, 4 marks)

Prove that $\arcsin x+\arccos x=\dfrac\pi2$ for $-1\le x\le1$.

*Proof.* Let $\theta=\arcsin x$, so $\sin\theta=x$ and $-\dfrac\pi2\le\theta\le\dfrac\pi2$. Then $\cos\left(\dfrac\pi2-\theta\right)=\sin\theta=x$, and $0\le\dfrac\pi2-\theta\le\pi$ is in the range of $\arccos$. Hence $\arccos x=\dfrac\pi2-\theta$, and $\arcsin x+\arccos x=\dfrac\pi2$. $\blacksquare$

### Example 6 (reciprocal arguments, 5 marks)

Show that $\arctan x+\arctan\dfrac1x=\dfrac\pi2$ for $x>0$.

*Proof.* Let $\theta=\arctan x$, in $\left(0,\dfrac\pi2\right)$. Then $\tan\left(\dfrac\pi2-\theta\right)=\dfrac1{\tan\theta}=\dfrac1x$ and $\dfrac\pi2-\theta\in\left(0,\dfrac\pi2\right)$, so $\arctan\dfrac1x=\dfrac\pi2-\theta$. $\blacksquare$

### Example 7 (an equation, 6 marks)

Solve $\arccos x=2\arcsin x$.

*Solution.* Let $\theta=\arcsin x$. Then $\arccos x=\dfrac\pi2-\theta$, so $\dfrac\pi2-\theta=2\theta$ and $\theta=\dfrac\pi6$. Hence $x=\sin\dfrac\pi6=\dfrac12$.

Check: $\arccos\dfrac12=\dfrac\pi3$ and $2\arcsin\dfrac12=\dfrac\pi3$ ✓.

### Example 8 (a simple inverse equation, 3 marks)

Solve $\arcsin(2x)=\dfrac\pi6$.

*Solution.* $2x=\sin\dfrac\pi6=\dfrac12$, so $x=\dfrac14$. This is within the domain since $|2x|=\dfrac12\le1$.

### Example 9 (the sum of two arctangents, 6 marks)

Show that $\arctan\dfrac12+\arctan\dfrac13=\dfrac\pi4$.

*Proof.* Let $A=\arctan\dfrac12$ and $B=\arctan\dfrac13$. Then $\tan(A+B)=\dfrac{\frac12+\frac13}{1-\frac16}=1$. Both $A$ and $B$ are in $\left(0,\dfrac\pi4\right)$, so $A+B\in\left(0,\dfrac\pi2\right)$ and the only angle in this interval with tangent $1$ is $\dfrac\pi4$. $\blacksquare$

### Example 10 (an extraneous root, 8 marks)

Solve $\arctan x+\arctan2x=\dfrac\pi4$.

*Solution.* Take the tangent: $\dfrac{x+2x}{1-2x^{2}}=1$, so $3x=1-2x^{2}$ and $2x^{2}+3x-1=0$, giving $x=\dfrac{-3\pm\sqrt{17}}4$, that is, $0.281$ or $-1.78$. Check in the original equation. For $x=0.2808$: $\arctan0.2808+\arctan0.5616=0.2738+0.5112=0.7854=\dfrac\pi4$ ✓. For $x=-1.781$: both terms are negative, and the sum is $-2.356\ne\dfrac\pi4$, so this root is rejected. The solution is $x=\dfrac{-3+\sqrt{17}}4$.

### Example 11 (symmetry of graphs, 4 marks)

Use the graph of $y=\sin x$ to explain why $\sin(\pi-x)=\sin x$.

*Solution.* The graph of $y=\sin x$ has a maximum at $x=\dfrac\pi2$ and is symmetric about the vertical line $x=\dfrac\pi2$. The reflection of the point at $x$ in this line is the point at $\pi-x$, and symmetry means the heights are equal: $\sin(\pi-x)=\sin x$. This is the same fact as the second solution $\pi-\alpha$ in SL 3.8.

### Example 12 (an inverse of a restricted function, 6 marks)

The function $f(x)=3\sin2x+1$ has domain $-\dfrac\pi4\le x\le\dfrac\pi4$. Find $f^{-1}(x)$ and state its domain and range.

*Solution.* Let $y=3\sin2x+1$. Then $\sin2x=\dfrac{y-1}3$, and since $2x\in\left[-\dfrac\pi2,\dfrac\pi2\right]$, $2x=\arcsin\dfrac{y-1}3$ and $x=\dfrac12\arcsin\dfrac{y-1}3$. So $f^{-1}(x)=\dfrac12\arcsin\dfrac{x-1}3$. The domain of $f^{-1}$ is the range of $f$, which is $[-2,4]$, and the range of $f^{-1}$ is $\left[-\dfrac\pi4,\dfrac\pi4\right]$.

### Example 13 (composites with algebraic arguments, 5 marks)

Show that $\cos(\arcsin x)=\sqrt{1-x^{2}}$ and $\sin(\arctan x)=\dfrac x{\sqrt{1+x^{2}}}$.

*Proof.* Let $\theta=\arcsin x$, so $\sin\theta=x$ and $\theta\in\left[-\dfrac\pi2,\dfrac\pi2\right]$, where $\cos\theta\ge0$. From $\cos^{2}\theta=1-x^{2}$, $\cos\theta=\sqrt{1-x^{2}}$. For the second, let $\varphi=\arctan x$ with $\tan\varphi=x$ and $\cos\varphi>0$. From $\sec^{2}\varphi=1+x^{2}$, $\cos\varphi=\dfrac1{\sqrt{1+x^{2}}}$ and $\sin\varphi=\tan\varphi\cos\varphi=\dfrac x{\sqrt{1+x^{2}}}$. $\blacksquare$

### Example 14 (an angle in context, 4 marks)

A tower of height $12$ m is viewed from a point $5$ m from its base. Find the angle of elevation of the top in radians and in degrees.

*Solution.* $\theta=\arctan\dfrac{12}5=1.18$ radians, or $67.4^{\circ}$.

## Using your GDC

The keys $\sin^{-1}$, $\cos^{-1}$ and $\tan^{-1}$ give the principal values and are the arcsine, arccosine and arctangent. Check the mode: in radian mode the answer is in radians. To sketch $y=\arcsin x$, plot $\sin^{-1}(x)$ with $x$ from $-1$ to $1$ and notice the graph stops there (the calculator gives an error outside $[-1,1]$). To verify a composition, evaluate both sides: for example $\sin^{-1}(\sin4)$ should give $-0.858$, not $4$. For equations such as $\arctan x+\arctan2x=\dfrac\pi4$, graph the left side and the constant $\dfrac\pi4$ and use *intersect*: this finds only the genuine roots, so it is also a check against extraneous solutions. To check that $\arctan x+\arctan\dfrac1x$ is constant, plot it and observe it is $\dfrac\pi2$ for $x>0$ and $-\dfrac\pi2$ for $x<0$. Menu names vary by model.

## Common mistakes

1. **Confusing $\sin^{-1}x$ with $\dfrac1{\sin x}$.**
2. **Saying $\arcsin(\sin x)=x$ for all $x$.** It holds only for $x\in\left[-\dfrac\pi2,\dfrac\pi2\right]$.
3. **Wrong range**: for example giving $\arccos$ a range of $\left[-\dfrac\pi2,\dfrac\pi2\right]$.
4. **Negative square root** in $\cos(\arcsin x)$: the cosine of an angle in the range of $\arcsin$ is never negative.
5. **Forgetting the quadrant** for $\tan(\arccos x)$ with $x<0$.
6. **Not checking the roots** of equations obtained by taking tangents of both sides.
7. **Using degrees in an arctangent identity** where $\dfrac\pi2$ appears.
8. **Domain errors**: $\arcsin3$ does not exist.

## Exam technique and command terms

**State the domain and range** requires intervals with the correct brackets (for $\arctan$ the range has open ends). **Sketch** requires end points or asymptotes with their coordinates and the shape (increasing or decreasing). **Show that** needs a proof based on the definition (let $\theta=\arcsin x$ and work with $\theta$). **Find the exact value** requires a standard angle or a triangle. **Solve** requires a check against the domain and range.

The universal technique for composites is to give the inner function a name: "Let $\theta=\arcsin x$, so $\sin\theta=x$ and $-\dfrac\pi2\le\theta\le\dfrac\pi2$". Everything else follows from the constraints on $\theta$. This also ensures the signs are right. For an equation with two inverse functions, name each angle and use compound-angle identities. When asked for an inverse of a trigonometric function on a restricted domain, state the domain and range of the inverse, since marks are allocated to them.

## Connections

SL 2.9 provided inverse functions and their graphs as reflections in $y=x$, and SL 3.5 the unit circle where the principal-value range is read off. SL 3.8 solved equations with the calculator's inverse keys and found the second solution by symmetry, which this chapter explains as symmetry of graphs. AHL 3.9 gave the reciprocal ratios (and the notational warning about $\sin^{-1}$), and AHL 3.10 the compound-angle identities used here in the sum of arctangents. AHL 2.14 treated even and odd functions and restricted domains for inverses. In AHL 1.13 and 1.14 the argument of a complex number is computed with $\arctan\dfrac ba$ adjusted for the quadrant, the same quadrant care as in Example 2. In Unit 5, $\dfrac d{dx}\arcsin x=\dfrac1{\sqrt{1-x^{2}}}$ and $\dfrac d{dx}\arctan x=\dfrac1{1+x^{2}}$ are derived by implicit differentiation using the composites of Example 13, and the corresponding antiderivatives are used in HL integration. In AHL 3.12 to 3.18, angles between vectors are found with $\cos^{-1}$, and the principal range $[0,\pi]$ is exactly the range of angles between vectors.

## Check your understanding

1. Find the exact values of $\arcsin\left(-\dfrac12\right)$, $\arccos\dfrac{\sqrt2}2$ and $\arctan\dfrac1{\sqrt3}$.
2. Evaluate exactly $\arcsin\left(\sin\dfrac{7\pi}6\right)$, $\arccos\left(\cos\dfrac{5\pi}4\right)$ and $\arctan\left(\tan\dfrac{5\pi}6\right)$.
3. State the domain and range of $f(x)=\arccos(2x-1)$.
4. Find the exact values of $\cos\left(\arcsin\dfrac5{13}\right)$, $\tan\left(\arccos\left(-\dfrac35\right)\right)$ and $\sin\left(2\arcsin\dfrac35\right)$.
5. Show that $\sin(\arctan x)=\dfrac x{\sqrt{1+x^{2}}}$ for all real $x$.
6. Show that $\arctan2+\arctan3=\dfrac{3\pi}4$.
7. Solve $2\arctan x=\dfrac\pi3$.
8. Solve $\arctan x+\arctan3x=\dfrac\pi4$, rejecting any extraneous root.
9. The function $f(x)=2\cos\dfrac x3$ has domain $0\le x\le3\pi$. Find $f^{-1}(x)$ and state its domain and range.
10. A ramp rises $1.5$ m over a horizontal distance of $6$ m. Find the angle of the ramp with the horizontal in radians and in degrees.

### Answers

1. $-\dfrac\pi6$, $\dfrac\pi4$ and $\dfrac\pi6$.
2. $\sin\dfrac{7\pi}6=-\dfrac12$, so $-\dfrac\pi6$. $\cos\dfrac{5\pi}4=-\dfrac{\sqrt2}2$, so $\dfrac{3\pi}4$. $\tan\dfrac{5\pi}6=-\dfrac1{\sqrt3}$, so $-\dfrac\pi6$.
3. Need $-1\le2x-1\le1$, so the domain is $0\le x\le1$, and the range is $[0,\pi]$.
4. $\cos=\dfrac{12}{13}$. For $\theta=\arccos\left(-\dfrac35\right)$ in the second quadrant, $\sin\theta=\dfrac45$ and $\tan\theta=-\dfrac43$. With $\varphi=\arcsin\dfrac35$, $\cos\varphi=\dfrac45$ and $\sin2\varphi=2\cdot\dfrac35\cdot\dfrac45=\dfrac{24}{25}$.
5. Let $\varphi=\arctan x\in\left(-\dfrac\pi2,\dfrac\pi2\right)$, so $\cos\varphi>0$ and $\sec^{2}\varphi=1+x^{2}$, giving $\cos\varphi=\dfrac1{\sqrt{1+x^{2}}}$. Then $\sin\varphi=\tan\varphi\cos\varphi=\dfrac x{\sqrt{1+x^{2}}}$. $\blacksquare$
6. Let $A=\arctan2$ and $B=\arctan3$. $\tan(A+B)=\dfrac{5}{1-6}=-1$. Both are in $\left(\dfrac\pi4,\dfrac\pi2\right)$, so $A+B\in\left(\dfrac\pi2,\pi\right)$, where the angle with tangent $-1$ is $\dfrac{3\pi}4$. $\blacksquare$
7. $\arctan x=\dfrac\pi6$, so $x=\tan\dfrac\pi6=\dfrac1{\sqrt3}$.
8. $\tan$ of both sides: $\dfrac{4x}{1-3x^{2}}=1$, so $3x^{2}+4x-1=0$ and $x=\dfrac{-2\pm\sqrt7}3$. For $x=\dfrac{-2+\sqrt7}3=0.215$ the sum is $0.2121+0.5732=0.7854$ ✓. For $x=\dfrac{-2-\sqrt7}3=-1.549$ the sum is negative ($-2.356$), so it is rejected. So $x=\dfrac{-2+\sqrt7}3$.
9. Let $y=2\cos\dfrac x3$. With $0\le\dfrac x3\le\pi$, $\dfrac x3=\arccos\dfrac y2$, so $f^{-1}(x)=3\arccos\dfrac x2$. Domain $[-2,2]$, range $[0,3\pi]$.
10. $\theta=\arctan\dfrac{1.5}6=\arctan0.25=0.245$ radians, or $14.0^{\circ}$.

## Summary

- $\arcsin:[-1,1]\to\left[-\dfrac\pi2,\dfrac\pi2\right]$, $\arccos:[-1,1]\to[0,\pi]$, $\arctan:\mathbb{R}\to\left(-\dfrac\pi2,\dfrac\pi2\right)$; the graphs are reflections of the restricted trigonometric graphs in $y=x$.
- $\sin(\arcsin x)=x$ on $[-1,1]$, but $\arcsin(\sin x)=x$ only on $\left[-\dfrac\pi2,\dfrac\pi2\right]$ (similarly for the others).
- Composites: name the inner angle, use its range to fix signs: $\cos(\arcsin x)=\sqrt{1-x^{2}}$, $\cos(\arctan x)=\dfrac1{\sqrt{1+x^{2}}}$.
- $\arcsin x+\arccos x=\dfrac\pi2$; $\arctan x+\arctan\dfrac1x=\dfrac\pi2$ for $x>0$.
- Check solutions of equations with inverse functions for extraneous roots.
- Co-function, supplementary and shift relations: $\sin\left(\dfrac\pi2-x\right)=\cos x$, $\sin(\pi-x)=\sin x$, $\sin\left(x+\dfrac\pi2\right)=\cos x$; the graphs have line and point symmetries that explain them.
