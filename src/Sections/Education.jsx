import React from 'react';
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-cyan-400">
          Education
        </h2>

        {/* Education Card */}
        <div className="relative border-l-4 border-cyan-400 pl-10 bg-[#0f0f0f] rounded-2xl shadow-lg p-8 hover:shadow-cyan-400/40 transition-all duration-300">
          
          {/* Icon */}
          <div className="absolute -left-7 top-8 bg-cyan-500 text-black p-3 rounded-full shadow-md flex items-center justify-center">
            <GraduationCap size={26} />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold mb-2 text-white">
            Diploma in Computer Science and Technology (CST)
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            Tangail Polytechnic Institute
          </p>
          <p className="text-sm text-gray-400">Session: 2022 - 2023</p>
          <p className="text-sm text-gray-400">
            Currently studying <span className="text-cyan-400 font-semibold">(6th Semester Running)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
