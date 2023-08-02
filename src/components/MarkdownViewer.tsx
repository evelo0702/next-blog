"use client";
import React from "react";
import ReactMarkdown from "react-markdown/";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
type Props = {
  post: string;
};
const MarkdownViewer = ({ post }: Props) => {
  return (
    <ReactMarkdown
      className="prose max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="rounded-lg flex my-4 mx-auto"
            src={image.src || ""}
            alt={image.alt || ""}
            width={600}
            height={600}
          ></Image>
        ),
      }}
    >
      {post}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
