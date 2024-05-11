import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const DashboardNavigation = () => {
  const navigate = useNavigate();
  const { customer, logoutCustomer } = useContext(AuthContext);

  const handleLogout = () => {
    logoutCustomer();
    navigate("/");
  };

  return (
    <header className="bg-green-50 py-4 px-20">
      <nav>
        <div className="font-montserrat flex items-center space-x-5 lg:space-x-12 text-base text-white">
          {customer && <p> Hello {customer.username}</p>}
          <NavLink to="/customer/dashboard">Personal Info</NavLink>
          <NavLink to="/customer/orders">Order History</NavLink>
          <p onClick={handleLogout} className="cursor-pointer">
            {" "}
            Logout
          </p>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavigation;
