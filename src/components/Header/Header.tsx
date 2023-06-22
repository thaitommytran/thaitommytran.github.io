import React from "react";

const Header = () => {
  return (
    <header
      data-testid="headerTestId"
      className="fixed left-0 top-0 z-20 w-full bg-white shadow"
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-screen-md items-center justify-between font-semibold">
        {/* Header Name */}
        <div>
          <a href="#home">Thai Tran</a>
        </div>

        {/* Nav Menu */}
        <div data-testid="navMenuTestId">
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
