import React from "react";

export default function IconButton({ icon: Icon }: { icon: React.ElementType }) {
   return (
      <button className="flex text-gray-500 transition-colors dark:text-gray-500 dark:hover:text-gray-200 hover:text-gray-600">
         <span>
            <Icon className="size-6" />
         </span>
      </button>
   );
}
