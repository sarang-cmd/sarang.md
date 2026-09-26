---
title: "Key GDC Skills"
order: 1
category: "Foundations"
tags: ["gdc", "calculator", "paper2"]
prev: "00_Master_Index_And_Exam_Strategy.md"
next: "02_Arithmetic_Sequences.md"
---

# Key GDC Skills

**Lessons:** 3 · Graphing/tracing, solving n-equation simultaneous systems, solving equations numerically and graphically, solving inequalities graphically.

This is Paper 2 territory, but the reasoning underlies how you're expected to solve messier sequence and financial equations.

## 1. Graphing and Tracing Functions

- Adjust the viewing window so the relevant behavior is actually visible — a wrong window is the most common reason for "no solution found."
- Use trace / G-solve / analyze-graph tools to read off roots, intersections, and turning points.
- Plot \(u_n\) as discrete points against \(n\) to visually confirm whether a sequence increases, decreases, or converges.

## 2. Solving Simultaneous Equations

Used constantly in sequences — two conditions on an AP or GP give two equations for \(u_1\) and \(d\) (or \(r\)).

**Worked example.** An AP has \(u_3=11\) and \(u_7=27\). Find \(u_1\) and \(d\).
\(u_1+2d=11\), \(u_1+6d=27\). Subtract: \(4d=16 \Rightarrow d=4\), then \(u_1=3\). Linear systems like this go straight into the GDC's simultaneous solver; non-linear systems (e.g. involving \(r^2\)) usually need substitution by hand first.

## 3. Solving Equations Numerically and Graphically

Essential when an equation can't be rearranged cleanly — exponential equations from compound interest, or \(u_1 r^{n-1} = \text{target}\) solved for \(n\). Always sanity-check the number of solutions against context (reject negative or non-integer \(n\)).

## 4. Solving Inequalities Graphically

Rearrange to \(f(x) > 0\), graph, and read off the region. Common in sequence contexts: "find the smallest \(n\) such that \(S_n > 1000\)" — plot \(S_n\), find the crossing point, then round **up** even if the crossing is close to the next integer below.

## Question Types

- Find \(n\) such that a sum/term exceeds a target — numerical solve or graphical, round correctly for integer \(n\).
- Two conditions given, find \(u_1\) and \(d\)/\(r\) — simultaneous equations.
- "At what year does an investment double?" — graphical or numerical solve on the compound interest formula.

## Common Mistakes

- Forgetting to round \(n\) to a whole number, and rounding the wrong direction for "at least" vs "at most."
- Reporting a decimal answer without checking it makes sense in context.

## Self-Test

1. Why might a numerical solver return only one root when two exist?
2. An AP has \(u_2=5\), \(u_5=17\). Describe the GDC steps to find \(u_1\) and \(d\).
3. Describe the graphical method for the smallest \(n\) such that \(S_n>500\) for a GP.

**Answers:** (1) The solver's search window/domain may exclude the second root — always check the full relevant domain. (2) Enter \(u_1+d=5\) and \(u_1+4d=17\) into the simultaneous solver. (3) Graph \(S_n\) vs \(n\), find where it crosses 500, round the crossing point up to the next whole number.

---

**Category:** Foundations

[← Master Index & Exam Strategy](00_Master_Index_And_Exam_Strategy.md) · [Arithmetic Sequences →](02_Arithmetic_Sequences.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
