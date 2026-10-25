# Binomial distribution

> **SL 4.8 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state the conditions under which a situation is modelled by a binomial distribution $X\sim B(n,p)$;
- write down and use the formula $P(X=r)=\binom{n}{r}p^{r}(1-p)^{n-r}$;
- calculate $P(X=r)$, $P(X\le r)$, $P(X\ge r)$ and probabilities of ranges with a calculator, converting between "at least", "more than" and cumulative form correctly;
- find the mean $E(X)=np$ and variance $\mathrm{Var}(X)=np(1-p)$, and use them to find unknown parameters;
- solve problems that ask for the least $n$ or the greatest $k$ satisfying a probability condition;
- comment on whether a binomial model is appropriate in context;
- find expected frequencies for repeated binomial experiments.

## Why this topic matters

Many situations consist of repeating the same yes-or-no trial a fixed number of times: a basketball player takes ten free throws, a factory inspects twenty items, a pollster asks a hundred voters whether they support a proposal, a student guesses on a multiple-choice test. In each case we count the number of "successes". The binomial distribution gives the probability of every possible count, so we can answer questions such as "how likely is it that at least three items are faulty?" That is exactly the kind of question that businesses and scientists ask when deciding whether a result is surprising or routine.

In the examination the binomial distribution is one of the most reliable sources of marks, because the calculator does the hard work. The skill is in setting up: stating the distribution with the right $n$ and $p$, translating the wording into $P(X=r)$ or a cumulative probability, and using the complement for "at least". The subtle point is the cumulative function, which on a calculator gives $P(X\le r)$, so $P(X\ge r)$ is $1-P(X\le r-1)$, and an off-by-one slip here costs the whole answer. The chapter also asks for a sentence on whether the model is suitable, which tests your understanding of independence and constant probability. This links back directly to SL 4.6.

## Core ideas

### Binomial conditions

A random variable $X$ has a **binomial distribution** with parameters $n$ and $p$, written $X\sim B(n,p)$, when it counts the successes in a sequence of trials satisfying four conditions:

1. there is a **fixed number** $n$ of trials;
2. each trial has just **two outcomes**, called success and failure;
3. the trials are **independent**;
4. the probability of success, $p$, is the **same** on every trial.

When you comment on a model, name the condition that might fail. If five cards are drawn from a pack *without* replacement, the probability of a heart changes after each draw and the trials are not independent. In a sample from a very large population the effect is tiny and the binomial model is a good approximation. Basketball shots might not be independent if the player gains confidence after success, which is a reason to treat the model as an approximation.

### The probability formula

For $X\sim B(n,p)$ and $r=0,1,\dots,n$,
$$
P(X=r)=\binom{n}{r}p^{r}(1-p)^{n-r}.
$$
The reasoning is the tree diagram of SL 4.6. One particular sequence with $r$ successes and $n-r$ failures has probability $p^{r}(1-p)^{n-r}$, by independence. The number of different sequences with $r$ successes is the number of ways to choose which $r$ of the $n$ trials succeed, which is $\binom{n}{r}=\dfrac{n!}{r!(n-r)!}$. Multiplying gives the formula. The probabilities for $r=0,\dots,n$ add to $1$, since by the binomial theorem the sum is $\big(p+(1-p)\big)^{n}=1$.

### Cumulative probabilities

The calculator offers two functions: **binomial probability density** for $P(X=r)$, and **binomial cumulative distribution** for $P(X\le r)$. Everything else comes from these by the complement and by subtraction, as follows.

| Wording | Written as | Calculation |
| --- | --- | --- |
| at most $r$, no more than $r$, fewer than $r+1$ | $P(X\le r)$ | cumulative at $r$ |
| fewer than $r$ | $P(X\le r-1)$ | cumulative at $r-1$ |
| at least $r$, no fewer than $r$ | $P(X\ge r)$ | $1-P(X\le r-1)$ |
| more than $r$ | $P(X\ge r+1)$ | $1-P(X\le r)$ |
| between $a$ and $b$ inclusive | $P(a\le X\le b)$ | $P(X\le b)-P(X\le a-1)$ |

Write the event in terms of $X$ with an inequality first, and only then convert it. Writing the intermediate line shows the examiner your reasoning and secures the method mark.

### Mean and variance

For $X\sim B(n,p)$,
$$
E(X)=np,\qquad \mathrm{Var}(X)=np(1-p),\qquad \sigma=\sqrt{np(1-p)}.
$$
The mean is the expected number of successes and the variance is smaller when $p$ is near $0$ or $1$ and largest when $p=0.5$. These formulas can be used to find unknown parameters: given the mean and variance, divide the variance by the mean to get $1-p$.

### Unknown parameters and inequalities

A typical problem asks for the smallest number of trials so that the probability of at least one success exceeds a given value. The complement gives an inequality in $n$ that is solved with logarithms or by trying values in a table on the calculator. A second type asks for the smallest $k$ such that $P(X\le k)$ reaches a stated value. Use the calculator's table of cumulative probabilities and scan upwards until the condition is first satisfied. Always check the values on both sides of the boundary, and state the integer, not the decimal.

## Worked examples

### Example 1 (basic probabilities, 5 marks)

$X\sim B(8,0.25)$. Find $P(X=2)$, $P(X\le2)$ and $P(X\ge3)$, and state $E(X)$ and $\mathrm{Var}(X)$.

By the formula, $P(X=2)=\binom{8}{2}(0.25)^{2}(0.75)^{6}=28\times0.0625\times0.17798=0.311$ to three significant figures. The cumulative probability from the calculator is $P(X\le2)=0.679$ (more precisely $0.67854$). Then $P(X\ge3)=1-P(X\le2)=1-0.67854=0.321$. The mean is $np=8\times0.25=2$ and the variance is $np(1-p)=8\times0.25\times0.75=1.5$. Notice that the probability of the three values $0,1,2$ together is more than a half, which fits a mean of $2$.

### Example 2 (quality control, 6 marks)

A factory finds that $5\%$ of its items are defective. A sample of $20$ items is inspected. Find the probability that the sample contains (a) exactly two defective items, (b) at least one defective item, and (c) state the expected number of defective items.

Let $X$ be the number of defective items, so $X\sim B(20,0.05)$, assuming that items are independent and that the probability of a defect is constant. (a) $P(X=2)=\binom{20}{2}(0.05)^{2}(0.95)^{18}=0.189$. (b) $P(X\ge1)=1-P(X=0)=1-0.95^{20}=1-0.3585=0.642$. (c) $E(X)=20\times0.05=1$. So about two thirds of such samples would contain at least one defective item, even though the average is only one. The sentence naming the distribution and its assumptions earns a mark of its own.

### Example 3 (guessing in a test, 5 marks)

A test has $12$ multiple-choice questions, each with four options, and a student guesses every answer. Find the probability that the student gets at least $6$ correct, and the expected score.

Let $X$ be the number correct. Then $X\sim B(12,0.25)$. The event "at least $6$" is $X\ge6$, so $P(X\ge6)=1-P(X\le5)=1-0.9456=0.0544$. The expected score is $12\times0.25=3$. The probability of getting half the questions right by pure guessing is under $6\%$, which explains why random guessing is a poor strategy. The conversion $P(X\ge6)=1-P(X\le5)$, not $1-P(X\le6)$, is the step to watch.

### Example 4 (smallest $n$, 5 marks)

A fair die is rolled $n$ times. Find the least value of $n$ such that the probability of at least one six exceeds $0.9$.

Let $X\sim B\big(n,\tfrac16\big)$. We need $P(X\ge1)>0.9$, that is $1-\left(\tfrac56\right)^{n}>0.9$, so $\left(\tfrac56\right)^{n}<0.1$. Taking logarithms and dividing by $\ln\tfrac56<0$, which reverses the inequality, gives
$$
n>\frac{\ln0.1}{\ln(5/6)}=\frac{-2.3026}{-0.18232}=12.63.
$$
So $n=13$. As a check, $\left(\tfrac56\right)^{12}=0.1122>0.1$ so $12$ is not enough, while $\left(\tfrac56\right)^{13}=0.0935<0.1$. The reversal of the inequality when dividing by a negative logarithm is where marks are usually lost.

### Example 5 (finding $n$ and $p$ from mean and variance, 4 marks)

A binomial random variable has mean $6$ and variance $4.2$. Find $n$ and $p$.

We know $np=6$ and $np(1-p)=4.2$. Dividing the second by the first gives $1-p=0.7$, so $p=0.3$. Then $n=\tfrac{6}{0.3}=20$. Check: $20\times0.3\times0.7=4.2$. The variance must be smaller than the mean for any binomial distribution, because $1-p<1$, which is a quick consistency check on the data.

### Example 6 (checking the model, 3 marks)

Five cards are dealt from a standard pack without replacement, and $X$ is the number of hearts. A student models $X$ as $B(5,0.25)$. Comment.

The trials are not independent, because after a heart is removed the probability that the next card is a heart falls from $\tfrac{13}{52}$ to $\tfrac{12}{51}$. The probability of success is therefore not constant. The binomial model is only approximate here. It would be exact if each card were replaced and the pack reshuffled before the next draw, and it would be a better approximation for a much larger population.

### Example 7 (greatest or least $k$, 5 marks)

$X\sim B(30,0.2)$. Find the smallest $k$ such that $P(X\le k)\ge0.95$.

Scan the cumulative probabilities. $P(X\le9)=0.939$, which is below $0.95$. $P(X\le10)=0.974$, which is above $0.95$. So the smallest $k$ is $10$. Both boundary values should appear in your answer, since the marks are for showing that $k=9$ fails and $k=10$ works.

### Example 8 (expected frequency, 3 marks)

A fair coin is tossed five times, and this is repeated $200$ times. Estimate how many of the $200$ sets contain exactly two heads.

For $X\sim B(5,0.5)$, $P(X=2)=\binom52(0.5)^{5}=\tfrac{10}{32}=0.3125$. The expected number of sets is $200\times0.3125=62.5$, so about $62$ or $63$ sets. Quoting $62.5$ as the expected value is perfectly acceptable, and it is an average, not a prediction of one particular series.

## Using your GDC

Use the **binomial pdf** (often called binomPdf or Binomial PD) for $P(X=r)$, with inputs $n$, $p$ and $r$. Use the **binomial cdf** (binomCdf or Binomial CD) for $P(X\le r)$. On many calculators the cumulative function takes the form (number of trials, probability, upper value), and some versions ask for a lower and an upper value as well, so check what your model expects. For $P(a\le X\le b)$ you can use the lower and upper bounds directly if your model allows. When the calculator offers a table feature, enter the cumulative function as $f(x)$ and scroll to find the least $k$ for a given probability. For unknown $n$ or $p$ in an inequality, you can graph both sides, or use a table of values, and then confirm the integer by testing the values on either side of the boundary. Write down what you entered, for example "binomial cdf with $n=12$, $p=0.25$, upper value $5$ gives $0.9456$", because a correct setup with a slip in a key press can still earn marks.

## Common mistakes

- Using the cumulative function for $P(X=r)$, or the density function for $P(X\le r)$.
- Converting "at least $r$" to $1-P(X\le r)$ instead of $1-P(X\le r-1)$.
- Failing to state the distribution, $X\sim B(n,p)$, with the values of $n$ and $p$ in the line before the calculation.
- Using $p$ for the wrong outcome. If the question asks for the number of failures, success must be redefined.
- Forgetting to reverse an inequality after dividing by a negative logarithm.
- Giving a non-integer answer for $n$ or $k$.
- Claiming a binomial model is valid without checking independence and constant probability, or rejecting it without naming the condition that fails.
- Applying the formulas $np$ and $np(1-p)$ to a distribution that is not binomial.

## Exam technique and command terms

**State the distribution** means write $X\sim B(n,p)$ with numbers, and it is usually the first mark. **Find** requires the probability to three significant figures unless it is exact. **Write down** is for a direct readout from the calculator. **Calculate** needs the setup visible. **Determine** and **find the least** require the boundary check. **Comment on the suitability** requires you to refer to the conditions in the context of the question, for example: "the trials may not be independent because students sit together and may copy". When you convert wording to notation, write the inequality, for example $P(X\ge4)$, and the complement line, $1-P(X\le3)$, before using the calculator. For "expected number of successes" use $np$ and do not round. If a question asks for the probability that something happens at least once, think of $1-(1-p)^{n}$ straight away, as it removes the need for the calculator and gives an exact result.

## Connections

The binomial distribution rests on the independence and tree diagrams of SL 4.6, and it is the most important discrete random variable of SL 4.7, with the mean and variance of that chapter reduced to $np$ and $np(1-p)$. The normal distribution of SL 4.9 plays the same role for continuous measurements, and for large $n$ a binomial distribution looks very much like a normal curve, though that approximation is not examined in this course. The binomial theorem from the algebra unit proves that the probabilities sum to $1$ and explains the coefficients $\binom{n}{r}$. The least-$n$ inequalities use logarithms from the functions unit, which makes this chapter a good place to practise algebra under exam conditions.

## Check your understanding

1. $X\sim B(10,0.3)$. Find $P(X=3)$, $P(X\le3)$ and $P(X\ge4)$.
2. $X\sim B(15,0.4)$. Find $P(X=6)$, $E(X)$, $\mathrm{Var}(X)$ and $P(X>8)$.
3. A fair coin is tossed $6$ times. Find the probability of at least one head and the probability of exactly three heads.
4. $X\sim B(25,0.12)$. Find the mean, the variance and $P(X=3)$.
5. Find the least number of independent trials $n$ with success probability $0.2$ such that the probability of at least one success exceeds $0.99$.
6. $X\sim B(20,0.3)$. Find the smallest $k$ such that $P(X\le k)\ge0.9$.
7. A student says that the number of aces in a hand of five cards dealt without replacement is binomial. Comment.
8. A basketball player scores a free throw with probability $0.7$. Find the probability that she scores all four of four throws, and exactly three of four.
9. $X\sim B(40,0.1)$. Find $P(X\le2)$ and $P(X=4)$.
10. A binomial variable has mean $12$ and variance $7.2$. Find $n$ and $p$.

### Answers

1. $P(X=3)=0.267$, $P(X\le3)=0.650$, $P(X\ge4)=1-0.6496=0.350$.
2. $P(X=6)=0.207$, $E(X)=6$, $\mathrm{Var}(X)=15\times0.4\times0.6=3.6$. $P(X>8)=1-P(X\le8)=1-0.9050=0.0950$.
3. $X\sim B(6,0.5)$. $P(X\ge1)=1-0.5^{6}=\tfrac{63}{64}=0.984$ and $P(X=3)=\binom63(0.5)^{6}=\tfrac{20}{64}=0.3125$.
4. $E(X)=25\times0.12=3$, $\mathrm{Var}(X)=25\times0.12\times0.88=2.64$ and $P(X=3)=0.239$.
5. $1-0.8^{n}>0.99$ gives $0.8^{n}<0.01$, so $n>\tfrac{\ln0.01}{\ln0.8}=20.6$. Therefore $n=21$. Check $0.8^{20}=0.0115$ and $0.8^{21}=0.0092$.
6. $P(X\le8)=0.887<0.9$ and $P(X\le9)=0.952\ge0.9$, so $k=9$.
7. The trials are not independent, because removing an ace changes the probability that the next card is an ace. The probability of success is not constant, so the distribution is only approximately binomial, and it is not exactly binomial.
8. $P(X=4)=0.7^{4}=0.2401$ and $P(X=3)=4\times0.7^{3}\times0.3=0.4116$.
9. $P(X\le2)=0.223$ and $P(X=4)=0.206$.
10. $np=12$ and $np(1-p)=7.2$, so $1-p=0.6$ and $p=0.4$. Then $n=\tfrac{12}{0.4}=30$.

## Summary

- $X\sim B(n,p)$ requires a fixed number of independent trials, two outcomes and a constant probability of success.
- $P(X=r)=\binom{n}{r}p^{r}(1-p)^{n-r}$. The calculator's cdf gives $P(X\le r)$.
- Convert carefully: $P(X\ge r)=1-P(X\le r-1)$ and $P(X>r)=1-P(X\le r)$.
- $E(X)=np$, $\mathrm{Var}(X)=np(1-p)$. The variance divided by the mean gives $1-p$.
- For "at least one", $P=1-(1-p)^{n}$. To find the least $n$, use logarithms and reverse the inequality when dividing by a negative number.
- Always state the distribution with its parameters, and comment on the model by naming the condition that may fail.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists binomial model, mean and variance under SL 4.8. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
