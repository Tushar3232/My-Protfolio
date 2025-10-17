import React from "react";

const ProjectCard = ({ project }) => {
  const { title, image, description, technologies, liveLink, githubLink } = project;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      {/* Image */}
      <img src={image} alt={title} className="h-52 w-full object-cover" />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
