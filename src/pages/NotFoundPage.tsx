import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[68vh] max-w-[620px] flex-col items-start justify-center px-6 py-20">
      <p className="section-label">404 / Page not found</p>
      <h1 className="mt-5 text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.07em]">This page isn't in the notes<span className="text-faint">.</span></h1>
      <p className="mt-5 text-[15px] leading-relaxed text-muted">The link might have moved, or the topic may not be in the course yet.</p>
      <Link to="/units" className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[12px] font-semibold text-accent-ink transition-opacity hover:opacity-80"><ArrowLeft size={15} aria-hidden="true" /> Browse all units</Link>
    </div>
  );
}
