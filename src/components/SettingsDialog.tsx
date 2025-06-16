import React from "react";
import {
   Button,
   Dialog,
   DialogPanel,
   DialogTitle,
   Transition,
   TransitionChild,
} from "@headlessui/react";

interface SettingsDialogProps {
   open: boolean;
   onClose: () => void;
}

export function SettingsDialog({ open, onClose }: SettingsDialogProps) {
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
                           Editor Settings
                        </DialogTitle>

                        <div className="mt-6 flex justify-end gap-3">
                           <Button
                              className="inline-flex items-center rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                              onClick={onClose}
                           >
                              Cancel
                           </Button>
                           <Button
                              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
