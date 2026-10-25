# Functions | From inputs to structure

> **AA SL foundations and AA HL extensions.** Original Sarang.md guide linking the 16 code-specific Functions lessons. Work with the function as an input-output rule, a graph and an algebraic object, not just a formula to rearrange.

## The first questions to ask

Before calculating, identify the domain, range, intercepts and behavior. The **domain** is the set of allowed inputs; the **range** is the set of attainable outputs. A square root requires a nonnegative radicand if only real values are in view; a logarithm requires a strictly positive argument; a fraction requires a nonzero denominator. A simplification such as $(x^2-1)/(x-1)=x+1$ is correct for $x\ne1$, but does not restore the excluded input $x=1$. The original graph has a hole at $(1,2)$. The domain travels with the function, even if its simplified expression looks harmless.

Composition respects order: $(f\circ g)(x)=f(g(x))$. The allowed inputs must belong to the domain of $g$ **and** lead to outputs inside the domain of $f$. An inverse $f^{-1}$ reverses an input-output rule only on a one-to-one domain. The notation $f^{-1}(x)$ is not $1/f(x)$. If a parabola is restricted to one side of its turning point, that restriction is part of the inverse's definition. Always confirm an inverse by testing $f(f^{-1}(y))=y$ on its stated range.

**Booklet checked:** the learner's 2023 Version 1.0 AA HL booklet has quadratic, polynomial-root and related function rows on printed page 3 (PDF page 5). Transformations, domain restrictions and inverse reasoning in this guide must still be understood independently; a booklet row is not a substitute for them. See the formula booklet audit for the precise row mapping.

## Worked SL example: one quadratic, four views

Let $g(x)=-2(x-1)^2+8$. Its vertex is $(1,8)$, the coefficient $-2$ makes the parabola open downward, and its maximum value is $8$ on all real inputs. Expanding gives $g(x)=-2x^2+4x+6$, which immediately shows the vertical intercept $g(0)=6$. Factoring the expanded expression gives $-2(x-3)(x+1)$, so the zeros are $-1$ and $3$. The graph is symmetric about $x=1$: the zeros are each two units away from it. Vertex, expanded and factored forms answer different questions about the same function.

If the domain of $g$ is restricted to $x\geq1$, the range is $(-\infty,8]$ and $g$ has an inverse. Starting with $y=-2(x-1)^2+8$, we get $(x-1)^2=(8-y)/2$. Since $x\geq1$, take the **positive** square root: $g^{-1}(y)=1+\sqrt{(8-y)/2}$ for $y\leq8$. The negative branch would violate the original domain. As a check, $g(3)=0$ and $g^{-1}(0)=1+\sqrt4=3$.

## HL extension: rational functions and polynomial reasoning

Take $f(x)=(2x+3)/(x-1)$, with domain $x\ne1$. To find its inverse, set $y=(2x+3)/(x-1)$ and solve $y(x-1)=2x+3$, hence $(y-2)x=y+3$ and $x=(y+3)/(y-2)$. Therefore $f^{-1}(y)=(y+3)/(y-2)$, with inverse domain $y\ne2$. In the original graph $y=2$ is a horizontal asymptote: $f(x)=2+5/(x-1)$ cannot equal $2$ because its remaining term is never zero. At $x=0$, $f(0)=-3$, and $f^{-1}(-3)=0$. This single example ties the excluded input, excluded output, asymptote and inverse together.

For a polynomial, use roots and multiplicities to predict crossings. Factor $p(x)=x^3-4x^2-x+4$ by grouping: $x^2(x-4)-1(x-4)=(x-4)(x-1)(x+1)$. Its real zeros are $-1,1,4$. Each has multiplicity one, so the graph crosses the axis at each. The leading coefficient is positive: the left end falls and the right end rises. Expand the factorization to verify it, and check that the sum of roots is $4$, matching the opposite of the $x^2$ coefficient for a monic cubic. A polynomial's graph, factors and coefficient relations provide independent checks, not three disconnected facts.

A rational equation demands an additional check after clearing denominators. For $1/(x-2)=x/(x-2)$, the original domain excludes $x=2$, and multiplying both sides by $x-2$ gives $1=x$. The solution $x=1$ is allowed. By contrast, $(x-2)/(x-2)=0$ has **no** solution: simplifying to $1=0$ and keeping $x\ne2$ makes the conclusion clear. Never replace a condition that was attached to the original expression with a condition from the simplified one alone.

Transformations are easiest to reason about point by point. If $(a,b)$ lies on $y=f(x)$, then $(a+c,b)$ lies on $y=f(x-c)$, while $(a,b+d)$ lies on $y=f(x)+d$. An inside negative sign reflects inputs across the vertical axis; an outside negative sign reflects outputs across the horizontal axis. Test a known point before writing a final description, especially for expressions such as $f(2x-4)$ where both scaling and translation act on the input.

## Exam lens and common wrong turns

Paper 1 style may ask for a domain restriction, an exact inverse and a proof that the compositions work. Paper 2 style can demand graph interpretation, numerical roots or a fitted model with a meaningful context. A Paper 3 style investigation may require choosing a function family, interpreting an asymptote, and rejecting an extrapolation outside the data. These labels describe the independent practice bank, not an official assessment prediction.

- An expression having a defined algebraic inverse does not make the *unrestricted* function one-to-one.
- A horizontal asymptote need not be an unreachable value for **every** possible function. For the rational example above, algebra establishes the missing value directly.
- A tangent root of even multiplicity touches the axis rather than crossing. A change of sign alone can miss it.
- After squaring an equation or multiplying by a variable expression, substitute candidates into the original statement; new roots may be spurious.

## Check yourself

If $h(x)=\sqrt{x-3}$ on the reals, its domain is $[3,\infty)$ and its range is $[0,\infty)$. Its inverse is $h^{-1}(y)=y^2+3$ for $y\geq0$. If $q(x)=x^2-5x+6$, the roots are $2$ and $3$, its axis of symmetry is $x=5/2$, and $q(0)=6$. For the full syllabus-code progression, return to the individual lessons and their original linked questions.
