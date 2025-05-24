import React from "react";
import Editor from "@monaco-editor/react";
import type { Language } from "../types";
import { cn } from "../lib/utils";

interface CodeEditorTabProps {
   className?: React.HTMLAttributes<HTMLDivElement>["className"];
   code: string;
   language?: Language;
   onChange: (language: Language, code: string) => void;
   props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function CodeEditorTab({
   className = "",
   code = "",
   language = "javascript",
   onChange,
   ...props
}: CodeEditorTabProps) {
   const [value, setValue] = React.useState(code);

   const handleEditorChange = (newValue: string | undefined) => {
      const valueToSet = newValue ?? "";
      setValue(valueToSet);
      onChange(language, valueToSet);
   };

   return (
      <div className={cn("size-full rounded-lg overflow-hidden", className)} {...props}>
         <Editor
            value={value}
            language={language}
            options={{
               fontFamily: "Geist Mono",
               fontWeight: "600",
               fontSize: 12,
               automaticLayout: true,
               minimap: { enabled: false },
            }}
            onChange={handleEditorChange}
         />
      </div>
   );
}
