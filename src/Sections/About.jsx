import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/pic-1.png';

const About = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-20">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-cyan-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-40 animate-pulse"></div>
          <img
            src={profile}
            alt="Tushar Debnath"
            className="relative w-56 h-56 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="flex-1 bg-[#0f0f0f] p-8 rounded-2xl shadow-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4">
            Hi, I’m <span className="font-semibold text-cyan-400">Tushar Debnath</span>, 
            a passionate <span className="font-semibold text-white">Diploma in Computer Science and Technology</span> student 
            with a strong love for web development and problem-solving.
          </p>

          <p className="mb-4">
            I specialize in the <span className="font-semibold text-cyan-400">MERN stack</span> 
            and focus on creating modern, responsive, and scalable web applications 
            that combine both functionality and design excellence.
          </p>

          <p>
            Outside of coding, I enjoy exploring new technologies, creative ideas, 
            and learning about space and science mysteries.  
            I’m always excited to collaborate on meaningful projects and grow as a developer.
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[ 'React', 'Node.js',  'MongoDB',  'Tailwind CSS'].map(
          (skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-cyan-500 text-black rounded-full text-sm font-semibold shadow-md hover:shadow-cyan-400/50 transition-transform duration-300 hover:-translate-y-1"
            >
              {skill}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
};

export default About;
