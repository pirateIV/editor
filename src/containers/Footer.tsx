import { forwardRef } from "react";

// Similarly for the footer
export const FooterWithRef = forwardRef<HTMLDivElement>((_props, ref) => (
   <div
      ref={ref}
      className="h-4 bg-white border-t-2 border-t-gray-200 dark:bg-gray-900 dark:border-t-gray-800"
   />
));
