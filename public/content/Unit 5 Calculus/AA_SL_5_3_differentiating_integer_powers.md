# Differentiating integer powers

> **SL 5.3 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- differentiate $f(x)=ax^{n}$ for any integer $n$, positive, zero or negative, using $f'(x)=anx^{n-1}$;
- differentiate sums and differences of terms term by term, and use constant multiples;
- rewrite expressions with brackets, fractions and reciprocals as sums of powers of $x$ before differentiating;
- evaluate a derivative at a given point, and find the point or points where the gradient has a given value;
- find the stationary points of a polynomial or a Laurent-type expression such as $x^{2}+\tfrac{16}{x}$;
- find unknown constants in a function from information about its value and its derivative;
- write derivatives in correct notation, and avoid the typical errors with negative and fractional coefficients.

## Why this topic matters

The limit definition of the derivative from SL 5.1 is a beautiful idea, but it is far too slow for everyday work. Nobody wants to evaluate a limit every time they need a gradient. The great practical achievement of calculus is that a handful of rules turn differentiation into algebra. The first and most important rule is the power rule, which tells you the derivative of $x^{n}$ in one line. With the rules for multiples and sums, it lets you differentiate every polynomial, and every expression that can be rewritten as a sum of powers, including functions such as $\tfrac{3}{x^{2}}$ and $\tfrac{x^{3}+2}{x}$.

In the examination, this skill is not examined in isolation but is used inside almost every calculus question. Candidates differentiate a function in order to find a gradient, a stationary point, a tangent, a rate of change or a velocity, so a slip in the derivative costs marks all the way down the question. The most common source of error is not the power rule itself but the preparation: failing to rewrite $\tfrac{1}{2x^{2}}$ as $\tfrac12x^{-2}$, forgetting that the derivative of a constant is zero, or expanding brackets incorrectly. This chapter therefore spends time on the *rewriting* step as well as on the rule. When the algebra is done well, the differentiation takes a few seconds, and you can check it with a calculator.

## Core ideas

### The power rule

For any integer $n$ (and in fact any real number, as you will see later), if $f(x)=x^{n}$ then
$$
f'(x)=nx^{n-1}.
$$
In words: bring the power down as a multiplier, and reduce the power by one. For example, $\tfrac{d}{dx}(x^{5})=5x^{4}$, $\tfrac{d}{dx}(x)=1$, and $\tfrac{d}{dx}(x^{-2})=-2x^{-3}$. For a constant, $f(x)=c=cx^{0}$ so the derivative is zero, since a constant function has a horizontal graph. This rule can be proved from the definition of the derivative as a limit for positive integers by expanding $(x+h)^{n}$ with the binomial theorem, and the proof for negative integers follows from the quotient rule. It is in the formula booklet in the form $f(x)=ax^{n}\Rightarrow f'(x)=anx^{n-1}$.

### Constant multiples and sums

Differentiation respects addition and multiplication by constants:
$$
\frac{d}{dx}\big(af(x)\big)=a\,f'(x),\qquad \frac{d}{dx}\big(f(x)\pm g(x)\big)=f'(x)\pm g'(x).
$$
So for a polynomial, we differentiate each term separately. For $f(x)=3x^{4}-5x^{2}+7x-2$, the derivative is $f'(x)=12x^{3}-10x+7$, since the constant $-2$ contributes zero.

### Rewriting before differentiating

The rules above apply to terms of the form $ax^{n}$. Many expressions can be put into this form with algebra:

- **reciprocals**: $\dfrac{1}{x^{n}}=x^{-n}$, so $\dfrac{3}{x^{2}}=3x^{-2}$;
- **fractions with a constant denominator**: $\dfrac{1}{2x^{2}}=\tfrac12x^{-2}$, where the $2$ stays in the coefficient and is not part of the power;
- **brackets**: expand products such as $(2x+3)(x-1)=2x^{2}+x-3$ and squares such as $(x+2)^{2}$;
- **division by a single term**: $\dfrac{x^{3}-2x}{x^{2}}=x-\dfrac{2}{x}=x-2x^{-1}$.

After rewriting, differentiate term by term, and if you wish, write the answer back with positive powers, as in $-2x^{-3}=-\dfrac{2}{x^{3}}$. The quotient rule and chain rule of SL 5.6 handle expressions that cannot be simplified this way, but it is often quicker, and less error-prone, to simplify first when you can. Square roots can be written as powers $x^{1/2}$, and the power rule continues to work, though in this chapter we concentrate on integer powers.

### Evaluating and using derivatives

The value of the derivative at $x=a$, written $f'(a)$, is the gradient of the curve at that point. To find where the gradient equals a number $m$, solve $f'(x)=m$. To find stationary points solve $f'(x)=0$, as in SL 5.2. For a curve $y=f(x)$, the notation $\left.\dfrac{dy}{dx}\right|_{x=a}$ means the same as $f'(a)$.

### Unknown constants

If a function contains unknown constants, information about the function and its derivative gives equations. For example, if $f(x)=ax^{2}+bx$ and you are told that $f(1)=4$ and $f'(1)=5$, then $a+b=4$ and $2a+b=5$. Differentiate first, then substitute the numbers, and solve the equations simultaneously. Check the result by substituting back.

### Notation and presentation

Always show the line in which you rewrite the function, then the derivative. Use $\dfrac{dy}{dx}$ if the function is called $y$, and $f'(x)$ if it is called $f$. If the question uses other letters, such as $s(t)$ or $V(r)$, differentiate with respect to the variable of the function. A derivative is itself a function, so it can be simplified, factorised, or set equal to zero.

## Worked examples

### Example 1 (a polynomial, 3 marks)

Differentiate $f(x)=3x^{4}-5x^{2}+7x-2$.

Term by term: $\tfrac{d}{dx}(3x^{4})=12x^{3}$, $\tfrac{d}{dx}(-5x^{2})=-10x$, $\tfrac{d}{dx}(7x)=7$ and $\tfrac{d}{dx}(-2)=0$. So $f'(x)=12x^{3}-10x+7$. The marks are for each correct power, with a mark lost if the constant term is not dropped. A quick check is to set $x=1$: the original gives $3-5+7-2=3$ and the derivative gives $12-10+7=9$, though this checks only that you did not drop a term, since the values are different quantities.

### Example 2 (negative powers, 4 marks)

Differentiate $f(x)=\dfrac{2}{x^{3}}-\dfrac{5}{x}+x^{2}$ and find $f'(1)$.

Rewrite as $f(x)=2x^{-3}-5x^{-1}+x^{2}$. Then $f'(x)=2(-3)x^{-4}-5(-1)x^{-2}+2x=-6x^{-4}+5x^{-2}+2x$, which can be written $-\dfrac{6}{x^{4}}+\dfrac{5}{x^{2}}+2x$. At $x=1$, $f'(1)=-6+5+2=1$. Notice that the derivative of $-5x^{-1}$ is $+5x^{-2}$, with a sign change from two negatives, which is a common place to slip.

### Example 3 (expanding first, 4 marks)

Differentiate (a) $f(x)=(2x+3)(x-1)$ and (b) $g(x)=\dfrac{(x+2)^{2}}{x}$.

(a) Expand: $f(x)=2x^{2}-2x+3x-3=2x^{2}+x-3$, so $f'(x)=4x+1$. (b) Expand the numerator: $(x+2)^{2}=x^{2}+4x+4$, and divide each term by $x$: $g(x)=x+4+\dfrac{4}{x}=x+4+4x^{-1}$. Then $g'(x)=1-4x^{-2}=1-\dfrac{4}{x^{2}}$. The derivative of the product is not the product of the derivatives, so do not differentiate $(2x+3)$ and $(x-1)$ separately and multiply, which would give $2\times1=2$, a wrong answer. We will have the product rule in SL 5.6, but for polynomials, expanding is a fine method.

### Example 4 (gradient at a point, 5 marks)

For $y=x^{3}-4x+1$, find the gradient at $x=2$ and the values of $x$ at which the gradient is $-1$.

The derivative is $\dfrac{dy}{dx}=3x^{2}-4$. At $x=2$ the gradient is $3(4)-4=8$. For the gradient to be $-1$ we need $3x^{2}-4=-1$, so $3x^{2}=3$ and $x=\pm1$. The corresponding points on the curve are $(1,-2)$ and $(-1,4)$. Check with a graph: at $x=1$ the curve is falling slowly, which agrees with a gradient of $-1$.

### Example 5 (stationary point of a quadratic, 3 marks)

Find the coordinates of the point on $y=x^{2}-6x+5$ where the gradient is zero.

The derivative is $2x-6$, which equals zero when $x=3$. Then $y=9-18+5=-4$. So the point is $(3,-4)$, and it is the vertex of the parabola. This agrees with completing the square, since $x^{2}-6x+5=(x-3)^{2}-4$.

### Example 6 (a reciprocal with a coefficient, 4 marks)

Differentiate $f(x)=\dfrac{1}{2x^{2}}+3x$ and evaluate $f'(2)$.

Write $f(x)=\tfrac12x^{-2}+3x$. Then $f'(x)=\tfrac12(-2)x^{-3}+3=-x^{-3}+3=3-\dfrac{1}{x^{3}}$. At $x=2$, $f'(2)=3-\dfrac18=\dfrac{23}{8}=2.875$. The most common slip is to treat $\dfrac{1}{2x^{2}}$ as $(2x)^{-2}$ or as $2x^{-2}$. The $2$ is in the denominator and the power applies only to $x$, so the coefficient is $\tfrac12$.

### Example 7 (finding constants, 5 marks)

$f(x)=ax^{2}+bx$ satisfies $f(1)=4$ and $f'(1)=5$. Find $a$ and $b$.

From $f(1)=4$ we have $a+b=4$. The derivative is $f'(x)=2ax+b$, so $f'(1)=2a+b=5$. Subtracting the first equation from the second gives $a=1$, and then $b=3$. Check: $f(x)=x^{2}+3x$, $f(1)=4$ and $f'(x)=2x+3$ gives $f'(1)=5$.

### Example 8 (stationary points with a reciprocal term, 7 marks)

Find the stationary point of $f(x)=x^{2}+\dfrac{16}{x}$ for $x>0$, and determine its nature.

Write $f(x)=x^{2}+16x^{-1}$, so $f'(x)=2x-16x^{-2}=2x-\dfrac{16}{x^{2}}$. Setting $f'(x)=0$ gives $2x=\dfrac{16}{x^{2}}$, so $x^{3}=8$ and $x=2$. Then $f(2)=4+8=12$, so the stationary point is $(2,12)$. For the nature, $f'(1)=2-16=-14<0$ and $f'(3)=6-\tfrac{16}{9}=4.22>0$, so the gradient changes from negative to positive and the point is a local minimum. Since this is the only stationary point for $x>0$, and $f$ becomes large as $x\to0^{+}$ and as $x\to\infty$, it is also the least value of $f$ on $x>0$.

## Using your GDC

A calculator can check your derivative. Enter $f(x)$ as one function and your derivative as a second function, then compare the table of values of your derivative with the numerical derivative of $f$ at several points. If the numbers agree to the displayed accuracy, the derivative is almost certainly correct. You can also graph both $f$ and $f'$ and see whether the zeros of $f'$ match the turning points of $f$. For equations such as $2x=\dfrac{16}{x^{2}}$, use the solver or the intersection tool when factorising is awkward. Be careful with the entry of fractions: type $1/(2x^{2})$ with brackets around the denominator, otherwise the calculator reads it as $\dfrac{1}{2}x^{2}$. In an examination, most differentiation of integer powers should be done by hand, as it is quick and exact, and the calculator is a check, not a substitute, because marks are for the working.

## Common mistakes

- Forgetting to reduce the power, writing $\tfrac{d}{dx}(x^{3})=3x^{3}$.
- Differentiating the constant term to get the constant instead of zero.
- Treating $\dfrac{1}{2x^{2}}$ as $2x^{-2}$ rather than $\tfrac12x^{-2}$.
- Sign errors with negative powers, such as $\tfrac{d}{dx}(x^{-1})=x^{-2}$ instead of $-x^{-2}$.
- Differentiating a product of brackets as the product of the derivatives.
- Differentiating $\dfrac{x^{3}+2}{x}$ by differentiating the numerator and the denominator separately. Divide first: $x^{2}+2x^{-1}$.
- Expanding brackets incorrectly, such as $(x+2)^{2}=x^{2}+4$.
- Writing the derivative of $x$ as $x$ or as $0$ instead of $1$.

## Exam technique and command terms

**Differentiate** or **find** $\dfrac{dy}{dx}$ means that the derivative must be written as an expression in $x$, and a correct rewriting line before it earns the first mark. **Find the gradient at the point** requires a substitution, and the answer should be a number. **Find the coordinates of the point** needs both $x$ and $y$, so do not stop at the $x$-value. **Determine the nature** requires evidence, such as the sign of $f'$ either side. **Show that** expects an exact derivative, with each stage visible. In a long question the derivative from part (a) is used in later parts, so write it clearly and, if possible, factorised. If you cannot find the derivative of a difficult function, state a plausible result and carry on, as later marks may still be available (follow-through). When the answer is requested in the form $\dfrac{a}{x^{n}}$, convert the negative powers back at the end, and check by testing a value with the calculator.

## Connections

The power rule is the base of all the differentiation rules of SL 5.6 (chain, product, quotient) and of the extended rules in AHL 5.15, and the exponents and fractions manipulated here come from the laws of exponents in the algebra unit. The derivatives here feed directly into the sign analysis of SL 5.2, the tangents and normals of SL 5.4, the second derivative of SL 5.7 and the optimisation of SL 5.8. The reverse process of the power rule is integration of integer powers in SL 5.5 and 5.10, where the exponent increases by one and one divides by the new power. The binomial theorem, used to justify the power rule for positive integers, is revisited in AHL 5.12, where first-principles differentiation depends on expanding $(x+h)^{n}$ and removing the factor $h$.

## Check your understanding

1. Differentiate $f(x)=5x^{3}-2x^{2}+x-9$.
2. Differentiate $f(x)=\dfrac{4}{x^{2}}$.
3. Differentiate $f(x)=(x+1)(x-4)$.
4. Differentiate $f(x)=\dfrac{x^{2}+3x}{x}$ for $x\neq0$.
5. For $f(x)=3x^{4}-\dfrac{1}{x^{2}}$ find $f'(1)$.
6. Find the stationary points of $y=x^{3}-3x^{2}$.
7. Find the values of $x$ for which the gradient of $y=x^{3}-3x$ is $9$.
8. Differentiate $f(x)=\dfrac{x^{4}}{2}-\dfrac{2}{x}$.
9. $f(x)=ax^{2}+bx$ with $f'(2)=9$ and $f(1)=3$. Find $a$ and $b$.
10. Differentiate $f(x)=(2x-1)^{2}$ by expanding first, and find the gradient of $y=x^{3}+\dfrac1x$ at $x=-1$.

### Answers

1. $f'(x)=15x^{2}-4x+1$.
2. $f(x)=4x^{-2}$, so $f'(x)=-8x^{-3}=-\dfrac{8}{x^{3}}$.
3. $f(x)=x^{2}-3x-4$, so $f'(x)=2x-3$.
4. $f(x)=x+3$ for $x\neq0$, so $f'(x)=1$.
5. $f(x)=3x^{4}-x^{-2}$, so $f'(x)=12x^{3}+2x^{-3}$ and $f'(1)=12+2=14$.
6. $\dfrac{dy}{dx}=3x^{2}-6x=3x(x-2)$, which is zero at $x=0$ and $x=2$. The stationary points are $(0,0)$ and $(2,-4)$.
7. $3x^{2}-3=9$ gives $x^{2}=4$, so $x=\pm2$.
8. $f(x)=\tfrac12x^{4}-2x^{-1}$, so $f'(x)=2x^{3}+2x^{-2}=2x^{3}+\dfrac{2}{x^{2}}$.
9. $f'(x)=2ax+b$, so $4a+b=9$. Also $a+b=3$. Subtracting gives $3a=6$, so $a=2$ and $b=1$.
10. $(2x-1)^{2}=4x^{2}-4x+1$, so the derivative is $8x-4$. For $y=x^{3}+x^{-1}$, $\dfrac{dy}{dx}=3x^{2}-x^{-2}$, which at $x=-1$ is $3-1=2$.

## Summary

- $\dfrac{d}{dx}(ax^{n})=anx^{n-1}$ for every integer $n$, and the derivative of a constant is $0$.
- Differentiate sums and differences term by term, and pull constant multiples out.
- Rewrite before differentiating: reciprocals as negative powers, expand brackets, split fractions with a single-term denominator.
- $\dfrac{1}{2x^{2}}=\tfrac12x^{-2}$. The coefficient is $\tfrac12$ and the power is $-2$.
- Use the derivative to find gradients, solve $f'(x)=m$, and find stationary points from $f'(x)=0$.
- Unknown constants come from simultaneous equations obtained from $f$ and $f'$ at given points.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 9 (PDF p. 11), lists power derivative under SL 5.3. Derive and justify all other steps and conditions.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
