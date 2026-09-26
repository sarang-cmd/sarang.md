# Chain, product and quotient rules

> **SL 5.6 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Complicated derivatives are built from simpler ones. The chain rule tracks a change inside a function; the product rule tracks two changing factors; the quotient rule accounts for a changing denominator. Selecting the structure first avoids applying a rule blindly.

## Formula, meaning and conditions

$(f(g(x)))'=f'(g(x))g'(x)$, $(uv)'=u'v+uv'$, and $(u/v)'=(vu'-uv')/v^2$ for $v\neq0$. The power rule also extends to rational exponents wherever the relevant real function is differentiable.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists standard derivatives, chain, product and quotient rules under SL 5.6. Derive and justify all other steps and conditions.

## Worked example

For $h(x)=(x^2+1)^3$, let $u=x^2+1$. Then $dh/dx=3u^2(2x)=6x(x^2+1)^2$. For $p(x)=x^2e^x$, $p'=2xe^x+x^2e^x=e^x(x^2+2x)$. For $q=x/(x+1)$, $q'=[(x+1)-x]/(x+1)^2=1/(x+1)^2$ when $x\neq-1$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use the chain rule for nested functions.
2. Differentiate rational powers while respecting the original domain and endpoint.
3. Differentiate products without multiplying out unnecessarily.
4. Apply the quotient rule with a squared denominator and domain exclusions.
5. Differentiate standard trig, exponential and log expressions.

## Why the method works

The chain rule tracks how an outer output changes when its inner input changes. The product rule comes from changes in both factors, so differentiating each factor and multiplying the results is not valid. For a quotient, the denominator changes as well; keep its square intact and state where the quotient was originally defined.

## A contrasting worked route

For $f(x)=(x^2+1)^3$, $f'(x)=3(x^2+1)^2(2x)$. For $g(x)=x^2e^x$, $g'=e^x(2x+x^2)$. For $h(x)=x/(x+1)$, $h'=[(x+1)-x]/(x+1)^2=1/(x+1)^2$ for $x\neq-1$. Each expression requires a different structural rule.

## Transfer and validation

Identify the outermost operation before differentiating: nesting, multiplication or division. Sometimes simplifying first turns a quotient into an easier sum, but never erase an original excluded value. Numerically compare the derivative at a safe point with a small secant to detect a missing inner derivative.

## Exam lens

Paper 1 style: identify the inner function or the two factors before differentiating; keep domain restrictions. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Differentiating $(x^2+1)^3$ as $3(x^2+1)^2$ omits the inner derivative $2x$.

## Try it yourself

Differentiate $(3x+1)^4$.

## Checked answer

$4(3x+1)^3\cdot3=12(3x+1)^3$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
