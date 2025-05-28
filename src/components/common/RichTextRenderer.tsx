import React from "react";
import { RichTextBlock, TextNode } from "@/types/richTextContent";

type Props = {
  content: RichTextBlock[];
};

const renderText = (node: TextNode, index: number) => {
  let element = <>{node.text}</>;

  if (node.code) {
    element = (
      <code key={index} className="bg-gray-100 px-1 rounded">
        {element}
      </code>
    );
  }
  if (node.bold) {
    element = <strong key={index}>{element}</strong>;
  }
  if (node.italic) {
    element = <em key={index}>{element}</em>;
  }
  if (node.underline) {
    element = <u key={index}>{element}</u>;
  }

  return <React.Fragment key={index}>{element}</React.Fragment>;
};

const RenderRichText = ({ content }: Props) => {
  return (
    <div className="prose">
      {content.map((block, blockIndex) => {
        if (block.type === "list") {
          const Tag = block.format === "ordered" ? "ol" : "ul";
          return (
            <Tag key={blockIndex} className="pl-6 list-disc mb-4">
              {block.children.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.children.map((child, i) => renderText(child, i))}
                </li>
              ))}
            </Tag>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={blockIndex} className="mb-4">
              {block.children.map((child, i) => renderText(child, i))}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RenderRichText;
