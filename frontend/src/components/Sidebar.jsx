import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import AuthContext from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logoutCustomer } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logoutCustomer();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 text-white w-64 top-4 flex flex-col mt-10 rounded-lg p-6 min-h-[500px]  max-h-[500px]">
      <div className="flex flex-col bg-gray-100 font-montserrat border-spacing-4 p-2.5 overflow-y-auto">
        <Link
          to="/customer/dashboard"
          className={`px-4 py-6 ${
            location.pathname === "/customer/dashboard"
              ? "text-black border-green-50"
              : "text-gray-400"
          } border-b-2`}
        >
          Dashboard
        </Link>
        <Link
          to="/customer/dashboard/orders"
          className={`px-4 py-6 ${
            location.pathname === "/customer/dashboard/orders"
              ? "text-black border-green-50"
              : "text-gray-400"
          } border-b-2`}
        >
          My Orders
        </Link>
        <Link
          to="/customer/dashboard/address"
          className={`px-4 py-6 ${
            location.pathname === "/customer/dashboard/address"
              ? "text-black border-green-50"
              : "text-gray-400"
          } border-b-2`}
        >
          Address Book
        </Link>
        <Link
          to="/customer/dashboard/account"
          className={`px-4 py-6 ${
            location.pathname === "/customer/dashboard/account"
              ? "text-black border-green-50"
              : "text-gray-400"
          } border-b-2`}
        >
          Account Information
        </Link>
      </div>

      <div className="flex-grow" />

      <div className="px-4 py-2">
        <PrimaryButton className="w-full text-black" onClick={handleLogout}>
          Log Out
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Sidebar;
