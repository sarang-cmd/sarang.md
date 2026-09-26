# Arithmetic sequences and series

> **SL 1.2 · AA SL foundation (also studied at HL)** · Original Sarang.md course lesson, not an IB publication.

## Understand the idea

An arithmetic sequence changes by the same amount at every step. The term index counts the number of moves from the first term: term $n$ is reached after $n-1$ additions of the common difference. A series asks for the sum, not the last term.

## Formula, meaning and conditions

$u_n=u_1+(n-1)d$ and $S_n=\frac n2[2u_1+(n-1)d]=\frac n2(u_1+u_n)$. These formulas assume terms are indexed from $1$ and the difference $d$ is constant. Reversing the list pairs each first term with a last term and explains the sum formula.

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 2 (PDF p. 4), lists arithmetic nth term and finite sum under SL 1.2. Derive and justify all other steps and conditions.

## Worked example

Suppose $u_4=14$ and $u_9=34$. Subtract $u_1+3d=14$ from $u_1+8d=34$ to obtain $5d=20$, so $d=4$ and $u_1=2$. Then $S_{12}=\frac{12}{2}[2(2)+11(4)]=6(48)=288$. Check: $u_{12}=46$ and $12(2+46)/2=288$.

## Smaller skills within this topic

Practise each skill separately, then combine them in problems:

1. Model an nth term, including zero or negative common differences.
2. Find a finite sum from endpoints or from the first term and difference.
3. Recover unknown first terms or differences from two observed terms.

## Why the method works

The subscript on a term and the number of intervals are different quantities. From $u_4$ to $u_9$ there are five steps, so subtracting those equations gives $5d$, not $9d$ or $4d$. The pairing argument for the sum works with negative or fractional differences as well as positive ones. Check any recovered sequence by substituting both observed indices.

## A contrasting worked route

A list that begins $11,8,5$ has $d=-3$, hence $u_n=11-3(n-1)$. Term seven is $-7$, but $S_7=7(11-7)/2=14$. A negative last term need not imply a negative sum. If a word problem asks when a running total passes a threshold, solve for an integer $n$ and verify the neighboring term counts.

## Transfer and validation

Treat $u_n$ as an individual observation and $S_n$ as accumulated output. The identity $u_n=S_n-S_{n-1}$ bridges the two but requires $n\geq2$ in that difference form. In applications, label the initial observation carefully: “after one year” and “at time zero” lead to different index conventions.

## Exam lens

Paper 1 style: set up two term equations before eliminating. Show why your answer is a sum rather than a term. This is a practice lens, not a prediction of an examination question.

## A mistake worth catching

Replacing $n-1$ with $n$ gives an incorrect first term when $n=1$. Substitute $n=1$ as a quick diagnostic.

## Try it yourself

If $u_1=5$ and $d=-2$, find $u_8$ and $S_8$.

## Checked answer

$u_8=5+7(-2)=-9$ and $S_8=8(5-9)/2=-16$.

---

[Number & Algebra master guide](/units/number-and-algebra/master-guide) · [Course writing and verification guide](/units/number-and-algebra/content-writing-guide) · [Booklet cross-check](/units/number-and-algebra/formula-booklet-audit) · [Browse original paper practice](/practice)
