 // NotFound.jsx
import React from "react";
import { Link, useNavigate} from "react-router-dom";

function PageNotFound() {
   const navigation=useNavigate();
   function goback(){
    navigation(-1)
   }
  return (
   <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center px-6">
  <h1 className="text-[120px] font-extrabold text-white drop-shadow-lg animate-bounce">
    404
  </h1>
  <p className="text-2xl text-white/90 mt-2 font-semibold">
    Oops! Page not found.
  </p>
  <p className="text-md text-white/70 mt-1 max-w-md">
    The page you’re looking for doesn’t exist or has been moved.
  </p>

  <button onClick={goback}
  
    className="mt-6 px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
  >
    ⬅ Go Back Home
  </button>
</div>

  );
}

export default PageNotFound;
 