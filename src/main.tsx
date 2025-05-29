import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CodeStoreProvider } from "./hooks/useCodeStore.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <CodeStoreProvider>
         <App />
      </CodeStoreProvider>
   </StrictMode>
);
