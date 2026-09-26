# Probability concepts and expected counts

> **SL 4.5 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Probability quantifies uncertainty between zero and one. With equally likely outcomes, favorable cases can be counted relative to all possible cases. An expected count over repeated trials is an average prediction, not a guarantee for any particular batch.

## Formula, meaning and conditions

For equally likely outcomes, $P(A)=\#A/\#\Omega$. In $n$ comparable trials with event probability $p$, the expected number of occurrences is $np$. A complement has probability $P(A^c)=1-P(A)$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 7 (PDF p. 9), lists equally likely outcomes and complement under SL 4.5. Derive and justify all other steps and conditions.

## Worked example

Two fair dice have $36$ equally likely ordered outcomes. A sum of $7$ occurs in six ordered pairs: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$. Thus $P(\text{sum }7)=6/36=1/6$. In $120$ independent repetitions, the expected number of such sums is $120(1/6)=20$; exactly $20$ need not occur.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Define a sample space and count favorable equally likely outcomes.
2. Use complements to handle “at least one” events.
3. Convert event probability into expected count over repeated comparable trials.

## Why the method works

The favorable-over-total rule assumes elementary outcomes are equally likely; it cannot be used unchanged for a biased device. A complement is useful when the event describes many overlapping ways to occur. An expected count $np$ across $n$ trials is an average over repetitions, not a promise that exactly $np$ successes occur.

## A contrasting worked route

If a fair die is rolled twice, the chance of at least one six is $1-(5/6)^2=11/36$. Counting “first is six” and “second is six” separately without subtracting their intersection would overcount the double six. Across $36$ independent pairs, the expected number of pairs with a six is $36(11/36)=11$, but observed counts may differ.

## Transfer and validation

Use a tree or two-way table when outcomes have unequal likelihood or conditional structure. An event and its complement always sum to one, providing a quick check. Distinguish count, probability and percentage in final reporting, and round only after an exact fraction is established.

## Exam lens

Paper 1 style: make the sample space explicit and distinguish an ordered pair from an unordered selection. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

An expected count of $20$ does not mean every set of $120$ rolls contains exactly $20$ successes.

## Try it yourself

A fair coin is tossed 50 times. How many heads are expected?

## Checked answer

$50(1/2)=25$ on average.

---

[Statistics & Probability master guide](/units/statistics-and-probability/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
