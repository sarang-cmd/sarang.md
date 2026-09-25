import { FastForward, Pause, Waves } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useFocus } from '../context/FocusContext';

export function FocusMiniPlayer() {
  const { pathname } = useLocation();
  const { playing, preset, pause, next } = useFocus();
  if (!playing || pathname === '/focus') return null;
  return <div className="fixed bottom-5 left-3 z-[65] flex items-center gap-2 rounded-full border border-line bg-canvas px-3 py-2 text-[11px] font-semibold shadow-float sm:left-5"><Waves size={15} aria-hidden="true" /><Link to="/focus" className="max-w-[110px] truncate hover:underline">{preset} · Focus</Link><button type="button" onClick={pause} aria-label="Pause focus sound" className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-canvas"><Pause size={13} /></button><button type="button" onClick={next} aria-label="Next focus sound variation" className="flex h-7 w-7 items-center justify-center rounded-full border border-line hover:bg-surface"><FastForward size={13} /></button></div>;
}
