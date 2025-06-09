import { useEffect, useState } from "react";

import themeList from "../themes/themelist.json";

const themeValues = Object.keys(themeList) as [string, ...string[]];
type ThemeType = (typeof themeValues)[number];

export default function useTheme() {
   const [theme, setTheme] = useState<ThemeType>("abyss");
   const [themes] = useState<ThemeType[]>(themeValues);

   useEffect(() => {
      setTheme("abyss");
      console.log(themes[theme])
   }, [theme, themes]);

   return { theme, setTheme, themes };
}
