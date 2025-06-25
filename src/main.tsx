import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import Providers from "./providers.tsx";
import AppRoutes from "./routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <Providers>
      <Router>
         <AppRoutes />
      </Router>
   </Providers>
);
