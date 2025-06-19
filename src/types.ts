export type Children = { children: React.ReactNode };

export type Language = "html" | "css" | "javascript";

export interface SplitGridRenderProps {
   getGridProps: React.HTMLAttributes<HTMLDivElement>;
   getGutterProps: (
      direction: "row" | "column",
      index: number
   ) => React.HTMLAttributes<HTMLDivElement>;
}

export type EditorDirection = "horizontal" | "vertical" | "preview-only" | "responsive";

export type ExportOption = "multi" | "single";  