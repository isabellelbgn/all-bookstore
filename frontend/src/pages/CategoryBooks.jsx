import { BookContainer } from "../components/BookContainer";
import { useState, useEffect, useCallback } from "react";

function CategoryBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = useCallback((baseUrl) => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchBooks("http://127.0.0.1:8000/api/books/");
  }, [fetchBooks]);

  return (
    <div className="container mx-auto px-1">
      <main className="mt-4">
        <h1 className="text-xl font-medium flex justify-between items-center">
          Category Books
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
      </main>
    </div>
  );
}

export default CategoryBooks;
