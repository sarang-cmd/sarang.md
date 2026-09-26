# Conditional probabilities and independence tests

> **SL 4.11 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A two-way table or probability tree exposes which group is used as a denominator. To test independence, compare a conditional probability with its unconditional counterpart, or compare the intersection with the product of marginals. Either method requires the relevant probabilities to be defined.

## Formula, meaning and conditions

If $P(B)>0$, independence is equivalent to $P(A\mid B)=P(A)$. It is also equivalent to $P(A\cap B)=P(A)P(B)$. Mutually exclusive positive-probability events cannot be independent.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 4.11. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Suppose $P(A)=0.5$, $P(B)=0.4$ and $P(A\cap B)=0.2$. Then $P(A\mid B)=0.2/0.4=0.5=P(A)$. The product test agrees: $0.5(0.4)=0.2$. These two events are independent in the modeled probability space, but they still overlap.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Compute conditional probabilities from a two-way table.
2. Test independence with a product or equivalent conditional equality.
3. Distinguish a zero intersection from a zero probability of the conditioning event.

## Why the method works

A fraction obtained from a table needs the population defined by its denominator. If the condition is “given $B$,” the denominator counts only $B$ outcomes. Independence can be assessed with $P(A\cap B)=P(A)P(B)$ without dividing by a probability that might be zero. Mutually exclusive positive-probability events instead have zero intersection.

## A contrasting worked route

In a group of $100$, suppose $40$ study chemistry, $25$ study physics and $10$ study both. Then $P(\text{chemistry}\mid\text{physics})=10/25=0.4$, while $P(\text{physics}\mid\text{chemistry})=10/40=0.25$. Since $0.4(0.25)=0.10=10/100$, these events are independent in this table despite the different conditional directions.

## Transfer and validation

A table can express frequencies rather than probabilities; divide by the appropriate total only after choosing the event. Check that all cells are nonnegative and totals are consistent. If two events both have positive probability, they cannot be simultaneously independent and mutually exclusive.

## Exam lens

Paper 1 style: state the test used and compute both sides; avoid concluding independence from visual similarity in a small sample alone. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$P(A\mid B)$ divides by $P(B)$, not $P(A)$. Read the condition after the vertical bar as the new reference population.

## Try it yourself

If $P(A)=0.3$ and $P(B)=0.4$ are independent, find $P(A\cap B)$.

## Checked answer

$0.3(0.4)=0.12$.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
