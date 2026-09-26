# Systems of linear equations

> **AHL 1.16 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A linear system asks for values satisfying all equations at once. Elimination combines equations to remove one variable. Geometrically, two lines in the plane can cross once, coincide, or be parallel without meeting. A numerical solver is a check, not a substitute for interpreting which case occurs.

## Formula, meaning and conditions

For $a_1x+b_1y=c_1$ and $a_2x+b_2y=c_2$, a unique solution exists when $a_1b_2-a_2b_1\neq0$. If the determinant is zero, compare the equations to distinguish infinitely many solutions from none.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 1.16. Related facts may appear elsewhere. Justify any method used here.

## Worked example

Solve $2x+y=7$ and $x-y=2$. Add the equations to eliminate $y$: $3x=9$, giving $x=3$. Substitute into $x-y=2$ to get $y=1$. Check both: $2(3)+1=7$ and $3-1=2$. In three-variable problems, eliminate systematically and back-substitute.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Solve two or three simultaneous linear equations by controlled elimination.
2. Recognize a unique solution, contradiction or dependent system.
3. Check the solution in every original equation, not just the reduced ones.

## Why the method works

A legal row operation preserves the solution set because it replaces one equation by a consequence obtained using another equation. Elimination may leave a nonzero constant equal to zero, revealing inconsistency, or a row of zeros, revealing dependence. Neither case is fixed by blindly dividing by a vanishing coefficient. Parameter values can change the number of solutions.

## A contrasting worked route

Consider $x+y=4$ and $2x+2y=8$. Doubling the first reproduces the second, so infinitely many pairs $(t,4-t)$ satisfy both. Changing the second right-hand side to $9$ produces $0=1$ after elimination and no solution. Compare both systems before trying to force a unique ordered pair.

## Transfer and validation

Geometrically two equations in two variables describe lines: they can intersect once, coincide, or be parallel and distinct. In three variables, use planes with analogous possibilities. Keep full precision when technology supplies a numerical solution and substitute back to detect a nearly singular or mistyped system.

## Exam lens

Paper 1 style: keep a clean chain of equivalent equations. Paper 2 technology can verify a solution but should not hide inconsistency. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

If elimination produces $0=5$, do not divide by zero or claim a solution. It signals an inconsistent system.

## Try it yourself

Solve $x+y=5$ and $2x-y=4$.

## Checked answer

Adding gives $3x=9$, so $x=3$ and $y=2$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
