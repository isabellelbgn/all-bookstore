import React from 'react'

const Sidebar = () => {
  return (
    <div class="bg-gray-100 text-white w-64 fixed top-4 left-4 h-3/4 flex flex-col justify-between rounded p-2.5">
      
        <div class="flex flex-col bg-gray-100 font-montserrat border-spacing-4 p-2.5">
            <a href="#" class="px-4 py-6 text-gray-400 border-b-2">Dashboard</a>
            <a href="#" class="px-4 py-6 text-gray-400 border-b-2">My Orders</a>
            <a href="#" class="px-4 py-6 text-gray-400 border-b-2">Address Book</a>
            <a href="#" class="px-4 py-6 text-gray-400 border-b-2">Account Information</a>
        </div>
       
        <div class="mt-auto px-4 py-2">
            <button class="w-full bg-green-50 text-white px-4 py-2 rounded hover:bg-red-700 font-montserrat">Log Out</button>
        </div>
    </div>
  )
}

export default Sidebar