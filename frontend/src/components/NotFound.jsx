import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold font-montserrat">404</h1>
        <p className="text-gray-600 font-montserrat">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 font-semibold text-white items-center font-montserrat  bg-green-50 text-white hover:bg-green-70 focus:ring-70 focus:outline-none focus:ring-primary-300 font-regular rounded-full text-xs px-5 py-3 text-center"
        >
          {" "}
          Go back to home{" "}
        </Link>
      </div>
    </div>
  );
};
