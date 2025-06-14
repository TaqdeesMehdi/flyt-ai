import { Car, Train, Calendar } from "lucide-react";
import { journeys } from "../../../data/data";

export const Transportation = () => {
  return (
    <div className="mb-6 lg:mb-8">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
        Transfer & Transportation
      </h2>
      <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
        Transportation • Jul 15 - 22 • Booked Transportation
      </p>

      <div className="space-y-3 lg:space-y-4">
        {journeys.map((journey, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-3 lg:p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {journey.type === "car" ? (
                    <Car className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Train className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base truncate">
                    {journey.from}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    to {journey.to}
                  </p>
                </div>
              </div>

              <div className="text-right flex-shrink-0 ml-2">
                <div className="flex items-center space-x-1 lg:space-x-2 text-sm text-gray-600 mb-1">
                  <Calendar className="w-3 h-3" />
                  <span className="text-xs lg:text-sm">{journey.date}</span>
                </div>
                <p className="text-xs lg:text-sm text-gray-500">
                  {journey.duration}
                </p>
                {journey.returnDate && (
                  <p className="text-xs text-gray-400">
                    Return: {journey.returnDate}
                  </p>
                )}
              </div>

              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 flex-shrink-0"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 lg:mt-6 text-center">
        <p className="text-sm text-gray-600">
          7-Day Luxury Family Adventure French Riviera
        </p>
      </div>
    </div>
  );
};
