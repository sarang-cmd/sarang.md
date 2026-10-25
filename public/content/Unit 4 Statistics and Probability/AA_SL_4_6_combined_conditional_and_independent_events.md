# Combined, conditional and independent events

> **SL 4.6 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- use set notation $A\cap B$, $A\cup B$ and $A'$, and shade regions on a Venn diagram;
- apply the addition rule $P(A\cup B)=P(A)+P(B)-P(A\cap B)$, and recognise mutually exclusive events;
- calculate conditional probability using $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$ from formulas, Venn diagrams, tables and tree diagrams;
- decide whether two events are independent by testing $P(A\cap B)=P(A)P(B)$, and use independence to calculate probabilities;
- draw and use tree diagrams, with and without replacement;
- solve "at least one" problems by combining independence with the complement;
- distinguish clearly between mutually exclusive and independent events.

## Why this topic matters

Real situations rarely involve a single event. A doctor asks how likely a patient is to have an illness *given* a positive test. A driver asks how likely a delay is *given* that it is raining. An engineer asks how likely it is that two independent safety systems both fail. The tools of this chapter allow you to answer all of these. Conditional probability, in particular, is one of the most useful and most misunderstood ideas in mathematics, and mixing up $P(A\mid B)$ with $P(B\mid A)$ is behind many wrong statements in newspapers and even in courtrooms.

In the examination these tools appear every year, usually in a question of several parts with a Venn diagram, a two-way table or a tree diagram. The first parts are recall of the formulas, the middle parts require conditional probability, and the last part often asks whether two events are independent, with justification. A complete answer to the last question is a calculation, not an opinion: you must show that $P(A\cap B)$ does or does not equal $P(A)P(B)$. This chapter gives a systematic way to organise the information and to avoid the most common traps.

## Core ideas

### Set notation and Venn diagrams

The **intersection** $A\cap B$ means "$A$ and $B$ both occur". The **union** $A\cup B$ means "$A$ or $B$ or both occur", so in mathematics "or" is inclusive. The **complement** $A'$ means "not $A$". A **Venn diagram** shows the sample space as a rectangle and each event as a circle. A reliable method for filling in a Venn diagram is to start from the middle, the intersection, and work outwards: write the intersection first, then subtract it from each event total to get the "only" regions, and finally find the outside region by subtracting everything else from the total. With probabilities the regions sum to $1$, and with counts they sum to $n(U)$.

### The addition rule and mutually exclusive events

For any two events,
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Adding $P(A)$ and $P(B)$ counts the overlap twice, so one copy is subtracted. Two events are **mutually exclusive** if they cannot both happen, that is $P(A\cap B)=0$. In that case the rule reduces to
$$
P(A\cup B)=P(A)+P(B).
$$
Rolling a die and getting a $2$ and getting a $5$ are mutually exclusive, but getting an even number and getting a prime number are not, because $2$ is both.

### Conditional probability

The probability of $A$ *given that* $B$ has occurred is
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.
$$
Information that $B$ occurred shrinks the sample space to $B$. Among those outcomes, the fraction that are also in $A$ is $\tfrac{P(A\cap B)}{P(B)}$. Rearranging gives the multiplication rule
$$
P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A),
$$
which is how tree diagrams work. Note that $P(A\mid B)$ and $P(B\mid A)$ are usually different. The probability that a person is a professional footballer given that they are an Olympic sprinter is different from the probability that they are an Olympic sprinter given that they are a professional footballer.

### Independent events

Two events are **independent** if the occurrence of one does not change the probability of the other:
$$
P(A\mid B)=P(A)\quad\Longleftrightarrow\quad P(A\cap B)=P(A)\,P(B).
$$
To *test* independence, compute $P(A\cap B)$ from the data and compare it with the product of $P(A)$ and $P(B)$. If they are equal, the events are independent. If the events are independent, so are $A$ and $B'$, $A'$ and $B$, and $A'$ and $B'$. Independence is used to multiply probabilities of separate trials, such as successive tosses of a coin or shots by a player whose attempts do not affect each other.

### Mutually exclusive versus independent

These two ideas are often confused. Mutually exclusive events *cannot happen together*, so knowing that one occurred tells you the other did not, and they are very much dependent. If $P(A)>0$ and $P(B)>0$ and the events are mutually exclusive, then $P(A\cap B)=0$ but $P(A)P(B)>0$, so they cannot be independent. Independent events, on the other hand, usually can happen together, and they happen together with a probability equal to the product of the separate ones.

### Tree diagrams

A **tree diagram** shows a sequence of events. Each branch carries a probability, the probabilities on the branches leaving any one point sum to $1$, and the probability of a path is the product of its branch probabilities. The probability of an event that can happen along several paths is the sum of those path probabilities. For events with **replacement** the second-stage probabilities are the same whatever happened first. For **without replacement** they change, because the contents have changed, and the second-stage branches are conditional probabilities.

### "At least one" with independent trials

If an event has probability $p$ on each of $n$ independent trials, the probability that it never occurs is $(1-p)^{n}$, so
$$
P(\text{at least one})=1-(1-p)^{n}.
$$
This is the complement rule from SL 4.5 combined with independence.

## Worked examples

### Example 1 (addition rule and independence, 5 marks)

Events $A$ and $B$ satisfy $P(A)=0.5$, $P(B)=0.4$ and $P(A\cap B)=0.2$. Find $P(A\cup B)$ and $P(A'\cap B')$, and determine whether $A$ and $B$ are independent.

By the addition rule, $P(A\cup B)=0.5+0.4-0.2=0.7$. The event $A'\cap B'$ is "neither", the complement of the union, so $P(A'\cap B')=1-0.7=0.3$. For independence, the product is $P(A)P(B)=0.5\times0.4=0.2$, which equals $P(A\cap B)$, so the events **are** independent. The conclusion must follow from a stated comparison, with the two numbers visible.

### Example 2 (Venn diagram from counts, 6 marks)

Of $40$ students, $22$ play football, $18$ play basketball and $8$ play both. Find (a) the number who play neither, (b) the probability that a student plays football only, (c) the probability that a student plays basketball given that they play football.

Start with the intersection: $8$ play both. Football only is $22-8=14$ and basketball only is $18-8=10$. Together the three regions contain $14+8+10=32$ students, so $40-32=8$ play neither. (b) $P(\text{football only})=\tfrac{14}{40}=\tfrac{7}{20}$. (c) Given that the student plays football, the sample space is the $22$ football players, of whom $8$ also play basketball, so $P(B\mid F)=\tfrac{8}{22}=\tfrac{4}{11}$. Using the formula, $\tfrac{8/40}{22/40}=\tfrac{8}{22}$, which agrees. The numbers in the denominator always come from the condition.

### Example 3 (tree diagram without replacement, 6 marks)

A bag has $5$ red and $3$ blue counters. Two are drawn at random without replacement. Find (a) $P(\text{both red})$, (b) $P(\text{different colours})$, (c) $P(\text{second red}\mid\text{first blue})$.

(a) The first is red with probability $\tfrac58$. Then $4$ red remain among $7$, so the second is red with probability $\tfrac47$. Then $P(RR)=\tfrac58\times\tfrac47=\tfrac{20}{56}=\tfrac{5}{14}$. (b) Different colours can occur as red then blue or blue then red: $\tfrac58\times\tfrac37+\tfrac38\times\tfrac57=\tfrac{15}{56}+\tfrac{15}{56}=\tfrac{30}{56}=\tfrac{15}{28}$. (c) If the first is blue, $7$ counters remain, of which $5$ are red, so the probability is $\tfrac57$. It can be read directly from the second-stage branch. The marks are for the correct first-stage values, the changed second-stage values, and the sum over the two paths in (b).

### Example 4 (two-way table and independence, 6 marks)

One hundred people choose tea or coffee: $18$ men chose tea, $32$ men coffee, $30$ women tea and $20$ women coffee. Find $P(\text{coffee}\mid\text{woman})$ and $P(\text{woman}\mid\text{tea})$, and decide whether the drink chosen is independent of sex.

There are $50$ women and $20$ of them chose coffee, so $P(\text{coffee}\mid\text{woman})=\tfrac{20}{50}=0.4$. There are $18+30=48$ people who chose tea, $30$ of them women, so $P(\text{woman}\mid\text{tea})=\tfrac{30}{48}=\tfrac58$. For independence, the total number choosing coffee is $52$, so $P(\text{coffee})=0.52$, which is not equal to $P(\text{coffee}\mid\text{woman})=0.4$. Therefore the events are **not** independent: choice of drink depends on sex in this sample. Equivalent test: $P(\text{woman and coffee})=0.2$ while $P(\text{woman})P(\text{coffee})=0.5\times0.52=0.26$, which is not equal.

### Example 5 (two-stage tree with a condition, 6 marks)

The probability of rain tomorrow is $0.3$. If it rains, a bus is late with probability $0.4$. If it does not rain, the bus is late with probability $0.1$. Find the probability that the bus is late, and the probability that it rained given that the bus was late.

The tree has two stages. The path "rain and late" has probability $0.3\times0.4=0.12$ and the path "no rain and late" has probability $0.7\times0.1=0.07$. The bus is late along either path, so $P(\text{late})=0.12+0.07=0.19$. For the reverse question,
$$
P(\text{rain}\mid\text{late})=\frac{P(\text{rain}\cap\text{late})}{P(\text{late})}=\frac{0.12}{0.19}=\frac{12}{19}=0.632.
$$
So although rain is only $30\%$ likely, it accounts for about $63\%$ of the late buses. This kind of "reverse" conditional probability is the content of Bayes' theorem in AHL 4.13.

### Example 6 (using independence to find a probability, 4 marks)

Events $A$ and $B$ are independent with $P(A)=0.6$ and $P(A\cup B)=0.8$. Find $P(B)$.

Let $P(B)=p$. By independence, $P(A\cap B)=0.6p$. The addition rule gives $0.8=0.6+p-0.6p=0.6+0.4p$, so $0.4p=0.2$ and $p=0.5$. Check: $P(A\cap B)=0.3$ and $0.6+0.5-0.3=0.8$.

### Example 7 (at least one, 3 marks)

A player hits a target with probability $0.7$ on each of three independent shots. Find the probability of at least one hit.

The probability of missing all three is $0.3^{3}=0.027$. So $P(\text{at least one hit})=1-0.027=0.973$. The complement approach avoids adding the separate cases for one, two and three hits.

### Example 8 (mutually exclusive but not independent, 3 marks)

Events $A$ and $B$ are mutually exclusive with $P(A)=0.3$ and $P(B)=0.45$. Find $P(A\cup B)$ and show that $A$ and $B$ are not independent.

Mutually exclusive means $P(A\cap B)=0$, so $P(A\cup B)=0.3+0.45=0.75$. If the events were independent, $P(A\cap B)$ would be $0.3\times0.45=0.135$. But it is $0$, so they are not independent. Knowing that $A$ happened guarantees that $B$ did not, so the events strongly affect each other.

## Using your GDC

The calculator mostly performs arithmetic here, but a few habits help. Store intermediate probabilities in memory, such as $P(\text{late})=0.19$, so that conditional probabilities use exact values, and give final answers to three significant figures or as exact fractions. Use fraction mode for the without-replacement problems so that products such as $\tfrac58\times\tfrac47$ stay exact. To check an independence claim, compute both $P(A)\times P(B)$ and $P(A\cap B)$ to full precision and compare, because a rounded value can make unequal numbers look equal. When a tree diagram has many paths, list them in a table with the product alongside, then add the relevant rows. The calculator's list feature can add the chosen path probabilities in one step, which reduces the risk of omitting a path.

## Common mistakes

- Using $P(A\cup B)=P(A)+P(B)$ when the events are not mutually exclusive, so that the overlap is counted twice.
- Confusing $P(A\mid B)$ with $P(B\mid A)$, and dividing by the wrong total.
- Using the product rule $P(A\cap B)=P(A)P(B)$ without having shown independence.
- Claiming that mutually exclusive events are independent. With positive probabilities they never are.
- Forgetting to change the second-stage probabilities in a without-replacement tree, so the counters are treated as if replaced.
- Missing a path when two paths lead to the same event, as in "different colours".
- Stating independence without a calculation. A statement like "they look independent" earns no marks.
- Rounding probabilities too early in a multi-stage tree.

## Exam technique and command terms

**Show that** and **determine whether** require a calculation with stated numbers. For independence, write the two quantities, $P(A\cap B)$ and $P(A)P(B)$, and an explicit "so the events are independent" or "so they are not independent". **Find** needs the working, and for a conditional probability write the formula first, as $\tfrac{P(A\cap B)}{P(B)}$, since the method mark depends on it. When a Venn diagram is expected, label each region, and check that the regions add up to the total. For tree diagrams, put the probability on every branch, write the path products beside the final branches, and check that each pair of branches from a point sums to $1$. If the problem is in words, translate each phrase into notation before you calculate: "given that" means a condition, "and" means an intersection, "either, or both" means a union, and "neither" means the complement of the union. A good habit is to read the question again at the end and check that the event you computed is the one that was asked.

## Connections

This chapter extends the basic probability of SL 4.5 to combinations of events, and it is the machinery behind every later probability topic. The binomial distribution of SL 4.8 is a repeated use of independence with the complement and a counting factor. SL 4.11 extends the independence test to more complicated data and different representations. In AHL 4.13, Bayes' theorem generalises Example 5, where we reversed a conditional probability. In AHL 4.14 the expected value and variance of sums of random variables use independence. Finally, the logic of set notation here is the same as the notation of sets in the number and algebra unit, so the symbols $\cup$, $\cap$ and $'$ should already be familiar.

## Check your understanding

1. $P(A)=0.6$, $P(B)=0.3$ and $P(A\cap B)=0.18$. Determine whether $A$ and $B$ are independent and find $P(A\cup B)$.
2. $A$ and $B$ are mutually exclusive with $P(A)=0.25$ and $P(B)=0.4$. Find $P(A\cup B)$ and $P(A\mid B)$.
3. Of $60$ students, $35$ study French, $25$ study Spanish and $10$ study both. Find the number who study neither, and $P(\text{French}\mid\text{Spanish})$.
4. A box has $4$ green and $6$ yellow balls. Two are drawn without replacement. Find the probability that both are yellow.
5. $P(A)=0.5$ and $P(B\mid A)=0.4$. Find $P(A\cap B)$.
6. $P(A\cap B)=0.12$ and $P(B)=0.4$. Find $P(A\mid B)$.
7. $A$ and $B$ are independent with $P(A)=0.4$ and $P(B)=0.5$. Find $P(A\cup B)$.
8. A player scores with probability $0.8$ on each of three independent shots. Find the probability of exactly two scores.
9. The probability of rain is $0.2$. If it rains the train is late with probability $0.5$, and otherwise with probability $0.1$. Find $P(\text{late})$ and $P(\text{rain}\mid\text{late})$.
10. Show that if $A$ and $B$ are independent, then $A$ and $B'$ are independent.

### Answers

1. $P(A)P(B)=0.6\times0.3=0.18=P(A\cap B)$, so they are independent. $P(A\cup B)=0.6+0.3-0.18=0.72$.
2. $P(A\cup B)=0.25+0.4=0.65$. Since they cannot occur together, $P(A\mid B)=0$.
3. Union $=35+25-10=50$, so $60-50=10$ study neither. $P(F\mid S)=\tfrac{10}{25}=0.4$.
4. $\tfrac{6}{10}\times\tfrac{5}{9}=\tfrac{30}{90}=\tfrac13$.
5. $P(A\cap B)=P(A)P(B\mid A)=0.5\times0.4=0.2$.
6. $P(A\mid B)=\tfrac{0.12}{0.4}=0.3$.
7. $P(A\cap B)=0.2$, so $P(A\cup B)=0.4+0.5-0.2=0.7$.
8. There are three arrangements, so $3\times0.8^{2}\times0.2=3\times0.64\times0.2=0.384$.
9. $P(\text{late})=0.2\times0.5+0.8\times0.1=0.1+0.08=0.18$. $P(\text{rain}\mid\text{late})=\tfrac{0.1}{0.18}=\tfrac59=0.556$.
10. $P(A\cap B')=P(A)-P(A\cap B)=P(A)-P(A)P(B)=P(A)\big(1-P(B)\big)=P(A)P(B')$. This is the definition of independence for $A$ and $B'$.

## Summary

- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. For mutually exclusive events $P(A\cap B)=0$.
- $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$, and $P(A\cap B)=P(B)P(A\mid B)$.
- Independence means $P(A\cap B)=P(A)P(B)$, equivalently $P(A\mid B)=P(A)$. Test it by calculation.
- Mutually exclusive events with positive probabilities are never independent.
- In a tree diagram multiply along paths and add the paths that lead to the event. Without replacement, the second-stage branches change.
- $P(\text{at least one})=1-(1-p)^{n}$ for $n$ independent trials with probability $p$.
- $P(A\mid B)$ and $P(B\mid A)$ are different, so read the condition carefully.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists union, mutual exclusion, conditional probability and independence under SL 4.6. Derive and justify all other steps and conditions.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
