# Quadratic equations and inequalities

> **SL 2.7 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- solve quadratic equations by factorising, completing the square, the quadratic formula and technology, and choose the best method;
- give exact solutions (with surds) or decimal solutions to three significant figures as requested;
- solve equations that reduce to quadratics by substitution, including those involving $x^{4}$, $\sqrt x$ and exponentials, and reject invalid solutions;
- solve rational equations that lead to a quadratic, checking for excluded values;
- solve quadratic inequalities using a sketch or a sign diagram and state the solution set in inequality or interval notation;
- use the discriminant to find parameter values for which an inequality holds for all $x$;
- find the intersection of a line and a parabola and set up quadratic equations from word problems.

## Why this topic matters

Quadratic equations are everywhere. When a ball lands, when a business breaks even, when two curves cross, when a rectangle has a given area and perimeter, a quadratic equation is waiting to be solved. This is also where the algebra of the first unit meets the graphs of the second: the solutions of $ax^{2}+bx+c=0$ are the zeros of a parabola, and the solutions of an inequality are the intervals where the parabola lies above or below the axis. In the IB examination, quadratic equations and inequalities have one of the highest question counts in the whole course because they appear as sub-steps in so many topics: finding the intersection of a line and a curve, solving for a time in kinematics, finding stationary points in calculus, solving for $r$ in a geometric series. The skill needed is fluency: choosing the right method in seconds, carrying out the algebra without slips, and presenting exact answers in the correct form. This chapter builds that fluency and adds the judgement that distinguishes a secure answer from a risky one: what to check, and what to reject.

## Core ideas

### Choosing a method

To solve $ax^{2}+bx+c=0$, you have four tools.

1. **Factorising.** If you can find two numbers that multiply to $ac$ and add to $b$, split the middle term and factorise. Then use the **null factor law**: if $PQ=0$ then $P=0$ or $Q=0$. This is the fastest method when it works, and it gives exact answers. Always rearrange to have $0$ on one side first.
2. **Completing the square.** Works always and gives exact answers with surds: $x^{2}-6x+4=0$ becomes $(x-3)^{2}=5$, so $x=3\pm\sqrt5$.
3. **The quadratic formula.** $x=\dfrac{-b\pm\sqrt{b^{2}-4ac}}{2a}$, derived in SL 1.6. It always works, and the discriminant tells you in advance how many real solutions to expect. Take care with signs when $b$ is negative: write $-b$ as $-(-3)=3$.
4. **Technology.** The GDC solver or the zero tool of a graph gives decimal answers quickly; use it for Paper 2 and to check Paper 1 work. It does not give exact forms unless the question permits decimals.

A useful rule is to try factorising for about ten seconds, and if no factors are obvious, go straight to the formula. If the equation has a convenient even $b$ and $a=1$, completing the square is quick.

### Exact versus approximate answers

If a question asks for an **exact** answer, leave surds or fractions, for example $3\pm\sqrt5$ or $\dfrac{-1\pm\sqrt{13}}3$. Otherwise give decimals to $3$ significant figures, for example $0.869$ and $-1.54$. Keep full accuracy in the calculator and round only the final answer. When the discriminant is a perfect square, the roots are rational and the quadratic factorises over the integers; this is a quick check on whether factorising is possible.

### Equations that reduce to quadratics

Many equations are quadratic in disguise. Spot a repeated expression, substitute a new variable, solve, then back-substitute.

- **Quartics in $x^{2}$:** $x^{4}-5x^{2}+4=0$ with $u=x^{2}$ gives $u^{2}-5u+4=0$, so $u=1$ or $4$, hence $x=\pm1,\pm2$. Only non-negative $u$ give real $x$.
- **Square roots:** $x-5\sqrt x+6=0$ with $u=\sqrt x$ ($u\ge0$) gives $u^{2}-5u+6=0$, so $u=2$ or $3$ and $x=4$ or $9$.
- **Exponentials:** $4^{x}-3\cdot2^{x}-4=0$ with $u=2^{x}>0$ (SL 1.7).
- **Reciprocal terms:** $x+\dfrac1x=3$ becomes $x^{2}-3x+1=0$ after multiplying by $x$ (with $x\ne0$).

Always apply the *restriction* on the substitute variable (for example $u>0$) before back-substituting, since it determines which roots to reject.

### Rational equations

To solve an equation with fractions, first note the excluded values (denominators cannot be zero), then multiply every term by the common denominator to clear fractions. The resulting equation is often quadratic. Check that no solution is an excluded value; any such solution is extraneous.

### Quadratic inequalities

To solve $ax^{2}+bx+c>0$ (or $<$, $\ge$, $\le$):

1. Solve the corresponding *equation* to find the critical values.
2. Sketch the parabola, with the correct direction of opening, and mark the critical values on the $x$-axis.
3. Read off the intervals: for "$>0$" take the parts of the $x$-axis where the curve is above the axis; for "$<0$", where it is below.
4. Write the answer with correct inequality signs: strict for $<$ and $>$, inclusive for $\le$ and $\ge$.

For an upward parabola ($a>0$) with roots $p<q$: $f(x)>0$ outside the roots ($x<p$ or $x>q$) and $f(x)<0$ between them ($p<x<q$). For a downward parabola the reverse. Note that "$x<p$ **or** $x>q$" cannot be written as a single chain: $p>x>q$ is nonsense.

A **sign diagram** is an alternative: place the roots on a number line, test a value in each interval, and record the sign. For the inequality to be solved, do not divide by a quantity unless you know its sign, and never multiply by a negative without reversing the inequality.

### Inequalities that hold for all $x$

If $ax^{2}+bx+c>0$ for **all** real $x$, then the parabola must lie entirely above the axis: $a>0$ and $\Delta<0$. If $ax^{2}+bx+c<0$ for all $x$: $a<0$ and $\Delta<0$. For a quadratic with a parameter $k$, this gives an inequality in $k$ that you then solve, itself often a quadratic inequality. If "$\ge0$ for all $x$" is requested, allow $\Delta\le0$.

### Intersection of a line and a parabola

To find where $y=f(x)$ and $y=mx+c$ meet, set $f(x)=mx+c$, rearrange to a quadratic and solve. Then substitute back into the *simpler* equation (usually the line) to find the $y$-values. The discriminant of the resulting quadratic gives the number of intersections: $\Delta>0$ means two, $\Delta=0$ means tangency, $\Delta<0$ means none (SL 2.6).

### Setting up quadratic equations from words

In word problems: define the unknown with units, translate the constraints into an equation, rearrange to the standard form, solve, reject solutions that do not make sense (negative lengths, non-integers if counting), and interpret the answer in a sentence. A classic structure: a rectangle has a given perimeter and a given area, leading to $x(P/2-x)=A$.

## Worked examples

### Example 1 (factorising, 4 marks)

Solve $2x^{2}-5x-3=0$.

*Solution.* Split the middle term: $2x^{2}-6x+x-3=2x(x-3)+(x-3)=(2x+1)(x-3)$. So $x=-\dfrac12$ or $x=3$.

Check: $2(9)-15-3=0$ ✓ and $2\cdot\dfrac14+\dfrac52-3=0$ ✓.

### Example 2 (completing the square, 4 marks)

Solve $x^{2}-6x+4=0$ exactly.

*Solution.* $(x-3)^{2}-9+4=0$, so $(x-3)^{2}=5$ and $x=3\pm\sqrt5$.

### Example 3 (the formula, 5 marks)

Solve $3x^{2}+2x-4=0$, giving the answers to $3$ significant figures, and exactly.

*Solution.* $\Delta=4+48=52$. $x=\dfrac{-2\pm\sqrt{52}}{6}=\dfrac{-2\pm2\sqrt{13}}{6}=\dfrac{-1\pm\sqrt{13}}3$. Numerically $x\approx0.869$ or $x\approx-1.54$.

Check the sum: $\dfrac{-1+\sqrt{13}}3+\dfrac{-1-\sqrt{13}}3=-\dfrac23$ and $-\dfrac ba=-\dfrac23$ ✓.

### Example 4 (a quartic in $x^{2}$, 5 marks)

Solve $x^{4}-5x^{2}+4=0$.

*Solution.* Let $u=x^{2}$, so $u^{2}-5u+4=0$ and $(u-1)(u-4)=0$. Then $u=1$ gives $x=\pm1$ and $u=4$ gives $x=\pm2$. The four solutions are $x=-2,-1,1,2$.

### Example 5 (a square-root substitution, 5 marks)

Solve $x-5\sqrt x+6=0$.

*Solution.* Let $u=\sqrt x\ge0$. Then $u^{2}-5u+6=0$, so $u=2$ or $u=3$. Both are non-negative. So $x=4$ or $x=9$.

Check $x=4$: $4-10+6=0$ ✓. Check $x=9$: $9-15+6=0$ ✓.

### Example 6 (a rational equation, 6 marks)

Solve $\dfrac3{x-1}+\dfrac2{x+2}=1$.

*Solution.* The excluded values are $x=1$ and $x=-2$. Multiply by $(x-1)(x+2)$: $3(x+2)+2(x-1)=(x-1)(x+2)$, so $5x+4=x^{2}+x-2$ and $x^{2}-4x-6=0$. The formula gives $x=\dfrac{4\pm\sqrt{16+24}}{2}=2\pm\sqrt{10}$, approximately $5.16$ or $-1.16$. Neither equals $1$ or $-2$, so both are valid.

Check $x=5.162$: $\dfrac3{4.162}+\dfrac2{7.162}=0.7208+0.2792=1.000$ ✓.

### Example 7 (an inequality, 5 marks)

Solve $x^{2}-x-6>0$.

*Solution.* $x^{2}-x-6=(x-3)(x+2)$, with roots $-2$ and $3$. The parabola opens upward, so it is above the axis outside the roots: $x<-2$ or $x>3$.

Check with $x=0$ (between the roots): $-6<0$, correctly excluded. Check with $x=4$: $16-4-6=6>0$ ✓.

### Example 8 (a non-strict inequality, 5 marks)

Solve $2x^{2}+3x-2\le0$.

*Solution.* $2x^{2}+3x-2=(2x-1)(x+2)$, with roots $x=\dfrac12$ and $x=-2$. The parabola opens upward and is below or on the axis between its roots, so $-2\le x\le\dfrac12$, including the end points because the inequality is non-strict.

### Example 9 (true for all $x$, 7 marks)

Find the values of $k$ for which $x^{2}+kx+k+3>0$ for all real $x$.

*Solution.* The coefficient of $x^{2}$ is positive, so we need $\Delta<0$. $\Delta=k^{2}-4(k+3)=k^{2}-4k-12=(k-6)(k+2)$. So $(k-6)(k+2)<0$, which means $-2<k<6$.

Check with $k=0$: $x^{2}+3>0$ always ✓. With $k=6$: $x^{2}+6x+9=(x+3)^{2}\ge0$, with equality at $x=-3$, so the strict inequality fails ✓.

### Example 10 (line and parabola, 6 marks)

Find the points of intersection of $y=x^{2}-3x+1$ and $y=2x-3$.

*Solution.* $x^{2}-3x+1=2x-3$ gives $x^{2}-5x+4=0$, so $(x-1)(x-4)=0$ and $x=1$ or $x=4$. Substituting in the line: $y=-1$ and $y=5$. The points are $(1,-1)$ and $(4,5)$.

### Example 11 (a word problem, 6 marks)

A rectangle has perimeter $26$ cm and area $40\ \text{cm}^{2}$. Find its side lengths.

*Solution.* Let one side be $x$ cm, so the other is $13-x$ cm. Then $x(13-x)=40$, so $x^{2}-13x+40=0$. $\Delta=169-160=9$, so $x=\dfrac{13\pm3}{2}=8$ or $5$. The sides are $5$ cm and $8$ cm. (Both roots give the same rectangle.)

### Example 12 (an inequality from a context, 6 marks)

The height of a ball is $h(t)=-5t^{2}+20t+1.5$ metres. During which times is the ball more than $15$ m above the ground?

*Solution.* Solve $-5t^{2}+20t+1.5>15$, i.e. $-5t^{2}+20t-13.5>0$, so $t^{2}-4t+2.7<0$ (dividing by $-5$ reverses the inequality). The roots are $t=2\pm\sqrt{4-2.7}=2\pm\sqrt{1.3}\approx0.860$ and $3.14$. Since the parabola $t^{2}-4t+2.7$ opens upward, it is negative between the roots, so the ball is above $15$ m for $0.860<t<3.14$ seconds.

Check at the peak $t=2$: $h=21.5>15$ ✓.

### Example 13 (an exact value, 4 marks)

Solve $x^{2}+x-1=0$ exactly.

*Solution.* $x=\dfrac{-1\pm\sqrt{1+4}}2=\dfrac{-1\pm\sqrt5}{2}$. The positive root, $\dfrac{\sqrt5-1}2\approx0.618$, is the reciprocal of the golden ratio.

## Using your GDC

The GDC provides the fastest and most reliable check of a quadratic solution. Use the *polynomial solver* (enter the coefficients) or the *equation solver*, or graph $y=ax^{2}+bx+c$ and use the *zero* tool twice. For an inequality, graph the function and read the intervals where it is above or below the axis, noting that the GDC gives decimal end points that you must round to $3$ significant figures and write with correct signs. For equations that involve substitution or rational terms, graph the left side and the right side as two functions and use *intersect*; this is also the safest way to detect extraneous roots, because the graphs show whether a solution is genuinely in the domain. For parameter questions, try two or three values of $k$ to see how the graph shifts relative to the axis. Remember that the GDC returns only approximate values; if "exact" is required, you must give surds from the formula. Menu names vary by model.

## Common mistakes

1. **Not rearranging to zero** before factorising, for example solving $x(x-3)=4$ by setting $x=4$ or $x-3=4$.
2. **Sign errors in the formula**, especially $-b$ when $b$ is negative, and in $-4ac$ when $a$ or $c$ is negative.
3. **Forgetting the $\pm$**, finding only one solution.
4. **Writing a two-interval solution as one chain**, such as $3<x<-2$.
5. **Forgetting to reverse an inequality** when dividing or multiplying by a negative.
6. **Not rejecting extraneous solutions** for rational or square-root equations, or substitutions with $u>0$.
7. **Including the end points** in a strict inequality or leaving them out in a non-strict one.
8. **Dividing both sides by $x$** and losing the solution $x=0$; factorise instead.

## Exam technique and command terms

**Solve** means to find all real solutions, and with $\pm$ you should present two values. **Find the exact solutions** requires surds, **find to $3$ significant figures** requires decimals. **Solve the inequality** requires an inequality or interval answer. If two methods are possible, use the one that is quicker and less error-prone: factorise when you can, and use the formula otherwise. **Hence** often links to a previous discriminant result. **Show that** may require the substitution step to be written explicitly. **Determine the values of $k$** needs a condition on $\Delta$.

A solid habit is to *check solutions* by substituting at least one into the original equation. For an inequality, test one value from each interval. In context questions, reject answers outside the domain and give a final sentence with units. On Paper 1, where no calculator is available, practise leaving the discriminant in a form where square roots can be simplified, for example $\sqrt{52}=2\sqrt{13}$.

## Connections

SL 2.6 gave the structure of quadratic functions, with the discriminant, the vertex and the factored form; this chapter uses them to solve. SL 1.7 supplies the exponent and logarithm laws behind equations such as $4^{x}-3\cdot2^{x}-4=0$, and SL 2.4 and 2.10 show how graphs and technology solve equations that are hard to solve by hand. AHL 1.12 and 1.14 explain the case $\Delta<0$ by allowing complex roots, AHL 2.12 generalises to polynomials of any degree, and AHL 2.15 extends the inequality method to rational and other inequalities. In Unit 3, equations such as $2\sin^{2}x-\sin x-1=0$ are solved by substituting $u=\sin x$, exactly as in this chapter. In Unit 5, finding stationary points and the area between a line and a curve both require solving quadratics, and the inequality $f'(x)>0$ for a function with quadratic derivative is a quadratic inequality. In Unit 4, binomial probabilities for small $n$ often reduce to quadratic equations in $p$.

## Check your understanding

1. Solve $3x^{2}-7x-6=0$.
2. Solve $x^{2}+8x+5=0$ exactly by completing the square.
3. Solve $2x^{2}-3x-4=0$ to $3$ significant figures.
4. Solve $x^{4}-13x^{2}+36=0$.
5. Solve $\dfrac2{x+1}+\dfrac3{x-2}=2$.
6. Solve $x^{2}-2x-8\ge0$.
7. Solve $3x^{2}-x-2<0$.
8. Find the values of $k$ for which $x^{2}+kx+4>0$ for all $x$.
9. Find the points of intersection of $y=x^{2}-x-2$ and $y=x+1$.
10. A rectangle has perimeter $30$ cm and area $56\ \text{cm}^{2}$. Find its sides.

### Answers

1. $(3x+2)(x-3)=0$, so $x=-\dfrac23$ or $x=3$.
2. $(x+4)^{2}=11$, so $x=-4\pm\sqrt{11}$.
3. $x=\dfrac{3\pm\sqrt{41}}4$, so $x\approx2.35$ or $-0.851$.
4. $u=x^{2}$: $u^{2}-13u+36=0$ gives $u=4$ or $9$, so $x=\pm2,\pm3$.
5. $2(x-2)+3(x+1)=2(x+1)(x-2)$ gives $5x-1=2x^{2}-2x-4$, so $2x^{2}-7x-3=0$ and $x=\dfrac{7\pm\sqrt{73}}4\approx3.89$ or $-0.386$. Neither is $-1$ or $2$.
6. $(x-4)(x+2)\ge0$, so $x\le-2$ or $x\ge4$.
7. $(3x+2)(x-1)<0$, so $-\dfrac23<x<1$.
8. $\Delta=k^{2}-16<0$ gives $-4<k<4$.
9. $x^{2}-2x-3=0$ gives $x=-1$ or $x=3$, so the points are $(-1,0)$ and $(3,4)$.
10. $x(15-x)=56$ gives $x^{2}-15x+56=0$ so $(x-7)(x-8)=0$; the sides are $7$ cm and $8$ cm.

## Summary

- Choose the method: factorise (null factor law), complete the square, use the formula, or use technology; always rearrange to zero first.
- Give exact answers with surds when asked; otherwise $3$ significant figures.
- Equations reducible to quadratics use a substitution with a restriction; rational equations need excluded values and a check.
- Inequalities: find the roots, sketch the parabola, read the intervals with the correct signs and end points.
- For "$>0$ for all $x$": $a>0$ and $\Delta<0$.
- Line and parabola: equate, solve, substitute back; $\Delta$ gives the number of intersections.
- In context, define variables, reject impossible roots and answer in a sentence.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists quadratic formula and discriminant under SL 2.7. Derive and justify all other steps and conditions.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
