// AddressBook.js
import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import AuthContext from "../../context/AuthContext";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";

const AddressBook = () => {
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
        <div className="grid lg:grid-cols-4 gap-1 ">
          <Sidebar className="lg:col-span-1" />
          <div className="lg:col-span-3 mt-5">
            <div className="p-6 flex justify-between">
              <div className="text-lg font-montserrat text-green-50 mb-6">
                Account Book
              </div>

              <SecondaryButton className="mb-6">
                {" "}
                + Add New Address
              </SecondaryButton>
            </div>
            <div className="flex p-6 -mt-6 justify-between items-center">
              <div className="text-lg font-montserrat italic mr-56">
                Default Shipping Address
              </div>
              <div className="flex">
                <PrimaryButton className="w-28 ml-4">Edit</PrimaryButton>
                <PrimaryButton className="w-48 ml-4">
                  Delete Address
                </PrimaryButton>
              </div>
            </div>
            <div className=" container mt-9 mb-12"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressBook;
