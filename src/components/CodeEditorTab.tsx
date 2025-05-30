import React from "react";
import Editor from "@monaco-editor/react";
import type { Language } from "../types";
import { cn } from "../lib/utils";
import { Icons } from "./icons";
import { emmetHTML } from "emmet-monaco-es";

const editorLanguages = {
   html: "HTML",
   css: "CSS",
   javascript: "JavaScript",
};

const icons = {
   html: <Icons.HTML className="size-5" />,
   css: <Icons.CSS className="size-5" />,
   javascript: <Icons.JavaScript className="size-5" />,
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
            "relative z-50 not-first:rounded-t-lg h-full not-last:rounded-b-lg bg-[#fffffe]",
            className
         )}
         {...props}
      >
         <div className="bg-white" data-lang-mode={language}>
            <div className="bg-gray-200 text-sm flex gap-2 items-center py-1 px-2 w-32 justify-center border border-t-4 border-gray-300 border-t-gray-400">
               {icons[language]}
               <span> {editorLanguages[language]}</span>
            </div>
         </div>
         <Editor
            value={value}
            defaultLanguage={language}
            language={language}
            onChange={handleEditorChange}
            options={{
               fontFamily: "Menlo",
               fontWeight: "600",
               fontSize: 13,
               automaticLayout: true,
               minimap: { enabled: false },
               folding: true,
               formatOnPaste: true,
            }}
            beforeMount={(monaco) => {
               emmetHTML(monaco);
            }}
         />
      </div>
   );
}
