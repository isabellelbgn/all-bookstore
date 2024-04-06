import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BookContainer } from "../components/BookContainer";
import { CategoryContainer } from "../components/CategoryContainer";

function Home() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBooks("http://127.0.0.1:8000/api/books/");
  });

  useEffect(() => {
    fetchCategories("http://127.0.0.1:8000/api/categories/");
  });

  function fetchBooks(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setBooks(data.results));
  }

  function fetchCategories(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setCategories(data.results));
  }

  return (
    <div>
      <div className="container mx-auto px-1">
        <main className="mt-4">
          <h1 className="text-xl font-medium flex justify-between items-center">
            Most Popular Categories
            <Link
              to="/categories"
              className="text-xs text-gray-500 font-normal flex items-center"
            >
              View All <HiOutlineArrowLongRight className="ml-1" />
            </Link>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="col-span-1">
              {categories &&
                categories.map((category) => (
                  <div key={category.id} className="col-span-1">
                    <CategoryContainer category={category} />
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-medium flex justify-between items-center">
              New Books
              <Link
                to="/books"
                className="text-xs text-gray-500 font-normal flex items-center"
              >
                View All <HiOutlineArrowLongRight className="ml-1" />
              </Link>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {books &&
                books.map((book) => (
                  <div key={book.id} className="col-span-1">
                    <BookContainer book={book} />
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
