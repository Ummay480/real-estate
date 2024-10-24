import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import ProjectSection from "../components/ProjectSection";
import HeroSection from "../components/HeroSection";


const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col container mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Services Section */}
      <section id="services" className="bg-white flex w-full flex-col py-16 mb-0">
        <p className="text-sm text-center w-full text-gray h-[19px]">
          Three steps, Three minutes
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-4 text-black w-full h-[60px]">
          Everything should be this easy.
        </h1>
        <Services />
      </section>

      {/* Project Section */}
      <section id="projects" className="bg-white flex flex-col py-16 mb-0">
        <p className="text-lg text-left ml-8 -mt-20 text-gray">Best Projects of the Years</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left ml-6 mt-4 text-black">Our Recent Projects</h1>
        <ProjectSection />
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white flex flex-col py-16 mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black -mt-10">
          We are a global, boutique real <br /> estate brokerage
        </h1>
        <AboutSection />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="flex flex-col">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
