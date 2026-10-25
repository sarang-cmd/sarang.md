// Numeric helpers used only to VERIFY the hand-written answers of the long-form
// questions at build time. They are independent of the question text.
import assert from 'node:assert/strict';
export const close = (actual, expected, tol = 1e-6, label = '') =>
  assert(Math.abs(actual - expected) <= tol * Math.max(1, Math.abs(expected)), `${label} ${actual} should be ${expected}`);
export const integ = (f, a, b, n = 4000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return s * h / 3; };
export const d = (f, x, h = 1e-5) => (f(x + h) - f(x - h)) / (2 * h);
export const d2 = (f, x, h = 1e-4) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
export const root = (f, a, b) => { let fa = f(a); for (let i = 0; i < 200; i++) { const m = (a + b) / 2, fm = f(m); if (fa * fm <= 0) b = m; else { a = m; fa = fm; } } return (a + b) / 2; };
export const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
export const nCr = (n, r) => fact(n) / (fact(r) * fact(n - r));
export const binom = (n, p, k) => nCr(n, k) * p ** k * (1 - p) ** (n - k);
export function erf(x) { // high-precision series/continued fraction
  const sign = x < 0 ? -1 : 1; x = Math.abs(x);
  if (x < 3) { let sum = x, term = x; for (let n = 1; n < 200; n++) { term *= -x * x / n; sum += term / (2 * n + 1); } return sign * 2 / Math.sqrt(Math.PI) * sum; }
  let f = 0; for (let k = 60; k >= 1; k--) f = k / 2 / (x + f); return sign * (1 - Math.exp(-x * x) / Math.sqrt(Math.PI) / (x + f));
}
export const Phi = (z) => 0.5 * (1 + erf(z / Math.SQRT2));
export const invPhi = (p) => root((z) => Phi(z) - p, -10, 10);
export const normcdf = (x, m, s) => Phi((x - m) / s);
export const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
export const sd = (a) => Math.sqrt(mean(a.map((v) => (v - mean(a)) ** 2)));
export const fixed = (x, k) => Number(x.toFixed(k));
