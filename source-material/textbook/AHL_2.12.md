# Factor, remainder and root relations

> **AHL 2.12 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- divide one polynomial by another using long division or synthetic (inspection) methods and state the quotient and remainder;
- apply the **remainder theorem**: the remainder when $p(x)$ is divided by $(x-a)$ is $p(a)$;
- apply the **factor theorem**: $(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$;
- factorise polynomials of degree three or higher and solve the corresponding equations;
- use the relationships between the roots and coefficients of a polynomial (sums and products of roots) for degrees two, three and in general;
- use symmetric-function identities to find expressions such as $\alpha^{2}+\beta^{2}+\gamma^{2}$ without finding the roots;
- use conjugate-pair and multiplicity properties to construct polynomials and find unknown coefficients;
- find a remainder when the divisor is a quadratic.

## Why this topic matters

In SL 2.7 you solved quadratics by factorising, the formula and completing the square. For cubic and higher-degree polynomials, there is no single formula you can use in an examination. The factor theorem fills this gap: it lets you find one root by inspection, divide it out, and reduce the problem to a quadratic. It is the key method for solving polynomial equations and sketching polynomial graphs in Paper 1. The relations between roots and coefficients go further: they let you answer questions about the roots (their sum, product, the sum of squares, the sum of reciprocals) without solving the equation at all, and they are essential for constructing new polynomials from old ones. This is a HL-only topic, but its ideas are old and general: the same algebra underlies complex-number factorisation (AHL 1.12 and 1.14), partial fractions (AHL 1.11), rational function graphs (AHL 2.13) and the characteristic polynomial of a matrix. In HL Paper 1, a question of five to ten marks will often combine the factor theorem with an unknown parameter and then some root relations, so it is worth acquiring a fluent, tidy method.

## Core ideas

### Polynomials and division

A **polynomial** of degree $n$ is $p(x)=a_nx^{n}+a_{n-1}x^{n-1}+\dots+a_1x+a_0$ with $a_n\ne0$. The **division algorithm** says that for polynomials $p(x)$ and a non-zero divisor $d(x)$, there is a unique **quotient** $q(x)$ and **remainder** $r(x)$ with
$$
p(x)=d(x)\,q(x)+r(x),\qquad \deg r<\deg d.
$$
When the divisor is linear, the remainder is a constant. When the divisor is quadratic, the remainder is of degree at most $1$, so it has the form $ax+b$.

**Long division** works as in arithmetic: divide the leading term of the current dividend by the leading term of the divisor, multiply back, subtract, and repeat. Include zero coefficients for missing powers (write $x^{3}+0x^{2}-3x+1$). The faster *inspection* method writes $p(x)=(x-a)(\dots)$ and finds the quotient coefficients term by term; for example $x^{3}-4x^{2}+x+6=(x+1)(x^{2}+bx+6)$, and matching the $x^{2}$ coefficients gives $b+1=-4$, so $b=-5$, and the $x$ coefficient then checks: $6+b=1$ ✓. Synthetic division is the same idea in table form.

### The remainder theorem

**Theorem.** When $p(x)$ is divided by $(x-a)$, the remainder is $p(a)$. For divisor $(bx-a)$ the remainder is $p\!\left(\dfrac ab\right)$.

*Proof.* By the division algorithm, $p(x)=(x-a)q(x)+r$ where $r$ is a constant. Substituting $x=a$ gives $p(a)=0\cdot q(a)+r=r$. $\blacksquare$

This lets you find a remainder without carrying out the division. For example, the remainder when $2x^{3}-5x^{2}+x-7$ is divided by $(x-3)$ is $p(3)=54-45+3-7=5$. With divisor $(2x+1)$, set $2x+1=0$, so $x=-\dfrac12$ and the remainder is $p\!\left(-\dfrac12\right)$.

### The factor theorem

**Theorem.** $(x-a)$ is a factor of $p(x)$ if and only if $p(a)=0$.

This is the special case $r=0$ of the remainder theorem. It means that the zeros of a polynomial correspond exactly to its linear factors. To factorise a polynomial with integer coefficients, test the likely candidates. By the **rational root theorem**, any rational root $\dfrac uv$ in lowest terms has $u$ dividing the constant term $a_0$ and $v$ dividing the leading coefficient $a_n$. So for $2x^{3}-3x^{2}-11x+6$ the candidates are $\pm1,\pm2,\pm3,\pm6,\pm\dfrac12,\pm\dfrac32$. Test the simplest first; once one root is found, divide, and solve the remaining quadratic.

### Multiplicity

If $(x-a)^{m}$ is a factor of $p(x)$ but $(x-a)^{m+1}$ is not, then $a$ is a root of **multiplicity** $m$. The graph behaves differently:

- **odd multiplicity** (1, 3, ...): the graph *crosses* the axis at $x=a$; for $m=1$ it crosses at a nonzero slope, for $m=3$ it flattens as it crosses (like $x^{3}$ at the origin);
- **even multiplicity** (2, 4, ...): the graph *touches* the axis and turns back (like $x^{2}$).

For example, $x^{3}-3x-2=(x+1)^{2}(x-2)$ touches the axis at $x=-1$ and crosses at $x=2$. A double root of $p$ is a common root of $p$ and its derivative (Unit 5), and for a quadratic corresponds to $\Delta=0$.

### Number and type of roots

The **fundamental theorem of algebra** states that a polynomial of degree $n$ with complex coefficients has exactly $n$ roots in $\mathbb{C}$, counted with multiplicity. For a polynomial with **real coefficients**, non-real roots come in **conjugate pairs**: if $z=a+bi$ is a root, so is $\bar z=a-bi$ (AHL 1.14). Consequences:

- a real polynomial of odd degree has at least one real root;
- a cubic with real coefficients has either three real roots or one real root and a conjugate pair;
- a quartic has $4$, $2$ or $0$ real roots (counted with multiplicity);
- if a real polynomial has root $a+bi$, then $x^{2}-2ax+(a^{2}+b^{2})$ is a real quadratic factor.

### Relations between roots and coefficients

For $ax^{2}+bx+c=0$ with roots $\alpha,\beta$ (SL 2.6):
$$
\alpha+\beta=-\frac ba,\qquad \alpha\beta=\frac ca.
$$
For the cubic $ax^{3}+bx^{2}+cx+d=0$ with roots $\alpha,\beta,\gamma$, expanding $a(x-\alpha)(x-\beta)(x-\gamma)$ and comparing coefficients gives
$$
\alpha+\beta+\gamma=-\frac ba,\qquad \alpha\beta+\beta\gamma+\gamma\alpha=\frac ca,\qquad \alpha\beta\gamma=-\frac da.
$$
For the general polynomial $a_nx^{n}+a_{n-1}x^{n-1}+\dots+a_0$ with roots $r_1,\dots,r_n$:
$$
\sum r_i=-\frac{a_{n-1}}{a_n},\qquad \sum_{i<j}r_ir_j=\frac{a_{n-2}}{a_n},\qquad \prod r_i=(-1)^{n}\frac{a_0}{a_n}.
$$
The signs alternate: the sum of the roots is $-\dfrac{a_{n-1}}{a_n}$, the sum of products in pairs is $+\dfrac{a_{n-2}}{a_n}$, the sum of products in triples is $-\dfrac{a_{n-3}}{a_n}$, and so on. These relations are true whether the roots are real or complex.

### Symmetric expressions in the roots

Many questions ask for a value such as $\alpha^{2}+\beta^{2}+\gamma^{2}$ or $\dfrac1\alpha+\dfrac1\beta+\dfrac1\gamma$. Rewrite them in terms of the elementary sums above:
$$
\alpha^{2}+\beta^{2}+\gamma^{2}=(\alpha+\beta+\gamma)^{2}-2(\alpha\beta+\beta\gamma+\gamma\alpha),
$$
$$
\frac1\alpha+\frac1\beta+\frac1\gamma=\frac{\alpha\beta+\beta\gamma+\gamma\alpha}{\alpha\beta\gamma}.
$$
For two roots: $\alpha^{2}+\beta^{2}=(\alpha+\beta)^{2}-2\alpha\beta$ and $\alpha^{3}+\beta^{3}=(\alpha+\beta)^{3}-3\alpha\beta(\alpha+\beta)$. To find a polynomial whose roots are related to those of a given one (say $2\alpha,2\beta,2\gamma$ or $\dfrac1\alpha,\dfrac1\beta,\dfrac1\gamma$), you may use the substitution $x=\dfrac y2$ or $x=\dfrac1y$ in the original equation and clear fractions, which is often quicker than computing new sums and products.

### Constructing polynomials

If you know the roots $r_1,\dots,r_n$ and a point (or the leading coefficient), then $p(x)=a(x-r_1)\cdots(x-r_n)$. For real coefficients, include both members of any conjugate pair: roots $1$, $2+i$, $2-i$ give $(x-1)(x^{2}-4x+5)=x^{3}-5x^{2}+9x-5$. To find $a$, use a known point such as the $y$-intercept. Repeated roots are written as powers.

### Remainder with a quadratic divisor

If $p(x)$ is divided by $(x-a)(x-b)$ with $a\ne b$, the remainder has the form $mx+c$, because the degree is at most $1$. Write $p(x)=(x-a)(x-b)q(x)+mx+c$. Substituting $x=a$ and $x=b$ gives $p(a)=ma+c$ and $p(b)=mb+c$, which determine $m$ and $c$. This is a clean application of the remainder theorem with two simultaneous equations.

## Worked examples

### Example 1 (the remainder theorem, 3 marks)

Find the remainder when $p(x)=2x^{3}-5x^{2}+x-7$ is divided by (a) $x-3$; (b) $2x+1$.

*Solution.* (a) $p(3)=54-45+3-7=5$. (b) Set $2x+1=0$, so $x=-\dfrac12$: $p\!\left(-\dfrac12\right)=2\left(-\dfrac18\right)-5\cdot\dfrac14-\dfrac12-7=-\dfrac14-\dfrac54-\dfrac12-7=-9$.

### Example 2 (factor theorem with an unknown, 6 marks)

$(x-2)$ is a factor of $p(x)=x^{3}+kx^{2}-4x+4$. Find $k$ and factorise $p(x)$ completely.

*Solution.* $p(2)=8+4k-8+4=4k+4=0$, so $k=-1$. Then $p(x)=x^{3}-x^{2}-4x+4=x^{2}(x-1)-4(x-1)=(x-1)(x^{2}-4)=(x-1)(x-2)(x+2)$.

Check: $p(-2)=-8-4+8+4=0$ ✓.

### Example 3 (two conditions, 7 marks)

$f(x)=x^{3}+ax^{2}+bx-6$ has $(x-1)$ as a factor and leaves remainder $12$ when divided by $(x+1)$. Find $a$ and $b$.

*Solution.* $f(1)=1+a+b-6=0$, so $a+b=5$. $f(-1)=-1+a-b-6=12$, so $a-b=19$. Adding: $2a=24$, so $a=12$, and $b=-7$.

Check: $f(x)=x^{3}+12x^{2}-7x-6$, so $f(1)=0$ ✓ and $f(-1)=-1+12+7-6=12$ ✓.

### Example 4 (solving a cubic, 6 marks)

Solve $2x^{3}-3x^{2}-11x+6=0$.

*Solution.* Try $x=3$: $54-27-33+6=0$, so $(x-3)$ is a factor. Divide: $2x^{3}-3x^{2}-11x+6=(x-3)(2x^{2}+3x-2)=(x-3)(2x-1)(x+2)$. The roots are $x=3,\ \dfrac12,\ -2$.

Check the product: $3\cdot\dfrac12\cdot(-2)=-3$ and $-\dfrac da=-\dfrac62=-3$ ✓.

### Example 5 (sums and products, 7 marks)

The roots of $2x^{3}-5x^{2}+4x-3=0$ are $\alpha,\beta,\gamma$. Find (a) $\alpha+\beta+\gamma$, $\alpha\beta+\beta\gamma+\gamma\alpha$ and $\alpha\beta\gamma$; (b) $\alpha^{2}+\beta^{2}+\gamma^{2}$; (c) $\dfrac1\alpha+\dfrac1\beta+\dfrac1\gamma$.

*Solution.* (a) $\alpha+\beta+\gamma=\dfrac52$, $\alpha\beta+\beta\gamma+\gamma\alpha=\dfrac42=2$ and $\alpha\beta\gamma=\dfrac32$. (b) $\alpha^{2}+\beta^{2}+\gamma^{2}=\left(\dfrac52\right)^{2}-2(2)=\dfrac{25}4-4=\dfrac94$. (c) $\dfrac{2}{3/2}=\dfrac43$.

Check numerically: the roots are $1.858$ and $0.321\pm0.839i$, whose sum is $2.5$ ✓. Note that the sum of squares of the roots is positive here even though two roots are complex, because their squares are complex numbers that partly cancel in the sum.

### Example 6 (constructing a polynomial, 5 marks)

Find the cubic with real coefficients, leading coefficient $1$, with roots $1$ and $2+i$.

*Solution.* The conjugate $2-i$ is also a root. $(x-(2+i))(x-(2-i))=x^{2}-4x+5$. So $p(x)=(x-1)(x^{2}-4x+5)=x^{3}-4x^{2}+5x-x^{2}+4x-5=x^{3}-5x^{2}+9x-5$.

### Example 7 (conjugate roots in a quartic, 7 marks)

Given that $1+2i$ is a root of $x^{4}-2x^{3}+6x^{2}-2x+5=0$, find all four roots.

*Solution.* Since the coefficients are real, $1-2i$ is also a root. The corresponding quadratic factor is $x^{2}-2x+5$. Divide: $x^{4}-2x^{3}+6x^{2}-2x+5=(x^{2}-2x+5)(x^{2}+1)$, which can be checked: $x^{4}-2x^{3}+5x^{2}+x^{2}-2x+5$ ✓. So the other roots satisfy $x^{2}+1=0$: $x=\pm i$. The four roots are $1\pm2i$ and $\pm i$.

### Example 8 (multiplicity, 5 marks)

Show that $x^{3}-3x-2=(x+1)^{2}(x-2)$ and describe the graph near its zeros.

*Solution.* $(x+1)^{2}(x-2)=(x^{2}+2x+1)(x-2)=x^{3}-2x^{2}+2x^{2}-4x+x-2=x^{3}-3x-2$ ✓. The root $x=-1$ has multiplicity $2$, so the graph touches the $x$-axis there and turns; the root $x=2$ has multiplicity $1$, so the graph crosses. The $y$-intercept is $-2$, and as $x\to\infty$, $y\to\infty$.

### Example 9 (an arithmetic progression of roots, 7 marks)

The roots of $x^{3}-9x^{2}+kx-15=0$ form an arithmetic sequence. Find the roots and $k$.

*Solution.* Let the roots be $a-d$, $a$ and $a+d$. The sum is $3a=9$, so $a=3$. The product is $(3-d)(3)(3+d)=3(9-d^{2})=15$, so $9-d^{2}=5$ and $d=\pm2$. The roots are $1,3,5$. Then $k=\alpha\beta+\beta\gamma+\gamma\alpha=3+5+15=23$.

Check: $(x-1)(x-3)(x-5)=x^{3}-9x^{2}+23x-15$ ✓.

### Example 10 (from a graph description, 5 marks)

A cubic has $x$-intercepts $-2$, $1$ and $4$, and passes through $(0,16)$. Find its equation.

*Solution.* $f(x)=a(x+2)(x-1)(x-4)$. At $x=0$: $a(2)(-1)(-4)=8a=16$, so $a=2$. So $f(x)=2(x+2)(x-1)(x-4)=2x^{3}-6x^{2}-12x+16$.

### Example 11 (a quadratic divisor, 6 marks)

When $f(x)$ is divided by $(x-1)$ the remainder is $3$, and when divided by $(x-2)$ the remainder is $5$. Find the remainder when $f(x)$ is divided by $(x-1)(x-2)$.

*Solution.* The remainder is $mx+c$, with $f(x)=(x-1)(x-2)q(x)+mx+c$. Then $f(1)=m+c=3$ and $f(2)=2m+c=5$. Subtracting: $m=2$, and $c=1$. The remainder is $2x+1$.

### Example 12 (a transformed equation, 6 marks)

The roots of $x^{3}-4x^{2}+x+6=0$ are $\alpha,\beta,\gamma$. Find the cubic equation with roots $2\alpha,2\beta,2\gamma$.

*Solution.* Let $y=2x$, so $x=\dfrac y2$. Then $\dfrac{y^{3}}8-y^{2}+\dfrac y2+6=0$. Multiply by $8$: $y^{3}-8y^{2}+4y+48=0$. The required equation is $x^{3}-8x^{2}+4x+48=0$.

Check: the original roots are $-1,2,3$, so the new roots are $-2,4,6$, with sum $8$ ✓ and product $-48=-48$ ✓.

## Using your GDC

The GDC has a *polynomial root finder* (menu names vary by model) which returns the real and complex roots of a polynomial given its coefficients. Use it to check a factorisation and to find a root when you are not able to spot one. Graphing the polynomial and using the *zero* tool also finds real roots, and the number of times the graph touches or crosses the axis confirms multiplicities: a touch means an even multiplicity. For the remainder theorem, you can evaluate $p(a)$ using the table or by storing $a$ and typing the expression. If the question has an unknown parameter, try a few values of the parameter on the GDC to see how the roots move. A caution: the root finder returns decimals, so exact forms and the factorisation steps must still be shown algebraically on Paper 1. Complex roots are given in the form $a+bi$.

## Common mistakes

1. **Wrong sign in the factor theorem**: the factor $(x+2)$ corresponds to $p(-2)=0$, not $p(2)=0$.
2. **Using $p(a)$ instead of $p\!\left(\dfrac ab\right)$** for a divisor $(bx-a)$.
3. **Missing terms in long division**: forgetting to write the zero coefficient for a missing power.
4. **Sign slips in the root relations**: for a cubic the product is $-\dfrac da$, not $+\dfrac da$; the sum is $-\dfrac ba$.
5. **Forgetting the leading coefficient** when using sums and products: $\alpha+\beta+\gamma=-\dfrac ba$ and not $-b$.
6. **Missing the conjugate** when constructing a real polynomial from a complex root.
7. **Giving the remainder of a quadratic divisor as a constant**, when it is linear.
8. **Stopping when one root is found**, instead of dividing and solving the quotient.

## Exam technique and command terms

**Show that $(x-a)$ is a factor** requires you to evaluate $p(a)$ and state that it is zero. **Factorise completely** means to give linear (and irreducible quadratic) factors, and for HL, if complex roots are accepted, factors over $\mathbb{C}$ if requested. **Find the remainder** can be done without division, by substitution. **Hence solve** requires you to use the factorisation. **Write down** (for sums and products of roots) means there should be no working beyond stating the ratios of coefficients. **Find the exact roots** requires surds and $i$.

For an unknown-parameter problem, set up one equation per condition and solve simultaneously, then check. When a problem gives "the roots are in arithmetic progression", introduce $a-d$, $a$, $a+d$; for geometric progression use $\dfrac ar$, $a$, $ar$. Always check the answer by confirming the sum or product of roots against the coefficients: this is a quick, independent test that takes seconds.

## Connections

SL 2.7 and 2.6 provide the quadratic case, with its sum and product of roots, which this chapter generalises. SL 2.3, 2.4 and 2.10 give you the graph-reading and solving skills that confirm results. AHL 1.11 uses polynomial division and partial fractions, AHL 1.12 and 1.14 provide complex conjugate pairs and the polar form that lets you find roots of $z^{n}=w$, AHL 1.15 (proof) includes proving divisibility results by induction, and AHL 1.16 uses determinants where the characteristic polynomial of a $2\times2$ matrix is a quadratic with roots determined by trace and determinant. AHL 2.13 uses factorisation to find holes and asymptotes of rational functions, and AHL 2.15 uses the roots of the numerator and denominator as critical values for sign diagrams. In Unit 5, repeated roots correspond to horizontal tangents, differentiation of polynomials is a prerequisite for finding turning points, and the Maclaurin series approximates a function by a polynomial. In Unit 4, a binomial probability with a given mean can lead to a polynomial equation for $p$.

## Check your understanding

1. Find the remainder when $x^{3}-4x^{2}+2x+5$ is divided by $x-2$.
2. Given that $(x+3)$ is a factor of $x^{3}+2x^{2}+kx+3$, find $k$ and factorise the cubic as far as possible over the reals.
3. Solve $2x^{3}+x^{2}-13x+6=0$.
4. $f(x)=x^{3}+ax^{2}+bx+4$ has remainder $6$ when divided by $(x-1)$, and $(x+2)$ is a factor. Find $a$ and $b$.
5. The roots of $x^{3}-4x^{2}+x+6=0$ are $\alpha,\beta,\gamma$. Find $\alpha^{2}+\beta^{2}+\gamma^{2}$ and $\dfrac1\alpha+\dfrac1\beta+\dfrac1\gamma$ without solving the equation.
6. Find the cubic with real coefficients, leading coefficient $1$, and roots $2$ and $1-i$.
7. Given that $2+i$ is a root of $x^{4}-4x^{3}+4x^{2}+4x-5=0$, find all four roots.
8. The roots of $x^{3}-12x^{2}+kx-48=0$ are in arithmetic progression. Find the roots and $k$.
9. When $f(x)$ is divided by $(x-1)$ the remainder is $4$ and when divided by $(x+2)$ it is $-5$. Find the remainder when it is divided by $(x-1)(x+2)$.
10. A cubic has a double root at $x=2$, a single root at $x=-1$ and passes through $(0,8)$. Find its equation.

### Answers

1. $p(2)=8-16+4+5=1$.
2. $p(-3)=-27+18-3k+3=-6-3k=0$ gives $k=-2$. $x^{3}+2x^{2}-2x+3=(x+3)(x^{2}-x+1)$. The quadratic has $\Delta=1-4<0$, so it does not factorise over the reals.
3. Test $x=2$: $16+4-26+6=0$. $(x-2)(2x^{2}+5x-3)=(x-2)(2x-1)(x+3)$. So $x=2,\ \dfrac12,\ -3$.
4. $f(1)=1+a+b+4=6$ gives $a+b=1$. $f(-2)=-8+4a-2b+4=0$ gives $2a-b=2$. Adding: $3a=3$, so $a=1$ and $b=0$.
5. Sum $=4$, pairs $=1$, product $=-6$. So $\alpha^{2}+\beta^{2}+\gamma^{2}=16-2=14$ and $\dfrac1\alpha+\dfrac1\beta+\dfrac1\gamma=\dfrac1{-6}=-\dfrac16$. (The roots are $-1,2,3$, which confirms both.)
6. $(x-2)(x^{2}-2x+2)=x^{3}-4x^{2}+6x-4$.
7. The conjugate is $2-i$ and the quadratic factor is $x^{2}-4x+5$. Dividing: $x^{4}-4x^{3}+4x^{2}+4x-5=(x^{2}-4x+5)(x^{2}-1)$, so the roots are $2\pm i$ and $\pm1$.
8. $3a=12$, so $a=4$. The product is $4(16-d^{2})=48$, so $d^{2}=4$. The roots are $2,4,6$. $k=8+12+24=44$.
9. $mx+c$ with $m+c=4$ and $-2m+c=-5$. Subtracting: $3m=9$, so $m=3$ and $c=1$. The remainder is $3x+1$.
10. $f(x)=a(x+1)(x-2)^{2}$ with $f(0)=4a=8$, so $a=2$. $f(x)=2(x+1)(x-2)^{2}=2x^{3}-6x^{2}+8$.

## Summary

- Division algorithm: $p=dq+r$ with $\deg r<\deg d$. Remainder theorem: remainder on division by $(x-a)$ is $p(a)$; by $(bx-a)$ is $p\!\left(\frac ab\right)$.
- Factor theorem: $(x-a)$ is a factor if and only if $p(a)=0$. Use the rational root theorem to choose candidates.
- Multiplicity: odd means the graph crosses, even means it touches.
- A real polynomial has complex roots in conjugate pairs; a polynomial of degree $n$ has $n$ roots over $\mathbb{C}$.
- Root relations for a cubic: sum $-\frac ba$, pairs $\frac ca$, product $-\frac da$; in general the signs alternate.
- Use $\alpha^{2}+\beta^{2}+\gamma^{2}=(\sum\alpha)^{2}-2\sum\alpha\beta$ and the substitution method to find related polynomials.
- Quadratic divisor gives a linear remainder: use two substitutions.
