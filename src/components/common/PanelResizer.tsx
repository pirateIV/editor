import { PanelResizeHandle } from "react-resizable-panels";
import { cn } from "../../lib/utils";
import type { PanelDirection } from "../../types";

export default function PanelResizer({ direction }: { direction: PanelDirection | undefined }) {
   return (
      <PanelResizeHandle
         className={cn(
            direction === "horizontal"
               ? "w-2 transition-all duration-300"
               : "h-2 transition-all duration-300",
            "bg-gray-100 hover:bg-gray-200",
            "relative group"
         )}
      >
         <div
            className={cn(
               "absolute inset-0 flex items-center justify-center",
               "opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            )}
         >
            <div
               className={cn(
                  direction === "horizontal" ? "w-1 h-8" : "h-1 w-8",
                  "bg-gray-400 dark:bg-gray-400 rounded-full"
               )}
            />
         </div>
      </PanelResizeHandle>
   );
}
