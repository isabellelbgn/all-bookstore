import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//Website
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import Book from "./pages/Book";
import CategoryBooks from "./pages/CategoryBooks";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

//Customer Panel
import Register from "./pages/Customer/Register";
import Login from "./pages/Customer/Login";
import Dashboard from "./pages/Customer/Dashboard";
import Orders from "./pages/Customer/Orders";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:book_slug/:book_id" element={<Book />} />

        <Route path="/categories" element={<Categories />} />
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryBooks />}
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />

        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}
