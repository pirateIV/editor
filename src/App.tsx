import Split from "react-split-grid";
import type { SplitGridRenderProps } from "./types";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";
import { Icons } from "./components/icons";

export default function App() {
   return (
      <div className="h-screen">
         <div className="flex ml-auto rounded-lg bg-white m-2 w-fit">
            <button className="h-full flex items-center justify-center">
               <span className="sr-only">Switch to vertical split layout</span>
               <Icons.VerticalSplit />
            </button>
            <button className="h-full flex items-center justify-center">
               <span className="sr-only">Switch to horizontal split layout</span>
               <Icons.HorizonalSplit />
            </button>
            <button className="h-full flex items-center justify-center">
               <span className="sr-only">Switch to preview-only layout</span>
               <Icons.PreviewOnly />
            </button>
            <button className="h-full flex items-center justify-center">
               <span className="sr-only">Switch to responsive design mode</span>
               <Icons.ResponsiveDesign />
            </button>
         </div>
         <Split
            render={({ getGridProps, getGutterProps }: SplitGridRenderProps) => (
               <div className="grid grid-cols-[1fr_2px_1fr]" {...getGridProps}>
                  <CodeEditorWindow />
                  <div
                     className={"gutter-col gutter-col-1"}
                     {...getGutterProps("column", 1)}
                  />
                  <CodeEditorPreview />
               </div>
            )}
         />
      </div>
   );
}
