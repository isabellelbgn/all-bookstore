import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import logo from "../Images/PrideandPrejudice.jpeg";

const CategoryContainer = (props) => {
  return (
    <div className="relative my-2">
      <div className="flex font-montserrat bg-green-70 rounded-lg mb-24 overflow-hidden justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-4">
          {" "}
          <Link
            to={`/category/${props.category.title}/${props.category.id}`}
            className="flex flex-col items-center"
          >
            {" "}
            <img
              src={logo}
              width="50"
              height="100"
              className={"object-cover "}
              loading="eager"
              placeholder="blur"
              alt={"logo"}
            />
            <h5 className="text-lg text-white mb-4 mt-4">
              {props.category.title}
            </h5>
            <SecondaryButton className="text-xs">View All</SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryContainer };
