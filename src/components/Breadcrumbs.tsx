import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 sm:mb-12">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <ChevronRight size={13} strokeWidth={1.8} className="text-faint" aria-hidden="true" />}
            {item.to ? <Link to={item.to} className="rounded-sm transition-colors hover:text-ink hover:underline hover:underline-offset-4">{item.label}</Link> : <span aria-current="page" className="font-medium text-ink">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
