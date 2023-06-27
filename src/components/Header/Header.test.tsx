import React from "react";

// Helpers
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Component
import Header from "./Header";

describe("Header", () => {
  const scrollToMock = jest.fn();
  global.scrollTo = scrollToMock;

  it("should render component", () => {
    const screen = render(<Header />);

    expect(screen.getByTestId("headerTestId")).toBeInTheDocument();
  });

  it("should call handleScroll when nav item is clicked", async () => {
    const user = userEvent.setup();

    const screen = render(<Header />);

    const homeNav = screen.getByTestId("homeNavTestId");
    const aboutNav = screen.getByTestId("aboutNavTestId");
    const skillsNav = screen.getByTestId("skillsNavTestId");
    const projectsNav = screen.getByTestId("projectsNavTestId");

    await user.click(homeNav);
    await user.click(aboutNav);
    await user.click(skillsNav);
    await user.click(projectsNav);

    expect(scrollToMock).toHaveBeenCalledTimes(4);
  });
});
