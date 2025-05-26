import React from "react";

const COOKIE_NAME = "";
const DEFAULT_LAYOUT = "row";

function setLayoutCookie(layout: string) {
   if (typeof window === "undefined") return;

   document.cookie = `${COOKIE_NAME}=${layout}; oath=/; max-age=31536000; SameSite=Lax;`;
}

export default function useEditorLayout() {
   const [editorLayout, setEditorLayout] = React.useState<"column" | "row">("row");

   return <div></div>;
}
