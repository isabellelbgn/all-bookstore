import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscAccount, VscBook } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";

export default function Navigation() {
  const { customer, logoutCustomer } = useContext(AuthContext);
  const location = useLocation();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <header className="top-0 z-10 bg-gray-100 rounded-b-2xl py-5 mb-5 px-10 rounded-md">
      <nav className="flex flex-col lg:flex-row justify-between items-center">
        <div className="font-montserrat flex items-center mb-4 lg:mb-0">
          <Link to="/">
            <VscBook className="mr-5 icon" />
          </Link>
          <div className="relative flex items-center">
            <IoSearchSharp className="absolute right-0 mr-2 text-search icon-search" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5"
            />
          </div>
        </div>

        <div className="font-montserrat text-sm flex items-center space-x-5 lg:space-x-12">
          <NavLink to="/" text="Home" />
          <NavLink to="/categories" text="Shop" />
          <NavLink to="/cart" text="Cart" />
          <div className="relative" ref={dropdownRef}>
            <h1
              className="text-black flex items-center"
              onClick={toggleDropdown}
            >
              <VscAccount className="icon" />
            </h1>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    {customer ? (
                      <>
                        <p className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <NavLink to="/customer/dashboard" text="Dashboard" />
                        </p>
                        <p
                          onClick={logoutCustomer}
                          className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Logout
                        </p>
                      </>
                    ) : (
                      <>
                        <NavLink to="/customer/register" text="Register" />
                        <NavLink to="/customer/login" text="Login" />
                      </>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, text }) {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={`text-black ${
        location.pathname === to ? "text-green-50" : ""
      } hover:text-primary-500 hover:underline`}
    >
      {text}
    </Link>
  );
}
