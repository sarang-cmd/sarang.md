# First-order differential equations

> **AHL 5.18 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain what a differential equation, a general solution, a particular solution and an initial condition are;
- use Euler's method $y_{n+1}=y_{n}+h\,f(x_{n},y_{n})$ with $x_{n+1}=x_{n}+h$ to approximate the solution of $\dfrac{dy}{dx}=f(x,y)$, and apply it to coupled equations in $t$;
- solve differential equations by separating variables, with initial conditions;
- solve homogeneous equations using the substitution $y=vx$;
- solve linear equations $\dfrac{dy}{dx}+P(x)y=Q(x)$ by the integrating factor $e^{\int P\,dx}$;
- build and solve differential equations from a description in words, such as exponential growth and decay and Newton's law of cooling, and interpret the solution;
- compare the numerical and exact solutions and comment on the error.

## Why this topic matters

Almost every law of science is stated as a differential equation: a relationship between a quantity and its rate of change. The rate at which a population grows depends on its size; the rate at which a hot drink cools depends on how much hotter it is than the room; the acceleration of a mass on a spring depends on its displacement. These are not formulas for the quantity itself, but statements about how it changes, and the quantity is found by solving the equation. This is why differential equations are the central subject of applied mathematics and why the integration techniques of the previous chapters matter: integration is how we solve them.

The chapter has two complementary parts. Some equations can be solved exactly, and for the first-order equations of this course there are three standard methods: separation of variables, the substitution $y=vx$ for homogeneous equations, and the integrating factor for linear equations. But most differential equations that arise in practice have no exact solution in terms of familiar functions, and then we compute an approximation. Euler's method is the simplest numerical approach: follow the tangent line for a small step, recompute the gradient and repeat. It is the ancestor of the algorithms used in weather forecasting and in the simulation of planetary motion, and comparing it with an exact solution shows how the error depends on the step size. Examination questions typically combine an exact solution with an Euler approximation and ask for an interpretation in context.

## Core ideas

### Differential equations and their solutions

A **differential equation** (DE) contains a function and its derivatives. A **first-order** equation involves only the first derivative, as in $\dfrac{dy}{dx}=2xy$. Its **general solution** contains an arbitrary constant, representing a family of curves. An **initial condition** (such as $y=3$ when $x=0$) selects one curve, the **particular solution**. A solution can be checked by differentiating it and substituting into the equation, and by testing the initial condition.

Geometrically, the equation $\dfrac{dy}{dx}=f(x,y)$ gives a gradient at every point of the plane. Drawing short line segments with these gradients produces a **slope field**, and solution curves follow the segments.

### Euler's method

Starting from a known point $(x_{0},y_{0})$ and a step size $h$, we approximate the curve by a sequence of short line segments with the gradient at the start of each step:
$$x_{n+1}=x_{n}+h,\qquad y_{n+1}=y_{n}+h\,f(x_{n},y_{n}).$$
A table with columns $x_{n}$, $y_{n}$, $f(x_{n},y_{n})$ and $y_{n+1}$ keeps the work organised. The smaller the step, the better the approximation, but more steps are needed. The error at each step comes from the curvature: if the solution is concave up, the tangent line lies below the curve and Euler's method underestimates, and if concave down it overestimates.

### Euler's method for coupled equations

If two quantities $x(t)$ and $y(t)$ satisfy $\dfrac{dx}{dt}=f(t,x,y)$ and $\dfrac{dy}{dt}=g(t,x,y)$, update both at each step using the values at the start of the step:
$$t_{n+1}=t_{n}+h,\quad x_{n+1}=x_{n}+h\,f(t_{n},x_{n},y_{n}),\quad y_{n+1}=y_{n}+h\,g(t_{n},x_{n},y_{n}).$$
It is important to use the old value of $x$ when computing the new $y$.

### Separation of variables

If the equation can be written $\dfrac{dy}{dx}=g(x)\,h(y)$, separate the variables and integrate:
$$\int\frac{1}{h(y)}\,dy=\int g(x)\,dx.$$
Each side gives its own antiderivative, and a single constant $C$ is added on one side. Then use the initial condition to find $C$ and, if possible, solve for $y$. A common outcome is exponential: $\dfrac{dy}{dx}=ky$ gives $\ln|y|=kx+C$, so $y=Ae^{kx}$ with $A=\pm e^{C}$. Be careful about the cases where $h(y)=0$, since constant solutions (such as $y=0$ for $\frac{dy}{dx}=ky$) are lost when dividing by $h(y)$.

### Modelling with differential equations

The wording gives the equation. "The rate of change of $N$ is proportional to $N$" becomes $\dfrac{dN}{dt}=kN$, where $k>0$ is growth and $k<0$ is decay. For decay at a rate proportional to the amount, the half-life is $\dfrac{\ln2}{|k|}$. **Newton's law of cooling** says that the rate of change of the temperature $T$ of a body is proportional to the difference from the surroundings $T_{0}$: $\dfrac{dT}{dt}=-k(T-T_{0})$, whose solution is $T=T_{0}+Ae^{-kt}$. The model predicts that the temperature approaches $T_{0}$ but never reaches it.

### Homogeneous equations

An equation is **homogeneous** if $\dfrac{dy}{dx}$ can be written as a function of $\dfrac yx$ only, such as $\dfrac{x+y}{x}$ or $\dfrac{x^{2}+y^{2}}{xy}$. The substitution $y=vx$, where $v$ is a function of $x$, gives $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$ by the product rule. The equation becomes separable in $v$ and $x$:
$$v+x\frac{dv}{dx}=F(v)\quad\Longrightarrow\quad x\frac{dv}{dx}=F(v)-v,$$
so $\displaystyle\int\frac{dv}{F(v)-v}=\int\frac{dx}{x}$. After solving, replace $v$ by $\dfrac yx$.

### Linear equations and the integrating factor

An equation of the form $\dfrac{dy}{dx}+P(x)\,y=Q(x)$ is solved with the **integrating factor** $\mu(x)=e^{\int P(x)\,dx}$, with the constant of integration omitted in the exponent. Multiplying through by $\mu$ makes the left side an exact derivative, by the product rule, since $\mu'=P\mu$:
$$\frac{d}{dx}\big(\mu y\big)=\mu Q.$$
Integrate both sides to get $\mu y=\int\mu Q\,dx$, then divide by $\mu$. The method works for any $P$ and $Q$ for which the integrals can be found.

### Choosing a method

First check whether the equation is separable (a product of a function of $x$ and a function of $y$), which is the simplest case. If not, see whether it is linear in $y$ and $\frac{dy}{dx}$, in which case use the integrating factor, or whether it is a function of $\frac yx$, in which case use $y=vx$. If none of these applies, or if the question says so, use Euler's method. Whatever the method, state the solution as $y=f(x)$ when possible, and state the domain on which it is valid.

### Errors and accuracy

Halving the step size in Euler's method roughly halves the error, so the method is of first order. The exact solution of $\dfrac{dy}{dx}=y$ with $y(0)=1$ is $e^{x}$, and Euler's method with $h=0.25$ gives $y(1)\approx1.25^{4}=2.441$, compared with $e=2.718$. The numerical solution underestimates because $e^{x}$ is concave up.

## Worked examples

### Example 1 (separation of variables, 6 marks)

Solve $\dfrac{dy}{dx}=2xy$ with $y=3$ when $x=0$.

Separate: $\displaystyle\int\frac1y\,dy=\int2x\,dx$, so $\ln|y|=x^{2}+C$ and $y=Ae^{x^{2}}$. The condition $y(0)=3$ gives $A=3$. The solution is $y=3e^{x^{2}}$. As a check, $\dfrac{dy}{dx}=3\cdot2xe^{x^{2}}=2x\cdot y$.

### Example 2 (an implicit solution, 6 marks)

Solve $y\dfrac{dy}{dx}=x$ with $y(0)=2$.

Separate: $\displaystyle\int y\,dy=\int x\,dx$, so $\dfrac{y^{2}}{2}=\dfrac{x^{2}}{2}+C$, which gives $y^{2}=x^{2}+K$. The condition gives $4=K$. So $y^{2}=x^{2}+4$, and since $y(0)=2>0$, $y=\sqrt{x^{2}+4}$. The curves are hyperbolas, and the positive root is chosen because of the initial condition.

### Example 3 (a trigonometric solution, 5 marks)

Solve $\dfrac{dy}{dx}=1+y^{2}$ with $y(0)=0$.

Separate: $\displaystyle\int\frac{1}{1+y^{2}}\,dy=\int1\,dx$, so $\arctan y=x+C$. The condition gives $C=0$, so $y=\tan x$, valid for $-\dfrac\pi2<x<\dfrac\pi2$. The solution tends to infinity at the ends of this interval, which shows that the domain of a solution is determined by the equation.

### Example 4 (an exponential, 6 marks)

Solve $\dfrac{dy}{dx}=e^{x-y}$ with $y(0)=1$.

Write $\dfrac{dy}{dx}=e^{x}e^{-y}$ and separate: $\displaystyle\int e^{y}\,dy=\int e^{x}\,dx$, so $e^{y}=e^{x}+C$. At $(0,1)$: $e=1+C$, so $C=e-1$. Then $y=\ln\left(e^{x}+e-1\right)$.

### Example 5 (radioactive decay, 7 marks)

A radioactive sample of $500$ mg decays at a rate proportional to its mass, with $\dfrac{dN}{dt}=-0.1N$ ($t$ in days). Find $N(t)$, the mass after $10$ days, and the half-life.

Separating, $\ln N=-0.1t+C$, so $N=Ae^{-0.1t}$, and $N(0)=500$ gives $A=500$. So $N=500e^{-0.1t}$. After $10$ days, $N=500e^{-1}=184$ mg. The half-life $T$ satisfies $e^{-0.1T}=\tfrac12$, so $T=\dfrac{\ln2}{0.1}=6.93$ days. The half-life does not depend on the initial mass.

### Example 6 (Newton's law of cooling, 9 marks)

A cup of tea at $90^{\circ}$C is placed in a room at $20^{\circ}$C. After $5$ minutes it is at $60^{\circ}$C. Using $\dfrac{dT}{dt}=-k(T-20)$, find $T(t)$ and the temperature after $10$ minutes.

Separate: $\displaystyle\int\frac{dT}{T-20}=\int-k\,dt$, so $\ln(T-20)=-kt+C$ and $T=20+Ae^{-kt}$. At $t=0$, $90=20+A$, so $A=70$. At $t=5$, $60=20+70e^{-5k}$, so $e^{-5k}=\dfrac47$ and $k=\dfrac15\ln\dfrac74=0.112$. At $t=10$, $T=20+70\left(\dfrac47\right)^{2}=20+\dfrac{160}{7}=42.9^{\circ}$C. The tea reaches $30^{\circ}$C when $e^{-kt}=\dfrac17$, so $t=\dfrac{\ln7}{k}=17.4$ minutes.

### Example 7 (Euler's method, 8 marks)

Use Euler's method with $h=0.1$ to approximate $y(0.5)$ for $\dfrac{dy}{dx}=x+y$, $y(0)=1$.

At each step, $y_{n+1}=y_{n}+0.1\,(x_{n}+y_{n})$.

| $n$ | $x_{n}$ | $y_{n}$ | $x_{n}+y_{n}$ | $y_{n+1}$ |
|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 1.1 |
| 1 | 0.1 | 1.1 | 1.2 | 1.22 |
| 2 | 0.2 | 1.22 | 1.42 | 1.362 |
| 3 | 0.3 | 1.362 | 1.662 | 1.5282 |
| 4 | 0.4 | 1.5282 | 1.9282 | 1.7210 |

So $y(0.5)\approx1.721$. The exact solution is $y=2e^{x}-x-1$, which gives $y(0.5)=1.797$, so Euler's method underestimates by about $0.076$, consistent with the solution being concave up.

### Example 8 (a step size comparison, 5 marks)

Use Euler's method with $h=0.25$ for $\dfrac{dy}{dx}=y$, $y(0)=1$, to estimate $y(1)$, and compare with the exact value.

Each step multiplies $y$ by $1+0.25=1.25$, so the values at $x=0.25,0.5,0.75,1$ are $1.25$, $1.5625$, $1.953125$ and $2.441$. The exact value is $e=2.718$, so the error is $0.277$, about $10\%$. With $h=0.1$ the estimate is $1.1^{10}=2.594$, which is closer.

### Example 9 (coupled equations, 6 marks)

Use Euler's method with $h=0.1$ for $\dfrac{dx}{dt}=y$, $\dfrac{dy}{dt}=-x$, $x(0)=1$, $y(0)=0$, to estimate $x(0.2)$ and $y(0.2)$.

Step 1: $x_{1}=1+0.1(0)=1$ and $y_{1}=0+0.1(-1)=-0.1$, both computed from the values at $t=0$. Step 2: $x_{2}=1+0.1(-0.1)=0.99$ and $y_{2}=-0.1+0.1(-1)=-0.2$, using $x_{1}=1$. So $x(0.2)\approx0.99$ and $y(0.2)\approx-0.2$. The exact solution is $x=\cos t$ and $y=-\sin t$, giving $(0.980,-0.199)$.

### Example 10 (a homogeneous equation, 8 marks)

Solve $\dfrac{dy}{dx}=\dfrac{x+y}{x}$ with $y(1)=0$ for $x>0$.

Let $y=vx$, so $\dfrac{dy}{dx}=v+x\dfrac{dv}{dx}$. The equation becomes $v+x\dfrac{dv}{dx}=1+v$, so $x\dfrac{dv}{dx}=1$ and $\displaystyle\int dv=\int\frac{dx}{x}$, which gives $v=\ln x+C$. Then $y=x\ln x+Cx$, and $y(1)=0$ gives $C=0$. The solution is $y=x\ln x$. A check: $\dfrac{dy}{dx}=\ln x+1$ and $\dfrac{x+y}{x}=1+\ln x$.

### Example 11 (a harder homogeneous equation, 9 marks)

Solve $\dfrac{dy}{dx}=\dfrac{x^{2}+y^{2}}{xy}$ with $y(1)=2$ for $x>0$.

With $y=vx$, $v+x\dfrac{dv}{dx}=\dfrac{1+v^{2}}{v}=\dfrac1v+v$, so $x\dfrac{dv}{dx}=\dfrac1v$. Separating, $\displaystyle\int v\,dv=\int\frac{dx}{x}$ and $\dfrac{v^{2}}{2}=\ln x+C$. Replacing $v=\dfrac yx$, $y^{2}=2x^{2}(\ln x+C)$. The condition gives $4=2C$, so $C=2$. Then $y^{2}=2x^{2}(\ln x+2)$, and $y=x\sqrt{2\ln x+4}$, taking the positive root.

### Example 12 (the integrating factor, 8 marks)

Solve $\dfrac{dy}{dx}+2y=e^{-x}$ with $y(0)=0$.

Here $P=2$, so the integrating factor is $\mu=e^{2x}$. Multiplying, $\dfrac{d}{dx}\left(ye^{2x}\right)=e^{2x}e^{-x}=e^{x}$. Integrating, $ye^{2x}=e^{x}+C$, so $y=e^{-x}+Ce^{-2x}$. The condition gives $0=1+C$, so $C=-1$ and $y=e^{-x}-e^{-2x}$. A check: $y'+2y=-e^{-x}+2e^{-2x}+2e^{-x}-2e^{-2x}=e^{-x}$.

### Example 13 (an integrating factor with $x$, 8 marks)

Solve $\dfrac{dy}{dx}+\dfrac yx=x^{2}$ with $y(1)=1$ for $x>0$.

Here $P=\dfrac1x$ and $\mu=e^{\ln x}=x$. Multiplying, $\dfrac{d}{dx}(xy)=x^{3}$, so $xy=\dfrac{x^{4}}{4}+C$. The condition gives $1=\dfrac14+C$, so $C=\dfrac34$. Then $y=\dfrac{x^{3}}{4}+\dfrac{3}{4x}$.

## Using your GDC

A spreadsheet-like table or the sequence mode of a calculator is ideal for Euler's method: enter the recurrence $y_{n+1}=y_{n}+h\,f(x_{n},y_{n})$ with the starting values and generate the sequence. On many calculators, you can store the step and iterate using the previous answer. Compare the result with a graph of the exact solution to see the error. For separable and linear equations the calculator can evaluate the constants (for example solving $e^{-5k}=\tfrac47$) and plot the solution to check against the initial condition and any given data. The calculator can display a slope field only on some models, but sketching one by hand at a few points is a good way to see the shape of solutions. Show every Euler step in a table, because marks are given for the working and the values.

## Common mistakes

- Failing to separate the variables completely, leaving $y$ on the side with $dx$.
- Forgetting the constant of integration, or putting a constant on both sides (one is enough).
- Using the initial condition before integrating, or substituting it into $\dfrac{dy}{dx}$ instead of the solution.
- Exponentiating incorrectly: $\ln y=x^{2}+C$ gives $y=Ae^{x^{2}}$, not $y=e^{x^{2}}+C$.
- Losing the modulus or the sign, and so choosing the wrong root of $y^{2}=\ldots$.
- In Euler's method, using $f$ at the end of the step rather than at the start, or mixing up the new and old values in a coupled system.
- In the substitution $y=vx$, forgetting the product rule, so that $\dfrac{dy}{dx}=v$ instead of $v+x\dfrac{dv}{dx}$.
- Omitting the integrating factor on the right-hand side, or including a constant in the exponent of $\mu$.

## Exam technique and command terms

**Solve the differential equation** requires a general or particular solution as asked, ideally in the form $y=\ldots$. **Find the particular solution** needs the initial condition. **Use Euler's method** requires a table or a clear list of steps with the values of $x_{n}$, $y_{n}$ and the gradient, and the answer to the stated accuracy. **Show that** a given function is a solution requires you to differentiate and substitute. **Hence** or **interpret** requires a comment in context: what the constant means, what happens for large $t$, or whether the numerical method over- or underestimates. For a question in words, define variables and units, write the equation (including the sign of the constant), and check its sign against the situation. Write each of the stages of separation, integration, constant and solution on separate lines, to make the marks easy to award.

## Connections

This chapter uses the integration techniques of SL 5.10, AHL 5.15 and AHL 5.16, the substitution of SL 5.10 in a new way, and the exponential and logarithm functions of Unit 2. The exponential decay of kinematics (Example 10 of SL 5.9) is the solution of $\dfrac{dv}{dt}=-kv$. Euler's method is a numerical form of the tangent-line approximation introduced in SL 5.4, and its coupled version underpins the simulation of oscillators and of predator and prey populations. In AHL 5.19 the Maclaurin series can be used to solve differential equations approximately. Modelling with differential equations connects with exponential growth in Unit 1 and the half-life of Unit 2.

## Check your understanding

1. Solve $\dfrac{dy}{dx}=2xy$ with $y(0)=3$.
2. Solve $y\dfrac{dy}{dx}=x$ with $y(0)=2$.
3. Solve $\dfrac{dy}{dx}=1+y^{2}$ with $y(0)=0$.
4. Solve $\dfrac{dy}{dx}=e^{x-y}$ with $y(0)=1$.
5. A sample decays with $\dfrac{dN}{dt}=-0.1N$ and $N(0)=500$. Find the half-life.
6. A cup at $90^{\circ}$C in a $20^{\circ}$C room is at $60^{\circ}$C after $5$ minutes. Find its temperature after $10$ minutes.
7. Use Euler's method with $h=0.1$ for $\dfrac{dy}{dx}=x+y$, $y(0)=1$ to estimate $y(0.2)$.
8. Use Euler's method with $h=0.25$ for $\dfrac{dy}{dx}=y$, $y(0)=1$ to estimate $y(1)$.
9. Solve $\dfrac{dy}{dx}=\dfrac{x+y}{x}$ with $y(1)=0$.
10. Solve $\dfrac{dy}{dx}+2y=e^{-x}$ with $y(0)=0$.

### Answers

1. $y=3e^{x^{2}}$.
2. $y=\sqrt{x^{2}+4}$.
3. $y=\tan x$ for $-\dfrac\pi2<x<\dfrac\pi2$.
4. $y=\ln\left(e^{x}+e-1\right)$.
5. $\dfrac{\ln2}{0.1}=6.93$ days.
6. $T=20+70\left(\dfrac47\right)^{2}=42.9^{\circ}$C.
7. $y_{1}=1.1$ and $y_{2}=1.1+0.1(0.1+1.1)=1.22$, so $y(0.2)\approx1.22$.
8. $1.25^{4}=2.44$.
9. $y=x\ln x$.
10. $y=e^{-x}-e^{-2x}$.

## Summary

- A DE relates a function to its derivatives. The general solution has a constant, and an initial condition gives the particular solution.
- Euler's method: $x_{n+1}=x_{n}+h$, $y_{n+1}=y_{n}+hf(x_{n},y_{n})$. For coupled equations update both variables using the old values.
- Separable: $\int\frac1{h(y)}dy=\int g(x)dx$. Exponential growth and decay follow from $\frac{dy}{dx}=ky$, and Newton's law of cooling gives $T=T_{0}+Ae^{-kt}$.
- Homogeneous: substitute $y=vx$, so that $\frac{dy}{dx}=v+x\frac{dv}{dx}$, and separate.
- Linear: $\frac{dy}{dx}+Py=Q$ is solved with $\mu=e^{\int P\,dx}$ and $(\mu y)'=\mu Q$.
- Check solutions by substitution, and compare Euler estimates with exact values: smaller steps give smaller errors.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 11 (PDF p. 13), lists Euler method and integrating factor under AHL 5.18. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
