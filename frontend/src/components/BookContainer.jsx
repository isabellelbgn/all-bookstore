import React from "react";
import { AddToCartButton } from "./AddToCartButton";
import { Link } from "react-router-dom";

const BookContainer = (props) => {
  return (
    <div className="relative my-2 flex">
      <div className="flex bg-gray-100 rounded-lg overflow-hidden">
        <div className="flex font-montserrat flex-col justify-center items-center px-6 py-4">
          <Link to={`/book/${props.book.title}/${props.book.id}`}>
            {/* <div className="col-span-4">
          <img
            src={props.book.image}
            className="img-thumbnail"
            alt={props.book.title}
          />
        </div> */}
            <h5 className="text-s font-medium">{props.book.title}</h5>
          </Link>
          <p className="text-gray-700 text-xs text-base">{props.book.author}</p>
          <p className="text-gray-700 text-xs font-semibold">
            Price: {props.book.price}
          </p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export { BookContainer };
