# Introduction to logarithms

> **SL 1.5 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state the definition $\log_a x=y\iff a^{y}=x$ and convert fluently in both directions;
- evaluate logarithms of powers of the base exactly, including negative and fractional results, without a calculator;
- use $\log_{10}$ (written $\lg$ or $\log$) and the natural logarithm $\ln$ on a calculator and know what each means;
- state the domain and range of $y=\log_a x$ and sketch its graph, including the asymptote and intercept;
- solve equations of the form $a^{x}=b$ exactly and numerically, and equations of the form $\log_a x=c$;
- apply logarithms to scientific scales (pH, earthquake magnitude, sound) and to growth problems where the unknown is an exponent;
- recognise why the logarithm is the inverse of the exponential function.

## Why this topic matters

Until now, every equation in this course had its unknown in the *base* or in a coefficient: $x^{2}=9$, $3x+1=7$. The moment the unknown sits in an *exponent*, as in $1.045^{n}=2$ or $3^{x}=100$, algebra as you know it has no tool. Logarithms are that tool. They exist for one reason: to bring an exponent down to ground level. They also compress huge ranges into manageable numbers, which is why pH, the Richter scale and decibels are all logarithmic. At exam level this chapter is short, but it is the gateway to SL 1.7 (the laws), SL 2.9 (exponential and logarithmic functions), SL 2.10 (equations) and, in AHL, to differentiation of exponentials and integration. A shaky grasp here shows up as errors for the rest of the course, so it pays to understand the definition thoroughly rather than learn tricks.

## Core ideas

### The definition

Let $a>0$ with $a\ne1$. The **logarithm to base $a$** of a positive number $x$ is the exponent to which $a$ must be raised to give $x$:

$$
\log_a x=y\iff a^{y}=x.
$$

Read the left side as the question "*$a$ to the power of what gives $x$?*" For example $\log_2 32=5$ because $2^{5}=32$. Both sides of the equivalence are the same fact in two notations, and being able to switch between them quickly is the main skill of this chapter. A helpful picture is to draw an arc from the base, over the answer, to the number: in $2^{5}=32$ and $\log_2 32=5$, the same three numbers appear, only the unknown moves.

Why must $a>0$ and $a\ne1$? If $a=1$ then $1^{y}=1$ for every $y$, so $\log_1 x$ would be meaningless. A negative base would give powers that jump between positive and negative values, and fractional exponents would not exist as real numbers. And why must $x>0$? Because a positive base raised to *any* real power is positive. There is no exponent that makes $2^{y}$ equal to $-4$ or $0$, so $\log_2(-4)$ and $\log_2 0$ are undefined in the real numbers.

### Special bases

Two bases are so common that calculators have buttons for them. **Common logarithms** use base $10$. They are written $\log_{10}x$, $\lg x$ or simply $\log x$ on calculators, and they tell you roughly how many digits a number has: $\log_{10}500\approx2.699$ lies between $2$ and $3$ because $100<500<1000$. **Natural logarithms** use the base $e\approx2.71828$ and are written $\ln x$. The number $e$ will be explained when exponential functions are studied in SL 2.9 and in calculus, where it is the base that makes $\frac{d}{dx}e^{x}=e^{x}$. For now, treat $\ln x$ as "$\log_e x$" and use the same rules.

### Evaluating by hand

To evaluate $\log_a x$ without a calculator, ask what power of $a$ equals $x$. Often it helps to rewrite $x$ as a power of $a$.

- $\log_3\frac19=-2$ because $3^{-2}=\frac19$.
- $\log_5 1=0$ because $5^{0}=1$, and in general $\log_a1=0$.
- $\log_a a=1$ because $a^{1}=a$.
- $\log_{1/2}8=-3$ because $\left(\frac12\right)^{-3}=2^{3}=8$.
- $\log_4 2=\frac12$ because $4^{1/2}=2$.
- $\log_8 4=\frac23$, because writing $8^{y}=4$ as $2^{3y}=2^{2}$ gives $3y=2$.

The last two examples show that logarithms are often *fractions*. When base and number are both powers of the same integer, rewrite them in that common base and compare the exponents.

### Two cancelling identities

Because the logarithm is defined as the inverse of the exponential, applying one after the other returns the starting value:

$$
\log_a\left(a^{x}\right)=x\quad(\text{all real }x),\qquad a^{\log_a x}=x\quad(x>0).
$$

For example $\ln e^{3}=3$, $10^{\log7}=7$ and $e^{\ln5}=5$. The second identity requires $x>0$ because the logarithm is only defined there. These identities underlie every method for solving exponential and logarithmic equations: *apply the inverse function to both sides*.

### The graph of $y=\log_a x$

Since $y=\log_a x$ and $y=a^{x}$ are inverses, the graph of one is the reflection of the other in the line $y=x$. For $a>1$, the logarithm curve passes through $(1,0)$ (because $\log_a1=0$) and $(a,1)$, increases slowly, has the *vertical asymptote* $x=0$ (the $y$-axis), and exists only for $x>0$. Its range is all real numbers. It grows without bound but very slowly: $\log_{10}$ reaches only $6$ at one million. The exponential graph has the horizontal asymptote $y=0$, and the reflection turns that into the vertical asymptote of the logarithm.

When the argument is a linear expression, such as $f(x)=\ln(3-x)$, the domain requires $3-x>0$, so $x<3$. The asymptote moves to the line where the argument is zero, $x=3$. The $x$-intercept occurs where the argument equals $1$, since $\ln1=0$: here $3-x=1$ gives $x=2$. The $y$-intercept is $f(0)=\ln3\approx1.0986$. Getting domain, asymptote and intercepts from the argument is a standard exam question.

### Solving $a^{x}=b$

To solve an equation with the unknown in an exponent, convert to logarithmic form:

$$
a^{x}=b\iff x=\log_a b.
$$

If a calculator has only $\log_{10}$ and $\ln$, apply either to both sides instead: $a^{x}=b$ gives $x\ln a=\ln b$ and so $x=\dfrac{\ln b}{\ln a}$. This works because $\ln(a^{x})=x\ln a$, which is one of the laws proved in SL 1.7. The same result is the **change of base formula**, $\log_a b=\dfrac{\ln b}{\ln a}$, which appears in the formula booklet. For now you can use it freely to evaluate any logarithm on a calculator.

If the equation has a more complicated exponent, such as $5^{2x-1}=30$, treat the exponent as a single unknown: $2x-1=\log_5 30\approx2.1133$, so $x\approx1.557$. Solve in stages.

### Solving $\log_a x=c$

Convert the other way: $\log_a x=c\iff x=a^{c}$. For $\log_3x=-2$, the solution is $x=3^{-2}=\frac19$. If the unknown is the base, as in $\log_x81=4$, then $x^{4}=81$, so $x=3$. We reject $x=-3$ because a base must be positive. Always check that your solution is in the domain of the original expression.

## Worked examples

### Example 1 (evaluating, 5 marks)

Evaluate without a calculator: (a) $\log_2 64$; (b) $\log_3\frac{1}{27}$; (c) $\log_9 3$; (d) $\log_{10}0.01$; (e) $\ln e^{4}$.

*Solution.* (a) $2^{6}=64$, so $6$. (b) $3^{-3}=\frac1{27}$, so $-3$. (c) $9^{1/2}=3$, so $\frac12$. (d) $10^{-2}=0.01$, so $-2$. (e) $\ln e^{4}=4$ by the cancelling identity.

### Example 2 (converting, 2 marks)

Write $10^{x}=500$ and $e^{x}=7$ in logarithmic form and evaluate $x$.

*Solution.* $x=\log_{10}500\approx2.699$, and $x=\ln7\approx1.946$.

### Example 3 (equations with the unknown in a logarithm, 6 marks)

Solve (a) $\log_3x=-2$; (b) $\log_x81=4$; (c) $\log_2(x-1)=3$.

*Solution.* (a) $x=3^{-2}=\frac19$. (b) $x^{4}=81$, so $x=3$ since a base must be positive. (c) $x-1=2^{3}=8$, so $x=9$. Check: $x-1=8>0$, so the logarithm is defined. ✓

### Example 4 (unknown in an exponent, 6 marks)

Solve (a) $2^{x}=20$; (b) $5^{2x-1}=30$. Give answers to three significant figures.

*Solution.* (a) $x=\log_2 20=\dfrac{\ln20}{\ln2}\approx4.32$.

(b) Take logs: $2x-1=\log_5 30=\dfrac{\ln30}{\ln5}\approx2.1133$. So $2x=3.1133$ and $x\approx1.56$.

Check (a): $2^{4}=16<20<32=2^{5}$, so $x$ should lie between $4$ and $5$. ✓

### Example 5 (domain and graph features, 6 marks)

Let $f(x)=\ln(3-x)$. Find its domain, the equation of the asymptote, and the coordinates of the axis intercepts.

*Solution.* The argument must be positive: $3-x>0\Rightarrow x<3$, so the domain is $x<3$. The vertical asymptote is $x=3$. The $x$-intercept occurs when $3-x=1$, i.e. at $(2,0)$. The $y$-intercept is $\left(0,\ln3\right)\approx(0,1.10)$. The graph is a reflection of the standard logarithm curve in the $y$-axis, shifted to the right by $3$. It decreases from the left, crosses the axis at $x=2$ and plunges to $-\infty$ as $x\to3^{-}$.

### Example 6 (pH, 4 marks)

The pH of a solution is $\mathrm{pH}=-\log_{10}[\mathrm{H}^{+}]$, where $[\mathrm{H}^{+}]$ is the hydrogen ion concentration in $\text{mol dm}^{-3}$. (a) Find the pH when $[\mathrm{H}^{+}]=3.2\times10^{-5}$. (b) Find the concentration when the pH is $7.4$.

*Solution.* (a) $\mathrm{pH}=-\log_{10}\left(3.2\times10^{-5}\right)\approx4.49$. (b) $[\mathrm{H}^{+}]=10^{-7.4}\approx3.98\times10^{-8}$.

A one-unit change in pH means a tenfold change in concentration, which is the point of a logarithmic scale.

### Example 7 (earthquake magnitudes, 4 marks)

The magnitude of an earthquake is $M=\log_{10}\left(\dfrac{I}{I_0}\right)$, where $I$ is its intensity and $I_0$ a reference value. How many times more intense is a magnitude $7.2$ earthquake than one of magnitude $5.0$?

*Solution.* For magnitude $M$, $\dfrac{I}{I_0}=10^{M}$. The ratio of intensities is $\dfrac{10^{7.2}}{10^{5.0}}=10^{2.2}\approx158$. (This uses $10^{a}/10^{b}=10^{a-b}$ from the laws of exponents.)

### Example 8 (growth with an unknown time, 5 marks)

A bacterial population is modelled by $N=200\cdot2^{t/3}$, where $t$ is time in hours. Find when the population reaches $5000$.

*Solution.* $200\cdot2^{t/3}=5000$, so $2^{t/3}=25$. Converting, $\dfrac t3=\log_2 25=\dfrac{\ln25}{\ln2}\approx4.644$. Hence $t\approx13.9$ hours. The check: after $12$ hours the population is $200\cdot2^{4}=3200$ and after $15$ hours it is $200\cdot2^{5}=6400$, so $13.9$ is plausible.

## Using your GDC

Use the dedicated $\log$ and $\ln$ keys, and for any other base use the change-of-base formula: to compute $\log_5 30$ enter $\ln(30)/\ln(5)$ with brackets around each logarithm. Many GDCs also have a "$\log_b$" template; learn where it is on yours. For equations such as $2^{x}=20$, you may use the solver or graph $y=2^{x}$ and $y=20$, and read the intersection. Graphing confirms an answer *and* helps with domain: if you plot $y=\ln(3-x)$ the curve stops at $x=3$, matching your algebra.

When a GDC returns a decimal such as $4.3219$, quote it to the accuracy requested, normally three significant figures, and do not use that rounded value for later steps. Write the equation you solved, because the method mark depends on it. Finally, keep your GDC in the right mode: answers such as `4.32193E0` are not wrong, but they must be written in ordinary form in your solution.

## Common mistakes

1. Writing $\log_a x=y$ as $x^{y}=a$ instead of $a^{y}=x$. Remember that the base stays the base.
2. Taking logarithms of a negative number or zero, and not checking the domain of the solution.
3. Treating $\log(a+b)$ as $\log a+\log b$. No such law exists, and the actual laws come in SL 1.7.
4. Computing $\log_5 30$ as $\ln30/5$ or as $\ln(30/5)$.
5. Forgetting that the logarithm graph has a vertical asymptote and quoting the wrong one.
6. Rejecting valid fractions: $\log_8 4=\frac23$ is a correct answer.
7. Accepting a negative base, as in $x=-3$ for $\log_x81=4$.
8. Rounding too early in a multi-step equation.

## Exam technique and command terms

**Solve** requires an exact value when the question says "give your answer in exact form" and a decimal otherwise. If the exam says "find the exact value", an answer like $\log_2 20$ or $\dfrac{\ln20}{\ln2}$ is acceptable and a decimal is not. **Write down** often asks for a logarithm you can see directly, such as $\log_2 8=3$. **Hence** is common here: part (a) evaluates a logarithm, part (b) uses it.

When a Paper 1 question asks for an *exact* answer, the numbers are normally chosen so that the logarithm is an integer or a fraction, or the answer is left in logarithmic form. In Paper 2, you will use a calculator, but you must still show the equation you solved. Sketches of $y=\log_a x$ should show the intercept $(1,0)$, the asymptote $x=0$ as a labelled dashed line, and the behaviour for $x\to0^{+}$.

## Connections

Logarithms are the inverse of exponentials, so everything in SL 2.5 about inverse functions applies: the graph is the reflection in $y=x$, and the domain and range swap. SL 1.7 supplies the three laws that turn products into sums, quotients into differences and powers into multiples. Compound interest and geometric series (SL 1.3 and 1.4) need logarithms to find $n$. Exponential and logarithmic functions in SL 2.9, solving equations in SL 2.10 and transformations in SL 2.11 all rely on this chapter. In calculus, $\ln x$ is the antiderivative of $\frac1x$, and logarithmic differentiation uses the laws. In statistics, logarithms linearise exponential data, and in AHL, complex logarithms extend the idea.

## Check your understanding

1. Evaluate: (a) $\log_2 64$; (b) $\log_3\frac1{27}$; (c) $\log_9 3$; (d) $\log_{10}0.01$; (e) $\ln e^{4}$.
2. Solve $\log_5 x=3$.
3. Solve $\log_x 49=2$.
4. Solve $3^{x}=100$, giving your answer to three significant figures.
5. Solve $e^{2x}=15$ to three significant figures.
6. Find the pH of a solution with $[\mathrm{H}^{+}]=2.5\times10^{-3}$.
7. State the domain of $f(x)=\log_2(x+4)$ and the equation of its asymptote.
8. A population is modelled by $P=500(1.04)^{t}$. Find when it first reaches $2000$.
9. Earthquake A has magnitude $8.1$ and earthquake B has magnitude $6.9$. How many times more intense is A?
10. Show that $\log_4 8=\frac32$.

### Answers

1. (a) $6$; (b) $-3$; (c) $\frac12$; (d) $-2$; (e) $4$.
2. $x=5^{3}=125$.
3. $x^{2}=49$, so $x=7$ (reject $-7$).
4. $x=\dfrac{\ln100}{\ln3}\approx4.19$.
5. $2x=\ln15$, so $x\approx1.35$.
6. $-\log_{10}\left(2.5\times10^{-3}\right)\approx2.60$.
7. $x+4>0$, so $x>-4$; asymptote $x=-4$.
8. $1.04^{t}=4$, so $t=\dfrac{\ln4}{\ln1.04}\approx35.3$ years.
9. $10^{8.1-6.9}=10^{1.2}\approx15.8$.
10. Let $4^{y}=8$. Then $2^{2y}=2^{3}$, so $2y=3$ and $y=\frac32$.

## Summary

- $\log_a x=y\iff a^{y}=x$, with $a>0$, $a\ne1$, $x>0$.
- $\log_a1=0$, $\log_aa=1$, $\log_a(a^{x})=x$ and $a^{\log_ax}=x$.
- $\lg$ is base $10$, $\ln$ is base $e$; use $\log_a b=\dfrac{\ln b}{\ln a}$ for other bases.
- The graph of $\log_a x$ is the reflection of $a^{x}$ in $y=x$: asymptote $x=0$, intercept $(1,0)$.
- Solve $a^{x}=b$ by $x=\log_ab$, and $\log_ax=c$ by $x=a^{c}$.
- A logarithmic scale turns multiplication by $10$ into addition of $1$.
- Always check that solutions lie in the domain.
