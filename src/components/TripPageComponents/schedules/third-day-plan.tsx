import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ThirdDayPlan = () => {
  const [show, setIsShow] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
              Cultural Morning and Departure to Cannes
            </h3>
            <span className="text-sm text-gray-500">03 Jul 2025</span>
          </div>
        </div>
        <Button
          onClick={() => setIsShow(!show)}
          variant="outline"
          className="rounded-3xl border-none"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Button>
      </div>

      {show && (
        <>
          <p className="text-gray-700 mb-4 text-sm lg:text-base">
            Begin your day with a cultural morning in Nice, where the air is
            filled with the aroma of fresh croissants and the lively hum of the
            Old Town’s morning market at Cours Saleya. Explore the rich heritage
            with a visit to the Matisse Museum, showcasing the works of the
            famed artist who once called Nice home, or stroll through the
            vibrant flower market to soak in local traditions. As the morning
            winds down, depart for Cannes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Hotel Le Negresco
                </h4>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                    Visited historic promenade
                  </span>
                </div>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>✓ Restaurant</div>
                  <div>✓ Pet allowed</div>
                  <div>✓ Family owned</div>
                </div>
                <div className="mt-2 text-xs text-blue-600">View Details ↗</div>
              </div>
            </div>

            <Image
              src="/demo-trip-2.jpeg"
              alt="Hotel Le Negresco"
              width={340}
              height={128}
              className="h-32 lg:h-48 object-cover rounded-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};
