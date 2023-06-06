import React from "react";

const Header = () => {
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
