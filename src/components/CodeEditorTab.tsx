import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";

import abyss from "../themes/Abyss.json";

import type { Language } from "../types";
import { cn } from "../lib/utils";
import CodeEditorHeader from "./CodeEditorHeader";

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
   code,
   language = "html",
   ...props
}: CodeEditorTabProps) {
   // const monaco = useMonaco();
   const [value, setValue] = useState(code);

   const handleEditorChange = (newValue: string | undefined) => {
      const valueToSet = newValue ?? "";
      setValue(valueToSet);
      onChange(language, valueToSet);
   };

   const handleEditorWillMount = (monaco: typeof import("monaco-editor") | undefined) => {
      emmetHTML(monaco);
      monaco?.editor.defineTheme("abyss", JSON.parse(JSON.stringify(abyss)));
      monaco?.editor.setTheme("abyss");
   };

   useEffect(() => {
      if (code) {
         setValue(code);
      }
   }, [code]);

   return (
      <div
         className={cn(
            "not-first:rounded-t-lg h-full not-last:rounded-b-lg bg-[#ffffff]",
            className
         )}
         {...props}
      >
         <CodeEditorHeader language={language} />
         <Editor
            value={value}
            language={language}
            onChange={handleEditorChange}
            beforeMount={handleEditorWillMount}
            // theme="abyss"
            options={{
               fontFamily: "Menlo",
               fontWeight: "600",
               fontSize: 14,
               automaticLayout: true,
               minimap: { enabled: false },
               folding: true,
               formatOnPaste: true,
               codeLens: true,
               tabSize: 2,
            }}
         />
      </div>
   );
}
