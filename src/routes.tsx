import { Route, Routes } from "react-router-dom";
import App from "./App";
import Editor from "./Editor";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" Component={App}></Route>
         <Route path="/new" Component={Editor}></Route>
      </Routes>
   );
};

export default AppRoutes;
