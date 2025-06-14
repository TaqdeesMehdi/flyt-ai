import React from "react";
import { HeaderTrip } from "./leftSide-header/HeaderTrip";
import { TripOverview } from "./TripOverview";
import { Highlight } from "./Highlight";
import { Schedule } from "./schedules/Schedules";
import { Gallery } from "./gallery/Gallery";
import { Transportation } from "./Transportations";

const MainContent: React.FC = () => {
  return (
    <div className="bg-white lg:bg-gray-50 ">
      <div className="max-w-none lg:max-w-4xl mx-auto p-4 lg:p-8">
        <HeaderTrip />
        <TripOverview />
        <Highlight />
        <Schedule />
        <Gallery />
        <Transportation />
      </div>
    </div>
  );
};

export default MainContent;
