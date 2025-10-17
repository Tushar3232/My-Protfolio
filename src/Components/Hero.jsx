import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/pic-1.png'; // সঠিক import path

const Hero = () => {
  return (
    <div className="w-full max-w-10/12 mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center bg-transparent px-6 py-16">
      
      {/* Hero Text */}
      <motion.div
        className="lg:w-1/2 mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-primary">
          Hi, I’m Tushar Debnath
        </h1>
        <p className="text-lg md:text-xl ">
          I’m a Diploma in Computer Science and Technology student with a passion for web development, MERN stack, and creating responsive web applications.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary rounded-full font-semibold hover:scale-105 transition-transform"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={heroImg}
          alt="Tushar Debnath"
          className="w-90 h-80 md:w-96 md:h-96 rounded-2xl shadow-2xl object-cover border-4 border-primary"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
