import type { Draft } from './types';

// Original calculator-appropriate contexts and investigations, not transcriptions.
export const p2: Draft[] = [
  { code: 'SL 1.3', slug: 'decaying-term-threshold', prompt: String.raw`A modeled sequence starts at $u_1=150$ and each term is $80\%$ of the preceding term. Find the smallest integer $n$ for which $u_n<20$. Use a logarithm or technology and verify neighboring terms.`, steps: [
    [1, String.raw`$u_n=150(0.8)^{n-1}$. Set $150(0.8)^{n-1}<20$.`],
    [2, String.raw`Since $\ln(0.8)<0$, division reverses the inequality: $n-1>\ln(20/150)/\ln(0.8)\approx9.02963$.`],
    [2, String.raw`Smallest integer $n=11$. Check $u_{10}\approx20.133>20$ and $u_{11}\approx16.106<20$.`],
  ] },
  { code: 'SL 1.4', slug: 'nominal-and-real-balance', prompt: String.raw`A €5400 balance earns $3.6\%$ nominal annual interest compounded monthly for two years. Inflation is modeled as $2\%$ per year. Find the nominal future value and its purchasing power in today's euros, to the nearest cent.`, steps: [
    [2, String.raw`Monthly rate is $0.036/12=0.003$ for $24$ periods, so $FV=5400(1.003)^{24}\approx5802.51$ euros.`],
    [2, String.raw`Deflate by $(1.02)^2$: real value $=5400(1.003)^{24}/(1.02)^2\approx5577.19$ euros.`],
    [1, String.raw`Both amounts are rounded only after using full intermediate precision, and real value is expressed in starting-year euros.`],
  ] },
  { code: 'AHL 1.16', slug: 'three-variable-model', prompt: String.raw`Solve the system $2x+y-z=3$, $x-y+2z=5$, $3x+2y+z=10$. Show enough elimination or substitution to distinguish a solution from a calculator-only guess.`, steps: [
    [2, String.raw`From the first equation $y=3-2x+z$. In the second, $x-(3-2x+z)+2z=5$, so $3x+z=8$.`],
    [2, String.raw`In the third, $3x+2(3-2x+z)+z=10$ gives $-x+3z=4$. Solve with $z=8-3x$: $-x+24-9x=4$, so $x=2$, $z=2$.`],
    [2, String.raw`$y=3-2(2)+2=1$. Check $(x,y,z)=(2,1,2)$ in all three original equations.`],
  ] },
  { code: 'SL 2.4', slug: 'calculator-intersections', prompt: String.raw`Sketch or graph $f(x)=x^2-4x+1$ and $g(x)=x+1$. Find all intersection points and give a viewing window that shows both. Verify algebraically.`, steps: [
    [1, String.raw`Set $x^2-4x+1=x+1$, leading to $x^2-5x=x(x-5)=0$.`],
    [2, String.raw`For $x=0$, $y=1$; for $x=5$, $y=6$. Points are $(0,1)$ and $(5,6)$.`],
    [1, String.raw`For example, $x\in[-1,6]$, $y\in[-4,10]$ contains both points and the parabola's vertex. Check both points in $f$ and $g$.`],
  ] },
  { code: 'SL 2.9', slug: 'population-growth-year', prompt: String.raw`A simplified population model is $P(t)=900(1.08)^t$ after $t$ complete years. Find the first whole year for which the model exceeds $1500$. Verify the result against the previous year.`, steps: [
    [1, String.raw`Solve $900(1.08)^t>1500$, equivalently $(1.08)^t>5/3$.`],
    [2, String.raw`$t>\ln(5/3)/\ln(1.08)\approx6.63746$, so the first whole year is $t=7$.`],
    [2, String.raw`$P(6)\approx1428.19<1500$ while $P(7)\approx1542.44>1500$. The result is conditional on the model continuing unchanged.`],
  ] },
  { code: 'AHL 2.15', slug: 'rational-threshold', prompt: String.raw`Solve $\dfrac{x-1}{x+3}\leq2$ for real $x$, stating all exclusions. Check a point in each resulting interval.`, steps: [
    [1, String.raw`Require $x\neq-3$. Subtract $2$: $(-x-7)/(x+3)\leq0$, or $(x+7)/(x+3)\geq0$.`],
    [2, String.raw`Critical values $-7$ and $-3$ give a nonnegative ratio on $(-\infty,-7]$ and $(-3,\infty)$.`],
    [1, String.raw`Include $-7$ because equality holds there; exclude $-3$ because the original denominator is zero. Tests $-8,-5,0$ confirm the signs.`],
  ] },
  { code: 'SL 3.1', slug: 'spatial-coordinate-distance', prompt: String.raw`A drone moves from $A=(1,2,3)$ metres to $B=(7,10,13)$ metres in a Cartesian model. Find the straight-line distance and distinguish it from distance along axis-aligned legs.`, steps: [
    [1, String.raw`Displacement vector is $\overrightarrow{AB}=(6,8,10)$.`],
    [2, String.raw`Straight-line distance $=\sqrt{6^2+8^2+10^2}=\sqrt{200}=10\sqrt2\approx14.14$ m.`],
    [1, String.raw`An axis-aligned path along those legs would have length $6+8+10=24$ m, which is different.`],
  ] },
  { code: 'SL 3.3', slug: 'two-angles-to-a-tower', prompt: String.raw`Two points on level ground, $50$ m apart on the same side of a tower, see its top at elevations $60^\circ$ (nearer point) and $30^\circ$ (farther point). Find the tower's height, assuming its base is level with both points.`, steps: [
    [2, String.raw`Let nearer horizontal distance be $x$ and height $h$. Then $h=x\tan60^\circ=x\sqrt3$ and $h=(x+50)\tan30^\circ=(x+50)/\sqrt3$.`],
    [2, String.raw`Equate: $3x=x+50$, giving $x=25$ m.`],
    [1, String.raw`$h=25\sqrt3\approx43.30$ m; the farther point is $75$ m away and $75\tan30^\circ=25\sqrt3$.`],
  ] },
  { code: 'SL 3.7', slug: 'twelve-hour-wave', prompt: String.raw`A toy temperature model is $T(t)=17+4\sin(\pi t/6)$ degrees Celsius for $0\leq t\leq24$, with $t$ in hours. Find its period, maximum, minimum, and first positive time at which it reaches its maximum.`, steps: [
    [1, String.raw`The angular coefficient is $\pi/6$, so the period is $2\pi/(\pi/6)=12$ hours.`],
    [2, String.raw`Midline $17$ and amplitude $4$ give maximum $21^\circ$C and minimum $13^\circ$C.`],
    [2, String.raw`First maximum occurs at $\pi t/6=\pi/2$, hence $t=3$ hours (also $t=15$ in the full domain).`],
  ] },
  { code: ['AHL 3.14', 'AHL 3.18'], slug: 'line-meets-plane', prompt: String.raw`Line $L$ passes through $A=(1,0,2)$ and $B=(3,4,0)$. Write a vector equation for $L$, then find its point of intersection with the plane $x+y+z=7$.`, steps: [
    [1, String.raw`$\overrightarrow{AB}=(2,4,-2)$; an equivalent direction is $(1,2,-1)$.`],
    [1, String.raw`$\mathbf r=(1,0,2)+t(1,2,-1)$.`],
    [2, String.raw`In the plane, $(1+t)+2t+(2-t)=3+2t=7$, so $t=2$ and the point is $(3,4,0)$.`],
  ] },
  { code: 'SL 4.3', slug: 'estimated-grouped-mean', prompt: String.raw`Grouped intervals have midpoints $5,15,25$ and frequencies $4,5,1$ respectively. Estimate the mean of the observations. Explain why the grouped mean need not be the exact sample mean.`, steps: [
    [1, String.raw`Total frequency $4+5+1=10$.`],
    [2, String.raw`Midpoint-weighted total $5(4)+15(5)+25(1)=120$, so estimated mean $=120/10=12$.`],
    [1, String.raw`Original values may differ from their class midpoints, so the exact mean is not determined by these grouped counts alone.`],
  ] },
  { code: 'SL 4.6', slug: 'cycle-to-school-conditions', prompt: String.raw`In a school with $60$ juniors and $40$ seniors, $18$ juniors and $20$ seniors cycle to school. Find the probability a randomly chosen pupil cycles, the probability that a cyclist is a senior, and the probability that a senior cycles.`, steps: [
    [1, String.raw`Total cyclists $18+20=38$ out of $100$; $P(\text{cycle})=38/100=0.38$.`],
    [2, String.raw`Among cyclists, $20$ are seniors, so $P(\text{senior}\mid\text{cycle})=20/38=10/19\approx0.5263$.`],
    [2, String.raw`Among the $40$ seniors, $20$ cycle, so $P(\text{cycle}\mid\text{senior})=20/40=0.5$. The two conditional denominators differ.`],
  ] },
  { code: 'SL 4.8', slug: 'at-least-one-success', prompt: String.raw`Eight independent trials each succeed with probability $0.3$. Find the probability of at least one success and the expected number of successes. State why a binomial model is appropriate.`, steps: [
    [1, String.raw`Fixed $n=8$, constant $p=0.3$, binary outcomes and independence support $X\sim B(8,0.3)$.`],
    [2, String.raw`$P(X\geq1)=1-P(X=0)=1-(0.7)^8=0.94235199\approx0.9424$.`],
    [1, String.raw`$E(X)=np=8(0.3)=2.4$.`],
  ] },
  { code: 'SL 4.9', slug: 'normal-upper-tail', prompt: String.raw`A model takes $X\sim N(70,8^2)$. Estimate $P(X>82)$ using a standard-normal cumulative function or calculator. State which tail is required.`, steps: [
    [1, String.raw`Standardize: $z=(82-70)/8=1.5$.`],
    [2, String.raw`The upper tail is $P(Z>1.5)=1-\Phi(1.5)\approx1-0.9331928=0.0668072$.`],
    [1, String.raw`The value is below one half, as expected for a cutoff above the mean.`],
  ] },
  { code: 'SL 4.12', slug: 'normal-quantile-spread', prompt: String.raw`A normal model has 10th percentile $40$ and 90th percentile $60$. Use symmetry and $z_{0.90}\approx1.28155$ to estimate the mean and standard deviation.`, steps: [
    [1, String.raw`Symmetry puts the mean midway between the symmetric percentiles: $\mu=(40+60)/2=50$.`],
    [2, String.raw`$60=\mu+1.28155\sigma$ gives $\sigma=10/1.28155\approx7.80$.`],
    [1, String.raw`Check lower percentile: $50-1.28155(7.80)\approx40$ after rounding.`],
  ] },
  { code: 'AHL 4.13', slug: 'rare-test-positive', prompt: String.raw`A condition has prevalence $2\%$. A test has sensitivity $95\%$ and specificity $90\%$. Find the probability a random person tests positive and the chance a person has the condition given a positive test.`, steps: [
    [1, String.raw`The false-positive rate is $1-0.90=0.10$.`],
    [2, String.raw`$P(+)=0.02(0.95)+0.98(0.10)=0.019+0.098=0.117$.`],
    [2, String.raw`Bayes gives $P(\text{condition}\mid+)=0.019/0.117=19/117\approx0.1624$.`],
  ] },
  { code: 'AHL 4.14', slug: 'increasing-density', prompt: String.raw`A continuous variable has density $f(x)=kx$ on $0<x<2$ and $0$ elsewhere. Find $k$, $P(X>1)$ and $E(X)$.`, steps: [
    [2, String.raw`Normalization: $1=\int_0^2kx\,dx=k[x^2/2]_0^2=2k$, so $k=1/2$.`],
    [2, String.raw`$P(X>1)=\int_1^2 x/2\,dx=[x^2/4]_1^2=3/4$.`],
    [2, String.raw`$E(X)=\int_0^2 x(x/2)\,dx=[x^3/6]_0^2=4/3$.`],
  ] },
  { code: 'SL 5.8', slug: 'fenced-rectangle-optimum', prompt: String.raw`A rectangular plot uses $12$ m of fencing for one side of length $y$ and two equal sides of length $x$; the fourth side is against a wall. Express area in terms of $x$ and find its maximum for $0\leq x\leq6$.`, steps: [
    [1, String.raw`The fencing constraint is $2x+y=12$, so $y=12-2x$ and $A=x(12-2x)$.`],
    [2, String.raw`$A'(x)=12-4x=0$ gives $x=3$; then $y=6$ and $A=18$ m$^2$.`],
    [2, String.raw`$A''=-4<0$ and endpoints $x=0,6$ give zero area, confirming a global maximum of $18$ m$^2$.`],
  ] },
  { code: 'SL 5.9', slug: 'distance-vs-displacement', prompt: String.raw`A particle has position $s(t)=t^3-6t^2+9t$ metres, $0\leq t\leq3$ seconds. Find its displacement and total distance traveled over the interval.`, steps: [
    [1, String.raw`$v(t)=3t^2-12t+9=3(t-1)(t-3)$, so velocity changes sign at $t=1$ inside the interval.`],
    [2, String.raw`$s(0)=0$, $s(1)=4$, and $s(3)=0$. Displacement is $s(3)-s(0)=0$ m.`],
    [2, String.raw`Distance is $|s(1)-s(0)|+|s(3)-s(1)|=4+4=8$ m.`],
  ] },
  { code: 'SL 5.11', slug: 'two-curve-area', prompt: String.raw`Find the area enclosed by $y=x$ and $y=x^2$ between their intersection points. Include the bounds and justify which graph lies above the other.`, steps: [
    [1, String.raw`Solve $x=x^2$, obtaining $x=0$ and $x=1$.`],
    [1, String.raw`For $0<x<1$, $x>x^2$, so the line is the upper graph.`],
    [2, String.raw`Area $=\int_0^1(x-x^2)\,dx=[x^2/2-x^3/3]_0^1=1/6$ square units.`],
  ] },
  { code: 'AHL 5.17', slug: 'root-curve-revolution', prompt: String.raw`The region between $y=\sqrt x$, the $x$-axis, $x=0$ and $x=4$ is rotated about the $x$-axis. Find its volume exactly and state the radius used.`, steps: [
    [1, String.raw`A disc at $x$ has radius $r(x)=\sqrt x$ and area $\pi r(x)^2=\pi x$.`],
    [2, String.raw`$V=\pi\int_0^4x\,dx=\pi[x^2/2]_0^4=8\pi$ cubic units.`],
    [1, String.raw`The square of the radius, not the unsquared radius, appears in the disc area.`],
  ] },
  { code: 'AHL 5.18', slug: 'two-euler-steps', prompt: String.raw`Approximate the solution of $dy/dx=x+y$, $y(0)=1$, at $x=0.4$ using Euler's method with step size $h=0.2$. Show both steps in a table or equations.`, steps: [
    [2, String.raw`At $(x_0,y_0)=(0,1)$, slope $0+1=1$, so $y_1=1+0.2(1)=1.2$ at $x_1=0.2$.`],
    [2, String.raw`At $(0.2,1.2)$, slope $0.2+1.2=1.4$, so $y_2=1.2+0.2(1.4)=1.48$ at $x_2=0.4$.`],
    [1, String.raw`This is an approximation; it uses the slope at the start of each step.`],
  ] },
];
