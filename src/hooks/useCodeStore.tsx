import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Language } from "../types";

const STORAGE_KEY = "code_store";

interface CodeLanguages {
   languages: Record<Language, string>;
}

type CodeStoreContextType = {
   code: CodeLanguages;
   setCodeUpdate: (language: Language, updatedCode: string) => void;
};

const CodeStoreContext = createContext<CodeStoreContextType | undefined>(undefined);

const intialData = {
   html: "",
   css: "",
   javascript: ""
   // javascript: `console.log([].length);console.log(Object.keys({ name: "Benjamin" }).length); let person = { name: "Benjamin", workplace: "Google" };console.log(Object.assign(person, { workplace: "Microsoft" }))`,
};

export function CodeStoreProvider({ children }: { children: ReactNode }) {
   const [code, setCode] = useState<CodeLanguages>({
      languages: intialData,
   });

   useEffect(() => {
      const storedCode = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || code;
      setCode(storedCode);
   }, []);

   const setCodeUpdate = (language: Language, updatedCode: string) => {
      setCode({ ...code, languages: { ...code.languages, [language]: updatedCode } });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(code));
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
