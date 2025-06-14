import { CarFront } from "lucide-react";

export const FilterTabs = () => {
  return (
    <div className="flex space-x-2 lg:space-x-4 mb-4 lg:mb-6 overflow-x-auto">
      <div className="flex items-center">
        <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-sm font-medium text-white">
          1
        </span>
        <span className="ml-2 text-sm">Nice</span>
        <span className="ml-2 ">
          <CarFront />
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
          2
        </span>
        <span className="ml-2 text-sm">Cannes</span>
        <span className="ml-2 text-gray-400">
          <CarFront />
        </span>
      </div>
      <div className="flex items-center">
        <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
          3
        </span>
        <span className="ml-2 text-sm">Sannes Tropz</span>
      </div>
    </div>
  );
};
