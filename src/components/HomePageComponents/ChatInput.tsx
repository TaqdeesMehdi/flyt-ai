"use client";
import React, { useState, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";

interface ChatInputProps {
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "Tell me what you want, and I'll handle the rest...",
}) => {
  //NOTE: i tried to use framer motion to implement the character by character reveal animation as shown in original layla.ai but it was not working as i want it to be (may be because placeholder is a message string and framer motion could only work on tags elements , i don't know could be ant other problem) , so I used the manual approach.

  const [message, setMessage] = useState("");
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (currentIndex < placeholder.length) {
      const timeout = setTimeout(() => {
        setAnimatedPlaceholder(placeholder.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50 + Math.sin(currentIndex * 0.1) * 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, placeholder]);

  useEffect(() => {
    if (!isPageVisible) return;

    let restartTimeout: NodeJS.Timeout;

    if (currentIndex >= placeholder.length) {
      restartTimeout = setTimeout(() => {
        setAnimatedPlaceholder("");
        setCurrentIndex(0);
      }, 1000);
    }

    return () => {
      if (restartTimeout) clearTimeout(restartTimeout);
    };
  }, [currentIndex, placeholder.length, isPageVisible]);

  useEffect(() => {
    setAnimatedPlaceholder("");
    setCurrentIndex(0);
  }, [placeholder]);

  return (
    <>
      <div className="sticky bottom-0 z-40 bg-gradient-to-t from-white via-white to-transparent pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  className="w-full px-6 py-6 text-lg resize-none border-none outline-none min-h-[120px] relative z-10 bg-transparent"
                  rows={3}
                />
                {!message && (
                  <div className="absolute top-6 left-6 text-lg text-gray-400 pointer-events-none z-0">
                    <span className="inline-block">
                      {animatedPlaceholder}
                      {currentIndex < placeholder.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 right-4">
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all  duration-200 ${
                    message.trim()
                      ? "bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button className=" w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 " />
        </button>
      </div>
    </>
  );
};
