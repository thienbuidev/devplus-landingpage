"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

type RenderMarkdownContentProps = {
  content: string;
  className?: string;
};

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

const RenderMarkdownContent: React.FC<RenderMarkdownContentProps> = ({
  content,
  className,
}) => {
  const [toc, setToc] = useState<TOCItem[]>([]);

  // Generate TOC from DOM after render
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(".markdown-content h2, .markdown-content h3")
    ) as HTMLElement[];

    const tocItems: TOCItem[] = headings.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName === "H2" ? 2 : 3,
    }));

    setToc(tocItems);
  }, [content]);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 ${className || ""}`}
    >
      {/* TOC */}
      <aside className="sticky top-24 h-fit self-start hidden md:block">
        <ul className="space-y-2 text-sm leading-snug">
          {toc.map((item) => (
            <li key={item.id} className={`ml-${(item.level - 2) * 4}`}>
              <a
                href={`#${item.id}`}
                className="text-blue-800 hover:shadow-md font-[700] text-lg scroll-smooth"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Markdown */}
      <div className="markdown-content prose prose-lg max-w-none scroll-smooth">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug, rehypeHighlight]}
          components={{
            h1: ({ ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2
                className="text-2xl font-semibold mt-6 mb-2 border-b pb-1"
                {...props}
              />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-xl font-medium mt-4 mb-2" {...props} />
            ),
            code(props) {
              const { children, className } = props;
              const isBlock = className && className.startsWith("language-");

              return !isBlock ? (
                <code className="bg-gray-100 px-1 rounded text-sm" {...props} />
              ) : (
                <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                  <code {...props}>{children}</code>
                </pre>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default RenderMarkdownContent;
