# Composite and inverse functions

> **SL 2.5 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- form the composite function $(f\circ g)(x)=f\big(g(x)\big)$, evaluate it, and explain why $f\circ g$ and $g\circ f$ usually differ;
- find the domain and range of a composite function;
- solve equations involving composite functions, and find an unknown function from a composite;
- state the identity function and use $f\circ f^{-1}=f^{-1}\circ f=\mathrm{id}$;
- find the inverse function algebraically by the swap-and-solve method, including rational, exponential and logarithmic functions and quadratics with a restricted domain;
- find the domain and range of an inverse from those of the original function;
- use the rule $(f\circ g)^{-1}=g^{-1}\circ f^{-1}$, and recognise self-inverse functions;
- connect the algebraic inverse to the reflection of the graph in $y=x$.

## Why this topic matters

Functions become powerful when they are combined. A temperature in Fahrenheit is converted to Celsius, and then the Celsius value is plugged into a physical law. A price passes through a discount and then a tax. A signal is filtered and then amplified. In each case a composite function describes the chain. The inverse function undoes the chain and lets you work backwards: given the output of a machine, what was the input? These ideas are used everywhere in later parts of the course: the chain rule for differentiation in Unit 5 is a rule about composite functions, substitution in integration builds a composite, the inverse trigonometric functions are used to solve equations, and logarithms are inverses of exponentials. In examinations, composite and inverse questions are among the most reliable sources of marks: they are mechanical, but only if the notation is understood, the order is correct and the domains are handled. This chapter focuses on exactly those three points.

## Core ideas

### Composite functions

If $g$ takes an input $x$ to $g(x)$, and $f$ then takes that value to $f\big(g(x)\big)$, the combined rule is the **composite function**
$$
(f\circ g)(x)=f\big(g(x)\big).
$$
Read it from the *inside out*: apply $g$ first, then $f$. The notation $f\circ g$ means "$f$ after $g$". To find the formula, substitute the whole expression $g(x)$ in place of $x$ in $f$. For $f(x)=2x+1$ and $g(x)=x^{2}-3$,
$$
(f\circ g)(x)=2(x^{2}-3)+1=2x^{2}-5,\qquad (g\circ f)(x)=(2x+1)^{2}-3=4x^{2}+4x-2.
$$
These are different in general: composition is **not commutative**. Evaluating $f\circ g(2)$ can be done in two ways: compute $g(2)=1$ and then $f(1)=3$, or substitute $x=2$ into $2x^{2}-5$; both give $3$. The first method is often quicker when only a number is needed.

Be careful to distinguish $f\circ g$ from the product $f(x)g(x)$ and from the repeated application $f\circ f$, also written $f^{2}(x)$ in the context of composition (but $f(x)^{2}$ is a square, so read the notation carefully; examination questions normally write $f\circ f$ or $f(f(x))$).

### Domain and range of a composite

For $f\circ g$ to be defined at $x$, two conditions must hold: $x$ must be in the domain of $g$, **and** $g(x)$ must be in the domain of $f$. So
$$
\operatorname{dom}(f\circ g)=\{x\in\operatorname{dom}g:\ g(x)\in\operatorname{dom}f\}.
$$
The domain of the composite can therefore be smaller than the domain of the inner function. For $f(x)=\sqrt x$ and $g(x)=x-4$, $(f\circ g)(x)=\sqrt{x-4}$ has domain $x\ge4$, whereas $(g\circ f)(x)=\sqrt x-4$ has domain $x\ge0$. For $f(x)=\dfrac1{x-1}$ and $g(x)=x^{2}$, $(f\circ g)(x)=\dfrac1{x^{2}-1}$, which excludes $x=\pm1$. The range of the composite is found by applying $f$ to the range of $g$ (restricted to the part inside the domain of $f$), or by studying the formula.

### Equations with composite functions

To solve $(f\circ g)(x)=k$, find the formula for $f\circ g$ and solve; or work backwards: if $f(u)=k$ then $u=f^{-1}(k)$, and then solve $g(x)=u$. When the composite formula is a quadratic or a more complicated expression, check that each solution lies in the domain. To find an **unknown function**, use substitution: if $f(x)=3x+2$ and $(f\circ g)(x)=6x^{2}-1$, then $3g(x)+2=6x^{2}-1$ and so $g(x)=2x^{2}-1$. If instead $g$ is known and $f\circ g$ is given, write $u=g(x)$, solve for $x$ in terms of $u$, and replace: with $g(x)=x+1$ and $(f\circ g)(x)=x^{2}+2x+5$, write $x=u-1$, so $f(u)=(u-1)^{2}+2(u-1)+5=u^{2}+4$.

### The identity and inverse functions

The **identity function** $\mathrm{id}(x)=x$ does nothing. A function $f$ with inverse $f^{-1}$ satisfies
$$
(f\circ f^{-1})(x)=x\quad(x\in\operatorname{dom}f^{-1}),\qquad (f^{-1}\circ f)(x)=x\quad(x\in\operatorname{dom}f).
$$
This identity is both the *definition* of an inverse and a *check*: after finding a formula for $f^{-1}$, substitute it into $f$ and simplify; you should get $x$.

### Finding an inverse algebraically

The **swap-and-solve** method is:

1. Write $y=f(x)$.
2. Swap $x$ and $y$: $x=f(y)$.
3. Solve for $y$ to get $y=f^{-1}(x)$.
4. State the domain of $f^{-1}$, which is the range of $f$.

Alternatively, solve $y=f(x)$ for $x$ in terms of $y$ and then rename the variable; both give the same result. In more detail:

- **Linear:** $f(x)=2x+3$ gives $x=2y+3$ and $y=\dfrac{x-3}2$.
- **Rational (Möbius):** $f(x)=\dfrac{3x-2}{x+4}$. Write $y=\dfrac{3x-2}{x+4}$, so $y(x+4)=3x-2$, which gives $xy+4y=3x-2$, then $x(y-3)=-4y-2$ and $x=\dfrac{4y+2}{3-y}$. Thus $f^{-1}(x)=\dfrac{4x+2}{3-x}$ with domain $x\ne3$, the range of $f$ (the horizontal asymptote is never attained).
- **Exponential and logarithm:** if $f(x)=e^{2x-1}+3$, then $y-3=e^{2x-1}$, so $2x-1=\ln(y-3)$ and $f^{-1}(x)=\dfrac{1+\ln(x-3)}2$, with domain $x>3$.
- **Quadratic with a restricted domain:** if $f(x)=x^{2}-4x+7$ for $x\ge2$, complete the square: $y=(x-2)^{2}+3$. Then $x-2=\sqrt{y-3}$, taking the positive root because $x\ge2$. So $f^{-1}(x)=2+\sqrt{x-3}$ with domain $x\ge3$. The choice of root is forced by the domain of $f$, and the sign is the typical place to lose a mark.

If a function is not one-to-one on its given domain, no inverse exists until the domain is restricted (SL 2.2).

### Inverse of a composite

To undo "first $g$, then $f$", you must undo $f$ first and then $g$, like taking off socks and shoes in the opposite order to putting them on:
$$
(f\circ g)^{-1}=g^{-1}\circ f^{-1}.
$$
For $f(x)=x+3$ and $g(x)=2x$, we have $(f\circ g)(x)=2x+3$, with inverse $\dfrac{x-3}2$; and $g^{-1}\big(f^{-1}(x)\big)=\dfrac{x-3}2$ also, as predicted.

### Self-inverse functions

A function is **self-inverse** if $f=f^{-1}$, which means $f(f(x))=x$. Its graph is symmetric about the line $y=x$. Examples are $f(x)=\dfrac1x$, $f(x)=c-x$, and $f(x)=\dfrac{x+1}{x-1}$. They are studied further in AHL 2.14.

### Graphs of inverses

The graph of $f^{-1}$ is the reflection of the graph of $f$ in $y=x$: the point $(a,b)$ on $f$ corresponds to $(b,a)$ on $f^{-1}$. A consequence is that the graphs of $f$ and $f^{-1}$ meet on the line $y=x$ (when they meet at all), so an equation $f(x)=f^{-1}(x)$ can often be solved as $f(x)=x$. However, they can also intersect off the line $y=x$ in pairs, so be careful. The gradient at corresponding points are reciprocals, a fact used in calculus.

## Worked examples

### Example 1 (forming composites, 5 marks)

Let $f(x)=2x+1$ and $g(x)=x^{2}-3$. Find $f\circ g$, $g\circ f$ and evaluate each at $x=2$.

*Solution.* $(f\circ g)(x)=2(x^{2}-3)+1=2x^{2}-5$, and $(g\circ f)(x)=(2x+1)^{2}-3=4x^{2}+4x-2$. At $x=2$: $(f\circ g)(2)=8-5=3$ and $(g\circ f)(2)=16+8-2=22$.

Check $g\circ f(2)$ in two steps: $f(2)=5$, $g(5)=22$ ✓.

### Example 2 (domains of composites, 6 marks)

Let $f(x)=\sqrt x$ and $g(x)=x-4$. Find the domain of $f\circ g$ and of $g\circ f$.

*Solution.* $(f\circ g)(x)=\sqrt{x-4}$ needs $x-4\ge0$, so the domain is $x\ge4$. $(g\circ f)(x)=\sqrt x-4$ needs $x\ge0$, so the domain is $x\ge0$. The two composites differ both in formula and in domain.

### Example 3 (an inverse of a rational function, 6 marks)

Find the inverse of $f(x)=\dfrac{3x-2}{x+4}$, $x\ne-4$, and state its domain.

*Solution.* Let $y=\dfrac{3x-2}{x+4}$. Then $y(x+4)=3x-2$, so $xy+4y=3x-2$ and $x(y-3)=-4y-2$, giving $x=\dfrac{4y+2}{3-y}$. So $f^{-1}(x)=\dfrac{4x+2}{3-x}$. The range of $f$ excludes the horizontal asymptote $y=3$, so the domain of $f^{-1}$ is $x\ne3$.

Check: $f\big(f^{-1}(x)\big)=\dfrac{3\cdot\frac{4x+2}{3-x}-2}{\frac{4x+2}{3-x}+4}=\dfrac{12x+6-6+2x}{4x+2+12-4x}=\dfrac{14x}{14}=x$ ✓.

### Example 4 (exponential inverse, 5 marks)

Find $f^{-1}$ for $f(x)=e^{2x-1}+3$ and state its domain and range.

*Solution.* $y-3=e^{2x-1}$, so $2x-1=\ln(y-3)$ and $x=\dfrac{1+\ln(y-3)}2$. Hence $f^{-1}(x)=\dfrac{1+\ln(x-3)}2$. The range of $f$ is $y>3$, so $\operatorname{dom}f^{-1}$ is $x>3$, and the range of $f^{-1}$ is all real numbers (the domain of $f$).

### Example 5 (inverse with a restricted domain, 6 marks)

Let $f(x)=x^{2}-4x+7$ for $x\ge2$. Find $f^{-1}$, with its domain and range.

*Solution.* $f(x)=(x-2)^{2}+3$. Put $y=(x-2)^{2}+3$, so $(x-2)^{2}=y-3$ and $x-2=\sqrt{y-3}$ because $x\ge2$ means $x-2\ge0$. So $f^{-1}(x)=2+\sqrt{x-3}$. The range of $f$ is $y\ge3$, so $\operatorname{dom}f^{-1}$ is $x\ge3$, and $\operatorname{ran}f^{-1}$ is $y\ge2$.

Check: $f^{-1}(7)=2+\sqrt4=4$ and $f(4)=16-16+7=7$ ✓.

### Example 6 (solving composite equations, 6 marks)

Let $f(x)=3x-1$ and $g(x)=x^{2}+2$. Solve (a) $(g\circ f)(x)=27$; (b) $(f\circ g)(x)=32$.

*Solution.* (a) $(g\circ f)(x)=(3x-1)^{2}+2=27$, so $(3x-1)^{2}=25$ and $3x-1=\pm5$, which gives $x=2$ or $x=-\dfrac43$. (b) $(f\circ g)(x)=3(x^{2}+2)-1=3x^{2}+5=32$, so $x^{2}=9$ and $x=\pm3$.

### Example 7 (inverse of a composite, 5 marks)

For $f(x)=x+3$ and $g(x)=2x$, find $(f\circ g)^{-1}$ and check it equals $g^{-1}\circ f^{-1}$.

*Solution.* $(f\circ g)(x)=2x+3$. Let $y=2x+3$; then $x=\dfrac{y-3}2$, so $(f\circ g)^{-1}(x)=\dfrac{x-3}2$. Now $f^{-1}(x)=x-3$ and $g^{-1}(x)=\dfrac x2$, so $g^{-1}\big(f^{-1}(x)\big)=\dfrac{x-3}2$ ✓.

If we had wrongly composed in the other order, $f^{-1}\big(g^{-1}(x)\big)=\dfrac x2-3$, which is different.

### Example 8 (finding an unknown function, 6 marks)

(a) Given $f(x)=3x+2$ and $(f\circ g)(x)=6x^{2}-1$, find $g(x)$. (b) Given $g(x)=x+1$ and $(f\circ g)(x)=x^{2}+2x+5$, find $f(x)$.

*Solution.* (a) $3g(x)+2=6x^{2}-1$, so $g(x)=\dfrac{6x^{2}-3}3=2x^{2}-1$. (b) Let $u=x+1$, so $x=u-1$. Then $f(u)=(u-1)^{2}+2(u-1)+5=u^{2}-2u+1+2u-2+5=u^{2}+4$. Thus $f(x)=x^{2}+4$.

Check (b): $f\big(g(x)\big)=(x+1)^{2}+4=x^{2}+2x+5$ ✓.

### Example 9 (self-inverse, 4 marks)

Show that $f(x)=\dfrac{x+1}{x-1}$ ($x\ne1$) is self-inverse.

*Solution.* $f\big(f(x)\big)=\dfrac{\frac{x+1}{x-1}+1}{\frac{x+1}{x-1}-1}=\dfrac{(x+1)+(x-1)}{(x+1)-(x-1)}=\dfrac{2x}{2}=x$. So $f\circ f=\mathrm{id}$ and $f=f^{-1}$.

### Example 10 (domain and range of composites, 6 marks)

Let $f(x)=x^{2}$ and $g(x)=\ln x$. Find the domain and range of $f\circ g$ and $g\circ f$.

*Solution.* $(f\circ g)(x)=(\ln x)^{2}$ with domain $x>0$ (the domain of $g$) and range $y\ge0$. $(g\circ f)(x)=\ln(x^{2})=2\ln|x|$, defined for $x\ne0$ because $x^{2}>0$, with range all real numbers (as $x^{2}$ takes all positive values and $\ln$ takes all reals on them).

Notice that $\ln(x^{2})=2\ln x$ only for $x>0$; the formula $2\ln|x|$ is the correct one for the full domain.

## Using your GDC

A GDC helps with checks and with graphical solutions. To check a composite formula, enter $f$ and $g$ as separate functions and the composite as a third (many GDCs allow you to write $f(g(x))$ by referring to the functions by name), then compare the graph of the composite with the graph of your simplified formula; if they coincide on the domain, the formula is right. For the graph of the inverse, plot $f$, the line $y=x$ and your $f^{-1}$ using a *square* window, and check that the curves are mirror images. To solve $f(g(x))=k$ numerically when the algebra is awkward, graph $y=f(g(x))$ and $y=k$ and use the *intersect* tool. For $f^{-1}(a)$, solve $f(x)=a$ with the intersection tool within the domain. Note that if the question restricts the domain of $f$ (as in Example 5), the GDC still plots the unrestricted formula, so ignore the part outside the domain. Menu names vary by model.

## Common mistakes

1. **Wrong order:** computing $g(f(x))$ for $f\circ g$.
2. **Forgetting domain restrictions** in composites, such as $\sqrt{x-4}$ requiring $x\ge4$.
3. **Writing $f^{-1}(x)=\dfrac1{f(x)}$.**
4. **Taking the wrong root** when inverting a restricted quadratic, giving $2-\sqrt{x-3}$ instead of $2+\sqrt{x-3}$.
5. **Omitting the domain of the inverse** or giving the domain of $f$ instead of the range.
6. **Reversing the order in $(f\circ g)^{-1}$:** it is $g^{-1}\circ f^{-1}$.
7. **Algebra slips when solving for $y$** in rational functions, especially factoring $y$ out.
8. **Using $\ln(x^{2})=2\ln x$ without checking** that $x>0$.

## Exam technique and command terms

**Find $(f\circ g)(x)$** means a simplified formula in $x$; **find $(f\circ g)(a)$** means a number, so do it in two steps. **Find $f^{-1}(x)$** requires the swap-and-solve working, so show each line; the examiner awards one mark for swapping or making $x$ the subject, one for the algebra and one for the final form. **State the domain** for an inverse is a mark on its own, and you gain it by stating the range of $f$ carefully, especially excluded values. **Show that $f$ is self-inverse** requires $f(f(x))=x$ with simplification. **Hence** may reuse an earlier composite.

When a question gives you a composite and asks for an unknown function, use substitution rather than guessing. Always verify with a number. In an inverse question, check by choosing a value: if $f(2)=5$, then $f^{-1}(5)$ must be $2$. That takes ten seconds and catches nearly every algebra error.

## Connections

SL 2.2 introduced the inverse concept and the idea of restricting the domain; here you do the algebra. SL 2.1 gives the inverse of a linear function, with gradient $\dfrac1m$. SL 2.6 and 2.7 are the source of the quadratics in inverse questions and the completing-the-square technique. SL 2.8 contains the reciprocal and rational functions whose inverses are Möbius functions as in Example 3, and SL 2.9 contains exponential and logarithmic functions that are mutual inverses, which is why the exponential-log inversion above works. SL 2.11 transformations can be described as compositions with simple functions. In AHL 2.14, you examine self-inverse functions in depth and restrict domains of many-to-one functions. In Unit 3, inverse trigonometric functions give solutions of $\sin x=k$. In Unit 5, the chain rule and integration by substitution are about composites, and the derivative of an inverse function is the reciprocal of the derivative: $\left(f^{-1}\right)'(x)=\dfrac1{f'\left(f^{-1}(x)\right)}$.

## Check your understanding

1. Let $f(x)=3x-2$ and $g(x)=x^{2}+1$. Find $f\circ g$ and $g\circ f$, and evaluate each at $x=2$.
2. Let $f(x)=\sqrt x$ and $g(x)=6-2x$. Find the domain of $f\circ g$.
3. Find the inverse of $f(x)=\dfrac{2x+1}{x-3}$ and state its domain.
4. Find the inverse of $f(x)=\ln(x+2)-1$ and state its domain.
5. Let $f(x)=x^{2}+6x$ for $x\ge-3$. Find $f^{-1}$ and its domain.
6. Let $f(x)=2x+1$ and $g(x)=x^{2}$. Solve $(f\circ g)(x)=19$.
7. Let $f(x)=2x-1$ and $g(x)=x+4$. Find $(f\circ g)^{-1}$ and check it equals $g^{-1}\circ f^{-1}$.
8. Given $g(x)=x-2$ and $(f\circ g)(x)=x^{2}+3x$, find $f(x)$.
9. Show that $f(x)=5-x$ and $f(x)=\dfrac3x$ are self-inverse.
10. Let $f(x)=x^{2}$ and $g(x)=\ln x$. State the domain and range of $g\circ f$.

### Answers

1. $f\circ g=3(x^{2}+1)-2=3x^{2}+1$ and $g\circ f=(3x-2)^{2}+1$. At $x=2$: $13$ and $17$.
2. $6-2x\ge0$, so $x\le3$.
3. $y(x-3)=2x+1$ gives $x(y-2)=3y+1$, so $f^{-1}(x)=\dfrac{3x+1}{x-2}$ with domain $x\ne2$.
4. $y+1=\ln(x+2)$ gives $x=e^{y+1}-2$, so $f^{-1}(x)=e^{x+1}-2$, with domain $x\in\mathbb{R}$.
5. $f(x)=(x+3)^{2}-9$, so $x+3=\sqrt{y+9}$ (since $x\ge-3$), giving $f^{-1}(x)=-3+\sqrt{x+9}$ with domain $x\ge-9$.
6. $(f\circ g)(x)=2x^{2}+1=19$, so $x^{2}=9$ and $x=\pm3$.
7. $(f\circ g)(x)=2(x+4)-1=2x+7$, so $(f\circ g)^{-1}(x)=\dfrac{x-7}2$. Also $f^{-1}(x)=\dfrac{x+1}2$ and $g^{-1}(x)=x-4$, so $g^{-1}\big(f^{-1}(x)\big)=\dfrac{x+1}2-4=\dfrac{x-7}2$ ✓.
8. Let $u=x-2$, so $x=u+2$: $f(u)=(u+2)^{2}+3(u+2)=u^{2}+7u+10$. So $f(x)=x^{2}+7x+10$.
9. $f(f(x))=5-(5-x)=x$ and $f(f(x))=\dfrac3{3/x}=x$.
10. $(g\circ f)(x)=\ln(x^{2})$ has domain $x\ne0$ and range all real numbers.

## Summary

- $(f\circ g)(x)=f(g(x))$: apply $g$ first; the order matters and the domain needs $x\in\operatorname{dom}g$ and $g(x)\in\operatorname{dom}f$.
- Solve composite equations by forming the formula or by working backwards with inverses; find unknown functions by substitution.
- $f\circ f^{-1}=f^{-1}\circ f=\mathrm{id}$, which is also the check for an inverse.
- Swap and solve to find $f^{-1}$; $\operatorname{dom}f^{-1}=\operatorname{ran}f$; choose the root that fits the original domain.
- $(f\circ g)^{-1}=g^{-1}\circ f^{-1}$; self-inverse means $f(f(x))=x$.
- The graph of $f^{-1}$ is the reflection of the graph of $f$ in $y=x$.
