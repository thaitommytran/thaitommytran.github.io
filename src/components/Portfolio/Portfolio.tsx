import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-6 lg:px-12 w-full">
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
