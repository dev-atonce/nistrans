import React from "react";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { BlogProps } from "@/types/blogType";
import { Tabs } from "antd";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface TextEditorProps {
  languages: any;
  itemState: Omit<BlogProps, "id" | "status" | "createdAt" | "updatedAt">;
  handleEditorChange: (value: string, language: string) => void;
}

export const Editor = ({ itemState, handleEditorChange, languages }: TextEditorProps) => {
  const modules = {
    // Toolbar options
    toolbar: [
      // Dropdowns
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header levels
      [{ font: [] }], // Font family
      [{ size: ['small', false, 'large', 'huge'] }], // Font size

      // Formatting buttons
      ['bold', 'italic', 'underline', 'strike'], // Basic formatting
      [{ color: [] }, { background: [] }], // Text and background colors
      [{ script: 'sub' }, { script: 'super' }], // Subscript / superscript
      [{ list: 'ordered' }, { list: 'bullet' }], // Ordered & unordered lists
      [{ indent: '-1' }, { indent: '+1' }], // Indentation
      [{ align: [] }], // Text alignment
      ['blockquote', 'code-block'], // Blockquote and code block

      // Insert buttons
      ['link', 'image', 'video'], // Links, images, videos

      // Clear formatting
      ['clean'], // Clear formatting
    ],

    // Clipboard module for pasting behavior
    clipboard: {
      matchVisual: false, // Do not match visual formatting of pasted content
    },

    // History module for undo/redo
    history: {
      delay: 2000, // Delay in ms between actions
      maxStack: 500, // Maximum number of undo/redo steps
      userOnly: false, // Whether to track only user-initiated changes
    },
  };

  const formats = [
    // Headings and fonts
    'header',
    'font',
    'size',

    // Text formatting
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'script', // Subscript and superscript

    // Lists
    'list',
    'bullet',
    'indent', // Indentation

    // Text alignment
    'align',

    // Block elements
    'blockquote',
    'code-block',

    // Media
    'link',
    'image',
    'video',
  ];

  return (
    <Tabs
      type="card"
      // @ts-ignore
      items={languages.map((lang, i) => {
        const id = String(i + 1);
        return {
          label: lang.toUpperCase(),
          key: id,
          children: (
            <div className="text-editor">
              <ReactQuill
                id={`editor-${lang}`}
                theme="snow"
                // @ts-ignore
                value={itemState[`blog_detail_${lang}`] || ""}
                onChange={(value) => handleEditorChange(value, lang)}
                placeholder={`Write something ${lang.toUpperCase()} ...`}
                modules={modules}
                formats={formats}
              />
            </div>
          ),
        };
      })}
    />
  );
};


export default Editor;
