# Transformations of functions

> **SL 2.11 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- describe and apply translations $y=f(x)+b$ and $y=f(x-a)$;
- describe and apply vertical stretches $y=pf(x)$ and horizontal stretches $y=f(qx)$, with the correct scale factors;
- describe and apply reflections $y=-f(x)$ and $y=f(-x)$;
- apply a sequence of transformations in the correct order, including $y=af(b(x-c))+d$;
- track the image of a point, an intercept, a turning point or an asymptote under a transformation;
- write the equation of a transformed function and describe a transformation that maps one given graph to another;
- use transformations to recognise the structure of quadratic, exponential, logarithmic and rational graphs.

## Why this topic matters

The most common functions in the course (quadratics, exponentials, logarithms, reciprocals, and soon sine and cosine) are all *families* generated from a few basic graphs by shifting, stretching and flipping. A student who understands transformations does not need to memorise a thousand graphs; they need about eight parent graphs and a small set of rules. The idea is also a powerful way to read equations: $y=3(x+1)^{2}-5$ is a parabola with its vertex at $(-1,-5)$ because the equation says so. It lets you model: a sinusoidal tide, a population that begins later than expected, a cost function with a fixed fee. And it saves time in examinations, since if you know that $f$ has a turning point at $(2,-3)$, then $g(x)=2f(x-1)+4$ has its turning point at $(3,-2)$ without any calculation. In the IB, transformations appear in SL 2.11, extended in AHL 2.14 (symmetry), AHL 2.15 and 2.16 (modulus transformations) and in SL 3.7 (sinusoidal graphs). The questions are among the most predictable in the course and reward a rigorous understanding of the order of operations on the graph.

## Core ideas

### Translations

A **translation** moves every point of the graph by the same vector.

- $y=f(x)+b$ translates the graph **vertically** by $b$ units: up if $b>0$, down if $b<0$. Translation vector $\begin{pmatrix}0\\b\end{pmatrix}$.
- $y=f(x-a)$ translates the graph **horizontally** by $a$ units: to the *right* if $a>0$ and to the *left* if $a<0$. Translation vector $\begin{pmatrix}a\\0\end{pmatrix}$.

The horizontal direction is the one that surprises students: $f(x-3)$ moves the graph to the right, because the input needed to produce a given output has increased by $3$. For example, $(x-3)^{2}$ has its vertex at $x=3$ and not $x=-3$. Combined: $y=f(x-a)+b$ is a translation by $\begin{pmatrix}a\\b\end{pmatrix}$, and the point $(x,y)$ maps to $(x+a,\,y+b)$.

### Stretches

A **vertical stretch** by scale factor $p>0$, with the $x$-axis invariant, is $y=pf(x)$. Every $y$-coordinate is multiplied by $p$, so the point $(x,y)$ maps to $(x,py)$. If $p>1$ the graph is stretched away from the $x$-axis; if $0<p<1$ it is compressed towards it. The zeros are unchanged, but the $y$-intercept and any turning-point value are multiplied by $p$.

A **horizontal stretch** by scale factor $\dfrac1q$ with the $y$-axis invariant is $y=f(qx)$, $q>0$. Every $x$-coordinate is *divided* by $q$, so $(x,y)$ maps to $\left(\dfrac xq,\,y\right)$. For $q>1$ the graph is compressed horizontally, and for $0<q<1$ it is stretched. The scale factor is the *reciprocal* of the number multiplying $x$: $f(2x)$ is a horizontal stretch by scale factor $\dfrac12$ (a compression), and $f\!\left(\dfrac x3\right)$ is a stretch by scale factor $3$. The $y$-intercept is unchanged, while the $x$-intercepts are divided by $q$.

### Reflections

- $y=-f(x)$ is a **reflection in the $x$-axis**: $(x,y)\mapsto(x,-y)$. Zeros stay, maxima become minima.
- $y=f(-x)$ is a **reflection in the $y$-axis**: $(x,y)\mapsto(-x,y)$. The $y$-intercept stays.

These can be seen as stretches with negative scale factor $-1$. The domain of $f(-x)$ is the reflection of the domain of $f$: if $\ln x$ has domain $x>0$ then $\ln(-x)$ has domain $x<0$.

### Summary of the effect on points

| Transformation | Equation | Image of $(x,y)$ |
|---|---|---|
| Vertical translation by $b$ | $y=f(x)+b$ | $(x,\;y+b)$ |
| Horizontal translation by $a$ | $y=f(x-a)$ | $(x+a,\;y)$ |
| Vertical stretch, factor $p$ | $y=pf(x)$ | $(x,\;py)$ |
| Horizontal stretch, factor $\dfrac1q$ | $y=f(qx)$ | $\left(\dfrac xq,\;y\right)$ |
| Reflection in the $x$-axis | $y=-f(x)$ | $(x,\;-y)$ |
| Reflection in the $y$-axis | $y=f(-x)$ | $(-x,\;y)$ |

A useful rule: transformations that act on $y$ (outside the brackets) do what you expect; those that act on $x$ (inside the brackets) do the opposite of what you expect.

### Composite transformations and order

For $y=af\big(b(x-c)\big)+d$ the standard order for describing the graph is the order you would *evaluate* the function: first the horizontal stretch (factor $\dfrac1b$) and reflection, then the horizontal translation by $c$, then the vertical stretch (factor $a$) and reflection, then the vertical translation by $d$. In symbols, a point $(x_0,y_0)$ on $f$ moves to
$$
\left(\frac{x_0}b+c,\;ay_0+d\right).
$$
When the inside is written as $f(bx-e)$, first factorise: $f(2x-6)=f\big(2(x-3)\big)$, which is a horizontal stretch by $\dfrac12$ followed by a translation of $3$ to the right, and **not** a translation by $6$. Order matters when a stretch and a translation act in the same direction: stretching then translating gives a different result from translating then stretching. Vertical and horizontal operations are independent of each other, so those can be done in either order.

For a quick check, solve the inside for $x$: the input $x_0$ of $f$ corresponds to the new input $x$ with $b(x-c)=x_0$, so $x=\dfrac{x_0}b+c$.

### Effect on key features

| Feature | Effect |
|---|---|
| Asymptotes | Horizontal asymptote $y=k$ moves to $y=ak+d$; vertical $x=h$ moves to $x=\dfrac hb+c$ |
| Domain and range | Transform with the same rules as the coordinates |
| Intercepts | $x$-intercepts $x_0\to\dfrac{x_0}b+c$; the new $y$-intercept must be computed by evaluating the new function at $0$ |
| Turning points | Treated as points, with the rules above; maxima become minima if $a<0$ |
| Zeros | Unchanged by vertical stretches and reflections in the $x$-axis |

Use these to find features of the new graph without recomputing.

### Recognising structure in the families

Many standard forms are transformations in disguise.

- **Quadratic vertex form:** $y=a(x-h)^{2}+k$ is $y=x^{2}$ stretched vertically by $|a|$ (reflected if $a<0$) and translated by $\begin{pmatrix}h\\k\end{pmatrix}$.
- **Exponential:** $y=ka^{x-h}+c$ has asymptote $y=c$. Note the identity $a^{x-h}=a^{-h}a^{x}$: a horizontal translation of an exponential is the same as a vertical stretch.
- **Logarithmic:** $y=\ln(x-h)+k$ has vertical asymptote $x=h$. $\ln(qx)=\ln q+\ln x$, so a horizontal stretch of a logarithm is a vertical translation.
- **Reciprocal:** $y=\dfrac a{x-h}+k$ as in SL 2.8.

These coincidences are valid for exponentials and logarithms only. For most functions, horizontal and vertical operations are genuinely different.

### Describing a transformation between two graphs

To find the transformation mapping $y=f(x)$ to $y=g(x)$: express $g$ in terms of $f$, usually by completing the square or factorising. For example, if $f(x)=x^{2}-2x$ and $g(x)=x^{2}+6x+5$, then $f(x)=(x-1)^{2}-1$ and $g(x)=(x+3)^{2}-4$, so $g(x)=f(x+4)-3$: a translation by $\begin{pmatrix}-4\\-3\end{pmatrix}$. Verify by mapping the vertex: $(1,-1)\to(-3,-4)$ ✓. When describing the transformation, give: the type, the direction or axis, and the size (for example "a vertical stretch with scale factor $2$, followed by a translation by $\begin{pmatrix}1\\-3\end{pmatrix}$").

## Worked examples

### Example 1 (a translation of a parabola, 3 marks)

Describe the transformation that maps $y=x^{2}$ to $y=(x-3)^{2}+2$, and state the new vertex.

*Solution.* A translation by $\begin{pmatrix}3\\2\end{pmatrix}$: $3$ units right and $2$ units up. The vertex $(0,0)$ maps to $(3,2)$.

### Example 2 (images of points, 5 marks)

The point $(2,5)$ lies on $y=f(x)$. Find the image of this point on (a) $y=f(x-1)+3$; (b) $y=2f(x)$; (c) $y=f(3x)$; (d) $y=-f(x)$; (e) $y=f(-x)$.

*Solution.* (a) $(3,8)$. (b) $(2,10)$. (c) $\left(\dfrac23,5\right)$. (d) $(2,-5)$. (e) $(-2,5)$.

### Example 3 (a stretch factor, 3 marks)

The graph of $y=f(x)$ has an $x$-intercept at $x=6$. Describe the transformation that maps it to $y=f(3x)$ and give the new $x$-intercept.

*Solution.* A horizontal stretch with scale factor $\dfrac13$ (a compression towards the $y$-axis). The intercept becomes $x=\dfrac63=2$.

### Example 4 (reflections of an exponential, 4 marks)

Let $f(x)=2^{x}$. Write the equations of the reflections of $f$ in (a) the $x$-axis; (b) the $y$-axis, and state each horizontal asymptote.

*Solution.* (a) $y=-2^{x}$, asymptote $y=0$, range $y<0$. (b) $y=2^{-x}=\left(\tfrac12\right)^{x}$, a decay function with asymptote $y=0$ and range $y>0$.

### Example 5 (reading a quadratic, 5 marks)

Describe the sequence of transformations from $y=x^{2}$ to $y=2x^{2}+4x+5$.

*Solution.* Completing the square: $2x^{2}+4x+5=2(x+1)^{2}+3$. So from $y=x^{2}$: a vertical stretch with scale factor $2$, then a translation by $\begin{pmatrix}-1\\3\end{pmatrix}$. The vertex is $(-1,3)$.

Check: at $x=0$, $2+3=5$ ✓.

### Example 6 (a factorisation inside the bracket, 5 marks)

The point $(4,7)$ is on $y=f(x)$. Find the image on $y=f(2x-6)$ and describe the transformation.

*Solution.* $f(2x-6)=f\big(2(x-3)\big)$. First a horizontal stretch with scale factor $\dfrac12$, then a translation of $3$ units to the right. The point: $x_0=4$ goes to $\dfrac42+3=5$, so the image is $(5,7)$.

Check by solving $2x-6=4$: $x=5$ ✓.

### Example 7 (an exponential, 6 marks)

For $f(x)=2^{x}$ and $g(x)=2^{x+1}-3$: (a) describe the transformation from $f$ to $g$; (b) state the asymptote and $y$-intercept of $g$; (c) give an equivalent description using a stretch.

*Solution.* (a) Translate by $\begin{pmatrix}-1\\-3\end{pmatrix}$. (b) The asymptote is $y=-3$. The $y$-intercept is $g(0)=2-3=-1$. (c) $2^{x+1}=2\cdot2^{x}$, so $g(x)=2f(x)-3$: a vertical stretch with scale factor $2$, then a translation down by $3$. Both descriptions give the same graph.

### Example 8 (a rational function, 5 marks)

Show that $g(x)=\dfrac{3x+2}{x+1}$ is a transformation of $f(x)=\dfrac1x$ and describe it.

*Solution.* $\dfrac{3x+2}{x+1}=\dfrac{3(x+1)-1}{x+1}=3-\dfrac1{x+1}$, so $g(x)=-f(x+1)+3$. This is a translation by $\begin{pmatrix}-1\\0\end{pmatrix}$, then a reflection in the $x$-axis, then a translation by $\begin{pmatrix}0\\3\end{pmatrix}$. The asymptotes are $x=-1$ and $y=3$.

### Example 9 (tracking key points, 6 marks)

The graph of $y=f(x)$ has its minimum at $(1,-2)$ and $x$-intercepts at $(-1,0)$ and $(3,0)$. Find the corresponding points on $y=-f(x-2)+1$.

*Solution.* The rule is $(x,y)\mapsto(x+2,\,-y+1)$. Then $(1,-2)\mapsto(3,3)$, which is now a *maximum* because of the reflection. $(-1,0)\mapsto(1,1)$ and $(3,0)\mapsto(5,1)$. These two points are not $x$-intercepts any longer, since they have $y=1$.

### Example 10 (the transformation between two quadratics, 5 marks)

Let $f(x)=x^{2}-2x$ and $g(x)=x^{2}+6x+5$. Find a translation that maps the graph of $f$ onto the graph of $g$.

*Solution.* $f(x)=(x-1)^{2}-1$ with vertex $(1,-1)$, and $g(x)=(x+3)^{2}-4$ with vertex $(-3,-4)$. The translation is $\begin{pmatrix}-4\\-3\end{pmatrix}$, so $g(x)=f(x+4)-3$.

Check: $f(x+4)-3=(x+3)^{2}-1-3=(x+3)^{2}-4$ ✓.

### Example 11 (zeros of a transformed cubic, 4 marks)

Let $f(x)=x^{3}$ and $g(x)=f(x+2)-1$. Find the zero of $g$.

*Solution.* $g(x)=(x+2)^{3}-1=0$ gives $x+2=1$, so $x=-1$. The original zero $(0,0)$ maps to $(-2,-1)$, the point of inflection, and the zero is at $x=-1$.

### Example 12 (a context, 4 marks)

A population is modelled by $P(t)=100(1.2)^{t}$. A new policy delays the start of growth by $5$ years. Write the new model and compare the populations at $t=5$.

*Solution.* The delayed model is $Q(t)=P(t-5)=100(1.2)^{t-5}$, a translation by $5$ to the right. At $t=5$, $Q(5)=100$ whereas $P(5)=100(1.2)^{5}\approx249$. Note $Q(t)=\dfrac{P(t)}{1.2^{5}}$, a vertical compression: for an exponential, the translation and the stretch coincide.

## Using your GDC

The GDC is excellent for exploring transformations. Enter $f(x)$ as $Y_1$ and the transformed function as $Y_2=a\,Y_1(b(x-c))+d$ (using the function-name notation, if your model supports it), then change $a$, $b$, $c$ and $d$ and watch the graph. Many GDCs have a slider or a *table of parameters* feature that makes this interactive. To check a described transformation, plot the original and your transformed version and confirm that the key points land where predicted. This is particularly useful to confirm the order of operations in composite transformations. When the question gives a graph (not a formula), you will need to transform key points by hand; the GDC can verify your result if you can model the function. Menu names vary by model. For finding the equation of a transformed function from a context, plot the data and your model together to see whether they match.

## Common mistakes

1. **Horizontal translation in the wrong direction**: $f(x+2)$ moves the graph *left*, not right.
2. **Stretch factor inverted**: $f(2x)$ is a stretch with scale factor $\dfrac12$, not $2$.
3. **Wrong order** in a composite: for $f(2x-6)$, translating by $6$ rather than $3$.
4. **Applying a transformation to the wrong coordinate**, such as multiplying the $x$-coordinate for $2f(x)$.
5. **Forgetting that $y$-intercepts change** under vertical stretches and translations, and $x$-intercepts under horizontal ones.
6. **Moving the asymptote incorrectly**: a vertical stretch by $a$ moves $y=k$ to $y=ak$, and not by adding.
7. **Not stating all the details** when asked to describe: the type, direction and size, in the right order.
8. **Confusing $-f(x)$ with $f(-x)$**: one flips the graph over the $x$-axis, the other over the $y$-axis.

## Exam technique and command terms

**Describe** a transformation fully: name each transformation, give the direction or axis, the scale factor or vector, and the order if more than one. A statement such as "moved by $3$" will not earn the marks. **Write down the coordinates** of the image of a point requires applying the rule to *both* coordinates. **Find the equation of the image** requires substitution and, if needed, simplification. **Sketch** the image on the same axes as the original, with key points labelled with their new coordinates and asymptotes drawn. **Hence** after a completed-square form leads to the transformation description.

When a question gives a graph and asks for the graph of $y=2f(x-1)$, mark key points (intercepts, turning points, end points) and move each by the rule before sketching; join them with the same shape as the original. In multi-step problems, use the order *horizontal stretch, horizontal translation, vertical stretch, vertical translation*, and check with one point. If you are asked for a *single* transformation to map one parabola onto another, find the vertices and the ratio of $x^{2}$ coefficients.

## Connections

SL 2.6 gave vertex form for quadratics, so SL 2.11 gives it a geometric explanation, and SL 2.8 and SL 2.9 introduced $\dfrac a{x-h}+k$ and $ka^{x}+c$, which are translations and stretches of parent graphs. SL 2.3 and SL 2.4 provide the sketching and the key-feature routine, SL 2.5 shows that an inverse reflects in $y=x$ (a transformation too), and SL 2.10 shows that a translation changes the solutions of an equation in a predictable way. In AHL 2.14, even and odd functions are those with reflection symmetry in the $y$-axis or rotational symmetry about the origin, and AHL 2.15 and 2.16 use the reflection of the negative part of a graph in the $x$-axis to build $|f(x)|$. In Unit 3, SL 3.7 uses $y=a\sin(b(x-c))+d$, so the amplitude, period, phase shift and midline are exactly the parameters $a$, $\dfrac{2\pi}b$, $c$ and $d$ of this chapter. In Unit 5, a translation does not change the gradient function except to move it, and the chain rule is used to differentiate $f(ax+b)$. In Unit 4, the standardisation of a normal variable is a horizontal translation and stretch of the density curve.

## Check your understanding

1. Describe the transformation from $y=x^{2}$ to $y=(x+4)^{2}-7$ and state the vertex.
2. The point $(-2,6)$ lies on $y=f(x)$. Find its image on (a) $y=3f(x)-1$; (b) $y=f(2x)+4$.
3. Let $f(x)=\ln x$. Write the equation of the graph obtained by reflecting in the $y$-axis and then translating up $2$ units, and state its domain.
4. State the vertex of $y=-2(x-1)^{2}+3$ and describe the transformations from $y=x^{2}$.
5. The point $(5,2)$ lies on $y=f(x)$. Find the image on $y=f(3x-6)$.
6. Describe $y=\dfrac{3x+2}{x+1}$ as a transformation of $y=\dfrac1x$ and state the asymptotes.
7. The graph of $f$ has horizontal asymptote $y=2$ and $x$-intercept at $x=1$. State the asymptote of $y=f(x)-3$ and of $y=2f(x)$, and the $x$-intercept of $y=f(x+4)$.
8. Show that, for $f(x)=2^{x}$, the translation $f(x-3)$ is the same graph as a vertical stretch of $f$, and state the scale factor.
9. For $g(x)=x^{2}-4x+1$, find $f$ and $k$ such that $g(x)=f(x-2)+k$ where $f(x)=x^{2}$.
10. A function $f$ has domain $-2\le x\le6$ and range $-1\le y\le5$. State the domain and range of $y=2f(x-1)+3$.

### Answers

1. Translation by $\begin{pmatrix}-4\\-7\end{pmatrix}$; the vertex is $(-4,-7)$.
2. (a) $(-2,\,3\cdot6-1)=(-2,17)$. (b) $\left(-1,\,10\right)$.
3. $y=\ln(-x)+2$, with domain $x<0$.
4. The vertex is $(1,3)$. From $y=x^{2}$: a vertical stretch with scale factor $2$, a reflection in the $x$-axis, then a translation by $\begin{pmatrix}1\\3\end{pmatrix}$.
5. $f(3x-6)=f\big(3(x-2)\big)$, so $x=\dfrac53+2=\dfrac{11}3$ and the image is $\left(\dfrac{11}3,2\right)$. Check: $3\cdot\dfrac{11}{3}-6=5$ ✓.
6. $\dfrac{3x+2}{x+1}=3-\dfrac1{x+1}$, so reflect $\dfrac1x$ in the $x$-axis and translate by $\begin{pmatrix}-1\\3\end{pmatrix}$. Asymptotes $x=-1$ and $y=3$.
7. $y=f(x)-3$ has asymptote $y=-1$. $y=2f(x)$ has asymptote $y=4$. For $y=f(x+4)$ the $x$-intercept is $x=1-4=-3$.
8. $f(x-3)=2^{x-3}=2^{-3}\cdot2^{x}=\dfrac18f(x)$, a vertical stretch with scale factor $\dfrac18$.
9. $g(x)=(x-2)^{2}-3$, so $g(x)=f(x-2)-3$ with $k=-3$.
10. The domain: $x-1\in[-2,6]$ gives $-1\le x\le7$. The range: $2y+3$ with $y\in[-1,5]$ gives $1\le y\le13$.

## Summary

- $f(x)+b$ moves up by $b$; $f(x-a)$ moves right by $a$; $pf(x)$ is a vertical stretch by $p$; $f(qx)$ is a horizontal stretch by $\dfrac1q$; $-f(x)$ reflects in the $x$-axis; $f(-x)$ in the $y$-axis.
- A point $(x_0,y_0)$ on $f$ moves to $\left(\dfrac{x_0}b+c,\;ay_0+d\right)$ on $y=af\big(b(x-c)\big)+d$.
- Factorise the inside before reading the translation, for example $f(2x-6)=f\big(2(x-3)\big)$.
- Asymptotes, domain, range, intercepts and turning points all transform with the same rules.
- Vertex form, $ka^{x-h}+c$ and $\dfrac a{x-h}+k$ are transformations of parent graphs; for exponentials a horizontal shift equals a vertical stretch.
- Describe fully: type, direction or axis, size and order.
