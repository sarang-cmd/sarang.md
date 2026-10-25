# Solving equations graphically and analytically

> **SL 2.10 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- decide whether an equation should be solved analytically (by algebra), graphically (by technology), or by a combination;
- solve equations by inverse operations, factorisation, logarithms, substitution and squaring, and detect extraneous solutions;
- solve equations that cannot be solved by algebra, using the intersection or zero tools of a GDC, to $3$ significant figures;
- use a graph to determine how many solutions an equation has, and how the number changes with a parameter;
- solve simultaneous equations where one or both are non-linear;
- set up equations from a context, solve them, check against the domain and interpret the result;
- present graphical solutions in a way that earns the marks: the equation entered, the sketch, the values found.

## Why this topic matters

Not every equation can be solved by algebra. You can solve $x^{2}-5x+6=0$ with a factorisation, but $e^{x}=x+2$ and $x^{3}-3x+1=0$ have solutions that no combination of the algebraic operations you know can give in closed form. The IB course acknowledges this by testing both skills. On Paper 1, you need to solve equations analytically and exactly, and Paper 2 expects you to use technology without hesitation. The best candidates carry both skills and also the judgement to select between them: they notice when an equation is a quadratic in disguise, and when to take two minutes to type it into the GDC. In applications, the equation is usually *part* of a bigger question, and getting the solution right is the gateway to marks for the interpretation that follows. This chapter brings the earlier techniques together, so it is as much a review as a new topic, and it introduces the habits that make solutions secure: checking, sketching and counting solutions.

## Core ideas

### Analytic methods: a toolkit

An equation is solved *analytically* when you manipulate it algebraically to isolate the unknown. The main tools are:

| Type of equation | Standard method |
|---|---|
| Linear | Inverse operations; collect terms |
| Quadratic | Factorise, complete the square, formula (SL 2.7) |
| Exponential $ka^{x}=B$ | Divide, take logarithms (SL 1.7) |
| Logarithmic | Combine with the laws, then rewrite as an exponential |
| Quadratic in disguise | Substitution $u=x^{2}$, $u=\sqrt x$, $u=a^{x}$ |
| Rational | Multiply through by the common denominator; check excluded values |
| Radical | Isolate the root, square, solve, check |
| Factorable polynomial | Factor theorem and factorisation (AHL 2.12 for more) |

The general principle: *do the same thing to both sides*, and note any step that could lose or gain solutions. Dividing by an expression containing $x$ can lose the solutions where that expression is zero; squaring both sides can introduce solutions that satisfy the squared equation but not the original. Taking logarithms requires positive arguments; multiplying through by an expression with $x$ requires that it is non-zero.

### Extraneous solutions

A solution is **extraneous** if it appears in the working but fails the original equation. They arise in three typical places:

1. **Squaring:** $\sqrt{2x+3}=x$ squares to $2x+3=x^{2}$ with solutions $3$ and $-1$; but $x=-1$ gives $\sqrt1=1\ne-1$, so it is rejected.
2. **Logarithms:** $\ln x+\ln(x-2)=\ln3$ leads to $x(x-2)=3$, with $x=3$ or $x=-1$, but $\ln(-1)$ is undefined, so $x=-1$ is rejected.
3. **Denominators:** a solution that makes a denominator zero is rejected.

Always substitute into the *original* equation, or check against the domain, before accepting a solution.

### Graphical methods

To solve $f(x)=g(x)$ graphically, plot $y=f(x)$ and $y=g(x)$ on the same axes. The $x$-coordinates of the points of intersection are the solutions. To solve $h(x)=0$, plot $y=h(x)$ and find its $x$-intercepts (zeros or roots). Both tools are available on every GDC, and the second is a special case of the first with $g(x)=0$. The graphical approach is valid for any equation that you can enter, and so can solve equations such as $\cos x=x$ or $x^{3}-2x-5=0$ that have no algebraic solution.

To use the method well:

1. **Enter the equation faithfully**, with brackets, and in the correct angle mode where trig is used.
2. **Choose a window** large enough to show all intersections; look for solutions in both directions and near asymptotes. Use the table or zoom to confirm that no extra intersections are hidden.
3. **Record the values** to $3$ significant figures, or as the question specifies; store the exact values if you need them for later steps.
4. **Sketch** the graph on your answer sheet with the intersections labelled, as this is often required for method marks.

### Counting solutions

How many solutions does $f(x)=k$ have? Imagine the horizontal line $y=k$ sliding up and down across the graph of $f$; the number of solutions is the number of intersections. For the cubic $f(x)=x^{3}-3x$, which has a local maximum $f(-1)=2$ and a local minimum $f(1)=-2$:

- for $-2<k<2$, the line cuts three times: three solutions;
- for $k=\pm2$, it touches at a turning point and cuts once elsewhere: two solutions (one repeated);
- for $|k|>2$, it cuts once: one solution.

For a quadratic $x^{2}-4x+k=0$, a solution exists if and only if $\Delta=16-4k\ge0$, so $k\le4$, matching the vertex of the parabola $y=x^{2}-4x$ at $(2,-4)$: the equation $x^{2}-4x=-k$ has solutions when $-k\ge-4$. This graph-based counting is a quick alternative to the discriminant and generalises to curves where no discriminant is available.

### Simultaneous equations with non-linear terms

To solve a pair where one equation is linear, substitute the linear expression into the other, solve the resulting equation (often a quadratic), and then substitute back into the linear equation for the second variable. For example, the intersection of the circle $x^{2}+y^{2}=25$ with the line $y=x+1$ leads to $2x^{2}+2x-24=0$. For pairs where both are non-linear, use the GDC: plot both curves in the form $y=\dots$ and find the intersections, and give coordinates, not only the $x$-values.

### Equations from context

For a problem in words:

1. define the variable and its units;
2. write the equation(s) from the context;
3. solve analytically or with the GDC;
4. check each solution against the domain of the context (time must be positive; counts must be whole numbers);
5. answer the question in a sentence with units.

Where a question asks for "the first time that" or "the least number of", pay attention to the direction of an inequality and to rounding: a whole-number answer should be rounded in the direction that satisfies the condition, which is not always the standard rounding.

### Combining methods

Sometimes you should do part of the work by algebra and the rest by the GDC. For example, to solve $e^{2x}-4e^{x}-5=0$, the substitution $u=e^{x}$ reduces it to a quadratic with solutions $u=5$ and $u=-1$; since $e^{x}>0$, only $u=5$ is accepted, giving $x=\ln5$. If a part of the equation is awkward, such as $\ln x=x-2$ (solutions about $0.159$ and $3.15$, as in SL 2.4), no algebra works and the GDC takes over. Learn to recognise these early: spending four minutes trying to solve $e^{x}=x+2$ by algebra is a loss of time that could have been used elsewhere.

## Worked examples

### Example 1 (a polynomial equation, 5 marks)

Solve $x^{3}-4x^{2}+x+6=0$.

*Solution.* Test $x=-1$: $-1-4-1+6=0$, so $(x+1)$ is a factor. Divide: $x^{3}-4x^{2}+x+6=(x+1)(x^{2}-5x+6)=(x+1)(x-2)(x-3)$. The solutions are $x=-1,\,2,\,3$.

Check the graphical approach: the GDC shows three $x$-intercepts at these values.

### Example 2 (a polynomial with no nice roots, 4 marks)

Solve $x^{3}-3x+1=0$, giving answers to $3$ significant figures.

*Solution.* There is no obvious factor, so plot $y=x^{3}-3x+1$ and use the *zero* tool. The roots are $x\approx-1.88$, $x\approx0.347$ and $x\approx1.53$.

Check: $f(0.347)=0.0418-1.041+1=0.0008\approx0$ ✓.

### Example 3 (exponential equals linear, 5 marks)

Solve $e^{x}=x+2$.

*Solution.* Plot $y=e^{x}$ and $y=x+2$. The graphs intersect at two points: $x\approx-1.84$ and $x\approx1.15$. (The line is tangent to $e^{x}$ nowhere; at $x=0$ we have $e^{0}=1<2$, so the line is above the curve between the roots.)

### Example 4 (algebra and the GDC agree, 6 marks)

Solve $2^{x}=x^{2}$.

*Solution.* Plot $y=2^{x}$ and $y=x^{2}$. The intersections are at $x=2$, $x=4$ and $x\approx-0.767$. The first two can be checked by hand: $2^{2}=4=2^{2}$ and $2^{4}=16=4^{2}$. The third requires technology. Three solutions arise because the exponential eventually overtakes the parabola, crosses it twice for positive $x$, and meets its left branch once.

### Example 5 (a radical equation, 5 marks)

Solve $\sqrt{2x+3}=x$.

*Solution.* Squaring: $2x+3=x^{2}$, so $x^{2}-2x-3=0$ and $(x-3)(x+1)=0$. Check $x=3$: $\sqrt9=3$ ✓. Check $x=-1$: $\sqrt1=1\ne-1$, so it is extraneous. The only solution is $x=3$.

### Example 6 (logarithmic equations, 6 marks)

Solve $\ln x+\ln(x-2)=\ln3$.

*Solution.* The domain requires $x>2$. Combining, $\ln\big(x(x-2)\big)=\ln3$, so $x^{2}-2x=3$, giving $x^{2}-2x-3=0$ and $x=3$ or $x=-1$. Only $x=3$ is in the domain, so $x=3$.

Check: $\ln3+\ln1=\ln3$ ✓.

### Example 7 (the number of solutions, 7 marks)

For $f(x)=x^{3}-3x$, find the values of $k$ for which $f(x)=k$ has exactly three solutions.

*Solution.* The turning points of $f$ are at $x=-1$ (value $2$) and $x=1$ (value $-2$), found by technology. The horizontal line $y=k$ crosses a cubic three times when it lies strictly between the local minimum and local maximum values. So $-2<k<2$.

Check with $k=0$: $x^{3}-3x=x(x^{2}-3)=0$ gives $x=0,\pm\sqrt3$: three solutions ✓.

### Example 8 (a parameter and the quadratic, 4 marks)

For which $k$ does $x^{2}-4x+k=0$ have real solutions?

*Solution.* $\Delta=16-4k\ge0$, so $k\le4$. Geometrically, $y=x^{2}-4x$ has minimum value $-4$ at $x=2$, and the equation says $y=-k$, which has solutions when $-k\ge-4$, i.e. $k\le4$. The two methods agree.

### Example 9 (a non-linear pair, 6 marks)

Solve $x^{2}+y^{2}=25$ and $y=x+1$.

*Solution.* Substitute: $x^{2}+(x+1)^{2}=25$, so $2x^{2}+2x-24=0$, hence $x^{2}+x-12=0$ and $(x+4)(x-3)=0$. So $x=-4$ or $x=3$, and the points are $(-4,-3)$ and $(3,4)$.

Check: $(-4)^{2}+(-3)^{2}=25$ ✓ and $3^{2}+4^{2}=25$ ✓.

### Example 10 (a log equation with a repeated unknown, 5 marks)

Solve $2\ln x=\ln(x+6)$.

*Solution.* $\ln x^{2}=\ln(x+6)$ with $x>0$, so $x^{2}=x+6$, giving $(x-3)(x+2)=0$. Since $x>0$, $x=3$. The solution $x=-2$ is extraneous.

### Example 11 (substitution with rejection, 5 marks)

Solve $e^{2x}-4e^{x}-5=0$.

*Solution.* Let $u=e^{x}>0$: $u^{2}-4u-5=0$, so $(u-5)(u+1)=0$ and $u=5$ or $u=-1$. Since $u>0$, only $u=5$ works: $x=\ln5\approx1.61$.

### Example 12 (a context where the GDC is needed, 7 marks)

Company A's yearly income is $50+12t$ thousand euros and company B's is $20(1.3)^{t}$ thousand euros, where $t$ is the number of years. (a) When are the incomes equal? (b) From which year does B exceed A?

*Solution.* (a) Solve $20(1.3)^{t}=50+12t$ by plotting both curves for $t\ge0$. For $t\ge0$, the intersection is at $t\approx7.38$ years. (There is another crossing at a negative $t$, outside the domain.) (b) For $t>7.38$, B's income exceeds A's, so from the eighth year (the whole-year count, $t=8$) onward: at $t=8$, B is $163.1$ and A is $146$.

### Example 13 (an equation with no algebraic solution, 4 marks)

Solve $e^{-x}=x$.

*Solution.* Plotting $y=e^{-x}$ (decreasing) and $y=x$ (increasing) shows exactly one intersection, at $x\approx0.567$. There is only one because one function is strictly decreasing and the other strictly increasing.

## Using your GDC

The GDC is the main tool of this chapter, so master the routine. For $f(x)=g(x)$: enter both in the function list, graph, choose a window with a sufficient range, and use the *intersect* tool for each crossing. Use the arrow keys to move the cursor near each crossing before accepting. For $h(x)=0$ use the *zero* tool, giving the lower and upper bounds around each root. Some GDCs have a dedicated *solver* that accepts the equation directly and an initial guess; the result depends on the starting value, so try several guesses to find all roots, and confirm with the graph. The *table* of values detects sign changes and tells you where to look. When the graph rises very steeply (exponentials), a narrow window may be necessary. To count solutions for varying $k$, graph $y=k$ as a horizontal line with several values. When solving trigonometric equations, check the angle mode (radians unless degrees are specified). Menu names vary by model.

Present the solution in the answer: write the equation(s) entered, make a quick sketch with the intersections labelled, and write down the values to $3$ significant figures. The examiners want to see that you used the graph; just writing an answer without any justification can be given less credit if it is wrong.

## Common mistakes

1. **Missing solutions on the GDC** by using too small a window; always check both directions and use the table.
2. **Giving one decimal place or too many**; follow the required $3$ significant figures, unless otherwise stated.
3. **Not rejecting extraneous solutions** after squaring or combining logarithms.
4. **Dividing by an expression containing $x$**, thereby losing a solution, for example dividing $x^{2}=3x$ by $x$ and missing $x=0$.
5. **Giving only the $x$-values** for a simultaneous system, when coordinates are asked.
6. **Using the GDC in degree mode** when the question is in radians (or the reverse).
7. **Rounding in the middle of a multi-part problem**; use stored values.
8. **Using an algebraic method when a graph is quicker** (and getting stuck), or using the GDC when exact values are demanded.

## Exam technique and command terms

**Solve** (analytically) means to show algebraic working to find the solutions. **Solve graphically** or **use your GDC to solve** means to give values obtained from a graph, with a sketch. **Find the exact solutions** rules out decimals. **Find the points of intersection** requires coordinates. **Determine the number of solutions** often uses a sketch. **Hence** requires you to use the preceding result, such as a substitution or a factorisation from an earlier part. **Show that** requires the algebra to be complete, because there is no answer to check against beyond what is given.

On a Paper 2 question about a model, it is often more efficient to go straight to the GDC; on a Paper 1 question, practise algebraic solutions and the structure that allows factorisation. For equations that appear unsolvable on Paper 1, there is nearly always a hidden quadratic or a factorisation. Always write down the original equation, show the substitution if used, and state the domain restriction when rejecting a solution; each of these steps typically carries a mark.

## Connections

This chapter draws on SL 2.7 (quadratic equations), SL 1.7 (laws of logarithms), SL 2.8 (rational equations), SL 2.9 (exponential and logarithmic models), and SL 2.4 (graph features and tangency). It also leads to SL 2.11, where transformations change the number and position of solutions, and to Unit 3, where trigonometric equations are solved both analytically and graphically (SL 3.8). AHL 2.12 gives you the factor and remainder theorems to find polynomial roots by algebra, AHL 2.15 develops inequalities in the same spirit, and AHL 2.16 treats equations containing the modulus. In Unit 5, finding stationary points requires solving $f'(x)=0$, finding areas requires the intersection of curves, and Newton-style iteration refines roots numerically. In Unit 4, solving for the value $a$ with $P(Z<a)=p$ is an equation solved with the inverse normal function, which is the same idea with a different tool.

## Check your understanding

1. Solve $x^{3}-7x+6=0$.
2. Solve $e^{x}=3x$, giving answers to $3$ significant figures.
3. Solve $\sqrt{x+6}=x$.
4. Solve $\ln(x+4)+\ln x=\ln5$.
5. For $f(x)=x^{2}-4x$, find the values of $k$ for which $f(x)=k$ has two distinct solutions.
6. Solve $x^{2}+y^{2}=13$ and $y=x-1$.
7. Solve $e^{2x}-3e^{x}-10=0$.
8. For $g(x)=x^{3}-12x$, find the values of $k$ for which $g(x)=k$ has three solutions.
9. Solve $3^{x}=x+5$ to $3$ significant figures.
10. Solve $\cos x=x$ (in radians) to $3$ significant figures.

### Answers

1. Test $x=1$: $1-7+6=0$. $(x-1)(x^{2}+x-6)=(x-1)(x+3)(x-2)$, so $x=1,\,2,\,-3$.
2. Graph $y=e^{x}$ and $y=3x$: $x\approx0.619$ and $x\approx1.51$.
3. $x+6=x^{2}$ gives $(x-3)(x+2)=0$. Check $x=3$: $\sqrt9=3$ ✓. $x=-2$: $\sqrt4=2\ne-2$ ✗. So $x=3$.
4. $x(x+4)=5$ with $x>0$ gives $x^{2}+4x-5=0$, so $(x+5)(x-1)=0$ and only $x=1$ is valid.
5. The minimum of $f$ is $-4$ at $x=2$, so two distinct solutions occur for $k>-4$.
6. $x^{2}+(x-1)^{2}=13$ gives $2x^{2}-2x-12=0$, so $x^{2}-x-6=0$ and $x=3$ or $-2$. The points are $(3,2)$ and $(-2,-3)$.
7. $u=e^{x}$: $u^{2}-3u-10=0$ gives $u=5$ or $-2$. Only $u=5$ is valid, so $x=\ln5\approx1.61$.
8. The turning points of $g$ are at $x=\pm2$ with $g(-2)=16$ and $g(2)=-16$, so three solutions need $-16<k<16$.
9. Plot $y=3^{x}$ and $y=x+5$: $x\approx-5.00$ and $x\approx1.74$. (The negative root is $-4.996$ before rounding.)
10. Plot $y=\cos x$ and $y=x$ in radian mode: $x\approx0.739$.

## Summary

- Choose a method: algebra for exact answers and recognisable forms; the GDC for equations with no closed-form solution.
- Always check for extraneous solutions after squaring, combining logarithms, or clearing denominators.
- Graphical solution: intersections of two graphs, or zeros of a single graph; choose the window carefully, record to $3$ significant figures, and sketch.
- The number of solutions of $f(x)=k$ is the number of intersections of $y=k$ with the graph of $f$.
- Non-linear simultaneous equations: substitute and solve, then give coordinates.
- In context, check the domain, round in the direction that satisfies the condition, and answer in a sentence with units.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.10. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
