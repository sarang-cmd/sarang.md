# Combined, conditional and independent events

> **SL 4.6 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

The addition rule corrects double counting in overlapping events. Conditional probability changes the reference population to those outcomes where the condition holds. Independence means learning one event does not change the probability of the other; it is not the same as mutual exclusivity.

## Formula, meaning and conditions

$P(A\cup B)=P(A)+P(B)-P(A\cap B)$; if $P(B)>0$, $P(A\mid B)=P(A\cap B)/P(B)$. Independence is $P(A\cap B)=P(A)P(B)$. Mutual exclusivity means $P(A\cap B)=0$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists union, mutual exclusion, conditional probability and independence under SL 4.6. Derive and justify all other steps and conditions.

## Worked example

Let $P(A)=0.6$, $P(B)=0.5$ and $P(A\cap B)=0.2$. Then $P(A\cup B)=0.6+0.5-0.2=0.9$. Also $P(A\mid B)=0.2/0.5=0.4$. Since $P(A)P(B)=0.3\neq0.2$, the events are not independent. They are not mutually exclusive because their intersection has positive probability.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Calculate unions without double-counting intersections.
2. Use the correct conditioning event in $P(A\mid B)$.
3. Test independence separately from mutual exclusivity.

## Why the method works

The union includes everything in either event, with the overlap subtracted once. Conditioning on $B$ restricts the sample space to $B$, giving $P(A\cap B)/P(B)$ only when $P(B)>0$. Independence means knowing one event does not change the other probability; mutually exclusive nonempty events instead cannot happen together and are normally dependent.

## A contrasting worked route

If $P(A)=0.6$, $P(B)=0.5$ and $P(A\cap B)=0.3$, the union is $0.8$ and $P(A\mid B)=0.3/0.5=0.6$. Since $P(A)P(B)=0.3$, these events are independent despite overlapping. Calling them mutually exclusive would require intersection zero and contradict the given data.

## Transfer and validation

A probability tree displays products along branches and sums across disjoint endings. State the condition event before inserting numbers. When using a table, row and column totals should agree with the whole population; wrong denominators are a common source of plausible but incorrect conditional percentages.

## Exam lens

Paper 2 style: draw a Venn diagram or probability tree and state what the conditional denominator represents. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

“Independent” does not mean “cannot happen together.” Nontrivial mutually exclusive events are generally dependent.

## Try it yourself

If $P(A)=0.4$, $P(B)=0.3$ and $P(A\cap B)=0.1$, find $P(A\cup B)$.

## Checked answer

$0.4+0.3-0.1=0.6$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
