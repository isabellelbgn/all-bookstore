import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BookContainer } from "../components/BookContainer";
import { CategoryContainer } from "../components/CategoryContainer";

function Home() {
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
              <CategoryContainer title="Classic" />
            </div>
            <div className="col-span-1">
              <CategoryContainer title="Classic 1" />
            </div>
            <div className="col-span-1">
              <CategoryContainer title="Classic 2" />
            </div>
            <div className="col-span-1">
              <CategoryContainer title="Classic 3" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="col-span-1">
                <BookContainer title="Lolita" />
              </div>
              <div className="col-span-1">
                <BookContainer title="Lolita 1" />
              </div>
              <div className="col-span-1">
                <BookContainer title="Lolita 2" />
              </div>
              <div className="col-span-1">
                <BookContainer title="Lolita 3" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
