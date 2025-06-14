import React from "react";
import { Header } from "./Header";
import { Card } from "./Card";
import { TripDescription } from "./TripDescription";
import InputField from "./Input-field";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white border-r border-gray-200 flex flex-col lg:min-h-full ">
      <Header />
      <Card />
      <TripDescription />
      <p className="text-[12px] text-gray-400 flex items-center justify-center mb-2">
        I&apos;d love any suggestion, Click yo give&nbsp;
        <span className="underline hover:text-gray-950 cursor-pointer">
          feedback
        </span>
      </p>
      <InputField />
    </div>
  );
};

export default Sidebar;
