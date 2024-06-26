import React from "react";

export const SecondaryButton = ({ children, className }) => {
  const buttonClasses =
    "text-gray-500 bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-full px-4 py-2 text-center flex items-center justify-center " +
    className;

  return (
    <button type="submit" className={buttonClasses}>
      {children}
    </button>
  );
};
