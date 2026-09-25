import { FileQuestion, LoaderCircle } from 'lucide-react';

interface StateViewProps {
  kind: 'loading' | 'error';
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function StateView({ kind, title, message, onRetry }: StateViewProps) {
  return (
    <div className="mx-auto flex min-h-[52vh] max-w-md flex-col items-center justify-center px-6 py-20 text-center" role={kind === 'error' ? 'alert' : 'status'}>
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-muted">
        {kind === 'loading' ? <LoaderCircle size={20} className="animate-spin" aria-hidden="true" /> : <FileQuestion size={20} aria-hidden="true" />}
      </span>
      <h2 className="text-[21px] font-semibold tracking-[-0.04em]">{title ?? (kind === 'loading' ? 'Loading…' : 'Something went wrong')}</h2>
      {message && <p className="mt-2 text-[14px] leading-relaxed text-muted">{message}</p>}
      {kind === 'error' && onRetry && <button type="button" onClick={onRetry} className="mt-6 rounded-full bg-accent px-5 py-2.5 text-[12px] font-semibold text-accent-ink transition-opacity hover:opacity-75">Try again</button>}
    </div>
  );
}
