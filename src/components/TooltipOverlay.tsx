import { useEffect, useRef, useState } from 'react';

interface Tip { label: string; x: number; y: number }
/** Opt-in tooltip for data-tip controls. Text remains available to screen readers via aria-label. */
export function TooltipOverlay() {
  const [tip, setTip] = useState<Tip | null>(null);
  const pending = useRef<number | null>(null);
  useEffect(() => {
    function clear() { if (pending.current !== null) window.clearTimeout(pending.current); pending.current = null; setTip(null); }
    function reveal(target: HTMLElement, immediate = false) {
      if (!target.dataset.tip) return;
      if (pending.current !== null) window.clearTimeout(pending.current);
      const show = () => {
        // Controls such as the theme switch can change their label while hovered.
        const label = target.dataset.tip;
        if (!label || !target.isConnected) return;
        const box = target.getBoundingClientRect();
        setTip({ label, x: Math.min(Math.max(100, box.left + box.width / 2), window.innerWidth - 100), y: Math.max(85, box.top - 10) });
      };
      if (immediate) show(); else pending.current = window.setTimeout(show, 360);
    }
    const hover = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const element = (event.target as Element | null)?.closest<HTMLElement>('[data-tip]');
      if (element) reveal(element); else clear();
    };
    const leave = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>('[data-tip]');
      const next = (event.relatedTarget as Element | null)?.closest<HTMLElement>('[data-tip]');
      if (target && target !== next) clear();
    };
    const focus = (event: FocusEvent) => { const element = (event.target as Element | null)?.closest<HTMLElement>('[data-tip]'); if (element) reveal(element, true); };
    document.addEventListener('pointerover', hover);
    document.addEventListener('pointerout', leave);
    document.addEventListener('focusin', focus);
    document.addEventListener('focusout', clear);
    document.addEventListener('pointerdown', clear);
    document.addEventListener('click', clear);
    window.addEventListener('scroll', clear, true);
    return () => { clear(); document.removeEventListener('pointerover', hover); document.removeEventListener('pointerout', leave); document.removeEventListener('focusin', focus); document.removeEventListener('focusout', clear); document.removeEventListener('pointerdown', clear); document.removeEventListener('click', clear); window.removeEventListener('scroll', clear, true); };
  }, []);
  return tip ? <div role="tooltip" className="pointer-events-none fixed z-[130] max-w-[210px] -translate-x-1/2 -translate-y-full rounded-lg border border-line bg-ink px-3 py-1.5 text-center text-[11px] leading-relaxed text-canvas shadow-float" style={{ left: tip.x, top: tip.y }}>{tip.label}</div> : null;
}
