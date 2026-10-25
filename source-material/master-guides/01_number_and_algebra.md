# Number and Algebra | A method-first master guide

> **AA SL foundations and AA HL extensions.** Original Sarang.md teaching material. The 16 code-specific lessons remain separate. This guide connects them and is not an IB publication or an exam forecast.

## A map of the strand

Number and Algebra asks what stays constant when a quantity changes. In an arithmetic sequence the **difference** is constant: $u_n=u_1+(n-1)d$. In a geometric sequence the **ratio** is constant: $u_n=u_1r^{n-1}$. Exponential growth and depreciation are geometric change viewed against time. Logarithms invert that change, converting a threshold involving powers into an inequality about time. These are not interchangeable methods. Given terms $4,7,10$, differences are $3$; given $4,8,16$, ratios are $2$. Compute both before choosing a model.

A finite sum has a definite stopping point. Arithmetic pairs yield $S_n=n(u_1+u_n)/2$; multiplying a geometric sum by $r$ and subtracting gives $S_n=u_1(1-r^n)/(1-r)$ for $r\ne1$. If $r=1$, use $S_n=nu_1$. An infinite geometric sum is a **limit**: $S_\infty=u_1/(1-r)$ only when $|r|<1$. No finite partial sum normally reaches that limit exactly. The notation $u_n$ names a term; $S_n$ names an accumulated sum. A question asking what was spent in week $n$ is not asking what had been spent by the end of week $n$.

**Booklet checked:** the learner supplied the 2023 Version 1.0 AA HL booklet. Its number-and-algebra rows are on printed pages 2 and 3 (PDF pages 4 and 5); the permutations and combinations row is on printed page 3. Derivations, restrictions and examples here are our teaching work, not quotations from the booklet. See the formula booklet audit for row labels and cautions.

## Worked SL example: two kinds of growth

A sequence begins with $160$ and halves each step. The fourth term is $u_4=160(1/2)^3=20$. The first four terms sum to $160+80+40+20=300$. The formula checks this: $S_4=160[1-(1/2)^4]/(1-1/2)=160(15/16)/(1/2)=300$. If the pattern continued forever, $S_\infty=160/(1-1/2)=320$. The missing $20$ between $S_4$ and the infinite limit is the total of the remaining tail, not a fifth term. Here $u_5=10$, and its own infinite tail is $10/(1-1/2)=20$, confirming the interpretation.

For logarithmic equations, state the domain **before** combining terms. Solve $\log_2(x-1)+\log_2(x+2)=3$. Both arguments must be positive, so $x>1$. The product law then gives $\log_2[(x-1)(x+2)]=3$, hence $(x-1)(x+2)=8$ and $x^2+x-10=0$. The two algebraic roots are $(-1\pm\sqrt{41})/2$; only $(-1+\sqrt{41})/2$ exceeds $1$. The other is not a logarithmic solution. Substituting the accepted root makes the product of the two log arguments equal to $8$, so the sum is indeed $3$.

## HL extension: order, proof and complex numbers

For counting, first decide whether the roles or positions are distinguishable. Filling three labeled roles from eight distinct people gives $8\cdot7\cdot6=336$ assignments; choosing an unlabeled group of three gives $\binom83=56$. The factor of $3!=6$ between them counts rearrangements of each chosen group. If two specified people must stand together among six people, regard the pair as one block: five objects have $5!$ orders and the pair has $2!$ internal orders, giving $5!\cdot2!=240$. State which objects are being arranged rather than writing a factorial without a reason.

A proof needs its domain and a valid implication. To show that the first $n$ positive odd integers sum to $n^2$, check $n=1$. Assume the claim through $k$, then add $2k+1$ to obtain $k^2+2k+1=(k+1)^2$. That establishes the next case, and induction completes the claim for positive integers. A counterexample instead disproves a false universal statement: $x=1/2$ refutes $x^2\geq x$ for every real $x$. A numerical pattern cannot replace either argument.

A complex number $z=a+bi$ also has modulus $r=\sqrt{a^2+b^2}$ and, for $z\ne0$, polar form $re^{i\theta}$. Quadrant information chooses $\theta$. Consider $z=-1+i\sqrt3$. Its modulus is $2$, and its argument in $[0,2\pi)$ is $2\pi/3$, not the principal angle returned by applying $\arctan$ without checking signs. Thus $z=2e^{2\pi i/3}$ and $z^3=8e^{2\pi i}=8$. The three roots of $w^3=8$ are $2e^{2\pi ik/3}$ for $k=0,1,2$. They are distinct and include $2$ and $-1\pm i\sqrt3$. Conjugate roots must occur in pairs when the **polynomial has real coefficients**, not merely because a number happens to be complex.

For a noninteger binomial exponent, factor an expression into $A(1+t)^\alpha$ before expanding, and translate $|t|<1$ back to the variable. For instance, $(1-2x)^{-1}=1+2x+4x^2+\cdots$ in the usual open interval $|x|<1/2$. A positive integer exponent instead produces a finite expansion. A separate endpoint analysis is needed if the question asks about convergence on a closed interval.

## Exam lens and common wrong turns

Paper 1 style emphasizes exact algebra, visible proof steps, correct domains and choosing a method before a calculator. Paper 2 style may call for financial compounding or a threshold solved numerically. Paper 3 style might connect recurrence, limiting totals and a decision about the first week above a threshold. The reference to a paper describes **original practice style**, not predicted examination content. Match calculator permissions to the actual paper and learner's session.

- Using $u_1+nd$ instead of $u_1+(n-1)d$ fails immediately at $n=1$.
- Applying $S_\infty$ to a ratio such as $r=1.05$ invents a finite total for a divergent series.
- Dividing an inequality by $\ln r<0$ without reversing its sign chooses the wrong first whole year.
- Multiplying a financial percentage twice by $1/100$ changes the rate. Write either decimal annual rate $i$ or numeric percentage $p$, with a clear conversion.
- A modulus is a nonnegative distance; $|a+bi|$ is not $a+b$. A complex argument at $z=0$ is undefined.

## Check yourself

If $u_1=6$ and $d=-2$, the sixth arithmetic term is $6+5(-2)=-4$. If a geometric model starts at $50$ and has ratio $0.8$, its eventual sum is $50/(1-0.8)=250$ because $|0.8|<1$. If $\log_3(x-2)=2$, the domain is $x>2$ and the solution is $x=11$. For more varied tasks, open the code-specific lessons and the independently authored Paper 1, 2 and 3 practice bank.
