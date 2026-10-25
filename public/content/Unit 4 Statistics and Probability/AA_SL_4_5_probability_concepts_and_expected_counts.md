# Probability concepts and expected counts

> **SL 4.5 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- use the language of probability: trial, outcome, sample space, event, equally likely outcomes and complement;
- calculate the probability of an event as $P(A)=\dfrac{n(A)}{n(U)}$ when outcomes are equally likely;
- list outcomes systematically and use a sample space diagram for two experiments;
- use the complement rule $P(A')=1-P(A)$, especially for "at least one" questions;
- estimate probability from relative frequency, and explain the effect of the number of trials;
- find the expected number of occurrences of an event in $n$ trials, $n\times P(A)$, and interpret it correctly;
- recognise when the assumption of equally likely outcomes is not reasonable.

## Why this topic matters

Probability measures uncertainty with a number between $0$ and $1$. It lies behind weather forecasts, insurance premiums, medical screening, quality control and every game of chance. It is also the foundation of statistics: when we say that a result from a sample is likely to be close to the truth, that statement is a probability. The ideas in this chapter are deliberately basic, but the habits matter. Writing down the sample space carefully, checking whether outcomes really are equally likely, and using the complement when "at least one" appears will save marks in every later probability topic.

In the examination, probability questions often start with a context such as a spinner, a bag of counters, a survey table or a school timetable, and they are worded in plain language. The first task is translation: what exactly is the event? "At least two" means two or more, "at most two" means two or fewer, and "exactly one" means just that. Most lost marks in probability come from misreading the event and not from arithmetic. This chapter also introduces *expected number*, which is a prediction of how often something will happen over many trials and is an idea that returns in the study of random variables in SL 4.7.

## Core ideas

### Trials, outcomes, sample spaces and events

A **trial** is one performance of a random experiment, such as rolling a die once. An **outcome** is one possible result of a trial. The set of all possible outcomes is the **sample space**, written $U$. An **event** is a collection of outcomes, such as "the die shows an even number", which is the set $\{2,4,6\}$. The number of outcomes in $A$ is written $n(A)$. A single outcome is a **simple event**.

### Equally likely outcomes

When all outcomes in the sample space are **equally likely**, the probability of an event $A$ is
$$
P(A)=\frac{n(A)}{n(U)}.
$$
For a fair die, $P(\text{even})=\tfrac{3}{6}=\tfrac12$. The assumption "fair" or "unbiased" or "chosen at random" is what justifies the formula. If a question gives a biased die with stated probabilities, you must use those probabilities instead. Probabilities satisfy
$$
0\le P(A)\le1,\qquad P(U)=1,\qquad P(\varnothing)=0.
$$
$P(A)=0$ means that the event is impossible, and $P(A)=1$ means that it is certain. A probability can be given as a fraction, a decimal or a percentage, and unless told otherwise an exact fraction or a decimal to three significant figures is fine.

### Sample space diagrams

For two experiments, such as rolling two dice, list the outcomes in a table. A pair of fair dice has $6\times6=36$ equally likely outcomes, and the table of sums is the standard tool. To count carefully, fix the first die and list the second, or draw the grid. A sample space diagram is useful because it lets you count outcomes for several events from one picture. Make sure the outcomes are **ordered pairs**: $(2,5)$ and $(5,2)$ are different outcomes, which is why there are two ways to get a $2$ and a $5$ but only one way to get a double.

### The complement

The **complement** of $A$, written $A'$, is the event that $A$ does not happen. Since $A$ and $A'$ together cover the sample space without overlap,
$$
P(A')=1-P(A).
$$
This is most useful for phrases such as "at least one", because the opposite of "at least one" is "none", which is usually a single simple case. For example, the probability of at least one head in four tosses is $1-P(\text{no heads})$.

### Relative frequency

Often we cannot list equally likely outcomes. We then estimate a probability by experiment or from data:
$$
\text{relative frequency}=\frac{\text{number of times the event occurred}}{\text{number of trials}}.
$$
The relative frequency is an *estimate* of the probability, and it varies from one set of trials to another. As the number of trials grows it tends to settle near the true probability. This is the **law of large numbers**. A result based on ten trials is much less reliable than one based on ten thousand. Relative frequencies from surveys and historical records are used in practice, for instance by insurers estimating the chance that a driver makes a claim.

### Expected number of occurrences

If an event has probability $p$ in each trial, then over $n$ trials the **expected number** of occurrences is
$$
n\times p.
$$
The expected number is a long-run average. It need not be a whole number and need not be the number that actually occurs. If you toss a fair coin $25$ times, the expected number of heads is $12.5$, which is impossible as an actual result, but over many sets of $25$ tosses the average number of heads would be close to $12.5$. Do not round an expected value to a whole number unless the question asks, and if it does, say that you have rounded.

## Worked examples

### Example 1 (equally likely outcomes, 3 marks)

A fair twelve-sided die is numbered $1$ to $12$. Find the probability of rolling (a) a prime number, (b) a number that is not prime.

(a) The primes between $1$ and $12$ are $2,3,5,7,11$, so $n(A)=5$ and $n(U)=12$, giving $P(\text{prime})=\tfrac{5}{12}$. The number $1$ is not prime, which is a classic slip. (b) By the complement, $P(\text{not prime})=1-\tfrac{5}{12}=\tfrac{7}{12}$. Counting directly gives the non-primes $1,4,6,8,9,10,12$, which are seven numbers, and so $\tfrac{7}{12}$ agrees.

### Example 2 (two dice, 5 marks)

Two fair dice are rolled and the scores are added. Find the probability that (a) the sum is $7$, (b) the sum is at least $9$, (c) both dice show the same number.

The sample space has $36$ equally likely ordered pairs. (a) The pairs with sum $7$ are $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, which is $6$, so the probability is $\tfrac{6}{36}=\tfrac16$. (b) The sums of at least $9$ come from $(3,6),(4,5),(4,6),(5,4),(5,5),(5,6),(6,3),(6,4),(6,5),(6,6)$, which is $10$ pairs, so $\tfrac{10}{36}=\tfrac{5}{18}$. (c) The doubles are $(1,1),\dots,(6,6)$, which is $6$ pairs, so $\tfrac{6}{36}=\tfrac16$. The easiest check for (b) is by symmetry: the sums $9,10,11,12$ occur $4,3,2,1$ times, which makes $10$.

### Example 3 (at least one, 3 marks)

A fair coin is tossed three times. Find the probability of at least one head.

List the sample space: $HHH,HHT,HTH,HTT,THH,THT,TTH,TTT$. There are $8$ equally likely outcomes. The only outcome with no heads is $TTT$, so $P(\text{no heads})=\tfrac18$. Using the complement, $P(\text{at least one head})=1-\tfrac18=\tfrac78$. Counting the favourable outcomes directly would need seven cases, so the complement is quicker, and for more tosses the saving grows.

### Example 4 (relative frequency and expected number, 4 marks)

A spinner is spun $200$ times and lands on red $62$ times. (a) Estimate the probability that it lands on red. (b) Estimate how many reds there will be in $500$ spins.

(a) The relative frequency is $\tfrac{62}{200}=0.31$, which is the estimate of $P(\text{red})$. (b) The expected number in $500$ spins is $500\times0.31=155$. This is a prediction, and the actual count would probably be somewhat different, say between about $140$ and $170$. The estimate is better the more spins were used to find $0.31$, which is why $200$ is more convincing than $20$.

### Example 5 (expected number from a known probability, 3 marks)

A factory knows that $3\%$ of its items are defective. In a batch of $1{,}200$ items, find the expected number of defective items.

The probability of a defect is $0.03$, so the expected number is $1200\times0.03=36$. If the factory also wanted the expected number of items that pass, it could use $1200-36=1164$, or $1200\times0.97$, which is the same.

### Example 6 (cards, 4 marks)

A card is drawn at random from a standard $52$-card pack. Find the probability that it is (a) a heart, (b) a court card (jack, queen or king), (c) the king of a red suit. (d) The card is replaced and the experiment is repeated $80$ times. Find the expected number of hearts.

(a) There are $13$ hearts, so $\tfrac{13}{52}=\tfrac14$. (b) There are $3$ court cards in each of $4$ suits, which is $12$, so $\tfrac{12}{52}=\tfrac{3}{13}$. (c) There are two red kings, so $\tfrac{2}{52}=\tfrac{1}{26}$. (d) The expected number of hearts is $80\times\tfrac14=20$. Because each card is replaced, the probability stays $\tfrac14$ on every draw. Without replacement the question would be different and is dealt with in SL 4.6.

### Example 7 (missing probability, 3 marks)

A biased die has $P(1)=0.1$, $P(2)=0.15$, $P(3)=0.2$, $P(4)=0.25$ and $P(5)=0.18$. Find $P(6)$ and the probability of rolling an even number.

All probabilities must add to $1$. The five given values sum to $0.88$, so $P(6)=1-0.88=0.12$. The even outcomes are $2,4,6$, so $P(\text{even})=0.15+0.25+0.12=0.52$. Here the equally likely formula cannot be used, because the die is biased; the probabilities must be added.

### Example 8 (reading a table, 3 marks)

A survey of $250$ students records their favourite sport: football $95$, basketball $60$, tennis $45$, other $50$. Estimate the probability that a student chosen at random prefers basketball or tennis, and the expected number among $1{,}500$ students who prefer football.

Basketball and tennis together account for $60+45=105$ students, so the estimate is $\tfrac{105}{250}=0.42$. The relative frequency of football is $\tfrac{95}{250}=0.38$, so among $1500$ students we expect $1500\times0.38=570$. These are estimates from a sample, so their reliability depends on how representative the survey was, which links back to SL 4.1.

## Using your GDC

A calculator can generate random integers to simulate experiments such as many rolls of a die, and you can count outcomes with a list and a counter to find relative frequencies. For small sample spaces, entering an expression such as the number of favourable outcomes divided by the total is quicker by hand. When a question involves "at least one" with several trials, the calculator is useful for computing powers such as $\left(\tfrac56\right)^{4}$. Keep probabilities as exact fractions during the working and convert to decimals at the end, to three significant figures. Many marks are lost by rounding intermediate probabilities to two decimal places. In this chapter the GDC does little heavy lifting, which means the marks are for correct setup: the sample space, the event and the arithmetic.

## Common mistakes

- Treating outcomes as equally likely when they are not. The probability of "two heads" is not $\tfrac13$ for the three results "zero, one, two heads", because these are not equally likely; the four ordered outcomes $HH,HT,TH,TT$ are.
- Counting $(2,5)$ and $(5,2)$ as one outcome when rolling two dice.
- Misreading "at least", "at most", "more than" and "fewer than". Write the event as a list of values before counting.
- Not using the complement for "at least one" and then missing cases.
- Giving a probability greater than $1$ or a negative value. Always check that the answer lies between $0$ and $1$.
- Forgetting that $1$ is not a prime number.
- Rounding an expected value to a whole number without being asked, or confusing it with the most likely value.
- Reading relative frequency as the exact probability, rather than as an estimate that depends on the number of trials.

## Exam technique and command terms

**Find** and **calculate** require the working, ideally a fraction before any decimal. **Write down** allows a direct answer. **Estimate** tells you to use relative frequency or an approximate method. **Expected number** always means probability times the number of trials, and the answer need not be an integer. **Show that** gives you the result, so you must show every step to reach it exactly, and a final line stating the given value. Begin a probability question by naming the sample space or the total, and write the numerator and denominator separately where possible, because the method mark often goes to $\tfrac{\text{favourable}}{\text{total}}$ even if the count is wrong. If a question states that an item is replaced, the probabilities do not change, and if not, the total decreases. Finally, check that the probabilities for a full set of outcomes add up to $1$.

## Connections

This chapter is the base for all of the later probability work. In SL 4.6, you will combine events using the addition rule, conditional probability and independence, with Venn and tree diagrams. In SL 4.7 the expected number becomes the expected value $E(X)$ of a discrete random variable, and in SL 4.8 and SL 4.9 you will use the binomial and normal models, whose probabilities are calculated rather than counted. The idea of relative frequency as an estimate links to SL 4.1, because the quality of an estimate depends on how the sample was chosen and on its size. The complement rule returns constantly in the binomial distribution when you need "at least" probabilities, so practise it now.

## Check your understanding

1. A fair 12-sided die is rolled. Find the probability of a multiple of $3$.
2. Two fair dice are rolled. Find the probability that the sum is $10$.
3. Two fair dice are rolled. Find the probability that the product of the scores is $12$.
4. In $120$ trials, an event occurs $48$ times. Estimate its probability, and the expected number of occurrences in $300$ trials.
5. The probability of rain on a given day in a city is $0.35$. Find the expected number of rainy days in $60$ days.
6. A fair coin is tossed four times. Find the probability of at least one tail.
7. $P(A)=0.73$. Find $P(A')$ and explain what it represents.
8. A biased die has $P(1)=0.1$, $P(2)=0.15$, $P(3)=0.2$, $P(4)=0.25$, $P(5)=0.18$. Find $P(6)$.
9. A student tosses a coin ten times, gets seven heads and concludes that the coin is biased. Comment.
10. Two fair dice are rolled $108$ times. Find the expected number of times a double six occurs.

### Answers

1. The multiples of $3$ are $3,6,9,12$, so the probability is $\tfrac{4}{12}=\tfrac13$.
2. The pairs are $(4,6),(5,5),(6,4)$, so $\tfrac{3}{36}=\tfrac{1}{12}$.
3. The pairs are $(2,6),(3,4),(4,3),(6,2)$, so $\tfrac{4}{36}=\tfrac19$.
4. The estimate is $\tfrac{48}{120}=0.4$. The expected number in $300$ trials is $300\times0.4=120$.
5. $60\times0.35=21$ days.
6. $P(\text{no tails})=\left(\tfrac12\right)^{4}=\tfrac{1}{16}$, so $P(\text{at least one tail})=1-\tfrac{1}{16}=\tfrac{15}{16}$.
7. $P(A')=1-0.73=0.27$, the probability that $A$ does not occur.
8. $0.1+0.15+0.2+0.25+0.18=0.88$, so $P(6)=0.12$.
9. Seven heads in ten tosses is a relative frequency of $0.7$, but ten trials is a very small number. Even a fair coin produces results this far from $0.5$ quite often, so there is not enough evidence to claim bias. More trials are needed.
10. $P(\text{double six})=\tfrac{1}{36}$, so the expected number is $108\times\tfrac{1}{36}=3$.

## Summary

- A sample space $U$ lists all outcomes. An event is a set of outcomes. For equally likely outcomes, $P(A)=\tfrac{n(A)}{n(U)}$.
- Probabilities lie between $0$ and $1$ inclusive, and the probabilities of all outcomes sum to $1$.
- For two dice, use the table of $36$ ordered pairs. Ordered pairs such as $(2,5)$ and $(5,2)$ are different outcomes.
- The complement rule $P(A')=1-P(A)$ is the quickest route for "at least one".
- Relative frequency estimates probability, and it is more reliable with more trials.
- The expected number of occurrences in $n$ trials is $np$. It is a long-run average and need not be an integer.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists equally likely outcomes and complement under SL 4.5. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
