/** The bridge the desktop app injects (electron/preload.cjs). It is undefined in a normal browser. */
export type UpdateStatus = 'idle' | 'unconfigured' | 'checking' | 'uptodate' | 'available' | 'downloading' | 'launching' | 'error';
export interface UpdateState {
  status: UpdateStatus; current: string; latest: string; notes: string; htmlUrl: string; fileName: string; size: number; progress: number;
  error: string; checkedAt: number; dismissed: boolean; repo: string; auto: boolean; configured: boolean; canSelfUpdate: boolean; canUpdate: boolean; disabled: boolean;
}
export interface DesktopBehavior { closeToTray: boolean; startHidden: boolean; alwaysOnTop: boolean; rememberPosition: boolean; openAtLogin: boolean }
export interface DesktopInfo { version: string; platform: string; installed: boolean; canAutostart: boolean; packaged: boolean; behavior: DesktopBehavior }
export interface UpdateBridge {
  get(): Promise<UpdateState | null>;
  check(): Promise<UpdateState | null>;
  install(): Promise<UpdateState | null>;
  skip(): Promise<UpdateState | null>;
  dismiss(): Promise<UpdateState | null>;
  setConfig(config: { repo?: string; auto?: boolean }): Promise<UpdateState | null>;
  onState(callback: (state: UpdateState) => void): () => void;
}
export interface DesktopBridge {
  getInfo(): Promise<DesktopInfo | null>;
  setBehavior(patch: Partial<DesktopBehavior>): Promise<unknown>;
  setTheme(dark: boolean): void;
  notify(title: string, body: string): void;
  openExternal(url: string): void;
  discordUpdate(payload: { config: { enabled: boolean; appId: string }; activity: unknown }): void;
  onDiscordStatus(callback: (status: { status: string; detail: string }) => void): () => void;
  onRoute(callback: (path: string) => void): () => void;
  update: UpdateBridge;
}
declare global { interface Window { sarangDesktop?: DesktopBridge } }

export const desktop: DesktopBridge | undefined = typeof window === 'undefined' ? undefined : window.sarangDesktop;
export const isDesktop = Boolean(desktop);
