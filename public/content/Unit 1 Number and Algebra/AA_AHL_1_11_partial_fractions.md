# Partial fractions

> **AHL 1.11 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A rational expression with a factored denominator can sometimes be written as simpler fractions. This reverses addition of fractions and helps with integration or algebraic simplification. Divide first if the numerator degree is at least the denominator degree.

## Formula, meaning and conditions

For distinct linear factors, seek $\dfrac{N(x)}{(x-a)(x-b)}=\dfrac A{x-a}+\dfrac B{x-b}$. Multiply by the denominator and equate coefficients or substitute roots. A repeated factor $(x-a)^2$ requires both $A/(x-a)$ and $B/(x-a)^2$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.11. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Decompose $(5x+1)/[(x-1)(x+2)]$. Write $5x+1=A(x+2)+B(x-1)$. At $x=1$, $6=3A$, so $A=2$. At $x=-2$, $-9=-3B$, so $B=3$. Therefore the expression is $2/(x-1)+3/(x+2)$, for $x\neq1,-2$. Recombine to check the numerator.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Check that a rational function is proper before decomposition.
2. Resolve distinct and repeated linear factors with appropriate numerators.
3. Recombine terms and keep the original excluded values.

## Why the method works

Partial fractions replace one complicated rational expression with several simpler pieces. The denominator factorization determines which numerators are needed: a repeated factor requires a term for every power through its multiplicity. If numerator degree is not lower than denominator degree, polynomial division comes first. Equality is only on the original domain.

## A contrasting worked route

For $1/[x(x+1)]$, write $A/x+B/(x+1)$. Clearing denominators gives $1=A(x+1)+Bx$, so $A=1$ and $B=-1$. Thus the expression is $1/x-1/(x+1)$ for $x\neq0,-1$. Plugging $x=0$ or $-1$ into the cleared identity is a coefficient technique, not permission to evaluate the original fraction at a pole.

## Transfer and validation

Once decomposed, simple fractions are easier to integrate or invert algebraically. Multiply the final answer by the common denominator to verify coefficients; this often catches a missing term or a sign mistake. If a factor cannot be broken into real linear factors, it requires an appropriate polynomial numerator rather than a constant.

## Exam lens

Paper 1 style: show the identity after clearing denominators; remember excluded values even when the final algebra looks simpler. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

A repeated linear denominator cannot usually be handled with one fraction alone. Include every power up to its multiplicity.

## Try it yourself

Decompose $(3x+1)/[(x-1)(x+1)]$.

## Checked answer

$3x+1=2(x+1)+1(x-1)$, giving $2/(x-1)+1/(x+1)$, $x\neq\pm1$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
