import { create } from 'zustand';

/** Guest answers are deliberately ephemeral. Nothing here is written to browser
 * storage or sent anywhere. Unlocked users also get a live in-tab draft while
 * their encrypted vault write is pending. */
interface DraftState {
  written: Record<string, string>;
  numeric: Record<string, string[]>;
  marks: Record<string, number>;
  editing: string | null;
  setEditing: (id: string | null) => void;
  setWritten: (id: string, value: string) => void;
  setNumeric: (id: string, value: string[]) => void;
  setMark: (id: string, value: number) => void;
  removeMark: (id: string) => void;
  clear: () => void;
}
export const useDraftStore = create<DraftState>((set) => ({
  written: {}, numeric: {}, marks: {}, editing: null,
  setEditing(editing) { set({ editing }); },
  setWritten(id, value) { if (id.length > 230) return; set((state) => ({ written: { ...state.written, [id]: value.slice(0, 1600) } })); },
  setNumeric(id, value) { if (id.length > 230) return; set((state) => ({ numeric: { ...state.numeric, [id]: value.slice(0, 30).map((item) => item.slice(0, 140)) } })); },
  setMark(id, value) { if (id.length > 230 || !Number.isInteger(value) || value < 0 || value > 500) return; set((state) => ({ marks: { ...state.marks, [id]: value } })); },
  removeMark(id) { set((state) => { const marks = { ...state.marks }; delete marks[id]; return { marks }; }); },
  clear() { set({ written: {}, numeric: {}, marks: {}, editing: null }); },
}));
