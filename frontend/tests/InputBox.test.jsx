import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputBox from "../src/components/Main Components/InputBox";

describe("InputBox Component", () => {
  it("renders type correctly", () => {
    render(
      <InputBox
        type="text"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue("");
  });

  it("renders name correctly", () => {
    render(
      <InputBox
        name="username"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "username");
    expect(inputElement).toHaveValue("");
  });
});
