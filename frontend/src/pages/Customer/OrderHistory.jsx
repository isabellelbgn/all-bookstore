import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import AuthContext from "../../context/AuthContext";

const OrderHistory = () => {
  const { authTokens } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerOrders = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/customer/orders/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(authTokens.access),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setOrders(Array.isArray(data) ? data : []);
        } else {
          console.error(
            "Failed to fetch customer order data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching customer order data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (authTokens) {
      fetchCustomerOrders();
    }
  }, [authTokens]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Navigation />
      <PageTemplate>
        <div className="lg:max-w-7xl max-w-xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-1">
            <Sidebar className="lg:col-span-1" />
            <div className="lg:col-span-3 p-6 mt-5">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-montserrat text-green-50">
                  Order History
                </div>
              </div>
              <div className="container mt-9 mb-40">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-6 text-center font-[montserrat]">
                        Status
                      </th>
                      <th className="px-40 py-6 text-center font-[montserrat]">
                        Item Name
                      </th>
                      <th className="px-4 py-6 text-center font-[montserrat]">
                        Quantity
                      </th>
                      <th className="px-10 py-6 text-center font-[montserrat]">
                        Date
                      </th>
                      <th className="px-4 py-6 text-center font-[montserrat]">
                        Order ID
                      </th>
                      <th className="px-4 py-6 text-center font-[montserrat]">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-montserrat">
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center ">
                          Loading...
                        </td>
                      </tr>
                    ) : orders.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center p-6">
                          No orders found.
                        </td>
                      </tr>
                    ) : (
                      orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-6 text-center font-[montserrat]">
                            {order.status}
                          </td>
                          <td className="px-20 py-6 text-center font-[montserrat]">
                            <div className="overflow-x-visible">
                              {order.order_items.map((item) => (
                                <div key={item.id}>{item.book.title}</div>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-6 text-center font-[montserrat]">
                            {order.order_items.map((item) => (
                              <div key={item.id}>{item.quantity}</div>
                            ))}
                          </td>
                          <td className="px-10 py-6 text-center font-[montserrat]">
                            {formatDate(order.order_date)}
                          </td>
                          <td className="px-4 py-6 text-center font-[montserrat]">
                            {order.id}
                          </td>
                          <td className="px-4 py-6 text-center font-[montserrat]">
                            ₱{order.total_price}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
};

export default OrderHistory;
