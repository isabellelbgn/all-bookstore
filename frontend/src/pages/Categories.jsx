import { Link } from "react-router-dom";
import { CategoryContainer } from "../components/CategoryContainer";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

function Categories() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchCategories(baseUrl + "/categories");
  }, []);

  function fetchCategories(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results);
        setTotalResult(data.count);
      });
  }

  function changeUrl(baseUrl) {
    fetchCategories(baseUrl);
  }

  var links = [];
  for (let i = 1; i <= totalResult; i++) {
    links.push(
      <li key={i}>
        <Link
          onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
          to={`/categories/?page=${i}`}
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
            All Categories
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories &&
              categories.map((category) => (
                <div key={category.id} className="col-span-1">
                  <CategoryContainer category={category} />
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

export default Categories;
