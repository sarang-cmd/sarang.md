# Arithmetic sequences and series

> **SL 1.2 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- recognise an arithmetic sequence from its terms, from a rule, or from a context, and justify it with a common difference;
- use $u_n=u_1+(n-1)d$ to find any term, the number of terms, or the first term and common difference from given information;
- derive and use $S_n=\frac{n}{2}\left(2u_1+(n-1)d\right)=\frac{n}{2}(u_1+u_n)$;
- read and write sigma notation for arithmetic series;
- recover the terms of a sequence from a formula for $S_n$ using $u_n=S_n-S_{n-1}$;
- solve problems with inequalities (the first term above a limit, the first time a running total passes a target) using algebra and the GDC;
- model real situations with arithmetic sequences and say honestly where the model stops being believable.

## Why this topic matters

Arithmetic sequences are the simplest example of a **discrete linear model**: something that changes by the same amount each step. They appear in loans repaid by equal instalments, seating plans, savings plans and training schedules. In the exam they act as a first-class source of structured marks: a problem gives two pieces of information, you write two equations, solve them and then use a sum formula. They also train a habit that matters for the whole course, which is to translate words into equations *before* touching the calculator. Nearly every Paper 1 candidate can recite the formulas. The difference between a 5 and a 7 is the ability to use them flexibly when the question is dressed up: unknown number of terms, a sum formula given instead of the terms, or an inequality hidden in the wording.

## Core ideas

### Definition and the general term

A sequence $u_1,u_2,u_3,\ldots$ is **arithmetic** if the difference between consecutive terms is a constant $d$, called the **common difference**:

$$
u_{n+1}-u_{n}=d\quad\text{for every }n.
$$

If $d>0$ the terms increase, if $d<0$ they decrease, and if $d=0$ the sequence is constant. Starting at $u_1$, each step adds $d$, so after $n-1$ steps we have added $d$ exactly $n-1$ times:

$$
u_n=u_1+(n-1)d.
$$

Notice the $n-1$. The first term has had no steps applied. A frequent error is to write $nd$, which would give $u_1+d$ as the first term. A neat way to avoid confusion is to see the formula as a straight line: $u_n=dn+(u_1-d)$, with gradient $d$ in the variable $n$. The graph of an arithmetic sequence is a set of isolated points lying on a straight line. This is why "linear growth" and "arithmetic" are the same idea, one for continuous quantities and one for discrete steps.

### A test for arithmetic behaviour

To prove that a sequence is arithmetic, show that $u_{n+1}-u_n$ does not depend on $n$. Equivalently, for three consecutive terms $a,b,c$ to be arithmetic we need $b-a=c-b$, which rearranges to $2b=a+c$: the middle term is the **arithmetic mean** of its neighbours. This is the engine of questions that say "the numbers $k$, $2k+1$ and $5k-4$ are consecutive terms of an arithmetic sequence".

### The sum of an arithmetic series

An **arithmetic series** is the sum of the terms of an arithmetic sequence. Let $S_n=u_1+u_2+\cdots+u_n$. The classic argument, attributed to the young Gauss, writes the sum twice, once forwards and once backwards:

$$
\begin{aligned}
S_n&=u_1+(u_1+d)+\cdots+(u_n-d)+u_n,\\
S_n&=u_n+(u_n-d)+\cdots+(u_1+d)+u_1.
\end{aligned}
$$

Adding the two lines term by term, every column sums to $u_1+u_n$, and there are $n$ columns, so $2S_n=n(u_1+u_n)$. Hence

$$
S_n=\frac{n}{2}\left(u_1+u_n\right)=\frac{n}{2}\left(2u_1+(n-1)d\right),
$$

where the second form comes from substituting $u_n=u_1+(n-1)d$. The first form is the memorable one: *the average of the first and last terms, multiplied by the number of terms*. Use it when you know $u_n$, and use the second when you know $d$ instead. Both appear in the formula booklet, but you should know why they are true, because exam questions often need you to adapt them.

A special case worth knowing is the sum of the first $n$ positive integers, with $u_1=1$ and $d=1$: $1+2+\cdots+n=\frac{n(n+1)}{2}$.

### Sigma notation

The series $u_1+u_2+\cdots+u_n$ is written $\displaystyle\sum_{k=1}^{n}u_k$. The expression under the sigma is the general term, the number below is where the counter starts and the number above is where it stops. The number of terms is *top minus bottom plus one*. For example $\displaystyle\sum_{k=1}^{20}(3k+2)$ has $20$ terms, first term $5$ and common difference $3$. Sums can start at any value: $\displaystyle\sum_{k=4}^{12}(3k+2)$ has $12-4+1=9$ terms and first term $14$.

### Recovering terms from a sum

Since $S_n=u_1+\cdots+u_n$ and $S_{n-1}=u_1+\cdots+u_{n-1}$, subtracting leaves the last term:

$$
u_n=S_n-S_{n-1}\qquad(n\ge2),\qquad u_1=S_1.
$$

This is the key to questions that give a formula for $S_n$ and ask for the sequence. Always check $n=1$ separately, because the subtraction argument needs $S_{n-1}$ to exist. For an arithmetic sequence, $S_n$ is a quadratic in $n$ with no constant term, and the coefficient of $n^{2}$ is $d/2$. That fact lets you detect arithmetic behaviour at a glance.

### Choosing the right tool

Three kinds of data usually appear: two terms (use the general term twice and solve the simultaneous equations), the first term plus a sum (use the sum formula), and a condition on running totals (use the sum formula inside an inequality, then solve using a quadratic or the GDC). In every case, *write down what you are given using $u_1$, $d$ and $n$ as unknowns* and count the equations against the unknowns before computing.

## Worked examples

### Example 1 (direct use, 3 marks)

An arithmetic sequence has $u_1=7$ and $d=4$. Find $u_{20}$ and $S_{20}$.

*Solution.* $u_{20}=7+19\times4=83$. Then $S_{20}=\frac{20}{2}(7+83)=10\times90=900$.

One mark for substituting into $u_n$, one for $83$ and one for the correct sum.

### Example 2 (two terms given, 4 marks)

In an arithmetic sequence $u_5=17$ and $u_{12}=45$. Find $u_1$, $d$ and a formula for $u_n$.

*Solution.* Subtracting $u_{12}-u_5=7d$ gives $28=7d$, so $d=4$. Then $u_1=u_5-4d=17-16=1$. Therefore $u_n=1+4(n-1)=4n-3$. Check: $u_{12}=48-3=45$. ✓

The subtraction trick is faster than writing two full equations: the difference of two terms is the number of steps between them times $d$.

### Example 3 (how many terms, 5 marks)

The sequence $5,8,11,\ldots$ continues for as long as its terms are less than $200$. Find the number of terms and their sum.

*Solution.* Here $u_n=5+3(n-1)=3n+2$. Require $3n+2<200$, so $3n<198$ and $n<66$. Since $n$ is an integer, $n\le65$. The last term is $u_{65}=197$. Then $S_{65}=\frac{65}{2}(5+197)=65\times101=6565$.

The inequality is strict, so check the boundary: $u_{66}=200$ is *not* less than $200$ and is excluded.

### Example 4 (from a sum formula, 5 marks)

The sum of the first $n$ terms of a sequence is $S_n=3n^{2}+2n$. (a) Find $u_1$. (b) Find a formula for $u_n$. (c) Show that the sequence is arithmetic and state $d$.

*Solution.* (a) $u_1=S_1=3+2=5$.

(b) For $n\ge2$: $u_n=S_n-S_{n-1}=3n^{2}+2n-\left[3(n-1)^{2}+2(n-1)\right]$. Expanding, $3(n-1)^{2}=3n^{2}-6n+3$, so the bracket is $3n^{2}-6n+3+2n-2=3n^{2}-4n+1$. Therefore $u_n=6n-1$. Check at $n=1$: $6-1=5$, which agrees with part (a), so the formula holds for all $n\ge1$.

(c) $u_{n+1}-u_n=6(n+1)-1-(6n-1)=6$, independent of $n$. The sequence is arithmetic with $d=6$.

Note how the coefficient of $n^{2}$ in $S_n$ is $3=d/2$, as predicted.

### Example 5 (sums of multiples, 5 marks)

Find the sum of all multiples of $7$ between $100$ and $500$ inclusive.

*Solution.* The smallest multiple of $7$ that is at least $100$ is $105$ because $7\times15=105$. The largest not exceeding $500$ is $497$ because $7\times71=497$. The multiples are $7k$ for $k=15,\ldots,71$, which is $71-15+1=57$ terms. Then $S=\frac{57}{2}(105+497)=\frac{57\times602}{2}=57\times301=17\,157$.

The classic slip is to count $71-15=56$ terms. Count *inclusively*.

### Example 6 (context, running totals, 7 marks)

A runner trains $2$ km in week $1$ and adds $0.5$ km each week. (a) Find the distance run in week $12$ and the total distance over the first $12$ weeks. (b) In which week does the weekly distance first exceed $10$ km? (c) After how many weeks has the runner first covered more than $200$ km in total?

*Solution.* Model: $u_1=2$, $d=0.5$, so $u_n=2+0.5(n-1)=1.5+0.5n$.

(a) $u_{12}=1.5+6=7.5$ km. $S_{12}=\frac{12}{2}(2+7.5)=6\times9.5=57$ km.

(b) Solve $1.5+0.5n>10$: $0.5n>8.5$ so $n>17$, hence $n=18$. At $n=17$ the distance is exactly $10$, not more.

(c) $S_n=\frac{n}{2}\left(4+0.5(n-1)\right)=\frac{n}{2}(3.5+0.5n)=0.25n^{2}+1.75n$. We need $0.25n^{2}+1.75n>200$, that is $n^{2}+7n-800>0$. The roots of $n^{2}+7n-800=0$ are $n=\frac{-7\pm\sqrt{49+3200}}{2}=\frac{-7\pm57}{2}$, giving $n=25$ or $n=-32$. The quadratic is positive for $n>25$. At $n=25$ the total is exactly $200$ km, so the *first* week with more than $200$ km is $n=26$.

Reflection: the model says the runner is doing $14.5$ km a week by week $26$. Real training would level off, so the model is only credible for a limited range. The IB likes a one-sentence comment of this kind.

### Example 7 (arithmetic means, 3 marks)

Insert four numbers between $3$ and $28$ so that all six numbers form an arithmetic sequence.

*Solution.* Six terms means five steps: $28=3+5d$, so $d=5$. The numbers are $8,13,18,23$.

### Example 8 (a condition on consecutive terms, 5 marks)

The numbers $k$, $2k+1$ and $5k-4$ are consecutive terms of an arithmetic sequence. Find $k$ and the terms.

*Solution.* The middle term is the mean: $2(2k+1)=k+(5k-4)$. So $4k+2=6k-4$, giving $k=3$. The terms are $3,7,11$ with $d=4$.

A second version, with three numbers in arithmetic progression with sum $18$ and product $120$, is best solved by writing the numbers as $a-d$, $a$ and $a+d$. The sum gives $3a=18$, so $a=6$. The product is $6(36-d^{2})=120$, so $d^{2}=16$ and $d=\pm4$. The numbers are $2,6,10$ or $10,6,2$. The symmetric form avoids simultaneous equations.

## Using your GDC

Your GDC offers three ways to explore a sequence. In a *table* or *spreadsheet* mode you can enter the rule $u_n=3n+2$ and scroll to see terms, which is useful for checking an answer. In the *sequence* or *recursion* mode you can enter $u_1$ and $d$ and generate the sums. Finally, in the *solver* you can enter $\frac{n}{2}(3.5+0.5n)=200$ and ask for $n$. Beware that a solver may give $n=25$ for a "greater than" question, and you must interpret the strict inequality yourself.

For sums, a *sigma* template can evaluate $\sum_{k=4}^{12}(3k+2)$ directly. It is good practice to verify a hand calculation with it, and to use it as the *primary* method for long sums on Paper 2. When you use a GDC method in an exam, write the setup in the working: the formula and the equation you solve. The graphing approach, plotting $y=0.25x^{2}+1.75x$ against $y=200$ and finding the intersection, also works for threshold problems, but remember that $n$ must be a positive integer.

## Common mistakes

1. Writing $u_n=u_1+nd$ instead of $u_1+(n-1)d$.
2. Counting the number of terms from $a$ to $b$ as $b-a$ rather than $b-a+1$.
3. Forgetting to check $n=1$ when using $u_n=S_n-S_{n-1}$.
4. Using the sum formula with $u_n$ and $d$ mixed up, for example $\frac{n}{2}(u_1+(n-1)d)$.
5. Treating "more than" as "at least": when the boundary value gives equality, take the next integer.
6. Rounding a non-integer $n$ the wrong way: for "first time the total exceeds", always round *up*, and for "the number of terms below a limit", round *down*.
7. Accepting a negative or fractional $n$ without comment. Terms are indexed by positive integers.
8. Writing out an answer without units in a context question.

## Exam technique and command terms

**Show that** means you must reach the stated result with enough steps that nothing is hidden. In Example 4(c) the difference $u_{n+1}-u_n=6$ must be written out. **Hence** means use the previous part. If part (a) gives $u_1=5$, part (b) should use it. **Find** and **determine** want working and a value. **Write down** wants no working, as when stating $d$ from the sequence $5,8,11$.

When the question gives two terms, subtract first. When it gives a total, decide which form of $S_n$ matches what you know. Always state the model (for example "$u_1=2$, $d=0.5$") in a context problem, because the first mark is usually for that. After computing, reread the question: "total distance" is a sum, "distance in week 12" is a term. Confusing the two is the single most common context error. In Paper 1, expect integers that work out neatly. In Paper 2, a threshold problem is often the third part, and the GDC solver or graph is the quickest method.

## Connections

An arithmetic sequence is a linear function on the integers, so it connects to straight lines in SL 2.1. Its sum is a quadratic in $n$, which connects to quadratic functions in SL 2.6 and explains why threshold problems lead to quadratic inequalities. Geometric sequences in SL 1.3 are the multiplicative counterpart, and questions often combine both, for example "the first, second and fifth terms of an arithmetic sequence form a geometric sequence". Simple interest in SL 1.4 is arithmetic, while compound interest is geometric. In AHL 1.15 the sum formula is a standard target for proof by induction, and in calculus, the idea of a sum of many small equal steps points toward the integral. The sigma notation introduced here is used again for the binomial theorem and for Maclaurin series.

## Check your understanding

1. An arithmetic sequence has $u_1=12$ and $d=-3$. Find $u_{15}$ and $S_{15}$.
2. Find $u_1$ and $d$ if $u_4=10$ and $u_9=-5$.
3. How many terms does the sequence $100,94,88,\ldots$ have before the first negative term? Give the sum of the positive terms.
4. Evaluate $\displaystyle\sum_{k=1}^{30}(5k-2)$.
5. $S_n=n^{2}+4n$. Find $u_n$ and show the sequence is arithmetic.
6. Find the sum of all integers between $1$ and $200$ that are divisible by $3$ but not by $6$.
7. The first three terms of an arithmetic sequence are $x$, $x^{2}-4$ and $3x+2$. Find the possible values of $x$.
8. A theatre has $20$ seats in row $1$, and each row has $2$ more seats than the previous one. Find the number of rows needed for the theatre to hold at least $1000$ people.
9. The sum of the first $n$ terms of an arithmetic sequence is $S_n$. Given $S_5=55$ and $S_{10}=210$, find $u_1$ and $d$.
10. Prove that the sum of the first $n$ odd numbers is $n^{2}$.

### Answers

1. $u_{15}=12-42=-30$; $S_{15}=\frac{15}{2}(12-30)=-135$.
2. $5d=-15$, so $d=-3$ and $u_1=10+9=19$.
3. Terms are $106-6n$; positive for $n\le17$ ($u_{17}=4$), and $u_{18}=-2$. So there are $17$ positive terms, $S_{17}=\frac{17}{2}(100+4)=884$.
4. $u_1=3$, $u_{30}=148$; $S_{30}=15\times151=2265$.
5. $u_1=5$; $u_n=S_n-S_{n-1}=2n+3$ for $n\ge2$, and this gives $5$ at $n=1$. $u_{n+1}-u_n=2$, so $d=2$.
6. Odd multiples of $3$ from $3$ to $199$: they are $3,9,15,\ldots,195$ (the largest odd multiple of $3$ below $200$ is $195$). $d=6$, number of terms $=\frac{195-3}{6}+1=33$. Sum $=\frac{33}{2}(3+195)=3267$.
7. $2(x^{2}-4)=x+3x+2$, so $2x^{2}-8=4x+2$ and $x^{2}-2x-5=0$, giving $x=1\pm\sqrt{6}$.
8. $S_n=\frac{n}{2}(40+2(n-1))=n(n+19)\ge1000$. Since $23\times42=966$ and $24\times43=1032$, the least $n$ is $24$ rows.
9. $\frac{5}{2}(2u_1+4d)=55$ gives $u_1+2d=11$. $5(2u_1+9d)=210$ gives $2u_1+9d=42$. Subtract $2\times$ first: $5d=20$, $d=4$, $u_1=3$.
10. The odd numbers $1,3,5,\ldots$ have $u_1=1$, $d=2$, so $S_n=\frac{n}{2}(2+2(n-1))=\frac{n}{2}\times2n=n^{2}$.

## Summary

- Arithmetic means constant difference: $u_{n+1}-u_n=d$, and $u_n=u_1+(n-1)d$.
- $S_n=\frac{n}{2}(u_1+u_n)=\frac{n}{2}(2u_1+(n-1)d)$, proven by writing the sum forwards and backwards.
- Number of terms from $a$ to $b$ in steps of $d$ is $\frac{b-a}{d}+1$.
- $u_n=S_n-S_{n-1}$ for $n\ge2$, with $u_1=S_1$.
- Three terms $a,b,c$ are arithmetic exactly when $2b=a+c$.
- For thresholds, solve the inequality, then round in the direction the wording demands.
- Always comment on whether a linear model is believable far from the data.
