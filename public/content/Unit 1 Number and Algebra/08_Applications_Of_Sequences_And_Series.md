---
id: "08"
file: "08_Applications_Of_Sequences_And_Series.md"
title: "Applications of Sequences & Series"
category: "Sequences & Series"
tags: ["applications", "compound interest", "growth", "modelling"]
order: 8
prev: "07_Convergence_And_Limits.md"
next: "09_Proof_By_Deduction.md"
---
# Applications of Sequences & Series

Many real situations repeat the same *additive* change or the same *multiplicative* change. The first question is which one your context describes.

## A model for repeated growth

If an amount \(P\) grows by a fraction \(i\) each period, then after \(n\) periods it becomes

$$A_n=P(1+i)^n.$$

This is a geometric model with ratio \(1+i\). If the growth rate is \(3\%\), use \(i=0.03\), not \(3\).

For an initial balance of €1000 at \(3\%\) annual growth, the balance after ten years is

$$A_{10}=1000(1.03)^{10}\approx\text{€}1343.92.$$

Round money **at the end**, not at each intermediate step. A situation with a fixed €30 increase each year would instead be arithmetic.

## Modelling checklist

- Identify the first value and the time it represents.
- Decide whether the change is added or multiplied.
- Keep the units of time consistent with the rate.
- Check whether the answer needs a whole number of periods.

**Try it:** A tank contains 500 litres and loses 10% of its contents each day. Write a formula for the amount after \(n\) days and find the amount after three days.

> **Exam lens:** Explain why the model is geometric or arithmetic; don't jump straight to a formula.
