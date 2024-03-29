import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectList } from "../../shared/constants";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="flex w-full flex-col items-center pt-[8rem]"
    >
      {/* Projects Header */}
      <h2 className="border-b-2 border-b-rose-500 text-2xl font-semibold text-rose-500">
        Projects
      </h2>

      {/* Projects Content */}
      <div className="grid grid-cols-2 gap-6 py-8">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            images={project.images}
            features={project.features}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
