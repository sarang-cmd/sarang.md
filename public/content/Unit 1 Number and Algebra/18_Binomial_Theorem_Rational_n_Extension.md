---
title: "Binomial Theorem (Rational n Extension)"
order: 18
category: "Binomial Theorem"
tags: ["binomial", "series", "hl"]
prev: "17_Binomial_Theorem_Positive_Integer_n.md"
next: "19_Master_Formula_Sheet_And_Old_Test_Strategy.md"
---

# The Binomial Theorem — Rational n (HL Extension)

The HL-only extension of the binomial theorem beyond positive integer powers — a natural final step after mastering the integer-n version.

## The Key Difference

For \(n\in\mathbb{Z}^+\), the expansion of \((a+b)^n\) is a **finite** sum (it terminates after \(n+1\) terms). For \(n\) rational (fractions, negative numbers), the expansion becomes an **infinite series** that never terminates, and it is only valid — only equal to the original expression — under a specific condition.

## The Formula (in the formula booklet)

$$(1+x)^n = 1+nx+\frac{n(n-1)}{2!}x^2+\frac{n(n-1)(n-2)}{3!}x^3+\cdots, \qquad n\in\mathbb{Q}, \ |x|<1$$

**The validity condition \(|x|<1\) is not optional** — without it the infinite series doesn't actually converge to the value of \((1+x)^n\), and examiners score this condition explicitly.

## Adapting Expressions to Match \((1+x)^n\) Form

Many questions don't hand you \((1+x)^n\) directly — you must manipulate the expression first.

**Example.** Expand \((4-x)^{-1}\) in ascending powers of \(x\), stating the validity range.
Factor out the 4: \((4-x)^{-1} = \left[4\left(1-\frac x4\right)\right]^{-1} = \frac14\left(1-\frac x4\right)^{-1}\).
Now apply the series with \(n=-1\), replacing "x" in the formula with \(-\frac x4\):
\(\left(1-\frac x4\right)^{-1} = 1+(-1)\left(-\frac x4\right)+\frac{(-1)(-2)}{2!}\left(-\frac x4\right)^2+\cdots = 1+\frac x4+\frac{x^2}{16}+\cdots\)
So \((4-x)^{-1}=\frac14\left(1+\frac x4+\frac{x^2}{16}+\cdots\right)=\frac14+\frac{x}{16}+\frac{x^2}{64}+\cdots\)
Validity: since we substituted \(-\frac x4\) for "x" in the formula, we need \(\left|\frac x4\right|<1 \Rightarrow |x|<4\).

## Worked Examples

**1. Direct application.** Expand \((1+x)^{1/2}\) up to the \(x^2\) term.
\(1+\frac12 x+\frac{\frac12(-\frac12)}{2!}x^2+\cdots = 1+\frac12x-\frac18x^2+\cdots\), valid for \(|x|<1\).

**2. Negative integer n (still uses this extended formula since it produces an infinite series).** Expand \((1+x)^{-2}\) up to the \(x^3\) term.
\(1+(-2)x+\frac{(-2)(-3)}{2!}x^2+\frac{(-2)(-3)(-4)}{3!}x^3+\cdots = 1-2x+3x^2-4x^3+\cdots\)

**3. Approximation application.** Use the expansion of \((1+x)^{1/2}\) up to the \(x^2\) term to approximate \(\sqrt{1.02}\).
Let \(x=0.02\): \(\sqrt{1.02}\approx1+\frac12(0.02)-\frac18(0.02)^2=1+0.01-0.00005=1.00995\).
(Compare to the true value ≈1.009950494 — the approximation is very close, demonstrating why this technique is useful.)

**4. Full transformation example.** Expand \((2+x)^{-2}\) in ascending powers of \(x\) up to the \(x^2\) term, stating the range of validity.
\((2+x)^{-2}=\left[2\left(1+\frac x2\right)\right]^{-2}=\frac14\left(1+\frac x2\right)^{-2}\)
\(\left(1+\frac x2\right)^{-2}=1+(-2)\left(\frac x2\right)+\frac{(-2)(-3)}{2!}\left(\frac x2\right)^2+\cdots=1-x+\frac{3x^2}4+\cdots\)
So \((2+x)^{-2}=\frac14-\frac x4+\frac{3x^2}{16}+\cdots\), valid for \(\left|\frac x2\right|<1 \Rightarrow |x|<2\).

## Question Types

- Expand \((1+x)^n\) directly for a given rational/negative \(n\), up to a stated term.
- Expand a transformed expression like \((a+bx)^n\) — factor out \(a\) first, adjust the validity range accordingly.
- Use a low-order expansion to approximate a numeric value (like \(\sqrt{1.02}\)).
- State the range of validity for a given expansion — always required, always scored.

## Common Mistakes

- Forgetting to factor out the leading constant before applying the standard \((1+x)^n\) form when the expression isn't already in that exact shape.
- Getting the validity range wrong after a substitution — it must be expressed in terms of the ORIGINAL variable, adjusted for whatever was substituted (see the \(|x|<4\) and \(|x|<2\) examples above).
- Sign errors in the coefficients when \(n\) is negative (the pattern of signs in \(n(n-1)(n-2)\cdots\) needs care).
- Treating this as a finite expansion and "finishing" it — it never terminates for non-positive-integer \(n\); only go up to the term requested.
- Forgetting factorial denominators (\(2!, 3!,\) etc.) in each successive term.

## Self-Test

1. Expand \((1+x)^{-1}\) up to the \(x^3\) term.
2. Expand \((1-x)^{1/2}\) up to the \(x^2\) term, stating validity.
3. Expand \((3+x)^{-1}\) in ascending powers of x up to the \(x^2\) term, stating the range of validity.
4. Use the expansion of \((1+x)^{1/3}\) up to the \(x^2\) term to approximate \(\sqrt[3]{1.03}\).

**Answers:**
1. \(1-x+x^2-x^3+\cdots\), valid \(|x|<1\).
2. \(1-\frac12x-\frac18x^2+\cdots\), valid \(|x|<1\).
3. \((3+x)^{-1}=\frac13\left(1+\frac x3\right)^{-1}=\frac13-\frac{x}{9}+\frac{x^2}{27}+\cdots\), valid \(|x|<3\).
4. \(1+\frac13(0.03)-\frac19(0.03)^2\approx1+0.01-0.0001=1.0099\).

---

**Category:** Binomial Theorem

[← Binomial Theorem (Positive Integer n)](17_Binomial_Theorem_Positive_Integer_n.md) · [Master Formula Sheet & Old-Test Strategy →](19_Master_Formula_Sheet_And_Old_Test_Strategy.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
