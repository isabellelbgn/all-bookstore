import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import AuthContext from "../../context/AuthContext";

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
      <PageTemplate>
        <div className="grid grid-cols-3 gap-1">
          <div>
            {" "}
            <Sidebar />{" "}
          </div>
          <div className=" col-span-2 ml-8">
            <div className="flex justify-between mt-4 mb-4">
              <div className="text-lg font-montserrat text-green-50 mb-6">
                {" "}
                Address Book
              </div>
              <div className="flex flex-row">
                <PrimaryButton className=" w-48 ml-40">
                  {" "}
                  Add New Address
                </PrimaryButton>
              </div>
            </div>
            <div className="flex justify-between items-center">
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

            <div className=" container mt-9 mb-12">
              <table className=" table-auto w-full">
                <tbody>
                  {customer.customer_addresses.map((address, index) => (
                    <div key={index}>
                      <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Street
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.street}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Barangay
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.barangay}
                        </td>
                      </tr>
                      <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          City
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.city}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Region
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.region}
                        </td>
                      </tr>
                      <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                          Zip Code
                        </td>
                        <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                          {address.zip_code}
                        </td>
                      </tr>
                    </div>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-lg font-montserrat italic mr-56">
                Address #2
              </div>
              <div className="flex">
                <PrimaryButton className="w-28 ml-4">Edit</PrimaryButton>
                <PrimaryButton className="w-48 ml-4">
                  Delete Address
                </PrimaryButton>
              </div>
            </div>
            <div className=" container mt-9 mb-12">
              <table className=" table-auto w-full">
                <tbody>
                  <tr className=" bg-gray-100">
                    <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                      {" "}
                      Street{" "}
                    </td>
                    <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                      {" "}
                      #8 sunrise street monteritz{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                      {" "}
                      Barangay{" "}
                    </td>
                    <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                      {" "}
                    </td>
                  </tr>
                  <tr className=" bg-gray-100">
                    <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                      City{" "}
                    </td>
                    <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                      {" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                      {" "}
                      Region{" "}
                    </td>
                    <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                      {" "}
                      Davao del Sur{" "}
                    </td>
                  </tr>
                  <tr className=" bg-gray-100">
                    <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                      {" "}
                      Zip Code{" "}
                    </td>
                    <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                      {" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
};

export default AddressBook;
