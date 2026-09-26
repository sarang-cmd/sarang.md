# Standard form

> **SL 1.1 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Standard form separates a nonzero quantity into a significand and a power of ten. It makes orders of magnitude visible: a small measurement has a negative power, while a large count has a positive power. Scientific notation is particularly useful when a question mixes microscopic and astronomical scales.

## Formula, meaning and conditions

Write $a\times10^k$, where $1\leq |a|<10$ and $k$ is an integer. For multiplication, multiply the significands and add the exponents; normalize the result afterward. Preserve the precision justified by the inputs.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 1.1. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Express $0.0000723$ in standard form: move the decimal point five places right to get $7.23$, hence $0.0000723=7.23\times10^{-5}$. Now multiply $(3.2\times10^5)(4\times10^{-3})$: $3.2(4)\times10^{5-3}=12.8\times10^2=1.28\times10^3$. The final coefficient is in the required interval.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Normalize a nonzero number and distinguish its sign from its order of magnitude.
2. Multiply and divide quantities by combining powers first, then renormalizing.
3. Round only after calculation; explain how many significant figures the context supports.

## Why the method works

Moving a decimal point does not change a value unless the power of ten compensates for that move. Increasing the significand by a factor of ten requires decreasing the exponent by one. This invariant gives a reliable check when calculator output uses E notation. Two measurements with equal exponents are not necessarily comparable without comparing their significands.

## A contrasting worked route

For division, try $(6.0\times10^7)/(2.0\times10^{-2})=3.0\times10^9$: subtracting exponents means $7-(-2)=9$. Addition is different: $2\times10^3+3\times10^2=2.3\times10^3$, not $5\times10^5$. Align powers before combining significands. Zero has no unique normalized representation of this kind.

## Transfer and validation

In a scientific estimate, write the unit beside each intermediate result and ask whether the output is larger or smaller than the starting quantities. A negative exponent means a small scale, not a negative number. This separates arithmetic validity, notation requirements, and the precision of the original measurements.

## Exam lens

Paper 1 style: show the exponent arithmetic explicitly. In a context, compare the resulting order of magnitude with the original measurements. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$12.8\times10^2$ has the right value but is not in standard form. Rewrite it as $1.28\times10^3$.

## Try it yourself

Write $0.0000064$ in standard form and evaluate $(2\times10^4)(3\times10^{-2})$.

## Checked answer

$6.4\times10^{-6}$ and $6\times10^2=600$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
