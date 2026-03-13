"use client";

import { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { Send, User as UserIcon, MessageSquare } from "lucide-react";

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

interface ChatSidebarProps {
  docId: string;
  userName: string;
}

const ChatSidebar = ({ docId, userName }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Yjs setup for chat
  const [ydoc] = useState(() => new Y.Doc());
  const [yMessages] = useState(() => ydoc.getArray<Message>("chat-messages"));

  useEffect(() => {
    // Connect to the same socket server but different room suffix for clarity (or same room)
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
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      user: userName,
      text: inputText,
      timestamp: Date.now(),
    };

    yMessages.push([newMessage]);
    setInputText("");
  };

  return (
    <div className={`relative flex flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 ${isOpen ? "w-80" : "w-0 overflow-hidden"}`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -left-10 top-4 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-l-lg shadow-sm"
      >
        <MessageSquare size={20} className="text-slate-600 dark:text-slate-400" />
      </button>

      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
          <MessageSquare size={18} className="text-primary" />
          Chat
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm gap-2">
            <MessageSquare size={48} className="opacity-20" />
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-1 ${msg.user === userName ? "items-end" : "items-start"}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{msg.user}</span>
              </div>
              <div className={`px-3 py-2 rounded-2xl text-sm max-w-[85%] ${
                msg.user === userName 
                  ? "bg-primary text-white rounded-tr-none" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none"
              }`}>
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-400">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1.5 p-1 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatSidebar;
