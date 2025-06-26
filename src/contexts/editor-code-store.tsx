import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as prettier from "prettier/standalone";
import * as parserHtml from "prettier/parser-html";
import * as parserPostCSS from "prettier/parser-postcss";
import * as parserBabel from "prettier/parser-babel";
import type { ExportOption, Language, Languages } from "../types";
import { constructHtmlDocument } from "../helpers";

interface CodeLanguages {
   languages: Record<Language, string>;
}

type CodeStoreContextType = {
   code: CodeLanguages;
   setCodeUpdate: (language: Language, updatedCode: string) => void;
   onExport: (option: ExportOption) => Promise<Languages | string>;
};

const CodeStoreContext = createContext<CodeStoreContextType | undefined>(undefined);

const STORAGE_KEY = "code_store";
const initialData = { html: "", css: "", javascript: "" };

export function CodeStoreProvider({ children }: { children: ReactNode }) {
   const [code, setCode] = useState<CodeLanguages>({
      languages: initialData,
   });

   useEffect(() => {
      const storedCode = localStorage.getItem(STORAGE_KEY)!;
      setCode(storedCode ? JSON.parse(storedCode) : { languages: initialData });
   }, []);

   useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(code));
   }, [code]);

   const setCodeUpdate = (language: Language, updatedCode: string) => {
      setCode((prev) => ({ ...prev, languages: { ...prev.languages, [language]: updatedCode } }));
   };

   const onExport = async (format: ExportOption): Promise<Languages | string> => {
      if (!code?.languages) throw new Error("Code languages not initialized!");

      const html = constructHtmlDocument(code.languages, { format });

      if (format === "multi") {
         return { ...code.languages, html: "" };
      } else {
         try {
            const formattedHtml = await prettier.format(html, {
               parser: "html",
               plugins: [parserHtml, parserPostCSS, parserBabel],
               printWidth: 150,
               htmlWhitespaceSensitivity: "ignore",
               tabWidth: 2,
               semi: false,
               singleQuote: true,
            });

            console.log(html, formattedHtml)

            const url = URL.createObjectURL(new Blob([formattedHtml], { type: "text/html" }));
            const link = document.createElement("a");
            link.href = url;
            link.download = "index.html";
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 100);

            return url;
         } catch (error) {
            console.error("Formatting failed:", error);
            // Fallback to unformatted HTML if formatting fails
            const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
            // ... same download logic
            return url;
         }
      }
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
