// Independently written teaching guides for the two extra supplied files:
// "Logs and Proofs Past IB Questions.md" (L1-L24) and "Collected Questions.md" (C1-C3).
// Nothing here is an official IB mark scheme. Totals are stated where the supplied
// file states a mark total; otherwise the app assigns its own working total and says so.

const M = String.raw;

/** key -> { topic, scheme: [[code, text, marks]], checks: [{label, value}], notices } */
export const logsGuides = {
  L1: {
    topic: 'Logarithms',
    scheme: [
      ['M1', M`Write $t=\log_5 x$. Then $\log_x 5=\frac{1}{t}$, so the equation becomes $9t=\frac{25}{t}$.`, 2],
      ['M1', M`Multiply by $t$: $9t^2=25$, so $t=\pm\frac{5}{3}$.`, 2],
      ['A1', M`$x=5^{5/3}$ or $x=5^{-5/3}$. Both values are positive, so both satisfy the original equation.`, 2],
    ],
    checks: [
      { label: 'Exponent in the larger solution, as p/q', value: 5 / 3, tolerance: 0.001 },
      { label: 'Exponent in the smaller solution, as p/q', value: -5 / 3, tolerance: 0.001 },
    ],
  },
  L2: {
    topic: 'Logarithms',
    scheme: [
      ['M1', M`Use the power law $2\ln(x+1)=\ln(x+1)^2$, then the sum and difference laws to form one logarithm.`, 2],
      ['A1', M`$(x^2-1)(x^2+x)=x(x-1)(x+1)^2$, so the factor $(x+1)^2$ cancels against the denominator.`, 2],
      ['A1', M`The expression is $\ln\left(x(x-1)\right)$, valid for $x>1$.`, 1],
    ],
    checks: [{ label: 'ln 6, the simplified value at x = 3 (4 d.p.)', value: 1.791759, tolerance: 0.001 }],
  },
  L3: {
    topic: 'Exponential Equations',
    scheme: [
      ['M1', M`Write $4^{x-1}=\frac{(2^x)^2}{4}$ and substitute $u=2^x$ to obtain $\frac{u^2}{4}=u+8$.`, 2],
      ['M1', M`Rearrange: $u^2-4u-32=0$, so $(u-8)(u+4)=0$ and $u=8$ or $u=-4$.`, 2],
      ['A1', M`$2^x>0$ for every real $x$, so $u=-4$ is rejected. $2^x=8$ gives $x=3$.`, 1],
    ],
    checks: [{ label: 'x', value: 3 }],
  },
  L4: {
    topic: 'Exponential Equations',
    scheme: [
      ['M1', M`Let $u=3^x>0$. Since $9^x=u^2$, the equation becomes $3u^2+5u-2=0$.`, 2],
      ['M1', M`Factorise: $(3u-1)(u+2)=0$, so $u=\frac{1}{3}$ or $u=-2$.`, 2],
      ['A1', M`Reject $u=-2$. $3^x=\frac{1}{3}=3^{-1}$ gives $x=-1$.`, 1],
    ],
    checks: [{ label: 'x', value: -1 }],
  },
  L5: {
    topic: 'Exponential Equations',
    scheme: [
      ['M1', M`Take natural logarithms: $(x-1)\ln 8=3x\ln 6$.`, 2],
      ['M1', M`Collect the $x$ terms: $x(\ln 8-3\ln 6)=\ln 8$.`, 2],
      ['A1', M`Using $\ln 8=3\ln 2$ and $\ln 6=\ln 2+\ln 3$, the denominator is $-3\ln 3$, so $x=-\frac{\ln 2}{\ln 3}\approx-0.631$.`, 1],
    ],
    checks: [{ label: 'x (4 d.p.)', value: -0.630930, tolerance: 0.001 }],
  },
  L6: {
    topic: 'Normal Distribution',
    scheme: [
      ['M1', M`Standardise: $P(X<220)=0.88$ corresponds to $z=\Phi^{-1}(0.88)\approx1.175$.`, 2],
      ['M1', M`Set $\frac{220-200}{\sigma}=1.175$.`, 1],
      ['A1', M`$\sigma=\frac{20}{1.175}\approx17.0$ grams.`, 1],
    ],
    checks: [{ label: 'Standard deviation in grams (1 d.p.)', value: 17.021, tolerance: 0.05 }],
  },
  L7: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=1$: $4^1+15-1=18=9\times2$, so the statement holds.`, 1],
      ['M1', M`Assume $4^k+15k-1=9m$ for some integer $m$.`, 2],
      ['A1', M`$4^{k+1}+15(k+1)-1=4\left(4^k\right)+15k+14=4\left(4^k+15k-1\right)-45k+18$.`, 2],
      ['R1', M`Both parts are divisible by $9$, so the statement holds for $k+1$; with the base case, for all positive integers $n$.`, 1],
    ],
    checks: [{ label: 'Value of 4^n + 15n - 1 at n = 2', value: 45 }],
  },
  L8: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Corrected statement: price the claim for $5^{2n}-2^{3n}$ with $n=1$: $25-8=17=17\times1$.`, 1],
      ['M1', M`Assume $5^{2k}-2^{3k}=17m$ for some integer $m$.`, 2],
      ['A1', M`$5^{2(k+1)}-2^{3(k+1)}=25\left(5^{2k}\right)-8\left(2^{3k}\right)=25\left(5^{2k}-2^{3k}\right)+17\left(2^{3k}\right)$.`, 3],
      ['R1', M`This is $17\left(25m+2^{3k}\right)$, so divisibility passes from $k$ to $k+1$ and holds for all $n\in\mathbb{Z}^+$.`, 1],
    ],
    checks: [{ label: 'Value of 5^(2n) - 2^(3n) at n = 2', value: 561 }],
    notices: [
      'As transcribed the claim is false: at n = 1 the expression 5^(2n) - 2^(2n) equals 21, which is not divisible by 17. The guide above proves the standard version of this question, 5^(2n) - 2^(3n), whose values are divisible by 17. Check the paper before relying on the transcribed version.',
    ],
  },
  L9: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=1$: $1=4-\frac{1+2}{2^0}=4-3=1$.`, 1],
      ['M1', M`Assume $1+2\left(\frac12\right)+\cdots+k\left(\frac12\right)^{k-1}=4-\frac{k+2}{2^{k-1}}$.`, 1],
      ['A1', M`Add the next term: $4-\frac{k+2}{2^{k-1}}+(k+1)\left(\frac12\right)^{k}$.`, 2],
      ['A1', M`Put over $2^k$: $4-\frac{2(k+2)-(k+1)}{2^k}=4-\frac{k+3}{2^k}=4-\frac{(k+1)+2}{2^{(k+1)-1}}$.`, 2],
      ['R1', M`The form required for $n=k+1$ is obtained, so the identity holds for all $n\in\mathbb{Z}^+$.`, 1],
    ],
    checks: [{ label: 'Left-hand side for n = 4', value: 3.25 }],
  },
  L10: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Since $\;{}^{r}C_1=r$, the claim is $\sum_{r=1}^{n}r=\frac{n(n+1)}{2}={}^{n+1}C_2$. Base case $n=1$: $1={}^2C_2=1$.`, 1],
      ['M1', M`Assume $\sum_{r=1}^{k}{}^rC_1={}^{k+1}C_2=\frac{k(k+1)}{2}$.`, 1],
      ['M1', M`The next sum is $\frac{k(k+1)}{2}+(k+1)$, using $\;{}^{k+1}C_1=k+1$.`, 2],
      ['A1', M`$\frac{k(k+1)+2(k+1)}{2}=\frac{(k+1)(k+2)}{2}={}^{k+2}C_2$.`, 2],
      ['R1', M`This is the required form for $n=k+1$, so the identity holds for all $n\in\mathbb{Z}^+$.`, 1],
    ],
    checks: [{ label: 'Sum for n = 5', value: 15 }],
  },
  L11: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=1$: $1+11=12=3\times4$.`, 1],
      ['M1', M`Assume $k^3+11k=3m$ for some integer $m$.`, 1],
      ['A1', M`Expand $(k+1)^3+11(k+1)=k^3+3k^2+14k+12$.`, 2],
      ['A1', M`Group as $\left(k^3+11k\right)+3\left(k^2+k+4\right)=3m+3\left(k^2+k+4\right)$.`, 2],
      ['R1', M`The expression is a multiple of $3$ for $k+1$, so the claim holds for all $n\in\mathbb{Z}^+$.`, 1],
    ],
    checks: [{ label: 'Value of n^3 + 11n at n = 2', value: 30 }],
  },
  L12: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=1$: $\frac{1}{2!}=\frac12$ and $1-\frac{1}{2!}=\frac12$.`, 1],
      ['M1', M`Assume $\sum_{r=1}^{k}\frac{r}{(r+1)!}=1-\frac{1}{(k+1)!}$.`, 1],
      ['A1', M`Add the next term: $1-\frac{1}{(k+1)!}+\frac{k+1}{(k+2)!}$.`, 2],
      ['A1', M`Since $\frac{1}{(k+1)!}=\frac{k+2}{(k+2)!}$, the last two terms give $1-\frac{(k+2)-(k+1)}{(k+2)!}=1-\frac{1}{(k+2)!}$.`, 2],
      ['R1', M`This is the required form for $n=k+1$, so the identity holds for every integer $n\ge1$.`, 1],
    ],
    checks: [{ label: 'Sum for n = 3 (4 d.p.)', value: 0.958333, tolerance: 0.001 }],
  },
  L13: {
    topic: 'Logarithm Equations',
    scheme: [
      ['M1', M`First equation: $\log_2 6x=\log_2 2+\log_2 y^2$, so $6x=2y^2$ and $3x=y^2$.`, 2],
      ['M1', M`Second equation: $1+\log_5 x=\log_5 5x$, so $5x=15y-25$ and $x=3y-5$.`, 2],
      ['A1', M`Substitute: $y^2=9y-15$, so $y^2-9y+15=0$ and $y=\frac{9\pm\sqrt{21}}{2}$.`, 2],
      ['A1', M`Both roots are positive, giving $x=3y-5$: $x\approx15.37$ with $y\approx6.791$, and $x\approx1.63$ with $y\approx2.209$.`, 1],
    ],
    checks: [
      { label: 'Larger value of y (3 d.p.)', value: 6.791288, tolerance: 0.001 },
      { label: 'Smaller value of y (3 d.p.)', value: 2.208712, tolerance: 0.001 },
    ],
  },
  L14: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=1$: $1\times1!=1$ and $(1+1)!-1=1$.`, 1],
      ['M1', M`Assume $\sum_{r=1}^{k}r\,r!=(k+1)!-1$.`, 2],
      ['A1', M`Add the next term: $(k+1)!-1+(k+1)(k+1)!$.`, 3],
      ['R1', M`$(k+1)!\left[1+(k+1)\right]-1=(k+2)!-1$, the required form for $n=k+1$, so the identity holds for all $n\in\mathbb{Z}^+$.`, 2],
    ],
    checks: [{ label: 'Sum for n = 4', value: 119 }],
  },
  L15: {
    topic: 'Proof by Induction',
    scheme: [
      ['M1', M`Base case $n=3$: $\binom22=1$ and $\binom33=1$.`, 1],
      ['M1', M`Assume $\binom22+\binom32+\cdots+\binom{k-1}{2}=\binom{k}{3}$.`, 2],
      ['M1', M`When $n=k+1$ the last added term is $\binom{k}{2}$, giving $\binom{k}{3}+\binom{k}{2}$.`, 2],
      ['A1', M`Pascal's identity: $\binom{k}{3}+\binom{k}{2}=\binom{k+1}{3}$, which is the required right-hand side.`, 2],
      ['R1', M`The base case and the step from $k$ to $k+1$ prove the result for all integers $n\ge3$.`, 2],
    ],
    checks: [{ label: 'Sum for n = 6', value: 20 }],
  },
  L16: {
    topic: 'Geometric Series',
    scheme: [
      ['M1', M`The ratio is $r=-\frac13$ with $|r|<1$, so the sum is $\frac{27}{1-\left(-\frac13\right)}$.`, 2],
      ['A1', M`$S_\infty=\frac{27}{4/3}=\frac{81}{4}=20.25$.`, 1],
      ['M1', M`Base case $n=1$: $a=\frac{a(1-r)}{1-r}=a$, which holds for $r\neq1$.`, 2],
      ['M1', M`Assume $a+ar+\cdots+ar^{k-1}=\frac{a\left(1-r^k\right)}{1-r}$.`, 1],
      ['A1', M`Add the next term: $\frac{a\left(1-r^k\right)}{1-r}+ar^k=\frac{a-a r^k+ar^k-ar^{k+1}}{1-r}=\frac{a\left(1-r^{k+1}\right)}{1-r}$.`, 3],
      ['R1', M`This is the required form, so the formula holds for all $n\in\mathbb{Z}^+$ when $r\neq1$; for $r=1$ each side equals $na$.`, 1],
    ],
    checks: [{ label: 'Sum of the infinite series', value: 20.25 }],
  },
  L17: {
    topic: 'Arithmetic and Geometric Series',
    scheme: [
      ['M1', M`$S_6=\frac{6}{2}\left(2u_1+5d\right)=81$ gives $2u_1+5d=27$; $S_{11}=\frac{11}{2}\left(2u_1+10d\right)=231$ gives $2u_1+10d=42$.`, 2],
      ['A1', M`Subtract: $5d=15$, so $d=3$.`, 2],
      ['A1', M`Then $2u_1+15=27$, so $u_1=6$.`, 2],
      ['M1', M`$S_2=a(1+r)=1$ and $S_4=a(1+r)\left(1+r^2\right)=5$, so $1+r^2=5$.`, 2],
      ['A1', M`$r^2=4$; all terms are positive so $r=2$.`, 2],
      ['A1', M`$a(1+2)=1$ gives $a=\frac13$.`, 1],
      ['M1', M`$r$th term of the arithmetic series: $6+3(r-1)=3r+3=3(r+1)$.`, 1],
      ['M1', M`$r$th term of the geometric series: $\frac13\cdot2^{r-1}$.`, 1],
      ['A1', M`The product is $(r+1)2^{r-1}$, as required.`, 1],
      ['M1', M`Base case $n=1$: $(1+1)2^0=2$ and $1\cdot2^1=2$.`, 1],
      ['M1', M`Assume $\sum_{r=1}^{k}(r+1)2^{r-1}=k2^k$.`, 1],
      ['A1', M`Add the next term: $k2^k+(k+2)2^{k}$.`, 2],
      ['A1', M`$2^k\left(k+k+2\right)=2^{k+1}(k+1)$, the required form for $n=k+1$.`, 2],
      ['R1', M`The base case and the step prove the identity for all $n\in\mathbb{Z}^+$.`, 1],
    ],
    checks: [
      { label: 'First term of the arithmetic series', value: 6 },
      { label: 'Common difference', value: 3 },
      { label: 'First term of the geometric series (3 d.p.)', value: 0.333333, tolerance: 0.001 },
      { label: 'Common ratio of the geometric series', value: 2 },
    ],
  },
  L18: {
    topic: 'Vectors and Planes',
    scheme: [
      ['M1', M`$\vec{OA}=\begin{pmatrix}1\\-1\\4\end{pmatrix}$ and $\vec{AB}=\begin{pmatrix}1\\-1\\1\end{pmatrix}$.`, 1],
      ['M1', M`$\vec{OA}\cdot\vec{AB}=1+1+4=6$; $|\vec{OA}|=\sqrt{18}$, $|\vec{AB}|=\sqrt3$.`, 2],
      ['A1', M`$\cos\theta=\frac{6}{\sqrt{54}}=\frac{\sqrt6}{3}\approx0.816$.`, 2],
      ['A1', M`$L_1:\ \mathbf{r}=\begin{pmatrix}1\\-1\\4\end{pmatrix}+t\begin{pmatrix}1\\-1\\1\end{pmatrix}$.`, 2],
      ['M1', M`Equate components with $L_2$: $1+t=2+2s$, $-1-t=4+s$, $4+t=7+3s$.`, 2],
      ['M1', M`The first two give $t=1+2s$ and $-2-2s=4+s$, so $s=-2$ and $t=-3$.`, 2],
      ['A1', M`The third equation is satisfied: $1=1$.`, 1],
      ['A1', M`The point of intersection is $(-2,\,2,\,1)$.`, 2],
      ['M1', M`The plane contains the direction $\begin{pmatrix}2\\1\\3\end{pmatrix}$ and the vector from $(2,4,7)$ to $A(1,-1,4)$, which is $\begin{pmatrix}-1\\-5\\-3\end{pmatrix}$.`, 2],
      ['M1', M`Normal $\begin{pmatrix}2\\1\\3\end{pmatrix}\times\begin{pmatrix}-1\\-5\\-3\end{pmatrix}=\begin{pmatrix}12\\3\\-9\end{pmatrix}$, so use $\mathbf{n}=\begin{pmatrix}4\\1\\-3\end{pmatrix}$.`, 2],
      ['A1', M`Through $A$: $4(x-1)+(y+1)-3(z-4)=0$, that is $4x+y-3z+9=0$.`, 2],
    ],
    checks: [
      { label: 'Cosine of the angle (3 d.p.)', value: 0.816497, tolerance: 0.001 },
      { label: 'x-coordinate of the intersection point', value: -2 },
      { label: 'z-coordinate of the intersection point', value: 1 },
      { label: 'Constant term in 4x + y - 3z + ... = 0', value: 9 },
    ],
  },
  L19: {
    topic: 'Vectors and Planes',
    scheme: [
      ['M1', M`Normals: $\mathbf{n}_1=\begin{pmatrix}-2\\1\\-1\end{pmatrix}$ and $\mathbf{n}_2=\begin{pmatrix}1\\2\\-1\end{pmatrix}$.`, 2],
      ['M1', M`$\mathbf{n}_1\cdot\mathbf{n}_2=-2+2+1=1$, and $|\mathbf{n}_1|=|\mathbf{n}_2|=\sqrt6$.`, 2],
      ['A1', M`$\cos\theta=\frac{1}{6}\approx0.167$.`, 1],
    ],
    checks: [{ label: 'Cosine of the angle (4 d.p.)', value: 1 / 6, tolerance: 0.001 }],
  },
  L20: {
    topic: 'Logarithm Equations',
    scheme: [
      ['M1', M`Let $u=\ln x$. Then $2u^2=3u-1$.`, 2],
      ['M1', M`$2u^2-3u+1=0$, so $(2u-1)(u-1)=0$ and $u=\frac12$ or $u=1$.`, 2],
      ['A1', M`$x=e^{1/2}=\sqrt{e}$ or $x=e$.`, 1],
    ],
    checks: [
      { label: 'Smaller solution (4 d.p.)', value: 1.648721, tolerance: 0.001 },
      { label: 'Larger solution (4 d.p.)', value: 2.718282, tolerance: 0.001 },
    ],
  },
  L21: {
    topic: 'Logarithm Equations',
    scheme: [
      ['M1', M`$|\ln(x+3)|=1$ means $\ln(x+3)=1$ or $\ln(x+3)=-1$.`, 2],
      ['A1', M`$x+3=e$ gives $x=e-3\approx-0.282$.`, 1],
      ['A1', M`$x+3=e^{-1}$ gives $x=e^{-1}-3\approx-2.632$. Both are greater than $-3$, so both are valid.`, 2],
    ],
    checks: [
      { label: 'Larger solution (3 d.p.)', value: -0.281718, tolerance: 0.001 },
      { label: 'Smaller solution (3 d.p.)', value: -2.632121, tolerance: 0.001 },
    ],
  },
  L22: {
    topic: 'Exponential Equations',
    scheme: [
      ['M1', M`Write $2^{2x+3}=8\left(2^x\right)^2$ and $2^{x+1}=2\left(2^x\right)$, then set $u=2^x$: $8u^2=2u+3$.`, 2],
      ['M1', M`$8u^2-2u-3=0$, so $(4u-3)(2u+1)=0$.`, 1],
      ['A1', M`$u=\frac34$ or $u=-\frac12$; $u>0$ rejects the second.`, 1],
      ['A1', M`$2^x=\frac34$ gives $x=\log_2 3-2$.`, 1],
      ['A1', M`So $a=-2$ and $b=3$.`, 1],
    ],
    checks: [
      { label: 'a', value: -2 },
      { label: 'b', value: 3 },
    ],
  },
  L23: {
    topic: 'Complex Numbers',
    scheme: [
      ['M1', M`$\frac{2}{1-i}=\frac{2(1+i)}{(1-i)(1+i)}=\frac{2(1+i)}{2}=1+i$.`, 2],
      ['A1', M`$\sqrt{z}=(1+i)+1-4i=2-3i$.`, 1],
      ['A1', M`$z=(2-3i)^2=4-12i+9i^2=-5-12i$.`, 2],
    ],
    checks: [
      { label: 'Real part of z', value: -5 },
      { label: 'Imaginary part of z', value: -12 },
    ],
  },
  L24: {
    topic: 'Exponential Equations',
    scheme: [
      ['M1', M`Take logarithms: $x\ln3+(2x+1)\ln4=(x+2)\ln6$.`, 2],
      ['M1', M`Collect $x$: $x\left(\ln3+2\ln4-\ln6\right)=2\ln6-\ln4$.`, 2],
      ['A1', M`So $x=\frac{\ln(36/4)}{\ln(48/6)}=\frac{\ln9}{\ln8}$.`, 1],
      ['A1', M`$a=9$ and $b=8$.`, 1],
    ],
    checks: [
      { label: 'a', value: 9 },
      { label: 'b', value: 8 },
      { label: 'x (4 d.p.)', value: 1.056642, tolerance: 0.001 },
    ],
  },
};

export const collectedGuides = {
  C1: {
    topic: 'Proof by Deduction',
    scheme: [
      ['A1', M`Two even numbers: $2a\cdot2b=4ab=2(2ab)$, which is even.`, 1],
      ['A1', M`Even times odd: $2a(2b+1)=2(2ab+a)$, which is even.`, 1],
      ['A1', M`Even plus odd: $2a+(2b+1)=2(a+b)+1$, which is odd.`, 1],
      ['A1', M`Square of an even number: $(2a)^2=4a^2=2\left(2a^2\right)$, which is even.`, 1],
      ['A1', M`Square of an odd number: $(2a+1)^2=4a^2+4a+1=2\left(2a^2+2a\right)+1$, which is odd.`, 1],
      ['A1', M`Consecutive integers: $n+(n+1)=2n+1$, which is odd.`, 1],
      ['A1', M`Difference of two odd numbers: $(2a+1)-(2b+1)=2(a-b)$, which is even.`, 1],
      ['A1', M`Product of two odd numbers: $(2a+1)(2b+1)=2\left(2ab+a+b\right)+1$, which is odd.`, 1],
      ['A1', M`Consecutive squares: $(n+1)^2-n^2=2n+1$, which is odd.`, 1],
    ],
    checks: [{ label: 'Value of (n+1)^2 - n^2 for n = 7', value: 15 }],
  },
  C2: {
    topic: 'Logarithm Equations',
    scheme: [
      ['M1', M`Question 10, each solved by combining logarithms base 9: (a) $2x=14$, $x=7$; (b) $x/3=19$, $x=57$; (c) $4x=24$, $x=6$; (d) $25x=225$, $x=9$; (e) $x^2/2=32$, $x=8$; (f) $6x=1$, $x=\frac16$; (g) $6\sqrt{x}=30$, $x=25$; (h) $\log_9 x=\log_9 9$, $x=9$.`, 8],
      ['M1', M`Question 11, combining then rejecting values outside the domain: (a) $(x+2)(x-1)=4$ gives $x=2$ ($x=-3$ rejected); (b) $(x+1)(x-3)=9$ gives $x=1+\sqrt{13}$; (c) $\frac{3x-1}{x-1}=4$ gives $x=3$; (d) $x+1=64$ gives $x=63$; (e) $\frac{x+2}{x-6}=4$ gives $x=\frac{26}{3}$; (f) $\frac{2x+5}{x-5}=\frac{x}{2}$ gives $x=10$.`, 6],
      ['M1', M`Question 12: (a) $\log_4 x=1$, $x=4$; (b) $\log_2 x=7$, $x=128$; (c) $\log_7 x=16$, $x=7^{16}$.`, 3],
      ['A1', M`Question 13: with $t=\log_9 x$, $t+\frac{2}{t}=3$ gives $t=1$ or $t=2$, so $x=9$ or $x=81$.`, 1],
    ],
    checks: [
      { label: 'Answer to 10(a)', value: 7 },
      { label: 'Answer to 11(a)', value: 2 },
      { label: 'Answer to 12(b)', value: 128 },
      { label: 'Smaller answer to 13', value: 9 },
    ],
    notices: ['The supplied worksheet gives no mark allocation. This app assigns one mark per equation, which totals 18.'],
  },
  C3: {
    topic: 'Arithmetic Sequences',
    scheme: [
      ['M1', M`$u_5=u_1+4d=4+4d$, and $u_5=\log_2 625$.`, 2],
      ['M1', M`$\log_2 625=\log_2\left(5^4\right)=4\log_2 5$.`, 1],
      ['A1', M`$4d=4\log_2 5-4$, so $d=\log_2 5-1=\log_2\frac52$, giving $p=\frac52$.`, 2],
    ],
    checks: [
      { label: 'Value of p', value: 2.5, tolerance: 0 },
      { label: 'Common difference (4 d.p.)', value: 1.321928, tolerance: 0.001 },
    ],
  },
};
