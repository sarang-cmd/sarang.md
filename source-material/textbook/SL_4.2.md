# Histograms, cumulative frequency and box plots

> **SL 4.2 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- construct and read frequency histograms, including histograms with unequal class widths, using frequency density;
- build a cumulative frequency table and draw and read a cumulative frequency graph;
- estimate the median, the quartiles, other percentiles and the interquartile range from a cumulative frequency graph or table;
- find the five-number summary of a data set and draw a box-and-whisker diagram, marking outliers when required;
- use the $1.5\times\mathrm{IQR}$ rule to identify outliers on a box plot;
- compare two distributions in context, using the centre, the spread and the shape, and describe skewness from a box plot or histogram;
- explain why grouped data give only estimates.

## Why this topic matters

A list of two hundred numbers tells you nothing at a glance. The point of a statistical diagram is to show the *shape* of the data: where most of it sits, how widely it is spread, whether it is lopsided, and whether any values are unusual. Each of the three diagrams in this chapter does a different job. A histogram shows the shape of a distribution of continuous data. A cumulative frequency graph answers questions of the form "how many values are below this?" and gives estimates of the median, the quartiles and any percentile. A box plot compresses a data set into five numbers so that two or more groups can be compared side by side.

In the examination these diagrams appear almost every year, usually in a multi-part question that begins with a table, asks for a cumulative frequency column, then asks you to read an estimate from the graph and finally to compare two box plots. The marks are very accessible, but they depend on precision about three things: class boundaries, the use of frequency density when the widths differ, and the wording of comparisons. A comparison that says "group A is higher" scores nothing; a comparison that says "the median of A is 25 compared with 24 for B, but the interquartile range of A is 20 compared with 6, so B is far more consistent" scores full marks. This chapter shows how to produce that kind of answer.

## Core ideas

### Frequency tables and class intervals

When data are continuous, or when there are many different values, we group them into **classes**. The class $10\le x<20$ includes $10$ but not $20$, and its **class width** is $20-10=10$. The **midpoint** of a class is the average of its two boundaries, here $15$. Once data are grouped, individual values are lost, so every statistic computed from the table is an **estimate**. If the data were rounded when recorded, the true boundaries must be used: values given to the nearest centimetre in the class $150$ to $159$ really lie in $149.5\le h<159.5$.

### Histograms and frequency density

A **histogram** is a bar chart for continuous data in which the bars touch and the *area* of each bar represents the frequency. The horizontal axis is a continuous scale. If all class widths are equal, the height can be the frequency itself. If the widths differ, the height must be the **frequency density**,
$$
\text{frequency density}=\frac{\text{frequency}}{\text{class width}},
$$
so that frequency equals the area, $\text{frequency}=\text{density}\times\text{width}$. Plotting raw frequencies for unequal classes would exaggerate the wide ones. A histogram has no gaps between bars, and the vertical axis is labelled "frequency density", not "frequency". The shape is **symmetric** if the left and right sides mirror each other, **positively skewed** if there is a long tail to the right, and **negatively skewed** if the tail is to the left.

### Cumulative frequency

The **cumulative frequency** at a value is the number of data items less than or equal to it. It is built by adding the frequencies in order, and it is always paired with the *upper class boundary*. For the classes $0$ to $10$, $10$ to $20$, and so on, the cumulative frequency at $10$ is the frequency of the first class, at $20$ it is the first two classes added, and so on. The final cumulative frequency equals the total number of data items.

A **cumulative frequency graph** plots the points (upper boundary, cumulative frequency) and joins them with a smooth curve or with straight line segments. It is always increasing. You also plot the starting point, which has cumulative frequency $0$ at the lower boundary of the first class.

### Median, quartiles and percentiles from the graph

For $n$ data items, the **median** is estimated at cumulative frequency $\tfrac{n}{2}$, the **lower quartile** $Q_1$ at $\tfrac{n}{4}$ and the **upper quartile** $Q_3$ at $\tfrac{3n}{4}$. In general the $p$th **percentile** is at cumulative frequency $\tfrac{p}{100}n$. Read across from that height to the curve and down to the horizontal axis. When working from a table instead of a graph, assume the data are spread evenly inside the class that contains the target position, which is called **linear interpolation**:
$$
\text{estimate}=L+\frac{t-C}{f}\times w,
$$
where $L$ is the lower boundary of that class, $t$ is the target position, $C$ is the cumulative frequency up to $L$, $f$ is the frequency of the class and $w$ is its width. The **interquartile range** is $\mathrm{IQR}=Q_3-Q_1$ and the **range** is the largest value minus the smallest. The interquartile range measures the spread of the middle half of the data and is not affected by extreme values.

### Box-and-whisker diagrams

The **five-number summary** is the minimum, $Q_1$, the median, $Q_3$ and the maximum. A **box plot** draws a box from $Q_1$ to $Q_3$ with a line at the median, and whiskers that extend to the smallest and largest values that are not outliers. A value is an **outlier** if it is more than $1.5\times\mathrm{IQR}$ below $Q_1$ or above $Q_3$. Outliers are marked with a cross, and the whisker stops at the most extreme non-outlier. Several box plots drawn on a common scale allow comparison.

From a box plot you can read skewness. If the median is closer to $Q_1$ than to $Q_3$, or the upper whisker is longer, the data are positively skewed. If the reverse holds, they are negatively skewed. Each quarter of the data lies in a section of the diagram: one quarter below $Q_1$, one quarter between $Q_1$ and the median, and so on, regardless of how long each section looks.

### Comparing distributions

A good comparison has three parts and always uses numbers. The **centre**: compare medians (or means), saying which is larger and by how much. The **spread**: compare the interquartile ranges (or standard deviations) and say which group is more consistent. The **shape**: comment on skewness and on any outliers. Finish with a sentence in the context of the question, for example "so the second bus company is more reliable".

## Worked examples

### Example 1 (histogram with unequal classes, 4 marks)

The times, in minutes, that 50 customers spent in a shop are summarised below. Find the frequency density of each class.

| Time $t$ | $0\le t<10$ | $10\le t<20$ | $20\le t<30$ | $30\le t<40$ | $40\le t<60$ |
| --- | --- | --- | --- | --- | --- |
| Frequency | 5 | 12 | 18 | 10 | 5 |

The class widths are $10,10,10,10$ and $20$. Dividing each frequency by its width gives densities of $0.5$, $1.2$, $1.8$, $1.0$ and $\tfrac{5}{20}=0.25$. The last class is twice as wide as the others, so its bar must be only a quarter as tall as its frequency would suggest. The area of the last bar is $0.25\times20=5$, which is the frequency, and checking that area equals frequency is a good way to catch a slip. The marks are for finding the class widths, for dividing correctly, and for the last density, which is the one candidates miss.

### Example 2 (reading a histogram, 3 marks)

On a histogram a bar covers $15\le x<25$ and has height $2.4$ on the frequency density axis. Another bar covers $25\le x<30$ with height $3.2$. Find the frequency in each class.

The frequency is the area, density times width. For the first bar the width is $10$, so the frequency is $2.4\times10=24$. For the second the width is $5$, so the frequency is $3.2\times5=16$. Notice that the taller bar has the smaller frequency, because it is narrower. This is the reason histograms use area.

### Example 3 (quartiles by interpolation, 6 marks)

Use the data of Example 1 to estimate the median, the lower quartile, the upper quartile and the interquartile range.

The cumulative frequencies at the upper boundaries $10,20,30,40,60$ are $5,17,35,45,50$. With $n=50$, the median is at position $25$. This lies in the class $20\le t<30$, which starts at cumulative frequency $17$, so
$$
\text{median}=20+\frac{25-17}{18}\times10=20+4.44=24.4.
$$
The lower quartile is at position $12.5$, in the class $10\le t<20$ whose cumulative frequency at its start is $5$:
$$
Q_1=10+\frac{12.5-5}{12}\times10=16.25.
$$
The upper quartile is at position $37.5$, in the class $30\le t<40$ with cumulative frequency $35$ at its start:
$$
Q_3=30+\frac{37.5-35}{10}\times10=32.5.
$$
So $\mathrm{IQR}=32.5-16.25=16.25$. All values are estimates because the data were grouped. The marks are for the cumulative frequencies, for the three positions, and for using interpolation correctly.

### Example 4 (reading the cumulative frequency graph, 3 marks)

Use the same data to estimate the number of customers who spent more than 35 minutes in the shop.

The cumulative frequency at $30$ is $35$, and the class $30$ to $40$ contains $10$ customers, spread evenly. At $35$, which is halfway through the class, the cumulative frequency is $35+\tfrac12\times10=40$. So $40$ customers spent less than 35 minutes, and the number who spent more is $50-40=10$. On a graph you would draw a vertical line from $35$ up to the curve and read across to about $40$; the answer must always be a subtraction from the total when the question says "more than".

### Example 5 (box plot and outliers, 5 marks)

A data set has minimum $2$, lower quartile $5$, median $8$, upper quartile $11$ and maximum $20$. Decide whether the maximum is an outlier and whether the data are skewed.

The interquartile range is $11-5=6$, so $1.5\times6=9$. The upper boundary for outliers is $11+9=20$. The maximum equals $20$ but is not *greater* than $20$, so it is **not** an outlier, and the upper whisker extends all the way to $20$. The lower boundary is $5-9=-4$, and the minimum $2$ is above it. For the skew, the median minus $Q_1$ is $3$ while $Q_3$ minus the median is also $3$, so the box is symmetric, but the upper whisker is $20-11=9$ long while the lower whisker is $5-2=3$ long, so the overall shape is slightly positively skewed. The boundary case is deliberate: outliers are defined with a strict inequality.

### Example 6 (comparing two box plots, 4 marks)

Two machines fill bags. Machine A has summary $(10,20,25,40,50)$ and machine B has $(15,22,24,28,35)$, each given as minimum, $Q_1$, median, $Q_3$ and maximum, in grams above a target. Compare the machines.

The medians are $25$ and $24$, which are almost equal, so both centre at about the same amount. The interquartile ranges are $40-20=20$ for A and $28-22=6$ for B, so B is much more consistent. The ranges are $40$ and $20$, which supports this. For A the median minus $Q_1$ is $5$ and $Q_3$ minus the median is $15$, so A is positively skewed. In context, machine B delivers a more predictable weight and would be preferred if consistency matters.

### Example 7 (a percentile, 4 marks)

For a cumulative frequency table with upper boundaries $10,20,30,40,50$ and cumulative frequencies $4,15,38,55,60$, estimate the 90th percentile.

The position is $0.9\times60=54$. The cumulative frequency passes $54$ in the class $30$ to $40$, which starts at $38$ and contains $17$ values. So
$$
P_{90}=30+\frac{54-38}{17}\times10=39.4.
$$
This means that about 90% of the data lie below 39.4. Notice that the method is the same for every percentile: find the position, find the class, interpolate.

## Using your GDC

For a histogram, enter the class midpoints in one list and the frequencies in another and choose a histogram plot. Check the window carefully: calculators often assume equal widths, so for unequal classes you must work out frequency density by hand and plot densities, or simply sketch the histogram on paper. For a box plot, enter the raw data (or midpoints with frequencies) and choose the modified box plot, which shows outliers as separate points and uses the $1.5\times\mathrm{IQR}$ rule. Use the one-variable statistics screen to read the minimum, $Q_1$, the median, $Q_3$ and the maximum. For grouped data, the screen values for the quartiles are for the midpoints, not interpolated estimates, so state which method you used. A cumulative frequency graph can be drawn by plotting upper boundaries against cumulative frequencies in a scatter plot and joining the points, but in an examination you usually draw it by hand on the grid supplied.

## Common mistakes

- Plotting frequency on the vertical axis of a histogram when the classes have different widths. Use frequency density, and check that area equals frequency.
- Plotting cumulative frequency against the class midpoint or lower boundary. It must be the upper boundary.
- Leaving out the starting point $(\text{lower boundary},0)$ and drawing the curve from the first upper boundary.
- Reading the median at $n$ instead of at $\tfrac{n}{2}$, or reading the quartiles at $\tfrac14$ and $\tfrac34$ of the *range* rather than of the *total frequency*.
- Describing a box plot by the length of the box alone. The quarter of the data in each section is the same, so a long section means a wide spread there, not more data.
- Calling a value an outlier when it equals the boundary. The rule is a strict inequality.
- Comparing without numbers, or comparing the maximums and minimums only. Always compare a measure of centre and a measure of spread, with figures.
- Giving an estimate from grouped data as if it were exact.

## Exam technique and command terms

**Draw** and **sketch** need clear labelled axes, a sensible scale and the plotted points. **Estimate** tells you that grouped data are involved and that a graph reading or an interpolation is expected; give your answer to a sensible accuracy, normally three significant figures. **Compare** requires a statement about each group and a link, using words such as "whereas" or "compared with". **Hence** means use your earlier result. **Interpret** asks what the number means in the context of the data, for example "half the customers stayed less than 24.4 minutes". If you read from a graph, draw construction lines in pencil so that the examiner can see where your reading came from; a correct line with a slightly inaccurate reading still earns the method mark. For outlier questions show $Q_1$, $Q_3$, the interquartile range, both boundaries and a conclusion.

## Connections

The quartiles and the outlier rule were introduced in SL 4.1, and this chapter turns them into pictures. The next chapter, SL 4.3, replaces the median and interquartile range with the mean and standard deviation, which use all the data and respond to outliers, so you will often be asked which pair of summaries suits a distribution. Cumulative frequency also connects to probability: the area under a density curve up to a point is a cumulative probability, which is exactly how the normal distribution in SL 4.9 is used, and the percentile idea returns in the inverse normal calculations of SL 4.12. In AHL 4.14 the cumulative distribution function of a continuous random variable is the continuous version of the cumulative frequency graph.

## Check your understanding

1. A class $10\le x<15$ has frequency $18$. Find its frequency density.
2. A histogram bar has width $4$ and height $2.5$ on the frequency density axis. Find the frequency.
3. A cumulative frequency table has upper boundaries $10,20,30,40,50$ and cumulative frequencies $4,15,38,55,60$. Estimate the median, the lower quartile, the upper quartile and the interquartile range.
4. A data set has summary minimum $4$, $Q_1=12$, median $15$, $Q_3=20$, maximum $38$. Decide whether either extreme value is an outlier.
5. Machine A has summary $(10,20,25,40,50)$ and machine B has $(15,22,24,28,35)$. State which has the larger interquartile range and what that implies.
6. For the table in question 3, estimate the number of values greater than $35$.
7. Heights recorded to the nearest centimetre are grouped as $150$ to $159$. State the true class boundaries.
8. For the table in question 3, estimate the mean using class midpoints.
9. For the table in question 3, estimate the 90th percentile.
10. Explain why the interquartile range is preferred to the range when a data set contains an extreme value.

### Answers

1. Density $=\tfrac{18}{5}=3.6$.
2. Frequency $=2.5\times4=10$.
3. The total is $60$. Median at position $30$: $20+\tfrac{30-15}{23}\times10=26.5$. $Q_1$ at position $15$ is exactly the upper boundary $20$, so $Q_1=20$. $Q_3$ at position $45$: $30+\tfrac{45-38}{17}\times10=34.1$. $\mathrm{IQR}=34.1-20=14.1$.
4. $\mathrm{IQR}=8$ and $1.5\times8=12$. The boundaries are $20+12=32$ and $12-12=0$. The maximum $38$ is above $32$, so it is an outlier. The minimum $4$ is above $0$, so it is not.
5. Machine A has $\mathrm{IQR}=20$ and machine B has $\mathrm{IQR}=6$. A has the larger interquartile range, so A is more variable and B is more consistent.
6. The class $30$ to $40$ has $17$ values and the cumulative frequency at $35$ is $38+0.5\times17=46.5$. So about $60-46.5=13.5$, or roughly $14$, values exceed $35$.
7. The values were rounded to the nearest centimetre, so the class is $149.5\le h<159.5$.
8. The midpoints are $5,15,25,35,45$ with frequencies $4,11,23,17,5$. The mean is $\tfrac{5(4)+15(11)+25(23)+35(17)+45(5)}{60}=\tfrac{1580}{60}=26.3$ to three significant figures.
9. The position is $54$, in the class $30$ to $40$: $30+\tfrac{54-38}{17}\times10=39.4$.
10. The range uses only the two most extreme values, so a single extreme value changes it a lot. The interquartile range uses the middle half of the data and is not affected by values in the tails, so it gives a more stable measure of spread.

## Summary

- Histograms for continuous data have touching bars whose *area* equals the frequency. For unequal class widths use frequency density, which is frequency divided by class width.
- Cumulative frequency is plotted against the upper class boundary and starts at $0$ at the lower boundary of the first class.
- The median, $Q_1$ and $Q_3$ are read at positions $\tfrac{n}{2}$, $\tfrac{n}{4}$ and $\tfrac{3n}{4}$, and the $p$th percentile at $\tfrac{p}{100}n$. Interpolate inside a class with $L+\tfrac{t-C}{f}w$.
- $\mathrm{IQR}=Q_3-Q_1$. A value is an outlier if it lies more than $1.5\times\mathrm{IQR}$ beyond a quartile, with a strict inequality.
- A box plot shows the five-number summary. Compare distributions with a statement about centre, spread and shape, always using numbers and context.
- All values read from grouped data are estimates.
