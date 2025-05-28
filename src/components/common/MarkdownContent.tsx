"use client";
import React, { useMemo } from "react";
import { Typography, Anchor, Image } from "antd";

const { Title } = Typography;

type Props = {
  content: string;
};

const formatText = (text: string): string =>
  text
    .replace(/__(.+?)__/g, "<u>$1</u>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-gray-100 px-1 rounded'>$1</code>")
    .replace(/<u>(.+?)<\/u>/g, "<span class='underline'>$1</span>")
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      `<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noreferrer">$1</a>`
    );

export const MarkdownContent: React.FC<Props> = ({ content }) => {
  const sections = useMemo(() => {
    const lines = content.split("\n");
    const parsed: React.ReactNode[] = [];
    const tocItems: { key: string; href: string; title: string }[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (/^##\s+Table of Contents/.test(trimmed)) return;

      if (/^-\s+\[.+\]\(#.+\)/.test(trimmed)) {
        const match = trimmed.match(/\[(.+?)\]\(#(.+?)\)/);
        if (match) {
          tocItems.push({
            key: match[2],
            href: `#${match[2]}`,
            title: match[1],
          });
        }
        return;
      }
      if (/^#\s+/.test(trimmed)) {
        const rawText = trimmed.replace(/^#\s+/, "").trim();
        const anchor = rawText.toLowerCase().replace(/\s+/g, "-");
        parsed.push(
          <h5
            key={`heading-${index}`}
            id={anchor}
            className="text-4xl font-semibold my-4 scroll-mt-50"
            dangerouslySetInnerHTML={{ __html: formatText(rawText) }}
          />
        );
        return;
      }
      if (/^###\s+/.test(trimmed)) {
        const rawText = trimmed.replace(/^###\s+/, "").trim();
        const anchor = rawText.toLowerCase().replace(/\s+/g, "-");
        parsed.push(
          <h3
            key={`heading-${index}`}
            id={anchor}
            className="text-2xl font-semibold my-4 scroll-mt-50"
            dangerouslySetInnerHTML={{ __html: formatText(rawText) }}
          />
        );
        return;
      }

      if (/^##\s+/.test(trimmed)) {
        const rawText = trimmed.replace(/^##\s+/, "").trim();
        parsed.push(
          <Title
            level={2}
            key={`heading2-${index}`}
            className="text-3xl scroll-mt-50"
            id={rawText.toLowerCase().replace(/\s+/g, "-")}
          >
            <span dangerouslySetInnerHTML={{ __html: formatText(rawText) }} />
          </Title>
        );
        return;
      }

      if (/^!\[.+\]\((.+)\)/.test(trimmed)) {
        const match = trimmed.match(/!\[.*\]\((.+?)\)/);
        if (match) {
          parsed.push(
            <Image
              key={`img-${index}`}
              src={match[1]}
              className="rounded-lg my-4 shadow"
              alt="Markdown Image"
            />
          );
        }
        return;
      }

      if (/^>/.test(trimmed)) {
        const text = trimmed.replace(/^>\s?/, "");
        parsed.push(
          <div
            key={`quote-${index}`}
            className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-2"
            dangerouslySetInnerHTML={{ __html: formatText(text) }}
          />
        );
        return;
      }

      if (trimmed === "") {
        parsed.push(<div key={`spacer-${index}`} className="my-2" />);
        return;
      }

      parsed.push(
        <div
          key={`para-${index}`}
          className="text-gray-800 my-2"
          dangerouslySetInnerHTML={{ __html: formatText(trimmed) }}
        />
      );
    });

    return { contentNodes: parsed, tocItems };
  }, [content]);

  return (
    <div className="flex w-full py-10 md:py-30">
      <div className="w-1/4 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 border-r">
        <Anchor
          affix={false}
          items={sections.tocItems}
          className="pl-2"
          style={{ paddingTop: "2rem" }}
          targetOffset={400}
        />
      </div>
      <div className="w-3/4 pl-8 pr-4 max-w-4xl mx-auto">
        <div>{sections.contentNodes}</div>
      </div>
    </div>
  );
};
