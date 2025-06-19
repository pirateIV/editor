import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ExportOption, Language } from "../types";
import { constructHtmlDocument } from "../helpers";

interface CodeLanguages {
   languages: Record<Language, string>;
}

type CodeStoreContextType = {
   code: CodeLanguages;
   setCodeUpdate: (language: Language, updatedCode: string) => void;
   onExport: (option: ExportOption) => void;
};

const CodeStoreContext = createContext<CodeStoreContextType | undefined>(undefined);

const STORAGE_KEY = "code_store";
const intialData = { html: "", css: "", javascript: "" };

export function CodeStoreProvider({ children }: { children: ReactNode }) {
   const [code, setCode] = useState<CodeLanguages>({
      languages: intialData,
   });

   useEffect(() => {
      const storedCode = JSON.parse(localStorage.getItem(STORAGE_KEY)!) || code;
      setCode(storedCode);
   }, []);

   useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(code));
   }, [code]);

   const onExport = (option: ExportOption) => {
      // Constructs a full HTML document by combining the code snippets (HTML, CSS, JS).
      // if `option` specifies embedded styling/scripting, CSS & JS will be injected into the document.
      // Otherwise they will be linked externally.
      const html = constructHtmlDocument(code.languages, { type: option });

      if (option === "multi") {
         return { ...code.languages, html };
      } else {
         const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));

         const link = document.createElement("a");
         link.href = url;
         link.download = "index.html";
         link.click();
         return url;
      }
   };

   const setCodeUpdate = (language: Language, updatedCode: string) => {
      setCode({ ...code, languages: { ...code.languages, [language]: updatedCode } });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(code));
   };

   return (
      <CodeStoreContext.Provider value={{ code, setCodeUpdate, onExport }}>
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
