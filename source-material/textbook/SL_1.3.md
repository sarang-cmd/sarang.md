# Geometric sequences and series

> **SL 1.3 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- identify a geometric sequence from terms, a rule or a context, and find its common ratio $r$;
- use $u_n=u_1r^{n-1}$ to find terms, the first term, the ratio, or the number of terms;
- handle the sign of $r$ correctly, including the two possible ratios that arise when two terms are an even number of steps apart;
- derive and apply $S_n=\dfrac{u_1(r^{n}-1)}{r-1}=\dfrac{u_1(1-r^{n})}{1-r}$ for $r\ne1$;
- use sigma notation for geometric series and recognise geometric structure inside a sum;
- solve threshold problems such as "the first term greater than $1000$" with logarithms or the GDC;
- apply geometric models to growth, decay and repeated-bounce contexts, and combine them with arithmetic sequences.

## Why this topic matters

If arithmetic sequences describe things that change by a fixed *amount*, geometric sequences describe things that change by a fixed *factor*. Populations, investments, drug concentrations and bouncing balls all behave this way. This is the topic where exponential behaviour first appears in the course, and it is the foundation for compound interest (SL 1.4), logarithms (SL 1.5 and 1.7), exponential functions (SL 2.9) and the infinite series of SL 1.8. A student who understands *why* the sum formula works, rather than only remembering it, will find infinite series almost free. Exam questions in this area reward careful reading: the sign of $r$, the starting index, and whether the question wants a term or a total decide whether an answer earns full marks.

## Core ideas

### Definition and general term

A sequence is **geometric** if each term is the previous term multiplied by a fixed number $r$, the **common ratio**:

$$
\frac{u_{n+1}}{u_{n}}=r\quad\text{for every }n,\qquad u_n\ne0.
$$

Starting from $u_1$, we multiply by $r$ exactly $n-1$ times to reach $u_n$, so

$$
u_n=u_1\,r^{\,n-1}.
$$

As with arithmetic sequences, the exponent is $n-1$ because the first term has not yet been multiplied. If $|r|>1$ the terms grow in size, if $0<|r|<1$ they shrink towards zero, and if $r<0$ the terms alternate in sign. When $r=1$ the sequence is constant, and when $r=-1$ it alternates between $u_1$ and $-u_1$.

The graph of a geometric sequence is a set of points on an exponential curve $y=\frac{u_1}{r}\,r^{x}$ (for $r>0$). This is why geometric sequences model exponential change in discrete steps.

### The geometric mean

Three numbers $a,b,c$ are consecutive terms of a geometric sequence when $b/a=c/b$, that is

$$
b^{2}=ac.
$$

Note this is a statement about squares, so $b$ could be positive or negative. If $a$ and $c$ are positive, then $b=\pm\sqrt{ac}$, and both signs may give valid sequences.

### Finding $r$ from two terms

If you know $u_p$ and $u_q$ with $q>p$, then

$$
\frac{u_q}{u_p}=r^{\,q-p}.
$$

Taking the $(q-p)$th root gives $r$. When $q-p$ is **odd**, there is exactly one real root, so $r$ is unique. When $q-p$ is **even**, there are two real roots $\pm$, and unless the question restricts the signs you must consider both. This is a classic place where a Paper 1 candidate loses a mark by writing only the positive root.

### The sum of a geometric series

Let $S_n=u_1+u_1r+u_1r^{2}+\cdots+u_1r^{n-1}$. Multiply both sides by $r$:

$$
rS_n=u_1r+u_1r^{2}+\cdots+u_1r^{n}.
$$

Subtract the second line from the first. Nearly every term cancels, leaving $S_n-rS_n=u_1-u_1r^{n}$. Factorise: $S_n(1-r)=u_1(1-r^{n})$. Provided $r\ne1$,

$$
S_n=\frac{u_1(1-r^{n})}{1-r}=\frac{u_1(r^{n}-1)}{r-1}.
$$

The two forms are identical. Use the first when $|r|<1$ and the second when $r>1$, so that numerator and denominator are both positive and signs are easy to follow. If $r=1$, every term equals $u_1$ and $S_n=nu_1$. The cancelling trick is the same idea that will give the sum to infinity in SL 1.8: if $|r|<1$ then $r^{n}\to0$ and the formula settles.

### Sigma notation

A sum such as $\displaystyle\sum_{k=1}^{8}3\cdot2^{k}$ is geometric. The first term is $3\cdot2^{1}=6$, the ratio is $2$ and there are $8$ terms. So the sum is $\frac{6(2^{8}-1)}{2-1}=6\times255=1530$. When the index starts at a value other than $1$, find the first term by substituting that start value, and count the terms as top minus bottom plus one.

### Threshold problems

To find the smallest $n$ for which $u_n>M$ or $S_n>M$, set up the inequality, isolate the power, and take logarithms. If $u_1r^{n-1}>M$ with $u_1>0$ and $r>1$, then $r^{n-1}>M/u_1$, so $n-1>\dfrac{\ln(M/u_1)}{\ln r}$. When you divide by a logarithm, the inequality direction is preserved only if that logarithm is positive, which is the case here because $r>1$. If $0<r<1$, then $\ln r<0$ and the inequality **reverses**. Always check the final integer by substituting both neighbours, since rounding errors and inequality direction are easy to get wrong. On a calculator paper you may use a table or a graph intersection instead.

## Worked examples

### Example 1 (direct, 3 marks)

A geometric sequence has $u_1=3$ and $r=2$. Find $u_{10}$ and $S_{10}$.

*Solution.* $u_{10}=3\times2^{9}=3\times512=1536$. $S_{10}=\dfrac{3(2^{10}-1)}{2-1}=3\times1023=3069$.

### Example 2 (two terms, odd gap, 4 marks)

In a geometric sequence $u_3=12$ and $u_6=96$. Find $r$, $u_1$ and $u_8$.

*Solution.* $u_6/u_3=r^{3}=8$, so $r=2$ (the only real cube root). Then $u_1=u_3/r^{2}=12/4=3$. Finally $u_8=3\times2^{7}=384$.

### Example 3 (two terms, even gap, 5 marks)

The second and fourth terms of a geometric sequence are $6$ and $54$. Find the possible values of $r$ and $u_1$.

*Solution.* $u_4/u_2=r^{2}=9$, so $r=3$ or $r=-3$. If $r=3$, then $u_1=6/3=2$. If $r=-3$, then $u_1=6/(-3)=-2$. Both sequences are valid:

$$
2,6,18,54,\ldots\qquad\text{and}\qquad -2,6,-18,54,\ldots
$$

Unless the question says "all terms are positive", both answers are required. This is a very common one-mark loss.

### Example 4 (threshold using a sum, 5 marks)

For the sequence $5,10,20,\ldots$ find the smallest number of terms for which the sum exceeds $10^{6}$.

*Solution.* Here $u_1=5$ and $r=2$, so $S_n=5(2^{n}-1)$. We need $5(2^{n}-1)>10^{6}$, which gives $2^{n}>200\,001$. Taking logarithms, $n>\dfrac{\ln200001}{\ln2}\approx17.61$. So $n=18$. Check: $5(2^{17}-1)=655\,355<10^{6}$, while $5(2^{18}-1)=1\,310\,715>10^{6}$. ✓

### Example 5 (a bouncing ball, 7 marks)

A ball is dropped from a height of $2$ m. After each bounce it rises to $70\%$ of the height from which it fell.

(a) Find the height reached after the $3$rd bounce.
(b) After how many bounces is the height reached first less than $5$ cm?
(c) Find the total distance travelled by the ball from the moment it is dropped until it hits the ground for the fourth time.

*Solution.* The heights after bounces $1,2,3,\ldots$ are $2(0.7)^{n}$, a geometric sequence with first term $1.4$ and ratio $0.7$.

(a) $2(0.7)^{3}=0.686$ m.

(b) Work in metres: $2(0.7)^{n}<0.05$, so $0.7^{n}<0.025$. Taking logarithms and dividing by $\ln0.7<0$ reverses the inequality: $n>\dfrac{\ln0.025}{\ln0.7}\approx10.34$. So $n=11$. Check: $2(0.7)^{10}=0.0565>0.05$ and $2(0.7)^{11}=0.0395<0.05$. ✓

(c) The first fall is $2$ m. After the first, second and third bounces the ball goes up and then down again by $1.4$, $0.98$ and $0.686$ m, each counted twice. Total $=2+2(1.4+0.98+0.686)=2+2(3.066)=8.132$ m. The sum $1.4+0.98+0.686$ is $S_3=\dfrac{1.4(1-0.7^{3})}{1-0.7}=3.066$ as expected. So about $8.13$ m.

The common error in part (c) is to forget that every bounce contributes an upward *and* a downward distance.

### Example 6 (inserting means, 4 marks)

Insert three numbers between $2$ and $32$ so that all five numbers form a geometric sequence.

*Solution.* Five terms mean four steps: $32=2r^{4}$, so $r^{4}=16$ and $r=\pm2$. The numbers are $4,8,16$ if $r=2$, or $-4,8,-16$ if $r=-2$.

### Example 7 (a condition on three terms, 5 marks)

The numbers $x+1$, $x+4$ and $x+13$ are consecutive terms of a geometric sequence. Find $x$ and the common ratio.

*Solution.* $(x+4)^{2}=(x+1)(x+13)$. Expanding, $x^{2}+8x+16=x^{2}+14x+13$, so $6x=3$ and $x=\frac12$. The terms are $1.5$, $4.5$, $13.5$, with $r=3$.

Notice the $x^{2}$ terms cancel, so the equation is linear. That is a useful signal that you have set the problem up correctly.

### Example 8 (three numbers, symmetric setup, 6 marks)

Three positive numbers in geometric progression have sum $21$ and product $216$. Find them.

*Solution.* Write them as $\dfrac{b}{r},\,b,\,br$. The product is $b^{3}=216$, so $b=6$. The sum is $\dfrac6r+6+6r=21$. Multiply by $r$: $6+6r+6r^{2}=21r$, so $6r^{2}-15r+6=0$, i.e. $2r^{2}-5r+2=0$, which factorises as $(2r-1)(r-2)=0$. Hence $r=2$ or $r=\frac12$. The numbers are $3,6,12$ (or the same numbers in reverse order).

### Example 9 (growth context, 3 marks)

A town of $40\,000$ people grows by $2.5\%$ each year. Find the population after $10$ years, to three significant figures.

*Solution.* Each year multiplies by $1.025$, so the population after $n$ years is $40\,000(1.025)^{n}$. For $n=10$ this is about $51\,203$, so $51\,200$ to three significant figures.

## Using your GDC

Three GDC tools help. First, use the *sequence* or *table* mode to generate $u_n=u_1r^{n-1}$ and look for the first row that crosses a threshold: this is the easiest check for Example 4 or 5. Second, use the *sigma* template for sums: $\sum_{k=1}^{8}3\cdot2^{k}$ should return $1530$. Third, to solve an equation such as $2(0.7)^{n}=0.05$ you can graph $y=2(0.7)^{x}$ and $y=0.05$ and find the intersection, or use a solver, then round to the integer that satisfies the inequality in the correct direction. A solver gives a decimal $n=10.34\ldots$ and you must still decide that the answer to "first less than" is $11$, not $10$.

When your GDC gives an answer to a threshold problem, show the setup: the sum formula, the inequality and the reading. A bare number earns at most the final mark. Make sure that you do not round intermediate powers: store $0.7^{10}$ rather than typing $0.0282$.

## Common mistakes

1. Using $u_1r^{n}$ instead of $u_1r^{n-1}$ for the $n$th term.
2. Ignoring the negative root when the gap between terms is even.
3. Using the sum formula with the wrong number of terms $n$ (for example from a sigma with a different start).
4. Forgetting to reverse an inequality when dividing by $\ln r$ with $0<r<1$.
5. Treating "percentage increase of $2.5\%$" as multiplier $0.025$ instead of $1.025$, and "decrease of $30\%$" as $0.3$ instead of $0.7$.
6. Confusing $u_n$ (a term) and $S_n$ (a total) in a context question.
7. Rounding $n$ down for a "first time exceeds" problem.
8. Applying $S_n$ formula when $r=1$, where it breaks down.

## Exam technique and command terms

For **show that** questions, a typical geometric argument is to compute $u_{n+1}/u_n$ and show it is constant: write the algebra, then state "which is independent of $n$, so the sequence is geometric". **Find** and **calculate** require working. **Determine** often implies there is a choice to make, such as the sign of $r$. Look for words like "all terms are positive" or "$r>0$" as they remove one branch and also signal that the question writer expects the other branch to be considered otherwise.

State the model explicitly in context problems: "$u_1=1.4$, $r=0.7$". The first method mark is often for this alone. Distinguish carefully between *the height after the third bounce*, *the sum of the first three heights*, and *the total distance travelled*. In Paper 1 the ratios will be small integers or simple fractions, and exponents such as $2^{10}=1024$ are worth memorising. In Paper 2, threshold questions are routine: write the inequality, solve with the GDC or logs, and then check both integers on either side of the boundary.

## Connections

Geometric sequences are multiplicative, so the inverse operation of a power is a logarithm, and logs (SL 1.5 and SL 1.7) solve for $n$ exactly. Compound interest and depreciation (SL 1.4) are geometric sequences with $r=1+\frac{i}{100}$ and $r=1-\frac{i}{100}$. The sum to infinity (SL 1.8) extends the formula for $|r|<1$. Exponential functions (SL 2.9) are the continuous version. In AHL 1.15, the sum formula is a standard induction proof. Complex numbers (AHL 1.12 to 1.14) give geometric sequences in the plane, and in AHL 1.10 the binomial series with a ratio-like structure again needs the idea $|x|<1$. Questions that combine an arithmetic and a geometric sequence, such as the first, second and fourth terms of an arithmetic sequence forming a geometric one, are classic synthesis problems.

## Check your understanding

1. A geometric sequence has $u_1=5$ and $r=-2$. Find $u_6$ and $S_6$.
2. In a geometric sequence $u_2=12$ and $u_5=-1.5$. Find $r$ and $u_1$.
3. Find the eighth term of $8,12,18,\ldots$ to three significant figures.
4. Evaluate $\displaystyle\sum_{k=1}^{8}3\cdot2^{k}$.
5. Find the smallest $n$ such that $4(1.5)^{n-1}>1000$.
6. A ball is dropped from $3$ m and rebounds to $80\%$ of its previous height each time. Find the height after the fifth rebound.
7. The sum of the first three terms of a geometric sequence with $r=3$ is $39$. Find $u_1$.
8. Find $x$ if $x-2$, $x+1$ and $x+7$ are consecutive terms of a geometric sequence, and give the terms.
9. The first, second and fourth terms of an arithmetic sequence with first term $6$ and common difference $d\ne0$ form a geometric sequence. Find $d$ and the common ratio.
10. Prove that $u_n=5\cdot3^{n}$ defines a geometric sequence and find its first term and ratio.

### Answers

1. $u_6=5(-2)^{5}=-160$; $S_6=\dfrac{5(1-(-2)^{6})}{1-(-2)}=\dfrac{5(1-64)}{3}=-105$.
2. $r^{3}=-1.5/12=-\frac18$, so $r=-\frac12$ and $u_1=12/(-\frac12)=-24$.
3. $r=1.5$, $u_8=8(1.5)^{7}=136.6875\approx137$.
4. First term $6$, ratio $2$: $S_8=6\times255=1530$.
5. $1.5^{n-1}>250$, so $n-1>\dfrac{\ln250}{\ln1.5}\approx13.62$, hence $n-1=14$ and $n=15$.
6. $3(0.8)^{5}=0.98304\approx0.983$ m.
7. $u_1(1+3+9)=39$, so $u_1=3$.
8. $(x+1)^{2}=(x-2)(x+7)$ gives $x^{2}+2x+1=x^{2}+5x-14$, so $3x=15$ and $x=5$. The terms are $3,6,12$.
9. The terms are $6$, $6+d$, $6+3d$. Then $(6+d)^{2}=6(6+3d)$, so $36+12d+d^{2}=36+18d$, giving $d^{2}-6d=0$ and, since $d\ne0$, $d=6$. The terms are $6,12,24$ and the ratio is $2$.
10. $\dfrac{u_{n+1}}{u_n}=\dfrac{5\cdot3^{n+1}}{5\cdot3^{n}}=3$, which does not depend on $n$. So the sequence is geometric with $u_1=15$ and $r=3$.

## Summary

- Geometric means constant ratio: $u_n=u_1r^{n-1}$.
- Three terms $a,b,c$ are geometric exactly when $b^{2}=ac$.
- $S_n=\dfrac{u_1(r^{n}-1)}{r-1}$ for $r\ne1$, from the multiply-and-subtract trick.
- An even number of steps between two terms gives two possible ratios $\pm$.
- Thresholds use logarithms; reverse the inequality when dividing by a negative logarithm, and always check neighbouring integers.
- Percentage change multiplies by $1\pm\frac{p}{100}$.
- Distinguish a term, a sum and a total distance in context questions.
