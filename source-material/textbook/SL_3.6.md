# Trigonometric identities

> **SL 3.6 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state and prove the Pythagorean identity $\sin^{2}\theta+\cos^{2}\theta=1$ from the unit circle, and derive $1+\tan^{2}\theta=\dfrac1{\cos^{2}\theta}$;
- use $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ to simplify expressions;
- state and use the double-angle identities for sine and cosine, including all three forms of $\cos2\theta$;
- find the exact value of $\sin2\theta$ or $\cos2\theta$ given one ratio and the quadrant;
- use the identities backwards to find $\cos\theta$ or $\sin\theta$ from $\cos2\theta$;
- simplify trigonometric expressions and prove identities rigorously;
- find exact values of angles such as $\dfrac\pi8$ and $15^{\circ}$ with the half-angle form of the double-angle identity;
- rewrite an expression as a quadratic in $\sin\theta$ or $\cos\theta$, preparing for SL 3.8.

## Why this topic matters

An **identity** is an equation true for every value of the variable (where defined), unlike an equation, which is true only for particular values. Identities are the algebra of trigonometry: they allow you to rewrite an awkward expression as a simple one, which is the key to solving equations, simplifying integrals in Unit 5 and proving general results. Look at $\cos2\theta$: it can be written three ways, and the choice of form turns an equation containing both $\cos2\theta$ and $\sin\theta$ into a quadratic in $\sin\theta$ that you can solve. In examinations, identities appear in three styles: *prove* a given identity (a Paper 1 staple, usually worth 4 to 6 marks), *simplify* an expression, or *use* an identity inside an equation or an exact-value question. The standard difficulty is that students do not know which identity to apply. The answer is a small number of strategies: express everything in terms of sine and cosine, use $\sin^{2}+\cos^{2}=1$ to unify, combine fractions, and manipulate one side only. The double-angle identities also have a beautiful geometric meaning and they form the base for the compound-angle identities of AHL 3.10. This chapter lays out each identity with its derivation, and builds a reliable approach to proofs.

## Core ideas

### The Pythagorean identity

On the unit circle, a point has coordinates $(\cos\theta,\sin\theta)$ and lies on $x^{2}+y^{2}=1$. Hence
$$
\sin^{2}\theta+\cos^{2}\theta=1\qquad\text{for all }\theta.
$$
(The notation $\sin^{2}\theta$ means $(\sin\theta)^{2}$.) This is Pythagoras' theorem for the right-angled triangle with hypotenuse $1$. Rearranged forms are used constantly:
$$
\sin^{2}\theta=1-\cos^{2}\theta,\qquad\cos^{2}\theta=1-\sin^{2}\theta.
$$
It follows that $\sin\theta=\pm\sqrt{1-\cos^{2}\theta}$ where the sign is chosen from the quadrant (SL 3.5).

Dividing the identity by $\cos^{2}\theta$ (when $\cos\theta\ne0$) gives
$$
\tan^{2}\theta+1=\frac1{\cos^{2}\theta},
$$
which is the form $1+\tan^{2}\theta=\sec^{2}\theta$ met in AHL 3.9. Dividing by $\sin^{2}\theta$ gives $1+\dfrac1{\tan^{2}\theta}=\dfrac1{\sin^{2}\theta}$.

### The quotient identity

$$
\tan\theta=\frac{\sin\theta}{\cos\theta},\qquad\cos\theta\ne0.
$$
This is the definition of $\tan\theta$ from SL 3.5. Used to remove $\tan$: write all trigonometric functions in terms of $\sin$ and $\cos$.

### Double-angle identities

The following are in the formula booklet and must be understood:
$$
\sin2\theta=2\sin\theta\cos\theta,
$$
$$
\cos2\theta=\cos^{2}\theta-\sin^{2}\theta=2\cos^{2}\theta-1=1-2\sin^{2}\theta.
$$
The three forms of $\cos2\theta$ are connected by $\sin^{2}\theta+\cos^{2}\theta=1$: substituting $\sin^{2}\theta=1-\cos^{2}\theta$ in the first form gives the second, and substituting $\cos^{2}\theta=1-\sin^{2}\theta$ gives the third. The **choice of form** is the main skill: use $2\cos^{2}\theta-1$ when the rest of the expression involves $\cos\theta$, use $1-2\sin^{2}\theta$ when it involves $\sin\theta$, and use $\cos^{2}\theta-\sin^{2}\theta$ when factorising as a difference of squares.

*Where do they come from?* In SL, they are justified by the geometry of the unit circle and the area formula; in HL they are consequences of the compound-angle formulas (AHL 3.10) with $\alpha=\beta=\theta$: $\sin(\theta+\theta)=\sin\theta\cos\theta+\cos\theta\sin\theta$ and $\cos(\theta+\theta)=\cos^{2}\theta-\sin^{2}\theta$. A geometric proof of $\sin2\theta=2\sin\theta\cos\theta$: in an isosceles triangle with equal sides $1$ and apex angle $2\theta$, drop the altitude to the base; the half-base is $\sin\theta$, the altitude is $\cos\theta$, and the area is $\dfrac12\cdot2\sin\theta\cdot\cos\theta=\sin\theta\cos\theta$; the area formula $\dfrac12\cdot1\cdot1\cdot\sin2\theta$ gives the same area, so $\sin2\theta=2\sin\theta\cos\theta$.

### Using the double-angle identities

**(1) Evaluation.** Given $\sin\theta=\dfrac35$ with $\theta$ acute, then $\cos\theta=\dfrac45$ and $\sin2\theta=2\cdot\dfrac35\cdot\dfrac45=\dfrac{24}{25}$ and $\cos2\theta=1-2\cdot\dfrac9{25}=\dfrac7{25}$. Check: $\left(\dfrac{24}{25}\right)^{2}+\left(\dfrac7{25}\right)^{2}=\dfrac{576+49}{625}=1$ ✓.

**(2) Reverse use.** The relation $\cos2\theta=2\cos^{2}\theta-1$ gives $\cos^{2}\theta=\dfrac{1+\cos2\theta}2$ and $\sin^{2}\theta=\dfrac{1-\cos2\theta}2$. These *half-angle forms* find exact values: $\sin^{2}15^{\circ}=\dfrac{1-\cos30^{\circ}}2=\dfrac{2-\sqrt3}4$, so $\sin15^{\circ}=\dfrac{\sqrt{2-\sqrt3}}2\approx0.2588$ (positive because $15^{\circ}$ is in quadrant 1). They also let you find $\cos\theta$ from $\cos2\theta$ once the sign of $\cos\theta$ is known from the quadrant.

**(3) In an equation.** An equation such as $\cos2x=\sin x$ is converted to a quadratic in $\sin x$ using $\cos2x=1-2\sin^{2}x$: $1-2\sin^{2}x=\sin x$, so $2\sin^{2}x+\sin x-1=0$. This will be solved in SL 3.8.

**(4) Expressing in terms of one function.** $3\cos2\theta+5\sin\theta$ can be written $3(1-2\sin^{2}\theta)+5\sin\theta=3+5\sin\theta-6\sin^{2}\theta$, a quadratic in $\sin\theta$. This is useful to find a maximum value: with $s=\sin\theta\in[-1,1]$, you can use the vertex of the parabola.

**(5) Tangent in terms of $t=\tan\theta$.** From $\sin2\theta=\dfrac{2\sin\theta\cos\theta}{\sin^{2}\theta+\cos^{2}\theta}$ divide top and bottom by $\cos^{2}\theta$: $\sin2\theta=\dfrac{2\tan\theta}{1+\tan^{2}\theta}$. Likewise $\cos2\theta=\dfrac{1-\tan^{2}\theta}{1+\tan^{2}\theta}$. These are useful when $\tan\theta$ is given.

### Simplifying expressions

Simplification strategies:

1. Replace $\tan\theta$ by $\dfrac{\sin\theta}{\cos\theta}$ (and, in HL, $\cot$, $\sec$, $\csc$ by their definitions).
2. Replace $1-\cos^{2}\theta$ by $\sin^{2}\theta$ and $1-\sin^{2}\theta$ by $\cos^{2}\theta$.
3. Factorise (difference of squares, common factor).
4. Combine fractions over a common denominator.
5. Use the double-angle identities to convert $2\sin\theta\cos\theta$ into $\sin2\theta$ and so on.

### Proving identities

To **prove** an identity, show that the left-hand side (LHS) equals the right-hand side (RHS) for all values for which both are defined.

- **Start with the more complicated side** and simplify it to the other side.
- **Never treat the identity as an equation**: do not apply operations to both sides (this assumes what is to be proved). If you do want to work with both sides, simplify each separately to a common expression, and say so, and make every step reversible.
- State each identity used. Mark the end with "LHS = RHS" or $\blacksquare$.
- Where an expression has a denominator, note that the identity holds where the denominators are non-zero.

A typical proof: show $\dfrac{1-\cos2\theta}{\sin2\theta}=\tan\theta$. LHS $=\dfrac{1-(1-2\sin^{2}\theta)}{2\sin\theta\cos\theta}=\dfrac{2\sin^{2}\theta}{2\sin\theta\cos\theta}=\dfrac{\sin\theta}{\cos\theta}=\tan\theta$.

### Graphical and numerical checks

An identity can be tested: choose a value like $\theta=0.7$ and check with the calculator that both sides agree, or graph both sides and see that they coincide. This confirms that you have not made an algebra mistake, but it does not prove the identity. A single counterexample, however, disproves an identity.

## Worked examples

### Example 1 (double angle from a given ratio, 5 marks)

Given that $\sin\theta=\dfrac35$ and $\theta$ is acute, find the exact values of $\sin2\theta$ and $\cos2\theta$.

*Solution.* $\cos\theta=\sqrt{1-\dfrac9{25}}=\dfrac45$. Then $\sin2\theta=2\left(\dfrac35\right)\left(\dfrac45\right)=\dfrac{24}{25}$ and $\cos2\theta=1-2\left(\dfrac35\right)^{2}=1-\dfrac{18}{25}=\dfrac7{25}$.

Check: $\cos^{2}\theta-\sin^{2}\theta=\dfrac{16-9}{25}=\dfrac7{25}$ ✓.

### Example 2 (cosine given, 4 marks)

Given $\cos\theta=-\dfrac14$, find $\cos2\theta$.

*Solution.* $\cos2\theta=2\cos^{2}\theta-1=2\cdot\dfrac1{16}-1=-\dfrac78$. No quadrant is needed since only $\cos\theta$ appears.

### Example 3 (simplifying, 4 marks)

Simplify (a) $\dfrac{\sin\theta}{\tan\theta}$; (b) $\dfrac{1-\cos^{2}\theta}{\sin\theta}$; (c) $\dfrac{\sin2\theta}{2\cos\theta}$.

*Solution.* (a) $\dfrac{\sin\theta}{\sin\theta/\cos\theta}=\cos\theta$. (b) $\dfrac{\sin^{2}\theta}{\sin\theta}=\sin\theta$. (c) $\dfrac{2\sin\theta\cos\theta}{2\cos\theta}=\sin\theta$ (for $\cos\theta\ne0$).

### Example 4 (a proof, 5 marks)

Prove that $\dfrac{1-\cos2\theta}{\sin2\theta}=\tan\theta$.

*Proof.* LHS $=\dfrac{1-(1-2\sin^{2}\theta)}{2\sin\theta\cos\theta}=\dfrac{2\sin^{2}\theta}{2\sin\theta\cos\theta}=\dfrac{\sin\theta}{\cos\theta}=\tan\theta=$ RHS. $\blacksquare$

### Example 5 (a proof with fractions, 6 marks)

Prove that $\dfrac{\sin\theta}{1+\cos\theta}+\dfrac{1+\cos\theta}{\sin\theta}=\dfrac2{\sin\theta}$.

*Proof.* Combine over a common denominator: LHS $=\dfrac{\sin^{2}\theta+(1+\cos\theta)^{2}}{\sin\theta(1+\cos\theta)}=\dfrac{\sin^{2}\theta+1+2\cos\theta+\cos^{2}\theta}{\sin\theta(1+\cos\theta)}$. Using $\sin^{2}\theta+\cos^{2}\theta=1$ the numerator is $2+2\cos\theta=2(1+\cos\theta)$. So LHS $=\dfrac{2(1+\cos\theta)}{\sin\theta(1+\cos\theta)}=\dfrac2{\sin\theta}=$ RHS. $\blacksquare$

### Example 6 (a difference of squares, 4 marks)

Prove that $\cos^{4}\theta-\sin^{4}\theta=\cos2\theta$.

*Proof.* LHS $=(\cos^{2}\theta-\sin^{2}\theta)(\cos^{2}\theta+\sin^{2}\theta)=(\cos2\theta)(1)=\cos2\theta$. $\blacksquare$

### Example 7 (exact values with the half-angle form, 6 marks)

Find the exact value of $\sin15^{\circ}$.

*Solution.* $\cos30^{\circ}=1-2\sin^{2}15^{\circ}$, so $\sin^{2}15^{\circ}=\dfrac{1-\frac{\sqrt3}2}2=\dfrac{2-\sqrt3}4$. Since $15^{\circ}$ is acute, $\sin15^{\circ}>0$, so $\sin15^{\circ}=\dfrac{\sqrt{2-\sqrt3}}2$.

Check: $\dfrac{\sqrt{2-1.7321}}2=\dfrac{0.5176}2=0.2588$ and $\sin15^{\circ}=0.2588$ ✓.

### Example 8 (using the identity backwards, 5 marks)

Given that $\cos2\theta=\dfrac7{25}$ and $\theta$ is acute, find $\cos\theta$ and $\sin\theta$.

*Solution.* $2\cos^{2}\theta-1=\dfrac7{25}$, so $\cos^{2}\theta=\dfrac12\left(1+\dfrac7{25}\right)=\dfrac{16}{25}$ and $\cos\theta=\dfrac45$ (positive since $\theta$ is acute). Then $\sin\theta=\sqrt{1-\dfrac{16}{25}}=\dfrac35$.

### Example 9 (in terms of $\tan\theta$, 4 marks)

Given $\tan\theta=\dfrac34$, find $\sin2\theta$.

*Solution.* $\sin2\theta=\dfrac{2\tan\theta}{1+\tan^{2}\theta}=\dfrac{3/2}{1+9/16}=\dfrac{3/2}{25/16}=\dfrac{24}{25}$.

### Example 10 (rewriting as a quadratic, 4 marks)

Write $3\cos2\theta+5\sin\theta$ in terms of $\sin\theta$ only.

*Solution.* Use $\cos2\theta=1-2\sin^{2}\theta$: $3(1-2\sin^{2}\theta)+5\sin\theta=3+5\sin\theta-6\sin^{2}\theta$.

### Example 11 (a reciprocal-sum identity, 5 marks)

Prove that $\dfrac1{1+\cos\theta}+\dfrac1{1-\cos\theta}=\dfrac2{\sin^{2}\theta}$.

*Proof.* LHS $=\dfrac{(1-\cos\theta)+(1+\cos\theta)}{(1+\cos\theta)(1-\cos\theta)}=\dfrac2{1-\cos^{2}\theta}=\dfrac2{\sin^{2}\theta}$. $\blacksquare$

### Example 12 (a tangent identity, 5 marks)

Prove that $\tan\theta+\dfrac1{\tan\theta}=\dfrac2{\sin2\theta}$.

*Proof.* LHS $=\dfrac{\sin\theta}{\cos\theta}+\dfrac{\cos\theta}{\sin\theta}=\dfrac{\sin^{2}\theta+\cos^{2}\theta}{\sin\theta\cos\theta}=\dfrac1{\sin\theta\cos\theta}=\dfrac2{2\sin\theta\cos\theta}=\dfrac2{\sin2\theta}$. $\blacksquare$

### Example 13 (a numerical check, 3 marks)

Test the identity of Example 4 at $\theta=0.7$.

*Solution.* $1-\cos1.4=1-0.16997=0.83003$ and $\sin1.4=0.98545$, so the ratio is $0.84228$. Also $\tan0.7=0.84229$. These agree to the precision of the arithmetic ✓.

## Using your GDC

The GDC is useful for *checking* identities, not for proving them. Graph the left side as $Y_1$ and the right side as $Y_2$ in radian mode: if the graphs coincide (the second one traces over the first), the identity is plausible, and if they differ, one of your steps is wrong. A table with several values of $\theta$ is a quick numeric check. For exact-value questions, the GDC confirms a decimal: for example the decimal of $\dfrac{\sqrt{2-\sqrt3}}2$ should match $\sin15^{\circ}$. Remember that $\sin^{2}\theta$ must be entered as $(\sin\theta)^{2}$, and watch the mode. Some GDCs have a symbolic engine that simplifies expressions or expands $\sin2x$; this can be used for checking, but the proof you write must show the steps. Menu names vary by model. For finding the maximum of an expression such as $3\cos2\theta+5\sin\theta$, plot it and use the *maximum* tool.

## Common mistakes

1. **Treating a proof as an equation**, applying operations to both sides (such as squaring or cross-multiplying) and thereby assuming the result.
2. **Writing $\sin^{2}\theta$ as $\sin\theta^{2}$** or $\sin(\theta^{2})$.
3. **Incorrect double-angle forms**, such as $\sin2\theta=2\sin\theta$ or $\cos2\theta=2\cos\theta$.
4. **Choosing the wrong form of $\cos2\theta$**, which leaves a mixture of $\sin$ and $\cos$ that cannot be simplified.
5. **Sign errors when taking square roots**: forgetting to check the quadrant of $\theta$.
6. **Cancelling terms instead of factors**, such as cancelling $\cos\theta$ in $\dfrac{1+\cos\theta}{\cos\theta}$.
7. **Using decimals in an "exact value" question**, or assuming an identity from a numeric test.
8. **Dividing by $\cos\theta$ or $\sin\theta$** without noting where it is zero.

## Exam technique and command terms

**Prove** or **show that** requires a logical chain from one side to the other. **Hence** means use the previous result, usually an identity. **Simplify** requires a single expression in its simplest form. **Find the exact value** requires surds. **Express in terms of** requires a particular variable only. For a proof, rewrite in $\sin$ and $\cos$, look for the difference of squares, use $\sin^{2}+\cos^{2}=1$ in the form that matches the denominator, and aim at the other side. Write "LHS" and "RHS" explicitly. If you get stuck on the left side, try the right side and meet in the middle: simplify each to a common expression, writing "LHS $=\dots=$ RHS" with the same final expression.

When an identity is used in a longer problem, such as solving an equation or finding an integral later, note the form you choose and why. In exact-value questions, state the quadrant reasoning for the sign. For questions with a given ratio, draw the right-angled triangle first.

## Connections

SL 3.5 provided the unit circle, from which $\sin^{2}\theta+\cos^{2}\theta=1$ and the signs in each quadrant follow directly. SL 3.2 gave the area formula used in the geometric proof of $\sin2\theta$, and SL 2.7 gave quadratic techniques that are needed when an identity converts an equation into a quadratic in $\sin x$ or $\cos x$. SL 3.8 solves such equations. In AHL 3.9, the reciprocal functions $\sec$, $\csc$, $\cot$ give the identities $1+\tan^{2}\theta=\sec^{2}\theta$ and $1+\cot^{2}\theta=\csc^{2}\theta$, in AHL 3.10 compound-angle identities generalise the double-angle forms and give $\tan2\theta$, and in AHL 3.11 the inverse functions $\arcsin$ and others have their own relationships. In AHL 1.13, de Moivre's theorem reproduces the double-angle identities by expanding $(\cos\theta+i\sin\theta)^{2}$. In Unit 5, $\int\cos^{2}x\,dx$ and $\int\sin^{2}x\,dx$ are evaluated with $\cos^{2}x=\dfrac{1+\cos2x}2$ and $\sin^{2}x=\dfrac{1-\cos2x}2$, and the product rule on $\sin x\cos x$ gives $\cos2x$. In Unit 4, there is no direct use, but the identity underlies the independence of the sine and cosine components in a periodic model.

## Check your understanding

1. Given $\cos\theta=\dfrac5{13}$ and $\theta$ acute, find the exact values of $\sin2\theta$ and $\cos2\theta$.
2. Given $\sin\theta=-\dfrac35$ and $\pi<\theta<\dfrac{3\pi}2$, find $\sin2\theta$ and $\cos2\theta$.
3. Simplify $\dfrac{\sin2\theta}{1+\cos2\theta}$.
4. Prove that $\dfrac{1+\cos2\theta}{\sin2\theta}=\dfrac1{\tan\theta}$.
5. Prove that $\sin^{4}\theta-\cos^{4}\theta=-\cos2\theta$.
6. Write $\cos2\theta+3\sin\theta$ in terms of $\sin\theta$ only.
7. Find the exact value of $\sin\dfrac\pi8$.
8. Given $\cos2\theta=-\dfrac7{25}$ and $\dfrac\pi2<\theta<\pi$, find $\cos\theta$ and $\sin\theta$.
9. Prove that $\dfrac1{1-\sin\theta}+\dfrac1{1+\sin\theta}=\dfrac2{\cos^{2}\theta}$.
10. Prove that $(\cos\theta-\sin\theta)^{2}=1-\sin2\theta$.

### Answers

1. $\sin\theta=\dfrac{12}{13}$. $\sin2\theta=2\cdot\dfrac{12}{13}\cdot\dfrac5{13}=\dfrac{120}{169}$ and $\cos2\theta=2\cdot\dfrac{25}{169}-1=-\dfrac{119}{169}$.
2. $\cos\theta=-\dfrac45$ (quadrant 3). $\sin2\theta=2\left(-\dfrac35\right)\left(-\dfrac45\right)=\dfrac{24}{25}$ and $\cos2\theta=1-2\cdot\dfrac9{25}=\dfrac7{25}$.
3. $\dfrac{2\sin\theta\cos\theta}{2\cos^{2}\theta}=\dfrac{\sin\theta}{\cos\theta}=\tan\theta$.
4. LHS $=\dfrac{2\cos^{2}\theta}{2\sin\theta\cos\theta}=\dfrac{\cos\theta}{\sin\theta}=\dfrac1{\tan\theta}$. $\blacksquare$
5. LHS $=(\sin^{2}\theta-\cos^{2}\theta)(\sin^{2}\theta+\cos^{2}\theta)=-(\cos^{2}\theta-\sin^{2}\theta)=-\cos2\theta$. $\blacksquare$
6. $1-2\sin^{2}\theta+3\sin\theta$.
7. $\sin^{2}\dfrac\pi8=\dfrac{1-\cos(\pi/4)}2=\dfrac{1-\frac{\sqrt2}2}2=\dfrac{2-\sqrt2}4$, so $\sin\dfrac\pi8=\dfrac{\sqrt{2-\sqrt2}}2\approx0.383$.
8. $\cos^{2}\theta=\dfrac12\left(1-\dfrac7{25}\right)=\dfrac9{25}$, and $\cos$ is negative in quadrant 2, so $\cos\theta=-\dfrac35$ and $\sin\theta=\dfrac45$.
9. LHS $=\dfrac{(1+\sin\theta)+(1-\sin\theta)}{1-\sin^{2}\theta}=\dfrac2{\cos^{2}\theta}$. $\blacksquare$
10. LHS $=\cos^{2}\theta-2\sin\theta\cos\theta+\sin^{2}\theta=1-\sin2\theta$. $\blacksquare$

## Summary

- $\sin^{2}\theta+\cos^{2}\theta=1$ (unit circle), so $1+\tan^{2}\theta=\frac1{\cos^{2}\theta}$; $\tan\theta=\frac{\sin\theta}{\cos\theta}$.
- Double angle: $\sin2\theta=2\sin\theta\cos\theta$ and $\cos2\theta=\cos^{2}\theta-\sin^{2}\theta=2\cos^{2}\theta-1=1-2\sin^{2}\theta$; choose the form that matches the rest of the expression.
- Reverse: $\cos^{2}\theta=\frac{1+\cos2\theta}2$ and $\sin^{2}\theta=\frac{1-\cos2\theta}2$, which give exact values such as $\sin15^{\circ}$ and $\sin\frac\pi8$.
- In terms of $\tan\theta$: $\sin2\theta=\frac{2\tan\theta}{1+\tan^{2}\theta}$.
- Proofs: work from the more complicated side, write in $\sin$ and $\cos$, use factorising and the Pythagorean identity, never treat the identity as an equation.
- Always determine the sign of a square root from the quadrant.
