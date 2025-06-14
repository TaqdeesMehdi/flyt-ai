"use client";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import { deals } from "../../../data/data";
import Link from "next/link";
export const Deals = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Live & personalized deals with jaw dropping videos
          </h2>
          <p className="text-lg text-gray-600">What makes me stand out</p>
        </div>

        {/* the grid layout of the deals area*/}
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, index) => {
            const { image, description } = deal;

            return (
              <Link href="/trip" key={index}>
                <div className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer">
                  <Image
                    src={image}
                    alt={`Travel destination ${index + 1}`}
                    fill
                    quality={95}
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-white transition-colors">
                      <span>Ask</span>
                      <MessageSquare size={14} />
                    </button>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-800 font-semibold italic text-sm leading-relaxed">
                    &quot;{description}&quot;
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
