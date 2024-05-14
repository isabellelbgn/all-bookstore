import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import GrayTable from "../../components/Containers/GrayTable";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import AuthContext from "../../context/AuthContext";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";

const Accounts = () => {
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
          console.error(
            "Failed to fetch customer address data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching customer address data:", error);
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
    <>
      <Navigation />
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-1">
          <Sidebar className="lg:col-span-1" />
          <div className="lg:col-span-3 p-6 mt-5">
            <div className="flex justify-between">
              <div className="flex items-center mb-6">
                <div className="text-lg flex font-montserrat text-green-50">
                  Dashboard
                </div>
              </div>
              <div className="flex">
                <SecondaryButton className="w-28 ml-4 mb-6">
                  x Edit
                </SecondaryButton>
                <SecondaryButton className="w-48 ml-4 mb-6">
                  x Change Password
                </SecondaryButton>
              </div>
            </div>
            <GrayTable className="mb-8 " />
            <div className="flex justify-between mt-4">
              <div className="text-lg font-montserrat italic static">
                Default Shipping Address{" "}
              </div>
              <div className="flex flex-row">
                <PrimaryButton className=" w-48 ml-40">
                  Add New Address
                </PrimaryButton>
              </div>
            </div>
            <div className=" container mt-9 mb-40">
              <table className=" table-auto w-full">
                <tbody>
                  {customer.customer_addresses.map((address, index) => (
                    <React.Fragment key={index}>
                      <tr
                        key={`street-${index}`}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Street
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.street}
                        </td>
                      </tr>
                      <tr key={`barangay-${index}`}>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Barangay
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.barangay}
                        </td>
                      </tr>
                      <tr
                        key={`city-${index}`}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          City
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.city}
                        </td>
                      </tr>
                      <tr key={`region-${index}`}>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Region
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.region}
                        </td>
                      </tr>
                      <tr
                        key={`zip-${index}`}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Zip Code
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.zip_code}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Accounts;
