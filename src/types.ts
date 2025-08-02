export type Children = { children: React.ReactNode };

//===================================================================================
// Editor
//===================================================================================
export type Language = "html" | "css" | "javascript";
export type Languages = { html: string; css: string; javascript: string };

//===================================================================================
// State
//===================================================================================
export type ExportOption = "multi" | "single";
export type PanelDirection = "horizontal" | "vertical";
export type EditorDirection = "horizontal" | "vertical" | "preview-only" | "responsive";

export interface SettingsState {
   darkTheme: boolean;
   loading: boolean;
   monacoEditorOptions: Record<string, unknown>;
}
