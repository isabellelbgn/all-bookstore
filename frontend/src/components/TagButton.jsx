import React from "react";
import { Link } from "react-router-dom";

const TagButton = () => {
  return (
    <div className="relative mt-2">
      <Link to="">
        <span className="bg-green-50 text-white text-xs font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300">
          Tag
        </span>
      </Link>
    </div>
  );
};

export { TagButton };
