import { contentUrl } from './catalog';

// Cache promises rather than just resolved strings, so simultaneous visits also
// share one request. A failed request is evicted and can be retried.
const markdownCache = new Map<string, Promise<string>>();

export function loadMarkdown(file: string, directory?: string, projectFolder = false): Promise<string> {
  const path = contentUrl(file, directory, projectFolder);
  let request = markdownCache.get(path);

  if (!request) {
    request = fetch(path)
      .then((response) => {
        if (!response.ok) throw new Error(`Could not fetch ${path} (${response.status})`);
        return response.text();
      })
      .catch((error: unknown) => {
        markdownCache.delete(path);
        throw error;
      });
    markdownCache.set(path, request);
  }

  return request;
}

export function stripFrontmatter(markdown: string): string {
  // Frontmatter is metadata for the owner's source files, not article content.
  return markdown.replace(/^\uFEFF?---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/, '').trimStart();
}

/**
 * remark-math understands $...$ and display blocks with $$ on their own lines,
 * but not TeX's \\(...\\) or \\[...\\]. Convert those forms outside inline and
 * fenced code. Normalize one-line and multi-line $$...$$ to display blocks too.
 */
export function normalizeTexDelimiters(markdown: string): string {
  const output: string[] = [];
  let fence: { marker: string; size: number } | null = null;
  let inDisplayMath = false;

  for (const line of markdown.split('\n')) {
    const fenceMatch = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (fenceMatch && !inDisplayMath) {
      const marker = fenceMatch[1][0];
      if (!fence) fence = { marker, size: fenceMatch[1].length };
      else if (fence.marker === marker && fenceMatch[1].length >= fence.size) fence = null;
      output.push(line);
      continue;
    }
    if (fence) { output.push(line); continue; }

    if (inDisplayMath) {
      const closing = line.match(/^(.*?)\$\$[ \t]*$/);
      if (closing) {
        if (closing[1]) output.push(closing[1]);
        output.push('$$');
        inDisplayMath = false;
      } else output.push(line);
      continue;
    }

    // Capturing the backtick delimiter + content preserves literal TeX in code.
    const normalized = line.split(/(`+)([\s\S]*?)\1/g).map((part, index) => {
      if (index % 3 !== 0) return part;
      return part.replace(/\\\((.+?)\\\)/g, (_whole, math: string) => `$${math}$`)
        .replace(/\\\[(.+?)\\\]/g, (_whole, math: string) => `$$${math}$$`);
    }).join('');

    const opening = normalized.match(/^([ \t]{0,3})\$\$(.*)$/);
    if (!opening) { output.push(normalized); continue; }

    const [, indent, remainder] = opening;
    output.push(`${indent}$$`);
    const closingOnSameLine = remainder.match(/^(.*?)\$\$[ \t]*$/);
    if (closingOnSameLine) {
      if (closingOnSameLine[1]) output.push(closingOnSameLine[1]);
      output.push(`${indent}$$`);
    } else {
      if (remainder) output.push(remainder);
      inDisplayMath = true;
    }
  }

  return output.join('\n');
}
