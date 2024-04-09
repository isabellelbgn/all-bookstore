import React from "react";
const InputBox = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 sm:text-xs p-3 rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full"
      required=""
    />
  );
};

export default InputBox;
