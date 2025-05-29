import type { Language } from "./types";

export const updateIframeSrc = (languages: Record<Language, string>) => {
   return `<html><head><style>${languages.css}</style></head><body>${languages.html}</body><script>${languages.javascript}</script></html>
`;
};
