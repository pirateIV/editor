import { useState } from "react";
import { IconSettings } from "@tabler/icons-react";
import { SettingsDialog } from "./SettingsDialog";

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


export default function Settings() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="relative">
         <button
            className="flex text-gray-500 transition-colors dark:text-gray-500 dark:hover:text-gray-200 hover:text-gray-600"
            onClick={() => setIsOpen(true)}
         >
            <span>
               <IconSettings className="size-6" />
            </span>
         </button>
         <SettingsDialog open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
   );
}

