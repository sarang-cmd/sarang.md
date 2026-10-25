# Simple proof

> **SL 1.6 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain the difference between *verifying* a statement with examples and *proving* it for every case;
- represent even integers, odd integers, consecutive integers and multiples algebraically;
- write a direct proof, laying out each deduction so that every line follows from the previous ones;
- prove algebraic identities and divisibility statements for all integers;
- convert a recurring decimal into a fraction and so prove that it is rational;
- use the symbols $\Rightarrow$, $\Leftrightarrow$, $\equiv$ and $\therefore$ correctly, and read command terms such as *show that*, *prove* and *hence*;
- disprove a general statement with a single counterexample;
- recognise common logical errors: circular reasoning, assuming the conclusion, division by zero and reversing an implication.

## Why this topic matters

Proof is the heart of mathematics, and the IB asks you to experience it in small, manageable doses. In the Analysis and Approaches course, "show that" questions appear in every paper, and from AHL 1.15 onwards you will meet induction and contradiction. All of those rest on the skills of this chapter: setting up a general object (an integer $n$, an odd number $2k+1$), manipulating it with legitimate algebra, and ending with the statement you were asked to establish. Many students lose marks not because they cannot do the algebra, but because they present a *calculation* rather than an *argument*. A proof is a short piece of mathematical writing that a sceptical reader could follow line by line and not find a gap. Learning to write that way is also the best training for the investigation work in the internal assessment, where explanation carries marks.

## Core ideas

### Verifying versus proving

Testing a statement on examples can *disprove* it, but it can never *prove* it. Suppose you notice that $n^{2}+n+41$ gives the prime numbers $41,43,47,53,\ldots$ for $n=0,1,2,3,\ldots$ and you conclude that it is always prime. That conclusion is false, because at $n=40$ the value is $40^{2}+40+41=1681=41^{2}$. Forty successful tests did not make a proof. A proof must cover **all** the cases at once. The usual way to do that is to use *letters* for the general case, such as "let $n$ be an integer", and to reason without ever substituting a specific value.

### Algebraic representations

Most proofs in this course begin by writing the objects in algebraic form.

- An **even** integer is $2k$ for some integer $k$. An **odd** integer is $2k+1$ (or $2k-1$).
- Two **consecutive** integers are $n$ and $n+1$. Three consecutive integers are $n$, $n+1$, $n+2$.
- Two **consecutive even** integers are $2k$ and $2k+2$. Consecutive odd integers are $2k+1$ and $2k+3$.
- A **multiple of $m$** is $mk$ for an integer $k$. To prove that a quantity is a multiple of $m$, rewrite it as $m\times(\text{an integer expression})$.
- A **rational number** is one that can be written as $\frac{p}{q}$ with $p,q\in\mathbb{Z}$ and $q\ne0$.

Use *different letters* for different numbers: if $a$ and $b$ are both odd, write $a=2m+1$ and $b=2n+1$, not $2m+1$ twice. Using the same letter secretly forces the two numbers to be equal, and the proof then covers only that special case.

### Direct proof

A **direct proof** starts from known facts or assumptions and proceeds by valid steps to the conclusion. The pattern is:

1. State what you are given and introduce notation.
2. Manipulate the algebra, with every step justified.
3. Finish with a sentence that states the conclusion in words, in terms of the claim.

For divisibility, step 3 is the crucial one. Reaching $3n+3$ is not enough: you must write $3(n+1)$ and say "which is a multiple of $3$ because $n+1$ is an integer". The phrase *because $n+1$ is an integer* is what makes the proof complete.

### Logical symbols

The symbol $\Rightarrow$ means "implies": $x=2\Rightarrow x^{2}=4$ is true, but the reverse, $x^{2}=4\Rightarrow x=2$, is false because $x$ could be $-2$. The double arrow $\Leftrightarrow$ means "if and only if", used when implication holds both ways. The sign $\equiv$ means "is identically equal to", used for identities that hold for *every* value of the variable, such as $(x+1)^{2}\equiv x^{2}+2x+1$. The symbol $\therefore$ means "therefore". A common source of error in solving equations is to use $\Leftrightarrow$ when only $\Rightarrow$ is justified, which happens when you square both sides or multiply by an expression that could be zero.

### Proving identities

To prove that an identity $L\equiv R$ holds, work on one side until it equals the other. A common style is to start with the more complicated side. Do **not** begin by writing $L=R$ and manipulating both sides until you reach something obviously true, because that assumes what is to be proved. If you do want to work on both sides, make sure that every step is reversible, or work on each side separately until both reach the same expression.

### Recurring decimals

A recurring decimal is rational, and the proof is a standard technique: multiply by a power of ten that shifts the repeating block, then subtract. Let $x=0.\overline{72}=0.727272\ldots$. Then $100x=72.727272\ldots$, so $100x-x=72$ and $99x=72$. Hence $x=\frac{72}{99}=\frac{8}{11}$, a ratio of two integers.

### Counterexamples

To disprove a statement of the form "for all $x$, $P(x)$ holds", you need only *one* value of $x$ for which $P(x)$ fails. That value is a **counterexample**. It must satisfy the hypotheses of the statement and violate the conclusion, and you should check both explicitly. Counterexamples are efficient: they also prevent you from wasting time on a false claim.

## Worked examples

### Example 1 (divisibility, 3 marks)

Prove that the sum of three consecutive integers is divisible by $3$.

*Proof.* Let the integers be $n$, $n+1$ and $n+2$, where $n\in\mathbb{Z}$. Their sum is $n+(n+1)+(n+2)=3n+3=3(n+1)$. Since $n+1$ is an integer, the sum is a multiple of $3$. $\blacksquare$

### Example 2 (odd times odd, 4 marks)

Prove that the product of two odd integers is odd.

*Proof.* Let the integers be $2a+1$ and $2b+1$, where $a,b\in\mathbb{Z}$. Then

$$
(2a+1)(2b+1)=4ab+2a+2b+1=2(2ab+a+b)+1.
$$

Since $2ab+a+b$ is an integer, the product has the form $2k+1$ with $k\in\mathbb{Z}$, so it is odd. $\blacksquare$

### Example 3 (a stronger statement, 5 marks)

Prove that the square of any odd integer has the form $8k+1$.

*Proof.* Let the odd integer be $2m+1$. Then $(2m+1)^{2}=4m^{2}+4m+1=4m(m+1)+1$. Now $m(m+1)$ is the product of two consecutive integers, so one of them is even and the product is even. Write $m(m+1)=2k$ with $k\in\mathbb{Z}$. Then $(2m+1)^{2}=8k+1$. $\blacksquare$

Check with $m=2$: $5^{2}=25=8\times3+1$. ✓ A check is not part of the proof, but it can catch an algebraic slip.

### Example 4 (recurring decimals, 4 marks)

Show that $0.4333\ldots$ is rational by writing it as a fraction in lowest terms.

*Solution.* Let $x=0.4\overline{3}$. Then $10x=4.333\ldots$ and $100x=43.333\ldots$. Subtracting, $100x-10x=43.333\ldots-4.333\ldots=39$, so $90x=39$ and $x=\frac{39}{90}=\frac{13}{30}$. Since $13$ and $30$ share no common factor, this is in lowest terms. Check: $\frac{13}{30}=0.4333\ldots$ ✓

### Example 5 (an inequality, 4 marks)

Prove that for all real $a$ and $b$, $a^{2}+b^{2}\ge2ab$. Deduce that for positive $x$, $x+\dfrac1x\ge2$.

*Proof.* For real $a,b$, $(a-b)^{2}\ge0$ because a real square is never negative. Expanding, $a^{2}-2ab+b^{2}\ge0$, so $a^{2}+b^{2}\ge2ab$. $\blacksquare$

For the deduction, take $a=\sqrt{x}$ and $b=\dfrac1{\sqrt{x}}$, both real since $x>0$. Then $a^{2}+b^{2}=x+\dfrac1x$ and $2ab=2$, so $x+\dfrac1x\ge2$. Equality holds exactly when $a=b$, i.e. when $x=1$.

### Example 6 (counterexamples, 6 marks)

Disprove each statement. (a) For every positive integer $n$, $n^{2}+n+41$ is prime. (b) If $x^{2}>y^{2}$ then $x>y$. (c) If $n$ is prime then $2^{n}-1$ is prime.

*Solution.* (a) $n=40$ gives $1681=41\times41$, which is not prime. (b) $x=-3$, $y=2$ gives $x^{2}=9>4=y^{2}$, but $x<y$. (c) $n=11$ is prime but $2^{11}-1=2047=23\times89$.

Notice in each case the counterexample meets the hypothesis ($n=11$ is genuinely prime) and breaks the conclusion. Part (b) shows why $x^{2}>y^{2}$ only gives $|x|>|y|$.

### Example 7 (the quadratic formula, 6 marks)

Prove that the solutions of $ax^{2}+bx+c=0$, with $a\ne0$, are $x=\dfrac{-b\pm\sqrt{b^{2}-4ac}}{2a}$.

*Proof.* Divide by $a$: $x^{2}+\dfrac bax+\dfrac ca=0$. Complete the square: $\left(x+\dfrac{b}{2a}\right)^{2}-\dfrac{b^{2}}{4a^{2}}+\dfrac ca=0$. Rearranging, $\left(x+\dfrac b{2a}\right)^{2}=\dfrac{b^{2}-4ac}{4a^{2}}$. Taking the square root of both sides, $x+\dfrac b{2a}=\pm\dfrac{\sqrt{b^{2}-4ac}}{2a}$, which gives the result. Every step is reversible, so these are exactly the solutions. $\blacksquare$

Every step here was *equivalent* to the previous one (division by $a\ne0$, completing the square, taking $\pm$ roots), so the chain of $\Leftrightarrow$ is valid.

### Example 8 (divisibility by a product, 5 marks)

Prove that $n^{3}-n$ is divisible by $6$ for every integer $n$.

*Proof.* Factorise: $n^{3}-n=n(n^{2}-1)=(n-1)n(n+1)$, a product of three consecutive integers. Among any three consecutive integers, at least one is even, so the product is divisible by $2$. Exactly one of them is a multiple of $3$, because the remainders on division by $3$ of three consecutive integers are $0,1,2$ in some order. So the product is divisible by $2$ and by $3$. Since $2$ and $3$ share no common factor, it is divisible by $6$. $\blacksquare$

### Example 9 (a sum of squares, 3 marks)

Show that the sum of the squares of two consecutive integers is odd.

*Proof.* $n^{2}+(n+1)^{2}=2n^{2}+2n+1=2(n^{2}+n)+1$. Since $n^{2}+n$ is an integer, the sum has the form $2k+1$ and is odd. $\blacksquare$

## Using your GDC

A graphic display calculator cannot prove a general statement, but it is still useful in three ways. First, you can use it to *explore* a conjecture quickly, for example by building a table of $n^{3}-n$ for $n=1,\ldots,15$ and noticing that every value is divisible by $6$. Second, it can find a *counterexample*: a table of $n^{2}+n+41$ will show the first composite value, and a graph of two functions can reveal where an inequality fails. Third, it can check an algebraic manipulation, for example by plotting both sides of an identity to see that the graphs coincide.

What a GDC output can never do is stand in for the argument. If a question says "show that" or "prove", the examiner is looking for algebra, and a table of numerical values earns no marks for the proof itself. Use technology to *find* the idea, then write the proof by hand.

## Common mistakes

1. **Proof by example.** Checking $n=1,2,3$ and declaring the result true.
2. **Using the same letter twice.** Writing two different odd numbers both as $2k+1$.
3. **Circular reasoning.** Starting from the statement to be proved and reducing it to $0=0$ without checking reversibility.
4. **Stopping before the conclusion.** Getting $3n+3$ without writing $3(n+1)$ and saying why it is a multiple of $3$.
5. **Dividing by something that could be zero.** The false "proof" that $1=2$ hides a division by $a-b$ when $a=b$.
6. **Reversing an implication.** From $x^{2}=4$ concluding $x=2$.
7. **Weak counterexamples.** Offering a value that does not satisfy the hypothesis of the claim.
8. **Not defining the symbols.** Starting with "let $n$ be..." is part of the proof.

## Exam technique and command terms

The command term **show that** means you are given the answer, and the marks are for the *route*. Work towards the stated result without using it, and write the final line exactly as in the question. **Prove** is stronger: every inference must be justified, and the final sentence should say what has been proved. **Verify** means to check by substitution, which is acceptable for a numerical claim but not for a general one. **Hence** says to use the previous result, and **deduce** asks for a conclusion that follows with little extra work. **Disprove** or **give a counterexample** asks for exactly one example, clearly checked.

Write in short lines, one deduction per line, using words such as "since", "so" and "therefore" where they help. Label the claim being proved, introduce notation, and end with the conclusion in words. If you reach the wrong destination, do not force it. Re-check the algebra, because forced proofs lose method marks and examiners notice. Allocate time: a three-mark "show that" should take about three minutes.

## Connections

The algebra of this chapter underlies sequences: the proof of the arithmetic sum in SL 1.2 and of the geometric sum in SL 1.3 are direct proofs. Laws of exponents and logarithms in SL 1.7 are *derived*, not decreed, using the definition. In AHL 1.15 you extend the toolkit to proof by induction (for statements about all positive integers), proof by contradiction (assume the opposite and reach an impossibility) and sharper counterexample work. The proof that $\sqrt2$ is irrational is the classic contradiction example. Trigonometric identities in SL 3.6 and AHL 3.10 are proved in exactly the "work on one side" style from this chapter. Even in calculus, a "show that" about a stationary point depends on legitimate algebra. Probabilistic arguments in the statistics strand also rely on valid reasoning from definitions.

## Check your understanding

1. Prove that the sum of any two odd integers is even.
2. Prove that the sum of four consecutive integers is never divisible by $4$.
3. Prove that $n^{2}-n$ is even for every integer $n$.
4. Write $0.\overline{27}=0.272727\ldots$ as a fraction in lowest terms.
5. Give a counterexample to the claim "the product of two irrational numbers is irrational".
6. Prove that $(2n+1)^{2}-(2n-1)^{2}=8n$, and explain why the difference of the squares of two consecutive odd numbers is always a multiple of $8$.
7. Prove that for every positive real $x$, $x+\dfrac1x\ge2$.
8. Disprove: "for every integer $n$, $n^{2}>n$".
9. Show that the sum of three consecutive even integers is divisible by $6$.
10. Prove that if $n$ is odd then $n^{2}+n$ is even.

### Answers

1. $(2a+1)+(2b+1)=2(a+b+1)$, which is even since $a+b+1\in\mathbb{Z}$.
2. $n+(n+1)+(n+2)+(n+3)=4n+6=4(n+1)+2$, which leaves remainder $2$ on division by $4$, so it is never a multiple of $4$.
3. $n^{2}-n=n(n-1)$, a product of consecutive integers. One of them is even, so the product is even.
4. Let $x=0.\overline{27}$. $100x-x=27$, so $x=\frac{27}{99}=\frac{3}{11}$.
5. $\sqrt2\times\sqrt2=2$, which is rational, while $\sqrt2$ is irrational.
6. $(2n+1)^{2}-(2n-1)^{2}=(4n^{2}+4n+1)-(4n^{2}-4n+1)=8n$. Consecutive odd numbers can be written $2n-1$ and $2n+1$, so their squares differ by $8n$, a multiple of $8$.
7. $x+\frac1x-2=\frac{x^{2}-2x+1}{x}=\frac{(x-1)^{2}}{x}\ge0$ since $x>0$. So $x+\frac1x\ge2$.
8. Take $n=1$: $1^{2}=1$, which is not greater than $1$. ($n=0$ also fails.)
9. $2n+(2n+2)+(2n+4)=6n+6=6(n+1)$.
10. Let $n=2k+1$. Then $n^{2}+n=n(n+1)=(2k+1)(2k+2)=2(2k+1)(k+1)$, which is even.

## Summary

- Examples can disprove but never prove a general claim; a proof must work for all cases.
- Use letters: $2k$ for even, $2k+1$ for odd, $n,n+1,n+2$ for consecutive integers, and different letters for different numbers.
- A divisibility proof ends by factoring out the divisor and noting that what remains is an integer.
- Work on one side of an identity, or make every step reversible.
- A recurring decimal is rational: multiply to shift the repeating block, subtract, solve.
- One valid counterexample disproves a universal statement.
- End every proof with a sentence saying what has been shown.
