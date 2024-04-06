import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ProductContainer } from "./components/ProductContainer";
import { CategoryContainer } from "./components/CategoryContainer";

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container mx-auto px-1">
          <main className="mt-4">
            <h1 className="text-xl font-medium flex justify-between items-center">
              Most Popular Categories
              <a
                href="#"
                className="text-xs text-gray-500 font-normal flex items-center"
              >
                {" "}
                View All <HiOutlineArrowLongRight className="ml-1" />
              </a>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="col-span-1">
                <CategoryContainer />
              </div>
              <div className="col-span-1">
                <CategoryContainer />
              </div>
              <div className="col-span-1">
                <CategoryContainer />
              </div>
              <div className="col-span-1">
                <CategoryContainer />
              </div>
            </div>

            <h1 className="text-xl font-medium flex justify-between items-center">
              New Books
              <a
                href="#"
                className="text-xs text-gray-500 font-normal flex items-center"
              >
                {" "}
                View All <HiOutlineArrowLongRight className="ml-1" />
              </a>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="col-span-1">
                <ProductContainer />
              </div>
              <div className="col-span-1">
                <ProductContainer />
              </div>
              <div className="col-span-1">
                <ProductContainer />
              </div>
              <div className="col-span-1">
                <ProductContainer />
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
