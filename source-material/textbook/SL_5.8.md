# Optimization and points of inflection

> **SL 5.8 · AA SL** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- model a real situation with a function of one variable, state its domain, and find its greatest or least value by calculus;
- follow a reliable procedure: define variables, form the objective function, eliminate extra variables with a constraint, differentiate, solve, classify and answer in context;
- distinguish local extrema from global extrema, and check the end points of a closed interval;
- use the first and second derivative tests to confirm that a stationary point is a maximum or a minimum;
- find and justify points of inflection, distinguishing those with zero gradient from those with non-zero gradient;
- find where the gradient of a function is steepest, using the inflection of $f$ or the extremum of $f'$;
- minimise distances and costs, and maximise areas, volumes and profits in standard contexts.

## Why this topic matters

Optimisation is the part of calculus that most directly answers the question, "What is the best that can be done?" Designers want the strongest beam from a given amount of material, shipping firms want the cheapest route, farmers want the biggest field from a given length of fence, and manufacturers want the packaging that uses the least metal for a required volume. In each case the answer is the largest or smallest value of some quantity, and the key to finding it is that at a smooth maximum or minimum the tangent is horizontal, so the derivative is zero.

The mathematical difficulty in an optimisation problem is rarely the calculus itself, which is the routine differentiation and solving of the previous chapters. The difficulty is the modelling: turning a verbal description into a function of one variable. That step requires a diagram, careful definition of variables, and the use of a constraint to eliminate all but one of them. In the examination, optimisation problems usually carry a lot of marks (often ten or more) and are structured in parts: show that the volume is a given expression, find its derivative, find the maximum, and justify that it is a maximum. Marks are earned at each stage, and an error in the model can usually be recovered if the later steps are correct (follow-through), so it pays to write each stage clearly. The second half of this chapter, on points of inflection, completes the picture of the shapes of curves.

## Core ideas

### The optimisation procedure

A standard approach is the following.

1. **Draw and define.** Sketch the situation and define each variable with units.
2. **Objective function.** Write the quantity to be maximised or minimised (area, cost, volume, distance) in terms of the variables.
3. **Constraint.** Use the given information (such as fixed perimeter or fixed volume) to eliminate all but one variable, so that the objective becomes a function $f(x)$ of one variable.
4. **Domain.** State the values of $x$ that make sense, for example $x>0$, or $0<x<12$ if a length cannot exceed $12$.
5. **Differentiate and solve.** Find $f'(x)$ and solve $f'(x)=0$.
6. **Classify.** Show that the stationary point is a maximum or minimum, using $f''$ or a sign change of $f'$, and check the end points of the domain if it is a closed interval.
7. **Answer.** Compute the value of the objective function, including units, and answer the question in words.

### Local and global extrema

A **local maximum** is the highest point in its neighbourhood, but there may be higher values elsewhere. The **global** (or absolute) **maximum** on a domain is the highest value on the whole domain. When the domain is a closed interval $[a,b]$ the global maximum and minimum of a continuous function occur either at stationary points inside the interval or at the end points, so compare the function values at all of these candidates. A common situation is that the function is a smooth curve with a single stationary point in an open domain, with values that grow without bound at both ends, so that the stationary point is the global extremum. In that case it is enough to classify it and to say why no other candidate exists.

### Checking with the second derivative

If $f'(a)=0$, then $f''(a)<0$ gives a local maximum and $f''(a)>0$ gives a local minimum, as in SL 5.7. If $f''(a)=0$, use the sign of $f'$ either side. For an examination, writing "$f''(a)=\ldots<0$, so maximum" is a one-line proof. When the second derivative is messy, a sign diagram for $f'$ is just as acceptable.

### Common models

Several types recur. **Rectangles with fixed perimeter or fixed fencing** give a quadratic area function. **Boxes and cans** with fixed volume or fixed material give a function of one variable after eliminating the height with the volume constraint. **Minimum distance** from a point to a curve is found by minimising the *square* of the distance, since the square root has its minimum at the same place and the algebra is simpler. **Average cost** and **profit** functions are polynomials or rational functions of the number of items. In all cases, check that the answer is physically sensible and that it lies in the domain.

### Points of inflection

A **point of inflection** is a point where the concavity changes. As in SL 5.7, the conditions are $f''(a)=0$ with $f''$ changing sign at $a$. Two kinds are distinguished:

- a **stationary point of inflection** (or horizontal point of inflection) has also $f'(a)=0$, as at the origin for $y=x^{3}$;
- a **non-stationary point of inflection** has $f'(a)\neq0$, as in $y=x^{3}-3x^{2}$ at $x=1$ where the gradient is $-3$.

To show that $a$ is a point of inflection, show that $f''(a)=0$ and that $f''$ has opposite signs just before and just after $a$. The tangent line at an inflection crosses the curve.

### The steepest gradient

The gradient of $f$ is the function $f'$, and the gradient is greatest (or least) where $f'$ has a maximum (or minimum), which is where $f''=0$ with a sign change, that is at a point of inflection of $f$. So the point of inflection of a growth curve is where the growth is fastest, and the inflection of a cubic is where it is steepest or shallowest. Asking for "the maximum rate of change" is therefore an optimisation problem for $f'$.

## Worked examples

### Example 1 (a fenced field, 7 marks)

A farmer has $200$ m of fencing and wants a rectangular field using a straight wall as one side, so only three sides need fencing. Find the dimensions that give the greatest area.

Let the sides perpendicular to the wall be $x$ metres. The side parallel to the wall is $200-2x$, so the area is $A=x(200-2x)=200x-2x^{2}$, with domain $0<x<100$. Then $\dfrac{dA}{dx}=200-4x=0$ gives $x=50$. The second derivative is $\dfrac{d^{2}A}{dx^{2}}=-4<0$, so this is a maximum. The parallel side is $200-100=100$ m and the area is $50\times100=5000$ m$^{2}$. The greatest area is $5000$ square metres, obtained with sides $50$ m, $100$ m and $50$ m. The parallel side is twice the perpendicular sides.

### Example 2 (an open box, 8 marks)

An open box is made from a square sheet of card of side $24$ cm by cutting a square of side $x$ cm from each corner and folding up the sides. Find the value of $x$ that gives the maximum volume, and that volume.

The base has side $24-2x$ and the height is $x$, so $V=x(24-2x)^{2}$ with $0<x<12$. By the product and chain rules, $\dfrac{dV}{dx}=(24-2x)^{2}+x\cdot2(24-2x)(-2)=(24-2x)\big[(24-2x)-4x\big]=(24-2x)(24-6x)=12(12-x)(4-x)$. This is zero at $x=4$ (the value $x=12$ is not in the domain). For $0<x<4$ the derivative is positive and for $4<x<12$ it is negative, so $x=4$ gives a maximum. The volume is $V=4\times16^{2}=1024$ cm$^{3}$. A check on the second derivative: $V''(4)=-96<0$. The maximum volume is $1024$ cubic centimetres, with a square of side $4$ cm cut from each corner.

### Example 3 (minimum surface area of a can, 9 marks)

A closed cylindrical can must hold $500$ cm$^{3}$. Find the radius and height that minimise the total surface area, and the minimum area.

Let the radius be $r$ cm and the height $h$ cm. The volume constraint $\pi r^{2}h=500$ gives $h=\dfrac{500}{\pi r^{2}}$. The surface area is $A=2\pi r^{2}+2\pi rh=2\pi r^{2}+\dfrac{1000}{r}$ for $r>0$. Then $\dfrac{dA}{dr}=4\pi r-\dfrac{1000}{r^{2}}=0$ gives $r^{3}=\dfrac{250}{\pi}$, so $r=4.30$ cm. The second derivative is $\dfrac{d^{2}A}{dr^{2}}=4\pi+\dfrac{2000}{r^{3}}>0$ for all $r>0$, so this is a minimum, and it is the global minimum because $A\to\infty$ as $r\to0$ and as $r\to\infty$. The height is $h=\dfrac{500}{\pi(4.30)^{2}}=8.60$ cm, which is twice the radius, so the can is as tall as it is wide. The minimum area is $A=2\pi(4.30)^{2}+\dfrac{1000}{4.30}=348.7$, so about $349$ cm$^{2}$.

### Example 4 (minimum distance, 7 marks)

Find the point on the curve $y=\sqrt x$ that is closest to the point $(4,0)$, and the minimum distance.

A point on the curve is $(x,\sqrt x)$ with $x\ge0$. The square of the distance to $(4,0)$ is $D=(x-4)^{2}+x$. Differentiating, $\dfrac{dD}{dx}=2(x-4)+1=2x-7$, which is zero at $x=\tfrac72$. The second derivative is $2>0$, so this is a minimum. The closest point is $\left(\tfrac72,\sqrt{\tfrac72}\right)=(3.5,\,1.87)$. The minimum value of $D$ is $\left(-\tfrac12\right)^{2}+\tfrac72=\tfrac{15}{4}$, so the minimum distance is $\sqrt{\tfrac{15}{4}}=\tfrac{\sqrt{15}}{2}=1.94$. Minimising $D$ rather than $\sqrt D$ avoids a square root, and gives the same location.

### Example 5 (end points of an interval, 6 marks)

Find the greatest and least values of $f(x)=x^{3}-12x$ on the interval $-1\le x\le4$.

The derivative is $f'(x)=3x^{2}-12=3(x-2)(x+2)$, so the stationary points are $x=2$ and $x=-2$. Only $x=2$ lies in the interval. The candidates are the stationary point and the end points: $f(-1)=-1+12=11$, $f(2)=8-24=-16$ and $f(4)=64-48=16$. Comparing, the greatest value is $16$, at the end point $x=4$, and the least value is $-16$, at the stationary point $x=2$. The local maximum at $x=-2$ is irrelevant because it lies outside the interval, and the greatest value occurs at an end point, which shows why the end points must be checked.

### Example 6 (an inscribed rectangle, 7 marks)

A rectangle has its base on the $x$-axis and its top two vertices on the curve $y=12-x^{2}$, symmetrically placed about the $y$-axis. Find the maximum area.

Let the top right vertex be $(x,12-x^{2})$ with $0<x<\sqrt{12}$. The rectangle has width $2x$ and height $12-x^{2}$, so $A=2x(12-x^{2})=24x-2x^{3}$. Then $\dfrac{dA}{dx}=24-6x^{2}=0$ gives $x=2$. The second derivative is $-12x$, which is $-24<0$ at $x=2$, so it is a maximum. The area is $A=4\times8=32$, with width $4$ and height $8$.

### Example 7 (average cost, 5 marks)

The average cost per item of making $x$ items is $C(x)=x+\dfrac{900}{x}$ euros. Find the number of items that minimises the average cost, and that cost.

We have $C'(x)=1-\dfrac{900}{x^{2}}=0$, so $x^{2}=900$ and $x=30$ (taking $x>0$). The second derivative is $C''(x)=\dfrac{1800}{x^{3}}>0$, so it is a minimum. The minimum average cost is $C(30)=30+30=60$ euros per item. At this point the first term (rising cost) and the second (falling share of fixed costs) balance.

### Example 8 (points of inflection, 6 marks)

For $f(x)=x^{4}-4x^{3}$, find the points of inflection and say whether each is stationary.

We have $f'(x)=4x^{3}-12x^{2}$ and $f''(x)=12x^{2}-24x=12x(x-2)$, which is zero at $x=0$ and $x=2$. The sign of $f''$ is positive for $x<0$, negative for $0<x<2$ and positive for $x>2$, so it changes at both points, and both are points of inflection. At $x=0$, $f'(0)=0$ and $f(0)=0$, so $(0,0)$ is a stationary point of inflection. At $x=2$, $f'(2)=32-48=-16\neq0$ and $f(2)=-16$, so $(2,-16)$ is a non-stationary point of inflection. At $x=2$ the curve is falling at its steepest rate between the two flat points.

### Example 9 (greatest gradient, 5 marks)

Find where the gradient of $f(x)=x^{3}-3x^{2}+4x$ is least, and state the least gradient.

The gradient function is $f'(x)=3x^{2}-6x+4$. Its derivative is $f''(x)=6x-6=0$ at $x=1$, and $f'''(x)=6>0$ so $f'$ has a minimum there. The least gradient is $f'(1)=3-6+4=1$. This occurs at the point of inflection $(1,2)$ of $f$, and since $f'(x)\ge1>0$ everywhere, the function is increasing for all $x$, with its flattest part at the inflection.

## Using your GDC

Optimisation problems can be checked with a graph. Plot the objective function over the domain and use the maximum or minimum feature to find the turning point, which should agree with your solution of $f'(x)=0$. For equations that cannot be factorised, such as $r^{3}=\dfrac{250}{\pi}$, solve with the equation solver or find the zero of $f'$ from its graph. When the domain is a closed interval, a table of values at the end points and the stationary points lets you compare the candidates. For a point of inflection, graph $f'$ and find its extremum, or graph $f''$ and find where it crosses the axis. Keep the exact form of your answer until the end, and then give a value to three significant figures with the correct units. On a calculator-allowed paper you may be asked to use the graph to solve a problem directly, in which case write a sketch with the key point labelled, and still state the objective function and the domain.

## Common mistakes

- Failing to reduce the objective function to a single variable before differentiating, or differentiating with respect to the wrong variable.
- Omitting the domain, and so accepting values of $x$ that do not make sense, such as negative lengths.
- Failing to justify that the stationary point is a maximum or minimum, and giving only the value.
- Forgetting to check the end points on a closed interval, where the global maximum may occur.
- Minimising the distance without squaring, and so complicating the algebra, or forgetting to take the square root at the end.
- Answering with the value of $x$ when the question asks for the maximum area or volume, or the reverse.
- Treating $f''(a)=0$ as proof of a point of inflection without checking the sign change.
- Omitting units, or answering in a form that does not reflect the context, such as a non-integer number of items without comment.

## Exam technique and command terms

**Show that** the objective function equals a given expression requires every algebraic step: the constraint, substitution and simplification, ending with exactly the stated form. **Find the maximum** requires the value of the variable where it occurs and the value of the quantity itself, if asked. **Justify that it is a maximum** or **verify** requires a clear test: $f''(a)<0$, or a sign change of $f'$. **Hence** instructs you to use the previous part. **Find the greatest value on the interval** requires a comparison of end points and stationary points. In a modelling question, write a sentence at the end that answers in context: "the maximum area is $5000$ m$^{2}$ when the side perpendicular to the wall is $50$ m". Give exact values when requested, as for example $\tfrac{\sqrt{15}}{2}$, and decimals to three significant figures otherwise. If you cannot show the given expression for the objective function, carry on with it, as the later marks are still available.

## Connections

Optimisation uses the stationary-point analysis of SL 5.2 and the second derivative test of SL 5.7, and it relies on the product and chain rules of SL 5.6 for many models. The modelling step uses geometry from Unit 3, namely areas, volumes and distance, and quadratic and cubic functions from Unit 2. In SL 5.9 the problem "when is the speed greatest?" is an optimisation of velocity, and in AHL 5.14 related rates connect changing quantities in a geometric setting. In statistics the maximum of a likelihood function and the least squares line (SL 4.4) are optimisation problems solved by setting derivatives equal to zero. In economics, maximising profit corresponds to setting marginal revenue equal to marginal cost.

## Check your understanding

1. A rectangular pen is built against a wall with $60$ m of fencing for the three other sides. Find the greatest area.
2. Two non-negative numbers have a sum of $20$. Find the greatest value of their product.
3. A closed box has a square base of side $s$ cm and volume $1000$ cm$^{3}$. Find the value of $s$ that minimises the surface area, and the minimum area.
4. The profit is $P(x)=-x^{3}+9x^{2}+48x-100$ for $0\le x\le12$. Find the value of $x$ that gives the greatest profit, and that profit.
5. Find the point on $y=\dfrac1x$ with $x>0$ that is closest to the origin, and the minimum distance.
6. Find the points of inflection of $f(x)=x^{4}-6x^{2}$ and state whether they are stationary.
7. Find the greatest and least values of $f(x)=x^{3}-3x$ on $-2\le x\le3$.
8. A rectangle has its base on the $x$-axis and its top vertices on $y=12-x^{2}$. Find its maximum area.
9. The average cost per item is $C(x)=x+\dfrac{900}{x}$ euros. Find the minimum average cost.
10. Explain why $f''(a)=0$ is not enough to conclude that $a$ is a point of inflection, using $f(x)=x^{4}$.

### Answers

1. With the sides perpendicular to the wall equal to $x$, $A=x(60-2x)$, so $A'=60-4x=0$ gives $x=15$. $A''=-4<0$. The area is $15\times30=450$ m$^{2}$.
2. Let the numbers be $x$ and $20-x$. $P=x(20-x)$, $P'=20-2x=0$ gives $x=10$, $P''=-2<0$. The greatest product is $100$.
3. $h=\dfrac{1000}{s^{2}}$ and $A=2s^{2}+4sh=2s^{2}+\dfrac{4000}{s}$. $A'=4s-\dfrac{4000}{s^{2}}=0$ gives $s^{3}=1000$ and $s=10$. $A''=4+\dfrac{8000}{s^{3}}>0$. The minimum area is $200+400=600$ cm$^{2}$ (a cube).
4. $P'(x)=-3x^{2}+18x+48=-3(x-8)(x+2)$, so $x=8$ in the domain. $P''(8)=-6(8)+18=-30<0$. $P(8)=-512+576+384-100=348$. Check the end points: $P(0)=-100$ and $P(12)=44$. The greatest profit is $348$ at $x=8$.
5. The squared distance is $D=x^{2}+x^{-2}$. $D'=2x-2x^{-3}=0$ gives $x^{4}=1$, so $x=1$. $D''=2+6x^{-4}>0$. The point is $(1,1)$ and the distance is $\sqrt2$.
6. $f''(x)=12x^{2}-12=12(x-1)(x+1)$, which changes sign at $x=\pm1$. The points are $(1,-5)$ and $(-1,-5)$. Since $f'(1)=4-12=-8\neq0$, neither is stationary.
7. $f'(x)=3x^{2}-3=0$ gives $x=\pm1$. Values: $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(3)=18$. The greatest value is $18$ at $x=3$ and the least is $-2$, at $x=-2$ and at $x=1$.
8. $A=2x(12-x^{2})$, $A'=24-6x^{2}=0$ gives $x=2$, $A''=-24<0$, so $A=32$.
9. $C'(x)=1-\dfrac{900}{x^{2}}=0$ gives $x=30$, $C''>0$, so the minimum is $C(30)=60$ euros.
10. For $f(x)=x^{4}$, $f''(x)=12x^{2}$ is zero at $x=0$ but is positive on both sides, so the concavity does not change and there is no inflection (in fact $x=0$ is a minimum).

## Summary

- Optimisation steps: define variables, form the objective, use the constraint to reduce to one variable, state the domain, solve $f'(x)=0$, classify, and answer in context.
- Check the end points of a closed interval. The global extremum may occur there rather than at a stationary point.
- Confirm a maximum or minimum with $f''$ or a sign change of $f'$. Minimise the square of a distance.
- A point of inflection needs $f''=0$ and a sign change of $f''$. It is stationary if also $f'=0$, otherwise non-stationary.
- The gradient of $f$ is greatest or least at a point of inflection of $f$.
- Give the answer with units and a sentence, and check that it lies inside the domain.
