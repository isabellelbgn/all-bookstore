import React from "react";

export const PageTemplate = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen mb-40 items-center px-6 py-8 mx-auto lg:py-0">
      {children}
    </section>
  );
};
