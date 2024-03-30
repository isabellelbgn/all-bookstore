import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


export const AddToCartButton = () => {
  return (
    <div class="relative">
        <button type="submit" class="flex items-center font-montserrat text-white bg-green-50 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-regular rounded-full text-xs px-5 py-3 text-center">
        <span>Add to cart</span>
        <span class="ml-2"><FaCartShopping/></span> 
        </button>
    </div>
  
  )
}
