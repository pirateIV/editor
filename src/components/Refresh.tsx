import { useState } from "react";
import { IconLoader2, IconRefresh } from "@tabler/icons-react";
import IconButton from "./common/icon-button";

export default function Refresh() {
   const [isRefreshing, setIsRefreshing] = useState(false);

   function handleOnRefresh() {
      setIsRefreshing(true);
      window.location.reload();
   }

   return !isRefreshing ? (
      <IconButton icon={IconRefresh} onClick={handleOnRefresh} />
   ) : (
      <IconButton icon={IconLoader2} className="animate-spin text-gray-600" />
   );
}
