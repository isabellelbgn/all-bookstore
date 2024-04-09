import React from "react";

export const PageTemplate = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {children}
    </section>
  );
};
