"use client";
import { MessageCircle, Hotel } from "lucide-react";
import { ChatInput } from "./ChatInput";
export const Hero = () => {
  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          HEY!, I&apos;m Flyt, your ultimate travel companion.
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Just share your travel dreams, and I&apos;ll whip up the perfect
          plan—flights, hotels, and custom itineraries—faster than you can pack!
          ✈️
        </p>

        <div className="flex flex-row gap-4 justify-center mb-12">
          <button className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 transition-colors border-b-2 border-black">
            <MessageCircle size={20} />
            <span>Ask anything</span>
          </button>

          <button className="inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-500 px-6 py-3 transition-colors">
            <Hotel size={20} />
            <span>Hotels</span>
          </button>
        </div>

        <ChatInput />
      </div>
    </div>
  );
};
