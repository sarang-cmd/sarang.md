// Original long-form questions, Calculus SL 5.1 to SL 5.11. Independently written
// practice with M/A/R/AG style mark allocations. Not an IB publication or official mark scheme.
const Q = (code, slug, paper, prompt, scheme, verify) => ({ code, slug, paper, prompt, scheme, verify });
export const questions = [
  Q('SL 5.1', 'chord-to-tangent', 'P1',
    String.raw`Let $f(x)=x^2+3x$.

(a) Show that the gradient of the chord joining $(2,f(2))$ and $(2+h,f(2+h))$ is $7+h$ for $h\neq0$. [3]

(b) Hence state the gradient of the tangent at $x=2$, justifying your answer with a limit. [1]

(c) Find the equation of the tangent at $x=2$ in the form $y=mx+c$. [2]`,
    [['M1', 1, String.raw`$f(2)=4+6=10$ and $f(2+h)=(2+h)^2+3(2+h)=10+7h+h^2$.`],
     ['M1', 1, String.raw`Chord gradient $=\dfrac{f(2+h)-f(2)}{h}=\dfrac{7h+h^2}{h}$.`],
     ['AG1', 1, String.raw`Cancel the common factor $h$ (valid since $h\neq0$) to obtain $7+h$.`],
     ['R1', 1, String.raw`As $h\to0$, $7+h\to7$, so the tangent gradient is $7$.`],
     ['M1', 1, String.raw`Tangent through $(2,10)$ with gradient $7$: $y-10=7(x-2)$.`],
     ['A1', 1, String.raw`$y=7x-4$.`]],
    (L) => { const f = (x) => x * x + 3 * x; L.close(L.d(f, 2), 7); L.close(f(2) - 7 * 2, -4); }),

  Q('SL 5.1', 'plant-growth-rates', 'P2',
    String.raw`The height of a seedling is modelled by $h(t)=0.4t^2+2t$ centimetres, where $t$ is the time in days after planting.

(a) Find the average rate of growth between $t=3$ and $t=5$. [2]

(b) Find $h'(t)$ and hence the instantaneous rate of growth when $t=3$. [2]

(c) Find the time at which the instantaneous rate of growth equals the average rate found in part (a). [2]

(d) Explain, using the shape of the graph of $h$, why the instantaneous rate at $t=5$ is greater than the average rate in part (a). [2]`,
    [['M1', 1, String.raw`Average rate $=\dfrac{h(5)-h(3)}{5-3}=\dfrac{20-9.6}{2}$.`],
     ['A1', 1, String.raw`$5.2$ cm per day.`],
     ['M1', 1, String.raw`$h'(t)=0.8t+2$.`],
     ['A1', 1, String.raw`$h'(3)=4.4$ cm per day.`],
     ['M1', 1, String.raw`Solve $0.8t+2=5.2$.`],
     ['A1', 1, String.raw`$t=4$ days.`],
     ['R1', 1, String.raw`$h''(t)=0.8>0$, so the graph is concave up and the gradient increases with $t$.`],
     ['R2', 1, String.raw`$h'(5)=6>5.2$, so the gradient at the right-hand end exceeds the chord gradient.`]],
    (L) => { const h = (t) => 0.4 * t * t + 2 * t; L.close((h(5) - h(3)) / 2, 5.2); L.close(L.d(h, 3), 4.4); L.close(L.d(h, 4), 5.2); L.close(L.d(h, 5), 6); }),

  Q('SL 5.2', 'cubic-intervals', 'P1',
    String.raw`Let $f(x)=x^3-6x^2+9x+2$.

(a) Find $f'(x)$ and show that it can be written as $3(x-1)(x-3)$. [2]

(b) Find the intervals on which $f$ is increasing and on which it is decreasing. [2]

(c) Find the coordinates of the local maximum and the local minimum. [2]`,
    [['M1', 1, String.raw`$f'(x)=3x^2-12x+9$.`],
     ['AG1', 1, String.raw`Factorise: $3(x^2-4x+3)=3(x-1)(x-3)$.`],
     ['M1', 1, String.raw`Sign diagram: $f'>0$ outside the roots and $f'<0$ between them.`],
     ['A1', 1, String.raw`Increasing for $x<1$ and for $x>3$; decreasing for $1<x<3$.`],
     ['A1', 1, String.raw`Local maximum at $x=1$: $f(1)=1-6+9+2=6$, so $(1,6)$.`],
     ['A1', 1, String.raw`Local minimum at $x=3$: $f(3)=27-54+27+2=2$, so $(3,2)$.`]],
    (L) => { const f = (x) => x ** 3 - 6 * x * x + 9 * x + 2; L.close(f(1), 6); L.close(f(3), 2); L.close(L.d(f, 1), 0, 1e-6); L.close(L.d(f, 3), 0, 1e-6); }),

  Q('SL 5.2', 'roots-from-shape', 'P2',
    String.raw`Let $f(x)=2x^3-9x^2-24x+10$.

(a) Find $f'(x)$ and solve $f'(x)=0$. [3]

(b) Find the value of $f$ at each stationary point. [2]

(c) Use the sign of $f'$ to classify each stationary point. [2]

(d) Hence explain why the equation $f(x)=0$ has exactly three real solutions. [2]`,
    [['M1', 1, String.raw`$f'(x)=6x^2-18x-24$.`],
     ['A1', 1, String.raw`$f'(x)=6(x-4)(x+1)$.`],
     ['A1', 1, String.raw`Stationary at $x=-1$ and $x=4$.`],
     ['A1', 1, String.raw`$f(-1)=-2-9+24+10=23$.`],
     ['A1', 1, String.raw`$f(4)=128-144-96+10=-102$.`],
     ['M1', 1, String.raw`$f'>0$ for $x<-1$, $f'<0$ for $-1<x<4$, $f'>0$ for $x>4$.`],
     ['A1', 1, String.raw`Local maximum at $(-1,23)$ and local minimum at $(4,-102)$.`],
     ['R1', 1, String.raw`The graph rises from $-\infty$ to the maximum $23>0$, so it crosses the axis once on $x<-1$. It then falls to the minimum $-102<0$, crossing again between $-1$ and $4$.`],
     ['R2', 1, String.raw`It then rises to $+\infty$ and crosses a third time for $x>4$. No further crossings are possible since the graph is monotonic between turning points, so there are exactly three solutions.`]],
    (L) => { const f = (x) => 2 * x ** 3 - 9 * x * x - 24 * x + 10; L.close(f(-1), 23); L.close(f(4), -102); L.close(L.d(f, 4), 0, 1e-5); }),

  Q('SL 5.3', 'negative-powers', 'P1',
    String.raw`Let $f(x)=3x^2-\dfrac4x+\dfrac5{x^3}$ for $x\neq0$.

(a) Find $f'(x)$. [3]

(b) Find the value of $f'(1)$. [1]`,
    [['M1', 1, String.raw`Rewrite as $f(x)=3x^2-4x^{-1}+5x^{-3}$.`],
     ['A1', 1, String.raw`$\dfrac{d}{dx}(3x^2)=6x$ and $\dfrac{d}{dx}(-4x^{-1})=4x^{-2}$.`],
     ['A2', 1, String.raw`$\dfrac{d}{dx}(5x^{-3})=-15x^{-4}$, so $f'(x)=6x+\dfrac4{x^2}-\dfrac{15}{x^4}$.`],
     ['A3', 1, String.raw`$f'(1)=6+4-15=-5$.`]],
    (L) => { const f = (x) => 3 * x * x - 4 / x + 5 / x ** 3; L.close(L.d(f, 1), -5, 1e-5); L.close(L.d(f, 2), 12 + 1 - 15 / 16, 1e-5); }),

  Q('SL 5.3', 'find-the-constants', 'P2',
    String.raw`The function $f(x)=ax^3+bx$ satisfies $f(1)=5$ and $f'(2)=27$.

(a) Show that $a+b=5$ and $12a+b=27$. [3]

(b) Find the values of $a$ and $b$. [2]

(c) Hence write down $f'(x)$ and show that $f$ has no stationary points. [3]`,
    [['M1', 1, String.raw`$f'(x)=3ax^2+b$.`],
     ['A1', 1, String.raw`$f(1)=a+b=5$.`],
     ['AG1', 1, String.raw`$f'(2)=12a+b=27$.`],
     ['M2', 1, String.raw`Subtract the equations: $11a=22$.`],
     ['A2', 1, String.raw`$a=2$ and $b=3$.`],
     ['A3', 1, String.raw`$f'(x)=6x^2+3$.`],
     ['R1', 1, String.raw`$6x^2\geq0$ for all real $x$, so $f'(x)\geq3>0$.`],
     ['R2', 1, String.raw`Since $f'(x)$ is never zero, there are no stationary points.`]],
    (L) => { const f = (x) => 2 * x ** 3 + 3 * x; L.close(f(1), 5); L.close(L.d(f, 2), 27, 1e-5); }),

  Q('SL 5.4', 'tangent-and-normal', 'P1',
    String.raw`The curve $C$ has equation $y=x^2-4x+5$.

(a) Find the coordinates of the point $P$ on $C$ where $x=3$, and the gradient of $C$ at $P$. [2]

(b) Find the equation of the tangent at $P$. [1]

(c) Find the equation of the normal at $P$, giving your answer in the form $ax+by=c$ with integer $a$, $b$, $c$. [2]`,
    [['M1', 1, String.raw`$\dfrac{dy}{dx}=2x-4$, which equals $2$ at $x=3$.`],
     ['A1', 1, String.raw`$y(3)=9-12+5=2$, so $P=(3,2)$ and the gradient is $2$.`],
     ['A2', 1, String.raw`Tangent: $y-2=2(x-3)$, that is $y=2x-4$.`],
     ['M2', 1, String.raw`Normal gradient is $-\dfrac12$: $y-2=-\dfrac12(x-3)$.`],
     ['A3', 1, String.raw`Multiply by $2$: $2y-4=-x+3$, so $x+2y=7$.`]],
    (L) => { const f = (x) => x * x - 4 * x + 5; L.close(f(3), 2); L.close(L.d(f, 3), 2, 1e-5); L.close(3 + 2 * 2, 7); }),

  Q('SL 5.4', 'parallel-tangents', 'P2',
    String.raw`The curve $C$ has equation $y=x^3-3x+1$.

(a) Find the coordinates of the two points on $C$ at which the tangent has gradient $9$. [4]

(b) Find the equation of the tangent at the point with positive $x$-coordinate. [2]

(c) Show that this tangent meets $C$ again where $x^3-12x+16=0$. [2]

(d) Hence find the coordinates of the other point where the tangent meets $C$. [2]`,
    [['M1', 1, String.raw`$\dfrac{dy}{dx}=3x^2-3$.`],
     ['M2', 1, String.raw`Set $3x^2-3=9$, so $x^2=4$.`],
     ['A1', 1, String.raw`$x=2$ or $x=-2$.`],
     ['A2', 1, String.raw`$y(2)=8-6+1=3$ and $y(-2)=-8+6+1=-1$, so the points are $(2,3)$ and $(-2,-1)$.`],
     ['M3', 1, String.raw`Tangent at $(2,3)$: $y-3=9(x-2)$.`],
     ['A3', 1, String.raw`$y=9x-15$.`],
     ['M4', 1, String.raw`Equate: $x^3-3x+1=9x-15$.`],
     ['AG1', 1, String.raw`Rearrange to $x^3-12x+16=0$.`],
     ['M5', 1, String.raw`Since $x=2$ is a double root, factorise: $(x-2)^2(x+4)=0$.`],
     ['A4', 1, String.raw`The other point has $x=-4$ and $y=9(-4)-15=-51$, so $(-4,-51)$.`]],
    (L) => { const f = (x) => x ** 3 - 3 * x + 1; L.close(L.d(f, 2), 9, 1e-5); L.close(L.d(f, -2), 9, 1e-5); L.close(f(2), 3); L.close(f(-2), -1); L.close(f(-4), -51); L.close(9 * -4 - 15, -51); L.close((-4 - 2) ** 2 * 0 + (2 - 2) ** 2 * 6, 0); }),

  Q('SL 5.5', 'function-from-gradient', 'P1',
    String.raw`A curve has gradient function $f'(x)=6x^2-4x+1$ and passes through the point $(1,4)$.

(a) Integrate $f'(x)$, including a constant of integration. [2]

(b) Find $f(x)$. [2]

(c) Find $f(2)$. [1]`,
    [['M1', 1, String.raw`Use $\int x^n\,dx=\dfrac{x^{n+1}}{n+1}$ term by term.`],
     ['A1', 1, String.raw`$f(x)=2x^3-2x^2+x+C$.`],
     ['M2', 1, String.raw`Use $f(1)=4$: $2-2+1+C=4$.`],
     ['A2', 1, String.raw`$C=3$, so $f(x)=2x^3-2x^2+x+3$.`],
     ['A3', 1, String.raw`$f(2)=16-8+2+3=13$.`]],
    (L) => { const f = (x) => 2 * x ** 3 - 2 * x * x + x + 3; L.close(f(1), 4); L.close(L.d(f, 1.5), 6 * 2.25 - 6 + 1, 1e-5); L.close(f(2), 13); }),

  Q('SL 5.5', 'trapezium-overestimate', 'P2',
    String.raw`Let $f(x)=x^2+1$. The region $R$ is bounded by the graph of $f$, the $x$-axis, and the lines $x=0$ and $x=3$.

(a) Find the exact area of $R$ by integration. [3]

(b) Use the trapezium rule with three strips of equal width to estimate the area of $R$. [3]

(c) Explain why the trapezium rule gives an overestimate here, and state the size of the overestimate. [2]`,
    [['M1', 1, String.raw`Antiderivative $\dfrac{x^3}{3}+x$.`],
     ['M2', 1, String.raw`Evaluate between $0$ and $3$: $(9+3)-0$.`],
     ['A1', 1, String.raw`Area $=12$ square units.`],
     ['M3', 1, String.raw`Width $1$; ordinates $f(0)=1$, $f(1)=2$, $f(2)=5$, $f(3)=10$.`],
     ['M4', 1, String.raw`$\tfrac12\cdot1\cdot\left[1+10+2(2+5)\right]$.`],
     ['A2', 1, String.raw`Estimate $=12.5$.`],
     ['R1', 1, String.raw`$f''(x)=2>0$, so the graph is concave up and each chord lies above the curve.`],
     ['R2', 1, String.raw`The overestimate is $12.5-12=0.5$ square units.`]],
    (L) => { const f = (x) => x * x + 1; L.close(L.integ(f, 0, 3), 12); L.close(0.5 * (f(0) + f(3) + 2 * (f(1) + f(2))), 12.5); }),

  Q('SL 5.6', 'product-chain-rules', 'P1',
    String.raw`(a) Differentiate $y=(3x^2+1)^4$. [2]

(b) Let $f(x)=x^2\sin 2x$. Find $f'(x)$. [2]

(c) Find the exact value of $f'\!\left(\dfrac\pi4\right)$. [2]`,
    [['M1', 1, String.raw`Chain rule: outer derivative $4(3x^2+1)^3$ times inner derivative $6x$.`],
     ['A1', 1, String.raw`$\dfrac{dy}{dx}=24x(3x^2+1)^3$.`],
     ['M2', 1, String.raw`Product rule with $u=x^2$, $v=\sin2x$, $v'=2\cos2x$.`],
     ['A2', 1, String.raw`$f'(x)=2x\sin2x+2x^2\cos2x$.`],
     ['M3', 1, String.raw`Substitute $x=\dfrac\pi4$: $\sin\dfrac\pi2=1$ and $\cos\dfrac\pi2=0$.`],
     ['A3', 1, String.raw`$f'\!\left(\dfrac\pi4\right)=2\cdot\dfrac\pi4\cdot1+0=\dfrac\pi2$.`]],
    (L) => { const f = (x) => x * x * Math.sin(2 * x); L.close(L.d(f, Math.PI / 4), Math.PI / 2, 1e-5); const g = (x) => (3 * x * x + 1) ** 4; L.close(L.d(g, 1), 24 * 64, 1e-5); }),

  Q('SL 5.6', 'rational-extrema', 'P2',
    String.raw`Let $f(x)=\dfrac{x}{x^2+1}$ for $x\in\mathbb{R}$.

(a) Show that $f'(x)=\dfrac{1-x^2}{(x^2+1)^2}$. [3]

(b) Find the coordinates of the stationary points of $f$. [3]

(c) Classify each stationary point. [2]

(d) Hence state the range of $f$, giving a reason. [2]`,
    [['M1', 1, String.raw`Quotient rule with $u=x$, $v=x^2+1$, $u'=1$, $v'=2x$.`],
     ['M2', 1, String.raw`$f'(x)=\dfrac{(x^2+1)\cdot1-x\cdot2x}{(x^2+1)^2}$.`],
     ['AG1', 1, String.raw`Simplify the numerator to $1-x^2$.`],
     ['M3', 1, String.raw`Set $1-x^2=0$ (the denominator is never zero).`],
     ['A1', 1, String.raw`$x=1$ or $x=-1$.`],
     ['A2', 1, String.raw`$f(1)=\dfrac12$ and $f(-1)=-\dfrac12$, so $\left(1,\dfrac12\right)$ and $\left(-1,-\dfrac12\right)$.`],
     ['M4', 1, String.raw`Sign of $f'$: negative for $x<-1$, positive for $-1<x<1$, negative for $x>1$.`],
     ['A3', 1, String.raw`$\left(-1,-\tfrac12\right)$ is a local minimum and $\left(1,\tfrac12\right)$ is a local maximum.`],
     ['R1', 1, String.raw`As $x\to\pm\infty$, $f(x)\to0$, which lies between the two stationary values, so these are the global extremes.`],
     ['A4', 1, String.raw`Range: $-\dfrac12\leq f(x)\leq\dfrac12$.`]],
    (L) => { const f = (x) => x / (x * x + 1); L.close(f(1), 0.5); L.close(f(-1), -0.5); L.close(L.d(f, 1), 0, 1e-6); L.close(L.d(f, 0.3), (1 - 0.09) / (1.09 ** 2), 1e-5); }),

  Q('SL 5.7', 'concavity-and-inflection', 'P1',
    String.raw`Let $f(x)=x^4-8x^3+18x^2$.

(a) Find $f''(x)$ and show that $f''(x)=12(x-1)(x-3)$. [2]

(b) Find the values of $x$ for which the graph of $f$ is concave up, and those for which it is concave down. [2]

(c) Find the coordinates of the two points of inflection. [2]`,
    [['M1', 1, String.raw`$f'(x)=4x^3-24x^2+36x$ and $f''(x)=12x^2-48x+36$.`],
     ['AG1', 1, String.raw`Factorise $12(x^2-4x+3)=12(x-1)(x-3)$.`],
     ['M2', 1, String.raw`Sign diagram for $f''$.`],
     ['A1', 1, String.raw`Concave up for $x<1$ and $x>3$; concave down for $1<x<3$.`],
     ['A2', 1, String.raw`Concavity changes at $x=1$: $f(1)=1-8+18=11$, so $(1,11)$.`],
     ['A3', 1, String.raw`Concavity changes at $x=3$: $f(3)=81-216+162=27$, so $(3,27)$.`]],
    (L) => { const f = (x) => x ** 4 - 8 * x ** 3 + 18 * x * x; L.close(f(1), 11); L.close(f(3), 27); L.close(L.d2(f, 1), 0, 1e-3); L.close(L.d2(f, 3), 0, 1e-3); }),

  Q('SL 5.7', 'cubic-features', 'P2',
    String.raw`Let $f(x)=x^3-6x^2+9x+1$.

(a) Find the coordinates of the stationary points of $f$. [3]

(b) Use the second derivative to classify each stationary point. [2]

(c) Find the point of inflection, justifying that it is a point of inflection. [2]

(d) Find the gradient of the curve at the point of inflection, and explain why this is the smallest gradient on the curve. [2]`,
    [['M1', 1, String.raw`$f'(x)=3x^2-12x+9=3(x-1)(x-3)$.`],
     ['A1', 1, String.raw`Stationary at $x=1$ and $x=3$.`],
     ['A2', 1, String.raw`$f(1)=5$ and $f(3)=1$, so the points are $(1,5)$ and $(3,1)$.`],
     ['M2', 1, String.raw`$f''(x)=6x-12$, so $f''(1)=-6<0$ and $f''(3)=6>0$.`],
     ['A3', 1, String.raw`$(1,5)$ is a local maximum and $(3,1)$ is a local minimum.`],
     ['M3', 1, String.raw`$f''(x)=0$ at $x=2$, and $f''$ changes sign from negative to positive there; $f(2)=3$.`],
     ['A4', 1, String.raw`Point of inflection at $(2,3)$.`],
     ['A5', 1, String.raw`$f'(2)=12-24+9=-3$.`],
     ['R1', 1, String.raw`$f'(x)=3x^2-12x+9=3(x-2)^2-3\geq-3$, so the gradient is least at the inflection.`]],
    (L) => { const f = (x) => x ** 3 - 6 * x * x + 9 * x + 1; L.close(f(1), 5); L.close(f(3), 1); L.close(f(2), 3); L.close(L.d(f, 2), -3, 1e-5); L.close(L.d2(f, 2), 0, 1e-3); }),

  Q('SL 5.8', 'fence-with-a-wall', 'P1',
    String.raw`A farmer has $120$ m of fencing to enclose a rectangular field, using a straight wall as one side. Two sides of length $x$ metres are perpendicular to the wall.

(a) Show that the area of the field is $A=120x-2x^2$. [2]

(b) Find the value of $x$ that maximises the area, and justify that it is a maximum. [3]

(c) Find the maximum area. [1]`,
    [['M1', 1, String.raw`The side parallel to the wall is $120-2x$.`],
     ['AG1', 1, String.raw`$A=x(120-2x)=120x-2x^2$.`],
     ['M2', 1, String.raw`$\dfrac{dA}{dx}=120-4x=0$.`],
     ['A1', 1, String.raw`$x=30$.`],
     ['R1', 1, String.raw`$\dfrac{d^2A}{dx^2}=-4<0$, so this is a maximum.`],
     ['A2', 1, String.raw`$A=30\times60=1800$ square metres.`]],
    (L) => { const A = (x) => 120 * x - 2 * x * x; L.close(L.d(A, 30), 0, 1e-5); L.close(A(30), 1800); }),

  Q('SL 5.8', 'can-minimum-area', 'P2',
    String.raw`A closed cylindrical can of radius $r$ cm and height $h$ cm must hold exactly $330$ cm$^3$.

(a) Show that the total surface area is $A=2\pi r^2+\dfrac{660}{r}$. [3]

(b) Find the value of $r$ that minimises $A$. [3]

(c) Find the minimum surface area, correct to three significant figures. [2]`,
    [['M1', 1, String.raw`Volume: $\pi r^2h=330$, so $h=\dfrac{330}{\pi r^2}$.`],
     ['M2', 1, String.raw`$A=2\pi r^2+2\pi rh$.`],
     ['AG1', 1, String.raw`Substituting $h$: $2\pi r\cdot\dfrac{330}{\pi r^2}=\dfrac{660}{r}$, so $A=2\pi r^2+\dfrac{660}{r}$.`],
     ['M3', 1, String.raw`$\dfrac{dA}{dr}=4\pi r-\dfrac{660}{r^2}=0$.`],
     ['A1', 1, String.raw`$r^3=\dfrac{165}{\pi}$.`],
     ['A2', 1, String.raw`$r=3.74$ cm (and $\dfrac{d^2A}{dr^2}=4\pi+\dfrac{1320}{r^3}>0$ confirms a minimum).`],
     ['M4', 1, String.raw`Substitute $r=3.744$ into $A$.`],
     ['A3', 1, String.raw`$A=264$ cm$^2$.`]],
    (L) => { const A = (r) => 2 * Math.PI * r * r + 660 / r; const r = Math.cbrt(165 / Math.PI); L.close(r, 3.744, 1e-3); L.close(A(r), 264.4, 1e-3); L.close(L.d(A, r), 0, 1e-4); }),

  Q('SL 5.9', 'rest-and-distance', 'P1',
    String.raw`A particle moves on a straight line with displacement $s=t^3-9t^2+24t$ metres from the origin after $t$ seconds, for $0\leq t\leq5$.

(a) Find expressions for the velocity $v$ and the acceleration $a$. [2]

(b) Find the times at which the particle is at rest. [2]

(c) Find the displacement of the particle at each of these times. [2]

(d) Find the total distance travelled in the first $5$ seconds. [2]`,
    [['M1', 1, String.raw`$v=\dfrac{ds}{dt}=3t^2-18t+24$.`],
     ['A1', 1, String.raw`$v=3(t-2)(t-4)$ and $a=\dfrac{dv}{dt}=6t-18$.`],
     ['M2', 1, String.raw`Set $v=0$.`],
     ['A2', 1, String.raw`$t=2$ and $t=4$.`],
     ['A3', 1, String.raw`$s(2)=8-36+48=20$ m.`],
     ['A4', 1, String.raw`$s(4)=64-144+96=16$ m.`],
     ['M3', 1, String.raw`Split at the stops: $s(0)=0$, $s(2)=20$, $s(4)=16$, $s(5)=125-225+120=20$; distances $20$, $4$ and $4$.`],
     ['A5', 1, String.raw`Total distance $=20+4+4=28$ m.`]],
    (L) => { const s = (t) => t ** 3 - 9 * t * t + 24 * t; L.close(s(2), 20); L.close(s(4), 16); L.close(s(5), 20); L.close(L.integ((t) => Math.abs(L.d(s, t)), 0, 5, 20000), 28, 1e-4); }),

  Q('SL 5.9', 'maximum-velocity', 'P2',
    String.raw`A particle moves on a line. Its acceleration is $a=4-2t$ m s$^{-2}$ for $t\geq0$. When $t=0$ the velocity is $3$ m s$^{-1}$ and the displacement from the origin is $1$ m.

(a) Find an expression for the velocity $v(t)$. [2]

(b) Find an expression for the displacement $s(t)$. [2]

(c) Find the greatest velocity, and the time at which it occurs, justifying that it is a maximum. [3]

(d) Find the time $t>0$ at which the particle is next at rest. [2]

(e) Find the displacement at that time, correct to three significant figures. [1]`,
    [['M1', 1, String.raw`$v=\int(4-2t)\,dt=4t-t^2+C$.`],
     ['A1', 1, String.raw`$v(0)=3$ gives $C=3$, so $v=3+4t-t^2$.`],
     ['M2', 1, String.raw`$s=\int v\,dt=3t+2t^2-\dfrac{t^3}{3}+D$.`],
     ['A2', 1, String.raw`$s(0)=1$ gives $D=1$, so $s=1+3t+2t^2-\dfrac{t^3}{3}$.`],
     ['M3', 1, String.raw`Greatest velocity where $a=0$: $4-2t=0$, so $t=2$.`],
     ['A3', 1, String.raw`$v(2)=3+8-4=7$ m s$^{-1}$.`],
     ['R1', 1, String.raw`$\dfrac{da}{dt}=-2<0$ (or $a$ changes from positive to negative), so this is a maximum.`],
     ['M4', 1, String.raw`Solve $3+4t-t^2=0$, that is $t^2-4t-3=0$.`],
     ['A4', 1, String.raw`$t=2+\sqrt7=4.65$ s (rejecting $2-\sqrt7<0$).`],
     ['A5', 1, String.raw`$s(4.646)=1+13.94+43.17-33.43=24.7$ m.`]],
    (L) => { const v = (t) => 3 + 4 * t - t * t, s = (t) => 1 + 3 * t + 2 * t * t - t ** 3 / 3; const t0 = 2 + Math.sqrt(7); L.close(v(t0), 0, 1e-9); L.close(v(2), 7); L.close(t0, 4.6458, 1e-4); L.close(s(t0), 24.7, 2e-3); L.close(L.integ(v, 0, 2) + 1, s(2), 1e-8); }),

  Q('SL 5.10', 'integrate-and-substitute', 'P1',
    String.raw`(a) Find $\displaystyle\int\left(4e^{2x}+\frac3x-\sin3x\right)dx$. [4]

(b) Use the substitution $u=x^2+3$ to find $\displaystyle\int x(x^2+3)^4\,dx$. [3]`,
    [['M1', 1, String.raw`For a linear inner function, divide by its coefficient: $\int e^{2x}\,dx=\tfrac12e^{2x}$ and $\int\sin3x\,dx=-\tfrac13\cos3x$.`],
     ['A1', 1, String.raw`$\int4e^{2x}\,dx=2e^{2x}$.`],
     ['A2', 1, String.raw`$\int\dfrac3x\,dx=3\ln|x|$.`],
     ['A3', 1, String.raw`$-\int\sin3x\,dx=+\tfrac13\cos3x$, and the result is $2e^{2x}+3\ln|x|+\tfrac13\cos3x+C$.`],
     ['M2', 1, String.raw`$u=x^2+3$ gives $du=2x\,dx$, so $x\,dx=\tfrac12du$.`],
     ['A4', 1, String.raw`$\tfrac12\int u^4\,du=\dfrac{u^5}{10}$.`],
     ['A5', 1, String.raw`$\dfrac{(x^2+3)^5}{10}+C$.`]],
    (L) => { const F = (x) => 2 * Math.exp(2 * x) + 3 * Math.log(Math.abs(x)) + Math.cos(3 * x) / 3; L.close(L.d(F, 1.3), 4 * Math.exp(2.6) + 3 / 1.3 - Math.sin(3.9), 1e-5); const G = (x) => (x * x + 3) ** 5 / 10; L.close(L.d(G, 1.2), 1.2 * (1.44 + 3) ** 4, 1e-5); }),

  Q('SL 5.10', 'curve-from-gradient', 'P2',
    String.raw`A curve has gradient function $f'(x)=x\,e^{x^2}$ and passes through $(0,3)$.

(a) Find $f(x)$. [4]

(b) Find the exact value of $f(1)$ and give it to three significant figures. [2]

(c) Find $\displaystyle\int\sin x\cos^2x\,dx$. [2]`,
    [['M1', 1, String.raw`Let $u=x^2$, so $du=2x\,dx$.`],
     ['A1', 1, String.raw`$\int x\,e^{x^2}\,dx=\tfrac12\int e^u\,du=\tfrac12e^{x^2}+C$.`],
     ['M2', 1, String.raw`Use $f(0)=3$: $\tfrac12+C=3$.`],
     ['A2', 1, String.raw`$C=\tfrac52$, so $f(x)=\tfrac12e^{x^2}+\tfrac52$.`],
     ['A3', 1, String.raw`$f(1)=\dfrac{e+5}{2}$.`],
     ['A4', 1, String.raw`$f(1)=3.86$.`],
     ['M3', 1, String.raw`Let $u=\cos x$, so $du=-\sin x\,dx$ and the integral becomes $-\int u^2\,du$.`],
     ['A5', 1, String.raw`$-\dfrac{\cos^3x}{3}+C$.`]],
    (L) => { const f = (x) => 0.5 * Math.exp(x * x) + 2.5; L.close(L.d(f, 0.7), 0.7 * Math.exp(0.49), 1e-5); L.close(f(0), 3); L.close(f(1), (Math.E + 5) / 2); L.close(f(1), 3.859, 1e-3); const G = (x) => -(Math.cos(x) ** 3) / 3; L.close(L.d(G, 0.9), Math.sin(0.9) * Math.cos(0.9) ** 2, 1e-5); }),

  Q('SL 5.11', 'signed-area-and-area', 'P1',
    String.raw`Let $f(x)=x^2-4$.

(a) State, with a reason, the sign of $\displaystyle\int_{-2}^{2}f(x)\,dx$ without calculating it. [1]

(b) Evaluate $\displaystyle\int_{-2}^{2}f(x)\,dx$. [3]

(c) Hence find the area of the region enclosed by the graph of $f$ and the $x$-axis. [2]`,
    [['R1', 1, String.raw`The graph lies below the $x$-axis for $-2<x<2$, so the integral is negative.`],
     ['M1', 1, String.raw`Antiderivative $\dfrac{x^3}{3}-4x$.`],
     ['M2', 1, String.raw`$\left(\dfrac83-8\right)-\left(-\dfrac83+8\right)$.`],
     ['A1', 1, String.raw`$-\dfrac{32}{3}$.`],
     ['M3', 1, String.raw`Area is the magnitude of the signed integral, since the region is entirely below the axis.`],
     ['A2', 1, String.raw`Area $=\dfrac{32}{3}$ square units.`]],
    (L) => { L.close(L.integ((x) => x * x - 4, -2, 2), -32 / 3, 1e-9); }),

  Q('SL 5.11', 'between-curves-and-limit', 'P2',
    String.raw`(a) The curves $y=4x-x^2$ and $y=x$ intersect at the origin and at another point. Find the $x$-coordinates of the intersections. [2]

(b) Find the area of the region enclosed between the two curves. [3]

(c) Given that $k>0$ and $\displaystyle\int_0^k(2x+1)\,dx=12$, find the value of $k$. [4]`,
    [['M1', 1, String.raw`Equate: $4x-x^2=x$, so $3x-x^2=x(3-x)=0$.`],
     ['A1', 1, String.raw`$x=0$ and $x=3$.`],
     ['M2', 1, String.raw`On $(0,3)$ the parabola is above the line, so the integrand is $(4x-x^2)-x=3x-x^2$.`],
     ['M3', 1, String.raw`Antiderivative $\dfrac{3x^2}{2}-\dfrac{x^3}{3}$ evaluated from $0$ to $3$.`],
     ['A2', 1, String.raw`$\dfrac{27}{2}-9=\dfrac92$ square units.`],
     ['M4', 1, String.raw`$\int_0^k(2x+1)\,dx=\left[x^2+x\right]_0^k=k^2+k$.`],
     ['M5', 1, String.raw`$k^2+k=12$, so $k^2+k-12=(k+4)(k-3)=0$.`],
     ['A3', 1, String.raw`$k=3$ or $k=-4$.`],
     ['R1', 1, String.raw`Since $k>0$, reject $k=-4$, so $k=3$.`]],
    (L) => { L.close(L.integ((x) => 3 * x - x * x, 0, 3), 4.5, 1e-9); L.close(L.integ((x) => 2 * x + 1, 0, 3), 12, 1e-9); }),
];
