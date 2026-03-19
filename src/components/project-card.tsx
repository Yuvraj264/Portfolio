"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
        className
      )}
    >
      {/* Top Section: Main Focus Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={project.src || "/assets/projects-screenshots/placeholder.png"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* View Project Button (Reveal on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-110 active:scale-95 shadow-xl"
          >
            View Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
            {project.category}
          </span>
        </div>
        
        <p className="mb-4 line-clamp-2 text-sm text-white/60 leading-relaxed">
          {project.tagline}
        </p>

        {/* Tech Stack Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.skills.frontend.slice(0, 3).map((skill) => (
            <span
              key={skill.title}
              className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-white/80 border border-white/10"
            >
              {skill.title}
            </span>
          ))}
          {project.skills.backend.slice(0, 2).map((skill) => (
            <span
              key={skill.title}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-medium text-blue-400 border border-blue-500/20"
            >
              {skill.title}
            </span>
          ))}
        </div>

        {/* Highlight Tags */}
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-white/30">
              #{tag.replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
