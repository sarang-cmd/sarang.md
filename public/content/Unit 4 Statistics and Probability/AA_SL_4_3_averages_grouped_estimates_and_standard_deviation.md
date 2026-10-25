# Averages, grouped estimates and standard deviation

> **SL 4.3 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- calculate the mean, median and mode of a list, of a frequency table and of grouped data, and identify the modal class;
- state when the mean, the median or the mode is the most suitable measure of centre;
- estimate the mean of grouped data using class midpoints, and explain why the result is an estimate;
- calculate the variance and standard deviation from a list or a frequency table, using a calculator and, for small sets, by hand from the definition;
- describe the effect on the mean, the standard deviation and the variance when every value is changed by $x\mapsto ax+b$;
- find a missing frequency or value when the mean is given, and combine the means of two groups;
- interpret the standard deviation as a measure of spread, in context.

## Why this topic matters

If you could report only one number about a set of data, it would probably be an average. But an average on its own can mislead badly. Two bus routes might both have a mean journey time of 30 minutes, yet one is always 28 to 32 minutes while the other ranges from 10 to 60. A traveller trying to catch a flight cares enormously about that difference. The standard deviation is the standard way of measuring it. Together the mean and the standard deviation describe the centre and the spread of a distribution, and they are the two parameters that fix a normal distribution in SL 4.9. Almost every later topic in this unit uses them.

In the examination this material appears in two forms. The first is a calculator question: enter the data and read off the mean and standard deviation. These are quick marks, but they depend on entering frequency data correctly. The second is a reasoning question: what happens to the mean and standard deviation if every score is increased by 5, or doubled, or if one extra value is added? These questions reward understanding and cannot be answered by pressing buttons. This chapter develops both. It also introduces the idea behind the formula for standard deviation, because once you see that it is the typical distance from the mean, the effects of transformations become obvious and you will not need to memorise them.

## Core ideas

### Measures of centre

The **mean** of $n$ values is
$$
\bar x=\frac{\sum x}{n},
$$
and for a frequency table with values $x_i$ and frequencies $f_i$ it is $\bar x=\dfrac{\sum f_ix_i}{\sum f_i}$, where $\sum f_i=n$. The **median** is the middle value when the data are ordered, or the average of the two middle values when $n$ is even. The **mode** is the most frequent value, and for grouped data we speak of the **modal class**, the class with the highest frequency (or, with unequal widths, the highest frequency density). A data set can have more than one mode or none.

Which one to use depends on the data. The mean uses every value, so it is the right choice for symmetric data without extreme values, and it is the one needed for later calculations. But it is pulled by outliers. The median is resistant, so it is better for skewed data such as house prices or incomes. The mode is the only choice for categorical data, such as the most popular shoe size a shop should stock.

### Estimating the mean from grouped data

When data are grouped, each class is represented by its **midpoint**, so
$$
\bar x\approx\frac{\sum f_im_i}{\sum f_i},
$$
where $m_i$ is the midpoint of class $i$. The result is an **estimate**, because we do not know where the values lie within each class. An estimate from grouped data is usually close to the true mean, because errors from different classes tend to cancel, but it will not match it exactly, and a question that asks for an exact value cannot be answered from a grouped table.

### Variance and standard deviation

The **standard deviation** measures how far values typically lie from the mean. For a data set or frequency table with mean $\mu$,
$$
\sigma=\sqrt{\frac{\sum f_i(x_i-\mu)^2}{n}},
$$
and the **variance** is $\sigma^{2}$. The idea is simple. Take each value's distance from the mean, square it so that positive and negative distances do not cancel, average the squares, and take the square root to return to the original units. An equivalent form that is easier by hand is
$$
\sigma^{2}=\frac{\sum f_ix_i^{2}}{n}-\mu^{2}.
$$
The standard deviation is zero only when all values are equal, and it is never negative. It has the same units as the data, while the variance has squared units. In the examination you will almost always use the calculator, which gives $\sigma_x$, the population standard deviation, and you should use that value. (The calculator also shows $s_x$, which divides by $n-1$ and belongs to sampling theory beyond this course; do not use it unless told to.) A large standard deviation means the data are widely spread, and a small one means they are tightly clustered around the mean.

### Effect of transformations

Suppose every value is changed to $y=ax+b$. Then
$$
\bar y=a\bar x+b,\qquad \sigma_y=|a|\,\sigma_x,\qquad \sigma_y^{2}=a^{2}\sigma_x^{2}.
$$
Adding a constant $b$ moves every value, and the mean, by $b$ but leaves the spread unchanged, because the distances between values stay the same. Multiplying by $a$ stretches the data about zero, so the mean is multiplied by $a$ and the spread by $|a|$. The variance is multiplied by $a^{2}$. A common application is a change of units: converting temperatures from Celsius to Fahrenheit uses $F=1.8C+32$, so the standard deviation in Fahrenheit is $1.8$ times that in Celsius.

### Combining groups and adding values

If a group of $n_1$ values has mean $\bar x_1$ and another group of $n_2$ values has mean $\bar x_2$, the combined mean is the **weighted** mean
$$
\bar x=\frac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}.
$$
You cannot average the two means directly unless the groups have the same size. Adding a new value equal to the current mean leaves the mean unchanged and reduces the standard deviation, because the sum of squared distances stays the same while $n$ grows. Adding a value far from the mean increases the standard deviation.

## Worked examples

### Example 1 (list, 3 marks)

Find the mean, median and mode of $4,7,7,9,10,12,15$.

The sum is $4+7+7+9+10+12+15=64$ and $n=7$, so the mean is $\tfrac{64}{7}=9.14$ to three significant figures. The data are already in order and there are seven values, so the median is the fourth value, $9$. The value $7$ appears twice and the others once, so the mode is $7$. The mean is above the median here because $15$ is a little far from the others.

### Example 2 (frequency table, 5 marks)

A survey records the number of books read in a month by 30 students: the values $1,2,3,4,5$ occur with frequencies $3,7,10,6,4$. Find the mean and the standard deviation.

The total is $\sum f=30$ and $\sum fx=3+14+30+24+20=91$, so $\bar x=\tfrac{91}{30}=3.03$. For the standard deviation use $\sum fx^{2}=3(1)+7(4)+10(9)+6(16)+4(25)=3+28+90+96+100=317$. Then
$$
\sigma^{2}=\frac{317}{30}-\left(\frac{91}{30}\right)^{2}=10.5667-9.2011=1.3656,
$$
so $\sigma=\sqrt{1.3656}=1.17$ to three significant figures. A calculator gives the same result if you enter the values in one list and the frequencies in a second list and use the frequency option. Check that the calculator's $n$ equals $30$, because forgetting to attach the frequency list is the usual error.

### Example 3 (grouped data, 5 marks)

Estimate the mean and standard deviation for these 60 times in minutes: classes $0$ to $10$, $10$ to $20$, $20$ to $30$, $30$ to $40$ and $40$ to $50$ with frequencies $4,11,23,17,5$.

The midpoints are $5,15,25,35,45$. Then $\sum fm=20+165+575+595+225=1580$, so $\bar x\approx\tfrac{1580}{60}=26.3$. For the spread, $\sum fm^{2}=4(25)+11(225)+23(625)+17(1225)+5(2025)=100+2475+14375+20825+10125=47900$. So
$$
\sigma^{2}\approx\frac{47900}{60}-26.33^{2}=798.33-693.44=104.89,
$$
and $\sigma\approx10.2$. The modal class is $20$ to $30$, which has the highest frequency, $23$. Always say "estimate" for grouped results.

### Example 4 (transformations, 3 marks)

A set of scores has mean $12$ and standard deviation $3$. Every score is doubled and then increased by $5$. Find the new mean, standard deviation and variance.

The transformation is $y=2x+5$. The new mean is $2(12)+5=29$. The standard deviation is multiplied by $|2|$ and is not affected by the $5$, so it is $2\times3=6$. The variance is $6^{2}=36$, which is also $2^{2}\times3^{2}=4\times9$. The marks are for the mean, for recognising that the added constant does not change the spread, and for the standard deviation.

### Example 5 (missing frequency, 4 marks)

The values $10,20,30,40$ have frequencies $4,a,8,3$ and the mean is $25$. Find $a$.

The total frequency is $15+a$ and the total of $fx$ is $40+20a+240+120=400+20a$. Setting the mean equal to $25$ gives
$$
\frac{400+20a}{15+a}=25\;\Rightarrow\;400+20a=375+25a\;\Rightarrow\;5a=25\;\Rightarrow\;a=5.
$$
Check: with $a=5$ the total is $20$ and $\sum fx=500$, so the mean is $25$. Always write the equation first and check by substitution afterwards.

### Example 6 (combining groups, 3 marks)

A class of $12$ students has a mean mark of $15$ and a second class of $8$ students has a mean mark of $20$. Find the mean of all $20$ students.

The sum for the first class is $12\times15=180$ and for the second it is $8\times20=160$. The combined total is $340$ over $20$ students, giving a mean of $17$. Notice that this is closer to $15$ than to $20$, because the first class is larger. Simply averaging $15$ and $20$ to get $17.5$ would be wrong.

### Example 7 (adding a value, 4 marks)

Ten values have mean $8$ and standard deviation $2$. An eleventh value, equal to $8$, is added. Find the new mean and standard deviation.

The mean stays $8$, because the new value equals it. For the spread, the original sum of squared deviations is $n\sigma^{2}=10\times4=40$. The new value contributes $(8-8)^{2}=0$, so the sum is still $40$, but now it is shared over $11$ values:
$$
\sigma_{\text{new}}=\sqrt{\frac{40}{11}}=1.91.
$$
So the standard deviation has decreased from $2$ to about $1.91$. This agrees with the idea that adding a typical value makes the data look more tightly clustered.

## Using your GDC

On most calculators, open the statistics editor, type the values in one list and, if you have a frequency table, the frequencies in a second list. Choose one-variable statistics and tell the calculator which list holds the values and which holds the frequencies. The output lists $\bar x$, $\sum x$, $\sum x^{2}$, $\sigma_x$ (the population standard deviation), $s_x$, $n$ and the five-number summary. Use $\sigma_x$ for this course. For grouped data, enter the class midpoints as the values and the class frequencies as the frequencies, and remember to describe the results as estimates. Check $n$ against the known total, since a mismatch means an entry error or a missing frequency. If a question needs the variance, square $\sigma_x$ from the full-precision value in the calculator memory, not from a rounded copy, to avoid losing accuracy.

## Common mistakes

- Using $s_x$ instead of $\sigma_x$, or dividing by $n-1$ when the question expects $n$.
- Forgetting to enter the frequency list, so that every value counts once.
- Using class boundaries rather than midpoints when estimating the mean of grouped data.
- Averaging two group means without weighting them by group size.
- Thinking that adding a constant changes the standard deviation, or that multiplying by a negative number gives a negative standard deviation. The standard deviation uses $|a|$.
- Squaring the standard deviation incorrectly after a transformation, for example using $a\sigma^{2}$ instead of $a^{2}\sigma^{2}$.
- Reporting a grouped mean as exact, or calling the modal class "the mode".
- Using the mean to describe skewed data with extreme values when the median would be fairer.

## Exam technique and command terms

**Calculate** and **find** require the number, with working such as the sum and the count, so that a slip in a calculator entry still earns the method mark. **Estimate** is the cue for grouped data and midpoints. **Write down** means the answer can be read from the calculator screen with no working. **Interpret** and **comment** need a sentence in context: "the standard deviation of $1.17$ books shows the students' reading is fairly similar" is better than "it is small". When asked about the effect of a transformation, state the rule and apply it to the given numbers, and when asked about the effect of adding a value, compare the new sum of squared deviations with the old. Write mean values to three significant figures unless the question says otherwise, keep extra digits in intermediate steps, and show the equation you solve for any missing frequency.

## Connections

The mean and standard deviation are the two parameters of the normal distribution in SL 4.9, and the transformation rules are exactly what lets you standardise a value in SL 4.12 with $z=\tfrac{x-\mu}{\sigma}$. In SL 4.4 the same two statistics appear in the formula for the correlation coefficient. In SL 4.7 and AHL 4.14 the idea of a mean generalises to the **expected value** of a random variable, and the variance formula $\sigma^{2}=E(X^{2})-\mu^{2}$ is the same as the shortcut used here with probabilities in place of relative frequencies. The effect of outliers on the mean returns the point made in SL 4.1 and SL 4.2 about choosing summaries.

## Check your understanding

1. Find the mean, median and mode of $2,5,5,8,10$.
2. The values $0,1,2,3,4$ occur with frequencies $2,5,8,3,2$. Find the mean and the standard deviation.
3. For the classes $0\le x<20$, $20\le x<40$ and $40\le x<60$ with frequencies $6,14,10$, estimate the mean and state the modal class.
4. A set of data has mean $50$ and standard deviation $8$. Each value is replaced by $0.5x-3$. Find the new mean and standard deviation.
5. The values $1,2,3,4$ have frequencies $5,k,6,4$ and the mean is $2.5$. Find $k$.
6. A group of $20$ students has mean $60$ and a group of $30$ students has mean $70$. Find the combined mean.
7. A data set is $3,3,3,3$. State its standard deviation and explain.
8. The standard deviation of a data set is $3.2$. State the variance.
9. For ten values, $\sum x=100$ and $\sum x^{2}=1160$. Find the mean and the standard deviation.
10. House prices in a town are strongly skewed to the right. State which measure of centre is more appropriate and why.

### Answers

1. The mean is $\tfrac{30}{5}=6$. The median is $5$. The mode is $5$.
2. $n=20$, $\sum fx=0+5+16+9+8=38$, so the mean is $1.9$. $\sum fx^{2}=0+5+32+27+32=96$, so $\sigma^{2}=\tfrac{96}{20}-1.9^{2}=4.8-3.61=1.19$ and $\sigma=1.09$.
3. The midpoints are $10,30,50$, so $\bar x\approx\tfrac{60+420+500}{30}=32.7$. The modal class is $20\le x<40$.
4. The mean is $0.5(50)-3=22$. The standard deviation is $0.5\times8=4$.
5. $\tfrac{5+2k+18+16}{15+k}=2.5$ gives $39+2k=37.5+2.5k$, so $0.5k=1.5$ and $k=3$.
6. $\tfrac{20(60)+30(70)}{50}=\tfrac{3300}{50}=66$.
7. The standard deviation is $0$, because every value equals the mean and so every deviation is zero.
8. The variance is $3.2^{2}=10.24$.
9. The mean is $\tfrac{100}{10}=10$. $\sigma^{2}=\tfrac{1160}{10}-10^{2}=116-100=16$, so $\sigma=4$.
10. The median. A few very expensive houses pull the mean upward, so the mean overstates a typical price, whereas the median is not affected by extreme values.

## Summary

- The mean is $\tfrac{\sum fx}{\sum f}$, the median is the middle value and the mode is the most frequent. Use the median for skewed data and the mode for categories.
- For grouped data use class midpoints, and call every result an estimate. The modal class has the highest frequency (or density).
- $\sigma=\sqrt{\tfrac{\sum f(x-\mu)^{2}}{n}}$ and $\sigma^{2}=\tfrac{\sum fx^{2}}{n}-\mu^{2}$. Use $\sigma_x$ from the calculator.
- Under $y=ax+b$: mean $a\bar x+b$, standard deviation $|a|\sigma$, variance $a^{2}\sigma^{2}$. Adding a constant does not change the spread.
- Combine group means by weighting with group sizes: $\tfrac{n_1\bar x_1+n_2\bar x_2}{n_1+n_2}$.
- A large standard deviation means widely spread data. Interpret it in context.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists weighted mean under SL 4.3. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
