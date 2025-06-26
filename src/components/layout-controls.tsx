import React from "react";
import { useEditorDirection } from "../contexts/editor-layout";
import LayoutButton from "./layout-button";
import { cn } from "../lib/utils";
import type { EditorDirection } from "../types";
import { Icons } from "./icons";

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

export default function LayoutControls() {
   const { editorDirection, setEditorDirection } = useEditorDirection();

   const themeMode = {
      active: "fill-sky-100 stroke-sky-500 dark:fill-sky-400/50 dark:stroke-sky-400",
      inactive:
         "stroke-gray-500/70 fill-gray-100 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400 hover:fill-gray-200 hover:stroke-gray-400",
   };

   return (
      <div className="ml-auto shadow-2xs w-fit flex bg-white rounded-lg border border-neutral-300 shadow-gray-100 dark:shadow-gray-950/40 dark:bg-gray-800 dark:border-0 dark:border-t dark:border-t-gray-700">
         {layoutIcons.map(({ label, icon: Icon, layoutMode }) => (
            <LayoutButton
               key={label}
               label={label}
               onClick={() => (layoutMode ? setEditorDirection(layoutMode) : null)}
            >
               <Icon
                  className={cn(
                     editorDirection === layoutMode ? themeMode.active : themeMode.inactive
                  )}
               />
            </LayoutButton>
         ))}
      </div>
   );
}
