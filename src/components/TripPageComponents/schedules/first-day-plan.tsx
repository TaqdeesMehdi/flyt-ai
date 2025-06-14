import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { des } from "../../../../data/data";
import { Button } from "@/components/ui/button";

export const FirstDayPlan = () => {
  const [show, setIsShow] = useState(true);
  const [readMore, setIsReadMore] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
              Arrival and Relaxing Evening in Nice
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
            Arrive in Nice after your long drive from Berlin and check in at{" "}
            <strong>Hotel Le Negresco ⭐</strong>. Spend a relaxing evening
            enjoying the sea breeze and beautiful sunset. For dinner, indulge in
            exquisite French cuisine at <strong>La Chèvre d&apos;Or</strong> –
            providing the best traditional menu inside you the perfect start to
            experience.
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
                  <div>✓ Parking available</div>
                  <div>✓ Room has ocean view</div>
                </div>
                <div className="mt-2 text-xs text-blue-600">View Details ↗</div>
              </div>
            </div>

            <Image
              src="/demo-trip-3.png"
              alt="Hotel Le Negresco"
              width={340}
              height={128}
              className="h-32 lg:h-48 object-cover rounded-lg"
            />
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">
              Promenade des Anglais
            </h4>
            <p className="text-sm text-gray-700">
              {readMore ? des : `${des[0].substring(0, 150)}`}

              {readMore ? (
                <span
                  onClick={() => setIsReadMore(!readMore)}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  &nbsp;Read less
                </span>
              ) : (
                <span
                  onClick={() => setIsReadMore(!readMore)}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  ...Read more
                </span>
              )}
            </p>
            <div className="mt-2 text-xs text-blue-600">View Details ↗</div>
          </div>
        </>
      )}
    </div>
  );
};
