import React, { useState } from "react";
import {
   Button,
   Dialog,
   DialogPanel,
   DialogTitle,
   Field,
   Label,
   Radio,
   RadioGroup,
   Transition,
   TransitionChild,
} from "@headlessui/react";
// import { cn } from "../lib/utils";

interface ExportOptionsDialogProps {
   open: boolean;
   onClose: () => void;
   onExport: (option: "multi" | "single") => void;
}

type ExportOption = {
   id: "multi" | "single";
   label: string;
   description: string;
   icon?: React.ReactNode;
};

const options: ExportOption[] = [
   {
      id: "multi",
      label: "Export as multiple files",
      description: "Each section as a separate file",
      icon: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18v-6" />
            <path d="M9 15h6" />
         </svg>
      ),
   },
   {
      id: "single",
      label: "Export as a single file",
      description: "All content in one file",
      icon: (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
         </svg>
      ),
   },
];

export function ExportOptionsDialog({ open, onClose, onExport }: ExportOptionsDialogProps) {
   const [selectedOption, setSelectedOption] = useState<"multi" | "single">("multi");

   const handleExport = () => {
      onExport(selectedOption);
      onClose();
   };

   return (
      <Transition appear show={open} as={React.Fragment}>
         <Dialog as="div" className="relative z-50" onClose={onClose}>
            {/* Backdrop */}
            <TransitionChild
               as={React.Fragment}
               enter="ease-out duration-200"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black/60 backdrop-blur-[1px]" aria-hidden="true" />
            </TransitionChild>

            <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
               <TransitionChild
                  as={React.Fragment}
                  enter="ease-out duration-200"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-150"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
               >
                  <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xs">
                     <DialogTitle as="h3" className="text-xl font-semibold text-gray-900 mb-4">
                        Export Options
                     </DialogTitle>

                     <div className="space-y-4 mb-6">
                        <RadioGroup
                           value={selectedOption}
                           onChange={setSelectedOption}
                           className="space-y-2"
                        >
                           {options.map((option) => (
                              <Field key={option.id}>
                                 <Radio
                                    value={option.id}
                                    className="group relative flex cursor-pointer rounded-lg border p-4 transition-all hover:border-indigo-300 focus:outline-none data-[checked]:border-indigo-500 data-[checked]:ring-2 data-[checked]:ring-indigo-200"
                                 >
                                    <div className="flex w-full items-center gap-4">
                                       <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 group-data-[checked]:border-indigo-500 group-data-[checked]:bg-indigo-500">
                                          <span className="h-2 w-2 rounded-full bg-white opacity-0 transition-opacity group-data-[checked]:opacity-100" />
                                       </div>
                                       <div className="flex items-center gap-3">
                                          {option.icon && (
                                             <div className="text-gray-500 group-data-[checked]:text-indigo-600">
                                                {option.icon}
                                             </div>
                                          )}
                                          <div>
                                             <Label className="text-sm font-medium text-gray-900">
                                                {option.label}
                                             </Label>
                                             <p className="text-xs text-gray-500">
                                                {option.description}
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Radio>
                              </Field>
                           ))}
                        </RadioGroup>
                     </div>

                     <div className="flex justify-end gap-3">
                        <Button
                           onClick={onClose}
                           className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                           Cancel
                        </Button>
                        <Button
                           onClick={handleExport}
                           className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                           Export
                        </Button>
                     </div>
                  </DialogPanel>
               </TransitionChild>
            </div>
         </Dialog>
      </Transition>
   );
}


// import React, { useState } from "react";
// import {
//    Button,
//    Dialog,
//    DialogPanel,
//    DialogTitle,
//    Field,
//    Label,
//    Radio,
//    RadioGroup,
//    Transition,
//    TransitionChild,
//    Input, // Assuming you have an Input component or create one
// } from "@headlessui/react";
// import { cn } from "../lib/utils";

// // Define your export options clearly
// const EXPORT_TYPE_OPTIONS = [
//    {
//       value: "multi",
//       label: "Multiple Files",
//       description: "Each section (HTML, CSS, JavaScript) exported as a separate file.",
//       preview: `your_project/\n├── index.html\n├── style.css\n└── script.js`,
//    },
//    {
//       value: "single",
//       label: "Single HTML File",
//       description: "All content (HTML, CSS, JavaScript) combined into one HTML file.",
//       preview: `index.html\n<!DOCTYPE html>\n<html>\n<head>\n  <style>/* CSS here */</style>\n</head>\n<body>\n  \n  <script>/* JS here */</script>\n</body>\n</html>`,
//    },
// ];

// // If you want more granular file format options, add another array
// // const FILE_FORMAT_OPTIONS = [ ... ]; // Not implemented in this example for brevity but consider it

// interface ExportOptionsDialogProps {
//    open: boolean;
//    onClose: () => void;
//    onExport: (options: { exportType: string; filename: string }) => void;
// }

// export function ExportOptionsDialog({ open, onClose, onExport }: ExportOptionsDialogProps) {
//    const [selectedExportType, setSelectedExportType] = useState(EXPORT_TYPE_OPTIONS[0].value);
//    const [filename, setFilename] = useState("my-project"); // Default filename

//    const handleContinue = () => {
//       onExport({ exportType: selectedExportType, filename });
//       onClose();
//    };

//    // Find the currently selected option to display its preview
//    const currentOption = EXPORT_TYPE_OPTIONS.find(
//       (opt) => opt.value === selectedExportType
//    );

//    return (
//       <Transition appear show={open} as={React.Fragment}>
//          <Dialog as="div" className="relative z-50 focus:outline-none" onClose={onClose}>
//             {/* Backdrop */}
//             <TransitionChild
//                as={React.Fragment}
//                enter="ease-out duration-300"
//                enterFrom="opacity-0"
//                enterTo="opacity-100"
//                leave="ease-in duration-200"
//                leaveFrom="opacity-100"
//                leaveTo="opacity-0"
//             >
//                <div className="fixed inset-0 bg-gray-400/30" aria-hidden="true" />
//             </TransitionChild>

//             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//                <div className="flex min-h-full items-center justify-center p-4">
//                   <TransitionChild
//                      as={React.Fragment}
//                      enter="ease-out duration-300"
//                      enterFrom="opacity-0 transform-[scale(95%)]"
//                      enterTo="opacity-100 transform-[scale(100%)]"
//                      leave="ease-in duration-200"
//                      leaveFrom="opacity-100 transform-[scale(100%)]"
//                      leaveTo="opacity-0 transform-[scale(95%)]"
//                   >
//                      <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xs backdrop-blur-2xl duration-300 ease-out">
//                         <DialogTitle as="h3" className="text-xl font-semibold leading-6 mb-4">
//                            Export Options
//                         </DialogTitle>

//                         <RadioGroup
//                            className="space-y-3"
//                            value={selectedExportType} // Control the state
//                            onChange={setSelectedExportType}
//                            aria-label="Export type"
//                         >
//                            {EXPORT_TYPE_OPTIONS.map((opt) => (
//                               <Field
//                                  key={opt.value}
//                                  className={cn(
//                                     "flex items-center gap-5 p-3 rounded-xl relative transition-all duration-200",
//                                     selectedExportType === opt.value
//                                        ? "bg-indigo-50 ring-2 ring-indigo-300"
//                                        : "bg-gray-50 hover:bg-gray-100"
//                                  )}
//                               >
//                                  <Radio
//                                     value={opt.value}
//                                     className="group flex size-5 items-center justify-center rounded-full inset-ring inset-ring-gray-600 bg-white data-checked:bg-indigo-500"
//                                  >
//                                     <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
//                                  </Radio>
//                                  <Label className="font-medium flex-1">
//                                     {opt.label}
//                                     <span className="text-sm font-normal text-gray-500 block">
//                                        {opt.description}
//                                     </span>
//                                     <span className="absolute inset-0"></span>{" "}
//                                     {/* Makes the whole field clickable */}
//                                  </Label>
//                               </Field>
//                            ))}
//                         </RadioGroup>

//                         {/* Filename Input */}
//                         <Field className="mt-6">
//                            <Label className="text-sm font-medium leading-6 text-gray-900">
//                               Base Filename
//                            </Label>
//                            <Input
//                               type="text"
//                               className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                               placeholder="my-project"
//                               value={filename}
//                               onChange={(e) => setFilename(e.target.value)}
//                            />
//                         </Field>

//                         {/* Export Preview */}
//                         {currentOption && (
//                            <div className="mt-6 p-4 bg-gray-100 rounded-md text-sm text-gray-700">
//                               <p className="font-semibold mb-2">How your project will be exported:</p>
//                               <pre className="whitespace-pre-wrap font-mono text-xs">
//                                  <code>{currentOption.preview}</code>
//                               </pre>
//                            </div>
//                         )}

//                         <div className="mt-6 flex justify-end gap-3">
//                            <Button
//                               className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
//                               onClick={onClose}
//                            >
//                               Cancel
//                            </Button>
//                            <Button
//                               className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
//                               onClick={handleContinue}
//                            >
//                               Continue
//                            </Button>
//                         </div>
//                      </DialogPanel>
//                   </TransitionChild>
//                </div>
//             </div>
//          </Dialog>
//       </Transition>
//    );
// }