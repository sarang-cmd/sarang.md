# Functions, domains, ranges and inverses

> **SL 2.2 · AA SL foundation (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define a function as a rule that assigns each input exactly one output, and use the vertical line test;
- use function notation $f(x)$ and the mapping notation $f:x\mapsto\ldots$, including evaluating $f(a+h)$ with an algebraic input;
- find the natural domain of a function, taking into account denominators, square roots and logarithms;
- find the range of a function, using a graph, completing the square, or a GDC, and describe domains and ranges in interval or inequality notation;
- understand a restricted domain and its effect on the range;
- explain when a function has an inverse (one-to-one) using the horizontal line test, and describe how the domain and range of $f^{-1}$ relate to those of $f$;
- relate the graph of $f^{-1}$ to the graph of $f$ by reflection in $y=x$, and read values of $f^{-1}$ from a graph or table.

## Why this topic matters

The function is the central concept of modern mathematics: a precise way to describe how one quantity depends on another. The whole of calculus is the study of functions, probability distributions are functions, and a computer program is, at heart, a function from inputs to outputs. In the IB course, SL 2.2 sets the language for everything else in Unit 2 and for much of Units 3 to 5: you cannot discuss composite functions, transformations, limits, derivatives or integrals without talking about domains and ranges. Many marks are lost not through hard algebra but through imprecise notation: giving a range when asked for the domain, forgetting that a square-root argument must be non-negative, or reading $f^{-1}(x)$ as $\dfrac1{f(x)}$. This chapter aims at a *precise* working vocabulary. With it, questions that look abstract (such as "state the range of $f\circ g$") become routine, and questions that look hard (such as "find the largest domain on which $f$ has an inverse") become a matter of method.

## Core ideas

### What is a function?

A **function** from a set $A$ (the domain) to a set $B$ assigns to each element $x\in A$ **exactly one** element $f(x)\in B$. The key phrase is *exactly one*: an input cannot produce two different outputs. A relation such as $x^{2}+y^{2}=25$ (a circle) is not a function of $x$, because $x=3$ gives both $y=4$ and $y=-4$. In contrast, $y=\sqrt x$, which takes only the non-negative root, is a function.

The **vertical line test** gives a graphical check: if any vertical line meets the graph in more than one point, the graph is not the graph of a function. Several inputs *may* give the same output (as $f(2)=f(-2)=4$ for $f(x)=x^{2}$); it is two outputs for one input that is forbidden.

### Notation

We write $y=f(x)$, read "$f$ of $x$". The IB also uses the mapping notation $f:x\mapsto x^{2}+1$. The letter $x$ is a *dummy variable*: $f(x)=x^{2}+1$, $f(t)=t^{2}+1$ and $f(\square)=\square^{2}+1$ define the same function. Evaluating means *substituting* in place of every $x$, using brackets around negative or compound inputs: for $f(x)=2x^{2}-3x+1$,
$$
f(-2)=2(-2)^{2}-3(-2)+1=15,\qquad f(a+1)=2(a+1)^{2}-3(a+1)+1=2a^{2}+a.
$$
Other letters ($g$, $h$, $p$) name other functions. Do not confuse $f(x)$ with a product $f\times x$.

### Domain

The **domain** is the set of allowed inputs. If no domain is stated, the **natural domain** (also called the maximal domain) is the largest set of real numbers for which the formula gives a real output. Three restrictions arise most often:

1. **Denominators** cannot be zero: $\dfrac1{x^{2}-4}$ requires $x\ne\pm2$.
2. **Square roots** (and other even roots) need a non-negative argument: $\sqrt{2x-6}$ requires $2x-6\ge0$, so $x\ge3$.
3. **Logarithms** need a positive argument: $\ln(5-x)$ requires $5-x>0$, so $x<5$.

When several restrictions apply, the domain is their *intersection*. A domain can also be restricted by the question or by the context: $A(r)=\pi r^{2}$ with $r>0$, because a radius cannot be negative. Domains are written in inequality notation ($-2\le x<5$), interval notation ($[-2,5)$), or set notation ($\{x\in\mathbb{R}:x\ge3\}$). Square brackets include the end point, round brackets exclude it, and infinity always takes a round bracket.

### Range

The **range** is the set of outputs actually attained, $\{f(x):x\in\text{domain}\}$. It is a subset of the codomain. The range depends on the domain, and the same formula can have different ranges for different domains. Methods for finding it:

- **Graph.** Read off the lowest and highest $y$-values (including end points of a restricted domain and whether they are included). A GDC graph with the window set properly is reliable.
- **Completing the square** for a quadratic: $x^{2}-4x+1=(x-2)^{2}-3\ge-3$, so the range on $\mathbb{R}$ is $y\ge-3$.
- **Known shapes.** $2^{x}-3$ has range $y>-3$ (the horizontal asymptote $y=-3$ is never reached); $\dfrac3{x-1}+2$ has range $y\ne2$.
- **Endpoints and turning points** for a restricted domain: on a closed interval, a continuous function's extreme values occur at the end points or at turning points.

Always check whether an end value is attained. A common phrase is "range: $y\ge-3$", not $x\ge-3$, because the range is a set of $y$-values.

### Piecewise functions

A **piecewise function** uses different rules on different parts of the domain. For example
$$
f(x)=\begin{cases}x+2,&x<1,\\ x^{2},&x\ge1.\end{cases}
$$
To evaluate, first decide which rule applies to the input. The pieces must not overlap (otherwise one input would have two outputs), and the whole domain should be covered. The graph may have a jump, which is fine for a function.

### One-to-one functions and inverses

A function is **one-to-one** (injective) if different inputs always give different outputs. Graphically, this is the **horizontal line test**: no horizontal line meets the graph more than once. $f(x)=x^{2}$ on $\mathbb{R}$ fails (since $f(2)=f(-2)$), but $f(x)=2x+3$ passes.

Only a one-to-one function has an **inverse function** $f^{-1}$, which reverses it: $f^{-1}(f(x))=x$ and $f\big(f^{-1}(x)\big)=x$. Consequently
$$
\operatorname{dom}f^{-1}=\operatorname{ran}f,\qquad \operatorname{ran}f^{-1}=\operatorname{dom}f.
$$
The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$, because swapping $x$ and $y$ reflects points in that line. Therefore if $(a,b)$ lies on the graph of $f$, then $(b,a)$ lies on the graph of $f^{-1}$; to find $f^{-1}(7)$ you look for the $x$ for which $f(x)=7$.

If a function is not one-to-one, you can **restrict its domain** to make it so. For $f(x)=x^{2}$, restricting to $x\ge0$ gives the inverse $f^{-1}(x)=\sqrt x$ with domain $x\ge0$. The restriction is a choice (we could have chosen $x\le0$ instead, giving $-\sqrt x$), and a question will often say which to use or ask you to give the *largest* domain. The algebraic method for finding the formula for $f^{-1}$ (swap and solve) is the subject of SL 2.5, and the study of self-inverse functions follows in AHL 2.14.

Be careful with notation: $f^{-1}(x)$ is the inverse function, **not** $\dfrac1{f(x)}$ (the reciprocal), which is written $\big(f(x)\big)^{-1}$.

### Functions in context

In modelling problems the domain is dictated by context. The height of a ball $h(t)=20t-5t^{2}$ makes sense only for $t\ge0$ until it lands at $h=0$, which is at $t=4$, so the domain is $0\le t\le4$, and the range is $0\le h\le20$ (the maximum, at $t=2$, is $40-20=20$). Always state the context domain, and give units.

## Worked examples

### Example 1 (evaluating, 3 marks)

Let $f(x)=2x^{2}-3x+1$. Find $f(-2)$ and $f(a+1)$, simplifying fully.

*Solution.* $f(-2)=2(4)+6+1=15$. $f(a+1)=2(a^{2}+2a+1)-3a-3+1=2a^{2}+4a+2-3a-2=2a^{2}+a$.

Check $f(a+1)$ with $a=1$: $f(2)=8-6+1=3$ and $2+1=3$ ✓.

### Example 2 (natural domain, 6 marks)

Find the largest possible domain of (a) $f(x)=\sqrt{2x-6}$; (b) $g(x)=\dfrac1{x^{2}-4}$; (c) $h(x)=\ln(5-x)$; (d) $k(x)=\dfrac{\sqrt{x+1}}{x-3}$.

*Solution.* (a) $2x-6\ge0$, so $x\ge3$. (b) $x^{2}-4\ne0$, so $x\ne2$ and $x\ne-2$. (c) $5-x>0$, so $x<5$. (d) The numerator needs $x\ge-1$ and the denominator needs $x\ne3$, so the domain is $\{x:x\ge-1,\ x\ne3\}$.

### Example 3 (range of a quadratic, 7 marks)

Let $f(x)=x^{2}-4x+1$. Find the range of $f$ when (a) the domain is $\mathbb{R}$; (b) the domain is $0\le x\le5$; (c) the domain is $3\le x\le5$.

*Solution.* Completing the square, $f(x)=(x-2)^{2}-3$, with a minimum of $-3$ at $x=2$.
(a) The range is $y\ge-3$.
(b) The vertex $x=2$ lies inside $[0,5]$, so the minimum is $-3$. The end values are $f(0)=1$ and $f(5)=6$, and the maximum is the larger, $6$. The range is $-3\le y\le6$.
(c) On $[3,5]$ the function is increasing (it is to the right of the vertex), so the range is from $f(3)=-2$ to $f(5)=6$, i.e. $-2\le y\le6$.

Notice that the same formula has three different ranges; the domain matters.

### Example 4 (ranges from known shapes, 4 marks)

State the range of (a) $f(x)=\dfrac3{x-1}+2$ for $x\ne1$; (b) $g(x)=2^{x}-3$; (c) $h(x)=\sqrt{9-x^{2}}$.

*Solution.* (a) The graph has a horizontal asymptote $y=2$, which is never attained, so $y\ne2$. (b) $2^{x}>0$, so $2^{x}-3>-3$: the range is $y>-3$. (c) The domain is $9-x^{2}\ge0$, i.e. $-3\le x\le3$. The square root takes values between $0$ (at $x=\pm3$) and $3$ (at $x=0$), so the range is $0\le y\le3$ (the upper half of a circle of radius $3$).

### Example 5 (function or not, 4 marks)

State, with a reason, whether each defines $y$ as a function of $x$: (a) $x^{2}+y^{2}=25$; (b) $y=\sqrt x$; (c) $y=|x|$; (d) $x=y^{2}$.

*Solution.* (a) Not a function: $x=3$ gives $y=\pm4$. (b) A function: each $x\ge0$ gives one $y\ge0$. (c) A function: each $x$ gives one $y$. (d) Not a function of $x$: $x=4$ gives $y=\pm2$. (It is a function of $y$.)

### Example 6 (piecewise, 4 marks)

Let $f(x)=\begin{cases}x+2,&x<1,\\x^{2},&x\ge1.\end{cases}$ Find $f(-3)$, $f(1)$ and $f(2)$.

*Solution.* $-3<1$, so $f(-3)=-3+2=-1$. $1\ge1$, so $f(1)=1^{2}=1$. $2\ge1$, so $f(2)=4$.

Note that $f(1)=1$ although the first rule would give $3$: the condition $x<1$ excludes $x=1$.

### Example 7 (restricting a domain, 6 marks)

Let $f(x)=(x-1)^{2}$. (a) Show that $f$ is not one-to-one on $\mathbb{R}$. (b) Restrict the domain so that $f$ has an inverse, and state the domain and range of $f^{-1}$. (c) Find $f^{-1}(9)$.

*Solution.* (a) $f(0)=1$ and $f(2)=1$, so two inputs share an output. (b) Choose $x\ge1$, on which $f$ is increasing and hence one-to-one. The range of $f$ on this domain is $y\ge0$, so $f^{-1}$ has domain $x\ge0$ and range $y\ge1$. (c) $f(x)=9$ means $(x-1)^{2}=9$, so $x-1=3$ (taking the root with $x\ge1$), giving $x=4$. Therefore $f^{-1}(9)=4$. (For the formula, $f^{-1}(x)=1+\sqrt x$.)

### Example 8 (reading an inverse, 3 marks)

Given $f(x)=2x+3$, find $f^{-1}(7)$, and state the domain of $f^{-1}$.

*Solution.* Solving $2x+3=7$ gives $x=2$, so $f^{-1}(7)=2$. Since $f$ has range $\mathbb{R}$, so does the domain of $f^{-1}$, and $f^{-1}(x)=\dfrac{x-3}2$. Check: $\dfrac{7-3}2=2$ ✓.

### Example 9 (equation using a function, 5 marks)

Let $f(x)=x^{2}-4x+1$ for $x\ge2$. Solve $f(x)=5$.

*Solution.* $(x-2)^{2}-3=5$, so $(x-2)^{2}=8$ and $x=2\pm2\sqrt2$. The domain requires $x\ge2$, so only $x=2+2\sqrt2\approx4.83$ is valid.

### Example 10 (domain and range in context, 5 marks)

A ball is thrown so that its height after $t$ seconds is $h(t)=20t-5t^{2}$ metres. State a suitable domain and the corresponding range.

*Solution.* The ball is in flight while $h\ge0$: $20t-5t^{2}=5t(4-t)\ge0$ gives $0\le t\le4$. This is the domain. The vertex is at $t=2$ with $h=40-20=20$, so the range is $0\le h\le20$ (metres).

## Using your GDC

The GDC is the most efficient way to find the **range** of a function. Graph $y=f(x)$ in a window that shows all the turning points and the behaviour at the ends, then use the *minimum* and *maximum* tools to find the extreme $y$-values. For a restricted domain, set the window to that domain or evaluate the end points with a table. To test **one-to-one**, look for any horizontal line that meets the graph twice, or find the turning points. To find $f^{-1}(a)$, solve $f(x)=a$ with the intersection tool: graph $y=f(x)$ and $y=a$. Be careful: the GDC shows the graph of the formula on its natural domain, not on a restricted domain, so check that your solution lies in the restricted domain. You can also plot $y=f(x)$ and $y=x$ together and use a square window to see the symmetry of the graph of the inverse. A table also lets you see the output of a piecewise function if you enter it with logical conditions on models that allow it. Menu names vary by model.

## Common mistakes

1. **Confusing domain and range**, or giving the range in terms of $x$.
2. **Ignoring a restriction** such as $x\ne3$ in $\dfrac{\sqrt{x+1}}{x-3}$.
3. **Reading $f^{-1}(x)$ as $\dfrac1{f(x)}$.**
4. **Giving the range of a quadratic as all reals** or forgetting that a restricted domain changes it.
5. **Forgetting to test end points** of a closed interval when finding a range.
6. **Using $<$ and $\le$ incorrectly**, for instance writing $y\ge-3$ for $2^{x}-3$, which never attains $-3$.
7. **Substituting without brackets** in $f(a+1)$, or $f(-2)$ for $x^{2}$ as $-2^{2}$.
8. **Claiming an inverse exists** for a function that fails the horizontal line test, without restricting the domain.

## Exam technique and command terms

**State the domain** or **state the range** requires only the answer, in inequality or interval notation, but a small sketch will help you get it right. **Find the largest possible domain** requires a justification of each restriction. **Show that $f$ is not one-to-one** needs a counter-example pair or a graph reasoning ("the horizontal line $y=1$ meets the graph twice"). **Find $f^{-1}(a)$** means solve $f(x)=a$. When asked for the domain of $f^{-1}$, give the range of $f$ in the correct form, and for the range of $f^{-1}$, give the domain of $f$.

Always write the final answer in the correct variable: "range: $y\ge-3$" and "domain: $x\ge3$". If a domain is given in the stem, such as $x\ge2$, do not give solutions outside it. In context questions, include units and check that the domain makes physical sense (time cannot be negative and a count is a whole number). A GDC graph can be sketched on paper as part of the answer, with the key points labelled; this earns a method mark for the range even if the final value is slightly off.

## Connections

SL 2.1 gives the linear functions as the simplest example of one-to-one functions: every non-horizontal line is invertible. SL 2.3 and SL 2.4 develop the graphs and features of functions, so that the range can be found by reading features such as vertices and asymptotes. SL 2.5 adds composition and the algebraic method of finding inverses. SL 2.6 and 2.9 introduce quadratics and exponentials, whose domains and ranges are the examples used throughout this chapter, and the inverse of the exponential $2^{x}$ is the logarithm $\log_2x$, with domain and range swapped. AHL 2.14 shows that some functions are their own inverse. In Unit 5, differentiability and integrability depend on domain, the *domain restriction* idea reappears when you invert sine, cosine and tangent, and a change of variable in integration requires an invertible substitution. In Unit 4, a probability density function is a function whose domain is the sample space.

## Check your understanding

1. Given $f(x)=3x^{2}-x$, find $f(-1)$ and $f(2a)$.
2. Find the largest domain of (a) $\sqrt{5-x}$, (b) $\dfrac1{x+3}$ and (c) $\ln(2x-1)$.
3. Find the range of $f(x)=x^{2}+6x+5$ for $x\in\mathbb{R}$.
4. Find the range of $f(x)=x^{2}-2x$ for $-1\le x\le3$.
5. Find the range of $f(x)=5-e^{x}$.
6. Decide whether $x^{2}+y^{2}=9$ and $y=|x|$ define $y$ as a function of $x$.
7. Show that $f(x)=(x-1)^{2}$ is not one-to-one. Give the largest domain of the form $x\ge a$ for which it has an inverse, and state $f^{-1}(x)$ and its domain.
8. Show that $f(x)=x^{3}-x$ is not one-to-one.
9. A ball has height $h(t)=30t-5t^{2}$ metres. State the domain (time in flight) and range.
10. For $f(x)=\begin{cases}2x-1,&x\le2,\\7-x,&x>2,\end{cases}$ find $f(-1)$, $f(2)$ and $f(6)$, and the range of $f$.

### Answers

1. $f(-1)=3+1=4$ and $f(2a)=12a^{2}-2a$.
2. (a) $x\le5$. (b) $x\ne-3$. (c) $2x-1>0$, so $x>\tfrac12$.
3. $(x+3)^{2}-4\ge-4$, so the range is $y\ge-4$.
4. $f(x)=(x-1)^{2}-1$ with vertex at $x=1$ (in the domain), minimum $-1$. The end values are $f(-1)=3$ and $f(3)=3$. The range is $-1\le y\le3$.
5. $e^{x}>0$, so $5-e^{x}<5$: the range is $y<5$.
6. $x^{2}+y^{2}=9$ is not a function (for example $x=0$ gives $y=\pm3$). $y=|x|$ is a function.
7. $f(0)=f(2)=1$, so it is not one-to-one. The largest domain of that form is $x\ge1$. Then $f^{-1}(x)=1+\sqrt x$ with domain $x\ge0$.
8. $f(0)=0$ and $f(1)=0$ (also $f(-1)=0$), so three inputs share one output.
9. $h\ge0$ gives $5t(6-t)\ge0$, so the domain is $0\le t\le6$. The vertex is at $t=3$ with $h=90-45=45$, so the range is $0\le h\le45$.
10. $f(-1)=-3$, $f(2)=3$ and $f(6)=1$. The first piece has range $y\le3$ (for $x\le2$) and the second has $y<5$ (for $x>2$), so the overall range is $y<5$.

## Summary

- A function gives exactly one output for each input; use the vertical line test.
- Natural domain: no zero denominators, no negative square-root arguments, positive arguments of logarithms; combine restrictions by intersection.
- Range: the set of attained $y$-values; use graphs, completing the square, asymptotes, and end points of restricted domains.
- A restricted domain changes the range, and a piecewise function needs the right rule for each input.
- One-to-one (horizontal line test) is needed for an inverse; restrict the domain if necessary.
- $\operatorname{dom}f^{-1}=\operatorname{ran}f$ and $\operatorname{ran}f^{-1}=\operatorname{dom}f$; the graph of $f^{-1}$ is the reflection of $f$ in $y=x$; $f^{-1}(x)$ is not $1/f(x)$.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 2.2. Related facts may appear elsewhere. Justify any method used here.

---

[Functions master guide](/units/functions/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
