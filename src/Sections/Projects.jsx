import React from "react";
import ProjectData from "../Data/ProjectData";
import ProjectCard from "../Components/ProjectCard";
 // card component import

const Projects = () => {
  const datas = ProjectData;

  return (
    <section className="py-16 bg-base-200" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((project) => (
            <ProjectCard key={project.id} project={project} /> // props পাঠানো হচ্ছে
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
