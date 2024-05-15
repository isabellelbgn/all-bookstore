import React from "react";

const Successful = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg font-montserrat flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-800">
          Thank you for your order. Your purchase is being processed.
        </p>
        <button
          onClick={closeModal}
          className="bg-green-50 text-white px-4 py-2 rounded-lg mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Successful;
