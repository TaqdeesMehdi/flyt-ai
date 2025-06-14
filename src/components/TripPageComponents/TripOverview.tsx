"use client";
import { useState } from "react";

export const TripOverview: React.FC = () => {
  const [readMore, setIsReadMore] = useState(false);
  const des =
    " Embark on a -day luxury family adventure along the stunning French Riviera, perfectly tailored for two adults and three children. Experience the extraordinary with a carefully curated itinerary that showcases the glamour of Cannesand the picturesque charm of Nice, each city offering its own unique attractions and delights. From exploring the stunning coastline to enjoying luxurious beaches, fine-filled water sports, and unique cultural";
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Overview</h2>
      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          {readMore ? des : `${des.substring(0, 150)}`}

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
      </div>
    </div>
  );
};
