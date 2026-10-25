/** One-based page numbers are stored in the URL; UI state uses zero-based pages. */
export function pageCount(totalItems: number, pageSize: number): number {
  return Math.max(1, Math.ceil(Math.max(0, totalItems) / Math.max(1, pageSize)));
}

export function pageFromUrl(raw: string | null, totalItems: number, pageSize: number): number {
  const requested = raw && /^[1-9]\d{0,5}$/.test(raw) ? Number(raw) - 1 : 0;
  return Math.max(0, Math.min(requested || 0, pageCount(totalItems, pageSize) - 1));
}

export function pageForQuestion<T>(items: T[], id: string | null, pageSize: number, getId: (item: T) => string): number | null {
  if (!id) return null;
  const index = items.findIndex((item) => getId(item) === id);
  return index >= 0 ? Math.floor(index / pageSize) : null;
}

/** Move the reader to the new result set without changing the browser's route. */
export function focusPageResults(id: string): void {
  window.requestAnimationFrame(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    element.focus({ preventScroll: true });
  });
}
