# IB AA HL — Master Guide: Sequences & Series, Counting, Binomial Expansion

**Unit test format:** Full IB-style Paper 1 (1 hour, no calculator) tomorrow Friday + Paper 2 (1 hour, calculator) Monday.
**Your goal:** Full marks. No basic-concept losses. Teacher reuses old test questions — old tests are gold.

---

## 1. SYLLABUS MAP (every sub-topic you're responsible for)

### A. Sequences & Series (SL 1.2, 1.3)
1. **Language of sequences** — terms, general term \(u_n\), recursive vs explicit definitions, difference between a sequence and a series.
2. **Sigma notation** — writing/expanding/evaluating \(\sum\), changing limits, sum of a constant, splitting sums.
3. **Arithmetic sequences & series**
   - Identifying common difference \(d\)
   - nth term formula
   - Sum of first \(n\) terms (two forms)
   - Finding \(n\), \(d\), \(u_1\) from given conditions (simultaneous equations)
4. **Geometric sequences & series**
   - Identifying common ratio \(r\)
   - nth term formula
   - Sum of first \(n\) terms (finite)
   - **Infinite geometric series** — convergence condition \(|r|<1\), sum to infinity
5. **Applications**
   - Real-world modeling: population growth/decay, savings, depreciation, compound interest
   - Distinguishing whether a real scenario is arithmetic, geometric, or neither
   - Mixed problems: e.g., "the 3rd, 5th, 9th terms of an AP form a GP" — combining both topics

### B. Counting Principles (AHL 1.10) — HL ONLY
1. **Factorial notation** \(n!\) — definition, \(0! = 1\), simplifying factorial expressions/ratios
2. **Fundamental Counting Principle (FCP)** — multiplying independent choice stages
3. **Permutations** — ordered arrangements, \({}^nP_r\), arrangements with repetition, arrangements with restrictions (fixed positions, "must sit together," "must not sit together")
4. **Combinations** — unordered selections, \({}^nC_r\)
5. **Mixed counting problems** — combining FCP + permutations + combinations in one question (e.g., choosing a committee then arranging a subset)

### C. Binomial Theorem (SL 1.9 + AHL 1.10/1.11 extension)
1. **Pascal's triangle** and its link to \({}^nC_r\)
2. **Binomial expansion for positive integer \(n\)** — full expansion of \((a+b)^n\)
3. **General term formula** \(T_{r+1}\) — finding a *specific* term, coefficient, or constant term without expanding everything
4. **Solving for unknowns** inside binomial expressions (e.g., find \(k\) given a coefficient)
5. **HL extension: fractional/negative index** — \((1+x)^n\) for \(n \in \mathbb{Q}\), validity condition \(|x| < 1\), approximation questions

---

## 2. FORMULAS — What's in the booklet vs. what you must know cold

### In the Formula Booklet (you don't need to memorize, but must know how/when to use)
| Formula | Meaning |
|---|---|
| \(u_n = u_1 + (n-1)d\) | nth term, arithmetic |
| \(S_n = \dfrac{n}{2}(2u_1+(n-1)d)\) or \(S_n=\dfrac{n}{2}(u_1+u_n)\) | sum of AP |
| \(u_n = u_1 r^{n-1}\) | nth term, geometric |
| \(S_n = \dfrac{u_1(r^n-1)}{r-1} = \dfrac{u_1(1-r^n)}{1-r}\), \(r\neq1\) | sum of finite GP |
| \(S_\infty = \dfrac{u_1}{1-r}\), \(|r|<1\) | sum to infinity |
| \(FV = PV\left(1+\dfrac{r\%}{100k}\right)^{kn}\) | compound interest |
| \({}^nC_r = \dfrac{n!}{r!(n-r)!}\) | combinations |
| \((a+b)^n = \sum\limits_{r=0}^{n} \binom{n}{r} a^{n-r}b^r\), \(n\in\mathbb{N}\) | binomial expansion |
| \((1+x)^n = 1+nx+\dfrac{n(n-1)}{2!}x^2+\dfrac{n(n-1)(n-2)}{3!}x^3+\cdots\), \(n\in\mathbb{Q}, |x|<1\) | generalized binomial series |

### NOT in the booklet — memorize these cold
- \({}^nP_r = \dfrac{n!}{(n-r)!}\) (permutations — **not printed in the booklet**, must know it)
- \(0! = 1\)
- The **general term**: \(T_{r+1} = \binom{n}{r}\,a^{n-r}\,b^r\) (the booklet gives the full expansion but you must know how to isolate one term)
- FCP: if a task has independent stages with \(m_1, m_2, \dots\) options each, total ways \(= m_1 \times m_2 \times \cdots\)
- Ordered → permutation. Unordered → combination. (Decision rule, not a formula, but you must apply it instantly.)

---

## 3. QUESTION TYPES YOU WILL SEE (with the exact move for each)

### Sequences & Series
- **"Find u_n / d / r / n given two terms"** → set up simultaneous equations using the nth term formula, solve by substitution/elimination.
- **"Find the sum of the first n terms"** → identify AP or GP first (check for constant difference vs constant ratio), pick correct \(S_n\) formula.
- **"Sigma notation — evaluate or convert"** → write out the first few terms to confirm it's arithmetic/geometric, identify \(u_1\), \(d\) or \(r\), and number of terms (careful with limits, e.g., \(\sum_{k=3}^{10}\) has 8 terms, not 10).
- **"Does the series converge? Find S∞"** → always check \(|r|<1\) explicitly before applying the formula — examiners award a mark just for stating the condition.
- **"Context/application problem"** (savings, salary increase, ball bounce height) → translate the story into AP or GP language first; identify what represents \(u_1\), and whether growth is additive (AP) or multiplicative (GP).
- **"Mixed AP/GP problem"** → e.g. three terms of an AP also form a GP — write both conditions as equations and solve simultaneously.

### Counting
- **"Simplify a factorial expression"** (e.g., \(\dfrac{n!}{(n-2)!}\)) → expand as a product and cancel; this is likely your weak spot — see the drill section below.
- **"How many ways can X happen?"** → first ask: *does order matter?* If yes → permutation or direct FCP multiplication. If no → combination.
- **"Arrangement with a restriction"** (e.g., "two people must sit together," "must not be adjacent," "fixed position") → treat the "together" pair as a single block, or count total minus the restricted cases (complementary counting).
- **"Selection then arrangement" (mixed)** → combination to choose the group, multiplied by permutation to arrange them if order then matters (e.g., choosing 3 people for a committee of president/secretary/treasurer).
- **"Probability using counting"** → number of favorable outcomes (via nCr or nPr) divided by total outcomes.

### Binomial Theorem
- **"Expand \((a+b)^n\) fully"** → use \(\sum \binom{n}{r}a^{n-r}b^r\), watch signs carefully when \(b\) is negative.
- **"Find the coefficient of \(x^k\)" or "find the term independent of x (constant term)"** → use \(T_{r+1}=\binom{n}{r}a^{n-r}b^r\), write the power of \(x\) as an expression in \(r\), set it equal to \(k\) (or 0 for constant term), solve for integer \(r\), then substitute back.
- **"Find an unknown constant given a coefficient"** → set up the general term equation, solve for the unknown (often quadratic — check both roots make sense, e.g. reject negative if context requires positive).
- **"Generalized binomial expansion for fractional/negative n"** → apply the extended series, state the validity condition \(|x|<1\) explicitly (mark is often given specifically for this), and note this formula never terminates.
- **"Approximate a value using binomial expansion"** → expand a few terms of \((1+x)^n\) with a small \(x\), substitute, and evaluate — common in Paper 2 with GDC to verify.

---

## 4. FACTORIAL DRILL (your stated weak spot)

Core facts:
- \(n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1\)
- \(0! = 1\) (memorize as fact, not derived)
- \(n! \) is only defined for non-negative integers \(n\)

**The one skill that trips people up:** simplifying ratios of factorials without a calculator, because you need to *expand only as far as necessary* and cancel.

Practice examples to work through by hand right now:
1. \(\dfrac{7!}{5!} = 7\times6 = 42\)
2. \(\dfrac{n!}{(n-1)!} = n\)
3. \(\dfrac{(n+1)!}{n!} = n+1\)
4. \(\dfrac{n!}{(n-3)!} = n(n-1)(n-2)\)
5. \(\dfrac{(n+2)!}{n!} = (n+2)(n+1)\)
6. Solve for \(n\): \(\dfrac{n!}{(n-2)!} = 30\) → \(n(n-1)=30\) → \(n^2-n-30=0\) → \((n-6)(n+5)=0\) → \(n=6\) (reject negative)

**Rule of thumb:** write out only the terms from the top factorial down to one more than the bottom factorial's value — everything else cancels automatically. Do NOT try to compute large factorials fully.

---

## 5. HIGH-RISK "EASY MARKS TO NOT LOSE" CHECKLIST

These are the early-unit basics most likely to quietly cost you marks under time pressure:

- Confusing \(S_n\) (sum of n terms) with \(u_n\) (the nth term itself) — a very common careless error.
- Forgetting that \(\sum_{k=a}^{b}\) has \((b-a+1)\) terms, not \(b\) terms.
- Using the GP sum formula when \(r=1\) is not properly excluded (undefined division).
- Forgetting to check \(|r|<1\) before using \(S_\infty\) — stating this condition is often a scored step, not just a formality.
- Mixing up \({}^nP_r\) and \({}^nC_r\) — always ask "does order matter?" before choosing.
- Forgetting \(0!=1\) when it appears in a combination/permutation calculation (e.g. \({}^nC_n = \frac{n!}{n!0!}=1\)).
- In binomial expansion, forgetting to include and correctly sign negative terms when \(b<0\) — e.g. expanding \((2x-3)^4\), the alternating signs are a frequent slip.
- Forgetting the validity condition \(|x|<1\) on the generalized binomial series — free mark often missed.
- Not checking that a solved \(r\) or \(n\) value in a binomial "find the term" question is actually a non-negative integer within range \(0 \le r \le n\) — rejecting invalid roots is part of full marks.
- Rounding intermediate values in Paper 2 GDC-based sequence problems instead of carrying exact/more decimal places through to the final answer.

---

## 6. COMMAND TERM AWARENESS (Paper 1 vs Paper 2 style)

- Paper 1 (no calculator): expect clean numbers, algebraic manipulation of sequence formulas, factorial simplification, direct binomial general-term problems, straightforward counting scenarios. Show full algebraic working — method marks matter heavily since there's no calculator to "check."
- Paper 2 (calculator): expect longer context/application problems (financial modeling, real-world growth/decay), problems that may require solving equations numerically on the GDC, and multi-part questions blending sequences + binomial or counting + probability.

---

## 7. FINAL MENTAL CHECKLIST BEFORE WALKING IN

- [ ] Can I instantly tell AP vs GP from a word problem?
- [ ] Can I simplify any factorial ratio without a calculator?
- [ ] Can I decide permutation vs combination in under 5 seconds?
- [ ] Do I state \(|r|<1\) or \(|x|<1\) whenever relevant, even if it feels obvious?
- [ ] Do I check that solved values of \(n\) or \(r\) make contextual sense (positive integers, within range)?
- [ ] Have I reviewed my last two tests (2, 1, 3) and understood *why* each mark was lost?
