// Original long-form questions, Calculus AHL 5.12 to AHL 5.19. Independently written
// practice with M/A/R/AG style mark allocations. Not an IB publication or official mark scheme.
const Q = (code, slug, paper, prompt, scheme, verify) => ({ code, slug, paper, prompt, scheme, verify });
export const questions = [
  Q('AHL 5.12', 'first-principles-quadratic', 'P1',
    String.raw`Let $f(x)=x^2-x$.

(a) Use differentiation from first principles to show that $f'(x)=2x-1$. [4]

(b) Hence find $f'(3)$. [1]`,
    [['M1', 1, String.raw`$f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$.`],
     ['M2', 1, String.raw`$f(x+h)-f(x)=(x+h)^2-(x+h)-x^2+x=2xh+h^2-h$.`],
     ['A1', 1, String.raw`Divide by $h$: $\dfrac{2xh+h^2-h}{h}=2x+h-1$ for $h\neq0$.`],
     ['A2', 1, String.raw`Letting $h\to0$ gives $f'(x)=2x-1$.`],
     ['A3', 1, String.raw`$f'(3)=2(3)-1=5$.`]],
    (L) => { const f = (x) => x * x - x; L.close(L.d(f, 3), 5, 1e-6); L.close((f(3.001) - f(3)) / 0.001, 5.001, 1e-6); }),

  Q('AHL 5.12', 'smooth-join', 'P2',
    String.raw`The function $f$ is defined by $f(x)=x^2+2x$ for $x\leq1$ and $f(x)=ax+b$ for $x>1$, where $a$ and $b$ are constants.

(a) Given that $f$ is continuous at $x=1$, show that $a+b=3$. [3]

(b) Given also that $f$ is differentiable at $x=1$, find $a$ and $b$. [3]

(c) Show from first principles that $g(x)=|x-2|$ is not differentiable at $x=2$. [3]`,
    [['M1', 1, String.raw`Left-hand limit: $f(1)=1+2=3$.`],
     ['M2', 1, String.raw`Right-hand limit: $\displaystyle\lim_{x\to1^+}(ax+b)=a+b$.`],
     ['AG1', 1, String.raw`Continuity requires these to be equal, so $a+b=3$.`],
     ['M3', 1, String.raw`Left derivative: $2x+2=4$ at $x=1$.`],
     ['M4', 1, String.raw`Right derivative is $a$; differentiability requires $a=4$.`],
     ['A1', 1, String.raw`$b=3-4=-1$.`],
     ['M5', 1, String.raw`For $h>0$: $\dfrac{g(2+h)-g(2)}{h}=\dfrac{|h|}{h}=1$; for $h<0$: $\dfrac{|h|}{h}=-1$.`],
     ['A2', 1, String.raw`The one-sided limits are $+1$ and $-1$, which differ.`],
     ['R1', 1, String.raw`So the limit defining $g'(2)$ does not exist and $g$ is not differentiable at $2$ (the graph has a corner).`]],
    (L) => { const f = (x) => (x <= 1 ? x * x + 2 * x : 4 * x - 1); L.close(f(1), 3); L.close(f(1.000001), 3, 1e-5); L.close((f(1.00001) - f(1)) / 1e-5, 4, 1e-3); L.close((f(1) - f(0.99999)) / 1e-5, 4, 1e-3); }),

  Q('AHL 5.13', 'two-lhopital-limits', 'P1',
    String.raw`Evaluate each limit, stating clearly why L'Hôpital's rule may be used.

(a) $\displaystyle\lim_{x\to0}\frac{e^{3x}-1}{x}$ [3]

(b) $\displaystyle\lim_{x\to0}\frac{1-\cos2x}{x^2}$ [3]`,
    [['M1', 1, String.raw`Direct substitution gives $\dfrac00$, an indeterminate form, so the rule applies.`],
     ['M2', 1, String.raw`Differentiate numerator and denominator separately: $\dfrac{3e^{3x}}{1}$.`],
     ['A1', 1, String.raw`The limit is $3$.`],
     ['M3', 1, String.raw`Direct substitution gives $\dfrac00$; the rule gives $\dfrac{2\sin2x}{2x}$, which is again $\dfrac00$.`],
     ['M4', 1, String.raw`Apply again: $\dfrac{4\cos2x}{2}$.`],
     ['A2', 1, String.raw`The limit is $2$.`]],
    (L) => { L.close((Math.exp(3e-6) - 1) / 1e-6, 3, 1e-5); L.close((1 - Math.cos(2e-3)) / 1e-6, 2, 1e-5); }),

  Q('AHL 5.13', 'growth-rates-and-constants', 'P2',
    String.raw`(a) Find $\displaystyle\lim_{x\to\infty}x^3e^{-2x}$. [3]

(b) Find $\displaystyle\lim_{x\to0^+}x^2\ln x$. [3]

(c) The limit $\displaystyle\lim_{x\to0}\frac{\sin x-ax}{x^3}$ exists and is finite. Find the value of $a$ and the value of the limit. [3]`,
    [['M1', 1, String.raw`Write as $\dfrac{x^3}{e^{2x}}$, which has the form $\dfrac\infty\infty$.`],
     ['M2', 1, String.raw`Apply the rule three times: $\dfrac{3x^2}{2e^{2x}}\to\dfrac{6x}{4e^{2x}}\to\dfrac{6}{8e^{2x}}$.`],
     ['A1', 1, String.raw`The denominator tends to infinity, so the limit is $0$.`],
     ['M3', 1, String.raw`Write as $\dfrac{\ln x}{x^{-2}}$, of the form $\dfrac{-\infty}{\infty}$.`],
     ['M4', 1, String.raw`Rule: $\dfrac{1/x}{-2x^{-3}}=-\dfrac{x^2}{2}$.`],
     ['A2', 1, String.raw`As $x\to0^+$ this tends to $0$.`],
     ['M5', 1, String.raw`The form is $\dfrac00$; one application gives $\dfrac{\cos x-a}{3x^2}$, which needs the numerator to tend to $0$ for a finite limit.`],
     ['A3', 1, String.raw`$1-a=0$, so $a=1$.`],
     ['A4', 1, String.raw`Then $\dfrac{\cos x-1}{3x^2}\to\dfrac{-\sin x}{6x}\to-\dfrac{\cos x}{6}$, so the limit is $-\dfrac16$.`]],
    (L) => { L.close(1000 ** 3 * Math.exp(-2000), 0, 1e-9); L.close(1e-6 * Math.log(1e-3), 0, 1e-4); const x = 1e-2; L.close((Math.sin(x) - x) / x ** 3, -1 / 6, 1e-3); }),

  Q('AHL 5.14', 'implicit-tangent', 'P1',
    String.raw`The curve $C$ has equation $x^2+xy+y^2=3$ and passes through $P(1,1)$.

(a) Show that $\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}$. [3]

(b) Find the gradient of $C$ at $P$. [1]

(c) Find the equation of the tangent to $C$ at $P$. [2]`,
    [['M1', 1, String.raw`Differentiate implicitly: $2x+\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0$.`],
     ['M2', 1, String.raw`Collect: $\dfrac{dy}{dx}(x+2y)=-(2x+y)$.`],
     ['AG1', 1, String.raw`$\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}$.`],
     ['A1', 1, String.raw`At $(1,1)$: $-\dfrac{3}{3}=-1$.`],
     ['M3', 1, String.raw`Tangent: $y-1=-1(x-1)$.`],
     ['A2', 1, String.raw`$y=-x+2$.`]],
    (L) => { L.close(1 + 1 + 1, 3); const y = (x) => (-x + Math.sqrt(x * x - 4 * (x * x - 3))) / 2; L.close(y(1), 1, 1e-9); L.close(L.d(y, 1), -1, 1e-5); }),

  Q('AHL 5.14', 'ladder-triangle-area', 'P2',
    String.raw`A ladder of length $5$ m leans against a vertical wall. Its foot is $x$ m from the wall and its top is $y$ m above the ground. The foot slides away from the wall at $0.3$ m s$^{-1}$. At a certain instant $x=3$.

(a) Find the rate at which the top of the ladder is moving down the wall at this instant. [4]

(b) Let $A$ be the area of the triangle formed by the ladder, the wall and the ground. Find $\dfrac{dA}{dt}$ at this instant. [3]

(c) Find the value of $x$ at which $\dfrac{dA}{dt}=0$, giving your answer to three significant figures. [2]`,
    [['M1', 1, String.raw`$x^2+y^2=25$ at all times; differentiate with respect to $t$.`],
     ['A1', 1, String.raw`$2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=-\dfrac xy\dfrac{dx}{dt}$.`],
     ['M2', 1, String.raw`When $x=3$, $y=\sqrt{25-9}=4$.`],
     ['A2', 1, String.raw`$\dfrac{dy}{dt}=-\dfrac34(0.3)=-0.225$, so the top moves down at $0.225$ m s$^{-1}$.`],
     ['M3', 1, String.raw`$A=\tfrac12xy$, so $\dfrac{dA}{dt}=\tfrac12\left(y\dfrac{dx}{dt}+x\dfrac{dy}{dt}\right)$.`],
     ['M4', 1, String.raw`$\tfrac12\left(4(0.3)+3(-0.225)\right)$.`],
     ['A3', 1, String.raw`$\dfrac{dA}{dt}=0.2625$ m$^2$ s$^{-1}$.`],
     ['M5', 1, String.raw`$\dfrac{dA}{dt}=\tfrac12\dfrac{dx}{dt}\left(y-\dfrac{x^2}{y}\right)=0$ requires $y^2=x^2$, so $2x^2=25$.`],
     ['A4', 1, String.raw`$x=\dfrac{5}{\sqrt2}=3.54$ m.`]],
    (L) => { const y = (x) => Math.sqrt(25 - x * x); L.close(-3 / 4 * 0.3, -0.225); L.close(0.5 * (4 * 0.3 + 3 * (-0.225)), 0.2625); const dA = (x) => 0.5 * (y(x) * 0.3 + x * (-x / y(x) * 0.3)); L.close(dA(3), 0.2625, 1e-9); L.close(dA(5 / Math.SQRT2), 0, 1e-9); L.close(5 / Math.SQRT2, 3.5355, 1e-4); }),

  Q('AHL 5.15', 'new-derivatives', 'P1',
    String.raw`Differentiate each of the following with respect to $x$.

(a) $y=\tan2x$ [1]

(b) $y=\arctan(3x)$ [2]

(c) $y=5^x$ [1]

(d) $y=\arcsin\dfrac x3$ for $|x|<3$ [1]`,
    [['A1', 1, String.raw`$\dfrac{dy}{dx}=2\sec^22x$ (chain rule with inner derivative $2$).`],
     ['M1', 1, String.raw`Use $\dfrac{d}{dx}\arctan u=\dfrac{1}{1+u^2}\dfrac{du}{dx}$ with $u=3x$.`],
     ['A2', 1, String.raw`$\dfrac{dy}{dx}=\dfrac{3}{1+9x^2}$.`],
     ['A3', 1, String.raw`$\dfrac{dy}{dx}=5^x\ln5$.`],
     ['A4', 1, String.raw`$\dfrac{dy}{dx}=\dfrac{1/3}{\sqrt{1-x^2/9}}=\dfrac{1}{\sqrt{9-x^2}}$.`]],
    (L) => { L.close(L.d((x) => Math.tan(2 * x), 0.4), 2 / Math.cos(0.8) ** 2, 1e-5); L.close(L.d((x) => Math.atan(3 * x), 0.5), 3 / (1 + 2.25), 1e-5); L.close(L.d((x) => 5 ** x, 1.2), 5 ** 1.2 * Math.log(5), 1e-5); L.close(L.d((x) => Math.asin(x / 3), 1), 1 / Math.sqrt(8), 1e-5); }),

  Q('AHL 5.15', 'inverse-trig-integrals', 'P2',
    String.raw`(a) Find the exact value of $\displaystyle\int_0^{\sqrt3}\frac{1}{x^2+3}\,dx$ and give it to three significant figures. [3]

(b) Evaluate $\displaystyle\int_0^1\frac{1}{\sqrt{9-x^2}}\,dx$, giving your answer to three significant figures. [2]

(c) Show that $x^2+6x+13=(x+3)^2+4$ and hence find the exact value of $\displaystyle\int_{-3}^{-1}\frac{1}{x^2+6x+13}\,dx$. [4]`,
    [['M1', 1, String.raw`Use $\int\dfrac{dx}{x^2+a^2}=\dfrac1a\arctan\dfrac xa$ with $a=\sqrt3$.`],
     ['A1', 1, String.raw`$\dfrac{1}{\sqrt3}\left[\arctan\dfrac{x}{\sqrt3}\right]_0^{\sqrt3}=\dfrac{1}{\sqrt3}\cdot\dfrac\pi4=\dfrac{\pi}{4\sqrt3}$.`],
     ['A2', 1, String.raw`$0.453$.`],
     ['M2', 1, String.raw`Use $\int\dfrac{dx}{\sqrt{a^2-x^2}}=\arcsin\dfrac xa$ with $a=3$.`],
     ['A3', 1, String.raw`$\arcsin\dfrac13-\arcsin0=0.340$.`],
     ['M3', 1, String.raw`$(x+3)^2+4=x^2+6x+9+4=x^2+6x+13$ (shown by expanding).`],
     ['M4', 1, String.raw`Let $u=x+3$; the limits $x=-3,-1$ become $u=0,2$.`],
     ['A4', 1, String.raw`$\displaystyle\int_0^2\frac{du}{u^2+4}=\dfrac12\left[\arctan\dfrac u2\right]_0^2$.`],
     ['A5', 1, String.raw`$\dfrac12\cdot\dfrac\pi4=\dfrac\pi8$.`]],
    (L) => { L.close(L.integ((x) => 1 / (x * x + 3), 0, Math.sqrt(3)), Math.PI / (4 * Math.sqrt(3)), 1e-9); L.close(Math.PI / (4 * Math.sqrt(3)), 0.4534, 1e-3); L.close(L.integ((x) => 1 / Math.sqrt(9 - x * x), 0, 1), Math.asin(1 / 3), 1e-6); L.close(Math.asin(1 / 3), 0.3398, 1e-3); L.close(L.integ((x) => 1 / (x * x + 6 * x + 13), -3, -1), Math.PI / 8, 1e-9); }),

  Q('AHL 5.16', 'parts-with-exponential', 'P1',
    String.raw`Use integration by parts to find $\displaystyle\int x\,e^{3x}\,dx$. [5]`,
    [['M1', 1, String.raw`Choose $u=x$ and $\dfrac{dv}{dx}=e^{3x}$, so $\dfrac{du}{dx}=1$.`],
     ['A1', 1, String.raw`$v=\tfrac13e^{3x}$.`],
     ['M2', 1, String.raw`$\int u\dfrac{dv}{dx}\,dx=uv-\int v\dfrac{du}{dx}\,dx=\tfrac13xe^{3x}-\int\tfrac13e^{3x}\,dx$.`],
     ['A2', 1, String.raw`$\int\tfrac13e^{3x}\,dx=\tfrac19e^{3x}$.`],
     ['A3', 1, String.raw`$\left(\dfrac x3-\dfrac19\right)e^{3x}+C$.`]],
    (L) => { const F = (x) => (x / 3 - 1 / 9) * Math.exp(3 * x); L.close(L.d(F, 0.8), 0.8 * Math.exp(2.4), 1e-5); }),

  Q('AHL 5.16', 'definite-by-parts', 'P2',
    String.raw`(a) Use integration by parts twice to show that $\displaystyle\int_0^1x^2e^x\,dx=e-2$. [6]

(b) Find the exact value of $\displaystyle\int_1^ex\ln x\,dx$ and give it to three significant figures. [4]`,
    [['M1', 1, String.raw`First application: $u=x^2$, $\dfrac{dv}{dx}=e^x$, so $\int x^2e^x\,dx=x^2e^x-\int2xe^x\,dx$.`],
     ['A1', 1, String.raw`Second application with $u=2x$: $\int2xe^x\,dx=2xe^x-\int2e^x\,dx=2xe^x-2e^x$.`],
     ['M2', 1, String.raw`Combine: $\int x^2e^x\,dx=x^2e^x-2xe^x+2e^x$.`],
     ['A2', 1, String.raw`$=\left(x^2-2x+2\right)e^x$.`],
     ['M3', 1, String.raw`Evaluate between $0$ and $1$: $(1-2+2)e-(0-0+2)$.`],
     ['AG1', 1, String.raw`$e-2$.`],
     ['M4', 1, String.raw`Take $u=\ln x$ and $\dfrac{dv}{dx}=x$, so $v=\dfrac{x^2}{2}$ and $\int x\ln x\,dx=\dfrac{x^2}{2}\ln x-\int\dfrac x2\,dx$.`],
     ['A3', 1, String.raw`$=\dfrac{x^2}{2}\ln x-\dfrac{x^2}{4}$.`],
     ['M5', 1, String.raw`Evaluate from $1$ to $e$: $\left(\dfrac{e^2}{2}-\dfrac{e^2}{4}\right)-\left(0-\dfrac14\right)$.`],
     ['A4', 1, String.raw`$\dfrac{e^2+1}{4}=2.10$.`]],
    (L) => { L.close(L.integ((x) => x * x * Math.exp(x), 0, 1), Math.E - 2, 1e-9); L.close(L.integ((x) => x * Math.log(x), 1, Math.E), (Math.E ** 2 + 1) / 4, 1e-9); L.close((Math.E ** 2 + 1) / 4, 2.0973, 1e-4); }),

  Q('AHL 5.17', 'solids-of-revolution', 'P1',
    String.raw`(a) The region under the curve $y=x^2$ between $x=0$ and $x=1$ is rotated through $2\pi$ about the $x$-axis. Find the exact volume of the solid formed. [3]

(b) The region between $y=x$ and $y=x^2$ is rotated through $2\pi$ about the $x$-axis. Find the exact volume of the solid formed. [3]`,
    [['M1', 1, String.raw`$V=\pi\displaystyle\int_0^1y^2\,dx=\pi\int_0^1x^4\,dx$.`],
     ['A1', 1, String.raw`$\pi\left[\dfrac{x^5}{5}\right]_0^1$.`],
     ['A2', 1, String.raw`$V=\dfrac\pi5$.`],
     ['M2', 1, String.raw`The curves meet at $x=0$ and $x=1$ with $y=x$ outer: $V=\pi\displaystyle\int_0^1\left(x^2-x^4\right)dx$.`],
     ['M3', 1, String.raw`$\pi\left[\dfrac{x^3}{3}-\dfrac{x^5}{5}\right]_0^1$.`],
     ['A3', 1, String.raw`$V=\pi\left(\dfrac13-\dfrac15\right)=\dfrac{2\pi}{15}$.`]],
    (L) => { L.close(Math.PI * L.integ((x) => x ** 4, 0, 1), Math.PI / 5, 1e-9); L.close(Math.PI * L.integ((x) => x * x - x ** 4, 0, 1), 2 * Math.PI / 15, 1e-9); }),

  Q('AHL 5.17', 'area-on-the-y-axis', 'P2',
    String.raw`(a) The curve $x=y(4-y)$ and the $y$-axis enclose a region $R$. Find the area of $R$. [4]

(b) The region under $y=e^x$ between $x=0$ and $x=1$ is rotated through $2\pi$ about the $x$-axis. Find the volume of the solid, correct to three significant figures. [3]

(c) Find the area enclosed by $y=\ln x$, the $y$-axis, and the lines $y=0$ and $y=2$. [3]`,
    [['M1', 1, String.raw`The curve meets the $y$-axis where $x=0$, that is $y=0$ and $y=4$.`],
     ['M2', 1, String.raw`Area $=\displaystyle\int_0^4y(4-y)\,dy=\int_0^4(4y-y^2)\,dy$ (the curve has $x\geq0$ between these values).`],
     ['A1', 1, String.raw`$\left[2y^2-\dfrac{y^3}{3}\right]_0^4=32-\dfrac{64}{3}$.`],
     ['A2', 1, String.raw`Area $=\dfrac{32}{3}$ square units.`],
     ['M3', 1, String.raw`$V=\pi\displaystyle\int_0^1\left(e^x\right)^2dx=\pi\int_0^1e^{2x}\,dx$.`],
     ['A3', 1, String.raw`$\pi\left[\dfrac{e^{2x}}{2}\right]_0^1=\dfrac\pi2\left(e^2-1\right)$.`],
     ['A4', 1, String.raw`$V=10.0$ cubic units.`],
     ['M4', 1, String.raw`Rewrite as $x=e^y$ and integrate with respect to $y$.`],
     ['M5', 1, String.raw`Area $=\displaystyle\int_0^2e^y\,dy=\left[e^y\right]_0^2$.`],
     ['A5', 1, String.raw`$e^2-1=6.39$ square units.`]],
    (L) => { L.close(L.integ((y) => y * (4 - y), 0, 4), 32 / 3, 1e-9); L.close(Math.PI * L.integ((x) => Math.exp(2 * x), 0, 1), Math.PI / 2 * (Math.E ** 2 - 1), 1e-9); L.close(Math.PI / 2 * (Math.E ** 2 - 1), 10.036, 1e-3); L.close(L.integ((y) => Math.exp(y), 0, 2), Math.E ** 2 - 1, 1e-9); L.close(Math.E ** 2 - 1, 6.389, 1e-3); }),

  Q('AHL 5.18', 'separable-and-euler', 'P1',
    String.raw`Consider the differential equation $\dfrac{dy}{dx}=xy$ with $y=1$ when $x=0$.

(a) Solve the differential equation, giving $y$ in terms of $x$. [4]

(b) Use Euler's method with step size $h=0.5$ to estimate $y(1)$. [3]

(c) Compare your estimate with the exact value of $y(1)$. [1]`,
    [['M1', 1, String.raw`Separate the variables: $\displaystyle\int\dfrac1y\,dy=\int x\,dx$.`],
     ['A1', 1, String.raw`$\ln y=\dfrac{x^2}{2}+C$.`],
     ['M2', 1, String.raw`Use $y(0)=1$: $\ln1=0$, so $C=0$.`],
     ['A2', 1, String.raw`$y=e^{x^2/2}$.`],
     ['M3', 1, String.raw`$y_1=y_0+h\,x_0y_0=1+0.5(0)(1)=1$ at $x=0.5$.`],
     ['M4', 1, String.raw`$y_2=y_1+h\,x_1y_1=1+0.5(0.5)(1)$.`],
     ['A3', 1, String.raw`$y(1)\approx1.25$.`],
     ['R1', 1, String.raw`The exact value is $e^{0.5}=1.649$, so Euler's method underestimates by about $0.40$.`]],
    (L) => { const y = (x) => Math.exp(x * x / 2); L.close(L.d(y, 0.7), 0.7 * y(0.7), 1e-6); L.close(y(1), 1.6487, 1e-4); L.close(1 + 0.5 * 0.5 * 1, 1.25); }),

  Q('AHL 5.18', 'cooling-coffee', 'P2',
    String.raw`A cup of coffee at $85\,^\circ$C is left in a room at $21\,^\circ$C. Its temperature $T$ after $t$ minutes satisfies $\dfrac{dT}{dt}=-k(T-21)$, where $k>0$ is a constant. After $10$ minutes the temperature is $60\,^\circ$C.

(a) Show that $T=21+64e^{-kt}$. [4]

(b) Find the value of $k$, correct to three significant figures. [3]

(c) Find the time taken for the coffee to cool to $40\,^\circ$C, to the nearest tenth of a minute. [3]`,
    [['M1', 1, String.raw`Separate the variables: $\displaystyle\int\dfrac{dT}{T-21}=\int-k\,dt$.`],
     ['A1', 1, String.raw`$\ln(T-21)=-kt+C$, so $T=21+Ae^{-kt}$.`],
     ['M2', 1, String.raw`Use $T(0)=85$: $85=21+A$.`],
     ['AG1', 1, String.raw`$A=64$, so $T=21+64e^{-kt}$.`],
     ['M3', 1, String.raw`$60=21+64e^{-10k}$.`],
     ['M4', 1, String.raw`$e^{-10k}=\dfrac{39}{64}$, so $-10k=\ln\dfrac{39}{64}$.`],
     ['A2', 1, String.raw`$k=0.0495$.`],
     ['M5', 1, String.raw`$40=21+64e^{-kt}$ gives $e^{-kt}=\dfrac{19}{64}$.`],
     ['M6', 1, String.raw`$t=\dfrac{1}{k}\ln\dfrac{64}{19}$.`],
     ['A3', 1, String.raw`$t=24.5$ minutes.`]],
    (L) => { const k = -Math.log(39 / 64) / 10; L.close(k, 0.04954, 1e-3); const T = (t) => 21 + 64 * Math.exp(-k * t); L.close(T(10), 60, 1e-9); L.close(Math.log(64 / 19) / k, 24.5, 2e-3); L.close(T(Math.log(64 / 19) / k), 40, 1e-9); L.close(L.d(T, 3), -k * (T(3) - 21), 1e-5); }),

  Q('AHL 5.19', 'exponential-series-and-limit', 'P1',
    String.raw`(a) Write down the Maclaurin series for $e^{2x}$ up to and including the term in $x^3$. [3]

(b) Hence find $\displaystyle\lim_{x\to0}\frac{e^{2x}-1-2x}{x^2}$. [3]`,
    [['M1', 1, String.raw`Replace $x$ by $2x$ in $e^x=1+x+\dfrac{x^2}{2!}+\dfrac{x^3}{3!}+\cdots$.`],
     ['A1', 1, String.raw`$1+2x+\dfrac{(2x)^2}{2}=1+2x+2x^2$.`],
     ['A2', 1, String.raw`$+\dfrac{(2x)^3}{6}=\dfrac43x^3$, so $e^{2x}\approx1+2x+2x^2+\dfrac43x^3$.`],
     ['M2', 1, String.raw`$e^{2x}-1-2x=2x^2+\dfrac43x^3+\cdots$.`],
     ['M3', 1, String.raw`Divide by $x^2$: $2+\dfrac43x+\cdots$.`],
     ['A3', 1, String.raw`As $x\to0$ the limit is $2$.`]],
    (L) => { const x = 1e-3; L.close((Math.exp(2 * x) - 1 - 2 * x) / (x * x), 2 + 4 / 3 * x, 1e-5); L.close(1 + 2 * 0.1 + 2 * 0.01 + 4 / 3 * 0.001, Math.exp(0.2), 1e-3); }),

  Q('AHL 5.19', 'log-series-approximation', 'P2',
    String.raw`Let $f(x)=\ln(1+2x)$.

(a) Find $f(0)$, $f'(0)$, $f''(0)$ and $f'''(0)$, and hence write down the Maclaurin series for $f(x)$ up to and including the term in $x^3$. [3]

(b) Verify your series by substituting $u=2x$ into the series for $\ln(1+u)$. [2]

(c) Use the series with $x=0.05$ to approximate $\ln1.1$, giving your answer to five decimal places. [3]

(d) The true value is $\ln1.1=0.09531$ to five decimal places. State the error in your approximation and explain why its size is reasonable. [2]`,
    [['M1', 1, String.raw`$f'(x)=\dfrac{2}{1+2x}$, $f''(x)=-\dfrac{4}{(1+2x)^2}$, $f'''(x)=\dfrac{16}{(1+2x)^3}$.`],
     ['A1', 1, String.raw`$f(0)=0$, $f'(0)=2$, $f''(0)=-4$, $f'''(0)=16$.`],
     ['A2', 1, String.raw`$f(x)\approx2x-\dfrac{4}{2!}x^2+\dfrac{16}{3!}x^3=2x-2x^2+\dfrac83x^3$.`],
     ['M2', 1, String.raw`$\ln(1+u)=u-\dfrac{u^2}{2}+\dfrac{u^3}{3}-\cdots$ with $u=2x$.`],
     ['A3', 1, String.raw`$2x-\dfrac{4x^2}{2}+\dfrac{8x^3}{3}=2x-2x^2+\dfrac83x^3$, which agrees.`],
     ['M3', 1, String.raw`With $x=0.05$, $1+2x=1.1$.`],
     ['M4', 1, String.raw`$0.1-2(0.0025)+\dfrac83(0.000125)=0.1-0.005+0.000333$.`],
     ['A4', 1, String.raw`$\ln1.1\approx0.09533$.`],
     ['A5', 1, String.raw`The error is $0.09533-0.09531=0.00002$ (about $2\times10^{-5}$).`],
     ['R1', 1, String.raw`The first omitted term is $-\dfrac{u^4}{4}=-\dfrac{0.1^4}{4}=-2.5\times10^{-5}$, which matches the size and sign of the error.`]],
    (L) => { const s = (x) => 2 * x - 2 * x * x + 8 / 3 * x ** 3; L.close(s(0.05), 0.095333, 1e-5); L.close(Math.log(1.1), 0.0953102, 1e-6); L.close(s(0.05) - Math.log(1.1), 2.3e-5, 0.05); const f = (x) => Math.log(1 + 2 * x); L.close(L.d(f, 0), 2, 1e-6); L.close(L.d2(f, 0, 1e-3), -4, 1e-3); }),
];
