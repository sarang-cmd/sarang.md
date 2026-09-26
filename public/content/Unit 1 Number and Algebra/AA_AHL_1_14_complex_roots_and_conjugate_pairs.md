# Complex roots and conjugate pairs

> **AHL 1.14 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Polynomials with real coefficients have conjugate nonreal roots: conjugating the entire equation leaves the real coefficients unchanged. This gives a way to reconstruct a real quadratic from one complex root and to factor higher-degree polynomials.

## Formula, meaning and conditions

If $p(x)$ has real coefficients and $p(a+bi)=0$ with $b\neq0$, then $p(a-bi)=0$. A conjugate pair gives the real factor $(x-a-bi)(x-a+bi)=(x-a)^2+b^2$. The conclusion need not hold when coefficients are not real.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists De Moivre theorem under AHL 1.14. Derive and justify all other steps and conditions.

## Worked example

One root of $x^2-2x+5$ is $1+2i$. Its conjugate $1-2i$ is also a root. Multiplying the factors gives $[x-(1+2i)][x-(1-2i)]=(x-1)^2+4=x^2-2x+5$. Their sum is $2$ and product is $5$, matching Vieta's relations.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Use conjugate roots to construct real-coefficient factors.
2. Apply De Moivre’s rule when taking integer powers.
3. List all distinct roots by distributing angles around a full revolution.

## Why the method works

If a polynomial has real coefficients and $a+bi$ is a nonreal root, taking conjugates of the equation shows $a-bi$ is also a root. Their product produces a real quadratic factor. For a complex $n$th-root equation, dividing the argument by $n$ gives several solutions because the original angle can first increase by $2\pi k$.

## A contrasting worked route

If $2+i$ is a root of a real polynomial, $(x-(2+i))(x-(2-i))=(x-2)^2+1=x^2-4x+5$ divides it. For $z^3=1$, take arguments $0,2\pi,4\pi$ before dividing by three, yielding $1,e^{2\pi i/3},e^{4\pi i/3}$. Using only principal argument $0$ would miss two roots.

## Transfer and validation

Counting multiplicity matters when a polynomial is factored but does not create additional distinct positions on the Argand diagram. After finding roots, substitute one directly or apply the power rule to verify its modulus and argument. Do not assume conjugate-pair reasoning for polynomials with nonreal coefficients.

## Exam lens

Paper 1 style: state why conjugation applies before writing down the partner root. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A complex root does not force its conjugate to be a root of a polynomial with complex coefficients. Check the coefficient domain.

## Try it yourself

A real-coefficient polynomial has root $-2+3i$. What real quadratic factor must divide it?

## Checked answer

$(x+2)^2+9=x^2+4x+13$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
