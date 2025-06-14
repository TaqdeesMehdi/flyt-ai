import { Tags } from "./Tags";
import { Buttons } from "./Buttons";
import { HeaderImages } from "./HeaderImages";
export const HeaderBody = () => {
  return (
    <div className="flex flex-col md:flex-row items-start w-full">
      <div className="flex-1 pr-0 md:pr-4 mb-4 md:mb-0">
        <h3 className="lg:text-3xl text-xl font-bold text-gray-800">
          7-Day Luxury Family Adventure French Riviera
        </h3>
        <Tags />
        <div className="mt-4 text-gray-600 text-sm mb-3">
          Jul 15 - 22 | 5 travelers
        </div>
        <Buttons />
      </div>
      <HeaderImages />
    </div>
  );
};
