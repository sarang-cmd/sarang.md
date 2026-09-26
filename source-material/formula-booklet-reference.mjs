// Hand-checked against the learner-supplied PDF, not against machine-extracted equations.
// IBO (2023), Mathematics: analysis and approaches HL formula booklet, Version 1.0,
// first examinations 2021. PDF cover=page 1; printed page N is PDF page N+2.
// Only the item labels below are transcribed. The PDF itself is not redistributed.
export const bookletEdition = 'IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0';
export const printedEntries = {
  'SL 1.2': [2, 'arithmetic nth term and finite sum'],
  'SL 1.3': [2, 'geometric nth term and finite sum'],
  'SL 1.4': [2, 'compound interest with nominal annual percentage and compounding frequency'],
  'SL 1.5': [2, 'exponential and logarithmic inverse definition'],
  'SL 1.7': [2, 'laws of logarithms and change of base'],
  'SL 1.8': [2, 'infinite geometric sum with the convergence condition'],
  'SL 1.9': [2, 'finite binomial theorem and combination coefficient'],
  'AHL 1.10': [3, 'permutations, combinations and binomial expansion for rational indices'],
  'AHL 1.12': [3, 'Cartesian representation of complex numbers'],
  'AHL 1.13': [3, 'modulus-argument and Euler forms'],
  'AHL 1.14': [3, 'De Moivre theorem'],
  'SL 2.1': [3, 'line equations and gradient'],
  'SL 2.6': [3, 'axis of symmetry of a quadratic'],
  'SL 2.7': [3, 'quadratic formula and discriminant'],
  'AHL 2.12': [3, 'sum and product of polynomial roots'],
  'SL 3.1': [4, 'three-dimensional distance, midpoint and pyramid volume'],
  'SL 3.2': [5, 'sine rule, cosine rule and triangle area'],
  'SL 3.4': [5, 'arc length and sector area for radians'],
  'SL 3.5': [5, 'tangent ratio on the unit circle'],
  'SL 3.6': [5, 'Pythagorean and double-angle identities'],
  'AHL 3.9': [5, 'reciprocal identities and Pythagorean relations'],
  'AHL 3.10': [6, 'compound-angle identities and tangent double-angle identity'],
  'AHL 3.12': [6, 'magnitude of a three-dimensional vector'],
  'AHL 3.13': [6, 'scalar product and angle between vectors'],
  'AHL 3.14': [6, 'vector, parametric and Cartesian equations of a line'],
  'AHL 3.16': [6, 'vector product and parallelogram area'],
  'AHL 3.17': [6, 'vector and Cartesian equations of a plane'],
  'SL 4.2': [7, 'interquartile range'],
  'SL 4.3': [7, 'weighted mean'],
  'SL 4.5': [7, 'equally likely outcomes and complement'],
  'SL 4.6': [7, 'union, mutual exclusion, conditional probability and independence'],
  'SL 4.7': [7, 'expected value of a discrete variable'],
  'SL 4.8': [7, 'binomial model, mean and variance'],
  'SL 4.12': [7, 'normal standardization with a z-score'],
  'AHL 4.13': [7, 'Bayes theorem in partition forms'],
  'AHL 4.14': [8, 'variance, standard deviation, linear transformations and continuous expectation'],
  'SL 5.3': [9, 'power derivative'],
  'SL 5.6': [9, 'standard derivatives, chain, product and quotient rules'],
  'SL 5.9': [10, 'acceleration, distance and displacement integrals'],
  'SL 5.5': [10, 'power integral and area above the x-axis'],
  'SL 5.10': [10, 'standard integrals for reciprocal, sine, cosine and exponential functions'],
  'SL 5.11': [11, 'area enclosed by a curve and the x-axis'],
  'AHL 5.12': [9, 'first-principles derivative'],
  'AHL 5.15': [9, 'further standard derivatives including inverse trigonometric functions'],
  'AHL 5.16': [10, 'integration by parts'],
  'AHL 5.17': [11, 'area with respect to y and volumes of revolution about either axis'],
  'AHL 5.18': [11, 'Euler method and integrating factor'],
  'AHL 5.19': [11, 'Maclaurin series and five standard expansions'],
};

export function bookletNote(code) {
  const entry = printedEntries[code];
  if (!entry) return `**Booklet cross-check:** The supplied ${bookletEdition} has no dedicated printed row for ${code}. Related facts may appear elsewhere. Justify any method used here.`;
  const [printedPage, item] = entry;
  return `**Booklet cross-check:** The supplied ${bookletEdition}, printed p. ${printedPage} (PDF p. ${printedPage + 2}), lists ${item} under ${code}. Derive and justify all other steps and conditions.`;
}
