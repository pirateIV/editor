import React, { createContext, useContext, useEffect, useState, type SetStateAction } from "react";
import type { Children, EditorDirection } from "../types";

const COOKIE_NAME = "layout";

const layouts = ["horizontal", "vertical", "preview-only", "responsive"];

function setDirectionCookie(direction: string) {
   if (typeof window === "undefined") return;
   document.cookie = `${COOKIE_NAME}=${direction}; path=/; max-age=31536000; SameSite=Lax;${window.location.protocol === "https:" ? " Secure;" : ""}`;
}

function getDirectionCookie(): EditorDirection | undefined {
   if (typeof document === "undefined") return undefined;
   const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
   const value = match?.[1];
   if (layouts.includes(value!)) {
      return value as EditorDirection;
   }
   return undefined;
}

type EditorContextType = {
   editorDirection: EditorDirection;
   setEditorDirection: React.Dispatch<SetStateAction<EditorDirection>>;
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: Children) => {
   const [editorDirection, setEditorDirection] = useState<EditorDirection>(() => {
      return getDirectionCookie() || "horizontal";
   });

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
