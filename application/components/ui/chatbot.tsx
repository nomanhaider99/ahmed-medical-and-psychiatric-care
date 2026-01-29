"use client";

import { useState } from "react";
import { BsChatRightDots, BsFillChatLeftFill, BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown, IoMdSend } from "react-icons/io";

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
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer flex justify-center items-center px-4 leading-none"
        >
          <div className="w-full flex translate-x-1">
            <BsFillChatLeftFill size={24} className="-z-10" />
          <BsChatRightDots size={24} className="translate-y-2 -translate-x-3 z-20"  />
          </div>
          Ask Assistant
        </button>
      )}

      {isOpen && (
  <div className="relative">
    {/* Arrow Button Outside */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute -top-10 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer flex justify-center items-center z-50"
    >
      <IoIosArrowDown size={22} />
    </button>

    {/* Chat Box */}
    <div className="md:w-[350px] md:h-[450px] w-[300px] h-[450px] bg-white rounded-t-xl rounded-b-3xl shadow-xl flex flex-col overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="bg-vivid-azure text-white p-3 h-[75px] flex justify-center items-center rounded-b-full">
        <span className="font-medium text-lg text-center">
          Lyari Medical AI Assistant
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl text-sm max-w-[90%] break-words overflow-hidden whitespace-pre-wrap ${
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
          className="flex-1 border rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 border-[1px] border-blue-300 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition flex justify-center"
        >
          <IoMdSend size={18} className="translate-x-[1px]" />
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
