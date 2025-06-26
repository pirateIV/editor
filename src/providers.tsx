import type React from "react";

import { CodeStoreProvider } from "./contexts/editor-code-store.tsx";
import { EditorProvider } from "./contexts/editor-layout.tsx";
import { EditorStateProvider } from "./contexts/editor-state.tsx";

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <EditorProvider>
         <EditorStateProvider>
            <CodeStoreProvider>{children}</CodeStoreProvider>
         </EditorStateProvider>
      </EditorProvider>
   );
};

export default Providers;
