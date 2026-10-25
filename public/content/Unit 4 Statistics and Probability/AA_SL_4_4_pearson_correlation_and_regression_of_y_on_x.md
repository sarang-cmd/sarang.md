# Pearson correlation and regression of y on x

> **SL 4.4 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- draw and interpret a scatter diagram, and describe the correlation as positive, negative or none, and as weak, moderate or strong;
- calculate and interpret Pearson's product-moment correlation coefficient $r$ with a calculator, and state its range and extreme values;
- explain that $r$ measures only linear association, and that correlation does not imply causation;
- find the equation of the regression line of $y$ on $x$ with a calculator, and from summary statistics;
- draw the line of best fit through the mean point $(\bar x,\bar y)$;
- use a regression line to predict values, distinguishing interpolation from extrapolation, and decide when a prediction is reliable;
- interpret the gradient and the intercept of a regression line in context.

## Why this topic matters

Scientists, economists and engineers constantly ask whether two quantities move together. Does more revision lead to higher marks? Does a higher temperature reduce heating costs? Do taller people have longer arms? A scatter diagram shows the relationship, the correlation coefficient puts a number on how tight it is, and the regression line turns it into a model that can predict. These ideas are the first step into statistical modelling, which is a large part of modern data science, and the subject of many internal assessment projects.

The chapter is also a lesson in intellectual honesty. A strong correlation does not prove that one thing causes another; the model describes only a straight-line relationship; and a prediction far outside the data can be absurd. The examination rewards candidates who can use the calculator to find $r$ and the equation quickly, and who then add one careful sentence about whether the model is trustworthy. Questions often ask you to find the line, use it to predict a value, and *comment on the validity* of that prediction. The marks for that last part are the easiest to forget, and the commentary is mostly about whether the value lies inside the range of the data.

## Core ideas

### Scatter diagrams and association

A **scatter diagram** plots paired data, one point for each pair $(x,y)$. The variable we think of as influencing the other, called the **independent** or **explanatory** variable, goes on the horizontal axis, and the **dependent** or **response** variable goes on the vertical axis. If the points tend to rise together there is **positive correlation**, if one tends to fall as the other rises there is **negative correlation**, and if there is no pattern there is **no correlation**. Points tightly packed around a line mean **strong** correlation and a wide, loose cloud means **weak** correlation. A point far from the pattern is an outlier and deserves attention, because it can influence the calculated values a lot.

### Pearson's correlation coefficient

**Pearson's product-moment correlation coefficient** is a number $r$ with
$$
-1\le r\le 1.
$$
It is defined by
$$
r=\frac{s_{xy}}{s_xs_y},\qquad s_{xy}=\frac{\sum (x-\bar x)(y-\bar y)}{n},
$$
where $s_x$ and $s_y$ are the standard deviations of the two variables, and $s_{xy}$ is the **covariance**. You will find $r$ with the calculator. The sign shows the direction of the association, and the size shows its strength. A common guide is: $|r|$ close to $1$ means a strong linear relationship, around $0.5$ moderate, and near $0$ weak. Exact $r=1$ means all the points lie on a straight line with positive gradient, and $r=-1$ on a line with negative gradient. An absolute value such as $0.97$ would usually be called very strong.

Three warnings go with $r$. First, it measures only **linear** association. The points $(-2,4),(-1,1),(0,0),(1,1),(2,4)$ follow a perfect curve, $y=x^{2}$, yet their correlation is exactly $0$. Second, it is sensitive to outliers. Third, and most important, **correlation does not imply causation**. Ice-cream sales and drowning accidents are positively correlated, but not because ice cream causes drowning: a third variable, hot weather, drives both. When asked to comment, say that the correlation shows an association only and suggest a possible lurking variable.

### The regression line of $y$ on $x$

The **regression line of $y$ on $x$** is the line $y=ax+b$ that minimises the sum of the squares of the vertical distances from the points to the line. This is the **least squares** line. It is the line you use to *predict $y$ from a given $x$*. In terms of summary statistics its gradient is
$$
a=\frac{s_{xy}}{s_x^{2}},
$$
and it always passes through the mean point $(\bar x,\bar y)$, so
$$
y-\bar y=\frac{s_{xy}}{s_x^{2}}\,(x-\bar x).
$$
You will mostly use the calculator, which gives $a$ and $b$ directly. The sign of the gradient always agrees with the sign of $r$, because $s_x^{2}>0$ and $r$ has the sign of $s_{xy}$.

To draw a line of best fit by hand, plot the mean point and draw a line through it that follows the trend of the points, with roughly equal numbers of points above and below.

### Interpreting the gradient and intercept

In the model $y=ax+b$ the **gradient** $a$ is the predicted change in $y$ for each increase of $1$ unit in $x$. If $y$ is a mark and $x$ is the number of hours of revision, then $a=4.4$ means that each extra hour of revision is associated with a rise of about $4.4$ marks. The **intercept** $b$ is the predicted $y$ when $x=0$. It is meaningful only if $x=0$ is a sensible value within the context. Always include the units and the context in your interpretation, and use the words "predicted" or "associated" rather than implying certainty.

### Interpolation and extrapolation

A prediction for an $x$ value *inside* the range of the data is **interpolation**, and it is usually reasonably reliable if $|r|$ is high. A prediction for an $x$ value *outside* the range is **extrapolation**, which assumes that the linear relationship continues, and which can be badly wrong. A model that fits revision times between 2 and 10 hours says nothing about 40 hours. Reliability also depends on the strength of the correlation and on the number of data points. Finally, only use the line of $y$ on $x$ to predict $y$ from $x$. To predict $x$ from $y$ you need the regression line of $x$ on $y$, which is the subject of SL 4.10.

## Worked examples

### Example 1 (describing correlation, 3 marks)

For the pairs $(1,3),(2,5),(3,4),(4,8),(5,9),(6,9),(7,12),(8,13)$, use a calculator to find $r$ and describe the relationship.

Entering the data gives $r=0.969$ to three significant figures. The value is positive and very close to $1$, so there is a strong positive linear correlation: as $x$ increases, $y$ tends to increase, and the points lie close to a straight line. The marks are one for $r$, one for the direction and one for the strength expressed in words, and the description needs both words.

### Example 2 (regression line, prediction, 6 marks)

For the same data find the regression line of $y$ on $x$, and use it to estimate $y$ when $x=4.5$ and when $x=10$. Comment on the reliability of each estimate.

The calculator gives $y=1.44x+1.39$ to three significant figures, with $a=1.4405$ and $b=1.3929$ before rounding. The means are $\bar x=4.5$ and $\bar y=7.875$, and you can check that the line passes through the mean point: $1.4405(4.5)+1.3929=7.875$. For $x=4.5$ the estimate is $y=7.88$. Since $4.5$ lies within the range of $x$ values, which runs from $1$ to $8$, this is interpolation and the estimate is reliable because $r$ is high. For $x=10$ the estimate is $y=1.4405(10)+1.3929=15.8$. Since $10$ is outside the range this is extrapolation, so it is less reliable, because we do not know that the linear pattern continues. The marks are for the equation, for each prediction, and for a comment that uses the range of the data.

### Example 3 (context, 6 marks)

Seven students studied for $h=2,3,5,6,8,9,10$ hours and scored $s=48,55,60,68,74,80,85$. Find the regression line of $s$ on $h$, interpret the gradient and predict the score for $7$ hours.

The calculator gives $r=0.994$ and the line $s=4.45h+39.8$. The gradient $4.45$ means that each additional hour of study is associated with about $4.45$ more marks. The intercept $39.8$ would be the predicted score with no study, and it is plausible here because $0$ is not far from the data, although it is an extrapolation. For $h=7$, which lies inside the data range, the prediction is $s=4.4453(7)+39.836=70.95$, so about $71$ marks. The correlation is very strong, so the prediction is reliable, though students differ, so individual scores will vary around the line.

### Example 4 (negative correlation and a meaningless prediction, 6 marks)

The average monthly heating cost $c$ (in euros) is recorded against the outside temperature $t$ (in degrees Celsius): $(2,95),(5,82),(8,70),(12,52),(15,40),(18,31)$. Find the regression line, estimate the cost at $10$ degrees and at $30$ degrees, and comment.

The calculator gives $r=-0.999$ and $c=-4.08t+102$ (more precisely $-4.075t+102.42$). The correlation is very strong and negative: warmer weather goes with lower costs. At $t=10$ the estimate is $-4.075(10)+102.42=61.7$ euros, which is interpolation and reliable. At $t=30$ the model predicts $-4.075(30)+102.42=-19.8$ euros, a negative cost, which is impossible. This is an extrapolation far outside the data range, and it shows that the linear model must stop being valid before $30$ degrees, because the cost cannot fall below zero. The comment about an impossible value is what examiners look for.

### Example 5 (from summary statistics, 5 marks)

For a data set, $\bar x=5$, $\bar y=12$, $s_x=2$, $s_y=6$ and $s_{xy}=10$. Find $r$ and the regression line of $y$ on $x$.

The correlation is $r=\dfrac{10}{2\times6}=0.833$. The gradient is $\dfrac{s_{xy}}{s_x^{2}}=\dfrac{10}{4}=2.5$. The line passes through $(5,12)$, so $y-12=2.5(x-5)$, which simplifies to $y=2.5x-0.5$. Check: at $x=5$, $y=2.5(5)-0.5=12$, as it must be. Both formulas are in the formula booklet, so the marks come from substituting correctly and from using the mean point.

### Example 6 (correlation and causation, 2 marks)

A study finds $r=0.8$ between the number of fire engines attending a fire and the damage costs. A student concludes that fire engines cause damage. Comment.

The correlation is strong and positive, but it shows association and not cause. A large fire needs more fire engines and also causes more damage, so the size of the fire is a lurking variable that explains both. The student's conclusion is not supported.

### Example 7 (using the mean point, 3 marks)

The regression line of $y$ on $x$ for a data set is $y=2x+3$, and the mean of the $x$ values is $4$. Find the mean of the $y$ values.

The regression line passes through $(\bar x,\bar y)$, so $\bar y=2(4)+3=11$. This is a quick way to find a missing mean, and it is often the final step of a longer question in which you are given the mean of $x$ and the equation of the line.

## Using your GDC

Enter the $x$ values in one list and the $y$ values in another, then choose two-variable statistics with linear regression. The output gives $a$, $b$ and $r$. Check that the lists have equal length, because a mismatch produces an error or the wrong result. Draw the scatter plot first and look at it: a curved pattern or an outlier means that $r$ and the line may mislead you. If you only need predictions, store the regression equation in the function editor and evaluate it at the required $x$ values, which avoids copying rounded coefficients. Give $a$ and $b$ to at least three significant figures, or keep them in the calculator memory for later calculations. Make sure your calculator is set to show $r$; on some models you must switch the diagnostics on. Some calculators also give $r^{2}$, but this course asks only for $r$.

## Common mistakes

- Concluding causation from a strong correlation. Always mention a possible lurking variable.
- Thinking that $r=0$ means no relationship at all. It means no *linear* relationship; the data could follow a curve.
- Treating the size of the gradient as the strength of the correlation. A steep line can have weak correlation, and a shallow line can have strong correlation.
- Extrapolating far outside the data and presenting the value as reliable.
- Using the regression line of $y$ on $x$ to predict $x$. That requires the line of $x$ on $y$.
- Putting the variables on the wrong axes, or entering $x$ and $y$ lists the wrong way round, so the line is the wrong one.
- Interpreting the intercept when $x=0$ makes no sense in the context.
- Rounding $r$ or the coefficients too early, which affects predictions.

## Exam technique and command terms

**Find** and **calculate** with a calculator earn the value after one line of working: say what you entered, then give the result. **Interpret** requires a sentence that includes units and context, such as "each additional hour of study is associated with about $4.45$ more marks". **Comment on the reliability** or **validity** should mention (i) whether the value lies within the data range, (ii) the strength of the correlation, and sometimes (iii) the number of data points. **Describe the correlation** needs a direction and a strength. **Write down the equation** means the full equation $y=ax+b$, not just $a$ and $b$. When asked to **estimate**, give a numerical estimate and make clear which line you used. If a question gives the summary statistics, use the formulas from the booklet and show them. If it asks you to draw the line of best fit on a scatter diagram, plot the mean point, then draw a line through it using a ruler, and extend it only as far as the data unless extrapolation is requested.

## Connections

This chapter builds on the mean and standard deviation of SL 4.3, because $r$ and the regression gradient are both ratios of those quantities. The question of whether the data are a fair sample, from SL 4.1, matters for any prediction. SL 4.10 will show what to do when you want to predict $x$ from $y$, and why the two regression lines are different unless the correlation is perfect. The least squares idea is an example of an optimisation problem, whose methods you will meet in calculus in SL 5.8. Modelling with other functions, such as exponentials and powers in the functions topic, uses the same scatter-and-fit approach after a suitable transformation of the variables.

## Check your understanding

1. For the data $(1,2),(2,4),(3,5),(4,4),(5,5)$ find $r$ and the regression line of $y$ on $x$.
2. For $(10,60),(20,52),(30,45),(40,38),(50,30)$ find $r$ and the regression line, and describe the correlation.
3. Use the line from question 2 to predict $y$ when $x=25$ and when $x=100$. Comment on each prediction.
4. A regression line of exam score $s$ on revision hours $h$ is $s=4.45h+39.8$. Interpret the gradient.
5. For the points $(1,1),(2,4),(3,9),(4,16),(5,25),(6,36)$, the calculator gives $r=0.979$. Explain why a linear model may still be unsuitable.
6. For the points $(-2,4),(-1,1),(0,0),(1,1),(2,4)$ find $r$ and explain.
7. The number of ice creams sold and the number of sunburn cases are strongly positively correlated. Suggest a reason that does not involve one causing the other.
8. A data set has $\bar x=5$, $\bar y=12$ and the regression line of $y$ on $x$ has gradient $2$. Find the equation of the line.
9. For another data set $s_x=3$, $s_y=4$ and $s_{xy}=-9$. Find $r$ and the gradient of the regression line of $y$ on $x$.
10. The regression line $y=3x+2$ is based on data with $x$ from $1$ to $6$. A student uses it to estimate $y$ at $x=50$. Comment.

### Answers

1. $r=0.775$ and $y=0.6x+2.2$. As a check, the mean point is $(3,4)$ and $0.6(3)+2.2=4$.
2. $r=-0.9996$ (about $-1.00$) and $y=-0.74x+67.2$. It is a very strong negative correlation.
3. At $x=25$: $-0.74(25)+67.2=48.7$, which is interpolation within the range $10$ to $50$ and is reliable. At $x=100$: $-0.74(100)+67.2=-6.8$, an extrapolation that gives an impossible negative value if $y$ is a quantity such as a mark or a count, so it is not reliable.
4. Each extra hour of revision is associated with an increase of about $4.45$ marks in the predicted score.
5. The correlation is high, but the points follow a curve ($y=x^{2}$), so a straight line is not the best model. $r$ only measures how well a *linear* model fits, and a scatter plot would show the curve.
6. $r=0$, because the data are symmetric, so there is no linear trend, yet $y=x^{2}$ exactly. A zero correlation does not mean no relationship.
7. Hot, sunny weather leads to more ice creams being sold and also to more sunburn. The weather is a lurking variable, so there is association without cause.
8. The line passes through $(5,12)$: $y-12=2(x-5)$, so $y=2x+2$.
9. $r=\tfrac{-9}{3\times4}=-0.75$ and the gradient is $\tfrac{-9}{3^{2}}=-1$.
10. The value $x=50$ is far outside the range $1$ to $6$, so this is extrapolation. The linear relationship may not continue, so the estimate is unreliable.

## Summary

- A scatter diagram shows the association. Describe direction (positive, negative, none) and strength (weak, moderate, strong).
- Pearson's $r$ satisfies $-1\le r\le1$ and measures *linear* association only. Correlation does not imply causation.
- $r=\dfrac{s_{xy}}{s_xs_y}$. The regression line of $y$ on $x$ is $y-\bar y=\dfrac{s_{xy}}{s_x^{2}}(x-\bar x)$ and passes through the mean point.
- The gradient is the predicted change in $y$ per unit of $x$, and the intercept is meaningful only if $x=0$ is sensible.
- Interpolation (inside the data range) is more reliable than extrapolation (outside). Use the line of $y$ on $x$ only to predict $y$.
- Always add a sentence about reliability: range of the data, strength of $r$ and plausibility of the value.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.4. Related facts may appear elsewhere. Justify any method used here.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
