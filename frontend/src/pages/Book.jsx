import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PageTemplate } from "../components/Main Components/PageTemplate";
import Navigation from "../components/Main Components/Navigation";
import Footer from "../components/Main Components/Footer";
import { AddToCartButton } from "../components/Buttons/AddToCartButton";
import { TagButton } from "../components/Buttons/TagButton";
import ReactStars from "react-rating-stars-component";
import { parseISO, format } from "date-fns";

function Book() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [bookData, setBookData] = useState({});
  const [bookTags, setBookTags] = useState([]);
  const [bookImages, setBookImages] = useState([]);
  const [ratings, setRatings] = useState([]);

  const { book_id } = useParams();

  useEffect(() => {
    fetchData(baseUrl + `/book/${book_id}`);
    fetchRatings(baseUrl + `/book/${book_id}/ratings/`);
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

  function fetchRatings(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRatings(data);
      })
      .catch((error) => {
        console.error("Error fetching book ratings:", error);
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
      <PageTemplate>
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
              <div className="col-span-8">
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
            <div className="mt-8">
              <h5 className="text-zinc-800 text-sm font-semibold">
                Ratings and Reviews
              </h5>
              {ratings.length > 0 ? (
                <div className="w-full">
                  {ratings.map((rating) => (
                    <div
                      key={rating.id}
                      className="border-b border-gray-200 py-2"
                    >
                      <div>
                        <span className="font-bold">Rating: </span>
                        <ReactStars
                          count={5}
                          value={rating.rating}
                          size={24}
                          activeColor="#ffd700"
                          edit={false}
                        />
                      </div>
                      <div>
                        <span className="font-bold">Review: </span>
                        {rating.reviews}
                      </div>
                      <div>
                        <span className="font-bold">Created At: </span>
                        {format(
                          parseISO(rating.review_date),
                          "MMM d, yyyy 'at' HH:mm:ss"
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No review and ratings for this book.</p>
              )}
            </div>
          </main>
        </div>
      </PageTemplate>
      <Footer />
    </div>
  );
}

export default Book;
