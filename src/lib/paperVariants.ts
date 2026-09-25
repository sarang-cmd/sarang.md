import type { CheckTarget, MarkStep, PaperQuestion } from '../types';

function random(seed: number) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const step = (code: string, text: string, marks: number): MarkStep => ({ code, text, marks });
const check = (label: string, value: number, tolerance?: number): CheckTarget => ({ label, value, ...(tolerance === undefined ? {} : { tolerance }) });

export function makePaperVariants(seed: number): PaperQuestion[] {
  const rnd = random(seed);
  const pick = (min: number, max: number) => min + Math.floor(rnd() * (max - min + 1));
  const make = (paper: PaperQuestion['paper'], index: number, topic: string, marks: number, prompt: string, scheme: MarkStep[], checks: CheckTarget[]): PaperQuestion => ({
    id: `V-${paper}-${index}-${seed}`, kind: 'original', paper, topic, marks, prompt, scheme, checks,
    notices: [], session: null, timeZone: null, code: null,
    sourceStatus: 'Original practice made for this app; not an IB examination question',
  });
  const result: PaperQuestion[] = [];

  {
    const n = pick(6, 9), k = pick(2, 4);
    const c2 = n * (n - 1) / 2 * k * k;
    const c3 = n * (n - 1) * (n - 2) / 6 * k ** 3;
    result.push(make('P1', 1, 'Binomial theorem', 5,
      `For the expansion of \\( (1+${k}x)^{${n}} \\), determine the coefficients of \\(x^2\\) and \\(x^3\\). Explain how the position of a term determines its power of \\(x\\).`,
      [step('M', `Use \\(\\binom{${n}}{j}(${k}x)^j\\) for the term with power \\(j\\).`, 2), step('A', `Coefficient of \\(x^2\\): \\(\\binom{${n}}2${k}^2=\\boxed{${c2}}\\).`, 1), step('A', `Coefficient of \\(x^3\\): \\(\\binom{${n}}3${k}^3=\\boxed{${c3}}\\).`, 2)],
      [check('Coefficient of x²', c2), check('Coefficient of x³', c3)]));
  }
  {
    const first = pick(11, 19), difference = pick(3, 7), rows = pick(18, 24);
    const last = first + (rows - 1) * difference, total = rows * (first + last) / 2;
    result.push(make('P1', 2, 'Arithmetic sequences', 6,
      `A small theatre has \\(${rows}\\) rows. The first row holds \\(${first}\\) seats and each subsequent row holds \\(${difference}\\) more. Find the number of seats in the last row and the total number of seats.`,
      [step('M', `Set \\(a=${first}\\) and \\(d=${difference}\\); use \\(u_n=a+(n-1)d\\).`, 2), step('A', `Last row \\(u_{${rows}}=${first}+(${rows}-1)${difference}=\\boxed{${last}}\\).`, 1), step('M', `Use \\(S_n=n(a+u_n)/2\\).`, 1), step('A', `Total \\(S_{${rows}}=${rows}(${first}+${last})/2=\\boxed{${total}}\\).`, 2)],
      [check('Seats in last row', last), check('Total seats', total)]));
  }
  {
    const first = pick(36, 72), denominator = [2, 3, 4][pick(0, 2)], n = pick(3, 5);
    const ratio = 1 / denominator, infinite = first / (1 - ratio), tail = infinite * ratio ** n;
    result.push(make('P1', 3, 'Infinite geometric series', 6,
      `A geometric series begins \\(${first},\\ ${first}/${denominator},\\ ${first}/${denominator ** 2},\\ldots\\). Find its sum to infinity and the difference between that sum and the sum of the first \\(${n}\\) terms.`,
      [step('M', `Identify \\(r=1/${denominator}\\) and use \\(S_\\infty=a/(1-r)\\).`, 2), step('A', `\\(S_\\infty=${first}/(1-1/${denominator})=\\boxed{${infinite.toFixed(6).replace(/0+$/, '').replace(/\.$/, '')}}\\).`, 1), step('M', `The tail after \\(${n}\\) terms is \\(S_\\infty r^{${n}}\\).`, 2), step('A', `Tail \\(=\\boxed{${tail.toFixed(6).replace(/0+$/, '').replace(/\.$/, '')}}\\) (rounded here).`, 1)],
      [check('Sum to infinity', infinite), check(`Remaining after ${n} terms`, tail)]));
  }
  {
    const a = pick(2, 5);
    const constant = 15 * a * a;
    result.push(make('P1', 4, 'Constant terms', 5,
      `Find the term independent of \\(x\\) in \\(\\left(${a}x^2+\\frac{1}{x}\\right)^6\\). State which choice of binomial term removes the power of \\(x\\).`,
      [step('M', 'If four factors contribute \\(x^{-1}\\), the power is \\(2(6-4)-4=0\\).', 2), step('M', `Use \\(\\binom64 ${a}^{6-4}\\).`, 1), step('A', `Constant term \\(\\boxed{${constant}}\\).`, 2)],
      [check('Constant term', constant)]));
  }
  {
    const a = pick(88, 149), difference = pick(6, 12);
    const lastIndex = Math.ceil(a / difference), last = a - (lastIndex - 1) * difference;
    result.push(make('P1', 5, 'Terms above zero', 5,
      `A measurement sequence starts at \\(${a}\\) and decreases by \\(${difference}\\) each step. How many terms are strictly positive, and what is the last positive value?`,
      [step('M', `Write \\(u_n=${a}-${difference}(n-1)>0\\).`, 2), step('M', 'Find the largest positive integer satisfying the strict inequality.', 1), step('A', `There are \\(\\boxed{${lastIndex}}\\) positive terms; the final one is \\(\\boxed{${last}}\\).`, 2)],
      [check('Number of positive terms', lastIndex), check('Last positive value', last)]));
  }
  {
    const boys = pick(6, 9), girls = pick(4, 7);
    const choose = (n: number, r: number) => Array.from({ length: r }, (_, i) => (n - i) / (i + 1)).reduce((acc, x) => acc * x, 1);
    const exactly = Math.round(choose(boys, 2) * choose(girls, 2));
    const atLeast = Math.round(choose(boys + girls, 4) - choose(boys, 4));
    result.push(make('P2', 1, 'Combinations', 6,
      `A science club has \\(${boys}\\) boys and \\(${girls}\\) girls. Four students form a committee. How many committees contain exactly two girls? How many contain at least one girl?`,
      [step('M', `For two girls choose \\(\\binom{${girls}}2\\binom{${boys}}2\\).`, 2), step('A', `Exactly two girls: \\(\\boxed{${exactly}}\\).`, 1), step('M', `For at least one girl subtract all-boy committees from \\(\\binom{${boys + girls}}4\\).`, 2), step('A', `At least one girl: \\(\\boxed{${atLeast}}\\).`, 1)],
      [check('Exactly two girls', exactly), check('At least one girl', atLeast)]));
  }
  {
    const a = pick(9, 22), ratio = [1.25, 1.5][pick(0, 1)], threshold = pick(350, 900);
    let n = 1;
    const sum = (count: number) => a * (ratio ** count - 1) / (ratio - 1);
    while (sum(n) <= threshold && n < 50) n++;
    result.push(make('P2', 2, 'Growing geometric series', 5,
      `A sequence begins at \\(${a}\\) and each term is \\(${ratio}\\) times the previous term. Find the least positive integer \\(n\\) for which the sum of the first \\(n\\) terms exceeds \\(${threshold}\\).`,
      [step('M', `Use \\(S_n=${a}(${ratio}^n-1)/(${ratio}-1)\\).`, 2), step('M', `Solve \\(S_n>${threshold}\\) with logarithms or successive terms. Verify that \\(S_{${n - 1}}\\le${threshold}<S_{${n}}\\).`, 2), step('A', `Least \\(\\boxed{n=${n}}\\).`, 1)],
      [check('Smallest n', n)]));
  }
  {
    const digits = pick(4, 6);
    const factorial = (k: number) => Array.from({ length: k }, (_, i) => i + 1).reduce((x, y) => x * y, 1);
    const total = 9 * factorial(9) / factorial(10 - digits);
    const increasing = factorial(9) / (factorial(digits) * factorial(9 - digits));
    result.push(make('P2', 3, 'Digits and arrangements', 5,
      `Using decimal digits 0 to 9 without repetition, form \\(${digits}\\)-digit positive integers. Count all possibilities. Then count only those whose digits increase strictly from left to right.`,
      [step('M', `The leading digit has 9 choices, then there are \\(9,8,\\ldots\\) available digits.`, 1), step('A', `All numbers: \\(\\boxed{${total}}\\).`, 1), step('M', `Increasing digits cannot include zero; choose \\(${digits}\\) digits from 1 through 9 with one fixed order.`, 2), step('A', `\\(\\binom9{${digits}}=\\boxed{${increasing}}\\).`, 1)],
      [check('All distinct-digit numbers', total), check('Strictly increasing numbers', increasing)]));
  }
  {
    const initial = pick(12, 28), rate = pick(2, 5) / 100;
    const r = 1 + rate, height = initial * r ** 4;
    result.push(make('P2', 4, 'Percentage growth', 6,
      `A digital archive starts with \\(${initial}\\) thousand records and grows by \\(${(rate * 100).toFixed(0)}\\)% each year. Find the predicted number of thousand records after four years, and the first whole year \\(n\\) for which the total exceeds \\(2\\) times its starting size.`,
      [step('M', `Use \\(u_n=${initial}(1+${rate})^n\\).`, 2), step('A', `After four years: \\(\\boxed{${height.toFixed(4)}}\\) thousand (4 decimal places).`, 1), step('M', `Solve \\((1+${rate})^n>2\\) and check the neighboring integers.`, 2), step('A', `First whole year \\(\\boxed{n=${Math.floor(Math.log(2) / Math.log(r)) + 1}}\\).`, 1)],
      [check('After 4 years (thousands)', height, 0.0001), check('First n strictly above double', Math.floor(Math.log(2) / Math.log(r)) + 1)]));
  }
  {
    const first = pick(3, 8), percent = [0.8, 0.85, 0.9][pick(0, 2)], bounce = pick(3, 5);
    const h = first * percent ** bounce, distance = first + 2 * first * percent / (1 - percent);
    result.push(make('P2', 5, 'Bounces and infinite distance', 7,
      `A ball is dropped from \\(${first}\\) metres. Each bounce reaches \\(${Math.round(percent * 100)}\\)% of the previous height. Find its height after bounce \\(${bounce}\\), then find the limiting total travel distance. Include the initial drop only once.`,
      [step('M', `Height after bounce \\(${bounce}\\) is \\(${first}(${percent})^{${bounce}}\\).`, 2), step('A', `\\(\\boxed{${h.toFixed(5)}}\\) metres (5 decimal places).`, 1), step('M', `The distance is \\(${first}+2\\sum_{k=1}^\\infty ${first}(${percent})^k\\).`, 2), step('A', `\\(\\boxed{${distance.toFixed(4)}}\\) metres (4 decimal places).`, 2)],
      [check(`After bounce ${bounce} (metres)`, h, 0.00001), check('Limiting distance (metres)', distance, 0.0001)]));
  }
  return result;
}
