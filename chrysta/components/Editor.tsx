"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import TextAlign from "@tiptap/extension-text-align";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { useEffect, useMemo, useState } from "react";
import DocNavbar from "./DocNavbar";

interface EditorProps {
  docId: string;
  userName: string;
  userColor: string;
  docName?: string;
  onProviderReady?: (provider: WebsocketProvider) => void;
}

const Editor = ({ docId, userName, userColor, docName }: EditorProps) => {
  const ydoc = useMemo(() => new Y.Doc(), []);
  const [provider, setProvider] = useState<WebsocketProvider | null>(null);
  const [activeUsers, setActiveUsers] = useState<{ name: string; color: string }[]>([]);

  useEffect(() => {
    const wsProvider = new WebsocketProvider(
      "wss://chrysta.onrender.com",
      docId,
      ydoc
    );

    wsProvider.on("status", (event: { status: string }) => {
      console.log("WebSocket status:", event.status);
    });

    // Track awareness (active collaborators)
    wsProvider.awareness.setLocalStateField("user", {
      name: userName,
      color: userColor,
    });

    const updateUsers = () => {
      const states = Array.from(wsProvider.awareness.getStates().values()) as {
        user?: { name: string; color: string };
      }[];
      const users = states
        .filter((s) => s.user)
        .map((s) => s.user!);
      setActiveUsers(users);
    };

    wsProvider.awareness.on("change", updateUsers);
    updateUsers();

    setProvider(wsProvider);

    return () => {
      wsProvider.destroy();
      setProvider(null);
    };
  }, [docId, ydoc, userName, userColor]);

  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({ history: false }),
        Collaboration.configure({ document: ydoc }),
        ...(provider
          ? [
              CollaborationCursor.configure({
                provider,
                user: { name: userName, color: userColor },
              }),
            ]
          : []),
        Underline,
        TextStyle,
        Color,
        FontFamily,
        TextAlign.configure({ types: ["heading", "paragraph"] }),
      ],
      editorProps: {
        attributes: {
          class:
            "focus:outline-none text-slate-800 leading-relaxed text-[15px]",
        },
      },
    },
    [provider]
  );

  if (!provider || !editor) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F5F4F1]">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#2e5b60] border-t-transparent" />
          <span className="text-sm text-slate-500">Connecting…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#F5F4F1] overflow-hidden">
      {/* Top bar with formatting toolbar */}
      <DocNavbar
        editor={editor}
        docId={docId}
        docName={docName}
        activeUsers={activeUsers}
      />

      {/* Paper area */}
      <div className="flex-1 overflow-y-auto py-6 sm:py-10 px-2 sm:px-4 md:px-8">
        <div className="mx-auto max-w-[780px] bg-white shadow-sm rounded-lg px-4 sm:px-8 md:px-12 py-8 sm:py-14 min-h-[calc(100vh-120px)]">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
