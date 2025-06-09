import { useState } from "react";
import { IconCodeDots, IconPencil, IconRefresh, IconSettings } from "@tabler/icons-react";

import { useEditorDirection } from "../contexts/EditorStateContext";
import type { EditorDirection } from "../types";
import { Icons } from "../components/icons";
import IconButton from "../components/Navigation/icon-button";
import SettingsDialog from "../components/SettingsDialog";
import Divider from "../components/common/divider";
import LayoutButton from "../components/Navigation/layout-button";

const layoutIcons: {
   label: string;
   layoutMode?: EditorDirection;
   icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}[] = [
   {
      label: "Switch to vertical split layout",
      layoutMode: "horizontal",
      icon: Icons["VerticalSplit"],
   },
   {
      label: "Switch to horizontal split layout",
      layoutMode: "vertical",
      icon: Icons["HorizonalSplit"],
   },
   {
      label: "Switch to preview-only layout",
      layoutMode: "preview-only",
      icon: Icons["PreviewOnly"],
   },
   {
      label: "Switch to responsive design mode",
      // layoutMode: "responsive",
      icon: Icons["ResponsiveDesign"],
   },
];

export default function Navigation() {
   const { setEditorDirection } = useEditorDirection();

   const [projectName, setProjectName] = useState("Untitled...");
   const [isEditing, setIsEditing] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

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
            <IconButton icon={IconRefresh} />

            <Divider />

            <div className="ml-auto w-fit flex bg-white rounded-lg border border-gray-300 shadow-2xs shadow-gray-100 dark:shadow-gray-950/40 dark:bg-gray-800 dark:border-0 dark:border-t dark:border-t-gray-700">
               {layoutIcons.map(({ label, icon: Icon, layoutMode }) => (
                  <LayoutButton
                     key={label}
                     label={label}
                     onClick={() => (layoutMode ? setEditorDirection(layoutMode) : null)}
                  >
                     <Icon />
                  </LayoutButton>
               ))}
            </div>

            <div>
               <button
                  className="flex text-gray-500 transition-colors dark:text-gray-500 dark:hover:text-gray-200 hover:text-gray-600"
                  onClick={() => setIsOpen(true)}
               >
                  <span>
                     <IconSettings className="size-6" />
                  </span>
               </button>
               <SettingsDialog open={isOpen} onClose={() => setIsOpen(false)} />
            </div>

            <Divider />

            <button className="size-7 flex bg-pink-500 rounded-full"></button>
         </div>
      </div>
   );
}
