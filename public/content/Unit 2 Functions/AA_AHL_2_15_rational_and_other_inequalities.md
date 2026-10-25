# Rational and other inequalities

> **AHL 2.15 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- solve inequalities of the form $f(x)>g(x)$ graphically and analytically;
- solve rational inequalities using a sign diagram, without multiplying by an expression of unknown sign;
- solve polynomial inequalities of degree three or more, taking account of repeated factors;
- treat strict and non-strict inequalities correctly, including excluded values and isolated solutions;
- find the domain of an expression involving a square root of a rational function;
- use technology to solve inequalities that cannot be solved algebraically;
- find parameter values for which an inequality holds for all $x$;
- interpret an inequality in a modelling context and state the solution as an interval.

## Why this topic matters

Equations tell you *when* two quantities are equal; inequalities tell you *when* one is bigger than the other, and in real life that is usually the more useful question. When is the concentration of a drug above the therapeutic level? When is a company's income greater than its costs? When does a population exceed the capacity of a habitat? These are all questions of the form $f(x)>g(x)$. At SL you solved linear and quadratic inequalities. At HL the functions are more complicated: rational functions, cubics, and combinations involving exponentials and logarithms. The standard algebraic tool is the **sign diagram**, which replaces the hazardous habit of multiplying both sides by an unknown expression. When algebra fails, the graph does the job. This chapter also trains an important examination skill, which is to present a logically complete solution, with critical values, a sign analysis, and a clear final statement in correct inequality notation. Errors with strictness and excluded values cost marks even when the main method is right, so it is worth practising every case.

## Core ideas

### The golden rule

Never multiply or divide both sides of an inequality by an expression that could be negative (or zero) unless you consider both cases. For example $\dfrac3{x-1}<2$ cannot be turned into $3<2(x-1)$ without a case split, because $x-1$ may be negative. The safe method is to **move everything to one side, combine into a single fraction, factorise, and analyse the sign**. The result is an inequality comparing a single expression with zero, which is a question of where that expression is positive or negative.

### The sign-diagram method

To solve $\dfrac{P(x)}{Q(x)}>0$ (or $<$, $\ge$, $\le$) after bringing everything to one side:

1. **Factorise** the numerator and the denominator completely into linear factors and irreducible quadratics (which have constant sign).
2. **Critical values:** list the zeros of the numerator (where the expression is $0$) and the zeros of the denominator (where it is undefined), in increasing order.
3. **Sign in each interval:** test one value in each interval between consecutive critical values, or use the rule that the sign changes when passing a critical value of *odd* multiplicity and does not change at one of *even* multiplicity.
4. **Select the intervals** with the required sign.
5. **End points:** include a zero of the numerator only when the inequality is non-strict ($\ge$ or $\le$); never include a zero of the denominator.
6. **State** the answer with correct notation, as a union of intervals, with "or".

An irreducible quadratic factor such as $x^{2}+x+1$ (with $\Delta<0$) is always positive when its leading coefficient is positive, so it does not affect the sign and can be dropped from the analysis (while remembering that it exists).

### Polynomial inequalities

A polynomial is a numerator with no denominator, and the same method applies: factorise (AHL 2.12), list the zeros, and analyse the sign. For $x^{3}-x>0$, factorise as $x(x-1)(x+1)>0$. The zeros are $-1,\,0,\,1$. For large positive $x$ the product is positive. The sign changes at each simple zero, so the sign is $+$ for $x>1$, $-$ for $0<x<1$, $+$ for $-1<x<0$ and $-$ for $x<-1$. The solution is $-1<x<0$ or $x>1$.

### Repeated factors

A factor with even multiplicity such as $(x-1)^{2}$ does not change the sign, and it adds an *isolated solution* to non-strict inequalities where the expression is zero. For example, $(x-1)^{2}(x+2)\le0$: the factor $(x-1)^{2}\ge0$ is zero at $x=1$ and positive elsewhere, so the sign of the product is that of $(x+2)$ except at $x=1$. The solution is $x\le-2$ together with the single point $x=1$. Write that explicitly: "$x\le-2$ or $x=1$".

### Comparing two functions: $f(x)>g(x)$

To solve $f(x)>g(x)$, you have two routes.

- **Algebraic:** subtract, $f(x)-g(x)>0$, combine and use a sign diagram.
- **Graphical:** plot $y=f(x)$ and $y=g(x)$, find the intersections (solutions of $f=g$), and read off where the graph of $f$ is above the graph of $g$. For this you must understand the behaviour at the asymptotes and between the intersections.

For equations with no algebraic solution, such as $e^{x}>x+2$, the graphical method is the only one: the crossing points are $x\approx-1.84$ and $x\approx1.15$, and the exponential curve is above the line outside these points, so $x<-1.84$ or $x>1.15$.

### Inequalities that hold for all $x$

For a rational function $\dfrac{ax^{2}+bx+c}{dx^{2}+ex+f}$ to be positive for all real $x$, a common situation is when the denominator is always positive (negative discriminant, positive leading coefficient), so that the problem reduces to the numerator being positive for all $x$, i.e. $a>0$ and $\Delta<0$. Always check the sign and existence of the denominator first. The condition then gives an inequality in the parameter.

### Domains involving inequalities

The domain of $\sqrt{h(x)}$ requires $h(x)\ge0$ and the domain of $\ln h(x)$ requires $h(x)>0$. When $h(x)$ is rational, these are rational inequalities. For $f(x)=\sqrt{\dfrac{x+1}{x-2}}$ we need $\dfrac{x+1}{x-2}\ge0$ with $x\ne2$, so the domain is $x\le-1$ or $x>2$.

### Modelling with inequalities

In a context, "greater than" and "at least" mean $>$ and $\ge$ respectively. Interpret the interval in the language of the problem, give units, and consider the context's domain (for example $t\ge0$). The *length* of the interval is often asked, such as the time for which a concentration exceeds a threshold.

## Worked examples

### Example 1 (a basic rational inequality, 5 marks)

Solve $\dfrac{x+1}{x-2}\ge0$.

*Solution.* The critical values are $x=-1$ (numerator zero) and $x=2$ (denominator zero). For $x>2$ both factors are positive, giving $+$. For $-1<x<2$, the numerator is positive and the denominator negative, giving $-$. For $x<-1$ both are negative, giving $+$. The expression is zero at $x=-1$, which is included because the inequality is non-strict, and undefined at $x=2$, which is excluded. So $x\le-1$ or $x>2$.

Check $x=0$: $\dfrac{1}{-2}<0$, correctly excluded.

### Example 2 (comparison with a constant, 6 marks)

Solve $\dfrac{2x-1}{x+3}<1$.

*Solution.* Move everything to one side: $\dfrac{2x-1}{x+3}-1=\dfrac{2x-1-(x+3)}{x+3}=\dfrac{x-4}{x+3}<0$. The critical values are $-3$ and $4$. The expression is positive for $x<-3$, negative for $-3<x<4$ and positive for $x>4$. So $-3<x<4$.

Check $x=0$: $\dfrac{-1}{3}<1$ ✓. Check $x=5$: $\dfrac{9}{8}>1$, correctly excluded.

### Example 3 (two fractions, 7 marks)

Solve $\dfrac3{x-1}\ge\dfrac2{x+2}$.

*Solution.* $\dfrac3{x-1}-\dfrac2{x+2}=\dfrac{3(x+2)-2(x-1)}{(x-1)(x+2)}=\dfrac{x+8}{(x-1)(x+2)}\ge0$. The critical values are $-8$, $-2$ and $1$. For $x>1$ all factors are positive, giving $+$. For $-2<x<1$ the denominator is negative, giving $-$. For $-8<x<-2$, the denominator is positive again (both factors negative) and the numerator positive, giving $+$. For $x<-8$ the numerator is negative, giving $-$. Including the zero at $-8$ and excluding $-2$ and $1$: $-8\le x<-2$ or $x>1$.

Check $x=-5$: $\dfrac3{-6}=-0.5$ and $\dfrac2{-3}=-0.667$, and $-0.5\ge-0.667$ ✓.

### Example 4 (a cubic, 5 marks)

Solve $x^{3}-x>0$.

*Solution.* $x(x-1)(x+1)>0$ with zeros $-1,0,1$. For $x>1$ the product is positive. The sign alternates at each simple zero: negative on $(0,1)$, positive on $(-1,0)$, negative for $x<-1$. The solution is $-1<x<0$ or $x>1$.

### Example 5 (a repeated factor, 5 marks)

Solve $(x-1)^{2}(x+2)\le0$.

*Solution.* The factor $(x-1)^{2}$ is never negative and is zero at $x=1$. The sign of the product is the sign of $(x+2)$ except at $x=1$, where the product is $0$. $(x+2)\le0$ gives $x\le-2$. In addition, $x=1$ makes the product zero, which satisfies "$\le0$". So $x\le-2$ or $x=1$.

### Example 6 (a rational inequality with two quadratics, 8 marks)

Solve $\dfrac{x^{2}-x-6}{x^{2}-1}\le0$.

*Solution.* Factorise: $\dfrac{(x-3)(x+2)}{(x-1)(x+1)}\le0$ with critical values $-2,-1,1,3$. For $x>3$ the expression is positive. Going down, the sign changes at each simple critical value: negative on $(1,3)$, positive on $(-1,1)$, negative on $(-2,-1)$, positive for $x<-2$. For $\le0$ choose the negative intervals and include the zeros at $x=-2$ and $x=3$ but not the excluded values $\pm1$. So $-2\le x<-1$ or $1<x\le3$.

Check $x=2$: $\dfrac{4-2-6}{3}=-\dfrac43\le0$ ✓.

### Example 7 (a quadratic denominator with no real roots, 4 marks)

Solve $\dfrac{x^{2}+1}{x^{2}+x+1}>0$.

*Solution.* The numerator satisfies $x^{2}+1\ge1>0$. The denominator has $\Delta=1-4<0$ and positive leading coefficient, so it is always positive. The fraction is positive for every real $x$: the solution is all real numbers.

### Example 8 (a graphical inequality, 5 marks)

Solve (a) $e^{x}>x+2$; (b) $\ln x<x-2$.

*Solution.* (a) The graphs of $y=e^{x}$ and $y=x+2$ intersect at $x\approx-1.84$ and $x\approx1.15$, with the exponential above the line outside these points. So $x<-1.84$ or $x>1.15$. (b) The graphs of $y=\ln x$ and $y=x-2$ intersect at $x\approx0.159$ and $x\approx3.15$. The line is above the logarithm outside these points, within the domain $x>0$: $0<x<0.159$ or $x>3.15$.

Check (b) with $x=1$: $\ln1=0$ and $1-2=-1$, so $0<-1$ is false, and $1$ lies between the roots, correctly excluded.

### Example 9 (a parameter, 6 marks)

Find the values of $k$ for which $\dfrac{x^{2}+kx+1}{x^{2}+x+1}>0$ for all real $x$.

*Solution.* The denominator has $\Delta=-3<0$ and positive leading coefficient, so it is always positive. The fraction is positive for all $x$ if and only if the numerator is positive for all $x$: $\Delta=k^{2}-4<0$, so $-2<k<2$.

### Example 10 (a context, 6 marks)

The concentration of a drug in the blood is $c(t)=\dfrac{5t}{t^{2}+4}$ mg/L, where $t\ge0$ is the time in hours. For how long is the concentration at least $1$ mg/L?

*Solution.* Solve $\dfrac{5t}{t^{2}+4}\ge1$. Since $t^{2}+4>0$, multiplying is safe: $5t\ge t^{2}+4$, so $t^{2}-5t+4\le0$, i.e. $(t-1)(t-4)\le0$, giving $1\le t\le4$. The concentration is at least $1$ mg/L for $3$ hours, from $t=1$ to $t=4$.

Check: $c(2)=1.25\ge1$ ✓; $c(5)=\dfrac{25}{29}<1$ ✓.

### Example 11 (the reciprocal trap, 4 marks)

Solve $\dfrac1x<1$.

*Solution.* The incorrect step is to multiply by $x$ and conclude $1<x$. Instead, $\dfrac1x-1=\dfrac{1-x}{x}<0$, with critical values $0$ and $1$. The expression is negative for $x<0$ (numerator positive, denominator negative), positive for $0<x<1$ and negative for $x>1$. So $x<0$ or $x>1$.

Check $x=-2$: $-0.5<1$ ✓ (the naive method would have missed this).

### Example 12 (a domain, 4 marks)

Find the domain of $f(x)=\sqrt{\dfrac{x+1}{x-2}}$.

*Solution.* We need $\dfrac{x+1}{x-2}\ge0$ with $x\ne2$. From Example 1 the solution is $x\le-1$ or $x>2$. So the domain is $x\le-1$ or $x>2$.

### Example 13 (comparing a function with a multiple of $x$, 6 marks)

Solve $\dfrac{x}{x-1}>x$.

*Solution.* $\dfrac{x}{x-1}-x=\dfrac{x-x(x-1)}{x-1}=\dfrac{x(2-x)}{x-1}>0$. The critical values are $0$, $1$ and $2$. For $x<0$: numerator $x(2-x)<0$ and the denominator is negative, giving $+$. For $0<x<1$: numerator positive, denominator negative, giving $-$. For $1<x<2$: both positive, giving $+$. For $x>2$: numerator negative and denominator positive, giving $-$. So $x<0$ or $1<x<2$.

Check $x=-1$: $\dfrac{-1}{-2}=0.5>-1$ ✓. Check $x=1.5$: $3>1.5$ ✓.

## Using your GDC

A GDC can solve almost any inequality. Plot $y=f(x)$ and $y=g(x)$ and find the intersections with the *intersect* tool; then read which graph is above between and outside the intersections. Alternatively, plot $y=f(x)-g(x)$ and find the zeros, then determine where the graph is above or below the axis. For rational functions, the window must be chosen to show the asymptotes; check that the sign changes where you expect them at the vertical asymptotes. Use the table to test the sign in each interval, or evaluate the expression at a test point. To find where a model exceeds a threshold, plot the horizontal line at the threshold value. For a parameter question, plot with several values of the parameter and see what changes. Remember that a GDC will show solutions to a *non-strict* inequality exactly as it does for a strict one: you must supply the correct end-point notation, and for rational inequalities remember that asymptote values are never included. Menu names vary by model.

## Common mistakes

1. **Multiplying by an expression of unknown sign** and not reversing the inequality, or losing a whole interval (as in $\dfrac1x<1$).
2. **Cancelling a common factor** without considering where it is zero or negative.
3. **Including a zero of the denominator** in the solution.
4. **Dropping the isolated solution** from a repeated factor in a non-strict inequality.
5. **Writing two intervals as a chain**, such as $x<-3$ and $x>4$ as "$4<x<-3$".
6. **Wrong sign diagram** from failing to account for double factors, which do not change the sign.
7. **Including end points** for a strict inequality, or excluding them for a non-strict one.
8. **Forgetting the domain** of the original expression when the inequality involves logarithms or square roots.

## Exam technique and command terms

**Solve the inequality** requires a final answer in the form of intervals or inequalities with correct strictness. **Find the set of values of $x$** means the same. **Solve graphically** means to use technology, with a sketch showing the intersection points. **Hence solve** uses an earlier part, for instance a factorisation or a sketch. **Determine the values of $k$ for which** requires a condition on a discriminant and a final inequality in $k$.

A typical full-mark answer to a rational inequality shows: (i) everything moved to one side; (ii) a single factorised fraction; (iii) the critical values; (iv) a sign table or diagram; (v) the final answer in the correct form. The word *or* is needed between separate intervals. On Paper 2, if technology is allowed and the equation cannot be solved algebraically, use the GDC, but give the intersection values to $3$ significant figures and the solution intervals with the correct inequality signs. Always check one test value from each interval claimed in your solution, because it takes only a few seconds.

## Connections

SL 2.7 provided quadratic inequalities and SL 2.8 gave the simple rational case. AHL 2.12 gives the factorisation and the repeated roots that appear in polynomial inequalities, AHL 2.13 provides the asymptote behaviour used to read graphs of rational functions, and AHL 2.14 uses symmetry that can halve the work. AHL 2.16 treats inequalities with the modulus, which are solved by a similar sign analysis or by squaring. In Unit 3, trigonometric inequalities such as $\sin x>\tfrac12$ are solved with the unit circle or a sketch of the graph (SL 3.7 and 3.8). In Unit 5, the sign of $f'(x)$ tells you where a function is increasing and the sign of $f''(x)$ tells you where it is concave up, and each is a sign-diagram problem exactly like this chapter. Optimisation problems with constraints, and the convergence of series (for example $|r|<1$ in a geometric series, SL 1.8), also require solving inequalities. In Unit 4, confidence intervals and hypothesis tests involve inequalities such as $P(X\ge k)\le0.05$.

## Check your understanding

1. Solve $\dfrac{x-3}{x+1}\ge0$.
2. Solve $\dfrac{3x+1}{x-2}<2$.
3. Solve $\dfrac2{x+1}\le\dfrac1{x-2}$.
4. Solve $x^{3}-4x\le0$.
5. Solve $(x-1)^{2}(x+2)\ge0$.
6. Solve $\dfrac{x^{2}-4}{x^{2}-9}<0$.
7. Find the domain of $f(x)=\sqrt{\dfrac{x-1}{x+3}}$.
8. Find the values of $k$ for which $\dfrac{x^{2}+kx+4}{x^{2}+x+1}>0$ for all $x$.
9. Solve $\ln x>3-x$, giving the end point to $3$ significant figures.
10. The concentration of a drug is $c(t)=\dfrac{8t}{t^{2}+16}$ mg/L for $t\ge0$ hours. For how long is $c(t)\ge0.8$?

### Answers

1. Critical values $-1$ and $3$. The expression is positive for $x<-1$, negative on $(-1,3)$ and positive for $x>3$, zero at $3$. So $x<-1$ or $x\ge3$.
2. $\dfrac{3x+1}{x-2}-2=\dfrac{x+5}{x-2}<0$, so $-5<x<2$.
3. $\dfrac2{x+1}-\dfrac1{x-2}=\dfrac{x-5}{(x+1)(x-2)}\le0$. Critical values $-1,2,5$. The expression is negative for $x<-1$, positive on $(-1,2)$, negative on $(2,5)$ and positive for $x>5$. So $x<-1$ or $2<x\le5$.
4. $x(x-2)(x+2)\le0$ with zeros $-2,0,2$. The product is negative for $x<-2$, positive on $(-2,0)$, negative on $(0,2)$ and positive for $x>2$. So $x\le-2$ or $0\le x\le2$.
5. $(x-1)^{2}\ge0$, so the sign is that of $(x+2)$, and $x=1$ gives zero, which is allowed. So $x\ge-2$.
6. $\dfrac{(x-2)(x+2)}{(x-3)(x+3)}<0$ with critical values $-3,-2,2,3$. The expression is positive for $x<-3$, negative on $(-3,-2)$, positive on $(-2,2)$, negative on $(2,3)$ and positive for $x>3$. So $-3<x<-2$ or $2<x<3$.
7. $\dfrac{x-1}{x+3}\ge0$ with $x\ne-3$: $x<-3$ or $x\ge1$.
8. The denominator is always positive, so we need $x^{2}+kx+4>0$ for all $x$: $k^{2}-16<0$, so $-4<k<4$.
9. Solve $\ln x=3-x$: $x\approx2.21$. The left side increases and the right side decreases, so $\ln x>3-x$ for $x>2.21$.
10. $\dfrac{8t}{t^{2}+16}\ge0.8$ gives $8t\ge0.8t^{2}+12.8$, so $t^{2}-10t+16\le0$ and $(t-2)(t-8)\le0$. So $2\le t\le8$ and the duration is $6$ hours.

## Summary

- Never multiply by an expression of unknown sign. Move everything to one side, make a single factorised fraction, and use a sign diagram.
- Critical values are the zeros of the numerator (included only for non-strict inequalities) and of the denominator (never included).
- The sign changes at odd-multiplicity factors and does not change at even-multiplicity factors, but an even factor gives an isolated zero.
- Graphical solution: intersections of $y=f(x)$ and $y=g(x)$, then read where one is above the other. This works for equations without an algebraic solution.
- For "all $x$" problems, check the denominator's sign first; then use $\Delta<0$.
- Domains of $\sqrt{\ }$ and $\ln$ give inequalities. Always write the final answer as correct intervals joined with "or".

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 2.15. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
