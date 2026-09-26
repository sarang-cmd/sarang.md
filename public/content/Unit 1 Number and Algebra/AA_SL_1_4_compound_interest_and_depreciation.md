# Compound interest and depreciation

> **SL 1.4 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A percentage change repeats by a multiplicative factor. Compounding more than once a year changes both the rate per period and the number of periods. Depreciation has a factor smaller than one; inflation-adjusted value divides nominal value by the cumulative price-level factor.

## Formula, meaning and conditions

For decimal annual rate $i$, $FV=P(1+i/k)^{kt}$ for $k$ compounding periods per year over $t$ years. With a numeric percentage $p$, use $i=p/100$. Annual depreciation at numeric percentage $p$ uses $P(1-p/100)^t$. These are models, not guarantees about actual investments.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists compound interest with nominal annual percentage and compounding frequency under SL 1.4. Derive and justify all other steps and conditions.

## Worked example

A deposit of €2400 grows by 3% annually for four years. The factor is $1.03$, so $FV=2400(1.03)^4=2701.22$ euros to the nearest cent. A €18,000 asset that depreciates 20% each year for three years has value $18000(0.80)^3=9216$ euros. The annual change applies to the current value, not the original one.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Convert a numeric percentage to a decimal rate before modeling.
2. Distinguish annual, monthly and other compounding periods.
3. Solve for present value or compare growth with depreciation.

## Why the method works

Each period acts on the new balance, so repeated percentage changes multiply; adding the original percentage repeatedly models simple interest instead. If the nominal rate is $p$ percent per year and there are $k$ equal periods, the multiplier per period is $1+p/(100k)$ and the exponent over $t$ years is $kt$.

## A contrasting worked route

At $6\%$ nominal interest compounded quarterly for two years, the factor is $(1+0.06/4)^8$, not $1.06^8$. To find the original deposit from a later value $V$, divide by this factor. A $15\%$ annual depreciation uses $0.85^t$, not $(-0.15)^t$.

## Transfer and validation

If prices also rise, a nominal balance and its purchasing power answer different questions. Divide nominal future value by an inflation multiplier only when comparing values in present-day units. Carry full precision until rounding the final monetary value.

## Exam lens

Paper 2 style: state the rate units and compounding frequency, calculate with full precision, then round money once. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Do not use both $0.03$ and a second division by $100$. One represents a decimal rate, the other a percentage conversion.

## Try it yourself

A €1000 balance earns 2% annually for three years. Find its modeled value.

## Checked answer

$1000(1.02)^3=1061.208$ euros, so €1061.21 to the nearest cent.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
