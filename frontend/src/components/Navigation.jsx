import React from "react";
import { Link } from "react-router-dom";
import { VscAccount, VscBook } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import InputBox from "./InputBox";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-10 bg-gray-100 rounded-b-2xl py-5 px-10 rounded-md">
      <nav className="flex flex-col lg:flex-row justify-between items-center">
        <div className="font-montserrat flex items-center mb-4 lg:mb-0">
          <VscBook className="mr-5 icon" />
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
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/products" className="text-black">
            Shop
          </Link>
          <Link to="/cart" className="text-black">
            Cart
          </Link>
          <Link to="/account" className="text-black">
            <VscAccount className="icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
