"use client";
import React from "react";

const Header = () => {
  const handleScroll = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const target = event.currentTarget.innerText;
    const elem = document.getElementById(target);

    window.scrollTo({
      top: elem?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <header
      data-testid="headerTestId"
      className="fixed left-0 top-0 z-20 w-full bg-white shadow"
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-screen-md items-center justify-between font-semibold">
        {/* Header Name */}
        <div>
          <a href="/">Thai Tran</a>
        </div>

        {/* Nav Menu */}
        <div data-testid="navMenuTestId">
          <ul className="flex gap-8">
            <li>
              <span data-testid="homeNavTestId" onClick={handleScroll}>
                Home
              </span>
            </li>
            <li>
              <span data-testid="aboutNavTestId" onClick={handleScroll}>
                About
              </span>
            </li>
            <li>
              <span data-testid="skillsNavTestId" onClick={handleScroll}>
                Skills
              </span>
            </li>
            <li>
              <span data-testid="projectsNavTestId" onClick={handleScroll}>
                Projects
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
