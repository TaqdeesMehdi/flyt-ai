"use client";

import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function InputField() {
  return (
    <div className="flex flex-col gap-2 w-full px-4 lg:px-6">
      <form className="relative border border-gray-200 h-[130px] rounded-xl p-2">
        <textarea
          className=" px-2 py-2 text-lg resize-none border-none outline-none min-h-[120px] relative z-10 bg-transparent"
          rows={2}
        />
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-1 left-1"
        >
          + Modify trip
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-1 left-30"
        >
          +Cheaper
        </Button>

        <Button
          size="sm"
          className="shrink-0 bg-gray-400 text-white hover:bg-gray-600 absolute bottom-1 right-1"
        >
          <Plane />
          Ask
        </Button>
      </form>
    </div>
  );
}
