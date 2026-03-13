"use client";

import { use, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ChatSidebar from "@/components/ChatSidebar";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: docId } = use(params);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Generate a simple anonymous username
    const anonymousName = `User ${Math.floor(Math.random() * 1000)}`;
    setUserName(anonymousName);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto relative py-12 px-6 md:px-12 flex justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-lg p-8 md:p-12 min-h-screen mb-20">
            <Editor docId={docId} userName={userName} />
          </div>
        </main>
        <ChatSidebar docId={docId} userName={userName} />
      </div>
    </div>
  );
}
