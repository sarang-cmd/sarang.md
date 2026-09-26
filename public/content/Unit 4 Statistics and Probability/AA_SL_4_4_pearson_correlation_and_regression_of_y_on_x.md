# Pearson correlation and regression of y on x

> **SL 4.4 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Correlation measures strength and direction of an approximately linear association, not whether one variable causes another. A regression line of $y$ on $x$ predicts a response $y$ from a given $x$ by minimizing vertical squared residuals.

## Formula, meaning and conditions

Pearson's coefficient $r$ lies between $-1$ and $1$. The least-squares line is commonly written $\hat y=a+bx$. Use it within the observed range with caution; extrapolation can be unreliable. Check the scatter plot for curvature and outliers.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.4. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For points $(1,2),(2,4),(3,6)$, every observation lies on $y=2x$, so the sample has perfect positive linear correlation $r=1$. The regression of $y$ on $x$ is $\hat y=2x$. Predicting at $x=2.5$ gives $\hat y=5$, an interpolation between recorded inputs. This pattern alone cannot establish causation.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Interpret direction and strength of a Pearson correlation.
2. Form a least-squares regression line of $y$ on $x$.
3. Predict within the observed range and identify extrapolation risks.

## Why the method works

Correlation standardizes covariance and takes values between $-1$ and $1$; it measures linear association, not causal influence. A regression of $y$ on $x$ minimizes vertical squared residuals. Swapping the variable roles gives a different line in general, so the phrase “of $y$ on $x$” determines which quantity is predicted.

## A contrasting worked route

If a fitted line is $\hat y=2x+1$ for observed $x$ between $1$ and $5$, then $x=3$ predicts $\hat y=7$. A measurement at $x=3$ need not equal $7$ because a regression line summarizes rather than interpolates every point. Predicting at $x=100$ is extrapolation and could ignore a change in relationship.

## Transfer and validation

Use a scatter plot to inspect curvature and outliers before reporting a high $r$ as a good model. Express slopes with output units per input unit, and distinguish a prediction from the observed response. A strong correlation can also arise from a shared hidden variable.

## Exam lens

Paper 2 style: interpret the direction of $r$, write the correct dependent variable on the left, and identify predictions outside the data range. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Do not substitute an observed $y$ into the $y$-on-$x$ equation to claim an $x$-on-$y$ regression unless that second line has been fitted.

## Try it yourself

A fitted line is $\hat y=3+2x$. Predict $y$ at $x=4$.

## Checked answer

$\hat y=3+8=11$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
