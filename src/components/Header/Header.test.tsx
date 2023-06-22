import React from "react";

// Helpers
import { render } from "@testing-library/react";

// Component
import Header from "./Header";

describe("Header", () => {
  it("should render component", () => {
    const screen = render(<Header />);

    expect(screen.getByTestId("headerTestId")).toBeInTheDocument();
  });
});
