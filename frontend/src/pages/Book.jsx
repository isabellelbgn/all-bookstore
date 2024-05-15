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
  const [quantity, setQuantity] = useState(1);

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

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Implement logic to add book to cart with specified quantity
    // For example:
    // addToCart(bookData.id, quantity);
  };

  return (
    <div>
      <Navigation />
      <PageTemplate>
        <div>
          <div className="container mx-auto px-4">
            <main className="mt-10 font-montserrat">
              <div className="grid grid-cols-12 gap-10">
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

                <div className="col-span-8 font-montserrat">
                  <div>
                    <h3 className="text-lg mb-3">{bookData.title}</h3>
                    <br />
                    <p className="text-zinc-800 text-base text-lg font-bold mb-3">
                      Price: ₱{bookData.price}
                    </p>
                    <p className="text-gray-700 text-sm mb-3 border-b p-6 -ml-6">
                      {bookData.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-700 text-sm mb-1 ">Author:</p>
                        {bookData.author && (
                          <p className="text-sm font-semibold">
                            {bookData.author}
                          </p>
                        )}
                      </div>
                      <div>
                        {bookData.publish_date && (
                          <div>
                            <p className="text-gray-700 text-sm mb-1 ">Year:</p>
                            <p className="text-sm font-semibold">
                              {bookData.publish_date.slice(0, 4)}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 inline-flex items-center p-4 rounded-2xl">
                        <button
                          onClick={decrementQuantity}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 bg-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        >
                          <span className="sr-only">Decrease Quantity</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          id={`quantity-${book_id}`}
                          className="bg-gray-50 w-14 border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          value={quantity}
                          readOnly
                        />
                        <button
                          onClick={incrementQuantity}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-gray-800 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-black dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          <span className="sr-only">Increase Quantity</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                        <div className="ml-4">
                          <AddToCartButton bookId={bookData.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-md font-bold mb-6 mt-10">
                Product Specifications
              </p>
              <div class="relative overflow-x-auto w-3/4 shadow-md sm:rounded-2xl font-montserrat">
                <table class=" w-full text-sm text-left rtl:text-right ">
                  <tbody>
                    <tr class="border-gray-800 dark:border-gray-800 border">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap border"
                      >
                        ISBN
                      </th>
                      <td class="px-6 py-4 border ">
                        {bookData.isbn && (
                          <td className="text-gray-700 text-sm mb-3 mt-2">
                            {bookData.isbn}
                          </td>
                        )}
                      </td>
                    </tr>
                    <tr class="border ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap border"
                      >
                        Author
                      </th>
                      <td class="text-gray-700 text-sm mb-3 mt-2">
                        {bookData.author && (
                          <td className="px-6 py-4">{bookData.author}</td>
                        )}
                      </td>
                    </tr>
                    <tr class="border ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap border"
                      >
                        Date Published
                      </th>
                      <td class="text-gray-700 text-sm mb-3 mt-2">
                        {bookData.publish_date && (
                          <td class="px-6 py-4">{bookData.publish_date}</td>
                        )}
                      </td>
                    </tr>

                    <tr>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium whitespace-nowrap border"
                      >
                        Tags
                      </th>
                      <td class="px-6 py-4">{tagLinks}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8">
                <h5 className="text-md font-bold mb-6">Customer Reviews</h5>
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
        </div>
      </PageTemplate>
      <Footer />
    </div>
  );
}

export default Book;
