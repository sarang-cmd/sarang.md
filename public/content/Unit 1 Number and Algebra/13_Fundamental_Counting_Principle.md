---
id: "13"
file: "13_Fundamental_Counting_Principle.md"
title: "Fundamental Counting Principle"
category: "Counting"
tags: ["counting", "multiplication principle", "choices", "probability"]
order: 13
prev: "12_Induction_And_Divisibility.md"
next: "14_Permutations_And_Arrangements.md"
---
# Fundamental Counting Principle

When a task happens in **stages**, multiply the number of available choices at each stage. If the choices are mutually exclusive alternatives, add instead. Deciding which situation you have is the heart of the question.

## Choices in stages

If you have 3 shirts and 4 pairs of trousers, then there are \(3\times4=12\) outfits. Every shirt can be paired with each pair of trousers.

For a code with two letters followed by three digits, with repetition permitted, the number of possibilities is

$$26\times26\times10\times10\times10=26^2(10^3)=676000.$$

If digits could *not* repeat, the digit stages would instead have \(10,9,8\) choices. A small condition in the wording changes the count.

## Make a slot diagram

```text
letter   letter   digit   digit   digit
  26   ×   26   ×  10  ×   10  ×   10
```

**Try it:** A café offers 4 drinks, 3 sandwiches, and 2 sides. How many meals consist of one of each? How many choices are there if you only want a drink *or* a sandwich?

> **Exam lens:** Ask whether order matters and whether repetition is allowed *before* using a counting formula.
