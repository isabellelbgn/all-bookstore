import React, { useState, useEffect, useContext } from "react";
import Navigation from "../components/Main Components/Navigation";
import Footer from "../components/Main Components/Footer";
import AuthContext from "../context/AuthContext";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import { PageTemplate } from "../components/Main Components/PageTemplate";
import { useNavigate } from "react-router-dom";
import Successful from "../components/Modals/Successful";
import axios from "axios";

const Checkout = () => {
  const { authTokens } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subtotalPrice, setSubTotalPrice] = useState(0);
  const [shippingTotal, setShippingTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [useExistingAddress, setUseExistingAddress] = useState(false);
  const [existingAddress, setExistingAddress] = useState({});

  const navigate = useNavigate();

  const handleUseExistingAddress = () => {
    setUseExistingAddress(!useExistingAddress);
  };

  useEffect(() => {
    fetchCartItems();
    fetchExistingAddress();
  }, []);

  useEffect(() => {
    calculateTotalPrice(cartItems);
  }, [cartItems, shippingTotal]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/view_cart/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      });
      if (response.status === 200) {
        setCartItems(response.data);
        calculateSubTotalPrice(response.data);
      } else {
        console.error("Failed to fetch cart items:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const fetchExistingAddress = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/customer/detail",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );
      if (response.status === 200) {
        setExistingAddress(response.data);
      } else {
        console.error("Failed to fetch existing address:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching existing address:", error);
    }
  };

  const calculateSubTotalPrice = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    setSubTotalPrice(total);
  };

  const calculateTotalPrice = (items) => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    const total = subtotal + shippingTotal;
    setTotalPrice(total);
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
    try {
      if (!shippingMethod || !paymentMethod || !phoneNumber) {
        setError(true);
        setErrorMessage("Please fill in all required fields.");
        return;
      }

      if (useExistingAddress && !existingAddress.id) {
        setError(true);
        setErrorMessage("No existing address available.");
        return;
      }

      const addressData = useExistingAddress
        ? { address_id: existingAddress.id }
        : {
            street: document.getElementById("street").value,
            barangay: document.getElementById("barangay").value,
            city: document.getElementById("city").value,
            region: document.getElementById("region").value,
            zip_code: document.getElementById("zip_code").value,
          };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/checkout/",
        {
          shipping_method: shippingMethod,
          payment_method: paymentMethod,
          phone_number: phoneNumber,
          total_price: totalPrice,
          customer_address: addressData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      if (response.data.success) {
        setCheckoutSuccess(true);
        setError(false);
        setErrorMessage("");
        setShowModal(true);
      } else {
        setError(true);
        setErrorMessage(response.data.message || "Checkout failed.");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Checkout error:", error);
    }
  };

  const handleShippingMethodChange = (shippingCost, shippingMethod) => {
    setShippingTotal(shippingCost);
    setShippingMethod(shippingMethod);
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.slice(0, 11);
    setPhoneNumber(inputPhoneNumber);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/customer/dashboard/orders");
  };

  return (
    <div>
      <Navigation />
      <PageTemplate>
        <div className="font-[sans-serif] bg-white">
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 font-montserrat">
              <div className="lg:col-span-3 sm:rounded-lg">
                <div className="flex flex-col p-2 rounded border sm:rounded-lg mt-16 mb-6">
                  <div>
                    <div className="text-xs p-6">
                      <div className="flex justify-between mb-6">
                        <div className="font-bold flex">Contact:</div>
                        <div>
                          <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter phone number"
                          />
                          <button className="ml-4 rounded-xl hover:rounded-3xl hover:bg-gray-50 transition-all duration-300 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <div className="font-bold">Ship to:</div>
                        <form className="mt-4">
                          <div className="flex items-center mb-4">
                            <input
                              type="checkbox"
                              id="useExistingAddress"
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              checked={useExistingAddress}
                              onChange={handleUseExistingAddress}
                            />
                            <label
                              htmlFor="useExistingAddress"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Use existing address
                            </label>
                          </div>
                          {useExistingAddress ? (
                            <div className="text-sm">
                              <p>
                                {existingAddress.customer_addresses[0].street}
                              </p>
                              <p>
                                {existingAddress.customer_addresses[0].barangay}
                              </p>
                              <p>
                                {existingAddress.customer_addresses[0].city}
                              </p>
                              <p>
                                {existingAddress.customer_addresses[0].region}
                              </p>
                              <p>
                                {existingAddress.customer_addresses[0].zip_code}
                              </p>
                            </div>
                          ) : (
                            <>
                              <div className="mb-4">
                                <label
                                  htmlFor="street"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Street
                                </label>
                                <input
                                  type="text"
                                  id="street"
                                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                                  placeholder="Enter street"
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="barangay"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Barangay
                                </label>
                                <input
                                  type="text"
                                  id="barangay"
                                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                                  placeholder="Enter barangay"
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="city"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  id="city"
                                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                                  placeholder="Enter city"
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="region"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Region
                                </label>
                                <input
                                  type="text"
                                  id="region"
                                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                                  placeholder="Enter region"
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="zip_code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Zip Code
                                </label>
                                <input
                                  type="text"
                                  id="zip_code"
                                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                                  placeholder="Enter zip code"
                                />
                              </div>
                            </>
                          )}
                        </form>
                      </div>
                    </div>{" "}
                  </div>
                </div>

                <form className="max-w-2xl" onSubmit={handleCheckout}>
                  <div>
                    <h2 className="font-bold">Shipping Method</h2>
                    <div className="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mt-6 mb-6">
                      <div className="flex items-center p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-5"
                            name="shipping-method"
                            type="radio"
                            value="Pickup"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) =>
                              handleShippingMethodChange(0, "Pickup")
                            }
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-5">
                            <div>Pick-up</div>
                            <p
                              id="helper-radio-text-5"
                              className="text-xs font-normal text-gray-400"
                            >
                              Free
                            </p>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-6"
                            name="shipping-method"
                            type="radio"
                            value="Deliver"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) =>
                              handleShippingMethodChange(90, "Deliver")
                            }
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-6">
                            <div>Deliver (via Grab)</div>
                            <p
                              id="helper-radio-text-6"
                              className="text-xs font-normal text-gray-400"
                            >
                              + ₱90.00
                            </p>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-5"
                            name="shipping-method"
                            type="radio"
                            value="Shipping"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) =>
                              handleShippingMethodChange(150, "Shipping")
                            }
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-5">
                            <div>Shipping</div>
                            <p
                              id="helper-radio-text-5"
                              className="text-xs font-normal text-gray-400"
                            >
                              + ₱150.00
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-bold">Payment Method</h2>
                    <div className="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mt-6">
                      <div className="flex p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-8"
                            name="payment-method"
                            type="radio"
                            value="Gcash"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-5">
                            <div>Gcash</div>
                            <p
                              id="helper-radio-text-5"
                              className="text-xs font-normal text-gray-400"
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

                      <div className="flex items-center p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-7"
                            name="payment-method"
                            type="radio"
                            value="BPI"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-7">
                            <div>BPI</div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center p-6">
                        <div className="flex items-center h-5">
                          <input
                            id="helper-radio-7"
                            name="payment-method"
                            type="radio"
                            value="Cash on Delivery"
                            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label htmlFor="helper-radio-7">
                            <div>Cash on Delivery</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm mb-4">
                      {errorMessage}
                    </div>
                  )}

                  <div className="mb-6 mt-6">
                    <PrimaryButton className="w-full" onClick={handleCheckout}>
                      Checkout
                    </PrimaryButton>
                    {showModal && <Successful closeModal={handleCloseModal} />}
                  </div>
                </form>
              </div>

              <div className="lg:col-span-2 sm:rounded-lg">
                <div className="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mt-16 mb-6">
                  <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                  <div className="flex justify-between mb-2">
                    <div>Subtotal:</div>
                    <div>₱{subtotalPrice.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Shipping:</div>
                    <div>₱{shippingTotal.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between mb-4 font-bold">
                    <div>Total:</div>
                    <div>₱{totalPrice.toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex flex-col p-2 rounded bg-gray-50 sm:rounded-lg mb-6">
                  <h2 className="text-lg font-bold mb-4">Cart Items</h2>
                  {cartItems.length === 0 ? (
                    <div className="text-center">Your cart is empty</div>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between mb-2 border-b pb-2"
                      >
                        <div>
                          {item.book.title} x {item.quantity}
                        </div>
                        <div>
                          ₱{(item.book.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </div>
  );
};

export default Checkout;
