# First-order differential equations and Euler’s method

> **AHL 5.18 · AA HL extension** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

A differential equation describes how an unknown function changes. Separation of variables can give an exact family; an initial value selects a specific member. Euler's method instead follows short tangent steps and accumulates approximation error.

## Formula, meaning and conditions

For $dy/dx=F(x,y)$, Euler's step is $y_{n+1}=y_n+hF(x_n,y_n)$ with $x_{n+1}=x_n+h$. When variables separate, rearrange into a function of $y$ times $dy$ and a function of $x$ times $dx$, integrate, and use the initial condition.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists Euler method and integrating factor under AHL 5.18. Derive and justify all other steps and conditions.

## Worked example

Solve $dy/dx=2xy$, $y(0)=3$. Separation gives $dy/y=2x\,dx$ for a nonzero solution, so $\ln|y|=x^2+C$ and $y=3e^{x^2}$. Euler with $h=0.1$ starts at $(0,3)$: $y_1=3+0.1[2(0)(3)]=3$. The next step is $y_2=3+0.1[2(0.1)(3)]=3.06$. Exact $y(0.2)=3e^{0.04}\approx3.1224$, showing approximation error.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Approximate an initial-value problem with Euler steps.
2. Separate variables and integrate both sides when possible.
3. Use an integrating factor for a first-order linear equation.

## Why the method works

Euler’s method replaces a curved solution locally by a tangent segment, so its step size controls approximation error rather than changing the differential equation. Separable equations move all $y$-terms to one side and $x$-terms to the other. A linear equation $y'+P(x)y=Q(x)$ instead admits integrating factor $e^{\int P(x)dx}$ under appropriate conditions.

## A contrasting worked route

For $y'=y$, $y(0)=1$ and $h=0.1$, Euler gives $y_1=1+0.1(1)=1.1$ and $y_2=1.1+0.1(1.1)=1.21$. The exact separable solution is $y=e^x$, so $y(0.2)\approx1.2214$. The Euler estimate is slightly low here; it is not an exact evaluation of $e^{0.2}$.

## Transfer and validation

Initial conditions choose one solution from a family and must be applied after integration. A constant equilibrium solution can disappear if variables are separated by dividing by zero, so check it separately. Show an Euler table of $(x_n,y_n,f(x_n,y_n))$ to expose a mistaken slope or step.

## Exam lens

Paper 2 style: tabulate $x_n,y_n,F(x_n,y_n)$ for each Euler step and compare with a known exact solution when available. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Euler uses the slope at the *start* of each step, not the unknown value at its end.

## Try it yourself

One Euler step with $h=0.2$ from $(0,1)$ for $dy/dx=x+y$ gives which value?

## Checked answer

$y_1=1+0.2(0+1)=1.2$ at $x=0.2$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
