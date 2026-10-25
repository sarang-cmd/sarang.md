import type { Draft } from './types';

// New, independently authored non-technology questions. These are not IB past papers.
export const p1: Draft[] = [
  { code: 'SL 1.2', slug: 'sequence-from-two-terms', prompt: String.raw`An arithmetic sequence satisfies $u_3=9$ and $u_8=24$. Find its first term and common difference, then calculate $S_{12}$. Show the equations you use.`, steps: [
    [2, String.raw`$u_1+2d=9$ and $u_1+7d=24$; subtract to obtain $5d=15$ and $d=3$.`],
    [1, String.raw`Substitute back: $u_1=9-2(3)=3$.`],
    [2, String.raw`$S_{12}=\frac{12}{2}[2(3)+11(3)]=6(39)=234$.`],
  ] },
  { code: 'SL 1.7', slug: 'log-domain', prompt: String.raw`Solve $\log_3(2x-1)=2$ over the reals. State and check the domain condition.`, steps: [
    [1, String.raw`The logarithm requires $2x-1>0$, so $x>1/2$.`],
    [1, String.raw`Exponentiate to obtain $2x-1=3^2=9$.`],
    [1, String.raw`$x=5$, which satisfies the original domain and gives $\log_3 9=2$.`],
  ] },
  { code: 'SL 1.9', slug: 'coefficient-of-cubic', prompt: String.raw`Without fully expanding $(2x-1)^5$, find the coefficient of $x^3$. Explain how the correct term index is selected.`, steps: [
    [1, String.raw`Use $T_{r+1}=\binom5r(2x)^{5-r}(-1)^r$.`],
    [1, String.raw`Require $5-r=3$, hence $r=2$.`],
    [2, String.raw`The coefficient is $\binom52 2^3(-1)^2=10(8)=80$.`],
  ] },
  { code: 'AHL 1.11', slug: 'split-rational-function', prompt: String.raw`Express $\dfrac{4x+1}{x(x+1)}$ as a sum of fractions with linear denominators. Give the excluded values of $x$.`, steps: [
    [1, String.raw`Write $(4x+1)/[x(x+1)]=A/x+B/(x+1)$ and clear denominators. $4x+1=A(x+1)+Bx$.`],
    [1, String.raw`Compare constants to get $A=1$; compare $x$ coefficients: $A+B=4$, so $B=3$.`],
    [2, String.raw`The result is $1/x+3/(x+1)$, with $x\neq0,-1$. Recombining gives numerator $(x+1)+3x=4x+1$.`],
  ] },
  { code: 'AHL 1.12', slug: 'complex-quotient', prompt: String.raw`Write $\dfrac{3-2i}{1+i}$ in Cartesian form, then find its modulus exactly.`, steps: [
    [1, String.raw`Multiply top and bottom by $1-i$, the conjugate of the denominator.`],
    [1, String.raw`$(3-2i)(1-i)=1-5i$ and $(1+i)(1-i)=2$, so the quotient is $(1-5i)/2$.`],
    [2, String.raw`Its modulus is $\sqrt{(1/2)^2+(-5/2)^2}=\sqrt{26}/2$.`],
  ] },
  { code: 'AHL 1.13', slug: 'power-in-polar-form', prompt: String.raw`Write $z=1-i$ in polar or Euler form with a valid argument. Use this form to evaluate $z^4$ exactly.`, steps: [
    [1, String.raw`$|z|=\sqrt{1^2+(-1)^2}=\sqrt2$, and an argument is $-\pi/4$.`],
    [1, String.raw`$z=\sqrt2e^{-i\pi/4}$; equivalently use argument $7\pi/4$.`],
    [2, String.raw`$z^4=(\sqrt2)^4e^{-i\pi}=4(-1)=-4$.`],
  ] },
  { code: 'SL 2.2', slug: 'inverse-rational-domain', prompt: String.raw`For $f(x)=\dfrac{2x-3}{x+4}$, $x\neq-4$, find $f^{-1}(x)$ and specify the domain of the inverse.`, steps: [
    [1, String.raw`Set $y=(2x-3)/(x+4)$ and rearrange $yx+4y=2x-3$.`],
    [2, String.raw`Collect $x(y-2)=-3-4y$, giving $x=(3+4y)/(2-y)$.`],
    [2, String.raw`$f^{-1}(x)=(3+4x)/(2-x)$ and its domain is $x\neq2$, the range restriction of $f$.`],
  ] },
  { code: 'SL 2.7', slug: 'inclusive-quadratic-interval', prompt: String.raw`Solve $x^2-7x+10\leq0$ and show why the endpoints are included.`, steps: [
    [1, String.raw`Factor $x^2-7x+10=(x-2)(x-5)$, with zeros $2$ and $5$.`],
    [1, String.raw`The upward-opening quadratic is nonpositive between its zeros.`],
    [1, String.raw`The solution is $2\leq x\leq5$; both endpoints make the expression exactly zero.`],
  ] },
  { code: 'SL 2.11', slug: 'shifted-reflected-parabola', prompt: String.raw`The graph $y=x^2$ is changed to $y=-(x+2)^2+4$. Describe the transformations and find the new vertex and both $x$-intercepts.`, steps: [
    [1, String.raw`Shift left $2$, reflect in the $x$-axis, and shift up $4$.`],
    [1, String.raw`The vertex is $(-2,4)$ and is a maximum.`],
    [2, String.raw`Set $(x+2)^2=4$, so $x+2=\pm2$ and the intercepts are $(-4,0)$ and $(0,0)$.`],
  ] },
  { code: 'AHL 2.12', slug: 'factor-from-remainder', prompt: String.raw`Given $p(x)=x^3-4x^2+x+6$, show that $x-2$ is a factor. Factorize $p$ completely and list its real roots.`, steps: [
    [1, String.raw`$p(2)=8-16+2+6=0$, so the remainder theorem shows $x-2$ is a factor.`],
    [2, String.raw`Division by $x-2$ gives $x^2-2x-3=(x-3)(x+1)$.`],
    [2, String.raw`$p(x)=(x-2)(x-3)(x+1)$, with roots $2,3,-1$.`],
  ] },
  { code: 'SL 3.4', slug: 'sector-exact-units', prompt: String.raw`A circle has radius $9$ cm. A sector has angle $2\pi/3$ radians. Find its arc length and area exactly, with units.`, steps: [
    [1, String.raw`Arc length is $r\theta=9(2\pi/3)=6\pi$ cm.`],
    [2, String.raw`Sector area is $\frac12r^2\theta=\frac12(81)(2\pi/3)=27\pi$ cm$^2$.`],
  ] },
  { code: 'SL 3.8', slug: 'double-angle-roots', prompt: String.raw`Find every solution of $\cos(2x)=0$ for $0\leq x<\pi$. Explain how the interval for $2x$ is used.`, steps: [
    [1, String.raw`From $0\leq x<\pi$ obtain $0\leq2x<2\pi$.`],
    [1, String.raw`Cosine vanishes at $2x=\pi/2$ and $2x=3\pi/2$ in that interval.`],
    [2, String.raw`Divide each angle by $2$: $x=\pi/4$ or $x=3\pi/4$.`],
  ] },
  { code: 'AHL 3.13', slug: 'perpendicular-parameter', prompt: String.raw`Find $k$ such that vectors $(2,-1,2)$ and $(1,4,k)$ are perpendicular. Check that both vectors are nonzero.`, steps: [
    [1, String.raw`Their dot product is $2(1)+(-1)(4)+2k=2k-2$.`],
    [1, String.raw`Set $2k-2=0$, giving $k=1$.`],
    [1, String.raw`Both vectors are nonzero, and the dot product at $k=1$ is $0$, so the angle is a right angle.`],
  ] },
  { code: 'AHL 3.16', slug: 'cross-product-area', prompt: String.raw`Let $\mathbf a=(1,2,0)$ and $\mathbf b=(0,1,1)$. Compute $\mathbf a\times\mathbf b$ and the area of the parallelogram they span.`, steps: [
    [2, String.raw`Using component expansion, $\mathbf a\times\mathbf b=(2,-1,1)$.`],
    [2, String.raw`Its length is $\sqrt{4+1+1}=\sqrt6$, the parallelogram's area in square units.`],
  ] },
  { code: 'SL 4.6', slug: 'union-and-dependence', prompt: String.raw`Events $A$ and $B$ have $P(A)=0.55$, $P(B)=0.40$ and $P(A\cap B)=0.15$. Calculate $P(A\cup B)$ and $P(A\mid B)$. Are the events independent?`, steps: [
    [1, String.raw`$P(A\cup B)=0.55+0.40-0.15=0.80$.`],
    [1, String.raw`$P(A\mid B)=P(A\cap B)/P(B)=0.15/0.40=0.375$.`],
    [2, String.raw`No. $P(A)P(B)=0.55(0.40)=0.22\neq0.15$, so independence fails.`],
  ] },
  { code: 'SL 4.7', slug: 'weighted-variance', prompt: String.raw`A discrete $X$ takes values $1,2,3$ with respective probabilities $0.2,0.5,0.3$. Find $E(X)$ and $\operatorname{Var}(X)$; check that the probabilities define a distribution.`, steps: [
    [1, String.raw`$0.2+0.5+0.3=1$, and every probability is nonnegative.`],
    [1, String.raw`$E(X)=1(0.2)+2(0.5)+3(0.3)=2.1$.`],
    [2, String.raw`$E(X^2)=1(0.2)+4(0.5)+9(0.3)=4.9$; variance $=4.9-(2.1)^2=0.49$.`],
  ] },
  { code: 'SL 4.8', slug: 'binomial-one-success', prompt: String.raw`If $X\sim B(5,0.2)$, find $P(X=1)$ and $E(X)$. Explain the combination factor.`, steps: [
    [1, String.raw`$P(X=1)=\binom51(0.2)(0.8)^4$. The factor $\binom51=5$ selects which trial succeeds.`],
    [1, String.raw`$P(X=1)=5(0.2)(0.4096)=0.4096$.`],
    [1, String.raw`$E(X)=np=5(0.2)=1$.`],
  ] },
  { code: 'SL 5.3', slug: 'negative-power-derivative', prompt: String.raw`For $f(x)=3x^4-2x^{-1}$, $x\neq0$, find $f'(x)$ and evaluate $f'(1)$.`, steps: [
    [2, String.raw`Apply the power rule term by term: $f'(x)=12x^3+2x^{-2}$, for $x\neq0$.`],
    [1, String.raw`$f'(1)=12+2=14$.`],
  ] },
  { code: 'SL 5.4', slug: 'cubic-tangent-normal', prompt: String.raw`Find the equations of the tangent and the normal to $y=x^3$ at $x=-1$.`, steps: [
    [1, String.raw`The point is $(-1,-1)$ and $dy/dx=3x^2$, giving tangent gradient $3$.`],
    [1, String.raw`$y+1=3(x+1)$, or $y=3x+2$, is the tangent.`],
    [2, String.raw`The normal gradient is $-1/3$, so $y+1=-\frac13(x+1)$.`],
  ] },
  { code: 'SL 5.8', slug: 'classify-stationary-points', prompt: String.raw`For $f(x)=x^3-6x^2+9x$, find and classify all stationary points, giving their coordinates.`, steps: [
    [1, String.raw`$f'(x)=3x^2-12x+9=3(x-1)(x-3)$, so $x=1,3$.`],
    [2, String.raw`$f(1)=4$ and $f(3)=0$, so the candidate points are $(1,4)$ and $(3,0)$.`],
    [2, String.raw`$f''(x)=6x-12$. At $1$ it is $-6$, a local maximum; at $3$ it is $6$, a local minimum.`],
  ] },
  { code: 'SL 5.10', slug: 'reverse-chain-antiderivative', prompt: String.raw`Find $\int4x(2x^2+1)^3\,dx$. Include the constant of integration and check by differentiation.`, steps: [
    [1, String.raw`Set $u=2x^2+1$ so $du=4x\,dx$.`],
    [1, String.raw`The integral becomes $\int u^3\,du=u^4/4+C=(2x^2+1)^4/4+C$.`],
    [1, String.raw`Differentiating yields $(1/4)4(2x^2+1)^3(4x)$, the original integrand.`],
  ] },
  { code: 'SL 5.11', slug: 'area-below-axis', prompt: String.raw`Find the geometric area between $y=x^2-1$ and the $x$-axis for $-1\leq x\leq1$. Explain why the integral of $x^2-1$ is not the required positive area.`, steps: [
    [1, String.raw`The curve is nonpositive on $[-1,1]$, so integrate $1-x^2$ for positive area.`],
    [2, String.raw`$A=\int_{-1}^{1}(1-x^2)\,dx=[x-x^3/3]_{-1}^{1}=4/3$ square units.`],
    [1, String.raw`The integral of $x^2-1$ would be $-4/3$, a signed area, not a negative physical area.`],
  ] },
  { code: 'AHL 5.16', slug: 'parts-with-sine', prompt: String.raw`Evaluate $\int x\sin x\,dx$ using integration by parts. Confirm your result by differentiation.`, steps: [
    [1, String.raw`Take $u=x$, $dv=\sin x\,dx$, giving $du=dx$ and $v=-\cos x$.`],
    [1, String.raw`$\int x\sin x\,dx=-x\cos x+\int\cos x\,dx=-x\cos x+\sin x+C$.`],
    [1, String.raw`Its derivative is $-\cos x+x\sin x+\cos x=x\sin x$.`],
  ] },
  { code: 'AHL 5.19', slug: 'cosine-polynomial', prompt: String.raw`Write the Maclaurin polynomial for $\cos x$ through the $x^4$ term. Use it to approximate $\cos(0.2)$, giving six decimal places.`, steps: [
    [2, String.raw`The even derivatives at zero give $\cos x\approx1-x^2/2!+x^4/4!=1-x^2/2+x^4/24$.`],
    [2, String.raw`At $x=0.2$, $1-0.04/2+0.0016/24=0.98006666\ldots\approx0.980067$.`],
  ] },
];
