# Limits and L’Hôpital’s rule

> **AHL 5.13 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A limit concerns the behavior near a point, not necessarily the function value at that point. L’Hôpital’s rule can turn certain indeterminate quotient forms into derivative quotients, but its hypotheses and the resulting limit must be checked. Algebraic simplification is often easier.

## Formula, meaning and conditions

If numerator and denominator tend to $0$ or both diverge in the required way, and differentiability and nonzero denominator-derivative conditions hold nearby, one may consider $\lim f/g=\lim f'/g'$ when the latter limit exists appropriately. The rule does not apply directly to arbitrary products or non-indeterminate quotients.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 5.13. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Evaluate $\lim_{x\to0}(e^x-1)/x$. Both parts tend to $0$, so the form is $0/0$. Their derivatives are $e^x$ and $1$, and the derivative quotient tends to $e^0=1$. Hence the original limit is $1$. This is consistent with the tangent slope of $e^x$ at $0$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use factorization or rationalization before a limit.
2. Apply L’Hôpital only to valid $0/0$ or $\infty/\infty$ forms.
3. Compare leading powers at infinity and verify results independently.

## Why the method works

A limit describes approaching an input, not necessarily the value at that input. Removable algebraic factors can be canceled for nearby values while the function remains undefined at the center. L’Hôpital replaces a ratio by a ratio of derivatives only under its stated differentiability and indeterminate-form conditions; it is not a rule for arbitrary fractions.

## A contrasting worked route

For $\lim_{x\to2}(x^2-4)/(x-2)$, the original quotient is $0/0$ at $2$. Factor to get $x+2$ for $x\neq2$, so the limit is $4$. L’Hôpital also gives $\lim 2x/1=4$ under its hypotheses. The limit exists even though the original expression has a hole at $2$.

## Transfer and validation

When a quotient tends to a nonzero number over zero, expect infinite or one-sided behavior rather than applying L’Hôpital automatically. A graph can suggest behavior but miss a removable hole. For limits at infinity, divide by the largest power and inspect whether the numerator and denominator have compatible degrees.

## Exam lens

Paper 1 style: state the indeterminate form and the derivative quotient; do not write the rule without checking applicability. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

L’Hôpital’s rule is not a license to differentiate a fraction term by term when the original limit is not $0/0$ or $\infty/\infty$.

## Try it yourself

Find $\lim_{x\to2}(x^2-4)/(x-2)$ by factoring.

## Checked answer

$(x-2)(x+2)/(x-2)=x+2$ for $x\neq2$, so the limit is $4$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
