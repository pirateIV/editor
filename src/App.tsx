import { Link } from "react-router-dom";

const App = () => {
   return (
      <div>
         Home Page
         <Link to="/new" className="text-sm font-medium text-blue-500 underline">
            {/* Project Screenshot */}
                     {/* <Link to="/new" className="bg-blue-500 p-3 rounded-lg">Go to editor</Link> */}
            <section id="demo" className="py-16 px-4">
               <div className="container mx-auto max-w-6xl">
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-500/20 blur-3xl -z-10"></div>
                     <img
                        src="screenshot.png"
                        alt="Simple Landing Page Project Screenshot"
                        width={1200}
                        height={800}
                        className="rounded-xl shadow-2xl border border-gray-300"
                     />
                  </div>
               </div>

            </section>
         </Link>
      </div>
   );
};

export default App;
