import React from "react";
import {
   Button,
   Dialog,
   DialogPanel,
   DialogTitle,
   Input,
   Transition,
   TransitionChild,
} from "@headlessui/react";
import { useEditorState } from "../contexts/editor-state";

interface SettingsDialogProps {
   open: boolean;
   onClose: () => void;
}

export function SettingsDialog({ open, onClose }: SettingsDialogProps) {
   const { appName, setCurrentAppName } = useEditorState();

   return (
      <Transition appear show={open} as={React.Fragment}>
         <Dialog as="div" className="relative z-50 focus:outline-none" onClose={onClose}>
            {/* Backdrop */}
            <TransitionChild
               as={React.Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black/60 backdrop-blur-[1px]" aria-hidden="true" />
            </TransitionChild>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4">
                  <TransitionChild
                     as={React.Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 transform-[scale(95%)]"
                     enterTo="opacity-100 transform-[scale(100%)]"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 transform-[scale(100%)]"
                     leaveTo="opacity-0 transform-[scale(95%)]"
                  >
                     <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xs backdrop-blur-2xl duration-300 ease-out">
                        <DialogTitle as="h3" className="text-xl font-semibold leading-6 mb-4">
                           Editor Settings
                        </DialogTitle>

                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="space-y-5">
                              {/* <div>
                                 <label htmlFor="appName" className="text-sm block mb-1">
                                    App Name
                                 </label>
                                 <Input
                                    type="text"
                                    id="appName"
                                    value={appName}
                                    className="p-1 ps-3 text-sm rounded-md border border-gray-300"
                                    onChange={(e) => setCurrentAppName(e.target.value)}
                                 />
                              </div> */}
                              <div>
                                 <label
                                    htmlFor="appName"
                                    className="text-sm font-medium block mb-1"
                                 >
                                    <span className="text-gray-600">Editor:</span> Font Size
                                 </label>
                                 <Input
                                    type="number"
                                    id="appName"
                                    value="14"
                                    className="p-1 ps-3 text-sm rounded-md border border-gray-300"
                                    onChange={(e) => setCurrentAppName(e.target.value)}
                                 />
                              </div>
                              <div>
                                 <label
                                    htmlFor="appName"
                                    className="text-sm font-medium block mb-1"
                                 >
                                    <span className="text-gray-600">Editor:</span> Font Family
                                 </label>
                                 <Input
                                    type="text"
                                    id="appName"
                                    value="Menlo"
                                    className="p-1 ps-3 text-sm rounded-md border border-gray-300"
                                    onChange={(e) => setCurrentAppName(e.target.value)}
                                 />
                              </div>
                              <div>
                                 <label htmlFor="appName" className="text-sm block mb-1">
                                    App Name
                                 </label>
                                 <Input
                                    type="text"
                                    id="appName"
                                    value={appName}
                                    className="p-1 ps-3 text-sm rounded-md border border-gray-300"
                                    onChange={(e) => setCurrentAppName(e.target.value)}
                                 />
                              </div>
                           </div>
                        </form>

                        <div className="mt-6 flex justify-end gap-3">
                           <Button
                              className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                              onClick={onClose}
                           >
                              Cancel
                           </Button>
                           <Button
                              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                              onClick={onClose}
                           >
                              Save Changes
                           </Button>
                        </div>
                     </DialogPanel>
                  </TransitionChild>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
}


// import React, { useState, useEffect, useCallback } from "react";
// import {
//    Button,
//    Dialog,
//    DialogPanel,
//    DialogTitle,
//    Field, // Make sure Field is imported if you're using it
//    Label, // Make sure Label is imported
//    Input,
//    Transition,
//    TransitionChild,
//    // Add Switch for boolean settings if needed
//    // Switch,
//    // RadioGroup, Radio, // If you add theme selection, etc.
// } from "@headlessui/react";
// import { useEditorState } from "../contexts/EditorStateContext"; // Assuming this context provides update functions

// interface SettingsDialogProps {
//    open: boolean;
//    onClose: () => void;
// }

// // Define a type for your editor settings
// interface EditorSettings {
//    appName: string;
//    fontSize: number;
//    fontFamily: string;
//    // Add other settings here
//    // theme: 'light' | 'dark' | 'monokai';
//    // tabSize: number;
//    // wordWrap: boolean;
// }

// export function SettingsDialog({ open, onClose }: SettingsDialogProps) {
//    // Destructure existing state and updater from context
//    const { appName, currentFontSize, currentFontFamily, setCurrentAppState } = useEditorState();

//    // Local state to manage form inputs
//    const [localSettings, setLocalSettings] = useState<EditorSettings>({
//       appName: appName,
//       fontSize: currentFontSize || 14, // Provide a default if context value is undefined
//       fontFamily: currentFontFamily || "Menlo", // Provide a default
//    });

//    // Update local state when appName from context changes (e.g., if loaded from a project)
//    useEffect(() => {
//       if (appName !== localSettings.appName || currentFontSize !== localSettings.fontSize || currentFontFamily !== localSettings.fontFamily) {
//          setLocalSettings({
//             appName: appName,
//             fontSize: currentFontSize || 14,
//             fontFamily: currentFontFamily || "Menlo",
//          });
//       }
//    }, [appName, currentFontSize, currentFontFamily]); // Only re-run if these context values change

//    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { id, value, type } = e.target;
//       setLocalSettings((prevSettings) => ({
//          ...prevSettings,
//          [id]: type === "number" ? parseFloat(value) : value,
//       }));
//    };

//    const handleSaveChanges = useCallback(() => {
//       // Assuming setCurrentAppState can handle an object of partial settings
//       setCurrentAppState({
//          appName: localSettings.appName,
//          fontSize: localSettings.fontSize,
//          fontFamily: localSettings.fontFamily,
//          // ... other settings to save
//       });
//       onClose(); // Close the dialog after saving
//    }, [localSettings, setCurrentAppState, onClose]); // Dependencies for useCallback

//    const handleResetDefaults = () => {
//       setLocalSettings({
//          appName: "My Awesome App", // Your default app name
//          fontSize: 14,
//          fontFamily: "Menlo",
//       });
//    };

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
//                            Editor Settings
//                         </DialogTitle>

//                         <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//                            {/* App Name */}
//                            <Field>
//                               <Label htmlFor="appName" className="text-sm font-medium block mb-1 text-gray-900">
//                                  App Name
//                               </Label>
//                               <Input
//                                  type="text"
//                                  id="appName"
//                                  value={localSettings.appName}
//                                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                  onChange={handleInputChange}
//                                  placeholder="My Code Project"
//                               />
//                            </Field>

//                            <div className="space-y-5">
//                               <h4 className="text-lg font-semibold text-gray-700">Editor Appearance</h4>
//                               {/* Font Size */}
//                               <Field>
//                                  <Label htmlFor="fontSize" className="text-sm font-medium block mb-1 text-gray-900">
//                                     Font Size (px)
//                                  </Label>
//                                  <Input
//                                     type="number"
//                                     id="fontSize"
//                                     value={localSettings.fontSize}
//                                     min="8" // Min font size
//                                     max="32" // Max font size
//                                     className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     onChange={handleInputChange}
//                                  />
//                               </Field>

//                               {/* Font Family */}
//                               <Field>
//                                  <Label htmlFor="fontFamily" className="text-sm font-medium block mb-1 text-gray-900">
//                                     Font Family
//                                  </Label>
//                                  <Input
//                                     type="text"
//                                     id="fontFamily"
//                                     value={localSettings.fontFamily}
//                                     className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., 'Menlo', 'Monaco', 'Courier New'"
//                                  />
//                                  <p className="mt-2 text-xs text-gray-500">
//                                      Enter a font family name. Ensure it's available on your system.
//                                  </p>
//                               </Field>

//                               {/* You can add more settings here */}
//                               {/* Example: Theme Selection (using RadioGroup) */}
//                               {/*
//                               <Field>
//                                   <Label className="text-sm font-medium block mb-2 text-gray-900">Theme</Label>
//                                   <RadioGroup
//                                       value={localSettings.theme}
//                                       onChange={(value) => setLocalSettings(prev => ({ ...prev, theme: value }))}
//                                       className="flex gap-4"
//                                   >
//                                       {['light', 'dark', 'monokai'].map((themeOption) => (
//                                           <Radio key={themeOption} value={themeOption} className="group cursor-pointer">
//                                               <span className="flex items-center gap-2 p-2 border rounded-md group-data-[checked]:bg-indigo-50 group-data-[checked]:border-indigo-500">
//                                                   <span className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:bg-indigo-600" />
//                                                   {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
//                                               </span>
//                                           </Radio>
//                                       ))}
//                                   </RadioGroup>
//                               </Field>
//                               */}
//                            </div>
//                         </form>

//                         <div className="mt-6 flex justify-end gap-3">
//                             <Button
//                                className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
//                                onClick={handleResetDefaults}
//                             >
//                                Reset Defaults
//                             </Button>
//                            <Button
//                               className="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
//                               onClick={onClose}
//                            >
//                               Cancel
//                            </Button>
//                            <Button
//                               className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
//                               onClick={handleSaveChanges}
//                            >
//                               Save Changes
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