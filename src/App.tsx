import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { cn } from "./lib/utils";
import { useEditorDirection } from "./contexts/EditorStateContext";
import Navigation from "./containers/Navigation";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";

type PanelDirection = "horizontal" | "vertical";

export default function App() {
   const { editorDirection } = useEditorDirection();
   const [panelDirection, setPanelDirection] = useState<PanelDirection | undefined>(undefined);

   useEffect(() => {
      /* Persist the direction of the panels to ignore custom editor options */
      if (editorDirection === "horizontal" || editorDirection === "vertical") {
         setPanelDirection(editorDirection === "horizontal" ? "horizontal" : "vertical");
      }
   }, [editorDirection]);

   return (
      <div className="h-screen flex flex-col">
         <Navigation />

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
         <div className="h-4 bg-white border-t-2 border-t-gray-200 dark:bg-gray-900 dark:border-t-gray-800"></div>
      </div>
   );
}
