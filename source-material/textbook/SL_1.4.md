# Compound interest and depreciation

> **SL 1.4 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- explain the difference between simple and compound interest and compute both;
- use the compound growth formula $FV=PV\left(1+\dfrac{r}{100k}\right)^{kn}$ with annual, half-yearly, quarterly and monthly compounding;
- solve for the time $n$, the rate $r$ or the starting value $PV$, using logarithms, roots or the GDC;
- model depreciation and inflation as repeated percentage decreases and increases;
- compare financial options fairly, for instance with an effective annual rate;
- use the TVM (time value of money) solver on a GDC, including the meaning of each variable and its sign convention;
- derive the future value of regular savings from the geometric series formula;
- state sensible rounding conventions for money and report conclusions in context.

## Why this topic matters

Money problems are one of the few places where the mathematics of the course touches every student's real life. In the exam they carry a distinctive trait: the algebra is short, but there are many *decisions* to make. How often is interest compounded? Is the rate nominal or effective? Should the answer be to the nearest whole unit or to two decimal places? Is a decrease of $12\%$ a multiplier of $0.12$ or $0.88$? The topic is also the first place that geometric sequences get used on real data, and it is the practical home of exponential functions and logarithms. Because it is so structured, an examiner can ask for the same idea in several guises, and candidates who understand the repeated-multiplier idea cope with all of them.

## Core ideas

### Simple interest versus compound interest

With **simple interest** the interest each period is calculated on the *original* amount only. If $PV$ is invested at an annual rate of $r\%$ for $n$ years, the interest each year is $PV\times\frac{r}{100}$, which is constant, so the value after $n$ years is

$$
FV=PV\left(1+\frac{rn}{100}\right).
$$

This is an arithmetic sequence in the amount: it grows by a fixed amount each year.

With **compound interest** the interest is added to the balance, and later interest is calculated on the larger balance. Each year multiplies the balance by $1+\frac{r}{100}$, so the balances form a geometric sequence:

$$
FV=PV\left(1+\frac{r}{100}\right)^{n}.
$$

For small numbers of years the two models are close, but they diverge steadily. On $5000$ at $5\%$ for $10$ years, simple interest earns $2500$, while compound interest earns $5000(1.05)^{10}-5000\approx3144.47$.

### Compounding more than once per year

If interest is compounded $k$ times per year, with *nominal annual rate* $r\%$, then each period earns $\frac{r}{k}\%$, and there are $kn$ periods in $n$ years:

$$
FV=PV\left(1+\frac{r}{100k}\right)^{kn}.
$$

The word **nominal** matters. A nominal rate of $6\%$ compounded monthly does not mean $6\%$ is earned over the year. It means $0.5\%$ per month. After twelve months the balance has grown by a factor of $1.005^{12}\approx1.06168$, an **effective annual rate** of about $6.17\%$. Effective annual rates let you compare accounts with different compounding frequencies.

For a given nominal rate, more frequent compounding always gives a slightly larger balance, but the gains shrink quickly. Daily compounding is barely better than monthly.

### Depreciation, inflation and decay

When a quantity falls by a fixed percentage each period, the multiplier is $1-\frac{p}{100}$. A car worth $V_0$ that loses $15\%$ of its value each year is worth $V_0(0.85)^{n}$ after $n$ years. Inflation works the other way: if prices rise by $2.5\%$ a year, the **real value** of a fixed sum falls by dividing by $1.025^{n}$, which is the same as multiplying by $\left(\frac{1}{1.025}\right)^{n}$. Note that a $15\%$ fall each year never reaches zero. It decays towards zero, which is why a second-hand price model is believable only over limited times.

### Solving for time and for rate

Time is in an exponent, so you need a logarithm (or the GDC). From $FV=PV\,m^{n}$, where $m$ is the multiplier,

$$
n=\frac{\ln\left(FV/PV\right)}{\ln m}.
$$

Rate is the base, so you need a root: $m=\left(FV/PV\right)^{1/n}$, and then $r=100(m-1)$. When the question asks for a whole number of periods or years, think about what the context requires: "after how many full years will the balance first exceed..." means round *up*, because you need the balance to have passed the target.

### Regular savings and the geometric sum

Suppose you deposit $P$ at the end of every month into an account with monthly rate $i$ (as a decimal), and you want the value just after $N$ deposits. The first deposit grows for $N-1$ months, the second for $N-2$, and so on, and the last earns nothing:

$$
FV=P(1+i)^{N-1}+P(1+i)^{N-2}+\cdots+P(1+i)+P.
$$

This is a geometric series with first term $P$, ratio $1+i$ and $N$ terms, so

$$
FV=P\,\frac{(1+i)^{N}-1}{i}.
$$

If deposits are made at the *start* of each month, every deposit earns one extra month of interest, so the value is multiplied by $(1+i)$. Questions normally state which convention applies. The GDC's TVM solver implements the same formulas, so a derivation like this one is rarely required, but understanding it shows that annuities are nothing new.

### The TVM solver and sign conventions

The TVM solver asks for $N$ (number of payments or compounding periods), $I\%$ (the *annual nominal* rate), $PV$ (present value), $PMT$ (payment per period), $FV$ (future value), $P/Y$ (payments per year) and $C/Y$ (compounding periods per year). It has one unknown that you tell it to solve. The convention is that money you *pay out* is negative and money you *receive* is positive. If you invest $5000$ now, enter $PV=-5000$, and the solver returns a positive $FV$. If you enter $PV=+5000$ and also expect a positive $FV$, the solver will give an error or a nonsensical negative result. Learn the sign rule, because it is the most common reason for a GDC answer that looks wrong.

### Rounding conventions

Carry the full calculator value through the working, and round only the final money answer, normally to two decimal places or to the nearest unit, depending on what is asked. Do not round the rate or the multiplier part-way through a calculation, since a small change in the base is magnified by the exponent.

## Worked examples

### Example 1 (annual compounding, 3 marks)

An amount of $5000$ is invested at $3.2\%$ per annum compounded annually. Find its value after $8$ years, to the nearest unit.

*Solution.* $FV=5000(1.032)^{8}=6432.91\ldots\approx6433$.

### Example 2 (quarterly compounding, 4 marks)

An amount of $12\,000$ is invested at a nominal annual rate of $6\%$ compounded quarterly. Find its value after $5$ years.

*Solution.* $k=4$, so the quarterly rate is $\frac{6}{4}=1.5\%$ and there are $4\times5=20$ periods:

$$
FV=12\,000\left(1+\frac{6}{400}\right)^{20}=12\,000(1.015)^{20}\approx16\,162.26.
$$

The common slip is to use $6\%$ per quarter, or to forget that the number of periods is $20$ rather than $5$.

### Example 3 (time to double, 4 marks)

How long does it take for an investment to double at $4.5\%$ per annum compounded annually? Give the answer in whole years.

*Solution.* Solve $1.045^{n}=2$. Then $n=\dfrac{\ln2}{\ln1.045}\approx15.75$. The balance first exceeds double after $16$ full years. Check: $1.045^{15}\approx1.935<2$ and $1.045^{16}\approx2.022>2$. ✓

### Example 4 (rate, 4 marks)

An investment of $8000$ grows to $10\,000$ in $6$ years with annual compounding. Find the annual rate to three significant figures.

*Solution.* $8000\,m^{6}=10\,000$, so $m^{6}=1.25$ and $m=1.25^{1/6}\approx1.03789$. So $r\approx3.79\%$.

### Example 5 (depreciation, 6 marks)

A car costs $24\,000$ and loses $15\%$ of its value each year.

(a) Find its value after $5$ years, to the nearest unit.
(b) After how many whole years does its value first fall below $5000$?

*Solution.* (a) $V=24\,000(0.85)^{5}=10\,648.93\approx10\,649$.

(b) $24\,000(0.85)^{n}<5000$, so $0.85^{n}<\frac{5}{24}\approx0.20833$. Dividing by $\ln0.85<0$ reverses the inequality: $n>\dfrac{\ln(5/24)}{\ln0.85}\approx9.65$. So $n=10$ years. Check: $24\,000(0.85)^{9}\approx5\,559$ is above $5000$, and $24\,000(0.85)^{10}\approx4\,725$ is below. ✓

### Example 6 (real value and inflation, 3 marks)

A prize of $50\,000$ is paid in $10$ years' time. Inflation is $2.5\%$ per year. Find its value in today's money.

*Solution.* $\dfrac{50\,000}{1.025^{10}}\approx39\,059.92$. The prize will buy what about $39\,060$ buys today.

### Example 7 (comparing accounts, 5 marks)

Bank A offers $4.2\%$ per year compounded annually. Bank B offers a nominal $4.1\%$ compounded monthly. Which is better?

*Solution.* The effective annual rate of B is $\left(1+\frac{0.041}{12}\right)^{12}-1\approx0.04178$, i.e. $4.178\%$. This is below $4.2\%$, so Bank A is better, by a small margin. If you compare nominal rates alone you would wrongly think A is only slightly different, and if you saw "monthly" you might wrongly assume B must win. Only the effective rate decides.

### Example 8 (regular savings, 6 marks)

A saver deposits $200$ at the end of each month for $3$ years into an account paying a nominal $6\%$ per year compounded monthly. Find the final balance, and the monthly deposit needed to reach exactly $10\,000$.

*Solution.* The monthly rate is $0.5\%$, so $i=0.005$ and $N=36$:

$$
FV=200\,\frac{1.005^{36}-1}{0.005}\approx7867.22.
$$

For a target of $10\,000$, $P=\dfrac{10\,000\times0.005}{1.005^{36}-1}\approx254.22$. So the saver needs about $254.22$ per month. On a GDC, $N=36$, $I\%=6$, $PV=0$, $PMT=-200$, $P/Y=C/Y=12$, solve for $FV$ and get the same $7867.22$.

## Using your GDC

On the TVM solver, check *every* line before pressing solve. The most common failures are: leaving $P/Y$ and $C/Y$ at their old values, entering the rate as a decimal ($0.06$) instead of a percentage ($6$), entering $N$ as the number of years rather than the number of periods, and getting the sign wrong. For a lump sum with no payments, set $PMT=0$ and make $PV$ and $FV$ opposite in sign.

For solving $1.045^{n}=2$ you can use the TVM solver for $N$ (with $PV=-1$, $FV=2$, $PMT=0$), or a graph intersection, or logarithms by hand. Because the solver may return a non-integer such as $15.75$, you must interpret it. In an exam, write the equation you solved, because a calculator answer with no setup earns only the answer mark. It is wise to carry out a quick estimate to confirm. At $4.5\%$ the rule of thumb "years to double $\approx72/4.5=16$" matches.

## Common mistakes

1. Using $r$ as a decimal in one place and a percentage in another.
2. Confusing a nominal annual rate with the rate per period, or forgetting that the number of periods is $kn$.
3. Using the multiplier $0.15$ when a $15\%$ *decrease* needs $0.85$.
4. Rounding the multiplier, for example $1.0379$, early, and then getting the third significant figure wrong.
5. Reporting a non-integer number of years for a "whole years" question, or rounding in the wrong direction.
6. Entering the wrong sign in the TVM solver and then ignoring a negative answer.
7. Comparing nominal rates for different compounding frequencies instead of effective rates.
8. Giving money to many decimal places or to the wrong accuracy, such as $6432.9115885$.

## Exam technique and command terms

In this topic the command terms **calculate** and **find** require a formula substitution to be visible. **Determine** often signals a multi-step process, such as finding a rate and then a time. **Compare** requires a conclusion in words: "Bank A is better because its effective annual rate $4.2\%$ exceeds $4.178\%$". Marks for interpretation are easy to lose.

Write the formula first, then substitute, then compute. If you use the GDC, list the variables you entered. State the accuracy requested: "to the nearest dollar" and "to 2 decimal places" are different instructions. For comparison tasks, calculate both values to the same accuracy. For threshold questions ("how many years until the value exceeds..."), solve, then check the integers either side.

In Paper 1 this topic is rarely tested in isolation, because the arithmetic would be heavy. When it is, the numbers are chosen so that a power such as $1.1^{2}=1.21$ or $2^{10}=1024$ is useful, and the question is usually structural: write an expression for the value after $n$ years. In Paper 2 the topic often opens the paper as a confidence-builder, and the marks depend on correct setup and sensible rounding.

## Connections

Compound growth is the geometric sequence of SL 1.3 applied to money. The sum of regular savings uses the geometric sum formula. Solving for $n$ requires logarithms (SL 1.5 and 1.7) and links to exponential functions in SL 2.9, where the same growth appears as $y=ab^{x}$. In AHL, the idea of continuous compounding leads to the number $e$ and to differential equations. Depreciation links to exponential decay, half-life problems and the infinite series of SL 1.8: the total value lost by an asset that keeps losing a percentage each year converges. Percentage change also appears in statistics (index numbers) and in the study of rates of change in calculus.

## Check your understanding

1. An amount of $7500$ is invested at $4\%$ per annum compounded annually. Find its value after $3$ years.
2. The same amount is invested at a nominal $4\%$ compounded quarterly. Find its value after $3$ years, to two decimal places.
3. A machine worth $15\,000$ loses $12\%$ of its value each year. Find its value after $4$ years.
4. At $6\%$ per annum compounded annually, after how many whole years will an investment first more than triple?
5. An amount of $2000$ is invested at a nominal $4.2\%$ compounded monthly. Find its value after $5$ years.
6. Compare simple and compound interest on $5000$ at $5\%$ per year over $10$ years: how much more interest does compounding give?
7. An investment doubles in $12$ years with annual compounding. Find the annual rate to three significant figures.
8. Find the effective annual rate, to three significant figures, of a nominal $6\%$ compounded monthly.
9. How much must be invested now at $3.5\%$ per annum compounded annually to have $10\,000$ in $5$ years?
10. A saver deposits $200$ at the *start* of each month for $3$ years at a nominal $6\%$ compounded monthly. Find the final balance.

### Answers

1. $7500(1.04)^{3}=8436.48$.
2. $7500(1.01)^{12}=8451.19$.
3. $15\,000(0.88)^{4}=8995.43$.
4. $1.06^{n}>3$ gives $n>18.85$, so $19$ years.
5. $2000\left(1+\frac{0.042}{12}\right)^{60}=2000(1.0035)^{60}\approx2466.45$.
6. Simple: $2500$. Compound: $3144.47$. Compounding gives $644.47$ more.
7. $2^{1/12}\approx1.05946$, so $5.95\%$.
8. $1.005^{12}-1\approx0.06168$, so $6.17\%$.
9. $\dfrac{10\,000}{1.035^{5}}\approx8419.73$.
10. Start-of-month deposits earn an extra month, so multiply the end-of-month value by $1.005$: $7867.22\times1.005\approx7906.56$.

## Summary

- Simple interest is linear (arithmetic); compound interest is exponential (geometric).
- $FV=PV\left(1+\frac{r}{100k}\right)^{kn}$ with $k$ compounding periods a year.
- A nominal rate is divided by $k$; the effective annual rate is $\left(1+\frac{r}{100k}\right)^{k}-1$.
- A $p\%$ decrease has multiplier $1-\frac{p}{100}$; inflation is removed by dividing.
- Time needs logarithms, rate needs roots, and both can be done on the GDC.
- TVM solver: set $P/Y$ and $C/Y$, enter rate as a percentage, use opposite signs for money in and out.
- Round only at the end, and state conclusions in context.
