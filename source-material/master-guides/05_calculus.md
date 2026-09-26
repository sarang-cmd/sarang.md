# Calculus | Change, accumulation and approximation

> **AA SL foundations and AA HL extensions.** An original guide connecting the 19 code-specific lessons. The same ideas recur in graphs, motion, optimization, differential equations, series and numerical methods. State what varies and what remains fixed.

## One connected picture

The derivative at a point is a limit of average rates, $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$, when that limit exists. On a graph it is the tangent slope. In a motion model, a derivative of position gives velocity, and a derivative of velocity gives acceleration. A zero derivative is a **candidate** stationary point, not automatically a maximum. Inspect the derivative's sign on either side, use a justified second-derivative test where appropriate, and compare endpoints for a constrained domain. A discontinuity or undefined derivative can also affect extrema.

A definite integral measures signed accumulation. If $f$ is positive, the signed integral over an interval equals the region's area; if $f$ changes sign, geometric area requires splitting at the zeros and adding absolute contributions. The fundamental theorem connects accumulation and change: when $F'=f$, $\int_a^b f(x)\,dx=F(b)-F(a)$. Reversing the bounds changes the sign. An indefinite integral includes an arbitrary constant $C$ because different antiderivatives can differ by a constant. This constant matters when an initial condition is used to identify one solution.

The learner supplied the 2023 Version 1.0 AA HL booklet. Calculus rows were checked on printed pages 9 to 11 (PDF pages 11 to 13), including the difference between distance and displacement on printed page 10. The methods below explain when formulas apply and are not quotations from the booklet; see the formula booklet audit for row locations and extraction cautions.

## Worked SL example: optimize with a real constraint

A farmer has $28$ metres of fencing for three sides of a rectangular pen along an existing wall. Let $x$ be the length of each side perpendicular to the wall and $y$ the fenced side parallel to it. Then $2x+y=28$ with $0\leq x\leq14$, so $y=28-2x$ and $A(x)=x(28-2x)=28x-2x^2$. Differentiate: $A'(x)=28-4x=0$ when $x=7$. The second derivative is $A''(x)=-4<0$, so it is an interior maximum; the endpoint areas are both zero. Therefore $y=14$ and the maximum area is $98\text{ m}^2$. Writing a numerical derivative answer without the feasible interval, second check and units would not complete the modeling argument.

Now integrate $4x(x^2+1)$ from $0$ to $2$. Set $u=x^2+1$ and $du=2x\,dx$. The integral becomes $2\int_1^5u\,du=[u^2]_1^5=25-1=24$. An independent check differentiates $(x^2+1)^2$ to obtain $4x(x^2+1)$. If substituting into a definite integral, transform the bounds **or** return to $x$ before evaluating; do not mix $u$ limits with an $x$ antiderivative.

## HL extension: equations and approximation

The first-order equation $dy/dx=x+y$ with $y(0)=1$ can be approximated by Euler's method. With step $h=0.5$, the first slope is $0+1=1$, so $y_1=1+0.5(1)=1.5$ at $x_1=0.5$. The next slope is $0.5+1.5=2$, so $y_2=1.5+0.5(2)=2.5$ at $x_2=1$. The recurrence is $y_{n+1}=y_n+h f(x_n,y_n)$, using the slope at the **start** of each step. A smaller step often improves accuracy for a smooth problem but is not a universal guarantee with arbitrary conditions or finite precision.

There is also an exact check: rearrange to $y'-y=x$. One solution satisfying the initial condition is $y=2e^x-x-1$. Its derivative is $2e^x-1$, exactly equal to $x+y$. At $x=0$, it equals $1$. At $x=1$, the exact value is $2e-2\approx3.437$, whereas this coarse two-step Euler approximation is $2.5$. The comparison measures the approximation's error for this problem, not an error bound for all differential equations. Sketching the positive increasing slope field helps explain why a fixed left-endpoint slope lags a rapidly growing solution.

For a power series, distinguish its local approximation from a global identity. Around $x=0$, $e^x=1+x+x^2/2!+x^3/3!+\cdots$. The cubic polynomial $1+x+x^2/2+x^3/6$ approximates $e^x$ for small $|x|$; at $x=0$ it and its first three derivatives agree with $e^x$. A Taylor polynomial's truncation error needs separate assessment, especially far from the expansion point. Similarly, an improper integral requires an explicit limit; merely inserting $\infty$ into an antiderivative is not algebra.

## Exam lens and common wrong turns

Paper 1 style rewards a clear derivative or integral transformation and exact stationary-point reasoning. Paper 2 style may require numeric solving, a graph or an interpreted model. Paper 3 style may connect a differential equation, a discrete approximation and a contextual decision. These are descriptions of independent practice styles, not guarantees about real exam tasks.

- A stationary point $f'(x)=0$ may be a maximum, minimum or neither. The example $f(x)=x^3$ has $f'(0)=0$ but no local extremum there.
- When integrating $\int g'(x)/g(x)\,dx$, the real-domain result is $\ln|g(x)|+C$ on a suitable interval, not always $\ln g(x)+C$.
- If a definite integral crosses the axis, its signed value can be zero while the total geometric area is not.
- A separable differential equation may lose constant solutions if divided by a factor that can equal zero. Check those cases in the original equation.
- Differential units matter: if $s$ is metres and $t$ is seconds, $ds/dt$ is metres per second and $d^2s/dt^2$ is metres per second squared.

## Check yourself

For $f(x)=x^2-4x+1$, $f'(x)=2x-4$, so the only stationary point is at $x=2$, where $f(2)=-3$ and $f''(x)=2>0$. For $\int_0^1 6x\,dx$, an antiderivative is $3x^2$, giving $3$. If $y'=2y$ and $y(0)=3$, direct differentiation verifies $y=3e^{2x}$. Move from these checks to the code-specific lessons before trying the linked original Paper 3 investigations.
