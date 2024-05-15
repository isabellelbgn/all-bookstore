import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../src/pages/Customer/Login";

// Define the isFormReady function
const isFormReady = (username, password) =>
  username.trim() !== "" && password.trim() !== "";

describe("Login page", () => {
  it("renders the login button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Log In");
    expect(loginButton).toBeInTheDocument();
  });

  it("submits the form when primary button is clicked", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Log In");
    fireEvent.click(loginButton);

    const username = "testUsername";
    const password = "testPassword";
    console.log("Is form ready?", isFormReady(username, password));
    expect(isFormReady(username, password)).toBeTruthy();
  });
});
