"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatBot() {
    const API = "https://portfolio-chatbot-ihzx.onrender.com";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hi! I'm Shashank's AI assistant. Ask me anything about his skills, experience, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ==============================
  // TYPEWRITER FUNCTION
  // ==============================
  const typeWriter = async (text: string, messageIndex: number) => {
    let current = "";

    for (let i = 0; i < text.length; i++) {
      current += text[i];

      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === messageIndex ? { ...msg, content: current } : msg
        )
      );

      // Smart typing speed
      const char = text[i];
      let delay = 12;
      if (".!?".includes(char)) delay = 60;
      if (",;".includes(char)) delay = 30;
      if (char === "\n") delay = 0;

      await new Promise((r) => setTimeout(r, delay));
    }

    setTypingIndex(null);
  };

  // ==============================
  // SEND MESSAGE
  // ==============================
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      // Add empty bot message first
      const botIndex = messages.length + 1;

      setMessages((prev) => [...prev, { role: "bot", content: "" }]);
      setTypingIndex(botIndex);

      // Typewriter animation
      await typeWriter(data.response, botIndex);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "⚠️ Sorry, I'm having trouble connecting to the AI server.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Portfolio Assistant
                  </h3>
                  <p className="text-xs text-slate-400">Ask me anything!</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-cyan-500 to-violet-500">
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>

                  <div className="max-w-[70%] p-3 rounded-2xl bg-slate-800 text-slate-200 border border-slate-700 break-words overflow-hidden">
                    {message.role === "bot" ? (
                      <div className="prose prose-invert max-w-none text-sm break-words [&_*]:break-words">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.content}
                        </ReactMarkdown>

                        {/* Blinking cursor */}
                        {typingIndex === index && (
                          <span className="animate-pulse ml-1">|</span>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Thinking */}
              {isLoading && typingIndex === null && (
                <div className="flex gap-3">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <div className="text-slate-400 text-sm animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e: any) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="bg-slate-800 border-slate-700 text-white"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
