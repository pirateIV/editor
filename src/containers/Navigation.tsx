import { forwardRef, useState } from "react";
import { IconPencil } from "@tabler/icons-react";

import { useEditorState } from "../contexts/EditorStateContext";
import Settings from "../components/Settings";
import Divider from "../components/common/divider";
import Refresh from "../components/Refresh";
import LayoutControls from "../components/layout-controls";

export default function Navigation() {
   const { appName, setCurrentAppName } = useEditorState();
   const [isEditing, setIsEditing] = useState(false);

   return (
      <div className="flex justify-between items-center p-2 px-5 border-b border-gray-300 dark:border-gray-800">
         <div className="flex items-center gap-2">
            <div className="px-2 *:stroke-gray-800 dark:*:stroke-gray-100">
               {/* prettier-ignore */}
               <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* <rect x="10" y="10" width="180" height="180" rx="30" fill="#888888"/> */}
                  <path d="M60 70L40 90L60 110" stroke="#555555" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M140 70L160 90L140 110" stroke="#555555" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M85 130L115 50" stroke="gray" strokeWidth="15" strokeLinecap="round"/>
               </svg>
            </div>
            {isEditing ? (
               <input
                  type="text"
                  value={appName}
                  className="bg-transparent outline-none font-medium border-none text-gray-700 dark:text-gray-200"
                  onChange={(e) => setCurrentAppName(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  autoFocus
               />
            ) : (
               <span className="text-gray-400 font-medium dark:text-gray-400">{appName}</span>
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
