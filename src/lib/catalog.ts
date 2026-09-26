import { unit } from '../data/unit';
import type { CourseUnit, Topic, TopicGroup } from '../types';

export function fileStem(file: string): string {
  return file.replace(/\.md$/i, '');
}

export function topicSlug(topic: Topic): string {
  // Keeping a duplicate suffix such as " (2)" makes those filenames routable too.
  return fileStem(topic.file).normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function topicPath(topic: Topic): string {
  return `/units/${topic.unitSlug ?? unit.slug}/${topicSlug(topic)}`;
}

export function groupTopics(topics: Topic[]): TopicGroup[] {
  const groups = new Map<string, Topic[]>();
  // Insertion order is manifest order, so the outline is never defined twice.
  for (const topic of topics) {
    const group = groups.get(topic.category) ?? [];
    group.push(topic);
    groups.set(topic.category, group);
  }
  return Array.from(groups, ([category, entries]) => ({ category, topics: entries }));
}

export function findTopicByFile(topics: Topic[], file: string | null): Topic | undefined {
  return file ? topics.find((topic) => fileStem(topic.file) === fileStem(file)) : undefined;
}

export function findTopicBySlug(topics: Topic[], slug: string): Topic | undefined {
  return topics.find((topic) => topicSlug(topic) === slug);
}

export function contentUrl(file: string, directory: string = unit.directory, projectFolder = false): string {
  // BASE_URL is '/' in dev and './' in a subdirectory build (e.g. GitHub Pages).
  const root = projectFolder ? 'content/local/' : 'content/';
  return `${import.meta.env.BASE_URL}${root}${encodeURIComponent(directory)}/${encodeURIComponent(file)}`;
}

export function availableUnits(units: CourseUnit[]): CourseUnit[] {
  return units.filter((entry) => entry.topics.length > 0);
}

export function unitForTopic(units: CourseUnit[], topic: Topic): CourseUnit | undefined {
  return units.find((entry) => entry.slug === (topic.unitSlug ?? unit.slug));
}
