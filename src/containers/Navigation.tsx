import { forwardRef, useState } from "react";
import { IconCodeDots, IconPencil } from "@tabler/icons-react";
import LayoutControls from "../components/navigation/layout-controls";
import Settings from "../components/Settings";
import Divider from "../components/common/divider";
import Refresh from "../components/Refresh";

export default function Navigation() {
   const [projectName, setProjectName] = useState("Untitled...");
   const [isEditing, setIsEditing] = useState(false);

   return (
      <div className="flex justify-between items-center p-2 px-5 border-b border-gray-300 dark:border-gray-800">
         <div className="flex items-center gap-2">
            <div className="px-2 *:stroke-gray-800 dark:*:stroke-gray-100">
               <IconCodeDots />
            </div>
            {isEditing ? (
               <input
                  type="text"
                  value={projectName}
                  className="bg-transparent outline-none font-medium border-none text-gray-700 dark:text-gray-200"
                  onChange={(e) => setProjectName(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  autoFocus
               />
            ) : (
               <span className="text-gray-400 font-medium dark:text-gray-400">{projectName}</span>
            )}
            <button onClick={() => setIsEditing(true)}>
               <span className="inline text-gray-700 dark:text-gray-400">
                  <IconPencil className="" />
               </span>
            </button>
         </div>
         <div className="flex items-center gap-4">
            <Refresh />
            <Divider />
            <LayoutControls />
            <Settings />
            <Divider />
            <button className="size-7 flex bg-pink-500 rounded-full"></button>
         </div>
      </div>
   );
}

// Update your Navigation component to forward refs
export const NavigationWithRef = forwardRef<HTMLDivElement>((_props, ref) => (
   <div ref={ref}>
      <Navigation />
   </div>
));
