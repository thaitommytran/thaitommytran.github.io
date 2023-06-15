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
    <header className="w-full fixed top-0 left-0 z-20 shadow bg-white">
      <nav className="h-[4.5rem] flex justify-between items-center font-semibold max-w-screen-md mx-auto">
        {/* Header Name */}
        <div>
          <a href="#home">Thai Tran</a>
        </div>

        {/* Nav Menu */}
        <div>
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
