import React from "react";
import { sites } from "../../../../data/data";
import { GalleryImages } from "./GalleryImage";
import Image from "next/image";

export const Gallery = () => {
  return (
    <div className="mb-6 lg:mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          Sites around Nice
        </h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
          See all
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
        {sites.map((site) => {
          const { id, image, location, author, type } = site;
          return (
            <GalleryImages
              key={id}
              image={image}
              location={location}
              author={author}
              type={type}
            />
          );
        })}
      </div>

      <div className="mt-4 lg:mt-6 bg-teal-50 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/main-trip-3.webp"
            alt="Cannes"
            width={40}
            height={40}
            className="lg:w-12 lg:h-12 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Cannes, France</h3>
            <p className="text-sm text-gray-600">Day 4 - 6</p>
          </div>
        </div>
        <button className="bg-teal-500 text-white px-3 lg:px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
          Continue trip
        </button>
      </div>
    </div>
  );
};
