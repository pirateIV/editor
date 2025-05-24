import React from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorWindowProps {
   code: string;
   language?: string;
   onChange: (action: string, code: string) => void;
}

export default function CodeEditorWindow({
   code = "",
   language = "javascript",
   onChange,
}: CodeEditorWindowProps) {
   const [value, setValue] = React.useState(code);

   const handleEditorChange = (newValue: string | undefined) => {
      const valueToSet = newValue ?? "";
      
      setValue(valueToSet);
      onChange("code", valueToSet);
   };

   return (
      <div>
         <Editor
            value={value}
            height="90vh"
            width={`100%`}
            theme="vs-dark"
            language={language}
            defaultValue="// some comment"
            options={{
               fontFamily: "Menlo",
               fontWeight: "600",
               fontSize: 14,
               automaticLayout: true,
            }}
            onChange={handleEditorChange}
         />
      </div>
   );
}
