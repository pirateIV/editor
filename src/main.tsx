import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CodeStoreProvider } from "./hooks/useCodeStore";
import { EditorProvider } from "./contexts/EditorDirectionContext";
import { EditorStateProvider } from "./contexts/EditorStateContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <EditorProvider>
      <EditorStateProvider>
         <CodeStoreProvider>
            <App />
         </CodeStoreProvider>
      </EditorStateProvider>
   </EditorProvider>
);
