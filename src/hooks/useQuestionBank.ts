import { useCallback, useEffect, useState } from 'react';
import type { PracticeQuestion } from '../types';

let cachedQuestions: Promise<PracticeQuestion[]> | undefined;

function loadQuestions(): Promise<PracticeQuestion[]> {
  if (!cachedQuestions) {
    cachedQuestions = fetch(`${import.meta.env.BASE_URL}content/question-bank/sequences-and-series.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`Question bank request failed (${response.status})`);
        return response.json() as Promise<unknown>;
      })
      .then((data) => {
        if (!Array.isArray(data) || !data.every((question) =>
          question && typeof question.id === 'string' && typeof question.topic === 'string' &&
          typeof question.strand === 'string' && (question.level === 'Core' || question.level === 'Stretch') &&
          typeof question.marks === 'number' && typeof question.prompt === 'string' &&
          Array.isArray(question.scheme) && question.scheme.every((step: { code: unknown; text: unknown; marks: unknown }) =>
            step && typeof step.code === 'string' && typeof step.text === 'string' && typeof step.marks === 'number')
        )) throw new Error('The question bank has an invalid format.');
        const questions = data as PracticeQuestion[];
        if (new Set(questions.map((question) => question.id)).size !== questions.length ||
          questions.some((question) => question.marks !== question.scheme.reduce((sum, step) => sum + step.marks, 0))) {
          throw new Error('Question IDs must be unique and marking points must match the total marks.');
        }
        return questions;
      })
      .catch((error: unknown) => { cachedQuestions = undefined; throw error; });
  }
  return cachedQuestions;
}

export function useQuestionBank() {
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    setStatus('loading');
    loadQuestions().then(
      (items) => { if (active) { setQuestions(items); setStatus('ready'); } },
      () => { if (active) setStatus('error'); },
    );
    return () => { active = false; };
  }, [attempt]);
  const retry = useCallback(() => setAttempt((previous) => previous + 1), []);
  return { questions, status, retry };
}
