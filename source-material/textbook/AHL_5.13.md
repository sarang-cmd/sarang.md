# Limits and L'Hôpital's rule

> **AHL 5.13 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- evaluate limits $\displaystyle\lim_{x\to a}f(x)$ and $\displaystyle\lim_{x\to\infty}f(x)$ by substitution, factorisation, rationalisation and dividing by the highest power;
- use one-sided limits and explain when a two-sided limit exists;
- recognise the indeterminate forms $\dfrac00$ and $\dfrac\infty\infty$ and state why they need further work;
- apply L'Hôpital's rule correctly, including repeated applications, with the conditions checked at each step;
- convert products and other indeterminate forms such as $0\cdot\infty$ into quotients so that the rule applies;
- compare the growth rates of polynomials, exponentials and logarithms;
- find unknown constants so that a limit exists, and recognise when L'Hôpital's rule must not be used.

## Why this topic matters

Limits are the idea on which the whole of calculus rests. The derivative is a limit of difference quotients, the definite integral is a limit of sums, and an infinite series is a limit of partial sums. In AHL 5.12 you used limits to define the derivative. In this chapter you develop techniques for evaluating them directly, particularly when substitution gives a meaningless expression such as $\frac00$.

The expression $\frac{0}{0}$ does not mean the limit is zero, nor that it fails to exist: it means that the information is hidden. The function $\dfrac{\sin x}{x}$ equals $\frac00$ at $x=0$, yet the limit is $1$; the function $\dfrac{x^{2}}{x}$ does too, but its limit is $0$; and $\dfrac{x}{x^{3}}$ gives $\frac00$ yet the limit is infinite. L'Hôpital's rule resolves such cases by comparing the *rates* at which numerator and denominator approach zero or infinity, and those rates are their derivatives. This is where the chapter links back to differentiation: a technique for evaluating limits comes from the derivative itself. The results also describe long-term behaviour. For instance, $e^{x}$ grows faster than any power of $x$, so that $x^{n}e^{-x}\to0$, a fact used in probability, in the analysis of decay and in the convergence of series. Examination questions in this area are usually short and technical, so accuracy and clear justification earn the marks.

## Core ideas

### The meaning of a limit

We write $\displaystyle\lim_{x\to a}f(x)=L$ if $f(x)$ gets as close to $L$ as we please by taking $x$ close enough to $a$, but not equal to $a$. The value of $f$ at $a$ itself is irrelevant, and $f$ need not even be defined there. For $\dfrac{x^{2}-9}{x-3}$, the function is undefined at $x=3$, but for $x\neq3$ it equals $x+3$, so the limit as $x\to3$ is $6$.

### One-sided limits

The **left limit** $\displaystyle\lim_{x\to a^{-}}f(x)$ and the **right limit** $\displaystyle\lim_{x\to a^{+}}f(x)$ approach $a$ from one side. The two-sided limit exists if and only if both one-sided limits exist and are equal. For example, $\dfrac1x$ tends to $+\infty$ as $x\to0^{+}$ and to $-\infty$ as $x\to0^{-}$, so $\lim_{x\to0}\frac1x$ does not exist. And $\ln x\to-\infty$ as $x\to0^{+}$, where only the right limit makes sense.

### Algebraic methods

Before using calculus, try algebra.

- **Direct substitution:** if $f$ is continuous at $a$, the limit is $f(a)$.
- **Factorise and cancel:** for $\dfrac00$ with polynomials, factorise and cancel the common factor.
- **Rationalise:** for expressions with square roots, multiply by the conjugate, as in $\sqrt{x^{2}+x}-x=\dfrac{x}{\sqrt{x^{2}+x}+x}\to\dfrac12$ as $x\to\infty$.
- **Divide by the highest power** for limits at infinity of rational functions: $\displaystyle\lim_{x\to\infty}\frac{3x^{2}+2x}{5x^{2}-1}=\lim_{x\to\infty}\frac{3+2/x}{5-1/x^{2}}=\frac35$.

### Standard limits

$$\lim_{x\to0}\frac{\sin x}{x}=1,\qquad\lim_{x\to0}\frac{e^{x}-1}{x}=1,\qquad \lim_{x\to0}\frac{1-\cos x}{x^{2}}=\frac12,$$

$$\lim_{x\to\infty}\left(1+\frac1x\right)^{x}=e.$$

The first measures the slope of $\sin x$ at $0$; the second measures the slope of $e^{x}$ at $0$. They can be derived from the definition of the derivative, or from L'Hôpital's rule once the derivatives are known.

### Indeterminate forms

If direct substitution gives $\dfrac00$ or $\dfrac{\pm\infty}{\pm\infty}$, the form is **indeterminate**: the limit could be any value or not exist, depending on the functions. Other indeterminate forms are $0\cdot\infty$, $\infty-\infty$, $1^{\infty}$, $0^{0}$ and $\infty^{0}$. Forms like $\dfrac{1}{0}$ or $\dfrac{5}{\infty}$ are not indeterminate: the first tends to infinity (with the sign determined by the side) and the second to zero.

### L'Hôpital's rule

Suppose $f$ and $g$ are differentiable near $a$ and that $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}$ has the form $\dfrac00$ or $\dfrac\infty\infty$. Then

$$\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)},$$

provided the limit on the right exists (or is $\pm\infty$). The rule holds also as $x\to\infty$ and for one-sided limits. Note that we differentiate the numerator and the denominator **separately**; this is *not* the quotient rule. If the new quotient is still of indeterminate form, apply the rule again. A sketch of why it works for $\frac00$: near $a$, $f(x)\approx f'(a)(x-a)$ and $g(x)\approx g'(a)(x-a)$, so the ratio tends to $\dfrac{f'(a)}{g'(a)}$.

**Conditions.** Check at every step that the form really is $\frac00$ or $\frac\infty\infty$. Applying the rule to a determinate form gives wrong answers. For example, $\displaystyle\lim_{x\to0}\frac{\cos x}{x}$ is not indeterminate (the numerator tends to $1$) and the limit does not exist, whereas the false application would give $\dfrac{-\sin x}{1}\to0$.

### Other indeterminate forms

A product $f\cdot g$ of the form $0\cdot\infty$ is rewritten as a quotient, $\dfrac{f}{1/g}$ or $\dfrac{g}{1/f}$, to give $\frac00$ or $\frac\infty\infty$. For example, as $x\to0^{+}$,

$$x\ln x=\frac{\ln x}{1/x}\ \ (\tfrac{-\infty}{\infty}),\quad\text{and L'Hôpital gives}\quad\frac{1/x}{-1/x^{2}}=-x\to0.$$

For $1^{\infty}$ or $0^{0}$, take the logarithm: if $y=f^{g}$ then $\ln y=g\ln f$, which is a product, and finally exponentiate.

### Growth rates

Repeated application of the rule shows that for every positive integer $n$,

$$\lim_{x\to\infty}\frac{x^{n}}{e^{x}}=0,\qquad\lim_{x\to\infty}\frac{\ln x}{x^{n}}=0.$$

So the exponential grows faster than any polynomial, and any polynomial grows faster than the logarithm. These facts help to determine limits at infinity at a glance: the term with the fastest growth dominates.

### Limits and constants

Sometimes a limit is given and a parameter is unknown. For the limit of a quotient to be finite when the denominator tends to $0$, the numerator must also tend to $0$. This gives one condition on the constant, and L'Hôpital's rule then gives the value of the limit.

## Worked examples

### Example 1 (algebra, 4 marks)

Find $\displaystyle\lim_{x\to3}\frac{x^{2}-9}{x-3}$.

Direct substitution gives $\frac00$. Factorising, $\dfrac{x^{2}-9}{x-3}=\dfrac{(x-3)(x+3)}{x-3}=x+3$ for $x\ne3$, so the limit is $3+3=6$. L'Hôpital's rule would give the same: $\dfrac{2x}{1}\to6$.

### Example 2 (a standard limit, 4 marks)

Use L'Hôpital's rule to show that $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ and $\displaystyle\lim_{x\to0}\frac{e^{x}-1}{x}=1$.

Both limits have the form $\frac00$. For the first, $\dfrac{\cos x}{1}\to\cos0=1$. For the second, $\dfrac{e^{x}}{1}\to1$. (There is a circularity worth noticing: the derivative of $\sin x$ was proved using the first limit, so in a proof of that derivative this method cannot be used. It is valid here because the derivatives are already known.)

### Example 3 (repeated application, 5 marks)

Find $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^{2}}$.

The form is $\frac00$. Differentiating the numerator and the denominator gives $\dfrac{\sin x}{2x}$, still $\frac00$, so we differentiate again: $\dfrac{\cos x}{2}\to\dfrac12$. The limit is $\dfrac12$. We checked at each step that the form was indeterminate before using the rule.

### Example 4 (limit at infinity, 4 marks)

Find $\displaystyle\lim_{x\to\infty}\frac{3x^{2}+2x}{5x^{2}-1}$.

Dividing the numerator and the denominator by $x^{2}$ gives $\dfrac{3+2/x}{5-1/x^{2}}\to\dfrac35$. Alternatively, the form is $\frac\infty\infty$ and L'Hôpital's rule gives $\dfrac{6x+2}{10x}$, still $\frac\infty\infty$, and again $\dfrac{6}{10}=\dfrac35$. The algebraic method is shorter, and it is the one to use for rational functions.

### Example 5 (growth rates, 6 marks)

Find $\displaystyle\lim_{x\to\infty}x^{2}e^{-x}$.

Write the product as $\dfrac{x^{2}}{e^{x}}$, which has the form $\frac\infty\infty$. Differentiating, $\dfrac{2x}{e^{x}}$ is still $\frac\infty\infty$, and again, $\dfrac{2}{e^{x}}\to0$. So $\displaystyle\lim_{x\to\infty}x^{2}e^{-x}=0$. This illustrates that the exponential dominates any power.

### Example 6 (a $0\cdot\infty$ form, 5 marks)

Find $\displaystyle\lim_{x\to0^{+}}x\ln x$.

As $x\to0^{+}$, $x\to0$ and $\ln x\to-\infty$, so the form is $0\cdot\infty$. Rewrite as $\dfrac{\ln x}{1/x}$, which has the form $\dfrac{-\infty}{\infty}$. By L'Hôpital's rule, the limit equals $\displaystyle\lim_{x\to0^{+}}\frac{1/x}{-1/x^{2}}=\lim_{x\to0^{+}}(-x)=0$. Had we written the product as $\dfrac{x}{1/\ln x}$ we would have made the problem harder, so the choice of which factor to put in the denominator matters.

### Example 7 (two applications with a quadratic, 5 marks)

Find $\displaystyle\lim_{x\to0}\frac{e^{x}-1-x}{x^{2}}$.

At $x=0$ the form is $\frac00$. Differentiating gives $\dfrac{e^{x}-1}{2x}$, which is again $\frac00$. Applying the rule once more, $\dfrac{e^{x}}{2}\to\dfrac12$. This agrees with the series $e^{x}=1+x+\tfrac{x^{2}}{2}+\cdots$, which we meet in AHL 5.19.

### Example 8 (a limit at a non-zero point, 4 marks)

Find $\displaystyle\lim_{x\to1}\frac{\ln x}{x-1}$.

The form is $\frac00$. Differentiating gives $\dfrac{1/x}{1}\to1$. This limit is the derivative of $\ln x$ at $x=1$, which is $\dfrac11=1$, as expected from the definition $f'(1)=\lim_{x\to1}\dfrac{f(x)-f(1)}{x-1}$.

### Example 9 (two trigonometric functions, 5 marks)

Find $\displaystyle\lim_{x\to0}\frac{\sin3x}{\tan2x}$.

The form is $\frac00$. The derivative of the numerator is $3\cos3x$ and of the denominator is $\dfrac{2}{\cos^{2}2x}$, so the quotient becomes $\dfrac{3\cos3x\cos^{2}2x}{2}\to\dfrac32$. The result also agrees with the approximation $\sin3x\approx3x$ and $\tan2x\approx2x$ for small $x$.

### Example 10 (three applications, 6 marks)

Find $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^{3}}$.

The form is $\frac00$. First application: $\dfrac{1-\cos x}{3x^{2}}$, still $\frac00$. Second: $\dfrac{\sin x}{6x}$, still $\frac00$. Third: $\dfrac{\cos x}{6}\to\dfrac16$. The limit is $\dfrac16$. Notice that the rule can be applied as many times as needed, but only while the form remains indeterminate. If we applied it after $\frac{\cos x}{6}$ we would be wrong.

### Example 11 (finding a constant, 6 marks)

Find the value of $a$ for which $\displaystyle\lim_{x\to0}\frac{e^{2x}-1-ax}{x^{2}}$ exists, and find the limit.

As $x\to0$ the denominator tends to $0$, so the numerator must tend to $0$ for a finite limit, and the numerator is $1-1-0=0$ for every $a$. Differentiating, $\dfrac{2e^{2x}-a}{2x}$. The denominator again tends to $0$, so for a finite limit the numerator must tend to $0$: $2-a=0$, so $a=2$. Then the limit is, by a second application, $\dfrac{4e^{2x}}{2}\to2$. For $a\neq2$, the quotient $\dfrac{2-a}{2x}$ behaves like $\dfrac{c}{x}$ and the limit does not exist.

### Example 12 (misuse of the rule, 4 marks)

Explain why L'Hôpital's rule cannot be used to evaluate $\displaystyle\lim_{x\to0^{+}}\frac{\cos x}{x}$, and find the limit.

As $x\to0^{+}$ the numerator tends to $\cos0=1$ and the denominator to $0^{+}$, so the form is $\dfrac{1}{0^{+}}$, which is not indeterminate. Applying the rule would give $\dfrac{-\sin x}{1}\to0$, a wrong answer. The correct conclusion is that $\dfrac{\cos x}{x}\to+\infty$ as $x\to0^{+}$, and so the limit does not exist as a finite number (it tends to $-\infty$ from the left).

## Using your GDC

A table of values near the point or a graph helps to estimate a limit before proving it. Enter the function, set the table to start at $x=0.1$ and step by $0.01$ toward the point (or use values such as $10^{-1},10^{-2},10^{-3},\ldots$), and see whether the outputs settle. For limits at infinity, use large values or inspect a graph with a wide window for a horizontal asymptote. Be aware that a calculator working to finite precision can fail close to a $\frac00$ point, because subtracting nearly equal numbers loses accuracy, so a table that suddenly shows $0$ for $x=10^{-9}$ is not evidence that the limit is zero. The calculator gives evidence; the proof is the analytic argument, and a limit question will normally require the algebraic or L'Hôpital working to be shown.

## Common mistakes

- Treating $\frac00$ as $0$ or as $1$, or treating $\frac\infty\infty$ as $1$.
- Using the quotient rule instead of differentiating the numerator and the denominator separately.
- Applying L'Hôpital's rule to a form that is not indeterminate, as in Example 12.
- Continuing to apply the rule after the form has become determinate.
- Forgetting to rewrite a product $0\cdot\infty$ as a quotient first.
- Ignoring the sign and the side when a limit tends to infinity, and so declaring a two-sided limit to be $\infty$.
- Cancelling terms incorrectly in algebraic limits, for instance cancelling $x$ in $\dfrac{x+2}{x}$.
- Believing that the value $f(a)$ must exist, or that the limit equals $f(a)$ for any function: this holds only for continuous functions.

## Exam technique and command terms

**Find the limit** and **evaluate** require the value or a statement that it does not exist. **Show that** the limit equals a given value requires the full working to be seen: write the form ($\frac00$), apply the rule, and write the new quotient. **Use L'Hôpital's rule** means the method is prescribed, so state that you have checked the form. When the question allows any method, an algebraic simplification is usually faster and less risky. Write $\displaystyle\lim_{x\to a}$ on every line until the limit is evaluated, and never write "$=\frac00$" as a result. For limits with unknown constants, give the condition that makes the numerator vanish and explain why it is needed. If the limit tends to infinity, say so with the sign, for example "$\to+\infty$".

## Connections

This chapter extends the limit definition of the derivative in AHL 5.12, which is itself a $\frac00$ limit, and L'Hôpital's rule is derived from the differentiation rules of SL 5.3 and 5.6. The growth rates of exponentials and logarithms explain the behaviour of the functions of Unit 2, such as horizontal asymptotes of rational functions and exponential decay. In AHL 5.19, Maclaurin series give a second way to evaluate the limits of this chapter, by replacing the functions with polynomials, and the limit of a ratio of series terms determines convergence. The limit $\left(1+\frac1x\right)^{x}\to e$ relates to compound interest in Unit 1, and in Unit 4 the tails of distributions rely on $x^{n}e^{-x}\to0$.

## Check your understanding

1. Find $\displaystyle\lim_{x\to2}\frac{x^{2}-4}{x-2}$.
2. Find $\displaystyle\lim_{x\to0}\frac{e^{x}-1}{x}$.
3. Find $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^{2}}$.
4. Find $\displaystyle\lim_{x\to\infty}\frac{3x^{2}+2x}{5x^{2}-1}$.
5. Find $\displaystyle\lim_{x\to\infty}x^{2}e^{-x}$.
6. Find $\displaystyle\lim_{x\to1}\frac{\ln x}{x-1}$.
7. Find $\displaystyle\lim_{x\to0}\frac{\sin3x}{\tan2x}$.
8. Find $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^{3}}$.
9. Find $\displaystyle\lim_{x\to0^{+}}x\ln x$.
10. Find $a$ so that $\displaystyle\lim_{x\to0}\frac{e^{2x}-1-ax}{x^{2}}$ exists, and the value of the limit.

### Answers

1. $\dfrac{(x-2)(x+2)}{x-2}=x+2\to4$.
2. $\dfrac{e^{x}}{1}\to1$.
3. $\dfrac{\sin x}{2x}\to\dfrac{\cos x}{2}\to\dfrac12$.
4. Divide by $x^{2}$: $\dfrac{3+2/x}{5-1/x^{2}}\to\dfrac35$.
5. $\dfrac{x^{2}}{e^{x}}\to\dfrac{2x}{e^{x}}\to\dfrac{2}{e^{x}}\to0$.
6. $\dfrac{1/x}{1}\to1$.
7. $\dfrac{3\cos3x}{2/\cos^{2}2x}\to\dfrac32$.
8. Three applications give $\dfrac{\cos x}{6}\to\dfrac16$.
9. $\dfrac{\ln x}{1/x}\to\dfrac{1/x}{-1/x^{2}}=-x\to0$.
10. $a=2$ and the limit is $2$.

## Summary

- A limit describes the value that $f(x)$ approaches; a two-sided limit exists only if both one-sided limits agree.
- Try algebra first: substitute, factorise, rationalise, or divide by the highest power.
- L'Hôpital's rule: for $\frac00$ or $\frac\infty\infty$, $\lim\frac fg=\lim\frac{f'}{g'}$. Differentiate top and bottom separately and check the form every time, repeating if needed.
- Rewrite $0\cdot\infty$ as a quotient, and use logarithms for $1^{\infty}$ and $0^{0}$.
- Exponentials beat powers and powers beat logarithms: $x^{n}e^{-x}\to0$ and $\frac{\ln x}{x^{n}}\to0$.
- If a limit is $\frac{c}{0}$ with $c\neq0$, the rule does not apply: the limit is infinite or does not exist.
