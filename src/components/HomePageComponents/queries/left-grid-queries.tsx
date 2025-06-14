export const LeftGridQueries = () => {
  return (
    <div className="space-y-3 md:space-y-4 h-full flex flex-col justify-between">
      <div className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl p-2 md:p-3">
        <div className="text-[10px] md:text-xs font-semibold text-orange-600 mb-1">
          OUTDOORS
        </div>
        <p className="text-xs md:text-sm text-gray-800 italic">
          &quot;Show me videos for where I can go for a safari in Africa with my
          family&quot;
        </p>
      </div>

      <div className="bg-blue-50 hover:bg-blue-100 border border-blue-600 rounded-xl p-2 md:p-3">
        <div className="text-[10px] md:text-xs font-semibold text-blue-600 mb-1">
          FLIGHTS
        </div>
        <p className="text-xs md:text-sm text-gray-800 italic">
          &quot;Find me flights under $100 to a beach destination for spring
          break&quot;
        </p>
      </div>

      <div className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl p-2 md:p-3">
        <div className="text-[10px] md:text-xs font-semibold text-purple-600 mb-1">
          HOTELS
        </div>
        <p className="text-xs md:text-sm text-gray-800 italic">
          &quot;Search for a luxury hotel in dubai with view of Burj al khalifa
          that has a jacuzzi&quot;
        </p>
      </div>

      <div className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-2 md:p-3">
        <div className="text-[10px] md:text-xs font-semibold text-green-600 mb-1">
          TRIPS
        </div>
        <p className="text-xs md:text-sm text-gray-800 italic">
          &quot;Build a 10 day romantic trip to Japan to visit the cherry
          blossoms with my partner&quot;
        </p>
      </div>
    </div>
  );
};
