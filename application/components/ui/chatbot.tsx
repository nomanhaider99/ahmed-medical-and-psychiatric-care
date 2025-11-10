"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { BsThreeDots } from "react-icons/bs";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Show bot loading message
    setIsLoading(true);
    setMessages((prev) => [...prev, { sender: "bot", text: "loading" }]);

    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
    });

    if (!response.ok) {
      console.log("Error:", response.status);
    }

    const data = await response.json();
    const botReply = data.output ?? "Something Went Wrong! Sorry the problem occured!";
    setIsLoading(false);

    // Replace the loading message with the actual bot reply
    setMessages((prev) => {
      const updated = [...prev];
      const lastIndex = updated.findLastIndex((msg) => msg.sender === "bot" && msg.text === "loading");
      if (lastIndex !== -1) {
        updated[lastIndex] = { sender: "bot", text: botReply };
      } else {
        updated.push({ sender: "bot", text: botReply });
      }
      return updated;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="md:w-[400px] md:h-[600px] w-[300px] h-[450px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-vivid-azure text-white p-3 flex justify-between items-center">
            <span className="font-semibold">AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-lg font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.sender === "bot" && msg.text === "loading" && isLoading ? (
                    <BsThreeDots size={16} className="animate-pulse" />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
