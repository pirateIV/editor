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

interface SettingsDialogProps {
   open: boolean;
   onClose: () => void;
}

const opts = [
   ["Multi", "Export as multiple files"],
   ["Single", "Export as a single file"],
];

export function ExportOptionsDialog({ open, onClose }: SettingsDialogProps) {
   const [options, setOptions] = useState(opts[0][0]);
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
               <div className="fixed inset-0 bg-gray-400/30" aria-hidden="true" />
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
                           Export Options Settings
                        </DialogTitle>

                        <RadioGroup className="space-y-3">
                           {opts.map((option) => (
                              <Field
                                 key={option[0]}
                                 className="flex items-center gap-5 p-3 bg-gray-50 rounded-xl relative"
                              >
                                 <Radio
                                    value={option[0]}
                                    className="group flex size-5 items-center justify-center rounded-full inset-ring inset-ring-gray-600 bg-white data-checked:bg-blue-400"
                                 >
                                    <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                                 </Radio>
                                 <Label className="font-medium">
                                    {option[1]}
                                    <span className="absolute inset-0"></span>
                                 </Label>
                              </Field>
                           ))}
                        </RadioGroup>

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
                              Continue
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
