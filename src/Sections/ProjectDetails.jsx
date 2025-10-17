import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../Data/ProjectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-center mt-10">Project not found!</p>;

  const { title, image, description, technologies, liveLink, githubLink, challenges, futurePlans } = project;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <img src={image} alt={title} className="w-full rounded-xl mb-6" />

      <h3 className="text-2xl font-semibold mb-2">Technology Stack</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{tech}</span>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-2">Description</h3>
      <p className="mb-4">{description}</p>

      <h3 className="text-2xl font-semibold mb-2">Challenges</h3>
      <p className="mb-4">{challenges}</p>

      <h3 className="text-2xl font-semibold mb-2">Future Improvements</h3>
      <p className="mb-4">{futurePlans}</p>

      <div className="flex gap-4 mt-6">
        {liveLink && <a href={liveLink} target="_blank" className="bg-primary text-white px-4 py-2 rounded-lg">Live Demo</a>}
        {githubLink && <a href={githubLink} target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg">GitHub</a>}
      </div>
    </div>
  );
};

export default ProjectDetails;
