---
id: "05"
file: "05_Recursive_Sequences.md"
title: "Recursive Sequences"
category: "Sequences & Series"
tags: ["recursion", "sequence", "explicit rule", "pattern"]
order: 5
prev: "04_Sigma_Notation_And_Summations.md"
next: "06_Infinite_Geometric_Series.md"
---
# Recursive Sequences

A **recursive rule** tells you how to get a term from earlier terms. An explicit rule calculates \(u_n\) directly from \(n\). Each view can reveal something the other hides.

## From one term to the next

Consider the sequence defined by

$$u_1=2,\qquad u_{n+1}=u_n+3n\quad(n\ge1).$$

The first few terms are \(2,5,11,20,\ldots\). The differences are \(3,6,9,\ldots\), so the sequence is **not** arithmetic: the difference itself changes.

To find an explicit formula, add all the increments from \(1\) to \(n-1\):

$$u_n=2+3\sum_{k=1}^{n-1}k=2+\frac{3n(n-1)}{2}.$$

Check \(n=4\): \(2+\tfrac{3(4)(3)}{2}=20\), matching the recursive calculation.

## A working method

1. Write down the initial value and the update rule separately.
2. Generate three or four terms to spot errors in the indices.
3. If asked for a distant term, look for a sum or an explicit form.

**Try it:** Let \(v_1=5\) and \(v_{n+1}=v_n+2n\). Find \(v_4\), then write \(v_n\) using sigma notation.

> **Exam lens:** A recurrence needs an initial condition. Without it, the rule does not identify a unique sequence.
