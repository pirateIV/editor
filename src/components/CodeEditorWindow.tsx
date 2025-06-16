import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { cn } from "../lib/utils";
import type { Language } from "../types";
import { useCodeStore } from "../hooks/useCodeStore";
import { useEditorDirection } from "../contexts/EditorDirectionContext";
import CodeEditorTab from "./CodeEditorTab";

const defaultLanguages: Language[] = ["html", "css", "javascript"];

export default function CodeEditorWindow() {
   const { code, setCodeUpdate } = useCodeStore();
   const { editorDirection } = useEditorDirection();

   const onChange = (language: Language, data: string) => {
      setCodeUpdate(language, data);
   };

   return (
      <div className="flex flex-col h-full">
         {/* Flip the code editor to direction opposite of the layout  */}
         <PanelGroup direction={editorDirection === "vertical" ? "horizontal" : "vertical"}> 
            {defaultLanguages.map((language, index) => (
               <React.Fragment key={language}>
                  <Panel minSize={5}>
                     <CodeEditorTab
                        language={language}
                        code={code.languages[language]}
                        onChange={onChange}
                     />
                  </Panel>
                  {index < defaultLanguages.length - 1 && (
                     <PanelResizeHandle
                        className={cn(
                           editorDirection === "vertical" ? "w-1" : "h-1",
                           "border border-gray-300 hover:bg-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                        )}
                     />
                  )}
               </React.Fragment>
            ))}
         </PanelGroup>
      </div>
   );
}
