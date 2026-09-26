# Kinematics with calculus

> **SL 5.9 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Position, velocity and acceleration are connected by differentiation. Displacement includes direction; distance traveled adds the lengths of individual journeys and may require splitting at times when velocity changes sign. Specify initial conditions when integrating back to position.

## Formula, meaning and conditions

$v(t)=s'(t)$ and $a(t)=v'(t)=s''(t)$. Displacement on $[a,b]$ is $s(b)-s(a)=\int_a^b v(t)\,dt$; total distance is $\int_a^b|v(t)|\,dt$. Time is generally restricted to a meaningful interval.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 10 (PDF p. 12), lists acceleration, distance and displacement integrals under SL 5.9. Derive and justify all other steps and conditions.

## Worked example

Let $s(t)=t^3-6t^2+9t$ metres for $t\geq0$. Then $v(t)=3t^2-12t+9=3(t-1)(t-3)$ m/s and $a(t)=6t-12$ m/s$^2$. At $t=1$, the particle is instantaneously at rest with acceleration $-6$ m/s$^2$. The velocity changes sign around $t=1$, so later distance cannot be found solely from final minus initial position.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Differentiate position to velocity and velocity to acceleration.
2. Integrate velocity for displacement with correct bounds.
3. Find total distance by splitting at velocity sign changes.

## Why the method works

Displacement can be negative because it records final position minus initial position; distance traveled sums all movement irrespective of direction. The supplied 2023 booklet explicitly writes distance as the integral of $|v(t)|$, not of $v(t)$. PDF text extraction can drop the absolute-value bars, so check the visually printed formula when quoting it.

## A contrasting worked route

If $v(t)=t-1$ for $0\leq t\leq2$, displacement is $\int_0^2(t-1)\,dt=0$. The particle moves one-half unit backward from $0$ to $1$ and one-half forward from $1$ to $2$, so total distance is $\int_0^2|t-1|\,dt=1$. Acceleration is the constant $1$.

## Transfer and validation

Draw a velocity sign chart before integrating for distance. A turning point in motion occurs when velocity changes sign, not merely when acceleration vanishes. Keep time units and position units distinct and report whether you computed a signed displacement, absolute distance, velocity or acceleration.

## Exam lens

Paper 2 style: label units, locate turning times by solving $v=0$, and distinguish displacement from total distance. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Negative velocity means movement in the negative direction, not a negative physical distance.

## Try it yourself

For $s(t)=2t^2+1$, find $v(3)$ and $a(3)$.

## Checked answer

$v(t)=4t$, so $v(3)=12$; $a(t)=4$, so $a(3)=4$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
