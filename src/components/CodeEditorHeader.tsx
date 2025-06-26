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
      <div className="bg-gray- dark:bg-gray-900" data-lang-mode={language}>
         <div className="w-24 flex justify-start items-center gap-2 ps-5 py-1 text-sm bg-white border border-l-0 border-gray-200 shadow-sm shadow-gray-300 rounded-e-md">
            {icons[language]}
            <span className="text-gray-800 font-medium"> {editorLanguages[language]}</span>
         </div>
      </div>
   );
}
