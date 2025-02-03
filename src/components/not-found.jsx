import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary">
        <div className="text-[3.5rem] mt-12 w-full flex justify-center text-center">
          <div className="w-4/5 text-center">
            <div className="font-bold">Error 404 | Page not found</div>
            <p className="text-4xl mt-4 font-medium">Should have caught this, whoops 🤷
            </p>
          </div>
         
        </div>
        <Link
        to="/"
        className="px-4 py-2 mt-10 bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        Return Home
      </Link>
      </div>
    );
  };
  
  export default NotFound;
  