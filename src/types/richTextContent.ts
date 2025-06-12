export interface TextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
}

export interface ListItemNode {
  type: "list-item";
  children: TextNode[];
}

export interface ListBlock {
  type: "list";
  format: "unordered" | "ordered";
  children: ListItemNode[];
}

export interface ParagraphBlock {
  type: "paragraph";
  children: TextNode[];
}

export type RichTextBlock = ListBlock | ParagraphBlock;

export interface RichTextContent {
  title: string;
  content: RichTextBlock[];
}
