// BookContainer.js
import React, { useState, useEffect } from "react";
import { AddToCartButton } from "../Buttons/AddToCartButton";
import { Link } from "react-router-dom";
import AddedtoCart from "../Modals/AddedtoCart";

const BookContainer = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!book || !book.title) {
    return null;
  }

  const [bookData, setBookData] = useState(null);
  const containerStyle = {
    width: "250px",
    height: "450px",
    padding: "4px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    textAlign: "center",
    maxWidth: "calc(250px - 8px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/book/${book.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    if (book && book.id) {
      fetchData();
    }
  }, [book]);

  if (!bookData) {
    return null;
  }

  const { title, author, image } = bookData;

  return (
    <div className="relative my-2 flex">
      <div
        className="flex bg-gray-100 rounded-lg justify-center overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105"
        style={containerStyle}
      >
        <div className="flex flex-col justify-center items-center px-6 py-4">
          <Link
            to={`/book/${title}/${book.id}`}
            className="group-hover:underline"
          >
            <div style={imageContainerStyle}>
              <img
                src={image}
                alt={`Book cover for ${title}`}
                className="object-cover group-hover:opacity-50 transition-opacity"
                style={imageStyle}
                loading="eager"
                placeholder="blur"
              />
            </div>
            <h5 className="text-s mt-6 font-normal">{title}</h5>
          </Link>
          <p className="text-gray-500 text-xs mb-6 mt-1 text-base">{author}</p>
          <p className="text-gray-700 text-s font-semibold">P{book.price}</p>
          <AddToCartButton bookId={book.id} toggleModal={toggleModal} />
        </div>
      </div>
      {showModal && (
        <AddedtoCart closeModal={toggleModal}>
          <p>Added to cart</p>
        </AddedtoCart>
      )}
    </div>
  );
};

export { BookContainer };
