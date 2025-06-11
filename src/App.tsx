import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { cn } from "./lib/utils";
import { useEditorDirection } from "./contexts/EditorStateContext";
import { FooterWithRef } from "./containers/Footer";
import { NavigationWithRef } from "./containers/Navigation";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";

type PanelDirection = "horizontal" | "vertical";

export default function App() {
   const { editorDirection } = useEditorDirection();
   const [isFullscreen, setIsFullscreen] = useState(false);
   const [panelDirection, setPanelDirection] = useState<PanelDirection | undefined>(undefined);

   useEffect(() => {
      if (editorDirection === "horizontal" || editorDirection === "vertical") {
         setPanelDirection(editorDirection === "horizontal" ? "horizontal" : "vertical");
      }

      window.addEventListener("keydown", (e) => {
         if (e.key === "Esc" || e.key === "Escape") {
            setIsFullscreen(false);
         }
      });
   }, [editorDirection]);

   return (
      <div className="h-screen relative flex flex-col overflow-hidden">
         {/* Animated Navigation */}
         <Transition
            show={!isFullscreen}
            enter="transition-all duration-300 ease-in-out"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300 ease-in-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
         >
            <NavigationWithRef />
         </Transition>

         {/* Main Content */}
         {editorDirection !== "preview-only" ? (
            <PanelGroup direction={panelDirection!} className="flex-1">
               <Panel className="transition-all duration-300 ease-in-out">
                  <CodeEditorWindow />
               </Panel>

               <PanelResizeHandle
                  className={cn(
                     panelDirection === "horizontal"
                        ? "w-2 hover:w-3 transition-all duration-300"
                        : "h-2 hover:h-3 transition-all duration-300",
                     "bg-gray-200 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-blue-500",
                     "relative group"
                  )}
               >
                  <div
                     className={cn(
                        "absolute inset-0 flex items-center justify-center",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     )}
                  >
                     <div
                        className={cn(
                           panelDirection === "horizontal" ? "w-1 h-8" : "h-1 w-8",
                           "bg-blue-500 dark:bg-blue-400 rounded-full"
                        )}
                     />
                  </div>
               </PanelResizeHandle>

               <Panel className="transition-all duration-300 ease-in-out">
                  <CodeEditorPreview />
               </Panel>
            </PanelGroup>
         ) : (
            <PanelGroup
               direction={panelDirection!}
               className={cn(
                  "fixed inset-0 transition-all duration-300 ease-in-out",
                  isFullscreen ? "top-0" : "top-14"
               )}
            >
               <Panel>
                  <button
                     className="bg-gray-900/90 absolute top-5 right-5 z-10 p-1.5 text-white rounded-full opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110"
                     onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                     {isFullscreen ? (
                        <IconChevronDown className="w-5 h-5" />
                     ) : (
                        <IconChevronUp className="w-5 h-5" />
                     )}
                  </button>
                  <CodeEditorPreview />
               </Panel>
            </PanelGroup>
         )}

         {/* Footer */}
         <Transition
            show={!isFullscreen}
            enter="transition-all duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
         >
            <FooterWithRef />
         </Transition>
      </div>
   );
}
