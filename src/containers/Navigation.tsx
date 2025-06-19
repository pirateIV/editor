import React, { forwardRef, useState } from "react";
import { Button } from "@headlessui/react";
import { IconPencil } from "@tabler/icons-react";

import { useEditorState } from "../contexts/EditorStateContext";
import { ExportOptionsDialog } from "../components/ExportOptionsDialog";
import Settings from "../components/Settings";
import Refresh from "../components/Refresh";
import LayoutControls from "../components/layout-controls";
import Divider from "../components/common/divider";

const DEFAULT_APP_NAME = "Untitled...";

export default function Navigation() {
   const { appName, setCurrentAppName } = useEditorState();
   
   const [isEditing, setIsEditing] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   function handleOnClick() {
      if (appName === DEFAULT_APP_NAME) setCurrentAppName("");
   }

   function handleOnBlur() {
      if (appName.trim() === "") setCurrentAppName(DEFAULT_APP_NAME);
      setIsEditing(false);
   }

   function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      setCurrentAppName(e.target.value);
   }

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
                  onClick={handleOnClick}
                  onChange={handleOnChange}
                  onBlur={handleOnBlur}
                  autoFocus
               />
            ) : (
               <span
                  className="text-gray-400 font-medium dark:text-gray-400 cursor-pointer hover:text-gray-500 hover:bg-gray-200 px-1 rounded-md"
                  onClick={() => setIsEditing(true)}
               >
                  {appName}
               </span>
            )}
            <button onClick={() => setIsEditing(true)}>
               <span className="inline text-gray-700 dark:text-gray-400">
                  <IconPencil className="" />
               </span>
            </button>
         </div>
         <div className="flex items-center gap-4">
            <Button
               className="py-2 px-5 font-medium bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm me-8"
               onClick={() => setIsOpen(true)}
            >
               Export
            </Button>
            <ExportOptionsDialog open={isOpen} onClose={() => setIsOpen(false)} />
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
