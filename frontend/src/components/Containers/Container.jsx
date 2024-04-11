import React from "react";

const Container = (props) => {
  return (
    <div
      className={`bg-green-50 mb-24 p-8 ${
        props.className ? props.className : ""
      }`}
      style={{ height: "750px" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
