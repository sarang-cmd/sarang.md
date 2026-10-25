# Data reliability and sampling

> **SL 4.1 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- distinguish a population from a sample, and a census from a sample survey, and explain why samples are normally used;
- classify data as categorical, discrete numerical or continuous numerical, and say which summaries make sense for each type;
- describe and apply simple random, systematic, stratified, quota and convenience sampling, and state the strengths and weaknesses of each;
- calculate stratified sample sizes and systematic sampling intervals, and round them sensibly;
- identify sources of bias, including selection bias, non-response, leading questions and measurement error;
- explain the difference between reliability and validity, and judge whether data can be trusted;
- identify outliers using the rule that a value is an outlier if it lies more than $1.5\times\mathrm{IQR}$ beyond a quartile, and discuss what to do with them.

## Why this topic matters

Almost every statement you meet in the news about opinions, health, prices or performance is based on a sample, not on everyone. A political poll asks perhaps a thousand people and speaks for millions. A drug trial treats a few hundred patients and is used to decide treatment for a whole country. A factory tests a handful of items from each batch and decides whether the batch is safe to ship. The mathematics in later chapters, such as mean, standard deviation, correlation, confidence in a probability, and the normal distribution, all quietly assume that the data were gathered fairly. If they were not, the most careful calculation in the world answers the wrong question. This chapter is therefore about the step that comes before any arithmetic: where the numbers come from and how far they can be trusted.

In the examination, questions on this topic are short and are often worth only two to four marks, but they are surprisingly easy to lose marks on, because they ask for reasoning in words rather than a calculation. A typical question gives a scenario, such as a survey carried out outside a sports shop, and asks you to identify the sampling method and explain one source of bias. A strong answer is specific to the context: it says *who* is missing from the sample and *why* that would change the result. This chapter gives you the vocabulary and the habits to write such answers quickly. It also contains the numerical pieces that can be examined, namely stratified allocations, systematic intervals and the outlier rule, which you will meet again when you draw box plots in the next chapter.

## Core ideas

### Populations, samples and censuses

The **population** is the complete collection of individuals or items you want to learn about. It might be all students in a school, all light bulbs made this week, or all adults in a country. A **census** collects data from every member of the population. It gives exact answers but is usually too slow, too costly or impossible, for example when testing destroys the item, as with checking how long a battery lasts. A **sample** is a subset of the population, and the number of items in it is the **sample size**. A **parameter** describes the population, while a **statistic** describes the sample. We use statistics to estimate parameters. For example, the mean height of 40 students is a statistic that estimates the mean height of all students in the school, which is a parameter.

A sample is useful only if it is **representative**, meaning that it reflects the population in the features that matter. A larger sample reduces random variation, but size does not repair bias. A biased sample of 10,000 people is still biased, and it can be more dangerous than a small one because its size makes it look trustworthy.

### Types of data

**Categorical** (qualitative) data place items into groups, such as favourite colour or country. Only counts, proportions and the mode make sense. **Numerical** (quantitative) data are measured or counted. **Discrete** data take separate values, usually whole numbers from counting, such as the number of siblings. **Continuous** data can take any value in an interval, usually from measuring, such as height or time. Continuous data are always recorded to a finite accuracy, so a height of 172 cm really stands for an interval such as $171.5\le h<172.5$. This matters when you set up class intervals for a histogram in the next chapter.

### Sampling methods

**Simple random sampling.** Every member of the population, and every possible group of the chosen size, has an equal chance of being picked. In practice you number the population and use random numbers from a calculator or software. It is unbiased in principle, but it needs a complete list of the population, and by chance it can still give an unbalanced sample.

**Systematic sampling.** Choose a random starting point and then select every $k$th member from a list. If the population has $N$ members and you want $n$ of them, the interval is $k=N/n$. It is quick and spreads the sample across the list. It can fail if the list has a hidden pattern that matches the interval, for example sampling every seventh day of a diary and always landing on a Saturday.

**Stratified sampling.** Divide the population into non-overlapping groups called **strata** that differ in a way that matters, such as year group or region, then take a simple random sample from each stratum. For a proportional sample,
$$
\text{sample from stratum}=\frac{\text{size of stratum}}{\text{size of population}}\times\text{total sample size}.
$$
It guarantees that every group is represented in the right proportion, so it is more precise than a simple random sample when the strata really differ. It needs information about the strata in advance.

**Quota sampling.** The interviewer is told to find a fixed number of people from each category, for example 30 men and 30 women over 50, but chooses who to ask. It looks like stratified sampling and is cheap, but because the choice of individuals is not random it can be biased: interviewers tend to approach friendly, accessible people.

**Convenience sampling.** Use whoever is easiest to reach, such as the first 30 people who pass you. It is fast and cheap and almost always biased, so conclusions should be treated with great caution.

### Bias and reliability

**Bias** is a systematic tendency for the sample to differ from the population in one direction. Common sources include: **selection bias** (the way people are chosen excludes some groups, such as a phone survey that reaches only people who answer landlines at midday); **non-response bias** (people who do not reply differ from those who do, as with voluntary online polls where only strong opinions are recorded); **leading or loaded questions** (wording that pushes towards an answer); and **measurement error** (a faulty or inconsistent instrument).

Two words are often confused. Data are **reliable** if repeating the measurement under the same conditions gives consistent results. A scale that reads 70.2, 70.1, 70.3 kg for the same person is reliable. Data are **valid** if they actually measure what they claim to measure. If that scale is wrongly zeroed and always reads 2 kg too high, it is reliable but not accurate. A question that asks about *intending* to vote does not measure how people *will* vote, so its validity is limited. Reliability is needed for validity, but reliability alone is not enough.

### Outliers

An **outlier** is a data value that lies far from the rest. In this course an outlier is a value that is more than $1.5\times\mathrm{IQR}$ above the upper quartile or below the lower quartile. That is, $x$ is an outlier if
$$
x<Q_1-1.5(Q_3-Q_1)\quad\text{or}\quad x>Q_3+1.5(Q_3-Q_1).
$$
The quartiles come from your calculator, where the lower and upper halves of the ordered data are treated separately, so you should use the calculator's values consistently. An outlier is a prompt to investigate, not an instruction to delete. It may be a recording mistake, which should be corrected, or a genuine extreme value, which should be kept and discussed. Outliers affect the mean and the range strongly, but the median and the interquartile range hardly at all.

## Worked examples

### Example 1 (stratified sample, 3 marks)

A school has 1,200 students: 420 in Year 9, 380 in Year 10 and 400 in Year 11. A stratified sample of 60 students is to be taken. Find the number from each year.

The proportion of the population in Year 9 is $\tfrac{420}{1200}$, so the Year 9 sample is $\tfrac{420}{1200}\times60=21$. For Year 10 it is $\tfrac{380}{1200}\times60=19$, and for Year 11 it is $\tfrac{400}{1200}\times60=20$. The three numbers add to $60$, as they must. The marks are one for the method of proportional allocation, one for the first value and one for the other two values.

### Example 2 (rounding in a stratified sample, 4 marks)

A company has 1,000 employees: 345 in sales, 270 in production and 385 in administration. A stratified sample of 50 is needed. Find the number from each department.

The exact values are $\tfrac{345}{1000}\times50=17.25$, $\tfrac{270}{1000}\times50=13.5$ and $\tfrac{385}{1000}\times50=19.25$. These must be whole numbers. Rounding to the nearest integer gives $17$, $14$ and $19$, which add to $50$, so the allocation works. Whenever rounding is needed, check that the total is still the required sample size; if it is not, adjust the stratum with the largest rounding remainder.

### Example 3 (systematic sampling, 3 marks)

A list holds 2,400 customers and a systematic sample of 80 is required, starting at customer number 7. Find the sampling interval and the number of the last customer chosen.

The interval is $k=\tfrac{2400}{80}=30$. The chosen customers are numbers $7,37,67,\dots$, which form an arithmetic sequence with first term $7$ and common difference $30$. The 80th term is $7+79\times30=2377$. So the last customer chosen is number $2377$. Note that this is below $2400$, as it should be.

### Example 4 (identifying and criticising a method, 4 marks)

A researcher wants the opinions of local residents about a new park. She stands outside a sports shop on Saturday morning and asks the first 50 people who walk past. (a) Name the sampling method. (b) Give one reason the sample may be biased.

(a) This is **convenience sampling**, because the people are chosen only because they were easy to reach. (b) People outside a sports shop are more likely to be active and in favour of outdoor facilities than the typical resident, and the Saturday morning timing excludes people who work then or do not visit the shopping area. Because these groups are missing, the sample over-represents supporters of the park. A good answer names the missing group and the direction of the effect; a vague answer such as "it is not random" earns little.

### Example 5 (outliers, 5 marks)

The times, in months, that ten employees took to finish a training task are $3, 5, 6, 7, 8, 9, 10, 12, 13, 40$. Determine whether $40$ is an outlier and find the mean with and without it.

Use the ordered data. The lower half is $3,5,6,7,8$ with median $6$, so $Q_1=6$. The upper half is $9,10,12,13,40$ with median $12$, so $Q_3=12$. The interquartile range is $12-6=6$, and $1.5\times6=9$. The upper boundary is $12+9=21$ and the lower boundary is $6-9=-3$. Since $40>21$, the value $40$ is an outlier, and nothing is below $-3$. The sum of all ten values is $113$, so the mean is $11.3$. Without the outlier the sum is $73$ over nine values, giving $\tfrac{73}{9}\approx8.11$. One value has changed the mean by more than three units, while the median only moves from $8.5$ to $8$. That contrast is a typical comment: the mean is sensitive to outliers and the median is resistant.

### Example 6 (classifying data, 3 marks)

State whether each is categorical, discrete or continuous: (i) the number of goals in a match; (ii) the time to run 100 m; (iii) a student's favourite subject.

(i) Goals are counted in whole numbers, so they are **discrete**. (ii) Time is measured and can take any value in an interval, so it is **continuous**. (iii) A subject is a label, so the data are **categorical**. A common slip is to call something discrete because it is recorded as a whole number, such as height to the nearest centimetre. The question is whether the underlying quantity could take values in between.

### Example 7 (reliability and validity, 3 marks)

A teacher times the same pendulum swing five times and records $2.01, 2.03, 2.02, 2.01, 2.03$ seconds. Later she discovers that her stopwatch runs 5% slow. Comment on reliability and validity.

The readings are very close together, so the measurements are **reliable**. However, the stopwatch is systematically wrong, so the readings do not measure the true time: they are not **valid** as measurements of the real period. A reliable instrument can still be biased. The true value would be about $\tfrac{2.02}{0.95}\approx2.13$ seconds if the watch really records only 95% of the true time.

## Using your GDC

Most of the arithmetic in this chapter is simple, but the calculator is useful in two places. To find quartiles and the interquartile range for the outlier rule, enter the data into a list and use the one-variable statistics screen. It shows $Q_1$, the median and $Q_3$, from which you compute $Q_3-Q_1$ and the two boundaries yourself. Write down the quartile values that the calculator gives, because the marks are for the values and the boundary working, not for the keystrokes. To take a simple random sample from a numbered list, use the random-integer function, remembering that repeated values must be ignored if you are sampling without replacement. A calculator will also give you the mean quickly, which makes comparisons such as the effect of an outlier easy to demonstrate.

## Common mistakes

- Saying a large sample removes bias. Size reduces random variation only. A biased method gives a biased result however many people are asked.
- Confusing quota with stratified sampling. In stratified sampling individuals within each group are chosen randomly. In quota sampling the interviewer picks them, so bias can enter.
- Describing bias without context. "The sample is not representative" scores poorly. Name the group that is missing and say how the result would change.
- Mixing up reliable and valid. Consistency is reliability. Measuring the right thing accurately is validity.
- Forgetting to round stratified numbers sensibly, or leaving fractions of a person. Always check that the strata add to the total.
- Treating every outlier as an error and deleting it. First ask whether it is a mistake or a real observation.
- Applying the outlier rule with the wrong quartiles, such as using the minimum and maximum, or forgetting to multiply the interquartile range by $1.5$.

## Exam technique and command terms

**State** or **identify** requires a short answer without reasons: "stratified sampling". **Describe** asks for a few features in words. **Explain** and **justify** require a reason, usually in the form "because", and you should link it to the scenario. **Comment** invites an observation about the quality of the data or the method. **Calculate** needs working. In a question about bias, a safe structure is: name the method, name the group that is likely missing, and say how the result is affected. In a question on outliers, always show the quartiles, the interquartile range, the two boundaries and a clear comparison with the data value. Never write only "yes, it is an outlier". Read whether the question wants an exact count or an approximate one, and if a sample size does not divide exactly, say how you rounded and show that your total is correct.

## Connections

This chapter feeds directly into SL 4.2, where the same quartiles produce box plots and the outlier rule decides whether a whisker stops early, and into SL 4.3, where the mean and standard deviation are strongly affected by extreme values. The idea of a representative sample underlies SL 4.4, because a regression line from a biased sample cannot be used for prediction, and it underlies the whole of the probability chapters, where relative frequency from a sample is used to estimate a probability. In the Theory of Knowledge course the same questions return as discussion of how we can know that a claim based on data is true. In the internal assessment, a short section on the reliability of your data and your sampling choice is expected in almost any project that collects data.

## Check your understanding

1. A town has 18,000 adults. A survey needs a systematic sample of 150. Find the sampling interval.
2. A club has 240 members: 96 juniors, 84 seniors and 60 veterans. Find the numbers in a stratified sample of 40.
3. A radio presenter asks listeners to text in their opinion on a new law. Name the sampling method and give one source of bias.
4. State whether the following are categorical, discrete or continuous: (a) shoe size, (b) mass of a parcel, (c) postcode.
5. The data set $12, 15, 15, 16, 18, 19, 21, 22, 24, 60$ is given. Find $Q_1$, $Q_3$ and the interquartile range, and decide whether $60$ is an outlier.
6. For the data in question 5, find the mean, and find the mean without the value $60$.
7. A bathroom scale gives $65.0, 65.1, 64.9$ kg for the same object of true mass $60$ kg. Comment on reliability and validity.
8. Explain why a stratified sample may be preferable to a simple random sample for a survey about a school's canteen.
9. A systematic sample of every 12th name is taken from an alphabetical list of 600 names, starting at name number 5. Find the number of names sampled and the last name number chosen.
10. A survey asks "Don't you agree that the new library is a waste of money?" Describe the problem with this question and suggest an improvement.

### Answers

1. $k=\tfrac{18000}{150}=120$. Take every 120th adult.
2. Juniors $\tfrac{96}{240}\times40=16$, seniors $\tfrac{84}{240}\times40=14$, veterans $\tfrac{60}{240}\times40=10$. These add to $40$.
3. Convenience (voluntary response) sampling. Only listeners who hear the show and feel strongly respond, so the sample over-represents extreme opinions and excludes people who do not listen.
4. (a) Discrete, because sizes are separate values. (b) Continuous. (c) Categorical, because a postcode is a label, not a quantity.
5. Lower half $12,15,15,16,18$ gives $Q_1=15$. Upper half $19,21,22,24,60$ gives $Q_3=22$. The interquartile range is $7$ and $1.5\times7=10.5$. The upper boundary is $32.5$, so $60$ is an outlier. The lower boundary is $4.5$ and no value is below it.
6. The total is $222$, so the mean is $22.2$. Without $60$ the total is $162$ over nine values, so the mean is $18$.
7. The readings agree closely, so they are reliable, but they are about $5$ kg above the true mass, so they are not valid or accurate. The scale probably has a fixed offset.
8. The canteen opinions may differ between year groups. Stratified sampling guarantees each year is represented in proportion, so no year is accidentally left out, which reduces variation compared with a simple random sample.
9. The number sampled is $\tfrac{600}{12}=50$. The names are numbers $5,17,29,\dots$, so the last is $5+49\times12=593$.
10. The wording leads the respondent towards agreeing, so the answers are biased. A better question is "What is your opinion of the cost of the new library?" with balanced answer choices from very positive to very negative.

## Summary

- A sample is used to estimate a population parameter, and a sample must be representative to be useful. Size does not cure bias.
- Data may be categorical, discrete or continuous, and the type decides which summaries and graphs make sense.
- Simple random, systematic, stratified, quota and convenience sampling each have strengths and weaknesses. Stratified sampling allocates in proportion to stratum size, and a systematic interval is $k=N/n$.
- Bias comes from selection, non-response, leading questions and faulty measurement. Always describe bias in the context of the scenario.
- Reliable means consistent, and valid means measuring the right thing accurately.
- A value is an outlier if it is more than $1.5\times\mathrm{IQR}$ below $Q_1$ or above $Q_3$. Investigate outliers before removing them, and remember that the median and the interquartile range resist them while the mean does not.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.1. Related facts may appear elsewhere. Justify any method used here.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
