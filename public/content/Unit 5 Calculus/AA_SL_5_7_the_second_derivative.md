# The second derivative

> **SL 5.7 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

The second derivative measures how the first derivative changes. Its sign describes concavity locally: upward for positive values, downward for negative ones. A zero second derivative is only a candidate for a change in concavity.

## Formula, meaning and conditions

$f''(x)=d(f'(x))/dx$. At a stationary point $f'(a)=0$, $f''(a)>0$ indicates a local minimum and $f''(a)<0$ a local maximum; when $f''(a)=0$, the test is inconclusive.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 5.7. Related facts may appear elsewhere. Justify any method used here.

## Worked example

For $f(x)=x^4-2x^2$, $f'(x)=4x^3-4x$ and $f''(x)=12x^2-4$. At $x=0$, the first derivative is zero and $f''(0)=-4<0$, so $(0,0)$ is a local maximum. At $x=1$, $f'(1)=0$ and $f''(1)=8>0$, so $(1,-1)$ is a local minimum.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Differentiate twice with consistent notation.
2. Use $f''$ to analyze concavity where its sign is known.
3. Identify when an inflection test needs a sign change, not merely a zero.

## Why the method works

The second derivative measures how the first derivative changes. A positive second derivative corresponds to a rising gradient and upward concavity; a negative one to a falling gradient. An inflection point changes concavity. Solving $f''=0$ only finds candidates, since a zero can occur without a sign change.

## A contrasting worked route

For $f(x)=x^4$, $f''(x)=12x^2$ is zero at $0$ but positive on both sides, so $(0,0)$ is not an inflection. For $g(x)=x^3$, $g''(x)=6x$ changes sign at $0$, giving an inflection. Both functions have a horizontal tangent there, showing why one derivative condition is insufficient.

## Transfer and validation

In motion, position differentiated twice gives acceleration, with units of distance per time squared. Concavity on a graph is a mathematical shape statement, not necessarily a physical acceleration unless the horizontal variable is time and the vertical variable is position.

## Exam lens

Paper 1 style: evaluate both $f'$ and $f''$ at each candidate before classifying it. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

$f''(a)=0$ does not prove an inflection. Check whether concavity changes on either side.

## Try it yourself

Find the second derivative of $f(x)=x^3+2x$.

## Checked answer

$f'(x)=3x^2+2$ and $f''(x)=6x$.

---

[Calculus master guide](/units/calculus/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
