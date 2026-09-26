# Introduction to logarithms

> **SL 1.5 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A logarithm answers an exponent question: what power of a given base produces a positive number? It is the inverse operation to exponentiation. Thinking in inverse pairs is more reliable than memorizing isolated log identities.

## Formula, meaning and conditions

$\log_b x=y\iff b^y=x$, with $b>0$, $b\neq1$, and $x>0$. In particular $\log_b1=0$ and $\log_b b=1$. The graph crosses $(1,0)$ and has no real value for nonpositive arguments.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists exponential and logarithmic inverse definition under SL 1.5. Derive and justify all other steps and conditions.

## Worked example

Solve $\log_3 x=-2$. Rewrite in exponential form: $x=3^{-2}=1/9$, which is positive. To solve $2^y=32$, write $32=2^5$ and obtain $y=5$. Substitution verifies both results without a calculator.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Convert between exponential and logarithmic equations.
2. Check the base and argument restrictions before solving.
3. Interpret the logarithm graph as an inverse relationship.

## Why the method works

The base specifies the repeated multiplicative scale and the logarithm asks for its exponent. Since a positive base other than one never produces zero or a negative result, a real logarithm cannot accept those inputs. This domain restriction belongs to the whole argument: $\log_b(2x-7)$ requires $2x-7>0$, not merely $x>0$.

## A contrasting worked route

To solve $\log_4(x-1)=\tfrac12$, first require $x>1$. Convert to $x-1=4^{1/2}=2$, giving $x=3$. Substitute to verify that the argument is $2$. For a base between zero and one the logarithm still exists, but it decreases as its input grows; avoid assuming every log graph is increasing.

## Transfer and validation

A change-of-base calculation is useful on a calculator, but it cannot rescue an argument outside the real domain. Compare two approaches whenever possible: undo a log by exponentiating for exact powers, or use numerical evaluation only when an exact form is unavailable. Record whether a solution is exact or rounded.

## Exam lens

Paper 1 style: convert to exponential form first, and reject any root that makes the original log argument nonpositive. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$\log_b(-x)$ is not automatically $-\log_b x$; its real domain requires $-x>0$.

## Try it yourself

Solve $\log_5(2x-1)=2$.

## Checked answer

$2x-1=25$, so $x=13$, satisfying $2x-1>0$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
