import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const AddToCartButton = () => {
  return (
    <div className="relative mt-2">
      <button
        type="submit"
        className="flex font-montserrat text-white bg-green-50 font-medium  hover:bg-green-70 focus:ring-70 focus:outline-none focus:ring-primary-300 font-regular rounded-full text-xs px-5 py-3 text-center"
      >
        <span>Add to cart</span>
        <span className="ml-2">
          <FaCartShopping />
        </span>
      </button>
    </div>
  );
};

export { AddToCartButton };
