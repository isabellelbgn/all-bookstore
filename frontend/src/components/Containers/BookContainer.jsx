import React, { useState, useEffect } from "react";
import { AddToCartButton } from "../Buttons/AddToCartButton";
import { Link } from "react-router-dom";

const BookContainer = ({ book }) => {
  if (!book || !book.title) {
    // Handle case where book is undefined or does not have a title property
    return null;
  }
  const containerStyle = {
    width: "250px",
    padding: "4px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    textAlign: "center",
    maxWidth: "calc(250px - 8px)",
  };
  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px", // Set a fixed height to ensure consistent alignment
  };
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  };

  const [bookImages, setBookImages] = useState([]);

  useEffect(() => {
    if (book && book.id) {
      fetchData(`http://127.0.0.1:8000/api/book/${book.id}`);
    }
  }, [book]);

  function fetchData(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch book images");
        }
        return response.json();
      })
      .then((data) => {
        setBookImages(data.book_images);
      })
      .catch((error) => {
        console.error("Error fetching book images:", error);
        setBookImages([]);
      });
  }

  return (
    <div className="relative my-2 flex">
      <div
        className="flex bg-gray-100 rounded-lg justify-center overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105"
        style={containerStyle}
      >
        <div className="flex flex-col justify-center items-center px-6 py-4">
          <Link
            to={`/book/${book.title}/${book.id}`}
            className="group-hover:underline"
          >
            <div style={imageContainerStyle}>
              {bookImages.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  className="object-cover group-hover:opacity-50 transition-opacity"
                  style={imageStyle}
                  loading="eager"
                  placeholder="blur"
                  alt={`Book Image ${index + 1}`}
                />
              ))}
            </div>
            <h5 className="text-s mt-6 font-normal">{book.title}</h5>
          </Link>
          <p className="text-gray-500 text-xs mb-6 mt-1 text-base">
            {book.author}
          </p>
          <p className="text-gray-700 text-s font-semibold">P{book.price}</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export { BookContainer };
