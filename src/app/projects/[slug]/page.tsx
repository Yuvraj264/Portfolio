"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, Zap } from "lucide-react";
import projects from "@/data/projects";
import SlideShow from "@/components/slide-show";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailPage = ({ params }: ProjectPageProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const BASE_PATH = "/assets/projects-screenshots";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-white"
    >
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-2 text-white/60 hover:text-white">
                  <Github className="h-4 w-4" /> Github
                </Button>
              </a>
            )}
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-white text-black hover:bg-white/90">
                Live Demo <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0 opacity-20 blur-[100px]">
          <Image
            src={project.src}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-medium">
              {project.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Image Gallery and Info */}
            <div className="lg:col-span-8 space-y-20">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm overflow-hidden"
              >
                <SlideShow 
                  images={project.screenshots.map(s => `${BASE_PATH}/${project.id}/${s}`)} 
                />
              </motion.div>

              {/* About Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-6">The Challenge</h2>
                <div className="text-lg text-white/70 leading-relaxed">
                  {project.challenge}
                </div>
              </div>

              {/* Advanced Concepts / Architecture */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold border-l-4 border-purple-500 pl-6">Architecture & Systems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.architecture.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <Cpu className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold">Concept {index + 1}</h4>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              {/* Tech Stack */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-400" /> Technology
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Frontend</span>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.frontend.map((skill) => (
                        <div key={skill.title} className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 border border-white/10 text-xs text-white/80">
                          {skill.icon} {skill.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.skills.backend.length > 0 && (
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Backend & Tools</span>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.backend.map((skill) => (
                          <div key={skill.title} className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 border border-blue-500/20 text-xs text-blue-400">
                             {skill.icon} {skill.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500 shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Project Stats Sidebar CTA */}
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-center">
                <h4 className="mb-2 text-xl font-bold leading-tight">Ready to see more?</h4>
                <p className="mb-6 text-white/80 text-sm">Experience the live application or explore the codebase on GitHub.</p>
                <div className="flex flex-col gap-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-white text-black hover:bg-white/90">View Live App</Button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailPage;
