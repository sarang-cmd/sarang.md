import { create } from 'zustand';
import type { MarkStep } from '../types';
import type { Subject } from '../lib/tutorApi';
import { useSettingsStore } from './useSettingsStore';
import { isExamActive, useExamStore } from './useExamStore';

export interface StudyContext {
  key: string;
  route: string;
  title: string;
  text: string;
  subject: Subject;
  sourceStatus?: string;
  /** Held in memory and sent to a provider only after deliberate reveal. */
  scheme?: MarkStep[];
}

interface TutorState {
  open: boolean;
  minimized: boolean;
  docked: boolean;
  context: StudyContext | null;
  openTutor: () => void;
  closeTutor: () => void;
  minimizeTutor: () => void;
  setDocked: (value: boolean) => void;
  setContext: (context: StudyContext | null) => void;
  openFor: (context: StudyContext) => void;
}

const permitted = () => useSettingsStore.getState().aiEnabled && !isExamActive(useExamStore.getState().attempt);
export const useTutorStore = create<TutorState>((set) => ({
  open: false, minimized: false, docked: false, context: null,
  openTutor: () => { if (permitted()) set({ open: true, minimized: false }); },
  closeTutor: () => set({ open: false, minimized: false }),
  minimizeTutor: () => set({ open: true, minimized: true }),
  setDocked: (docked) => set({ docked }),
  setContext: (context) => set({ context }),
  openFor: (context) => { if (permitted()) set({ context, open: true, minimized: false }); },
}));
