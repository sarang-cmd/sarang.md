# Graph features and intersections

> **SL 2.4 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- identify and name the key features of a graph: intercepts, zeros, vertices, local maxima and minima, asymptotes, axes of symmetry, intervals of increase and decrease;
- find those features with a GDC, to three significant figures, and with algebra when the function allows it;
- use the graph of $y=f(x)$ to solve $f(x)=0$, $f(x)=k$ and $f(x)=g(x)$, by finding intersections;
- determine the number of solutions of an equation from a graph, including tangency (a repeated solution) and no solution;
- solve inequalities of the form $f(x)>g(x)$ by reading intervals from a graph;
- interpret key features in context: maximum profit, break-even points, long-term values;
- recognise and reject spurious solutions that do not lie in the domain.

## Why this topic matters

For many equations there is no formula: $2^{x}=x+3$ cannot be rearranged to isolate $x$, yet it has two perfectly real solutions. A graph shows you how many solutions there are and where they are, and a GDC finds them to any practical accuracy. This is the principle behind most numerical methods used in science and engineering: first locate, then refine. In the IB course, SL 2.4 is the "technology chapter" of Unit 2. Paper 2 questions regularly give a function in context (a profit, a population, the height of a tide) and ask for a maximum, a break-even point or a time when a threshold is crossed. The marks go to students who can set up the graph, use the right GDC tool, and *report* the result in context with the right accuracy. This chapter also trains you to read a graph analytically: where it rises, falls, flattens or blows up, which becomes the language of calculus in Unit 5.

## Core ideas

### The key features of a graph

For a function $y=f(x)$ the following features are commonly asked for.

- **$y$-intercept:** the point $(0,f(0))$, where the graph meets the $y$-axis. A function has at most one.
- **Zeros (roots, $x$-intercepts):** the values of $x$ with $f(x)=0$. These are the solutions of the equation $f(x)=0$.
- **Local maximum and minimum:** points where the graph turns from rising to falling (maximum) or falling to rising (minimum). A *global* maximum or minimum is the highest or lowest value on the whole domain.
- **Vertex:** the turning point of a parabola.
- **Asymptotes:** lines the graph approaches without reaching (as $x\to\pm\infty$ or as $x$ approaches a point of discontinuity).
- **Axis of symmetry:** a line, such as $x=h$ for a parabola with vertex $(h,k)$, over which the graph reflects onto itself.
- **Intervals of increase and decrease:** where the graph rises ($f$ increasing) or falls ($f$ decreasing) as $x$ increases.

The words *increasing* and *decreasing* describe the behaviour for increasing $x$, from left to right. A turning point is the boundary between an increasing and a decreasing interval. When asked for intervals, give them in terms of $x$ using inequalities.

### Solving equations graphically

To solve $f(x)=k$, draw $y=f(x)$ and the horizontal line $y=k$; the solutions are the $x$-coordinates of their intersections. To solve $f(x)=g(x)$, draw both graphs; the solutions are the $x$-coordinates of the intersections, and the corresponding $y$-values give the intersection points. An equivalent method is to solve $f(x)-g(x)=0$ by finding the zeros of the difference.

Reading the picture tells you the **number** of solutions before you compute any of them. Two intersections mean two solutions, a single touching point means a repeated (double) solution, and no intersection means no real solution. The graph also shows when an algebraic method may have produced a spurious answer.

### Tangency

When a line touches a curve without crossing it, the equation $f(x)=g(x)$ has exactly one solution of multiplicity two. For example, $y=x^{2}+1$ and $y=2x$ meet where $x^{2}-2x+1=0$, that is, $(x-1)^{2}=0$, so $x=1$ is a *double* root: the line is tangent to the parabola at $(1,2)$. A tangency is a boundary case between two solutions and none. It is the starting point for the calculus idea of the tangent line.

### Solving inequalities graphically

To solve $f(x)>g(x)$, find the intersections, then read off the intervals of $x$ in which the graph of $f$ is *above* the graph of $g$. For $f(x)\ge0$, the intervals where the graph lies on or above the $x$-axis. Always state whether the end points are included: strict inequality ($>$) excludes the boundary values, while $\ge$ includes them. This is the visual counterpart of the analytic methods of SL 2.7 and AHL 2.15.

### Using the GDC accurately

Technology tools correspond to the key features: *zero (root)*, *minimum*, *maximum*, *intersect*, *table*, and sometimes *derivative at a point* (Unit 5). In the IB examination the convention is that numerical answers are given to **three significant figures** unless the question says otherwise, but you should store full accuracy on the calculator when a value is used in later steps, so that rounding does not accumulate. Typically you must choose the lower and upper bounds that bracket the feature you want. If there are several features of the same kind (such as three zeros), you must find each separately.

### Reading features in context

In a context, key features carry real meaning. The maximum of a profit function is the *maximum profit*, and the $x$-value at which it occurs is the *number of items to sell*; the zeros are the *break-even points*; an interval where the function is positive is where *a profit is made*. A horizontal asymptote is often a *long-term value*, and an intercept is an *initial value*. In your answer, translate the coordinates into words with units: "The maximum profit is EUR 1,500, obtained by selling $30$ items".

### Domain checks

A solution of an equation must lie in the domain of the function. If the domain is restricted, for example $x\ge0$ in a physical context, a solution outside that range is rejected. Likewise, if you square both sides of an equation involving a square root, you may introduce **extraneous solutions**, so the graph or a check by substitution is essential.

## Worked examples

### Example 1 (features of a cubic, 7 marks)

For $f(x)=x^{3}-4x^{2}+x+6$, use technology to find (a) the zeros; (b) the local maximum and minimum points; (c) the intervals where $f$ is decreasing.

*Solution.* (a) The graph meets the $x$-axis at $x=-1$, $x=2$ and $x=3$. Check: $f(-1)=-1-4-1+6=0$ ✓, $f(2)=8-16+2+6=0$ ✓, $f(3)=27-36+3+6=0$ ✓.
(b) The turning points are the solutions of $f'(x)=3x^{2}-8x+1=0$, found on the GDC as a local maximum at $(0.131,6.06)$ and a local minimum at $(2.54,-0.879)$ (3 s.f.).
(c) The function is decreasing between the turning points: $0.131<x<2.54$.

### Example 2 (intersection with no algebraic solution, 5 marks)

Solve $2^{x}=x+3$.

*Solution.* Graph $y=2^{x}$ and $y=x+3$. The curves meet twice, and the GDC intersection tool gives $x\approx-2.86$ and $x\approx2.44$. (The line $y=x+3$ crosses the exponential once on the left, where the exponential is still small, and once on the right, where it overtakes the line.)

Check: $2^{2.44}\approx5.43$ and $2.44+3=5.44$ ✓.

### Example 3 (an equation that factorises, 4 marks)

Solve $x^{2}=2x+3$ graphically and then verify algebraically.

*Solution.* The curves $y=x^{2}$ and $y=2x+3$ intersect at $x=-1$ and $x=3$, at the points $(-1,1)$ and $(3,9)$. Algebraically, $x^{2}-2x-3=0$ gives $(x+1)(x-3)=0$, so $x=-1$ or $x=3$ ✓.

### Example 4 (an inequality, 4 marks)

Use your answer to Example 3 to solve $x^{2}>2x+3$.

*Solution.* The parabola is above the line outside the two intersections, so $x<-1$ or $x>3$.

For the non-strict inequality $x^{2}\le2x+3$ the answer is the interval between them, including the end points: $-1\le x\le3$.

### Example 5 (increasing and decreasing, 5 marks)

Let $f(x)=x^{3}-3x^{2}$. Find the turning points and state the intervals on which $f$ is increasing and decreasing.

*Solution.* The GDC (or $f'(x)=3x^{2}-6x=3x(x-2)=0$) gives turning points at $x=0$ and $x=2$. The values are $f(0)=0$ (local maximum) and $f(2)=8-12=-4$ (local minimum). The function is increasing for $x<0$ and for $x>2$, and decreasing for $0<x<2$.

### Example 6 (counting solutions, 5 marks)

How many solutions does $\ln x=x-2$ have? Find them.

*Solution.* Graph $y=\ln x$ and $y=x-2$. For $x$ near $0.2$ the logarithm is large and negative, but the line is at about $-1.8$; the curves cross where $x\approx0.159$. The logarithm then rises above the line and crosses it again where the line overtakes, at $x\approx3.15$. So there are two solutions: $x\approx0.159$ and $x\approx3.15$.

Check: $\ln0.1586=-1.841$ and $0.1586-2=-1.841$ ✓. Also $\ln3.146=1.146$ and $3.146-2=1.146$ ✓.

### Example 7 (profit in context, 7 marks)

A company's weekly profit in euro from selling $x$ items is $P(x)=-3x^{2}+180x-1200$. Find (a) the number of items giving the maximum profit and the maximum profit; (b) the values of $x$ for which a profit is made.

*Solution.* (a) The graph is a downward parabola. The GDC (or the axis $x=-\dfrac b{2a}=\dfrac{-180}{-6}=30$) gives the maximum at $x=30$, where $P(30)=-3(900)+5400-1200=1500$. The maximum profit is EUR 1,500, obtained by selling $30$ items. (b) A profit means $P(x)>0$. The zeros are $x=\dfrac{60\pm\sqrt{2000}}2\approx7.64$ and $52.4$. So a profit is made for $7.64<x<52.4$; since $x$ is a whole number of items, $8\le x\le52$.

### Example 8 (asymptotes and intercepts, 5 marks)

For $f(x)=\dfrac{2x+1}{x-3}$, find the asymptotes and the axis intercepts.

*Solution.* The vertical asymptote is $x=3$, where the denominator is zero. As $x\to\pm\infty$, $f(x)\to2$, so the horizontal asymptote is $y=2$. The $x$-intercept is where $2x+1=0$, so $x=-\dfrac12$. The $y$-intercept is $f(0)=\dfrac1{-3}=-\dfrac13$.

### Example 9 (tangency, 4 marks)

Show that the line $y=4x$ is tangent to the curve $y=x^{2}+4$, and find the point of contact.

*Solution.* Setting $x^{2}+4=4x$ gives $x^{2}-4x+4=(x-2)^{2}=0$. There is one repeated solution, $x=2$, so the line touches the curve without crossing it, at $(2,8)$. On the GDC, the graphs meet at a single point.

### Example 10 (a spurious solution, 5 marks)

Solve $x+1=\sqrt{x+3}$.

*Solution.* The graph of $y=x+1$ meets $y=\sqrt{x+3}$ once, at $(1,2)$. Algebraically, squaring gives $x^{2}+2x+1=x+3$, so $x^{2}+x-2=0$ and $x=1$ or $x=-2$. Checking $x=-2$ in the original equation: the left side is $-1$ and the right side is $1$, so $x=-2$ is **extraneous**. The only solution is $x=1$.

The graph confirms it: at $x=-2$ the line is below the $x$-axis, but the square root is never negative.

## Using your GDC

This chapter is mostly about using the calculator accurately. The standard sequence is: enter the functions; set the **window** so that all the relevant features are visible (use a table of values to guide the range); graph; and then use the **analysis** menu. For a zero, choose *root* or *zero*, and give a left bound and a right bound; for a turning point, choose *minimum* or *maximum*, again bracketing the point; for an intersection, choose *intersect* and select the two curves and an initial guess near the point. Repeat for each feature, because the tool finds only one at a time. Record the coordinates to $3$ significant figures, and keep the full value in the calculator memory for later use (for example by storing it in a variable). If the function is undefined at some point (a vertical asymptote), the GDC may display a vertical line; ignore it. If you cannot find an intersection that you believe exists, widen the window or use a table with a small step. Menu names vary by model. In the written answer, always state what the calculator found ("intersection of $y=2^{x}$ and $y=x+3$") so the examiner can award method marks.

## Common mistakes

1. **Giving only the $x$-coordinate** of a turning point or an intersection when the point (both coordinates) was requested.
2. **Rounding too early**, losing accuracy in the last digit.
3. **Missing a solution** because the window did not show it, especially a second intersection of an exponential with a line.
4. **Confusing zeros and intercepts**: the zeros are values of $x$; the intercept is a point.
5. **Mistaking the direction of an inequality** when reading intervals, or forgetting that $\ge$ includes the end points.
6. **Giving a solution outside the domain** or an extraneous solution of a square-root equation.
7. **Describing intervals of increase using $y$-values** instead of $x$-values.
8. **Failing to interpret** the result in context, or giving it without units.

## Exam technique and command terms

**Find** and **determine** require a numerical answer, and with technology a short statement of the method (for example, "using the GDC, the minimum point is $(2.54,-0.879)$"). **Write down** means there is no working needed, because it can be read from the display or from the problem. **Solve using technology** means use the graph or the equation solver, and give answers to $3$ significant figures. **State the number of solutions** is answered from a sketch. **Interpret** or **explain what it represents** expects a sentence in context with units. In inequality questions, give the answer with correct inequality signs and the full set (two intervals if there are two).

Allocate the time properly: a Paper 2 question worth $6$ marks should not take more than $8$ minutes. Sketch the graph on your paper, with the coordinates of the key points, because the sketch earns marks and reminds you of the context. Be careful with accuracy: three significant figures is the default, and intermediate values should be kept unrounded.

## Connections

SL 2.3 taught how to sketch a graph, and here you use technology to find its features precisely. SL 2.2's domain and range appear when we reject solutions or find the range from a maximum. SL 2.6 and 2.7 connect to the vertex and the zeros of a quadratic and to the algebraic solution of $x^{2}=2x+3$. SL 2.9 provides the exponential and logarithm functions whose intersections with lines have no algebraic solution. SL 2.10 continues the topic, comparing graphical and analytical solutions. In Unit 5, the turning points found here by GDC are the zeros of the derivative, and the intervals of increase and decrease are determined by the sign of the derivative. Optimisation problems are the same as Example 7 but with calculus; and finding areas between curves requires the intersection points found as in this chapter. In Unit 4, the same GDC tools find quantiles of the normal distribution by intersecting the cumulative distribution function with a horizontal line.

## Check your understanding

1. For $f(x)=x^{2}-6x+5$, find the zeros, the vertex and the axis of symmetry.
2. Use technology to solve $2^{x}=x+3$ to $3$ significant figures.
3. For $f(x)=x^{3}-3x^{2}$, find the turning points and the intervals of increase and decrease.
4. Find the asymptotes and intercepts of $f(x)=\dfrac{3x-2}{x+1}$.
5. Solve $x^{2}\le x+6$.
6. How many solutions has $\ln x=x-2$? Find them to $3$ significant figures.
7. A profit function is $P(x)=-3x^{2}+180x-1200$. Find the maximum profit, the number of items that gives it, and the range of $x$ for a profit.
8. Solve $x+1=\sqrt{x+3}$.
9. Show that $y=4x$ is a tangent to $y=x^{2}+4$.
10. For $f(x)=x^{3}-4x^{2}+x+6$, find the coordinates of the local maximum and minimum and the zeros.

### Answers

1. $f(x)=(x-1)(x-5)$, so the zeros are $1$ and $5$. The vertex is $(3,-4)$ and the axis of symmetry is $x=3$.
2. $x\approx-2.86$ and $x\approx2.44$.
3. Turning points: local maximum $(0,0)$ and local minimum $(2,-4)$. Increasing for $x<0$ and $x>2$, decreasing for $0<x<2$.
4. Vertical asymptote $x=-1$, horizontal asymptote $y=3$, $x$-intercept $\dfrac23$ and $y$-intercept $-2$.
5. $x^{2}-x-6\le0$, so $(x-3)(x+2)\le0$ and $-2\le x\le3$.
6. Two solutions: $x\approx0.159$ and $x\approx3.15$.
7. Maximum profit EUR 1,500 at $x=30$. A profit is made for $7.64<x<52.4$, so for $8\le x\le52$ in whole items.
8. $x=1$ only; $x=-2$ is extraneous.
9. $x^{2}-4x+4=(x-2)^{2}=0$ has a repeated root $x=2$, so the line touches the curve at $(2,8)$.
10. Zeros $-1$, $2$, $3$. Local maximum $(0.131,6.06)$ and local minimum $(2.54,-0.879)$.

## Summary

- Key features: intercepts, zeros, turning points, asymptotes, symmetry, intervals of increase and decrease; give full points when coordinates are requested.
- Solve $f(x)=g(x)$ by the intersections of the graphs; read the number of solutions from the picture, and note tangency as a double root.
- Inequalities are solved by reading intervals where one graph is above the other; watch end points.
- On the GDC use zero, minimum, maximum and intersect tools with brackets, give $3$ significant figures, and store unrounded values.
- In context, translate coordinates into words with units, as with maximum profit and break-even points.
- Check solutions against the domain and reject extraneous roots.
