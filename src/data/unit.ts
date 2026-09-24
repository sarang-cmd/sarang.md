// Four drop-in folders are supported, but only Unit 1 is populated by default.
export const knownUnits = [
  {
    slug: 'number-and-algebra',
    directory: 'Unit 1 Number and Algebra',
    number: '01',
    title: 'Number & Algebra',
    description: 'Build fluency in sequences and series, learn to write convincing proofs, and connect counting to the binomial theorem.',
    note: 'Sequences, proof, counting & more.',
  },
  {
    slug: 'functions',
    directory: 'Unit 2 Functions',
    number: '02',
    title: 'Functions',
    description: 'Explore representations, transformations, inverse functions, and the language of change.',
    note: 'The language of change',
  },
  {
    slug: 'geometry-and-trigonometry',
    directory: 'Unit 3 Geometry and Trigonometry',
    number: '03',
    title: 'Geometry & Trigonometry',
    description: 'Study shapes, angles, vectors, and the relationships that connect them.',
    note: 'Shapes, spaces & angles',
  },
  {
    slug: 'calculus',
    directory: 'Unit 4 Calculus',
    number: '04',
    title: 'Calculus',
    description: 'Connect limits, derivatives, and integrals to change and accumulation.',
    note: 'Rates, areas & everything between',
  },
] as const;

export const unit = knownUnits[0];
