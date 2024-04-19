import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CategoryContainer } from "../src/components/Containers/CategoryContainer";

describe("CategoryContainer", () => {
  const category = {
    id: 3,
    title: "Fantasy",
  };

  it("renders the secondary button", () => {
    render(
      <BrowserRouter>
        <CategoryContainer category={category} />
      </BrowserRouter>
    );

    const secondaryButton = screen.getByText("View All");
    expect(secondaryButton).toBeInTheDocument();
  });

  it("navigates to the correct link when the button is clicked", () => {
    render(
      <BrowserRouter>
        <CategoryContainer category={category} />
      </BrowserRouter>
    );

    const secondaryButton = screen.getByText("View All");
    fireEvent.click(secondaryButton);

    expect(window.location.pathname).toBe(
      `/category/${category.title}/${category.id}`
    );
  });
});
