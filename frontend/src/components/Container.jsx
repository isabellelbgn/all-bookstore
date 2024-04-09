import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container bg-green-50 p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
