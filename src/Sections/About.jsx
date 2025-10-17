import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Title Section */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-primary"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who I Am
      </motion.h2>

      {/* About Text */}
      <motion.div
        className="bg-base-200 p-8 rounded-2xl shadow-lg leading-relaxed text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mb-4">
          Hi, I’m <span className="font-semibold text-primary">Tushar Debnath</span> — a passionate and dedicated
          programmer who thrives on turning ideas into elegant and functional
          digital experiences. With a strong self-learning mindset, I’m always
          exploring new technologies, sharpening my skills, and tackling
          challenges with creativity and persistence.
        </p>

        <p className="mb-4">
          I love working across the full stack of web development and enjoy
          creating tools that make the web more open, accessible, and impactful.
          My main focus is on JavaScript and modern frameworks like React and
          Node.js. I believe in writing clean, efficient, and user-friendly
          code that delivers real-world value.
        </p>

        <p>
          I’m currently open to exciting opportunities that align with my
          technical skills and creative interests.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Web Development'].map(
          (skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
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
