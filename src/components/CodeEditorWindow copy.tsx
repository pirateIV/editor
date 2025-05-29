import React from "react";
import Split from "react-split-grid";
import { cn } from "../lib/utils";
import type { Language } from "../types";

import CodeEditorTab from "./CodeEditorTab";
import { useCodeStore } from "../hooks/useCodeStore";

export default function CodeEditorWindow() {
   const { code, setCodeUpdate } = useCodeStore();
   const [editorDirection, setEditorDirection] = React.useState<"row" | "column">("row");

   const onChange = (language: Language, data: string) => {
      setCodeUpdate(language, data);
   };

   const defaultLanguages: Language[] = ["html", "css", "javascript"];

   return (
      <div className="flex flex-col h-screen">
         <Split
            snapOffset={0}
            dragInterval={3}
            gridTemplateRows={editorDirection === "row" ? "1fr 5px 1fr 5px 1fr" : "1fr"}
            gridTemplateColumns={editorDirection === "column" ? "1fr 5px 1fr 5px 1fr" : "1fr"}
            cursor={editorDirection === "column" ? "col-resize" : "row-resize"}
         >
            {({
               getGridProps,
               getGutterProps,
            }: {
               getGridProps: () => React.HTMLAttributes<HTMLDivElement>;
               getGutterProps: (
                  direction: "row" | "column",
                  index: number
               ) => React.HTMLAttributes<HTMLDivElement>;
            }) => (
               <div className="grid flex-grow min-h-0" {...getGridProps()}>
                  {defaultLanguages.map((language, index) => {
                     const gutterIndex = index === 0 ? 1 : index + 2;
                     const gutterName = editorDirection === "row" ? "gutter-row" : "gutter-col";

                     return (
                        <React.Fragment key={language}>
                           <CodeEditorTab
                              language={language}
                              code={code.languages[language]}
                              onChange={onChange}
                           />
                           {/* <MonacoEditor value={code.languages[language]} language={language} /> */}
                           {index === defaultLanguages.length - 1 ? null : (
                              <div
                                 className={cn(gutterName, gutterName + "-" + gutterIndex)}
                                 {...getGutterProps(editorDirection, gutterIndex)}
                              />
                           )}
                        </React.Fragment>
                     );
                  })}
               </div>
            )}
         </Split>
      </div>
   );
}
