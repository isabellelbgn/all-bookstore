import React, { useState, useEffect, useContext } from "react";
import Navigation from "../components/Main Components/Navigation";
import Footer from "../components/Main Components/Footer";
import AuthContext from "../context/AuthContext";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { PageTemplate } from "../components/Main Components/PageTemplate";

function Checkout() {
  const { authTokens } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

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
            try {
              const bookResponse = await fetch(
                `http://127.0.0.1:8000/api/book/${item.book.id}`
              );
              if (bookResponse.ok) {
                const bookData = await bookResponse.json();
                const images = bookData.book_images.map((image) => image.image);
                const imageUrl = images.length > 0 ? images[0] : "";
                return { ...item, imageUrl };
              } else {
                console.error(
                  "Failed to fetch book details for book with ID:",
                  item.book.id
                );
                return item;
              }
            } catch (error) {
              console.error(
                "Error fetching book details for book with ID:",
                item.book.id,
                error
              );
              return item;
            }
          })
        );
        setCartItems(cartItemsWithImages);
        calculateTotalPrice(cartItemsWithImages);
      } else {
        console.error("Failed to fetch cart items:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      if (response.ok) {
        console.log("Checkout successful!");
        setCheckoutSuccess(true);
        window.location.href = "/customer/orders";
      } else {
        console.error("Failed to process checkout:", response.statusText);
      }
    } catch (error) {
      console.error("Error processing checkout:", error);
    }
  };

  return (
    <>
      <Navigation />
      <PageTemplate>
        <div class="font-[sans-serif] bg-white">
          <div class="lg:max-w-7xl max-w-xl mx-auto">
            <div class="grid lg:grid-cols-5 gap-16 font-montserrat">
              <div class="lg:col-span-3 sm:rounded-lg">
                <form class="mt-16 max-w-2xl">
                  <div>
                    <h2 className="font-bold">Shipping Method</h2>
                    <div class="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mt-6 mb-6">
                      <div class="flex items-center p-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-5"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-5">
                            <div>Pick-up</div>
                            <p
                              id="helper-radio-text-5"
                              class="text-xs font-normal text-gray-400"
                            >
                              Free
                            </p>
                          </label>
                        </div>
                      </div>

                      <div class="flex items-center p-6 -mt-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-6"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-6">
                            <div>Deliver (via Grab)</div>
                            <p
                              id="helper-radio-text-5"
                              class="text-xs font-normal text-gray-400"
                            >
                              + P90
                            </p>
                          </label>
                        </div>
                      </div>

                      <div class="flex items-center p-6 -mt-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-6"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-6">
                            <div>Shipping</div>
                            <p
                              id="helper-radio-text-5"
                              class="text-xs font-normal text-gray-400"
                            >
                              + P150
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold">Payment Method</h2>
                    <div class="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mt-6">
                      <div class="flex p-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-5"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-5">
                            <div>Gcash</div>
                            <p
                              id="helper-radio-text-5"
                              class="text-xs font-normal text-gray-400"
                            >
                              Online Transfer / Over the Counter
                              <br />
                              AN***A M**E****Z
                              <br />
                              0923 293 7651
                              <br />
                              <br />
                              Instructions on where to send:
                              <br />
                              <span className="font-bold">
                                Proof of payment
                              </span>{" "}
                              will be sent via e-mail once you have completed
                              the order.
                            </p>
                          </label>
                        </div>
                      </div>

                      <div class="flex items-center p-6 -mt-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-6"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-6">
                            <div>BPI</div>
                          </label>
                        </div>
                      </div>

                      <div class="flex items-center p-6 -mt-6">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-radio-6"
                            name="helper-radio"
                            type="radio"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-radio-6">
                            <div>Cash on Delivery</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="lg:col-span-2 py-8 rounded-md">
                <h2 class="text-lg font-bold text-[#333]">Order Summary</h2>
                <table class="mt-4 w-full">
                  <thead>
                    <tr class="text-xs">
                      <th class="px-6 py-3"></th>
                      <th class="px-6 py-3">Qty</th>
                      <th class="px-6 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.id}>
                        <td class="px-6 py-3 flex">
                          {" "}
                          <img src={item.imageUrl} /> {item.book.title}
                        </td>
                        <td class="px-6 py-3 text-center">{item.quantity}</td>
                        <td class="px-6 py-3 text-center">{item.book.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ul class="mt-5">
                  <li class="flex flex-wrap gap-4 text-base text-gray-400 text-xs border-t-2 pt-4 p-6">
                    Subtotal <span class="ml-auto">P{totalPrice}.00</span>
                  </li>
                  <li class="flex flex-wrap gap-4 text-gray-400 text-xs text-base  p-6 -mt-6">
                    Shipping <span class="ml-auto">P90.00</span>
                  </li>
                  <li class="flex flex-wrap gap-4 text-base font-bold border-t-2 pt-4 p-6">
                    Total <span class="ml-auto">P{totalPrice}</span>
                  </li>
                </ul>
                <PrimaryButton className="w-full" onClick={handleCheckout}>
                  Checkout
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
}

export default Checkout;
