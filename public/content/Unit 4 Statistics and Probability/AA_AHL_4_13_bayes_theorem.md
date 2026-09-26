# Bayes theorem

> **AHL 4.13 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Bayes theorem updates a probability after new evidence. A positive test can be more likely among affected people yet still have a modest positive predictive value when the condition is rare. A probability tree or frequency table makes the denominators transparent.

## Formula, meaning and conditions

$P(A\mid B)=P(B\mid A)P(A)/P(B)$ when $P(B)>0$, where $P(B)=P(B\mid A)P(A)+P(B\mid A^c)P(A^c)$ for a two-case partition. Name the prior, likelihood and evidence before substituting.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists Bayes theorem in partition forms under AHL 4.13. Derive and justify all other steps and conditions.

## Worked example

A condition affects $1\%$ of people; sensitivity is $90\%$ and the false-positive rate is $5\%$. The joint chance of condition and positive test is $0.01(0.90)=0.009$. All positives have probability $0.009+0.99(0.05)=0.0585$. Hence $P(\text{condition}\mid\text{positive})=0.009/0.0585\approx0.1538$, or about $15.4\%$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Create prior, likelihood and evidence branches for a test.
2. Normalize a desired branch against all ways to obtain the evidence.
3. Examine how a low base rate changes a positive-test posterior.

## Why the method works

Bayes theorem reverses a conditional probability, but $P(A\mid B)$ is not generally $P(B\mid A)$. The numerator is the probability of the joint path, and the denominator is the total probability of the evidence from every partition branch. Even a sensitive test can yield a modest posterior when false positives are common relative to a rare condition.

## A contrasting worked route

If $1\%$ have a condition, sensitivity is $90\%$ and specificity is $90\%$, the joint true-positive probability is $0.01(0.90)=0.009$. False positives occur with probability $0.99(0.10)=0.099$. Thus a positive result has posterior $0.009/(0.009+0.099)=1/12\approx0.0833$, not $0.90$.

## Transfer and validation

A probability tree with normalized branch endpoints checks that you included every way evidence can happen. Define exactly which event a test result denotes; confusing specificity with false-positive rate changes the denominator. Round at the end, especially when an event is rare.

## Exam lens

Paper 2 style: draw the tree first so the false-positive branch is included in the denominator. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Sensitivity $P(+\mid A)$ is not the same as positive predictive value $P(A\mid+)$. Reverse the conditioning with Bayes.

## Try it yourself

If $P(A)=1/2$, $P(+\mid A)=1$ and $P(+\mid A^c)=1/2$, find $P(A\mid+)$.

## Checked answer

$(1/2)/[(1/2)+(1/2)(1/2)]=2/3$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
