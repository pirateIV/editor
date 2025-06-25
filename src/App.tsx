import { Link } from "react-router-dom";

const App = () => {
   return (
      <div>
         Home Page
         <Link to="/new" className="text-sm font-medium text-blue-500 underline">
            Visit editor
         </Link>
      </div>
   );
};

export default App;
