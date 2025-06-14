"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-teal-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sign up to the newsletter
            </h2>
            <p className="text-gray-600 mb-2">
              A newsletter about traveling and using AI to make finding,
              planning and booking your vacations really easy.
            </p>
            <p className="text-gray-600 mb-6">
              Don&apos;t search, just ask Flyt.
            </p>
            <p className="text-sm text-gray-500">Over 72,000 subscribers</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
