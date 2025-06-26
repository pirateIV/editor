import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Button } from "@headlessui/react";
import { IconDownload, IconPencil } from "@tabler/icons-react";

import { useEditorState } from "../contexts/editor-state";
import { ExportOptionsDialog } from "../components/ExportOptionsDialog";
import Settings from "../components/Settings";
import Refresh from "../components/Refresh";
import LayoutControls from "../components/layout-controls";
import Divider from "../components/common/divider";

const DEFAULT_APP_NAME = "Untitled Project"; // More descriptive default

export default function Navigation() {
   const { appName, setCurrentAppName } = useEditorState();

   const [isEditing, setIsEditing] = useState(false);
   const [draftAppName, setDraftAppName] = useState(appName);
   const [isOpen, setIsOpen] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   // Sync draftAppName with appName from context
   useEffect(() => {
      setDraftAppName(appName);
   }, [appName]);

   // Focus the input when editing starts
   useEffect(() => {
      if (isEditing && inputRef.current) {
         inputRef.current.focus();
      }
   }, [isEditing]);

   const handleEditStart = () => {
      setIsEditing(true);
      if (appName === DEFAULT_APP_NAME) {
         setDraftAppName(""); // Clear default for easier typing
      }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDraftAppName(e.target.value);
   };

   const saveAppName = () => {
      const finalAppName = draftAppName.trim() === "" ? DEFAULT_APP_NAME : draftAppName.trim();
      setCurrentAppName(finalAppName);
      setIsEditing(false);
   };

   const handleInputBlur = () => {
      saveAppName();
   };

   const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         saveAppName();
         inputRef.current?.blur(); // Blur to exit editing mode
      } else if (e.key === "Escape") {
         setDraftAppName(appName); // Revert changes
         setIsEditing(false);
         inputRef.current?.blur(); // Blur to exit editing mode
      }
   };

   return (
      <div className="flex justify-between items-center p-3 px-6 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-800">
         {/* Left section: Logo and App Name */}
         <div className="flex items-center gap-3">
            {/* Modernized Logo SVG */}
            <div className="flex-shrink-0">
               <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  {/* A more abstract and modern design */}
                  <path
                     d="M30 40 L50 20 L70 40"
                     stroke="#6366F1" // A vibrant primary color (indigo-500)
                     strokeWidth="10"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M30 60 L50 80 L70 60"
                     stroke="#A78BFA" // A complementary lighter shade (purple-400)
                     strokeWidth="10"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>

            {/* App Name Editor */}
            {isEditing ? (
               <input
                  ref={inputRef}
                  type="text"
                  value={draftAppName}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleInputKeyDown}
                  placeholder={DEFAULT_APP_NAME}
                  className="flex-grow bg-transparent outline-none font-semibold text-lg text-gray-800 dark:text-gray-100 border-b border-transparent focus:border-blue-500 dark:focus:border-blue-400 pb-0.5 transition-colors duration-200"
               />
            ) : (
               <div
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={handleEditStart}
               >
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                     {appName}
                  </span>
                  <IconPencil className="size-4 text-gray-400 transition-colors duration-200 dark:group-hover:text-gray-300 group-hover:text-gray-600" />
               </div>
            )}
         </div>

         {/* Right section: Actions */}
         <div className="flex items-center gap-4">
            {/* Export Button */}
            <Button
               className="py-2 rounded-full px-3.5 inline-flex items-center gap-1.5 font-medium bg-gray-800 hover:bg-gray-900 text-white text-[13px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
               onClick={() => setIsOpen(true)}
            >
               <IconDownload className="size-4 opacity-60" />
               Export
            </Button>
            <ExportOptionsDialog open={isOpen} onClose={() => setIsOpen(false)} />

            {/* Action Controls */}
            <Refresh />
            <Divider />
            <LayoutControls />
            <Settings />
            <Divider />

            {/* User Profile / Avatar Placeholder */}
            <button className="size-8 flex justify-center items-center text-sm font-bold text-white bg-pink-500 rounded-full shadow-md transition-colors duration-200 hover:bg-pink-600">
               {/* U */}
            </button>
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
