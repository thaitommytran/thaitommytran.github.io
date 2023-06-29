import React from "react";

// Components
import About from "@/components/About";
import Footer from "@/components/Footer";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="flex w-full flex-col px-6 lg:px-12">
        <Me />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
