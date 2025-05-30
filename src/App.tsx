import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";
import { useEditorDirection } from "./hooks/useEditorDirection";
import { Icons } from "./components/icons";
import type { EditorDirection } from "./types";
import { cn } from "./lib/utils";
import { useEffect, useState } from "react";

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

   useEffect(() => {
      /* Persist the direction of the panels to ignore custom editor options */
      if (editorDirection === "horizontal" || editorDirection === "vertical") {
         setPanelDirection(editorDirection === "horizontal" ? "horizontal" : "vertical");
      } else {
         setEditorDirection(panelDirection!);
      }
   }, [editorDirection]);

   console.log(editorDirection, panelDirection)

   return (
      <div className="h-screen flex flex-col">
         <div className="p-2 flex items-center justify-baseline border-b border-gray-300">
            <div className="px-2 *:stroke-gray-800">
               <Icons.Fragment strokeWidth={2} />
            </div>
            <div className="flex ml-auto rounded-lg bg-white w-fit">
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
         <div className="h-4 border-t-2 border-t-gray-200 bg-white"></div>
      </div>
   );
}
