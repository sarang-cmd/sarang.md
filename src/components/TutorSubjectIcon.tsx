import { Atom, BookText, FlaskConical, Languages, Sigma } from 'lucide-react';
import type { Subject } from '../lib/tutorApi';

/** Each of the five supported subjects has its own icon, with a text label beside it. */
export function TutorSubjectIcon({ subject, size = 17 }: { subject: Subject; size?: number }) {
  switch (subject) {
    case 'Mathematics AA HL': return <Sigma size={size} aria-hidden="true" />;
    case 'Chemistry HL': return <FlaskConical size={size} aria-hidden="true" />;
    case 'Physics HL': return <Atom size={size} aria-hidden="true" />;
    case 'English A SL': return <BookText size={size} aria-hidden="true" />;
    case 'German A SL': return <Languages size={size} aria-hidden="true" />;
  }
}
