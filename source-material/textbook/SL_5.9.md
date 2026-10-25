# Kinematics

> **SL 5.9 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- describe the motion of a particle along a line with its displacement $s(t)$, velocity $v(t)$ and acceleration $a(t)$, and state the units of each;
- move between the three functions by differentiating ($s\to v\to a$) and integrating ($a\to v\to s$), using initial conditions to find the constants;
- distinguish displacement from distance travelled, and velocity from speed;
- find when a particle is at rest, changes direction, or has the greatest velocity;
- decide whether the speed is increasing or decreasing from the signs of $v$ and $a$;
- calculate the total distance travelled using $\int|v|\,dt$ by splitting the interval at the times when $v=0$;
- solve problems involving two particles, vertical motion and non-polynomial models.

## Why this topic matters

Kinematics is the study of motion described without asking what causes it. It is the first place where calculus is used the way physics uses it: the rate of change of position is velocity, and the rate of change of velocity is acceleration. This is one of the most direct applications of everything you have learnt in this unit. Differentiation takes you from position to velocity to acceleration, and integration reverses each step, with the constant of integration fixed by information about the starting situation.

The topic also forces careful reading. A particle that goes forward $4$ metres and then back $4$ metres has travelled $8$ metres but has zero displacement. A car braking has negative acceleration but is not necessarily slowing down if it is reversing. A velocity of $-5$ metres per second means a speed of $5$ metres per second in the negative direction. Kinematics questions in the examination reward precise vocabulary and a clear sign convention as much as technique, and they appear in both the calculator and non-calculator papers, often as a long question that links differentiation, integration and a graph.

## Core ideas

### Displacement, velocity and acceleration

A particle moves along a straight line. Its **displacement** $s(t)$ is its signed position relative to a fixed origin at time $t$. Its **velocity** is the rate of change of displacement and its **acceleration** is the rate of change of velocity:

$$v=\frac{ds}{dt},\qquad a=\frac{dv}{dt}=\frac{d^{2}s}{dt^{2}}.$$

If $s$ is in metres and $t$ in seconds, $v$ is in m s$^{-1}$ and $a$ is in m s$^{-2}$. The sign of $v$ gives the direction of motion: positive means moving in the positive direction. The sign of $a$ tells whether the velocity is increasing or decreasing, not directly whether the particle is speeding up.

### Integrating back

Going the other way,

$$v=\int a\,dt,\qquad s=\int v\,dt.$$

Each integration introduces a constant, and each constant requires a condition. If you know $v(0)=3$ and $s(0)=2$, for instance, you can find both constants. Always find the velocity constant before integrating a second time. Without conditions, the answer would be a family of functions, but with them it is unique.

### Speed and distance

**Speed** is the magnitude of the velocity, $|v|$, and is never negative. The **displacement** over the interval $t_1\le t\le t_2$ is the change in position:

$$s(t_2)-s(t_1)=\int_{t_1}^{t_2}v\,dt.$$

This is a signed quantity: movement in the negative direction counts as negative. The **distance travelled** is always non-negative and adds up all the movement regardless of direction:

$$\text{distance}=\int_{t_1}^{t_2}|v|\,dt.$$

To evaluate the distance by hand, find the times in the interval at which $v=0$ (the particle is at rest and may change direction), split the interval there, and add the magnitudes of the displacements in each part. On a calculator you can integrate $|v|$ directly. The total distance is at least as large as the magnitude of the displacement, with equality only if the particle never reverses.

### At rest and changing direction

The particle is **at rest** when $v=0$. It **changes direction** only if the velocity changes sign there, which for a polynomial $v$ means a simple root, not a repeated root. For example, if $v=(t-2)^{2}$, the particle is momentarily at rest at $t=2$ but continues moving in the same direction.

### Speeding up and slowing down

The speed is increasing when $v$ and $a$ have the same sign, because the velocity is becoming larger in its own direction. The speed is decreasing when $v$ and $a$ have opposite signs. If $a=0$ the speed is momentarily constant. So a particle with $v=-3$ and $a=-2$ is speeding up (moving backwards ever faster), while a particle with $v=3$ and $a=-9$ is slowing down.

### Greatest and least velocity

Velocity is itself a function of time, so its extreme values come from $a=\dfrac{dv}{dt}=0$, with a check using $\dfrac{da}{dt}$ or a sign change of $a$, and with end points when the time interval is bounded. The *greatest speed* may occur at a maximum or minimum of $v$, so compare $|v|$ at each candidate.

### Reading graphs

On a velocity-time graph, the gradient is the acceleration and the signed area between the graph and the axis is the displacement. On a displacement-time graph, the gradient is the velocity, and the turning points are the times at which the particle is at rest. Be ready to move between these graphs, and between a graph and a formula.

### Constant acceleration and vertical motion

If the acceleration is a constant $g$ (as for a falling object near the Earth's surface, about $10$ m s$^{-2}$ downward in exam problems unless told otherwise), integrating gives $v=u+gt$ and $s=ut+\tfrac12gt^{2}$ with initial velocity $u$. The same calculus applies to a projectile moving vertically: take upward as positive, so the acceleration is $-10$, and the particle is at its highest point when $v=0$.

## Worked examples

### Example 1 (from displacement, 8 marks)

A particle moves along a line with displacement $s=t^{3}-6t^{2}+9t$ metres at time $t\ge0$ seconds. Find the velocity and acceleration, the times when the particle is at rest, and the positions at these times.

Differentiating, $v=\dfrac{ds}{dt}=3t^{2}-12t+9=3(t-1)(t-3)$ and $a=\dfrac{dv}{dt}=6t-12$. The particle is at rest when $v=0$, that is $t=1$ and $t=3$. The positions are $s(1)=1-6+9=4$ and $s(3)=27-54+27=0$. The particle is at rest after $1$ s at $4$ m from the origin, and again after $3$ s at the origin. The velocity changes sign at both times (positive before $1$, negative between $1$ and $3$, positive after $3$), so the particle changes direction at both.

### Example 2 (distance and displacement, 7 marks)

For the particle of Example 1, find the displacement and the total distance travelled in the first $4$ seconds.

The positions at the key times are $s(0)=0$, $s(1)=4$, $s(3)=0$ and $s(4)=64-96+36=4$. The displacement over the interval is $s(4)-s(0)=4$ m. Because the particle changes direction at $t=1$ and $t=3$, the distance is found in parts: from $t=0$ to $1$ it moves $4$ m, from $1$ to $3$ it moves $4$ m back, and from $3$ to $4$ it moves $4$ m forward. The total distance is $4+4+4=12$ m. The displacement ($4$ m) and the distance ($12$ m) are different, and the distance must not be found by evaluating $s(4)-s(0)$.

### Example 3 (from acceleration, 7 marks)

A particle has acceleration $a=6t-4$ m s$^{-2}$. When $t=0$ its velocity is $3$ m s$^{-1}$ and its displacement is $2$ m. Find the displacement when $t=2$.

Integrating the acceleration, $v=\int(6t-4)\,dt=3t^{2}-4t+C$, and the condition $v(0)=3$ gives $C=3$, so $v=3t^{2}-4t+3$. Integrating again, $s=\int v\,dt=t^{3}-2t^{2}+3t+D$, and $s(0)=2$ gives $D=2$, so $s=t^{3}-2t^{2}+3t+2$. Then $s(2)=8-8+6+2=8$ m. The discriminant of the velocity is $16-36<0$, so $v>0$ for all $t$, and the particle never changes direction: the distance travelled equals the displacement.

### Example 4 (from a velocity function, 8 marks)

A particle has velocity $v(t)=t^{2}-4t+3$ m s$^{-1}$ for $0\le t\le4$. Find the displacement and the total distance travelled.

Since $v=(t-1)(t-3)$, the velocity is positive for $0\le t<1$, negative for $1<t<3$ and positive for $3<t\le4$. The displacement is $\displaystyle\int_{0}^{4}(t^{2}-4t+3)\,dt=\left[\tfrac{t^{3}}{3}-2t^{2}+3t\right]_{0}^{4}=\tfrac{64}{3}-32+12=\tfrac43$ m. For the distance, evaluate each part: $\displaystyle\int_{0}^{1}v\,dt=\tfrac43$, $\displaystyle\int_{1}^{3}v\,dt=-\tfrac43$ and $\displaystyle\int_{3}^{4}v\,dt=\tfrac43$. Taking magnitudes, the distance is $\tfrac43+\tfrac43+\tfrac43=4$ m. On a calculator, $\int_{0}^{4}|t^{2}-4t+3|\,dt=4$ confirms this.

### Example 5 (speeding up or slowing down, 5 marks)

For $s=t^{3}-6t^{2}+9t$ (Example 1), state whether the speed is increasing or decreasing at $t=0.5$ and at $t=2$.

At $t=0.5$, $v=3(0.25)-12(0.5)+9=3.75>0$ and $a=6(0.5)-12=-9<0$. They have opposite signs, so the speed is decreasing. At $t=2$, $v=12-24+9=-3<0$ and $a=12-12=0$, so the acceleration is zero and the speed is instantaneously neither increasing nor decreasing. Just after $t=2$, $a>0$ while $v<0$, so the speed then decreases, and just before it, $a<0$ and $v<0$ so the speed increases: the speed has a maximum of $3$ m s$^{-1}$ at $t=2$.

### Example 6 (greatest velocity, 6 marks)

The velocity of a particle is $v=12t-3t^{2}$ m s$^{-1}$ for $0\le t\le4$. Find the maximum velocity and the distance travelled.

The acceleration is $a=12-6t=0$ at $t=2$. Since $\dfrac{da}{dt}=-6<0$, this is a maximum, with $v(2)=24-12=12$ m s$^{-1}$. The end points give $v(0)=0$ and $v(4)=0$, so the maximum is $12$. The velocity is non-negative on the interval because $v=3t(4-t)\ge0$, so the particle never reverses and the distance equals the displacement: $\displaystyle\int_{0}^{4}(12t-3t^{2})\,dt=\left[6t^{2}-t^{3}\right]_{0}^{4}=96-64=32$ m.

### Example 7 (trigonometric motion, 6 marks)

A particle moves with $s=5\sin(2t)$ cm. Find the velocity and acceleration and the first time the particle is at rest for $t>0$.

Using the chain rule, $v=10\cos(2t)$ and $a=-20\sin(2t)$. The particle is at rest when $\cos(2t)=0$, so the first positive solution has $2t=\tfrac\pi2$ and $t=\tfrac\pi4$ seconds. At that time $s=5\sin\tfrac\pi2=5$ cm, the greatest displacement, and $a=-20$ cm s$^{-2}$, which confirms a maximum of displacement. The motion oscillates between $-5$ and $5$ cm, with a period of $\pi$ seconds.

### Example 8 (meeting of two particles, 6 marks)

Two particles $A$ and $B$ start from the same point and move on a line, with displacements $s_{A}=2t^{2}$ and $s_{B}=10t-t^{2}$ metres. Find when they meet again, and where.

They meet when $s_{A}=s_{B}$, so $2t^{2}=10t-t^{2}$, which gives $3t^{2}-10t=0$ and $t(3t-10)=0$. Thus $t=0$ (the start) or $t=\tfrac{10}{3}$ s. At $t=\tfrac{10}{3}$, the common displacement is $2\left(\tfrac{10}{3}\right)^{2}=\tfrac{200}{9}\approx22.2$ m. Their velocities there are $v_{A}=4t=\tfrac{40}{3}$ and $v_{B}=10-2t=\tfrac{10}{3}$, so $A$ is passing $B$.

### Example 9 (vertical motion, 7 marks)

A ball is thrown upward from the ground, and its height is $h=20t-5t^{2}$ metres after $t$ seconds. Find the greatest height, the time of flight and the speed at which it hits the ground.

The velocity is $v=\dfrac{dh}{dt}=20-10t$, which is zero at $t=2$. Then $h(2)=40-20=20$ m is the greatest height, and $\dfrac{dv}{dt}=-10<0$ confirms a maximum. The ball is on the ground when $h=0$, so $5t(4-t)=0$ and $t=4$ s (the other root is the launch time). At $t=4$, $v=20-40=-20$, so the speed on impact is $20$ m s$^{-1}$, the same as the launch speed. The negative sign means downward.

### Example 10 (exponential decay of velocity, 6 marks)

A particle starts at the origin with velocity $v=6e^{-t/2}$ m s$^{-1}$. Find the displacement after $2$ seconds and the limit of the displacement as $t\to\infty$.

The displacement is $\displaystyle s=\int_{0}^{t}6e^{-u/2}\,du=\left[-12e^{-u/2}\right]_{0}^{t}=12\left(1-e^{-t/2}\right)$. At $t=2$, $s=12(1-e^{-1})=7.59$ m. As $t\to\infty$, $e^{-t/2}\to0$ so $s\to12$ m. The particle moves forward forever, slowing down, and approaches a position $12$ m from the origin without reaching it.

## Using your GDC

A calculator can evaluate definite integrals such as $\int|v|\,dt$ directly, which gives the total distance without splitting. Enter the absolute value function and the limits. For a velocity or displacement function, use the graph to find when $v=0$ (a zero), the maximum velocity (a turning point of $v$), and when two displacements are equal (an intersection). A table of values shows quickly whether the speed is increasing. When using the numerical derivative at a point to check $v$ or $a$, remember that it is only a check, and that the working must show the algebraic differentiation. If the calculator is in degree mode, change it to radians before working with trigonometric motion, since calculus formulas assume radians.

## Common mistakes

- Confusing displacement and distance: using $s(t_2)-s(t_1)$ when the particle changes direction and the question asks for the distance.
- Saying that the particle is moving "backwards" because $a<0$, when it is the sign of $v$ that gives the direction.
- Saying that the particle changes direction whenever $v=0$, forgetting that the sign of $v$ must change.
- Forgetting to include the constant of integration, or finding it with the wrong condition, such as using the initial displacement for the velocity constant.
- Concluding that the speed is increasing from $a>0$ alone.
- Giving a speed as a negative number, or forgetting that speed is $|v|$.
- Omitting units, or using degrees for trigonometric models.
- Differentiating where the question requires integrating, for example finding the acceleration from the velocity when asked for the displacement.

## Exam technique and command terms

**Find the displacement** needs a signed answer; **find the distance travelled** needs a split at the times when $v=0$ or the absolute value in a calculator integral. **Find when the particle is at rest** means solving $v=0$. **Find the initial velocity** means evaluating $v(0)$, and **find the maximum velocity** means solving $a=0$. **Determine whether the speed is increasing** requires the signs of both $v$ and $a$ at the stated time, with a sentence in conclusion. In a "show that" part, show how the constant is found. State your sign convention at the start of any vertical motion problem. In long questions, the later parts normally reuse the earlier results, so check that the displacement, velocity and acceleration functions you derive are consistent: differentiating your $s$ must give your $v$.

## Connections

Kinematics applies differentiation from SL 5.3 and 5.6 and the integration of SL 5.5 and 5.10, and uses the definite integral of SL 5.11, where signed area becomes displacement and unsigned area becomes distance. The greatest velocity is an optimisation problem as in SL 5.8. In AHL 5.14, related rates extend the idea of rates of change to several linked quantities, and AHL 5.18 introduces differential equations such as $\dfrac{dv}{dt}=-kv$, whose solutions are the exponential decay of Example 10. In physics the same equations describe projectile motion, and in Unit 3 trigonometric motion models oscillations.

## Check your understanding

1. A particle has displacement $s=t^{2}-6t+5$ metres. Find the velocity when $t=1$ and the time at which the particle is at rest.
2. The velocity of a particle is $v=3t^{2}-12t$. Find the acceleration at $t=3$ and the times at which the particle is at rest for $t\ge0$.
3. A particle has acceleration $a=6t-4$, with $v(0)=3$ and $s(0)=2$. Find $s(1)$.
4. A particle has velocity $v=t^{2}-4t+3$ for $0\le t\le4$. Find the total distance travelled.
5. State whether the speed is increasing or decreasing if $v=-4$ and $a=3$.
6. The velocity is $v=12t-3t^{2}$ for $0\le t\le4$. Find the greatest velocity.
7. A ball has height $h=20t-5t^{2}$. Find the greatest height and the time at which it returns to the ground.
8. A particle has $s=5\sin2t$. Find the acceleration at $t=\tfrac\pi4$.
9. Particles $A$ and $B$ have $s_{A}=2t^{2}$ and $s_{B}=10t-t^{2}$. Find the non-zero time at which they meet.
10. Explain why a particle with $v=(t-2)^{2}$ does not change direction at $t=2$.

### Answers

1. $v=2t-6$, so $v(1)=-4$ m s$^{-1}$. At rest when $2t-6=0$, so $t=3$ s.
2. $a=6t-12$, so $a(3)=6$ m s$^{-2}$. At rest when $3t(t-4)=0$, so $t=0$ and $t=4$ s.
3. $v=3t^{2}-4t+3$ and $s=t^{3}-2t^{2}+3t+2$, so $s(1)=1-2+3+2=4$ m.
4. The signed areas are $\tfrac43$, $-\tfrac43$ and $\tfrac43$ on $[0,1]$, $[1,3]$ and $[3,4]$, so the distance is $4$ m.
5. $v$ and $a$ have opposite signs, so the speed is decreasing (the particle moves in the negative direction but is slowing down).
6. $a=12-6t=0$ at $t=2$, giving $v=12$. The end points give $0$. The greatest velocity is $12$ m s$^{-1}$.
7. The greatest height is $20$ m at $t=2$. It returns to the ground at $t=4$ s.
8. $a=-20\sin2t$, so at $t=\tfrac\pi4$, $a=-20$ cm s$^{-2}$.
9. $3t^{2}-10t=0$ gives $t=\tfrac{10}{3}$ s.
10. The velocity is zero at $t=2$ but $(t-2)^{2}\ge0$ on both sides, so it does not change sign: the particle stops momentarily and then continues in the same direction.

## Summary

- $v=\dfrac{ds}{dt}$ and $a=\dfrac{dv}{dt}$; going back, integrate and use the initial conditions to find each constant.
- Displacement is $\int v\,dt$ and is signed. Distance travelled is $\int|v|\,dt$, found by splitting at the times when $v=0$.
- The particle is at rest when $v=0$ and changes direction only if $v$ changes sign.
- The speed increases when $v$ and $a$ have the same sign, and decreases when they have opposite signs.
- The greatest velocity occurs where $a=0$, so check the end points of the interval too.
- In vertical motion take upward as positive, so $a=-10$, and the top of the path is at $v=0$.
