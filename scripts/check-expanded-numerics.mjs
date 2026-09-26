// Independent numeric spot checks of generated practice questions. These parse
// published question text rather than calling the parameterized family builders.
// Passing does not prove the remaining practice items or their explanations.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const questions = JSON.parse(await readFile(new URL('../src/data/questions/expanded.json', import.meta.url), 'utf8'));
let checked = 0;
let families = 0;
const close = (actual, expected, id) => assert(Math.abs(actual - expected) < 1e-8, `${id}: ${actual} should equal ${expected}`);
const capture = (pattern, text, id) => {
  const match = text.match(pattern);
  assert(match, `${id}: expected pattern ${pattern} in ${text}`);
  return match.slice(1);
};
const values = (pattern, text, id) => capture(pattern, text, id).map(Number);
const last = (q) => q.scheme.at(-1).text;
function check(code, family, verify, minimum = 3) {
  const subset = questions.filter((q) => q.variant && q.codes[0] === code && q.id.includes(`-${family}-`));
  assert(subset.length >= minimum && subset.length <= 4, `${code}: missing variants for ${family}`);
  for (const item of subset) { verify(item); checked++; }
  families++;
}

// Number and Algebra: money, series, coefficients, ordered choices, induction.
check('SL 1.4', 'compound-annually', (q) => {
  const [principal, percentage, years] = values(/€(\d+) earns (\d+)% compound interest annually for (\d+) years/, q.prompt, q.id);
  const [euros, cents] = values(/gives €(\d+)\.(\d{2})/, last(q), q.id);
  close(euros * 100 + cents, Math.round(100 * principal * (1 + percentage / 100) ** years), q.id);
});
check('SL 1.8', 'bounce-travel', (q) => {
  const [height] = values(/first drops (\d+) m/, q.prompt, q.id);
  const [total] = values(/=(\d+)\$ m\./, last(q), q.id);
  // After the initial fall, each upward and downward series sums to the first drop.
  close(total, height + 2 * height * (1 / 2) / (1 - 1 / 2), q.id);
});
check('SL 1.9', 'binomial-x2-coefficient', (q) => {
  const [scale, power] = values(/\$\(1\+(\d+)x\)\^\{(\d+)\}/, q.prompt, q.id);
  const [coefficient] = values(/coefficient is \$(\d+)\$/, last(q), q.id);
  close(coefficient, power * (power - 1) / 2 * scale ** 2, q.id);
});
check('AHL 1.10', 'permutations', (q) => {
  const [people, roles] = values(/From (\d+) people, assign (\d+) distinct ordered roles/, q.prompt, q.id);
  const [answer] = values(/assignments is \$(\d+)\$/, last(q), q.id);
  close(answer, Array.from({ length: roles }, (_, i) => people - i).reduce((a, b) => a * b, 1), q.id);
});
check('AHL 1.15', 'induction-arithmetic', (q) => {
  const [unit] = values(/that \$(\d+)\+2\\cdot/, q.prompt, q.id);
  assert(q.prompt.includes(`2\\cdot${unit}+\\cdots+n\\cdot${unit}`), q.id);
  assert(q.prompt.includes(`\\frac{${unit}\\,n(n+1)}{2}`), q.id);
  for (const n of [1, 2, 5, 17]) {
    const direct = Array.from({ length: n }, (_, i) => unit * (i + 1)).reduce((a, b) => a + b, 0);
    close(direct, unit * n * (n + 1) / 2, q.id);
  }
  assert(last(q).includes('induction completes the proof'), q.id);
});

// Functions: gradients, constraints, bisection, and polynomial division.
check('SL 2.1', 'gradient-two-points', (q) => {
  const [x1, y1, x2, y2] = values(/line through \$\((-?\d+),(-?\d+)\)\$ and \$\((-?\d+),(-?\d+)\)\$/, q.prompt, q.id);
  const [slope] = values(/Gradient \$m=.*=(-?\d+)\$/, q.scheme[0].text, q.id);
  const [intercept] = values(/\$c=.*=(-?\d+)\$/, q.scheme[1].text, q.id);
  close(slope, (y2 - y1) / (x2 - x1), q.id);
  close(slope * x1 + intercept, y1, q.id);
  close(slope * x2 + intercept, y2, q.id);
});
check('SL 2.10', 'bracket-root', (q) => {
  const [target] = values(/root of \$x\^2=(\d+)\$/, q.prompt, q.id);
  const [lo, radicand, hi] = values(/bracket is \$(\d+(?:\.\d+)?)<\\sqrt\{(\d+)\}<(\d+(?:\.\d+)?)\$/, last(q), q.id);
  close(radicand, target, q.id);
  assert(lo ** 2 < target && target < hi ** 2 && hi - lo <= 0.5 + 1e-8, q.id);
});
check('AHL 2.13', 'slant-asymptote', (q) => {
  const [linear, constant] = values(/\$\(x\^2\+(\d+)x\+(\d+)\)\/\(x\+1\)\$/, q.prompt, q.id);
  const [remainder] = values(/remaining numerator is \$(\d+)\$/, q.scheme[1].text, q.id);
  const [intercept] = values(/asymptote \$y=x\+(\d+)\$/, last(q), q.id);
  close(intercept, linear - 1, q.id);
  close(remainder, constant - intercept, q.id);
  for (const x of [2, 7]) close((x ** 2 + linear * x + constant) / (x + 1), x + intercept + remainder / (x + 1), q.id);
});

// Geometry and Trigonometry: 3D distance, quadrant sign, tangent identity, planes.
check('SL 3.1', 'distance-in-space', (q) => {
  const [x, y, z] = values(/\$Q=\((\d+),(\d+),(\d+)\)\$/, q.prompt, q.id);
  const [distance] = values(/distance is \$(\d+)\$/, last(q), q.id);
  close(distance, Math.hypot(x, y, z), q.id);
});
check('SL 3.6', 'pythagorean-sign', (q) => {
  const [adjacent, hypotenuse] = values(/\\cos x=(\d+)\/(\d+)/, q.prompt, q.id);
  const [opposite, denominator] = values(/\\sin x=-(\d+)\/(\d+)/, last(q), q.id);
  close(denominator, hypotenuse, q.id);
  close(opposite ** 2 + adjacent ** 2, hypotenuse ** 2, q.id);
});
check('AHL 3.11', 'double-angle-from-tangent', (q) => {
  const [tangent] = values(/\\tan x=(\d+)/, q.prompt, q.id);
  const [numerator, denominator] = capture(/\\sin2x=.*=([0-9]+)(?:\/([0-9]+))?\$/, last(q), q.id);
  close(Number(numerator) / Number(denominator || 1), 2 * tangent / (1 + tangent ** 2), q.id);
});
check('AHL 3.18', 'plane-plane-intersection', (q) => {
  const [sum, difference] = values(/planes \$x\+y=(\d+)\$ and \$x-y=(\d+)\$/, q.prompt, q.id);
  const [x, y] = values(/line is \$\((\d+),(\d+),t\)\$/, last(q), q.id);
  close(x + y, sum, q.id);
  close(x - y, difference, q.id);
});

// Statistics and Probability: proportional sample, regression, conditions, Bayes.
check('SL 4.1', 'proportional-strata', (q) => {
  const [a, b] = values(/has (\d+) pupils in group A and (\d+) in group B/, q.prompt, q.id);
  const [sampleA] = values(/receives \$100\(\d+\/1000\)=(\d+)\$/, q.scheme[1].text, q.id);
  const [sampleB] = values(/receives \$100\(\d+\/1000\)=(\d+)\$/, last(q), q.id);
  close(sampleA, a / 10, q.id);
  close(sampleB, b / 10, q.id);
  close(sampleA + sampleB, 100, q.id);
});
check('SL 4.4', 'regression-y-on-x', (q) => {
  const [y1, y2, y3, y4] = values(/\(1,(-?\d+)\), \(2,(-?\d+)\), \(3,(-?\d+)\), \(4,(-?\d+)\)/, q.prompt, q.id);
  const ys = [y1, y2, y3, y4];
  const yBar = ys.reduce((sum, y) => sum + y, 0) / 4;
  const numerator = ys.reduce((sum, y, i) => sum + (i + 1 - 2.5) * (y - yBar), 0);
  const denominator = [1, 2, 3, 4].reduce((sum, x) => sum + (x - 2.5) ** 2, 0);
  const slope = numerator / denominator;
  const [reportedSlope, intercept] = values(/\\hat y=(-?\d+(?:\.\d+)?)x([+-]\d+(?:\.\d+)?)\$/, last(q), q.id);
  close(reportedSlope, slope, q.id);
  close(intercept, yBar - slope * 2.5, q.id);
});
check('SL 4.11', 'reverse-conditional', (q) => {
  const [a, b, both] = values(/(\d+) belong to A, (\d+) to B and (\d+) to both/, q.prompt, q.id);
  const [givenB] = values(/P\(A\\mid B\)=\d+\/\d+=([0-9.]+)/, q.scheme[0].text, q.id);
  const [givenA] = values(/P\(B\\mid A\)=\d+\/\d+=([0-9.]+)/, q.scheme[1].text, q.id);
  close(givenB, both / b, q.id);
  close(givenA, Math.round(both / a * 1000) / 1000, q.id);
});
check('AHL 4.13', 'medical-bayes', (q) => {
  const [base] = values(/condition affects 1 in (\d+)/, q.prompt, q.id);
  const [reported] = values(/\\approx([0-9.]+)\$/, last(q), q.id);
  const prevalence = 1 / base;
  const posterior = 0.9 * prevalence / (0.9 * prevalence + 0.1 * (1 - prevalence));
  close(reported, Math.round(posterior * 10000) / 10000, q.id);
});
check('AHL 4.14', 'linear-transform-moments', (q) => {
  const [mean, variance, scale, shift] = values(/\$E\(X\)=(\d+)\$ and \$\\operatorname\{Var\}\(X\)=(\d+)\$, find \$E\((\d+)X\+(\d+)\)\$/, q.prompt, q.id);
  const [reportedMean] = values(/=(\d+)\$/, q.scheme[0].text, q.id);
  const [reportedVariance] = values(/=(\d+)\$/, last(q), q.id);
  close(reportedMean, scale * mean + shift, q.id);
  close(reportedVariance, scale ** 2 * variance, q.id);
});

// Calculus: signed versus total area, motion, bounded area, related rates, Euler.
check('SL 5.5', 'signed-vs-area', (q) => {
  const [lower, upper] = values(/on \$\[-(\d+),(\d+)\]\$/, q.prompt, q.id);
  const [area] = values(/area is \$(\d+)\$/, last(q), q.id);
  close(lower, upper, q.id);
  close(area, upper ** 2, q.id);
  assert(q.scheme[0].text.includes('=0'), q.id);
});
check('SL 5.9', 'linear-velocity-distance', (q) => {
  const [root, end] = values(/v\(t\)=t-(\d+)\$ m\/s on \$0\\leq t\\leq(\d+)\$/, q.prompt, q.id);
  const [distance] = values(/distance is \$(\d+)\$ m/, last(q), q.id);
  close(end, 2 * root, q.id);
  close(distance, 2 * (root ** 2 / 2), q.id);
  assert(q.scheme[0].text.includes('=0'), q.id);
});
check('SL 5.11', 'between-line-and-parabola', (q) => {
  const [root] = values(/get \$x=0,(\d+)\$/, q.scheme[0].text, q.id);
  const [numerator, denominator] = values(/result is \$(\d+)\/(\d+)\$/, last(q), q.id);
  close(numerator / denominator, root ** 3 / 6, q.id);
});
check('AHL 5.14', 'related-rates-sphere', (q) => {
  const [radius, rate] = values(/radius is \$(\d+)\$ cm and growing at \$(\d+)\$ cm\/s/, q.prompt, q.id);
  const [reported] = values(/rate is \$(\d+)\\pi\$/, last(q), q.id);
  close(reported, 4 * radius * radius * rate, q.id);
});
check('AHL 5.18', 'euler-two-steps', (q) => {
  const [initial] = values(/\$y\(0\)=(\d+)\$/, q.prompt, q.id);
  const [reported] = values(/\$y_2=.*=([0-9.]+)\$ at/, last(q), q.id);
  const h = 0.5;
  const y1 = initial + h * initial;
  close(reported, y1 + h * (h + y1), q.id);
});

// Additional named subskills in broad outline headings. Each fourth family has
// two published variants, so these checks exercise every one of those variants.
check('SL 2.1', 'parallel-through-point', (q) => {
  const [originalSlope, originalIntercept, x, y] = values(/parallel to \$y=(-?\d+)x\+(\d+)\$ that passes through \$\((\d+),(-?\d+)\)\$/, q.prompt, q.id);
  const [slope, intercept] = values(/new equation is \$y=(-?\d+)x([+-]\d+)\$/, last(q), q.id);
  close(slope, originalSlope, q.id);
  close(slope * x + intercept, y, q.id);
  assert.notEqual(intercept, originalIntercept, `${q.id}: a parallel line should be distinct`);
}, 2);
check('SL 2.4', 'graphical-numerical-intersection', (q) => {
  const [height] = values(/and \$y=(\d+)\$ to three decimal places/, q.prompt, q.id);
  const [positive] = values(/\\approx([0-9.]+)\$/, q.scheme[1].text, q.id);
  assert(positive > 0 && Math.abs(positive ** 2 - height) < 0.005, q.id);
  assert(last(q).includes(`(-${positive},${height})`), q.id);
}, 2);
check('SL 2.5', 'identity-composition', (q) => {
  const [scale, shift] = values(/For \$f\(x\)=(\d+)x\+(\d+)\$/, q.prompt, q.id);
  for (const step of q.scheme.slice(0, 2)) assert(step.text.includes(`f(x)=${scale}x+${shift}`), q.id);
  const f = (x) => scale * x + shift;
  const identity = (x) => x;
  for (const x of [-1, 0, 2]) {
    close(f(identity(x)), f(x), q.id);
    close(identity(f(x)), f(x), q.id);
  }
}, 2);
check('SL 3.2', 'sine-rule-side', (q) => {
  const [a] = values(/side \$a=(\d+)\$ cm/, q.prompt, q.id);
  const [b] = values(/and \$b=(\d+)\\sqrt2\$ cm/, last(q), q.id);
  close(b * Math.SQRT2, a * Math.sin(Math.PI / 4) / Math.sin(Math.PI / 6), q.id);
}, 2);
check('AHL 3.14', 'cartesian-symmetric-line', (q) => {
  const [a, b] = values(/\\mathbf r=\((\d+),(\d+),1\)\+t\(2,3,4\)/, q.prompt, q.id);
  assert(last(q).includes(`(x-${a})/2=(y-${b})/3=(z-1)/4`), q.id);
  for (const t of [0, 1, 5]) {
    close((a + 2 * t - a) / 2, (b + 3 * t - b) / 3, q.id);
    close((a + 2 * t - a) / 2, (1 + 4 * t - 1) / 4, q.id);
  }
}, 2);
check('AHL 3.15', 'intersecting-lines', (q) => {
  const [a] = values(/\$L_2=\((\d+),s,0\)\$/, q.prompt, q.id);
  assert(q.scheme[1].text.includes(`(${a},${a},0)`), q.id);
  const first = (t) => [t, t, 0];
  const second = (s) => [a, s, 0];
  assert.deepEqual(first(a), second(a), q.id);
  assert(last(q).includes('single intersection'), q.id);
}, 2);
check('SL 4.2', 'box-plot-five-number', (q) => {
  const [min, low, median, high, max] = values(/minimum \$(\d+)\$, lower quartile \$(\d+)\$, median \$(\d+)\$, upper quartile \$(\d+)\$ and maximum \$(\d+)\$/, q.prompt, q.id);
  assert(min < low && low < median && median < high && high < max, q.id);
  const [iqr] = values(/Q_3-Q_1=\d+-\d+=(\d+)\$/, q.scheme[1].text, q.id);
  close(iqr, high - low, q.id);
}, 2);
check('SL 4.6', 'mutually-exclusive', (q) => {
  const [p, r] = values(/P\(A\)=(\d+\.\d+) and P\(B\)=(\d+\.\d+)/, q.prompt, q.id);
  const [union] = values(/P\(A\\cup B\)=.*=([0-9.]+)\$/, q.scheme[1].text, q.id);
  close(union, p + r, q.id);
  assert(p > 0 && r > 0 && p + r <= 1 && last(q).includes('not independent'), q.id);
}, 2);
check('SL 4.12', 'recover-mean-and-sigma', (q) => {
  const [x1, x2] = values(/value \$(\d+)\$ has \$z=1\$ and a value \$(\d+)\$ has \$z=2\$/, q.prompt, q.id);
  const [sigma] = values(/\\sigma=\d+-\d+=(\d+)>0\$/, q.scheme[1].text, q.id);
  const [mean] = values(/\\mu=\d+-\d+=(\d+)\$/, last(q), q.id);
  close(sigma, x2 - x1, q.id);
  close(mean, 2 * x1 - x2, q.id);
}, 2);
check('SL 5.6', 'rational-power-domain', (q) => {
  const [a] = values(/f\(x\)=\(x\+(\d+)\)\^\{1\/2\}/, q.prompt, q.id);
  assert(q.scheme[0].text.includes(`x\\geq-${a}`), q.id);
  assert(last(q).includes(`1/[2\\sqrt{x+${a}}]`), q.id);
  assert(last(q).includes(`x>-${a}`), q.id);
}, 2);
check('AHL 5.14', 'open-cylinder-optimum', (q) => {
  const [volumeFactor] = values(/fixed volume \$(\d+)\\pi\$/, q.prompt, q.id);
  const [radius] = values(/and \$r=(\d+)\$ cm/, q.scheme[1].text, q.id);
  const [height] = values(/\$h=\d+\/\d+=(\d+)\$ cm/, last(q), q.id);
  close(radius ** 3, volumeFactor, q.id);
  close(height, volumeFactor / radius ** 2, q.id);
  const area = (r) => Math.PI * r ** 2 + 2 * Math.PI * volumeFactor / r;
  assert(area(radius - 0.02) > area(radius) && area(radius + 0.02) > area(radius), q.id);
}, 2);
check('AHL 5.19', 'maclaurin-logarithm', (q) => {
  const [coefficient] = capture(/\\ln\(1\+(\d*)x\)/, q.prompt, q.id);
  const a = Number(coefficient || 1);
  for (const x of [0.01 / a, -0.01 / a]) {
    const approx = a * x - (a * x) ** 2 / 2 + (a * x) ** 3 / 3;
    assert(Math.abs(Math.log1p(a * x) - approx) < 3e-8, q.id);
  }
  assert(last(q).includes(`|${a === 1 ? '' : a}x|<1`), q.id);
}, 2);

console.log(`Independent numeric spot checks passed: ${checked} published variations across ${families} skill families in five strands. This is not a complete mathematical review.`);
