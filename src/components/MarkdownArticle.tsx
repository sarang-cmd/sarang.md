import { useMemo } from 'react';
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { normalizeTexDelimiters, stripFrontmatter } from '../lib/content';
import { Link } from 'react-router-dom';

export function MarkdownArticle({ source, compact = false, scheme = false, resolveLink }: { source: string; compact?: boolean; scheme?: boolean; resolveLink?: (href: string) => string | undefined }) {
  const markdown = useMemo(() => normalizeTexDelimiters(stripFrontmatter(source)), [source]);

  return (
    <article className={`markdown ${compact ? 'markdown-compact' : ''} ${scheme ? 'markdown-scheme' : ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          table: ({ children }) => <div className="table-wrap"><table>{children}</table></div>,
          a: ({ href, children }) => {
            const route = href ? (resolveLink?.(href) ?? (href.startsWith('/') ? href : undefined)) : undefined;
            if (route && route.startsWith('/') && !route.startsWith('//')) return <Link to={route}>{children}</Link>;
            if (href?.match(/\.md(?:#.*)?$/i) || href?.endsWith('/index.html')) return <span title="This source link is not in the included library">{children}</span>;
            return <a href={href} rel="noopener noreferrer" target={/^https?:\/\//i.test(href ?? '') ? '_blank' : undefined}>{children}</a>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
