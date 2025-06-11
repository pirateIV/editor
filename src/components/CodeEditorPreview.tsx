import { useEffect, useRef } from "react";
import { useCodeStore } from "../hooks/useCodeStore";
import { updateIframeSrc } from "../helpers";

export default function CodeEditorPreview() {
   const { code } = useCodeStore();

   const iframeRef = useRef<HTMLIFrameElement | null>(null);

   useEffect(() => {
      const debounced = setTimeout(() => {
         const iframe = iframeRef.current;
         if (!iframe) return;

         // Construct the full HTML document string from the code
         const sourceDoc = updateIframeSrc(code.languages);

         // Access the iframe's internal document
         const iframeDoc = iframe.contentDocument;

         if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(sourceDoc);
            iframeDoc.close();
         }
      }, 300);

      return () => clearTimeout(debounced);
   }, [code]);

   return <iframe ref={iframeRef} className="size-full bg-white transition-all"></iframe>;
}
