import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Panel, PanelGroup } from "react-resizable-panels";

import { cn } from "./lib/utils";
import { useMobile } from "./hooks/use-mobile";
import type { PanelDirection } from "./types";
import { useEditorDirection } from "./contexts/editor-layout";
import { FooterWithRef } from "./containers/Footer";
import { NavigationWithRef } from "./containers/Navigation";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";
import PanelResizer from "./components/common/PanelResizer";
import FullscreenButton from "./components/editor/FullscreenButton";

export default function Editor() {
   const isMobile = useMobile();
   const { editorDirection } = useEditorDirection();

   const [isFullscreen, setIsFullscreen] = useState(false);
   const [panelDirection, setPanelDirection] = useState<PanelDirection | undefined>(undefined);

   useEffect(() => {
      if (editorDirection === "horizontal" || editorDirection === "vertical") {
         setPanelDirection(editorDirection === "horizontal" ? "horizontal" : "vertical");
      }

      // Automatically sets layout to vertical for better viewing on mobile
      if (isMobile) {
         setPanelDirection("vertical");
      }

      window.addEventListener("keydown", (e) => {
         if (e.key === "Esc" || e.key === "Escape") {
            setIsFullscreen(false);
         }
      });
   }, [editorDirection, isMobile]);

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
               <PanelResizer direction={panelDirection} />
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
                  <FullscreenButton isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
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
