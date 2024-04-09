import React from "react";

export const GrayBox = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 rounded-2xl md:mt-0 sm:max-w-2xl xl:p-10">
      <div className="font-montserrat p-6 space-y-4 md:space-y-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};
