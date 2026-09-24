---
title: "Binomial Theorem (Positive Integer n)"
order: 17
category: "Binomial Theorem"
tags: ["binomial", "expansion"]
prev: "16_Pascals_Triangle.md"
next: "18_Binomial_Theorem_Rational_n_Extension.md"
---

# The Binomial Theorem — Positive Integer n

Extends Pascal's Triangle into a full algebraic tool for expanding \((a+b)^n\) without listing every term by hand, and for finding a single term without expanding everything.

## The Theorem (in the formula booklet)

$$(a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r, \qquad n \in \mathbb{Z}^+$$

Each term's coefficient is \({}^nC_r\), matching Pascal's Triangle exactly.

## The General Term

$$T_{r+1} = \binom{n}{r} a^{n-r} b^r$$

This lets you jump directly to any specific term (the \((r+1)\)th term) without expanding the full binomial — essential for "find the coefficient of..." or "find the term independent of x" questions.

## Worked Examples

**1. Full expansion.** \((x+2)^4\): using row 4 coefficients \(1,4,6,4,1\):
\(x^4+4x^3(2)+6x^2(2)^2+4x(2)^3+2^4 = x^4+8x^3+24x^2+32x+16\).

**2. Negative second term (sign care).** \((2x-3)^3\): treat \(b=-3\).
\(\binom30(2x)^3(-3)^0+\binom31(2x)^2(-3)^1+\binom32(2x)^1(-3)^2+\binom33(2x)^0(-3)^3\)
\(=8x^3-36x^2+54x-27\).

**3. Find a specific coefficient.** Find the coefficient of \(x^5\) in \((x+3)^8\).
General term: \(T_{r+1}=\binom8r x^{8-r}3^r\). Need \(8-r=5 \Rightarrow r=3\).
Coefficient \(=\binom83 3^3 = 56\times27=1512\).

**4. Find the constant term.** Find the term independent of \(x\) in \(\left(x^2+\frac1x\right)^9\).
General term: \(\binom9r (x^2)^{9-r}\left(\frac1x\right)^r=\binom9r x^{18-2r-r}=\binom9r x^{18-3r}\).
Set \(18-3r=0 \Rightarrow r=6\). Constant term \(=\binom96=84\).

**5. Find an unknown coefficient.** Given the coefficient of \(x^2\) in \((1+kx)^5\) is 80, find \(k\).
General term: \(\binom5r (kx)^r\). Need \(r=2\): \(\binom52 k^2 = 10k^2=80 \Rightarrow k^2=8 \Rightarrow k=\pm2\sqrt2\) (keep both unless context restricts sign).

## Question Types

- Expand \((a+b)^n\) fully — watch signs when \(b\) is negative.
- Find the coefficient of a specific power of \(x\) — use the general term, solve for \(r\), substitute back.
- Find the term independent of x (constant term) — set the total power of \(x\) to zero, solve for \(r\).
- Find an unknown constant given a coefficient — set up the general term equation, solve (often a quadratic — check both roots make sense).

## Common Mistakes

- Sign errors when \(b\) is negative — forgetting alternating signs across terms.
- Confusing \(T_{r+1}\) with \(T_r\) — the general term is the \((r+1)\)th term, so \(r\) starts at 0.
- Solving for \(r\) but forgetting to check it's a non-negative integer with \(0\le r\le n\) before substituting back.
- Arithmetic slips computing \({}^nC_r\) for larger \(n\) — simplify using the factorial cancellation method from the Counting page.
- Forgetting to raise BOTH the coefficient and variable parts of \(a\) and \(b\) to their respective powers (e.g. \((2x)^3=8x^3\), not \(2x^3\)).

## Self-Test

1. Expand \((x-1)^4\) fully.
2. Find the coefficient of \(x^4\) in \((x+2)^7\).
3. Find the term independent of \(x\) in \(\left(2x-\frac1x\right)^6\).
4. Given the coefficient of \(x^3\) in \((1+kx)^6\) is 160, find \(k\).

**Answers:** 1. \(x^4-4x^3+6x^2-4x+1\). 2. \(r=3\): \(\binom73 2^3=35\times8=280\). 3. General term \(\binom6r(2x)^{6-r}(-1)^r x^{-r}=\binom6r 2^{6-r}(-1)^r x^{6-2r}\); set \(6-2r=0\Rightarrow r=3\); term\(=\binom63 2^3(-1)^3=20\times8\times(-1)=-160\). 4. \(\binom63 k^3=20k^3=160\Rightarrow k^3=8\Rightarrow k=2\).

---

**Category:** Binomial Theorem

[← Pascal's Triangle](16_Pascals_Triangle.md) · [Binomial Theorem (Rational n Extension) →](18_Binomial_Theorem_Rational_n_Extension.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
