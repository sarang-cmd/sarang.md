# Polar and Euler form

> **AHL 1.13 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define the modulus $r=|z|$ and the argument $\theta=\arg z$ of a complex number, using the principal argument $-\pi<\theta\le\pi$;
- convert between Cartesian form $a+bi$, modulus-argument (polar) form $r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta$ and Euler form $re^{i\theta}$;
- choose the correct quadrant for the argument, including for negative real and purely imaginary numbers;
- multiply and divide complex numbers in polar and Euler form, and interpret the results as a scaling and a rotation;
- raise a complex number to an integer power using the polar form;
- derive $\cos\theta$ and $\sin\theta$ expressions from $e^{i\theta}$, and use identities such as $e^{i\pi}+1=0$;
- find exact trigonometric values by comparing Cartesian and polar forms.

## Why this topic matters

The Cartesian form $a+bi$ is ideal for addition but clumsy for multiplication. The polar form is ideal for multiplication and powers but clumsy for addition. A good mathematician moves between them freely, choosing the one that fits the operation. The polar form also reveals what complex multiplication *does* geometrically: it stretches and rotates the plane. This single idea explains alternating current phasors, the rotation matrices of computer graphics, and the behaviour of oscillating systems. Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$ then unifies exponentials with trigonometry, and it is often called the most beautiful identity in mathematics since it yields $e^{i\pi}+1=0$. In the IB course, this chapter underpins roots of complex numbers (AHL 1.14), proof by induction of de Moivre's theorem (AHL 1.15), compound-angle identities (AHL 3.10) and solutions of differential equations (Unit 5). Questions are typically a mix of exact conversions and short geometric explanations, so you must be careful with the *argument*.

## Core ideas

### Modulus and argument

Plot $z=a+bi$ as the point $(a,b)$ on the Argand diagram. The **modulus** is the distance from the origin, $r=|z|=\sqrt{a^{2}+b^{2}}$. The **argument** $\theta=\arg z$ is the angle between the positive real axis and the line from the origin to $z$, measured anticlockwise. Because adding $2\pi$ to an angle gives the same direction, the argument is only determined up to multiples of $2\pi$. The **principal argument** is the one in $(-\pi,\pi]$, which is the convention used in the examination unless told otherwise. It follows that:
$$
a=r\cos\theta,\qquad b=r\sin\theta,\qquad r=\sqrt{a^{2}+b^{2}},\qquad \tan\theta=\frac ba\ (a\ne0).
$$
The argument of $0$ is undefined.

### Finding the argument safely

The relation $\tan\theta=\dfrac ba$ has two solutions in $(-\pi,\pi]$, and the calculator's $\tan^{-1}$ returns only one, which lies in $\left(-\dfrac\pi2,\dfrac\pi2\right)$. That is correct for $a>0$ but wrong by $\pi$ for $a<0$. The safe method is:

1. Sketch the point and identify its quadrant.
2. Compute the acute **reference angle** $\alpha=\tan^{-1}\left|\dfrac ba\right|$.
3. Then $\theta=\alpha$ (quadrant I), $\pi-\alpha$ (quadrant II), $-(\pi-\alpha)$ (quadrant III) or $-\alpha$ (quadrant IV).

Special cases: positive real numbers have $\theta=0$, negative reals have $\theta=\pi$, positive imaginary numbers have $\theta=\dfrac\pi2$, and negative imaginary numbers have $\theta=-\dfrac\pi2$. Every year candidates lose marks for giving $\arg(-3-3i)=\dfrac\pi4$ instead of $-\dfrac{3\pi}4$, so always sketch.

### Polar and Euler forms

Substituting $a=r\cos\theta$ and $b=r\sin\theta$ into $z=a+bi$ gives the **modulus-argument form** (or polar form)
$$
z=r(\cos\theta+i\sin\theta)=r\operatorname{cis}\theta.
$$
**Euler's formula** states that $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$ (with $\theta$ in radians), so the same number is written in the **Euler form** $z=re^{i\theta}$. You should accept Euler's formula as a definition at this level; a proof by Maclaurin series appears in Unit 5, where the series for $e^{x}$, $\cos x$ and $\sin x$ are compared. Setting $\theta=\pi$ gives $e^{i\pi}=-1$, hence $e^{i\pi}+1=0$. Taking the real and imaginary parts, and using the symmetry $\cos(-\theta)=\cos\theta$ and $\sin(-\theta)=-\sin\theta$, we obtain
$$
\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2},\qquad \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}.
$$
Note that $|e^{i\theta}|=\sqrt{\cos^{2}\theta+\sin^{2}\theta}=1$, so $e^{i\theta}$ always lies on the unit circle.

### Multiplication and division

Let $z=r_1e^{i\theta_1}$ and $w=r_2e^{i\theta_2}$. Using the law of exponents, which is consistent with the compound-angle identities,
$$
zw=r_1r_2\,e^{i(\theta_1+\theta_2)},\qquad \frac zw=\frac{r_1}{r_2}\,e^{i(\theta_1-\theta_2)}.
$$
So **moduli multiply (or divide) and arguments add (or subtract)**: $|zw|=|z||w|$ and $\arg(zw)=\arg z+\arg w$ up to a multiple of $2\pi$. The result of an addition of arguments may leave the interval $(-\pi,\pi]$, in which case you add or subtract $2\pi$ to restore the principal value.

To see why this is consistent with the compound-angle identities, multiply $(\cos\alpha+i\sin\alpha)(\cos\beta+i\sin\beta)$ out: the real part is $\cos\alpha\cos\beta-\sin\alpha\sin\beta=\cos(\alpha+\beta)$ and the imaginary part is $\sin\alpha\cos\beta+\cos\alpha\sin\beta=\sin(\alpha+\beta)$. In fact, the formula for multiplication in polar form is the proof of the compound-angle identities in disguise.

### Geometric meaning

Multiplying $z$ by $w=r\operatorname{cis}\theta$ **scales** by $r$ and **rotates** by $\theta$ anticlockwise about the origin. This explains why multiplication by $i=\operatorname{cis}\dfrac\pi2$ is a quarter-turn, and multiplication by $-1=\operatorname{cis}\pi$ is a half-turn. Division by $w$ scales by $\dfrac1r$ and rotates by $-\theta$. The conjugate has $|z^{*}|=|z|$ and $\arg z^{*}=-\arg z$, because it reflects $z$ in the real axis. Notice also that $zz^{*}=r^{2}e^{i\theta}e^{-i\theta}=r^{2}$, and $\dfrac1z=\dfrac1re^{-i\theta}$.

### Powers

Repeated multiplication gives, for a positive integer $n$,
$$
z^{n}=\left(re^{i\theta}\right)^{n}=r^{n}e^{in\theta}=r^{n}\left(\cos n\theta+i\sin n\theta\right).
$$
The formula $(\cos\theta+i\sin\theta)^{n}=\cos n\theta+i\sin n\theta$ is **de Moivre's theorem**, whose proof by induction appears in AHL 1.15 and whose extension to roots is in AHL 1.14. For negative integers $n$ the same formula holds, because $\dfrac1z$ has modulus $\dfrac1r$ and argument $-\theta$. Raising to a high power is vastly quicker in polar form: $(1+i)^{10}$ has modulus $\left(\sqrt2\right)^{10}=32$ and argument $\dfrac{10\pi}4=\dfrac{5\pi}2\equiv\dfrac\pi2$, so the result is $32i$, avoiding ten multiplications.

### Choosing a form

- **Add or subtract:** use Cartesian.
- **Multiply, divide or raise to a power:** use polar or Euler.
- **Give an answer:** use the form the question asks for, usually exact. If the form is not specified, give the Cartesian form for a simple result and the Euler form when the angle is not a simple one.

## Worked examples

### Example 1 (Cartesian to polar, 4 marks)

Write $z=1+i$ in the forms $r\operatorname{cis}\theta$ and $re^{i\theta}$.

*Solution.* $r=\sqrt{1+1}=\sqrt2$. The point is in quadrant I with reference angle $\tan^{-1}1=\dfrac\pi4$, so $\theta=\dfrac\pi4$. Hence $z=\sqrt2\operatorname{cis}\dfrac\pi4=\sqrt2\,e^{i\pi/4}$.

### Example 2 (quadrant II, 4 marks)

Find the modulus and argument of $-1+\sqrt3\,i$.

*Solution.* $r=\sqrt{1+3}=2$. The point lies in quadrant II. The reference angle is $\tan^{-1}\sqrt3=\dfrac\pi3$, so $\theta=\pi-\dfrac\pi3=\dfrac{2\pi}3$. So $z=2e^{2\pi i/3}$.

Check: $2\cos\dfrac{2\pi}3=-1$ and $2\sin\dfrac{2\pi}3=\sqrt3$ ✓.

### Example 3 (quadrant III, 4 marks)

Find the modulus and principal argument of $-3-3i$.

*Solution.* $r=\sqrt{18}=3\sqrt2$. The point is in quadrant III with reference angle $\dfrac\pi4$, so $\theta=-\left(\pi-\dfrac\pi4\right)=-\dfrac{3\pi}4$. Therefore $-3-3i=3\sqrt2\,e^{-3\pi i/4}$.

The tempting answer $\dfrac\pi4$ is wrong: it is the argument of $3+3i$, in the opposite quadrant.

### Example 4 (axis cases, 3 marks)

State the modulus and principal argument of (a) $-2$; (b) $3i$; (c) $-5i$.

*Solution.* (a) $r=2$ and $\theta=\pi$. (b) $r=3$ and $\theta=\dfrac\pi2$. (c) $r=5$ and $\theta=-\dfrac\pi2$.

### Example 5 (Euler to Cartesian, 3 marks)

Write $4e^{i\pi/3}$ in the form $a+bi$.

*Solution.* $4\left(\cos\dfrac\pi3+i\sin\dfrac\pi3\right)=4\left(\dfrac12+i\dfrac{\sqrt3}2\right)=2+2\sqrt3\,i$.

### Example 6 (products and quotients, 5 marks)

Let $z=2\operatorname{cis}\dfrac\pi6$ and $w=3\operatorname{cis}\dfrac\pi3$. Find $zw$ and $\dfrac zw$ in polar form and, hence, in Cartesian form.

*Solution.* $zw=2\cdot3\operatorname{cis}\left(\dfrac\pi6+\dfrac\pi3\right)=6\operatorname{cis}\dfrac\pi2=6i$. For the quotient, $\dfrac zw=\dfrac23\operatorname{cis}\left(\dfrac\pi6-\dfrac\pi3\right)=\dfrac23\operatorname{cis}\left(-\dfrac\pi6\right)=\dfrac23\left(\dfrac{\sqrt3}2-\dfrac i2\right)=\dfrac{\sqrt3}3-\dfrac13i$.

### Example 7 (powers, 6 marks)

Evaluate (a) $(1+i)^{10}$; (b) $\left(-1+\sqrt3\,i\right)^{6}$; (c) $\left(\sqrt3+i\right)^{9}$.

*Solution.* (a) $1+i=\sqrt2\,e^{i\pi/4}$, so $(1+i)^{10}=2^{5}e^{10\pi i/4}=32e^{5\pi i/2}=32e^{i\pi/2}=32i$. (b) $-1+\sqrt3\,i=2e^{2\pi i/3}$, so the power is $2^{6}e^{4\pi i}=64$. (c) $\sqrt3+i=2e^{i\pi/6}$, so the power is $2^{9}e^{9\pi i/6}=512e^{3\pi i/2}=512(-i)=-512i$.

### Example 8 (a mixed expression, 7 marks)

Let $z=\dfrac{1+i\sqrt3}{1-i}$. (a) Find $|z|$ and $\arg z$. (b) Write $z$ in Cartesian form. (c) Hence find the exact value of $\cos\dfrac{7\pi}{12}$.

*Solution.* (a) $1+i\sqrt3=2e^{i\pi/3}$ and $1-i=\sqrt2\,e^{-i\pi/4}$. So $z=\sqrt2\,e^{i(\pi/3+\pi/4)}=\sqrt2\,e^{7\pi i/12}$, giving $|z|=\sqrt2$ and $\arg z=\dfrac{7\pi}{12}$.

(b) Multiplying by the conjugate, $z=\dfrac{(1+i\sqrt3)(1+i)}{2}=\dfrac{1+i+i\sqrt3-\sqrt3}{2}=\dfrac{1-\sqrt3}2+\dfrac{1+\sqrt3}2i$.

(c) Comparing the real parts, $\sqrt2\cos\dfrac{7\pi}{12}=\dfrac{1-\sqrt3}2$, so $\cos\dfrac{7\pi}{12}=\dfrac{1-\sqrt3}{2\sqrt2}=\dfrac{\sqrt2-\sqrt6}4\approx-0.2588$.

Check: $\cos105^{\circ}\approx-0.2588$ ✓.

### Example 9 (geometry, 3 marks)

Describe the effect of multiplying by $1+i$ on a point of the Argand diagram.

*Solution.* $1+i=\sqrt2\,e^{i\pi/4}$, so multiplication scales distances from the origin by $\sqrt2$ and rotates anticlockwise by $\dfrac\pi4$ about the origin.

### Example 10 (cosine from Euler, 4 marks)

Show that if $z=e^{i\theta}$ then $z+\dfrac1z=2\cos\theta$.

*Solution.* $\dfrac1z=e^{-i\theta}$, so $z+\dfrac1z=e^{i\theta}+e^{-i\theta}=(\cos\theta+i\sin\theta)+(\cos\theta-i\sin\theta)=2\cos\theta$.

This is a common starting point for proving identities such as $\cos^{3}\theta=\dfrac{\cos3\theta+3\cos\theta}4$: expand $\left(z+\dfrac1z\right)^{3}$ with the binomial theorem.

### Example 11 (a power-reduction identity, 6 marks)

Use $z=e^{i\theta}$ to show that $\cos^{3}\theta=\dfrac{\cos3\theta+3\cos\theta}{4}$.

*Solution.* With $z=e^{i\theta}$ we have $2\cos\theta=z+\dfrac1z$, so $8\cos^{3}\theta=\left(z+\dfrac1z\right)^{3}=z^{3}+3z+\dfrac3z+\dfrac1{z^{3}}$ by the binomial theorem. Group the terms: $\left(z^{3}+\dfrac1{z^{3}}\right)+3\left(z+\dfrac1z\right)=2\cos3\theta+6\cos\theta$, because $z^{n}+z^{-n}=2\cos n\theta$. Dividing by $8$ gives $\cos^{3}\theta=\dfrac{2\cos3\theta+6\cos\theta}{8}=\dfrac{\cos3\theta+3\cos\theta}4$.

Check at $\theta=0$: left side $1$, right side $\dfrac{1+3}{4}=1$ ✓. At $\theta=\dfrac\pi2$: left side $0$, right side $\dfrac{0+0}{4}=0$ ✓. This technique turns powers of cosine into sums of multiple angles, which is exactly what is needed to integrate $\cos^{3}\theta$ in Unit 5.

## Using your GDC

Your GDC should be switched to **radian** mode for these questions, since Euler form requires radians. Many models convert directly between rectangular and polar forms (look for "$\blacktriangleright$ polar", "$\mathrm{Pol}$" and "$\mathrm{Rec}$", or a mode setting for polar complex display). The calculator reports the principal argument, which saves quadrant mistakes, but the output is a decimal, so convert a recognisable angle back to an exact multiple of $\pi$ yourself (divide by $\pi$ and recognise a simple fraction). It also evaluates powers such as $(1+i)^{10}$ quickly. If the question requires an exact answer, use the GDC only to check: for example, compute $\dfrac{\sqrt2-\sqrt6}4$ and compare it with $\cos\dfrac{7\pi}{12}$. Menu names vary, so practise with your own model. Remember that calculators may express the argument in degrees if the angle mode is wrong, which is a common reason for impossible-looking answers.

## Common mistakes

1. **Wrong quadrant:** reporting $\tan^{-1}\dfrac ba$ without checking the signs of $a$ and $b$.
2. **Degrees in Euler form.** $e^{i\theta}$ needs $\theta$ in radians.
3. **Adding moduli or multiplying arguments.** For products, moduli multiply and arguments add.
4. **Not reducing the argument** to the principal range after an addition or a multiplication by $n$.
5. **Forgetting to raise the modulus to the power** in $z^{n}$: the result is $r^{n}e^{in\theta}$.
6. **Misreading** $\operatorname{cis}\theta$: it is $\cos\theta+i\sin\theta$, with $i$ attached to the sine only.
7. **Writing the negative modulus**, such as $-2e^{i\pi/3}$ for a number in the wrong quadrant; the modulus is never negative.
8. **Using polar form for a sum**, e.g. adding $r_1+r_2$ and $\theta_1+\theta_2$, which is meaningless.

## Exam technique and command terms

**Write in the form $re^{i\theta}$** requires $r>0$ and $-\pi<\theta\le\pi$ unless a different range is stated. **Find the modulus and argument** gives two answers. **Hence** commonly links polar form to a Cartesian form or to a trigonometric value (Example 8). **Show that** problems with $e^{i\theta}$ require using Euler's formula explicitly; do not quote the result. Always draw a quick sketch for the argument, even for a simple number, and mark the quadrant. It is usually the fastest way to avoid sign errors.

In terms of marks, there are typically two marks for the modulus and argument (one each), a mark for a correct statement of the product or power rule, and a mark for the final form. If the exact value is requested, give an exact angle as a multiple of $\pi$, and do not provide decimals. State clearly which result you use (for example, "using de Moivre's theorem").

## Connections

AHL 1.12 provides the algebra of the Cartesian form, and the conjugate method is the dual of the polar quotient rule. AHL 1.14 uses this chapter to find the $n$th roots of a complex number, and shows that the roots of $z^{n}=1$ form a regular polygon on the unit circle. AHL 1.15 includes the proof of de Moivre's theorem by induction, which makes the "obvious" power formula rigorous. Unit 3 is closely related: the compound-angle identities of AHL 3.10 are equivalent to the product rule here, and the unit circle of SL 3.5 is the set of points $e^{i\theta}$. In Unit 5, Euler's formula is verified by comparing Maclaurin series, and oscillating solutions of differential equations are written using $e^{i\omega t}$. Vector concepts in AHL 3.12 treat rotation by multiplication in two dimensions, which complex numbers perform elegantly.

## Check your understanding

1. Write $1-i$ in the form $re^{i\theta}$.
2. Write $-\sqrt3+i$ in the form $re^{i\theta}$.
3. Write $6e^{2\pi i/3}$ in the form $a+bi$.
4. Let $z=4\operatorname{cis}\dfrac\pi4$ and $w=2\operatorname{cis}\dfrac\pi{12}$. Find $zw$ and $\dfrac zw$ in polar form.
5. Calculate $(1-i)^{8}$.
6. Calculate $(-1+i)^{6}$.
7. Prove that $|e^{i\theta}|=1$ for real $\theta$.
8. If $z=\operatorname{cis}\theta$, show that $z+z^{-1}=2\cos\theta$.
9. Simplify $\dfrac{1+i\sqrt3}{\sqrt3-i}$.
10. Describe the effect of multiplication by $1+i$ and state $\arg(-5)$.

### Answers

1. $1-i=\sqrt2\,e^{-i\pi/4}$.
2. $r=2$, quadrant II, reference angle $\dfrac\pi6$, so $\theta=\dfrac{5\pi}6$: $2e^{5\pi i/6}$.
3. $6\left(-\dfrac12+i\dfrac{\sqrt3}2\right)=-3+3\sqrt3\,i$.
4. $zw=8\operatorname{cis}\dfrac\pi3$ and $\dfrac zw=2\operatorname{cis}\dfrac\pi6$.
5. $1-i=\sqrt2\,e^{-i\pi/4}$, so the power is $2^{4}e^{-2\pi i}=16$.
6. $-1+i=\sqrt2\,e^{3\pi i/4}$, so the power is $8e^{9\pi i/2}=8e^{i\pi/2}=8i$.
7. $|e^{i\theta}|=|\cos\theta+i\sin\theta|=\sqrt{\cos^{2}\theta+\sin^{2}\theta}=1$.
8. $z^{-1}=\operatorname{cis}(-\theta)=\cos\theta-i\sin\theta$, so $z+z^{-1}=2\cos\theta$.
9. Numerator $2e^{i\pi/3}$, denominator $2e^{-i\pi/6}$, quotient $e^{i\pi/2}=i$.
10. Multiplication by $1+i=\sqrt2\,e^{i\pi/4}$ scales by $\sqrt2$ and rotates by $\dfrac\pi4$ anticlockwise. $\arg(-5)=\pi$.

## Summary

- $r=|z|=\sqrt{a^{2}+b^{2}}$ and $\theta=\arg z\in(-\pi,\pi]$; always find the argument with a sketch and a reference angle.
- $z=r\operatorname{cis}\theta=re^{i\theta}$, using Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$ with radians.
- $\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}2$ and $\sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}$; $e^{i\pi}+1=0$.
- Multiply: moduli multiply, arguments add. Divide: moduli divide, arguments subtract. Powers: $z^{n}=r^{n}e^{in\theta}$.
- Multiplication by $re^{i\theta}$ scales by $r$ and rotates by $\theta$.
- Use Cartesian form for sums and polar or Euler form for products, quotients and powers.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 3 (PDF p. 5), lists modulus-argument and Euler forms under AHL 1.13. Derive and justify all other steps and conditions.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
