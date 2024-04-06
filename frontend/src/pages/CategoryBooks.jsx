import { BookContainer } from "../components/BookContainer";
import { useState, useEffect } from "react";

function CategoryBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks("http://127.0.0.1:8000/api/books/");
  });

  function fetchBooks(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setBooks(data.results));
  }

  return (
    <div className="container mx-auto px-1">
      <main className="mt-4">
        <h1 className="text-xl font-medium flex justify-between items-center">
          Category Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {books.map((book) => (
            <div key={book.id} className="col-span-1">
              <BookContainer book={book} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryBooks;
