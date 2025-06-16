import { Icons } from "./icons";
import type { Language } from "../types";

const editorLanguages = { html: "HTML", css: "CSS", javascript: "JS" };

const icons = {
   html: <Icons.HTML className="size-4.5" />,
   css: <Icons.CSS className="size-4.5" />,
   javascript: <Icons.JavaScript className="size-4.5" />,
};

export default function CodeEditorHeader({ language }: { language: Language }) {
   return (
      <div className="bg-white dark:bg-gray-900" data-lang-mode={language}>
         <div className="w-24 flex justify-start items-center gap-2 ps-5 py-1 text-sm bg-gray-200 border border-t-4 border-gray-300 border-t-gray-400 dark:border-gray-800/80 dark:bg-gray-900 dark:border-t-gray-700">
            {icons[language]}
            <span className="dark:text-gray-100"> {editorLanguages[language]}</span>
         </div>
      </div>
   );
}
