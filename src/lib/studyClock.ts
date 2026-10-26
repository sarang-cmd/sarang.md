/** What the study timer is doing, shared so other parts of the app (the Discord status) can read it without owning it. */
export interface ClockState { running: boolean; phase: 'work' | 'rest'; endsAt: number }
let current: ClockState = { running: false, phase: 'work', endsAt: 0 };
const listeners = new Set<() => void>();
export const getClock = () => current;
export function publishClock(next: ClockState) {
  if (next.running === current.running && next.phase === current.phase && next.endsAt === current.endsAt) return;
  current = next; listeners.forEach((listener) => listener());
}
export const subscribeClock = (listener: () => void) => { listeners.add(listener); return () => { listeners.delete(listener); }; };
