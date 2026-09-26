# Normal distribution

> **SL 4.9 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A normal model is a continuous, symmetric bell-shaped distribution described by a mean and standard deviation. Areas under its curve are probabilities. A single exact value has probability zero, while an interval has a nonzero area.

## Formula, meaning and conditions

If $X\sim N(\mu,\sigma^2)$ with $\sigma>0$, then $Z=(X-\mu)/\sigma\sim N(0,1)$. The cumulative function $\Phi(z)=P(Z\leq z)$ is evaluated with a table or technology. Normality is a modeling assumption, not a property of every dataset.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.9. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Suppose $X\sim N(100,15^2)$. For $X<115$, standardize: $z=(115-100)/15=1$. Thus $P(X<115)=\Phi(1)\approx0.8413$. By symmetry $P(X>115)\approx0.1587$. Since the distribution is continuous, writing $<$ or $\leq$ at $115$ makes no difference.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Standardize a normal observation relative to mean and deviation.
2. Use symmetry and an appropriate calculator cumulative function.
3. Interpret a probability as area, not as the height of the density curve.

## Why the method works

The normal distribution is continuous: a single point has probability zero, while intervals have positive area. Converting $x$ to $z=(x-\mu)/\sigma$ measures signed distance in standard deviations when $\sigma>0$. A symmetric density gives $P(X>\mu)=1/2$ regardless of scale. Numerical tail areas normally require technology.

## A contrasting worked route

For $X\sim N(50,10^2)$, $x=60$ is one standard deviation above the mean. Thus $P(X<60)=P(Z<1)\approx0.8413$ and $P(X>60)\approx0.1587$. The values add to one. The value of the density at $60$ is not either probability; integration or a normal-CDF tool gives areas.

## Transfer and validation

Specify whether the second parameter in a given notation is variance or standard deviation; textbooks differ in notation. When a question asks for counts above a threshold, multiply the tail probability by the total only after computing the probability. Avoid presenting a model approximation as a measured frequency.

## Exam lens

Paper 2 style: sketch the shaded region, standardize, and check whether the requested tail is above or below one half. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

In $N(\mu,\sigma^2)$ the second parameter is a variance, not the standard deviation. $N(100,15^2)$ has $\sigma=15$.

## Try it yourself

For $X\sim N(0,1)$, estimate $P(X>0)$.

## Checked answer

$0.5$ by symmetry about the mean.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
