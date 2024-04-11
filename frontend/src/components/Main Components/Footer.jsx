import React from "react";

export default function Footer() {
  return (
    <footer className="mt-40 flex-1 w-full fixed bottom-0 rounded-t-2xl bg-gray-100 md:items-center py-5 px-10">
      <span className="font-montserrat text-sm text-gray-500 block text-center">
        © 2024{" "}
        <a href="#" className="hover:underline">
          ALL Bookstore
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
