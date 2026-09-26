# Binomial distribution

> **SL 4.8 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A binomial random variable counts successes across a fixed number of independent trials, each with the same success probability. Check these assumptions before using the formula. A changing probability or dependent draws without replacement may call for another model.

## Formula, meaning and conditions

For $X\sim B(n,p)$, $P(X=k)=\binom nk p^k(1-p)^{n-k}$ for integers $0\leq k\leq n$. Its mean is $np$ and variance $np(1-p)$. State what “success” means in context.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists binomial model, mean and variance under SL 4.8. Derive and justify all other steps and conditions.

## Worked example

Four independent attempts succeed with probability $1/4$ each. For exactly two successes, $P(X=2)=\binom42(1/4)^2(3/4)^2=6(1/16)(9/16)=27/128\approx0.21094$. The binomial coefficient counts the six possible positions of the two successes. The expected count is $4(1/4)=1$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Verify fixed trials, independent outcomes and constant success probability.
2. Use binomial coefficients to calculate exact event probabilities.
3. Find a cumulative or complementary probability and mean or variance.

## Why the method works

The binomial model counts successes, not their particular order. For exactly $k$ successes in $n$ trials, $\binom nk$ counts positions, $p^k$ gives successful branches and $(1-p)^{n-k}$ gives failures. If trials share a changing chance or are sampled without replacement from a small group, the independence assumption may fail.

## A contrasting worked route

For four independent trials with $p=1/2$, exactly two successes have probability $\binom42(1/2)^4=6/16=3/8$. At least one success has probability $1-(1/2)^4=15/16$. The mean count is $np=2$ and variance $np(1-p)=1$; neither says exactly two successes occur every time.

## Transfer and validation

For a cumulative event, write the included integer values before pressing a calculator distribution key. Some software returns $P(X\leq k)$, not $P(X<k)$, and that one-step difference changes an answer. State the distribution parameters and units of the count.

## Exam lens

Paper 2 style: identify $n$, $p$ and $k$; use the GDC for a cumulative probability when many values are summed. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

For “at least two,” $P(X=2)$ alone is insufficient. Add $P(X=2),P(X=3)$ and $P(X=4)$ or use a complement.

## Try it yourself

For $X\sim B(3,1/2)$, find $P(X=3)$.

## Checked answer

$\binom33(1/2)^3=1/8$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
