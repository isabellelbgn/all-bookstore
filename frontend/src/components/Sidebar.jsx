import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import AuthContext from "../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logoutCustomer } = useContext(AuthContext);

  const handleLogout = () => {
    logoutCustomer();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 text-white w-64 top-4 fixed h-3/4 flex flex-col justify-between rounded p-2.5 mt-20">
      <div className="flex flex-col bg-gray-100 font-montserrat border-spacing-4 p-2.5">
        <Link
          to="/customer/dashboard"
          className="px-4 py-6 text-gray-400 border-b-2"
        >
          Dashboard
        </Link>
        <Link
          to="/customer/dashboard/orders"
          className="px-4 py-6 text-gray-400 border-b-2"
        >
          My Orders
        </Link>
        <Link
          to="/customer/dashboard/address"
          className="px-4 py-6 text-gray-400 border-b-2"
        >
          Address Book
        </Link>
        <Link
          to="/customer/dashboard/account"
          className="px-4 py-6 text-gray-400 border-b-2"
        >
          Account Information
        </Link>
      </div>

      <div className="mt-auto px-4 py-2">
        <button className="text-black" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
