import React from "react";

const TagButton = ({ tagName }) => {
  return (
    <div className="relative mt-2">
      <span className="bg-green-50 text-white text-xs font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300">
        {tagName}
      </span>
    </div>
  );
};

export { TagButton };
