# Infinite geometric series

> **SL 1.8 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain what it means for an infinite series to converge, and why a geometric series converges exactly when $|r|<1$;
- derive and use the sum to infinity $S_\infty=\dfrac{u_1}{1-r}$;
- find the range of a parameter (such as $x$) for which a series converges, and the sum for a particular value;
- convert recurring decimals into fractions using an infinite geometric series;
- use sigma notation with infinite upper limit and with a starting index other than $1$;
- solve problems about total distance, repeated dosing and nested shapes by recognising a geometric series;
- find the smallest number of terms for the partial sum to come within a given tolerance of the sum to infinity.

## Why this topic matters

An infinite sum sounds paradoxical: how can adding endlessly many positive numbers give a finite answer? The resolution is one of the great ideas of mathematics, and the geometric series is its simplest and most useful example. It explains why Zeno's runner does catch the tortoise, how a bouncing ball travels a finite total distance, why $0.999\ldots=1$, and how the long-term level of a medicine in the body can be predicted. It also prepares you for calculus, where limits and convergence are formalised, and for the Maclaurin series of AHL Unit 5, where infinite series represent functions. In examinations, this topic yields reliable marks: the formula is in the booklet, the conditions are easy to state, and questions typically combine it with simple algebra or with a quadratic equation in $r$. The marks are lost, almost always, when students forget to check that $|r|<1$.

## Core ideas

### Partial sums and convergence

Recall from SL 1.3 that the sum of the first $n$ terms of a geometric sequence with first term $u_1$ and common ratio $r\ne1$ is
$$
S_n=\frac{u_1(1-r^{n})}{1-r}.
$$
An infinite series $u_1+u_2+u_3+\cdots$ has a **sum to infinity** if its sequence of partial sums $S_1,S_2,S_3,\ldots$ approaches a single finite number. We then say the series **converges**, and we write that number $S_\infty$. If the partial sums do not settle down to a finite value, the series **diverges** and no sum to infinity exists.

Look at the behaviour of $r^{n}$ as $n$ grows. If $|r|<1$, then $r^{n}$ gets closer and closer to $0$: for example $0.5^{10}\approx0.001$ and $0.5^{20}\approx0.000001$. If $|r|>1$, then $|r^{n}|$ grows without bound. If $r=1$ every term equals $u_1$ and $S_n=nu_1$ grows steadily, and if $r=-1$ the partial sums alternate between $u_1$ and $0$ and never settle. So convergence needs $|r|<1$, that is $-1<r<1$.

### The formula for the sum to infinity

When $|r|<1$, $r^{n}\to0$, so $S_n=\dfrac{u_1(1-r^{n})}{1-r}$ approaches $\dfrac{u_1(1-0)}{1-r}$. Therefore
$$
S_\infty=\frac{u_1}{1-r},\qquad |r|<1.
$$
This is in the formula booklet, but the condition $|r|<1$ is not repeated at every use, so you must state it yourself. The formula makes sense: the closer $r$ is to $1$, the more slowly the terms shrink and the larger the total. For $r$ near $0$ the first term dominates and $S_\infty\approx u_1$. For negative $r$ the terms alternate in sign, so the total is *smaller* than for the corresponding positive ratio: $S_\infty=\dfrac{u_1}{1+|r|}$.

A nice way to see the formula without limits is the "shift" argument. Let $S=u_1+u_1r+u_1r^{2}+\cdots$. Multiply by $r$: $rS=u_1r+u_1r^{2}+\cdots=S-u_1$. Solving, $S(1-r)=u_1$, which gives the same result. This argument is only valid when the sum exists, which is why convergence is a separate question.

### Sigma notation for infinite series

We write $\displaystyle\sum_{k=1}^{\infty}u_k$ for the infinite series. If the general term is $a\,r^{k-1}$ and the index starts at $1$, the first term is $a$. But watch the start index: in $\displaystyle\sum_{k=0}^{\infty}4\left(\tfrac13\right)^{k}$ the first term is $4$, while in $\displaystyle\sum_{k=2}^{\infty}4\left(\tfrac13\right)^{k}$ the first term is $4\left(\tfrac13\right)^{2}=\tfrac49$. Always *evaluate the first term by substituting the first index value*, and identify $r$ as the ratio of consecutive terms.

### Parameter ranges

Questions often contain a variable ratio, such as $1+(2x-1)+(2x-1)^{2}+\cdots$. Here $r=2x-1$ and convergence requires $|2x-1|<1$, which is $-1<2x-1<1$, so $0<x<1$. The ability to solve $|r|<1$ as a double inequality, and to give the result as an interval, is a very frequently tested skill. When $r$ is a more complicated expression, as with $r=\dfrac{x}{x+2}$, the inequality $-1<r<1$ may need a quadratic or a case analysis, and you will return to this in AHL 2.15 and 2.16.

### Recurring decimals as series

A recurring decimal is an infinite geometric series with ratio a power of $\tfrac1{10}$. For example $0.727272\ldots=0.72+0.0072+0.000072+\cdots$ has $u_1=0.72$ and $r=0.01$, so $S_\infty=\dfrac{0.72}{0.99}=\dfrac{72}{99}=\dfrac8{11}$. This agrees with the subtraction method of SL 1.6, and it explains why the method works. For a decimal like $0.4\overline3$, separate the non-repeating part: $0.4+0.03+0.003+\cdots=0.4+\dfrac{0.03}{0.9}=\dfrac{2}{5}+\dfrac1{30}=\dfrac{13}{30}$.

### Strategies for applied problems

Many applications reduce to the same shape: a first term and a ratio. Ask three questions. What is the *first term* of the series I want to add? What is the *common ratio*, the fraction retained or remaining at each step? And does the quantity I need start at the first term, or is there an *extra initial piece* (such as the first drop of a ball) that is not part of the repeated pattern? Drawing the first three stages usually exposes all three at once.

### Tolerance questions

Since $S_n=S_\infty(1-r^{n})$, the *gap* between the partial sum and the sum to infinity is $S_\infty r^{n}$. Questions such as "find the least $n$ for which $S_n$ is within $1\%$ of $S_\infty$" become $r^{n}<0.01$, solved with logarithms by the laws of SL 1.7. Remember that $\ln r<0$ when $0<r<1$, so dividing by $\ln r$ reverses the inequality. For an alternating series ($r<0$) the gap alternates in sign, so use $|r|^{n}$.

## Worked examples

### Example 1 (basic sum, 2 marks)

Find the sum to infinity of $12+6+3+\tfrac32+\cdots$.

*Solution.* $u_1=12$ and $r=\tfrac12$. Since $|r|<1$, $S_\infty=\dfrac{12}{1-\tfrac12}=24$.

### Example 2 (finding $r$ from the sum, 4 marks)

A geometric series has first term $5$ and sum to infinity $20$. Find $r$ and the fourth term.

*Solution.* $\dfrac{5}{1-r}=20$, so $1-r=\tfrac14$ and $r=\tfrac34$. This satisfies $|r|<1$. The fourth term is $u_4=5\left(\tfrac34\right)^{3}=\dfrac{135}{64}=2.109375$.

### Example 3 (convergence and parameter, 6 marks)

Consider the series $1+(2x-1)+(2x-1)^{2}+\cdots$. (a) Find the values of $x$ for which the series converges. (b) Find $S_\infty$ in terms of $x$. (c) Find $x$ when $S_\infty=2.5$.

*Solution.* (a) $r=2x-1$ and we need $|2x-1|<1$, so $0<x<1$. (b) $S_\infty=\dfrac1{1-(2x-1)}=\dfrac{1}{2-2x}$. (c) $\dfrac1{2-2x}=2.5\Rightarrow2-2x=0.4\Rightarrow x=0.8$. This lies in $(0,1)$, so it is valid.

Check: $r=0.6$ and $\dfrac1{1-0.6}=2.5$ ✓.

### Example 4 (a recurring decimal, 4 marks)

Express $0.\overline{72}$ as a fraction using an infinite geometric series.

*Solution.* $0.727272\ldots=0.72+0.0072+0.000072+\cdots$ has $u_1=0.72$ and $r=0.01$. So $S_\infty=\dfrac{0.72}{1-0.01}=\dfrac{0.72}{0.99}=\dfrac{72}{99}=\dfrac8{11}$.

### Example 5 (the bouncing ball, 6 marks)

A ball is dropped from $10$ m. After each bounce it rises to $60\%$ of its previous height. Find the total distance travelled before it comes to rest.

*Solution.* The initial drop is $10$ m. After this, the ball rises and falls by each rebound height. The rebound heights are $6,\,3.6,\,2.16,\ldots$, a geometric sequence with $u_1=6$ and $r=0.6$. The sum of rebound heights is $\dfrac{6}{1-0.6}=15$. Each rebound height is travelled *twice* (up and then down), giving $30$ m. Total distance $=10+30=40$ m.

A common error is to include the first drop twice or to forget the doubling. Drawing the first few bounces prevents this.

### Example 6 (tolerance, 5 marks)

For the series with $u_1=3$ and $r=0.8$, find the least $n$ such that $S_n>0.99\,S_\infty$.

*Solution.* $S_\infty=\dfrac{3}{0.2}=15$ and $S_n=15(1-0.8^{n})$. We need $1-0.8^{n}>0.99$, so $0.8^{n}<0.01$. Taking logarithms, $n\ln0.8<\ln0.01$, and dividing by the negative $\ln0.8$ reverses the inequality: $n>\dfrac{\ln0.01}{\ln0.8}=20.64\ldots$ So $n=21$.

Check: $0.8^{20}=0.0115>0.01$ and $0.8^{21}=0.0092<0.01$ ✓.

### Example 7 (sigma notation, 4 marks)

Evaluate (a) $\displaystyle\sum_{k=0}^{\infty}4\left(\tfrac13\right)^{k}$; (b) $\displaystyle\sum_{k=2}^{\infty}4\left(\tfrac13\right)^{k}$.

*Solution.* (a) $u_1=4$, $r=\tfrac13$, so the sum is $\dfrac4{2/3}=6$. (b) The first term is $4\left(\tfrac13\right)^{2}=\tfrac49$ and $r=\tfrac13$, so the sum is $\dfrac{4/9}{2/3}=\tfrac23$. Check: (a) minus the $k=0,1$ terms, $6-4-\tfrac43=\tfrac23$ ✓.

### Example 8 (a quadratic in $r$, 7 marks)

A geometric series has sum to infinity $9$ and second term $2$. Find the possible values of the first term and the common ratio.

*Solution.* $u_1=9(1-r)$ from the sum, and $u_1r=2$. Substituting, $9r(1-r)=2$, so $9r^{2}-9r+2=0$ and $r=\dfrac{9\pm\sqrt{81-72}}{18}=\dfrac{9\pm3}{18}$. So $r=\tfrac23$ or $r=\tfrac13$. Both satisfy $|r|<1$. The first terms are $u_1=9\cdot\tfrac13=3$ and $u_1=9\cdot\tfrac23=6$ respectively.

Check: $3\left(\tfrac23\right)=2$ and $\dfrac3{1/3}=9$ ✓; $6\left(\tfrac13\right)=2$ and $\dfrac6{2/3}=9$ ✓. Always test each solution against $|r|<1$.

### Example 9 (nested squares, 4 marks)

A square of side $8$ has its midpoints joined to form a second square, whose midpoints are joined to form a third, and so on. Find the total area of all the squares.

*Solution.* The area of the first square is $64$. Joining midpoints gives a square of half the area, so $r=\tfrac12$. Total area $=\dfrac{64}{1-\tfrac12}=128$.

### Example 10 (repeated dosing, 5 marks)

A patient takes $100$ mg of a drug every day. Each day, $80\%$ of the drug present is eliminated before the next dose. Find the long-term amount in the body immediately after a dose.

*Solution.* Just after the $n$th dose the amount is $100+100(0.2)+100(0.2)^{2}+\cdots+100(0.2)^{n-1}$, a geometric sum with $u_1=100$ and $r=0.2$. As $n\to\infty$, the amount approaches $\dfrac{100}{1-0.2}=125$ mg.

## Using your GDC

The GDC is helpful for confirming that a series converges and for tolerance problems. A table of partial sums $S_n$ for $n=1,\ldots,30$ makes it plain that the values level off, and you can read off the first $n$ for which $S_n$ exceeds a target. Many models have a sum-of-sequence function that handles $\sum_{k=1}^{n}$ for a finite $n$ with a large number of terms, such as $n=100$, giving a numerical check of an exact answer. For parameters, plot $y=\left|r(x)\right|$ and $y=1$ to find where $|r|<1$. Menu details differ by model. Do not use the GDC to *replace* the formula in an exact-answer question, and do not trust it to prove convergence: a numerical table is evidence, but the condition $|r|<1$ is the justification the mark scheme wants.

## Common mistakes

1. **Omitting the convergence check.** Applying $\dfrac{u_1}{1-r}$ when $|r|\ge1$.
2. **Mis-identifying $u_1$ in sigma notation**, especially with a start index of $0$ or $2$.
3. **Forgetting both quadratic roots** in a problem like Example 8, or failing to test each.
4. **Doubling errors in distance problems:** the first drop is travelled once, later rebounds twice.
5. **Wrong inequality direction** when dividing by $\ln r<0$.
6. **Mixing percentage and ratio:** "loses $20\%$" means $r=0.8$, whereas "decreases by a factor of $0.2$" means $r=0.2$.
7. **Writing the interval wrongly**, giving $x<1$ instead of $0<x<1$ in Example 3.
8. **Confusing $S_n$ with $S_\infty$.** The sum of the first $n$ terms and the sum to infinity are different quantities.

## Exam technique and command terms

When a question says **find the sum to infinity** or **find the exact value**, state $|r|<1$ explicitly in one line before using the formula. If you are asked **for which values of $x$ does the series converge**, the answer is an inequality or an interval, and the working is the absolute-value inequality. **Show that** problems often require a rearrangement to a quadratic in $r$ or in $x$. **Hence find** means use your sum formula in the next part. In context problems, give **units** and relate the answer to the situation: "the long-term level is $125$ mg" rather than "$125$".

Marks are typically awarded for the correct identification of $u_1$ and $r$ (M1), the correct substitution (A1), and the final value with justification. In a multi-part question, never skip showing the condition for convergence, even when it is obvious; it is often a distinct mark. Show the first three terms of a series if there is any uncertainty about the index.

## Connections

This chapter extends SL 1.3 by letting $n\to\infty$. SL 1.6 gave the subtraction method for recurring decimals, and here the same fact is explained via a series. SL 2.9 and SL 1.7 supply the logarithms needed for tolerance questions. In Unit 5, the idea of a limit is formalised, and the *geometric series* is the model for ratio-test thinking about convergence. In AHL 5.x, Maclaurin series such as $\dfrac1{1-x}=1+x+x^{2}+\cdots$ for $|x|<1$ are exactly this chapter with $u_1=1$ and $r=x$. In AHL 1.10 the generalised binomial series for $(1+x)^{n}$ with negative or fractional $n$ also has a convergence condition $|x|<1$, and it contains the geometric series as the special case $n=-1$. Probability also uses infinite geometric sums, for example when a game continues until the first success and you need $P(X=k)=(1-p)^{k-1}p$ summing to $1$.

## Check your understanding

1. Find the sum to infinity of $20+10+5+\cdots$.
2. Find the sum to infinity of $18-6+2-\cdots$.
3. Write $0.\overline{36}$ and $0.1\overline6$ as fractions in lowest terms.
4. For which values of $x$ does $1+\dfrac x4+\dfrac{x^{2}}{16}+\cdots$ converge, and what is its sum?
5. A geometric series has $S_\infty=12$ and $r=\tfrac14$. Find $u_1$.
6. A geometric series has first term $6$ and sum to infinity $8$. Find the common ratio and the third term.
7. For $r=0.5$, find the least $n$ such that $S_n>0.999\,S_\infty$.
8. A ball is dropped from $5$ m and rebounds to $80\%$ of its previous height each time. Find the total distance travelled.
9. Evaluate $\displaystyle\sum_{k=1}^{\infty}5(0.4)^{k}$.
10. A geometric series has first term $3$ and sum to infinity $5$. Find $r$, and explain why $1+2+4+8+\cdots$ has no sum to infinity.

### Answers

1. $u_1=20$, $r=\tfrac12$: $S_\infty=40$.
2. $u_1=18$, $r=-\tfrac13$: $S_\infty=\dfrac{18}{4/3}=13.5$.
3. $0.\overline{36}=\dfrac{0.36}{0.99}=\dfrac{4}{11}$. $0.1\overline6=0.1+\dfrac{0.06}{0.9}=\dfrac1{10}+\dfrac1{15}=\dfrac16$.
4. $r=\dfrac x4$, so $|x|<4$, i.e. $-4<x<4$. $S_\infty=\dfrac{1}{1-x/4}=\dfrac4{4-x}$.
5. $u_1=12(1-\tfrac14)=9$.
6. $\dfrac6{1-r}=8\Rightarrow r=\tfrac14$. $u_3=6\left(\tfrac14\right)^{2}=0.375$.
7. $S_n=S_\infty(1-0.5^{n})$, so $0.5^{n}<0.001$, giving $n>\dfrac{\ln0.001}{\ln0.5}=9.97$. So $n=10$.
8. Rebound heights $4,3.2,\ldots$ with $u_1=4$ and $r=0.8$: sum $\dfrac4{0.2}=20$, doubled is $40$. Total $=5+40=45$ m.
9. $u_1=2$ and $r=0.4$: $\dfrac{2}{0.6}=\dfrac{10}3$.
10. $\dfrac3{1-r}=5\Rightarrow r=0.4$. For $1+2+4+\cdots$, $r=2$ so $|r|\ge1$, the partial sums grow without limit, and the series diverges.

## Summary

- A geometric series converges if and only if $|r|<1$, and then $S_\infty=\dfrac{u_1}{1-r}$.
- State the condition $|r|<1$ every time, and solve $|r(x)|<1$ for parameter questions.
- Recurring decimals are infinite geometric series with ratio a power of $0.1$.
- In sigma notation, find $u_1$ by substituting the first index value.
- Applied problems need a first term, a ratio, and care with any extra initial piece or doubling.
- The gap $S_\infty-S_n=S_\infty r^{n}$ gives tolerance questions solved with logarithms.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists infinite geometric sum with the convergence condition under SL 1.8. Derive and justify all other steps and conditions.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
