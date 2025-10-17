import React from "react";

import About from "../Sections/About";
import Education from "../Sections/Education";
import Skills from "../Sections/Skills";
import Projects from "../Sections/Projects";
import ContactForm from "../Sections/ContactForm";
import Herobg from "../Components/Herobg";
import AnimatedSection from "../Components/AnimatedSection"; // ✅ Import
import Hobby from "../Sections/Hobby";

const Home = () => {
  return (
    <>
      {/* Hero Background + Hero Section */}
      <Herobg />
      <div className="bg-black text-white">
        {/* About Section */}
        <section id="about">
          <AnimatedSection delay={0}>
            <About />
          </AnimatedSection>
        </section>

        {/* Education Section */}
        <section id="education">
          <AnimatedSection delay={0.2}>
            <Education />
          </AnimatedSection>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <AnimatedSection delay={0.4}>
            <Skills />
          </AnimatedSection>
        </section>


        {/* Projects Section */}
        <section id="projects">
          <AnimatedSection delay={0.6}>
            <Projects />
          </AnimatedSection>
        </section>

         {/* hobby */}
        <section id="hobby">
            <Hobby></Hobby>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <AnimatedSection delay={0.8}>
            <ContactForm />
          </AnimatedSection>
        </section>

       
      </div>
    </>
  );
};

export default Home;
