import { createContext, useContext, useState, type ReactNode } from "react";
import type { Language } from "../types";

interface CodeLanguages {
   languages: Record<Language, string>;
}

type CodeStoreContextType = {
   code: CodeLanguages;
   setCodeUpdate: (language: Language, updatedCode: string) => void;
};

const CodeStoreContext = createContext<CodeStoreContextType | undefined>(undefined);

export function CodeStoreProvider({ children }: { children: ReactNode }) {
   const [code, setCode] = useState<CodeLanguages>({
      languages: {
         html: `<p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p><p>This is paragraph</p>`,
         css: "",
         javascript: "",
      },
   });

   const setCodeUpdate = (language: Language, updatedCode: string) => {
      setCode({ ...code, languages: { ...code.languages, [language]: updatedCode } });
   };

   return (
      <CodeStoreContext.Provider value={{ code, setCodeUpdate }}>
         {children}
      </CodeStoreContext.Provider>
   );
}

export function useCodeStore() {
   const context = useContext(CodeStoreContext);
   if (context === undefined)
      throw new Error("useCodeStore must be used within the CodeStoreProvider");
   return context;
}
