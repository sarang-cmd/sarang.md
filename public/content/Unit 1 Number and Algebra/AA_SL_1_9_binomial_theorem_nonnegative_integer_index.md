# Binomial theorem: nonnegative integer index

> **SL 1.9 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- compute $\dbinom nr$ using the factorial formula, Pascal's triangle and technology;
- expand $(a+b)^{n}$ for a positive integer $n$ and explain *why* the coefficients are what they are;
- use the general term $\dbinom nr a^{n-r}b^{r}$ to find a particular term, a coefficient or a constant term without expanding in full;
- handle expansions in which $a$ and $b$ contain coefficients, powers of $x$, negative signs and fractions;
- find coefficients in products of an expansion with another polynomial;
- use substitution (for example $x=1$) to find the sum of coefficients, and use truncated expansions to approximate powers;
- prove and use the identities $\dbinom nr=\dbinom n{n-r}$ and $\dbinom nr+\dbinom n{r+1}=\dbinom{n+1}{r+1}$.

## Why this topic matters

Expanding $(x+y)^{2}$ is routine, but expanding $(x+y)^{12}$ by hand-multiplying twelve brackets is hopeless. The binomial theorem is a shortcut that also reveals structure: the coefficients are counting numbers, and the same numbers $\binom nr$ appear in probability, where the binomial distribution in SL 4.7 counts successes in $n$ trials. In AHL, the theorem is extended to negative and fractional indices (AHL 1.10), and in Unit 5 the Maclaurin series of $(1+x)^{n}$ is its natural continuation. In examinations, binomial questions are among the most predictable: finding a coefficient, finding a constant term, or finding an unknown in the expression from a given coefficient. Yet they are also a place where marks are lost to sign errors and to forgetting that the number multiplying $x$ is raised to the power too. With careful bookkeeping this is a topic where you can bank full marks.

## Core ideas

### Factorials and $\binom nr$

The factorial of a non-negative integer is $n!=n(n-1)(n-2)\cdots2\cdot1$, with $0!=1$. The **binomial coefficient**, read "$n$ choose $r$", is
$$
\binom nr={}^{n}C_{r}=\frac{n!}{r!\,(n-r)!},\qquad 0\le r\le n.
$$
It counts the number of ways to choose $r$ objects from $n$ when order does not matter. For example $\dbinom{12}{4}=\dfrac{12\cdot11\cdot10\cdot9}{4\cdot3\cdot2\cdot1}=495$. Two facts are worth remembering: $\dbinom n0=\dbinom nn=1$ and $\dbinom n1=\dbinom n{n-1}=n$. A second useful fact is the **symmetry** $\dbinom nr=\dbinom n{n-r}$, which follows directly from the formula because the denominator is symmetric in $r$ and $n-r$. So $\dbinom{12}{8}=\dbinom{12}4=495$, and when $r$ is large you should compute with the smaller of $r$ and $n-r$.

### Pascal's triangle

Writing the coefficients for $n=0,1,2,\ldots$ in rows gives Pascal's triangle:

| $n$ | coefficients |
|---|---|
| 0 | 1 |
| 1 | 1  1 |
| 2 | 1  2  1 |
| 3 | 1  3  3  1 |
| 4 | 1  4  6  4  1 |
| 5 | 1  5  10  10  5  1 |
| 6 | 1  6  15  20  15  6  1 |

Each entry is the sum of the two above it. This is **Pascal's rule**: $\dbinom nr+\dbinom n{r+1}=\dbinom{n+1}{r+1}$. To prove it, write the left side over a common denominator:
$$
\frac{n!}{r!(n-r)!}+\frac{n!}{(r+1)!(n-r-1)!}=\frac{n!\,(r+1)+n!\,(n-r)}{(r+1)!\,(n-r)!}=\frac{n!\,(n+1)}{(r+1)!\,(n-r)!}=\binom{n+1}{r+1}.
$$
Pascal's triangle is perfect for small $n$ (up to about $6$ or $7$), but for larger $n$ the factorial formula, or the $\mathrm{nCr}$ key on your GDC, is quicker.

### The binomial theorem

For a positive integer $n$,
$$
(a+b)^{n}=a^{n}+\binom n1a^{n-1}b+\binom n2a^{n-2}b^{2}+\cdots+\binom n{n-1}ab^{n-1}+b^{n}=\sum_{r=0}^{n}\binom nra^{n-r}b^{r}.
$$
This is in the formula booklet. *Why does it work?* Expanding $(a+b)^{n}=(a+b)(a+b)\cdots(a+b)$ means choosing either $a$ or $b$ from each of the $n$ brackets and multiplying. To get the term $a^{n-r}b^{r}$ you must choose $b$ from exactly $r$ of the brackets, and the number of ways to select those $r$ brackets is $\binom nr$. So the coefficient of $a^{n-r}b^{r}$ is $\binom nr$. The same argument explains the symmetric pattern of the coefficients, and also that the *powers of $a$ decrease* while the *powers of $b$ increase*, with the two powers always adding to $n$.

### The general term

The term containing $b^{r}$ is the $(r+1)$th term, and it is
$$
T_{r+1}=\binom nr a^{n-r}b^{r}.
$$
Note the **off-by-one**: the *first* term has $r=0$, so the term with $b^{4}$ is the fifth term. To find a particular term, decide what you want first (a power of $x$, a constant), then solve for $r$.

When $a$ and $b$ are not simple letters, treat them as complete bracketed units. In $(2x-3)^{4}$, $a=2x$ and $b=-3$, so $T_{r+1}=\binom4r(2x)^{4-r}(-3)^{r}$, and both the $2$ and the $-3$ are raised to the powers, including the sign. In $\left(x^{2}+\dfrac2x\right)^{9}$ the general term is
$$
\binom9r(x^{2})^{9-r}\left(\frac2x\right)^{r}=\binom9r2^{r}x^{18-2r-r}=\binom9r2^{r}x^{18-3r}.
$$
Simplify the powers of $x$ with the laws of exponents (SL 1.7) *before* choosing $r$.

### Terms independent of $x$ and specified coefficients

A **constant term** (or *term independent of $x$*) is the term in which the power of $x$ is $0$. Set the exponent of $x$ in the general term equal to $0$ and solve for $r$. If $r$ is not a whole number between $0$ and $n$, the expansion has no such term. Similarly, to find the coefficient of $x^{k}$, set the exponent equal to $k$. In every case, the coefficient is the *entire numerical part* of $T_{r+1}$: the binomial coefficient times the constant factors raised to their powers.

### Products with an expansion

If you must find the coefficient of $x^{k}$ in $(p+qx)(a+bx)^{n}$, you need the coefficients of $x^{k}$ and $x^{k-1}$ in the expansion, because each is multiplied by a different part of the first bracket. Expand only the terms needed. List the pairs of terms whose powers add to $k$, multiply, and add the results. Missing one pair is the most typical error.

### Sum of coefficients and approximations

Substituting $x=1$ in an identity gives the **sum of all coefficients**, for example $(3x-1)^{5}$ has coefficient sum $(3-1)^{5}=32$. Substituting $x=-1$ gives the alternating sum, and combining the two isolates the sum of even-power or odd-power coefficients. The expansion also gives useful approximations when one of the terms is small: $(1+h)^{n}=1+nh+\dbinom n2h^{2}+\cdots$, so for small $h$ the first two or three terms give a close estimate. For example, $1.02^{8}=(1+0.02)^{8}\approx1+8(0.02)+28(0.02)^{2}=1.1712$, while the true value is $1.17166\ldots$.

## Worked examples

### Example 1 (full expansion, 4 marks)

Expand $(2x-3)^{4}$.

*Solution.* Use $a=2x$, $b=-3$ and the row $1,4,6,4,1$:
$$
(2x)^{4}+4(2x)^{3}(-3)+6(2x)^{2}(-3)^{2}+4(2x)(-3)^{3}+(-3)^{4}.
$$
This is $16x^{4}-96x^{3}+216x^{2}-216x+81$.

Check at $x=1$: $(2-3)^{4}=1$ and $16-96+216-216+81=1$ ✓.

### Example 2 (a coefficient, 3 marks)

Find the coefficient of $x^{3}$ in $(2+3x)^{6}$.

*Solution.* $T_{r+1}=\dbinom6r2^{6-r}(3x)^{r}$, and $x^{3}$ needs $r=3$. The coefficient is $\dbinom63\cdot2^{3}\cdot3^{3}=20\cdot8\cdot27=4320$.

### Example 3 (a constant term, 5 marks)

Find the term independent of $x$ in the expansion of $\left(x^{2}+\dfrac2x\right)^{9}$.

*Solution.* The general term is $\dbinom9r2^{r}x^{18-3r}$. For a constant, $18-3r=0$, so $r=6$. The term is $\dbinom96\cdot2^{6}=84\cdot64=5376$.

### Example 4 (a product, 6 marks)

Find the coefficient of $x^{2}$ in the expansion of $(1+2x)(2-x)^{5}$.

*Solution.* First expand $(2-x)^{5}$ for the terms needed: $32-80x+80x^{2}-\cdots$ (the coefficients are $\dbinom50 2^{5}=32$, $\dbinom51 2^{4}(-1)=-80$ and $\dbinom52 2^{3}(+1)=80$). The $x^{2}$ terms of the product come from $1\times80x^{2}$ and $2x\times(-80x)$. So the coefficient is $80-160=-80$.

Check via a full expansion: $(1+2x)(2-x)^{5}=32-16x-80x^{2}+\cdots$ ✓ (using the cubic and higher terms is unnecessary).

### Example 5 (finding $n$, 4 marks)

The coefficient of $x^{2}$ in the expansion of $(1+x)^{n}$ is $45$. Find $n$.

*Solution.* The coefficient is $\dbinom n2=\dfrac{n(n-1)}{2}=45$, so $n^{2}-n-90=0$ and $(n-10)(n+9)=0$. Since $n$ is a positive integer, $n=10$.

### Example 6 (an approximation, 4 marks)

Use the first three terms of the binomial expansion of $(1+0.02)^{8}$ to estimate $1.02^{8}$, and find the percentage error.

*Solution.* $1+8(0.02)+\dbinom82(0.02)^{2}=1+0.16+28(0.0004)=1.1712$. The exact value is $1.171659\ldots$, so the error is $\dfrac{|1.1712-1.171659|}{1.171659}\times100\approx0.039\%$.

### Example 7 (sum of coefficients, 3 marks)

Find the sum of the coefficients in the expansion of $(3x-1)^{5}$.

*Solution.* Setting $x=1$ gives $(3-1)^{5}=32$.

### Example 8 (an unknown inside the bracket, 5 marks)

The coefficient of $x^{3}$ in $(1+kx)^{6}$ is $160$. Find $k$.

*Solution.* The coefficient is $\dbinom63k^{3}=20k^{3}=160$, so $k^{3}=8$ and $k=2$.

Since the cube root of a real number is unique, there is only one real value, whereas an even power (such as $k^{2}=9$) gives two.

### Example 9 (a proof, 4 marks)

Prove that $\dbinom nr=\dbinom n{n-r}$ and use it to evaluate $\dbinom{15}{12}$.

*Solution.* $\dbinom n{n-r}=\dfrac{n!}{(n-r)!\,(n-(n-r))!}=\dfrac{n!}{(n-r)!\,r!}=\dbinom nr$. Then $\dbinom{15}{12}=\dbinom{15}3=\dfrac{15\cdot14\cdot13}{6}=455$.

### Example 10 (a negative power of $x$, 5 marks)

Expand $\left(x-\dfrac2x\right)^{6}$ and state the coefficient of $x^{2}$ and the constant term.

*Solution.* $T_{r+1}=\dbinom6rx^{6-r}\left(-\dfrac2x\right)^{r}=\dbinom6r(-2)^{r}x^{6-2r}$. For $x^{2}$ we need $6-2r=2$, so $r=2$ and the coefficient is $15\cdot4=60$. For the constant, $6-2r=0$, so $r=3$ and the term is $20\cdot(-8)=-160$. The full expansion is $x^{6}-12x^{4}+60x^{2}-160+240x^{-2}-192x^{-4}+64x^{-6}$.

Notice that the powers of $x$ go down in steps of $2$, so only even powers occur, and an odd power such as $x^{3}$ is absent.

## Using your GDC

Most GDCs have an $\mathrm{nCr}$ function (often in a probability or number menu), and you should know where it is on yours. It returns $\dbinom nr$ directly, which saves time with large $n$. Some models can also expand $(a+b)^{n}$ symbolically, or produce a table of $\dbinom nr$ for $r=0,\ldots,n$ using a sequence function, which helps to check all the coefficients of a row. When finding a coefficient such as that in Example 2 you can compute $\mathrm{nCr}(6,3)\times2^{3}\times3^{3}$ in one line. Technology cannot decide for you which $r$ is needed, so do the exponent algebra by hand. Menu names differ between models, so find the key beforehand. A graph can also check an expansion: plot the original expression and your expanded polynomial and confirm that the two graphs coincide.

## Common mistakes

1. **Forgetting the coefficient inside a power.** In $(2+3x)^{6}$, the term for $r=3$ includes $3^{3}$, not just $3$.
2. **Sign errors.** In $(a-b)^{n}$ the signs alternate, so $(-3)^{3}$ is negative.
3. **Off-by-one.** The term with $b^{r}$ is $T_{r+1}$, not $T_{r}$.
4. **Not simplifying powers of $x$** before solving for $r$, which leads to wrong exponents.
5. **Missing a pair of terms** in a product of an expansion with a bracket.
6. **Giving a non-integer or out-of-range $r$** as a valid solution; check $0\le r\le n$ and that $r$ is an integer.
7. **Using the wrong row of Pascal's triangle** for an expression of power $n$ (row $n$ has $n+1$ entries).
8. **Giving the term when asked for the coefficient** (or vice versa): the coefficient excludes the $x$ factor.

## Exam technique and command terms

**Expand** means to multiply out fully and give the terms in order, usually ascending or descending powers. **Find the coefficient of** means a number; **find the term** includes the power of $x$. **Hence** often connects a binomial expansion to a later question on approximation or on a product. **Show that** can ask you to prove an identity for $\dbinom nr$. Write the general term explicitly with $a$ and $b$ substituted, simplify the exponent of $x$, state the value of $r$, and then evaluate. Examiners award a method mark for the general term and another for the correct $r$.

Verify at least one of your answers by an independent route, for instance by substituting $x=1$ in a full expansion. If you are asked for a *constant term* and your exponent equation has no integer solution for $r$, say that there is none rather than inventing a number. In approximation questions, state the number of terms used.

## Connections

SL 1.1 provided the standard-form notation in which large coefficients such as $\dbinom{100}{50}\approx1.01\times10^{29}$ are written. SL 1.7 supplies the exponent laws. SL 1.6 proofs (Pascal's rule, symmetry) are algebraic arguments in the style of that chapter. In SL 4.7, the binomial distribution $P(X=r)=\dbinom nrp^{r}(1-p)^{n-r}$ is exactly the general term of $\big(p+(1-p)\big)^{n}=1$, which explains why the probabilities sum to $1$. In AHL 1.10, counting principles and permutations lead to the generalised binomial theorem for non-integer $n$ and $|x|<1$, which reuses the general term but with $\dbinom nr$ defined by a product formula. In Unit 5, the Maclaurin series for $(1+x)^{n}$ comes from differentiating repeatedly, and its coefficients match $\dbinom nr$. The idea of choosing from $n$ brackets underlies counting in probability (SL 4.5).

## Check your understanding

1. Expand $(1+x)^{5}$.
2. Find the coefficient of $x^{4}$ in $(3-x)^{7}$.
3. Find the constant term in $\left(x-\dfrac2x\right)^{6}$.
4. Find the coefficient of $x^{3}$ in $(2x+1)^{3}(x-1)^{2}$.
5. The coefficient of $x^{3}$ in $(1+x)^{n}$ is $120$. Find $n$.
6. Use the first three terms of $(1-0.02)^{6}$ to estimate $0.98^{6}$ to $3$ decimal places.
7. Find the sum of the coefficients of $(1+3x)^{5}$.
8. The coefficient of $x^{2}$ in $(1+kx)^{5}$ is $90$. Find the possible values of $k$.
9. Prove that $\dbinom n r=\dbinom n{n-r}$.
10. Find the coefficient of $x^{2}$ in the expansion of $\left(1+\dfrac x2\right)^{8}$.

### Answers

1. $1+5x+10x^{2}+10x^{3}+5x^{4}+x^{5}$.
2. $\dbinom74\cdot3^{3}\cdot(-1)^{4}=35\cdot27=945$.
3. $-160$ (from Example 10, $r=3$).
4. $(2x+1)^{3}=8x^{3}+12x^{2}+6x+1$ and $(x-1)^{2}=x^{2}-2x+1$. The $x^{3}$ coefficient is $8\cdot1+12\cdot(-2)+6\cdot1=-10$.
5. $\dbinom n3=\dfrac{n(n-1)(n-2)}6=120$, so $n(n-1)(n-2)=720$ and $n=10$ since $10\cdot9\cdot8=720$.
6. $1-6(0.02)+15(0.02)^{2}=1-0.12+0.006=0.886$.
7. Put $x=1$: $4^{5}=1024$.
8. $\dbinom52k^{2}=10k^{2}=90$, so $k^{2}=9$ and $k=\pm3$.
9. $\dbinom n{n-r}=\dfrac{n!}{(n-r)!\,r!}=\dbinom nr$.
10. $\dbinom82\left(\tfrac12\right)^{2}=\dfrac{28}{4}=7$.

## Summary

- $\dbinom nr=\dfrac{n!}{r!(n-r)!}$, with symmetry $\dbinom nr=\dbinom n{n-r}$ and Pascal's rule $\dbinom nr+\dbinom n{r+1}=\dbinom{n+1}{r+1}$.
- $(a+b)^{n}=\sum_{r=0}^{n}\dbinom nra^{n-r}b^{r}$, because $\dbinom nr$ counts the ways to pick $b$ from $r$ of the $n$ brackets.
- The general term is $T_{r+1}=\dbinom nra^{n-r}b^{r}$: treat $a$ and $b$ as complete units, including coefficients and signs.
- For a given power of $x$, simplify the exponent, solve for $r$, and check that it is an integer in $[0,n]$.
- For products, add the contributions of all pairs of terms whose powers give the target.
- $x=1$ gives the sum of coefficients; small $h$ gives $(1+h)^{n}\approx1+nh+\dbinom n2h^{2}$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists finite binomial theorem and combination coefficient under SL 1.9. Derive and justify all other steps and conditions.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
