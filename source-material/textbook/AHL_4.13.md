# Bayes theorem

> **AHL 4.13 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state and use Bayes' theorem $P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$ for two events, with $P(B)$ found by the law of total probability;
- extend the theorem to a partition of the sample space into three or more events;
- build a tree diagram or a table of natural frequencies and read a reverse conditional probability from it;
- interpret sensitivity, specificity, false positives, false negatives and base rates in medical and quality-control contexts;
- explain why a positive result from an accurate test can still be more likely to be false than true when the condition is rare;
- update a probability after a second, independent piece of evidence;
- solve for unknown probabilities in a Bayes setting using algebra.

## Why this topic matters

Suppose a test for a rare disease is $90\%$ accurate, and your result is positive. What is the chance that you have the disease? Most people say about $90\%$. The correct answer, for a disease that affects $1\%$ of people and a test that is $90\%$ accurate in both directions, is only about $8\%$. This is not a trick of wording: it is a consequence of the mathematics, and it is one of the most important and most misunderstood results in applied probability. Medical screening, spam filters, legal reasoning about DNA evidence, fraud detection and machine learning classifiers all depend on reasoning that goes from *evidence* back to *cause*, and Bayes' theorem is the tool.

The theorem itself is only a few lines of algebra from the definition of conditional probability in SL 4.6. The difficulty is conceptual: it reverses the direction of conditioning, from $P(\text{evidence}\mid\text{cause})$, which we usually know from the design of a test, to $P(\text{cause}\mid\text{evidence})$, which is what we really want. In the examination, Bayes questions are usually presented with a tree diagram or a short story. They are worth around six to eight marks, and follow a standard pattern: identify the events, set up the tree or the formula, find the total probability of the evidence, and divide. Candidates who practise this pattern usually score full marks, and those who skip the total probability step lose most of the marks.

## Core ideas

### Reversing a conditional probability

From SL 4.6, $P(A\cap B)=P(A\mid B)P(B)=P(B\mid A)P(A)$. Dividing by $P(B)$ gives
$$
P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B)}.
$$
This is **Bayes' theorem** in its simplest form. It converts $P(B\mid A)$, the probability of the evidence given the cause, into $P(A\mid B)$, the probability of the cause given the evidence. In the language of Bayesian statistics $P(A)$ is the **prior** probability, $P(B\mid A)$ is the **likelihood**, and $P(A\mid B)$ is the **posterior** probability.

### The law of total probability

The denominator $P(B)$ is the probability of the evidence from *all* possible routes. If $A$ and $A'$ partition the sample space, then $B$ occurs either with $A$ or with $A'$, so
$$
P(B)=P(B\mid A)P(A)+P(B\mid A')P(A').
$$
Substituting this gives the form in the formula booklet:
$$
P(A\mid B)=\frac{P(B\mid A)\,P(A)}{P(B\mid A)\,P(A)+P(B\mid A')\,P(A')}.
$$
In a tree diagram, the numerator is the probability of the single path that passes through $A$ and then $B$, and the denominator is the sum of the probabilities of *all* the paths that end in $B$. That is the practical rule: **posterior $=\dfrac{\text{the path of interest}}{\text{all paths leading to the evidence}}$.**

### More than two causes

If $A_1,A_2,\dots,A_n$ are mutually exclusive events that together cover the whole sample space (a **partition**), then
$$
P(A_i\mid B)=\frac{P(B\mid A_i)\,P(A_i)}{\displaystyle\sum_{j=1}^{n}P(B\mid A_j)\,P(A_j)}.
$$
The posteriors for all $i$ add to $1$. Typical situations are three machines producing a part, three suppliers, or several diseases that could explain a symptom.

### Medical testing vocabulary

In a diagnostic test, **sensitivity** is $P(\text{positive}\mid\text{has condition})$, the true positive rate. **Specificity** is $P(\text{negative}\mid\text{no condition})$, the true negative rate. The **false positive rate** is $1-\text{specificity}=P(\text{positive}\mid\text{no condition})$. The **prevalence** or **base rate** is the prior probability of having the condition. The probability of having the condition given a positive result is then
$$
\frac{\text{sensitivity}\times\text{prevalence}}{\text{sensitivity}\times\text{prevalence}+(1-\text{specificity})\times(1-\text{prevalence})}.
$$
It is a common error to confuse specificity with the false positive rate, which changes the denominator completely, so define each carefully in the question.

### Why the base rate matters

When a condition is rare, the healthy group is much larger than the sick group. Even a small false positive rate applied to a large healthy group produces many false positives, which may outnumber the true positives from the small sick group. That is why the posterior can be low. A good way to see it is with **natural frequencies**: imagine $1000$ people and count them. With a prevalence of $1\%$, $10$ have the disease and $990$ do not. A sensitivity of $90\%$ gives $9$ true positives, and a false positive rate of $10\%$ gives $99$ false positives. Among the $108$ positives, only $9$ are real, so the posterior is $\tfrac{9}{108}=\tfrac1{12}$.

### Updating with more evidence

The posterior after one test can serve as the prior for the next. If two tests are independent *given the true condition*, a quicker route is to multiply the likelihoods: the probability of two positives is $P(+\,+\mid D)=P(+\mid D)^{2}$ for a sick person and $P(+\,+\mid D')=P(+\mid D')^{2}$ for a healthy one. Repeated evidence can raise a low posterior quickly.

## Worked examples

### Example 1 (medical test, 6 marks)

A disease affects $1\%$ of a population. A test gives a positive result for $90\%$ of people who have the disease, and for $10\%$ of people who do not. A person tests positive. Find the probability that they have the disease.

Let $D$ be the event "has the disease" and $T$ be "tests positive". Then $P(D)=0.01$, $P(T\mid D)=0.9$ and $P(T\mid D')=0.1$. The probability of a positive result is $P(T)=0.01\times0.9+0.99\times0.1=0.009+0.099=0.108$. By Bayes' theorem,
$$
P(D\mid T)=\frac{0.009}{0.108}=\frac{1}{12}=0.0833.
$$
So only about $8.3\%$ of those who test positive have the disease. The $0.9$ is the probability of a positive test given the disease, which is a different quantity. The marks are for the identification of $P(D)$, $P(T)$ by total probability, the numerator and the final division.

### Example 2 (two machines, 6 marks)

Machine A makes $60\%$ of a factory's items and $2\%$ of its items are defective. Machine B makes the other $40\%$ and $5\%$ of its items are defective. An item is chosen at random and found to be defective. Find the probability that it was made by machine A.

Let $A$ be "made by A" and $F$ be "defective". Then $P(A)=0.6$, $P(F\mid A)=0.02$ and $P(F\mid A')=0.05$. The paths to a defect are $0.6\times0.02=0.012$ through A and $0.4\times0.05=0.020$ through B, so $P(F)=0.032$. Then
$$
P(A\mid F)=\frac{0.012}{0.032}=\frac{3}{8}=0.375.
$$
Although machine A makes most of the items, it accounts for only $37.5\%$ of the defective ones, because its defect rate is lower.

### Example 3 (three causes, 7 marks)

Three suppliers provide $50\%$, $30\%$ and $20\%$ of the components used by a company, with defect rates of $1\%$, $2\%$ and $5\%$ respectively. A component is found to be defective. Find the probability that it came from the third supplier.

The three paths to a defect are $0.5\times0.01=0.005$, $0.3\times0.02=0.006$ and $0.2\times0.05=0.010$. Their sum is $P(F)=0.021$. Therefore
$$
P(S_3\mid F)=\frac{0.010}{0.021}=\frac{10}{21}=0.476.
$$
The other posteriors are $\tfrac{5}{21}$ and $\tfrac{6}{21}$, and the three add to $1$, which is a useful check. The smallest supplier is the most likely source of a defective part because its defect rate is so high.

### Example 4 (a rarer disease, 6 marks)

A condition has prevalence $0.5\%$. A test has sensitivity $99\%$ and specificity $95\%$. Find the probability that a person with a positive test has the condition.

The false positive rate is $1-0.95=0.05$. The probability of a positive test is $0.005\times0.99+0.995\times0.05=0.00495+0.04975=0.0547$. So
$$
P(D\mid T)=\frac{0.00495}{0.0547}=0.0905.
$$
Even with $99\%$ sensitivity, a positive test means only about a $9\%$ chance of having the condition, because the condition is rare and false positives from the large healthy group dominate.

### Example 5 (natural frequencies, 4 marks)

Use $1000$ people to check Example 1.

With a prevalence of $1\%$, $10$ people have the disease and $990$ do not. Of the $10$, $90\%$ test positive, which is $9$. Of the $990$, $10\%$ test positive, which is $99$. The total number of positives is $9+99=108$, and the number of these who are really ill is $9$. So the probability is $\tfrac{9}{108}=\tfrac1{12}$, the same as before. This method uses no formulas, and works well as a check on a longer calculation.

### Example 6 (two positive tests, 7 marks)

Using the test of Example 1, a person is tested twice, independently, and both are positive. Find the probability that they have the disease.

Assume that the tests are independent given the true condition. For someone with the disease the probability of two positives is $0.9^{2}=0.81$. For a healthy person it is $0.1^{2}=0.01$. Then
$$
P(D\mid T_1T_2)=\frac{0.01\times0.81}{0.01\times0.81+0.99\times0.01}=\frac{0.0081}{0.0081+0.0099}=\frac{0.0081}{0.0180}=0.45.
$$
A second positive raises the probability from $8.3\%$ to $45\%$. This is why doctors often repeat a test, or follow a screening test with a more specific one.

### Example 7 (weather forecast, 5 marks)

The probability of rain on a given day is $0.3$. The forecast says rain with probability $0.8$ when it does rain and with probability $0.2$ when it does not. The forecast says rain. Find the probability that it rains, given the forecast.

Let $R$ be "rain" and $F$ be "forecast of rain". Then $P(F)=0.3\times0.8+0.7\times0.2=0.24+0.14=0.38$. So
$$
P(R\mid F)=\frac{0.24}{0.38}=\frac{12}{19}=0.632.
$$
The forecast raises the probability of rain from $0.3$ to $0.632$, but does not make it certain.

### Example 8 (an unknown prior, 7 marks)

Events $A$ and $B$ satisfy $P(B\mid A)=0.8$ and $P(B\mid A')=0.3$, and $P(A\mid B)=0.5$. Find $P(A)$.

Let $P(A)=p$. By Bayes' theorem,
$$
\frac{0.8p}{0.8p+0.3(1-p)}=0.5.
$$
The denominator is $0.5p+0.3$, so $0.8p=0.5(0.5p+0.3)=0.25p+0.15$, giving $0.55p=0.15$ and $p=\tfrac{3}{11}=0.273$. Check: $0.8\times\tfrac{3}{11}=\tfrac{2.4}{11}$ and $0.3\times\tfrac{8}{11}=\tfrac{2.4}{11}$. These are equal, so the posterior is exactly $0.5$. Equality of the two path probabilities is the condition for a posterior of one half.

## Using your GDC

The calculator is used for arithmetic, so the skill is in the setup. Store the two path probabilities in memory, for example $0.009$ and $0.099$, and compute the posterior as the first divided by their sum. This avoids retyping and rounding. For three or more causes, use a list: put the priors in list 1 and the likelihoods in list 2, and use the list product to produce the path probabilities, then sum them. For an unknown prior as in Example 8, form the equation and use the numerical equation solver, then check by substituting back. Keep at least four significant figures in every intermediate value, because rare events can make small rounding errors in the denominator lead to visible errors in the final answer. Give the final answer as an exact fraction when it is simple, and otherwise to three significant figures.

## Common mistakes

- Answering with the likelihood, $P(T\mid D)$, instead of the posterior, $P(D\mid T)$.
- Forgetting to add *all* paths in the denominator, and using $P(B\mid A)P(A)$ alone.
- Confusing specificity with the false positive rate, so that $0.95$ is used where $0.05$ belongs.
- Ignoring the base rate, which is the main reason that results are surprising.
- Using $P(A)$ for $P(A')$ in the second path. The tree branches are $P(A')=1-P(A)$.
- Assuming that repeated tests are independent without justification. They are only independent given the condition if the test errors are unrelated.
- Rounding early, which damages the rare-event calculations.
- Failing to check that posteriors over a partition add to $1$.

## Exam technique and command terms

**Find the probability that** a person has a condition given a positive test should be turned into notation, $P(D\mid T)$, before you start. Draw a tree diagram with the prior branches first and the likelihood branches second. Write the probability of each path beside the end of the branch, and use the paths to find $P(T)$, which earns a mark by itself. Then write Bayes' theorem in the form from the booklet, substitute, and give the result. **Show that** requires every line, usually with fractions. **Comment** invites an observation, such as the effect of the base rate. If the question gives the proportion of the *population* in each group, those are the priors, and if it gives a rate of defect or error, those are the likelihoods. For three causes, show a table of priors, likelihoods and products. Always check that your final probability is smaller than $1$ and that it agrees with a natural-frequency estimate.

## Connections

Bayes' theorem is a direct consequence of the definition of conditional probability and the multiplication rule from SL 4.6, and the tree diagram is the same tree. The medical-test examples show why SL 4.11 insists on choosing the correct denominator for a conditional probability: the denominator is the total of the positives, not the total number of tested people. The theorem prepares for AHL 4.14, where you will compute expected values and variances for distributions that may depend on an unknown cause, and it is the basis for Bayesian statistics, which you may meet in university courses. In Theory of Knowledge it is an example of how evidence should update belief, and why base rates matter in public debates about screening and forensic evidence.

## Check your understanding

1. $P(A)=0.3$, $P(B\mid A)=0.6$ and $P(B\mid A')=0.2$. Find $P(A\mid B)$.
2. A disease has prevalence $2\%$. A test has sensitivity $95\%$ and specificity $98\%$. Find the probability that a person who tests positive has the disease.
3. Three machines make $50\%$, $30\%$ and $20\%$ of the items, with defect rates of $1\%$, $2\%$ and $3\%$. An item is defective. Find the probability that it came from the third machine.
4. A disease has prevalence $10\%$. A test has sensitivity $80\%$ and specificity $90\%$. Find the probability that a person who tests negative has the disease.
5. In a population of $1000$ the prevalence is $1\%$, the sensitivity is $80\%$ and the false positive rate is $10\%$. Use natural frequencies to find the probability that a person who tests positive has the condition.
6. The probability of rain is $0.2$. The forecast says rain with probability $0.9$ when it rains and $0.3$ when it does not. The forecast says rain. Find the probability that it rains, given the forecast.
7. Bag A contains $3$ red and $2$ blue counters and bag B contains $1$ red and $4$ blue. A bag is chosen with $P(A)=0.4$, and a counter is drawn at random and found to be red. Find the probability that it came from bag A.
8. $P(B\mid A)=0.9$, $P(B\mid A')=0.1$ and $P(A)=0.5$. Find $P(A\mid B)$ and $P(A\mid B')$.
9. Explain why a positive result from a test that is $99\%$ sensitive may still mean that the person is probably healthy.
10. $P(B\mid A)=0.8$, $P(B\mid A')=0.3$ and $P(A\mid B)=0.5$. Find $P(A)$.

### Answers

1. $P(B)=0.18+0.14=0.32$, so $P(A\mid B)=\tfrac{0.18}{0.32}=\tfrac{9}{16}=0.5625$.
2. Numerator $0.02\times0.95=0.019$. False positives $0.98\times0.02=0.0196$. So the posterior is $\tfrac{0.019}{0.0386}=0.492$.
3. The paths are $0.005$, $0.006$ and $0.006$, so $P(F)=0.017$. The answer is $\tfrac{0.006}{0.017}=\tfrac{6}{17}=0.353$.
4. $P(\text{neg}\mid D)=0.2$ and $P(\text{neg}\mid D')=0.9$. The paths are $0.1\times0.2=0.02$ and $0.9\times0.9=0.81$. So $P(D\mid\text{neg})=\tfrac{0.02}{0.83}=0.0241$.
5. Of $1000$ people, $10$ have the condition and $8$ of them test positive. Of the $990$ without it, $99$ test positive. The probability is $\tfrac{8}{8+99}=\tfrac{8}{107}=0.0748$.
6. $P(F)=0.2\times0.9+0.8\times0.3=0.18+0.24=0.42$. $P(R\mid F)=\tfrac{0.18}{0.42}=\tfrac37=0.429$.
7. $P(\text{red})=0.4\times0.6+0.6\times0.2=0.24+0.12=0.36$. $P(A\mid\text{red})=\tfrac{0.24}{0.36}=\tfrac23=0.667$.
8. $P(B)=0.45+0.05=0.5$. $P(A\mid B)=\tfrac{0.45}{0.5}=0.9$. For $B'$: $P(B')=0.5$, the numerator is $0.5\times0.1=0.05$, so $P(A\mid B')=\tfrac{0.05}{0.5}=0.1$.
9. If the condition is rare, the healthy group is very large. A small false positive rate applied to that large group can produce more false positives than the true positives found among the small sick group, so most positives are false.
10. $\tfrac{0.8p}{0.8p+0.3(1-p)}=0.5$ leads to $0.8p=0.25p+0.15$, so $p=\tfrac{0.15}{0.55}=\tfrac{3}{11}=0.273$.

## Summary

- $P(A\mid B)=\dfrac{P(B\mid A)P(A)}{P(B)}$, where $P(B)=P(B\mid A)P(A)+P(B\mid A')P(A')$ by total probability.
- For a partition $A_1,\dots,A_n$ the denominator is the sum over all $n$ paths, and the posteriors add to $1$.
- On a tree: posterior $=$ (path of interest) divided by (all paths to the evidence).
- Sensitivity is $P(+\mid\text{condition})$ and specificity is $P(-\mid\text{no condition})$. The false positive rate is $1-$ specificity.
- When the base rate is low, false positives can outnumber true positives. Natural frequencies make this clear.
- Independent repeated tests multiply the likelihoods and can raise the posterior quickly.
