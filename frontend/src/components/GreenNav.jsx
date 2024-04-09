import React from "react";
import { Link } from "react-router-dom";

const GreenNav = () => {
  return (
    <header className=" bg-green-50 py-4 px-10">
      <nav>
        <div className="font-montserrat flex items-center space-x-5 lg:space-x-12">
          <Link className="text-white text-sm">Personal Info</Link>
          <Link className="text-white text-sm">Order History</Link>
          <Link className="text-white text-sm">Logout</Link>
        </div>
      </nav>
    </header>
  );
};

export default GreenNav;
