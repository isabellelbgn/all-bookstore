import { Link, useParams } from "react-router-dom";
import { BookContainer } from "../components/Containers/BookContainer";
import { useState, useEffect } from "react";
import Navigation from "../components/Main Components/Navigation";

function CategoryBooks() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [categoryTitle, setCategoryTitle] = useState("");
  const [books, setBooks] = useState([]);
  const { category_id } = useParams();
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchCategory(baseUrl + `/category/${category_id}`);
    fetchBooks(baseUrl + `/books/?category=${category_id}`);
  }, [category_id]);

  function fetchCategory(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategoryTitle(data.title);
        setTotalResult(data.count);
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

  function changeUrl(pageNumber) {
    fetchBooks(
      baseUrl + `/category/${categoryTitle}/${category_id}?page=${pageNumber}`
    );
  }

  var links = [];
  for (let i = 1; i <= totalResult; i++) {
    links.push(
      <li key={i}>
        <Link
          onClick={() => changeUrl(i)}
          to={`/category/${categoryTitle}/${category_id}?page=${i}`}
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-1">
        <main className="mt-4">
          <h1 className="text-xl font-medium flex justify-between items-center">
            {categoryTitle ? categoryTitle : "Category Title"}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {books &&
              books.map((book) => (
                <div key={book.id} className="col-span-1">
                  <BookContainer book={book} />
                </div>
              ))}
          </div>

          <nav>
            <ul className="inline-flex -space-x-px text-sm mt-3">{links}</ul>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default CategoryBooks;
