import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { knownUnits, unit as defaultUnit } from '../data/unit';
import { loadMarkdown } from '../lib/content';
import { buildLocalLibrary, localContentKey, mergeLocalLibraries, mergeTopicLists } from '../lib/localNotes';
import { deleteStoredLibrary, readStoredLibrary, writeStoredLibrary } from '../lib/localStorageDb';
import type { ContentMode, CourseUnit, ImportReport, StoredLocalLibrary, Topic } from '../types';

type CatalogStatus = 'loading' | 'ready' | 'error';
const MODE_KEY = 'sarang-vault-content-source';

interface CatalogValue {
  topics: Topic[];
  syllabusTopics: Topic[];
  bundledCount: number;
  units: CourseUnit[];
  status: CatalogStatus;
  mode: ContentMode;
  revision: string;
  localUnits: CourseUnit[];
  projectUnits: CourseUnit[];
  importedUnits: CourseUnit[];
  importedAt: string | null;
  hasLocal: boolean;
  reload: () => void;
  setMode: (mode: ContentMode) => void;
  importLocalFiles: (files: File[], addToExisting?: boolean) => Promise<ImportReport>;
  removeImportedFiles: () => Promise<void>;
  getMarkdown: (topic: Topic) => Promise<string>;
}

const CatalogContext = createContext<CatalogValue | null>(null);
let cachedManifest: Promise<Topic[]> | undefined;
let cachedCourse: Promise<ProjectRecord[]> | undefined;

function loadCourse(): Promise<ProjectRecord[]> {
  if (!cachedCourse) cachedCourse = fetch(`${import.meta.env.BASE_URL}content/course-catalog.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Course catalog request failed (${response.status})`);
      return response.json() as Promise<unknown>;
    }).then((data) => {
      if (!data || typeof data !== 'object' || !('units' in data) || !Array.isArray(data.units)) throw new Error('Invalid course catalog.');
      const records = data.units as ProjectRecord[];
      if (records.length !== 5 || records.some((record) => !record || typeof record.slug !== 'string' ||
        typeof record.directory !== 'string' || !Array.isArray(record.topics) || record.topics.some((topic) =>
          typeof topic.file !== 'string' || typeof topic.title !== 'string' || typeof topic.category !== 'string'))) {
        throw new Error('The five course strands are incomplete.');
      }
      return records;
    }).catch((error: unknown) => { cachedCourse = undefined; throw error; });
  return cachedCourse;
}

function loadManifest(): Promise<Topic[]> {
  if (!cachedManifest) {
    cachedManifest = fetch(`${import.meta.env.BASE_URL}content/manifest.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Manifest request failed (${response.status})`);
        return response.json() as Promise<unknown>;
      })
      .then((data) => {
        if (!Array.isArray(data) || !data.every((entry) =>
          entry && typeof entry === 'object' &&
          typeof entry.id === 'string' && typeof entry.file === 'string' &&
          typeof entry.title === 'string' && typeof entry.category === 'string' &&
          Array.isArray(entry.tags) && entry.tags.every((tag: unknown) => typeof tag === 'string') &&
          typeof entry.order === 'number' &&
          (entry.prev === null || typeof entry.prev === 'string') &&
          (entry.next === null || typeof entry.next === 'string')
        )) throw new Error('The course manifest has an invalid format.');
        return (data as Topic[]).sort((a, b) => a.order - b.order);
      })
      .catch((error: unknown) => { cachedManifest = undefined; throw error; });
  }
  return cachedManifest;
}

interface ProjectRecord {
  slug: string;
  directory: string;
  topics: Topic[];
}

function makeCourseUnit(record: ProjectRecord, origin: CourseUnit['origin']): CourseUnit {
  const known = knownUnits.find((entry) => entry.slug === record.slug);
  const number = record.directory.match(/^Unit\s+(\d+)/i)?.[1] ?? '05';
  return {
    slug: record.slug,
    directory: record.directory,
    number: known?.number ?? number.padStart(2, '0'),
    title: known?.title ?? record.directory.replace(/^Unit\s+\d+\s+/, ''),
    description: known?.description ?? 'Your notes, organized into a focused course.',
    note: known?.note ?? 'Your own study notes',
    origin,
    topics: record.topics.map((topic) => ({ ...topic, unitSlug: record.slug })),
  };
}

async function loadProjectUnits(): Promise<CourseUnit[]> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}content/local/catalog.json`, { cache: 'no-store' });
    if (!response.ok) return [];
    const data: unknown = await response.json();
    if (!data || typeof data !== 'object' || !('units' in data) || !Array.isArray(data.units)) return [];
    return (data.units as ProjectRecord[])
      .filter((entry) => entry && typeof entry.slug === 'string' && typeof entry.directory === 'string' && Array.isArray(entry.topics) && entry.topics.length > 0)
      .map((entry) => makeCourseUnit(entry, 'project'));
  } catch { return []; }
}

function initialMode(): ContentMode {
  try { return localStorage.getItem(MODE_KEY) === 'local' ? 'local' : 'library'; }
  catch { return 'library'; }
}

function saveMode(mode: ContentMode) {
  try { localStorage.setItem(MODE_KEY, mode); } catch { /* Still works for this visit. */ }
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [includedUnits, setIncludedUnits] = useState<CourseUnit[]>([]);
  const [projectUnits, setProjectUnits] = useState<CourseUnit[]>([]);
  const [browserLibrary, setBrowserLibrary] = useState<StoredLocalLibrary | null>(null);
  const [selectedMode, setSelectedMode] = useState<ContentMode>(initialMode);
  const [status, setStatus] = useState<CatalogStatus>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let mounted = true;
    setStatus('loading');
    Promise.all([loadManifest(), loadCourse(), loadProjectUnits(), readStoredLibrary().catch(() => null)]).then(
      ([manifest, course, project, stored]) => {
        if (!mounted) return;
        if (manifest.length !== 20) { setStatus('error'); return; }
        setIncludedUnits(course.map((entry) => makeCourseUnit(entry, 'bundled')));
        setProjectUnits(project);
        setBrowserLibrary(stored);
        setStatus('ready');
      },
      () => { if (mounted) setStatus('error'); },
    );
    return () => { mounted = false; };
  }, [attempt]);

  const importedUnits = useMemo(() => browserLibrary?.units.map((entry) => makeCourseUnit(entry, 'browser')) ?? [], [browserLibrary]);
  const localUnits = useMemo(() => {
    const bySlug = new Map(projectUnits.map((entry) => [entry.slug, entry]));
    for (const entry of importedUnits) {
      const project = bySlug.get(entry.slug);
      // Keep project-folder notes too. Browser files with the same name take priority.
      bySlug.set(entry.slug, project ? { ...project, topics: mergeTopicLists(project.topics, entry.topics), origin: 'browser' } : entry);
    }
    return [...bySlug.values()].sort((a, b) => Number(a.number) - Number(b.number));
  }, [projectUnits, importedUnits]);
  const hasLocal = localUnits.some((entry) => entry.topics.length > 0);
  const mode: ContentMode = selectedMode === 'local' && hasLocal ? 'local' : 'library';

  const units = useMemo(() => {
    const active = new Map<string, CourseUnit>();
    if (mode === 'local') for (const entry of localUnits) active.set(entry.slug, entry);
    else for (const entry of includedUnits) active.set(entry.slug, entry);
    const standard = knownUnits.map((entry) => active.get(entry.slug) ?? { ...entry, topics: [], origin: 'placeholder' as const });
    const custom = [...active.values()].filter((entry) => !knownUnits.some((known) => known.slug === entry.slug));
    return [...standard, ...custom];
  }, [mode, localUnits, includedUnits]);
  const topics = useMemo(() => units.flatMap((entry) => entry.topics), [units]);
  const syllabusTopics = useMemo(() => includedUnits.flatMap((entry) => entry.topics.filter((topic) => topic.collection === 'syllabus')), [includedUnits]);
  const revision = `${mode}:${browserLibrary?.importedAt ?? 'project'}`;
  const reload = useCallback(() => setAttempt((previous) => previous + 1), []);
  const setMode = useCallback((value: ContentMode) => {
    if (value === 'local' && !hasLocal) return;
    setSelectedMode(value);
    saveMode(value);
  }, [hasLocal]);

  const importLocalFiles = useCallback(async (files: File[], addToExisting = false): Promise<ImportReport> => {
    const { library: incoming, skipped } = await buildLocalLibrary(files);
    const library = addToExisting && browserLibrary ? mergeLocalLibraries(browserLibrary, incoming) : incoming;
    let persisted = true;
    try { await writeStoredLibrary(library); } catch { persisted = false; }
    setBrowserLibrary(library);
    setSelectedMode('local');
    saveMode('local');
    const combined = new Map(projectUnits.map((entry) => [entry.slug, entry.topics]));
    for (const entry of library.units) {
      const existing = combined.get(entry.slug);
      combined.set(entry.slug, existing ? mergeTopicLists(existing, entry.topics) : entry.topics);
    }
    return {
      files: incoming.units.reduce((sum, entry) => sum + entry.topics.length, 0),
      units: library.units.length,
      total: [...combined.values()].reduce((sum, entries) => sum + entries.length, 0),
      skipped, persisted,
    };
  }, [browserLibrary, projectUnits]);

  const removeImportedFiles = useCallback(async () => {
    try { await deleteStoredLibrary(); } catch { /* Session-only imports can still be removed. */ }
    setBrowserLibrary(null);
    if (!projectUnits.length) { setSelectedMode('library'); saveMode('library'); }
  }, [projectUnits.length]);

  const getMarkdown = useCallback((topic: Topic): Promise<string> => {
    const currentUnit = units.find((entry) => entry.slug === (topic.unitSlug ?? defaultUnit.slug));
    if (!currentUnit) return Promise.reject(new Error('Topic unit is unavailable.'));
    if (currentUnit.origin === 'browser') {
      const source = browserLibrary?.contents[localContentKey(currentUnit.slug, topic.file)];
      if (source !== undefined) return Promise.resolve(source);
      const project = projectUnits.find((entry) => entry.slug === currentUnit.slug && entry.topics.some((item) => item.file === topic.file));
      return project ? loadMarkdown(topic.file, project.directory, true) : Promise.reject(new Error('Imported Markdown is missing.'));
    }
    return loadMarkdown(topic.file, currentUnit.directory, currentUnit.origin === 'project');
  }, [units, browserLibrary, projectUnits]);

  const value = useMemo(() => ({
    topics, syllabusTopics, bundledCount: includedUnits.reduce((sum, entry) => sum + entry.topics.length, 0), units, status, mode, revision, localUnits, projectUnits, importedUnits,
    importedAt: browserLibrary?.importedAt ?? null, hasLocal, reload, setMode, importLocalFiles, removeImportedFiles, getMarkdown,
  }), [topics, syllabusTopics, includedUnits, units, status, mode, revision, localUnits, projectUnits, importedUnits, browserLibrary, hasLocal, reload, setMode, importLocalFiles, removeImportedFiles, getMarkdown]);

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): CatalogValue {
  const context = useContext(CatalogContext);
  if (!context) throw new Error('useCatalog must be inside CatalogProvider');
  return context;
}
