# Laws of exponents and logarithms

> **SL 1.7 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

Exponent laws follow from repeated multiplication and extend consistently to real exponents for positive bases. Log rules translate products into sums because multiplying powers adds exponents. This is a transformation tool, not permission to split every expression inside a log.

## Formula, meaning and conditions

$a^ma^n=a^{m+n}$ and $(a^m)^n=a^{mn}$ for $a>0$ when real exponents are involved. For $x,y>0$, $\log_b(xy)=\log_b x+\log_b y$ and $\log_b(x/y)=\log_b x-\log_b y$; $\log_b(x^r)=r\log_b x$.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists laws of logarithms and change of base under SL 1.7. Derive and justify all other steps and conditions.

## Worked example

Solve $\log_2(8x)=5$. First require $x>0$. Exponentiate: $8x=2^5=32$, hence $x=4$. Alternatively $\log_2(8x)=\log_2 8+\log_2 x=3+\log_2 x$, so $\log_2 x=2$ and $x=4$. Verify $8(4)=32$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Simplify products, quotients and powers with their domain conditions.
2. Combine or separate logarithms of products and quotients.
3. Solve exponential or logarithmic equations and reject invalid roots.

## Why the method works

A log rule records how exponents behave under multiplication, not under addition. If both logarithm arguments are positive, their product is positive and the product rule is legitimate. If you combine logs after moving terms, write each original argument condition before discarding a candidate. For real noninteger powers, base restrictions can also matter.

## A contrasting worked route

Solve $\log_2(x-1)+\log_2(x+1)=3$. The original domain is $x>1$; combining gives $\log_2(x^2-1)=3$ and $x^2-1=8$. The algebraic candidates are $x=3$ and $x=-3$, but only $3$ lies in the domain. This is why solving the transformed equation alone is insufficient.

## Transfer and validation

For an unfamiliar base, $\log_b x=\ln x/\ln b$ works because both sides measure the same exponent, provided $b>0$ and $b\neq1$. Record the order of operations when using a calculator. A quick substitution in the original equation detects both domain errors and misplaced parentheses.

## Exam lens

Paper 1 style: write domains before manipulating logs; Paper 2 may require numerical values through change of base. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

There is no general rule $\log(x+y)=\log x+\log y$. The product rule applies only to multiplication.

## Try it yourself

Solve $\log_3 x+\log_3 9=4$.

## Checked answer

$\log_3 x+2=4$, so $x=3^2=9>0$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
