import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="p-2 cursor-pointer text-gray-600 bg-white hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
        >
          <User size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>Login-In</DropdownMenuItem>
        <DropdownMenuItem>Manage Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
