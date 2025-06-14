"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../ui/tooltip";
import { UserButton } from "./user-button";
import { MenuButton } from "./menu-button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  isSticky?: boolean;
}
//NOTE: I added it after every thing was coded , so there was an extra scroll bar in trip page it was kinda buggy so I had to remove it adding fixed in navbar was giving more bugs so used calc height property in the main content page(trip page) and add this prop to navbar
export const Navbar = ({ isSticky = false }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isSticky) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isSticky]);

  return (
    <div
      className={cn(
        isSticky ? "sticky top-0 left-0 w-full z-50" : "relative w-full"
      )}
    >
      <nav
        className={`bg-white border-b border-gray-100 px-4 py-3 transition-shadow duration-300 ${
          isScrolled && isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link prefetch={true} href="/">
              <Image
                src="/logo.svg"
                alt="LOGO"
                width={60}
                height={60}
                className="text-white font-bold text-sm"
              />
            </Link>
          </div>

          {/* Right side menu */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <span className="text-sm">For Partners</span>
            </button>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
                  <Bell size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>

            <UserButton />
            <MenuButton />
          </div>
        </div>
      </nav>
    </div>
  );
};
