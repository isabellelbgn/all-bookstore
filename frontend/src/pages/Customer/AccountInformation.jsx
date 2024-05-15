import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import AuthContext from "../../context/AuthContext";

const AccountInformation = () => {
  const { authTokens } = useContext(AuthContext);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editableMode, setEditableMode] = useState(false);
  const [editableFields, setEditableFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

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
          console.log("Fetched customer data:", data);
          setCustomer(data);
          setEditableFields({
            firstName: data?.user?.first_name || "",
            lastName: data?.user?.last_name || "",
            email: data?.user?.email || "",
            username: data?.user?.username || "",
          });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setEditableFields({
      ...editableFields,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      console.log("Saving customer data...");
      setCustomer((prevCustomer) => ({
        ...prevCustomer,
        user: {
          ...prevCustomer.user,
          ...editableFields,
        },
      }));

      const updatedData = {
        user: {
          ...editableFields,
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/customer/detail/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify(updatedData),
        }
      );
      if (response.ok) {
        const updatedCustomer = await response.json();
        console.log("Updated Customer:", updatedCustomer);
        setCustomer(updatedCustomer);
        setEditableMode(false); // Disable editable mode after successful save
      } else {
        console.error("Failed to save customer data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving customer data:", error);
    }
  };

  const handleEdit = () => {
    setEditableMode(true);
  };

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
            <div className="p-6">
              <div className="text-lg  flex justify-between font-montserrat text-green-50 mb-6">
                Account Information
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-montserrat italic">
                  My Information
                </div>
                <div className="flex">
                  {console.log("Editable Fields:", editableFields)}{" "}
                  {editableMode ? (
                    <button className="w-28 ml-4" onClick={handleSave}>
                      Save
                    </button>
                  ) : (
                    <button className="w-28 ml-4" onClick={handleEdit}>
                      Edit
                    </button>
                  )}
                  <PrimaryButton className="w-48 ml-4">
                    Change Password
                  </PrimaryButton>
                </div>
              </div>
              <div className="container">
                <table className="table-auto w-full">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        First Name
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {editableMode ? (
                          <input
                            type="text"
                            name="firstName"
                            value={editableFields.firstName}
                            onChange={handleInputChange}
                          />
                        ) : (
                          customer?.user?.first_name || ""
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Last Name
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {editableMode ? (
                          <input
                            type="text"
                            name="lastName"
                            value={editableFields.lastName}
                            onChange={handleInputChange}
                          />
                        ) : (
                          customer?.user?.last_name || ""
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Email
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {editableMode ? (
                          <input
                            type="email"
                            name="email"
                            value={editableFields.email}
                            onChange={handleInputChange}
                          />
                        ) : (
                          customer?.user?.email || ""
                        )}
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Username
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {editableMode ? (
                          <input
                            type="text"
                            name="username"
                            value={editableFields.username}
                            onChange={handleInputChange}
                          />
                        ) : (
                          customer?.user?.username || ""
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Password
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        ******** {/* Password should not be editable */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountInformation;
