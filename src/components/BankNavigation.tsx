import { BookOpenCheck, Files, LibraryBig } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { classicBank, mainBank, suppliedBank } from '../data/practiceInventory';

const options = [
  { to: '/practice', title: 'Question Bank', eyebrow: 'Main collection', icon: LibraryBig,
    detail: `Paper 1 ${mainBank.papers.P1} · Paper 2 ${mainBank.papers.P2} · Paper 3 ${mainBank.papers.P3}` },
  { to: '/question-bank', title: 'Classic Unit 1', eyebrow: 'Preserved bank', icon: BookOpenCheck,
    detail: `${classicBank.questions} questions · ${classicBank.marks} marks to earn` },
  { to: '/ib-papers', title: 'Supplied transcriptions', eyebrow: 'Unverified archive', icon: Files,
    detail: `P1 ${suppliedBank.papers.P1.questions} / ${suppliedBank.papers.P1.marks} marks · P2 ${suppliedBank.papers.P2.questions} / ${suppliedBank.papers.P2.marks} marks` },
] as const;
/** One bank, three clearly labeled collections. The same selector appears at
 * the top of each page, while the course sidebar has a single entry. */
export function BankNavigation() {
  const { pathname } = useLocation();
  return <nav aria-label="Question Bank collections" className="bank-collection-nav mt-6 grid gap-2 sm:grid-cols-3">
    {options.map(({ to, title, eyebrow, icon: Icon, detail }) => <Link key={to} to={to} aria-current={pathname === to ? 'page' : undefined}
      className={`group min-w-0 rounded-xl border px-4 py-4 transition-colors focus-visible:outline-offset-2 ${pathname === to ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface text-ink hover:border-ink hover:bg-raised'}`}>
      <span className="flex items-center gap-2.5 text-[12px] font-semibold sm:text-[13px]"><Icon size={17} strokeWidth={1.7} aria-hidden="true" />{title}</span>
      <span className={`mt-2.5 block font-mono text-[9px] uppercase tracking-[0.12em] ${pathname === to ? 'text-canvas/65' : 'text-muted'}`}>{eyebrow}</span>
      <span className={`mt-1.5 block text-[10px] leading-relaxed ${pathname === to ? 'text-canvas/85' : 'text-muted'}`}>{detail}</span>
    </Link>)}
  </nav>;
}
