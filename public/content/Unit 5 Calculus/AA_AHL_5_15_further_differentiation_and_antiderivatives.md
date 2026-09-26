# Further differentiation and antiderivatives

> **AHL 5.15 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Exponential, logarithmic and trigonometric functions have derivative patterns beyond polynomials. Pairing each rule with its reverse is useful for checking an indefinite integral. Domains matter for logarithms and functions with poles.

## Formula, meaning and conditions

$d(e^{ax})/dx=ae^{ax}$ and $\int e^{ax}\,dx=e^{ax}/a+C$ for $a\neq0$. $d(\ln|x|)/dx=1/x$ for $x\neq0$, and $d(\tan x)/dx=\sec^2x$ where tangent is defined.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists further standard derivatives including inverse trigonometric functions under AHL 5.15. Derive and justify all other steps and conditions.

## Worked example

Differentiate $e^{2x}$ by the chain rule: derivative $2e^{2x}$. Reverse the operation to integrate $e^{2x}$: an antiderivative is $\tfrac12e^{2x}$, so $\int e^{2x}\,dx=\tfrac12e^{2x}+C$. Differentiating the result returns the original integrand.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Differentiate tangent, reciprocal trig, inverse trig or $a^x$.
2. Use a matching standard antiderivative with its domain.
3. Apply the chain rule to the argument of an unfamiliar standard form.

## Why the method works

Standard derivatives and integrals are pairs only after their constants and domains are accounted for. For $a^x$ the derivative includes $\ln a$; for $\log_a x$ the derivative includes $1/\ln a$. Inverse-trig derivatives carry square-root or quadratic denominator restrictions, so the formula is not a license to evaluate outside a real domain.

## A contrasting worked route

If $f(x)=3^x$, then $f'(x)=3^x\ln3$. An antiderivative of $3^x$ is $3^x/\ln3+C$. For $g(x)=\arctan(2x)$, the derivative is $2/(1+4x^2)$ by the chain rule, not $1/(1+4x^2)$. Differentiating a proposed antiderivative is an efficient check.

## Transfer and validation

The supplied booklet lists some further derivatives on printed page 9 and some antiderivatives on printed page 10. A student must still identify which expression matches a listed pattern and apply chain factors correctly. When formulas differ by absolute values or domain bounds, respect the original real domain.

## Exam lens

Paper 1 style: use a derivative check when integrating a function with an inner linear coefficient. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$\int e^{2x}\,dx$ is not $e^{2x}+C$; differentiating that would produce $2e^{2x}$.

## Try it yourself

Integrate $\cos x$ and differentiate $\ln x$ for $x>0$.

## Checked answer

$\int\cos x\,dx=\sin x+C$ and $d(\ln x)/dx=1/x$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
