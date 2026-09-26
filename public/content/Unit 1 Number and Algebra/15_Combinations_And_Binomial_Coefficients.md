---
id: "15"
file: "15_Combinations_And_Binomial_Coefficients.md"
title: "Combinations & Binomial Coefficients"
category: "Counting"
tags: ["combinations", "choose", "binomial coefficient", "counting"]
order: 15
prev: "14_Permutations_And_Arrangements.md"
next: "16_Binomial_Theorem_Positive_Integers.md"
---
# Combinations & Binomial Coefficients

A **combination** is a selection where order does not matter. Choosing Alex then Bea gives the same pair as choosing Bea then Alex.

## Count without ordering

There are \(^{n}P_r\) ordered selections of \(r\) objects from \(n\). Every group of \(r\) appears in \(r!\) orders, so

$$\binom{n}{r}=\frac{n!}{r!(n-r)!}.$$

Choosing four students from ten gives \(\binom{10}{4}=210\) possible groups. There is no first, second, third, or fourth place within a group.

## Two useful identities

$$\binom{n}{r}=\binom{n}{n-r},\qquad
\binom{n}{r}+\binom{n}{r+1}=\binom{n+1}{r+1}.$$

The first identity says choosing the group is equivalent to choosing who is **left out**. The second is Pascal's identity: a binomial coefficient is the sum of the two above it in Pascal's triangle.

**Try it:** A committee of three is chosen from eight people. How many committees include a particular person? How many exclude them? Check that the counts add to \(\binom{8}{3}\).

> **Exam lens:** If the question says “select,” “committee,” or “group,” check for combinations. If it names roles, order may matter after all.
