import { Atom, BookText, FlaskConical, Languages, Sigma } from 'lucide-react';
import type { Subject } from '../lib/tutorApi';

/** Historical icon values are retained for older encrypted chat records. New tutoring is math-only. */
export function TutorSubjectIcon({ subject, size = 17 }: { subject: Subject; size?: number }) {
  switch (subject) {
    case 'Mathematics AA HL': return <Sigma size={size} aria-hidden="true" />;
    case 'Chemistry HL': return <FlaskConical size={size} aria-hidden="true" />;
    case 'Physics HL': return <Atom size={size} aria-hidden="true" />;
    case 'English A SL': return <BookText size={size} aria-hidden="true" />;
    case 'German A SL': return <Languages size={size} aria-hidden="true" />;
  }
}
