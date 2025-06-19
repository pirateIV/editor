import React, { createContext, useContext, useEffect, useState } from "react";
import type { Children } from "../types";

interface EditorSettings {
   fontFamily: string;
   fontSize: number;
   tabWidth: number;
   indentSize: number;
}

interface EditorStateContexType {
   appName: string;
   setCurrentAppName: (name: string) => void;
   editorSettings: EditorSettings;
   setEditorSettings: React.Dispatch<React.SetStateAction<EditorSettings>>;
}

const EditorContext = createContext<EditorStateContexType | undefined>(undefined);

export const EditorStateProvider = ({ children }: Children) => {
   const [appName, setAppName] = useState("");
   const [editorSettings, setEditorSettings] = useState({
      fontFamily: "Menlo",
      fontSize: 14,
      tabWidth: 4,
      indentSize: 4,
   });
   // const [isSettingsSaved, setIsSettingsSaved] = useState(false);

   useEffect(() => {
      const storedAppName = localStorage.getItem("appName") || "Untitled...";
      setAppName(storedAppName);
   }, []);

   const setCurrentAppName = (name: string) => {
      setAppName(name);
      localStorage.setItem("appName", name);
   };

   return (
      <EditorContext.Provider
         value={{ appName, setCurrentAppName, editorSettings, setEditorSettings }}
      >
         {children}
      </EditorContext.Provider>
   );
};

export function useEditorState() {
   const context = useContext(EditorContext);
   if (context === undefined)
      throw new Error("useCodeStore must be used within the CodeStoreProvider");
   return context;
}
