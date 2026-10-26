import { useEffect, useRef, useSyncExternalStore } from 'react';
import { useLocation } from 'react-router-dom';
import { useCatalog } from '../context/CatalogContext';
import { desktop } from '../lib/desktop';
import { activityKey, buildActivity, effectiveAppId, placeFor, useDiscordSettings } from '../lib/discord';
import { findTopicBySlug } from '../lib/catalog';
import { getClock, subscribeClock } from '../lib/studyClock';
import { isExamActive, useExamStore } from '../store/useExamStore';

/** Mounted once. In the desktop app it sends the Discord status (only what you switched on); in a browser it does nothing. */
export function DiscordBridge() {
  const settings = useDiscordSettings();
  const { pathname } = useLocation();
  const { units } = useCatalog();
  const clock = useSyncExternalStore(subscribeClock, getClock);
  const attempt = useExamStore((state) => state.attempt);
  const sent = useRef({ key: '', stamp: 0, cfg: '' });
  useEffect(() => {
    if (!desktop?.discordUpdate) return;
    const place = placeFor(pathname);
    let topic = '';
    if (place === 'textbook') {
      const match = /^\/units\/([^/]+)\/([^/]+)/.exec(pathname);
      const course = match ? units.find((entry) => entry.slug === match[1]) : undefined;
      topic = course && match ? findTopicBySlug(course.topics, match[2])?.title ?? '' : '';
    }
    const examEndsAt = isExamActive(attempt) && attempt ? attempt.endsAt : 0;
    const activity = buildActivity(settings, { place, topic, examEndsAt, timerRunning: clock.running, timerPhase: clock.phase, timerEndsAt: clock.endsAt });
    const key = activityKey(activity);
    const stamp = activity?.timestamps?.end ?? 0;
    const cfg = `${settings.enabled}:${effectiveAppId(settings)}`;
    if (key === sent.current.key && cfg === sent.current.cfg && Math.abs(stamp - sent.current.stamp) <= 3) return;
    sent.current = { key, stamp, cfg };
    desktop.discordUpdate({ config: { enabled: settings.enabled, appId: effectiveAppId(settings) }, activity });
  }, [settings, pathname, units, clock, attempt]);
  return null;
}
