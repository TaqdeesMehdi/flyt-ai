"use client";

import Image from "next/image";

export const HeaderImages = () => {
  return (
    <div className="w-full md:w-[240px]">
      <div className="grid grid-cols-2 gap-1 h-[160px]">
        <div className="relative h-full">
          <Image
            src="/main-trip-1.webp"
            alt="Main Trip Image"
            fill
            sizes="(max-width: 768px) 50vw, 120px"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="grid grid-rows-2 gap-1 h-full">
          <div className="relative">
            <Image
              src="/main-trip-2.webp"
              alt="Trip Image 1"
              fill
              sizes="(max-width: 768px) 25vw, 60px"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/main-trip-6.webp"
              alt="Trip Image 2"
              fill
              sizes="(max-width: 768px) 25vw, 60px"
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold rounded-lg">
              +9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
