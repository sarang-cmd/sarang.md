# Normal distribution

> **SL 4.9 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- describe the normal distribution $X\sim N(\mu,\sigma^{2})$ and its properties: bell shape, symmetry about the mean, total area $1$;
- sketch a normal curve with the mean marked and the required region shaded;
- calculate $P(X<a)$, $P(X>a)$ and $P(a<X<b)$ with a calculator, for any mean and standard deviation;
- use symmetry to relate probabilities, for example $P(X>\mu+c)=P(X<\mu-c)$;
- recall and apply the approximate $68\%$, $95\%$ and $99.7\%$ rule, and say why it is only an approximation;
- calculate expected frequencies from a normal model;
- explain how changes of $\mu$ and $\sigma$ move and reshape the curve, and recognise when a normal model is reasonable.

## Why this topic matters

If you measure the heights of a thousand adults, the masses of a thousand loaves of bread, or the errors in a thousand repeated measurements of a length, the histograms look remarkably alike: a single central peak, falling away symmetrically on both sides, like a bell. The normal distribution is the mathematical model of this pattern. It appears so often that it is the most important distribution in statistics, and there is a deep reason for that, the central limit theorem, which says that the sum or average of many small independent effects tends to be normally distributed. Quality control, medical reference ranges, standardised test scoring, financial risk, and the margins of error quoted in opinion polls all use normal models.

For the examination the normal distribution is essentially a calculator topic. You are expected to identify $\mu$ and $\sigma$, sketch the curve with the correct region shaded, find a probability with the calculator, and interpret it. The sketch is worth a mark in its own right, and it also protects you from a classic mistake: finding the probability of the wrong tail. The examiner reports consistently show that candidates who draw a quick diagram get the correct region far more often. This chapter covers the forward direction, from a value to a probability. The reverse direction, from a probability to a value, which uses the inverse normal function and standardisation, is the subject of SL 4.12.

## Core ideas

### The continuous random variable and the density curve

A **continuous random variable** can take any value in an interval. Its probabilities are given by areas under a **probability density curve**. The total area under the curve is $1$, and the probability that $X$ lies between $a$ and $b$ is the area between $a$ and $b$. Since a single point has no width, the area at a point is zero:
$$
P(X=a)=0.
$$
For that reason, with a continuous variable, $P(X<a)$ and $P(X\le a)$ are equal, and you do not need to worry about strict or non-strict inequalities. This is different from the discrete case of SL 4.7 and SL 4.8, where $P(X<5)$ and $P(X\le5)$ differ.

### The normal distribution

A random variable $X$ is **normally distributed** with mean $\mu$ and variance $\sigma^{2}$, written $X\sim N(\mu,\sigma^{2})$. Its density curve has these properties:

- it is bell-shaped, with its maximum at $x=\mu$;
- it is symmetric about the vertical line $x=\mu$, so that $P(X<\mu)=P(X>\mu)=0.5$;
- the mean, the median and the mode are all equal to $\mu$;
- the curve approaches the horizontal axis on both sides but never touches it;
- the total area under the curve is $1$;
- the **points of inflection** occur at $x=\mu\pm\sigma$, which is how the standard deviation shows up in the picture.

Be careful with notation: in $N(\mu,\sigma^{2})$ the second parameter is the **variance**. The statement $X\sim N(50,9)$ means the standard deviation is $3$, not $9$. A question will usually give the standard deviation in words and you must square it when writing the distribution, and many calculators ask for the standard deviation itself, so be clear about which you need.

### Effect of the parameters

Changing $\mu$ slides the curve left or right without changing its shape. Changing $\sigma$ changes the width and the height: a larger $\sigma$ gives a flatter, wider curve, and a smaller $\sigma$ gives a taller, narrower curve, because the area stays $1$. When you compare two normal curves, say which has the larger mean and which has the larger standard deviation, and describe the visual consequence.

### The $68$–$95$–$99.7$ rule

For any normal distribution, approximately
$$
P(\mu-\sigma<X<\mu+\sigma)\approx0.683,\quad P(\mu-2\sigma<X<\mu+2\sigma)\approx0.954,\quad P(\mu-3\sigma<X<\mu+3\sigma)\approx0.997.
$$
This allows quick estimates without a calculator, and a useful sanity check on the result of one. It is an approximation: the exact values are $0.6827$, $0.9545$ and $0.9973$. Because the tails beyond $2\sigma$ hold $4.55\%$ in total, a value more than $2\sigma$ from the mean is unusual, and one beyond $3\sigma$ is very rare.

### Calculating probabilities

The calculator has a **normal cumulative distribution** function that gives the area between a lower and an upper limit, for a stated mean and standard deviation. For a region with no upper limit, such as $P(X>a)$, use a very large upper limit such as $10^{99}$ (or $\mu+10\sigma$), and for one with no lower limit, use a very negative lower limit. You can also use $P(X>a)=1-P(X<a)$. The workflow is always the same: define the variable and distribution, sketch, identify the region, calculate, and then state the probability to three significant figures with a sentence of interpretation.

### Using symmetry

Because the normal curve is symmetric about $\mu$, the area at a given distance below the mean equals the area at the same distance above it:
$$
P(X<\mu-c)=P(X>\mu+c),\qquad P(\mu-c<X<\mu+c)=1-2P(X>\mu+c).
$$
Symmetry also gives $P(X>\mu)=0.5$, which is helpful for checks: any probability for a value above the mean must be less than $0.5$ for the upper tail and more than $0.5$ for the lower region.

### Expected frequencies

If $X$ models a measurement in a population of $N$ items or people, the expected number with $a<X<b$ is $N\,P(a<X<b)$. This is an estimate under the model. It is close to the observed count only if the normal model is a good fit.

## Worked examples

### Example 1 (basic probabilities, 6 marks)

The heights of adult men in a town are modelled by $X\sim N(170,8^{2})$ in centimetres. Find the probability that a man chosen at random is (a) shorter than $180$ cm, (b) between $160$ cm and $175$ cm, (c) taller than $185$ cm.

Sketch a bell curve centred at $170$ with the relevant region shaded each time. (a) From the calculator, $P(X<180)=0.894$. (b) $P(160<X<175)=0.628$. (c) $P(X>185)=0.0304$. These make sense: $180$ is $1.25$ standard deviations above the mean, so most of the distribution lies below it, and $185$ is nearly two standard deviations above the mean, so only a few per cent lie above. Always keep the unrounded values on the calculator for later parts.

### Example 2 (expected frequency, 5 marks)

A machine fills bottles with a mean volume of $500$ ml and a standard deviation of $4$ ml, and the volume is normally distributed. Find the probability that a bottle contains less than $495$ ml, and the expected number of such bottles in a batch of $2{,}000$.

The distribution is $X\sim N(500,4^{2})$. The probability is $P(X<495)=0.106$ to three significant figures. In a batch of $2000$ the expected number of underfilled bottles is $2000\times0.10565=211$. Notice that $495$ is $1.25$ standard deviations below the mean, which is consistent with a left tail of about $10\%$. If this is too many for the company, it must reduce $\sigma$ or raise $\mu$, and the inverse normal methods of SL 4.12 will show by how much.

### Example 3 (using symmetry, 4 marks)

$X\sim N(0,3^{2})$. Given that $P(X>4)=0.0912$, write down $P(X<-4)$ and $P(-4<X<4)$.

The mean is $0$ and the values $4$ and $-4$ are at equal distances from it, so by symmetry $P(X<-4)=P(X>4)=0.0912$. Then the central probability is $1-2(0.0912)=0.8176$. Symmetry questions ask for these answers without any calculator work, and the examiner will check that you give the reason, not only the value.

### Example 4 (the 68–95–99.7 rule, 4 marks)

Examination marks are normally distributed with mean $62$ and standard deviation $15$. Use the $68$–$95$–$99.7$ rule to estimate the percentage of marks between $32$ and $92$, and then compare with the calculator.

The value $32$ is $62-2(15)$ and $92$ is $62+2(15)$, so the interval is $\mu\pm2\sigma$, and the rule gives about $95\%$. The calculator gives $P(32<X<92)=0.9545$, which agrees. The percentage above $92$ is therefore about half of $5\%$, which is $2.5\%$, by symmetry.

### Example 5 (comparing two curves, 3 marks)

Two normal curves have the same mean but standard deviations $5$ and $10$. Describe how the curves differ.

Both curves are centred at the same value and have the same total area, $1$. The curve with $\sigma=10$ is wider and flatter, since the data are more spread out, whereas the curve with $\sigma=5$ is narrower and taller, with a higher peak. The area is the same in both cases, which explains the change in height.

### Example 6 (a two-sided interval, 4 marks)

The mass of a bag of flour is $X\sim N(250,12^{2})$ grams. Find the probability that a bag has mass between $240$ g and $260$ g, and the expected number of bags below $235$ g in a delivery of $800$ bags.

The first probability is $P(240<X<260)=0.595$. For the second, $P(X<235)=0.1056$, so the expected number is $800\times0.1056=84.5$, about $85$ bags. Notice that $\pm10$ g is less than one standard deviation ($12$ g) on either side, which agrees with a central probability of less than $0.683$.

### Example 7 (discrete versus continuous, 3 marks)

For $X\sim N(1,2^{2})$ find $P(X<2)$ and $P(X\le2)$, and also $P(X=2)$.

Because $X$ is continuous, $P(X=2)=0$, so $P(X<2)=P(X\le2)=0.691$. The two probabilities are identical, and the equality sign makes no difference. This would not be true of a binomial variable, for which $P(X=2)$ is a positive number. The reason is that probability for a continuous variable is area, and a single value has no width.

## Using your GDC

Choose the **normal cumulative distribution** function (often called normCdf or Normal CD). Enter the lower bound, the upper bound, the mean and the standard deviation (not the variance). For $P(X<a)$ use a very small lower bound, such as $-10^{99}$ or $\mu-10\sigma$, and for $P(X>a)$ use a very large upper bound. Check each entry before you press enter, because the order of the parameters differs between models. After the calculation, compare the result with the sketch: a probability above $0.5$ for a region that does not contain the mean is a sign of an error. Write the setup in the answer, for example "$P(160<X<175)$ with $\mu=170$, $\sigma=8$". Some calculators have a graphing option that shades the area, which is a useful check. In this topic the calculator does not need to know whether the variable is a height or a mass, so only the numbers matter, while the interpretation sentence supplies the context.

## Common mistakes

- Entering the variance as the standard deviation, or the standard deviation as the variance when defining the distribution.
- Shading or calculating the wrong tail. Sketch the region first.
- Treating a continuous variable as discrete: adding or subtracting $1$ from a boundary or worrying about $<$ versus $\le$.
- Using the $68$–$95$–$99.7$ rule for a distribution that is not normal, or treating it as exact.
- Forgetting that the total area is $1$, so that $P(X>a)=1-P(X<a)$, and getting a probability greater than $1$ by adding overlapping regions.
- Giving a probability as a percentage when a decimal was requested, or the reverse, without saying so.
- Failing to interpret the result in context, or calling an unusual value "impossible". A normal model gives a tiny but non-zero probability.
- Rounding the probability before multiplying by the population size.

## Exam technique and command terms

**Sketch** requires a bell-shaped curve, the mean marked on the axis with its value, and the required region shaded. A neat, labelled sketch of the right region usually earns one mark by itself. **Find the probability** requires a value to three significant figures from the calculator, and a statement such as $P(160<X<175)=0.628$. **Estimate** may indicate the $68$–$95$–$99.7$ rule. **Write down** suggests symmetry: no calculator is needed. **Interpret** requires a sentence in context, such as "about $10.6\%$ of bottles contain less than $495$ ml". For expected numbers, multiply the unrounded probability by the number of items. If the question introduces an unfamiliar context, begin by writing the model $X\sim N(\mu,\sigma^{2})$ with the numbers, because this earns a mark and ensures that you use $\sigma$ correctly. Remember that the mean is the centre of the picture: a value above it has a probability below $0.5$ for the upper tail.

## Connections

The normal distribution is a continuous version of the distributions in SL 4.7 and 4.8, and the mean and standard deviation come from SL 4.3, where $\mu$ and $\sigma$ were calculated from data. SL 4.12 reverses the calculation using standardisation and the inverse normal function, and it uses the transformation rules of SL 4.3 to show that $\tfrac{X-\mu}{\sigma}$ has mean $0$ and standard deviation $1$. The area under a curve, which you will meet again through integration in SL 5.11, is how probabilities are defined here, and in AHL 4.14 the normal density is an example of a probability density function. The cumulative frequency graph of SL 4.2 is the empirical version of the normal cumulative distribution function, whose S-shaped graph the data should approximately follow.

## Check your understanding

1. $X\sim N(100,15^{2})$. Find $P(X<120)$ and $P(X>130)$.
2. $X\sim N(35,5^{2})$. Find $P(X<30)$ and $P(X>42)$, and the expected number of values above $42$ in a sample of $500$.
3. $X\sim N(12,0.3^{2})$. Find $P(11.5<X<12.5)$ and $P(11.8<X<12.2)$.
4. $X\sim N(60,10^{2})$. Find $P(45<X<75)$ and $P(X>75)$.
5. $X\sim N(8,2^{2})$. Find $P(5<X<11)$ and $P(X<6)$.
6. $X\sim N(250,12^{2})$. Find $P(240<X<260)$ and the expected number below $235$ in $800$ values.
7. $X\sim N(0,3^{2})$ and $P(X>4)=0.0912$. Write down $P(X<-4)$.
8. $X\sim N(1,2^{2})$. Find $P(X<2)$, $P(X<0)$ and $P(-1<X<3)$.
9. State two properties of the normal curve, and write down $P(X=a)$ for a normal variable.
10. Two normal distributions have the same standard deviation but different means. Describe how their curves compare.

### Answers

1. $P(X<120)=0.909$ and $P(X>130)=0.0228$.
2. $P(X<30)=0.159$ and $P(X>42)=0.0808$. The expected number is $500\times0.0808=40.4$, so about $40$.
3. $P(11.5<X<12.5)=0.904$ and $P(11.8<X<12.2)=0.495$.
4. $P(45<X<75)=0.866$ and $P(X>75)=0.0668$.
5. $P(5<X<11)=0.866$ and $P(X<6)=0.159$.
6. $P(240<X<260)=0.595$ and $P(X<235)=0.1056$, so the expected number is $800\times0.1056=84.5$, about $85$.
7. By symmetry $P(X<-4)=0.0912$.
8. $P(X<2)=0.691$, $P(X<0)=0.309$ and $P(-1<X<3)=0.683$, which is the probability within one standard deviation of the mean $1$.
9. Any two of: bell-shaped; symmetric about $\mu$; mean, median and mode all equal; total area $1$; never touches the axis. $P(X=a)=0$.
10. The curves have the same shape and width, but one is shifted horizontally to be centred on its own mean. The peaks have the same height.

## Summary

- $X\sim N(\mu,\sigma^{2})$ has a bell-shaped curve, symmetric about $\mu$, with total area $1$ and points of inflection at $\mu\pm\sigma$.
- For a continuous variable $P(X=a)=0$, so $<$ and $\le$ give the same probability.
- Use the calculator's normal cdf with the standard deviation (not the variance), and sketch each region first.
- Approximately $68\%$, $95\%$ and $99.7\%$ of values lie within $1$, $2$ and $3$ standard deviations of the mean.
- Symmetry gives $P(X<\mu-c)=P(X>\mu+c)$ and $P(X>\mu)=0.5$.
- The expected frequency in a population of $N$ is $N\,P(a<X<b)$. Interpret every result in context.
