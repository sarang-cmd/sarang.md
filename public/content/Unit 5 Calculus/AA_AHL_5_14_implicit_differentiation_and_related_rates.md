# Implicit differentiation and related rates

> **AHL 5.14 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Implicit equations may define $y$ without isolating it as a function of $x$. Differentiate every occurrence of $y$ using the chain rule. For related rates, all changing quantities depend on time, so differentiate with respect to $t$ and substitute the instant's values afterward.

## Formula, meaning and conditions

If $F(x,y)=0$ and $F_y\neq0$, then locally $dy/dx=-F_x/F_y$. For a circle $x^2+y^2=R^2$, $2x+2y\,dy/dx=0$. For moving points, $2x\,dx/dt+2y\,dy/dt=0$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 5.14. Related facts may appear elsewhere. Justify any method used here.

## Worked example

On $x^2+y^2=25$ at $(3,4)$, $dy/dx=-x/y=-3/4$. If the point moves along the circle and $dx/dt=2$ at that instant, differentiating in time gives $2(3)(2)+2(4)dy/dt=0$. Thus $dy/dt=-12/8=-3/2$ distance units per time unit. The signs agree with moving right and down in quadrant I.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Differentiate an equation in $x$ and $y$ implicitly.
2. Use related rates by differentiating quantities with respect to time.
3. Check which physical dimensions remain constant in an optimization model.

## Why the method works

Implicit differentiation treats $y$ as a function of $x$, so differentiating $y^2$ gives $2y\,dy/dx$ by the chain rule. Related rates adds a second independent variable, usually time: a changing radius, volume and height need rates tied by a geometric equation. Differentiate before inserting a special measured instant.

## A contrasting worked route

For the circle $x^2+y^2=25$, differentiate to obtain $2x+2y\,dy/dx=0$, hence $dy/dx=-x/y$ when $y\neq0$. At $(3,4)$ the tangent gradient is $-3/4$. At $(5,0)$ that formula divides by zero, matching a vertical tangent rather than a finite gradient.

## Transfer and validation

In a rate problem, attach units per time to derivatives such as $dr/dt$. A diagram helps identify constant lengths and quantities that vary together. State a domain or sign condition before extracting square roots; a geometric radius is nonnegative even when algebra offers both signs.

## Exam lens

Paper 2 style: state which quantity changes with which variable and include units and sign in the final rate. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Treating $y$ as a constant while differentiating $y^2$ loses the factor $dy/dx$.

## Try it yourself

Find $dy/dx$ from $x^2+y^2=9$ at $(0,3)$.

## Checked answer

$dy/dx=-x/y=0$ at $(0,3)$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
