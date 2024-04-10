import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { AddToCartButton } from "../components/AddToCartButton";
import { TagButton } from "../components/TagButton";

function Book() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [bookData, setBookData] = useState([]);
  const [bookTags, setBookTags] = useState([]);
  const [bookImages, setBookImages] = useState([]);
  const { book_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + `/book/${book_id}`);
  }, [book_id]);

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
        setBookImages(data.book_images);
        setBookTags(data.tag_list);
      });
  }

  const tagLinks = bookTags.map((tag, index) => (
    <Link key={index} to={`/books/tag/${tag}`}>
      <TagButton tagName={tag} />
    </Link>
  ));

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4">
        <main className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              {bookImages.map((image, index) => (
                <img
                  key={index}
                  src={image.image}
                  className="img-thumbnail fixed-image"
                  alt={`Book Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="col-span-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">{bookData.title}</h3>
                <p className="text-gray-700 mb-3">{bookData.description}</p>
                <p className="text-zinc-800 text-base font-semibold mb-3">
                  Price: ₱{bookData.price}
                </p>
                <AddToCartButton />
              </div>
              <div className="mt-3 mb-3">
                <h5 className="text-zinc-800 text-sm font-semibold">Tags</h5>
                <div className="flex">{tagLinks}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Book;
