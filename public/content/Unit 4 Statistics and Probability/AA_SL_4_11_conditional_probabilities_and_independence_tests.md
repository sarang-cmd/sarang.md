# Conditional probabilities and independence tests

> **SL 4.11 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- read a conditional probability from a two-way frequency table, choosing the correct denominator;
- convert between tables, Venn diagrams and probability statements, and complete a partly filled table;
- test whether two events are independent from data, using $P(A\cap B)=P(A)P(B)$ or $P(A\mid B)=P(A)$, and write a clear conclusion;
- use independence, or a given conditional probability, to find a missing probability;
- evaluate conditional probabilities of the form $P(A\mid B')$, and of compound events such as "both, given at least one";
- avoid the confusion between $P(A\mid B)$ and $P(B\mid A)$, and between mutually exclusive and independent events;
- state the limits of what a test on sample data can show.

## Why this topic matters

In SL 4.6 you met conditional probability and independence as formulas. In practice they mostly arrive as *data*: a table of how many people in a survey fall into each pair of categories. Does the choice of transport depend on age group? Are men and women equally likely to pass a driving test at the first attempt? Does a medical treatment change the chance of recovery? Each of these questions asks whether two events are independent, and each can be investigated by comparing numbers taken from a table.

This chapter is a deliberate consolidation. The ideas are the same as in SL 4.6, but the questions are harder because the information is hidden in a table, or given in a form that needs an extra step, such as filling in missing entries using an independence condition. The examination style is predictable: a table of frequencies, a request for a conditional probability, a request to determine whether the events are independent, and a final comment. Marks are lost mainly through three errors: dividing by the wrong total, writing "independent" without a numerical test, and confusing the two directions of conditioning. If you can keep a checklist in mind, which is what this chapter provides, these marks are among the most secure in the paper.

## Core ideas

### Reading a conditional probability from a table

In a two-way table the rows and columns represent two categorical variables, and each cell contains a frequency. The conditional probability $P(A\mid B)$ is a *fraction of the $B$ group*, so the denominator is the total of the row or column for $B$, not the grand total:
$$
P(A\mid B)=\frac{n(A\cap B)}{n(B)}.
$$
This is the same as $\dfrac{P(A\cap B)}{P(B)}$ because both numerator and denominator can be divided by the grand total. The practical rule is: **the word after "given" tells you which row or column total goes in the denominator.** "Probability that a student is a senior given that they walk" means the denominator is the total number of walkers.

### Testing independence from data

Events $A$ and $B$ are independent if and only if
$$
P(A\cap B)=P(A)\,P(B),\quad\text{equivalently}\quad P(A\mid B)=P(A),\quad\text{equivalently}\quad P(B\mid A)=P(B).
$$
To test it, choose the form that is the quickest with your data and compute **both sides** from the table. For the first form, compute $P(A\cap B)$ from the cell and $P(A)P(B)$ from the margins. For the second, compare a conditional probability with an unconditional one. If the two values are equal, the events are independent. If they differ, they are not. State your conclusion in a sentence that refers to the numbers and to the context. The product form has the advantage that it never involves dividing by a possibly zero probability.

A subtle point: a table of sample data will rarely give *exactly* equal numbers, because of random variation. In this course, however, tables in questions are constructed so that the test is exact, and you are asked to decide on exact equality. In real statistics one would use a formal hypothesis test, such as the chi-squared test, which belongs to other courses and is not part of this one. It is worth knowing that an exact match is a model, and that a close but unequal result in real data may still be consistent with independence.

### Completing a table using independence

If you are told that $A$ and $B$ are independent, then $P(A\cap B)=P(A)P(B)$, which gives the central cell of a table. The other cells then follow by subtracting from the totals. This is a standard way to find missing frequencies, and it checks that you understand what independence means numerically.

### Conditioning on a complement

The condition may be a complement, as in $P(A\mid B')$. Then the denominator is $P(B')=1-P(B)$ and the numerator is the probability of $A$ *and not* $B$:
$$
P(A\cap B')=P(A)-P(A\cap B),\qquad P(A\mid B')=\frac{P(A)-P(A\cap B)}{1-P(B)}.
$$
If $A$ and $B$ are independent, then $P(A\mid B')=P(A)$ too, which is another way to say that knowing whether $B$ happened gives no information about $A$.

### Conditioning when one outcome is known to happen

Some questions condition on an event that is a union, such as "at least one red". Compute the probability of the condition first, often using the complement, and then the probability of the intersection, which is frequently simpler than it looks because the target event is a subset of the condition. For instance, "both red" automatically implies "at least one red", so $P(\text{both}\cap\text{at least one})=P(\text{both})$.

### Mutually exclusive versus independent, again

If $P(A)>0$ and $P(B)>0$ and the events are mutually exclusive, then $P(A\cap B)=0$ while $P(A)P(B)>0$, so the events are *not* independent. A zero in a table cell is therefore a quick sign of dependence, provided that the margins of that row and column are both non-zero. Conversely, independent events with positive probabilities cannot be mutually exclusive.

## Worked examples

### Example 1 (two directions of conditioning, 5 marks)

In a group of $100$ students, $40$ study chemistry, $25$ study physics and $10$ study both. Find $P(\text{chemistry}\mid\text{physics})$ and $P(\text{physics}\mid\text{chemistry})$, and test whether studying the two subjects is independent.

Given physics, the group is the $25$ physicists, of whom $10$ also study chemistry, so $P(C\mid P)=\tfrac{10}{25}=0.4$. Given chemistry, the group is the $40$ chemists, of whom $10$ study physics, so $P(P\mid C)=\tfrac{10}{40}=0.25$. The two conditional probabilities are different, which is typical. For the test, $P(C)=0.4$, $P(P)=0.25$ and $P(C\cap P)=0.10$. The product is $0.4\times0.25=0.10$, which equals $P(C\cap P)$, so the events are independent. Equivalently, $P(C\mid P)=0.4=P(C)$.

### Example 2 (a larger table, 6 marks)

A school asks $200$ students how they travel. Among $100$ juniors, $20$ come by car, $50$ by bus and $30$ walk. Among $100$ seniors, $40$ come by car, $35$ by bus and $25$ walk. Find (a) $P(\text{car})$, (b) $P(\text{car}\mid\text{senior})$, (c) $P(\text{senior}\mid\text{bus})$, and (d) decide whether age group and car use are independent.

(a) The number of car users is $20+40=60$, so $P(\text{car})=\tfrac{60}{200}=0.3$. (b) Among the $100$ seniors, $40$ use a car, so $P(\text{car}\mid\text{senior})=0.4$. (c) The number using the bus is $50+35=85$, of whom $35$ are seniors, so $P(\text{senior}\mid\text{bus})=\tfrac{35}{85}=\tfrac{7}{17}=0.412$. (d) Since $P(\text{car}\mid\text{senior})=0.4\neq0.3=P(\text{car})$, the events are **not** independent: seniors are more likely to come by car than students overall. Using the product test gives the same conclusion: $P(\text{senior and car})=\tfrac{40}{200}=0.2$, while $P(\text{senior})P(\text{car})=0.5\times0.3=0.15$.

### Example 3 (an independent table, 5 marks)

Of $50$ boys, $30$ like a particular game, and of $60$ girls, $36$ like it. Determine whether liking the game is independent of sex.

In total $66$ of $110$ like the game, so $P(\text{like})=\tfrac{66}{110}=0.6$. Among boys $P(\text{like}\mid\text{boy})=\tfrac{30}{50}=0.6$, and among girls $P(\text{like}\mid\text{girl})=\tfrac{36}{60}=0.6$. All three are equal, so liking the game is independent of sex. The product test agrees: $P(\text{boy and like})=\tfrac{30}{110}=\tfrac{3}{11}$ and $P(\text{boy})P(\text{like})=\tfrac{50}{110}\times0.6=\tfrac{3}{11}$. Although the group sizes differ, the proportions that like the game are equal, which is what independence means.

### Example 4 (completing a table, 6 marks)

For $100$ people, $P(A)=0.3$, $P(B)=0.4$, and $A$ and $B$ are independent. Complete the table of frequencies.

Independence gives $P(A\cap B)=0.3\times0.4=0.12$, so $12$ people are in both. Then $A$ only has $30-12=18$, $B$ only has $40-12=28$, and the people in neither number $100-(12+18+28)=42$. As a check, $P(A'\cap B')=0.7\times0.6=0.42$, which agrees with $42$ out of $100$, as complements of independent events are also independent.

### Example 5 (conditioning on a complement, 5 marks)

$P(A)=0.5$, $P(B)=0.4$ and $P(A\cap B)=0.15$. Find $P(A\mid B')$ and determine whether $A$ and $B$ are independent.

First $P(A\cap B')=0.5-0.15=0.35$ and $P(B')=0.6$, so $P(A\mid B')=\tfrac{0.35}{0.6}=\tfrac{7}{12}=0.583$. For independence, $P(A)P(B)=0.5\times0.4=0.2$, which is not equal to $0.15$, so $A$ and $B$ are not independent. As a consistency check, $P(A\mid B)=\tfrac{0.15}{0.4}=0.375$, which is smaller than $P(A)=0.5$, and $P(A\mid B')=0.583$ is larger, so $B$ makes $A$ less likely.

### Example 6 (using a given conditional probability, 5 marks)

$P(A)=0.4$, $P(B)=0.5$ and $P(A\mid B)=0.6$. Find $P(A\cap B)$, $P(A\cup B)$ and $P(B\mid A)$.

From the definition, $P(A\cap B)=P(A\mid B)P(B)=0.6\times0.5=0.3$. Then $P(A\cup B)=0.4+0.5-0.3=0.6$. Finally, $P(B\mid A)=\tfrac{P(A\cap B)}{P(A)}=\tfrac{0.3}{0.4}=0.75$. Notice that the two conditional probabilities, $0.6$ and $0.75$, are different, because the two conditions have different sizes.

### Example 7 (compound conditions, 6 marks)

A bag contains $4$ red and $6$ blue counters. Two counters are drawn without replacement. Find the probability that both are red, given that at least one is red.

The probability of both red is $\tfrac{4}{10}\times\tfrac39=\tfrac{12}{90}=\tfrac{2}{15}$. The probability of no red is $\tfrac{6}{10}\times\tfrac59=\tfrac{30}{90}=\tfrac13$, so the probability of at least one red is $1-\tfrac13=\tfrac23$. Since "both red" is contained in "at least one red", the numerator is simply $\tfrac{2}{15}$:
$$
P(\text{both red}\mid\text{at least one red})=\frac{2/15}{2/3}=\frac{2}{15}\times\frac32=\frac15.
$$
The result is only $0.2$, lower than a first guess. Many candidates wrongly compute the probability that the second is red given that the first is, which is $\tfrac39=\tfrac13$, a different question.

### Example 8 (zero cell, 3 marks)

In a survey, no student who studies music also studies drama, but $20\%$ study music and $30\%$ study drama. Are the two choices independent?

The probability of both is $0$, while $P(\text{music})P(\text{drama})=0.2\times0.3=0.06$. These are not equal, so the events are not independent. They are mutually exclusive, and since both have positive probability, mutually exclusive events cannot be independent. Knowing that a student studies music tells us that they do not study drama, which is information.

## Using your GDC

The calculator is less central here than the table. Use it for dividing and for checking decimals, and use fraction mode to avoid rounding errors in the product test. When comparing $P(A)P(B)$ with $P(A\cap B)$, compute both to full accuracy and compare, because rounding to three significant figures might hide a small difference or create a false one. For tables with several rows and columns, the matrix feature can store the frequencies and compute row and column sums, which prevents errors with totals. It is good practice to total the table both ways and check that the grand totals agree before you use any entry. For the compound problems with replacement or without, store intermediate results in memory, so that the numerator and denominator come from the same unrounded values.

## Common mistakes

- Dividing by the grand total instead of the total for the condition, so that $P(A\mid B)$ is replaced by $P(A\cap B)$.
- Mixing up the direction of conditioning: $P(A\mid B)\neq P(B\mid A)$ in general.
- Writing "independent" or "not independent" without showing numbers for both sides of the test.
- Testing with rounded values and concluding that events are independent because the values agree to two decimal places.
- Concluding that events are independent because the conditional probabilities in the two *groups* happen to be close.
- Treating mutually exclusive events as independent, or the reverse.
- Forgetting that a condition made from a union ("at least one") needs its own calculation.
- Making arithmetic errors in the table totals, which then affect every later answer.

## Exam technique and command terms

**Determine whether** the events are independent requires a calculation of both sides of the test and a conclusion in a sentence. **Show that** gives the conclusion, so your working must lead to it exactly, normally with fractions. **Find** a conditional probability: write the formula first, as a fraction with the numerator and denominator identified, and then substitute. In a table question, begin by adding the totals if they are not given, and mark the denominator you will use. If the problem is stated in words, rewrite it with set notation. For example, "a student chosen at random who walks is a senior" becomes $P(\text{senior}\mid\text{walk})$. When the question mentions a compound condition, work out each part on separate lines. Finally, give the answer as an exact fraction or to three significant figures, and relate it to the context in one short sentence.

## Connections

This chapter is the data-driven companion to SL 4.6. It uses the same formulas but applies them to frequency tables, which also appear in SL 4.1 as survey data. Independence is the assumption behind the binomial distribution in SL 4.8, so recognising when it holds or fails is useful for deciding whether a binomial model is appropriate. In AHL 4.13, Bayes' theorem reverses a conditional probability from a tree, and the table approach of this chapter provides a natural check: one can always build a hypothetical table of $1000$ people and read the answer from it. The idea of testing a model against data, even informally, anticipates the hypothesis testing that you may meet in later study of statistics.

## Check your understanding

1. Of $150$ people, $60$ own a cat, $50$ own a dog and $20$ own both. Find $P(\text{cat}\mid\text{dog})$ and decide whether owning a cat and owning a dog are independent.
2. In group X, $30$ walk and $20$ cycle. In group Y, $45$ walk and $55$ cycle. Find $P(\text{cycle}\mid Y)$ and $P(Y\mid\text{walk})$, and decide whether the method of travel is independent of group.
3. For $200$ people, $P(A)=0.5$ and $P(B)=0.2$, and $A$ and $B$ are independent. Find the number of people in $A\cap B$, in $A$ only, in $B$ only and in neither.
4. $P(A)=0.6$, $P(B)=0.5$ and $P(A\cap B)=0.35$. Find $P(A\mid B)$ and $P(B\mid A)$, and decide whether $A$ and $B$ are independent.
5. $P(A)=0.7$, $P(B)=0.3$ and $P(A\cap B)=0.1$. Find $P(A\mid B')$.
6. $P(A)=0.3$, $P(B)=0.4$ and $P(A\mid B)=0.25$. Find $P(A\cup B)$ and decide whether $A$ and $B$ are independent.
7. A bag has $5$ red and $5$ green counters, and two are drawn without replacement. Find the probability that both are red given that at least one is red.
8. Two events with positive probabilities are mutually exclusive. Explain why they are not independent.
9. Among $40$ women, $28$ pass a test and among $40$ men, $28$ pass. Determine whether passing is independent of sex.
10. Show that if $A$ and $B$ are independent, then $A'$ and $B'$ are independent.

### Answers

1. $P(\text{cat}\mid\text{dog})=\tfrac{20}{50}=0.4$. $P(\text{cat})=\tfrac{60}{150}=0.4$, which equals the conditional probability, so they are independent. Product check: $0.4\times\tfrac13=\tfrac{2}{15}=\tfrac{20}{150}$.
2. $P(\text{cycle}\mid Y)=\tfrac{55}{100}=0.55$. The number who walk is $75$, so $P(Y\mid\text{walk})=\tfrac{45}{75}=0.6$. Overall $P(\text{cycle})=\tfrac{75}{150}=0.5\neq0.55$, so they are not independent.
3. $P(A\cap B)=0.5\times0.2=0.1$, so $20$ people. $A$ only: $100-20=80$. $B$ only: $40-20=20$. Neither: $200-120=80$.
4. $P(A\mid B)=\tfrac{0.35}{0.5}=0.7$ and $P(B\mid A)=\tfrac{0.35}{0.6}=0.583$. $P(A)P(B)=0.3\neq0.35$, so not independent.
5. $P(A\cap B')=0.7-0.1=0.6$ and $P(B')=0.7$, so $P(A\mid B')=\tfrac{6}{7}=0.857$.
6. $P(A\cap B)=0.25\times0.4=0.1$, so $P(A\cup B)=0.3+0.4-0.1=0.6$. $P(A)P(B)=0.12\neq0.1$, so not independent.
7. $P(\text{both red})=\tfrac{5}{10}\times\tfrac49=\tfrac29$. $P(\text{at least one red})=1-\tfrac{5}{10}\times\tfrac49=\tfrac79$. So the answer is $\tfrac{2/9}{7/9}=\tfrac27=0.286$.
8. They cannot occur together, so $P(A\cap B)=0$, but $P(A)P(B)>0$. The two are unequal, so the events are not independent. Knowing that one occurred shows that the other did not.
9. $P(\text{pass})=\tfrac{56}{80}=0.7$ and $P(\text{pass}\mid\text{woman})=\tfrac{28}{40}=0.7$, so passing is independent of sex.
10. $P(A'\cap B')=1-P(A\cup B)=1-P(A)-P(B)+P(A)P(B)=\big(1-P(A)\big)\big(1-P(B)\big)=P(A')P(B')$.

## Summary

- From a table, $P(A\mid B)=\dfrac{n(A\cap B)}{n(B)}$: the denominator is the total for the condition.
- To test independence, compute both sides of $P(A\cap B)=P(A)P(B)$ (or compare $P(A\mid B)$ with $P(A)$) and state a conclusion.
- Independence gives the central cell of a table, from which the others follow by subtraction. Complements of independent events are independent.
- $P(A\mid B')=\dfrac{P(A)-P(A\cap B)}{1-P(B)}$.
- For a condition like "at least one", compute its probability first. The target event is often a subset of it.
- Mutually exclusive events with positive probabilities are never independent, and $P(A\mid B)\neq P(B\mid A)$ in general.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.11. Related facts may appear elsewhere. Justify any method used here.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
