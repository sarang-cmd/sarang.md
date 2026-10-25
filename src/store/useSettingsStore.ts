import { create } from 'zustand';

/** Appearance and AI permissions are device preferences, not private vault data. */
export type Area = 'practice' | 'reading' | 'profile' | 'tools';
export type InterfaceStyle = 'old' | 'new';
export type AreaStyle = 'follow' | InterfaceStyle;
export type Density = 'comfortable' | 'compact';
const KEY = 'sarang-md-interface-settings-v1';

interface Preferences {
  aiEnabled: boolean;
  style: InterfaceStyle;
  areas: Record<Area, AreaStyle>;
  density: Density;
  examMinutes: number;
}
interface SettingsState extends Preferences {
  setAiEnabled: (enabled: boolean) => void;
  setStyle: (style: InterfaceStyle) => void;
  setArea: (area: Area, style: AreaStyle) => void;
  setDensity: (density: Density) => void;
  setExamMinutes: (minutes: number) => void;
}
const defaults: Preferences = {
  aiEnabled: true,
  style: 'new',
  areas: { practice: 'follow', reading: 'follow', profile: 'follow', tools: 'follow' },
  density: 'comfortable',
  examMinutes: 120,
};
const isStyle = (value: unknown): value is InterfaceStyle => value === 'old' || value === 'new';
const isAreaStyle = (value: unknown): value is AreaStyle => value === 'follow' || isStyle(value);
function load(): Preferences {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Preferences>;
    return {
      aiEnabled: typeof saved.aiEnabled === 'boolean' ? saved.aiEnabled : defaults.aiEnabled,
      style: isStyle(saved.style) ? saved.style : defaults.style,
      areas: Object.fromEntries((Object.keys(defaults.areas) as Area[]).map((area) =>
        [area, isAreaStyle(saved.areas?.[area]) ? saved.areas![area] : 'follow'])) as Preferences['areas'],
      density: saved.density === 'compact' ? 'compact' : 'comfortable',
      examMinutes: Number.isInteger(saved.examMinutes) && saved.examMinutes! >= 5 && saved.examMinutes! <= 300 ? saved.examMinutes! : 120,
    };
  } catch { return defaults; }
}
function save(value: Preferences) {
  try { localStorage.setItem(KEY, JSON.stringify(value)); } catch { /* This tab still has the setting. */ }
}
export function styleFor(state: Preferences, area: Area): InterfaceStyle {
  return state.areas[area] === 'follow' ? state.style : state.areas[area];
}
export const useSettingsStore = create<SettingsState>((set) => ({
  ...load(),
  setAiEnabled(aiEnabled) { set((state) => { const next = { ...state, aiEnabled }; save(next); return next; }); },
  setStyle(style) { set((state) => { const next = { ...state, style }; save(next); return next; }); },
  setArea(area, value) { set((state) => { const next = { ...state, areas: { ...state.areas, [area]: value } }; save(next); return next; }); },
  setDensity(density) { set((state) => { const next = { ...state, density }; save(next); return next; }); },
  setExamMinutes(minutes) { if (!Number.isInteger(minutes) || minutes < 5 || minutes > 300) return; set((state) => { const next = { ...state, examMinutes: minutes }; save(next); return next; }); },
}));
