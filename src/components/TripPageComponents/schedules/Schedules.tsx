"use client";
import { useState } from "react";
import { FilterTabs } from "./filter-tabs";
import { LocationHeader } from "./location-header";
import { Maps } from "./map";
import { FirstDayPlan } from "./first-day-plan";
import { des } from "../../../../data/data";
import { SecondDayPlan } from "./second-day-plan";
import { ThirdDayPlan } from "./third-day-plan";

export const Schedule = () => {
  const [readMore, setIsReadMore] = useState(false);
  return (
    <div className="mb-6 lg:mb-8">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
        Itinerary
      </h2>

      {/* Filter tabs */}
      <FilterTabs />
      {/* Location header */}
      <LocationHeader />

      <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">
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

      {/* Map section */}
      <div className="bg-gray-100 rounded-lg h-48 lg:h-64 mb-4 lg:mb-6 relative overflow-hidden">
        <Maps />
        <div className="absolute inset-0 bg-blue-500/10 pointer-events-none"></div>
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg shadow text-sm font-medium z-10">
          Main Route
        </div>
      </div>

      {/* Plans of the trips */}
      <div className="space-y-4 lg:space-y-6">
        <FirstDayPlan />
        <SecondDayPlan />
        <ThirdDayPlan />
      </div>
    </div>
  );
};
