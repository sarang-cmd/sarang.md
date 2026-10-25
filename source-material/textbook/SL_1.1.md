# Using standard form

> **SL 1.1 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- write any real number in standard form $a\times10^{k}$ with $1\le a<10$ and $k\in\mathbb{Z}$, and convert back to an ordinary decimal;
- multiply, divide, add, subtract, square and take roots of numbers in standard form without a calculator, and explain each step with the laws of exponents;
- choose sensible units and prefixes, and convert between them using powers of ten;
- distinguish decimal places from significant figures, round correctly, and report an answer to the accuracy a question asks for;
- calculate a percentage error and understand why the unrounded value must be carried through a calculation;
- use the scientific mode of your graphic display calculator (GDC) and read its output safely, including the letter E.

## Why this topic matters

Standard form looks like the gentlest topic in the syllabus, and that is exactly why marks leak here. It appears in almost every paper because the physics, chemistry and economics contexts that the IB likes to borrow contain very large and very small quantities: the mass of an atom, the distance to a star, a national debt. Questions are rarely hard in an algebraic sense. They are hard in a *discipline* sense: you must state the final answer in the requested form, round only at the end, keep track of the exponent, and never write something like $0.45\times10^{3}$ and call it standard form. A student aiming for a 7 treats this topic as a source of guaranteed marks and trains it until it is automatic.

## Core ideas

### What standard form is

A number is in **standard form** (also called scientific notation) when it is written as

$$
a\times10^{k},\qquad 1\le a<10,\quad k\in\mathbb{Z}.
$$

The number $a$ is called the **mantissa** (or coefficient) and $k$ is the **exponent**. Both conditions matter. The mantissa must be at least $1$ and strictly less than $10$, so $10\times10^{3}$ is not standard form and neither is $0.5\times10^{4}$. The exponent must be an integer, positive for large numbers and negative for numbers smaller than $1$.

Why does this work? Each power of ten moves the decimal point one place. Multiplying by $10^{3}$ moves it three places right, and multiplying by $10^{-3}$ means dividing by $1000$, which moves it three places left. To convert, you move the decimal point until exactly one non-zero digit sits to its left, and the number of places you moved gives $|k|$. If you moved the point left to reach that position, the original number was large and $k$ is positive. If you moved it right, the original number was small and $k$ is negative.

For example, $52\,300\,000$ becomes $5.23\times10^{7}$ because the point moved seven places left. The number $0.000\,047\,2$ becomes $4.72\times10^{-5}$ because the point moved five places right. A useful sanity check is to ask whether the sign of the exponent matches the size of the number: a tiny number can never have a positive exponent.

Numbers between $1$ and $10$ simply have $k=0$, since $10^{0}=1$. So $6.4$ is $6.4\times10^{0}$, although nobody writes it that way unless asked.

### The laws of exponents that do all the work

Everything in this chapter follows from three laws that you will meet again in SL 1.7. For $m,n\in\mathbb{Z}$ and $b\neq0$:

$$
10^{m}\times10^{n}=10^{m+n},\qquad \frac{10^{m}}{10^{n}}=10^{m-n},\qquad \left(10^{m}\right)^{n}=10^{mn}.
$$

These are not arbitrary rules. The first says that multiplying $m$ tens by $n$ tens gives $m+n$ tens. The second is the first read backwards with a negative exponent, which is why $10^{-n}=1/10^{n}$ is the only definition that keeps the pattern consistent. The third counts $n$ copies of $m$ tens.

### Multiplication and division

To multiply $(a\times10^{m})(c\times10^{n})$, regroup the numbers and the powers of ten:

$$
(a\times10^{m})(c\times10^{n})=(ac)\times10^{m+n}.
$$

The product $ac$ may fall outside $[1,10)$, so you often need a final **renormalising** step. If $ac=36$ you write $36\times10^{m+n}=3.6\times10^{m+n+1}$. Notice the exponent goes *up* by one because the mantissa went *down* by a factor of ten. The rule is that mantissa and exponent move in opposite directions so the value never changes.

Division works the same way:

$$
\frac{a\times10^{m}}{c\times10^{n}}=\frac{a}{c}\times10^{m-n}.
$$

Here $a/c$ can fall below $1$, for example $2/5=0.4$. Then you write $0.4\times10^{m-n}=4\times10^{m-n-1}$, and the exponent goes down by one.

### Addition and subtraction

Addition is different, and this is where many marks are lost. You cannot add exponents. Instead, you must first express both numbers with the **same power of ten**, then add the mantissas:

$$
a\times10^{m}+c\times10^{n}=\left(a+c\times10^{n-m}\right)\times10^{m}.
$$

It is usually easiest to rewrite the smaller number so that its exponent matches the larger one. For instance $4.5\times10^{6}+3.2\times10^{5}$ becomes $4.5\times10^{6}+0.32\times10^{6}=4.82\times10^{6}$. The reason is simply the distributive law: $10^{6}$ is a common factor.

### Powers and roots

For a power, apply the third law of exponents to the power of ten and the power rule to the mantissa:

$$
\left(a\times10^{m}\right)^{p}=a^{p}\times10^{mp}.
$$

A square root needs the exponent to be even so that it halves cleanly. To find $\sqrt{2.5\times10^{7}}$, rewrite as $25\times10^{6}$, so the root is $5\times10^{3}$. If the exponent is odd, shift one factor of ten into the mantissa first.

### Significant figures and decimal places

**Decimal places** count digits after the decimal point. **Significant figures** (s.f.) count digits starting from the first non-zero digit. The number $0.004\,07$ has three significant figures, namely $4$, $0$ and $7$, because the zero between non-zero digits is significant, while the leading zeros only locate the decimal point. Standard form makes significant figures obvious: every digit in the mantissa is significant. That is one more reason to prefer it.

Rounding follows one rule. Look at the first digit you are discarding. If it is $5$ or more, round the last kept digit up. Otherwise leave it. Trailing zeros after the decimal point in a final answer should be kept, since $3.20$ claims three significant figures and $3.2$ claims two.

The default IB expectation, unless a question says otherwise, is that final answers are exact or correct to three significant figures. You should never round intermediate values. Store them in the calculator memory or use the previous-answer key. Early rounding is the single most common reason for an answer that is close but wrong in the third significant figure.

### Units, prefixes and conversion

Standard form pairs naturally with SI prefixes. One kilometre is $10^{3}$ m, one millimetre is $10^{-3}$ m, one micrometre is $10^{-6}$ m and one nanometre is $10^{-9}$ m. Converting units is multiplication by a power of ten. Areas and volumes need extra care: since $1\text{ km}=10^{3}\text{ m}$, we have $1\text{ km}^{2}=\left(10^{3}\right)^{2}\text{ m}^{2}=10^{6}\text{ m}^{2}$, and $1\text{ km}^{3}=10^{9}\text{ m}^{3}$.

### Percentage error

If $v_{A}$ is an approximate value and $v_{E}$ is the exact value, the **percentage error** is

$$
\varepsilon=\left|\frac{v_{A}-v_{E}}{v_{E}}\right|\times100\%.
$$

The denominator is the *exact* value, and the absolute value bars mean the error is reported as a positive percentage. Using the approximate value in the denominator is a very common slip.

## Worked examples

### Example 1 (conversion, 2 marks)

Write $0.000\,306\times10^{-2}$ in standard form.

*Solution.* The mantissa $0.000\,306$ is not in $[1,10)$. Move the point four places right: $0.000\,306=3.06\times10^{-4}$. Then combine exponents: $3.06\times10^{-4}\times10^{-2}=3.06\times10^{-6}$.

The first mark is for the correct mantissa $3.06$, the second for the correct exponent $-6$. Notice the sign check: the starting number is far below $1$, so a negative exponent is expected.

### Example 2 (multiplication and division, 3 marks)

Without a calculator, evaluate $\dfrac{(6.4\times10^{7})(2.5\times10^{-3})}{1.6\times10^{-2}}$ and give the answer in standard form.

*Solution.* Handle mantissas and powers of ten separately. Mantissas: $\dfrac{6.4\times2.5}{1.6}=\dfrac{16}{1.6}=10$. Powers: $10^{7}\times10^{-3}\div10^{-2}=10^{7-3+2}=10^{6}$. So the value is $10\times10^{6}$, which is not yet standard. Renormalise: $1\times10^{7}$.

A common mistake here is to stop at $10\times10^{6}$. The final mark is for the renormalised $1\times10^{7}$.

### Example 3 (addition, 3 marks)

Calculate $4.5\times10^{6}-3.2\times10^{5}$ and give the exact answer in standard form.

*Solution.* Match exponents: $3.2\times10^{5}=0.32\times10^{6}$. Then $4.5\times10^{6}-0.32\times10^{6}=4.18\times10^{6}$.

If you had subtracted the mantissas and exponents separately you would have obtained $1.3\times10^{1}$, which is nonsense: a number near four million minus a number near three hundred thousand cannot be about thirteen. Estimating the size of the answer first is a free safeguard.

### Example 4 (powers and roots, 4 marks)

(a) Simplify $\left(4\times10^{-3}\right)^{2}$. (b) Find $\sqrt{2.5\times10^{7}}$. Give both answers in standard form.

*Solution.* (a) Square the mantissa and double the exponent: $16\times10^{-6}$. Renormalise: $1.6\times10^{-5}$.

(b) The exponent $7$ is odd, so write $2.5\times10^{7}=25\times10^{6}$. Then $\sqrt{25\times10^{6}}=5\times10^{3}$.

### Example 5 (context: the Sun, 5 marks)

Light travels at $3.00\times10^{8}\text{ m s}^{-1}$. The mean distance from the Earth to the Sun is $1.496\times10^{11}\text{ m}$.

(a) Find the time, in seconds, for sunlight to reach the Earth. Give your answer in the form $a\times10^{k}$, correct to three significant figures.

(b) Convert your answer to minutes, correct to three significant figures.

*Solution.* (a) Time equals distance divided by speed:

$$
t=\frac{1.496\times10^{11}}{3.00\times10^{8}}=\frac{1.496}{3.00}\times10^{3}=0.498\,666\ldots\times10^{3}=4.98\,666\ldots\times10^{2}.
$$

So $t\approx4.99\times10^{2}$ s. Notice that the intermediate quotient $0.4987\ldots$ is below $1$, so we shifted the decimal and lowered the exponent by one.

(b) Divide the *unrounded* value by $60$: $498.666\ldots/60=8.3111\ldots$, so about $8.31$ minutes. If you had divided the rounded $499$ you would get $8.3166\ldots\approx8.32$, which differs in the last digit. This is the cost of early rounding.

### Example 6 (percentage error, 4 marks)

A student uses $9.5\times10^{15}$ m for the length of a light year. The exact figure is $9.4608\times10^{15}$ m, to five significant figures. Find the percentage error.

*Solution.* Substitute into the formula:

$$
\varepsilon=\left|\frac{9.5\times10^{15}-9.4608\times10^{15}}{9.4608\times10^{15}}\right|\times100\%=\frac{0.0392}{9.4608}\times100\%\approx0.414\%.
$$

The powers of ten cancel, which is why you should factor them out before using the calculator. Give the answer to three significant figures: $0.414\%$.

### Example 7 (an equation with an unknown exponent, 4 marks)

Find the integer $k$ such that $\dfrac{3.6\times10^{5}}{9\times10^{k}}=4\times10^{-2}$.

*Solution.* Divide the mantissas: $3.6/9=0.4$. So the left side is $0.4\times10^{5-k}=4\times10^{4-k}$. Equate with the right side: $4\times10^{4-k}=4\times10^{-2}$, hence $4-k=-2$ and $k=6$. Check: $3.6\times10^{5}/(9\times10^{6})=0.04$ and $4\times10^{-2}=0.04$. The check takes ten seconds and confirms the answer.

## Using your GDC

Your calculator can display numbers in scientific mode. On most models you open the setup or mode menu and choose *Sci* instead of *Norm* for the number display (the exact menu names vary between models and software versions, so find yours before the exam, not during it). In scientific mode, an answer such as $4.98667\times10^{2}$ appears as `4.98667E2`.

Two rules protect you. First, the letter `E` means "times ten to the power", so `4.98667E2` is $4.98667\times10^{2}$, not $4.98667$ to the power of anything. Never copy `E` into your written answer. Write out $\times10^{2}$ in full. Second, to *enter* a number in standard form, use the dedicated exponent key (labelled `EE`, `EXP` or similar) rather than typing `×10^`. Typing the product with brackets works as well, but forgetting brackets around a denominator is a classic error. For $\dfrac{1.496\times10^{11}}{3.00\times10^{8}}$ you must enter the denominator as a single quantity, either with the exponent key or inside brackets, otherwise the calculator divides by $3.00$ and then multiplies by $10^{8}$.

Check the display mode before you start. If your calculator was left in scientific mode from the previous question, an answer of `0.5` might appear as `5E-1`, and the reverse can happen too. Reading the mode correctly is part of the skill.

## Common mistakes

1. **Stopping before renormalising.** Writing $36\times10^{7}$ or $0.4\times10^{-2}$ and calling it standard form. Always check $1\le a<10$ at the very end.
2. **Adding exponents when adding numbers.** Exponents add only in multiplication. For addition, match the exponents and then add mantissas.
3. **Getting the sign of the exponent wrong.** Check the size of the answer: large number, positive exponent; small number, negative exponent.
4. **Rounding early.** Keep full calculator precision until the last line, then round once.
5. **Dropping meaningful zeros.** If three significant figures are requested and the answer is $2.5$, write $2.50$.
6. **Mixing up units of area and volume.** One square kilometre is $10^{6}$ square metres, not $10^{3}$.
7. **Using the wrong denominator in percentage error.** The denominator is the exact value.
8. **Copying calculator notation.** Writing `1.2E5` in a solution instead of $1.2\times10^{5}$ can cost the final mark.

## Exam technique and command terms

In IB papers the command term **write down** means no working is needed, so a conversion into standard form is often asked this way for one mark. **Calculate** and **find** expect a numerical answer with some working, and for a method mark you should show the substitution before the number. **Give your answer in the form $a\times10^{k}$ where $1\le a<10$ and $k\in\mathbb{Z}$** is a specific instruction. The marks for the answer are tied to the form as well as the value, so a correct number in the wrong form can lose the final accuracy mark.

Strategy points: read the required accuracy before you start; do the powers of ten by hand and use the calculator only for the mantissas; write the unrounded value, then the rounded one; and always attach units when the question supplies them. When a question mixes units, for instance a speed in kilometres per hour and a time in seconds, convert everything to a consistent system *first* and write the conversion down, because a clean conversion earns a method mark even if you later slip.

In Paper 1, where no calculator is allowed, expect numbers chosen so that mantissas divide neatly, as in Example 2. If you reach an ugly division, you have probably made an error. In Paper 2 the numbers are realistic, and you should lean on the calculator and focus on presentation.

## Connections

Standard form is the first place where you meet exponent laws, which return in SL 1.7 with logarithms. Orders of magnitude lead into logarithmic scales and the decibel and Richter ideas that appear in exponential modelling. In SL 1.2 and 1.3, sequences with huge terms, such as repeated doubling, produce results that are best reported in standard form. In SL 1.4, compound interest and depreciation calculations should be rounded at the end, which is the same discipline as here. Later, in statistics, very small probabilities and in calculus, limits involving tiny quantities such as $10^{-6}$ use the same notation. Percentage error returns whenever you are asked to judge how good an approximation is, for example a linear approximation of a curve.

## Check your understanding

1. Write each number in standard form: (a) $53\,000\,000$; (b) $0.003\,06$; (c) $420\times10^{5}$; (d) $0.0071\times10^{-2}$.
2. Evaluate $(2.4\times10^{6})(3\times10^{-2})$ and give the answer in standard form.
3. Evaluate $\dfrac{9\times10^{-4}}{3\times10^{-9}}$.
4. Calculate $6.5\times10^{8}-2.1\times10^{7}$ in standard form.
5. Simplify $\left(2\times10^{3}\right)^{4}$.
6. Light takes $1.28$ s to travel from the Moon to the Earth at $3.00\times10^{8}\text{ m s}^{-1}$. Find the distance in metres, in standard form.
7. The mass of the Earth is $5.97\times10^{24}$ kg and the mass of the Moon is $7.35\times10^{22}$ kg. (a) Find the ratio of the Earth's mass to the Moon's mass to three significant figures. (b) Express the Moon's mass as a percentage of the Earth's, to three significant figures.
8. A sheet of paper has thickness $1.0\times10^{-4}$ m. How many sheets make a stack $2.5$ m high? Give your answer in standard form.
9. Find the integer $k$ such that $\dfrac{3.6\times10^{5}}{9\times10^{k}}=4\times10^{-2}$.
10. A student estimates $\sqrt{6.5\times10^{9}}$ as $8\times10^{4}$. Find the value of the square root to three significant figures, and then the percentage error of the student's estimate, using the unrounded value of the root, to three significant figures.

### Answers

1. (a) $5.3\times10^{7}$; (b) $3.06\times10^{-3}$; (c) $4.2\times10^{7}$; (d) $7.1\times10^{-5}$.
2. $7.2\times10^{4}$.
3. $3\times10^{5}$.
4. $6.29\times10^{8}$.
5. $16\times10^{12}=1.6\times10^{13}$.
6. $3.84\times10^{8}$ m.
7. (a) $81.2$; (b) $1.23\%$.
8. $2.5\times10^{4}$ sheets.
9. $k=6$.
10. $\sqrt{6.5\times10^{9}}=\sqrt{65\times10^{8}}=\sqrt{65}\times10^{4}\approx8.06\times10^{4}$. The percentage error is $\dfrac{|8\times10^{4}-8.0623\times10^{4}|}{8.0623\times10^{4}}\times100\%\approx0.772\%$.

## Summary

- Standard form is $a\times10^{k}$ with $1\le a<10$ and $k\in\mathbb{Z}$. Always check both conditions in the last line.
- Multiply and divide mantissas and powers of ten separately, then renormalise.
- To add or subtract, make the exponents equal first.
- Round only once, at the end, and keep trailing zeros that show the requested significant figures.
- Percentage error uses the exact value in the denominator.
- Read `E` on the calculator as "times ten to the power", and write it out in full.
- Estimate the size of every answer before you trust it.
