import { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";

export default function App() {
   const [code, setCode] = useState("const name = 'alice'");
   // const [mounted, setMounted] = useState(false);

   // useEffect(() => {
   //    setMounted(true);
   // }, []);

   // if (!mounted) return null;

   const handleCodeChange = (code: string) => {
      setCode(code);
   };

   return (
      <>
         <MonacoEditor
            value={code}
            width={window.innerWidth / 2}
            height={window.innerHeight}
            language="javascript"
            theme="vs-dark"
            onChange={handleCodeChange}
            options={{
               fontSize: 13,
               fontFamily: "MonoLisa",
               "semanticHighlighting.enabled": true,
            }}
            editorDidMount={(editor) => {
               editor.focus();
            }}
         />

         <iframe src=""></iframe>
      </>
   );
}
