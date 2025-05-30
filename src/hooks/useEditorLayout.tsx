import React, { createContext, useContext, useEffect, type SetStateAction } from "react";
import type { Children } from "../types";

const COOKIE_NAME = "layout";
// const DEFAULT_LAYOUT = "vertical";

function setLayoutCookie(layout: string) {
   if (typeof window === "undefined") return;

   document.cookie = `${COOKIE_NAME}=${layout}; path=/; max-age=31536000; SameSite=Lax;n ${window.location.protocol === "https" ? "Secure" : ""}`;
}

type EditorLayout = "horizontal" | "vertical";

type EditorContextType = {
   editorLayout: EditorLayout;
   setEditorLayout: React.Dispatch<SetStateAction<EditorLayout>>;
};

const EditorContext = createContext<EditorContextType | null>(null);

export const EditorProvider = ({ children }: Children) => {
   const [editorLayout, setEditorLayout] = React.useState<EditorLayout>("vertical");

   useEffect(() => {
      setLayoutCookie(editorLayout);
   }, [editorLayout]);

   return (
      <EditorContext.Provider value={{ editorLayout, setEditorLayout }}>{children}</EditorContext.Provider>
   );
};

export function useEditorLayout() {
   const context = useContext(EditorContext);
   if (context === undefined)
      throw new Error("useCodeStore must be used within the CodeStoreProvider");
   return context;
}
