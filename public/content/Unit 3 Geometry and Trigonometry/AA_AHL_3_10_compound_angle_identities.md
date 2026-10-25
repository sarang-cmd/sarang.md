# Compound-angle identities

> **AHL 3.10 · AA HL only** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- state and use $\sin(A\pm B)$, $\cos(A\pm B)$ and $\tan(A\pm B)$;
- explain how the compound-angle formulae lead to the double-angle identities for $\sin2\theta$, $\cos2\theta$ and $\tan2\theta$;
- find exact values of trigonometric ratios of angles such as $15^{\circ}$, $75^{\circ}$ and $\dfrac{5\pi}{12}$;
- find $\sin(A\pm B)$ and $\cos(A\pm B)$ from the values of $\sin A$ and $\cos B$ with the signs fixed by quadrants;
- simplify and prove expressions that contain sums of angles;
- derive the triple-angle identities for $\sin3\theta$ and $\cos3\theta$;
- solve trigonometric equations that need a compound-angle identity;
- write $a\sin x+b\cos x$ in the form $R\sin(x+\alpha)$ and use it to solve equations and find maxima and minima;
- find the angle between two lines from their gradients.

## Why this topic matters

At SL, you learned that $\sin2\theta=2\sin\theta\cos\theta$. It is tempting to guess that $\sin(A+B)=\sin A+\sin B$, but this is false. For example $\sin(30^{\circ}+60^{\circ})=1$ while $\sin30^{\circ}+\sin60^{\circ}=0.5+0.866=1.366$. The correct rule is more interesting, and it is the heart of this chapter: $\sin(A+B)=\sin A\cos B+\cos A\sin B$. Compound-angle formulae are the main tool for relating trigonometric functions at different angles. They give the double-angle identities as special cases, they allow exact values for angles like $15^{\circ}$ and $75^{\circ}$, and they allow the sum $a\sin x+b\cos x$ to be written as a single sine wave with amplitude $R=\sqrt{a^{2}+b^{2}}$. This last result is extremely useful: two waves of the same frequency but different phases add to produce another wave of the same frequency, which is why the formulae appear in the study of alternating currents, sound waves and tides. In the examination, compound-angle questions typically appear in Paper 1 (exact values and proofs) and Paper 2 (equations, with a calculator for decimals). Many of the hardest questions in Paper 3-style problems on trigonometry start with a proof using these formulae. This chapter develops the identities, shows where they come from, and builds up practice in all of the standard uses.

## Core ideas

### The formulae

For all angles $A$ and $B$:
$$
\sin(A+B)=\sin A\cos B+\cos A\sin B,\qquad\sin(A-B)=\sin A\cos B-\cos A\sin B,
$$
$$
\cos(A+B)=\cos A\cos B-\sin A\sin B,\qquad\cos(A-B)=\cos A\cos B+\sin A\sin B,
$$
$$
\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B},\qquad\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}.
$$
Notice the signs: for cosine the sign in the result is the *opposite* of the sign in the angle; for sine it is the *same*. For tangent, the sign in the numerator is the same as the angle sign, and the sign in the denominator is the opposite. The formulae are in the formula booklet, but you should know their structure well enough to avoid wasting time.

### Where the cosine formula comes from

Place points on the unit circle: $P=(\cos A,\sin A)$ and $Q=(\cos B,\sin B)$. The distance $PQ$ is found in two ways. By the distance formula, $PQ^{2}=(\cos A-\cos B)^{2}+(\sin A-\sin B)^{2}=2-2\cos A\cos B-2\sin A\sin B$, using $\sin^{2}+\cos^{2}=1$ twice. By the cosine rule in triangle $OPQ$ with angle $A-B$ at $O$ and two sides of length $1$: $PQ^{2}=2-2\cos(A-B)$. Equating, $\cos(A-B)=\cos A\cos B+\sin A\sin B$. Replacing $B$ by $-B$ (cosine is even, sine is odd) gives $\cos(A+B)$. The sine formulae follow from $\sin\theta=\cos\left(\dfrac\pi2-\theta\right)$: $\sin(A+B)=\cos\left(\dfrac\pi2-A-B\right)=\cos\left(\left(\dfrac\pi2-A\right)-B\right)=\sin A\cos B+\cos A\sin B$. The tangent formula comes from dividing $\sin(A+B)$ by $\cos(A+B)$ and dividing numerator and denominator by $\cos A\cos B$.

### Double-angle identities as a special case

Setting $B=A$ in the formulae gives:
$$
\sin2A=2\sin A\cos A,\qquad\cos2A=\cos^{2}A-\sin^{2}A,\qquad\tan2A=\frac{2\tan A}{1-\tan^{2}A}.
$$
The last, $\tan 2A$, is the new result at HL (the first two were obtained in SL 3.6). Using $\sin^{2}A+\cos^{2}A=1$, the cosine formula becomes $2\cos^{2}A-1$ or $1-2\sin^{2}A$.

### Triple-angle identities

Writing $3\theta=2\theta+\theta$:
$$
\sin3\theta=\sin2\theta\cos\theta+\cos2\theta\sin\theta=2\sin\theta\cos^{2}\theta+(1-2\sin^{2}\theta)\sin\theta=3\sin\theta-4\sin^{3}\theta,
$$
and similarly $\cos3\theta=4\cos^{3}\theta-3\cos\theta$. These are not in the formula booklet but can be derived in a few lines whenever needed, and they appear in HL questions on solving cubic equations and on de Moivre's theorem (AHL 1.13).

### Exact values of other angles

Write the angle as a sum or difference of standard angles: $75^{\circ}=45^{\circ}+30^{\circ}$ and $15^{\circ}=45^{\circ}-30^{\circ}$ (or $60^{\circ}-45^{\circ}$). For instance,
$$
\sin75^{\circ}=\sin45^{\circ}\cos30^{\circ}+\cos45^{\circ}\sin30^{\circ}=\frac{\sqrt2}2\cdot\frac{\sqrt3}2+\frac{\sqrt2}2\cdot\frac12=\frac{\sqrt6+\sqrt2}4.
$$
The value is about $0.9659$. In radians: $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$ and $\dfrac\pi{12}=\dfrac\pi3-\dfrac\pi4$. The tangent values are $\tan75^{\circ}=2+\sqrt3$ and $\tan15^{\circ}=2-\sqrt3$.

### Finding a compound value from given ratios

Given $\sin A$ and $\cos B$, find the missing ratios $\cos A$ and $\sin B$ with the correct signs from the quadrants (using a triangle or $\sin^{2}+\cos^{2}=1$), then substitute. The common error is to take the wrong sign for the missing ratio.

### Simplifying and proving

Recognise the expanded forms in reverse: $\sin x\cos y+\cos x\sin y$ is $\sin(x+y)$; $\cos x\cos y-\sin x\sin y$ is $\cos(x+y)$. Sums of angles can be expanded and products rewritten. For proofs, expand both sides of the compound angles and simplify using $\sin^{2}+\cos^{2}=1$. Two results worth knowing: adding the formulae for $\sin(A+B)$ and $\sin(A-B)$ gives $\sin(A+B)+\sin(A-B)=2\sin A\cos B$, and $\sin(A+B)\sin(A-B)=\sin^{2}A-\sin^{2}B$.

### Equations

To solve an equation containing a compound angle, expand it and collect terms. For instance $\sin\left(x+\dfrac\pi6\right)=\cos x$ becomes $\dfrac{\sqrt3}2\sin x+\dfrac12\cos x=\cos x$, so $\dfrac{\sqrt3}2\sin x=\dfrac12\cos x$ and $\tan x=\dfrac1{\sqrt3}$. Alternatively, apply the identities in reverse to collapse a left-hand side such as $\sin2x\cos x-\cos2x\sin x$ into $\sin(2x-x)=\sin x$. Then solve with the methods of SL 3.8.

### The form $R\sin(x+\alpha)$

The sum $a\sin x+b\cos x$ of two waves of equal frequency is a single wave. (This result is an extension of the standard syllabus statements, but it is the natural application of the compound-angle formula and it is a good tool for hard questions.) Write
$$
a\sin x+b\cos x=R\sin(x+\alpha)=R\sin x\cos\alpha+R\cos x\sin\alpha.
$$
Comparing coefficients: $R\cos\alpha=a$ and $R\sin\alpha=b$. Therefore $R=\sqrt{a^{2}+b^{2}}$ and $\tan\alpha=\dfrac ba$, with $\alpha$ in the quadrant given by the signs of $a$ and $b$ (for $a,b>0$, $\alpha$ is acute). For example $3\sin x+4\cos x=5\sin(x+\alpha)$ where $\alpha=\tan^{-1}\dfrac43=0.927$. Consequences: the maximum value is $R$ (at $x+\alpha=\dfrac\pi2$) and the minimum is $-R$; and the equation $a\sin x+b\cos x=c$ has solutions only if $|c|\le R$. Solve it as $\sin(x+\alpha)=\dfrac cR$ with the transformed interval of SL 3.8. A cosine form $R\cos(x-\beta)$ is equally valid.

### The angle between two lines

If lines have gradients $m_1=\tan\theta_1$ and $m_2=\tan\theta_2$, the angle $\theta$ between them satisfies $\tan\theta=\left|\dfrac{m_1-m_2}{1+m_1m_2}\right|$, by the formula for $\tan(\theta_1-\theta_2)$. If $m_1m_2=-1$ the denominator is zero, and the lines are perpendicular (SL 2.1). The acute angle is the one with positive tangent.

## Worked examples

### Example 1 (exact values, 6 marks)

Find the exact values of $\sin75^{\circ}$, $\cos75^{\circ}$ and $\tan75^{\circ}$.

*Solution.* $\sin75^{\circ}=\sin(45^{\circ}+30^{\circ})=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2+\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6+\sqrt2}4$. $\cos75^{\circ}=\cos45^{\circ}\cos30^{\circ}-\sin45^{\circ}\sin30^{\circ}=\dfrac{\sqrt6-\sqrt2}4$. $\tan75^{\circ}=\dfrac{\sqrt6+\sqrt2}{\sqrt6-\sqrt2}$. Multiply by the conjugate: $\dfrac{(\sqrt6+\sqrt2)^{2}}{6-2}=\dfrac{8+2\sqrt{12}}4=2+\sqrt3$.

Check: $\sin75^{\circ}=0.9659$ and $\dfrac{2.449+1.414}4=0.9659$ ✓.

### Example 2 (a compound value from given ratios, 8 marks)

Angle $A$ is acute with $\sin A=\dfrac35$. Angle $B$ is obtuse with $\cos B=-\dfrac{12}{13}$. Find $\sin(A+B)$, $\cos(A+B)$ and $\tan(A+B)$.

*Solution.* $\cos A=\dfrac45$ (acute). $\sin B=\dfrac5{13}$ (obtuse, positive). Then
$$
\sin(A+B)=\frac35\cdot\left(-\frac{12}{13}\right)+\frac45\cdot\frac5{13}=\frac{-36+20}{65}=-\frac{16}{65},
$$
$$
\cos(A+B)=\frac45\cdot\left(-\frac{12}{13}\right)-\frac35\cdot\frac5{13}=\frac{-48-15}{65}=-\frac{63}{65}.
$$
So $\tan(A+B)=\dfrac{-16/65}{-63/65}=\dfrac{16}{63}$.

Check: $\left(\dfrac{16}{65}\right)^{2}+\left(\dfrac{63}{65}\right)^{2}=\dfrac{256+3969}{4225}=1$ ✓. (Both negative: $A+B$ is in quadrant 3.)

### Example 3 (the tangent formula, 5 marks)

Given $\tan A=\dfrac12$ and $\tan B=\dfrac13$ (both angles acute), find $\tan(A+B)$ and hence $A+B$.

*Solution.* $\tan(A+B)=\dfrac{\frac12+\frac13}{1-\frac16}=\dfrac{5/6}{5/6}=1$. Both angles are acute with positive tangent, and $A+B<\pi$, with $\tan(A+B)=1$, so $A+B=\dfrac\pi4$.

(Both $A$ and $B$ are less than $\dfrac\pi4$, so the sum is less than $\dfrac\pi2$, which confirms the answer.)

### Example 4 (simplifying, 4 marks)

Simplify $\sin\left(x+\dfrac\pi3\right)+\sin\left(x-\dfrac\pi3\right)$.

*Solution.* Expanding, the terms $\pm\cos x\sin\dfrac\pi3$ cancel: the sum is $2\sin x\cos\dfrac\pi3=2\sin x\cdot\dfrac12=\sin x$.

### Example 5 (a proof, 6 marks)

Prove that $\sin(A+B)\sin(A-B)=\sin^{2}A-\sin^{2}B$.

*Proof.* The left side is $(\sin A\cos B+\cos A\sin B)(\sin A\cos B-\cos A\sin B)=\sin^{2}A\cos^{2}B-\cos^{2}A\sin^{2}B$. Replace $\cos^{2}B=1-\sin^{2}B$ and $\cos^{2}A=1-\sin^{2}A$: $\sin^{2}A(1-\sin^{2}B)-(1-\sin^{2}A)\sin^{2}B=\sin^{2}A-\sin^{2}A\sin^{2}B-\sin^{2}B+\sin^{2}A\sin^{2}B=\sin^{2}A-\sin^{2}B$. $\blacksquare$

### Example 6 (a tangent identity, 5 marks)

Show that $\tan\left(x+\dfrac\pi4\right)=\dfrac{1+\tan x}{1-\tan x}$.

*Proof.* $\tan\left(x+\dfrac\pi4\right)=\dfrac{\tan x+\tan\frac\pi4}{1-\tan x\tan\frac\pi4}=\dfrac{\tan x+1}{1-\tan x}$, since $\tan\dfrac\pi4=1$. $\blacksquare$

### Example 7 (the triple-angle identity, 6 marks)

Show that $\sin3\theta=3\sin\theta-4\sin^{3}\theta$.

*Proof.* $\sin3\theta=\sin(2\theta+\theta)=\sin2\theta\cos\theta+\cos2\theta\sin\theta=2\sin\theta\cos^{2}\theta+(1-2\sin^{2}\theta)\sin\theta$. Replace $\cos^{2}\theta=1-\sin^{2}\theta$: $2\sin\theta-2\sin^{3}\theta+\sin\theta-2\sin^{3}\theta=3\sin\theta-4\sin^{3}\theta$. $\blacksquare$

Check at $\theta=30^{\circ}$: $3\cdot\dfrac12-4\cdot\dfrac18=1=\sin90^{\circ}$ ✓.

### Example 8 (an equation, 6 marks)

Solve $\sin\left(x+\dfrac\pi6\right)=\cos x$ for $0\le x\le2\pi$.

*Solution.* $\sin x\cos\dfrac\pi6+\cos x\sin\dfrac\pi6=\cos x$, so $\dfrac{\sqrt3}2\sin x+\dfrac12\cos x=\cos x$ and $\dfrac{\sqrt3}2\sin x=\dfrac12\cos x$. Then $\tan x=\dfrac1{\sqrt3}$ (note that $\cos x=0$ gives $\sin x=0$, impossible, so division is legitimate), giving $x=\dfrac\pi6,\ \dfrac{7\pi}6$.

Check $x=\dfrac\pi6$: $\sin\dfrac\pi3=0.866=\cos\dfrac\pi6$ ✓.

### Example 9 (collapsing an expression, 5 marks)

Solve $\sin2x\cos x-\cos2x\sin x=\dfrac12$ for $0\le x\le2\pi$.

*Solution.* The left side is $\sin(2x-x)=\sin x$. So $\sin x=\dfrac12$ and $x=\dfrac\pi6,\ \dfrac{5\pi}6$.

### Example 10 (the form $R\sin(x+\alpha)$, 8 marks)

(a) Write $3\sin x+4\cos x$ in the form $R\sin(x+\alpha)$ with $R>0$ and $0<\alpha<\dfrac\pi2$. (b) Hence solve $3\sin x+4\cos x=2$ for $0\le x\le2\pi$. (c) State the maximum value and where it first occurs for $x\ge0$.

*Solution.* (a) $R=\sqrt{9+16}=5$, $\tan\alpha=\dfrac43$, $\alpha=0.927$. So $3\sin x+4\cos x=5\sin(x+0.927)$. (b) $\sin(x+0.927)=0.4$ with $0.927\le x+0.927\le7.21$. Solutions: $x+0.927=\pi-0.4115=2.730$ and $x+0.927=2\pi+0.4115=6.695$ (the principal value $0.4115$ is less than $0.927$, so is outside the interval). So $x=1.80$ and $x=5.77$. (c) The maximum is $5$ when $x+0.927=\dfrac\pi2$, so $x=0.644$.

Check $x=1.8028$: $3\sin(1.8028)+4\cos(1.8028)=3(0.9732)+4(-0.2299)=2.920-0.920=2.00$ ✓.

### Example 11 (the angle between lines, 5 marks)

Find the acute angle between $y=2x+1$ and $y=\dfrac13x-4$.

*Solution.* $\tan\theta=\left|\dfrac{2-\frac13}{1+\frac23}\right|=\dfrac{5/3}{5/3}=1$, so $\theta=45^{\circ}$.

### Example 12 (tangent of a difference, 4 marks)

Given $\tan A=3$ and $\tan B=2$, find $\tan(A-B)$.

*Solution.* $\tan(A-B)=\dfrac{3-2}{1+6}=\dfrac17$.

### Example 13 (deriving the double angle from the compound formula, 4 marks)

Use the formula for $\tan(A+B)$ to show that $\tan2A=\dfrac{2\tan A}{1-\tan^{2}A}$.

*Solution.* With $B=A$: $\tan2A=\dfrac{\tan A+\tan A}{1-\tan A\tan A}=\dfrac{2\tan A}{1-\tan^{2}A}$. $\blacksquare$

## Using your GDC

The calculator is the quickest way to *check* an identity: store values for $A$ and $B$ (say $A=0.7$, $B=1.9$) and compare both sides. Never use a single numerical agreement as a proof; use it to catch sign errors before writing the proof. To check an exact value such as $\sin75^{\circ}=\dfrac{\sqrt6+\sqrt2}4$, evaluate both sides in decimal. For equations, graph $y=\text{left}$ and $y=\text{right}$ and *intersect* in the interval, then compare with the exact solutions. To determine $R$ and $\alpha$, compute $\sqrt{a^{2}+b^{2}}$ and $\tan^{-1}\dfrac ba$ (check the quadrant if $a$ is negative), then plot $3\sin x+4\cos x$ and $5\sin(x+0.927)$ and confirm that the curves coincide. Radian mode is essential in the second part. Menu names vary by model.

## Common mistakes

1. **Distributing**: $\sin(A+B)=\sin A+\sin B$ is false (as is $\cos(A+B)=\cos A+\cos B$).
2. **Sign errors in the cosine formula**: $\cos(A+B)$ has a minus between the terms.
3. **Sign errors in the tangent formula**: the denominator of $\tan(A+B)$ is $1-\tan A\tan B$.
4. **Wrong sign for the missing ratio** when $A$ or $B$ is obtuse.
5. **Not using the quadrant** to choose $A+B$ from a tangent value: $\tan\theta=1$ has solutions $\dfrac\pi4$ and $\dfrac{5\pi}4$.
6. **Forgetting to transform the interval** in $R\sin(x+\alpha)=c$.
7. **A wrong $\alpha$** when $a$ or $b$ is negative: calculate from $R\cos\alpha=a$, $R\sin\alpha=b$ and check both.
8. **Treating a numerical check as a proof**.

## Exam technique and command terms

**Show that** and **prove** need all steps from a stated formula to the result. **Hence** means use the previous part (for instance, to find $\cos\dfrac{\pi}{12}$ hence solve an equation). **Find the exact value** requires surds. **Write in the form** requires values of $R$ and $\alpha$ with the specified restriction ($R>0$, $\alpha$ acute). **Solve** requires all solutions in the interval.

Check the structure of the formulae against the booklet if you are unsure, but learn the sign rule (cosine flips the sign). In an exact-value question, choose the decomposition that uses standard angles: $75^{\circ}=45^{\circ}+30^{\circ}$, $15^{\circ}=60^{\circ}-45^{\circ}$, $105^{\circ}=60^{\circ}+45^{\circ}$. In proofs, work from the more complicated side and keep the same variable; if the right side has only $\sin^{2}$ terms, convert $\cos^{2}$ with $1-\sin^{2}$. For the $R\sin(x+\alpha)$ form, always show the two equations $R\cos\alpha=a$ and $R\sin\alpha=b$ so that the marks for the method are secure.

## Connections

SL 3.5 gave exact values at the standard angles, SL 3.6 the double-angle identities of which the present formulae are the generalisation, and SL 3.8 the techniques for solving equations. In AHL 3.9 reciprocal ratios appear in compound forms such as $\cot(A+B)$, and AHL 3.11 discusses the relationships between the trigonometric functions and the inverse functions. In AHL 1.13, de Moivre's theorem for $n=2$ and $n=3$ gives the same double- and triple-angle identities by comparing real and imaginary parts, and Euler's formula $e^{i(A+B)}=e^{iA}e^{iB}$ yields the compound-angle formulae directly, which is a good consistency check on the signs. In AHL 3.13, the scalar product $\mathbf{a}\cdot\mathbf{b}=|\mathbf{a}||\mathbf{b}|\cos\theta$ for the angle between two vectors in the plane can be derived with $\cos(A-B)$. In Unit 5, the derivative of $\sin x$ is obtained from the limit definition using $\sin(x+h)=\sin x\cos h+\cos x\sin h$, and the integrals of products such as $\sin3x\cos x$ are found by converting products to sums with the identities of this chapter. In SL 3.7 the amplitude of sums of sinusoids appears in modelling; the $R\sin(x+\alpha)$ form is the method.

## Check your understanding

1. Find the exact value of $\sin15^{\circ}$.
2. Find the exact value of $\tan15^{\circ}$.
3. Angles $A$ and $B$ are acute with $\sin A=\dfrac5{13}$ and $\cos B=\dfrac35$. Find $\sin(A+B)$ and $\cos(A-B)$.
4. Angles $A$ and $B$ are acute with $\tan A=2$ and $\tan B=3$. Find $\tan(A+B)$ and hence $A+B$ in radians, as a multiple of $\pi$.
5. Simplify $\cos\left(x+\dfrac\pi6\right)+\cos\left(x-\dfrac\pi6\right)$.
6. Prove that $\cos(A+B)\cos(A-B)=\cos^{2}A-\sin^{2}B$.
7. Prove that $\cos3\theta=4\cos^{3}\theta-3\cos\theta$.
8. Solve $\cos\left(x-\dfrac\pi3\right)=\sin x$ for $0\le x\le2\pi$, giving exact answers.
9. Solve $\cos2x\cos x+\sin2x\sin x=\dfrac12$ for $0\le x\le2\pi$.
10. Write $\sqrt3\sin x+\cos x$ in the form $R\sin(x+\alpha)$, and solve $\sqrt3\sin x+\cos x=1$ for $0\le x\le2\pi$.

### Answers

1. $\sin15^{\circ}=\sin(45^{\circ}-30^{\circ})=\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2-\dfrac{\sqrt2}2\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}4$ (about $0.2588$).
2. $\tan15^{\circ}=\tan(45^{\circ}-30^{\circ})=\dfrac{1-\frac1{\sqrt3}}{1+\frac1{\sqrt3}}=\dfrac{\sqrt3-1}{\sqrt3+1}=\dfrac{(\sqrt3-1)^{2}}{2}=2-\sqrt3$.
3. $\cos A=\dfrac{12}{13}$ and $\sin B=\dfrac45$. $\sin(A+B)=\dfrac5{13}\cdot\dfrac35+\dfrac{12}{13}\cdot\dfrac45=\dfrac{15+48}{65}=\dfrac{63}{65}$. $\cos(A-B)=\dfrac{12}{13}\cdot\dfrac35+\dfrac5{13}\cdot\dfrac45=\dfrac{36+20}{65}=\dfrac{56}{65}$.
4. $\tan(A+B)=\dfrac{2+3}{1-6}=-1$. Both angles are acute with $\tan A>1$ and $\tan B>1$, so each exceeds $\dfrac\pi4$ and $A+B$ lies between $\dfrac\pi2$ and $\pi$. So $A+B=\dfrac{3\pi}4$.
5. $2\cos x\cos\dfrac\pi6=\sqrt3\cos x$.
6. LHS $=\cos^{2}A\cos^{2}B-\sin^{2}A\sin^{2}B=\cos^{2}A(1-\sin^{2}B)-(1-\cos^{2}A)\sin^{2}B=\cos^{2}A-\sin^{2}B$. $\blacksquare$
7. $\cos3\theta=\cos2\theta\cos\theta-\sin2\theta\sin\theta=(2\cos^{2}\theta-1)\cos\theta-2\sin^{2}\theta\cos\theta=2\cos^{3}\theta-\cos\theta-2(1-\cos^{2}\theta)\cos\theta=4\cos^{3}\theta-3\cos\theta$. $\blacksquare$
8. $\dfrac12\cos x+\dfrac{\sqrt3}2\sin x=\sin x$, so $\dfrac12\cos x=\left(1-\dfrac{\sqrt3}2\right)\sin x$ and $\tan x=\dfrac1{2-\sqrt3}=2+\sqrt3=\tan\dfrac{5\pi}{12}$. So $x=\dfrac{5\pi}{12},\ \dfrac{17\pi}{12}$.
9. The left side is $\cos(2x-x)=\cos x$, so $\cos x=\dfrac12$ and $x=\dfrac\pi3,\ \dfrac{5\pi}3$.
10. $R=\sqrt{3+1}=2$ and $\tan\alpha=\dfrac1{\sqrt3}$, so $\alpha=\dfrac\pi6$: $2\sin\left(x+\dfrac\pi6\right)$. Then $\sin\left(x+\dfrac\pi6\right)=\dfrac12$ with $\dfrac\pi6\le x+\dfrac\pi6\le\dfrac{13\pi}6$, giving $x+\dfrac\pi6=\dfrac\pi6,\ \dfrac{5\pi}6,\ \dfrac{13\pi}6$ and $x=0,\ \dfrac{2\pi}3,\ 2\pi$.

## Summary

- $\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B$; $\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$; $\tan(A\pm B)=\dfrac{\tan A\pm\tan B}{1\mp\tan A\tan B}$.
- Setting $B=A$ gives the double-angle identities including $\tan2A=\dfrac{2\tan A}{1-\tan^{2}A}$; triple-angle identities follow from $3\theta=2\theta+\theta$.
- Use sums and differences of standard angles for exact values at $15^{\circ}$, $75^{\circ}$, $105^{\circ}$.
- Use quadrants to find the signs of the missing ratios.
- Recognise the formulae in reverse to collapse expressions in equations.
- $a\sin x+b\cos x=R\sin(x+\alpha)$ with $R=\sqrt{a^{2}+b^{2}}$, $R\cos\alpha=a$, $R\sin\alpha=b$; the maximum is $R$.
- The angle between lines: $\tan\theta=\left|\dfrac{m_1-m_2}{1+m_1m_2}\right|$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 6 (PDF p. 8), lists compound-angle identities and tangent double-angle identity under AHL 3.10. Derive and justify all other steps and conditions.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
