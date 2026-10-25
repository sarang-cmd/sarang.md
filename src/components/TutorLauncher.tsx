import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { ChevronLeft, ChevronRight, Grip } from 'lucide-react';
import { TutorGlyph } from './TutorGlyph';
import { useTutorStore } from '../store/useTutorStore';

interface Location { side: 'left' | 'right'; y: number }
const KEY = 'sarang-tutor-tab-position-v1';
function initial(minimized: boolean): Location {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Location | null;
    if (value && (value.side === 'left' || value.side === 'right') && Number.isFinite(value.y))
      return { side: value.side, y: Math.max(82, Math.min(innerHeight - 65, value.y)) };
  } catch { /* Use a safe default. */ }
  return { side: 'right', y: minimized ? Math.max(95, Math.round(innerHeight * 0.45)) : Math.max(95, innerHeight - 90) };
}
/** The compact tutor tab snaps to a screen edge. Drag its grip with a pointer,
 * or focus the grip and use arrow keys to reposition it. */
export function TutorLauncher() {
  const minimized = useTutorStore((state) => state.minimized);
  const open = useTutorStore((state) => state.open);
  const openTutor = useTutorStore((state) => state.openTutor);
  const [position, setPosition] = useState<Location>(() => initial(minimized));
  const drag = useRef<{ yOffset: number } | null>(null);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(position)); } catch { /* Layout is still usable. */ } }, [position]);
  useEffect(() => {
    const fit = () => setPosition((previous) => ({ ...previous, y: Math.max(82, Math.min(innerHeight - 65, previous.y)) }));
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  if (open && !minimized) return null;
  function move(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!drag.current) return;
    setPosition({ side: event.clientX < innerWidth / 2 ? 'left' : 'right', y: Math.max(82, Math.min(innerHeight - 65, event.clientY - drag.current.yOffset)) });
  }
  return <div role="group" aria-label="Tutor tab" className={`fixed z-[80] flex items-center border border-line bg-ink text-canvas shadow-float ${minimized ? 'gap-0 rounded-lg' : 'gap-1 rounded-full px-1.5'} ${position.side === 'left' ? 'left-0' : 'right-0'}`} style={{ top: position.y }}>
    <button type="button" onClick={openTutor} aria-label={minimized ? 'Expand tutor from side tab' : 'Open Sarang tutor'} data-tip={minimized ? 'Expand Sarang tutor' : 'Sarang math tutor'} className={`inline-flex min-h-11 items-center justify-center gap-2 text-[12px] font-semibold ${minimized ? 'w-9 flex-col py-1' : 'px-2 sm:px-3'}`}>
      {minimized && (position.side === 'right' ? <ChevronLeft size={15} aria-hidden="true" /> : <ChevronRight size={15} aria-hidden="true" />)}
      <TutorGlyph /><span className="hidden sm:inline">{minimized ? '' : 'Ask Sarang'}</span>
    </button>
    <button type="button" aria-label="Move tutor tab. Drag or use arrow keys." data-tip="Move tutor tab" className={`flex touch-none cursor-grab items-center justify-center text-canvas/75 active:cursor-grabbing ${minimized ? 'h-9 w-5 border-t border-canvas/20' : 'h-9 w-6'}`}
      onPointerDown={(event) => { drag.current = { yOffset: event.clientY - position.y }; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={move} onPointerUp={(event) => { move(event); drag.current = null; }} onPointerCancel={() => { drag.current = null; }}
      onKeyDown={(event) => { if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return; event.preventDefault(); setPosition((previous) => ({ side: event.key === 'ArrowLeft' ? 'left' : event.key === 'ArrowRight' ? 'right' : previous.side, y: Math.max(82, Math.min(innerHeight - 65, previous.y + (event.key === 'ArrowDown' ? 16 : event.key === 'ArrowUp' ? -16 : 0))) })); }}><Grip size={13} aria-hidden="true" /></button>
  </div>;
}
