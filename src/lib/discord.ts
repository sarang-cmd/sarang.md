import { useSyncExternalStore } from 'react';

/**
 * Discord status (Rich Presence), desktop app only and off by default. It shows what you choose on your own Discord profile
 * while the Discord app is open on the same computer. The app talks to Discord on your PC; nothing goes to any server of ours.
 * A browser cannot reach the Discord app on your computer, so the website shows an explanation instead of the switch.
 */
export interface DiscordSettings {
  enabled: boolean;
  appId: string;        // The Application ID of the "Sarang.md" application in the Discord Developer Portal (empty uses the one built into the app, if any)
  showActivity: boolean; // What kind of page: reading, practising, mock exam
  showTopic: boolean;   // The name of the chapter you are reading
  showTimer: boolean;   // A live countdown for the study timer or a mock exam
  showBreaks: boolean;  // Keep the status during timer breaks (off clears it)
  showIdle: boolean;    // A "Browsing" status on pages that are not studying
  button: boolean;      // A button that links to the website (other people see it, you do not)
}
/** The Application ID built into the app. Create the application named "Sarang.md" in the Discord Developer Portal and put its ID here (it is public). */
export const DEFAULT_APP_ID = '';
export const DISCORD_LOGO = 'https://sarang-md.vercel.app/app-icon-512.png';
export const defaultDiscord: DiscordSettings = { enabled: false, appId: '', showActivity: true, showTopic: false, showTimer: true, showBreaks: true, showIdle: false, button: false };

export const isAppId = (value: string) => /^\d{17,20}$/.test(value.trim());
export const effectiveAppId = (settings: Pick<DiscordSettings, 'appId'>) => (isAppId(settings.appId) ? settings.appId.trim() : DEFAULT_APP_ID);

const KEY = 'sarang-md-discord-v1';
export function sanitizeDiscord(raw: unknown): DiscordSettings {
  const r = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  const flag = (value: unknown, fallback: boolean) => (typeof value === 'boolean' ? value : fallback);
  const d = defaultDiscord;
  const appId = typeof r.appId === 'string' ? r.appId.replace(/\D/g, '').slice(0, 20) : d.appId;
  return { enabled: flag(r.enabled, d.enabled), appId: appId === DEFAULT_APP_ID ? '' : appId, showActivity: flag(r.showActivity, d.showActivity), showTopic: flag(r.showTopic, d.showTopic), showTimer: flag(r.showTimer, d.showTimer), showBreaks: flag(r.showBreaks, d.showBreaks), showIdle: flag(r.showIdle, d.showIdle), button: flag(r.button, d.button) };
}
let current: DiscordSettings = (() => { try { return sanitizeDiscord(JSON.parse(localStorage.getItem(KEY) ?? '{}')); } catch { return { ...defaultDiscord }; } })();
const listeners = new Set<() => void>();
export const getDiscord = () => current;
export function setDiscord(patch: Partial<DiscordSettings>) {
  current = sanitizeDiscord({ ...current, ...patch });
  try { localStorage.setItem(KEY, JSON.stringify(current)); } catch { /* Kept for this session. */ }
  listeners.forEach((listener) => listener());
}
export const useDiscordSettings = (): DiscordSettings => useSyncExternalStore((listener) => { listeners.add(listener); return () => { listeners.delete(listener); }; }, getDiscord);

export type Place = 'textbook' | 'practice' | 'focus' | 'booklet' | 'other';
export interface PresenceInput {
  place: Place;
  topic: string;             // The chapter title, only used when allowed
  examEndsAt: number;        // Milliseconds, 0 when no mock exam is running
  timerRunning: boolean;
  timerPhase: 'work' | 'rest';
  timerEndsAt: number;       // Milliseconds
}
export interface DiscordActivity {
  details: string; state?: string;
  timestamps?: { start?: number; end?: number };
  assets?: { large_image: string; large_text: string };
  buttons?: { label: string; url: string }[];
}
const clip = (text: string, max = 100) => { const t = text.replace(/\s+/g, ' ').trim(); return t.length > max ? `${t.slice(0, max - 1)}\u2026` : t; };

/** What to show. Returns null to clear the status. Only what the privacy switches allow ever leaves this function. */
export function buildActivity(settings: DiscordSettings, input: PresenceInput): DiscordActivity | null {
  if (!settings.enabled) return null;
  const exam = input.examEndsAt > 0;
  const studying = exam || input.timerRunning || input.place !== 'other';
  if (!studying && !settings.showIdle) return null;
  const onBreak = input.timerRunning && input.timerPhase === 'rest' && !exam;
  if (onBreak && !settings.showBreaks) return null;
  let details = 'Studying IB Maths';
  if (settings.showActivity) details = exam ? 'Sitting a mock exam' : onBreak ? 'Taking a break' : input.place === 'textbook' ? 'Reading the textbook' : input.place === 'practice' ? 'Practising questions' : input.place === 'focus' ? 'In the focus studio' : input.place === 'booklet' ? 'Using the formula booklet' : 'Browsing the course';
  const parts: string[] = [];
  if (settings.showTopic && input.place === 'textbook' && !exam && !onBreak && input.topic) parts.push(input.topic);
  if (!parts.length) parts.push('IB Maths AA');
  if (input.timerRunning && !exam && settings.showActivity) parts.push(onBreak ? 'Break' : 'Focus block');
  const activity: DiscordActivity = { details: clip(details), state: clip(parts.join(' \u00b7 ')) };
  if (settings.showTimer) {
    const end = exam ? input.examEndsAt : input.timerRunning ? input.timerEndsAt : 0;
    if (end > 0) activity.timestamps = { end: Math.floor(end / 1000) };
  }
  activity.assets = { large_image: DISCORD_LOGO, large_text: 'Sarang.md' };
  if (settings.button) activity.buttons = [{ label: 'Open Sarang.md', url: 'https://sarang-md.vercel.app/' }];
  return activity;
}
/** Identity of an activity, ignoring the clock, so an update is only sent when something visible changed. */
export const activityKey = (activity: DiscordActivity | null) => (activity ? JSON.stringify({ ...activity, timestamps: activity.timestamps ? 'on' : null }) : 'none');

export function placeFor(pathname: string): Place {
  if (/^\/units\/[^/]+\/[^/]+/.test(pathname)) return 'textbook';
  if (/^\/(question-bank|practice|ib-papers|review)/.test(pathname)) return 'practice';
  if (pathname.startsWith('/focus')) return 'focus';
  if (pathname.startsWith('/formula-booklet')) return 'booklet';
  return 'other';
}
