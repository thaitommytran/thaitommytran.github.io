import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-[6rem] flex flex-col items-center bg-[#163a74] py-16 text-4xl text-white">
      {/* Footer Name */}
      <h1 className="font-semibold">Thai Tran</h1>

      {/* Social Icons */}
      <div className="mt-3 flex gap-4 text-2xl">
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
