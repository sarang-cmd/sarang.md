# Implicit differentiation, related rates and optimization

> **AHL 5.14 · AA HL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- differentiate an equation that defines $y$ implicitly as a function of $x$, using the chain rule, and solve for $\dfrac{dy}{dx}$;
- find the gradient, tangent and normal to an implicit curve at a given point, and find points where the tangent is horizontal or vertical;
- find a second derivative $\dfrac{d^{2}y}{dx^{2}}$ of an implicit function;
- use the inverse relation $\dfrac{dy}{dx}=\dfrac{1}{dx/dy}$;
- set up and solve related rates problems, linking rates of change with the chain rule $\dfrac{dA}{dt}=\dfrac{dA}{dr}\cdot\dfrac{dr}{dt}$;
- solve optimisation problems with trigonometric, exponential and geometric models that need the AHL differentiation toolkit.

## Why this topic matters

So far, almost every curve you have differentiated has been written as $y=f(x)$. Many curves of interest cannot be written that way, or not conveniently: a circle $x^{2}+y^{2}=25$ would need two functions, and the curve $x^{3}+y^{3}=9xy$ cannot be solved neatly for $y$ at all. Implicit differentiation lets you find gradients on such curves without solving for $y$. The idea is only the chain rule used with care: when $y$ depends on $x$, the derivative of $y^{2}$ is $2y\dfrac{dy}{dx}$.

The same chain rule drives **related rates**, where several quantities change with time and are connected by an equation. A balloon being inflated has a radius, surface area and volume all changing at once, and knowing how fast the volume grows tells you how fast the radius grows. A ladder sliding down a wall, water filling a cone, and two ships moving apart are classic examples, but the same technique is used in physics, in economics (marginal analysis) and in engineering control. Examinations at higher level typically give a long question that begins with a diagram or a model, and rewards the ability to write the relationship between variables, differentiate with respect to time, and substitute the instant values at the end. Optimisation, finally, brings together everything in this unit: model, differentiate, solve, justify.

## Core ideas

### Implicit differentiation

Suppose an equation relates $x$ and $y$ and $y$ is a differentiable function of $x$ near the point of interest. To find $\dfrac{dy}{dx}$:

1. differentiate every term with respect to $x$;
2. whenever you differentiate a term involving $y$, apply the chain rule and write a factor $\dfrac{dy}{dx}$: for example $\dfrac{d}{dx}(y^{2})=2y\dfrac{dy}{dx}$ and $\dfrac{d}{dx}(\sin y)=\cos y\,\dfrac{dy}{dx}$;
3. use the product rule for terms such as $xy$: $\dfrac{d}{dx}(xy)=y+x\dfrac{dy}{dx}$;
4. collect the terms containing $\dfrac{dy}{dx}$ on one side, factorise and solve.

The answer is usually in terms of both $x$ and $y$. To find the gradient at a point, substitute both coordinates, and check that the point does lie on the curve before you start.

For the circle $x^{2}+y^{2}=25$: $2x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac xy$. At $(3,4)$ the gradient is $-\dfrac34$, and at $(3,-4)$ it is $+\dfrac34$. This matches the geometric fact that the tangent to a circle is perpendicular to the radius, whose gradient is $\dfrac yx$.

### Tangents, normals and special points

The tangent at $(x_{0},y_{0})$ is $y-y_{0}=m(x-x_{0})$ with $m=\dfrac{dy}{dx}$ at that point, and the normal has gradient $-\dfrac1m$ (if $m\neq0$). The tangent is **horizontal** where $\dfrac{dy}{dx}=0$, which means the numerator of the expression is zero (and the denominator is not). The tangent is **vertical** where the denominator is zero and the numerator is not. Combine this condition with the original equation to find the coordinates.

### Second derivatives

To find $\dfrac{d^{2}y}{dx^{2}}$, differentiate $\dfrac{dy}{dx}$ implicitly again, then replace $\dfrac{dy}{dx}$ by its expression. For the circle, $\dfrac{dy}{dx}=-\dfrac xy$, and the quotient rule gives
$$\frac{d^{2}y}{dx^{2}}=-\frac{y-x\frac{dy}{dx}}{y^{2}}=-\frac{y+\frac{x^{2}}{y}}{y^{2}}=-\frac{y^{2}+x^{2}}{y^{3}}=-\frac{25}{y^{3}}.$$
At $(3,4)$ it is $-\dfrac{25}{64}<0$, so the upper semicircle is concave down there.

### Inverse relation

If $x$ is a function of $y$, then $\dfrac{dy}{dx}=\dfrac{1}{\;dx/dy\;}$ when $\dfrac{dx}{dy}\neq0$. This is useful when it is easier to differentiate $x$ with respect to $y$, and it is the basis of the derivatives of inverse functions in AHL 5.15.

### Related rates

In a related rates problem several quantities depend on time $t$, and the problem gives a rate for one and asks for a rate for another. The method:

1. draw a diagram and define the variables as functions of time;
2. write an equation relating the variables that is true at *all* times (not just the moment in question);
3. differentiate with respect to $t$ using the chain rule;
4. only now substitute the values at the instant of interest, and solve for the unknown rate;
5. state the answer with units and the sign: a negative rate means a decreasing quantity.

The most common error is substituting the instant values (such as $r=5$) before differentiating, which turns a variable into a constant and loses its rate. For a circle expanding, $A=\pi r^{2}$ gives $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$.

### Eliminating a variable

If the relation involves more variables than you can handle, eliminate one using similar triangles or a given ratio before differentiating. For a cone filling with water whose radius is half the depth, $r=\dfrac h2$, so $V=\dfrac13\pi r^{2}h=\dfrac{\pi h^{3}}{12}$, a function of $h$ alone, and $\dfrac{dV}{dt}=\dfrac{\pi h^{2}}{4}\dfrac{dh}{dt}$.

### Optimisation at higher level

Optimisation problems in the AHL course use the same steps as SL 5.8, but the models may involve trigonometric functions (angles), exponentials (growth and decay) and implicit relations. When the quantity depends on an angle $\theta$, state its domain, for example $0<\theta<\frac\pi2$, and justify the nature of the stationary point with the second derivative or a sign diagram. Sometimes the optimum is found by implicit differentiation: the highest point of a curve occurs where $\dfrac{dy}{dx}=0$.

## Worked examples

### Example 1 (gradient of a circle, 4 marks)

Find $\dfrac{dy}{dx}$ for $x^{2}+y^{2}=25$, and the equation of the tangent at $(3,4)$.

Differentiating, $2x+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}=-\dfrac xy$. At $(3,4)$ the gradient is $-\dfrac34$. The tangent is $y-4=-\dfrac34(x-3)$, which simplifies to $3x+4y=25$. This is the tangent to the circle, perpendicular to the radius.

### Example 2 (a product term, 6 marks)

The curve $x^{2}+xy+y^{2}=7$ passes through $(1,2)$. Find the gradient there and the equation of the normal.

Check the point: $1+2+4=7$. Differentiating, $2x+\left(y+x\dfrac{dy}{dx}\right)+2y\dfrac{dy}{dx}=0$, so $\dfrac{dy}{dx}(x+2y)=-(2x+y)$ and $\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}$. At $(1,2)$, $\dfrac{dy}{dx}=-\dfrac{4}{5}$. The normal has gradient $\dfrac54$, so it is $y-2=\dfrac54(x-1)$, which is $5x-4y+3=0$.

### Example 3 (the folium, 6 marks)

Show that $(2,4)$ lies on the curve $x^{3}+y^{3}=9xy$ and find the gradient there.

Substituting, $8+64=72$ and $9\cdot2\cdot4=72$, so the point is on the curve. Differentiating, $3x^{2}+3y^{2}\dfrac{dy}{dx}=9y+9x\dfrac{dy}{dx}$. Collecting, $\dfrac{dy}{dx}\left(3y^{2}-9x\right)=9y-3x^{2}$, so $\dfrac{dy}{dx}=\dfrac{3y-x^{2}}{y^{2}-3x}$. At $(2,4)$ this is $\dfrac{12-4}{16-6}=\dfrac{8}{10}=\dfrac45$.

### Example 4 (an exponential, 5 marks)

Find $\dfrac{dy}{dx}$ at $(0,1)$ on the curve $e^{xy}=x+y$.

At $(0,1)$ both sides equal $1$. Differentiating, $e^{xy}\left(y+x\dfrac{dy}{dx}\right)=1+\dfrac{dy}{dx}$. Substituting $x=0$, $y=1$: $1\cdot(1+0)=1+\dfrac{dy}{dx}$, so $\dfrac{dy}{dx}=0$. The tangent at $(0,1)$ is horizontal, with equation $y=1$.

### Example 5 (a second derivative, 6 marks)

For the circle $x^{2}+y^{2}=25$, find $\dfrac{d^{2}y}{dx^{2}}$ at $(3,4)$.

From $\dfrac{dy}{dx}=-\dfrac xy$, the quotient rule gives $\dfrac{d^{2}y}{dx^{2}}=-\dfrac{y\cdot1-x\dfrac{dy}{dx}}{y^{2}}$. Substituting $\dfrac{dy}{dx}=-\dfrac xy$: $-\dfrac{y+\frac{x^{2}}{y}}{y^{2}}=-\dfrac{y^{2}+x^{2}}{y^{3}}=-\dfrac{25}{y^{3}}$. At $(3,4)$ this is $-\dfrac{25}{64}$. The negative sign confirms that the curve is concave down at the top of the circle.

### Example 6 (horizontal tangents, 7 marks)

Find the highest point on the curve $x^{2}+xy+y^{2}=7$.

From Example 2, $\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}$, which is zero when $y=-2x$. Substituting in the equation: $x^{2}-2x^{2}+4x^{2}=3x^{2}=7$, so $x=\pm\sqrt{\dfrac73}$. For the highest point we need $y>0$, which means $x<0$: $x=-\sqrt{\dfrac73}=-1.53$ and $y=2\sqrt{\dfrac73}=\dfrac{2\sqrt{21}}{3}=3.06$. The denominator $x+2y=3\sqrt{\dfrac73}\neq0$, so the tangent is indeed horizontal.

### Example 7 (a growing circle, 4 marks)

The radius of a circular ripple increases at $2$ m s$^{-1}$. How fast is the area increasing when the radius is $5$ m?

$A=\pi r^{2}$, so $\dfrac{dA}{dt}=2\pi r\dfrac{dr}{dt}$. With $r=5$ and $\dfrac{dr}{dt}=2$, $\dfrac{dA}{dt}=2\pi\cdot5\cdot2=20\pi=62.8$ m$^{2}$ s$^{-1}$.

### Example 8 (a sliding ladder, 7 marks)

A ladder $10$ m long leans against a vertical wall. Its foot slides away from the wall at $0.5$ m s$^{-1}$. How fast is the top sliding down when the foot is $6$ m from the wall?

Let the foot be $x$ m from the wall and the top be $y$ m up the wall. Then $x^{2}+y^{2}=100$ at all times. Differentiating with respect to $t$, $2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=-\dfrac xy\dfrac{dx}{dt}$. When $x=6$, $y=\sqrt{100-36}=8$, so $\dfrac{dy}{dt}=-\dfrac68\cdot0.5=-0.375$ m s$^{-1}$. The top is sliding down at $0.375$ m s$^{-1}$, and the negative sign indicates a decreasing height.

### Example 9 (a conical tank, 7 marks)

Water flows into a conical tank, vertex down, at $0.5$ m$^{3}$ min$^{-1}$. The tank has radius $3$ m and height $6$ m. How fast is the depth increasing when the depth is $2$ m?

By similar triangles, the water surface radius is $r=\dfrac h2$, so the volume is $V=\dfrac13\pi r^{2}h=\dfrac{\pi h^{3}}{12}$. Differentiating, $\dfrac{dV}{dt}=\dfrac{\pi h^{2}}{4}\dfrac{dh}{dt}$. At $h=2$ this is $\pi\dfrac{dh}{dt}$, so $\dfrac{dh}{dt}=\dfrac{0.5}{\pi}=0.159$ m min$^{-1}$. The depth rises more slowly as the tank fills, because the surface gets wider.

### Example 10 (two moving ships, 7 marks)

Ship $A$ sails east at $12$ km h$^{-1}$ and ship $B$ sails north at $5$ km h$^{-1}$ from the same port. How fast is the distance between them increasing after $1$ hour?

After $t$ hours, $x=12t$, $y=5t$ and $D^{2}=x^{2}+y^{2}$. Differentiating, $2D\dfrac{dD}{dt}=2x\dfrac{dx}{dt}+2y\dfrac{dy}{dt}$. At $t=1$, $x=12$, $y=5$ and $D=13$, so $\dfrac{dD}{dt}=\dfrac{12\cdot12+5\cdot5}{13}=\dfrac{169}{13}=13$ km h$^{-1}$. Since $D=13t$ at all times, the rate is constant, which agrees.

### Example 11 (the ladder around a corner, 9 marks)

A corridor of width $2$ m opens at right angles into a corridor of width $3$ m. A rod is carried horizontally around the corner, touching the inner corner and the two outer walls, making an angle $\theta$ with the wider wall. Find the length of the longest rod that can go around the corner.

The rod has a segment in each corridor, of length $\dfrac{2}{\sin\theta}$ and $\dfrac{3}{\cos\theta}$, so the length touching the inner corner is $L(\theta)=\dfrac{2}{\sin\theta}+\dfrac{3}{\cos\theta}$ for $0<\theta<\dfrac\pi2$. The longest rod that can pass has the length of the *shortest* such $L$. Differentiating, $L'(\theta)=-\dfrac{2\cos\theta}{\sin^{2}\theta}+\dfrac{3\sin\theta}{\cos^{2}\theta}=0$, which gives $3\sin^{3}\theta=2\cos^{3}\theta$, so $\tan^{3}\theta=\dfrac23$ and $\tan\theta=\left(\dfrac23\right)^{1/3}=0.874$, so $\theta=0.718$ radians. Since $L\to\infty$ at both ends of the domain, this is the minimum. Then $L=\dfrac{2}{\sin0.718}+\dfrac{3}{\cos0.718}=7.02$ m. The longest rod that can be carried around the corner is $7.02$ m.

### Example 12 (an exponential model, 5 marks)

The concentration of a drug in the blood is $C(t)=te^{-t/2}$ mg per litre, $t$ hours after an injection. Find when the concentration is greatest and its value.

$C'(t)=e^{-t/2}-\tfrac12te^{-t/2}=e^{-t/2}\left(1-\tfrac t2\right)$, which is zero at $t=2$. For $t<2$, $C'>0$ and for $t>2$, $C'<0$, so $t=2$ is a maximum. Then $C(2)=2e^{-1}=0.736$ mg per litre. The maximum concentration is $0.736$ mg per litre, two hours after the injection.

## Using your GDC

A calculator can plot implicit curves only if they are solved for $y$, so for a circle you plot the upper and lower branches $y=\pm\sqrt{25-x^{2}}$ separately, and then the tangent as a check. The numerical derivative at a point on the plotted branch gives a value to compare with your implicit result. For related rates the calculator is useful in the last step: evaluating the rate at the given instant, solving a trigonometric equation for $\theta$, and finding the minimum of a function such as $L(\theta)$ from its graph. Make sure the angle mode is radians. The working that forms the model, and the differentiation with respect to $t$, must be shown algebraically, since calculators do not do this part for you in the examination.

## Common mistakes

- Forgetting the factor $\dfrac{dy}{dx}$ when differentiating a term in $y$, for instance writing $\dfrac{d}{dx}y^{2}=2y$.
- Treating $xy$ as a product of independent terms without the product rule.
- Not factorising correctly when collecting terms in $\dfrac{dy}{dx}$.
- Substituting numerical values for a variable before differentiating with respect to time in a related-rates question, so that the rate is lost.
- Using an equation true only at one instant, rather than at all times.
- Mistaking the sign of a rate: a falling quantity has a negative rate, though the question may ask "how fast is it falling" and expect a positive answer with a description.
- Omitting the domain or the proof of minimum in an optimisation question.
- Giving the gradient at a point without checking that the point is on the curve.

## Exam technique and command terms

**Find $\dfrac{dy}{dx}$** may be required in terms of $x$ and $y$, so do not stop to solve for $y$. **Show that** requires the algebra to be followed to the stated form. **Find the rate of change** means a derivative with respect to time, with units. In a related-rates question, write the equation, differentiate with respect to $t$, then substitute, and state the answer in a sentence. **Hence** points to using an earlier result. In an optimisation, write the domain, find the stationary point, justify that it is a maximum or minimum, and give the value of the objective, with units. Draw a diagram and label all variables, because the method marks follow from a correct model. If the model is given in the question, use it, and if you cannot derive it, still carry out the later parts.

## Connections

Implicit differentiation is the chain rule of SL 5.6 applied with $y$ as an inner function, and related rates use the same rule with time as the variable. The sliding ladder and the two ships use the Pythagorean relation of Unit 3, and the cone volume uses the formulas for solids of SL 3.1. Optimisation extends SL 5.8, and in AHL 5.15 implicit differentiation is used to find the derivatives of inverse trigonometric functions. In AHL 5.18, the relation between variables in a differential equation is often implicit, so the solution is a curve defined by an equation, and the implicit gradient is used to check it. In physics, related rates describe changing quantities in kinematics and fluid flow.

## Check your understanding

1. Find $\dfrac{dy}{dx}$ for $x^{2}+y^{2}=25$ and the gradient at $(3,4)$.
2. Find the equation of the tangent to $x^{2}+y^{2}=25$ at $(3,4)$.
3. Find the gradient of $x^{2}+xy+y^{2}=7$ at $(1,2)$.
4. Find the gradient of $x^{3}+y^{3}=9xy$ at $(2,4)$.
5. Find $\dfrac{dy}{dx}$ at $(0,1)$ on the curve $e^{xy}=x+y$.
6. Find $\dfrac{d^{2}y}{dx^{2}}$ at $(3,4)$ on $x^{2}+y^{2}=25$.
7. A circular ripple has radius increasing at $2$ m s$^{-1}$. Find $\dfrac{dA}{dt}$ when the radius is $5$ m.
8. A $10$ m ladder has its foot sliding away from a wall at $0.5$ m s$^{-1}$. How fast is the top moving when the foot is $6$ m from the wall?
9. A sphere is inflated so that its volume grows at $100$ cm$^{3}$ s$^{-1}$. Find the rate of increase of the radius when $r=5$ cm.
10. Find the maximum value of $C(t)=te^{-t/2}$ for $t\ge0$.

### Answers

1. $\dfrac{dy}{dx}=-\dfrac xy$, which is $-\dfrac34$ at $(3,4)$.
2. $y-4=-\dfrac34(x-3)$, which is $3x+4y=25$.
3. $-\dfrac45$.
4. $\dfrac45$.
5. $0$.
6. $-\dfrac{25}{y^{3}}=-\dfrac{25}{64}$.
7. $20\pi=62.8$ m$^{2}$ s$^{-1}$.
8. $\dfrac{dy}{dt}=-\dfrac68(0.5)=-0.375$ m s$^{-1}$, so the top moves down at $0.375$ m s$^{-1}$.
9. $V=\tfrac43\pi r^{3}$, so $\dfrac{dV}{dt}=4\pi r^{2}\dfrac{dr}{dt}$. Then $\dfrac{dr}{dt}=\dfrac{100}{4\pi\cdot25}=\dfrac1\pi=0.318$ cm s$^{-1}$.
10. $C'(t)=e^{-t/2}\left(1-\tfrac t2\right)=0$ at $t=2$, so the maximum is $C(2)=2e^{-1}=0.736$.

## Summary

- Differentiate both sides with respect to $x$, attach $\dfrac{dy}{dx}$ to every $y$ term, use the product rule for $xy$, then solve for $\dfrac{dy}{dx}$.
- The tangent is horizontal where the numerator of $\dfrac{dy}{dx}$ is zero and vertical where the denominator is zero.
- A second derivative implicit calculation substitutes $\dfrac{dy}{dx}$ back into the result.
- Related rates: write an equation valid at all times, differentiate with respect to $t$, then substitute the instant values.
- Eliminate extra variables with similar triangles or ratios before differentiating, and include units and signs in the answer.
- Higher-level optimisation uses trigonometric and exponential models: state the domain and justify the extremum.
