# Factor, remainder and root relations

> **AHL 2.12 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Division by $x-a$ leaves remainder $p(a)$. Thus $p(a)=0$ exactly when $x-a$ is a factor. Vieta's relations connect roots to coefficients without solving every root first. These tools work well together on cubics and higher polynomials.

## Formula, meaning and conditions

$p(x)=(x-a)q(x)+p(a)$. For a monic cubic $x^3+bx^2+cx+d$ with roots $r_1,r_2,r_3$, $r_1+r_2+r_3=-b$ and $r_1r_2r_3=-d$, counting multiplicities.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists sum and product of polynomial roots under AHL 2.12. Derive and justify all other steps and conditions.

## Worked example

Let $p(x)=x^3-2x^2-x+2$. Since $p(2)=8-8-2+2=0$, $x-2$ is a factor. Group terms: $x^2(x-2)-1(x-2)=(x-2)(x^2-1)=(x-2)(x-1)(x+1)$. Its roots $2,1,-1$ sum to $2$ and multiply to $-2$, matching the coefficients.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use $p(a)$ as the remainder on division by $x-a$.
2. Factor a polynomial after locating a rational root.
3. Relate coefficients to sums and products of roots with multiplicity.

## Why the method works

Polynomial division writes $p(x)=(x-a)q(x)+r$ with constant remainder $r=p(a)$. Hence $p(a)=0$ is an if-and-only-if test for the factor $x-a$. Once a root is found, synthetic or long division reduces the degree; guessing more roots without checking the reduced polynomial can create false factors.

## A contrasting worked route

For $p(x)=x^3-2x^2-x+2$, $p(1)=0$ so $x-1$ divides it. Grouping gives $(x-2)(x-1)(x+1)$, with roots $2,1,-1$. Their sum is $2=-(-2)$, consistent with the coefficient of $x^2$, while the product is $-2=-2$ for this monic cubic.

## Transfer and validation

A repeated root contributes multiple times to coefficient relations even though it appears at one coordinate on a graph. Write the polynomial degree and leading coefficient before applying Vieta. When a calculator gives an approximate root, test whether a nearby rational value is exact before asserting a symbolic factorization.

## Exam lens

Paper 1 style: show the substitution establishing a factor before dividing or grouping. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A nonzero remainder $p(a)$ is not a factor condition. It means $x-a$ does not divide $p(x)$ evenly.

## Try it yourself

Find the remainder when $p(x)=x^3+2x$ is divided by $x-2$.

## Checked answer

$p(2)=8+4=12$.

---

[Functions master guide](/units/functions/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
