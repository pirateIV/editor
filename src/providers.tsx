import type React from "react";

import { Provider } from "react-redux";
import { EditorProvider } from "./contexts/editor-layout";
import { EditorStateProvider } from "./contexts/editor-state";
import { CodeStoreProvider } from "./contexts/editor-code-store";
import { store } from "./store/store";
import type { Children } from "./types";

const Providers = ({ children }: Children) => {
   return (
      <Provider store={store}>
         <EditorProvider>
            <EditorStateProvider>
               <CodeStoreProvider>{children}</CodeStoreProvider>
            </EditorStateProvider>
         </EditorProvider>
      </Provider>
   );
};

export default Providers;
