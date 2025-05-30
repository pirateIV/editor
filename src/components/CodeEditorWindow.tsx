import React from "react";
import type { Language } from "../types";

import CodeEditorTab from "./CodeEditorTab";
import { useCodeStore } from "../hooks/useCodeStore";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function CodeEditorWindow() {
   const { code, setCodeUpdate } = useCodeStore();

   const onChange = (language: Language, data: string) => {
      setCodeUpdate(language, data);
   };

   const defaultLanguages: Language[] = ["html", "css", "javascript"];

   return (
      <div className="flex flex-col h-full">
         <PanelGroup direction="vertical">
            {defaultLanguages.map((language, index) => (
               <React.Fragment key={language}>
                  <Panel minSize={6}>
                     <CodeEditorTab
                        language={language}
                        code={code.languages[language]}
                        onChange={onChange}
                     />
                  </Panel>
                  {index < defaultLanguages.length - 1 && <PanelResizeHandle className="h-1"/>}
               </React.Fragment>
            ))}
         </PanelGroup>
      </div>
   );
}
