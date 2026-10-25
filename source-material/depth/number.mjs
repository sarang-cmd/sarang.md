// Original extensions to the existing lessons. Each entry identifies smaller skills
// that the broad syllabus heading can otherwise conceal.
export const depth = {
  'SL 1.1': {
    skills: ['Normalize a nonzero number and distinguish its sign from its order of magnitude.', 'Multiply and divide quantities by combining powers first, then renormalizing.', 'Round only after calculation; explain how many significant figures the context supports.'],
    why: 'Moving a decimal point does not change a value unless the power of ten compensates for that move. Increasing the significand by a factor of ten requires decreasing the exponent by one. This invariant gives a reliable check when calculator output uses E notation. Two measurements with equal exponents are not necessarily comparable without comparing their significands.',
    edge: 'For division, try $(6.0\\times10^7)/(2.0\\times10^{-2})=3.0\\times10^9$: subtracting exponents means $7-(-2)=9$. Addition is different: $2\\times10^3+3\\times10^2=2.3\\times10^3$, not $5\\times10^5$. Align powers before combining significands. Zero has no unique normalized representation of this kind.',
    connection: 'In a scientific estimate, write the unit beside each intermediate result and ask whether the output is larger or smaller than the starting quantities. A negative exponent means a small scale, not a negative number. This separates arithmetic validity, notation requirements, and the precision of the original measurements.',
  },
  'SL 1.2': {
    skills: ['Model an nth term, including zero or negative common differences.', 'Find a finite sum from endpoints or from the first term and difference.', 'Recover unknown first terms or differences from two observed terms.'],
    why: 'The subscript on a term and the number of intervals are different quantities. From $u_4$ to $u_9$ there are five steps, so subtracting those equations gives $5d$, not $9d$ or $4d$. The pairing argument for the sum works with negative or fractional differences as well as positive ones. Check any recovered sequence by substituting both observed indices.',
    edge: 'A list that begins $11,8,5$ has $d=-3$, hence $u_n=11-3(n-1)$. Term seven is $-7$, but $S_7=7(11-7)/2=14$. A negative last term need not imply a negative sum. If a word problem asks when a running total passes a threshold, solve for an integer $n$ and verify the neighboring term counts.',
    connection: 'Treat $u_n$ as an individual observation and $S_n$ as accumulated output. The identity $u_n=S_n-S_{n-1}$ bridges the two but requires $n\\geq2$ in that difference form. In applications, label the initial observation carefully: “after one year” and “at time zero” lead to different index conventions.',
  },
  'SL 1.3': {
    skills: ['Identify a fixed ratio, including a negative or fractional ratio.', 'Compute an nth term with the correct exponent $n-1$.', 'Sum finitely many terms, treating $r=1$ separately.'],
    why: 'Multiplying a partial sum by $r$ shifts each term one place. Subtracting the shifted sum cancels everything except the first and the term just beyond the end. This explains why the finite-sum formula is valid when $r\\neq1$, even for a negative or large ratio. A table of consecutive quotients can suggest a geometric pattern, but verify all available terms.',
    edge: 'For $u_1=4$ and $r=-2$, the four terms are $4,-8,16,-32$ and sum to $-20$. Using $4(1-(-2)^4)/(1-(-2))=4(-15)/3$ confirms it. Do not change $(-2)^4$ to $-16$ by losing parentheses. If $r=1$, use $S_n=nu_1$ rather than dividing by zero.',
    connection: 'The infinite-series formula is a different claim: a large ratio can have a valid finite sum without having an infinite limit. When a practical model involves depreciation or growth, a geometric term often represents a state at a time, while the geometric series represents cumulative cash or total travel.',
  },
  'SL 1.4': {
    skills: ['Convert a numeric percentage to a decimal rate before modeling.', 'Distinguish annual, monthly and other compounding periods.', 'Solve for present value or compare growth with depreciation.'],
    why: 'Each period acts on the new balance, so repeated percentage changes multiply; adding the original percentage repeatedly models simple interest instead. If the nominal rate is $p$ percent per year and there are $k$ equal periods, the multiplier per period is $1+p/(100k)$ and the exponent over $t$ years is $kt$.',
    edge: 'At $6\\%$ nominal interest compounded quarterly for two years, the factor is $(1+0.06/4)^8$, not $1.06^8$. To find the original deposit from a later value $V$, divide by this factor. A $15\\%$ annual depreciation uses $0.85^t$, not $(-0.15)^t$.',
    connection: 'If prices also rise, a nominal balance and its purchasing power answer different questions. Divide nominal future value by an inflation multiplier only when comparing values in present-day units. Carry full precision until rounding the final monetary value.',
  },
  'SL 1.5': {
    skills: ['Convert between exponential and logarithmic equations.', 'Check the base and argument restrictions before solving.', 'Interpret the logarithm graph as an inverse relationship.'],
    why: 'The base specifies the repeated multiplicative scale and the logarithm asks for its exponent. Since a positive base other than one never produces zero or a negative result, a real logarithm cannot accept those inputs. This domain restriction belongs to the whole argument: $\\log_b(2x-7)$ requires $2x-7>0$, not merely $x>0$.',
    edge: 'To solve $\\log_4(x-1)=\\tfrac12$, first require $x>1$. Convert to $x-1=4^{1/2}=2$, giving $x=3$. Substitute to verify that the argument is $2$. For a base between zero and one the logarithm still exists, but it decreases as its input grows; avoid assuming every log graph is increasing.',
    connection: 'A change-of-base calculation is useful on a calculator, but it cannot rescue an argument outside the real domain. Compare two approaches whenever possible: undo a log by exponentiating for exact powers, or use numerical evaluation only when an exact form is unavailable. Record whether a solution is exact or rounded.',
  },
  'SL 1.6': {
    skills: ['Translate even, odd and divisible statements into integer algebra.', 'Separate an identity proof from a statement about selected examples.', 'Find a counterexample when a universal claim is false.'],
    why: 'The phrases “for all” and “there exists” change what counts as evidence. To prove every integer with a property satisfies a claim, represent an arbitrary member of that class and derive the conclusion. One counterexample suffices to refute a universal assertion, but a list of successful examples proves only those instances. State the allowable integers at the outset.',
    edge: 'For any integer $n$, $n^2+n=n(n+1)$ is even because one of two consecutive integers is even. This argument covers negative integers too; checking $n=1,2,3$ would not. If a claim says every prime is odd, $2$ is a counterexample. Notice that disproof requires a valid member of the domain, not merely a convenient number.',
    connection: 'When writing a proof, audit each equality from left to right and identify which property licenses it. An implication cannot automatically be reversed. After establishing a claim, explain why the final expression meets the definition you started from. This habit prepares for induction and contradiction without confusing their roles.',
  },
  'SL 1.7': {
    skills: ['Simplify products, quotients and powers with their domain conditions.', 'Combine or separate logarithms of products and quotients.', 'Solve exponential or logarithmic equations and reject invalid roots.'],
    why: 'A log rule records how exponents behave under multiplication, not under addition. If both logarithm arguments are positive, their product is positive and the product rule is legitimate. If you combine logs after moving terms, write each original argument condition before discarding a candidate. For real noninteger powers, base restrictions can also matter.',
    edge: 'Solve $\\log_2(x-1)+\\log_2(x+1)=3$. The original domain is $x>1$; combining gives $\\log_2(x^2-1)=3$ and $x^2-1=8$. The algebraic candidates are $x=3$ and $x=-3$, but only $3$ lies in the domain. This is why solving the transformed equation alone is insufficient.',
    connection: 'For an unfamiliar base, $\\log_b x=\\ln x/\\ln b$ works because both sides measure the same exponent, provided $b>0$ and $b\\neq1$. Record the order of operations when using a calculator. A quick substitution in the original equation detects both domain errors and misplaced parentheses.',
  },
  'SL 1.8': {
    skills: ['Check $|r|<1$ before assigning an infinite geometric sum.', 'Relate the sum to limits of finite partial sums.', 'Model a repeated distance or payment without double-counting terms.'],
    why: 'Writing three dots does not make a series convergent. In a nonzero geometric series, the tail of the finite-sum formula disappears only when $r^n\\to0$. Both $r=1$ and $r=-1$ fail that limit for distinct reasons. For negative $r$ with small magnitude, partial sums alternate around their limit; they need not increase monotonically.',
    edge: 'A ball drops $4$ metres, then rises to half its preceding height after every impact. Downward distances total $4+2+1+\\cdots=8$ metres, while upward distances start at $2$ metres and total $4$ metres. Its entire travel is $12$ metres, not $16$: the original drop occurs only once. Each series has $|r|=1/2<1$.',
    connection: 'A term tending to zero is necessary for any convergent infinite sum, but it is not enough by itself. The formula here is justified by the particular geometric structure. If the first term is zero, all terms of a geometric sequence remain zero regardless of a chosen ratio; avoid claiming a nonzero-series criterion covers that degenerate case.',
  },
  'SL 1.9': {
    skills: ['Choose a term by the power of the variable rather than its position alone.', 'Calculate signed coefficients without fully expanding.', 'Use symmetry or Pascal’s relation to check neighboring coefficients.'],
    why: 'An $n$-factor product produces a term each time you choose $r$ factors to supply the second addend. There are $\\binom nr$ ways to make that choice. The general term separates this combinatorial coefficient from the powers of the two addends. If a minus sign is part of the second addend, its power $r$ determines the sign.',
    edge: 'In $(1-2x)^4$, the $x^3$ term has $r=3$. Its coefficient is $\\binom43(-2)^3=4(-8)=-32$. The full $x^4$ term uses $r=4$ and is positive $16x^4$. Checking these adjacent signs avoids a common sign error when a question asks for just one coefficient.',
    connection: 'Do not apply the finite sum with $n$ a negative or noninteger value. Those cases call for a different generalized series and usually a convergence restriction. Before solving a coefficient question, write which of the two factors actually contains $x$; otherwise the equation for $r$ can be reversed.',
  },
  'AHL 1.10': {
    skills: ['Separate ordered arrangements from unordered selections, with or without replacement.', 'Use permutations and combinations under restrictions.', 'Expand rational powers locally and state $|t|<1$ for an infinite binomial series.'],
    why: 'Selecting a committee counts each group once, while seating the same people counts each ordering separately. Restricted problems are often easier by counting a permitted complement than by listing cases. The generalized binomial coefficients use a falling product $n(n-1)\\cdots$, so a noninteger $n$ usually produces infinitely many nonzero terms rather than a finite polynomial.',
    edge: 'Selecting three students from six gives $\\binom63=20$, whereas assigning first, second and third roles gives ${6!}/{3!}=120$. For $(1+3x)^{-1}$, the first terms are $1-3x+9x^2-27x^3+\\cdots$ only while $|3x|<1$, or $-1/3<x<1/3$. The choice count and the power series are separate subskills despite sharing this syllabus code.',
    connection: 'The supplied older notes incorrectly mark permutations as absent from the booklet. In the uploaded 2023 Version 1.0 HL booklet, both the permutation and combination formulas appear on printed page 3. Continue to know which one applies: having a formula does not decide whether order matters.',
  },
  'AHL 1.11': {
    skills: ['Check that a rational function is proper before decomposition.', 'Resolve distinct and repeated linear factors with appropriate numerators.', 'Recombine terms and keep the original excluded values.'],
    why: 'Partial fractions replace one complicated rational expression with several simpler pieces. The denominator factorization determines which numerators are needed: a repeated factor requires a term for every power through its multiplicity. If numerator degree is not lower than denominator degree, polynomial division comes first. Equality is only on the original domain.',
    edge: 'For $1/[x(x+1)]$, write $A/x+B/(x+1)$. Clearing denominators gives $1=A(x+1)+Bx$, so $A=1$ and $B=-1$. Thus the expression is $1/x-1/(x+1)$ for $x\\neq0,-1$. Plugging $x=0$ or $-1$ into the cleared identity is a coefficient technique, not permission to evaluate the original fraction at a pole.',
    connection: 'Once decomposed, simple fractions are easier to integrate or invert algebraically. Multiply the final answer by the common denominator to verify coefficients; this often catches a missing term or a sign mistake. If a factor cannot be broken into real linear factors, it requires an appropriate polynomial numerator rather than a constant.',
  },
  'AHL 1.12': {
    skills: ['Add and multiply in Cartesian form using $i^2=-1$.', 'Divide by multiplying numerator and denominator by the conjugate.', 'Find modulus and describe the location of a complex number in the Argand plane.'],
    why: 'Complex arithmetic behaves like polynomial arithmetic in $i$ except that every $i^2$ is replaced by $-1$. Multiplying by a conjugate produces the positive real denominator $a^2+b^2$ whenever $a+bi\\neq0$. The modulus is a distance from the origin, not the sum of absolute values of the coordinates.',
    edge: 'For $z=2-3i$, the conjugate is $2+3i$ and $z\\overline z=4+9=13$, hence $|z|=\\sqrt{13}$. Dividing $1$ by $z$ gives $(2+3i)/13$. Check by multiplying back: $(2-3i)(2+3i)/13=1$. The point $(2,-3)$ lies in the fourth quadrant, which matters when later choosing an argument.',
    connection: 'Equating two complex numbers means equating real parts and imaginary parts separately. A statement about modulus alone cannot determine the original number because many points lie on the same circle. Move to polar form when multiplication, division or powers would otherwise require repeated Cartesian expansion.',
  },
  'AHL 1.13': {
    skills: ['Find modulus and an argument using the correct quadrant.', 'Translate between Cartesian, trigonometric and Euler forms.', 'Multiply, divide and raise complex numbers to powers through modulus and angle.'],
    why: 'The modulus measures length and an argument measures direction. Angles that differ by $2\\pi k$ describe the same point, so an argument must be qualified by a chosen interval when a principal value is required. Multiplying moduli and adding arguments is a geometric rotation-and-scale rule, not a rule for adding complex numbers.',
    edge: 'For $z=-1+i$, the modulus is $\\sqrt2$ and a principal argument is $3\\pi/4$, not $-\\pi/4$; the point lies in quadrant II. Then $z^2=2e^{3\\pi i/2}=-2i$. Cartesian multiplication $(-1+i)^2=-2i$ independently checks both the sign and angle.',
    connection: 'The notation $e^{i\\theta}$ is a compact name for $\\cos\\theta+i\\sin\\theta$. When returning from a polar answer to $a+bi$, reduce the angle and interpret the signs before using decimals. A modulus cannot be negative; if an algebraic calculation produces one, inspect the prior square-root step.',
  },
  'AHL 1.14': {
    skills: ['Use conjugate roots to construct real-coefficient factors.', 'Apply De Moivre’s rule when taking integer powers.', 'List all distinct roots by distributing angles around a full revolution.'],
    why: 'If a polynomial has real coefficients and $a+bi$ is a nonreal root, taking conjugates of the equation shows $a-bi$ is also a root. Their product produces a real quadratic factor. For a complex $n$th-root equation, dividing the argument by $n$ gives several solutions because the original angle can first increase by $2\\pi k$.',
    edge: 'If $2+i$ is a root of a real polynomial, $(x-(2+i))(x-(2-i))=(x-2)^2+1=x^2-4x+5$ divides it. For $z^3=1$, take arguments $0,2\\pi,4\\pi$ before dividing by three, yielding $1,e^{2\\pi i/3},e^{4\\pi i/3}$. Using only principal argument $0$ would miss two roots.',
    connection: 'Counting multiplicity matters when a polynomial is factored but does not create additional distinct positions on the Argand diagram. After finding roots, substitute one directly or apply the power rule to verify its modulus and argument. Do not assume conjugate-pair reasoning for polynomials with nonreal coefficients.',
  },
  'AHL 1.15': {
    skills: ['Prove a sum or divisibility result by induction with four explicit stages.', 'Prove an impossibility by assuming its negation and reaching a contradiction.', 'Disprove a universal statement with one valid counterexample.'],
    why: 'Induction connects a verified starting case to every later integer by a step that holds for an arbitrary $k$. A contradiction instead starts by assuming the opposite of the intended statement. A counterexample reverses neither process: it demonstrates that a universal claim already fails at a specific permitted input. Choose the method from the logical structure, not from how familiar the algebra looks.',
    edge: 'Suppose $1+2+\\cdots+n=n(n+1)/2$. The base case $n=1$ holds. Assuming the formula at $k$, adding $k+1$ gives $k(k+1)/2+(k+1)=(k+1)(k+2)/2$. This is the statement at $k+1$ and completes induction. Merely writing the formula for $k+1$ without deriving it from the hypothesis would leave a gap.',
    connection: 'For a contradiction proof, say precisely which statement is negated. In an irrationality proof, a fraction in lowest terms gives an extra fact about common factors; omitting that assumption invalidates the last contradiction. For a counterexample, check it belongs to the quantified domain before declaring the claim false.',
  },
  'AHL 1.16': {
    skills: ['Solve two or three simultaneous linear equations by controlled elimination.', 'Recognize a unique solution, contradiction or dependent system.', 'Check the solution in every original equation, not just the reduced ones.'],
    why: 'A legal row operation preserves the solution set because it replaces one equation by a consequence obtained using another equation. Elimination may leave a nonzero constant equal to zero, revealing inconsistency, or a row of zeros, revealing dependence. Neither case is fixed by blindly dividing by a vanishing coefficient. Parameter values can change the number of solutions.',
    edge: 'Consider $x+y=4$ and $2x+2y=8$. Doubling the first reproduces the second, so infinitely many pairs $(t,4-t)$ satisfy both. Changing the second right-hand side to $9$ produces $0=1$ after elimination and no solution. Compare both systems before trying to force a unique ordered pair.',
    connection: 'Geometrically two equations in two variables describe lines: they can intersect once, coincide, or be parallel and distinct. In three variables, use planes with analogous possibilities. Keep full precision when technology supplies a numerical solution and substitute back to detect a nearly singular or mistyped system.',
  },
};
