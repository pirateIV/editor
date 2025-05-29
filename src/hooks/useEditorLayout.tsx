import React from "react";

const COOKIE_NAME = "";
const DEFAULT_LAYOUT = "vertical";

function setLayoutCookie(layout: string) {
   if (typeof window === "undefined") return;

   document.cookie = `${COOKIE_NAME}=${layout}; path=/; max-age=31536000; SameSite=Lax;n ${window.location.protocol === "https" ? "Secure" : ""}`;
}

export default function useEditorLayout() {
   const [editorLayout, setEditorLayout] = React.useState<"horizontal" | "vertical">("vertical");

   return <div></div>;
}
