import React from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import type { Language } from "../types";
import { useCodeStore } from "../contexts/editor-code-store";
import { useEditorDirection } from "../contexts/editor-layout";
import CodeEditorTab from "./CodeEditorTab";
import PanelResizer from "./common/PanelResizer";

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
                     <PanelResizer
                        direction={editorDirection === "horizontal" ? "vertical" : "horizontal"}
                     />
                  )}
               </React.Fragment>
            ))}
         </PanelGroup>
      </div>
   );
}
