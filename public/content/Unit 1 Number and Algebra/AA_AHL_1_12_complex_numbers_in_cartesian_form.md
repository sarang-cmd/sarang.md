# Complex numbers in Cartesian form

> **AHL 1.12 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define the imaginary unit $i$ with $i^{2}=-1$, and write a complex number in Cartesian form $z=a+bi$ with real part $\operatorname{Re}(z)=a$ and imaginary part $\operatorname{Im}(z)=b$;
- add, subtract, multiply and divide complex numbers, using the conjugate to divide;
- find the complex conjugate $z^{*}$ and the modulus $|z|$, and use the identity $zz^{*}=|z|^{2}$;
- represent complex numbers on an Argand diagram and interpret addition, conjugation and multiplication by $i$ geometrically;
- solve quadratic equations with a negative discriminant;
- solve equations in which $z$ and $z^{*}$ both appear, by equating real and imaginary parts;
- find the square roots of a complex number, and evaluate powers of $i$ and small powers of complex numbers;
- present exact answers and check them by substitution.

## Why this topic matters

For centuries mathematicians were uncomfortable with the square root of a negative number. Then, in the sixteenth century, solving cubic equations made it unavoidable: Cardano's formula sometimes passes through $\sqrt{-1}$ even when all three roots of the cubic are real. The resolution was to accept a new number $i$ with $i^{2}=-1$ and to discover that the extended system follows the same algebraic rules as the real numbers. Complex numbers are now essential in electrical engineering (alternating current), quantum mechanics, signal processing and fluid dynamics. In the IB course they are the gateway to AHL 1.13 (polar and Euler form), AHL 1.14 (roots of polynomials), AHL 3.x (rotations and trigonometry) and differential equations in Unit 5. Examination questions on this chapter are algebraic and highly mechanical, so they reward accuracy. Mastery means clean arithmetic with $i^{2}=-1$, a fluent conjugate method for division, and careful solution of real-and-imaginary simultaneous equations.

## Core ideas

### The imaginary unit and the complex numbers

Define $i$ by $i^{2}=-1$. A **complex number** is an expression $z=a+bi$ where $a,b\in\mathbb{R}$; the set of all of them is $\mathbb{C}$. We call $a=\operatorname{Re}(z)$ the **real part** and $b=\operatorname{Im}(z)$ the **imaginary part**. Note that $\operatorname{Im}(z)$ is the real number $b$, *not* $bi$. If $b=0$ the number is real, and if $a=0$ it is **purely imaginary**. Two complex numbers are equal exactly when their real parts are equal and their imaginary parts are equal. This simple fact is the engine behind most equation-solving in this chapter: one complex equation gives *two* real equations.

The powers of $i$ cycle with period four: $i^{1}=i$, $i^{2}=-1$, $i^{3}=-i$, $i^{4}=1$, and then repeat. To evaluate $i^{n}$ divide $n$ by $4$ and use the remainder. For example $2026=4\times506+2$, so $i^{2026}=i^{2}=-1$.

### Arithmetic

Addition and subtraction work on real and imaginary parts separately: $(a+bi)\pm(c+di)=(a\pm c)+(b\pm d)i$. Multiplication uses the distributive law and $i^{2}=-1$:
$$
(a+bi)(c+di)=ac+adi+bci+bdi^{2}=(ac-bd)+(ad+bc)i.
$$
There is no need to memorise this; expand the brackets and replace $i^{2}$ by $-1$. For powers, such as $(1+i)^{2}=1+2i+i^{2}=2i$, expand carefully, or use repeated squaring: $(1+i)^{8}=\left((1+i)^{2}\right)^{4}=(2i)^{4}=16$. Beware that $(a+bi)^{2}=a^{2}-b^{2}+2abi$, not $a^{2}+b^{2}i^{2}$ or $a^{2}-b^{2}$.

### Conjugate and modulus

The **complex conjugate** of $z=a+bi$ is $z^{*}=a-bi$ (also written $\bar z$). It changes the sign of the imaginary part. Key properties:

- $(z+w)^{*}=z^{*}+w^{*}$ and $(zw)^{*}=z^{*}w^{*}$;
- $z+z^{*}=2\operatorname{Re}(z)$ and $z-z^{*}=2i\operatorname{Im}(z)$;
- $zz^{*}=(a+bi)(a-bi)=a^{2}+b^{2}$, a *real* non-negative number.

The **modulus** is $|z|=\sqrt{a^{2}+b^{2}}$, the distance from the origin on the Argand diagram, so $zz^{*}=|z|^{2}$. The modulus is multiplicative: $|zw|=|z||w|$ and $\left|\dfrac zw\right|=\dfrac{|z|}{|w|}$.

### Division

To divide, multiply numerator and denominator by the conjugate of the denominator, which makes the denominator real:
$$
\frac{a+bi}{c+di}=\frac{(a+bi)(c-di)}{(c+di)(c-di)}=\frac{(a+bi)(c-di)}{c^{2}+d^{2}}.
$$
This is the same idea as rationalising a surd denominator in SL 1.1: multiply by the conjugate to remove the "bad" part. In particular, $\dfrac1z=\dfrac{z^{*}}{|z|^{2}}$.

### The Argand diagram

Plot $z=a+bi$ as the point $(a,b)$ in the plane, with the real axis horizontal and the imaginary axis vertical. This is the **Argand diagram**. Geometrically:

- adding complex numbers is vector addition (the parallelogram rule);
- the conjugate $z^{*}$ is the reflection of $z$ in the real axis;
- $|z|$ is the distance from the origin and $|z-w|$ is the distance between the points $z$ and $w$;
- multiplying by $i$ rotates a point by $90^{\circ}$ anticlockwise about the origin: $i(a+bi)=-b+ai$ sends $(a,b)$ to $(-b,a)$.

These pictures are a good way to check an answer for plausibility, and they motivate the polar form of AHL 1.13.

### Quadratic equations with complex roots

If $b^{2}-4ac<0$ then $ax^{2}+bx+c=0$ has no real roots, but the quadratic formula still gives two *complex* roots. Write $\sqrt{-k}=i\sqrt{k}$ for $k>0$ (with the principal value). For example, $z^{2}-4z+13=0$ has $\Delta=16-52=-36$, so $z=\dfrac{4\pm6i}{2}=2\pm3i$. When the coefficients are real the roots come in conjugate pairs, which is the topic of AHL 1.14, and checking that your two roots are conjugates is a free correctness test.

### Equations involving $z$ and $z^{*}$

Write $z=x+yi$ with $x,y$ real, substitute, expand, and equate real and imaginary parts to form two simultaneous real equations. That is the universal method. Be sure to use *different* letters for the real and imaginary parts and to state at the end the complex number $z$.

### Square roots of complex numbers

To find $\sqrt{p+qi}$, assume $(x+yi)^{2}=p+qi$, so $x^{2}-y^{2}=p$ and $2xy=q$. Solve this pair (usually by substituting $y=\dfrac q{2x}$ or by guessing integer solutions), noting that $x,y$ are real. There are always two roots, one the negative of the other. As a check, the modulus should satisfy $x^{2}+y^{2}=\sqrt{p^{2}+q^{2}}$.

## Worked examples

### Example 1 (multiplication, 3 marks)

Calculate $(3+2i)(1-4i)$.

*Solution.* $(3+2i)(1-4i)=3-12i+2i-8i^{2}=3-10i+8=11-10i$.

### Example 2 (division, 4 marks)

Write $\dfrac{5+i}{2-3i}$ in the form $a+bi$.

*Solution.* Multiply by the conjugate of the denominator: $\dfrac{(5+i)(2+3i)}{(2-3i)(2+3i)}=\dfrac{10+15i+2i+3i^{2}}{4+9}=\dfrac{7+17i}{13}=\dfrac7{13}+\dfrac{17}{13}i$.

Check: $\left(\dfrac{7+17i}{13}\right)(2-3i)=\dfrac{14-21i+34i+51}{13}=\dfrac{65+13i}{13}=5+i$ ✓.

### Example 3 (quadratic, 4 marks)

Solve $z^{2}-4z+13=0$.

*Solution.* The discriminant is $(-4)^{2}-4(1)(13)=-36$. So $z=\dfrac{4\pm\sqrt{-36}}{2}=\dfrac{4\pm6i}{2}=2\pm3i$.

Check: the sum of the roots is $4$ and the product is $(2+3i)(2-3i)=13$, matching $-\dfrac ba$ and $\dfrac ca$ ✓.

### Example 4 (an equation with $z$ and $z^{*}$, 5 marks)

Solve $3z-2z^{*}=5+10i$ for $z$.

*Solution.* Let $z=x+yi$. Then $3(x+yi)-2(x-yi)=x+5yi$. Equating with $5+10i$: $x=5$ and $5y=10$, so $y=2$. Hence $z=5+2i$.

Check: $3(5+2i)-2(5-2i)=15+6i-10+4i=5+10i$ ✓.

### Example 5 (square roots, 6 marks)

Find the square roots of $3+4i$.

*Solution.* Let $(x+yi)^{2}=3+4i$. Then $x^{2}-y^{2}=3$ and $2xy=4$, so $y=\dfrac2x$. Substituting: $x^{2}-\dfrac4{x^{2}}=3$, so $x^{4}-3x^{2}-4=0$ and $(x^{2}-4)(x^{2}+1)=0$. Since $x$ is real, $x^{2}=4$, giving $x=\pm2$ and $y=\pm1$ respectively. The square roots are $2+i$ and $-2-i$.

Check: $(2+i)^{2}=4+4i-1=3+4i$ ✓.

### Example 6 (powers of $i$, 3 marks)

Evaluate (a) $i^{2026}$; (b) $(1+i)^{8}$.

*Solution.* (a) $2026\equiv2\pmod4$, so $i^{2026}=i^{2}=-1$. (b) $(1+i)^{2}=2i$, so $(1+i)^{8}=(2i)^{4}=16i^{4}=16$.

### Example 7 (a condition on a parameter, 5 marks)

Find the real value of $p$ for which $\dfrac{2+pi}{1-i}$ is purely imaginary.

*Solution.* $\dfrac{(2+pi)(1+i)}{(1-i)(1+i)}=\dfrac{2+2i+pi+pi^{2}}{2}=\dfrac{(2-p)+(2+p)i}{2}$. For this to be purely imaginary the real part must vanish: $2-p=0$, so $p=2$.

Check: $\dfrac{2+2i}{1-i}=\dfrac{(2+2i)(1+i)}{2}=\dfrac{2+2i+2i-2}{2}=2i$ ✓.

### Example 8 (modulus and a product, 4 marks)

Let $z=1+i$ and $w=2-i$. Verify that $|zw|=|z||w|$.

*Solution.* $zw=2-i+2i-i^{2}=3+i$, so $|zw|=\sqrt{10}$. Also $|z|=\sqrt2$ and $|w|=\sqrt5$, so $|z||w|=\sqrt{10}$ ✓.

### Example 9 (a real polynomial with a complex root, 5 marks)

The quadratic $z^{2}+bz+c=0$ has real coefficients and one root $1+2i$. Find $b$ and $c$.

*Solution.* For real coefficients the other root is the conjugate $1-2i$. The sum of the roots is $2=-b$, so $b=-2$. The product is $(1+2i)(1-2i)=5=c$. So $z^{2}-2z+5=0$.

### Example 10 (the geometry of $i$, 3 marks)

The point $A$ represents $z=3+2i$ on an Argand diagram. State the complex number represented by the rotation of $A$ through $90^{\circ}$ anticlockwise about the origin, and by the reflection of $A$ in the real axis.

*Solution.* Rotation: $iz=3i+2i^{2}=-2+3i$. Reflection: $z^{*}=3-2i$.

### Example 11 (using the modulus identity, 5 marks)

Given that $z=2+3i$, find $z^{2}$, $z z^{*}$ and $\dfrac{z}{z^{*}}$ in the form $a+bi$.

*Solution.* $z^{2}=4+12i+9i^{2}=-5+12i$. Next $zz^{*}=(2+3i)(2-3i)=4+9=13=|z|^{2}$. Finally $\dfrac{z}{z^{*}}=\dfrac{z\cdot z}{z^{*}z}=\dfrac{z^{2}}{13}=-\dfrac5{13}+\dfrac{12}{13}i$. Notice that the answer has modulus $\sqrt{\dfrac{25+144}{169}}=1$, as it must, since $|z|=|z^{*}|$.

The shortcut of multiplying top and bottom by $z$ (the conjugate of the denominator $z^{*}$) saved a full expansion, and recognising such structures is worth practice.

## Using your GDC

On the IB examination, most GDCs support complex arithmetic. Switch the mode to *complex* (or *rectangular complex*), after which expressions like $(3+2i)(1-4i)$ and $\dfrac{5+i}{2-3i}$ evaluate directly, often as decimals. The calculator can also give $|z|$ (absolute value), $\operatorname{conj}(z)$, $\operatorname{Re}$, $\operatorname{Im}$ and the argument. Many models can solve a polynomial with complex roots in the polynomial solver, which is valuable for checking answers to quadratics and cubics. However, if the question asks for *exact* values, the decimal form is not enough: leave fractions and surds in exact form, as in Example 2. Equations involving $z^{*}$ usually need manual working because the solver treats $z$ as a single variable, so you will use the calculator to *check*. Always confirm the mode, since an answer like $\mathrm{Error}$ for $\sqrt{-36}$ means you are in real mode. Menu names vary by model.

## Common mistakes

1. **Writing $\sqrt{-a}\,\sqrt{-b}=\sqrt{ab}$.** This fails for negative numbers: $\sqrt{-4}\cdot\sqrt{-9}=2i\cdot3i=-6$, not $6$. Always convert to $i$ first.
2. **Forgetting $i^{2}=-1$** during expansion, leaving a term with $i^{2}$ in the answer.
3. **Not using the conjugate for division**, or conjugating the numerator instead of the denominator.
4. **Squaring incorrectly:** $(a+bi)^{2}\ne a^{2}+b^{2}i^{2}$; there is a middle term $2abi$.
5. **Giving $\operatorname{Im}(z)$ as $bi$** instead of $b$.
6. **Confusing modulus with the complex number**, for example $|3+4i|=5+0i$ is fine but $|3+4i|=3+4$ is wrong.
7. **Losing the second square root** when solving $w^{2}=z$; there are always two, $\pm w$.
8. **Mixing $x$ and $y$ with $z$** in an equation: after substituting $z=x+yi$, work only with real unknowns until the end.

## Exam technique and command terms

**Write in the form $a+bi$** means a single real part and a single imaginary part with no $i$ in a denominator. **Find the modulus** gives a real, non-negative number. **Solve** over $\mathbb{C}$ means find *all* roots, so a quadratic gives two. **Show that** for a complex division requires the conjugate step to be visible. When a question gives an equation involving $z$ and $z^{*}$, the standard start is "Let $z=x+yi$", and equating real and imaginary parts earns separate marks.

The marks are usually M1 for a correct multiplication by the conjugate, A1 for the numerator, A1 for the denominator, and A1 for the final form. A small arithmetic slip loses one mark, not all, so *show every line*. Verify by substitution when time permits, particularly for a square root: squaring the proposed root takes ten seconds. If a question is in a context (such as impedance), include units.

## Connections

SL 1.1 introduced rationalising a denominator by its conjugate surd; the same trick is used here for division. SL 2.7 (quadratic equations) is extended: the discriminant now describes *which kind* of roots you get, and AHL 1.14 shows that for real coefficients complex roots occur in conjugate pairs. AHL 1.13 re-expresses $z$ by its modulus and argument, so that multiplication becomes a scaling and a rotation, and Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$ ties complex numbers to trigonometry (Unit 3). In AHL 3.x vectors, a rotation by $90^{\circ}$ in the plane corresponds to multiplication by $i$. In Unit 5, complex numbers appear in solving second-order differential equations with oscillating solutions, and in Maclaurin series for $e^{ix}$. The Argand diagram is also the first example of a plane representing algebraic objects, an idea that returns in linear algebra (AHL 1.16) when systems of equations are interpreted as intersecting planes.

## Check your understanding

1. Calculate $(2-3i)(5+i)$.
2. Write $\dfrac{4+3i}{1+2i}$ in the form $a+bi$.
3. Solve $z^{2}+2z+10=0$.
4. Find the square roots of $-5+12i$.
5. Solve $2z-z^{*}=3+6i$.
6. Evaluate $i^{2027}$.
7. Find $|3-4i|$ and write $\dfrac1{3-4i}$ in the form $a+bi$.
8. Calculate $(1-i)^{6}$.
9. Find the real $p$ for which $\dfrac{p+3i}{2-i}$ is real.
10. Find all complex $z$ such that $z^{2}=-8+6i$.

### Answers

1. $10+2i-15i-3i^{2}=13-13i$.
2. $\dfrac{(4+3i)(1-2i)}{5}=\dfrac{4-8i+3i+6}{5}=\dfrac{10-5i}{5}=2-i$.
3. $\Delta=4-40=-36$, so $z=\dfrac{-2\pm6i}{2}=-1\pm3i$.
4. $(2+3i)^{2}=4+12i-9=-5+12i$, so the roots are $2+3i$ and $-2-3i$.
5. With $z=x+yi$: $2x+2yi-x+yi=x+3yi=3+6i$, so $x=3$, $y=2$, and $z=3+2i$.
6. $2027\equiv3\pmod4$, so $i^{2027}=i^{3}=-i$.
7. $|3-4i|=5$ and $\dfrac1{3-4i}=\dfrac{3+4i}{25}=\dfrac3{25}+\dfrac4{25}i$.
8. $(1-i)^{2}=-2i$, so $(1-i)^{6}=(-2i)^{3}=-8i^{3}=8i$.
9. $\dfrac{(p+3i)(2+i)}{5}=\dfrac{(2p-3)+(p+6)i}{5}$. For this to be real, $p+6=0$, so $p=-6$ (and the value is $-3$).
10. $(1+3i)^{2}=1+6i-9=-8+6i$, so $z=1+3i$ or $z=-1-3i$.

## Summary

- $i^{2}=-1$; $z=a+bi$ with $\operatorname{Re}(z)=a$ and $\operatorname{Im}(z)=b$ (a real number).
- Equal complex numbers have equal real parts and equal imaginary parts, so one complex equation gives two real ones.
- Multiply by expanding with $i^{2}=-1$; divide by multiplying by the conjugate of the denominator.
- $z^{*}=a-bi$, $zz^{*}=|z|^{2}=a^{2}+b^{2}$, and $|zw|=|z||w|$.
- On the Argand diagram, conjugation is reflection in the real axis and multiplication by $i$ is a quarter-turn.
- Quadratics with $\Delta<0$ have two conjugate complex roots; $w^{2}=z$ has two solutions $\pm w$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists Cartesian representation of complex numbers under AHL 1.12. Derive and justify all other steps and conditions.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
