import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="p-2 bg-white cursor-pointer text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
        >
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="end">
        <DropdownMenuItem>My Chat</DropdownMenuItem>
        <DropdownMenuItem>Manage Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>About</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
        <DropdownMenuItem>Terms of services</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
