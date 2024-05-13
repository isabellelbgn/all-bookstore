import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import AuthContext from "../../context/AuthContext";

const AddToCartButton = ({ bookId, quantity }) => {
  const { authTokens } = useContext(AuthContext);
  const addToCart = async () => {
    try {
      if (!authTokens) {
        console.error("Authentication tokens are missing.");
        return;
      }

      const response = await fetch(
        `http://127.0.0.1:8000/api/add_to_cart/${bookId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            quantity: quantity,
          }),
        }
      );
      if (response.ok) {
        console.log("Item added to cart successfully!");
      } else {
        console.error("Failed to add item to cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="relative mt-2">
      <button
        type="button"
        className="flex font-montserrat text-white bg-green-50 font-medium hover:bg-green-70 focus:ring-70 focus:outline-none focus:ring-primary-300 font-regular rounded-full text-xs px-5 py-3 text-center"
        onClick={addToCart}
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
