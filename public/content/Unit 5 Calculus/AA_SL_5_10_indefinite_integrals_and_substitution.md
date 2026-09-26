# Indefinite integrals and substitution

> **SL 5.10 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

An indefinite integral describes a family of antiderivatives, differing by an arbitrary constant. Reverse chain rule recognizes an inner derivative beside a composed function. Substitution makes that structure explicit and helps avoid incorrect powers.

## Formula, meaning and conditions

For differentiable $u(x)$, $\int f(u)u'(x)\,dx=F(u)+C$ when $F'=f$. For $n\neq-1$, $\int x^n\,dx=x^{n+1}/(n+1)+C$ on a suitable domain; $\int dx/x=\ln|x|+C$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists standard integrals for reciprocal, sine, cosine and exponential functions under SL 5.10. Derive and justify all other steps and conditions.

## Worked example

Integrate $\int6x(3x^2+1)^4\,dx$. Let $u=3x^2+1$, so $du=6x\,dx$. Then $\int u^4\,du=u^5/5+C=(3x^2+1)^5/5+C$. Differentiate the answer: $(1/5)5(3x^2+1)^4(6x)$ reproduces the integrand.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use power antiderivatives and standard log or trig integrals.
2. Spot a reverse-chain pattern by inspecting the inner derivative.
3. Make a substitution and adjust definite bounds when needed.

## Why the method works

Indefinite integration finds a family of functions that differ by a constant. For a composite form, substitution replaces the inner expression by a new variable and its derivative by the corresponding differential. When no inner derivative is present, a constant adjustment may help, but a guessed substitution cannot justify inventing an $x$ factor.

## A contrasting worked route

For $\int 6x(x^2+1)^2\,dx$, let $u=x^2+1$, so $du=2x\,dx$ and the integral becomes $3\int u^2\,du=u^3+C=(x^2+1)^3+C$. Differentiating gives $3(x^2+1)^2(2x)$, returning the original integrand.

## Transfer and validation

The formula $\int1/x\,dx=\ln|x|+C$ applies separately on intervals not crossing zero. If the integral has limits, replace old endpoints with new $u$ values or convert the antiderivative back before evaluation. Do not leave a mix of $u$ and $x$ in the final expression. Constants can differ on disconnected intervals separated by a singularity, so name the interval on which your antiderivative applies.

## Exam lens

Paper 1 style: show the substitution and verify by differentiation if a coefficient is easy to miss. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Leaving out $+C$ gives only one member of the antiderivative family.

## Try it yourself

Evaluate $\int 4x\,dx$.

## Checked answer

$2x^2+C$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
