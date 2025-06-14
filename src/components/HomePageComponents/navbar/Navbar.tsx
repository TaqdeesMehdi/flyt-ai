import { Bell } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../ui/tooltip";
import { UserButton } from "./user-button";
import { MenuButton } from "./menu-button";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-3">
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
  );
};
