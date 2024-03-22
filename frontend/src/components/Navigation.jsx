import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";


export default function Navigation() {
  return (
    <header className="bg-navigation py-5 px-10 rounded-md">
      <nav className="flex justify-between items-center">

        <text> Logo </text>
        <div className="relative flex items-center">
          <IoIosSearch className="absolute left-0 ml-2 text-search" />
          <input
            type="text"
            placeholder="I'm looking for..."
            className="pl-8 pr-2 py-1 text-sm text-search rounded-md border border-gray-100 w-80"
          /> 
        </div>

        <div className="flex items-center space-x-12">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/products" className="text-black">Shop</Link>
          <Link to="/products" className="text-black">Account</Link>
          <Link to="/cart" className="text-black">Cart</Link>
        </div>
        
      </nav>
    </header>
  );
}
