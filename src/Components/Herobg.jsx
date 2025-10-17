import React from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";
import heroImg from "../assets/pic-1.png"; // তোমার ইমেজ পাথ সঠিক রাখো

const Herobg = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#00ffff"]}
          particleCount={150}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-20 py-16">
        
        {/* Hero Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-4 leading-tight">
            Hi, I’m 
          </h1>
          <h2>
            <span className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">Tushar Debnath</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            I’m a Diploma in Computer Science and Technology student passionate
            about <span className="text-cyan-300">MERN Stack</span> and creating
            modern, responsive web applications.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-5">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black rounded-full font-semibold hover:scale-105 transition-transform"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-50 animate-pulse"></div>
            <img
              src={heroImg}
              alt="Tushar Debnath"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-cyan-400"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herobg;
