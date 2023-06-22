"use client";
import React from "react";

const Header = () => {
  const handleScroll = (e) => {
    e.preventDefault();

    const target = e.currentTarget.innerText;
    const elem = document.getElementById(target);
    console.log(elem?.getBoundingClientRect())

    window.scrollTo({
      top: elem?.offsetTop,
      behavior: "smooth"
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
              <span onClick={handleScroll}>Home</span>
            </li>
            <li>
              <span onClick={handleScroll}>About</span>
            </li>
            <li>
              <span onClick={handleScroll}>Skills</span>
            </li>
            <li>
              <span onClick={handleScroll}>Projects</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
