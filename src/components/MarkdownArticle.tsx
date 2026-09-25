import { useMemo } from 'react';
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { normalizeTexDelimiters, stripFrontmatter } from '../lib/content';

export function MarkdownArticle({ source, compact = false, scheme = false }: { source: string; compact?: boolean; scheme?: boolean }) {
  const markdown = useMemo(() => normalizeTexDelimiters(stripFrontmatter(source)), [source]);

  return (
    <article className={`markdown ${compact ? 'markdown-compact' : ''} ${scheme ? 'markdown-scheme' : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          table: ({ children }) => <div className="table-wrap"><table>{children}</table></div>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
