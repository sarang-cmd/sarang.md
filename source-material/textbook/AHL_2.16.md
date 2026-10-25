# Modulus equations and inequalities

> **AHL 2.16 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define the modulus (absolute value) as a piecewise function and as a distance on the number line;
- sketch the graphs of $y=|f(x)|$ and $y=f(|x|)$ from the graph of $y=f(x)$, and distinguish between them;
- solve equations such as $|ax+b|=c$, $|f(x)|=|g(x)|$ and $|f(x)|=g(x)$, rejecting invalid solutions;
- solve inequalities $|x-a|<b$, $|x-a|>b$ and their non-strict forms, writing the answer as intervals;
- solve $|f(x)|<|g(x)|$ by squaring, and understand why that is valid;
- solve equations and inequalities with more than one modulus by splitting into cases or by a graph;
- apply the triangle inequality and interpret the modulus in a distance or tolerance context.

## Why this topic matters

The modulus measures *size without direction*. When an engineer says that a part must be within $0.3$ mm of its nominal length, she writes $|L-50|\le0.3$. When a statistician talks about the size of an error, or a physicist about the speed (the magnitude of a velocity), the modulus is at work. In pure mathematics, the same function underlies the definition of distance, the limit (the statement that $|f(x)-L|$ can be made small), the size of a complex number (AHL 1.12) and the length of a vector (AHL 3.12). The modulus gives graphs with sharp corners and equations that need *cases*, which is why it is classified as an extension topic. In the examination, you will often see a short question that tests whether you can sketch $|f(x)|$, solve a modulus equation with a check for extraneous solutions, or solve an inequality by two methods. The questions are very manageable when you have a systematic method, and they are a rich source of method marks.

## Core ideas

### Definition and meaning

The **modulus** (or absolute value) of a real number $x$ is
$$
|x|=\begin{cases}x,&x\ge0,\\-x,&x<0.\end{cases}
$$
Geometrically, $|x|$ is the distance of $x$ from $0$ on the number line, and more generally $|x-a|$ is the **distance between $x$ and $a$**. This second reading is the key to understanding inequalities: $|x-3|<5$ means "the distance from $x$ to $3$ is less than $5$", so $x$ is in the interval $(-2,8)$. The modulus is never negative, $|x|\ge0$, with $|x|=0$ only if $x=0$. Useful properties: $|ab|=|a||b|$, $\left|\dfrac ab\right|=\dfrac{|a|}{|b|}$ ($b\ne0$), $|-a|=|a|$, and $|a|^{2}=a^{2}$. Note that $\sqrt{a^{2}}=|a|$, not $a$.

### The graph of $y=|f(x)|$

To sketch $y=|f(x)|$ from the graph of $y=f(x)$: keep the parts of the graph on or above the $x$-axis unchanged, and **reflect the parts below the $x$-axis in the $x$-axis**. The result lies entirely on or above the axis. The $x$-intercepts are unchanged, but the graph now has a sharp corner (a cusp or a V-shape) wherever $f$ crosses the axis at a nonzero slope. The $y$-intercept becomes $|f(0)|$. For $y=|x^{2}-4|$: the parabola $x^{2}-4$ is below the axis for $-2<x<2$, so that part is reflected, giving a local maximum at $(0,4)$ and corners at $(\pm2,0)$. The range is $y\ge0$.

### The graph of $y=f(|x|)$

To sketch $y=f(|x|)$: keep the part of the graph for $x\ge0$, **discard the part for $x<0$**, and replace it with the reflection in the $y$-axis of the part for $x\ge0$. The result is always symmetric about the $y$-axis (an even function). For $f(x)=x-2$, $f(|x|)=|x|-2$ is a V-shape with zeros at $x=\pm2$ and $y$-intercept $-2$, unlike $|x-2|$, which is a V with its vertex at $x=2$. The two operations are different and are commonly confused: $|f(x)|$ changes the *output*, while $f(|x|)$ changes the *input*.

### Solving $|f(x)|=k$

For a constant $k$:

- if $k>0$, $|f(x)|=k\iff f(x)=k$ or $f(x)=-k$;
- if $k=0$, $f(x)=0$;
- if $k<0$, there are no solutions, since a modulus is never negative.

So $|2x-3|=7$ means $2x-3=7$ or $2x-3=-7$, giving $x=5$ or $x=-2$. For $|x^{2}-4|=3$, solve $x^{2}-4=3$ (giving $x=\pm\sqrt7$) and $x^{2}-4=-3$ (giving $x=\pm1$), four solutions in all.

### Solving $|f(x)|=|g(x)|$

Two numbers have the same modulus if they are equal or negatives of each other:
$$
|f(x)|=|g(x)|\iff f(x)=g(x)\ \text{ or }\ f(x)=-g(x).
$$
Both cases give genuine solutions, and no check is needed. Alternatively, square both sides: $f(x)^{2}=g(x)^{2}$, which is equivalent because both sides are non-negative.

### Solving $|f(x)|=g(x)$

When the right side is a function of $x$, the equation requires $g(x)\ge0$. Solve the two cases $f(x)=g(x)$ and $f(x)=-g(x)$, then **check each solution** against $g(x)\ge0$ (or in the original equation). For example $|x-1|=2x-5$ needs $2x-5\ge0$, i.e. $x\ge2.5$. The case $x-1=2x-5$ gives $x=4$, which satisfies the condition. The case $x-1=-(2x-5)$ gives $x=2$, which fails since $2x-5=-1<0$. So the only solution is $x=4$. A graph shows the same: the line $y=2x-5$ meets the V of $|x-1|$ once.

### Basic inequalities

For a constant $b>0$:
$$
|x-a|<b\iff -b<x-a<b\iff a-b<x<a+b,
$$
$$
|x-a|>b\iff x-a<-b\ \text{ or }\ x-a>b\iff x<a-b\ \text{ or }\ x>a+b.
$$
The non-strict versions use $\le$ and $\ge$ and include the end points. The first is a single interval centred on $a$ with radius $b$, and the second is the complement of that interval, two rays. For a more complicated inside, such as $|2x+1|\le5$, write $-5\le2x+1\le5$ and solve the compound inequality. If $b<0$: $|x-a|<b$ has no solutions and $|x-a|>b$ is true for all $x$.

### Inequalities between two moduli

For $|f(x)|<|g(x)|$ (or $\le$), **square both sides**. This is valid because both sides are non-negative, and for non-negative numbers $A<B\iff A^{2}<B^{2}$. Thus
$$
|f(x)|<|g(x)|\iff f(x)^{2}<g(x)^{2}\iff \big(f(x)-g(x)\big)\big(f(x)+g(x)\big)<0,
$$
a polynomial inequality solved by a sign diagram (AHL 2.15). Squaring is not a safe step if one side can be negative, so do not square $|f(x)|>g(x)$ without separate treatment of the sign of $g(x)$.

### Inequalities with a variable right-hand side

For $|f(x)|<g(x)$, we need $g(x)>0$ and $-g(x)<f(x)<g(x)$. For $|f(x)|>g(x)$, the inequality is automatically true wherever $g(x)<0$, and for $g(x)\ge0$ it means $f(x)<-g(x)$ or $f(x)>g(x)$. A graphical solution is often the clearest: draw $y=|f(x)|$ and $y=g(x)$ and read the intervals.

### More than one modulus: cases

When an expression has several moduli, such as $|x+1|+|x-3|$, the critical points are where each expression inside is zero ($x=-1$ and $x=3$). These split the number line into intervals. On each interval, each modulus is replaced by $\pm$ its inside, and a linear (or other) equation is solved. A solution is valid only if it lies in the interval being considered. The distance picture helps: $|x+1|+|x-3|$ is the sum of the distances from $x$ to $-1$ and to $3$, which is at least the distance $4$ between those two points, with equality exactly when $x$ is between them.

### The triangle inequality

For all real (and complex) numbers $a$ and $b$,
$$
|a+b|\le|a|+|b|,
$$
with equality when $a$ and $b$ have the same sign (or one is zero). It says that the length of one side of a triangle is at most the sum of the other two; the same inequality holds for vectors and complex numbers. A related result is $\big||a|-|b|\big|\le|a-b|$.

### Modelling: tolerance and distance

A condition "within $t$ of $c$" is $|x-c|\le t$, giving $c-t\le x\le c+t$. In a context, say what the interval means, with units. In problems about the distance between a variable point and two fixed points, the sums of the moduli represent total distance.

## Worked examples

### Example 1 (a basic equation, 3 marks)

Solve $|2x-3|=7$.

*Solution.* $2x-3=7$ gives $x=5$, and $2x-3=-7$ gives $x=-2$. So $x=5$ or $x=-2$.

Check: $|2(5)-3|=7$ ✓ and $|2(-2)-3|=|-7|=7$ ✓.

### Example 2 (two moduli, 5 marks)

Solve $|x+2|=|2x-1|$.

*Solution.* Either $x+2=2x-1$, giving $x=3$, or $x+2=-(2x-1)$, giving $3x=-1$ and $x=-\dfrac13$. Both are valid: $|5|=|5|$ and $\left|\dfrac53\right|=\left|-\dfrac53\right|$.

### Example 3 (a variable right-hand side, 6 marks)

Solve $|x-1|=2x-5$.

*Solution.* The right side must be non-negative: $2x-5\ge0$, so $x\ge\dfrac52$. Case 1: $x-1=2x-5$ gives $x=4$, which satisfies $x\ge2.5$. Case 2: $x-1=-(2x-5)=5-2x$ gives $3x=6$ and $x=2$, which does not satisfy $x\ge2.5$. So $x=2$ is extraneous. The only solution is $x=4$.

Check: $|4-1|=3$ and $2(4)-5=3$ ✓. For $x=2$: $|1|=1$ but $2(2)-5=-1$ ✗.

### Example 4 (a quadratic inside, 5 marks)

Solve $|x^{2}-4|=3$.

*Solution.* $x^{2}-4=3$ gives $x^{2}=7$ and $x=\pm\sqrt7$. $x^{2}-4=-3$ gives $x^{2}=1$ and $x=\pm1$. The four solutions are $x=\pm\sqrt7$ and $x=\pm1$.

### Example 5 (basic inequalities, 5 marks)

Solve (a) $|x-3|<5$; (b) $|x-3|\ge5$.

*Solution.* (a) $-5<x-3<5$ gives $-2<x<8$. (b) The complement, including the end points: $x\le-2$ or $x\ge8$.

### Example 6 (two moduli, inequality, 7 marks)

Solve $|2x+1|\le|x-4|$.

*Solution.* Both sides are non-negative, so squaring is valid: $(2x+1)^{2}\le(x-4)^{2}$. Then $4x^{2}+4x+1\le x^{2}-8x+16$, so $3x^{2}+12x-15\le0$ and $x^{2}+4x-5\le0$, i.e. $(x+5)(x-1)\le0$. The solution is $-5\le x\le1$.

Check $x=0$: $|1|=1\le|-4|=4$ ✓. Check $x=2$: $5\le2$ is false ✓ (excluded).

### Example 7 (two moduli added, 7 marks)

Solve $|x+1|+|x-3|=6$.

*Solution.* The critical points are $-1$ and $3$. For $x\ge3$: $(x+1)+(x-3)=2x-2=6$ gives $x=4$ (valid, $4\ge3$). For $-1\le x<3$: $(x+1)-(x-3)=4$, and $4=6$ is false: no solution. For $x<-1$: $-(x+1)-(x-3)=-2x+2=6$ gives $x=-2$ (valid, $-2<-1$). So $x=-2$ or $x=4$.

Check: $|-1|+|-5|=6$ ✓ and $|5|+|1|=6$ ✓. Note that the minimum value of the left side is $4$, which is the distance between $-1$ and $3$.

### Example 8 (a modulus of a quadratic, 6 marks)

Solve $|x^{2}-2x|<3$.

*Solution.* $-3<x^{2}-2x<3$. The right inequality $x^{2}-2x-3<0$ gives $(x-3)(x+1)<0$, so $-1<x<3$. The left inequality $x^{2}-2x+3>0$ holds for all $x$ since $\Delta=4-12<0$. So $-1<x<3$.

Check $x=0$: $0<3$ ✓. Check $x=3$: $|9-6|=3$, not $<3$, correctly excluded.

### Example 9 (sketching $|f(x)|$, 4 marks)

Describe the graph of $y=|x^{2}-4|$ and state its range.

*Solution.* Take $y=x^{2}-4$, which has zeros at $\pm2$, $y$-intercept $-4$ and is negative for $-2<x<2$. Reflect that part in the $x$-axis: the graph has corners at $(-2,0)$ and $(2,0)$ and a local maximum at $(0,4)$ between them. The branches for $|x|>2$ are unchanged. The range is $y\ge0$.

### Example 10 (a line and a V, 6 marks)

Solve $|2x-1|=x+1$.

*Solution.* We need $x+1\ge0$, so $x\ge-1$. Case 1: $2x-1=x+1$ gives $x=2$ ✓. Case 2: $2x-1=-(x+1)$ gives $3x=0$ and $x=0$ ✓ (both satisfy $x\ge-1$). Solutions $x=0$ and $x=2$.

Check: $|-1|=1$ and $0+1=1$ ✓; $|3|=3$ and $2+1=3$ ✓.

### Example 11 (an inequality with a variable right side, 7 marks)

Solve $|x-2|>x$.

*Solution.* If $x<0$ the right side is negative and the modulus is non-negative, so the inequality holds for all $x<0$. For $0\le x<2$: $|x-2|=2-x>x$ gives $x<1$, so $0\le x<1$. For $x\ge2$: $x-2>x$ is false. Combining: $x<1$.

Check $x=0.5$: $1.5>0.5$ ✓. Check $x=1.5$: $0.5>1.5$ is false ✓. Check $x=-1$: $3>-1$ ✓.

### Example 12 (a tolerance, 4 marks)

A steel rod has nominal length $50$ mm and is accepted if its length $L$ satisfies $|L-50|\le0.3$. State the range of acceptable lengths and decide whether a rod of $49.6$ mm is accepted.

*Solution.* $-0.3\le L-50\le0.3$ gives $49.7\le L\le50.3$. The rod of $49.6$ mm has $|49.6-50|=0.4>0.3$, so it is rejected.

### Example 13 (the triangle inequality, 4 marks)

Show that $|x+1|+|x-3|\ge4$ for all real $x$.

*Solution.* By the triangle inequality, $|(x+1)+(3-x)|\le|x+1|+|3-x|$, and $|3-x|=|x-3|$. The left side is $|4|=4$. So $|x+1|+|x-3|\ge4$, with equality for $-1\le x\le3$.

## Using your GDC

The GDC has an absolute-value function, usually written $\text{abs}(\ )$ in the function menu. Graph $y=\text{abs}(f(x))$ and compare it with $y=f(x)$, and graph $y=f(\text{abs}(x))$ to see the difference. To solve $|f(x)|=g(x)$, plot both sides and use *intersect* for each crossing; the extraneous solutions of the algebraic method simply never appear as intersections, so the GDC is a useful check. For inequalities, read the intervals where one graph lies above the other, including the end points where required. For double-modulus equations, plot the combined function $y=\text{abs}(x+1)+\text{abs}(x-3)$ and the horizontal line, and check the intersections. Remember that near the corners, the graph is not smooth, and the *zero* tool may need a good starting bracket. A GDC gives decimals: if exact values are required, use algebra. Menu names vary by model.

## Common mistakes

1. **Missing the second case** of $|f(x)|=k$, finding only $f(x)=k$.
2. **Not rejecting extraneous solutions** of $|f(x)|=g(x)$, when $g(x)<0$.
3. **Confusing $|f(x)|$ and $f(|x|)$** in sketches: one reflects below the axis, the other reflects the right half.
4. **Wrong form of the inequality**: writing $|x-3|>5$ as $-5>x-3>5$, or as a single interval.
5. **Squaring when a side may be negative**, in $|f|>g$ for example.
6. **Treating $\sqrt{x^{2}}$ as $x$** instead of $|x|$.
7. **Case boundaries**: not checking that each solution lies in the case interval it was found in.
8. **Writing $|a+b|=|a|+|b|$**; this holds only if $a$ and $b$ have the same sign (or one is zero).

## Exam technique and command terms

**Solve** a modulus equation or inequality needs the cases clearly separated and checked. **Sketch** $y=|f(x)|$ requires the reflection of the negative portion, with intercepts, corners and any turning points labelled. **Hence** might link a sketch to the solution of an equation $|f(x)|=k$ and the number of solutions as $k$ varies. **Find the set of values** requires an answer as intervals. **Show that** might need the triangle inequality or a case analysis. For equations, consider the sign of the right-hand side first, because it quickly restricts the possibilities. For double-modulus problems, draw the number line with the critical points and work through each interval.

Whenever two methods are available (cases, squaring, graph), choose the one you trust most and use a second as a check. Squaring is efficient for $|f|=|g|$ and $|f|<|g|$; cases are best when moduli are added; the graph is best for $|f|=g$ and for questions asking for the number of solutions. In your final answer, present intervals correctly, using "or" for union.

## Connections

SL 2.11 supplied reflections $y=-f(x)$ and $y=f(-x)$, which are the basis for the graphs of $|f(x)|$ and $f(|x|)$. SL 2.7 and AHL 2.15 supplied quadratic and rational inequality methods, which are used when squaring leads to a quadratic inequality, and AHL 2.14 explains why $f(|x|)$ is always even. The distance interpretation links to SL 2.1 (distance between points) and SL 3.1. AHL 1.12 defines the modulus of a complex number $|z|=\sqrt{a^{2}+b^{2}}$, whose properties include the triangle inequality, and AHL 3.12 defines the magnitude of a vector. In Unit 5, the function $|x|$ is continuous but not differentiable at $0$, which shows why corners matter, and $\int\dfrac1x\,dx=\ln|x|+C$ needs the modulus. Integrals of $|f(x)|$ require splitting at the zeros of $f$. In Unit 4, the absolute error, the mean absolute deviation and the two-tailed tests with $|Z|>z_{c}$ all use the modulus.

## Check your understanding

1. Solve $|3x+2|=11$.
2. Solve $|x-4|=|2x+1|$.
3. Solve $|x+1|=3x-5$.
4. Solve $|x^{2}-9|=7$.
5. Solve $|2x-1|<7$.
6. Solve $|x+3|\ge|2x-1|$.
7. Solve $|x-2|+|x+1|=7$.
8. Solve $|x-3|<x$.
9. Sketch $y=|x^{2}-9|$ and state the intercepts and the range.
10. A component has nominal length $120$ mm and is accepted if $|L-120|\le0.5$. State the acceptable interval and its width.

### Answers

1. $3x+2=11$ gives $x=3$, and $3x+2=-11$ gives $x=-\dfrac{13}3$.
2. $x-4=2x+1$ gives $x=-5$, and $x-4=-(2x+1)$ gives $3x=3$, so $x=1$. Check: $|-9|=|-9|$ ✓ and $|-3|=|3|$ ✓.
3. Need $3x-5\ge0$, so $x\ge\dfrac53$. Case $x+1=3x-5$ gives $x=3$ ✓. Case $x+1=-(3x-5)$ gives $4x=4$, $x=1$, which fails $x\ge\dfrac53$. So $x=3$.
4. $x^{2}-9=7$ gives $x=\pm4$; $x^{2}-9=-7$ gives $x^{2}=2$, $x=\pm\sqrt2$.
5. $-7<2x-1<7$ gives $-6<2x<8$, so $-3<x<4$.
6. Squaring: $x^{2}+6x+9\ge4x^{2}-4x+1$, so $3x^{2}-10x-8\le0$, i.e. $(3x+2)(x-4)\le0$, giving $-\dfrac23\le x\le4$.
7. For $x\ge2$: $2x-1=7$ gives $x=4$ ✓. For $-1\le x<2$: the sum is $3\ne7$. For $x<-1$: $-2x+1=7$ gives $x=-3$ ✓. So $x=-3$ or $x=4$.
8. Need $x>0$. $-x<x-3<x$: the right inequality always holds and the left gives $x>\dfrac32$. So $x>\dfrac32$. Check $x=2$: $1<2$ ✓; $x=1$: $2<1$ ✗.
9. Take $y=x^{2}-9$ and reflect the part below the axis for $-3<x<3$. Intercepts: $x$-intercepts $(\pm3,0)$ and $y$-intercept $(0,9)$, which is a local maximum. The range is $y\ge0$.
10. $119.5\le L\le120.5$, so the interval has width $1$ mm.

## Summary

- $|x|$ is the distance from $0$, and $|x-a|$ is the distance from $a$. $\sqrt{x^{2}}=|x|$.
- $y=|f(x)|$ reflects the part of the graph below the $x$-axis upwards. $y=f(|x|)$ keeps the right half and reflects it in the $y$-axis.
- $|f|=k$ gives $f=\pm k$ (none if $k<0$). $|f|=|g|$ gives $f=\pm g$. $|f|=g$ needs $g\ge0$, so check the solutions.
- $|x-a|<b\iff a-b<x<a+b$; $|x-a|>b\iff x<a-b$ or $x>a+b$.
- Square both sides for $|f|<|g|$ (both non-negative). Use cases for several moduli, split at the critical points, and check each solution lies in its interval.
- Triangle inequality: $|a+b|\le|a|+|b|$. A tolerance $|x-c|\le t$ is the interval $[c-t,c+t]$.
