import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <section id="About" className="flex flex-col items-center pt-[8rem] w-full">
      {/* About Header */}
      <h2 className="text-2xl font-semibold text-rose-500 border-b-2 border-b-rose-500">
        About
      </h2>

      {/* About Content */}
      <div className="flex flex-col items-center gap-6 py-8">
        <p>
          {`          Hey y'all! I am a Web Developer based in the Dallas-Fort Worth
          metroplex. I have hands-on experience building full-stack web
          applications with technologies such as React, NodeJS, HTML, CSS,
          JavaScript, and SQL.`}
        </p>
        <p>
          {`
                      Before coding, my background was in Biomedical Engineering, where I
          specialized in ventilators used in response to the COVID-19 pandemic.
          What I loved about most this work, in addition to saving lives, was
          the troubleshooting aspect. Collaborating in a team-based environment
          in order to solve real-world problems is truly a passion of mine, and
          now I'm looking to expand my skill set into the world of programming.
            `}
        </p>
        <p>
          {`
         When I'm not coding, you'll still find me glued to a screen somewhere.
          If I'm not tinkering with my PC or keyboard builds, then I'm probably
          gaming or watching a Marvel movie. Don't worry, I still see the
          outside world. So if you're interested, feel free to reach out! I'd
          love to connect.
          `}
        </p>
        <a
          className="flex justify-center bg-rose-500 text-white max-w-xs py-3 px-10 rounded-md mt-4"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1cJPAnRMUPGyitv1pEExTVbnca9gyE9d6iwRmLPYVHog/edit?usp=sharing"
        >
          Download Resume
          <AiOutlineDownload className="ml-2 text-xl" />
        </a>
      </div>
    </section>
  );
};

export default About;
