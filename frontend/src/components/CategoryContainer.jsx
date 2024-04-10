import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "./SecondaryButton";

const CategoryContainer = (props) => {
  return (
    <div className="relative my-2">
      <div className="flex font-montserrat bg-green-70 rounded-lg mb-24 overflow-hidden justify-center">
        <div className="flex items-center px-6 py-4">
          <Link to={`/category/${props.category.title}/${props.category.id}`}>
            <h5 className="text-lg text-white mb-4">{props.category.title}</h5>
            <SecondaryButton className="text-xs">View All</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryContainer };
