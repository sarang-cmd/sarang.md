import { useEffect, useRef, useState } from 'react';
import { BookOpen, Link2, Moon, Printer, Sparkles, Sun, Volume2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useVaultStore } from '../store/useVaultStore';
import { useTutorStore } from '../store/useTutorStore';

interface MenuPosition { x: number; y: number }

/** Optional site-specific right-click commands. Text fields retain the native menu. */
export function ContextMenu() {
  const navigate = useNavigate();
  const [point, setPoint] = useState<MenuPosition | null>(null);
  const [notice, setNotice] = useState('');
  const first = useRef<HTMLButtonElement>(null);
  const theme = useVaultStore((state) => state.theme);
  const toggleTheme = useVaultStore((state) => state.toggleTheme);
  const setSoundWindowOpen = useVaultStore((state) => state.setSoundWindowOpen);
  const openTutor = useTutorStore((state) => state.openTutor);
  useEffect(() => {
    const onContext = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || window.getSelection()?.toString().trim() || target.closest('input, textarea, select, [contenteditable="true"], iframe, video, [data-native-menu]')) return;
      event.preventDefault();
      setNotice('');
      setPoint({ x: Math.min(event.clientX, window.innerWidth - 230), y: Math.min(event.clientY, window.innerHeight - 344) });
    };
    const onDown = (event: PointerEvent) => {
      if (!(event.target as HTMLElement | null)?.closest('[data-context-menu]')) setPoint(null);
    };
    const onClose = (event: KeyboardEvent) => { if (event.key === 'Escape') setPoint(null); };
    const onScroll = () => setPoint(null);
    document.addEventListener('contextmenu', onContext);
    document.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onClose);
    window.addEventListener('scroll', onScroll, true);
    return () => { document.removeEventListener('contextmenu', onContext); document.removeEventListener('pointerdown', onDown); window.removeEventListener('keydown', onClose); window.removeEventListener('scroll', onScroll, true); };
  }, []);
  useEffect(() => { if (point) first.current?.focus({ preventScroll: true }); }, [point]);
  if (!point) return null;
  function action(callback: () => void) { setPoint(null); callback(); }
  const items = [
    { label: 'Open original paper practice', icon: BookOpen, action: () => navigate('/practice') },
    { label: 'Open sound controls', icon: Volume2, action: () => setSoundWindowOpen(true) },
    { label: 'Ask the Socratic tutor', icon: Sparkles, action: openTutor },
    { label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', icon: theme === 'dark' ? Sun : Moon, action: toggleTheme },
    { label: 'Print or save this page', icon: Printer, action: () => window.print() },
  ];
  return <div data-context-menu role="menu" aria-label="Page actions" className="fixed z-[125] max-h-[calc(100dvh-85px)] w-[214px] overflow-y-auto rounded-xl border border-line bg-canvas p-1.5 text-ink shadow-float" style={{ left: Math.max(8, point.x), top: Math.max(76, point.y) }} onKeyDown={(event) => {
    const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)'));
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); buttons[(index + buttons.length + (event.key === 'ArrowDown' ? 1 : -1)) % buttons.length]?.focus(); }
  }}>
    <div className="flex items-center justify-between border-b border-line px-2.5 py-2"><span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">Page actions</span><button type="button" role="menuitem" aria-label="Close page actions" onClick={() => setPoint(null)} className="rounded p-1 hover:bg-surface"><X size={13} /></button></div>
    <button type="button" role="menuitem" ref={first} onClick={() => { void navigator.clipboard.writeText(location.href).then(() => setNotice('Page link copied.'), () => setNotice('Copy the link from your address bar instead.')); }} className="context-menu-item"><Link2 size={15} /> Copy page link</button>
    {items.map(({ label, icon: Icon, action: run }) => <button key={label} type="button" role="menuitem" onClick={() => action(run)} className="context-menu-item"><Icon size={15} /> {label}</button>)}
    {notice && <p className="border-t border-line px-2.5 py-2 text-[10px] text-muted" role="status">{notice}</p>}
  </div>;
}
