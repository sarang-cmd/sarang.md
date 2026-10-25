# Trigonometric functions and graphs

> **SL 3.7 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- sketch the graphs of $y=\sin x$, $y=\cos x$ and $y=\tan x$ and state their domain, range, period, intercepts and symmetry;
- identify the amplitude, period, midline (principal axis) and phase shift of $y=a\sin(b(x-c))+d$ and $y=a\cos(b(x-c))+d$;
- sketch transformed trigonometric graphs and find their maximum and minimum values;
- find the equation of a sinusoidal graph from its features;
- state and use the relation $\cos x=\sin\left(x+\dfrac\pi2\right)$ between the two graphs;
- describe the transformations that map $y=\sin x$ to a given sinusoid and the graph of $y=\tan x$ to its variants, including asymptotes;
- model periodic phenomena (tides, wheels, temperature, daylight) and answer questions about maxima, minima and times above a level;
- use the GDC to solve model questions in radian mode.

## Why this topic matters

Many natural and engineered systems repeat: the tide rises and falls twice a day; the height of a rider on a Ferris wheel goes up and down every few minutes; the length of daylight changes with the seasons; an alternating current oscillates $50$ times a second; a vibrating string or a sound wave oscillates continuously. The trigonometric functions are the mathematical model of every such periodic behaviour, because the point going round the unit circle at a constant speed has the coordinates $(\cos t,\sin t)$, which are exactly sinusoidal functions of time. In the IB, the topic combines three skills: knowing the *shape* of the three basic graphs; reading off the *parameters* from an equation or a graph, which is the transformation theory of SL 2.11; and *modelling*, which means using the function to answer questions about a real situation, usually with the GDC and in radian mode. Mistakes in this topic tend to be about the period (using $b$ instead of $\dfrac{2\pi}b$), the sign of the phase shift, and about interpreting a model in context. Each of these can be avoided with a few standard procedures, which this chapter gives.

## Core ideas

### The graph of $y=\sin x$

The sine graph is the height of a point moving anticlockwise round the unit circle, plotted against the angle $x$ in radians. Its features are:

- domain: all real numbers; range: $-1\le y\le1$;
- period $2\pi$: the shape repeats every $2\pi$;
- passes through $(0,0)$, with zeros at every multiple of $\pi$: $x=k\pi$;
- maximum value $1$ at $x=\dfrac\pi2+2k\pi$; minimum value $-1$ at $x=\dfrac{3\pi}2+2k\pi$;
- odd: $\sin(-x)=-\sin x$ (symmetry about the origin).

One cycle from $x=0$ to $x=2\pi$ has five key points: $(0,0)$, $\left(\dfrac\pi2,1\right)$, $(\pi,0)$, $\left(\dfrac{3\pi}2,-1\right)$ and $(2\pi,0)$, which divide the cycle into quarters. Sketching with these five points gives a good smooth curve.

### The graph of $y=\cos x$

- domain: all real numbers; range: $-1\le y\le1$; period $2\pi$;
- $y$-intercept $(0,1)$ (a maximum); zeros at $x=\dfrac\pi2+k\pi$;
- maxima at $x=2k\pi$, minima at $x=\pi+2k\pi$;
- even: $\cos(-x)=\cos x$ (symmetry about the $y$-axis).

The cosine graph is the sine graph translated $\dfrac\pi2$ to the left: $\cos x=\sin\left(x+\dfrac\pi2\right)$, and equivalently $\sin x=\cos\left(x-\dfrac\pi2\right)$ (SL 3.5). So every sinusoid can be written as a sine or as a cosine, with a different phase shift.

### The graph of $y=\tan x$

- domain: $x\ne\dfrac\pi2+k\pi$; range: all real numbers;
- period $\pi$ (not $2\pi$);
- zeros at $x=k\pi$; passes through the origin with gradient $1$;
- **vertical asymptotes** at $x=\dfrac\pi2+k\pi$, since $\cos x=0$ there;
- odd function, increasing on each branch between asymptotes.

The tangent graph has no maximum or minimum, so it has no amplitude. For $y=a\tan(b(x-c))+d$, the period is $\dfrac\pi b$, and the asymptotes are located by solving $b(x-c)=\dfrac\pi2+k\pi$.

### The general sinusoid

The function
$$
y=a\sin\big(b(x-c)\big)+d\qquad\text{or}\qquad y=a\cos\big(b(x-c)\big)+d
$$
is obtained from the basic graph by the transformations of SL 2.11. Its features are:

- **amplitude** $|a|$: the distance from the midline to a maximum;
- **period** $\dfrac{2\pi}{b}$ (for $b>0$; in degrees, $\dfrac{360^{\circ}}b$);
- **midline** (principal axis) $y=d$;
- **phase shift** $c$ (a horizontal translation: right if $c>0$);
- **maximum** value $d+|a|$ and **minimum** value $d-|a|$, so the range is $[d-|a|,\ d+|a|]$.

The number $b$ is the number of cycles in $2\pi$. It is a horizontal stretch with scale factor $\dfrac1b$, so the period is $\dfrac{2\pi}b$. A negative $a$ reflects the graph in the midline; a negative $b$ can be removed using $\sin(-\theta)=-\sin\theta$ and $\cos(-\theta)=\cos\theta$. When the argument is written $bx-e$, factorise first: $\sin(2x-\pi)=\sin\big(2(x-\tfrac\pi2)\big)$ has a phase shift of $\dfrac\pi2$, not $\pi$.

### Sketching a sinusoid

1. Draw the midline $y=d$ as a dashed line, and the maximum and minimum lines.
2. Find the period $\dfrac{2\pi}b$ and divide it into four equal parts.
3. For $\sin$: start at the midline at $x=c$ going up (if $a>0$); then max, midline, min, midline at quarter periods. For $\cos$: start at a maximum at $x=c$ (if $a>0$), then midline, min, midline, max.
4. Label the key points with coordinates, and sketch a smooth curve.

### Finding the equation from a graph

From a graph with a clear maximum and minimum:

- $d=\dfrac{\text{max}+\text{min}}2$ and $|a|=\dfrac{\text{max}-\text{min}}2$;
- the period $T$ is the horizontal distance between two consecutive maxima (or twice the distance from a maximum to the next minimum), so $b=\dfrac{2\pi}T$;
- use a maximum for a cosine model: a maximum at $x=x_0$ gives $y=a\cos\big(b(x-x_0)\big)+d$ with $a>0$. For a sine model, use a point where the graph crosses the midline going up.

Check the equation by evaluating it at one other point of the graph, or at the minimum.

### Modelling periodic phenomena

A typical model is $h(t)=a\cos(bt)+d$ or $h(t)=a\sin\big(b(t-c)\big)+d$. Interpret the parameters in context: $d$ is the average level, $|a|$ is the variation about it, $T=\dfrac{2\pi}b$ is the cycle length, and $c$ is a time shift (when the cycle starts). Typical tasks:

- find the maximum and minimum values and when they occur;
- find the value at a given time (substitute);
- find the times when the quantity equals a given value (solve $a\cos(bt)+d=k$ using the inverse cosine and symmetry, or graphically);
- find the length of time during which the quantity is above or below a threshold (the interval between two solutions, repeated each period).

Always work in radian mode, and state the domain of the model (for example $t\ge0$). Round only at the end, and give units. A model is valid only within certain limits, and real data do not repeat exactly, so mention if appropriate that the model is an approximation.

### Tangent graph transformations

For $y=a\tan\big(b(x-c)\big)+d$: the period is $\dfrac\pi b$, the asymptotes are at $x=c+\dfrac{\pi}{2b}+\dfrac{k\pi}b$, the "centre" points where the graph crosses its midline at $y=d$ are at $x=c+\dfrac{k\pi}b$, and the vertical stretch factor $a$ changes steepness.

## Worked examples

### Example 1 (features of a sine graph, 5 marks)

For $y=3\sin2x+1$, state the amplitude, period, midline, range and the coordinates of the first maximum for $x>0$.

*Solution.* Amplitude $3$; period $\dfrac{2\pi}2=\pi$; midline $y=1$; range $[-2,4]$. The sine curve first reaches its maximum when $2x=\dfrac\pi2$, so $x=\dfrac\pi4$, where $y=3+1=4$. The first maximum is at $\left(\dfrac\pi4,4\right)$.

### Example 2 (a cosine with a phase shift, 6 marks)

For $y=2\cos\left(x-\dfrac\pi3\right)-1$, state the amplitude, period, phase shift, midline, and the coordinates of a maximum and the next minimum.

*Solution.* Amplitude $2$; period $2\pi$; phase shift $\dfrac\pi3$ to the right; midline $y=-1$. The cosine is at its maximum when its argument is $0$, so at $x=\dfrac\pi3$ with $y=2-1=1$: maximum $\left(\dfrac\pi3,1\right)$. The next minimum is half a period later, at $x=\dfrac\pi3+\pi=\dfrac{4\pi}3$ with $y=-2-1=-3$: $\left(\dfrac{4\pi}3,-3\right)$.

### Example 3 (the tangent, 5 marks)

For $y=\tan3x$, find the period and the equations of the asymptotes for $0<x<\pi$.

*Solution.* The period is $\dfrac\pi3$. The asymptotes occur where $3x=\dfrac\pi2+k\pi$, so $x=\dfrac\pi6+\dfrac{k\pi}3$. In $0<x<\pi$ these are $x=\dfrac\pi6,\ \dfrac\pi2,\ \dfrac{5\pi}6$.

Check with the period: consecutive asymptotes are $\dfrac\pi3$ apart ✓.

### Example 4 (equation from a graph, 7 marks)

A sinusoidal graph has a maximum value of $7$ at $x=1$ and its next minimum value of $-1$ at $x=4$. Find an equation of the form $y=a\cos\big(b(x-c)\big)+d$.

*Solution.* $d=\dfrac{7+(-1)}2=3$ and $a=\dfrac{7-(-1)}2=4$. The distance from a maximum to the next minimum is half a period: $4-1=3$, so the period is $6$ and $b=\dfrac{2\pi}6=\dfrac\pi3$. A maximum at $x=1$ gives $c=1$. So $y=4\cos\left(\dfrac\pi3(x-1)\right)+3$.

Check at $x=4$: $\cos\pi=-1$ gives $-4+3=-1$ ✓.

### Example 5 (a tide model, 8 marks)

The depth of water in a harbour is $d(t)=6+2\cos\left(\dfrac{\pi t}6\right)$ metres, where $t$ is the time in hours after high tide. Find the maximum and minimum depths, the period, and for how long in each cycle the depth is at least $7$ m.

*Solution.* The depth varies between $6+2=8$ m and $6-2=4$ m. The period is $\dfrac{2\pi}{\pi/6}=12$ hours. For $d\ge7$: $2\cos\dfrac{\pi t}6\ge1$, so $\cos\dfrac{\pi t}6\ge\dfrac12$. Over one cycle centred on $t=0$, this holds for $-\dfrac\pi3\le\dfrac{\pi t}6\le\dfrac\pi3$, so $-2\le t\le2$. The duration is $4$ hours in each cycle.

### Example 6 (a Ferris wheel, 8 marks)

A Ferris wheel has radius $15$ m and its centre is $17$ m above the ground. It completes one revolution in $4$ minutes, and a rider starts at the bottom. The height of the rider is $h(t)=17-15\cos\left(\dfrac{\pi t}2\right)$ metres at time $t$ minutes. Find the height at $t=1.5$ and the time in each revolution when the rider is above $25$ m.

*Solution.* At $t=1.5$: $h=17-15\cos\dfrac{3\pi}4=17+10.61=27.6$ m. For $h>25$: $17-15\cos\dfrac{\pi t}2>25$, so $\cos\dfrac{\pi t}2<-\dfrac8{15}$. The principal solution of $\cos u=-\dfrac8{15}$ is $u=2.133$ and the other in $[0,2\pi]$ is $u=2\pi-2.133=4.150$. So $2.133<\dfrac{\pi t}2<4.150$, giving $1.358<t<2.642$. The rider is above $25$ m for about $1.28$ minutes per revolution.

### Example 7 (daylight, 6 marks)

The number of hours of daylight in a northern town is $D(t)=12+4\sin\left(\dfrac{2\pi}{365}(t-80)\right)$, where $t$ is the day of the year. Find the longest and shortest days, and the number of days with more than $14$ hours of daylight.

*Solution.* Maximum $12+4=16$ hours; minimum $12-4=8$ hours. For $D>14$: $\sin\left(\dfrac{2\pi}{365}(t-80)\right)>\dfrac12$. Writing $u=\dfrac{2\pi}{365}(t-80)$, we need $\dfrac\pi6<u<\dfrac{5\pi}6$, an interval of length $\dfrac{2\pi}3$, which is $\dfrac13$ of a full cycle. So the number of days is $\dfrac{365}3\approx122$.

### Example 8 (a phase relation, 3 marks)

Write $y=\cos x$ as a sine function and $y=\sin x$ as a cosine function.

*Solution.* $\cos x=\sin\left(x+\dfrac\pi2\right)$ and $\sin x=\cos\left(x-\dfrac\pi2\right)$. Each is a horizontal translation of $\dfrac\pi2$ of the other.

### Example 9 (range, period and solutions, 6 marks)

For $f(x)=5-2\cos3x$, find the range and period, and solve $f(x)=6$ for $0\le x\le\pi$.

*Solution.* The range is $[5-2,5+2]=[3,7]$ and the period is $\dfrac{2\pi}3$. For $f(x)=6$: $-2\cos3x=1$, so $\cos3x=-\dfrac12$. For $0\le x\le\pi$, $0\le3x\le3\pi$. The solutions of $\cos u=-\dfrac12$ with $0\le u\le3\pi$ are $u=\dfrac{2\pi}3,\dfrac{4\pi}3,\dfrac{8\pi}3$. So $x=\dfrac{2\pi}9,\dfrac{4\pi}9,\dfrac{8\pi}9$.

### Example 10 (a reflected sine, 4 marks)

For $y=-2\sin\dfrac{\pi x}4$, state the amplitude, the period and the first maximum for $x>0$.

*Solution.* Amplitude $2$; period $\dfrac{2\pi}{\pi/4}=8$. The negative sign reflects the graph in the $x$-axis, so the curve decreases first. The first minimum is at $x=2$ and the first maximum at $x=6$, with value $2$: the point $(6,2)$.

### Example 11 (a translated tangent, 5 marks)

For $y=\tan\left(x-\dfrac\pi4\right)$, find the zeros, the asymptotes and the $y$-intercept.

*Solution.* The graph is the tangent graph translated $\dfrac\pi4$ to the right. Zeros at $x=\dfrac\pi4+k\pi$. Asymptotes at $x-\dfrac\pi4=\dfrac\pi2+k\pi$, so $x=\dfrac{3\pi}4+k\pi$. The $y$-intercept is $\tan\left(-\dfrac\pi4\right)=-1$.

### Example 12 (a temperature model, 5 marks)

The temperature in a greenhouse is $T(t)=15+8\sin\left(\dfrac\pi{12}(t-9)\right)$ degrees Celsius, where $t$ is the number of hours after midnight. Find the maximum temperature and when it occurs, and the temperature at 6 am.

*Solution.* The maximum is $15+8=23^{\circ}\text{C}$, when $\dfrac\pi{12}(t-9)=\dfrac\pi2$, so $t=15$, i.e. 3 pm. At $t=6$: $T=15+8\sin\left(-\dfrac\pi4\right)=15-5.66\approx9.34^{\circ}\text{C}$. The minimum is $7^{\circ}\text{C}$ at $t=3$ (3 am).

### Example 13 (describing transformations, 5 marks)

Describe the transformations that map $y=\sin x$ onto $y=2\sin(3x-\pi)+1$.

*Solution.* Factorise: $2\sin\big(3(x-\tfrac\pi3)\big)+1$. So: a horizontal stretch with scale factor $\dfrac13$, a translation of $\dfrac\pi3$ to the right, a vertical stretch with scale factor $2$, and a translation of $1$ up. The period is $\dfrac{2\pi}3$ and the amplitude is $2$.

## Using your GDC

Set the GDC to **radian mode** unless the question is in degrees. Graph the function with a window that shows at least two periods: for $y=a\sin(bx)+d$ use $x$ from $-\dfrac{2\pi}b$ to $\dfrac{4\pi}b$ and $y$ from $d-|a|-1$ to $d+|a|+1$. A convenient window setting is "ZTrig" or its equivalent, which sets the $x$-scale in multiples of $\dfrac\pi2$. Use the *maximum* and *minimum* tools to confirm the amplitude and midline, and the *zero* and *intersect* tools to solve model equations such as $d(t)=7$. For questions of the type "how long is the depth above $7$ m", find both intersection points of the curve with the line $y=7$, and subtract. A table of values at equal steps shows the pattern of rising and falling. If the graph looks like a straight line or a "mess", the window is wrong or the mode is degrees. To fit a sinusoid to data, use the *sinusoidal regression* function, which returns $a$, $b$, $c$, $d$ in the form $a\sin(bx+c)+d$. Menu names vary by model. Remember that $\tan$ graphs show spurious vertical lines at asymptotes in connected mode.

## Common mistakes

1. **Period error**: using $b$ or $\dfrac{\pi}{b}$ instead of $\dfrac{2\pi}b$ for sine and cosine (and $\dfrac\pi b$ for tangent).
2. **Phase shift sign and factorisation**: $\sin(2x-\pi)$ is shifted $\dfrac\pi2$ right, not $\pi$; $\cos(x+\dfrac\pi3)$ is shifted *left*.
3. **Amplitude negative**: the amplitude is $|a|$; the negative sign is a reflection.
4. **Degrees and radians**: a graph that "looks wrong" is typically in the wrong mode.
5. **Midline error**: computing $d$ as the maximum minus the minimum rather than their average.
6. **Missing the second solution** when solving $\cos u=k$ or $\sin u=k$ over several periods.
7. **Giving the time of the first maximum** when the question asks for all or for the next, or mixing up the value and the time.
8. **Treating $\tan$ as having period $2\pi$**, or forgetting the asymptotes.

## Exam technique and command terms

**Sketch** requires the shape, the key values (maximum, minimum, intercepts) and at least one full period, with the scale on the axes and any asymptotes drawn as dashed lines. **State the period** or **the amplitude** requires a direct answer from the equation. **Find the values of $a$, $b$, $c$ and $d$** needs the procedure above, with justification. **Interpret** in a model means a sentence in context, including units. **Hence** relates a transformation to a graph or an earlier result. When asked "for how long is the quantity above a level", state the two times and subtract, and say that this repeats each cycle if relevant. When given a graph, read coordinates carefully and use the maximum and minimum rather than a single intercept to find $a$ and $d$.

On Paper 2, model questions are usually solved by the GDC: set up the function, find intersections, and report values to $3$ significant figures. On Paper 1 (no calculator), the numbers are chosen so that exact values from the unit circle are enough. In both, check your equation against a data point from the question before moving on.

## Connections

SL 2.11 supplied the transformation rules that generate every sinusoid from $\sin x$ and $\cos x$: $a$ is a vertical stretch, $\dfrac1b$ is the horizontal stretch factor, $c$ and $d$ are translations. SL 3.5 gave the unit circle, which explains the shape of the graphs, their symmetry and the relation $\cos x=\sin\left(x+\dfrac\pi2\right)$, and SL 3.6 gives the identities that convert between forms, such as $\cos2x=1-2\sin^{2}x$ giving a sinusoid with period $\pi$. SL 3.8 solves trigonometric equations, which are the algebra behind model questions on times and levels. SL 2.4 and SL 2.10 give the graphical solving routines. In AHL 3.9 to 3.11, the reciprocal graphs of $\sec x$, $\csc x$ and $\cot x$ and the inverse functions $\arcsin$, $\arccos$ and $\arctan$ are obtained from these graphs by the ideas of SL 2.5 and AHL 2.15. AHL 3.10 shows that $a\sin x+b\cos x$ is a single sinusoid $R\sin(x+\alpha)$. In AHL 1.13, the complex exponential describes a rotating point whose projection is a sinusoid. In Unit 5, differentiation turns $\sin$ into $\cos$ (a quarter-period shift), integration of a sinusoid over a full period gives zero, and maximum-minimum problems for sinusoids use derivatives. Differential equations such as $\dfrac{d^{2}x}{dt^{2}}=-\omega^{2}x$ have sinusoidal solutions (simple harmonic motion). In Unit 4, seasonal time series are modelled with sinusoids.

## Check your understanding

1. For $y=4\cos3x-2$, state the amplitude, period, midline and range.
2. For $y=3\sin\left(x+\dfrac\pi4\right)$, state the phase shift and the first maximum for $x>0$.
3. For $y=\tan2x$, state the period and the equations of the asymptotes for $0<x<\pi$.
4. A sinusoid has a maximum of $10$ at $x=2$ and a minimum of $2$ at $x=8$. Find an equation of the form $y=a\cos\big(b(x-c)\big)+d$.
5. The depth in a harbour is $d(t)=8+3\cos\dfrac{\pi t}6$ metres, $t$ in hours after high tide. For how long in each cycle is the depth at least $10$ m?
6. A Ferris wheel of radius $20$ m has its centre $22$ m above the ground and a period of $5$ minutes. A rider starts at the bottom. Write the height $h(t)$ and find $h(1)$.
7. The temperature is $T(t)=12+6\sin\left(\dfrac\pi{12}(t-8)\right)$. Find the maximum and minimum temperatures and the temperature at $t=10$.
8. For $y=-3\sin\dfrac{\pi x}2$, state the amplitude, the period and the range.
9. For $y=2\tan\dfrac x2$, state the period and the asymptotes.
10. Describe the transformations that map $y=\sin x$ onto $y=2\sin(3x-\pi)+1$.

### Answers

1. Amplitude $4$; period $\dfrac{2\pi}3$; midline $y=-2$; range $[-6,2]$.
2. The phase shift is $\dfrac\pi4$ to the left. The first maximum is where $x+\dfrac\pi4=\dfrac\pi2$, so $x=\dfrac\pi4$, with $y=3$: the point $\left(\dfrac\pi4,3\right)$.
3. The period is $\dfrac\pi2$. The asymptotes satisfy $2x=\dfrac\pi2+k\pi$, so $x=\dfrac\pi4+\dfrac{k\pi}2$. In $(0,\pi)$: $x=\dfrac\pi4$ and $x=\dfrac{3\pi}4$.
4. $d=\dfrac{10+2}2=6$ and $a=4$. Half a period is $8-2=6$, so the period is $12$ and $b=\dfrac\pi6$. $y=4\cos\left(\dfrac\pi6(x-2)\right)+6$. Check at $x=8$: $4\cos\pi+6=2$ ✓.
5. $3\cos\dfrac{\pi t}6\ge2$, so $\cos\dfrac{\pi t}6\ge\dfrac23$. With $\cos^{-1}\dfrac23=0.8411$, $-0.8411\le\dfrac{\pi t}6\le0.8411$, so $|t|\le1.604$. The duration is $2(1.604)\approx3.21$ hours.
6. $h(t)=22-20\cos\dfrac{2\pi t}5$. $h(1)=22-20\cos72^{\circ}=22-6.18\approx15.8$ m.
7. Maximum $18^{\circ}\text{C}$ and minimum $6^{\circ}\text{C}$. $T(10)=12+6\sin\dfrac\pi6=15^{\circ}\text{C}$.
8. Amplitude $3$; period $\dfrac{2\pi}{\pi/2}=4$; range $[-3,3]$.
9. The period is $2\pi$. The asymptotes satisfy $\dfrac x2=\dfrac\pi2+k\pi$, so $x=\pi+2k\pi$.
10. Write $2\sin\left(3\left(x-\dfrac\pi3\right)\right)+1$. Horizontal stretch with scale factor $\dfrac13$; translation $\dfrac\pi3$ to the right; vertical stretch with scale factor $2$; translation $1$ up.

## Summary

- $\sin x$, $\cos x$: period $2\pi$, range $[-1,1]$; $\tan x$: period $\pi$, asymptotes at $x=\frac\pi2+k\pi$. $\cos x=\sin\left(x+\frac\pi2\right)$.
- $y=a\sin\big(b(x-c)\big)+d$: amplitude $|a|$, period $\frac{2\pi}b$, midline $y=d$, phase shift $c$, range $[d-|a|,d+|a|]$.
- Factorise the argument to read the phase shift: $\sin(2x-\pi)$ shifts $\frac\pi2$.
- From a graph: $d=\frac{\max+\min}2$, $|a|=\frac{\max-\min}2$, $b=\frac{2\pi}{T}$, with $c$ at a maximum for a cosine form.
- In models, interpret $d$, $a$, the period and the shift; times above a level come from two solutions in a cycle.
- Use radian mode, choose a window showing two periods, and check the equation against a data point.
