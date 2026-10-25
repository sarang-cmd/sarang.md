# Regression of x on y

> **SL 4.10 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain why there are two different regression lines for a set of paired data, and when each should be used;
- find the equation of the regression line of $x$ on $y$ with a calculator and from summary statistics;
- use the line of $x$ on $y$ to estimate $x$ for a given value of $y$, and explain why rearranging the line of $y$ on $x$ gives a different, less appropriate answer;
- state that both regression lines pass through the mean point $(\bar x,\bar y)$, and use this to find means from two equations;
- use the relationship between the two gradients and the correlation coefficient, $r^{2}=ac$, to find $r$ or an unknown gradient;
- describe what happens when the correlation is perfect;
- judge the reliability of an estimate and decide which variable is the response variable in context.

## Why this topic matters

In SL 4.4 we fitted a line to predict $y$ from $x$. But sometimes the question is the other way round. A student has scored $75$ in a test and wants to know how many hours of study that typically represents; an engineer knows the heating bill and wants to estimate the outside temperature; a doctor knows a patient's blood pressure and wants to estimate age. The natural instinct is to take the existing equation and solve it for $x$. That would be wrong, and the reason is subtle but important: the line of $y$ on $x$ is chosen to make the *vertical* errors as small as possible, which is best for predicting $y$, and it does not make the *horizontal* errors small. To predict $x$ from $y$, you need a line fitted to minimise the horizontal errors.

This topic is short but is examined frequently, because it distinguishes candidates who understand regression from those who only follow a procedure. A typical question gives data, asks for the line of $y$ on $x$, then asks you to estimate $x$ for a given $y$ and to say which line is appropriate. A strong answer finds the line of $x$ on $y$ with the calculator, makes the estimate, and comments on reliability. A common variation gives two regression lines and asks for the means or the correlation coefficient, which is a pleasant algebra exercise using the facts in this chapter.

## Core ideas

### Two regression lines

For paired data $(x_i,y_i)$ the **regression line of $y$ on $x$** minimises the sum of the squared *vertical* distances between the points and the line. Its equation is
$$
y-\bar y=\frac{s_{xy}}{s_x^{2}}\,(x-\bar x),
$$
and it is the line to use to estimate $y$ given $x$. The **regression line of $x$ on $y$** minimises the sum of the squared *horizontal* distances. Its equation is
$$
x-\bar x=\frac{s_{xy}}{s_y^{2}}\,(y-\bar y),
$$
and it is the line to use to estimate $x$ given $y$. Here $s_x$ and $s_y$ are the standard deviations and $s_{xy}$ is the covariance, as in SL 4.4. These two formulas are in the formula booklet. Writing the second line as $x=cy+d$, the gradient $c=\dfrac{s_{xy}}{s_y^{2}}$ is the predicted change in $x$ for each unit increase in $y$.

### Why not rearrange?

Suppose the line of $y$ on $x$ is $y=ax+b$ and you solve it for $x$ to get $x=\dfrac{y-b}{a}$. This is a perfectly good line for that algebraic relationship, but it is not the line of $x$ on $y$. If you draw both lines on the usual axes, with $y$ vertical, the rearranged line of $y$ on $x$ has gradient $a=\dfrac{s_{xy}}{s_x^{2}}$, while the line of $x$ on $y$ has gradient $\dfrac{1}{c}=\dfrac{s_y^{2}}{s_{xy}}$. These are equal only when $r=\pm1$. For any weaker correlation the line of $x$ on $y$ is steeper on that picture, so the two lines give different estimates of $x$. The line of $x$ on $y$ is the one that was fitted to make the horizontal errors small, so it is the right one to use. In practice, never rearrange: if the question asks for an estimate of $x$, use the line of $x$ on $y$ from the calculator.

### The mean point and the intersection

Both lines pass through the mean point $(\bar x,\bar y)$. Therefore, if you are given the equations of the two regression lines, the point where they cross is $(\bar x,\bar y)$, and solving the two equations simultaneously gives both means. This is the key to many exam questions.

### The relationship with $r$

Write the line of $y$ on $x$ as $y=ax+b$ and the line of $x$ on $y$ as $x=cy+d$. Then
$$
a=\frac{s_{xy}}{s_x^{2}},\quad c=\frac{s_{xy}}{s_y^{2}},\quad ac=\frac{s_{xy}^{2}}{s_x^{2}s_y^{2}}=r^{2}.
$$
So the product of the two gradients (in this form) equals $r^{2}$. This gives the magnitude of $r$ from the gradients, and the sign of $r$ is the common sign of $a$ and $c$. It also shows that $|ac|\le1$, so the two lines are close to each other when the correlation is strong. If $r=\pm1$ the points lie on a straight line and the two regression lines coincide. If $r=0$ the line of $y$ on $x$ is horizontal, $y=\bar y$, and the line of $x$ on $y$ is vertical, $x=\bar x$.

### Choosing which line to use

The decision depends on what you are estimating, not on which variable is "independent". To estimate $y$ from a known $x$ use $y$ on $x$; to estimate $x$ from a known $y$ use $x$ on $y$. In the examination, if you are told to estimate a time given a distance, or the temperature given a cost, work out which quantity is being estimated first. As in SL 4.4, estimates are more reliable when the value used lies inside the range of the data and when $|r|$ is close to $1$.

## Worked examples

### Example 1 (finding the line and estimating $x$, 7 marks)

For the pairs $(1,3),(2,5),(3,4),(4,8),(5,9),(6,9),(7,12),(8,13)$ find the regression line of $x$ on $y$, and estimate $x$ when $y=10$. Compare with the estimate obtained by rearranging the line of $y$ on $x$.

Enter the data with the $y$ values in the first list as the independent variable, or use the calculator's option to choose which variable is regressed on which. This gives $x=0.651y-0.630$ (more precisely $0.65141y-0.62988$). When $y=10$, $x=0.65141(10)-0.62988=5.88$. The line of $y$ on $x$ for the same data is $y=1.4405x+1.3929$, which, if solved for $x$, gives $x=\dfrac{10-1.3929}{1.4405}=5.98$. The two answers are different: $5.88$ and $5.98$. The first is the correct estimate, since the line used was fitted to estimate $x$. The difference is small because $r=0.969$ is high. For weaker correlation, the difference would be larger. The marks are for the equation, the substitution and the comment.

### Example 2 (context, 6 marks)

Seven students studied for $h=2,3,5,6,8,9,10$ hours and scored $s=48,55,60,68,74,80,85$. Estimate the number of hours of study that a student who scored $75$ is likely to have done.

We want to estimate $h$ from $s$, so we need the line of $h$ on $s$. The calculator gives $h=0.222s-8.78$ (more precisely $0.22232s-8.7846$). Then for $s=75$, $h=0.22232(75)-8.7846=7.89$. So the student probably studied for about $7.9$ hours. Since $75$ lies within the range of the scores, $48$ to $85$, and the correlation is very strong ($r=0.994$), the estimate is reliable. Rearranging the line of $s$ on $h$ ($s=4.445h+39.84$) would give $7.91$, which is close, again because $r$ is so near $1$.

### Example 3 (negative correlation, 5 marks)

The outside temperature $t$ (in degrees Celsius) and the monthly heating cost $c$ (in euros) are recorded as $(2,95),(5,82),(8,70),(12,52),(15,40),(18,31)$. A household has a bill of $60$ euros. Estimate the average outside temperature.

We estimate $t$ from $c$, so we use the line of $t$ on $c$. The calculator gives $t=-0.245c+25.1$ (more precisely $-0.24473c+25.091$). For $c=60$, $t=-0.24473(60)+25.091=10.4$. So the estimated temperature is about $10.4$ degrees. The gradient is negative, because higher bills go with lower temperatures. As $60$ is within the range of costs, $31$ to $95$, this is interpolation and is reliable.

### Example 4 (from summary statistics, 6 marks)

For a data set, $\bar x=5$, $\bar y=12$, $s_x=2$, $s_y=6$ and $s_{xy}=10$. Find the regression line of $x$ on $y$, and verify that $ac=r^{2}$.

The gradient of the line of $x$ on $y$ is $c=\dfrac{s_{xy}}{s_y^{2}}=\dfrac{10}{36}=\dfrac{5}{18}$. The line passes through $(5,12)$, so $x-5=\dfrac{5}{18}(y-12)$, which gives $x=\dfrac{5}{18}y+\dfrac{5}{3}$, or $x=0.278y+1.67$. For the line of $y$ on $x$ the gradient is $a=\dfrac{10}{4}=2.5$. Then $ac=2.5\times\dfrac{5}{18}=\dfrac{25}{36}=0.694$. The correlation is $r=\dfrac{10}{2\times6}=\dfrac56$, and $r^{2}=\dfrac{25}{36}$, which agrees. This confirms the identity and provides a check for any calculation.

### Example 5 (two lines given, 7 marks)

The regression line of $y$ on $x$ is $y=2x+1$ and the regression line of $x$ on $y$ is $x=0.2y+3$. Find the means $\bar x$ and $\bar y$, and the correlation coefficient $r$.

Both lines pass through the mean point, so solve the equations simultaneously. Substituting $y=2x+1$ into the second gives $x=0.2(2x+1)+3=0.4x+3.2$, so $0.6x=3.2$ and $\bar x=\dfrac{16}{3}=5.33$. Then $\bar y=2\times\dfrac{16}{3}+1=\dfrac{35}{3}=11.7$. For the correlation, $a=2$ and $c=0.2$, so $r^{2}=ac=0.4$ and $|r|=\sqrt{0.4}=0.632$. Both gradients are positive, so the correlation is positive and $r=0.632$. A check is that $r^{2}\le1$. If the product had been above $1$, the lines would have been mislabelled.

### Example 6 (choosing the correct line, 3 marks)

A teacher has data on the number of hours of sleep $x$ and the number of mistakes $y$ made in a test by each student. Which regression line should she use to estimate the hours of sleep of a student who made $4$ mistakes?

She wants to estimate $x$ from a known $y$, so she must use the regression line of $x$ on $y$. Using the line of $y$ on $x$ and solving for $x$ would be inappropriate, because that line is fitted to predict the number of mistakes, not the hours of sleep.

### Example 7 (perfect correlation, 3 marks)

Four points $(1,3),(2,5),(3,7),(4,9)$ lie exactly on a line. Find both regression lines and comment.

The points satisfy $y=2x+1$, with $r=1$. The line of $y$ on $x$ is $y=2x+1$. The line of $x$ on $y$ is $x=0.5y-0.5$, which rearranges to $y=2x+1$ as well. So the two lines coincide, since $ac=2\times0.5=1=r^{2}$. This is the only case in which the two lines are the same, and in that case rearranging would be correct.

## Using your GDC

Most calculators offer linear regression in the form $y=ax+b$ using the first list as $x$ and the second as $y$. To obtain the line of $x$ on $y$, swap the lists: enter the $y$ values as the first list (the independent variable) and the $x$ values as the second list. The calculator then reports $a$ and $b$ for the line $x=ay+b$, so rename them $c$ and $d$ in your working to avoid confusion. Some calculators have a menu that lets you choose "regression of $x$ on $y$", which does the swapping for you. After obtaining the equation, check it by testing the mean point: $\bar x$ should equal $c\bar y+d$. The correlation coefficient $r$ is the same for both lines, so you can use it as a consistency check after swapping the lists. Write down which lists you used, since an answer for the wrong line earns no accuracy mark, but a clear statement of the setup protects the method mark.

## Common mistakes

- Rearranging the equation of $y$ on $x$ to estimate $x$, instead of finding the equation of $x$ on $y$.
- Swapping the lists for the wrong direction, or forgetting that after swapping the output $a$ and $b$ belong to the line of $x$ on $y$.
- Forgetting that both lines pass through $(\bar x,\bar y)$, and so missing a short way to find means from two equations.
- Using $r=ac$ instead of $r^{2}=ac$, or ignoring the sign of $r$, which is the common sign of the two gradients.
- Mixing up the denominators: $s_x^{2}$ goes with the line of $y$ on $x$, and $s_y^{2}$ with the line of $x$ on $y$.
- Estimating far outside the data and not commenting on reliability.
- Assuming the two lines are always very different. They are close when $|r|$ is near $1$ and coincide when $|r|=1$.
- Reporting a gradient without interpreting it in context.

## Exam technique and command terms

**Find the equation of the regression line of $x$ on $y$** means that you must state the line in the form $x=cy+d$, with the variable names spelled out. **Estimate** tells you to substitute into the line, and the commentary about reliability is part of the marks. If the question says "use your line to estimate", use the line that you found for the correct direction. When the question gives the two lines, remember that the intersection is the mean point, and the product of the gradients (in the forms $y=ax+b$ and $x=cy+d$) is $r^{2}$. Make a note of which gradient belongs to which line before you multiply, and check that $r^{2}$ is between $0$ and $1$. If you are given summary statistics, use the booklet formulas and show each substitution. Always state your final answer with units and context, such as "about $7.9$ hours of study".

## Connections

This chapter extends SL 4.4 and uses the same data, the same $r$ and the same ideas of interpolation and extrapolation. It builds on the mean and standard deviation of SL 4.3, because the gradients are ratios of covariance to variance. The method of least squares is an optimisation problem, and the calculus of SL 5.8 shows how a minimum is found by setting a derivative to zero, which is how the formulas for the regression lines are proved at university level. The notion that the answer depends on which variable is treated as the response is also a good example for Theory of Knowledge, since the same data give two different predictions depending on the question you ask. In an internal assessment, choosing the right regression line, and justifying it, adds depth to the analysis.

## Check your understanding

1. For the data $(1,2),(2,4),(3,5),(4,4),(5,5)$ find the regression line of $x$ on $y$, and estimate $x$ when $y=3$.
2. For $(10,60),(20,52),(30,45),(40,38),(50,30)$ find the regression line of $x$ on $y$ and estimate $x$ when $y=40$.
3. The regression lines are $y=0.5x+4$ and $x=0.8y-1$. Find $\bar x$, $\bar y$ and $r$.
4. A student has the line $y=3x+2$ for predicting $y$ from $x$ and solves it to estimate $x$ for $y=20$. Explain the flaw.
5. The correlation is $r=-0.8$, and the line of $y$ on $x$ has gradient $a=-0.5$. Find the gradient $c$ of the line of $x$ on $y$ written as $x=cy+d$.
6. A scientist records altitude $a$ and boiling point $b$ of water. Which line should she use to estimate the altitude of a place where water boils at $95$ degrees? Explain.
7. The temperature line from Example 3 is $t=-0.245c+25.1$. Estimate $t$ when the bill is $45$ euros.
8. For a data set $\bar x=10$, $\bar y=20$, $s_x=4$, $s_y=5$, $s_{xy}=15$. Find $r$ and both regression lines.
9. Explain why the two regression lines coincide when $r=1$.
10. A regression line of $x$ on $y$ is based on $y$ values between $20$ and $80$. A student uses it with $y=200$. Comment.

### Answers

1. The calculator gives $x=y-1$ (and $r=0.775$). For $y=3$, $x=2$. The mean point $(3,4)$ satisfies $3=4-1$.
2. $x=-1.35y+90.8$ (more precisely $-1.3504y+90.766$). For $y=40$, $x=36.8$.
3. Solve $x=0.8(0.5x+4)-1=0.4x+2.2$, so $0.6x=2.2$ and $\bar x=\tfrac{11}{3}=3.67$. Then $\bar y=0.5\times\tfrac{11}{3}+4=\tfrac{35}{6}=5.83$. $r^{2}=0.5\times0.8=0.4$, so $r=0.632$ (positive, as both gradients are positive).
4. The line of $y$ on $x$ minimises vertical errors and is meant to predict $y$. To estimate $x$ you need the regression line of $x$ on $y$, which is fitted to minimise horizontal errors, and which in general differs from the rearranged line.
5. $r^{2}=ac$, so $0.64=-0.5c$ and $c=-1.28$.
6. She wants to estimate altitude from a known boiling point, so she should use the line of $a$ on $b$ (altitude on boiling point), because it is fitted to predict altitude.
7. $t=-0.245(45)+25.1=14.1$ degrees (more precisely $14.08$).
8. $r=\tfrac{15}{4\times5}=0.75$. The line of $y$ on $x$ has gradient $\tfrac{15}{16}$: $y-20=\tfrac{15}{16}(x-10)$. The line of $x$ on $y$ has gradient $\tfrac{15}{25}=0.6$: $x-10=0.6(y-20)$, so $x=0.6y-2$. Check: $0.9375\times0.6=0.5625=0.75^{2}$.
9. When $r=1$ the points lie exactly on one straight line, so both regression lines must be that line, since the errors can be made zero. Algebraically $ac=r^{2}=1$ means that the gradient of the rearranged line equals the gradient of the other.
10. The value $200$ is far outside the range $20$ to $80$, so this is extrapolation. It assumes the linear pattern continues, which may not be true, so the estimate is unreliable.

## Summary

- There are two regression lines: $y$ on $x$ (to estimate $y$) and $x$ on $y$ (to estimate $x$), given by $y-\bar y=\dfrac{s_{xy}}{s_x^{2}}(x-\bar x)$ and $x-\bar x=\dfrac{s_{xy}}{s_y^{2}}(y-\bar y)$.
- Never rearrange the line of $y$ on $x$ to estimate $x$. Use the calculator with the lists swapped.
- Both lines pass through $(\bar x,\bar y)$, so their intersection gives the means.
- With $y=ax+b$ and $x=cy+d$, $ac=r^{2}$, and the sign of $r$ matches the signs of $a$ and $c$.
- When $|r|=1$ the two lines coincide. As $|r|$ approaches $0$ they become far apart.
- Estimates inside the data range with strong correlation are reliable. Extrapolation is not.
