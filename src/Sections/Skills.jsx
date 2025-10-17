import React from 'react';
import Marquee from 'react-fast-marquee';
import cssLogo from '../assets/tech_logo/css.png';
import htmlLogo from '../assets/tech_logo/html.png';
import jsLogo from '../assets/tech_logo/javascript.png';
import reactLogo from '../assets/tech_logo/reactjs.png';
import nodeLogo from '../assets/tech_logo/nodejs.png';
import mongoLogo from '../assets/tech_logo/mongodb.png';
import tailwindLogo from '../assets/tech_logo/tailwindcss.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import git from "../assets/tech_logo/git.png";
import github from "../assets/tech_logo/github.png";
import vscod from "../assets/tech_logo/vscode.png";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "React", img: reactLogo },
    { name: "Tailwind", img: tailwindLogo },
  ];

  const backendSkills = [
    { name: "Node.js", img: nodeLogo },
    { name: "MongoDB", img: mongoLogo },
    { name: "Firebase", img: firebaseLogo },
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "VS Code", img: vscod },
  ];

  const renderSkillCard = (skill) => (
    <div
      key={skill.name}
      className="bg-[#0f0f0f] p-6 m-4 rounded-2xl shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center min-w-[120px]"
    >
      <img
        src={skill.img}
        alt={skill.name}
        className="w-16 h-16 object-contain mb-3"
      />
      <h4 className="text-lg font-semibold text-white text-center">{skill.name}</h4>
    </div>
  );

  return (
    <section id="skills" className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-12 text-cyan-400">
          My Skills
        </h2>

        {/* Frontend Marquee */}
        <h3 className="text-2xl font-semibold mb-4 text-center text-white">Frontend</h3>
        <Marquee gradient={false} speed={50} pauseOnHover={true} direction="right">
          {frontendSkills.map(renderSkillCard)}
        </Marquee>

        {/* Backend / Tools Marquee */}
        <h3 className="text-2xl font-semibold mb-4 mt-10 text-center text-white">
          Backend & Tools
        </h3>
        <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left">
          {backendSkills.map(renderSkillCard)}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
