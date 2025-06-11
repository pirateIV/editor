import IconButton from "./common/icon-button";
import { IconRefresh } from "@tabler/icons-react";

export default function Refresh() {
   return <IconButton icon={IconRefresh} onClick={() => window.location.reload()} />;
}
