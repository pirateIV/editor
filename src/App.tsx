import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { IconCodeDots, IconPencil } from "@tabler/icons-react";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";
import { useEditorDirection } from "./hooks/useEditorDirection";
import { Icons } from "./components/icons";
import type { EditorDirection } from "./types";
import { cn } from "./lib/utils";

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

type PanelDirection = "horizontal" | "vertical";

export default function App() {
   const { editorDirection, setEditorDirection } = useEditorDirection();
   const [panelDirection, setPanelDirection] = useState<PanelDirection | undefined>(undefined);
   const [projectName, setProjectName] = useState("Untitled");

   useEffect(() => {
      /* Persist the direction of the panels to ignore custom editor options */
      if (editorDirection === "horizontal" || editorDirection === "vertical") {
         setPanelDirection(editorDirection === "horizontal" ? "horizontal" : "vertical");
      }
   }, [editorDirection]);

   console.log(editorDirection, panelDirection);

   return (
      <div className="h-screen flex flex-col">
         <div className="p-2 flex items-center justify-baseline border-b border-gray-300 dark:border-gray-800">
            <div className="flex items-center gap-2">
               <div className="px-2 *:stroke-gray-800 dark:*:stroke-gray-100">
                  {/* <Icons.Fragment strokeWidth={2} /> */}
                  <IconCodeDots />
               </div>
                  <span className="text-lg font-medium text-gray-500">{projectName}</span>
                  <span className="text-gray-700 inline dark:text-gray-400"><IconPencil className=""/></span>
               {/* </div> */}
            </div>
            <div className="flex ml-auto rounded-lg bg-white border border-gray-200 dark:border-0 dark:border-t dark:border-t-gray-700 dark:bg-gray-800 w-fit">
               {layoutIcons.map(({ label, icon: Icon, layoutMode }) => (
                  <button
                     key={label}
                     className="h-full flex items-center justify-center"
                     onClick={() => (layoutMode ? setEditorDirection(layoutMode) : null)}
                  >
                     <span className="sr-only">{label}</span>
                     <Icon />
                  </button>
               ))}
            </div>
         </div>

         {editorDirection !== "preview-only" ? (
            <>
               <PanelGroup direction={panelDirection!}>
                  <Panel>
                     <CodeEditorWindow />
                  </Panel>
                  <PanelResizeHandle
                     className={cn(
                        panelDirection === "horizontal" ? "w-1" : "h-1",
                        "border border-gray-300 hover:bg-gray-300"
                     )}
                  />
                  <Panel>
                     <CodeEditorPreview />
                  </Panel>
               </PanelGroup>
            </>
         ) : (
            <PanelGroup direction={panelDirection!}>
               <Panel>
                  <CodeEditorPreview />
               </Panel>
            </PanelGroup>
         )}
         <div className="h-4 border-t-2 border-t-gray-200 bg-white dark:border-t-gray-800 dark:bg-gray-900"></div>
      </div>
   );
}
