export interface VideoItem {
  id: string;
  title: string;
  url: string;
  kind: 'youtube' | 'video' | 'local';
  videoId?: string;
}
export const PLAYLIST_KEY = 'sarang-focus-video-playlist';

export function parseVideoLink(raw: string): Pick<VideoItem, 'url' | 'kind' | 'videoId'> | null {
  try {
    const link = new URL(raw.trim());
    if (link.protocol !== 'https:' || link.username || link.password || link.hash) return null;
    const host = link.hostname.toLowerCase();
    let id: string | null = null;
    if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com', 'youtube-nocookie.com'].includes(host)) {
      if (link.pathname === '/watch') id = link.searchParams.get('v');
      else if (/^\/(?:embed|shorts)\//.test(link.pathname)) id = link.pathname.split('/')[2];
    } else if (host === 'youtu.be' || host === 'www.youtu.be') id = link.pathname.slice(1);
    if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) return { url: link.href, kind: 'youtube', videoId: id };
    if (/\.(mp4|webm|ogg)$/i.test(link.pathname)) return { url: link.href, kind: 'video' };
  } catch { /* Reject invalid and unsafe links. */ }
  return null;
}

export function readVideoPlaylist(): VideoItem[] {
  try {
    const stored: unknown = JSON.parse(localStorage.getItem(PLAYLIST_KEY) ?? '[]');
    if (!Array.isArray(stored)) return [];
    return stored.slice(0, 30).flatMap((entry) => {
      if (!entry || typeof entry.id !== 'string' || typeof entry.url !== 'string' || typeof entry.title !== 'string') return [];
      const parsed = parseVideoLink(entry.url);
      return parsed ? [{ id: entry.id, title: entry.title.slice(0, 80), ...parsed }] : [];
    });
  } catch { return []; }
}
