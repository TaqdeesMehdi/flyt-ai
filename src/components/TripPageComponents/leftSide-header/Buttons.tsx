import { Download, Edit, MessageCircle, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
const toolTips = [
  {
    id: 1,
    icon: Download,
    content: "Download",
    isCartIcon: false,
  },
  {
    id: 2,
    icon: Edit,
    content: "Edit trip",
    isCartIcon: false,
  },
  {
    id: 3,
    icon: MessageCircle,
    content: "Share",
    isCartIcon: false,
  },
  {
    id: 4,
    icon: ShoppingCart,
    content: "Book Item in your Trip",
    isCartIcon: true,
  },
];
export const Buttons = () => {
  return (
    <div className="flex space-x-2 mt-2">
      {toolTips.map((toolTip) => {
        const { id, icon, content, isCartIcon } = toolTip;
        const Icon = icon;
        return (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "p-1 hover:bg-gray-100 rounded cursor-pointer",
                  isCartIcon && "bg-sky-400 rounded-3xl p-2 hover:bg-sky-300"
                )}
              >
                <Icon className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};
