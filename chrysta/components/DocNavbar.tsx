"use client";

import Image from "next/image";
import Link from "next/link";
import { Editor } from "@tiptap/react";
import {
  Undo2, Redo2,
  Bold, Italic, Underline as UnderlineIcon,
  AlignLeft, AlignRight,
  ChevronDown, Star, Share2, List, ListOrdered, Check,
} from "lucide-react";
import { useState } from "react";

interface DocNavbarProps {
  editor: Editor | null;
  docId: string;
  docName?: string;
  activeUsers?: { name: string; color: string }[];
}

const AVATAR_COLOURS = ["#7C6AF7", "#F97316", "#10B981", "#F43F5E", "#3B82F6"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const DocNavbar = ({
  editor,
  docId,
  docName = "Untitled Document",
  activeUsers = [],
}: DocNavbarProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btn = (active: boolean) =>
    `p-1.5 rounded hover:bg-slate-100 transition-colors ${
      active ? "text-[#2e5b60] bg-[#2e5b60]/10" : "text-slate-600"
    }`;

  return (
    <header className="h-auto md:h-12 py-2 md:py-0 flex flex-wrap md:flex-nowrap items-center justify-between px-4 border-b border-slate-200 bg-white shrink-0 z-30 gap-y-2 relative">
      {/* ── Left: Logo + doc name ── */}
      <div className="flex items-center gap-3 min-w-0 w-full md:w-auto justify-between md:justify-start order-1">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-7 rounded-md overflow-hidden bg-[#2e5b60] flex items-center justify-center">
              <Image
                src="/chrystalogo.png"
                alt="Chrysta"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-sm text-slate-800 hidden sm:block">Chrysta</span>
          </Link>

          <span className="text-slate-300 select-none">·</span>

          <div className="flex items-center gap-1 min-w-0">
            <span className="text-sm font-medium text-slate-700 truncate max-w-[180px]">
              {docName}
            </span>
            <button className="text-slate-400 hover:text-amber-400 transition-colors shrink-0">
              <Star size={14} />
            </button>
          </div>
        </div>

        {/* Mobile Right: Share */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
              copied ? "bg-green-600 text-white hover:bg-green-700" : "bg-slate-900 text-white hover:bg-slate-700"
            }`}
          >
            {copied ? <Check size={13} /> : <Share2 size={13} />}
            {copied ? "Copied!" : "Share"}
          </button>
        </div>
      </div>

      {/* ── Centre: Formatting toolbar ── */}
      {editor && (
        <div className="flex items-center gap-0.5 md:absolute md:left-1/2 md:-translate-x-1/2 order-3 md:order-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 justify-start md:justify-center no-scrollbar">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className="p-1.5 rounded hover:bg-slate-100 transition-colors text-slate-500"
            title="Undo"
          >
            <Undo2 size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="p-1.5 rounded hover:bg-slate-100 transition-colors text-slate-500"
            title="Redo"
          >
            <Redo2 size={16} />
          </button>

          <span className="w-px h-4 bg-slate-200 mx-1" />

          {/* Block type picker (label only, acts as H1/P toggle) */}
          <button
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-100 text-slate-600 text-sm transition-colors"
            onClick={() =>
              editor.isActive("heading", { level: 1 })
                ? editor.chain().focus().setParagraph().run()
                : editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            {editor.isActive("heading", { level: 1 }) ? "Heading 1" : editor.isActive("heading", { level: 2 }) ? "Heading 2" : "Body"}
            <ChevronDown size={13} />
          </button>

          <span className="w-px h-4 bg-slate-200 mx-1" />

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={btn(editor.isActive("bold"))}
            title="Bold"
          >
            <Bold size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={btn(editor.isActive("italic"))}
            title="Italic"
          >
            <Italic size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={btn(editor.isActive("underline"))}
            title="Underline"
          >
            <UnderlineIcon size={16} />
          </button>

          <span className="w-px h-4 bg-slate-200 mx-1" />

          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={btn(editor.isActive({ textAlign: "left" }))}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={btn(editor.isActive({ textAlign: "right" }))}
            title="Align Right"
          >
            <AlignRight size={16} />
          </button>

          <span className="w-px h-4 bg-slate-200 mx-1" />

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={btn(editor.isActive("bulletList"))}
            title="Bullet List"
          >
            <List size={16} />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={btn(editor.isActive("orderedList"))}
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </button>
        </div>
      )}

      {/* ── Right: Avatars + Share ── */}
      <div className="hidden md:flex items-center gap-2 shrink-0 order-2 md:order-3">
        {/* Active user avatars */}
        {activeUsers.length > 0 && (
          <div className="flex -space-x-2">
            {activeUsers.slice(0, 3).map((u, i) => (
              <div
                key={i}
                title={u.name}
                className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-white"
                style={{ backgroundColor: u.color || AVATAR_COLOURS[i % AVATAR_COLOURS.length] }}
              >
                {initials(u.name)}
              </div>
            ))}
            {activeUsers.length > 3 && (
              <div className="size-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 ring-2 ring-white">
                +{activeUsers.length - 3}
              </div>
            )}
          </div>
        )}

        <button
          onClick={handleCopyLink}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
            copied ? "bg-green-600 text-white hover:bg-green-700" : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          {copied ? <Check size={13} /> : <Share2 size={13} />}
          {copied ? "Copied!" : "Share"}
        </button>
      </div>
    </header>
  );
};

export default DocNavbar;
