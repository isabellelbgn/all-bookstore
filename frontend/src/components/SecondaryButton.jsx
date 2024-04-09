import React from "react";

export const SecondaryButton = ({ children, className }) => {
  const buttonClasses =
    "text-gray-500 bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full px-5 py-3 text-center " +
    className;

  return (
    <button type="submit" className={buttonClasses}>
      {children}
    </button>
  );
};
