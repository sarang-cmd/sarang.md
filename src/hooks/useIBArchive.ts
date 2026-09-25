import { useCallback, useEffect, useState } from 'react';
import type { PaperQuestion } from '../types';

let cachedArchive: Promise<PaperQuestion[]> | undefined;

function loadArchive(): Promise<PaperQuestion[]> {
  if (!cachedArchive) cachedArchive = fetch(`${import.meta.env.BASE_URL}content/ib-bank/archive.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Paper archive request failed (${response.status})`);
      return response.json() as Promise<unknown>;
    })
    .then((data) => {
      if (!Array.isArray(data) || data.length !== 50 || !data.every((item) =>
        item && typeof item.id === 'string' && (item.paper === 'P1' || item.paper === 'P2') &&
        typeof item.topic === 'string' && typeof item.prompt === 'string' &&
        typeof item.session === 'string' && typeof item.timeZone === 'string' &&
        typeof item.code === 'string' && typeof item.sourceStatus === 'string' &&
        typeof item.sourceFile === 'string' && typeof item.sourceQuestion === 'number' &&
        typeof item.marks === 'number' && Array.isArray(item.notices) &&
        Array.isArray(item.scheme) && item.scheme.every((step: { code: unknown; text: unknown; marks: unknown }) =>
          step && typeof step.code === 'string' && typeof step.text === 'string' && typeof step.marks === 'number') &&
        Array.isArray(item.checks) && item.checks.every((check: { label: unknown; value: unknown }) =>
          check && typeof check.label === 'string' && typeof check.value === 'number') &&
        item.marks === item.scheme.reduce((sum: number, step: { marks: number }) => sum + step.marks, 0)
      )) throw new Error('Paper archive has invalid or incomplete entries.');
      if (new Set(data.map((item: { id: string }) => item.id)).size !== data.length) throw new Error('Duplicate paper question IDs.');
      return (data as PaperQuestion[]).map((item): PaperQuestion => ({ ...item, kind: 'transcription' }));
    })
    .catch((error: unknown) => { cachedArchive = undefined; throw error; });
  return cachedArchive;
}

export function useIBArchive() {
  const [questions, setQuestions] = useState<PaperQuestion[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setStatus('loading');
    loadArchive().then(
      (items) => { if (active) { setQuestions(items); setStatus('ready'); } },
      () => { if (active) setStatus('error'); },
    );
    return () => { active = false; };
  }, [attempt]);
  const retry = useCallback(() => setAttempt((value) => value + 1), []);
  return { questions, status, retry };
}
