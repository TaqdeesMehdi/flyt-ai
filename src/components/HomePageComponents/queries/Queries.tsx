import React from "react";
import { LeftGridQueries } from "./left-grid-queries";
import { FlightPaths } from "./flight-paths";

export const Queries = () => {
  //NOTE: in the original layla.ai whenever you hover on any query bar it will show the corresponding trip/flight path on the right side of the grid i tried to implement it a bonus/additional feature but couldn't because i did not have much time left and i have to do a lot of searching to implement that feature,
  return (
    <div className=" py-12 md:py-16 px-4 w-[800px]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See how I do it
          </h2>
          <p className="text-lg text-gray-600">
            Pick one of these prompts and let the vacation ideas flow!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side of the grid column layout this one have four divs  */}
          <LeftGridQueries />

          {/* Right side of grid column layout trips plans and many others */}
          <FlightPaths />
        </div>
      </div>
    </div>
  );
};
