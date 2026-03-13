"use client";

import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ChatSidebar from "@/components/ChatSidebar";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const USER_COLORS = [
  "#7C6AF7", "#F97316", "#10B981", "#F43F5E",
  "#3B82F6", "#EC4899", "#14B8A6", "#F59E0B",
];

export default function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: docId } = use(params);
  const [userName, setUserName] = useState<string>("");
  const [userColor, setUserColor] = useState<string>("");

  useEffect(() => {
    // Persist identity in sessionStorage so refreshes keep the same name
    const storedName = sessionStorage.getItem("chrysta-username");
    const storedColor = sessionStorage.getItem("chrysta-usercolor");

    const name = storedName ?? `User ${Math.floor(Math.random() * 900) + 100}`;
    const color =
      storedColor ?? USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)];

    if (!storedName) sessionStorage.setItem("chrysta-username", name);
    if (!storedColor) sessionStorage.setItem("chrysta-usercolor", color);

    setUserName(name);
    setUserColor(color);
  }, []);

  if (!userName) return null; // wait for hydration

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F4F1]">
      {/* Editor (takes all remaining width) */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <Editor
          docId={docId}
          userName={userName}
          userColor={userColor}
          docName={`Document · ${docId.slice(0, 8)}`}
        />
      </div>

      {/* Chat sidebar (fixed width) */}
      <ChatSidebar
        docId={docId}
        userName={userName}
        userColor={userColor}
      />
    </div>
  );
}
