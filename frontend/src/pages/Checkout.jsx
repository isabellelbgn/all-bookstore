import React, { useState, useEffect, useContext } from "react";
import Navigation from "../components/Main Components/Navigation";
import Footer from "../components/Main Components/Footer";
import AuthContext from "../context/AuthContext";

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
        setCartItems(sortedCartItems);
        calculateTotalPrice(sortedCartItems);
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
      <div className="container mx-auto px-4">
        <main className="mt-4">
          {!checkoutSuccess && (
            <>
              {cartItems.length > 0 ? (
                <div className="overflow-x-auto">
                  <h1 className="text-2xl font-medium flex justify-between items-center">
                    All Items
                  </h1>
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left">#</th>
                        <th className="px-6 py-3 text-left">Quantity</th>
                        <th className="px-6 py-3 text-left">Product</th>
                        <th className="px-6 py-3 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.quantity}</td>
                          <td>{item.book.title}</td>
                          <td>{item.book.price}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        <th>{totalPrice}</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                          <button onClick={handleCheckout}>Checkout</button>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ) : (
                <div>No items in your cart.</div>
              )}
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
