# Graphing functions

> **SL 2.3 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- distinguish between *sketching* and *drawing* a graph, as the IB command terms define them;
- sketch a function from its equation by finding intercepts, asymptotes, turning points and end behaviour;
- recognise the basic shapes of linear, quadratic, cubic, reciprocal, exponential, logarithmic, square-root and modulus graphs;
- create a sketch from information given in words, from a table or from a context;
- use a GDC to graph a function, choose a suitable window, and transfer the graph to paper with labelled axes and key points;
- graph sums, differences and piecewise combinations of functions and describe how each part contributes;
- deduce the equation of a function from key points on its graph.

## Why this topic matters

A graph is a picture of a function, and a picture can reveal in a second what a formula hides: how many solutions an equation has, where a function is increasing, whether it ever repeats, and how it behaves for very large inputs. Throughout the IB course you are expected to *think graphically*. In optimisation you sketch to see which turning point is a maximum, in calculus you draw the region before integrating, and in statistics you draw the normal curve to see what area represents the probability. Examiners also test the skill directly: "sketch the graph of $y=f(x)$, showing clearly the axis intercepts and any asymptotes" is a staple of Paper 1, where no calculator is allowed. On Paper 2 the GDC does the plotting, but the marks go to the student who can transfer the picture to paper accurately and label it properly. This chapter therefore builds two skills at once: sketching by analysis, and reproducing technology output as a clear exam diagram.

## Core ideas

### Sketch, draw and graph: what the command terms mean

In IB mathematics, **sketch** means to give a general idea of the shape, with the key features *labelled*. Axes must be drawn and labelled, and the curve must have the correct shape and position relative to the axes and any asymptotes. A sketch does not need accurate scale. **Draw** means an accurate diagram, on graph paper if requested, with a ruler and a pencil. **Plot** means to mark points accurately. **Using technology**, the graph is produced on the GDC and then copied. Always read which command term is used, because "sketch" gives you a mark for the correct *features*, and an accurate-looking graph with missing labels loses marks.

### A systematic sketching routine

For a function $y=f(x)$, work through these steps; not every step applies to every function.

1. **Domain.** Where is the function defined? Are there breaks?
2. **Intercepts.** The $y$-intercept is $f(0)$. The $x$-intercepts (zeros) solve $f(x)=0$.
3. **Asymptotes.** Vertical asymptotes occur where a denominator is zero but the numerator is not. Horizontal asymptotes describe the limit of $f(x)$ as $x\to\pm\infty$.
4. **Turning points.** A quadratic has a vertex found by completing the square; for other functions use technology on Paper 2, or calculus (Unit 5) on Paper 1.
5. **End behaviour.** What happens as $x\to\infty$ and $x\to-\infty$? For polynomials, the leading term dominates.
6. **Symmetry.** Even functions are symmetric in the $y$-axis, odd functions are symmetric about the origin (AHL 2.14).
7. **Sign.** Between consecutive zeros the sign of the function is constant (unless there is an asymptote), which tells you whether the curve is above or below the axis.

### The gallery of basic graphs

You should be able to sketch each of these, with their key features, from memory.

- **Linear** $y=mx+c$: a straight line with gradient $m$ and $y$-intercept $c$.
- **Quadratic** $y=ax^{2}+bx+c$: a parabola, opening upward for $a>0$ and downward for $a<0$, with an axis of symmetry $x=-\dfrac b{2a}$.
- **Cubic** $y=ax^{3}+\cdots$: an S-shape, with up to two turning points and up to three zeros; for $a>0$ it rises from bottom left to top right.
- **Reciprocal** $y=\dfrac ax$: two branches with asymptotes $x=0$ and $y=0$, in the first and third quadrants for $a>0$.
- **Exponential** $y=a^{x}$ ($a>1$): increasing, passing through $(0,1)$, with horizontal asymptote $y=0$ to the left.
- **Logarithmic** $y=\log_ax$: increasing, passing through $(1,0)$, with vertical asymptote $x=0$.
- **Square root** $y=\sqrt x$: half of a sideways parabola, starting at the origin.
- **Modulus** $y=|x|$: a V-shape with vertex at the origin.
- **Sine and cosine:** periodic waves between $-1$ and $1$ (SL 3.7).

Memorising these shapes, together with the effect of transformations (SL 2.11), allows you to sketch a huge number of functions with little extra work.

### Reading features: roots, multiplicities and turning points

For a polynomial written in factored form $y=a(x-p)(x-q)^{2}(x-r)$, each factor gives a zero. If a factor appears once, the graph *crosses* the axis; if it appears twice (an even multiplicity), the graph *touches* the axis and turns back; a triple root flattens as it crosses. The sign of the leading coefficient and the degree give the end behaviour: even degree means both ends go the same way and odd degree means opposite ends. This is enough to sketch a polynomial with its zeros, and the turning points can be found on Paper 2 with the GDC.

For rational functions such as $y=\dfrac{a}{x-p}+q$, the lines $x=p$ and $y=q$ are the asymptotes, and the graph approaches them without touching (for the simple form here).

### Sums and differences of functions

To graph $y=f(x)+g(x)$ you may plot the new function directly on the GDC, but it helps to think of it as adding heights. Where $g(x)=0$ the graph of $f+g$ passes through $f$, and where one function dominates the sum looks like that function. For example $y=x+\dfrac1x$ behaves like $\dfrac1x$ near $x=0$ (so it has the vertical asymptote $x=0$) and like $x$ for large $|x|$, so the line $y=x$ is an oblique asymptote. The product $y=f(x)g(x)$ can be thought of similarly: its zeros are the union of the zeros of the two.

### Transferring a graph from the GDC to paper

The examiner awards marks for *communication*. When copying a GDC graph:

- draw and label the axes with the variable names ($x$ and $y$, or $t$ and $h$ in context);
- include a **scale** or at least the coordinates of key points, so that the reader knows what the picture shows;
- mark every key feature requested: intercepts, turning points, asymptotes (as dashed lines with equations), and intersections, with their coordinates to $3$ significant figures if they are decimals;
- show only the relevant domain, and use open or closed circles at end points if the domain is restricted;
- use a pencil and a ruler for lines.

Choose the GDC window so that all the key features are visible; if you cannot see the features, you cannot copy them. Use *zoom fit* or adjust $y_{\min}$ and $y_{\max}$ after a table of values.

### Finding an equation from a graph

Given key points, choose the form that uses them best. A parabola with zeros $p$ and $q$ and another point has the form $y=a(x-p)(x-q)$, and the other point fixes $a$. An exponential $y=ka^{x}$ through $(0,y_0)$ has $k=y_0$, and a second point fixes $a$. A vertical-asymptote reciprocal $y=\dfrac a{x-p}+q$ needs the asymptotes and a point. In each case, substituting a known point provides the unknown constant. This reverse process links directly with the transformation ideas in SL 2.11.

## Worked examples

### Example 1 (a cubic, 6 marks)

Sketch $y=(x+1)(x-2)(x-4)$, showing the intercepts and the approximate positions of the turning points.

*Solution.* The $x$-intercepts are $-1$, $2$ and $4$, each of multiplicity one, so the graph crosses the axis at each. The $y$-intercept is $(1)(-2)(-4)=8$. The leading coefficient is positive and the degree is odd, so the graph starts low on the left and ends high on the right. Expanding gives $x^{3}-5x^{2}+2x+8$, and the turning points satisfy $3x^{2}-10x+2=0$, giving $x\approx0.214$ (a local maximum, with $y\approx8.21$) and $x\approx3.12$ (a local minimum, with $y\approx-4.06$). The curve rises from the left through $(-1,0)$ to the maximum near $(0.21,8.21)$, falls through $(2,0)$ to the minimum near $(3.12,-4.06)$, then rises through $(4,0)$.

Check: the maximum is above the $y$-intercept $8$, as it should be, since the function is still increasing at $x=0$.

### Example 2 (an exponential, 5 marks)

Sketch $y=2^{x}-4$, showing the intercepts and the asymptote.

*Solution.* The graph is that of $2^{x}$ shifted down by $4$. The horizontal asymptote is $y=-4$ (dashed). The $y$-intercept is $2^{0}-4=-3$. The $x$-intercept satisfies $2^{x}=4$, so $x=2$. The curve rises from the asymptote on the left through $(0,-3)$ and $(2,0)$ and then increases rapidly.

### Example 3 (a reciprocal, 6 marks)

Sketch $y=\dfrac3{x-2}+1$, labelling the asymptotes and intercepts.

*Solution.* The vertical asymptote is $x=2$ and the horizontal asymptote is $y=1$. The $y$-intercept is $\dfrac3{-2}+1=-\dfrac12$. The $x$-intercept: $\dfrac3{x-2}=-1$, so $x-2=-3$ and $x=-1$. The right branch (for $x>2$) lies above $y=1$, falling towards the asymptote; the left branch (for $x<2$) lies below $y=1$ and passes through $(-1,0)$ and $\left(0,-\tfrac12\right)$, then plunges to $-\infty$ as $x\to2^{-}$.

### Example 4 (a sum of functions, 5 marks)

Sketch $y=x+\dfrac1x$ for $x>0$, and find its minimum point.

*Solution.* For small $x>0$ the term $\dfrac1x$ dominates, so $y\to\infty$ as $x\to0^{+}$. For large $x$ the term $x$ dominates, so the graph approaches the line $y=x$ from above. The graph therefore falls and then rises, with a minimum. By the inequality $x+\dfrac1x\ge2$ (SL 1.6, with equality at $x=1$), the minimum point is $(1,2)$. The curve decreases from the $y$-axis to $(1,2)$ and then increases, following $y=x$ closely.

### Example 5 (transferring from a GDC, 6 marks)

Using technology, sketch $y=x^{3}-6x^{2}+9x$, labelling the turning points and intercepts.

*Solution.* Factorising, $y=x(x-3)^{2}$, so the $x$-intercepts are $0$ (a crossing) and $3$ (a touch, since the factor is squared). The GDC gives a local maximum at $(1,4)$ and a local minimum at $(3,0)$, which is also the touching intercept. The $y$-intercept is $(0,0)$. For large $|x|$ the leading term $x^{3}$ dominates. The sketch goes from the bottom left through the origin, up to the maximum $(1,4)$, down to touch the axis at $(3,0)$, and up again.

Check: $y(2)=2$, which lies between the maximum and the minimum, consistent with the curve falling from $(1,4)$ to $(3,0)$.

### Example 6 (a context, 6 marks)

A cup of tea cools according to $T=20+70e^{-0.1t}$, where $T$ is the temperature in degrees Celsius after $t$ minutes. Sketch the graph for $t\ge0$ and find when the tea reaches $30^{\circ}\text{C}$.

*Solution.* At $t=0$, $T=90$. As $t\to\infty$, $e^{-0.1t}\to0$ so $T\to20$, the room temperature, and the horizontal asymptote is $T=20$. The graph decreases from $(0,90)$, concave up, approaching $T=20$. After $10$ minutes $T=20+70e^{-1}=45.75^{\circ}\text{C}$. For $T=30$: $70e^{-0.1t}=10$, so $e^{-0.1t}=\tfrac17$ and $t=10\ln7\approx19.5$ minutes.

### Example 7 (a piecewise graph, 5 marks)

Sketch $f(x)=\begin{cases}x^{2},&x\le1,\\2-x,&x>1.\end{cases}$

*Solution.* For $x\le1$ the graph is a parabola with vertex $(0,0)$ ending at $(1,1)$ (a closed point). For $x>1$ it is a line of gradient $-1$ starting at $(1,1)$ and passing through $(2,0)$, so it meets the parabola at the same point $(1,1)$. The function is continuous at $x=1$ because both rules give $1$, so no open circle is needed (the point is included by the first piece). The line crosses the $x$-axis at $x=2$.

### Example 8 (equation from a graph, 5 marks)

A parabola has $x$-intercepts $-2$ and $3$, and $y$-intercept $12$. Find its equation.

*Solution.* Write $y=a(x+2)(x-3)$. At $x=0$: $a(2)(-3)=-6a=12$, so $a=-2$. Hence $y=-2(x+2)(x-3)=-2x^{2}+2x+12$. The negative $a$ is consistent with a parabola that opens downward, passing through a positive $y$-intercept between two zeros.

Check: at $x=1$ we get $-2(3)(-2)=12$, and the vertex $x=\dfrac{-2+3}2=\dfrac12$ lies between the zeros ✓.

### Example 9 (an exponential through two points, 4 marks)

An exponential $y=ka^{x}$ passes through $(0,3)$ and $(2,12)$. Find $k$ and $a$ (with $a>0$).

*Solution.* $y(0)=k=3$. Then $3a^{2}=12$, so $a^{2}=4$ and $a=2$ (since $a>0$). The equation is $y=3\cdot2^{x}$.

### Example 10 (a square root, 4 marks)

Sketch $y=\sqrt{x+3}$ and state its domain and range.

*Solution.* The graph is $\sqrt x$ shifted three units left, so it starts at $(-3,0)$. The $y$-intercept is $\sqrt3\approx1.73$. It passes through $(1,2)$. The domain is $x\ge-3$ and the range is $y\ge0$.

## Using your GDC

On Paper 2 you will graph a function, find key points with the GDC's tools (zero, minimum, maximum, intersection) and copy a sketch. A reliable workflow is: (1) enter the function; (2) look at a table of values to choose the window; (3) press graph and adjust the window until all features are on screen; (4) use the analysis tools to read off exact numerical values; (5) sketch on paper with axes, labels and the values to three significant figures. For a sum or difference function, enter $f(x)+g(x)$ as a third function, or graph the functions separately in different colours to see how they combine. If you need a *vertical asymptote*, remember that the GDC may draw a spurious vertical line connecting the branches (in connected mode); switch to dot mode or ignore it. Zoom in to confirm a feature, not just to see it. Menu names vary by model. Finally, the GDC graph is the graph of the *formula*: if the question restricts the domain, only copy the relevant part and use open or closed end points.

## Common mistakes

1. **Omitting labels or axes** on a sketch, even when the shape is right.
2. **Drawing a curve that crosses an asymptote** where it should only approach it, or drawing an asymptote as a solid line instead of dashed.
3. **Ignoring multiplicity:** crossing the axis at a double root instead of touching it.
4. **Wrong end behaviour** for a polynomial (sign of the leading coefficient and the degree).
5. **Missing the $y$-intercept or giving the $x$-intercept as $f(0)$.**
6. **Poor GDC window choice**, so a turning point is never seen.
7. **Rounding key values too early or giving decimals without $3$ significant figures.**
8. **Treating a restricted domain as the whole graph**, forgetting the end points.

## Exam technique and command terms

When the question says **sketch**, aim for a clear, uncluttered diagram with the features labelled, which in practice means the intercepts with the axes, asymptotes with their equations, and any turning point or end point. A rough but well-proportioned curve earns full credit; an inaccurate scale does not matter as long as the order of the features is right. When it says **draw**, use graph paper, a ruler and a scale, and plot points accurately. **Using technology** or **use your GDC** means that you should state the coordinates found by the calculator, and you should include a sketch of the GDC output. **Find the equation** from a graph means use the points to determine all constants; always check by substituting another point, if one is available.

On Paper 1, make a short table of features before sketching: intercepts, asymptotes, end behaviour. This takes thirty seconds and prevents most errors. On Paper 2, write what you did with the calculator ("minimum found using the GDC at $(3.12,-4.06)$"), because it earns the method mark if the next step goes wrong.

## Connections

SL 2.1 gives linear graphs, whose gradient and intercepts are the model for all the intercept and slope reading in this chapter. SL 2.2 supplies the language of domain and range, which determines the part of the graph that you draw. SL 2.4 builds on this chapter: key features such as vertex, asymptotes and intersections are located with technology. SL 2.6 and 2.8 and 2.9 give the detailed theory of the quadratic, reciprocal, exponential and logarithmic graphs sketched here, while SL 2.11 shows how all of these graphs are moved and stretched by simple transformations of the equation. In Unit 3, the sine and cosine graphs follow the same routine. In Unit 5, a curve sketch is expected before finding areas by integration, and derivative sign charts give the same information as the turning-point analysis here. In Unit 4, the normal curve is a graph whose shape you must sketch and shade for probability questions.

## Check your understanding

1. Sketch $y=(x-1)(x+3)(x-2)$ and state its intercepts.
2. Find the asymptotes and intercepts of $y=\dfrac2{x+1}-3$.
3. Sketch $y=3^{x}-9$, labelling the intercepts and the asymptote.
4. A parabola passes through $(-1,0)$, $(3,0)$ and $(0,-6)$. Find its equation.
5. An exponential $y=ka^{x}$ passes through $(0,5)$ and $(1,10)$. Find $k$ and $a$.
6. Sketch $y=\sqrt{x-1}+2$ and state its domain and range.
7. Describe the graph of $y=x+\dfrac4x$ for $x>0$ and find its minimum.
8. A cup cools according to $T=15+60e^{-0.2t}$. State the initial temperature, the long-term temperature and $T$ at $t=5$.
9. Sketch $f(x)=\begin{cases}x+1,&x<0,\\(x-1)^{2},&x\ge0\end{cases}$ and state its range.
10. Using technology, sketch $y=x^{3}-3x$, labelling the turning points and the intercepts.

### Answers

1. The $x$-intercepts are $-3$, $1$ and $2$ and the $y$-intercept is $(-1)(3)(-2)=6$. The graph rises from the bottom left, crosses at $-3$, peaks, crosses at $1$, dips, crosses at $2$ and rises.
2. The vertical asymptote is $x=-1$ and the horizontal asymptote is $y=-3$. The $y$-intercept is $2-3=-1$. The $x$-intercept: $\dfrac2{x+1}=3$, so $x=-\dfrac13$.
3. The horizontal asymptote is $y=-9$. The $y$-intercept is $1-9=-8$ and the $x$-intercept is $x=2$.
4. $y=a(x+1)(x-3)$ and at $x=0$: $-3a=-6$, so $a=2$. Thus $y=2(x+1)(x-3)=2x^{2}-4x-6$.
5. $k=5$. Then $5a=10$, so $a=2$: $y=5\cdot2^{x}$.
6. The graph starts at $(1,2)$ and increases. The domain is $x\ge1$ and the range is $y\ge2$.
7. As $x\to0^{+}$, $y\to\infty$, and for large $x$ the graph approaches $y=x$. The minimum is at $x=2$, $y=4$, by $x+\dfrac4x=4+\dfrac{(x-2)^{2}}x\ge4$.
8. Initially $T=75^{\circ}\text{C}$, the long-term value is $15^{\circ}\text{C}$ and $T(5)=15+60e^{-1}=37.1^{\circ}\text{C}$.
9. For $x<0$ the line goes up to $(0,1)$ (not included in that piece, but included by the second piece at the same height). For $x\ge0$ the parabola has vertex $(1,0)$. The line covers $y<1$ and the parabola covers $y\ge0$, so the range is all real numbers.
10. $y=x(x^{2}-3)$ has intercepts at $x=0$ and $x=\pm\sqrt3$. The turning points are a local maximum at $(-1,2)$ and a local minimum at $(1,-2)$.

## Summary

- *Sketch* means general shape with labelled key features; *draw* means accurate and to scale.
- Routine: domain, intercepts, asymptotes, turning points, end behaviour, symmetry, sign.
- Know the basic graph shapes; factored forms give zeros, and even multiplicity means touch.
- For sums and differences, check which term dominates in each region and what the asymptotes are.
- Transfer GDC graphs to paper with labelled axes, key coordinates and the correct domain.
- Find equations from graphs by choosing the form that matches the given points, then solving for constants.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.3. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
