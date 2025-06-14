import { Navbar } from "@/components/HomePageComponents/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isSticky={true} />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default HomeLayout;
