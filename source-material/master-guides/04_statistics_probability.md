# Statistics and Probability | From counts to claims

> **AA SL foundations and AA HL extensions.** An original guide connecting the 14 code-specific lessons. A probability model starts with a clearly defined experiment and event; a statistical conclusion also needs assumptions about how data were obtained.

## Describe data before fitting a model

A median answers a different question from a mean. Extreme values can pull the mean without moving the median much. For a grouped table, a calculated mean from class midpoints is an **estimate**, because the individual positions within each class are unknown. On a histogram whose class widths differ, the bar's height must be frequency density, $\text{frequency}/\text{class width}$. Frequency is represented by **area**. If one interval has frequency $12$ and width $3$, its density is $4$; another with frequency $10$ and width $1$ has density $10$. The narrower class can be taller while containing fewer observations.

Correlation describes how paired data vary; it does not by itself establish that changing one variable causes the other to change. Regression is a model fitted to a stated data range. A line $\hat y=a+bx$ predicts a mean response in that model; it is not a guarantee for an individual point. Keep units in the slope and avoid extrapolation when the context gives no reason for the linear relationship to continue.

The learner's 2023 Version 1.0 AA HL booklet has now been checked for probability and statistics rows on printed pages 7 and 8 (PDF pages 9 and 10). The booklet lists binomial mean and variance but does not replace a reasoned count of outcomes. See the formula booklet audit for exact rows and limits of PDF text extraction.

## Worked SL example: reverse the condition

Suppose a condition affects $2\%$ of a population. A test detects $90\%$ of affected people and has specificity $95\%$ for unaffected people, so its false-positive rate is $5\%$. If a person tests positive, what is the probability they have the condition? Imagine $10\,000$ people: approximately $200$ have the condition and $180$ of them test positive; of the $9800$ without it, $490$ test positive. Therefore the positive group has $180+490=670$ people, and the requested fraction is $180/670=18/67\approx0.269$. The answer is **not** $0.90$: that is $P(+\mid\text{condition})$, whereas we need $P(\text{condition}\mid+)$. The tree diagram and Bayes' formula $P(A\mid B)=P(A\cap B)/P(B)$ give the same result.

For independent trials, a binomial variable counts successes in a fixed number of trials with the same success probability. If four independent attempts each succeed with probability $0.3$, the probability of at least one success is easier through its complement: $1-P(0)=1-(0.7)^4=0.7599$. This is valid only if the attempts are independent and the probability remains constant. Without those assumptions, the arithmetic can be perfect and the model still wrong.

## HL extension: continuous models and inference

Let a random variable have density $f(x)=kx$ on $0\leq x\leq2$ and zero elsewhere. A density is not a point probability. Its total area must be $1$: $\int_0^2kx\,dx=2k=1$, so $k=1/2$. The probability $P(X<1)$ is $\int_0^1x/2\,dx=1/4$, while $P(X=1)=0$ for a continuous variable. The expectation is $E(X)=\int_0^2x(x/2)\,dx=(1/2)(8/3)=4/3$. Check that this lies inside $[0,2]$ and leans toward the right, where the density is larger. By contrast, a cumulative distribution function is $F(t)=P(X\leq t)$; on $0\leq t\leq2$, $F(t)=t^2/4$. Outside the support it is $0$ to the left and $1$ to the right.

For a normally distributed quantity $X\sim N(\mu,\sigma^2)$ with $\sigma>0$, standardize with $Z=(X-\mu)/\sigma$. If $\mu=50$ and $\sigma=5$, then $X=60$ corresponds to $Z=2$. One-sided probability $P(X>60)$ is $P(Z>2)$, not $P(Z<2)$; the symmetry and shaded side matter. An inverse-normal answer should be returned to the original units: a $z$ value alone is not a score measured in the context's units.

A hypothesis test is a structured decision under a stated null model. Define $H_0$, the alternative and significance level before looking at the observed statistic. Compute a tail probability in the direction specified by the alternative. A small $p$-value is the probability, **assuming the null model**, of data at least as incompatible with that model as the observation. It is not the probability that $H_0$ is true. Rejecting $H_0$ does not measure the effect size or prove a causal mechanism; failing to reject is not proof of equality. State the decision in context with the chosen significance level.

## Exam lens and common wrong turns

Paper 1 style may ask you to build a sample space, interpret a Venn diagram or calculate exactly from a discrete model. Paper 2 style may involve a normal calculator, data analysis and regression diagnostics. Paper 3 style can link a probability model, expected value and a recommendation while questioning assumptions. The app's original tasks are practice, not official predictions or grading.

- In a two-stage tree, multiply along a branch for an intersection and add disjoint completed branches for a union.
- If a first item is not replaced, the second-draw probabilities change. Do not call that fixed-probability process binomial without a suitable approximation and justification.
- For a continuous variable, $P(X=a)=0$, but $P(X\leq a)$ can be positive.
- Writing $P(A\mid B)=P(B\mid A)$ reverses the reference group. Label the denominator in words to avoid the error.
- A regression coefficient is meaningful only with its response variable, explanatory variable, units and modeled range.

## Check yourself

If independent events $A$ and $B$ have probabilities $0.4$ and $0.5$, then $P(A\cap B)=0.2$. For the density above, $P(1<X<2)=1-1/4=3/4$. For a histogram class with frequency $15$ and width $5$, the correct density is $3$. Explain the interpretation in a sentence before doing the next numerical problem.
