import { Sparkles } from 'lucide-react';
import { useTutorStore } from '../store/useTutorStore';

/** Lightweight launcher: full tutor and math renderer are loaded only when opened. */
export function TutorLauncher() {
  const minimized = useTutorStore((state) => state.minimized);
  const open = useTutorStore((state) => state.open);
  const openTutor = useTutorStore((state) => state.openTutor);
  if (open && !minimized) return null;
  return <button type="button" aria-label={minimized ? 'Expand tutor' : 'Open Socratic tutor'} onClick={openTutor} className="fixed bottom-5 right-5 z-[80] inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line bg-ink px-4 text-[12px] font-semibold text-canvas shadow-float transition-transform hover:-translate-y-0.5 sm:px-5"><Sparkles size={16} aria-hidden="true" /><span className="hidden sm:inline">{minimized ? 'Continue tutoring' : 'Ask the tutor'}</span></button>;
}
