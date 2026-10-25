# Counting and generalized binomial series

> **AHL 1.10 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- apply the multiplication (product) principle and the addition principle to count outcomes;
- use permutations $^{n}P_{r}$ for ordered selections and combinations $\dbinom nr$ for unordered ones, and decide which is needed;
- count arrangements with repeated objects, with items that must be together, and with restrictions;
- use complementary counting for "at least" and "not together" conditions;
- state the binomial series for $(1+x)^{n}$ with $n\in\mathbb{Q}$, including negative and fractional $n$, and find the first few terms;
- expand $(a+bx)^{n}$ by factoring out $a^{n}$, and state the values of $x$ for which the expansion is valid;
- use a truncated series to approximate roots and reciprocals, and find specific coefficients.

## Why this topic matters

This chapter joins two ideas that look unrelated. Counting asks *how many ways can this happen?* and is the foundation of probability: before you can compute a probability by dividing favourable outcomes by total outcomes, you must be able to count both. The generalised binomial theorem takes the expansion of SL 1.9 beyond positive integer powers to give infinite series for expressions such as $\dfrac1{1+x}$ and $\sqrt{1+x}$. These series are the first example of representing a function as an infinite polynomial, a theme that culminates in Maclaurin series in Unit 5. In Paper 1 and Paper 2 the counting parts tend to be short-answer questions requiring a clear *plan*, while the series parts require careful arithmetic with fractions and the correct statement of the validity condition. Both reward systematic working.

## Core ideas

### The multiplication and addition principles

If a task consists of $k$ stages, with $m_1$ ways to do the first, $m_2$ ways to do the second whatever the first outcome, and so on, then the total number of ways is $m_1\times m_2\times\cdots\times m_k$. This is the **multiplication principle**, and it applies when the stages happen *one after another*, that is, "and". If the task can be done in one of several *mutually exclusive* ways, the totals are added: this is the **addition principle**, used for "or". A typical problem uses both: split into disjoint cases, multiply within each case, then add the cases.

### Permutations

A **permutation** is an *ordered* arrangement. The number of ways to arrange $n$ distinct objects in a row is $n!$, because there are $n$ choices for the first position, $n-1$ for the second, and so on. The number of ways to arrange $r$ objects chosen from $n$ distinct objects is
$$
^{n}P_{r}=\frac{n!}{(n-r)!}=n(n-1)(n-2)\cdots(n-r+1).
$$
For example, the number of ways to award gold, silver and bronze medals among $7$ runners is $^{7}P_{3}=7\cdot6\cdot5=210$.

When some of the objects are identical, divide out the repeated arrangements. The number of distinct arrangements of $n$ objects in which there are $a$ of one kind, $b$ of another and $c$ of a third is $\dfrac{n!}{a!\,b!\,c!}$. The word STATISTICS has $10$ letters with S three times, T three times, I twice, and A and C once each, so the number of distinct arrangements is $\dfrac{10!}{3!\,3!\,2!}=50400$.

### Combinations

A **combination** is an *unordered* selection: only *which* objects are chosen matters. The number of ways to choose $r$ objects from $n$ is $\dbinom nr=\dfrac{n!}{r!(n-r)!}$. The relationship with permutations is $^{n}P_{r}=r!\dbinom nr$, since each chosen group can be arranged in $r!$ ways. A good test is to ask: *if I swap two of the chosen items, do I get a different outcome?* If yes, use permutations; if no, use combinations. Choosing a committee or a hand of cards is a combination, while assigning roles, forming codes or arranging in a line is a permutation.

### Techniques for restricted counting

Several standard devices cover most exam questions.

- **Items together.** Treat the group as a single block, arrange the blocks, then arrange *within* the block. Two particular people together in a row of $6$: block them, giving $5!$ arrangements of five units, times $2!$ orders within the block, so $240$.
- **Items not together.** Use the complement: total arrangements minus arrangements with the items together. For the same situation: $6!-240=480$.
- **At least / at most.** Count the complement, or add the cases. "At least $2$ women" in a committee is often easier as *total minus (zero women) minus (one woman)*.
- **Position restrictions.** Fill the restricted positions first. For a three-digit even number from digits $1$ to $7$ with no repetition, choose the last digit first ($2$, $4$ or $6$), then the other digits.
- **Cases.** If the restriction splits the problem naturally (for example "contains the letter A or not"), count each case and add.

The most reliable habit is to describe the stages in words *before* writing any numbers, so that the structure of the product is explicit.

### The generalised binomial theorem

For a positive integer $n$ the expansion of $(1+x)^{n}$ stops after $n+1$ terms. For any rational $n$ (including negative and fractional values), there is an *infinite* series:
$$
(1+x)^{n}=1+nx+\frac{n(n-1)}{2!}x^{2}+\frac{n(n-1)(n-2)}{3!}x^{3}+\cdots,\qquad |x|<1.
$$
The coefficient of $x^{r}$ is $\dfrac{n(n-1)\cdots(n-r+1)}{r!}$, which is the integer-$n$ coefficient $\dbinom nr$ rewritten as a product that makes sense for any $n$. When $n$ is a nonnegative integer the product contains the factor $0$ from $r=n+1$ onwards, so the series terminates, and then it is valid for every $x$. For other $n$ the factors never reach $0$, the series is infinite, and it **converges to $(1+x)^{n}$ only when $|x|<1$**. For $|x|\ge1$ the series is meaningless.

A useful special case is $n=-1$: $\dfrac1{1+x}=1-x+x^{2}-x^{3}+\cdots$, a geometric series with ratio $-x$, matching SL 1.8.

### Expanding $(a+bx)^{n}$

The series needs the form $(1+u)^{n}$, so factor out $a^{n}$:
$$
(a+bx)^{n}=a^{n}\left(1+\frac bax\right)^{n},\qquad \left|\frac bax\right|<1.
$$
Then apply the series with $u=\dfrac bax$ and multiply every term by $a^{n}$. Do this even when $a$ is a perfect power: for $\sqrt{4+x}$, write $2\left(1+\dfrac x4\right)^{1/2}$. The validity condition is $\left|\dfrac{bx}{a}\right|<1$, which gives an interval for $x$: for $(2+x)^{-3}$ the condition is $\left|\dfrac x2\right|<1$, i.e. $-2<x<2$. A frequent error is to keep $a$ inside the bracket and then *not* have a leading $1$, which makes the formula unusable.

### Approximation

When $x$ is small and within the validity range, the first few terms give a good approximation. To estimate $\sqrt{4.2}$, set $x=0.2$ in the expansion of $\sqrt{4+x}$. Larger $|x|$ needs more terms, and the quality worsens as $|x|$ approaches the limit of validity. You should always say which value of $x$ you substituted and check that it is inside the validity interval.

## Worked examples

### Example 1 (permutation, 2 marks)

How many four-digit PINs can be made using distinct digits from $0$ to $9$?

*Solution.* Order matters and digits are not repeated: $^{10}P_{4}=10\cdot9\cdot8\cdot7=5040$.

### Example 2 (repeated letters, 3 marks)

Find the number of distinct arrangements of the letters of BANANA.

*Solution.* $6$ letters with A three times and N twice: $\dfrac{6!}{3!\,2!}=\dfrac{720}{12}=60$.

### Example 3 (at least, 5 marks)

A committee of $4$ is chosen from $5$ men and $6$ women. How many committees contain at least $2$ women?

*Solution.* Total committees: $\dbinom{11}{4}=330$. With no women: $\dbinom54=5$. With exactly one woman: $\dbinom61\dbinom53=6\cdot10=60$. So the number with at least $2$ women is $330-5-60=265$.

Check by cases: $2$ women $\dbinom62\dbinom52=15\cdot10=150$, $3$ women $\dbinom63\dbinom51=100$, $4$ women $\dbinom64=15$, and $150+100+15=265$ ✓.

### Example 4 (together and not together, 4 marks)

Six people stand in a row. Find the number of arrangements in which two particular people, Ana and Ben, (a) stand next to each other; (b) do not stand next to each other.

*Solution.* (a) Treat Ana and Ben as one block: $5!=120$ arrangements of the five units, and $2$ orders inside the block, so $240$. (b) $6!-240=720-240=480$.

### Example 5 (position restriction, 3 marks)

How many three-digit even numbers can be formed from the digits $1$ to $7$ without repetition?

*Solution.* The last digit must be $2$, $4$ or $6$: $3$ choices. The first digit has $6$ remaining choices, and the middle has $5$. Total $3\cdot6\cdot5=90$.

### Example 6 (polygon diagonals, 3 marks)

Find the number of diagonals of a convex octagon.

*Solution.* Choose any $2$ of the $8$ vertices: $\dbinom82=28$ segments. Of these, $8$ are sides, so there are $28-8=20$ diagonals.

### Example 7 (negative power, 4 marks)

Find the first four terms of the expansion of $\dfrac{1}{(1+x)^{2}}$ and state the values of $x$ for which it is valid.

*Solution.* With $n=-2$: $1+(-2)x+\dfrac{(-2)(-3)}{2}x^{2}+\dfrac{(-2)(-3)(-4)}{6}x^{3}=1-2x+3x^{2}-4x^{3}$. Valid for $|x|<1$.

The pattern $(-1)^{r}(r+1)x^{r}$ continues, and it is the negative of the derivative of the series for $\dfrac1{1+x}$.

### Example 8 (a fractional power, 5 marks)

Expand $(1-2x)^{-1/2}$ up to and including $x^{3}$ and state the validity condition.

*Solution.* Let $u=-2x$ and $n=-\tfrac12$. The terms are $1$, then $nu=x$, then $\dfrac{n(n-1)}{2}u^{2}=\dfrac{(-\frac12)(-\frac32)}{2}(4x^{2})=\dfrac38\cdot4x^{2}=\dfrac32x^{2}$, then $\dfrac{n(n-1)(n-2)}{6}u^{3}=\dfrac{(-\frac12)(-\frac32)(-\frac52)}{6}(-8x^{3})=-\dfrac5{16}(-8x^{3})=\dfrac52x^{3}$. So
$$
(1-2x)^{-1/2}=1+x+\tfrac32x^{2}+\tfrac52x^{3}+\cdots,
$$
valid when $|2x|<1$, that is $-\tfrac12<x<\tfrac12$.

### Example 9 (factoring out $a^{n}$ and approximating, 6 marks)

(a) Expand $\sqrt{4+x}$ up to $x^{2}$ and state the validity condition. (b) Use $x=0.2$ to estimate $\sqrt{4.2}$.

*Solution.* (a) $\sqrt{4+x}=2\left(1+\dfrac x4\right)^{1/2}$. With $u=\dfrac x4$ and $n=\tfrac12$: $(1+u)^{1/2}=1+\tfrac12u+\dfrac{(\frac12)(-\frac12)}{2}u^{2}=1+\tfrac u2-\tfrac{u^{2}}8$. So
$$
\sqrt{4+x}=2\left(1+\frac x8-\frac{x^{2}}{128}\right)=2+\frac x4-\frac{x^{2}}{64},
$$
valid for $\left|\dfrac x4\right|<1$, i.e. $-4<x<4$. (b) With $x=0.2$ (which is inside the interval), $\sqrt{4.2}\approx2+0.05-\dfrac{0.04}{64}=2.049375$. The calculator gives $2.049390\ldots$, so the approximation is accurate to about five significant figures.

### Example 10 (coefficient in a product, 6 marks)

Find the coefficient of $x^{2}$ in the expansion of $(1+x)(1-x)^{-3}$.

*Solution.* $(1-x)^{-3}$ with $u=-x$ and $n=-3$ is $1+(-3)(-x)+\dfrac{(-3)(-4)}{2}x^{2}+\cdots=1+3x+6x^{2}+\cdots$. Multiply by $1+x$: the $x^{2}$ terms are $1\cdot6x^{2}+x\cdot3x=9x^{2}$. The coefficient is $9$.

Check: the full series is $1+4x+9x^{2}+16x^{3}+\cdots$, which are perfect squares, as one would expect for this product.

### Example 11 (the validity range for a general bracket, 3 marks)

Expand $(2+x)^{-3}$ up to $x^{2}$ and state when it is valid.

*Solution.* $(2+x)^{-3}=\dfrac18\left(1+\dfrac x2\right)^{-3}$. With $u=\dfrac x2$: $(1+u)^{-3}=1-3u+6u^{2}-\cdots$, so we get $\dfrac18\left(1-\dfrac{3x}{2}+\dfrac{6x^{2}}{4}\right)=\dfrac18-\dfrac{3x}{16}+\dfrac{3x^{2}}{16}$. The series is valid for $|x|<2$.

## Using your GDC

Your GDC has $^{n}P_{r}$ and $^{n}C_{r}$ functions, usually in a probability or number menu. Use them to avoid arithmetic slips, but write the structure of the product in your solution so that method marks are available even if the final number is wrong. For series, a GDC with a computer algebra feature may expand $(1+x)^{n}$, but the question typically says *use the binomial theorem*, so show the formula. A numerical check is useful: evaluate your truncated series at a small $x$ and compare with the exact value of the function, as in Example 9. A graph of the function and of the truncated polynomial reveals the interval over which the approximation is good, which also illustrates the validity condition: the curves separate quickly as $|x|$ approaches $1$ for $(1+x)^{n}$.

## Common mistakes

1. **Mixing up permutations and combinations**, especially in committee and selection problems.
2. **Not dividing by repeated letters** in an arrangement count.
3. **Forgetting the internal order** of a block of people who must stand together.
4. **Double counting** in "at least" problems; prefer the complement or disjoint cases.
5. **Using the series without a leading $1$**, for instance on $(4+x)^{1/2}$ instead of factoring out $4^{1/2}$.
6. **Forgetting to raise $a$ to the power $n$**, giving $\left(1+\dfrac x4\right)^{1/2}$ rather than $2\left(1+\dfrac x4\right)^{1/2}$.
7. **Sign slips** with negative $n$ and negative $u$: $u=-2x$ has $u^{3}=-8x^{3}$.
8. **Omitting or misstating the validity condition**, e.g. writing $|x|<1$ when it should be $|x|<\tfrac12$.

## Exam technique and command terms

The command **find the number of ways** requires an integer answer and a justification of the method. Write something like "choose the last digit first: $3$ ways; then $6\times5$". **Expand ... up to and including the term in $x^{3}$** means four terms of the series. **State the values of $x$ for which the expansion is valid** is a separate mark, so never omit it. **Hence, or otherwise, estimate** typically wants you to substitute a specific $x$ into the truncated series and *state which $x$*. In counting questions, a line of reasoning that is easy to follow is better than a clever one: examiners reward clarity because it earns the method mark even if the arithmetic slips.

For the series, keep fractions exact rather than converting to decimals; the final answer is generally requested as a fraction or in simplest form. When the problem asks for a coefficient in a product, write down the pairs of terms before multiplying.

## Connections

SL 1.9 is the base case: when $n$ is a nonnegative integer the generalised formula returns the same terms. SL 1.8 gives the sum of the infinite geometric series, and the case $n=-1$ shows the two coincide. In Unit 4, counting underlies probability (SL 4.5 and AHL 4.x) when outcomes are equally likely, and $\dbinom nr$ counts the arrangements in the binomial distribution. AHL 1.11 on partial fractions often precedes series expansions of rational functions: split a fraction into $\dfrac A{1+x}+\dfrac B{1-2x}$ and expand each by this chapter's method. In Unit 5, Maclaurin series give the same coefficients by differentiation, and the radius of convergence replaces the validity interval. The notion that a series is only valid in a restricted interval is a first encounter with convergence ideas, which also appear in AHL 5.x sequences and series work.

## Check your understanding

1. In how many ways can gold, silver and bronze medals be awarded to $7$ runners?
2. Find the number of distinct arrangements of the letters of BANANA.
3. A team of $3$ is chosen from $8$ people. Find the number of teams, and the number that include a specified person.
4. Five people stand in a row. In how many arrangements are $A$ and $B$ not next to each other?
5. Expand $(1-x)^{-3}$ up to $x^{3}$ and state the validity condition.
6. Expand $(1+x)^{1/3}$ up to $x^{2}$ and use it to estimate $1.03^{1/3}$.
7. Expand $(3+2x)^{-1}$ up to $x^{2}$ and state the validity condition.
8. Find the coefficient of $x^{2}$ in $(1+x)(1-x)^{-3}$.
9. Expand $\sqrt{9-x}$ up to $x^{2}$ and use $x=0.1$ to estimate $\sqrt{8.9}$ to $5$ decimal places.
10. Find the coefficient of $x^{3}$ in the expansion of $(1+2x)^{-2}$.

### Answers

1. $^{7}P_{3}=210$.
2. $\dfrac{6!}{3!\,2!}=60$.
3. $\dbinom83=56$ teams. Including a specified person: $\dbinom72=21$.
4. Total $5!=120$. Together: $4!\times2=48$. So $120-48=72$.
5. $1+3x+6x^{2}+10x^{3}+\cdots$, valid for $|x|<1$.
6. $1+\tfrac13x-\tfrac19x^{2}$. With $x=0.03$: $1+0.01-0.0001=1.0099$.
7. $\dfrac13\left(1+\dfrac{2x}3\right)^{-1}=\dfrac13-\dfrac{2x}9+\dfrac{4x^{2}}{27}$, valid for $|x|<\tfrac32$.
8. $9$.
9. $3\left(1-\dfrac x9\right)^{1/2}=3\left(1-\dfrac x{18}-\dfrac{x^{2}}{648}\right)=3-\dfrac x6-\dfrac{x^{2}}{216}$. At $x=0.1$: $3-0.016667-0.0000463=2.98329$ (to $5$ d.p.).
10. $(1+u)^{-2}$ has $x^{3}$ term $-4u^{3}$, and with $u=2x$ this is $-4\cdot8x^{3}=-32x^{3}$. The coefficient is $-32$.

## Summary

- Multiply the number of choices at successive stages; add the counts of exclusive cases.
- $^{n}P_{r}=\dfrac{n!}{(n-r)!}$ counts ordered selections, $\dbinom nr$ counts unordered ones, and $\dfrac{n!}{a!\,b!\cdots}$ handles repeated objects.
- Use blocks for "together" and complements for "not together" and "at least".
- $(1+x)^{n}=1+nx+\dfrac{n(n-1)}{2!}x^{2}+\cdots$ for rational $n$, valid when $|x|<1$ unless $n$ is a nonnegative integer.
- Factor out $a^{n}$ to expand $(a+bx)^{n}$, and the validity condition is $\left|\dfrac{bx}a\right|<1$.
- Truncated series approximate functions near $x=0$; always state the value used and check validity.
