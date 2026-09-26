# Discrete random variables

> **SL 4.7 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A discrete random variable assigns numbers to outcomes and has a probability for each attainable value. Expected value is the long-run weighted average. Variance measures squared deviation from that average and can be computed from a second moment.

## Formula, meaning and conditions

For a discrete $X$, $\sum_xP(X=x)=1$, $E(X)=\sum_x xP(X=x)$ and $\operatorname{Var}(X)=E(X^2)-[E(X)]^2$. Probabilities must be nonnegative; standard deviation is the square root of variance.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists expected value of a discrete variable under SL 4.7. Derive and justify all other steps and conditions.

## Worked example

Let $P(X=0)=1/4$, $P(X=1)=1/2$, $P(X=2)=1/4$. The probabilities sum to one. $E(X)=0+1/2+2/4=1$. Also $E(X^2)=0+1/2+4/4=3/2$, so $\operatorname{Var}(X)=3/2-1=1/2$ and $\sigma=\sqrt{1/2}$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Check that a probability mass function is valid.
2. Compute $E(X)$ and interpret the mean of a distribution.
3. Calculate variance from $E(X^2)-E(X)^2$ when appropriate.

## Why the method works

A discrete random variable maps possible outcomes to numerical values with nonnegative probabilities summing to one. Its expected value is a probability-weighted mean and need not be a value the variable can actually take. Variance averages squared deviations and cannot be negative, even if rounding intermediate steps momentarily produces a tiny negative approximation.

## A contrasting worked route

If $P(X=0)=1/4$, $P(X=1)=1/2$ and $P(X=2)=1/4$, then $E(X)=1$ and $E(X^2)=0+1/2+1=3/2$. Therefore $\operatorname{Var}(X)=3/2-1=1/2$. The probabilities sum to one and the variance is positive, giving two separate plausibility checks.

## Transfer and validation

In a game, expected monetary profit is a long-run average, not a guaranteed outcome on one play. If probabilities depend on an unknown constant, normalize first before computing moments. Show the table of values and probabilities so that a missing outcome is visible to a reader.

## Exam lens

Paper 1 style: verify the distribution before calculating its expectation and variance. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Variance is not $E(X^2)-E(X)$. Subtract the *square* of the mean.

## Try it yourself

If $X$ is $0$ or $2$ with probability $1/2$ each, find $E(X)$.

## Checked answer

$0(1/2)+2(1/2)=1$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
