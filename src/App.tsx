import React from "react";
import CodeEditorWindow from "./components/CodeEditorWindow";

export default function App() {
   const [code, setCode] = React.useState(
      "// Welcome to the React Code Editor!\nfunction greet() {\n  console.log('Hello, world!');\n}\ngreet();"
   );

   const onChange = (action: string, data: string) => {
      switch (action) {
         case "code": {
            setCode(data);
            break;
         }
         default: {
            console.warn("case not handled!", action, data);
         }
      }
   };

   const runCode = () => {
      try {
         new Function(eval(code));
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <h1>My Code Editor</h1>
         <button
            onClick={runCode}
            style={{ marginBottom: "10px", padding: "8px 15px" }}
         >
            Run Code (Logs to Console)
         </button>
         <CodeEditorWindow
            code={code}
            onChange={onChange}
            language="javascript"
         />
      </div>
   );
}
