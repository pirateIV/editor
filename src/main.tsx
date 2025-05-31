import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CodeStoreProvider } from "./hooks/useCodeStore.tsx";
import { EditorProvider } from "./hooks/useEditorDirection.tsx";

createRoot(document.getElementById("root")!).render(
   <EditorProvider>
      <CodeStoreProvider>
         <App />
      </CodeStoreProvider>
   </EditorProvider>
);
