import { useEffect, useState } from "react";
import { useCodeStore } from "../hooks/useCodeStore";
import { updateIframeSrc } from "../helpers";

export default function CodeEditorPreview() {
   const { code } = useCodeStore();
   const [srcDoc, setSrcDoc] = useState("");

   useEffect(() => {
      setSrcDoc(updateIframeSrc(code.languages));
   }, [code]);

   return <iframe sandbox="" srcDoc={srcDoc} className="size-full bg-white"></iframe>;
}
