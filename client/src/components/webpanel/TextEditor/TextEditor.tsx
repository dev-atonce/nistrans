import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

interface TextEditorProps {
  itemState?: string;
  handleEditorChange: (value: string) => void;
}

export const Editor = ({ itemState, handleEditorChange }: TextEditorProps) => {
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={itemState}
        onChange={handleEditorChange}
        placeholder={"Write something ..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
