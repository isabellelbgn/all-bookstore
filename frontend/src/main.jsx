import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotFound } from "./components/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//Website
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Books from "./pages/Books";
import TagBooks from "./pages/TagBooks";
import Book from "./pages/Book";
import CategoryBooks from "./pages/CategoryBooks";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

//Customer Panel
import Register from "./pages/Customer/Register";
import Login from "./pages/Customer/Login";
import Dashboard from "./pages/Customer/Dashboard";
import Orders from "./pages/Customer/Orders";

const router = createBrowserRouter([
  {
    path: "/customer/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/books",
    element: <Books />,
    errorElement: <NotFound />,
  },
  {
    path: "/books/tag/:tag",
    element: <TagBooks />,
    errorElement: <NotFound />,
  },
  {
    path: "/book/:book_slug/:book_id",
    element: <Book />,
    errorElement: <NotFound />,
  },
  {
    path: "/categories",
    element: <Categories />,
    errorElement: <NotFound />,
  },
  {
    path: "/category/:category_slug/:category_id",
    element: <CategoryBooks />,
    errorElement: <NotFound />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <NotFound />,
  },
  {
    path: "/order/success",
    element: <OrderSuccess />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/customer/orders",
    element: <Orders />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
