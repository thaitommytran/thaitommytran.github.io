import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#163a74] text-white text-4xl flex flex-col items-center py-16 mt-[6rem]">
      {/* Footer Name */}
      <h1 className="font-semibold">Thai Tran</h1>

      {/* Social Icons */}
      <div className="flex gap-4 mt-3 text-2xl">
        <a
          href="https://www.linkedin.com/in/thaitommytran/"
          target="_blank"
          rel="noreferrer">
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/thaitommytran"
          target="_blank"
          rel="noreferrer">
          <AiOutlineGithub />
        </a>
        <a href="mailto:thai.tommy.tran@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
