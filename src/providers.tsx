import type React from "react";

import { CodeStoreProvider } from "./hooks/EditorCodeStore.tsx";
import { EditorProvider } from "./contexts/EditorDirectionContext";
import { EditorStateProvider } from "./contexts/EditorStateContext";

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
