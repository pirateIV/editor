import { IconEye } from "@tabler/icons-react";
import { forwardRef } from "react";

// Similarly for the footer
export const FooterWithRef = forwardRef<HTMLDivElement>((_props, ref) => (
   <div
      ref={ref}
      className="h-8 bg-gray-50 border-t-2 border-t-gray-200 dark:bg-gray-900 dark:border-t-gray-800"
   >
      <div className="size-full flex items-center justify-end px-10">
         <button>
            <IconEye />
         </button>
      </div>
   </div>
));
