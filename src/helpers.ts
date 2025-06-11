import type { Language } from "./types";

export const updateIframeSrc = ({html,css, javascript}: Record<Language, string>) => {
   return `<html><head><style>${css}</style></head><body>${html}</body><script>${javascript}</script></html>
`;
};
