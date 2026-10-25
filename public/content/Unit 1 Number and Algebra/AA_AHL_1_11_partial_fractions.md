# Partial fractions

> **AHL 1.11 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain that partial fractions *reverse* the process of adding algebraic fractions over a common denominator;
- decompose a proper rational function whose denominator has distinct linear factors, using substitution (the cover-up method) and comparison of coefficients;
- decompose when the denominator has a repeated linear factor, using the correct form of the partial fractions;
- recognise when a numerator must be divided out first, because the fraction is improper;
- decompose a fraction with an irreducible quadratic factor, as an extension, and check it;
- use partial fractions to expand rational functions as series, to sum telescoping series, and to prepare for integration;
- check every decomposition by substitution of a convenient value.

## Why this topic matters

Adding $\dfrac2{x-1}+\dfrac3{x+2}$ is easy: combine over $(x-1)(x+2)$ to get $\dfrac{5x+1}{(x-1)(x+2)}$. The reverse problem, splitting $\dfrac{5x+1}{(x-1)(x+2)}$ into simpler pieces, is much more useful and is the purpose of this chapter. Simple fractions with a linear denominator are easy to integrate (they give logarithms, as in Unit 5), easy to expand as series (the binomial series of AHL 1.10), and easy to see through in a telescoping sum. The technique also underlies Laplace transforms and the partial-fraction decomposition used in engineering and probability generating functions, though these are beyond the IB course. In examinations, a partial-fractions question is typically a short, high-yield part of a longer question: the decomposition itself earns three or four marks and the remaining parts then use it. It is a technique where *procedure* matters, so we will fix a reliable routine and use it every time.

## Core ideas

### What a partial-fraction decomposition is

A **rational function** is a quotient of two polynomials, $\dfrac{N(x)}{D(x)}$. It is **proper** if $\deg N<\deg D$ and **improper** otherwise. A proper rational function whose denominator factorises can be written as a sum of simpler fractions called **partial fractions**, and this expression is unique. The form of the partial fractions depends on the factors of $D(x)$.

| Factor in the denominator | Terms in the decomposition |
|---|---|
| Distinct linear factor $(ax+b)$ | $\dfrac{A}{ax+b}$ |
| Repeated linear factor $(ax+b)^{2}$ | $\dfrac{A}{ax+b}+\dfrac{B}{(ax+b)^{2}}$ |
| Irreducible quadratic $(ax^{2}+bx+c)$ | $\dfrac{Ax+B}{ax^{2}+bx+c}$ |

For a repeated factor $(ax+b)^{k}$ you need one term for each power from $1$ to $k$. The idea behind the quadratic row is that the numerator is always one degree lower than the denominator of that partial fraction.

### Step zero: is the fraction proper?

Before anything else, compare degrees. If $\deg N\ge\deg D$, divide first (polynomial long division, or by rewriting the numerator in terms of the denominator) to obtain a polynomial quotient plus a proper fraction, and decompose only the proper part. For example, $\dfrac{x^{3}+2}{(x-1)(x+1)}$ has numerator degree $3$ and denominator degree $2$, so it is improper, and the decomposition has a polynomial part $x$ plus a proper remainder. Trying to decompose an improper fraction directly as $\dfrac A{x-1}+\dfrac B{x+1}$ cannot work and wastes time.

### The routine for distinct linear factors

Suppose $\dfrac{N(x)}{(x-p)(x-q)}=\dfrac A{x-p}+\dfrac B{x-q}$. Multiply both sides by $(x-p)(x-q)$ to clear the denominators:
$$
N(x)=A(x-q)+B(x-p).
$$
This is an *identity*, true for every $x$, so you may substitute any convenient value. Putting $x=p$ kills the $B$ term and leaves $N(p)=A(p-q)$, so $A=\dfrac{N(p)}{p-q}$. Similarly $x=q$ gives $B$. This is the **cover-up method**: to find $A$, cover the factor $(x-p)$ in the original denominator and evaluate the rest at $x=p$. It works because of the identity, so it is legitimate to use in an exam, though writing the identity line shows the method. For three distinct factors the same idea works with three substitutions.

### Comparing coefficients

If substitution is not enough, perhaps because of a repeated or quadratic factor, equate coefficients of like powers of $x$ in the cleared identity. Combining the two approaches is usually fastest: substitute the roots of the factors to get as many constants as possible, then compare a coefficient (the $x^{2}$ coefficient, or the constant term) to find the rest.

### Repeated factors

Take $\dfrac{N(x)}{(x-1)(x+1)^{2}}=\dfrac A{x-1}+\dfrac B{x+1}+\dfrac C{(x+1)^{2}}$. Clearing denominators:
$$
N(x)=A(x+1)^{2}+B(x-1)(x+1)+C(x-1).
$$
Substituting $x=1$ gives $A$ and $x=-1$ gives $C$. For $B$, compare the coefficient of $x^{2}$ (or substitute any other value such as $x=0$). Cover-up works only for the *highest* power of the repeated factor and for distinct factors, not for the lower-power term $B$.

### Irreducible quadratic factors

If the denominator contains a quadratic with no real roots, for example $x^{2}+1$, its partial fraction has a linear numerator $Bx+C$. The structure is
$$
\frac{N(x)}{(x+1)(x^{2}+1)}=\frac A{x+1}+\frac{Bx+C}{x^{2}+1},\qquad N(x)=A(x^{2}+1)+(Bx+C)(x+1).
$$
Use substitution for $A$ and then compare the coefficients of $x^{2}$, $x$ and the constant. Check your syllabus guide for how far your teacher expects you to go with quadratics, but knowing the form is valuable.

### The checking habit

Every decomposition should be verified by substituting a value of $x$ that was *not* used to find the constants. If $x=0$ was not used, evaluate both the original fraction and the decomposition at $x=0$. This check costs thirty seconds and catches the sign error that would otherwise propagate through the rest of the question.

### Applications

*Series.* Once a fraction is split into $\dfrac A{1-x}+\dfrac B{1+2x}$, each part is a binomial series (AHL 1.10), valid where *both* parts are valid, so the validity condition is the intersection: $|x|<1$ and $|2x|<1$ gives $|x|<\tfrac12$.

*Telescoping sums.* If $u_n=\dfrac1{n(n+3)}=\dfrac13\left(\dfrac1n-\dfrac1{n+3}\right)$, many terms of $\sum u_n$ cancel in the partial sum, leaving only a few at each end.

*Integration.* $\displaystyle\int\dfrac{A}{x-p}\,dx=A\ln|x-p|+C$, so partial fractions turn the integral of a rational function into a sum of logarithms.

## Worked examples

### Example 1 (distinct linear factors, 4 marks)

Express $\dfrac{5x+1}{(x-1)(x+2)}$ in partial fractions.

*Solution.* Write $\dfrac{5x+1}{(x-1)(x+2)}=\dfrac A{x-1}+\dfrac B{x+2}$, so $5x+1=A(x+2)+B(x-1)$. Put $x=1$: $6=3A$, so $A=2$. Put $x=-2$: $-9=-3B$, so $B=3$. Hence
$$
\frac{5x+1}{(x-1)(x+2)}=\frac2{x-1}+\frac3{x+2}.
$$
Check at $x=0$: left side $\dfrac{1}{(-1)(2)}=-\dfrac12$; right side $-2+\dfrac32=-\dfrac12$ ✓.

### Example 2 (repeated factor, 6 marks)

Express $\dfrac{7x+1}{(x-1)(x+1)^{2}}$ in partial fractions.

*Solution.* Set $\dfrac{7x+1}{(x-1)(x+1)^{2}}=\dfrac A{x-1}+\dfrac B{x+1}+\dfrac C{(x+1)^{2}}$, so $7x+1=A(x+1)^{2}+B(x-1)(x+1)+C(x-1)$. Put $x=1$: $8=4A$, so $A=2$. Put $x=-1$: $-6=-2C$, so $C=3$. Compare the $x^{2}$ coefficients: $0=A+B$, so $B=-2$. Therefore
$$
\frac{7x+1}{(x-1)(x+1)^{2}}=\frac2{x-1}-\frac2{x+1}+\frac3{(x+1)^{2}}.
$$
Check at $x=0$: left $\dfrac1{(-1)(1)}=-1$; right $-2-2+3=-1$ ✓.

### Example 3 (three linear factors, 5 marks)

Express $\dfrac{x+7}{(x-2)(x+1)(x+3)}$ in partial fractions.

*Solution.* $x+7=A(x+1)(x+3)+B(x-2)(x+3)+C(x-2)(x+1)$. At $x=2$: $9=15A$, so $A=\tfrac35$. At $x=-1$: $6=B(-3)(2)=-6B$, so $B=-1$. At $x=-3$: $4=C(-5)(-2)=10C$, so $C=\tfrac25$. So
$$
\frac{x+7}{(x-2)(x+1)(x+3)}=\frac{3}{5(x-2)}-\frac1{x+1}+\frac{2}{5(x+3)}.
$$
Check at $x=0$: left $\dfrac7{(-2)(1)(3)}=-\dfrac76$; right $-\dfrac3{10}-1+\dfrac2{15}=\dfrac{-9-30+4}{30}=-\dfrac{35}{30}=-\dfrac76$ ✓.

### Example 4 (an improper fraction, 6 marks)

Express $\dfrac{2x^{2}+3}{(x-1)(x+2)}$ in the form $P+\dfrac A{x-1}+\dfrac B{x+2}$.

*Solution.* The denominator expands to $x^{2}+x-2$, which has the same degree as the numerator, so the fraction is improper. Divide: $2x^{2}+3=2(x^{2}+x-2)+(-2x+7)$, hence $P=2$ and the remainder is $\dfrac{-2x+7}{(x-1)(x+2)}$. Now $-2x+7=A(x+2)+B(x-1)$: at $x=1$, $5=3A$ so $A=\tfrac53$; at $x=-2$, $11=-3B$ so $B=-\tfrac{11}3$. Therefore
$$
\frac{2x^{2}+3}{(x-1)(x+2)}=2+\frac{5}{3(x-1)}-\frac{11}{3(x+2)}.
$$

### Example 5 (an irreducible quadratic, 6 marks)

Express $\dfrac{x^{2}+x+3}{(x+1)(x^{2}+1)}$ in partial fractions.

*Solution.* Let it equal $\dfrac A{x+1}+\dfrac{Bx+C}{x^{2}+1}$. Then $x^{2}+x+3=A(x^{2}+1)+(Bx+C)(x+1)$. At $x=-1$: $3=2A$, so $A=\tfrac32$. Compare $x^{2}$: $1=A+B$, so $B=-\tfrac12$. Compare constants: $3=A+C$, so $C=\tfrac32$. Check the $x$ coefficient: $B+C=1$ ✓. So
$$
\frac{x^{2}+x+3}{(x+1)(x^{2}+1)}=\frac{3}{2(x+1)}+\frac{3-x}{2(x^{2}+1)}.
$$

### Example 6 (unknown constants from a quadratic numerator, 6 marks)

Find $A$, $B$, $C$ such that $\dfrac{3x^{2}+x+4}{(x-1)(x+1)^{2}}=\dfrac A{x-1}+\dfrac B{x+1}+\dfrac C{(x+1)^{2}}$.

*Solution.* $3x^{2}+x+4=A(x+1)^{2}+B(x-1)(x+1)+C(x-1)$. At $x=1$: $8=4A$, so $A=2$. At $x=-1$: $6=-2C$, so $C=-3$. Compare $x^{2}$: $3=A+B$, so $B=1$. Check the constant term: $4=A-B-C=2-1+3=4$ ✓.

### Example 7 (series expansion, 7 marks)

(a) Express $\dfrac1{(1-x)(1+2x)}$ in partial fractions. (b) Hence expand it as a series in ascending powers of $x$ up to $x^{3}$, and state the values of $x$ for which the expansion is valid.

*Solution.* (a) $1=A(1+2x)+B(1-x)$. At $x=1$: $1=3A$, so $A=\tfrac13$. At $x=-\tfrac12$: $1=\tfrac32B$, so $B=\tfrac23$. So $\dfrac1{(1-x)(1+2x)}=\dfrac{1}{3(1-x)}+\dfrac{2}{3(1+2x)}$.

(b) $\dfrac1{1-x}=1+x+x^{2}+x^{3}+\cdots$ for $|x|<1$, and $\dfrac1{1+2x}=1-2x+4x^{2}-8x^{3}+\cdots$ for $|x|<\tfrac12$. Combining:
$$
\tfrac13(1+x+x^{2}+x^{3})+\tfrac23(1-2x+4x^{2}-8x^{3})=1-x+3x^{2}-5x^{3}+\cdots
$$
The expansion is valid only where both parts are, so $|x|<\tfrac12$.

Check: the $x^{2}$ coefficient is $\tfrac13+\tfrac83=3$ ✓ and the $x^{3}$ coefficient is $\tfrac13-\tfrac{16}3=-5$ ✓.

### Example 8 (a telescoping sum, 7 marks)

(a) Show that $\dfrac1{n(n+3)}=\dfrac13\left(\dfrac1n-\dfrac1{n+3}\right)$. (b) Hence find $\displaystyle\sum_{n=1}^{\infty}\dfrac1{n(n+3)}$.

*Solution.* (a) $\dfrac13\left(\dfrac{(n+3)-n}{n(n+3)}\right)=\dfrac13\cdot\dfrac{3}{n(n+3)}$ ✓. (b) The partial sum is $\dfrac13\left[\left(1-\tfrac14\right)+\left(\tfrac12-\tfrac15\right)+\left(\tfrac13-\tfrac16\right)+\left(\tfrac14-\tfrac17\right)+\cdots+\left(\tfrac1N-\tfrac1{N+3}\right)\right]$. Every term from $\tfrac14$ onwards cancels, leaving $S_N=\dfrac13\left(1+\tfrac12+\tfrac13-\tfrac1{N+1}-\tfrac1{N+2}-\tfrac1{N+3}\right)$. As $N\to\infty$ the last three terms tend to $0$, so the sum is $\dfrac13\cdot\dfrac{11}6=\dfrac{11}{18}$.

### Example 9 (a preview of integration, 5 marks)

Hence find $\displaystyle\int\dfrac{5x+1}{(x-1)(x+2)}\,dx$.

*Solution.* From Example 1, the integrand is $\dfrac2{x-1}+\dfrac3{x+2}$. Therefore the integral is $2\ln|x-1|+3\ln|x+2|+C$.

### Example 10 (why it works, 4 marks)

Show that your decomposition in Example 1 gives the original fraction.

*Solution.* $\dfrac2{x-1}+\dfrac3{x+2}=\dfrac{2(x+2)+3(x-1)}{(x-1)(x+2)}=\dfrac{2x+4+3x-3}{(x-1)(x+2)}=\dfrac{5x+1}{(x-1)(x+2)}$ ✓.

Recombining is always a valid check, and it is how the process was invented.

## Using your GDC

Many GDCs, particularly those with a computer algebra system, can compute a partial-fraction decomposition (often called *expand* or *partfrac*), and in the IB examination your calculator is allowed on Paper 2 and 3 but not on Paper 1. Even where it is allowed, a question that says "show that" or "express in partial fractions" usually expects algebraic working, so use technology to **check** an answer, not to replace the working. A reliable test uses the graphing screen: plot the original function and the sum of your partial fractions. If the two graphs coincide, your constants are right. Another test is the table: evaluate both expressions at several values of $x$ (avoiding the roots of the denominator). If your calculator does not have a symbolic engine, the substitution check at a spare value of $x$ takes seconds. Menu names differ between models.

## Common mistakes

1. **Decomposing an improper fraction directly** without dividing first.
2. **Omitting a term for a repeated factor:** $\dfrac{A}{(x+1)^{2}}$ alone is not enough, since you also need $\dfrac B{x+1}$.
3. **Sign errors in cover-up**: evaluating $x-q$ at $x=p$ as $q-p$, for example.
4. **Using the wrong form for a quadratic factor**: writing $\dfrac{A}{x^{2}+1}$ instead of $\dfrac{Bx+C}{x^{2}+1}$.
5. **Forgetting to check** with a spare value of $x$.
6. **Stating the series validity** for one part only; it must be the intersection.
7. **Arithmetic slips in simple fractions**, like $\dfrac3{5(x-2)}$ written as $\dfrac{3}{5}x-2$.
8. **Cancelling terms incorrectly** in a telescoping sum; write out the first and last few terms.

## Exam technique and command terms

**Express in partial fractions** and **write in the form** both mean the decomposition must be written as an identity, with constants evaluated. If the question gives the form (for instance $\dfrac A{x-1}+\dfrac B{x+2}$), use it exactly. **Hence** instructs you to use the decomposition in the next part: for series, expand each partial fraction separately; for sums, use cancellation; for integrals, integrate term by term. **Show that** means start from one side and reach the other, so for the telescoping identity combine the right-hand side over a common denominator.

Mark allocations are normally M1 for setting up the form, A1 for each constant, and a further mark for the final statement. Put the identity line (such as $5x+1=A(x+2)+B(x-1)$) on paper, because it is the key to method marks. When a question follows with a series, your constants must be correct, so check first.

## Connections

AHL 1.10 provides the series for $\dfrac1{1+u}$ and $(1+u)^{-n}$ used in Example 7, and the idea of *validity* from that chapter returns here. SL 1.8 explains why $\dfrac1{1-x}=1+x+x^{2}+\cdots$ for $|x|<1$. AHL 2.12 and 2.13 develop polynomials and rational functions: the factorisation of the denominator via the factor theorem is a prerequisite, and the asymptotes of $\dfrac{N(x)}{D(x)}$ are visible after decomposition (vertical asymptotes at the roots of $D$). In Unit 5 (AHL 5.x), integration of rational functions relies on partial fractions to produce logarithms, and some differential equations produce them. AHL 1.14 and complex roots show why an irreducible quadratic over the reals factorises over the complex numbers, though in this course you still treat it as one block. Finally, in sums and series, telescoping connects with proofs by induction in AHL 1.15, where results such as $\sum\dfrac1{n(n+1)}=1-\dfrac1{N+1}$ are typical.

## Check your understanding

1. Express $\dfrac{3x+5}{(x+1)(x+3)}$ in partial fractions.
2. Express $\dfrac{x+4}{x^{2}-1}$ in partial fractions.
3. Express $\dfrac{2x-1}{x^{2}-x-6}$ in partial fractions.
4. Show that $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$ and find $\displaystyle\sum_{n=1}^{N}\dfrac1{n(n+1)}$ and the sum to infinity.
5. Express $\dfrac{x^{3}+2}{(x-1)(x+1)}$ in the form $P(x)+\dfrac A{x-1}+\dfrac B{x+1}$.
6. Find $A$, $B$, $C$ in $\dfrac{3x^{2}+x+4}{(x-1)(x+1)^{2}}=\dfrac A{x-1}+\dfrac B{x+1}+\dfrac C{(x+1)^{2}}$.
7. Express $\dfrac5{(x-1)(2x+1)}$ in partial fractions.
8. Express $\dfrac{x+4}{x^{2}-1}$ as a series in ascending powers of $x$ up to $x^{3}$ and state its validity.
9. Explain why $\dfrac{x^{2}+1}{(x-1)(x+2)}$ cannot be written as $\dfrac A{x-1}+\dfrac B{x+2}$.
10. Find $\displaystyle\int\dfrac1{x(x+3)}\,dx$.

### Answers

1. $\dfrac1{x+1}+\dfrac2{x+3}$.
2. $\dfrac5{2(x-1)}-\dfrac3{2(x+1)}$.
3. $\dfrac1{x-3}+\dfrac1{x+2}$.
4. $\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}$, so the identity holds. The partial sum is $\left(1-\tfrac12\right)+\left(\tfrac12-\tfrac13\right)+\cdots+\left(\tfrac1N-\tfrac1{N+1}\right)=1-\dfrac1{N+1}$. The sum to infinity is $1$.
5. $x+\dfrac{3}{2(x-1)}-\dfrac1{2(x+1)}$. (Division gives $x^{3}+2=x(x^{2}-1)+x+2$, and then $\dfrac{x+2}{(x-1)(x+1)}$ is decomposed.)
6. $A=2$, $B=1$, $C=-3$.
7. $\dfrac5{3(x-1)}-\dfrac{10}{3(2x+1)}$.
8. $\dfrac{x+4}{x^{2}-1}=\dfrac5{2(x-1)}-\dfrac3{2(x+1)}$, and $\dfrac1{x-1}=-(1+x+x^{2}+x^{3}+\cdots)$ and $\dfrac1{x+1}=1-x+x^{2}-x^{3}+\cdots$. Hence the series is $-4-x-4x^{2}-x^{3}+\cdots$, valid for $|x|<1$.
9. The fraction is improper (numerator and denominator both have degree $2$). A decomposition into those two terms would tend to $0$ as $x\to\infty$, whereas the original tends to $1$. Divide first: it equals $1+\dfrac{-x+3}{(x-1)(x+2)}$.
10. $\dfrac1{x(x+3)}=\dfrac13\left(\dfrac1x-\dfrac1{x+3}\right)$, so the integral is $\dfrac13\ln\left|\dfrac{x}{x+3}\right|+C$.

## Summary

- Partial fractions undo the addition of algebraic fractions: split $\dfrac{N}{D}$ into simple pieces according to the factors of $D$.
- Check the degrees first; divide out the polynomial part if the fraction is improper.
- Distinct linear factors give $\dfrac A{x-p}$ terms; a repeated factor needs one term for each power; an irreducible quadratic needs a linear numerator.
- Clear denominators to get an identity, then substitute the roots and compare coefficients.
- Always verify with a spare value of $x$.
- Applications: series (validity is the intersection), telescoping sums and integration into logarithms.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.11. Related facts may appear elsewhere. Justify any method used here.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
