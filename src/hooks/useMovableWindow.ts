import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';

interface Point { x: number; y: number }
const keyFor = (id: string) => `sarang-window-${id}`;
function startPoint(id: string, defaultPoint: Point): Point {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(keyFor(id)) ?? 'null');
    if (saved && typeof saved === 'object' && 'x' in saved && 'y' in saved &&
      Number.isFinite(saved.x) && Number.isFinite(saved.y)) return { x: Number(saved.x), y: Number(saved.y) };
  } catch { /* Use the default placement. */ }
  return defaultPoint;
}

/** Drags the entire panel from its heading, with arrow-key movement as an alternative. */
export function useMovableWindow<T extends HTMLElement = HTMLElement>(id: string, defaultPoint: Point) {
  const panel = useRef<T | null>(null);
  const [position, setPosition] = useState<Point>(() => startPoint(id, defaultPoint));
  const drag = useRef<{ pointerId: number; x: number; y: number; left: number; top: number } | null>(null);
  const clamp = useCallback((point: Point): Point => {
    const width = panel.current?.getBoundingClientRect().width ?? 320;
    return {
      x: Math.min(Math.max(8, point.x), Math.max(8, window.innerWidth - Math.min(width, window.innerWidth) - 8)),
      y: Math.min(Math.max(76, point.y), Math.max(76, window.innerHeight - 54)),
    };
  }, []);
  useEffect(() => {
    try { localStorage.setItem(keyFor(id), JSON.stringify(position)); } catch { /* Session movement still works. */ }
  }, [id, position]);
  const fit = useCallback(() => setPosition((previous) => {
    const next = clamp(previous);
    return next.x === previous.x && next.y === previous.y ? previous : next;
  }), [clamp]);
  useEffect(() => {
    window.addEventListener('resize', fit);
    fit();
    return () => window.removeEventListener('resize', fit);
  }, [fit]);
  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest('button, a, input, select, textarea')) return;
    drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: position.x, top: position.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const current = drag.current;
    if (current?.pointerId !== event.pointerId) return;
    setPosition(clamp({ x: current.left + event.clientX - current.x, y: current.top + event.clientY - current.y }));
  };
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const step = event.shiftKey ? 32 : 12;
    const dx = event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0;
    const dy = event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0;
    if (!dx && !dy) return;
    event.preventDefault();
    setPosition((previous) => clamp({ x: previous.x + dx, y: previous.y + dy }));
  };
  return { panel, position, fit, handle: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp, onKeyDown } };
}
