import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export const SecondDayPlan = () => {
  const [show, setIsShow] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
              Explore Nice&apos;s Old Town and Scenic Drive
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
            Nestled along the French Riviera, Nice&apos;s Old Town is a
            captivating blend of history and charm, where narrow cobblestone
            streets wind past colorful Baroque buildings, quaint shops, and
            bustling markets like the Cours Saleya. Visitors can immerse
            themselves in the local culture, savoring Niçoise cuisine at
            traditional eateries or exploring hidden gems such as the
            Saint-Réparate Cathedral
          </p>
        </>
      )}
    </div>
  );
};
