---
title: "Financial Applications"
order: 8
category: "Sequences & Series"
tags: ["finance", "compound interest", "depreciation"]
prev: "07_Infinite_Geometric_Series.md"
next: "09_Proof_Deductive_And_LHS_RHS.md"
---

# Financial Applications of Geometric Sequences and Series

5 lessons — compound interest, annual depreciation, real value accounting for inflation, and compounding frequency. Prime Paper 2 territory, but formula manipulation can appear on Paper 1 too.

## Why This Belongs Here

Compound interest and depreciation are geometric sequences in disguise: each period the value is multiplied by a fixed growth/decay factor \(r\).

## Compound Interest Formula (in the formula booklet)

$$FV = PV\left(1+\frac{r\%}{100k}\right)^{kn}$$

\(PV\)=principal, \(r\%\)=annual rate (enter as e.g. 5, not 0.05), \(k\)=compounding periods per year, \(n\)=years.

## Depreciation

$$FV = PV\left(1-\frac{r}{100}\right)^{n}$$

Same structure with a decay factor, \(k=1\).

## Real Value With Inflation

Grow with the nominal rate, then deflate by the inflation factor over the same years:
$$\text{Real value} = \frac{\text{Nominal FV}}{(1+\text{inflation}/100)^n}$$
Do this as two clean sequential steps, not one combined formula.

## Worked Examples

**1.** €2000 at 4%, annual, 6 years: \(2000(1.04)^6\approx€2530.64\).

**2. Monthly compounding.** €5000 at 3.6%, monthly, 2 years: \(5000(1.003)^{24}\approx€5371.42\).

**3. Depreciation.** €25,000 car, 15%/yr, 5 years: \(25000(0.85)^5\approx€11{,}092.63\).

**4. Real value.** €10,000 at 5%, 3 years, inflation 2%: nominal \(\approx11{,}576.25\); real \(\approx11{,}576.25/1.0612\approx€10{,}909.15\).

**5. Reverse.** Years for €1000 to double at 6%: \(n=\ln2/\ln1.06\approx11.9 \to 12\) years.

## Question Types

- Find the future value — watch units on \(k\) and \(n\).
- Find time to reach a target — logs (P1) or GDC (P2).
- Compare compounding frequencies.
- Real value with inflation — two-step process.
- Find the depreciation/interest rate given start and end values.

## Common Mistakes

- Entering the rate as a decimal into a formula that already divides by 100.
- Forgetting to multiply \(n\) by \(k\) in the exponent.
- Treating depreciation as a separate special formula rather than negative growth.
- Combining growth and deflation into one incorrect formula.
- Rounding intermediate values early instead of carrying full precision.

## Self-Test

1. €3000 at 5%, annual, 4 years — FV?
2. €40,000 machine, 12%/yr depreciation, 3 years — value?
3. €8000 at 4%, 5 years, inflation 1.5%/yr — real value?
4. Years for €500 to reach €1000 at 8% annual?

**Answers:** 1. ≈€3646.52. 2. ≈€27,258.88. 3. ≈€9034.55. 4. ≈9 years.

---

**Category:** Sequences & Series

[← Infinite Geometric Series](07_Infinite_Geometric_Series.md) · [Deductive Proof & LHS-RHS →](09_Proof_Deductive_And_LHS_RHS.md)

[🏠 Home](../index.html) · [📋 Master Index](00_Master_Index_And_Exam_Strategy.md)
