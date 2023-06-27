import React from "react";
import {
  AiOutlineSend,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail
} from "react-icons/ai";
import Blob from "@/components/Blob";

const Me = () => {
  return (
    <section
      id="Home"
      className="relative grid h-screen w-full grid-cols-2 content-center md:px-[4rem] min-[1130px]:px-[8rem] xl:px-[12rem] 2xl:px-[18rem] min-[1780px]:px-[24rem]">
      <div className="col-span-full pt-4 md:col-span-1">
        {/* Title Text */}
        <h1 className="mb-10 font-semibold md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Hi,
          <br />
          I&apos;m{" "}
          <span className="whitespace-nowrap text-rose-500">Thai Tran</span>
          <br />
          <span className="whitespace-nowrap">Web Developer</span>
        </h1>
      </div>

      <div className="">
        {/* Contact Button */}
        <a
          className="inline-block rounded-md bg-rose-500 px-10 py-3 text-white"
          href="mailto:thai.tommy.tran@gmail.com">
          Contact
          <AiOutlineSend className="ml-2 inline text-xl" />
        </a>

        {/* Social Icons */}
        <div className="mt-2 flex w-max gap-5 text-[24px] text-slate-500">
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
      </div>
      <Blob />
    </section>
  );
};

export default Me;
