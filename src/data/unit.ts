// Five AA syllabus strands. The original Unit 1 notes and project-folder
// switching remain available alongside the new bundled syllabus lessons.
export const knownUnits = [
  {
    slug: 'number-and-algebra', directory: 'Unit 1 Number and Algebra', number: '01', title: 'Number & Algebra',
    description: 'From standard form and sequences to counting, proof, complex numbers and systems of equations.',
    note: '16 lessons · master guide · earlier notes',
  },
  {
    slug: 'functions', directory: 'Unit 2 Functions', number: '02', title: 'Functions',
    description: 'Domains, inverses, transformations, equations, polynomial structure and rational graphs.',
    note: '16 syllabus lessons · master guide',
  },
  {
    slug: 'geometry-and-trigonometry', directory: 'Unit 3 Geometry and Trigonometry', number: '03', title: 'Geometry & Trigonometry',
    description: 'Angles, identities, spatial reasoning, and vector descriptions of lines and planes.',
    note: '18 syllabus lessons · master guide',
  },
  {
    slug: 'statistics-and-probability', directory: 'Unit 4 Statistics and Probability', number: '04', title: 'Statistics & Probability',
    description: 'Collect, describe and model data, then reason carefully about chance and inference.',
    note: '14 syllabus lessons · master guide',
  },
  {
    slug: 'calculus', directory: 'Unit 5 Calculus', number: '05', title: 'Calculus',
    description: 'Build derivatives, integrals, optimization, differential equations and series from first principles.',
    note: '19 syllabus lessons · master guide',
  },
] as const;

export const unit = knownUnits[0];
