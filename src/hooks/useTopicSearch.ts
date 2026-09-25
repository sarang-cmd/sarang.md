import { useMemo } from 'react';
import Fuse from 'fuse.js';
import type { FuseResult } from 'fuse.js';
import type { Topic } from '../types';

export function useTopicSearch(topics: Topic[], query: string, limit = 100): FuseResult<Topic>[] {
  const index = useMemo(() => new Fuse(topics, {
    keys: [
      { name: 'title', weight: 0.65 },
      { name: 'tags', weight: 0.22 },
      { name: 'category', weight: 0.08 },
      { name: 'unitSlug', weight: 0.05 },
    ],
    threshold: 0.38,
    ignoreLocation: true,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2,
  }), [topics]);

  return useMemo(() => query.trim() ? index.search(query.trim(), { limit }) : [], [index, query, limit]);
}

export function visibleTags(result: FuseResult<Topic>): string[] {
  const matched = result.matches
    ?.filter((match) => match.key === 'tags' && match.refIndex !== undefined)
    .map((match) => result.item.tags[match.refIndex!])
    .filter((tag): tag is string => Boolean(tag)) ?? [];
  return matched.length ? [...new Set(matched)].slice(0, 4) : result.item.tags.slice(0, 3);
}
