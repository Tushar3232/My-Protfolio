import React from "react";
import ProjectData from "../Data/ProjectData";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  const datas = ProjectData;

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-cyan-400">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
