import * as React from "react"
import { InfoIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface TooltipProps {
  text: string;
  className?: string;
}

export function Tooltip({ text, className }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      <InfoIcon className={cn(
        "h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help ml-1",
        className
      )} />
      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex flex-col items-center">
          <div className="w-80 rounded bg-gray-900 p-3 text-xs leading-relaxed text-white shadow-lg text-center">
            {text}
          </div>
          <div className="h-2 w-4 overflow-hidden">
            <div className="h-2 w-2 origin-top-left rotate-45 transform bg-gray-900 translate-x-3 -translate-y-1" />
          </div>
        </div>
      </div>
    </div>
  );
}