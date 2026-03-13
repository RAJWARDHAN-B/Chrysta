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
import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";

interface EditorProps {
  docId: string;
  userName: string;
}

const Editor = ({ docId, userName }: EditorProps) => {
  const [provider, setProvider] = useState<WebsocketProvider | null>(null);
  const [ydoc] = useState(() => new Y.Doc());

  useEffect(() => {
    // Connect to y-websocket server
    const newProvider = new WebsocketProvider(
      "ws://localhost:1234",
      docId,
      ydoc
    );

    newProvider.on("status", (event: any) => {
      console.log("WebSocket status:", event.status);
    });

    setProvider(newProvider);

    return () => {
      newProvider.destroy();
    };
  }, [docId, ydoc]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false, // Collaboration handles history
      }),
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: userName,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        },
      }),
      Underline,
      TextStyle,
      Color,
      FontFamily,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert max-w-none focus:outline-none min-h-[500px]",
      },
    },
  }, [provider]); // Re-initialize when provider is ready

  if (!editor) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Toolbar editor={editor} docId={docId} />
      <hr className="border-slate-100 dark:border-slate-800" />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
