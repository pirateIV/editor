import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeEditorPreview from "./components/CodeEditorPreview";
import CodeEditorWindow from "./components/CodeEditorWindow";
import { Icons } from "./components/icons";

const layoutIcons = [
   {
      label: "Switch to vertical split layout",
      icon: <Icons.VerticalSplit />,
   },
   {
      label: "Switch to horizontal split layout",
      icon: <Icons.HorizonalSplit />,
   },
   {
      label: "Switch to preview-only layout",
      icon: <Icons.PreviewOnly />,
   },
   {
      label: "Switch to responsive design mode",
      icon: <Icons.ResponsiveDesign />,
   },
];

export default function App() {
   return (
      <div className="h-screen flex flex-col">
         <div className="p-2 border-b border-gray-300">
            <div className="flex ml-auto rounded-lg bg-white w-fit">
               {layoutIcons.map(({ label, icon }) => (
                  <button key={label} className="h-full flex items-center justify-center">
                     <span className="sr-only">{label}</span>
                     {icon}
                  </button>
               ))}
            </div>
         </div>
         <PanelGroup direction="horizontal">
            <Panel>
               <CodeEditorWindow />
            </Panel>
            <PanelResizeHandle className="w-1"/>
            <Panel>
               <CodeEditorPreview />
            </Panel>
         </PanelGroup>
      </div>
   );
}
