# Complex roots and conjugate pairs

> **AHL 1.14 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state the fundamental theorem of algebra and the factor theorem over the complex numbers;
- prove and use the conjugate root theorem: non-real roots of a polynomial with real coefficients occur in conjugate pairs;
- find all roots of a real polynomial given one complex root, using the sum and product of roots or polynomial division;
- determine unknown real coefficients from a given complex root;
- state de Moivre's theorem and use it to derive trigonometric identities for multiple angles;
- find all $n$th roots of a complex number and show them on an Argand diagram;
- use the roots of unity, including the fact that they sum to zero, and factorise real polynomials into real linear and quadratic factors.

## Why this topic matters

Over the real numbers, the equation $z^{2}+1=0$ has no solution, and $z^{4}+4=0$ looks hopeless. Over the complex numbers every polynomial equation has a solution, and in fact exactly as many roots as its degree. This beautiful completeness is one of the main reasons that complex numbers are used throughout science: the oscillations of springs and circuits, the vibrations of structures and the stability of control systems are all analysed by finding the complex roots of a characteristic polynomial. In the IB course, this chapter combines algebra (AHL 1.12), geometry (AHL 1.13) and the polynomial theory of AHL 2.12, and it prepares you for proof by induction in AHL 1.15 and for differential equations in Unit 5. Exam questions are rewarding when you know the three main tools: the conjugate pair, the sum and product of roots, and the polar form of roots of a complex number.

## Core ideas

### The fundamental theorem of algebra

Every polynomial of degree $n\ge1$ with complex coefficients has *exactly $n$ roots* in $\mathbb{C}$, counted with multiplicity. Equivalently, it factorises completely into linear factors:
$$
P(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n).
$$
The factor theorem still holds: $(z-z_0)$ is a factor of $P(z)$ if and only if $P(z_0)=0$. The proof of the fundamental theorem is advanced and is not required, but you must be able to use the *consequence*: a degree-$n$ polynomial equation has $n$ roots, which you can count to know when you have found them all. A repeated root counts as many times as its multiplicity.

### The conjugate root theorem

If $P(z)=a_nz^{n}+\cdots+a_1z+a_0$ has **real** coefficients and $z_0$ is a root, then $z_0^{*}$ is also a root.

*Proof.* Take the conjugate of $P(z_0)=0$. Since conjugation preserves sums and products, and the coefficients are real so that $a_k^{*}=a_k$, we have $0=\overline{P(z_0)}=a_n(z_0^{*})^{n}+\cdots+a_1z_0^{*}+a_0=P(z_0^{*})$. So $z_0^{*}$ is a root. $\blacksquare$

This theorem requires the coefficients to be real. For a polynomial with complex coefficients, such as $z-i$, there is no reason for the conjugate to be a root. Several consequences follow: non-real roots come in pairs, so a real polynomial of *odd* degree has at least one real root; and the pair $z_0,z_0^{*}$ gives a *real quadratic factor*
$$
(z-z_0)(z-z_0^{*})=z^{2}-2\operatorname{Re}(z_0)\,z+|z_0|^{2}.
$$
This factor is very useful, because it lets you divide by a quadratic with no complex arithmetic.

### Finding all roots from one root

The standard routine for a real polynomial with one known non-real root $z_0$:

1. Write down the conjugate $z_0^{*}$ as a second root.
2. Form the quadratic factor $z^{2}-2\operatorname{Re}(z_0)z+|z_0|^{2}$.
3. Divide the polynomial by this quadratic (long division or inspection) to find the remaining factors.
4. Solve the remaining quadratic or linear factor.

An alternative that is often faster uses **Vieta's relations**: for $z^{3}+pz^{2}+qz+r=0$ with roots $\alpha,\beta,\gamma$,
$$
\alpha+\beta+\gamma=-p,\qquad \alpha\beta+\beta\gamma+\gamma\alpha=q,\qquad \alpha\beta\gamma=-r.
$$
Given two roots (such as a conjugate pair), the sum or the product gives the third immediately.

### Unknown coefficients

If a polynomial with real *unknown* coefficients is given with one complex root, substituting that root gives one complex equation, hence two real equations (real and imaginary parts), enough to find two unknown real coefficients. Alternatively, build the polynomial from its roots using the conjugate pair factor and compare coefficients.

### De Moivre's theorem

For any integer $n$,
$$
\big(\cos\theta+i\sin\theta\big)^{n}=\cos n\theta+i\sin n\theta,
$$
that is, $\left(e^{i\theta}\right)^{n}=e^{in\theta}$. We proved the positive integer case by repeated multiplication in AHL 1.13, and a rigorous proof by induction is in AHL 1.15. Beyond computing powers, the theorem produces identities. Expand $(\cos\theta+i\sin\theta)^{3}$ with the binomial theorem and compare real and imaginary parts with $\cos3\theta+i\sin3\theta$. The real part gives $\cos^{3}\theta-3\cos\theta\sin^{2}\theta$, so, using $\sin^{2}\theta=1-\cos^{2}\theta$,
$$
\cos3\theta=4\cos^{3}\theta-3\cos\theta.
$$
The imaginary part gives $3\cos^{2}\theta\sin\theta-\sin^{3}\theta=3\sin\theta-4\sin^{3}\theta$, which equals $\sin3\theta$.

### $n$th roots of a complex number

To solve $z^{n}=w$ where $w=re^{i\theta}$, write $z=\rho e^{i\phi}$. Then $\rho^{n}e^{in\phi}=re^{i\theta}$. Equal moduli give $\rho=r^{1/n}$, and equal arguments give $n\phi=\theta+2\pi k$ for an integer $k$, because arguments are only defined up to multiples of $2\pi$. Therefore
$$
z_k=r^{1/n}\,e^{i(\theta+2\pi k)/n},\qquad k=0,1,\ldots,n-1.
$$
Only $n$ distinct values arise, since $k=n$ gives the same point as $k=0$. On the Argand diagram, the $n$ roots lie on a circle of radius $r^{1/n}$ at equal angular spacing $\dfrac{2\pi}n$, forming a regular $n$-gon. If you have found one root, you can generate the rest by repeatedly multiplying by $e^{2\pi i/n}$, that is, by rotating through $\dfrac{2\pi}n$.

### Roots of unity

The solutions of $z^{n}=1$ are $\omega^{k}$ where $\omega=e^{2\pi i/n}$, for $k=0,1,\ldots,n-1$. They have a remarkable property: for $n\ge2$ they sum to zero,
$$
1+\omega+\omega^{2}+\cdots+\omega^{n-1}=\frac{\omega^{n}-1}{\omega-1}=0,
$$
by the geometric series formula (SL 1.3) since $\omega^{n}=1$ and $\omega\ne1$. Taking real parts gives useful trigonometric sums. For $n=5$: $1+2\cos\dfrac{2\pi}5+2\cos\dfrac{4\pi}5=0$, which implies $\cos\dfrac{2\pi}5+\cos\dfrac{4\pi}5=-\dfrac12$.

### Factorising over the reals

Every real polynomial factorises into real linear factors and *irreducible* real quadratic factors, one quadratic for each conjugate pair. For example $z^{4}+4$ has roots $\pm1\pm i$, which pair as $1\pm i$ and $-1\pm i$, so
$$
z^{4}+4=(z^{2}-2z+2)(z^{2}+2z+2).
$$

## Worked examples

### Example 1 (all roots of a cubic, 6 marks)

Given that $2+3i$ is a root of $z^{3}-5z^{2}+17z-13=0$, find the other roots.

*Solution.* The coefficients are real, so $2-3i$ is also a root. The sum of the three roots is $5$ (the negative of the $z^{2}$ coefficient), so the third root is $5-(2+3i)-(2-3i)=1$.

Check using the product: $(2+3i)(2-3i)(1)=13$, and this should equal $-r=13$ ✓.

### Example 2 (a quartic, 6 marks)

Given that $1+i$ is a root of $z^{4}-2z^{3}+3z^{2}-2z+2=0$, find all the roots.

*Solution.* The conjugate $1-i$ is also a root. The quadratic factor is $z^{2}-2z+2$ (sum $2$, product $2$). Dividing: $z^{4}-2z^{3}+3z^{2}-2z+2=(z^{2}-2z+2)(z^{2}+1)$. Check by expansion: $z^{4}-2z^{3}+2z^{2}+z^{2}-2z+2$ ✓. So the other roots are $z^{2}=-1$, i.e. $z=\pm i$. The four roots are $1\pm i$ and $\pm i$.

### Example 3 (unknown coefficients, 7 marks)

The cubic $z^{3}+az^{2}+bz+15=0$, with $a,b\in\mathbb{R}$, has a root $2+i$. Find $a$ and $b$ and the other roots.

*Solution.* Since $2-i$ is also a root, the real quadratic factor is $z^{2}-4z+5$. The third root $\gamma$ satisfies $(2+i)(2-i)\gamma=-15$, so $5\gamma=-15$ and $\gamma=-3$. Then $z^{3}+az^{2}+bz+15=(z^{2}-4z+5)(z+3)=z^{3}-z^{2}-7z+15$. So $a=-1$ and $b=-7$. The other roots are $2-i$ and $-3$.

### Example 4 (cube roots, 5 marks)

Solve $z^{3}=8$ and show the roots on an Argand diagram.

*Solution.* $8=8e^{0i}$, so $z_k=2e^{2\pi ik/3}$ for $k=0,1,2$. These are $2$, $2e^{2\pi i/3}=-1+\sqrt3\,i$ and $2e^{4\pi i/3}=-1-\sqrt3\,i$. They lie on the circle of radius $2$ at $120^{\circ}$ intervals, forming an equilateral triangle.

Check: $\left(-1+\sqrt3\,i\right)^{3}=8$ since the modulus is $2^{3}=8$ and the argument is $3\cdot\dfrac{2\pi}3=2\pi$ ✓.

### Example 5 (fourth roots of a negative number, 6 marks)

Solve $z^{4}=-16$, giving the roots in Cartesian form.

*Solution.* $-16=16e^{i\pi}$. The modulus of each root is $16^{1/4}=2$ and the arguments are $\dfrac{\pi+2\pi k}4=\dfrac\pi4,\dfrac{3\pi}4,\dfrac{5\pi}4,\dfrac{7\pi}4$, which we write as $\dfrac\pi4,\dfrac{3\pi}4,-\dfrac{3\pi}4,-\dfrac\pi4$. In Cartesian form these are $\sqrt2+\sqrt2\,i$, $-\sqrt2+\sqrt2\,i$, $-\sqrt2-\sqrt2\,i$ and $\sqrt2-\sqrt2\,i$; that is $z=\pm\sqrt2\pm\sqrt2\,i$.

### Example 6 (roots of a non-real number, 7 marks)

Solve $z^{3}=1-i$, giving the answers in modulus-argument form.

*Solution.* $1-i=\sqrt2\,e^{-i\pi/4}$. The cube roots have modulus $\left(\sqrt2\right)^{1/3}=2^{1/6}$ and arguments $\dfrac{-\pi/4+2\pi k}3=-\dfrac\pi{12}+\dfrac{2\pi k}3$. For $k=0,1,-1$ (so that the arguments are in the principal range): $-\dfrac\pi{12}$, $\dfrac{7\pi}{12}$ and $-\dfrac{3\pi}4$. So
$$
z=2^{1/6}e^{-i\pi/12},\qquad 2^{1/6}e^{7\pi i/12},\qquad 2^{1/6}e^{-3\pi i/4}.
$$
Check: $\left(2^{1/6}\right)^{3}=\sqrt2$ and, for the first, $3\left(-\dfrac\pi{12}\right)=-\dfrac\pi4$ ✓.

### Example 7 (roots of unity sum, 4 marks)

Let $\omega=e^{2\pi i/3}$. Show that $1+\omega+\omega^{2}=0$.

*Solution.* $1+\omega+\omega^{2}$ is a geometric series with ratio $\omega\ne1$, so it equals $\dfrac{\omega^{3}-1}{\omega-1}$. Since $\omega^{3}=e^{2\pi i}=1$, the numerator is $0$ and the sum is $0$.

Check with Cartesian values: $1+\left(-\tfrac12+\tfrac{\sqrt3}2i\right)+\left(-\tfrac12-\tfrac{\sqrt3}2i\right)=0$ ✓.

### Example 8 (a trigonometric identity, 6 marks)

Use de Moivre's theorem to show that $\cos3\theta=4\cos^{3}\theta-3\cos\theta$.

*Solution.* By de Moivre, $\cos3\theta+i\sin3\theta=(\cos\theta+i\sin\theta)^{3}$. Expanding with the binomial theorem, with $c=\cos\theta$ and $s=\sin\theta$: $c^{3}+3c^{2}(is)+3c(is)^{2}+(is)^{3}=c^{3}-3cs^{2}+i\left(3c^{2}s-s^{3}\right)$. Equating real parts: $\cos3\theta=c^{3}-3cs^{2}=c^{3}-3c(1-c^{2})=4c^{3}-3c$.

### Example 9 (factorising over the reals, 5 marks)

Factorise $z^{4}+4$ into two real quadratics.

*Solution.* The equation $z^{4}=-4$ has roots with modulus $4^{1/4}=\sqrt2$ and arguments $\dfrac\pi4+\dfrac{k\pi}2$, so $z=\pm1\pm i$. The pair $1\pm i$ gives the quadratic $z^{2}-2z+2$ and the pair $-1\pm i$ gives $z^{2}+2z+2$. Hence $z^{4}+4=(z^{2}-2z+2)(z^{2}+2z+2)$.

Check: the product is $(z^{2}+2-2z)(z^{2}+2+2z)=(z^{2}+2)^{2}-(2z)^{2}=z^{4}+4z^{2}+4-4z^{2}=z^{4}+4$ ✓.

### Example 10 (an odd degree, 3 marks)

Explain why a cubic with real coefficients cannot have three non-real roots.

*Solution.* Non-real roots come in conjugate pairs, so the number of non-real roots is even. A cubic has three roots in total (counting multiplicity), so at least one is real.

## Using your GDC

The polynomial solver on your GDC (often labelled *polynomial root finder*) returns all complex roots of a polynomial equation if the mode is set to complex, and it is the best check for questions such as Examples 1 to 3. Enter the coefficients, read the roots, and compare them with your algebra. Note that the solver gives decimals, so the *exact* form must be produced by you. For $n$th roots, use the polar-form conversion to find the modulus and argument, then compute $r^{1/n}$ and the arguments by hand; you can verify by raising your answers to the $n$th power on the calculator. A graph can show only the real roots, which is a quick sanity check: the number of $x$-intercepts of $y=P(x)$ is the number of real roots, and the remaining roots must be complex. Menu names differ between models, so practise on your own device before the examination.

## Common mistakes

1. **Applying the conjugate root theorem to non-real coefficients.**
2. **Forgetting the conjugate** and trying to find all roots from a single complex root by division with complex arithmetic.
3. **Only finding one $n$th root**, or finding $n+1$ values by letting $k$ run too far.
4. **Dividing the argument but not adding $2\pi k$**, giving only one root.
5. **Sign errors in Vieta's relations**: the sum of roots of $z^{3}+pz^{2}+\cdots$ is $-p$, and the product is $-r$.
6. **Taking the cube root of the modulus incorrectly**, e.g. $\sqrt[3]{\sqrt2}$ being written as $\sqrt6$.
7. **Leaving arguments outside $(-\pi,\pi]$** when the principal range is requested.
8. **Treating $i$ as a variable** when dividing polynomials; keep it only in numerical coefficients.

## Exam technique and command terms

**Find all the roots** or **solve** requires $n$ answers for a degree-$n$ equation, so count them. **Hence** or **given that** means you must use the root provided, and the first line of the answer should be "since the coefficients are real, $z^{*}$ is also a root". **Show that** for a trigonometric identity requires de Moivre's theorem to be named, followed by expansion and comparing real and imaginary parts. **Express in the form $re^{i\theta}$** needs the principal argument and an exact modulus. Cover the cases of the final answer: Cartesian if asked for, and exact values.

Typical mark allocations: one mark for the conjugate, one for the quadratic factor, one for the division, one for each remaining root. A short check by substituting a root in the original polynomial or comparing the product of roots is worth doing when time permits. For $n$th roots, include the general formula with $k$ first, then list the specific values, because the general formula is a method mark.

## Connections

AHL 1.12 and 1.13 supplied the arithmetic and the polar form for this chapter. AHL 2.12 develops the factor and remainder theorems and the sum and product of roots of polynomials, which are the real-variable cousins of Vieta's relations used here. AHL 1.15 contains the formal proof of de Moivre's theorem by induction, closing a logical gap left open here. In Unit 3, the identity for $\cos3\theta$ and its relatives link with the compound-angle identities of AHL 3.10. In Unit 5, the roots of the characteristic equation of a second-order linear differential equation determine whether solutions oscillate, with complex roots $\alpha\pm\beta i$ giving $e^{\alpha t}\cos\beta t$ type behaviour. In geometry, the regular polygons formed by the roots of unity are the basis of the discrete Fourier transform, which underlies digital signal processing.

## Check your understanding

1. Given that $1-2i$ is a root of $z^{3}-z^{2}+3z+5=0$, find all the roots.
2. Given that $1+i$ is a root of $z^{4}-2z^{3}+6z^{2}-8z+8=0$, find all the roots.
3. Solve $z^{3}=27$, giving the answers in Cartesian form.
4. Solve $z^{4}=1$.
5. Solve $z^{2}=-3+4i$.
6. Solve $z^{6}=64$ and describe the shape formed by the roots.
7. Use de Moivre's theorem to show that $\sin3\theta=3\sin\theta-4\sin^{3}\theta$.
8. Show that the three cube roots of unity sum to zero.
9. A cubic with real coefficients has roots $4$ and $1+3i$. Find the cubic.
10. Explain why a real polynomial of odd degree must have at least one real root.

### Answers

1. Roots $1\pm2i$ and $-1$. (The sum of roots is $1$, and $1-2i+1+2i=2$, so the third root is $-1$; check: product $5\cdot(-1)=-5=-r$ ✓.)
2. Roots $1\pm i$ and $\pm2i$. The quadratic factor is $z^{2}-2z+2$, and $z^{4}-2z^{3}+6z^{2}-8z+8=(z^{2}-2z+2)(z^{2}+4)$.
3. $z=3$, $-\dfrac32+\dfrac{3\sqrt3}2i$, $-\dfrac32-\dfrac{3\sqrt3}2i$.
4. $z=1,-1,i,-i$.
5. $(1+2i)^{2}=1+4i-4=-3+4i$, so $z=1+2i$ or $z=-1-2i$.
6. $z=2e^{i\pi k/3}$ for $k=0,\dots,5$: $2$, $1+\sqrt3\,i$, $-1+\sqrt3\,i$, $-2$, $-1-\sqrt3\,i$, $1-\sqrt3\,i$. They form a regular hexagon of radius $2$.
7. The imaginary part of $(c+is)^{3}$ is $3c^{2}s-s^{3}=3(1-s^{2})s-s^{3}=3s-4s^{3}$.
8. $1+\omega+\omega^{2}=\dfrac{\omega^{3}-1}{\omega-1}=0$ since $\omega^{3}=1$ and $\omega\ne1$.
9. The roots are $4$, $1+3i$ and $1-3i$, so the cubic is $(z-4)(z^{2}-2z+10)=z^{3}-6z^{2}+18z-40$.
10. Non-real roots occur in conjugate pairs, so there is an even number of them. The total number of roots is odd, so at least one root is real.

## Summary

- A degree-$n$ polynomial has exactly $n$ complex roots (with multiplicity), and factorises into linear factors over $\mathbb{C}$.
- For a polynomial with real coefficients, non-real roots come in conjugate pairs; each pair gives the real quadratic factor $z^{2}-2\operatorname{Re}(z_0)z+|z_0|^{2}$.
- Use Vieta's relations (sum and product of roots) or division to find the remaining roots.
- De Moivre: $(\cos\theta+i\sin\theta)^{n}=\cos n\theta+i\sin n\theta$, used for powers and multiple-angle identities.
- $z^{n}=re^{i\theta}$ has $n$ roots $r^{1/n}e^{i(\theta+2\pi k)/n}$, $k=0,\dots,n-1$, forming a regular $n$-gon.
- The $n$th roots of unity sum to zero for $n\ge2$.
