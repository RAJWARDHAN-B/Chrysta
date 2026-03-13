"use client";

import { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { Send } from "lucide-react";

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
  color: string;
}

interface ChatSidebarProps {
  docId: string;
  userName: string;
  userColor: string;
  activeUsers?: { name: string; color: string }[];
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const fmt = (ts: number) =>
  new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const ChatSidebar = ({
  docId,
  userName,
  userColor,
  activeUsers = [],
}: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ydoc] = useState(() => new Y.Doc());
  const [yMessages] = useState(() => ydoc.getArray<Message>("chat-messages"));

  useEffect(() => {
    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      `${docId}-chat`,
      ydoc
    );

    yMessages.observe(() => {
      setMessages(yMessages.toArray());
    });

    return () => {
      provider.destroy();
    };
  }, [docId, ydoc, yMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Math.random().toString(36).slice(2, 11),
      user: userName,
      text: inputText,
      timestamp: Date.now(),
      color: userColor,
    };

    yMessages.push([newMessage]);
    setInputText("");
  };

  const activeCount = activeUsers.length || 1;

  return (
    <aside className="w-72 shrink-0 flex flex-col border-l border-slate-200 bg-white h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Chat icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-slate-500">
            <path
              d="M14 1H2C1.45 1 1 1.45 1 2v9c0 .55.45 1 1 1h2v3l3-3h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"
              stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Room Chat
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-500 font-medium">{activeCount} active</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-300 text-sm gap-2 select-none">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <p className="text-center leading-snug">No messages yet.<br />Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.user === userName;
            return (
              <div key={msg.id} className="flex flex-col gap-1">
                {isMe ? (
                  /* ── My message (right-aligned teal bubble) ── */
                  <>
                    <span className="text-[10px] text-slate-400 text-right mr-1">
                      {fmt(msg.timestamp)} <span className="font-semibold">Me</span>
                    </span>
                    <div className="flex justify-end">
                      <div className="bg-[#2e5b60] text-white text-sm px-3 py-2 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  </>
                ) : (
                  /* ── Other users (left-aligned with avatar) ── */
                  <div className="flex items-start gap-2">
                    <div
                      className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: msg.color || "#7C6AF7" }}
                    >
                      {initials(msg.user)}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[11px] font-semibold text-slate-600">
                          {msg.user.split(" ")[0]} {msg.user.split(" ").slice(1, 2).join("")[0] ? msg.user.split(" ").slice(1, 2).join("")[0] + "." : ""}
                        </span>
                        <span className="text-[10px] text-slate-400">{fmt(msg.timestamp)}</span>
                      </div>
                      <div className="bg-slate-100 text-slate-700 text-sm px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="px-3 py-3 border-t border-slate-100"
      >
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#2e5b60]/40 focus-within:ring-2 focus-within:ring-[#2e5b60]/10 transition-all">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="text-[#2e5b60] hover:text-[#1e3e42] transition-colors shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </aside>
  );
};

export default ChatSidebar;
