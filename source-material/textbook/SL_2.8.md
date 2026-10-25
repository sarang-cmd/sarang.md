# Reciprocal and simple rational functions

> **SL 2.8 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- sketch $y=\dfrac1x$ and $y=\dfrac ax$, and describe the effect of $a$;
- identify the vertical and horizontal asymptotes of $f(x)=\dfrac a{x-h}+k$ and use them to sketch the graph;
- rewrite a function $\dfrac{ax+b}{cx+d}$ in the form $p+\dfrac q{x-h}$ by division or by splitting the numerator;
- state the domain and range of a simple rational function, and find its intercepts;
- find the inverse of $\dfrac{ax+b}{cx+d}$ and recognise a self-inverse case;
- solve equations and inequalities involving simple rational functions, graphically and algebraically;
- model inverse proportion and average-cost situations, and interpret asymptotes in context.

## Why this topic matters

Whenever one quantity is inversely proportional to another, the reciprocal function appears: time is distance divided by speed, current is voltage divided by resistance, and pressure is inversely proportional to volume at a fixed temperature. In economics, the *average cost* of producing $n$ items, with a fixed cost to be spread over them, falls as $\dfrac{\text{fixed cost}}n$ plus a unit cost. These situations all share a common shape with *asymptotes*: lines the graph approaches but never touches, which in context represent limits and impossibilities. This chapter is also your first meeting with functions that are not continuous: the graph has two separate branches with a break at the asymptote. That has consequences for domain, range, inverses and inequalities. In the IB course, simple rational functions of the form $\dfrac{ax+b}{cx+d}$ appear in SL 2.8, and their more general relatives in AHL 2.13 and 2.15. Questions are generally accessible, and the key to full marks is clear sketches with asymptotes and a systematic method for sign analysis.

## Core ideas

### The reciprocal function

The basic function is $f(x)=\dfrac1x$ with domain $x\ne0$. Its graph is a **hyperbola** with two branches: one in the first quadrant ($x>0,y>0$) and one in the third ($x<0,y<0$). The axes are asymptotes: as $x\to0^{+}$, $f(x)\to+\infty$; as $x\to0^{-}$, $f(x)\to-\infty$; and as $x\to\pm\infty$, $f(x)\to0$. The range is $y\ne0$. The function is **self-inverse** ($f(f(x))=x$) and **odd** ($f(-x)=-f(x)$), and its graph is symmetric about both the line $y=x$ and the origin.

The graph of $y=\dfrac ax$ has the same asymptotes. For $a>0$, the branches are in quadrants 1 and 3, and larger $a$ pushes them further from the axes. For $a<0$, they are in quadrants 2 and 4. The product $xy=a$ is constant along the curve, which is the algebraic expression of inverse proportionality.

### Translations: $f(x)=\dfrac a{x-h}+k$

Applying the translation rules (SL 2.11) to $y=\dfrac ax$ gives the general form
$$
f(x)=\frac a{x-h}+k.
$$
The graph is that of $\dfrac ax$ translated by $h$ units right and $k$ units up. Hence:

- **vertical asymptote:** $x=h$ (where the denominator is zero);
- **horizontal asymptote:** $y=k$ (the value approached as $x\to\pm\infty$);
- **domain:** $x\ne h$; **range:** $y\ne k$;
- **$y$-intercept:** $f(0)=-\dfrac ah+k$ (if $h\ne0$);
- **$x$-intercept:** $\dfrac a{x-h}=-k$, so $x=h-\dfrac ak$ (if $k\ne0$).

The two asymptotes cross at $(h,k)$, the centre of symmetry of the hyperbola. For $a>0$ the branches lie in the upper-right and lower-left regions defined by the asymptotes, and for $a<0$ in the other two regions.

### From $\dfrac{ax+b}{cx+d}$ to $p+\dfrac q{x-h}$

A function of the form $f(x)=\dfrac{ax+b}{cx+d}$ with $c\ne0$ and $ad-bc\ne0$ is a translated reciprocal function. To find the asymptotes without sketching, you can use the shortcuts: the vertical asymptote is where $cx+d=0$, so $x=-\dfrac dc$; the horizontal asymptote is $y=\dfrac ac$, the ratio of leading coefficients. To rewrite it in the translated form, divide, or split the numerator in terms of the denominator. For example
$$
\frac{3x+1}{x-2}=\frac{3(x-2)+7}{x-2}=3+\frac7{x-2}.
$$
Now the structure is visible: $a=7$, $h=2$, $k=3$. This form is the best for sketching, for finding the range and for describing transformations. If $ad-bc=0$, the fraction simplifies to a constant (for example $\dfrac{2x+4}{x+2}=2$ for $x\ne-2$), and the graph is a horizontal line with a hole, not a hyperbola.

### Domain and range

The domain excludes the root of the denominator, and the range excludes the horizontal asymptote value: $x\ne-\dfrac dc$ and $y\ne\dfrac ac$. The excluded range value is never attained because the equation $y_0=\dfrac{ax+b}{cx+d}$ with $y_0=\dfrac ac$ leads to $ad=bc$, which is false for a genuine hyperbola.

### The inverse of $\dfrac{ax+b}{cx+d}$

Because the translated hyperbola is one-to-one on its domain, it has an inverse, which is again of the same type. To find it, use the swap-and-solve method of SL 2.5 with a careful factorisation. For $f(x)=\dfrac{3x+1}{x-2}$: $y(x-2)=3x+1$, so $xy-2y=3x+1$, hence $x(y-3)=1+2y$ and
$$
f^{-1}(x)=\frac{2x+1}{x-3},\qquad x\ne3.
$$
Notice that the domain of $f^{-1}$ (the excluded value $3$) is the horizontal asymptote of $f$, and the vertical asymptote of $f^{-1}$ is the horizontal asymptote of $f$, reflecting the symmetry in $y=x$. A rational function of this type is **self-inverse** when $d=-a$, i.e. when the numerator coefficient of $x$ and the denominator constant are negatives of each other, such as $\dfrac{x+3}{x-1}$ or $\dfrac{2x-1}{x-2}$ (the check being $f(f(x))=x$).

### Solving equations

To solve an equation such as $\dfrac{3x+1}{x-2}=x$, note the excluded value, clear the denominator, solve the resulting quadratic (SL 2.7), and check each solution against the excluded value. Graphically, plot both sides and find the intersections. Equations with a single reciprocal term, like $\dfrac4x=x+3$, are quickly reduced to quadratics: $4=x^{2}+3x$.

### Solving inequalities

An inequality such as $\dfrac3{x-1}<2$ must be handled with great care because multiplying by $x-1$ requires you to know its sign. There are two safe methods:

1. **Graphical.** Plot $y=\dfrac3{x-1}$ and $y=2$, find where they meet ($x=2.5$), and read the intervals where the hyperbola is below the line. For $x>1$ the curve falls from $+\infty$ and is below $2$ when $x>2.5$. For $x<1$ the curve is negative, hence always below $2$. So the solution is $x<1$ or $x>2.5$.
2. **Algebraic (sign diagram).** Move everything to one side, combine into a single fraction, and determine the sign of numerator and denominator in each interval between the critical values (the zeros of the numerator and denominator). This method is developed fully in AHL 2.15.

Never multiply both sides by an expression containing $x$ without splitting into cases for its sign; that is the standard route to wrong answers.

### Modelling with reciprocal functions

In *inverse proportion*, $y=\dfrac kx$, and the constant $k$ is the product $xy$. The *average cost* function $C(n)=\dfrac{F+vn}{n}=v+\dfrac Fn$ has a horizontal asymptote $C=v$ (the unit variable cost), because the fixed cost $F$ becomes negligible per item when many are produced; the unit cost can never be reached exactly, only approached. In your interpretations, state what the asymptote means, which is often a long-term or limiting value, and note that the domain is restricted by context: $n>0$, and a whole number.

## Worked examples

### Example 1 (sketch with asymptotes, 6 marks)

Sketch $y=\dfrac2{x-3}+1$, labelling the asymptotes and the axis intercepts.

*Solution.* The vertical asymptote is $x=3$ and the horizontal asymptote is $y=1$. The $y$-intercept is $\dfrac2{-3}+1=\dfrac13$. The $x$-intercept: $\dfrac2{x-3}=-1$, so $x-3=-2$ and $x=1$. Since $a=2>0$, the right branch is in the upper-right region ($x>3$, $y>1$) and the left branch is in the lower-left region ($x<3$, $y<1$), passing through $(1,0)$ and $\left(0,\tfrac13\right)$.

### Example 2 (rewriting and features, 6 marks)

For $f(x)=\dfrac{3x+1}{x-2}$, write $f$ in the form $p+\dfrac q{x-2}$, and state the asymptotes, the domain, the range and the intercepts.

*Solution.* $3x+1=3(x-2)+7$, so $f(x)=3+\dfrac7{x-2}$. The vertical asymptote is $x=2$ and the horizontal asymptote is $y=3$. The domain is $x\ne2$ and the range is $y\ne3$. The $y$-intercept is $f(0)=-\dfrac12$, and the $x$-intercept is where $3x+1=0$, so $x=-\dfrac13$.

Check using the shortcut: $y=\dfrac ac=\dfrac31=3$ ✓, and $x=-\dfrac dc=2$ ✓.

### Example 3 (a negative numerator, 5 marks)

Write $g(x)=\dfrac{2x-1}{x+3}$ in the form $p+\dfrac q{x+3}$ and describe the shape.

*Solution.* $2x-1=2(x+3)-7$, so $g(x)=2-\dfrac7{x+3}$. Here $q=-7<0$, so the branches lie in the upper-left and lower-right regions defined by the asymptotes $x=-3$ and $y=2$.

### Example 4 (the inverse, 6 marks)

Find the inverse of $f(x)=\dfrac{3x+1}{x-2}$, and state its domain and range.

*Solution.* Let $y=\dfrac{3x+1}{x-2}$. Then $y(x-2)=3x+1$, so $xy-3x=1+2y$ and $x(y-3)=1+2y$. Hence $x=\dfrac{2y+1}{y-3}$ and $f^{-1}(x)=\dfrac{2x+1}{x-3}$. The domain is $x\ne3$ (the range of $f$) and the range is $y\ne2$ (the domain of $f$).

Check with $f(3)=\dfrac{10}1=10$: $f^{-1}(10)=\dfrac{21}7=3$ ✓.

### Example 5 (an equation, 6 marks)

Solve $\dfrac{3x+1}{x-2}=x$.

*Solution.* The excluded value is $x=2$. Multiply by $x-2$: $3x+1=x^{2}-2x$, so $x^{2}-5x-1=0$. The formula gives $x=\dfrac{5\pm\sqrt{29}}2$, approximately $5.19$ or $-0.193$. Neither is $2$, so both are valid.

Check $x=5.193$: $\dfrac{16.58}{3.193}=5.19$ ✓. These solutions are the points where the graph of $f$ meets $y=x$, and they are also where $f$ meets its inverse.

### Example 6 (a line and a hyperbola, 5 marks)

Find the intersections of $y=\dfrac4x$ and $y=x+3$.

*Solution.* $\dfrac4x=x+3$ gives $4=x^{2}+3x$ (with $x\ne0$), so $x^{2}+3x-4=0$ and $(x+4)(x-1)=0$. So $x=-4$ or $x=1$, with points $(-4,-1)$ and $(1,4)$.

### Example 7 (an inequality, 6 marks)

Solve $\dfrac3{x-1}<2$.

*Solution.* The curves $y=\dfrac3{x-1}$ and $y=2$ meet when $3=2(x-1)$, i.e. $x=2.5$. For $x>1$, the function is decreasing and falls below $2$ at $x=2.5$, so it is less than $2$ for $x>2.5$. For $x<1$ the denominator is negative so the function is negative, hence less than $2$ for all such $x$. The solution is $x<1$ or $x>2.5$.

Check with $x=2$ (excluded): $\dfrac31=3>2$ ✓ (not a solution). Check $x=0$: $-3<2$ ✓.

### Example 8 (inverse proportion, 5 marks)

The time $t$ hours for a journey of $120$ km is inversely proportional to the speed $v$ km/h. Find the time at $80$ km/h, and the speed needed for $2.5$ hours.

*Solution.* $t=\dfrac{120}v$. At $v=80$: $t=1.5$ hours. For $t=2.5$: $v=\dfrac{120}{2.5}=48$ km/h. The product $vt=120$ is constant, the distance.

### Example 9 (average cost, 6 marks)

A firm has fixed costs of EUR 500 and a variable cost of EUR 4 per item. The average cost per item for $n$ items is $C(n)=\dfrac{500+4n}n$. Find $C(100)$, the horizontal asymptote and the least $n$ for which $C(n)<5$.

*Solution.* $C(n)=4+\dfrac{500}n$, so $C(100)=4+5=9$, i.e. EUR 9. The horizontal asymptote is $C=4$: the average cost approaches the variable cost per item as production grows but never reaches it. For $C(n)<5$: $\dfrac{500}n<1$, so $n>500$, hence the least whole number is $n=501$.

### Example 10 (equation from asymptotes, 5 marks)

A hyperbola has vertical asymptote $x=-2$, horizontal asymptote $y=3$ and passes through $(0,5)$. Find its equation and its $x$-intercept.

*Solution.* Write $y=\dfrac a{x+2}+3$. At $(0,5)$: $\dfrac a2+3=5$, so $a=4$. The equation is $y=\dfrac4{x+2}+3$. The $x$-intercept: $\dfrac4{x+2}=-3$, so $x+2=-\dfrac43$ and $x=-\dfrac{10}3$.

### Example 11 (self-inverse, 5 marks)

Show that $f(x)=\dfrac{x+3}{x-1}$ is self-inverse.

*Solution.* $f\big(f(x)\big)=\dfrac{\frac{x+3}{x-1}+3}{\frac{x+3}{x-1}-1}=\dfrac{x+3+3(x-1)}{x+3-(x-1)}=\dfrac{4x}4=x$. So $f=f^{-1}$ and its graph is symmetric about $y=x$.

### Example 12 (a transformation description, 3 marks)

Describe how the graph of $y=\dfrac1{x+2}-3$ is obtained from $y=\dfrac1x$.

*Solution.* Translate $2$ units to the left (replace $x$ by $x+2$) and $3$ units down. The asymptotes move from $x=0$ and $y=0$ to $x=-2$ and $y=-3$.

## Using your GDC

A GDC is very useful for rational functions. Graph $y=\dfrac{ax+b}{cx+d}$ with brackets around numerator and denominator (a common error is typing $ax+b/cx+d$). Check that the asymptotes appear where you expect; the GDC may draw a spurious vertical line joining the branches, which you should not include in your sketch (use dot mode to remove it). For a solution of an equation, use *intersect* with the second function, and for an inequality, read intervals from the graph. For $f^{-1}$, plot $f$ and your inverse together with $y=x$ in a square window to check the mirror symmetry. The table function can show the values near the vertical asymptote and confirm the sign change from $-\infty$ to $+\infty$. To check a rewritten form $p+\dfrac q{x-h}$, plot both forms and see if they coincide. Menu names vary by model. For average-cost problems, a table helps find the first $n$ at which $C(n)$ drops below a target.

## Common mistakes

1. **Writing the asymptote as a point** or confusing the horizontal asymptote value with the vertical one.
2. **Mis-signing $h$:** $\dfrac1{x+2}$ has its vertical asymptote at $x=-2$, not $x=2$.
3. **Forgetting to bracket** numerator and denominator on the calculator.
4. **Not simplifying to translated form correctly**, for instance $\dfrac{3x+1}{x-2}=3+\dfrac1{x-2}$ (the numerator should be $7$).
5. **Giving the range as all reals**; it excludes the horizontal asymptote value.
6. **Multiplying an inequality by $x-1$** without considering its sign.
7. **Not checking excluded values** in the solutions of rational equations.
8. **Drawing the branch in the wrong region** by ignoring the sign of $a$ (or $q$).

## Exam technique and command terms

**Sketch** requires both asymptotes drawn as dashed lines with their equations, the axis intercepts, and the two branches in the right regions. **Write down the equations of the asymptotes** needs only the equations. **State the domain and range** requires the excluded values. **Find the inverse** requires the full swap-and-solve working and a domain statement. **Solve the inequality** requires a graphical or sign-diagram justification. If the question says "hence", use the translated form to read off the features. In context, **interpret the asymptote** by saying what the limiting value represents, with units.

Check your sketch against two features: the intercepts must lie on the correct branches, and the curve must approach the asymptotes in the right direction. Practise recognising the signs of $a$ in $\dfrac a{x-h}+k$, because it decides the quadrants. In Paper 1, show the division step to earn the method mark; in Paper 2, you can confirm with the GDC graph.

## Connections

SL 2.2 provides the domain and range ideas applied here, SL 2.3 gives the sketching routine, and SL 2.5 gives the inverse method and the self-inverse concept. SL 2.7 provides the quadratics that arise in solving rational equations, and SL 2.11 gives the formal translation rules. AHL 2.13 extends to rational functions with higher-degree numerators and denominators (oblique asymptotes and holes), AHL 2.14 treats self-inverse and odd functions, and AHL 2.15 develops the sign-diagram method for rational inequalities. In AHL 1.11, partial fractions rewrite more complicated rational functions as sums of reciprocal-type terms. In Unit 5, the derivative of $\dfrac1x$ is $-\dfrac1{x^{2}}$ and its integral is $\ln|x|$, which are the basis of many integrals. In Unit 4, the idea of inverse proportion links to the relationship between the standard error and the sample size.

## Check your understanding

1. For $y=\dfrac4{x+1}-2$, state the asymptotes and the intercepts.
2. Write $\dfrac{2x+5}{x+1}$ in the form $p+\dfrac q{x+1}$ and state the asymptotes.
3. Find the inverse of $f(x)=\dfrac{2x+1}{x-3}$ and state its domain.
4. Solve $\dfrac6x=x+5$.
5. Solve $\dfrac{2x-1}{x+1}=x$.
6. Solve $\dfrac2{x-1}<1$.
7. The average cost of $n$ items is $C(n)=\dfrac{300+5n}n$. Find $C(60)$, the horizontal asymptote and the least $n$ for which $C(n)<6$.
8. A hyperbola has asymptotes $x=1$ and $y=-2$ and passes through $(3,0)$. Find its equation.
9. State the range of $f(x)=\dfrac5{x+4}-2$.
10. Show that $f(x)=\dfrac{x+3}{x-1}$ is self-inverse.

### Answers

1. Vertical asymptote $x=-1$ and horizontal asymptote $y=-2$. The $y$-intercept is $4-2=2$. The $x$-intercept: $\dfrac4{x+1}=2$, so $x=1$.
2. $2x+5=2(x+1)+3$, so $f(x)=2+\dfrac3{x+1}$. Asymptotes $x=-1$ and $y=2$.
3. $y(x-3)=2x+1$ gives $x(y-2)=3y+1$, so $f^{-1}(x)=\dfrac{3x+1}{x-2}$ with domain $x\ne2$.
4. $6=x^{2}+5x$, so $x^{2}+5x-6=0$ and $(x+6)(x-1)=0$. So $x=-6$ or $x=1$.
5. $2x-1=x^{2}+x$ gives $x^{2}-x+1=0$ with $\Delta=1-4=-3<0$. There are no real solutions.
6. The curves meet at $2=x-1$, so $x=3$. For $x>1$ the function is below $1$ when $x>3$, and for $x<1$ it is negative. So $x<1$ or $x>3$.
7. $C(n)=5+\dfrac{300}n$, so $C(60)=10$. The horizontal asymptote is $C=5$. $C<6$ needs $\dfrac{300}n<1$, so $n>300$ and the least whole number is $301$.
8. $y=\dfrac a{x-1}-2$ with $(3,0)$: $\dfrac a2=2$, so $a=4$ and $y=\dfrac4{x-1}-2$.
9. $y\ne-2$.
10. $f(f(x))=\dfrac{\frac{x+3}{x-1}+3}{\frac{x+3}{x-1}-1}=\dfrac{x+3+3x-3}{x+3-x+1}=\dfrac{4x}{4}=x$.

## Summary

- $y=\dfrac ax$ has asymptotes $x=0$ and $y=0$; the sign of $a$ chooses the quadrants; $xy=a$ is constant.
- $y=\dfrac a{x-h}+k$ has asymptotes $x=h$ and $y=k$; domain $x\ne h$, range $y\ne k$.
- Rewrite $\dfrac{ax+b}{cx+d}$ by splitting the numerator; asymptotes $x=-\dfrac dc$ and $y=\dfrac ac$.
- The inverse of a Möbius function is of the same type; it is self-inverse when $d=-a$.
- Solve rational equations by clearing denominators and checking excluded values; inequalities by graph or sign diagram, never by blindly multiplying.
- In models, the horizontal asymptote is the limiting value, such as the unit variable cost.
