import { Fragment } from "react";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

// import active4d from "../themes/Active4D.json";
// import allHallowsEvent from "../themes/All Hallows Eve.json";
// import amy from "../themes/Amy.json";
// import birdsOfParadise from "../themes/Birds Of Paradise.json";
// import blackboard from "../themes/Blackboard.json";
// import brillianceBlack from "../themes/Brilliance Black.json";
// import brillianceDull from "../themes/Brilliance Dull.json";
// import chromeDevTools from "../themes/Chrome DevTools.json";
// import cloudsMidnight from "../themes/Clouds Midnight.json";
// import clouds from "../themes/Clouds.json";
// import cobalt from "../themes/Cobalt.json";
// import cobalt2 from "../themes/Cobalt2.json";
// import dawn from "../themes/Dawn.json";
// import dominionday from "../themes/Dominion Day.json";
// import dracula from "../themes/Dracula.json";
// import dreamweaver from "../themes/Dreamweaver.json";
// import eiffel from "../themes/Eiffel.json";
// import espressoLibre from "../themes/Espresso Libre.json";
// import githubDark from "../themes/GitHub Dark.json";
// import githubLight from "../themes/GitHub Light.json";
// import idle from "../themes/IDLE.json";
// import idlefingers from "../themes/idleFingers.json";
// import iplastic from "../themes/iPlastic.json";
// import katzenmilch from  "../themes/Katzenmilch.json";
// import krTheme from "../themes/krTheme.json";
// import kuroir from "../themes/Kuroir Theme.json";
// import lazy from "../themes/LAZY.json";
// import magicWBAmiga from "../themes/MagicWB (Amiga).json";
// import merbivore from "../themes/Merbivore.json"
// import merbivoreSoft from "../themes/Merbivore Soft.json"
// import monoIndustrial from "../themes/monoindustrial.json";
// import monokai from "../themes/Monokai.json";
// import monokaiBright from "../themes/Monokai Bright.json";
// import nightOwl from "../themes/Night Owl.json";
// import nord from ".../themes/Nord.json";
// import oceanicNext from "../themes/Oceanic Next.json";
// import pastelsOnDark from "../themes/Pastels on Dark.json";
// import slushAndPoppies from "../themes/Slush and Poppies.json";
// import solarizedDark from "../themes/Solarized-dark.json";
// import solarizedLight from "../themes/Solarized-light.json";
// import spaceCadet from "../themes/SpaceCadet.json";
// import sunburst from "../themes/Sunburst.json";
// import textmate from "../themes/Textmate (Mac Classic).json";



interface SettingsDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsDialog({ open, onClose }: SettingsDialogProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 focus:outline-none" onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel
                className="w-full max-w-md rounded-xl bg-gray-800 p-6 shadow-xl backdrop-blur-2xl duration-300 ease-out"
              >
                <DialogTitle as="h3" className="text-xl font-semibold leading-6 text-white mb-4">
                  Editor Settings
                </DialogTitle>

               
                <div className="mt-6 flex justify-end gap-3">
                  <Button
                    className="inline-flex items-center rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={onClose} // Simplified to just close for UI-only
                  >
                    Cancel
                  </Button>
                  <Button
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose} // Simplified to just close for UI-only
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