# Induction, contradiction and counterexample

> **AHL 1.15 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

These methods answer different logical tasks. Induction proves a claim on an integer domain step by step. Contradiction assumes the negation and derives an impossibility. A counterexample disproves a universal statement with one legal failing case.

## Formula, meaning and conditions

For induction, show $P(n_0)$, assume $P(k)$, derive $P(k+1)$, then conclude. For a counterexample, exhibit $c$ in the stated domain with $P(c)$ false. A finite list of successful tests cannot establish $\forall n\,P(n)$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.15. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Prove $1+3+\cdots+(2n-1)=n^2$ for positive integers. Base $n=1$: $1=1^2$. Assume the sum of the first $k$ odd integers is $k^2$. Add the next odd integer $2k+1$: $k^2+(2k+1)=(k+1)^2$. Therefore the formula holds for all positive integers by induction. To disprove $x^2\geq x$ for every real $x$, use $x=1/2$: $1/4<1/2$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Prove a sum or divisibility result by induction with four explicit stages.
2. Prove an impossibility by assuming its negation and reaching a contradiction.
3. Disprove a universal statement with one valid counterexample.

## Why the method works

Induction connects a verified starting case to every later integer by a step that holds for an arbitrary $k$. A contradiction instead starts by assuming the opposite of the intended statement. A counterexample reverses neither process: it demonstrates that a universal claim already fails at a specific permitted input. Choose the method from the logical structure, not from how familiar the algebra looks.

## A contrasting worked route

Suppose $1+2+\cdots+n=n(n+1)/2$. The base case $n=1$ holds. Assuming the formula at $k$, adding $k+1$ gives $k(k+1)/2+(k+1)=(k+1)(k+2)/2$. This is the statement at $k+1$ and completes induction. Merely writing the formula for $k+1$ without deriving it from the hypothesis would leave a gap.

## Transfer and validation

For a contradiction proof, say precisely which statement is negated. In an irrationality proof, a fraction in lowest terms gives an extra fact about common factors; omitting that assumption invalidates the last contradiction. For a counterexample, check it belongs to the quantified domain before declaring the claim false.

## Exam lens

Paper 1 style: label the four induction steps; choose a counterexample only for a false universal claim. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

The induction hypothesis is assumed only for the step. It is not the final proof until the base and implication have both been established.

## Try it yourself

Give a counterexample to “every integer has a positive square” and explain why it works.

## Checked answer

$n=0$ is an integer and $0^2=0$ is not positive.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
