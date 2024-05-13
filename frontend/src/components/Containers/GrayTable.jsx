import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const GrayTable = () => {
  const { authTokens } = useContext(AuthContext);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/customer/detail/",
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
          setCustomer(data);
        } else {
          console.error("Failed to fetch customer data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (authTokens) {
      fetchCustomerData();
    }
  }, [authTokens]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <table className="table-auto w-full">
        <tbody>
          <tr className="bg-gray-100">
            <td className="px-4 py-6 text-left font-[montserrat] font-bold">
              First Name
            </td>
            <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
              {loading ? "Loading..." : customer?.user.first_name}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-6 text-left font-[montserrat] font-bold">
              Last Name
            </td>
            <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
              {loading ? "Loading..." : customer?.user.last_name}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-6 text-left font-[montserrat] font-bold">
              Email
            </td>
            <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
              {loading ? "Loading..." : customer?.user.email}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-6 text-left font-[montserrat] font-bold">
              Username
            </td>
            <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
              {loading ? "Loading..." : customer?.user.username}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-6 text-left font-[montserrat] font-bold">
              Password
            </td>
            <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
              ********n
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GrayTable;
