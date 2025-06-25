import type { ExportOption, Language } from "./types";

type Languages = Record<Language, string>;

export const constructHtmlDocument = (
   { html, css, javascript }: Languages,
   { format = "single" }: { format?: ExportOption }
) => {
   switch (format) {
      case "single":
         return `<html><head><style>${css}</style></head><body>${html}</body><script>${javascript}</script></html>`;
      case "multi":
         return `<html><body>${html}</body></html>`;
   }
};
