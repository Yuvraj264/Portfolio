"use client";

import projects from "@/data/projects";
import ProjectCard from "@/components/project-card";

function Page() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4">All Projects</h1>
          <p className="text-white/40 text-lg max-w-2xl">
            A comprehensive list of my work, from enterprise DevOps solutions to interactive 3D experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;

