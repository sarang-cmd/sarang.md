# Z-scores and inverse normal calculations

> **SL 4.12 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A z-score reports how many standard deviations a measurement lies above or below the mean. Inverse normal calculations work in reverse: a specified cumulative area determines a cutoff. With two independent percentile conditions, one may solve for an unknown mean and spread.

## Formula, meaning and conditions

$z=(x-\mu)/\sigma$ and $x=\mu+z\sigma$ with $\sigma>0$. For a lower-tail probability $p$, use the standard-normal quantile $z_p=\Phi^{-1}(p)$. Check whether the question instead specifies an upper tail.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists normal standardization with a z-score under SL 4.12. Derive and justify all other steps and conditions.

## Worked example

For a normal model with $\mu=50$ and $\sigma=10$, find its 90th percentile. Technology gives $z_{0.90}\approx1.28155$. Therefore $x=50+10(1.28155)\approx62.82$. Check that the result is above the mean, since 90% of modeled values lie below it.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compute a z-score from a raw observation.
2. Find an observation corresponding to a given normal percentile.
3. Solve for an unknown mean or standard deviation from percentile conditions.

## Why the method works

A z-score is a signed standardized distance; it is not itself a probability. To move back to raw units, use $x=\mu+z\sigma$ with $\sigma>0$. An inverse-normal tool returns a boundary associated with a specified lower-tail area by convention; if a question gives an upper-tail area, convert it first.

## A contrasting worked route

If $X$ has mean $80$ and standard deviation $5$, the value at $z=1.5$ is $x=80+1.5(5)=87.5$. For a lower-tail probability near $0.8413$, use $z\approx1$, so the raw threshold is $85$. A lower-tail percentile and an upper-tail percentile of the same number have complementary areas.

## Transfer and validation

For two given percentiles with distinct z-scores, write $x_1=\mu+z_1\sigma$ and $x_2=\mu+z_2\sigma$ before eliminating. Technology may approximate $z$, so report the implied model parameters to suitable precision. Check that the larger percentile gives the larger raw cutoff.

## Exam lens

Paper 2 style: record whether the input area is cumulative from the left, then keep enough digits of the z-value before rounding. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Using $0.10$ instead of $0.90$ finds the 10th percentile, on the opposite side of the mean.

## Try it yourself

A score is $70$ with mean $50$ and standard deviation $10$. Find its z-score.

## Checked answer

$(70-50)/10=2$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
