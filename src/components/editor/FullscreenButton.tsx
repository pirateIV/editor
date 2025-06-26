import type React from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface FullscreenButtonProps {
   isFullscreen: boolean;
   setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FullscreenButton({ isFullscreen, setIsFullscreen }: FullscreenButtonProps) {
   return (
      <button
         className="bg-gray-900/90 absolute top-5 right-5 z-10 p-1.5 text-white rounded-full opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110"
         onClick={() => setIsFullscreen(!isFullscreen)}
      >
         {isFullscreen ? (
            <IconChevronDown className="w-5 h-5" />
         ) : (
            <IconChevronUp className="w-5 h-5" />
         )}
      </button>
   );
}
