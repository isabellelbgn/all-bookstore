import React from "react";
import { Link } from "react-router-dom";

const CategoryContainer = (props) => {
  return (
    <div className="relative my-2">
      <div className="bg-green-70 rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <Link to="/category/python/1">
            <h5 className="text-xl font-medium">{props.category.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryContainer };
