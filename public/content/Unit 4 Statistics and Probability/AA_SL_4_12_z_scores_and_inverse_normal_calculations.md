# Z-scores and inverse normal calculations

> **SL 4.12 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- calculate and interpret a $z$-score, $z=\dfrac{x-\mu}{\sigma}$, and use the standard normal distribution $Z\sim N(0,1)$;
- use $x=\mu+z\sigma$ to convert a $z$-value back to a raw value;
- use the inverse normal function to find the value $k$ for a given probability, for lower-tail, upper-tail and central regions;
- find an unknown mean, an unknown standard deviation, or both, from probability conditions on a normal variable;
- compare values from different normal distributions by comparing their $z$-scores;
- find symmetric intervals about the mean that contain a stated probability;
- check results for reasonableness using a sketch and the $68$–$95$–$99.7$ rule.

## Why this topic matters

In SL 4.9 you started with a value and found a probability, for example "what fraction of bottles contain less than 495 ml?". Real decisions often run the other way. A manufacturer wants to set the filling machine so that only $2\%$ of bottles are underfilled. A university sets a cut-off score so that the top $10\%$ of applicants are invited to interview. A doctor defines a reference range as the middle $95\%$ of healthy values. In each case the *probability* is given and the *value* is unknown. This is the inverse normal problem.

The second theme of the chapter is **standardisation**. A mark of $78$ in one test and $85$ in another cannot be compared directly, because the tests may have different averages and spreads. If we measure each mark in units of standard deviations from its own mean, the two numbers become comparable. That measure is the $z$-score. It also lets us reduce every normal distribution to one standard form, which is why tables of the normal distribution only need one table, and why calculators have an inverse normal function.

In the examination, the questions in this area are very frequent and often carry many marks, because they combine a calculator step with algebra. A typical "find $\mu$ and $\sigma$" question gives two probabilities, which lead to two equations in two unknowns. It is a gift for candidates who have a routine, since the structure never changes: sketch, inverse normal for each probability, form the equations, solve, and check.

## Core ideas

### The standard normal distribution and $z$-scores

The **standard normal distribution** is $Z\sim N(0,1)$, with mean $0$ and standard deviation $1$. For any $X\sim N(\mu,\sigma^{2})$, the **$z$-score** of a value $x$ is
$$
z=\frac{x-\mu}{\sigma}.
$$
This is a linear transformation of the form $y=ax+b$ with $a=\tfrac1\sigma$ and $b=-\tfrac{\mu}{\sigma}$. By the rules of SL 4.3, the new mean is $\tfrac{\mu}{\sigma}-\tfrac{\mu}{\sigma}=0$ and the new standard deviation is $\tfrac{\sigma}{\sigma}=1$. It can be shown that $Z$ is still normal, so $Z\sim N(0,1)$. The $z$-score tells you **how many standard deviations the value lies from the mean**, with a positive sign above the mean and a negative sign below it. Two consequences follow. The probabilities of $X$ can be turned into probabilities of $Z$, so $P(X<x)=P\left(Z<\tfrac{x-\mu}{\sigma}\right)$. And the $z$-scores of different data sets can be compared directly.

A $z$-score is not a probability. A value with $z=2$ is two standard deviations above the mean, and about $2.3\%$ of the distribution lies above it. A value with $|z|>2$ is generally regarded as unusual, since about $95\%$ of the distribution has $|z|<2$.

### Converting back to raw values

Solving the formula for $x$ gives
$$
x=\mu+z\sigma.
$$
If $z=-1.2$, then the value is $1.2$ standard deviations below the mean. This direction is what you need once the inverse normal gives you a $z$-value.

### The inverse normal function

The **inverse normal** function takes an area and returns the value with that area **to its left**. For the standard normal distribution, $P(Z<z_0)=p$ means $z_0=\Phi^{-1}(p)$. On a calculator, the function is usually called invNorm or Inverse Normal, and it takes the area to the left, the mean and the standard deviation, and returns $k$ directly:
$$
P(X<k)=p\quad\Longrightarrow\quad k=\text{invNorm}(p,\mu,\sigma).
$$
Always check which tail the question is describing. For an upper tail, $P(X>k)=q$, convert first to the left-hand area $p=1-q$. Useful values of the standard normal distribution are $\Phi^{-1}(0.9)=1.2816$, $\Phi^{-1}(0.95)=1.6449$, $\Phi^{-1}(0.975)=1.9600$ and $\Phi^{-1}(0.99)=2.3263$. Because of symmetry, $\Phi^{-1}(1-p)=-\Phi^{-1}(p)$.

### Central intervals

To find the symmetric interval $(\mu-c,\mu+c)$ that contains a probability $P$, the two tails together hold $1-P$, so each holds $\tfrac{1-P}{2}$. The upper end $\mu+c$ has area $\tfrac{1+P}{2}$ to its left. For example, the middle $90\%$ lies between the values with $5\%$ and $95\%$ to their left, and the half-width is $c=1.6449\,\sigma$.

### Finding unknown parameters

If one of $\mu$ and $\sigma$ is unknown and one probability condition is given, find the $z$-value with the inverse normal for the standard distribution, write $z=\dfrac{x-\mu}{\sigma}$ with that $z$ and the known values, and solve. If both are unknown, you need two conditions. Each gives an equation $x_i=\mu+z_i\sigma$, so you obtain two linear equations in two unknowns, and you solve them by subtraction. The signs of the $z$-values matter: a value in the lower tail has a negative $z$ and a value in the upper tail has a positive $z$. A check is that the larger value of $x$ must have the larger $z$.

## Worked examples

### Example 1 (a $z$-score, 3 marks)

Heights of men are $X\sim N(170,8^{2})$. Find the $z$-scores of heights $182$ cm and $158$ cm and interpret them.

For $182$: $z=\tfrac{182-170}{8}=1.5$. For $158$: $z=\tfrac{158-170}{8}=-1.5$. The first height is $1.5$ standard deviations above the mean and the second is $1.5$ standard deviations below it. By symmetry, the proportion of men taller than $182$ cm equals the proportion shorter than $158$ cm, which is $P(Z>1.5)=0.0668$.

### Example 2 (upper tail, 4 marks)

Examination marks are $X\sim N(62,15^{2})$. The top $10\%$ of candidates are invited for an interview. Find the minimum mark needed.

We need $P(X>k)=0.1$, so $P(X<k)=0.9$. With the calculator, $k=\text{invNorm}(0.9,62,15)=81.2$. By hand, $\Phi^{-1}(0.9)=1.2816$ and $k=62+1.2816\times15=81.2$. So a mark of about $81.2$ (so $82$ if marks are whole numbers) is needed. The sketch shows the shaded region of area $0.1$ to the right of $k$, and $k$ is above the mean, as it must be, since the area to its right is less than $0.5$.

### Example 3 (lower tail, 4 marks)

A machine fills bottles with $X\sim N(500,4^{2})$ millilitres. The company wants to label the volume that is exceeded by $95\%$ of bottles. Find it.

The label volume $k$ satisfies $P(X>k)=0.95$, which is $P(X<k)=0.05$. Then $k=\text{invNorm}(0.05,500,4)=493.4$. By hand, $\Phi^{-1}(0.05)=-1.6449$, so $k=500-1.6449\times4=493.4$. So $95\%$ of bottles contain more than $493.4$ ml. The value is below the mean, as expected for a lower-tail probability.

### Example 4 (unknown mean, 5 marks)

$X\sim N(\mu,6^{2})$ and $P(X<40)=0.2$. Find $\mu$.

The standardised value for the area $0.2$ is $z=\Phi^{-1}(0.2)=-0.8416$. So $\tfrac{40-\mu}{6}=-0.8416$, which gives $40-\mu=-5.0497$ and $\mu=45.05$. Check: $40$ is below the mean, which is correct since only $20\%$ of the distribution lies below it. A common error is to use $+0.8416$, which would put the mean below $40$.

### Example 5 (unknown standard deviation, 5 marks)

$X\sim N(50,\sigma^{2})$ and $P(X>58)=0.15$. Find $\sigma$.

Since $P(X<58)=0.85$, the $z$-value is $\Phi^{-1}(0.85)=1.0364$. So $\tfrac{58-50}{\sigma}=1.0364$ and $\sigma=\tfrac{8}{1.0364}=7.72$. Check with the $68$–$95$–$99.7$ rule: $58$ is about $1.04\sigma$ above the mean, and about $15\%$ lie above $1\sigma$ (as $\tfrac{100-68}{2}=16$), which is consistent.

### Example 6 (both unknown, 7 marks)

$X\sim N(\mu,\sigma^{2})$ with $P(X<30)=0.1$ and $P(X>50)=0.2$. Find $\mu$ and $\sigma$.

The first condition gives $z_1=\Phi^{-1}(0.1)=-1.2816$, so $30=\mu-1.2816\sigma$. The second gives $P(X<50)=0.8$, so $z_2=\Phi^{-1}(0.8)=0.8416$ and $50=\mu+0.8416\sigma$. Subtracting the first equation from the second, $20=(0.8416+1.2816)\sigma=2.1232\sigma$, so $\sigma=9.42$. Substituting into the first, $\mu=30+1.2816\times9.4199=42.07$. Check with the second: $42.07+0.8416\times9.42=50.0$. The marks are for the two $z$-values, the two equations and the solution. Keep full accuracy in $z_1$ and $z_2$ until the end.

### Example 7 (central interval, 4 marks)

IQ scores are $X\sim N(100,15^{2})$. Find the symmetric interval about the mean that contains the middle $90\%$ of scores.

The tails together hold $10\%$, so $5\%$ lies in each tail and the upper end has area $0.95$ to its left. With the calculator, $\text{invNorm}(0.95,100,15)=124.7$ and $\text{invNorm}(0.05,100,15)=75.3$. So the interval is $(75.3,\,124.7)$. As a check, the half-width is $1.6449\times15=24.7$, which is a bit less than $2\sigma=30$, consistent with $90\%<95\%$.

### Example 8 (comparing with $z$-scores, 4 marks)

Student A scored $78$ in a test with mean $65$ and standard deviation $8$. Student B scored $85$ in a test with mean $70$ and standard deviation $12$. Who did better relative to their group?

For A, $z=\tfrac{78-65}{8}=1.625$. For B, $z=\tfrac{85-70}{12}=1.25$. Student A's mark is $1.625$ standard deviations above the mean, which is more than B's $1.25$, so A did relatively better, although B's raw score is higher. This is the main use of $z$-scores: they compare positions in different distributions.

### Example 9 (setting a machine, 5 marks)

A machine fills bags with a standard deviation of $6$ g. The mean is to be set so that only $2\%$ of bags weigh less than $500$ g. Find the mean.

We need $P(X<500)=0.02$, so $\tfrac{500-\mu}{6}=\Phi^{-1}(0.02)=-2.0537$. Then $500-\mu=-12.32$ and $\mu=512.3$ g. The result is above $500$, as expected: the mean must lie about $2.05$ standard deviations above the minimum. If the standard deviation were reduced, the mean could be lowered, which saves material, and this explains why manufacturers invest in more precise machines.

## Using your GDC

Use the **inverse normal** function: enter the area to the left, the mean and the standard deviation, and read $k$. Be careful about the form your calculator expects: some models offer a "tail" setting (left, right or central), and the area you enter must match the tail. When in doubt, enter the left-hand area and keep to that convention. To get a $z$-value, use mean $0$ and standard deviation $1$. For a problem with two unknowns, calculate both $z$-values in this way and store them, so that they keep full accuracy, and then use the simultaneous equation solver or substitute by hand. After finding the parameters, check them with the normal cumulative distribution function from SL 4.9: compute $P(X<30)$ and $P(X>50)$ with the new values and see whether they return $0.1$ and $0.2$. This takes seconds and catches sign errors. Write down the function and the inputs, for example "$\text{invNorm}(0.9,62,15)$".

## Common mistakes

- Entering the upper-tail area into the inverse normal function. The function expects the area to the *left*.
- Using a positive $z$-value for a value below the mean, or the reverse, which swaps the sign in the equations.
- Entering the variance instead of the standard deviation.
- Treating the $z$-score as a probability, or interpreting $z=1.5$ as "$15\%$".
- For two unknowns, subtracting the equations incorrectly, or rounding the $z$-values too early.
- For a central interval, using $0.9$ or $0.95$ as the area for the upper endpoint when the middle probability is $90\%$. The upper endpoint has area $0.95$ to its left.
- Failing to check that the answer is on the correct side of the mean.
- Giving a value that is not reasonable in context, such as a mean below the cut-off for a probability that is less than $50\%$ in the lower tail.

## Exam technique and command terms

**Find the value of $k$** with a probability condition requires a sketch, a statement of the area to the left, and the inverse normal calculation. A short sketch often earns a mark. **Find $\mu$ and $\sigma$** needs two equations. State them explicitly in the form $x=\mu+z\sigma$ and show the substitution. **Standardise** means compute $z$. **Compare** means state the two $z$-scores and say which is more extreme. **Interpret** requires a context sentence, such as "$95\%$ of bottles contain more than $493.4$ ml". Where a question asks for an answer "correct to the nearest integer", for example a mark or a number of bottles, decide whether rounding up or down is appropriate for the context. For a minimum mark, round up. Finally, use the cumulative distribution function to check the answer against the original probability. The quick check can save a full question's marks, because the most common mistake in this topic, the sign of $z$, is easy to see.

## Connections

This chapter is the reverse direction of SL 4.9, and it builds on the transformation rules for means and standard deviations in SL 4.3, which prove that standardisation produces mean $0$ and standard deviation $1$. The system of two linear equations is a use of the algebra from the number and algebra unit, and the symmetric interval uses the symmetry of the density curve. In AHL 4.14, the same ideas appear in properties of random variables, where you show that $aX+b$ has mean $a\mu+b$ and variance $a^{2}\sigma^{2}$. The percentile idea is the theoretical counterpart of the percentile estimates from cumulative frequency in SL 4.2. In your internal assessment, standardised scores are a clear way to compare measurements from different samples.

## Check your understanding

1. $X\sim N(50,10^{2})$. Find the value $k$ such that $P(X>k)=0.1$.
2. $X\sim N(30,4^{2})$. Find $k$ such that $P(X<k)=0.05$.
3. $X\sim N(200,20^{2})$. Find $k$ such that $P(X<k)=0.75$.
4. $X\sim N(12,0.5^{2})$. Find $k$ such that $P(X<k)=0.99$.
5. $X\sim N(\mu,5^{2})$ and $P(X<40)=0.3$. Find $\mu$.
6. $X\sim N(100,\sigma^{2})$ and $P(X>120)=0.1$. Find $\sigma$.
7. $X\sim N(\mu,\sigma^{2})$ with $P(X<20)=0.05$ and $P(X>40)=0.1$. Find $\mu$ and $\sigma$.
8. A height of $185$ cm is observed in a population with mean $172$ cm and standard deviation $6.5$ cm. Find the $z$-score and interpret it.
9. $X\sim N(70,12^{2})$. Find the lower boundary of the highest $25\%$ of values.
10. $X\sim N(50,6^{2})$. Find the symmetric interval about the mean that contains $80\%$ of values.

### Answers

1. $P(X<k)=0.9$, so $k=50+1.2816\times10=62.8$.
2. $k=30-1.6449\times4=23.4$.
3. $\Phi^{-1}(0.75)=0.6745$, so $k=200+0.6745\times20=213.5$.
4. $\Phi^{-1}(0.99)=2.3263$, so $k=12+2.3263\times0.5=13.16$.
5. $\tfrac{40-\mu}{5}=\Phi^{-1}(0.3)=-0.5244$, so $40-\mu=-2.622$ and $\mu=42.6$.
6. $\tfrac{120-100}{\sigma}=1.2816$, so $\sigma=\tfrac{20}{1.2816}=15.6$.
7. $20=\mu-1.6449\sigma$ and $40=\mu+1.2816\sigma$. Subtracting: $20=2.9265\sigma$ so $\sigma=6.83$, and $\mu=20+1.6449\times6.834=31.2$.
8. $z=\tfrac{185-172}{6.5}=2$. The height is exactly two standard deviations above the mean, which is unusual: only about $2.3\%$ of the population is taller.
9. $P(X>k)=0.25$, so $P(X<k)=0.75$ and $k=70+0.6745\times12=78.1$.
10. Each tail holds $10\%$, so the endpoints have areas $0.1$ and $0.9$. $\Phi^{-1}(0.9)=1.2816$, so the interval is $50\pm1.2816\times6$, which is $(42.3,\,57.7)$.

## Summary

- The $z$-score $z=\tfrac{x-\mu}{\sigma}$ counts standard deviations from the mean. $Z\sim N(0,1)$, and $x=\mu+z\sigma$ converts back.
- The inverse normal function takes the area to the *left* and returns the value. Convert upper-tail areas with $1-q$.
- For one unknown parameter, find $z$ from the inverse normal and solve $z=\tfrac{x-\mu}{\sigma}$.
- For two unknowns, write two equations $x_i=\mu+z_i\sigma$ and solve them. Keep full accuracy in the $z$-values.
- A central interval holding probability $P$ ends at the values with areas $\tfrac{1-P}{2}$ and $\tfrac{1+P}{2}$ to their left.
- Compare values from different distributions by comparing their $z$-scores. Check every answer against a sketch and with the normal cdf.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists normal standardization with a z-score under SL 4.12. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
