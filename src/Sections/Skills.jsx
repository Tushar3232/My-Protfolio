import React from 'react';
import cssLogo from '../assets/tech_logo/css.png';
import htmlLogo from '../assets/tech_logo/html.png';
import jsLogo from '../assets/tech_logo/javascript.png';
import reactLogo from '../assets/tech_logo/reactjs.png';
import nodeLogo from '../assets/tech_logo/nodejs.png';
import mongoLogo from '../assets/tech_logo/mongodb.png';
import tailwindLogo from '../assets/tech_logo/tailwindcss.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';

const Skills = () => {
    const skills = [
        { name: "HTML", img: htmlLogo },
        { name: "CSS", img: cssLogo },
        { name: "JavaScript", img: jsLogo },
        { name: "React", img: reactLogo },
        { name: "Node.js", img: nodeLogo },
        { name: "MongoDB", img: mongoLogo },
        { name: "Tailwind", img: tailwindLogo },
        { name: "Firebase", img: firebaseLogo },
    ];

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-5xl font-bold text-center mb-10">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                    >
                        <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-20 h-20 mx-auto mb-3 object-contain"
                        />
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
