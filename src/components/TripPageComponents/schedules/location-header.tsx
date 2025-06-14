import { MapPin } from "lucide-react";

export const LocationHeader = () => {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <MapPin className="w-5 h-5 text-gray-600" />
      <span className="font-semibold text-gray-900">
        Nice, France (1 - 3 Days)
      </span>
    </div>
  );
};
