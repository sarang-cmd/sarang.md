// Independently written teaching rubrics, not official IB mark schemes.
// Rows are [method/accuracy/reasoning, teaching note, suggested points].
// Checks contain final quantities only. They cannot assess proof or method.
const row = (code, text, marks) => [code, text, marks];
const answer = (label, value, tolerance) => ({ label, value, ...(tolerance === undefined ? {} : { tolerance }) });

export const guides = {
  '1-1': {
    scheme: [
      row('M', 'Use the first three binomial terms: \\(\\binom{11}{j}(-2x)^j\\) for \\(j=0,1,2\\).', 2),
      row('A', 'Simplify to \\(\\boxed{1-22x+220x^2}\\).', 2),
    ], checks: [answer('Coefficient of x', -22), answer('Coefficient of x²', 220)],
  },
  '1-2': {
    scheme: [
      row('M', 'Write \\(a+7d=8\\) and \\(S_8=4(2a+7d)=8\\).', 2),
      row('A', 'Solve \\(2a+7d=2\\): \\(\\boxed{a=-6,\\ d=2}\\).', 2),
      row('R', 'Check \\(u_8=-6+7(2)=8\\) and \\(S_8=4(-12+14)=8\\).', 1),
    ], checks: [answer('First term a', -6), answer('Common difference d', 2)],
  },
  '1-3': {
    scheme: [
      row('M', 'Divide consecutive terms: \\(r=(-2/3)/2=\\boxed{-1/3}\\).', 2),
      row('A', 'Since \\(|r|<1\\), \\(S_\\infty=2/(1+1/3)=\\boxed{3/2}\\).', 2),
    ], checks: [answer('Part (a): common ratio', -1/3), answer('Part (b): infinite sum', 3/2)],
  },
  '1-4': {
    scheme: [
      row('M', 'Choosing \\(j\\) reciprocal terms gives exponent \\(2(10-j)-3j=20-5j\\); set it to zero, so \\(j=4\\).', 2),
      row('M', 'Form the constant coefficient \\(\\binom{10}{4}2^6(1/2)^4\\).', 2),
      row('A', 'The term independent of \\(x\\) is \\(\\boxed{840}\\).', 1),
    ], checks: [answer('Constant term', 840)],
  },
  '1-5': {
    scheme: [
      row('M', 'Use \\(a+9d=16\\) and \\(S_{25}=25(a+12d)=100\\).', 2),
      row('A', 'Solve for \\(a=52\\) and \\(d=-4\\).', 2),
      row('M', 'Set \\(u_k=52-4(k-1)=0\\).', 1),
      row('A', 'Therefore \\(\\boxed{k=14}\\).', 1),
    ], checks: [answer('Index k', 14)],
  },
  '1-6': {
    scheme: [
      row('M', 'Divide the terms to get \\(r^2=u_8/u_6=4\\); positivity rules out a negative ratio.', 2),
      row('A', '\\(\\boxed{r=2}\\).', 1),
      row('M', 'Back-substitute \\(u_1=u_6/r^5=(1.6\\times10^5)/32\\).', 2),
      row('A', '\\(\\boxed{u_1=5\\times10^3}\\).', 1),
    ], checks: [answer('Part (a): ratio r', 2), answer('Part (b): first term', 5000)],
  },
  '1-7': {
    scheme: [
      row('M', 'The coefficient of \\(x^5\\) in \\((x+k)^7\\) is \\(\\binom{7}{2}k^2=21k^2\\).', 2),
      row('M', 'Equate \\(21k^2=63\\), so \\(k^2=3\\).', 1),
      row('A', 'Both real solutions are needed: \\(\\boxed{k=\\pm\\sqrt3}\\).', 2),
    ], checks: [answer('Positive value of k', Math.sqrt(3)), answer('Negative value of k', -Math.sqrt(3))],
  },
  '1-8': {
    scheme: [
      row('M', 'The quarterly rate is \\(k=0.04/4=\\boxed{1/100}\\).', 1),
      row('A', '\\((1+x)^4=1+4x+6x^2+4x^3+x^4\\).', 1),
      row('M', 'Use \\(1000(1.01)^4=1040.60401\\).', 1),
      row('A', 'To the nearest dinar, \\(\\boxed{1041}\\).', 2),
    ], checks: [answer('Part (a): quarterly rate k', 0.01), answer('Part (c): nearest dinar', 1041)],
  },
  '1-9': {
    scheme: [
      row('M', 'Write \\(a=76(1-r)=36(1-r^3)\\) using both infinite-sum formulas.', 2),
      row('M', 'As \\(|r|<1\\), divide by \\(1-r\\): \\(76=36(1+r+r^2)\\).', 2),
      row('A', 'Solving gives \\(r=2/3\\) or \\(r=-5/3\\).', 2),
      row('R', 'Only \\(\\boxed{r=2/3}\\) has \\(|r|<1\\) and thus admits a sum to infinity.', 1),
    ], checks: [answer('Convergent ratio r', 2/3)],
  },
  '1-10': {
    scheme: [
      row('M', 'Substitute \\(n=4,5\\): \\(16p-4q=40\\) and \\(25p-5q=65\\).', 2),
      row('A', '\\(\\boxed{p=3,\\ q=2}\\).', 3),
      row('M', 'Use \\(u_5=S_5-S_4\\).', 1),
      row('A', '\\(\\boxed{u_5=65-40=25}\\).', 1),
    ], checks: [answer('Part (a): p', 3), answer('Part (a): q', 2), answer('Part (b): fifth term', 25)],
  },
  '1-11': {
    scheme: [
      row('M', 'Compare the \\(x^2\\) coefficients: \\(\\binom n2 k^2=28k^2\\). As \\(nk=12\\), \\(k\\ne0\\).', 2),
      row('A', '\\(\\binom n2=28\\) gives \\(\\boxed{n=8}\\).', 1),
      row('M', 'From the linear coefficient, \\(nk=12\\).', 1),
      row('A', '\\(\\boxed{k=3/2}\\).', 1),
    ], checks: [answer('Exponent n', 8), answer('Constant k', 1.5)],
  },
  '1-12': {
    scheme: [
      row('M', 'Expand with the binomial theorem and combine powers of \\(x\\).', 2),
      row('A', '\\((x-2/x)^4=x^4-8x^2+24-32x^{-2}+16x^{-4}\\).', 1),
      row('M', 'In \\((2x^2+1)\\) times this expansion, the constant contributions are \\(2x^2(-32x^{-2})\\) and \\(1(24)\\).', 1),
      row('A', 'Constant term \\(\\boxed{-40}\\).', 1),
    ], checks: [answer('Part (b): constant term', -40)],
  },
  '1-13': {
    scheme: [
      row('M', 'Use \\(S_k/S_\\infty=1-r^k=1/2\\), giving \\(r^k=1/2\\).', 2),
      row('A', 'Since \\(u_{k+1}=u_1r^k=1/16\\), \\(\\boxed{u_1=1/8}\\).', 2),
      row('M', '\\(u_{2k+1}=u_1r^{2k}=u_1(r^k)^2\\).', 1),
      row('A', '\\(\\boxed{u_{2k+1}=1/32}\\).', 1),
    ], checks: [answer('Part (a): first term', 1/8), answer('Part (b): term', 1/32)],
  },
  '1-14': {
    scheme: [
      row('A', 'First four terms: \\(1+nx+\\frac{n(n-1)}2x^2+\\frac{n(n-1)(n-2)}6x^3\\).', 1),
      row('M', 'Consecutive arithmetic coefficients satisfy \\(n+\\binom n3=2\\binom n2\\).', 2),
      row('A', 'Rearrange to \\(n(n^2-9n+14)=n(n-7)(n-2)=0\\).', 2),
      row('R', 'With \\(n\\ge3\\), conclude \\(\\boxed{n=7}\\).', 1),
    ], checks: [answer('Part (b): exponent n', 7)],
  },
  '1-15': {
    scheme: [
      row('M', 'Use \\(\\binom4j 2^{4-j}x^j\\), for \\(j=0,\\ldots,4\\).', 2),
      row('A', '\\((2+x)^4=16+32x+24x^2+8x^3+x^4\\).', 2),
      row('M', 'Take \\(x=0.1\\), or equivalently compute \\(21^4/10^4\\).', 1),
      row('A', '\\(\\boxed{(2.1)^4=19.4481}\\).', 2),
    ], checks: [answer('Part (b): (2.1)^4', 19.4481, 0.00001)],
  },
  '1-16': {
    scheme: [
      row('M', 'From \\(27/(1-r)=81/2\\), obtain \\(1-r=2/3\\).', 1),
      row('A', '\\(\\boxed{r=1/3}\\).', 1),
      row('M', 'Now \\(u_2=9\\) and \\(u_4=1\\). Hence \\(v_1=13\\), \\(d=(1-9)/2=-4\\).', 2),
      row('M', '\\(\\sum_{n=1}^{N}v_n=\\frac N2(26-4(N-1))=N(15-2N)>0\\).', 2),
      row('A', 'The largest positive integer satisfying \\(N<7.5\\) is \\(\\boxed{N=7}\\).', 1),
    ], checks: [answer('Part (a): ratio', 1/3), answer('Part (b): greatest N', 7)],
  },
  '1-17': {
    scheme: [
      row('Part a', 'Generalized binomial expansion: \\(\\sqrt{1+5x}=1+\\frac52x-\\frac{25}8x^2+\\frac{125}{16}x^3+\\cdots\\), valid for \\(|5x|<1\\).', 4),
      row('Part b', 'Multiply \\((1+px)(1-qx+q^2x^2+\\cdots)\\) to obtain \\(1+(p-q)x+(q^2-pq)x^2+\\cdots\\).', 3),
      row('Part c', 'Match \\(p-q=5/2\\) and \\(-q(p-q)=-25/8\\), so \\(\\boxed{q=5/4}\\) and \\(\\boxed{p=15/4}\\).', 4),
      row('Part d', 'For \\(\\sqrt{1.2}\\), take \\(x=1/25\\): \\(\\boxed{23/21}\\). For \\(\\sqrt5/2=\\sqrt{5/4}\\), take \\(x=1/20\\): \\(19/17\\). The latter has larger \\(|x|\\), so truncation and rational approximation error are larger.', 6),
    ], checks: [answer('Part (c): q', 5/4), answer('Part (c): p', 15/4), answer('Part (d)(i): rational approximation', 23/21, 0.00001)],
  },
  '2-1': {
    scheme: [
      row('M', 'Selecting \\(j\\) reciprocal terms gives \\(x^{24-3j}\\). For a constant set \\(j=8\\).', 2),
      row('M', 'Evaluate \\(\\binom{12}{8}4^4(-3/2)^8\\).', 2),
      row('A', 'Constant term \\(\\boxed{3\\,247\\,695}\\).', 1),
    ], checks: [answer('Constant term', 3247695)],
  },
  '2-2': {
    scheme: [
      row('M', 'A term with \\(j\\) reciprocal factors has power \\(x^{5-2j}\\); set \\(5-2j=1\\) to get \\(j=2\\).', 2),
      row('A', 'Coefficient \\(\\binom52 3^3(-2)^2=\\boxed{1080}\\).', 2),
    ], checks: [answer('Coefficient of x', 1080)],
  },
  '2-3': {
    scheme: [
      row('M', 'Take the \\(j=3\\) binomial term: \\(\\binom63 2^3(-3x/2)^3\\).', 2),
      row('M', 'Compute its signed numerical coefficient before multiplying by \\(x^3\\).', 2),
      row('A', 'Coefficient of \\(x^3\\) is \\(\\boxed{-540}\\).', 2),
    ], checks: [answer('Coefficient of x³', -540)],
  },
  '2-4': {
    scheme: [
      row('M', 'Use \\(ar^2=9\\), \\(a/(1-r)=64\\) and \\(|r|<1\\); substitute \\(a=64(1-r)\\).', 2),
      row('M', 'Factor \\(64r^2(1-r)-9=-(4r-3)(16r^2-4r-3)=0\\). The quadratic roots are irrational and \\(r\\in\\mathbb Q\\).', 2),
      row('A', 'Thus \\(\\boxed{r=3/4,\\ a=16}\\); check \\(16(3/4)^2=9\\).', 1),
    ], checks: [answer('Common ratio r', 3/4), answer('First term a', 16)],
  },
  '2-5': {
    scheme: [
      row('M', 'First and last multiples strictly between 100 and 500 are \\(102\\) and \\(498\\).', 2),
      row('M', 'There are \\(n=(498-102)/3+1=133\\) terms.', 2),
      row('A', '\\(S=133(102+498)/2=\\boxed{39900}\\).', 2),
    ], checks: [answer('Sum', 39900)],
  },
  '2-6': {
    scheme: [
      row('M', 'Multiples of 7 are \\(14,21,\\ldots,196\\), a total of \\(27\\) terms.', 1),
      row('A', '\\(S=27(14+196)/2=\\boxed{2835}\\).', 1),
      row('R', 'Equivalent sigma form: \\(\\displaystyle\\sum_{k=2}^{28}7k\\).', 2),
      row('M', 'For the second sequence \\(S_n=\\frac n2[2000-6(n-1)]=n(1003-3n)<0\\) requires \\(n>1003/3\\).', 1),
      row('A', 'Least integer \\(\\boxed{n=335}\\).', 1),
    ], checks: [answer('Part (a)(i): sum', 2835), answer('Part (b): least n', 335)],
  },
  '2-7': {
    scheme: [
      row('M', 'Coefficients are \\(\\binom n3 2^{n-3}\\) and \\(\\binom n2 2^{n-2}\\).', 2),
      row('M', 'Their ratio is \\((n-2)/6\\); set \\((n-2)/6=4\\).', 2),
      row('A', '\\(\\boxed{n=26}\\).', 2),
    ], checks: [answer('Exponent n', 26)],
  },
  '2-8': {
    scheme: [
      row('M', 'With \\(j\\) reciprocal factors, the overall exponent is \\(4+5-3j=9-3j\\), so \\(j=3\\).', 2),
      row('M', 'Constant coefficient \\(\\binom53 3^3\\).', 2),
      row('A', '\\(\\boxed{270}\\).', 1),
    ], checks: [answer('Constant term', 270)],
  },
  '2-9': {
    scheme: [
      row('M', 'Use \\(ar(1+r)=96\\) and \\(a=500(1-r)\\), with \\(|r|<1\\).', 2),
      row('M', 'Obtain \\(500r(1-r^2)=96\\), or \\((5r-1)(25r^2+5r-24)=0\\).', 2),
      row('A', 'The valid ratios are \\(\\boxed{r=1/5}\\) and \\(\\boxed{r=(\\sqrt{97}-1)/10}\\). The third root is less than \\(-1\\) and does not converge.', 2),
    ], checks: [answer('First valid ratio r', 1/5), answer('Second valid ratio r', (Math.sqrt(97)-1)/10)],
  },
  '2-10': {
    scheme: [
      row('M', 'From \\(50r^3=86.4\\), obtain \\(r=1.2\\).', 2),
      row('M', 'Use \\(S_n=50(1.2^n-1)/0.2=250(1.2^n-1)\\).', 1),
      row('A', 'Solve \\(1.2^n>135\\); \\(n>26.904\\ldots\\), so least \\(\\boxed{n=27}\\).', 2),
    ], checks: [answer('Smallest n', 27)],
  },
  '2-11': {
    scheme: [
      row('M', 'An \\(x^4\\) term after division by \\(x^2\\) comes from \\(x^6\\) in \\((1+ax)^9\\), giving \\(\\binom96a^6/21=4a^6\\).', 2),
      row('M', 'Equate \\(4a^6=(8/7)a^5\\); since \\(a\\ne0\\), divide by \\(a^5\\).', 2),
      row('A', '\\(\\boxed{a=2/7}\\).', 2),
    ], checks: [answer('Constant a', 2/7)],
  },
  '2-12': {
    scheme: [
      row('M', 'To make \\(x^{-2}\\), pair \\(-1\\) in \\((x-1)^3\\) with \\(x^{-2}\\), or pair \\(-3x^2\\) with \\(x^{-4}\\) in the other factor.', 2),
      row('M', 'The contributions are \\(-\\binom62 2^2=-60\\) and \\(-3\\binom61 2=-36\\).', 2),
      row('A', 'Total coefficient \\(\\boxed{-96}\\).', 2),
    ], checks: [answer('Coefficient of x⁻²', -96)],
  },
  '2-13': {
    scheme: [
      row('M', 'Use \\(a+3d=34\\) and \\(a+9d=76\\).', 2),
      row('A', '\\(\\boxed{a=13,\\ d=7}\\).', 1),
      row('M', '\\(S_n=\\frac n2(26+7(n-1))=n(7n+19)/2>5000\\).', 2),
      row('A', 'The least integer above the positive threshold \\(36.46\\ldots\\) is \\(\\boxed{n=37}\\).', 2),
    ], checks: [answer('Part (a): first term', 13), answer('Part (a): difference', 7), answer('Part (b): least n', 37)],
  },
  '2-14': {
    scheme: [
      row('A', '\\(u_n-v_n=1.6+1.5(n-1)-3(1.2)^{n-1}\\).', 1),
      row('M', 'Compare integer values or solve numerically. \\(u_2-v_2<0\\), \\(u_3-v_3>0\\), \\(u_9-v_9>0\\), and \\(u_{10}-v_{10}<0\\).', 2),
      row('M', 'The difference peaks at integer \\(n=7\\); neighboring values at \\(n=6,8\\) are smaller.', 2),
      row('A', '\\(\\boxed{u_n>v_n\\text{ for }n=3,4,\\ldots,9}\\); greatest difference \\(\\boxed{1.642}\\) (4 s.f.).', 1),
    ], checks: [answer('Part (b): first n', 3), answer('Part (b): last n', 9), answer('Part (c): maximum', 1.642, 0.0005)],
  },
  '2-15': {
    scheme: [
      row('M', 'For all groups use \\(\\binom{11}{4}\\).', 1), row('A', '\\(\\boxed{330}\\).', 1),
      row('M', 'For two of each use \\(\\binom52\\binom62\\).', 1), row('A', '\\(\\boxed{150}\\).', 1),
      row('M', 'At least one female is the complement of an all-male group: \\(\\binom{11}{4}-\\binom54\\).', 1), row('A', '\\(\\boxed{325}\\).', 1),
    ], checks: [answer('Part (a): all groups', 330), answer('Part (b): two and two', 150), answer('Part (c): at least one female', 325)],
  },
  '2-16': {
    scheme: [
      row('M', 'Sum all integers from 100 to 999: \\(900(100+999)/2=494550\\).', 2),
      row('M', 'Subtract the 300 multiples of 3 from 102 to 999: \\(300(102+999)/2=165150\\).', 2),
      row('A', '\\(\\boxed{329400}\\).', 1),
    ], checks: [answer('Sum', 329400)],
  },
  '2-17': {
    scheme: [
      row('M', 'All possible teams: \\(\\binom{10}{6}\\).', 1), row('A', '\\(\\boxed{210}\\).', 1),
      row('M', 'Exactly one girl: \\(\\binom21\\binom85\\).', 1), row('A', '\\(\\boxed{112}\\).', 1),
      row('M', 'Divide favorable selections by all selections.', 1), row('A', '\\(\\boxed{112/210=8/15}\\).', 2),
    ], checks: [answer('Part (a): all teams', 210), answer('Part (b): one girl', 112), answer('Part (c): probability', 8/15)],
  },
  '2-18': {
    scheme: [
      row('M', 'After the fourth bounce the height is \\(4(0.95)^4\\) m.', 1), row('A', '\\(\\boxed{3.258025\\text{ m}}\\).', 1),
      row('M', 'Solve \\(4(0.95)^n\\ge1\\): \\(n\\le27.026\\ldots\\).', 1),
      row('A', 'The first \\(\\boxed{27}\\) bounces reach at least 1 m; the 28th does not.', 2),
      row('M', 'Count the first 4 m drop once and each rebound twice: \\(4+2\\sum_{n=1}^{\\infty}4(0.95)^n\\).', 2),
      row('A', 'The limiting distance is \\(\\boxed{156\\text{ m}}\\).', 1),
    ], checks: [answer('Part (a): height in metres', 3.258025, 0.0001), answer('Part (b): bounces at least 1 m', 27), answer('Part (c): total distance in metres', 156)],
  },
  '2-19': {
    scheme: [
      row('M', 'All 9 distinct players: \\(9!\\).', 1), row('A', '\\(\\boxed{362880}\\).', 1),
      row('M', 'Treat the three girls as a block: \\(7!3!\\).', 1), row('A', '\\(\\boxed{30240}\\).', 1),
      row('M', 'Choose 2 or 3 girls: \\(\\binom32\\binom63+\\binom33\\binom62\\).', 1), row('A', '\\(\\boxed{75}\\).', 1),
    ], checks: [answer('Part (a)(i): no restrictions', 362880), answer('Part (a)(ii): girls together', 30240), answer('Part (b): camp selections', 75)],
  },
  '2-20': {
    scheme: [
      row('M', 'First digit has 9 choices, then \\(9\\cdot8\\cdot7\\cdot6\\cdot5\\) choices for the remaining digits.', 1),
      row('A', 'Distinct six-digit numbers: \\(\\boxed{136080}\\).', 1),
      row('M', 'An increasing sequence cannot include zero as its first digit. Choose any six from digits 1 through 9; their order is fixed.', 1),
      row('A', '\\(\\binom96=\\boxed{84}\\).', 1),
    ], checks: [answer('Part (a): distinct digits', 136080), answer('Part (b): increasing digits', 84)],
  },
  '2-21': {
    scheme: [
      row('M', 'For non-adjacent girls subtract the adjacent block arrangements: \\(10!-9!2!\\).', 1), row('A', '\\(\\boxed{2903040}\\).', 1),
      row('M', 'For neither at an end choose two of 8 interior seats, then permute both girls and 8 boys: \\(\\binom82 2!8!\\).', 1), row('A', '\\(\\boxed{2257920}\\).', 1),
      row('M', 'Of the interior seat pairs, \\(7\\) are adjacent. Choose \\(\\binom82-7=21\\) allowed pairs and arrange the people.', 2),
      row('A', '\\(21\\cdot2!\\cdot8!=\\boxed{1693440}\\).', 2),
    ], checks: [answer('Part (a): apart', 2903040), answer('Part (b): interior', 2257920), answer('Part (c): interior and apart', 1693440)],
  },
  '2-22': {
    scheme: [
      row('M', 'All distinct books can be ordered in \\(15!\\) ways.', 1),
      row('M', 'For continent blocks, order the three blocks and permute within each: \\(3!6!5!4!\\).', 2),
      row('A', 'Grouped arrangements: \\(\\boxed{12441600}\\).', 1),
      row('M', 'Four from the same continent: \\(\\binom64+\\binom54+\\binom44\\).', 2),
      row('A', '\\(\\boxed{21}\\).', 1),
    ], checks: [answer('Part (a): all arrangements', 1307674368000), answer('Part (b): grouped', 12441600), answer('Part (c): choices', 21)],
  },
  '2-23': {
    scheme: [
      row('M', 'From \\(80r^3=0.74088\\), \\(r^3=0.009261\\) so \\(r=0.21\\).', 2),
      row('A', 'Second term \\(\\boxed{u_2=80(0.21)=16.8}\\).', 1),
      row('M', 'For the arithmetic sequence \\(a=80\\) and \\(d=(16.8-80)/10=-6.32\\).', 2),
      row('M', '\\(S_n=n[160-6.32(n-1)]/2\\) is maximized over positive integers at \\(n=13\\).', 1),
      row('A', '\\(\\boxed{S_{13}=547.04}\\) to two decimal places.', 1),
    ], checks: [answer('Part (a): second term', 16.8), answer('Part (b): greatest sum', 547.04, 0.005)],
  },
  '2-24': {
    scheme: [
      row('M', 'The geometric-condition equation is \\((a+2d)^2=a(a+6d)\\).', 2),
      row('A', 'With \\(d\\ne0\\), simplify \\(4d^2=2ad\\) to \\(\\boxed{d=a/2}\\).', 1),
      row('M', 'From \\(a+6d=3\\), deduce \\(a=3/4\\) and \\(d=3/8\\).', 1),
      row('M', 'The corresponding geometric sequence has first term 3 and ratio \\(1/2\\).', 1),
      row('M', 'Compare \\(S_{n,\\mathrm A}=n[2(3/4)+(n-1)(3/8)]/2\\) with \\(S_{n,\\mathrm G}=6(1-2^{-n})\\).', 2),
      row('M', 'The difference is less than 200 at \\(n=31\\) and at least 200 at \\(n=32\\).', 1),
      row('A', 'Least value \\(\\boxed{n=32}\\).', 1),
    ], checks: [answer('Part (b): least n', 32)],
  },
  '2-25': {
    scheme: [
      row('M', 'An \\(x^6\\) term uses two \\(ax^3\\) factors. Set \\(28a^2b^6=448\\) and \\(45a^2b^8=2880\\).', 2),
      row('M', 'Divide the equations to get \\(b^2=4\\).', 2),
      row('A', 'Since \\(b>0\\), \\(\\boxed{b=2}\\).', 1),
      row('M', 'Back-substitute to obtain \\(a^2=1/4\\).', 1),
      row('A', 'Since \\(a>0\\), \\(\\boxed{a=1/2}\\).', 1),
    ], checks: [answer('a', 0.5), answer('b', 2)],
  },
  '2-26': {
    scheme: [
      row('M', 'Quarterly multiplier is \\(1+0.055/4=1.01375\\); annual ratio is its fourth power.', 1),
      row('A', '\\(r=1.0561448\\ldots=\\boxed{1.056}\\) (4 s.f.).', 2),
      row('M', 'Solve \\(P(1.01375)^{4n}\\ge2P\\), giving \\(n\\ge12.689\\ldots\\).', 2),
      row('A', 'At the end of the 13th year after 1 January 2020, in \\(\\boxed{2032}\\), the amount first doubles.', 1),
    ], checks: [answer('Part (a): annual ratio', 1.056, 0.0005), answer('Part (b): calendar year', 2032)],
  },
  '2-27': {
    scheme: [
      row('M', 'After four terms the remaining sum is \\(S_\\infty-S_4=2=32r^4\\).', 2),
      row('A', 'Positive terms imply \\(\\boxed{r=1/2}\\).', 1),
      row('M', 'The difference \\(S_\\infty-S_8=32r^8\\).', 2),
      row('A', '\\(\\boxed{1/8}\\).', 1),
    ], checks: [answer('Remaining amount after eight terms', 1/8)],
  },
  '2-28': {
    scheme: [
      row('M', 'Rewrite as \\(q^{-1/2}(1-x^2/q)^{-1/2}\\).', 2),
      row('M', 'The fourth term of the generalized binomial series gives the coefficient of \\(x^6\\) as \\(5/(16q^{7/2})\\).', 2),
      row('M', 'Set \\(5/(16q^{7/2})=5120\\), hence \\(q^{-7/2}=16384=2^{14}\\).', 2),
      row('A', '\\(\\boxed{q=1/16}\\).', 1),
    ], checks: [answer('q', 1/16)],
  },
  '2-29': {
    scheme: [
      row('M', 'For \\(x^6\\), choose six \\(2x\\) factors and three \\(-5\\) factors: \\(\\binom96 2^6(-5)^3\\).', 2),
      row('A', '\\(\\boxed{-672000}\\).', 2),
    ], checks: [answer('Coefficient of x⁶', -672000)],
  },
  '2-30': {
    scheme: [
      row('M', 'Taking \\(j\\) copies of \\(-x/2\\) gives power \\(x^{-3-2(9-j)+j}=x^{3j-21}\\), so \\(j=7\\).', 2),
      row('M', 'The constant term is \\(\\binom97(1/3)^2(-1/2)^7\\).', 2),
      row('A', '\\(\\boxed{-1/32}\\).', 2),
    ], checks: [answer('Constant term', -1/32)],
  },
  '2-31': {
    scheme: [
      row('M', 'For \\(x^2\\) in \\((x^{-1}+5x)^8\\), take five \\(5x\\) factors: coefficient \\(\\binom85 5^5=175000\\).', 2),
      row('M', 'For \\(x^4\\) in \\((a+5x)^7\\), coefficient is \\(\\binom74 a^3 5^4=21875a^3\\).', 2),
      row('A', 'Equate coefficients: \\(a^3=8\\), so the real value is \\(\\boxed{a=2}\\).', 2),
    ], checks: [answer('a', 2)],
  },
  '2-32': {
    scheme: [
      row('M', 'Subtract \\(a+2d=1407\\) from \\(a+9d=1183\\): \\(7d=-224\\).', 2),
      row('A', '\\(\\boxed{d=-32,\\ a=1471}\\).', 2),
      row('M', 'Require \\(1471-32(n-1)>0\\), or \\(n<46.96875\\).', 2),
      row('A', 'There are \\(\\boxed{46}\\) positive terms; term 47 is negative.', 1),
    ], checks: [answer('Part (a): first term', 1471), answer('Part (a): difference', -32), answer('Part (b): positive terms', 46)],
  },
  '2-33': {
    scheme: [
      row('M', 'The coefficients are \\(a=8h\\), \\(b=28h^2\\), and \\(d=70h^4\\).', 2),
      row('M', 'Three consecutive geometric terms satisfy \\(b^2=ad\\).', 2),
      row('M', 'Thus \\(784h^4=560h^5\\); divide by \\(h^4\\) since \\(h>0\\).', 2),
      row('A', '\\(\\boxed{h=7/5}\\).', 1),
    ], checks: [answer('h', 7/5)],
  },
};
