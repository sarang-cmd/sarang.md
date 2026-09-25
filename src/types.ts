export interface Topic {
  id: string;
  file: string;
  title: string;
  category: string;
  tags: string[];
  order: number;
  prev: string | null;
  next: string | null;
  /** Added at runtime. The bundled manifest intentionally keeps its original shape. */
  unitSlug?: string;
}

export interface TopicGroup {
  category: string;
  topics: Topic[];
}

export type ContentMode = 'library' | 'local';
export type UnitOrigin = 'bundled' | 'project' | 'browser' | 'placeholder';

export interface CourseUnit {
  slug: string;
  directory: string;
  number: string;
  title: string;
  description: string;
  note: string;
  topics: Topic[];
  origin: UnitOrigin;
}

export interface StoredLocalLibrary {
  version: 1;
  importedAt: string;
  units: CourseUnit[];
  /** Key: unit slug + '::' + the exact Markdown filename. */
  contents: Record<string, string>;
}

export interface ImportReport {
  files: number;
  units: number;
  total: number;
  skipped: number;
  persisted: boolean;
}

export interface MarkStep {
  code: string;
  text: string;
  marks: number;
}

export interface PracticeQuestion {
  id: string;
  strand: string;
  topic: string;
  level: 'Core' | 'Stretch';
  marks: number;
  prompt: string;
  scheme: MarkStep[];
}

/** The archive and generated practice live apart from the original SS bank. */
export interface CheckTarget {
  label: string;
  value: number;
  tolerance?: number;
}

export interface PaperQuestion {
  id: string;
  kind: 'transcription' | 'original';
  paper: 'P1' | 'P2';
  topic: string;
  marks: number;
  prompt: string;
  scheme: MarkStep[];
  checks: CheckTarget[];
  notices: string[];
  /** Null for independently generated practice; never invent exam metadata. */
  session: string | null;
  timeZone: string | null;
  code: string | null;
  sourceStatus: string;
  sourceQuestion?: number;
  sourceFile?: string;
}
