import React, { useState, useEffect, useContext } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { PageTemplate } from "../../components/Main Components/PageTemplate.jsx";
import AuthContext from "../../context/AuthContext";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const { authTokens, logoutCustomer } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/view_cart/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      if (response.ok) {
        const data = await response.json();
        const sortedCartItems = data.sort((a, b) => a.book.id - b.book.id);
        const cartItemsWithImages = await Promise.all(
          sortedCartItems.map(async (item) => {
            const response = await fetch(
              `http://127.0.0.1:8000/api/book/${item.book.id}`
            );
            if (response.ok) {
              const imageData = await response.json();
              const images = imageData.book_images.map((image) => image.image);
              return { ...item, images };
            } else {
              console.error(
                "Failed to fetch images for book with ID:",
                item.book.id
              );
              return item;
            }
          })
        );
        setCartItems(cartItemsWithImages);
      } else {
        console.error("Failed to fetch cart items:", response.statusText);
        logoutCustomer();
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const addToCart = async (bookId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/add_to_cart/${bookId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            quantity: 1,
          }),
        }
      );
      if (response.ok) {
        console.log("Item added to cart successfully!");
        fetchCartItems();
      } else {
        console.error("Failed to add item to cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const deleteFromCart = async (orderItemId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/delete_from_cart/${orderItemId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
        }
      );

      if (response.ok) {
        console.log("Item deleted from cart successfully!");
        fetchCartItems();
      } else {
        console.error("Failed to delete item from cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const removeFromCart = async (orderItemId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/remove_from_cart/${orderItemId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
        }
      );

      if (response.ok) {
        console.log("Item removed from cart successfully");
        fetchCartItems();
      } else {
        console.error("Failed to remove item from cart:", response.statusText);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (accumulator, item) => accumulator + item.book.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  return (
    <>
      <div>
        <Navigation />
        <PageTemplate>
          {cartItems.length > 0 ? (
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:mt-14 sm:max-w-2xl xl:p-10">
                <table className="w-full font-montserrat text-sm text-left rtl:text-right">
                  <thead className="text-xs bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Item Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {item.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Book Image ${index + 1}`}
                                className="w-10 h-10 mr-2"
                              />
                            ))}
                            {item.book.title}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <button
                              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 bg-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <div>
                              <input
                                type="number"
                                id={`quantity-${item.id}`}
                                className="bg-gray-50 w-14 border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1"
                                value={item.quantity}
                                readOnly
                              />
                            </div>
                            <button
                              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-gray-800  rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-black dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                              onClick={() => addToCart(item.book.id)}
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="white"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">{item.book.price}</td>
                        <td className="px-6 py-4">
                          <button
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            onClick={() => deleteFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end font-semibold text-gray-900  mt-5">
                <span className="px-6 py-3 text-green-50 ">Subtotal</span>
                <span className="px-6 py-3">P{totalPrice}</span>
                <Link to="/checkout">
                  <PrimaryButton>Checkout</PrimaryButton>
                </Link>
              </div>
            </div>
          ) : (
            <div>No items in your cart.</div>
          )}
        </PageTemplate>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
