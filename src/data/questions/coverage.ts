import type { Draft } from './types';

// Original questions for syllabus codes that had no authored practice item.
// P1 is non-technology style; P2 allows, but does not always require, technology.
export const coverageP1: Draft[] = [
  { code: 'SL 1.1', slug: 'normalize-standard-form-product', prompt: String.raw`Express $0.00036$ in standard form. Then calculate $(3.6\times10^{-4})(2.5\times10^6)$ and give the result in standard form.`, steps: [
    [1, String.raw`Move the decimal point four places: $0.00036=3.6\times10^{-4}$.`],
    [1, String.raw`Multiply coefficients and add exponents: $3.6(2.5)\times10^{-4+6}=9\times10^2$.`],
    [1, String.raw`The coefficient $9$ lies in $[1,10)$, so $9\times10^2$ is normalized.`],
  ] },
  { code: 'SL 1.5', slug: 'logarithm-as-inverse', prompt: String.raw`Solve $\log_2(x+2)=3$ over the reals. State the domain and check the solution by substituting into the logarithm.`, steps: [
    [1, String.raw`Require $x+2>0$, hence $x>-2$.`],
    [1, String.raw`Invert the logarithm: $x+2=2^3=8$, so $x=6$.`],
    [1, String.raw`$6>-2$ and $\log_2(6+2)=\log_2 8=3$.`],
  ] },
  { code: 'SL 1.6', slug: 'consecutive-product-is-even', prompt: String.raw`Prove that $n(n+1)$ is even for every integer $n$. Explain why checking a list of examples would not complete the proof.`, steps: [
    [1, String.raw`Every integer $n$ is either even or odd. If $n$ is even, $n(n+1)$ has an even factor.`],
    [1, String.raw`If $n$ is odd, $n+1$ is even, so $n(n+1)$ again has an even factor.`],
    [1, String.raw`The two cases cover every integer, proving the claim. A finite list of examples cannot establish a universal statement.`],
  ] },
  { code: 'AHL 1.10', slug: 'general-binomial-first-three-terms', prompt: String.raw`Expand $(1+2x)^{-1/2}$ through the $x^2$ term and translate the standard $|t|<1$ condition into an open interval for $x$. Do not assume this condition settles endpoint behavior.`, steps: [
    [2, String.raw`Use $(1+t)^\alpha=1+\alpha t+\frac{\alpha(\alpha-1)}{2}t^2+\cdots$ with $\alpha=-1/2$ and $t=2x$.`],
    [2, String.raw`Substituting gives $1-\frac12(2x)+\frac{(-1/2)(-3/2)}{2}(2x)^2=1-x+\frac32x^2+\cdots$.`],
    [1, String.raw`The noninteger binomial expansion requires $|2x|<1$, so $-1/2<x<1/2$. The strict condition does not decide convergence at either endpoint.`],
  ] },
  { code: 'AHL 1.15', slug: 'odd-sum-induction', prompt: String.raw`Use mathematical induction to prove $1+3+5+\cdots+(2n-1)=n^2$ for every positive integer $n$. Include a base case, an explicit hypothesis and an induction step.`, steps: [
    [1, String.raw`Base case $n=1$: the left side is $1$, equal to $1^2$.`],
    [1, String.raw`Assume for some positive $k$ that $1+3+\cdots+(2k-1)=k^2$.`],
    [2, String.raw`Add the next odd number $2k+1$: $k^2+(2k+1)=(k+1)^2$, which is the required sum through term $k+1$.`],
    [1, String.raw`The base case and implication from $k$ to $k+1$ prove the formula for all positive integers.`],
  ] },
  { code: 'SL 2.1', slug: 'gradient-through-two-points', prompt: String.raw`Find the equation of the line through $(2,-1)$ and $(6,7)$ in the form $y=mx+c$. State its gradient and $y$-intercept.`, steps: [
    [1, String.raw`Gradient $m=(7-(-1))/(6-2)=8/4=2$.`],
    [1, String.raw`Using $(2,-1)$ gives $-1=2(2)+c$, hence $c=-5$.`],
    [1, String.raw`The line is $y=2x-5$, with gradient $2$ and $y$-intercept $(0,-5)$. The second point satisfies $7=2(6)-5$.`],
  ] },
  { code: 'SL 2.5', slug: 'compositions-and-inverse-domains', prompt: String.raw`Let $f(x)=3x-2$ for $x\in\mathbb R$ and $g(x)=x^2$ for $x\geq0$. Find $f\circ g$, $g\circ f$ and $f^{-1}$, stating their domains.`, steps: [
    [1, String.raw`$(f\circ g)(x)=3x^2-2$ with domain $x\geq0$, inherited from $g$.`],
    [2, String.raw`$(g\circ f)(x)=(3x-2)^2$ requires the input to $g$ to be nonnegative: $3x-2\geq0$, hence $x\geq2/3$.`],
    [2, String.raw`Solving $y=3x-2$ for $x$ gives $f^{-1}(x)=(x+2)/3$ on $\mathbb R$. The two compositions are generally not the same.`],
  ] },
  { code: 'SL 2.6', slug: 'complete-square-and-roots', prompt: String.raw`Rewrite $x^2-6x+5$ in completed-square form. Hence give the vertex and solve $x^2-6x+5=0$ without a calculator.`, steps: [
    [2, String.raw`$x^2-6x+5=(x-3)^2-9+5=(x-3)^2-4$.`],
    [1, String.raw`The vertex is $(3,-4)$; the coefficient of the square is positive, so it is a minimum.`],
    [1, String.raw`$(x-3)^2=4$, giving $x-3=\pm2$ and roots $x=1,5$.`],
  ] },
  { code: 'SL 2.8', slug: 'reciprocal-shifts', prompt: String.raw`For $h(x)=3+\dfrac{2}{x-1}$, find its domain and range. Give the vertical and horizontal asymptotes and explain why neither is crossed by an undefined value.`, steps: [
    [1, String.raw`The denominator vanishes at $x=1$, so the domain is $\mathbb R\setminus\{1\}$ and the vertical asymptote is $x=1$.`],
    [2, String.raw`Since $2/(x-1)$ is never zero, $h(x)$ cannot equal $3$. The range is $\mathbb R\setminus\{3\}$ and the horizontal asymptote is $y=3$.`],
    [1, String.raw`At $x=1$ the function is undefined; as $|x|\to\infty$, the reciprocal term tends to zero without becoming zero at any finite $x$.`],
  ] },
  { code: 'AHL 2.13', slug: 'hole-not-pole', prompt: String.raw`For $h(x)=\dfrac{x^2-4}{x-2}$, state the domain and simplify on that domain. Identify the coordinate and type of discontinuity at the excluded value.`, steps: [
    [1, String.raw`Factor the numerator: $x^2-4=(x-2)(x+2)$. The original denominator excludes $x=2$.`],
    [1, String.raw`For $x\neq2$, cancellation yields $h(x)=x+2$. Cancellation does not add $x=2$ to the domain.`],
    [2, String.raw`The graph is the line $y=x+2$ with a removable hole at $(2,4)$, not a vertical asymptote.`],
  ] },
  { code: 'AHL 2.14', slug: 'odd-and-self-inverse', prompt: String.raw`Consider $f(x)=1/x$ on $\mathbb R\setminus\{0\}$. Show that $f$ is odd and self-inverse. Explain why it is not an even function.`, steps: [
    [1, String.raw`$f(-x)=1/(-x)=-1/x=-f(x)$ for every nonzero $x$, so $f$ is odd.`],
    [2, String.raw`$f(f(x))=1/(1/x)=x$ for $x\neq0$, and the intermediate value $1/x$ is nonzero. Thus $f^{-1}=f$ on the same domain and range.`],
    [1, String.raw`It is not even: for example, $f(-1)=-1\neq1=f(1)$.`],
  ] },
  { code: 'AHL 2.16', slug: 'absolute-linear-equation', prompt: String.raw`Solve $|2x-3|=x+1$ for real $x$, accounting for the sign condition on the right-hand side. Check every candidate.`, steps: [
    [1, String.raw`Since the left side is nonnegative, require $x+1\geq0$, or $x\geq-1$.`],
    [2, String.raw`If $2x-3\geq0$, solve $2x-3=x+1$ to obtain $x=4$, consistent with $x\geq3/2$.`],
    [2, String.raw`If $2x-3<0$, solve $-(2x-3)=x+1$ to obtain $x=2/3$, consistent with $x<3/2$.`],
    [1, String.raw`At $4$ both sides equal $5$; at $2/3$ both equal $5/3$. Thus the solution set is $\{2/3,4\}$.`],
  ] },
  { code: 'SL 3.2', slug: 'right-triangle-ratios', prompt: String.raw`In a right triangle, an acute angle $\theta$ has an opposite side of length $5$ and hypotenuse of length $13$. Find the adjacent side and the exact values of $\sin\theta$, $\cos\theta$ and $\tan\theta$.`, steps: [
    [1, String.raw`Pythagoras gives adjacent side $\sqrt{13^2-5^2}=\sqrt{144}=12$.`],
    [2, String.raw`$\sin\theta=5/13$, $\cos\theta=12/13$ and $\tan\theta=5/12$ by opposite, adjacent and hypotenuse.`],
    [1, String.raw`Since the angle is acute, all three ratios are positive; $5^2+12^2=13^2$ checks the side length.`],
  ] },
  { code: 'SL 3.5', slug: 'second-quadrant-unit-circle', prompt: String.raw`Place $\theta=5\pi/6$ on the unit circle. Give the point $(\cos\theta,\sin\theta)$ and the exact value of $\tan\theta$, with the correct signs.`, steps: [
    [1, String.raw`$5\pi/6$ lies in quadrant II with reference angle $\pi/6$.`],
    [2, String.raw`The point is $(-\sqrt3/2,1/2)$, so cosine is negative and sine is positive.`],
    [1, String.raw`$\tan\theta=(1/2)/(-\sqrt3/2)=-1/\sqrt3=-\sqrt3/3$.`],
  ] },
  { code: 'SL 3.6', slug: 'identity-sign-ambiguity', prompt: String.raw`An angle $\theta$ lies in quadrant II and satisfies $\sin\theta=3/5$. Use a Pythagorean identity to determine $\cos\theta$ exactly. Explain the sign choice.`, steps: [
    [1, String.raw`$\sin^2\theta+\cos^2\theta=1$, so $\cos^2\theta=1-(3/5)^2=16/25$.`],
    [1, String.raw`Taking square roots gives $\cos\theta=\pm4/5$ before applying the quadrant.`],
    [1, String.raw`Cosine is negative in quadrant II, hence $\cos\theta=-4/5$.`],
  ] },
  { code: 'AHL 3.9', slug: 'reciprocal-ratios-third-quadrant', prompt: String.raw`An angle $\theta$ lies in quadrant III with $\tan\theta=3/4$. Determine $\sin\theta$, $\cos\theta$, $\sec\theta$, $\csc\theta$ and $\cot\theta$ exactly.`, steps: [
    [2, String.raw`A $3$-$4$-$5$ reference triangle has sine magnitude $3/5$ and cosine magnitude $4/5$. Both are negative in quadrant III: $\sin\theta=-3/5$ and $\cos\theta=-4/5$.`],
    [2, String.raw`Take reciprocals: $\sec\theta=-5/4$ and $\csc\theta=-5/3$.`],
    [1, String.raw`$\cot\theta=1/\tan\theta=4/3$, positive in quadrant III. The tangent check is $(-3/5)/(-4/5)=3/4$.`],
  ] },
  { code: 'AHL 3.12', slug: 'unit-vector-in-space', prompt: String.raw`Given $\mathbf v=(3,-4,12)$, find its magnitude and the unit vector in its direction. Check the new vector has magnitude $1$.`, steps: [
    [1, String.raw`$|\mathbf v|=\sqrt{3^2+(-4)^2+12^2}=\sqrt{169}=13$.`],
    [1, String.raw`Divide each component by $13$: $\hat{\mathbf v}=(3/13,-4/13,12/13)$.`],
    [1, String.raw`$|\hat{\mathbf v}|^2=(9+16+144)/169=1$, so its magnitude is $1$.`],
  ] },
  { code: 'SL 5.1', slug: 'derivative-from-a-limit', prompt: String.raw`Starting from the difference quotient, find the derivative of $f(x)=x^2$ at a general point $x=a$. Hence find the gradient of its tangent at $x=2$.`, steps: [
    [2, String.raw`$[f(a+h)-f(a)]/h=[(a+h)^2-a^2]/h=(2ah+h^2)/h=2a+h$ for $h\neq0$.`],
    [1, String.raw`As $h\to0$, the quotient tends to $2a$, so $f'(a)=2a$.`],
    [1, String.raw`At $a=2$, the tangent gradient is $f'(2)=4$.`],
  ] },
];

export const coverageP2: Draft[] = [
  { code: 'SL 2.3', slug: 'graph-of-an-absolute-shift', prompt: String.raw`Sketch or graph $f(x)=|x-2|+1$. Give its vertex, domain, range and intercepts; justify whether it meets the $x$-axis.`, steps: [
    [1, String.raw`$|x-2|$ has its minimum at $x=2$, so the vertex is $(2,1)$.`],
    [2, String.raw`Domain is $\mathbb R$ and range is $[1,\infty)$, since an absolute value cannot be negative.`],
    [2, String.raw`At $x=0$, $f(0)=3$, giving $y$-intercept $(0,3)$. There is no $x$-intercept because $f(x)\geq1$.`],
  ] },
  { code: 'SL 2.10', slug: 'graphical-and-algebraic-crossings', prompt: String.raw`Graph $y=x^2-3$ and $y=x+1$ in a window showing both intersections. Find their intersection coordinates exactly and give three-decimal approximations for the $x$-values.`, steps: [
    [1, String.raw`Equating the functions gives $x^2-3=x+1$, or $x^2-x-4=0$.`],
    [2, String.raw`The quadratic formula gives $x=(1\pm\sqrt{17})/2\approx-1.562,\,2.562$.`],
    [2, String.raw`Since $y=x+1$, the points are $((1-\sqrt{17})/2,(3-\sqrt{17})/2)$ and $((1+\sqrt{17})/2,(3+\sqrt{17})/2)$.`],
    [1, String.raw`For example, window $-3\leq x\leq4$ and $-5\leq y\leq7$ contains both crossings.`],
  ] },
  { code: 'AHL 3.11', slug: 'double-angle-with-quadrant', prompt: String.raw`For an angle $\theta$ in quadrant IV, $\cos\theta=3/5$. Find $\sin(2\theta)$ and $\cos(2\theta)$ exactly, then check that their squares sum to $1$.`, steps: [
    [1, String.raw`In quadrant IV, $\sin\theta=-\sqrt{1-(3/5)^2}=-4/5$.`],
    [2, String.raw`$\sin(2\theta)=2(-4/5)(3/5)=-24/25$.`],
    [2, String.raw`$\cos(2\theta)=(3/5)^2-(-4/5)^2=9/25-16/25=-7/25$. The square check is $(576+49)/625=1$.`],
  ] },
  { code: 'AHL 3.15', slug: 'skew-lines-and-distance', prompt: String.raw`In three-dimensional space, $L_1:\mathbf r=(0,0,0)+s(1,0,1)$ and $L_2:\mathbf r=(0,1,0)+t(0,1,1)$. Determine whether the lines intersect, are parallel, coincide or are skew. Find their shortest distance exactly.`, steps: [
    [1, String.raw`Direction vectors $(1,0,1)$ and $(0,1,1)$ are not proportional, so the lines are not parallel or coincident.`],
    [2, String.raw`For an intersection, the $x$-coordinates require $s=0$; the $y$-coordinates require $t=-1$; the $z$-coordinates would require $s=t$, a contradiction. They are skew.`],
    [2, String.raw`The cross product is $(1,0,1)\times(0,1,1)=(-1,-1,1)$ with length $\sqrt3$. The vector between the given points is $(0,1,0)$.`],
    [1, String.raw`Shortest distance is $|(0,1,0)\cdot(-1,-1,1)|/\sqrt3=1/\sqrt3$ length units.`],
  ] },
  { code: 'SL 4.1', slug: 'stratified-sample-allocation', prompt: String.raw`A school has $300$ DP1 pupils and $200$ DP2 pupils. A researcher wants a proportional stratified sample of $50$. Find how many to select from each group, describe how to select them, and identify a weakness of asking only volunteers.`, steps: [
    [1, String.raw`The population has $500$ pupils; DP1's proportion is $300/500=0.6$ and DP2's is $0.4$.`],
    [1, String.raw`Take $0.6(50)=30$ DP1 and $0.4(50)=20$ DP2 pupils.`],
    [1, String.raw`Choose pupils at random within each group, rather than taking the first names on a list.`],
    [1, String.raw`Volunteers may differ systematically from nonvolunteers; correct group proportions alone do not remove selection bias.`],
  ] },
  { code: 'SL 4.2', slug: 'unequal-width-histogram', prompt: String.raw`Two continuous-data classes are $0\leq x<5$ with frequency $10$ and $5\leq x<15$ with frequency $30$. Find both histogram heights and the cumulative frequency at the upper class boundary. Estimate the median by assuming values are uniformly distributed within each class.`, steps: [
    [2, String.raw`The class widths are $5$ and $10$, so frequency densities (histogram heights) are $10/5=2$ and $30/10=3$.`],
    [1, String.raw`Total frequency is $40$ and cumulative frequency by $x=15$ is $40$ (by $x=5$ it is $10$).`],
    [2, String.raw`The median is at cumulative frequency $20$. The second class supplies $30$ observations over width $10$, so interpolation gives $5+(20-10)/(30/10)=5+10/3\approx8.33$.`],
    [1, String.raw`This is an estimate: grouped frequencies do not reveal exact within-class positions.`],
  ] },
  { code: 'SL 4.4', slug: 'regression-y-on-x', prompt: String.raw`A small dataset is $(x,y)=(1,1),(2,2),(3,4),(4,5)$. Find the least-squares regression line of $y$ on $x$ and Pearson's $r$. Use the line to predict $y$ at $x=5$, and comment on extrapolation.`, steps: [
    [2, String.raw`$\bar x=2.5$, $\bar y=3$; centered sums are $S_{xx}=5$, $S_{yy}=10$ and $S_{xy}=7$.`],
    [2, String.raw`Slope $b=S_{xy}/S_{xx}=7/5=1.4$, intercept $a=3-1.4(2.5)=-0.5$, so $\hat y=1.4x-0.5$.`],
    [1, String.raw`$r=S_{xy}/\sqrt{S_{xx}S_{yy}}=7/\sqrt{50}\approx0.98995$, a strong positive linear sample association.`],
    [1, String.raw`At $x=5$, $\hat y=6.5$. This is outside the observed $x$ range, so the extrapolation may not be reliable.`],
  ] },
  { code: 'SL 4.5', slug: 'spinner-expected-counts', prompt: String.raw`A three-outcome spinner has $P(A)=0.2$, $P(B)=0.3$ and $P(C)=0.5$. In $120$ independent spins, find the expected number of $B$ results and the expected number of results that are $A$ or $C$. Explain whether either expectation is guaranteed to occur.`, steps: [
    [1, String.raw`The probabilities sum to $1$, and $P(A\cup C)=0.2+0.5=0.7$ because the outcomes are disjoint.`],
    [1, String.raw`Expected $B$ count is $120(0.3)=36$.`],
    [1, String.raw`Expected count for $A$ or $C$ is $120(0.7)=84$.`],
    [1, String.raw`These are averages over repeated batches under the model, not guaranteed counts in a single batch.`],
  ] },
  { code: 'SL 4.10', slug: 'regression-x-on-y', prompt: String.raw`For $(x,y)=(1,1),(2,2),(3,4),(4,5)$, find the least-squares regression line of $x$ on $y$. Estimate $x$ at $y=6$ and explain why simply inverting the regression line of $y$ on $x$ gives a different line.`, steps: [
    [2, String.raw`$\bar x=2.5$, $\bar y=3$, $S_{xy}=7$, and $S_{yy}=10$. The slope for $x$ on $y$ is $7/10=0.7$.`],
    [2, String.raw`Intercept is $2.5-0.7(3)=0.4$, giving $\hat x=0.7y+0.4$. At $y=6$, estimate $\hat x=4.6$, an extrapolation.`],
    [2, String.raw`The $y$-on-$x$ regression is $\hat y=1.4x-0.5$; rearranging it gives $x=(y+0.5)/1.4$, not $0.7y+0.4$. Different regressions minimize residuals in different directions.`],
  ] },
  { code: 'SL 4.11', slug: 'conditional-independence-table', prompt: String.raw`In a group of $100$ people, $60$ belong to club $A$, $40$ belong to club $B$, and $30$ belong to both. Find $P(A\mid B)$ and decide whether club membership events $A$ and $B$ are independent.`, steps: [
    [2, String.raw`$P(A\mid B)=P(A\cap B)/P(B)=(30/100)/(40/100)=30/40=0.75$.`],
    [1, String.raw`$P(A)=0.60$ and $P(B)=0.40$, giving $P(A)P(B)=0.24$.`],
    [1, String.raw`$P(A\cap B)=0.30\neq0.24$, so the events are not independent. Equivalently, $P(A\mid B)\neq P(A)$.`],
  ] },
  { code: 'SL 5.2', slug: 'monotonicity-from-derivative', prompt: String.raw`For $f(x)=x^3-3x$, find every interval where $f$ increases or decreases. Give and classify its stationary points.`, steps: [
    [1, String.raw`$f'(x)=3x^2-3=3(x-1)(x+1)$, so stationary inputs are $x=-1,1$.`],
    [2, String.raw`Derivative signs are positive for $x<-1$, negative for $-1<x<1$, positive for $x>1$. Thus $f$ increases on $(-\infty,-1)$ and $(1,\infty)$, and decreases on $(-1,1)$.`],
    [2, String.raw`$f(-1)=2$ is a local maximum and $f(1)=-2$ a local minimum, confirmed by the change of derivative sign.`],
  ] },
  { code: 'SL 5.6', slug: 'three-differentiation-rules', prompt: String.raw`Differentiate $F(x)=(x^2+1)^3$, $G(x)=(x^2+1)e^x$ and $H(x)=x/(x+1)$. Name the chain, product or quotient rule used each time and state any restriction.`, steps: [
    [2, String.raw`Chain rule: $F'(x)=3(x^2+1)^2(2x)=6x(x^2+1)^2$.`],
    [2, String.raw`Product rule: $G'(x)=2xe^x+(x^2+1)e^x=e^x(x+1)^2$.`],
    [2, String.raw`Quotient rule: $H'(x)=[(x+1)-x]/(x+1)^2=1/(x+1)^2$ for $x\neq-1$.`],
  ] },
  { code: 'AHL 5.12', slug: 'first-principles-second-derivative', prompt: String.raw`For $f(x)=2x^2-x$, use the definition of the derivative to find $f'(x)$, then find $f''(x)$ and the tangent line at $x=1$.`, steps: [
    [2, String.raw`$[f(x+h)-f(x)]/h=[4xh+2h^2-h]/h=4x+2h-1$ for $h\neq0$.`],
    [1, String.raw`The limit as $h\to0$ is $f'(x)=4x-1$.`],
    [1, String.raw`Differentiating again gives $f''(x)=4$.`],
    [2, String.raw`At $x=1$, $f(1)=1$ and $f'(1)=3$; the tangent is $y-1=3(x-1)$.`],
  ] },
  { code: 'AHL 5.13', slug: 'lhopital-indeterminate-limits', prompt: String.raw`Evaluate $\lim_{x\to0}(e^{2x}-1)/x$ and $\lim_{x\to0}(\ln(1+x)-x)/x^2$. Justify each use of L'Hôpital's rule by checking the initial form.`, steps: [
    [1, String.raw`In both limits the numerator and denominator tend to zero, giving $0/0$; the expressions are differentiable near $0$ within their domains.`],
    [2, String.raw`Differentiate numerator and denominator in the first ratio: $\lim_{x\to0}2e^{2x}/1=2$.`],
    [2, String.raw`For the second ratio, one differentiation gives $[1/(1+x)-1]/(2x)=-1/[2(1+x)]$ for $x\neq0$, so the limit is $-1/2$.`],
  ] },
  { code: 'AHL 5.14', slug: 'related-rates-circle', prompt: String.raw`A point with coordinates $x,y$ measured in cm moves on $x^2+y^2=25$ while $y>0$. At the instant $(x,y)=(3,4)$, $dx/dt=2$ cm/s. Find $dy/dx$ there and $dy/dt$, including the sign and units.`, steps: [
    [2, String.raw`Implicit differentiation with respect to $x$ gives $2x+2y\,dy/dx=0$, hence $dy/dx=-x/y=-3/4$ at $(3,4)$.`],
    [2, String.raw`Differentiate with respect to time: $2x\,dx/dt+2y\,dy/dt=0$, so $dy/dt=-(x/y)\,dx/dt$.`],
    [2, String.raw`At $(3,4)$ with $dx/dt=2$ cm/s, $dy/dt=-(3/4)(2)=-1.5$ cm/s. The negative sign means height falls.`],
  ] },
  { code: 'AHL 5.15', slug: 'exponential-product-and-reverse-chain', prompt: String.raw`Differentiate $f(x)=e^{2x}\sin x$. Then find $\int(2x+3)^4\,dx$ and confirm the antiderivative by differentiation.`, steps: [
    [2, String.raw`Use product and chain rules: $f'(x)=2e^{2x}\sin x+e^{2x}\cos x=e^{2x}(2\sin x+\cos x)$.`],
    [2, String.raw`With $u=2x+3$, $du=2\,dx$, so $\int(2x+3)^4\,dx=\tfrac12\int u^4\,du=(2x+3)^5/10+C$.`],
    [1, String.raw`The derivative of $(2x+3)^5/10$ is $(5/10)(2x+3)^4(2)=(2x+3)^4$.`],
  ] },
];
