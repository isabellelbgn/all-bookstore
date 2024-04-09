import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BookContainer } from "../components/BookContainer";
import { CategoryContainer } from "../components/CategoryContainer";
import Navigation from "../components/Navigation";
import { Header } from "../components/Header";

function Home() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooksAndCategories();
  }, []);

  async function fetchBooksAndCategories() {
    try {
      const [booksResponse, categoriesResponse] = await Promise.all([
        fetch("http://127.0.0.1:8000/api/books/"),
        fetch("http://127.0.0.1:8000/api/categories/"),
      ]);

      const booksData = await booksResponse.json();
      const categoriesData = await categoriesResponse.json();

      setBooks(booksData.results);
      setCategories(categoriesData.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  return (
    <div>
      <Navigation />
      <Header />
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
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {categories.map((category) => (
                <div key={category.id} className="col-span-1">
                  <CategoryContainer category={category} />
                </div>
              ))}
            </div>
          )}

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
            {loading ? (
              <p>Loading books...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {books.map((book) => (
                  <div key={book.id} className="col-span-1">
                    <BookContainer book={book} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
