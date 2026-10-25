import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/**
 * Adapted from the supplied six-stop model selector for student effort.
 * The custom element owns its Shadow DOM, native keyboard-operable range input,
 * label transitions and a small, decorative canvas. No external assets or fonts.
 */
export const EFFORT_LEVELS = [
  { label: 'Guided', detail: 'More scaffolding. You still make the next move.' },
  { label: 'Steady', detail: 'One clear nudge, then you try.' },
  { label: 'Focused', detail: 'A short prompt with fewer clues.' },
  { label: 'Independent', detail: 'Test your plan before I hint.' },
  { label: 'Deep work', detail: 'Minimal clues. Explain your reasoning.' },
  { label: 'Locked in', detail: 'You lead. I only check your next idea.' },
] as const;
export type EffortValue = 0 | 1 | 2 | 3 | 4 | 5;

const styles = `
  :host { display:block; min-width:0; font-family:inherit; color:rgb(var(--ink)); }
  * { box-sizing:border-box; }
  .root { position:relative; overflow:visible; padding:13px 14px 11px; border:1px solid rgb(var(--line)); border-radius:13px; background:rgb(var(--surface)); }
  .top { display:flex; align-items:center; gap:8px; position:relative; z-index:2; }
  .title { flex:1; font-size:11px; font-weight:700; letter-spacing:.01em; }
  .value { display:inline-flex; min-width:83px; justify-content:flex-end; align-items:center; font-size:11px; font-weight:700; letter-spacing:-.02em; transition:transform .22s,opacity .22s; }
  .value.shift { transform:translateY(-4px); opacity:.5; }
  .info { display:grid; place-items:center; width:25px; height:25px; padding:0; border:1px solid rgb(var(--line)); border-radius:50%; color:rgb(var(--muted)); background:rgb(var(--canvas)); cursor:pointer; font-size:12px; font-family:serif; font-weight:700; }
  .info:hover,.info[aria-expanded="true"] { border-color:rgb(var(--ink)); color:rgb(var(--ink)); }
  .info:focus-visible, input:focus-visible { outline:2px solid rgb(var(--ink)); outline-offset:3px; }
  .track-wrap { position:relative; margin:11px 5px 0; height:28px; display:flex; align-items:center; }
  canvas { position:absolute; top:-10px; left:-10px; width:calc(100% + 20px); height:45px; pointer-events:none; opacity:.82; }
  .track { position:absolute; inset:auto 0; height:5px; border-radius:10px; background:rgb(var(--line)); }
  .fill { display:block; height:100%; border-radius:inherit; background:rgb(var(--ink)); transition:width .3s cubic-bezier(.2,.9,.2,1); }
  input { position:absolute; inset:0; width:100%; height:100%; margin:0; appearance:none; -webkit-appearance:none; background:transparent; cursor:pointer; outline:none; touch-action:none; }
  input::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; background:rgb(var(--canvas)); border:3px solid rgb(var(--ink)); border-radius:50%; box-shadow:0 1px 7px rgb(var(--ink)/.2); transition:transform .18s; }
  input::-moz-range-thumb { width:14px; height:14px; background:rgb(var(--canvas)); border:3px solid rgb(var(--ink)); border-radius:50%; box-shadow:0 1px 7px rgb(var(--ink)/.2); transition:transform .18s; }
  input:hover::-webkit-slider-thumb { transform:scale(1.14); }
  .ticks { display:flex; justify-content:space-between; margin:0 4px; }
  .tick { width:2px; height:4px; border-radius:2px; background:rgb(var(--muted)/.55); transition:height .2s,background .2s; }
  .tick.active { height:7px; background:rgb(var(--ink)); }
  .detail { margin:8px 0 0; min-height:15px; font-size:10px; line-height:1.45; color:rgb(var(--muted)); }
  .tip { position:absolute; z-index:3; bottom:calc(100% + 6px); right:0; width:min(310px,100%); margin:0; padding:10px 11px; border:1px solid rgb(var(--line)); border-radius:8px; background:rgb(var(--canvas)); box-shadow:0 6px 20px rgb(var(--ink)/.12); font-size:10px; line-height:1.6; color:rgb(var(--muted)); pointer-events:none; }
  :host([disabled]) .root { opacity:.5; } :host([disabled]) input,:host([disabled]) .info { cursor:not-allowed; }
  @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation:none!important; transition:none!important; } canvas { display:none; } }
`;

const BaseElement = (typeof HTMLElement === 'undefined' ? class {} : HTMLElement) as typeof HTMLElement;
export class StudyEffortElement extends BaseElement {
  static get observedAttributes() { return ['value', 'open', 'disabled']; }
  private slider!: HTMLInputElement;
  private label!: HTMLElement;
  private detail!: HTMLElement;
  private fill!: HTMLElement;
  private ticks!: HTMLElement;
  private tip!: HTMLElement;
  private info!: HTMLButtonElement;
  private canvas!: HTMLCanvasElement;
  private timer = 0;
  private frame = 0;
  private drawnAt = 0;
  private motion = true;
  private hoveringHelp = false;
  private focusedHelp = false;
  private tappedHelp = false;

  private syncHelp() { this.open = !this.disabled && (this.hoveringHelp || this.focusedHelp || this.tappedHelp); }

  get value(): EffortValue { return Math.max(0, Math.min(5, Number(this.getAttribute('value')) || 0)) as EffortValue; }
  set value(next: EffortValue) { this.setAttribute('value', String(Math.max(0, Math.min(5, Number(next))))); }
  get open(): boolean { return this.hasAttribute('open'); }
  set open(value: boolean) { this.toggleAttribute('open', value); }
  get disabled(): boolean { return this.hasAttribute('disabled'); }
  set disabled(value: boolean) { this.toggleAttribute('disabled', value); }

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${styles}</style><div class="root">
      <div class="top"><span class="title">Your effort</span><span class="value" aria-hidden="true"></span><button class="info" type="button" aria-label="What does student effort change?" aria-describedby="effort-tip" aria-expanded="false" aria-controls="effort-tip">i</button></div>
      <div class="track-wrap"><canvas aria-hidden="true"></canvas><div class="track"><span class="fill"></span></div><input type="range" min="0" max="5" step="1" aria-label="Student effort" /></div>
      <div class="ticks" aria-hidden="true"></div><p class="detail"></p>
      <div id="effort-tip" class="tip" role="tooltip" hidden>Effort changes how much the tutor scaffolds your thinking, not the AI model, its price, or the difficulty of a question. At Locked in you do most of the reasoning. Every setting still withholds the final answer until you explicitly reveal it.</div>
    </div>`;
    this.slider = root.querySelector('input')!;
    this.label = root.querySelector('.value')!;
    this.detail = root.querySelector('.detail')!;
    this.fill = root.querySelector('.fill')!;
    this.ticks = root.querySelector('.ticks')!;
    this.tip = root.querySelector('.tip')!;
    this.info = root.querySelector('.info')!;
    this.canvas = root.querySelector('canvas')!;
    this.slider.addEventListener('input', () => {
      this.setAttribute('value', this.slider.value);
      this.dispatchEvent(new CustomEvent('effort-input', { detail: { value: this.value }, bubbles: true, composed: true }));
    });
    this.slider.addEventListener('change', () => this.dispatchEvent(new CustomEvent('effort-change', { detail: { value: this.value }, bubbles: true, composed: true })));
    this.info.addEventListener('mouseenter', () => { this.hoveringHelp = true; this.syncHelp(); });
    this.info.addEventListener('mouseleave', () => { this.hoveringHelp = false; this.syncHelp(); });
    this.info.addEventListener('focus', () => { this.focusedHelp = true; this.syncHelp(); });
    this.info.addEventListener('blur', () => { this.focusedHelp = false; this.tappedHelp = false; this.syncHelp(); });
    this.info.addEventListener('click', () => { if (!this.disabled) { this.tappedHelp = true; this.syncHelp(); } });
    this.info.addEventListener('keydown', (event) => { if (event.key === 'Escape') { this.tappedHelp = false; this.hoveringHelp = false; this.info.blur(); } });
    this.ticks.innerHTML = EFFORT_LEVELS.map(() => '<span class="tick"></span>').join('');
  }

  connectedCallback() {
    this.motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.render();
  }
  disconnectedCallback() { clearTimeout(this.timer); cancelAnimationFrame(this.frame); }
  attributeChangedCallback() { if (this.slider) this.render(); }

  private render() {
    this.slider.value = String(this.value);
    this.slider.disabled = this.disabled;
    this.info.disabled = this.disabled;
    this.slider.setAttribute('aria-valuetext', `${EFFORT_LEVELS[this.value].label}: ${EFFORT_LEVELS[this.value].detail}`);
    this.label.classList.add('shift');
    clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.label.textContent = EFFORT_LEVELS[this.value].label;
      this.label.classList.remove('shift');
    }, this.motion ? 90 : 0);
    this.detail.textContent = EFFORT_LEVELS[this.value].detail;
    this.fill.style.width = `${this.value * 20}%`;
    this.ticks.querySelectorAll('.tick').forEach((tick, index) => tick.classList.toggle('active', index <= this.value));
    this.tip.hidden = !this.open;
    this.info.setAttribute('aria-expanded', String(this.open));
    if (this.motion) { this.drawnAt = performance.now(); cancelAnimationFrame(this.frame); this.draw(); }
  }

  private draw() {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(rect.width * ratio);
    this.canvas.height = Math.round(rect.height * ratio);
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    const elapsed = performance.now() - this.drawnAt;
    const fade = Math.max(0, 1 - elapsed / 580);
    const center = 10 + (rect.width - 20) * this.value / 5;
    const ink = getComputedStyle(this).getPropertyValue('--ink').trim() || '30 30 30';
    for (let row = 0; row < 4; row++) for (let x = -3; x <= 3; x++) {
      const distance = Math.abs(x) / 4;
      ctx.fillStyle = `rgb(${ink} / ${Math.max(0, fade * (1 - distance) * .25)})`;
      ctx.fillRect(center + x * 7, row < 2 ? row * 6 + 1 : rect.height - (4 - row) * 6, 2.4, 2.4);
    }
    if (fade > 0.01) this.frame = requestAnimationFrame(() => this.draw());
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('study-effort-selector')) {
  customElements.define('study-effort-selector', StudyEffortElement);
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'study-effort-selector': React.DetailedHTMLProps<React.HTMLAttributes<StudyEffortElement>, StudyEffortElement> & { value?: string; disabled?: string; open?: string };
    }
  }
}

export interface ClaudeModelSelectorProps {
  value: EffortValue;
  onValueChange: (value: EffortValue) => void;
  disabled?: boolean;
  className?: string;
}
/** A React forwardRef wrapper over the Shadow DOM control. Kept under the requested filename. */
export const ClaudeModelSelector = forwardRef<StudyEffortElement, ClaudeModelSelectorProps>(function ClaudeModelSelector({ value, onValueChange, disabled, className }, ref) {
  const element = useRef<StudyEffortElement>(null);
  useImperativeHandle(ref, () => element.current!, []);
  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const handle = (event: Event) => onValueChange((event as CustomEvent<{ value: EffortValue }>).detail.value);
    node.addEventListener('effort-input', handle);
    return () => node.removeEventListener('effort-input', handle);
  }, [onValueChange]);
  return <study-effort-selector ref={element} className={className} value={String(value)} disabled={disabled ? '' : undefined} />;
});

export default ClaudeModelSelector;
