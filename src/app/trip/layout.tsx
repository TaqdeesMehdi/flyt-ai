import { Navbar } from "@/components/HomePageComponents/navbar/Navbar";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const TripLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default TripLayout;
