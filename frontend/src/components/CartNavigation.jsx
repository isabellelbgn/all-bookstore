import React from "react";
import { NavLink } from "react-router-dom";

const CartNavigation = () => {
  return (
    <header className="bg-green-50 py-4 px-20">
      <nav>
        <div className="font-montserrat flex items-center space-x-5 lg:space-x-12">
          <NavLink to="/checkout" className="text-white">
            Cart
          </NavLink>
          <NavLink to="/customer/orders" className="text-white">
            Order History
          </NavLink>
          <NavLink to="/customer/logout" className="text-white">
            Logout
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default CartNavigation;
