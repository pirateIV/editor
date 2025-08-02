import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";
import * as monaco from "monaco-editor";
import abyss from "../themes/Abyss.json";
import type { Language } from "../types";
import { cn } from "../lib/utils";
import CodeEditorHeader from "./CodeEditorHeader";
import { useClipboard } from "../hooks/use-clipboard";
import { IconCheck, IconCopy } from "@tabler/icons-react";

interface CodeEditorTabProps {
   className?: React.HTMLAttributes<HTMLDivElement>["className"];
   onChange: (language: Language, code: string) => void;
   onCursorChange?: (position: monaco.Position) => void;
   code: string;
   language?: Language;
   editorOptions?: monaco.editor.IStandaloneEditorConstructionOptions;
   props?: React.HTMLAttributes<HTMLDivElement>;
}

export default function CodeEditorTab({
   className = "",
   onChange,
   onCursorChange,
   code,
   language = "html",
   editorOptions,
   ...props
}: CodeEditorTabProps) {
   const { copy, copied } = useClipboard();
   const [value, setValue] = useState(code);
   const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

   const handleEditorChange = (newValue: string | undefined) => {
      const valueToSet = newValue ?? "";
      setValue(valueToSet);
      onChange(language, valueToSet);
   };

   const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
      setEditor(editor);
   };

   const handleEditorWillMount = (monaco: typeof import("monaco-editor")) => {
      emmetHTML(monaco);

      /**
       * TODO: Not configured to work yet, theme templates not added yet...
       */
      monaco.editor.defineTheme("abyss", JSON.parse(JSON.stringify(abyss)));
      monaco.editor.setTheme("abyss");
   };

   // Sync code changes from parent
   useEffect(() => {
      if (code) setValue(code);
   }, [code]);

   // Track cursor position
   useEffect(() => {
      if (!editor || !onCursorChange) return;
      const disposable = editor.onDidChangeCursorPosition((e) => {
         console.log(e.position);
         onCursorChange(e.position);
      });
      return () => disposable.dispose();
   }, [editor, onCursorChange]);

   // Update editor options dynamically
   useEffect(() => {
      if (editor && editorOptions) editor.updateOptions(editorOptions);
   }, [editor, editorOptions]);

   return (
      <div
         className={cn(
            "not-first:rounded-t-lg h-full not-last:rounded-b-lg bg-[#ffffff]",
            className
         )}
         {...props}
      >
         <CodeEditorHeader language={language}>
            <button
               className="text-gray-500 hover:bg-gray-200 transition rounded-md p-1 cursor-pointer"
               onClick={() => copy(value)}
            >
               {copied ? (
                  <IconCheck size="18" />
               ) : (
                  <IconCopy
                     size="18"
                     // className="hover:first:-translate-x-px hover:first-of-type:-translate-y-px hover:last-of-type:-translate-x-px hover:last-of-type:-translate-y-px"
                  />
               )}
            </button>
         </CodeEditorHeader>
         <Editor
            value={value}
            language={language}
            onChange={handleEditorChange}
            beforeMount={handleEditorWillMount}
            onMount={handleEditorMount}
            options={{
               fontFamily: "MonoLisa",
               fontWeight: "600",
               fontSize: 13,
               automaticLayout: true,
               minimap: { enabled: false },
               folding: true,
               formatOnPaste: true,
               codeLens: true,
               tabSize: 2,
               ...editorOptions, // Merge with dynamic options
            }}
         />
      </div>
   );
}
