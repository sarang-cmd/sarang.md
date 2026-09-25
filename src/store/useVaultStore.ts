import { create } from 'zustand';

type Theme = 'light' | 'dark';
const THEME_KEY = 'sarang-vault-theme';

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* Storage can be disabled; fall back to the OS setting. */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

interface VaultState {
  theme: Theme;
  sidebarOpen: boolean;
  currentUnit: string | null;
  currentTopic: string | null;
  localDialogOpen: boolean;
  setLocalDialogOpen: (open: boolean) => void;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setCurrentRoute: (unit: string | null, topic: string | null) => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  theme: initialTheme(),
  sidebarOpen: typeof window !== 'undefined' && window.innerWidth >= 1024,
  currentUnit: null,
  currentTopic: null,
  localDialogOpen: false,
  setLocalDialogOpen: (localDialogOpen) => set({ localDialogOpen }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })), 
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
  setCurrentRoute: (currentUnit, currentTopic) => set({ currentUnit, currentTopic }),
}));

export function saveTheme(theme: Theme): void {
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* Still works for this session. */ }
}
