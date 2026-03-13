"use client";

import { Editor } from "@tiptap/react";
import { 
  Bold, Italic, Underline as UnderlineIcon, 
  List, ListOrdered, AlignLeft, AlignCenter, 
  AlignRight, Type, Palette, Link, Copy, Check
} from "lucide-react";
import { useState } from "react";

interface ToolbarProps {
  editor: Editor | null;
  docId: string;
}

const Toolbar = ({ editor, docId }: ToolbarProps) => {
  const [copied, setCopied] = useState(false);

  if (!editor) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const toggleBulletList = () => editor.chain().focus().toggleBulletList().run();
  const setTextAlign = (position: string) => editor.chain().focus().setTextAlign(position).run();

  return (
    <div className="sticky top-0 z-20 bg-white dark:bg-slate-900 py-2 flex flex-wrap items-center gap-1">
      <div className="flex items-center gap-0.5 border-r border-slate-200 dark:border-slate-800 pr-2 mr-2">
        <button
          onClick={toggleBold}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("bold") ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          onClick={toggleItalic}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("italic") ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          onClick={toggleUnderline}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("underline") ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Underline"
        >
          <UnderlineIcon size={18} />
        </button>
      </div>

      <div className="flex items-center gap-0.5 border-r border-slate-200 dark:border-slate-800 pr-2 mr-2">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("heading", { level: 1 }) ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Heading 1"
        >
          <span className="font-bold">H1</span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("heading", { level: 2 }) ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Heading 2"
        >
          <span className="font-bold">H2</span>
        </button>
      </div>

      <div className="flex items-center gap-0.5 border-r border-slate-200 dark:border-slate-800 pr-2 mr-2">
        <button
          onClick={toggleBulletList}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive("bulletList") ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          onClick={() => setTextAlign("left")}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive({ textAlign: "left" }) ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Align Left"
        >
          <AlignLeft size={18} />
        </button>
        <button
          onClick={() => setTextAlign("center")}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive({ textAlign: "center" }) ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Align Center"
        >
          <AlignCenter size={18} />
        </button>
        <button
          onClick={() => setTextAlign("right")}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${editor.isActive({ textAlign: "right" }) ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"}`}
          title="Align Right"
        >
          <AlignRight size={18} />
        </button>
      </div>

      <button
        onClick={copyLink}
        className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default Toolbar;
