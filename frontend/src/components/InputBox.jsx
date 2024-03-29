import React from 'react'

const InputBox = ({ placeholder }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm p-3 rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        required=""
      />
    );
  };
  
  export default InputBox;
