# Introduction to differential calculus

> **SL 5.1 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- describe the average rate of change of a function over an interval as the gradient of a chord, and the instantaneous rate of change at a point as the gradient of the tangent;
- explain informally the idea of a limit and how the gradient of a chord approaches the gradient of the tangent as the interval shrinks;
- use the notation $f'(x)$ and $\dfrac{dy}{dx}$ for the derivative, and interpret it as a gradient function and as a rate of change with units;
- estimate a gradient numerically with a sequence of chords, and find it directly with a calculator;
- relate the sign of the derivative to the behaviour of the graph, and sketch the shape of a derivative graph from a function graph;
- interpret the derivative in a context such as speed, growth or cost, giving the correct units;
- state clearly why a chord with zero width cannot be used directly.

## Why this topic matters

Algebra and functions describe how one quantity depends on another, but they do not by themselves say *how fast* things change. A car's position tells you where it is, and its speed tells you how quickly the position is changing at this instant. A population count tells you how many animals there are, and the growth rate tells you whether the population is about to explode or collapse. Calculus is the mathematics of change, and differential calculus is the half that deals with rates of change at an instant. It was developed in the seventeenth century by Newton and Leibniz to solve problems in motion and geometry, and it remains the basic language of physics, engineering, economics, biology and data science.

The central idea is easy to say and surprisingly deep: the instantaneous rate of change is the limit of average rates of change over shorter and shorter intervals. In this chapter we build that idea from pictures and numbers, before the rules of SL 5.3 make differentiation fast. In the examination, the topic appears in two ways. There are short questions that ask you to interpret a derivative in context, or to read the sign of a gradient from a graph, and there are calculator questions that give a function and ask for its gradient at a point. The questions are accessible, but the understanding you build here supports every calculus topic that follows, so it is worth taking the time to be clear about what a derivative means.

## Core ideas

### Average rate of change and the chord

For a function $f$, the **average rate of change** between $x=a$ and $x=b$ is the change in the output divided by the change in the input:
$$
\frac{f(b)-f(a)}{b-a}.
$$
Geometrically, this is the gradient of the straight line joining the points $(a,f(a))$ and $(b,f(b))$ on the graph, called a **chord** (or secant). If $f(t)$ is the distance travelled after $t$ seconds, the average rate of change is the average speed over the time interval. Its units are the units of the output divided by the units of the input, such as metres per second.

### From the chord to the tangent

An average rate tells you about an interval, not about a moment. To find the rate at a single point $x=a$, take a second point at $x=a+h$ and let the width $h$ get smaller. The chord from $x=a$ to $x=a+h$ has gradient
$$
\frac{f(a+h)-f(a)}{h}.
$$
As $h$ becomes very small, positive or negative, the chord rotates and approaches the **tangent** at $x=a$, which is the straight line that just touches the curve there and has the same direction as the curve. The gradient of the tangent is the **gradient of the curve** at that point. We cannot put $h=0$ directly, since that gives $\tfrac00$, which is undefined. Instead we ask what value the expression is approaching as $h$ approaches $0$. This value, if it exists, is the **limit**, and we write
$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.
$$
The word "limit" means "the value approached", not necessarily "the value reached". We will only use the limit informally in this chapter, but it is made precise in AHL 5.12 and 5.13.

### The derivative

The **derivative** of $f$ at $x=a$ is the number $f'(a)$ above, and if it exists for every $x$ in an interval, it defines a new function, the **derivative function** or **gradient function**, $f'(x)$. Different notations are used for the same object. If $y=f(x)$, the derivative is written
$$
f'(x)\quad\text{or}\quad\frac{dy}{dx}.
$$
The symbol $\tfrac{dy}{dx}$ is read "dy by dx" and should be thought of as one symbol, not a fraction, though it behaves like a ratio of small changes. If the variables have other names, the notation follows: for $s(t)$ the derivative is $\tfrac{ds}{dt}$. Differentiation is the process of finding the derivative.

### Interpreting the derivative

The derivative has two equivalent meanings:

- **geometric**: $f'(a)$ is the gradient of the tangent to the curve $y=f(x)$ at $x=a$;
- **rate of change**: $f'(a)$ tells you how fast $y$ is changing with respect to $x$ at $x=a$, in units of $y$ per unit of $x$.

If $f'(a)>0$ the function is increasing at that point, if $f'(a)<0$ it is decreasing, and if $f'(a)=0$ the tangent is horizontal, which usually happens at a maximum, a minimum or a flat point. A large positive value means a rapid increase. For a distance function $s(t)$ in metres, $s'(t)$ is the velocity in metres per second, and a negative value means motion in the negative direction. A cost function $C(x)$ in euros for $x$ items has $C'(x)$ in euros per item, which is the approximate extra cost of making one more item.

### Gradient values and the shape of the derivative graph

You can sketch the graph of $f'$ from the graph of $f$ without knowing the formula. Where $f$ has a horizontal tangent, $f'$ crosses the $x$-axis. Where $f$ is increasing, the graph of $f'$ lies above the axis, and where $f$ is decreasing, it lies below. Where $f$ is steepest, $f'$ reaches its largest or smallest value. For example, a parabola with a minimum at $x=2$ has a derivative that is a straight line with positive gradient crossing the axis at $x=2$. A graph with a sharp corner has no derivative at the corner, because the chord gradients from the left and from the right approach different values.

### Finding gradients with technology

A graphing calculator can evaluate the derivative at a point numerically, by computing a chord with a very small $h$, or by symmetric differences. You choose the function, enter the point, and read the value. Such a value is accurate to the displayed precision but is still a numerical approximation, and when the question asks for an exact value, you will need the rules from SL 5.3.

## Worked examples

### Example 1 (shrinking chords, 5 marks)

Let $f(x)=x^{2}$. Find the gradient of the chord from $x=3$ to $x=3+h$, evaluate it for $h=1,\,0.1,\,0.01,\,0.001$, and state the gradient of the curve at $x=3$.

The chord gradient is $\dfrac{(3+h)^{2}-3^{2}}{h}=\dfrac{9+6h+h^{2}-9}{h}=\dfrac{6h+h^{2}}{h}=6+h$ for $h\neq0$. For $h=1,0.1,0.01,0.001$ the values are $7,\,6.1,\,6.01,\,6.001$. These approach $6$, so the limit is $6$ and the gradient of the curve at $x=3$ is $6$. The cancellation of $h$ is allowed because $h\neq0$ during the process, and only afterwards do we let $h\to0$. The marks are for the algebra of the chord gradient, the values, and the conclusion.

### Example 2 (average and instantaneous speed, 5 marks)

A falling object has distance $s=5t^{2}$ metres after $t$ seconds. Find the average speed between $t=2$ and $t=2.1$, and estimate the speed at $t=2$.

The distances are $s(2)=20$ and $s(2.1)=5(4.41)=22.05$. The average speed over the interval is $\dfrac{22.05-20}{0.1}=20.5$ m/s. Over a smaller interval the average would be closer to the instantaneous speed: from $t=2$ to $t=2.01$ the distance is $5(4.0401)=20.2005$ and the average speed is $\dfrac{0.2005}{0.01}=20.05$ m/s. These values approach $20$ m/s, which is the speed at $t=2$. The average speed over a short interval is a good estimate of the instantaneous speed, and it improves as the interval shrinks.

### Example 3 (the derivative function from a graph, 4 marks)

The function $f(x)=x^{3}-3x$ has a graph with a local maximum at $x=-1$ and a local minimum at $x=1$. Describe the derivative graph.

At $x=-1$ and $x=1$ the tangent is horizontal, so $f'(-1)=f'(1)=0$, and the graph of $f'$ crosses the $x$-axis at these points. For $x<-1$ and $x>1$, the function increases, so $f'>0$ there, and for $-1<x<1$ it decreases, so $f'<0$. So $f'$ has a U-shape, a parabola opening upwards with roots at $\pm1$. In fact $f'(x)=3x^{2}-3$, which is the parabola described, and you will see how to find it in SL 5.3. At $x=0$ the gradient of $f$ is $-3$, the steepest decline, and that is the minimum of $f'$.

### Example 4 (technology, 3 marks)

Use a calculator to find the gradient of $y=x\ln x$ at $x=2$.

Enter the function, choose the numerical derivative at $x=2$, and read $1.693$. This agrees with the exact value $\ln2+1=1.693$, which we will be able to find with the product rule in SL 5.6. The gradient is positive, so the function is increasing at $x=2$. The answer is given to three significant figures, and it would be wise to write the setup, such as "derivative of $x\ln x$ at $x=2$", since the keystrokes themselves earn no marks.

### Example 5 (signs and sketches, 4 marks)

For $f(x)=x^{2}-4x$, the derivative is $f'(x)=2x-4$. Find the gradient at $x=0,1,2,3$ and describe the shape of $f$.

The gradients are $f'(0)=-4$, $f'(1)=-2$, $f'(2)=0$ and $f'(3)=2$. For $x<2$ the gradient is negative and the curve falls, getting less steep as $x$ approaches $2$. At $x=2$ the tangent is horizontal, and for $x>2$ the gradient is positive and the curve rises. So the graph is a U-shaped parabola with a minimum at $x=2$, where $f(2)=-4$. The gradient function is a straight line that increases steadily, which matches the idea that a parabola bends at a constant rate.

### Example 6 (rate of change with units, 4 marks)

The volume of water in a tank is $V(t)=100-4t+0.2t^{2}$ litres after $t$ minutes, and $V'(t)=-4+0.4t$. Find $V'(5)$ and interpret it.

Substituting gives $V'(5)=-4+0.4(5)=-2$. The units are litres per minute. The value is negative, so the volume is falling: at $t=5$ minutes the tank is being drained at the rate of $2$ litres per minute. The rate is slowing, since $V'(t)$ increases with $t$, and it reaches zero at $t=10$ minutes, when the volume is a minimum.

### Example 7 (why not put $h=0$, 3 marks)

A student says that the gradient of $y=x^{2}$ at $x=1$ is $\dfrac{(1+0)^{2}-1^{2}}{0}$. Explain the mistake.

With $h=0$ the numerator is $0$ and the denominator is $0$, giving $\tfrac00$, which is undefined, and the chord from a point to itself is not a line. The correct approach is to simplify first: $\dfrac{(1+h)^{2}-1}{h}=2+h$ for $h\neq0$, and then to find the value that this expression approaches as $h\to0$, which is $2$. So the gradient at $x=1$ is $2$. This is the idea of a limit.

### Example 8 (a cost function, 3 marks)

The cost in euros of producing $x$ items is $C(x)$ and $C'(100)=2.5$. Interpret this.

At a production level of $100$ items, the cost is increasing at about $2.5$ euros per additional item. In other words, producing the $101$st item will cost approximately €2.50. The derivative is the **marginal cost** at that level of output. It is an approximation because the rate may change over the extra item.

## Using your GDC

Most calculators can evaluate the derivative of a function at a point using a template such as $\dfrac{d}{dx}(\text{function})\Big|_{x=a}$, or from the graph screen using the gradient or "dy/dx" option. Enter the function exactly as it appears, with brackets around the argument of any function such as $\ln(x)$ or $2^{x}$, and make sure the calculator is in radian mode when you work with trigonometric functions, as the angle measure changes the derivative. To see the chord idea in action, use a table of values: compute $\dfrac{f(a+h)-f(a)}{h}$ for $h=0.1,0.01,0.001$ in a spreadsheet-style list and watch the values settle. You can also draw a tangent line at a point using the graphing tools, and read its equation. The calculator's gradient is a numerical approximation, so quote it to three significant figures unless instructed otherwise, and do not use it when an exact value is requested. Always write what you calculated, for example "gradient of $f$ at $x=2$ is $1.69$".

## Common mistakes

- Treating $\dfrac{dy}{dx}$ as a fraction that can be cancelled, or reading it as $dy$ multiplied by $dx$. It is a single symbol for the derivative.
- Setting $h=0$ before simplifying, which gives the undefined $\tfrac00$.
- Confusing average and instantaneous rates. The chord gradient is an average, and the tangent gradient is instantaneous.
- Leaving out the units when interpreting the derivative, or giving the units of $y$ instead of units of $y$ per unit of $x$.
- Saying "the gradient is increasing" when the gradient is positive, or reversing the signs of increasing and decreasing functions.
- Assuming every point of a graph has a derivative. At a corner or a break there is none.
- Reading the sign of the derivative from the height of $f$ instead of its slope.
- Rounding the numerical derivative too early, or reporting a calculator value as exact.

## Exam technique and command terms

**Find the gradient** at a point with a calculator needs only the value, but one line of setup protects the method mark. **Estimate** means a numerical approach, such as a chord with a small interval, is acceptable. **Interpret** or **explain what it represents** requires a sentence containing the quantity, the direction of change, the number and its units, for example "the volume is decreasing at $2$ litres per minute". **Sketch** a derivative graph requires correct sign regions, the zeros at the turning points, and the general shape, but not exact values, unless coordinates are given. **Justify** a conclusion about increasing or decreasing by referring to the sign of the gradient. When a question gives a derivative and asks you to evaluate it, substitute carefully, and attach units. Where a question asks "what does $f'(a)=0$ tell you", answer that the tangent is horizontal at $x=a$, so the function is momentarily stationary, which may be a maximum, a minimum or a point of inflection.

## Connections

This chapter prepares the formal definition of the derivative as a limit in AHL 5.12, where you differentiate from first principles, and the limits of AHL 5.13, where $\tfrac00$ forms are resolved with L'Hôpital's rule. The sign of the derivative is the subject of SL 5.2, and the rules for finding derivatives quickly begin in SL 5.3. The tangent line becomes the central object of SL 5.4. In kinematics (SL 5.9), the derivative of displacement is velocity, and in optimisation (SL 5.8) the places where the derivative is zero identify maximum and minimum values. The idea of a limit is also behind the sum of an infinite geometric series in the algebra unit. Differential calculus supplies one half of the fundamental theorem that links it to integration in SL 5.5 and 5.11.

## Check your understanding

1. For $f(x)=x^{2}$, find the gradient of the chord from $x=2$ to $x=2+h$, and state the gradient of the curve at $x=2$.
2. For $f(x)=x^{3}$, find the average rate of change between $x=2$ and $x=2.1$, and compare it with the gradient at $x=2$, which is $12$.
3. A distance is $s=3t^{2}+2t$ metres. Find the average speed between $t=4$ and $t=4.1$, and estimate the speed at $t=4$.
4. The cost of making $x$ items is $C(x)$ euros and $C'(100)=2.5$. Interpret this statement.
5. For $f(x)=x^{2}-4x$ find the gradient at $x=0$ and at $x=2$.
6. Describe the graph of $f'$ when $f$ is a parabola opening upwards with its minimum at $x=2$.
7. Use a calculator to find the gradient of $y=\ln x$ at $x=3$.
8. Explain why the gradient at a point cannot be found by substituting $h=0$ into the chord formula.
9. The volume of water in a tank has $V'(t)=-2$ litres per minute at $t=5$ minutes. Interpret this.
10. Find the gradient of $y=\dfrac1x$ at $x=2$ using a calculator.

### Answers

1. $\dfrac{(2+h)^{2}-4}{h}=\dfrac{4h+h^{2}}{h}=4+h$. As $h\to0$ this approaches $4$, so the gradient at $x=2$ is $4$.
2. $\dfrac{2.1^{3}-2^{3}}{0.1}=\dfrac{9.261-8}{0.1}=12.61$. The chord gradient is a little larger than $12$ because the interval is not very small, and it approaches $12$ as the interval shrinks.
3. $s(4)=56$ and $s(4.1)=3(16.81)+8.2=58.63$, so the average speed is $\dfrac{58.63-56}{0.1}=26.3$ m/s. The speed at $t=4$ is approximately $26$ m/s.
4. At a production level of $100$ items the cost increases by about $2.5$ euros for each extra item produced.
5. The derivative is $2x-4$, so the gradient is $-4$ at $x=0$ and $0$ at $x=2$.
6. It is a straight line with positive gradient crossing the $x$-axis at $x=2$. It is negative for $x<2$, where $f$ decreases, and positive for $x>2$, where $f$ increases.
7. The gradient is $0.333$ (which is $\tfrac13$), so the function is increasing but slowly.
8. With $h=0$ the expression is $\tfrac00$, which is undefined. One must simplify for $h\neq0$ and then find the value that the result approaches as $h\to0$.
9. At $t=5$ minutes the volume of water is decreasing at the rate of $2$ litres per minute, so the tank is draining.
10. The gradient is $-0.25$, since the exact derivative is $-\dfrac{1}{x^{2}}=-\dfrac14$. The negative sign shows that the curve is falling.

## Summary

- The average rate of change over $[a,b]$ is $\dfrac{f(b)-f(a)}{b-a}$, the gradient of a chord.
- The derivative at $x=a$ is the limit of chord gradients $\dfrac{f(a+h)-f(a)}{h}$ as $h\to0$, the gradient of the tangent. Simplify before letting $h\to0$.
- Notation: $f'(x)$ and $\dfrac{dy}{dx}$. The derivative function gives the gradient at every $x$.
- $f'>0$ means increasing, $f'<0$ means decreasing and $f'=0$ means a horizontal tangent.
- Interpret a derivative with units of $y$ per unit of $x$, and with direction and context.
- A calculator can give a gradient at a point numerically. Use exact methods when an exact value is requested.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.1. Related facts may appear elsewhere. Justify any method used here.

---

[Calculus master guide](/units/calculus/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
