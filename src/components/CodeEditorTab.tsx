import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";
import { IconBrandCss3, IconBrandJavascript, IconHtml } from "@tabler/icons-react";

import abyss from "../themes/Abyss.json";

import type { Language } from "../types";
import { cn } from "../lib/utils";

const editorLanguages = {
   html: "HTML",
   css: "CSS",
   javascript: "JavaScript",
};

const icons = {
   html: <IconHtml className="size-4" />,
   css: <IconBrandCss3 className="size-4" />,
   javascript: <IconBrandJavascript className="size-4" />,
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

   // useEffect(() => {
   //    async function loadEditorTheme() {
   //       if (theme) {
   //          monaco?.editor.defineTheme("abyss", JSON.parse(JSON.stringify(abyss)));
   //          monaco?.editor.setTheme("abyss");
   //       } else {
   //          monaco?.editor.setTheme("vs-dark");
   //       }
   //    }
   //    loadEditorTheme();
   // }, [monaco?.editor]);

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
         <div className="bg-white dark:bg-gray-900" data-lang-mode={language}>
            <div className="w-32 flex justify-center items-center gap-2 px-2 py-1 text-sm bg-gray-200 border border-t-4 border-gray-300 border-t-gray-400 dark:border-gray-800/80 dark:bg-gray-900 dark:border-t-gray-700">
               {icons[language]}
               <span className="dark:text-gray-100"> {editorLanguages[language]}</span>
            </div>
         </div>
         <Editor
            value={value}
            language={language}
            onChange={handleEditorChange}
            beforeMount={handleEditorWillMount}
            theme="abyss"
            options={{
               fontFamily: "Menlo",
               fontWeight: "600",
               fontSize: 13,
               automaticLayout: true,
               minimap: { enabled: false },
               folding: true,
               formatOnPaste: true,
               codeLens: true,
            }}
         />
      </div>
   );
}
