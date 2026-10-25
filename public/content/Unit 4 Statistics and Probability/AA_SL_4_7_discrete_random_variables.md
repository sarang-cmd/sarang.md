# Discrete random variables

> **SL 4.7 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define a discrete random variable and write its probability distribution as a table, a formula or a graph;
- use the conditions $0\le P(X=x)\le1$ and $\sum P(X=x)=1$ to find unknown probabilities and parameters;
- calculate the expected value $E(X)=\sum xP(X=x)$ and interpret it as a long-run average;
- calculate $E(X^{2})$, the variance $\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2}$ and the standard deviation;
- model a game of chance, find the expected gain, and decide whether the game is fair;
- find an expected frequency from a probability distribution;
- distinguish between the mean of a data set, which describes data we have, and the expected value of a random variable, which describes a model.

## Why this topic matters

A **random variable** turns the outcomes of a chance experiment into numbers: the number of heads in three tosses, the score on a die, the profit from a bet, the number of customers who arrive in an hour. Once outcomes are numbers, we can describe the experiment with a distribution, summarise it with an average and a spread, and compare different situations. This is the step from probability as counting to probability as a modelling tool. Insurance companies price policies from the expected payout. Casinos set odds so that the expected gain for the house is positive. Doctors compare the expected outcomes of treatments. In each case a single number, the expected value, summarises many possible futures.

For the examination, discrete random variables supply a dependable block of marks. A standard question gives a table with an unknown probability or an unknown parameter, asks you to find it using $\sum p=1$, calculates $E(X)$, sometimes asks for the variance, and then applies the expected value to a game or a cost problem. The marks are for a short sequence of routine steps, and nearly all lost marks come from skipping a check: probabilities that do not sum to $1$, or an expected value that cannot be right because it lies outside the range of the values of $X$. The chapter also prepares the binomial distribution in SL 4.8, which is simply a particular, very important discrete random variable.

## Core ideas

### Discrete random variables and probability distributions

A **random variable** $X$ is a variable whose value is determined by the outcome of a random experiment. It is **discrete** if it takes separate values, normally whole numbers from counting. We use a capital letter for the variable and a small letter for a particular value, so $P(X=3)$ means "the probability that $X$ takes the value $3$". The **probability distribution** lists every possible value with its probability, as a table, a formula such as $P(X=x)=\tfrac{x}{10}$ for $x=1,2,3,4$, or a bar chart. Every distribution must satisfy two conditions:
$$
0\le P(X=x)\le1\quad\text{for every }x,\qquad \sum_{\text{all }x}P(X=x)=1.
$$
The second condition is the key tool for finding an unknown. If a table contains an unknown $a$, write the sum of all probabilities equal to $1$ and solve. Afterwards check that every probability is between $0$ and $1$, since an unknown that gives a negative probability signals an error.

### Probabilities of events

To find the probability of an event described by $X$, add the probabilities of the values that satisfy it. For example, $P(X\ge3)$ adds all values of $X$ that are at least $3$. Because the possible values are separate, $P(X>2)$ and $P(X\ge3)$ are the same when $X$ takes whole values. For "at least" or "at most" questions it can be quicker to use the complement, such as $P(X\ge1)=1-P(X=0)$.

### Expected value

The **expected value** or **mean** of $X$ is
$$
E(X)=\mu=\sum x\,P(X=x).
$$
Each value is weighted by its probability. It is the long-run average: if the experiment is repeated many times, the average of the observed values approaches $E(X)$. The expected value need not be a possible value of $X$. For a fair die, $E(X)=\tfrac{1+2+3+4+5+6}{6}=3.5$, which can never be rolled, and that is no contradiction, because it is an average. It must lie between the smallest and largest values of $X$, which provides a useful check.

If the experiment is repeated $n$ times, the **expected frequency** of the value $x$ is $n\times P(X=x)$, the same idea as in SL 4.5.

### Variance and standard deviation

The **variance** measures the spread of the distribution about the mean:
$$
\mathrm{Var}(X)=E\big[(X-\mu)^{2}\big]=E(X^{2})-\mu^{2},\qquad E(X^{2})=\sum x^{2}P(X=x).
$$
The standard deviation is $\sigma=\sqrt{\mathrm{Var}(X)}$. The right-hand form is usually quicker: find $E(X)$, find $E(X^{2})$ and subtract the square of the first. Since a variance is never negative, a negative result means an arithmetic slip. This formula is the same as the one for grouped data in SL 4.3, with relative frequencies replaced by probabilities.

### Games of chance and fair games

Suppose a player pays a stake to play, and the amount won depends on a random outcome. The **gain** is the winnings minus the stake. Let $G$ be the gain. If $E(G)>0$ the game favours the player, if $E(G)<0$ it favours the organiser, and if $E(G)=0$ the game is **fair**. The expected gain can be interpreted as the average gain per game over a long series. A game with a negative expected gain can still produce a win on a single occasion, but over many plays the player is expected to lose money.

## Worked examples

### Example 1 (finding a constant, mean and variance, 7 marks)

A discrete random variable has $P(X=x)=kx$ for $x=1,2,3,4$. Find $k$, $E(X)$ and $\mathrm{Var}(X)$.

The probabilities are $k,2k,3k,4k$, which sum to $10k$. Setting $10k=1$ gives $k=0.1$, and the probabilities $0.1,0.2,0.3,0.4$ all lie between $0$ and $1$. The mean is
$$
E(X)=1(0.1)+2(0.2)+3(0.3)+4(0.4)=0.1+0.4+0.9+1.6=3.
$$
For the variance, $E(X^{2})=1(0.1)+4(0.2)+9(0.3)+16(0.4)=0.1+0.8+2.7+6.4=10$, so $\mathrm{Var}(X)=10-3^{2}=1$, and the standard deviation is $1$. The mean $3$ lies between $1$ and $4$, as it must, and it lies nearer to $4$ because the larger values are more likely.

### Example 2 (a table with an unknown, 6 marks)

The distribution of $X$ is given by the table below. Find $a$, $E(X)$ and the standard deviation.

| $x$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $P(X=x)$ | 0.1 | 0.3 | $a$ | 0.2 |

The probabilities sum to $1$, so $0.1+0.3+a+0.2=1$ and $a=0.4$. Then $E(X)=0(0.1)+1(0.3)+2(0.4)+3(0.2)=0.3+0.8+0.6=1.7$. Next $E(X^{2})=0+1(0.3)+4(0.4)+9(0.2)=0.3+1.6+1.8=3.7$, so $\mathrm{Var}(X)=3.7-1.7^{2}=3.7-2.89=0.81$ and the standard deviation is $\sqrt{0.81}=0.9$. The marks are for the equation for $a$, the mean, the second moment and the final standard deviation.

### Example 3 (a fair game, 6 marks)

A player pays a fee to roll a fair die. If the die shows $6$ the player wins €10, if it shows $4$ or $5$ the player wins €2, and otherwise the player wins nothing. Find the fee that makes the game fair.

Let $W$ be the winnings. Then $P(W=10)=\tfrac16$, $P(W=2)=\tfrac26$ and $P(W=0)=\tfrac36$. The expected winnings are
$$
E(W)=10\times\tfrac16+2\times\tfrac26+0=\tfrac{10}{6}+\tfrac{4}{6}=\tfrac{14}{6}=\tfrac73\approx2.33.
$$
A game is fair when the expected *gain* is zero, so the fee equals the expected winnings: $\tfrac73$ euros, about €2.33. If the fee is €2 the expected gain per game is $\tfrac73-2=\tfrac13$ euro in the player's favour. If the fee is €3 the expected gain is $\tfrac73-3=-\tfrac23$, which favours the organiser.

### Example 4 (a different formula, 6 marks)

A discrete random variable has $P(X=x)=k(5-x)$ for $x=1,2,3,4$. Find $k$, $P(X\ge3)$ and $E(X)$.

The probabilities are $4k,3k,2k,k$ with total $10k=1$, so $k=0.1$ and the distribution is $0.4,0.3,0.2,0.1$. Then $P(X\ge3)=P(X=3)+P(X=4)=0.2+0.1=0.3$. The mean is $E(X)=1(0.4)+2(0.3)+3(0.2)+4(0.1)=0.4+0.6+0.6+0.4=2$. Here the smaller values are more likely, so the mean $2$ is closer to $1$ than to $4$.

### Example 5 (a distribution from a sample space, 7 marks)

Two fair dice are rolled and $X$ is the larger of the two scores. Show that $P(X=x)=\tfrac{2x-1}{36}$ and find $E(X)$.

The larger score equals $x$ when at least one die shows $x$ and neither shows more. The number of ordered pairs with maximum $x$ is the number of pairs with both scores at most $x$, which is $x^{2}$, minus the number with both at most $x-1$, which is $(x-1)^{2}$. So the count is $x^{2}-(x-1)^{2}=2x-1$, and $P(X=x)=\tfrac{2x-1}{36}$. The values are $\tfrac{1}{36},\tfrac{3}{36},\tfrac{5}{36},\tfrac{7}{36},\tfrac{9}{36},\tfrac{11}{36}$, which sum to $\tfrac{36}{36}=1$. Then
$$
E(X)=\frac{1(1)+2(3)+3(5)+4(7)+5(9)+6(11)}{36}=\frac{161}{36}=4.47.
$$
The mean is well above $3.5$, which is sensible since the larger of two dice tends to be high.

### Example 6 (expected frequency, 3 marks)

Three fair coins are tossed and $X$ is the number of heads. The experiment is repeated $80$ times. Find the expected number of times that exactly two heads occur.

The outcomes are equally likely, so $P(X=0)=\tfrac18$, $P(X=1)=\tfrac38$, $P(X=2)=\tfrac38$ and $P(X=3)=\tfrac18$. The expected number of times that $X=2$ is $80\times\tfrac38=30$. The mean number of heads is $E(X)=0\times\tfrac18+1\times\tfrac38+2\times\tfrac38+3\times\tfrac18=\tfrac{12}{8}=1.5$, which is also what symmetry suggests.

### Example 7 (finding two unknowns from the mean, 6 marks)

$X$ takes the values $1,2,3$ with probabilities $0.3,p,q$ and $E(X)=2.1$. Find $p$ and $q$.

The probabilities sum to $1$, so $p+q=0.7$. The mean gives $0.3+2p+3q=2.1$, so $2p+3q=1.8$. Substituting $p=0.7-q$ gives $1.4-2q+3q=1.8$, so $q=0.4$ and then $p=0.3$. Check: $0.3+0.3+0.4=1$ and $0.3+0.6+1.2=2.1$. Two unknowns need two equations, and the two usual sources are the sum of probabilities and the given mean.

## Using your GDC

For a small table, enter the values of $X$ in one list and the probabilities in another, and use one-variable statistics with the probabilities as frequencies. The calculator then returns $\mu$ as $\bar x$ and the standard deviation as $\sigma_x$, so $E(X)$ and $\sqrt{\mathrm{Var}(X)}$ come directly. This works because a probability is just a relative frequency. Check that $\sum$ of the probability list is $1$, because the calculator will not warn you if it is not. For $E(X^{2})$, either use the statistic $\sum x^{2}$ divided appropriately, or add a list of $x^{2}$ values. To solve two linear equations for unknown probabilities, the calculator's simultaneous equation solver is faster than elimination by hand, but write down the two equations first, since the marks are for them. For a formula distribution, the sequence function or table of values lets you generate all probabilities at once.

## Common mistakes

- Forgetting to check that the probabilities add to $1$ after finding an unknown, or accepting a negative or greater-than-$1$ probability.
- Computing $E(X)$ by averaging the values of $X$ without weighting by probabilities.
- Computing the variance as $\sum x^{2}P-\sum xP$ and forgetting to square the mean.
- Reporting a negative variance. It signals an arithmetic error, usually a missing square.
- Confusing the gain with the winnings. For a fair game, the expected *gain* is zero, so the stake equals the expected winnings.
- Writing that a game is "fair" because a player sometimes wins. Fairness is about the expected value over many plays.
- Rounding the expected value to a whole number because "it must be a possible score".
- Treating $P(X>2)$ as $P(X\ge2)$.

## Exam technique and command terms

**Find** requires working, and for a distribution problem the first line is nearly always $\sum P(X=x)=1$. **Show that** requires every step. For the expected value write the sum in full, so that a slip in one term leaves the method mark intact. **Determine whether the game is fair** requires you to calculate the expected gain and conclude with a sentence that links to zero. **Interpret** asks what $E(X)$ means in context, for example "the average winnings per game over a large number of games". When a question gives you $E(X)$ or $\mathrm{Var}(X)$ and unknowns, set up equations from each condition. For **expected frequency** multiply the probability by the number of trials, and do not round unless asked. Keep exact fractions, such as $\tfrac{7}{3}$, until the last line. Use the calculator to check your arithmetic, but still show the substitution into the formula.

## Connections

Random variables are the link between the probability of SL 4.5 and 4.6 and the distributions of the rest of the unit. In SL 4.8 the binomial distribution is a discrete random variable with a formula for $P(X=x)$, a mean $np$ and a variance $np(1-p)$, all of which are special cases of this chapter's definitions. In SL 4.9, the normal distribution is a *continuous* random variable, where sums become integrals, and in AHL 4.14 you will generalise $E(X)$ and $\mathrm{Var}(X)$ to continuous variables and to linear combinations such as $E(aX+b)=aE(X)+b$. The variance shortcut in this chapter is the same algebra as the standard deviation of a frequency table in SL 4.3. The optimisation of expected profit also reappears in the calculus unit.

## Check your understanding

1. $X$ has probabilities $0.1,0.2,p,0.4$ at $x=1,2,3,4$. Find $p$ and $E(X)$.
2. For the distribution in question 1, find $E(X^{2})$ and $\mathrm{Var}(X)$.
3. $P(X=x)=kx^{2}$ for $x=1,2,3$. Find $k$ and $E(X)$.
4. A game costs €3 to play. A fair die is rolled and the player wins €12 for a six and nothing otherwise. Find the expected gain and decide whether the game is fair.
5. $X$ takes the values $1,2,5$ with probabilities $0.5,0.3,0.2$. Find $E(X)$ and $\mathrm{Var}(X)$.
6. $X$ takes the values $1,2,3$ with probabilities $0.2,p,q$ and $E(X)=2.3$. Find $p$ and $q$.
7. A player pays a stake to roll a fair die and receives the score in euros. Find the stake for a fair game.
8. A fair die is rolled twice and $X$ is the number of sixes. Find $E(X)$.
9. Three fair coins are tossed $160$ times. Find the expected number of times that all three show heads.
10. Explain why $E(X)=3.5$ for a fair die is not contradictory, even though the die cannot show $3.5$.

### Answers

1. $0.1+0.2+p+0.4=1$ gives $p=0.3$. $E(X)=0.1+0.4+0.9+1.6=3$.
2. $E(X^{2})=0.1+0.8+2.7+6.4=10$. $\mathrm{Var}(X)=10-9=1$.
3. $k(1+4+9)=1$ gives $k=\tfrac1{14}$. $E(X)=\tfrac{1+8+27}{14}=\tfrac{36}{14}=\tfrac{18}{7}=2.57$.
4. $E(\text{winnings})=12\times\tfrac16=2$, so the expected gain is $2-3=-1$ euro. It is not fair: it favours the organiser, and the player expects to lose €1 per game.
5. $E(X)=0.5+0.6+1.0=2.1$. $E(X^{2})=0.5+1.2+5=6.7$, so $\mathrm{Var}(X)=6.7-4.41=2.29$.
6. $p+q=0.8$ and $0.2+2p+3q=2.3$, so $2p+3q=2.1$. Then $1.6+q=2.1$ gives $q=0.5$ and $p=0.3$.
7. $E(\text{winnings})=\tfrac{1+2+3+4+5+6}{6}=3.5$, so the stake is €3.50.
8. $P(X=0)=\tfrac{25}{36}$, $P(X=1)=\tfrac{10}{36}$ and $P(X=2)=\tfrac1{36}$. $E(X)=\tfrac{10}{36}+\tfrac{2}{36}=\tfrac{12}{36}=\tfrac13$.
9. $P(\text{three heads})=\tfrac18$, so the expected number is $160\times\tfrac18=20$.
10. The expected value is a long-run average, not a result of a single roll. Over many rolls the mean score gets close to $3.5$ even though each individual roll is a whole number.

## Summary

- A discrete random variable has a distribution with $0\le P(X=x)\le1$ and $\sum P(X=x)=1$. Use the sum to find unknowns.
- $E(X)=\sum xP(X=x)$ is the long-run average. It lies between the smallest and largest values and need not be a possible value.
- $\mathrm{Var}(X)=E(X^{2})-[E(X)]^{2}$ with $E(X^{2})=\sum x^{2}P(X=x)$. The standard deviation is the square root, and the variance is never negative.
- The expected frequency of a value in $n$ trials is $nP(X=x)$.
- A game is fair when the expected gain is zero, so the fee equals the expected winnings.
- Two unknown probabilities need two equations, from the sum and from a given mean.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists expected value of a discrete variable under SL 4.7. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
