import React from "react";

// Components
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-6 lg:px-12 w-full">
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
