import React from "react";
import Split from "react-split-grid";
import { cn } from "../lib/utils";
import type { Language } from "../types";

import CodeEditorTab from "./CodeEditorTab";

export default function CodeEditorWindow() {
   const [editorDirection, setEditorDirection] = React.useState<"row" | "column">("row");

   const [code, setCode] = React.useState<{
      languages: Record<Language, string>;
   }>({
      languages: {
         html: "<h1>My Code Editor</h1>",
         css: "@media (prefers-reduced-motion: no-preference) { a:nth-of-type(2) .logo { animation: logo-spin infinite 20s linear;} }",
         javascript:
            "// Welcome to the React Code Editor!\nfunction greet() {\n  console.log('Hello, world!');\n}\ngreet();",
      },
   });

   const onChange = (language: Language, data: string) => {
      setCode({ ...code, languages: { ...code.languages, [language]: data } });
   };

   const defaultLanguages: Language[] = ["html", "css", "javascript"];

   return (
      <div className="flex flex-col h-screen p-2">
         <div>
            <button
               onClick={() => setEditorDirection(editorDirection === "row" ? "column" : "row")}
            >
               Set Editor direction - {editorDirection}
            </button>
         </div>

         <Split
            dragInterval={3}
            // @ts-expect-error - Property 'render' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Split> & Readonly<SplitProps>'.
            render={({
               getGridProps,
               getGutterProps,
            }: {
               getGridProps: () => React.HTMLAttributes<HTMLDivElement>;
               getGutterProps: (
                  direction: "row" | "column",
                  index: number
               ) => React.HTMLAttributes<HTMLDivElement>;
            }) => (
               <div className="grid size-full" {...getGridProps()}>
                  {defaultLanguages.map((language, index) => {
                     const gutterIndex = index === 0 ? 1 : index + 2;
                     const gutterName = editorDirection === "row" ? "gutter-row" : "gutter-col";
                     const gutterClass = cn(gutterName, gutterName + "-" + gutterIndex);

                     return (
                        <React.Fragment key={language}>
                           <CodeEditorTab
                              language={language}
                              code={code.languages[language]}
                              onChange={onChange}
                           />
                           {index === defaultLanguages.length - 1 ? null : (
                              <div
                                 className={gutterClass}
                                 {...getGutterProps(editorDirection, gutterIndex)}
                              />
                           )}
                        </React.Fragment>
                     );
                  })}
               </div>
            )}
         />
      </div>
   );
}
