import React from "react";
import {
  AiOutlineSend,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Blob from "@/components/Blob";

const Me = () => {
  return (
    <section id="Home" className="grid grid-cols-2 pt-[8rem] relative w-full h-screen 2xl:px-[18rem] xl:px-[12rem] md:px-[4rem] min-[1130px]:px-[8rem] min-[1780px]:px-[24rem]">
      <div className="pt-4 col-span-full md:col-span-1">
        {/* Title Text */}
        <h1 className="font-semibold mb-10 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-5xl">
          Hi,
          <br />
          I&apos;m{" "}
          <span className="text-rose-500 whitespace-nowrap">Thai Tran</span>
          <br />
          <span className="whitespace-nowrap">Web Developer</span>
        </h1>
      </div>

      <div className="">
        {/* Contact Button */}
        <a
          className="bg-rose-500 inline-block text-white py-3 px-10 rounded-md"
          href="mailto:thai.tommy.tran@gmail.com"
        >
          Contact
          <AiOutlineSend className="inline ml-2 text-xl" />
        </a>

        {/* Social Icons */}
        <div className="text-slate-500 flex w-max text-[24px] mt-2 gap-5">
          <a
            href="https://www.linkedin.com/in/thaitommytran/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://github.com/thaitommytran"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <a href="mailto:thai.tommy.tran@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
      <Blob />
    </section>
  );
};

export default Me;
