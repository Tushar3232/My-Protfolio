import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, liveLink, githubLink, id } = project;

  return (
    <div className="relative group">
      {/* Animated Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

      {/* Card */}
      <div className="relative bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/50 transition transform hover:-translate-y-2 duration-300">
        
        {/* Image */}
        <img src={image} alt={title} className="h-52 w-full object-cover" />

        {/* Content */}
        <div className="p-5">
          <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies?.map((tech, index) => (
              <span 
                key={index} 
                className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
            <div className="flex gap-3">
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 font-medium hover:underline"
                >
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 font-medium hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
            <Link
              to={`/projects/${id}`}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
