import type React from "react";

export default function LayoutButton({
   label,
   children,
   ...props
}: {
   label: string;
   children: React.ReactNode;
} & React.ComponentProps<"button">) {
   return (
      <button className="h-full flex justify-center items-center" {...props}>
         <span className="sr-only">{label}</span>
         {children}
      </button>
   );
}

// export function LayoutIcon({active}: {active: boolean}) {
//    return (

//    )
// }