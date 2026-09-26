import type { Draft } from './types';

// Multi-part, original HL investigations. No wording or schemes from IB papers.
export const p3: Draft[] = [
  { code: ['SL 1.3', 'SL 1.8', 'SL 1.7'], slug: 'limit-of-a-decay-budget', prompt: String.raw`**A recurrence and a threshold.** A project spends $a$ units in its first week and $40\%$ of the previous week's amount in each later week. Its total eventual spend is modeled as $20$ units. (a) Determine $a$ and justify why an eventual total exists. (b) Find the first $n$ for which cumulative spend through week $n$ exceeds $19.5$ units. (c) Check weeks $n-1$ and $n$ and interpret the result.`, steps: [
    [2, String.raw`The ratio $r=0.4$ satisfies $|r|<1$, so $S_\infty=a/(1-0.4)=20$. Hence $a=12$.`],
    [2, String.raw`$S_n=12(1-0.4^n)/(1-0.4)=20(1-0.4^n)$.`],
    [2, String.raw`$20(1-0.4^n)>19.5$ rearranges to $0.4^n<0.025$. Because $\ln0.4<0$, $n>\ln(0.025)/\ln(0.4)\approx4.026$.`],
    [2, String.raw`At $n=4$, $S_4=20(1-0.0256)=19.488$, below $19.5$. At $n=5$, $S_5=20(1-0.01024)=19.7952$, above it.`],
    [2, String.raw`The first qualifying week is $5$. The model's “eventual” value is an infinite-sum limit, not an amount reached in a finite week.`],
  ] },
  { code: ['AHL 1.13', 'AHL 1.14'], slug: 'three-roots-of-eight-i', prompt: String.raw`**A complex root investigation.** (a) Express $8i$ in Euler form. (b) Find all solutions of $z^3=8i$ in exact Cartesian form and explain why there are three distinct roots. (c) Check their sum and explain why the complex-conjugate-pair rule for real polynomials does not force these roots into pairs.`, steps: [
    [2, String.raw`$8i=8e^{i(\pi/2+2k\pi)}$, with modulus $8$ and arguments $\pi/2+2k\pi$.`],
    [2, String.raw`Cube-root moduli are $2$ and arguments are $\pi/6+2k\pi/3$ for $k=0,1,2$, distinct modulo $2\pi$.`],
    [3, String.raw`The roots are $2e^{i\pi/6}=\sqrt3+i$, $2e^{5\pi i/6}=-\sqrt3+i$, and $2e^{3\pi i/2}=-2i$.`],
    [1, String.raw`Their sum is $(\sqrt3-\sqrt3)+i+i-2i=0$, agreeing with the absent $z^2$ coefficient.`],
    [2, String.raw`$z^3-8i$ has nonreal coefficients. Conjugate roots are guaranteed in pairs only for polynomials with real coefficients.`],
  ] },
  { code: ['AHL 2.12', 'SL 5.7', 'SL 5.8'], slug: 'stationary-inflection-cubic', prompt: String.raw`**Shape from factors.** Consider $p(x)=x^3-3x^2+3x-1$. (a) Factor $p$ and state its root with multiplicity. (b) Find and classify its stationary point. (c) Explain why the graph crosses rather than turns at its repeated root, and give the graph's behavior on either side.`, steps: [
    [2, String.raw`Recognize the binomial pattern $p(x)=(x-1)^3$; root $x=1$ has multiplicity $3$.`],
    [2, String.raw`$p'(x)=3(x-1)^2$, so the only stationary point is $(1,0)$.`],
    [2, String.raw`$p''(x)=6(x-1)$ changes from negative to positive at $1$, giving a stationary point of inflection.`],
    [2, String.raw`$p'(x)>0$ for $x\neq1$, so the graph increases on both sides and does not turn; the odd-power factor changes sign across $x=1$.`],
    [1, String.raw`A horizontal tangent does not by itself imply a local extremum.`],
  ] },
  { code: ['SL 3.7', 'SL 3.8', 'AHL 3.10'], slug: 'daylong-trig-model', prompt: String.raw`**A 24-hour periodic model.** A stylized reading is $T(t)=18+6\cos(\pi t/12)$, where $0\leq t\leq24$ hours. (a) Find the period and range. (b) Solve $T(t)=21$ on the stated domain. (c) Determine the total time for which $T(t)>21$ during this modeled day, explaining how boundary instants are treated.`, steps: [
    [2, String.raw`Angular coefficient $\pi/12$ gives period $2\pi/(\pi/12)=24$ hours; range is $[18-6,18+6]=[12,24]$.`],
    [2, String.raw`$T=21$ means $\cos(\pi t/12)=1/2$. With angle in $[0,2\pi]$, solutions are $\pi/3$ and $5\pi/3$, so $t=4$ and $t=20$.`],
    [2, String.raw`$\cos\theta>1/2$ near the ends of the cycle: $0\leq t<4$ and $20<t\leq24$.`],
    [2, String.raw`The durations are $4$ hours each, totaling $8$ hours. Inclusion or exclusion of isolated endpoints does not change a duration.`],
  ] },
  { code: ['AHL 3.14', 'AHL 3.17', 'AHL 3.18'], slug: 'line-plane-design', prompt: String.raw`**Line and plane geometry.** A line is $\mathbf r=(1,2,0)+t(2,-1,1)$ and a plane is $x+2y-z=2$. (a) Prove the line meets the plane in exactly one point and find it. (b) Give a distinct line through that point which lies entirely in the plane, and justify your direction vector.`, steps: [
    [2, String.raw`The plane normal is $(1,2,-1)$ and its dot product with the line direction $(2,-1,1)$ is $2-2-1=-1\neq0$, so there is exactly one intersection.`],
    [2, String.raw`Substitute the line: $(1+2t)+2(2-t)-t=5-t=2$, hence $t=3$.`],
    [2, String.raw`The intersection is $(1+6,2-3,3)=(7,-1,3)$; $7+2(-1)-3=2$ checks it.`],
    [2, String.raw`Choose $(1,0,1)$ as an in-plane direction since $(1,2,-1)\cdot(1,0,1)=0$. A line is $\mathbf r=(7,-1,3)+s(1,0,1)$.`],
    [1, String.raw`This second direction is not proportional to the original line direction, so the lines are distinct.`],
  ] },
  { code: ['AHL 4.13', 'SL 4.8'], slug: 'positive-tests-and-repetition', prompt: String.raw`**Bayes followed by a binomial model.** A condition affects $2\%$ of a population. A test detects it $95\%$ of the time and gives a false positive $10\%$ of the time otherwise. (a) Find $P(\text{condition}\mid+)$. (b) Suppose three independently selected people, each already known to have tested positive under the same model, are considered. Find the probability at least one has the condition. State the independence assumption.`, steps: [
    [2, String.raw`$P(\text{condition and }+)=0.02(0.95)=0.019$; $P(\text{no condition and }+)=0.98(0.10)=0.098$.`],
    [2, String.raw`$P(+)=0.117$ and Bayes gives $p=P(\text{condition}\mid+)=0.019/0.117=19/117\approx0.162393$.`],
    [2, String.raw`If individuals' condition statuses are independent conditional on their respective positive tests, the probability none has the condition is $(1-p)^3$.`],
    [2, String.raw`At least one: $1-(1-19/117)^3=1-(98/117)^3\approx0.41235$.`],
    [1, String.raw`Shared exposure, correlated tests or selection effects could break the assumed independence; the number is conditional on the stated model.`],
  ] },
  { code: ['AHL 4.14', 'SL 4.7'], slug: 'increasing-continuous-density', prompt: String.raw`**A continuous probability model.** The density of $X$ is $f(x)=k(1+x)$ for $0\leq x\leq2$, and zero elsewhere. (a) Find $k$. (b) Derive its cumulative distribution function on $[0,2]$. (c) Find its median exactly and calculate $E(X)$. Explain why $P(X=1)=0$.`, steps: [
    [2, String.raw`$1=k\int_0^2(1+x)\,dx=k(2+2)=4k$, hence $k=1/4$.`],
    [2, String.raw`For $0\leq x\leq2$, $F(x)=\int_0^x(1+t)/4\,dt=x/4+x^2/8$, with $F(x)=0$ below $0$ and $F(x)=1$ above $2$.`],
    [2, String.raw`Median $m$ solves $m/4+m^2/8=1/2$, or $m^2+2m-4=0$. The root in $[0,2]$ is $m=-1+\sqrt5\approx1.236$.`],
    [2, String.raw`$E(X)=\int_0^2 x(1+x)/4\,dx=(1/4)(2+8/3)=7/6$.`],
    [1, String.raw`A continuous single point has zero area, so $P(X=1)=0$ even though $f(1)>0$.`],
  ] },
  { code: ['SL 5.5', 'SL 5.11', 'AHL 5.17'], slug: 'parabolic-area-and-volume', prompt: String.raw`**Area and a solid of revolution.** The region $R$ lies under $y=4-x^2$ and above the $x$-axis. (a) Find its horizontal bounds and exact area. (b) Rotate $R$ about the $x$-axis and find the exact volume. Show how symmetry simplifies both integrals.`, steps: [
    [2, String.raw`$4-x^2=0$ at $x=\pm2$ and the graph is nonnegative between them, so $R$ spans $[-2,2]$.`],
    [2, String.raw`Area $=2\int_0^2(4-x^2)\,dx=2[4x-x^3/3]_0^2=32/3$ square units.`],
    [2, String.raw`Disc radius is $4-x^2$, giving $V=\pi\int_{-2}^2(4-x^2)^2\,dx=2\pi\int_0^2(16-8x^2+x^4)\,dx$.`],
    [3, String.raw`$V=2\pi[16x-8x^3/3+x^5/5]_0^2=2\pi(32-64/3+32/5)=512\pi/15$ cubic units.`],
  ] },
  { code: ['AHL 5.18', 'SL 5.8'], slug: 'logistic-euler-comparison', prompt: String.raw`**A bounded growth model.** Let $dy/dt=0.2y(1-y/10)$ and $y(0)=2$. (a) Find the equilibrium levels and state the sign of the growth rate for $0<y<10$. (b) Use two Euler steps of length $1$ to approximate $y(2)$. (c) As a function of $y$, find the population level where the instantaneous growth rate is largest, and find that rate.`, steps: [
    [2, String.raw`Equilibria solve $0.2y(1-y/10)=0$, giving $y=0$ and $y=10$. The slope is positive for $0<y<10$.`],
    [2, String.raw`At $t=0$, slope $0.2(2)(0.8)=0.32$; Euler gives $y_1=2+1(0.32)=2.32$.`],
    [2, String.raw`At $t=1$, slope $0.2(2.32)(1-0.232)=0.356352$; Euler gives $y_2=2.676352$ at $t=2$.`],
    [2, String.raw`Write growth rate as $g(y)=0.2y-0.02y^2$. Its maximum occurs at $g'(y)=0.2-0.04y=0$, so $y=5$.`],
    [1, String.raw`$g(5)=0.2(5)(1/2)=0.5$ units per time. Euler's $y(2)$ is an approximation, not an exact logistic solution.`],
  ] },
  { code: ['SL 4.8', 'SL 1.7'], slug: 'target-reliability-design', prompt: String.raw`**Planning independent trials.** A single independent attempt succeeds with probability $0.2$. (a) Find the chance of at least one success in $5$ attempts and in $10$ attempts. (b) Find the smallest integer $n$ for which at least one success is at least $95\%$ likely. (c) Verify the threshold by comparing $n-1$ and $n$, and discuss one modeling limitation.`, steps: [
    [2, String.raw`By a complement, $P(\text{at least one in }n)=1-0.8^n$. For $5$ attempts it is $1-0.8^5=0.67232$.`],
    [1, String.raw`For $10$ attempts it is $1-0.8^{10}\approx0.8926258$.`],
    [2, String.raw`Solve $1-0.8^n\geq0.95$, or $0.8^n\leq0.05$. Since $\ln0.8<0$, $n\geq\ln0.05/\ln0.8\approx13.4251$.`],
    [2, String.raw`The least integer is $14$. At $13$ attempts the chance is $\approx0.9450244$, and at $14$ it is $\approx0.9560195$.`],
    [1, String.raw`The calculation assumes attempts are independent and each retains probability $0.2$; learning or shared conditions could change the chance.`],
  ] },
];
