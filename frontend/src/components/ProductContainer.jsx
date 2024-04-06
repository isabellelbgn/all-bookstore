import React from "react";
import { AddToCartButton } from "./AddToCartButton";

const ProductContainer = () => {
  return (
    <div className="relative my-2">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h5 className="text-xl font-medium">Book Title</h5>
          <p className="text-gray-700 text-base">Author</p>
          <p className="text-gray-700 text-sm font-semibold">Price</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export { ProductContainer };
