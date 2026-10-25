# Odd, even and self-inverse functions

> **AHL 2.14 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define even functions ($f(-x)=f(x)$) and odd functions ($f(-x)=-f(x)$) and describe their graphs;
- test algebraically whether a function is even, odd or neither, checking that the domain is symmetric;
- predict the parity of sums, products and compositions of even and odd functions;
- decompose any function into an even part and an odd part;
- use symmetry to complete a graph, to find function values and to find unknown coefficients;
- define a self-inverse function, $f=f^{-1}$, and test it with $f(f(x))=x$;
- identify the graph of a self-inverse function by its symmetry in $y=x$;
- recognise the standard families of self-inverse functions and find parameters that make a function self-inverse.

## Why this topic matters

Symmetry is one of the most powerful ideas in mathematics because it lets you do half the work and get the other half free. If you know that a function is even, you need only understand it for $x\ge0$. If you know that it is odd, its values at $-x$ are the negatives of those at $x$. These properties are not just curiosities: they simplify integrals (the integral of an odd function over a symmetric interval is zero, which you will use in Unit 5), they classify Fourier components of a signal, and they explain why $\cos x$ has only even powers in its Maclaurin series while $\sin x$ has only odd powers. Self-inverse functions are a different kind of symmetry, in the line $y=x$. They are common in practice: negation, taking a reciprocal, and swapping two quantities all undo themselves. In the IB, this topic gives short, algebraic Paper 1 questions and it often appears as a "show that" followed by a deduction about a graph. The proofs are quick if you set them out in a standard way, and the marks come from correct algebra with the right conclusion stated.

## Core ideas

### Even functions

A function $f$ is **even** if for every $x$ in its domain, $-x$ is also in the domain and
$$
f(-x)=f(x).
$$
The graph is **symmetric about the $y$-axis**: reflecting it in the $y$-axis leaves it unchanged. Standard examples: $x^{2}$, $x^{4}$, any polynomial with only even powers, $|x|$, $\cos x$, $\dfrac1{x^{2}}$ and the constant functions. The name comes from the even powers of $x$.

### Odd functions

A function $f$ is **odd** if for every $x$ in its domain, $-x$ is in the domain and
$$
f(-x)=-f(x).
$$
The graph has **rotational symmetry of order $2$ about the origin** (it is unchanged by a $180^{\circ}$ rotation about $(0,0)$). Standard examples: $x$, $x^{3}$, any polynomial with only odd powers, $\sin x$, $\tan x$, $\dfrac1x$. If $0$ is in the domain of an odd function, then $f(0)=-f(0)$ so $f(0)=0$ and the graph passes through the origin.

### Neither

Most functions are neither even nor odd. For example $x^{2}+x$, $e^{x}$ and $\ln x$ are neither. A function is both even and odd only if it is the zero function. To show that a function is *neither*, give a single counterexample: for $f(x)=x^{2}+x$, $f(1)=2$ and $f(-1)=0$, which is neither $f(1)$ nor $-f(1)$.

### The domain condition

Parity requires the domain to be **symmetric about zero**. The function $f(x)=x^{2}$ on $-1\le x\le2$ is *not* even, because $x=2$ is in the domain but $-2$ is not. The same expression restricted to $-2\le x\le2$ is even. In an examination you should always comment on the domain, even if briefly.

### Testing algebraically

To test $f$:

1. State the domain and check that it is symmetric.
2. Compute $f(-x)$ by replacing every $x$ with $(-x)$ and simplifying.
3. Compare with $f(x)$ and $-f(x)$.
4. State the conclusion: even if $f(-x)=f(x)$; odd if $f(-x)=-f(x)$; otherwise neither (with a counterexample).

Pay attention to signs: $(-x)^{n}=x^{n}$ if $n$ is even and $-x^{n}$ if $n$ is odd; $|-x|=|x|$; $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$.

### Rules for combining

| Combination | Parity of the result |
|---|---|
| even $\pm$ even | even |
| odd $\pm$ odd | odd |
| even $\times$ even | even |
| odd $\times$ odd | even |
| even $\times$ odd | odd |
| even $\circ$ anything even or odd ($f(g(x))$ with $f$ even, $g$ odd or even) | even |
| odd $\circ$ odd | odd |
| odd $\circ$ even | even |

For instance, if $f$ is odd and $g$ is odd then $(f\circ g)(-x)=f(g(-x))=f(-g(x))=-f(g(x))$, so $f\circ g$ is odd. The sum of an even and an odd function (both non-zero) is neither.

### Decomposition into even and odd parts

Every function whose domain is symmetric can be written uniquely as the sum of an even function and an odd function:
$$
f(x)=\underbrace{\frac{f(x)+f(-x)}2}_{\text{even part}}+\underbrace{\frac{f(x)-f(-x)}2}_{\text{odd part}}.
$$
For a polynomial, the even part consists of the even-power terms and the odd part of the odd-power terms: $x^{3}+2x^{2}-x+5$ has even part $2x^{2}+5$ and odd part $x^{3}-x$. For $e^{x}$ the even part is $\dfrac{e^{x}+e^{-x}}2$ (the hyperbolic cosine) and the odd part is $\dfrac{e^{x}-e^{-x}}2$ (the hyperbolic sine).

### Using symmetry

- If $f$ is even, and you know $f(a)$, then $f(-a)=f(a)$. A graph given for $x\ge0$ is completed by reflecting in the $y$-axis.
- If $f$ is odd, $f(-a)=-f(a)$, and $f(0)=0$ if defined. A graph is completed by rotating through $180^{\circ}$ about the origin.
- Unknown coefficients can be found by matching: if a polynomial is even, all odd-power coefficients are zero; if it is odd, all even-power coefficients (including the constant) are zero.
- A transformation can destroy or create symmetry. $f(x-2)$ is generally not even, even if $f$ is. The translation $g(x)=f(x-a)$ makes the symmetry about the line $x=a$ instead: if $f$ is even then $g$ is symmetric about $x=a$.

### Self-inverse functions

A function $f$ is **self-inverse** if $f=f^{-1}$, which means
$$
f\big(f(x)\big)=x\quad\text{for all }x\text{ in the domain of }f.
$$
Because the graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y=x$ (SL 2.5), a self-inverse function has a graph that is **symmetric about the line $y=x$**. For this to make sense, $f$ must be one-to-one and its range must equal its domain. Examples:

- $f(x)=x$, and $f(x)=-x$;
- $f(x)=a-x$ for any constant $a$ (reflection of the line in $y=x$ gives the same line);
- $f(x)=\dfrac ax$ with $a\ne0$ (domain $x\ne0$);
- $f(x)=\dfrac{ax+b}{cx-a}$, the family of simple rational functions with $d=-a$ (SL 2.8), where $c\ne0$ and $a^{2}+bc\ne0$;
- $f(x)=\sqrt{r^{2}-x^{2}}$ restricted to $0\le x\le r$, a quarter circle.

To test, compute $f(f(x))$ and simplify to $x$. To find parameter values for which a function is self-inverse, equate $f(f(x))$ to $x$ or use the structure of the family. Note that a self-inverse function need not be odd or even: $f(x)=a-x$ is self-inverse but is neither unless $a=0$. Conversely $x^{3}$ is odd but its inverse is $\sqrt[3]{x}$, so it is not self-inverse.

### Intersections with $y=x$

For any self-inverse $f$, $f(f(x))=x$, and so every point on the graph either lies on the line $y=x$ or comes in a pair $(a,b)$ and $(b,a)$ that are mirror images. A pair of points $(a,b)$ and $(b,a)$ on the curve has $f(a)=b$ and $f(b)=a$: the function swaps them.

## Worked examples

### Example 1 (classification, 6 marks)

Classify each function as even, odd or neither: (a) $x^{4}-3x^{2}+1$; (b) $x^{3}+x$; (c) $x^{2}+x$; (d) $|x|$; (e) $e^{x}$.

*Solution.* (a) Only even powers, so $f(-x)=f(x)$: even. (b) $f(-x)=-x^{3}-x=-f(x)$: odd. (c) $f(1)=2$, $f(-1)=0$, which is neither $2$ nor $-2$: neither. (d) $|-x|=|x|$: even. (e) $e^{-x}\ne\pm e^{x}$, for instance $f(0)=1$ so it is not odd, and $f(1)\ne f(-1)$ so it is not even: neither.

### Example 2 (an algebraic proof of oddness, 4 marks)

Show that $f(x)=\dfrac{x}{x^{2}+1}$ is odd.

*Solution.* The domain is all real numbers, which is symmetric. $f(-x)=\dfrac{-x}{(-x)^{2}+1}=\dfrac{-x}{x^{2}+1}=-f(x)$. So $f$ is odd.

### Example 3 (a rational function with a restricted domain, 4 marks)

Show that $f(x)=\dfrac{x^{3}}{x^{2}-4}$ is odd, and state its domain.

*Solution.* The domain is $x\ne\pm2$, symmetric about $0$. $f(-x)=\dfrac{(-x)^{3}}{(-x)^{2}-4}=\dfrac{-x^{3}}{x^{2}-4}=-f(x)$. So $f$ is odd and its graph has $180^{\circ}$ rotational symmetry about the origin.

### Example 4 (parity of products, 4 marks)

If $f$ is even and $g$ is odd, determine the parity of $h(x)=f(x)\,g(x)$ and of $k(x)=f(g(x))$.

*Solution.* $h(-x)=f(-x)g(-x)=f(x)\cdot\big(-g(x)\big)=-h(x)$, so $h$ is odd. $k(-x)=f\big(g(-x)\big)=f\big(-g(x)\big)=f\big(g(x)\big)=k(x)$, so $k$ is even.

### Example 5 (decomposition, 5 marks)

Write $f(x)=x^{3}+2x^{2}-x+5$ as the sum of an even function and an odd function.

*Solution.* $f(-x)=-x^{3}+2x^{2}+x+5$. The even part is $\dfrac{f(x)+f(-x)}2=\dfrac{4x^{2}+10}2=2x^{2}+5$. The odd part is $\dfrac{f(x)-f(-x)}2=\dfrac{2x^{3}-2x}2=x^{3}-x$. Sum: $2x^{2}+5+x^{3}-x=f(x)$ ✓.

### Example 6 (using symmetry for values, 4 marks)

An odd function $f$ has $f(3)=-2$ and an even function $g$ has $g(3)=7$. Find $f(-3)$, $g(-3)$ and $f(-3)+2g(-3)$.

*Solution.* $f(-3)=-f(3)=2$ and $g(-3)=g(3)=7$. So $f(-3)+2g(-3)=2+14=16$.

### Example 7 (the domain matters, 3 marks)

Is $f(x)=x^{2}$ for $-1\le x\le2$ even?

*Solution.* No. The domain is not symmetric about $0$: $2$ is in the domain but $-2$ is not, so $f(-2)$ is undefined and the condition $f(-x)=f(x)$ cannot hold for all $x$ in the domain. Although the formula is even, the function is neither even nor odd.

### Example 8 (unknown coefficients, 5 marks)

The function $f(x)=x^{4}+(a+2)x^{3}+bx^{2}+(c-1)x+d$ is even. Find $a$ and $c$.

*Solution.* An even polynomial has no odd-power terms. So $a+2=0$ and $c-1=0$, hence $a=-2$ and $c=1$. The constants $b$ and $d$ are unrestricted.

### Example 9 (a composition, 4 marks)

Prove that if $f$ and $g$ are both odd, then $f\circ g$ is odd.

*Solution.* $(f\circ g)(-x)=f\big(g(-x)\big)=f\big(-g(x)\big)=-f\big(g(x)\big)=-(f\circ g)(x)$. The first step uses that $g$ is odd and the second that $f$ is odd.

### Example 10 (a self-inverse rational function, 6 marks)

Show that $f(x)=\dfrac{2x+1}{x-2}$, $x\ne2$, is self-inverse.

*Solution.* $f\big(f(x)\big)=\dfrac{2\cdot\frac{2x+1}{x-2}+1}{\frac{2x+1}{x-2}-2}=\dfrac{2(2x+1)+(x-2)}{(2x+1)-2(x-2)}=\dfrac{5x}{5}=x$. So $f=f^{-1}$. This matches the family $\dfrac{ax+b}{cx-a}$ with $a=2$.

### Example 11 (find the parameter, 5 marks)

Find the value of $k$ for which $f(x)=\dfrac{kx+3}{x-2}$ is self-inverse.

*Solution.* In the self-inverse family $\dfrac{ax+b}{cx+d}$ we need $d=-a$. Here $a=k$ and $d=-2$, so $k=2$. Verify: $f\big(f(x)\big)=\dfrac{2\cdot\frac{2x+3}{x-2}+3}{\frac{2x+3}{x-2}-2}=\dfrac{4x+6+3x-6}{2x+3-2x+4}=\dfrac{7x}{7}=x$ ✓.

### Example 12 (a quarter circle, 5 marks)

Show that $f(x)=\sqrt{9-x^{2}}$, $0\le x\le3$, is self-inverse and describe its graph.

*Solution.* For $0\le x\le3$, $0\le9-x^{2}\le9$ so $f(x)\in[0,3]$, and $f\big(f(x)\big)=\sqrt{9-\big(9-x^{2}\big)}=\sqrt{x^{2}}=x$ because $x\ge0$. The graph is the quarter of the circle $x^{2}+y^{2}=9$ in the first quadrant, which is symmetric about $y=x$. Without the domain restriction (for example on $-3\le x\le3$) the function would not be one-to-one and would not be self-inverse.

### Example 13 (a linear self-inverse, 3 marks)

Show that $f(x)=5-x$ is self-inverse but is neither even nor odd.

*Solution.* $f\big(f(x)\big)=5-(5-x)=x$, so it is self-inverse. Also $f(-x)=5+x$, which is neither $5-x$ nor $-(5-x)=x-5$, so it is neither even nor odd.

## Using your GDC

A GDC helps to test and visualise symmetry. To test parity, graph $y=f(x)$ and $y=f(-x)$ together: if the two graphs coincide, $f$ is even; graph $y=-f(-x)$ and compare with $y=f(x)$ to test oddness. A table of values for $x$ and $-x$ gives a quick numerical check. To test whether a function is self-inverse, graph $f$ together with $y=x$ in a square window (equal scales) and see that the curve is its own mirror image in this line, or evaluate $f(f(x))$ at several $x$ values in the table. Using a stored function, enter $f(f(x))$ and graph it; if the result is the line $y=x$, the function is self-inverse. For the decomposition, graph the even part and the odd part separately and their sum. The GDC cannot replace a proof, so you must still show the algebraic steps in the answer. Menu names vary by model.

## Common mistakes

1. **Forgetting the domain** when asserting that a function is even or odd.
2. **Substituting incorrectly**: $(-x)^{2}$ is $x^{2}$, but $-x^{2}$ is not the same as $(-x)^{2}$.
3. **Concluding "neither" without a counterexample** or a complete calculation of $f(-x)$.
4. **Believing that all functions are even or odd**, or that a function must be one of the two.
5. **Confusing odd functions and inverse functions**: $f(-x)=-f(x)$ is symmetry about the origin and $f(f(x))=x$ is a different property.
6. **Treating $f(f(x))$ as $f(x)^{2}$**, or squaring the function instead of composing.
7. **Forgetting the restricted domain** that makes a function one-to-one and so possibly self-inverse.
8. **Claiming that a translation of an even function is even**; it is symmetric about a different line.

## Exam technique and command terms

**Show that $f$ is odd** (or even) requires an explicit calculation of $f(-x)$ and a statement comparing it with $f(x)$ or $-f(x)$. **Determine whether** requires a conclusion: even, odd or neither, justified with algebra or a counterexample. **State the symmetry of the graph** requires you to name the axis or point: the $y$-axis for even and the origin for odd. **Show that $f$ is self-inverse** requires $f(f(x))=x$ with all steps. **Find the value of $k$ for which** may require the structure $d=-a$ or the equation $f(f(x))=x$ with comparing coefficients. **Hence** uses an earlier result, such as parity, to deduce a value or the symmetry of a graph.

The proof template is: *domain; compute $f(-x)$; simplify; conclude.* For $f(f(x))$ with a fraction, clear the inner fraction by multiplying numerator and denominator by the inner denominator. If a question gives several functions and asks about the parity of combinations, apply the rules in the table but also show a one-line calculation to be safe. In an unknown-coefficient question, think about which terms must vanish.

## Connections

SL 2.2 and SL 2.5 introduced domain, range, inverse and composite functions, which are the framework for self-inverse functions; SL 2.8 gave the self-inverse family $\dfrac{ax+b}{cx-a}$ for the first time; SL 2.11 gave reflections $f(-x)$ and $-f(x)$, which is the picture behind parity. AHL 2.13 covers rational functions, many of which are odd or even. AHL 2.15 and AHL 2.16 use symmetry to reduce the work in solving inequalities. In Unit 3, the identities $\cos(-x)=\cos x$ and $\sin(-x)=-\sin x$ are statements of parity, and the unit circle (SL 3.5) explains them geometrically. In Unit 5, $\displaystyle\int_{-a}^{a}f(x)\,dx=0$ for an odd $f$ and $2\displaystyle\int_{0}^{a}f(x)\,dx$ for an even $f$, derivatives of even functions are odd and the derivatives of odd functions are even, and the Maclaurin series of an even function contains only even powers. In Unit 4, the symmetry of the normal distribution about its mean is an even-function property of the density about $x=\mu$.

## Check your understanding

1. Classify as even, odd or neither: (a) $x^{5}-x^{3}$; (b) $x^{2}+2x$; (c) $\cos x+x^{2}$; (d) $x|x|$.
2. Show that $f(x)=\dfrac{x^{3}}{x^{2}-4}$ is odd.
3. If $f$ is even and $g$ is odd, state the parity of $f\cdot g$, $f\circ g$ and $g\circ f$.
4. Express $f(x)=2x^{3}-x^{2}+3x-4$ as the sum of an even and an odd function.
5. An odd function $f$ has $f(2)=5$ and $f(-1)=3$. Find $f(-2)$ and $f(1)$.
6. Show that $f(x)=\dfrac{3x-1}{x-3}$, $x\ne3$, is self-inverse.
7. Find the value of $k$ for which $f(x)=\dfrac{kx-2}{x-5}$ is self-inverse.
8. Show that $f(x)=\dfrac ax$ ($a\ne0$) is self-inverse and state its parity.
9. Show that $f(x)=\sqrt{16-x^{2}}$, $0\le x\le4$, is self-inverse.
10. The function $f(x)=x^{3}+px^{2}+qx+r$ is odd. Find $p$ and $r$.

### Answers

1. (a) odd; (b) neither ($f(1)=3$, $f(-1)=-1$); (c) even; (d) odd, since $(-x)|-x|=-x|x|$.
2. Domain $x\ne\pm2$ is symmetric. $f(-x)=\dfrac{-x^{3}}{x^{2}-4}=-f(x)$, so it is odd.
3. $f\cdot g$ is odd; $f\circ g$ is even; $g\circ f$ is even (since $g(f(-x))=g(f(x))$).
4. Even part $-x^{2}-4$; odd part $2x^{3}+3x$.
5. $f(-2)=-f(2)=-5$ and $f(1)=-f(-1)=-3$.
6. $f\big(f(x)\big)=\dfrac{3\cdot\frac{3x-1}{x-3}-1}{\frac{3x-1}{x-3}-3}=\dfrac{9x-3-(x-3)}{3x-1-3(x-3)}=\dfrac{8x}{8}=x$.
7. We need $d=-a$, so $k=5$. Check: $f\big(f(x)\big)=\dfrac{23x}{23}=x$.
8. $f\big(f(x)\big)=\dfrac{a}{a/x}=x$. Also $f(-x)=-\dfrac ax=-f(x)$, so it is odd.
9. $f\big(f(x)\big)=\sqrt{16-(16-x^{2})}=\sqrt{x^{2}}=x$ for $x\ge0$, and $f$ maps $[0,4]$ onto $[0,4]$.
10. An odd polynomial has no even-power terms, so $p=0$ and $r=0$.

## Summary

- Even: $f(-x)=f(x)$, symmetric about the $y$-axis. Odd: $f(-x)=-f(x)$, symmetric under $180^{\circ}$ rotation about the origin, and $f(0)=0$ if defined.
- The domain must be symmetric about $0$. Most functions are neither.
- Parity rules: even$\times$even and odd$\times$odd are even; even$\times$odd is odd; compositions with an even outer function are even.
- Any function can be split into an even part $\dfrac{f(x)+f(-x)}2$ and an odd part $\dfrac{f(x)-f(-x)}2$.
- Self-inverse: $f(f(x))=x$, graph symmetric in $y=x$; examples $a-x$, $\dfrac ax$, $\dfrac{ax+b}{cx-a}$ and the restricted quarter circle.
- Proof template: domain, compute, simplify, conclude.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for AHL 2.14. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
