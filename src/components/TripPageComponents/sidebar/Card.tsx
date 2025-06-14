import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Card = () => {
  return (
    <div className="flex mb-6 mt-4 items-center bg-gray-50 rounded-lg p-3 sm:p-4 shadow-md mx-auto w-[90%] sm:w-[400px]">
      <Image
        src="/main-trip-1.webp"
        alt="Trip Image"
        width={80}
        height={80}
        className="rounded-lg object-cover mr-3 sm:mr-4 w-20 h-20 sm:w-24 sm:h-24"
      />
      <div className="flex-1">
        <h3 className="text-base sm:text-lg text-gray-800 line-clamp-2">
          7-Day Luxury Family Adventure French Riviera
        </h3>
        <Button className="mt-2 w-full bg-cyan-200 text-gray-800 px-3 sm:px-4 py-1 rounded-lg hover:bg-cyan-300 text-xs sm:text-sm">
          Open
        </Button>
      </div>
    </div>
  );
};
