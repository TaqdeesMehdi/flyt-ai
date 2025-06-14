import { Plane } from "lucide-react";

export const FlightPaths = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-gray-900">
            Estimated price $90
          </span>
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          Powered by SkyScanners
        </div>
      </div>

      {/* Flight route */}
      <div className="space-y-4">
        {/* Outbound */}
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="text-center">
            <div className="font-bold text-lg">BER</div>
            <div className="text-sm text-gray-600">Berlin</div>
            <div className="text-sm text-gray-500">25 Apr</div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">2h 45m</div>
              <div className="flex items-center">
                <div className="w-12 h-px bg-gray-300"></div>
                <Plane size={16} className="mx-2 text-gray-400" />
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <div className="text-sm text-gray-500">Non-stop</div>
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold text-lg">PMI</div>
            <div className="text-sm text-gray-600">Majorca</div>
            <div className="text-sm text-gray-500">25 Apr</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="text-center">
            <div className="font-bold text-lg">PMI</div>
            <div className="text-sm text-gray-600">Majorca</div>
            <div className="text-sm text-gray-500">30 Apr</div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">2h 45m</div>
              <div className="flex items-center">
                <div className="w-12 h-px bg-gray-300"></div>
                <Plane size={16} className="mx-2 text-gray-400" />
                <div className="w-12 h-px bg-gray-300"></div>
              </div>
              <div className="text-sm text-gray-500">Non-stop</div>
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold text-lg">BER</div>
            <div className="text-sm text-gray-600">Berlin</div>
            <div className="text-sm text-gray-500">30 Apr</div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          View Flights
        </button>
        <button className="flex-1 bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Get live price
        </button>
      </div>
    </div>
  );
};
