import { Heart } from "lucide-react";
export const Header = () => {
  return (
    <div className="p-2 lg:p-6 border-b border-gray-100">
      <div className="flex items-center space-x-2 text-sm text-gray-600 border border-gray-300 p-1 rounded-xl">
        <Heart className="w-4 h-4" />
        <span className="line-clamp-2">
          7-Day Luxury Family Adventure French Riviera
        </span>
      </div>
    </div>
  );
};
