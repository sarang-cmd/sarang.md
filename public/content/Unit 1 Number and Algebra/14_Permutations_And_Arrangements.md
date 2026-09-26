---
id: "14"
file: "14_Permutations_And_Arrangements.md"
title: "Permutations & Arrangements"
category: "Counting"
tags: ["permutations", "arrangements", "factorial", "order"]
order: 14
prev: "13_Fundamental_Counting_Principle.md"
next: "15_Combinations_And_Binomial_Coefficients.md"
---
# Permutations & Arrangements

A **permutation** is an arrangement where order matters. Placing A before B gives a different outcome from placing B before A.

## Arranging distinct objects

The factorial \(n!\) counts ways to arrange \(n\) distinct objects. When you choose and arrange only \(r\) of the \(n\), the count is

$$^{n}P_r=\frac{n!}{(n-r)!}.$$

For five runners filling gold, silver, and bronze positions, there are \(5\times4\times3=60\) podiums. The medals make order important.

## When objects repeat

Arranging the five letters of **LEVEL** gives fewer than \(5!\) distinct words because the two Ls are indistinguishable, as are the two Es. Divide by the ways those identical letters can swap:

$$\frac{5!}{2!\,2!}=30.$$

| Question | Does order matter? | Count |
| --- | --- | --- |
| Award gold, silver, bronze | Yes | \(^{n}P_3\) |
| Pick a three-person team | No | \(\binom{n}{3}\) |

**Try it:** In how many ways can four of seven distinct books be placed in a row?

> **Exam lens:** Before pressing an \(nP r\) key, tell yourself why swapping two selected objects creates a new result.
