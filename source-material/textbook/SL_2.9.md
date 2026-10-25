# Exponential and logarithmic functions

> **SL 2.9 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- sketch and describe the graphs of $y=a^{x}$, $y=e^{x}$, $y=\log_ax$ and $y=\ln x$, including domains, ranges, intercepts and asymptotes;
- explain that $a^{x}$ and $\log_ax$ are inverse functions and use this to find inverses of related functions;
- model growth and decay with $y=ka^{x}$ and $y=Pe^{rt}$, and interpret the parameters;
- convert between $b^{x}$ and $e^{x\ln b}$;
- determine the parameters of an exponential model from two data points;
- solve exponential and logarithmic equations that arise in models, using logarithms or technology;
- use logarithmic scales, such as pH, and interpret a model's asymptote in context.

## Why this topic matters

Linear growth adds the same amount each period; exponential growth multiplies by the same factor each period. That difference is the difference between a savings account that doubles and a pay rise that adds a fixed sum. Exponential models describe populations, compound interest, radioactive decay, the cooling of a cup of tea, the spread of an infection in its early stage and the charging of a capacitor. Logarithms are the inverse tool: they turn a multiplication into an addition and so compress enormous ranges into manageable numbers. The Richter scale, decibels and pH are all logarithmic. In the IB course, SL 2.9 provides the functions; SL 1.7 supplies the laws used to manipulate them; SL 2.10 solves equations that use them; and Unit 5 differentiates and integrates $e^{x}$ and $\ln x$, whose elegant calculus is the reason that base $e$ is used for natural models. In the examination, modelling questions are common and usually require a mixture of recognising the form, finding the constants, using the GDC or logarithms to solve, and interpreting the result.

## Core ideas

### Exponential functions

An **exponential function** has the form $f(x)=a^{x}$ with base $a>0$, $a\ne1$. Its key properties are:

- domain: all real numbers; range: $y>0$;
- $y$-intercept $(0,1)$ because $a^{0}=1$; no $x$-intercept;
- horizontal asymptote $y=0$ (the $x$-axis);
- for $a>1$ the function is increasing (growth) and for $0<a<1$ it is decreasing (decay);
- the larger $a$ is (for $a>1$), the steeper the growth.

The special base $e\approx2.71828$ gives $f(x)=e^{x}$, the function whose gradient at every point equals its own value (the defining property exploited in Unit 5). The exponential function is also *one-to-one*, so it has an inverse.

A more general exponential function is $f(x)=ka^{x}+c$ with a horizontal asymptote $y=c$. The constant $k$ stretches the graph vertically (and, if negative, reflects it), so the $y$-intercept becomes $k+c$.

### Growth and decay models

Two forms are in common use:
$$
y=ka^{x}\qquad\text{or}\qquad y=Pe^{rt}.
$$
In $y=Pe^{rt}$, $P$ is the initial quantity at $t=0$ and $r$ is the **continuous growth rate**: $r>0$ for growth and $r<0$ for decay. The two forms are equivalent, since $a^{x}=e^{x\ln a}$, so $5\cdot2^{x}=5e^{(\ln2)x}$ with $r=\ln2\approx0.693$. In $y=ka^{x}$, the number $a$ is the **growth factor per unit of $x$**: if $a=1.04$ the quantity grows by $4\%$ per unit. The doubling time for growth rate $r$ is $\dfrac{\ln2}r$, and the half-life for a decay rate $|r|$ is the same expression $\dfrac{\ln2}{|r|}$. A quantity decaying with half-life $T$ can be written $N=N_0\left(\tfrac12\right)^{t/T}$.

When a model has a limiting value, such as Newton's law of cooling $T=T_{\text{room}}+Ae^{-kt}$, the horizontal asymptote $T=T_{\text{room}}$ is the long-term value. Interpret it: the object cools toward the room temperature but never goes below it.

### Finding parameters

Given two data points $(x_1,y_1)$ and $(x_2,y_2)$ on $y=ka^{x}$, substitute both and divide to eliminate $k$: $\dfrac{y_2}{y_1}=a^{x_2-x_1}$. Then solve for $a$ and substitute back for $k$. If one of the points is the $y$-intercept $(0,y_0)$, then $k=y_0$ directly and the other point gives $a$. For $y=Pe^{rt}$ the same method gives $r=\dfrac{\ln(y_2/y_1)}{t_2-t_1}$.

### Logarithmic functions

The **logarithmic function** $f(x)=\log_ax$ ($a>0$, $a\ne1$) is the inverse of $a^{x}$: $y=\log_ax\iff x=a^{y}$. For base $e$ we write $\ln x$. Its properties follow from reflecting the exponential graph in $y=x$:

- domain: $x>0$; range: all real numbers;
- $x$-intercept $(1,0)$ because $\log_a1=0$; no $y$-intercept;
- vertical asymptote $x=0$ (the $y$-axis);
- increasing for $a>1$, passing through $(a,1)$.

A function such as $g(x)=\log_2(x+3)$ is the basic graph shifted three units left, so its vertical asymptote is $x=-3$ and its domain is $x>-3$. The graphs of $y=a^{x}$ and $y=\log_ax$ are reflections of each other in the line $y=x$, so the inverse of $f(x)=ka^{x}+c$ is $f^{-1}(x)=\log_a\left(\dfrac{x-c}k\right)$.

The growth of the logarithm is *very slow*: $\log_{10}$ of a million is only $6$, and $\ln x$ increases without bound but more slowly than any power of $x$. This slow growth is the reason logarithms are used to describe very large ranges of quantities.

### Logarithmic scales

Some quantities are measured on a logarithmic scale because they cover many orders of magnitude. The **pH** of a solution is $\mathrm{pH}=-\log_{10}[\mathrm{H}^{+}]$ where $[\mathrm{H}^{+}]$ is the hydrogen-ion concentration in mol/L. A decrease of $1$ in pH corresponds to a factor of $10$ increase in concentration. Similarly, the Richter magnitude and the decibel scale are logarithmic, so each step represents a multiplication by a fixed factor. To convert back, use $[\mathrm{H}^{+}]=10^{-\mathrm{pH}}$.

### Solving model equations

For an equation $ka^{t}=B$: divide by $k$, take logarithms and use the power law, $t=\dfrac{\ln(B/k)}{\ln a}$ (SL 1.7). For $Pe^{rt}=B$: $t=\dfrac1r\ln\dfrac BP$. A GDC can solve the same equations by intersecting $y=ka^{t}$ with $y=B$. In models with an asymptote, such as $T=20+60e^{-kt}$, first isolate the exponential: $60e^{-kt}=T-20$. Note that a target value beyond the asymptote has no solution: the tea will never cool below room temperature.

### Interpretation and domain

In context, the independent variable is time or quantity, so the domain is typically $t\ge0$. State the *units* of $r$ (per year, per minute) and interpret the parameters: $P$ is the starting amount, $a$ the factor per period, $r$ the rate. Distinguish a **rate of growth of $5\%$ per year** ($a=1.05$) from a **continuous rate** $r=0.05$ ($a=e^{0.05}=1.0513$); they are not the same, though similar for small rates.

## Worked examples

### Example 1 (features of an exponential, 4 marks)

For $y=3\cdot2^{x}$, state the $y$-intercept, the asymptote and the range, and find $y$ when $x=2$.

*Solution.* At $x=0$, $y=3$, so the $y$-intercept is $(0,3)$. The horizontal asymptote is $y=0$ and the range is $y>0$. At $x=2$: $y=3\cdot4=12$.

### Example 2 (an exponential with an asymptote, 6 marks)

For $f(x)=5-3e^{-x}$, find the asymptote, the intercepts and the range.

*Solution.* As $x\to\infty$, $e^{-x}\to0$ and $f(x)\to5$, so the horizontal asymptote is $y=5$. The $y$-intercept is $f(0)=5-3=2$. For the $x$-intercept, $3e^{-x}=5$, so $e^{-x}=\dfrac53$ and $x=-\ln\dfrac53\approx-0.511$. The function is increasing from $-\infty$ towards $5$, so the range is $y<5$.

Check: $f(-0.511)=5-3e^{0.511}=5-3(1.667)=0$ ✓.

### Example 3 (population growth, 7 marks)

A population is modelled by $P=500e^{0.03t}$, with $t$ in years. Find the initial population, the population after $10$ years, the doubling time, and the time to reach $2000$.

*Solution.* Initially $P(0)=500$. After $10$ years, $P=500e^{0.3}\approx675$. The doubling time is $\dfrac{\ln2}{0.03}\approx23.1$ years. For $P=2000$: $e^{0.03t}=4$, so $t=\dfrac{\ln4}{0.03}\approx46.2$ years (which is two doublings, as expected).

### Example 4 (radioactive decay, 6 marks)

Carbon-14 has a half-life of $5730$ years. (a) What fraction remains after $2000$ years? (b) How old is a sample with $30\%$ remaining?

*Solution.* The fraction remaining is $\left(\tfrac12\right)^{t/5730}$. (a) At $t=2000$: $0.5^{0.3490}=0.785$, so $78.5\%$ remains. (b) Solve $0.5^{t/5730}=0.3$: $\dfrac t{5730}=\dfrac{\ln0.3}{\ln0.5}=1.737$, so $t\approx9950$ years.

Check: after one half-life $50\%$ remains and after two $25\%$, so $30\%$ lies between them, at about $1.74$ half-lives ✓.

### Example 5 (finding the parameters, 5 marks)

An exponential model $y=ab^{x}$ passes through $(1,6)$ and $(3,24)$. Find $a$ and $b$.

*Solution.* Dividing: $\dfrac{24}{6}=b^{3-1}$, so $b^{2}=4$ and $b=2$ (as $b>0$). Then $6=a\cdot2$, so $a=3$. The model is $y=3\cdot2^{x}$.

### Example 6 (changing the base, 3 marks)

Write $5\cdot2^{x}$ in the form $5e^{kx}$.

*Solution.* $2^{x}=e^{x\ln2}$, so $5\cdot2^{x}=5e^{(\ln2)x}$ with $k=\ln2\approx0.693$.

### Example 7 (a logarithmic function, 6 marks)

For $f(x)=\ln(x-2)+1$, state the domain, the asymptote and the range, find the $x$-intercept, and find $f^{-1}(x)$.

*Solution.* The domain is $x-2>0$, so $x>2$, and the vertical asymptote is $x=2$. The range is all real numbers. There is no $y$-intercept since $x=0$ is not in the domain. For the $x$-intercept: $\ln(x-2)=-1$, so $x=2+e^{-1}\approx2.37$. For the inverse: $y=\ln(x-2)+1$, so $\ln(x-2)=y-1$ and $x=e^{y-1}+2$; hence $f^{-1}(x)=e^{x-1}+2$, with domain all real numbers and range $y>2$.

### Example 8 (a logarithm with a shift, 5 marks)

For $g(x)=\log_2(x+3)$ find the vertical asymptote, the intercepts and $g^{-1}(x)$.

*Solution.* The asymptote is $x=-3$. The $y$-intercept is $g(0)=\log_23\approx1.58$. The $x$-intercept: $x+3=1$, so $x=-2$. The inverse: $x+3=2^{y}$, so $g^{-1}(x)=2^{x}-3$.

### Example 9 (pH, 4 marks)

(a) Find the pH of a solution with $[\mathrm{H}^{+}]=3\times10^{-5}$ mol/L. (b) Find $[\mathrm{H}^{+}]$ when the pH is $8.2$.

*Solution.* (a) $\mathrm{pH}=-\log_{10}(3\times10^{-5})=-(\log_{10}3-5)=5-0.477=4.52$. (b) $[\mathrm{H}^{+}]=10^{-8.2}\approx6.31\times10^{-9}$ mol/L.

### Example 10 (compound growth, 4 marks)

A sum of EUR 2000 is invested at $4\%$ per year compound interest. Find the time for it to reach EUR 3000.

*Solution.* $2000(1.04)^{t}=3000$, so $1.04^{t}=1.5$ and $t=\dfrac{\ln1.5}{\ln1.04}\approx10.3$ years. Since interest is added annually, the first time the balance exceeds EUR 3000 is after $11$ years (the balance is EUR 2,960 after $10$ years and EUR 3,079 after $11$).

### Example 11 (cooling with an asymptote, 6 marks)

A drink cools according to $T=20+60e^{-0.05t}$ (in $^{\circ}\text{C}$, $t$ in minutes). Find the initial temperature, the long-term temperature, and the time to cool to $40^{\circ}\text{C}$.

*Solution.* $T(0)=80^{\circ}\text{C}$ and as $t\to\infty$, $T\to20^{\circ}\text{C}$. For $T=40$: $60e^{-0.05t}=20$, so $e^{-0.05t}=\dfrac13$ and $t=\dfrac{\ln3}{0.05}\approx22.0$ minutes.

### Example 12 (equations with exponentials, 5 marks)

Solve (a) $3^{x}=7$; (b) $e^{2x}-5e^{x}+6=0$.

*Solution.* (a) $x=\dfrac{\ln7}{\ln3}\approx1.77$. (b) Let $u=e^{x}>0$. Then $u^{2}-5u+6=0$ gives $u=2$ or $u=3$, so $x=\ln2\approx0.693$ or $x=\ln3\approx1.10$.

## Using your GDC

The GDC is essential for exponential and logarithmic models. Graph $y=ka^{x}$ and $y=B$ and use *intersect* to find $x$ when you do not want to use logarithms, or to verify your algebra. To find parameters from two points, you can use the *exponential regression* function on a two-point table, which returns $a$ and $b$ exactly; with more data points it gives the best-fit exponential. When you graph $\ln x$ or $\log_2x$, remember that many GDCs only have $\ln$ and $\log_{10}$ keys: enter $\log_2x$ as $\dfrac{\ln x}{\ln2}$. The window matters: exponential growth can quickly exceed the screen, so use a table to choose sensible limits, and for a decay model take $t$ up to several half-lives to see the asymptote. For pH calculations use the $\log$ and $10^{x}$ keys. Always give answers to $3$ significant figures unless told otherwise, and keep exact values stored. Menu names vary by model.

## Common mistakes

1. **Confusing growth rate and growth factor:** $4\%$ per year is $a=1.04$, not $a=0.04$.
2. **Using $e^{rt}$ with a percentage rate** without converting $5\%$ to $0.05$.
3. **Wrong asymptote:** for $f(x)=ka^{x}+c$ it is $y=c$, not $y=0$.
4. **Domain of $\ln(x-2)$ taken as $x>0$.**
5. **Taking $\ln$ of a sum:** $\ln(60e^{-kt}+20)\ne\ln60-kt+\ln20$. Isolate the exponential first.
6. **Dividing logs incorrectly:** $\dfrac{\ln a}{\ln b}\ne\ln\dfrac ab$.
7. **Rounding too early** in a half-life or doubling-time calculation.
8. **Not interpreting the answer in context** (for instance giving $22.0$ without units, or an answer that is outside the context's domain).

## Exam technique and command terms

**Sketch** an exponential or logarithmic graph with the asymptote drawn as a dashed line and labelled, with the intercepts marked. **State the range** or **the equation of the asymptote** is answered immediately from the form. **Find the value of $k$** or **determine the parameters** requires substituting the data points and showing the division step. **Interpret** or **explain what the asymptote represents** needs a sentence in context. **Solve** may require logarithms, a substitution or the GDC; for exact values use logarithms and leave answers such as $\dfrac{\ln7}{\ln3}$, for decimals use $3$ significant figures. When a question says "find the *exact* value of $t$", give a form such as $20\ln3$.

Always connect the answer to the story: "the population will double after $23.1$ years" is better than "$23.1$". If a model produces an impossible answer (such as a target below the asymptote), say that no such time exists. Practise recognising which form (base $a$ or base $e$) is more convenient: use $e$ if the question gives a continuous rate, and $a$ for a discrete growth factor.

## Connections

SL 1.4 introduced compound interest and depreciation as exponential models, and SL 1.7 gave the laws of exponents and logarithms that are used constantly in this chapter. SL 2.2 and 2.5 supply the inverse-function concepts, since the logarithm is the inverse of the exponential, and SL 2.3 gives the sketching routine. SL 2.10 shows how to combine analytic and graphical solution methods for equations involving $a^{x}$ and $\ln x$, and SL 2.11 shows how transformations move and stretch these graphs. In AHL 1.13, Euler's formula extends $e^{x}$ to imaginary exponents, giving $e^{i\theta}=\cos\theta+i\sin\theta$. In Unit 5, $\dfrac d{dx}e^{x}=e^{x}$ and $\dfrac d{dx}\ln x=\dfrac1x$ are fundamental, differential equations such as $\dfrac{dy}{dt}=ry$ produce the exponential model derived here, and Maclaurin series expand $e^{x}$. In Unit 4, the density of the normal distribution involves $e$, and a logarithmic transformation can linearise exponential data before regression.

## Check your understanding

1. A population is $P=800e^{0.025t}$ ($t$ in years). Find $P(20)$ and the doubling time.
2. For $f(x)=4-2e^{-x}$, state the asymptote, the $y$-intercept and the range.
3. An exponential $y=ab^{x}$ passes through $(0,4)$ and $(2,36)$. Find $a$ and $b$.
4. A radioactive substance has a half-life of $8$ days. What percentage remains after $20$ days?
5. For $g(x)=\ln(x+1)$, state the domain, the intercepts and $g^{-1}(x)$.
6. Solve $4^{x}=30$ to $3$ significant figures.
7. Find the pH of a solution with $[\mathrm{H}^{+}]=2\times10^{-3}$ mol/L.
8. EUR 5000 is invested at $3\%$ compound interest per year. How many years until it first exceeds EUR 8000?
9. A drink cools as $T=18+70e^{-0.08t}$. Find $T$ at $t=10$ and the time to reach $30^{\circ}\text{C}$.
10. Solve $e^{2x}-7e^{x}+10=0$.

### Answers

1. $P(20)=800e^{0.5}\approx1320$ and the doubling time is $\dfrac{\ln2}{0.025}\approx27.7$ years.
2. Asymptote $y=4$; $y$-intercept $4-2=2$; range $y<4$.
3. $a=4$. Then $4b^{2}=36$, so $b=3$: $y=4\cdot3^{x}$.
4. $0.5^{20/8}=0.5^{2.5}\approx0.177$, so about $17.7\%$.
5. Domain $x>-1$; the $x$-intercept is $0$ and the $y$-intercept is $\ln1=0$. $g^{-1}(x)=e^{x}-1$.
6. $x=\dfrac{\ln30}{\ln4}\approx2.45$.
7. $\mathrm{pH}=-\log_{10}(2\times10^{-3})=3-0.301=2.70$.
8. $5000(1.03)^{t}>8000$ gives $t>\dfrac{\ln1.6}{\ln1.03}=15.9$, so after $16$ years.
9. $T(10)=18+70e^{-0.8}\approx49.5^{\circ}\text{C}$. For $T=30$: $70e^{-0.08t}=12$, so $t=\dfrac{\ln(70/12)}{0.08}\approx22.0$ minutes.
10. $u=e^{x}$: $u^{2}-7u+10=0$ gives $u=2$ or $5$, so $x=\ln2\approx0.693$ or $x=\ln5\approx1.61$.

## Summary

- $y=a^{x}$ has domain $\mathbb{R}$, range $y>0$, $y$-intercept $(0,1)$ and asymptote $y=0$; the inverse $\log_ax$ has domain $x>0$, $x$-intercept $(1,0)$ and asymptote $x=0$.
- $y=ka^{x}$ has growth factor $a$; $y=Pe^{rt}$ has continuous rate $r$; convert with $a^{x}=e^{x\ln a}$.
- Doubling time and half-life are $\dfrac{\ln2}{|r|}$; a model with an asymptote has a long-term value.
- Find parameters by substituting two points and dividing.
- Solve $ka^{t}=B$ with logarithms or the GDC; isolate the exponential first when there is a constant term.
- Log scales (pH, decibels) compress large ranges; always interpret the result in context with units.
