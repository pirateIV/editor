import React, { createContext, useContext, useEffect, useState, type SetStateAction } from "react";
import type { Children, EditorDirection } from "../types";

const COOKIE_NAME = "horizontal";

function setDirectionCookie(direction: string) {
   if (typeof window === "undefined") return;

   document.cookie = `${COOKIE_NAME}=${direction}; path=/; max-age=31536000; SameSite=Lax;n ${
      window.location.protocol === "https" ? "Secure" : ""
   }`;
}

type EditorContextType = {
   editorDirection: EditorDirection;
   setEditorDirection: React.Dispatch<SetStateAction<EditorDirection>>;
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: Children) => {
   const [editorDirection, setEditorDirection] = useState<EditorDirection>("horizontal");

   useEffect(() => {
      setDirectionCookie(editorDirection);
   }, [editorDirection]);

   return (
      <EditorContext.Provider value={{ editorDirection, setEditorDirection }}>
         {children}
      </EditorContext.Provider>
   );
};

export function useEditorDirection() {
   const context = useContext(EditorContext);
   if (context === undefined)
      throw new Error("useCodeStore must be used within the CodeStoreProvider");
   return context;
}
