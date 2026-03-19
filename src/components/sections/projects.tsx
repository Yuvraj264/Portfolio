"use client";

import React from "react";
import projects from "@/data/projects";
import ProjectCard from "../project-card";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <BoxReveal width="fit-content">
            <h2
              className={cn(
                "bg-clip-text text-5xl md:text-8xl font-black mb-4",
                "bg-gradient-to-b from-white to-white/20 text-transparent"
              )}
            >
              PROJECTS
            </h2>
          </BoxReveal>
          <BoxReveal width="fit-content">
            <p className="text-white/40 max-w-2xl text-lg font-medium">
              A curated selection of my finest work, blending technology with visual storytelling.
              Each project represents a unique challenge solved with modern architecture.
            </p>
          </BoxReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;
