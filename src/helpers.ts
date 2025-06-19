import type { ExportOption, Language } from "./types";

type Languages = Record<Language, string>;

export const constructHtmlDocument = (
   { html, css, javascript }: Languages,
   { type = "single" }: { type?: ExportOption }
) => {
   switch (type) {
      case "single":
         return `<html><head><style>${css}</style></head><body>${html}</body><script>${javascript}</script></html>`;
      case "multi":
         return `<html><body>${html}</body></html>`;
   }
};
