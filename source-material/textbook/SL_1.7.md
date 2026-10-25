# Laws of exponents and logarithms

> **SL 1.7 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state and apply the laws of exponents for integer and rational exponents, including negative and fractional powers;
- state the three laws of logarithms and the change of base formula, and derive each from the laws of exponents;
- simplify and combine logarithmic expressions, and express one logarithm in terms of others;
- solve exponential equations by taking logarithms, by writing both sides with a common base, and by substitution;
- solve logarithmic equations, checking every candidate against the domain;
- model growth and decay problems, such as doubling time, with exponential equations;
- use $\ln$ and $e$ fluently, and know the exact values $\log_a 1=0$, $\log_a a=1$ and $a^{\log_a x}=x$.

## Why this topic matters

Exponents and logarithms are the language of growth: compound interest, population models, radioactive decay, the Richter and decibel scales, pH, and the time complexity of algorithms. In the IB course they are a gateway topic. SL 2.9 builds the exponential and logarithmic *functions* on these laws, SL 2.10 solves equations that need them, calculus uses $e^{x}$ and $\ln x$ throughout Unit 5, and AHL differential equations and complex numbers all rely on them. Exam questions often combine several laws in one line, and the marks go to students who can see which law to use quickly and who remember to check the domain. This chapter is therefore worth a careful and fluent study, and it rewards practice by hand, because the algebra is the tool and the calculator only checks it.

## Core ideas

### Laws of exponents

For $a,b>0$ and rational $m,n$:

$$
a^{m}a^{n}=a^{m+n},\qquad \frac{a^{m}}{a^{n}}=a^{m-n},\qquad (a^{m})^{n}=a^{mn},\qquad (ab)^{n}=a^{n}b^{n},\qquad \left(\frac ab\right)^{n}=\frac{a^{n}}{b^{n}}.
$$

These follow from counting factors. For instance $a^{3}a^{2}=(aaa)(aa)=a^{5}$. Extending to zero and negative exponents is forced by consistency: if $a^{m}a^{n}=a^{m+n}$ is to hold for $n=0$, then $a^{m}a^{0}=a^{m}$ so $a^{0}=1$. Setting $n=-m$ gives $a^{m}a^{-m}=a^{0}=1$, so $a^{-m}=\dfrac1{a^{m}}$. The rule for fractional exponents is also forced: $\left(a^{1/n}\right)^{n}=a$, so $a^{1/n}=\sqrt[n]{a}$, and
$$
a^{m/n}=\left(\sqrt[n]{a}\right)^{m}=\sqrt[n]{a^{m}}.
$$
Always take the root first when evaluating by hand, because it keeps numbers small: $27^{2/3}=(\sqrt[3]{27})^{2}=3^{2}=9$.

Two cautions. First, there is **no** law for $a^{m}+a^{n}$ or $(a+b)^{n}$; you cannot split a sum. Second, a negative sign is not part of the base unless it is in brackets: $-3^{2}=-9$ but $(-3)^{2}=9$.

### Definition of a logarithm

For $a>0$, $a\ne1$, the logarithm is the inverse of the exponential:
$$
a^{x}=b\iff x=\log_a b,\qquad b>0.
$$
Hence $\log_a a^{x}=x$ and $a^{\log_a x}=x$ for $x>0$, and $\log_a1=0$, $\log_a a=1$. Common bases: $\log x$ means $\log_{10}x$ and $\ln x$ means $\log_e x$, where $e\approx2.71828$. The restriction $b>0$ is not decoration: no power of a positive base is negative or zero, so $\log_a(-2)$ and $\log_a0$ do not exist among real numbers. This matters hugely when you solve equations.

### The three laws of logarithms

For $x,y>0$ and any real $k$:

$$
\log_a(xy)=\log_a x+\log_a y,\qquad \log_a\frac xy=\log_a x-\log_a y,\qquad \log_a(x^{k})=k\log_a x.
$$

*Derivation of the product law.* Let $\log_a x=p$ and $\log_a y=q$, so $x=a^{p}$ and $y=a^{q}$. Then $xy=a^{p}a^{q}=a^{p+q}$, so by the definition $\log_a(xy)=p+q$. The quotient law is the same argument with $\dfrac{a^{p}}{a^{q}}=a^{p-q}$. For the power law, $x^{k}=(a^{p})^{k}=a^{pk}$, so $\log_a(x^{k})=pk=k\log_a x$.

Special cases come from the power law: $\log_a\dfrac1x=-\log_a x$ and $\log_a\sqrt{x}=\tfrac12\log_a x$. Beware the **non-laws**: $\log(x+y)\ne\log x+\log y$, and $\dfrac{\log x}{\log y}\ne\log x-\log y$. The first is a logarithm of a sum, the second is a quotient of logarithms; neither simplifies.

### Change of base

To evaluate a logarithm to any base, or to move all logarithms to one base:
$$
\log_a b=\frac{\log_c b}{\log_c a}\qquad (c>0,\ c\ne1).
$$
*Derivation.* Let $x=\log_a b$, so $a^{x}=b$. Take $\log_c$ of both sides: $x\log_c a=\log_c b$. Divide. In particular $\log_a b=\dfrac1{\log_b a}$, and powers of the base can be extracted: $\log_{a^{k}}b=\dfrac1k\log_a b$. A calculator with only $\log$ and $\ln$ keys evaluates $\log_5 40$ as $\dfrac{\ln40}{\ln5}\approx2.29$.

### Solving exponential equations

There are three standard situations.

1. **Common base.** If both sides can be written as powers of the same base, equate exponents: $2^{x+1}=32=2^{5}\Rightarrow x=4$.
2. **Different bases.** Take logarithms of both sides (any base, and $\ln$ is usually best), use the power law to bring the unknown down, and solve the linear equation: $5^{2x-1}=40\Rightarrow(2x-1)\ln5=\ln40$.
3. **Quadratic in disguise.** If the equation contains $a^{2x}$ and $a^{x}$, substitute $u=a^{x}$ with $u>0$, solve the quadratic, then reject any $u\le0$ and convert back.

Whenever you give a decimal answer, keep full calculator accuracy until the last line.

### Solving logarithmic equations

1. Combine all logarithms into one with the laws.
2. Convert to exponential form, or equate the arguments if both sides are single logs with the same base.
3. Solve the resulting equation.
4. **Check every solution** in the *original* equation: every argument must be positive. Combining logs can introduce extraneous roots, since $\log(x-3)+\log(x+3)$ needs $x>3$ whereas $\log(x^{2}-9)$ allows $x<-3$.

### The number $e$ and the natural logarithm

The constant $e\approx2.71828$ is the base for which the exponential function $e^{x}$ has gradient equal to its own value at every point, which is why it dominates calculus and continuous growth. The natural logarithm $\ln x=\log_ex$ is its inverse, so $\ln e^{x}=x$ and $e^{\ln x}=x$. All the laws above hold with base $e$. In practice, $\ln$ is the preferred tool for solving exponential equations because every calculator has it, and because the ratio $\dfrac{\ln b}{\ln a}$ evaluates a logarithm of any base. If you meet $e^{kt}$ in a model, taking $\ln$ of both sides gives $kt$ at once, since $\ln e^{kt}=kt$ with no change-of-base step.

### Choosing a strategy

A quick decision process saves time and prevents errors. Look first at the *unknown*: if it sits in an exponent, you will need logarithms or a common base; if it sits inside a logarithm, you will need exponential form. Next look at the *shape*: a single power equal to a number is a direct log solve; two powers with the same base and different exponents suggest substitution; two logarithms with the same base suggest combining. Finally decide on *exact or decimal*: an exact answer wants the ratio of logs left alone, a decimal answer wants the full calculator value rounded once at the end. Writing the strategy in one line before you start is a good habit and often earns the first method mark.

### Exponential modelling

If a quantity is multiplied by a fixed factor each period, an equation of the form $A\,r^{t}=B$ arises, and the unknown time is $t=\dfrac{\ln(B/A)}{\ln r}$. The *doubling time* for growth factor $r$ is $\dfrac{\ln2}{\ln r}$, and the half-life for decay constant $k$ in $N=N_{0}e^{-kt}$ is $\dfrac{\ln2}{k}$. Since the answer is a time, interpret it: if a question asks for the number of *complete years*, round according to the context.

## Worked examples

### Example 1 (exponent laws, 4 marks)

Simplify $\dfrac{(2x^{3}y^{-2})^{3}}{(4x^{-1}y)^{2}}$, giving the answer with positive exponents.

*Solution.* Numerator: $8x^{9}y^{-6}$. Denominator: $16x^{-2}y^{2}$. Dividing, $\dfrac{8}{16}x^{9-(-2)}y^{-6-2}=\dfrac12x^{11}y^{-8}=\dfrac{x^{11}}{2y^{8}}$.

### Example 2 (rational exponents, 4 marks)

Evaluate without a calculator: (a) $27^{2/3}$; (b) $16^{-3/4}$; (c) $\left(\dfrac8{27}\right)^{-2/3}$.

*Solution.* (a) $(\sqrt[3]{27})^{2}=3^{2}=9$. (b) $16^{-3/4}=\dfrac1{(\sqrt[4]{16})^{3}}=\dfrac1{2^{3}}=\dfrac18$. (c) A negative exponent inverts the fraction: $\left(\dfrac{27}{8}\right)^{2/3}=\left(\dfrac32\right)^{2}=\dfrac94$.

### Example 3 (expressing in terms of $p$ and $q$, 5 marks)

Given $\log_a2=p$ and $\log_a3=q$, write in terms of $p$ and $q$: (a) $\log_a18$; (b) $\log_a\sqrt{\dfrac89}$; (c) $\log_a\dfrac{1}{12}$.

*Solution.* (a) $18=2\times3^{2}$, so $\log_a18=p+2q$. (b) $\sqrt{8/9}=\left(2^{3}3^{-2}\right)^{1/2}$, so $\log_a\sqrt{8/9}=\tfrac12(3p-2q)$. (c) $\dfrac1{12}=2^{-2}3^{-1}$, so $\log_a\dfrac1{12}=-2p-q$.

The method is always to *factorise the argument into the known primes*, then apply the laws.

### Example 4 (condensing, 3 marks)

Write $2\log3+\log8-\log6$ as a single logarithm and simplify.

*Solution.* $2\log3=\log9$, so the expression is $\log\dfrac{9\times8}{6}=\log12$.

### Example 5 (taking logs, 5 marks)

Solve $5^{2x-1}=40$, giving the answer to $3$ significant figures.

*Solution.* Taking natural logarithms, $(2x-1)\ln5=\ln40$, so $2x-1=\dfrac{\ln40}{\ln5}=2.2920\ldots$ Then $2x=3.2920\ldots$ and $x=1.646\ldots\approx1.65$.

Check: $5^{2(1.646)-1}=5^{2.292}\approx40$ ✓.

### Example 6 (a quadratic in disguise, 6 marks)

Solve $3^{2x}-4\cdot3^{x}+3=0$.

*Solution.* Let $u=3^{x}>0$. Then $u^{2}-4u+3=0$, so $(u-1)(u-3)=0$, giving $u=1$ or $u=3$. Both are positive. Then $3^{x}=1\Rightarrow x=0$ and $3^{x}=3\Rightarrow x=1$.

### Example 7 (a logarithmic equation, 6 marks)

Solve $\log_2(x+3)+\log_2(x-3)=4$.

*Solution.* Combine: $\log_2\big((x+3)(x-3)\big)=4$, so $x^{2}-9=2^{4}=16$ and $x^{2}=25$, giving $x=\pm5$. The original equation needs $x+3>0$ and $x-3>0$, i.e. $x>3$. So $x=-5$ is rejected and the only solution is $x=5$.

Check: $\log_2 8+\log_2 2=3+1=4$ ✓.

### Example 8 (mixed bases, 5 marks)

Solve $\log_4x+\log_2x=6$.

*Solution.* By change of base, $\log_4x=\dfrac{\log_2x}{\log_24}=\tfrac12\log_2x$. So $\tfrac32\log_2x=6$, hence $\log_2x=4$ and $x=16$.

Check: $\log_416=2$ and $\log_216=4$, sum $6$ ✓.

### Example 9 (a log equation with a square, 5 marks)

Solve $\ln(2x+1)=2\ln x$.

*Solution.* $2\ln x=\ln x^{2}$ (valid for $x>0$). So $2x+1=x^{2}$, i.e. $x^{2}-2x-1=0$, giving $x=1\pm\sqrt2$. The right-hand side requires $x>0$, so $x=1+\sqrt2\approx2.41$; the value $1-\sqrt2<0$ is rejected.

### Example 10 (doubling time, 4 marks)

A town's population grows by $4\%$ per year. After how many years will it first be at least double?

*Solution.* Solve $1.04^{t}=2$: $t=\dfrac{\ln2}{\ln1.04}=17.67\ldots$ years. Because the growth is applied annually, the population first exceeds double in the $18$th year, i.e. after $18$ years.

### Example 11 (an integrated question, 7 marks)

Let $f(x)=\ln(x+2)+\ln(x-1)$ for $x>1$. (a) Show that $f(x)=\ln(x^{2}+x-2)$. (b) Solve $f(x)=\ln4$. (c) Find the exact solution of $e^{f(x)}=10$.

*Solution.* (a) By the product law, $f(x)=\ln\big((x+2)(x-1)\big)=\ln(x^{2}+x-2)$. (b) Equal logarithms with the same base have equal arguments, so $x^{2}+x-2=4$, which gives $x^{2}+x-6=0$ and $(x+3)(x-2)=0$. Since $x>1$, $x=2$. (c) Since $e^{\ln u}=u$, $e^{f(x)}=x^{2}+x-2=10$. So $x^{2}+x-12=0$, $(x+4)(x-3)=0$, and with $x>1$ the solution is $x=3$.

Notice how the domain $x>1$ given in the question did the work of rejecting $x=-3$ and $x=-4$, so you must read it.

## Using your GDC

A GDC has three roles here. First, **evaluation**: it computes $\log_5 40$ via the $\ln$ ratio or a built-in $\log_a b$ template, but check which one your model offers. Second, **solving numerically**: for $5^{2x-1}=40$, plot $y=5^{2x-1}$ and $y=40$ and find the intersection, or use the equation solver. Third, **checking** an algebraic answer by substitution. If the question says "find the exact value", you cannot use a rounded GDC value; the exact form $\dfrac{1}{2}\left(1+\dfrac{\ln40}{\ln5}\right)$ is acceptable. Menu names vary between models, so practise on your own device. Remember also that the GDC will not warn you about domain restrictions: if you solve a log equation graphically, the intersection of the *original* functions automatically respects the domain, which is why graphing is a reliable second check on extraneous roots.

## Common mistakes

1. **Splitting a sum**, writing $\log(a+b)=\log a+\log b$, or $(a+b)^{2}=a^{2}+b^{2}$.
2. **Forgetting the domain.** Not rejecting $x=-5$ in Example 7.
3. **Mishandling negative exponents.** $2^{-3}$ is $\dfrac18$, not $-8$; $\left(\dfrac23\right)^{-1}=\dfrac32$.
4. **Bringing down the exponent wrongly.** $\log(x^{k})=k\log x$, but $(\log x)^{k}\ne k\log x$.
5. **Dividing logs.** $\dfrac{\log x}{\log y}$ is not $\log\dfrac xy$.
6. **Rounding mid-calculation** in an exponential solve, leading to an inaccurate third significant figure.
7. **Forgetting the substitution restriction** $u>0$ in a quadratic-in-disguise equation.
8. **Solving $a^{x}=b$ for negative $b$**, which has no real solution.

## Exam technique and command terms

**Simplify** and **write as a single logarithm** require a fully reduced form: do not leave $\log8+\log5-\log10$ unreduced. **Express in terms of** means the answer must contain only the named symbols. **Solve** means to find all real solutions, and any rejected root should be mentioned with the reason, since that earns the final accuracy mark. **Find the exact value** disallows decimals. **Hence** means use a previous part: often it is a change of base or an earlier law. When a question gives two equations in logs, reduce to one base first.

For method marks, show the line *before* you use the calculator. In a question with a context, always give units and interpret the answer in the context: "after $18$ years" scores differently from "$17.67$".

## Connections

SL 1.5 introduced the concept, and here the laws are made to work. SL 1.4 uses the exponent equation $FV=PV(1+r/100k)^{kn}$, and the solve step is a direct use of the power law. SL 2.9 shows that $y=a^{x}$ and $y=\log_a x$ are inverse functions with mirror-image graphs, while SL 2.11 transformations apply to both. In calculus, $\dfrac{d}{dx}e^{x}=e^{x}$, $\dfrac d{dx}\ln x=\dfrac1x$, and *logarithmic differentiation* uses the product and power laws. In AHL, complex numbers use Euler's form $re^{i\theta}$ (AHL 1.13), the arithmetic of exponents is then used with $\theta$. Statistics uses $e$ in the normal distribution formula, and logarithmic scales linearise exponential data when fitting models. In sequences, the number of terms in a geometric sequence reaching a target is found by $r^{n-1}=\dots$ and a logarithm.

## Check your understanding

1. Simplify $(3a^{2}b^{-1})^{2}\times ab^{3}$.
2. Evaluate $125^{-2/3}$.
3. Write $3\log2+\log5-\log10$ as a single logarithm, and simplify.
4. Given $\ln a=3$ and $\ln b=2$, find $\ln\left(\dfrac{a^{2}}{\sqrt b}\right)$.
5. Solve $2^{x+1}=3^{x}$, giving $3$ significant figures.
6. Solve $\log_3x+\log_3(x-8)=2$.
7. Solve $4^{x}-3\cdot2^{x}-4=0$.
8. A sum of money grows by $5\%$ each year. After how many years does it first more than triple?
9. Show that $\log_ab\times\log_ba=1$.
10. Solve $\log_x64=3$ for $x$, and find $x$ if $\ln x=2.5$ (3 s.f.).

### Answers

1. $9a^{4}b^{-2}\times ab^{3}=9a^{5}b$.
2. $\dfrac1{(\sqrt[3]{125})^{2}}=\dfrac1{25}$.
3. $\log8+\log5-\log10=\log\dfrac{40}{10}=\log4$.
4. $2\ln a-\tfrac12\ln b=6-1=5$.
5. $(x+1)\ln2=x\ln3\Rightarrow x=\dfrac{\ln2}{\ln3-\ln2}=1.71$.
6. $x(x-8)=9\Rightarrow x^{2}-8x-9=0\Rightarrow x=9$ or $-1$. Both $x$ and $x-8$ must be positive, so $x=9$.
7. Let $u=2^{x}$: $u^{2}-3u-4=0\Rightarrow u=4$ or $u=-1$. Reject $u=-1$. So $2^{x}=4$ and $x=2$.
8. $1.05^{t}=3\Rightarrow t=\dfrac{\ln3}{\ln1.05}=22.5\ldots$, so $23$ years.
9. By change of base, $\log_ab=\dfrac{\ln b}{\ln a}$ and $\log_ba=\dfrac{\ln a}{\ln b}$, and the product is $1$.
10. $x^{3}=64$ so $x=4$ (base positive and not $1$). For $\ln x=2.5$: $x=e^{2.5}=12.2$.

## Summary

- Exponent laws: add exponents when multiplying, subtract when dividing, multiply when raising a power to a power; $a^{0}=1$, $a^{-n}=1/a^{n}$, $a^{m/n}=(\sqrt[n]{a})^{m}$.
- $a^{x}=b\iff x=\log_ab$, with $b>0$.
- Log laws: $\log(xy)=\log x+\log y$, $\log(x/y)=\log x-\log y$, $\log x^{k}=k\log x$; change of base $\log_ab=\log_cb/\log_ca$.
- Exponential equations: common base, take logs, or substitute $u=a^{x}$ for a quadratic.
- Log equations: combine, convert, solve, and always check the domain.
- Doubling time is $\ln2/\ln r$; interpret answers in context.
