export const cn = (...classNames: (string | boolean)[]) => {
   return classNames
      .filter((cn): cn is string => typeof cn === "string")
      .join(" ")
      .trim();
};
