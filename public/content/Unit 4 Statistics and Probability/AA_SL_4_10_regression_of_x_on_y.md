# Regression of x on y

> **SL 4.10 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

When the goal is to predict $x$ from an observed $y$, fit the regression of $x$ on $y$. This minimizes horizontal squared prediction errors in the original coordinate plot, not the vertical errors used for $y$ on $x$. The two regression lines are generally not algebraic inverses.

## Formula, meaning and conditions

Write the fitted line as $\hat x=c+dy$ when predicting $x$ from $y$. Perfectly linear data have $|r|=1$ and make the two lines inverse functions; otherwise fitting direction changes the coefficients.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.10. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For observations $(x,y)=(1,2),(2,4),(3,6)$, the relationship is exactly $x=y/2$. The regression of $x$ on $y$ is therefore $\hat x=0.5y$. Given $y=5$, predict $x=2.5$. In less-than-perfect data, you would fit a fresh $x$-on-$y$ line rather than rearranging the $y$-on-$x$ line.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Identify $x$ as the variable predicted by a regression of $x$ on $y$.
2. Calculate a slope using $S_{xy}/S_{yy}$.
3. Explain why the two regression lines are not generally inverses.

## Why the method works

Ordinary least squares minimizes errors in the response variable. In the regression of $x$ on $y$, the errors are horizontal if drawn on an ordinary $x$-$y$ plot. Simply rearranging a fitted $y$-on-$x$ line does not usually produce the $x$-on-$y$ regression; the two slopes multiply to $r^2$ when both variances are nonzero.

## A contrasting worked route

For points $(1,1),(2,2),(3,4),(4,5)$, the means are $\bar x=2.5$, $\bar y=3$, and the centered sums are $S_{xx}=5$, $S_{yy}=10$, $S_{xy}=7$. Hence $\hat x=2.5+0.7(y-3)$. By contrast the $y$-on-$x$ slope is $7/5=1.4$; its reciprocal is not $0.7$.

## Transfer and validation

Both fitted lines pass through the centroid, so substitute the sample means as a quick check. Choose the appropriate line from the direction of prediction, not from which variable letter happens to appear first. A prediction far beyond the observed $y$ range remains an extrapolation.

## Exam lens

Paper 2 style: state clearly which variable is predicted and which is supplied before using calculator regression output. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Solving $\hat y=a+bx$ for $x$ does not generally give the least-squares $x$-on-$y$ regression.

## Try it yourself

If an $x$-on-$y$ line is $\hat x=2+0.3y$, predict $x$ at $y=10$.

## Checked answer

$\hat x=2+3=5$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
