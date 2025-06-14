import React from "react";
import { Check } from "lucide-react";

export const Highlight = () => {
  const highlights = [
    "Stay at the iconic Hotel Le Negresco in Nice with private beach access",
    "Explore Nice's Old Town and vibrant Cours Saleya Flower Market",
    "Enjoy a scenic 3-wheel vehicle drive along the French",
    "Private boat trip to Lerins Islands and Cap d'Antibes in",
    "Parasailing and jet ski adventures suitable for the whole family",
    "Relax in a panoramic villa in Cannes with stunning sea views",
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-gray-700">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
