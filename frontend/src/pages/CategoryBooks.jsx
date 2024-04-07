import { Link, useParams } from "react-router-dom";
import { BookContainer } from "../components/BookContainer";
import { useState, useEffect } from "react";

function CategoryBooks() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [categoryTitle, setCategoryTitle] = useState("");
  const [books, setBooks] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    fetchCategory(baseUrl + `/category/${category_id}`);
    fetchBooks(baseUrl + `/books/?category=${category_id}`);
  }, [category_id]);

  function fetchCategory(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategoryTitle(data.title);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }

  function fetchBooks(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }

  const bookContainers = books.map((book) => (
    <div key={book.id} className="col-span-1">
      <BookContainer book={book} />
    </div>
  ));

  return (
    <div className="container mx-auto px-1">
      <main className="mt-4">
        <h1 className="text-xl font-medium flex justify-between items-center">
          {categoryTitle ? categoryTitle : "Category Title"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {bookContainers.length ? (
            bookContainers
          ) : (
            <p>No books found in this category.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default CategoryBooks;
