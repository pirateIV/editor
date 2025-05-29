import React from "react";
import Editor from "@monaco-editor/react";
import type { Language } from "../types";
import { cn } from "../lib/utils";

const editorLanguages = {
   html: "HTML",
   css: "CSS",
   javascript: "JavaScript",
};

interface CodeEditorTabProps {
   className?: React.HTMLAttributes<HTMLDivElement>["className"];
   onChange: (language: Language, code: string) => void;
   code: string;
   language?: Language;
   props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function CodeEditorTab({
   className = "",
   onChange,
   code = "",
   language = "html",
   ...props
}: CodeEditorTabProps) {
   const [value, setValue] = React.useState(code);

   const handleEditorChange = (newValue: string | undefined) => {
      const valueToSet = newValue ?? "";
      setValue(valueToSet);
      onChange(language, valueToSet);
   };

   return (
      <div
         className={cn(
            "overflow-hidden not-first:rounded-t-lg h-full not-last:rounded-b-lg bg-[#fffffe]",
            className
         )}
         {...props}
      >
         <div className="bg-white" data-lang-mode={language}>
            <div className="bg-gray-200 w-fit inline-block py-1 px-[calc(30px)] border border-t-4 border-gray-300 border-t-gray-400">
               {editorLanguages[language]}
            </div>
         </div>
         <Editor
            value={value}
            defaultLanguage={language}
            language={language}
            options={{
               fontFamily: "Menlo",
               fontWeight: "600",
               fontSize: 13,
               automaticLayout: true,
               minimap: { enabled: false },
            }}
            onChange={handleEditorChange}
            // onMount={(editor, monaco) => {
            //    console.log(editor, monaco);
            // }}
         />
      </div>
   );
}
