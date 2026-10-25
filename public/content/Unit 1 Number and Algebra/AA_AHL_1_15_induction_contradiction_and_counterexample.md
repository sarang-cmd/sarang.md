# Induction, contradiction and counterexample

> **AHL 1.15 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain the logic of proof by mathematical induction and write the four required parts: base case, inductive hypothesis, inductive step, conclusion;
- prove summation formulae, divisibility results, inequalities, recurrence-defined formulae and derivative patterns by induction;
- prove de Moivre's theorem for positive integers by induction;
- explain why the base case matters, and spot a flawed induction;
- write a proof by contradiction: assume the negation, derive an impossibility, and conclude;
- prove the irrationality of $\sqrt2$, the infinitude of primes and other classic statements by contradiction;
- disprove a universal statement with a counterexample, and select the right method for a given proof question.

## Why this topic matters

Algebraic proofs in SL 1.6 handle statements that can be settled by a single manipulation. Many important statements are about *all positive integers* $n$ and cannot be proved by simply expanding: the formula for $1^{2}+2^{2}+\cdots+n^{2}$, for example, involves an expression that changes with $n$. Induction is the tool made for them. Proof by contradiction is the other great technique, and it proves things which are about *non-existence*, such as the fact that no fraction squares to $2$. These methods are some of the oldest and most elegant ideas in mathematics, and they are the standard of rigour in all of university mathematics and computer science, for example for proving that an algorithm terminates or is correct. In the IB examination, induction questions appear regularly on Paper 1 and 3 for 6 to 9 marks and are among the most *formulaic* questions: if you know the layout, the marks are available. This chapter gives you that layout and the judgement to choose between methods.

## Core ideas

### The logic of induction

Imagine an infinite line of dominoes. If (1) the first domino falls and (2) every domino that falls knocks over the next, then all the dominoes fall. **Proof by mathematical induction** has exactly this structure. To prove that a statement $P(n)$ holds for all integers $n\ge n_0$:

1. **Base case.** Show that $P(n_0)$ is true (commonly $n_0=1$).
2. **Inductive hypothesis.** *Assume* that $P(k)$ is true for some integer $k\ge n_0$.
3. **Inductive step.** Using the assumption, show that $P(k+1)$ is true.
4. **Conclusion.** State that since $P(n_0)$ is true, and $P(k)\Rightarrow P(k+1)$, by mathematical induction $P(n)$ is true for all integers $n\ge n_0$.

The assumption in step 2 is *not* circular. We do not claim $P(k)$ is true; we show an implication. The base case provides the truth, and the implication carries it forward. The IB mark scheme conventionally expects the conclusion to include a sentence like "True for $n=1$; if true for $n=k$ then true for $n=k+1$; so true for all $n\in\mathbb{Z}^{+}$ by induction", and the marks for it are easy to lose by omitting it.

### Why the base case matters

Consider the claim $P(n)$: "$n^{2}+n+1$ is even." Suppose $P(k)$ holds: $k^{2}+k+1$ is even. Then $(k+1)^{2}+(k+1)+1=(k^{2}+k+1)+2k+2$ is even plus even, which is even. So the inductive step *works*, yet the statement is false: $n=1$ gives $3$, which is odd. The base case never held, so the chain never started. A correct induction needs both parts.

### Summation by induction

To prove $\displaystyle\sum_{r=1}^{n}f(r)=g(n)$, in the inductive step write the sum to $k+1$ as the sum to $k$ plus the $(k+1)$th term, substitute the hypothesis, and show that the result equals $g(k+1)$. Always *state the target* $g(k+1)$ first, because algebra is much easier when you know what you are aiming for. Typical results: $\sum r=\dfrac{n(n+1)}2$, $\sum r^{2}=\dfrac{n(n+1)(2n+1)}6$, $\sum r^{3}=\dfrac{n^{2}(n+1)^{2}}4$.

### Divisibility by induction

To show that $f(n)$ is divisible by $m$, assume $f(k)=mA$ for an integer $A$. Then express $f(k+1)$ as $(\text{something})\times f(k)+m\times(\text{integer})$, or use $f(k+1)-c\,f(k)$ for a convenient constant $c$. For $9^{n}-1$ divisible by $8$: $9^{k+1}-1=9(9^{k}-1)+8$, and both terms are multiples of $8$.

### Inequalities by induction

For $f(n)>g(n)$ for $n\ge n_0$, the inductive step multiplies or adds to both sides, but be careful: multiplying an inequality by a positive number preserves it, and you must show the final inequality using the *hypothesis* and a separate simple inequality valid for $k\ge n_0$. Always say where the condition $k\ge n_0$ is used.

### Recurrences and patterns

If $u_1$ is given and $u_{n+1}=F(u_n)$, a closed formula guessed from the first few terms can be proved by induction: assume $u_k=$ formula, substitute into $u_{k+1}=F(u_k)$, simplify. The same logic proves patterns for derivatives: if $\dfrac{d^{n}}{dx^{n}}(xe^{x})=(x+n)e^{x}$, differentiating once more shows the pattern continues.

### De Moivre's theorem

$P(n)$: $(\cos\theta+i\sin\theta)^{n}=\cos n\theta+i\sin n\theta$. The base case $n=1$ is trivial. For the step, $(\cos\theta+i\sin\theta)^{k+1}=(\cos k\theta+i\sin k\theta)(\cos\theta+i\sin\theta)$, and the multiplication gives $\cos k\theta\cos\theta-\sin k\theta\sin\theta+i(\sin k\theta\cos\theta+\cos k\theta\sin\theta)=\cos(k+1)\theta+i\sin(k+1)\theta$ by the compound-angle identities.

### Proof by contradiction

To prove a statement $S$ by contradiction, **assume $S$ is false**, and show that this assumption leads to a logical impossibility (a contradiction), such as a number being both odd and even, or a fraction in lowest terms that is not in lowest terms. Since correct reasoning from a true assumption cannot produce a falsehood, the assumption must have been false, so $S$ is true. The method is natural for non-existence and irrationality statements, because the negation gives you something concrete to work with: "if $\sqrt2$ were rational, then $\sqrt2=\dfrac pq$ in lowest terms".

The key habits are: state the negation *precisely*, record all the information it gives, derive the contradiction explicitly, and conclude in a sentence.

### Counterexamples again

To disprove "for all $n$, $P(n)$", find a single $n$ for which $P(n)$ is false and check it explicitly, as in SL 1.6. A counterexample is *not* a proof of the opposite, but of the failure of the universal claim.

### Choosing the method

- *Statement about all positive integers with a sum, product, recurrence or divisibility structure* suggests induction.
- *Statement that something does not exist or is irrational* suggests contradiction.
- *A claim that "for all" something holds but seems doubtful* suggests searching for a counterexample first.
- *An identity or a one-line algebraic fact* suggests a direct proof.

## Worked examples

### Example 1 (a sum of squares, 7 marks)

Prove by induction that $\displaystyle\sum_{r=1}^{n}r^{2}=\dfrac{n(n+1)(2n+1)}{6}$ for all $n\in\mathbb{Z}^{+}$.

*Proof.* Let $P(n)$ be the statement.
**Base case:** for $n=1$, the left side is $1$ and the right side is $\dfrac{1\cdot2\cdot3}6=1$, so $P(1)$ is true.
**Hypothesis:** assume $P(k)$: $\sum_{r=1}^{k}r^{2}=\dfrac{k(k+1)(2k+1)}6$.
**Step:** we must show $\sum_{r=1}^{k+1}r^{2}=\dfrac{(k+1)(k+2)(2k+3)}6$. Now
$$
\sum_{r=1}^{k+1}r^{2}=\frac{k(k+1)(2k+1)}6+(k+1)^{2}=\frac{(k+1)\left[k(2k+1)+6(k+1)\right]}6=\frac{(k+1)(2k^{2}+7k+6)}6.
$$
Since $2k^{2}+7k+6=(k+2)(2k+3)$, this equals $\dfrac{(k+1)(k+2)(2k+3)}6$, which is $P(k+1)$.
**Conclusion:** $P(1)$ is true, and $P(k)\Rightarrow P(k+1)$, so $P(n)$ is true for all $n\in\mathbb{Z}^{+}$ by mathematical induction. $\blacksquare$

### Example 2 (divisibility, 6 marks)

Prove that $9^{n}-1$ is divisible by $8$ for all $n\in\mathbb{Z}^{+}$.

*Proof.* **Base case:** $9^{1}-1=8$, divisible by $8$. **Hypothesis:** assume $9^{k}-1=8A$ for some integer $A$. **Step:** $9^{k+1}-1=9\cdot9^{k}-1=9(8A+1)-1=72A+8=8(9A+1)$, which is divisible by $8$ since $9A+1\in\mathbb{Z}$. **Conclusion:** true for $n=1$, and if true for $n=k$ then true for $n=k+1$, so true for all $n\in\mathbb{Z}^{+}$. $\blacksquare$

### Example 3 (an inequality, 7 marks)

Prove that $2^{n}>n^{2}$ for all integers $n\ge5$.

*Proof.* **Base case:** $2^{5}=32>25=5^{2}$. **Hypothesis:** assume $2^{k}>k^{2}$ for some $k\ge5$. **Step:** $2^{k+1}=2\cdot2^{k}>2k^{2}$. We claim $2k^{2}\ge(k+1)^{2}$, i.e. $k^{2}-2k-1\ge0$. For $k\ge5$, $k^{2}-2k-1=k(k-2)-1\ge15-1>0$. So $2^{k+1}>2k^{2}\ge(k+1)^{2}$. **Conclusion:** true for $n=5$, and true for $k\Rightarrow k+1$, hence for all $n\ge5$ by induction. $\blacksquare$

The statement is false for $n=2,3,4$ (equality at $n=2$ and $n=4$), which is why the base case begins at $5$.

### Example 4 (a recurrence, 6 marks)

A sequence has $u_1=1$ and $u_{n+1}=2u_n+1$. Prove that $u_n=2^{n}-1$ for all $n\in\mathbb{Z}^{+}$.

*Proof.* **Base case:** $u_1=2^{1}-1=1$ ✓. **Hypothesis:** assume $u_k=2^{k}-1$. **Step:** $u_{k+1}=2u_k+1=2\left(2^{k}-1\right)+1=2^{k+1}-1$. **Conclusion:** true for $n=1$ and if true for $k$ then true for $k+1$, so true for all $n$. $\blacksquare$

### Example 5 (de Moivre, 6 marks)

Prove that $(\cos\theta+i\sin\theta)^{n}=\cos n\theta+i\sin n\theta$ for $n\in\mathbb{Z}^{+}$.

*Proof.* **Base case:** $n=1$ is trivially true. **Hypothesis:** assume it is true for $n=k$. **Step:**
$$
(\cos\theta+i\sin\theta)^{k+1}=(\cos k\theta+i\sin k\theta)(\cos\theta+i\sin\theta)=\cos(k+1)\theta+i\sin(k+1)\theta,
$$
because the real part is $\cos k\theta\cos\theta-\sin k\theta\sin\theta=\cos(k+1)\theta$ and the imaginary part is $\sin k\theta\cos\theta+\cos k\theta\sin\theta=\sin(k+1)\theta$. **Conclusion:** by induction it holds for all $n\in\mathbb{Z}^{+}$. $\blacksquare$

### Example 6 (a derivative pattern, 6 marks)

Prove that $\dfrac{d^{n}}{dx^{n}}\left(xe^{x}\right)=(x+n)e^{x}$ for $n\in\mathbb{Z}^{+}$.

*Proof.* **Base case:** $\dfrac d{dx}(xe^{x})=e^{x}+xe^{x}=(x+1)e^{x}$ ✓ (product rule). **Hypothesis:** assume the result for $n=k$. **Step:** $\dfrac{d^{k+1}}{dx^{k+1}}(xe^{x})=\dfrac d{dx}\left[(x+k)e^{x}\right]=e^{x}+(x+k)e^{x}=(x+k+1)e^{x}$. **Conclusion:** by induction, true for all $n\in\mathbb{Z}^{+}$. $\blacksquare$

### Example 7 (irrationality of $\sqrt2$, 7 marks)

Prove by contradiction that $\sqrt2$ is irrational.

*Proof.* Suppose $\sqrt2$ is rational. Then $\sqrt2=\dfrac pq$ with $p,q\in\mathbb{Z}^{+}$ having no common factor (the fraction is in lowest terms). Squaring, $2q^{2}=p^{2}$, so $p^{2}$ is even, and therefore $p$ is even (the square of an odd number is odd, by SL 1.6). Write $p=2m$. Then $2q^{2}=4m^{2}$, so $q^{2}=2m^{2}$, and $q^{2}$ is even, so $q$ is even. Now $p$ and $q$ are both even, so they have a common factor $2$, contradicting the assumption that the fraction was in lowest terms. Hence $\sqrt2$ is irrational. $\blacksquare$

### Example 8 (infinitely many primes, 6 marks)

Prove that there are infinitely many prime numbers.

*Proof.* Suppose there are only finitely many primes, $p_1,p_2,\ldots,p_n$. Let $N=p_1p_2\cdots p_n+1$. Then $N>1$, so $N$ has a prime factor, which must be one of the $p_i$. But $p_i$ divides $p_1\cdots p_n$, so $p_i$ divides $N-p_1\cdots p_n=1$, which is impossible. This contradicts the assumption, so there are infinitely many primes. $\blacksquare$

### Example 9 (irrational numbers, 6 marks)

(a) Prove that if $a$ is rational and $b$ is irrational then $a+b$ is irrational. (b) Prove that $\log_23$ is irrational.

*Proof.* (a) Suppose $a+b=c$ with $c$ rational. Then $b=c-a$ is a difference of rationals, hence rational, contradicting that $b$ is irrational. (b) Suppose $\log_23=\dfrac pq$ with $p,q\in\mathbb{Z}^{+}$. Then $2^{p/q}=3$, so $2^{p}=3^{q}$. The left side is even and the right side is odd (as $p,q\ge1$), a contradiction. So $\log_23$ is irrational. $\blacksquare$

### Example 10 (counterexamples, 4 marks)

Disprove: (a) $n^{2}-n+11$ is prime for all positive integers $n$; (b) if $a>b$ then $a^{2}>b^{2}$.

*Solution.* (a) $n=11$ gives $121-11+11=121=11^{2}$, not prime. (b) $a=1$, $b=-2$ gives $1>-2$ but $1<4$.

### Example 11 (a flawed induction, 4 marks)

A student "proves" that $n^{2}+n+1$ is even for all $n\ge1$ by assuming the result for $k$ and showing it for $k+1$. Identify the error.

*Solution.* The inductive step is valid, but there is no base case. For $n=1$, $1+1+1=3$ is odd, so the statement is false at the start. An induction proof needs *both* a true base case and a correct implication.

## Using your GDC

A GDC cannot prove a statement for all $n$, but it is useful for the preparation that makes a proof possible. Before an induction proof you can use a table or a sequence function to test the claim for $n=1,2,3,\ldots$ to confirm the base case and to spot the pattern for a recurrence, as in Example 4. To find the *smallest* $n_0$ for which an inequality such as $2^{n}>n^{2}$ holds, evaluate both sides in a table and see where it begins to hold for good; this gives the base case. To look for a counterexample, scan a table of values (for $n^{2}-n+11$, a table shows the first composite at $n=11$). You can also confirm algebra in the inductive step by testing it at a specific value of $k$. During the examination, however, none of these results is a substitute for the written structure: a table of values scores no marks as proof. Menu names vary between models.

## Common mistakes

1. **Omitting the base case**, or checking it for the wrong $n$.
2. **Assuming what is to be proved**, that is, writing "assume $P(k+1)$" in the inductive step.
3. **Not stating the target** $P(k+1)$, which makes the algebra aimless.
4. **Omitting the conclusion sentence**, which carries a mark.
5. **Using "$k$" in the hypothesis and then writing "$n$" in the step**, which confuses the logic.
6. **Wrong direction in the inequality step**, or forgetting that the step needs $k\ge n_0$.
7. **In contradiction, negating incorrectly:** the negation of "$\sqrt2$ is irrational" is "$\sqrt2$ is rational", not "$\sqrt2$ is an integer".
8. **Failing to reach an explicit contradiction**, or concluding something different from the original statement.

## Exam technique and command terms

**Prove by induction** instructs you to follow the four-part structure; the marks are generally one for the base case, one for the assumption, one or two for the algebra of the step, and one for the conclusion. Write each part under its own label. **Prove by contradiction** requires the first line "Assume that ... is false" followed by a precise negation. **Show that** may expect any valid method, so choose the quickest. **Deduce** or **hence** often asks you to use the proved formula in a numerical context, such as evaluating $\sum_{r=1}^{20}r^{2}$.

Time management matters because induction questions can be long: do the base case first, since it is a secure mark. Write the target expression before you start the algebra, and look for a common factor of $(k+1)$ in summation steps, which is nearly always present. If your algebra does not reach the target, do not "force" the final line; the examiner will reward the correct work done so far, and a forced line will be penalised.

## Connections

SL 1.6 provides direct proof and counterexample, and we reuse its facts about odd and even squares in Example 7. SL 1.2 and SL 1.3 are where you first met the sum formulae that induction now *verifies*, and in AHL 1.11 telescoping sums such as $\sum\dfrac1{r(r+1)}=\dfrac n{n+1}$ are typical induction targets. AHL 1.13 and 1.14 state de Moivre's theorem and use it, and here its proof is completed. In Unit 5, induction proves patterns for higher derivatives, as in Example 6, and for the Maclaurin series general term. In statistics and probability (Unit 4), induction proves formulae for the sums of probabilities and for the mean of a binomial distribution. In computer science, induction is the basis of recursion and loop invariants. Contradiction reappears in calculus when proving that a function cannot have a root in an interval or that a limit cannot take two different values.

## Check your understanding

1. Prove by induction that $\sum_{r=1}^{n}r^{3}=\dfrac{n^{2}(n+1)^{2}}4$.
2. Prove by induction that $4^{n}-1$ is divisible by $3$ for $n\in\mathbb{Z}^{+}$.
3. Prove by induction that $n!\ge2^{n-1}$ for $n\in\mathbb{Z}^{+}$.
4. A sequence has $u_1=1$ and $u_{n+1}=u_n+2n+1$. Prove that $u_n=n^{2}$.
5. Prove by induction that $\sum_{r=1}^{n}r(r+1)=\dfrac{n(n+1)(n+2)}3$.
6. Prove by contradiction that $\sqrt3$ is irrational.
7. Disprove: "$n^{2}+n+1$ is prime for every positive integer $n$".
8. Prove by contradiction that there is no smallest positive rational number.
9. Explain why the proof of "$n^{2}+n+1$ is even" by induction fails, even though the inductive step is correct.
10. Prove by induction that $3^{n}\ge2n+1$ for $n\in\mathbb{Z}^{+}$.

### Answers

1. Base: $1=\dfrac{1\cdot4}4$ ✓. Step: $\dfrac{k^{2}(k+1)^{2}}4+(k+1)^{3}=\dfrac{(k+1)^{2}\left[k^{2}+4(k+1)\right]}4=\dfrac{(k+1)^{2}(k+2)^{2}}4$ ✓. Conclude by induction.
2. Base: $4-1=3$. Assume $4^{k}-1=3A$. Then $4^{k+1}-1=4(3A+1)-1=12A+3=3(4A+1)$. Conclude.
3. Base: $1!=1\ge2^{0}=1$. Assume $k!\ge2^{k-1}$. Then $(k+1)!=(k+1)k!\ge(k+1)2^{k-1}\ge2\cdot2^{k-1}=2^{k}$ since $k+1\ge2$. Conclude.
4. Base: $u_1=1=1^{2}$. Assume $u_k=k^{2}$. Then $u_{k+1}=k^{2}+2k+1=(k+1)^{2}$. Conclude.
5. Base: $1\cdot2=2=\dfrac{1\cdot2\cdot3}3$ ✓. Step: $\dfrac{k(k+1)(k+2)}3+(k+1)(k+2)=\dfrac{(k+1)(k+2)(k+3)}3$ ✓. Conclude.
6. Suppose $\sqrt3=\dfrac pq$ in lowest terms. Then $p^{2}=3q^{2}$, so $3\mid p^{2}$ and hence $3\mid p$ (as $3$ is prime). Write $p=3m$, so $9m^{2}=3q^{2}$ and $q^{2}=3m^{2}$, so $3\mid q$. Then $3$ divides both, contradicting lowest terms.
7. $n=4$ gives $16+4+1=21=3\times7$, which is not prime.
8. Suppose $q$ is the smallest positive rational. Then $\dfrac q2$ is a positive rational and $\dfrac q2<q$, a contradiction.
9. The base case fails: $n=1$ gives $3$, which is odd. An induction needs a true base case; the inductive step alone only passes truth along and never creates it.
10. Base: $3\ge3$ ✓. Assume $3^{k}\ge2k+1$. Then $3^{k+1}\ge3(2k+1)=6k+3\ge2k+3=2(k+1)+1$ since $4k\ge0$. Conclude.

## Summary

- Induction: base case, assume $P(k)$, show $P(k+1)$ using the assumption, then state the conclusion. All four parts earn marks.
- State the target $P(k+1)$ before the algebra; for sums, add the $(k+1)$th term; for divisibility, write $f(k+1)$ in terms of $f(k)$ plus a multiple.
- The base case matters: a valid step with a false base proves nothing.
- Contradiction: assume the negation precisely, derive an explicit impossibility, and conclude.
- A single counterexample disproves a universal claim.
- Choose the method by the shape of the statement: all integers (induction), non-existence or irrationality (contradiction), doubtful claim (counterexample).

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.15. Related facts may appear elsewhere. Justify any method used here.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
