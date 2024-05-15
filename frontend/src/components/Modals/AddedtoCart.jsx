import React from "react";

const AddedtoCart = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-80 font-montserrat flex flex-col items-center">
        <h2 className="text-xl font-md mb-4">Added to cart!</h2>

        <button
          onClick={closeModal}
          className="bg-green-50 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddedtoCart;
